import React from 'react';
import Peer from 'peerjs';
import io from 'socket.io-client';
import {v4 as uuidv4} from 'uuid';
import {connect} from 'react-redux';
import peerConfig from '../../peer.config';
import Background from '../../common/images/elements.png';
import ChatControls from '../../components/ChatControls';
import ChatInput from '../../components/ChatInput';
import Message from '../../components/Message';
import Modal from '../../components/Modal';
import VideoControls from '../../components/VideoControls';

import {
  Container,
  VideoContainer,
  ChatContainer,
  Video,
  Chat,
  NoMessages,
  ChatOverlay,
  CloseButton,
  MessagesContainer,
  VIDEO_STYLES
} from './VideoChat.styles';

class VideoChat extends React.Component {
  constructor(props) {
    super(props);
    this.localVideoRef = React.createRef();
    this.remoteVideoRef = React.createRef();

    this.peer = null;
    this.socket = null;

    this.state = {
      stat: 0,
      messages: [],
      textValue: '',
      progress: false,
      connError: null,
      showError: false,
      cameraError: null,
      remotePeerID: null,
      showMobileChat: false
    };
  }

  componentDidMount() {
    this.getUserMedia()
      .then(() => this.setPeerConnection())
      .then(() => this.setSocketConnection())
      .catch(cameraError => {
        this.setState({
          showError: true,
          cameraError
        });
      })
  }

  setPeerConnection = () => {
    return new Promise(resolve => {
      this.peer = new Peer(uuidv4(), peerConfig);
      console.log('[PEER] ID:', this.peer.id);

      this.peer.on('open', () => resolve());
      this.peer.on('error', this.onPeerError);
      this.peer.on('call', this.onPeerCall);
    });
  };

  setSocketConnection = () => {
    console.log('setSocketConnection this.peer.id', this.peer.id);
    this.socket = io.connect(process.env.REACT_APP_SOCKET_IO_URL, {
      path: '/main',
      query: {
        peerID: this.peer.id,
        peerInfo: JSON.stringify(this.props.user),
      }
    });

    this.socket.on('get-stat', this.onSocketGetStat);
    this.socket.on('close-call', this.onSocketCallEnd);
    this.socket.on('message', this.onSocketGetMessage);
    this.socket.on('connect_error', this.onSocketConnError);
    this.socket.on('connect_failed', this.onSocketConnError);
    this.socket.on('connection-success', this.onSocketConnect);
    this.socket.on('get-candidate', this.onSocketGetCandidate);
  };

  onPeerError = connError => {
    console.error('[PEER]: Connection error:', connError);
    this.setState({
      connError
    });
  };

  onPeerCall = call => {
    this.setState({remotePeerID: call.peer});
    call.answer(this.localVideoRef.current.srcObject);

    call.on('stream', (remoteStream) => {
      this.remoteVideoRef.current.srcObject = remoteStream;
      this.setState({
        active: true
      });
    });
  };

  onSocketConnect = payload => {
    console.log('onSocketConnect ===> ', payload);
    console.log('[SOCKET]: Connection success. ID:', payload);
  };

  onSocketConnError = connError => {
    this.setState({
      connError
    });
    console.error('[SOCKET]: Connection error:', connError);
  };

  onSocketGetMessage = payload => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          text: payload.message,
          id: payload.from,
        },
      ],
    });
  };

  onSocketCallEnd = () => {
    console.log('[SOCKET]: Receive end of call. Socket ID:', this.socket.id);
    this.remoteVideoRef.current.srcObject = null;

    this.setState({
      active: false,
      messages: [],
      remotePeerID: null,
    });
  };

  onSocketGetCandidate = payload => {
    console.log('[SOCKET]: onSocketGetCandidate', payload)
    this.setState({remotePeerID: payload.remotePeerID});
    this.callToPeer(payload.remotePeerID)
  };

  onSocketGetStat = stat => {
    this.setState({stat});
  };

  findCandidate = async () => {
    this.setState({progress: true});

    if (!this.peer) {
      await this.setPeerConnection();
      this.setSocketConnection();
    }

    console.log('[DEBUG]: findCandidate. Peer ID:', this.peer.id);
    this.emitPeers('get-candidate', this.peer.id);
  };

  callToPeer = async id => {
    const call = this.peer.call(id, this.localVideoRef.current.srcObject);
    call.on('stream', (stream) => {
      this.remoteVideoRef.current.srcObject = stream;
      this.setState({
        active: true,
        progress: false,
      });
    });
  };

  emitPeers = (topic, payload) => {
    this.socket.emit(topic, {
      peerID: payload,
    });
  };

  getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.localVideoRef.current.srcObject = stream;
      this.localVideoRef.current.muted = true;
      return stream
    } catch (error) {
      throw new Error(error.message)
    }
  };

  handleTextInput = textValue => {
    this.setState({
      textValue
    });
  };

  sendMessage = () => {
    if (this.state.textValue.trim()) {
      this.setState({
        textValue: '',
        messages: [
          ...this.state.messages,
          {
            text: this.state.textValue,
            id: this.peer.id,
          },
        ],
      });

      this.socket.emit('message', {
        from: this.peer.id,
        to: this.state.remotePeerID,
        message: this.state.textValue,
      });
    }
  };

  destroyPeer = () => {
    this.peer.destroy();
    this.peer = null;

    this.socket.emit('close-call', {to: this.state.remotePeerID});
    this.setState({
      active: false,
      remotePeerID: null,
      messages: [],
    });
    this.socket.disconnect();
    this.socket = null;
  };

  onModalClose = () => {
    this.setState({
      showError: false
    })
  };

  toggleMobileChat = (value) => {
    this.setState({
      showMobileChat: value
    })
  };

  render() {
    const {showError, cameraError, remotePeerID, stat, messages, textValue, showMobileChat, connError} = this.state;
    return (
      <Container style={{backgroundImage: `url("${Background}")`}}>

        <Modal
          onClose={this.onModalClose}
          isOpen={showError}
        />

        <VideoContainer>


          <>
            {remotePeerID && <Video ref={this.remoteVideoRef} autoPlay/>}
            <Video ref={this.localVideoRef} autoPlay style={remotePeerID ? VIDEO_STYLES : null}/>
          </>

          <div style={{position: 'absolute', bottom: 25, width: '100%'}}>
            <VideoControls
              onStopped={this.destroyPeer}
              isDisabled={Boolean(!this.peer || !this.socket || cameraError || !remotePeerID)}
              onChatOpen={() => this.toggleMobileChat(true)}
            />
          </div>

        </VideoContainer>
        <ChatContainer>
          <div>
            <ChatControls
              isDisabled={Boolean(!this.peer || !this.socket || connError || cameraError || remotePeerID)}
              stat={stat} onStart={this.findCandidate}/>
          </div>

          {
            <ChatOverlay isVisible={showMobileChat}>
              <Chat>
                <CloseButton onClick={() => this.toggleMobileChat(false)}>
                  <span className="material-icons">close</span>
                </CloseButton>
                <MessagesContainer>

                  {!messages || !messages.length ? (
                    <NoMessages>There is no messages yet</NoMessages>
                  ) : (
                    messages.map((msg) =>
                      <Message key={uuidv4()} value={msg.text} isOwner={msg.id === this.peer.id}/>
                    )
                  )}
                </MessagesContainer>

                <div>
                  <ChatInput
                    isSendDisabled={Boolean(!this.state.textValue.trim())}
                    isInputDisabled={Boolean(!this.state.remotePeerID)}
                    onText={this.handleTextInput}
                    onSend={this.sendMessage}
                    value={textValue}
                    placeholder="Write your message"/>
                </div>
              </Chat>
            </ChatOverlay>
          }
        </ChatContainer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state?.userReducer?.user,
  };
};

export default connect(mapStateToProps)(VideoChat);
