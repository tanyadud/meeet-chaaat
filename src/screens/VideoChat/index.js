import React from 'react';
import Peer from 'peerjs';
import io from 'socket.io-client';
import {v4 as uuidv4} from 'uuid';
import {connect} from 'react-redux';
import peerConfig from '../../peer.config';

import {
  Button,
  BoxButton,
  LocalPlayer,
  RemotePlayer,
  CommonPlayer,
  ChatBox,
  Container,
  ChatContainer,
  PeersStat,
  ChatMessagesContainer,
  MyMessage,
  ChatMessage,
  NoMessagesTitle,
  ChatInput,
  ChatButton,
  ChatInputContainer,
  ModalErrorContainer,
  ModalError,
  CloseModal,
  NotFound,
  PeersCount,
  PeersIcon,
  Loader,
  PlayerContainer,
  MobileControls,
  OpenChatIcon,
  CloseChatIcon,
  RoundButton,
  MobileButtons,
  DesktopButtons
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
      .then(() => this.setSocketConnection());
  }

  setPeerConnection = () => {
    return new Promise(resolve => {
      this.peer = new Peer(uuidv4(), peerConfig);

      this.peer.on('open', () => resolve());
      this.peer.on('error', this.onPeerError);
      this.peer.on('call', this.onPeerCall);
    });
  };

  setSocketConnection = () => {
    this.socket = io.connect(process.env.REACT_APP_SOCKET_IO_URL, {
      path: '/io/webrtc',
      query: {
        peerID: this.peer.id,
        peerInfo: JSON.stringify(this.props.user),
      },
    });

    this.socket.on('get-stat', this.onSocketGetStat);
    this.socket.on('close-call', this.onSocketCallEnd);
    this.socket.on('message', this.onSocketGetMessage);
    this.socket.on('connect_error', this.onSocketConnError);
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

    console.log('findCandidate peer ==>', this.peer);
    console.log('findCandidate socket ==>', this.socket);

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
      const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
      this.localVideoRef.current.srcObject = stream;
      this.localVideoRef.current.muted = true;

    } catch (cameraError) {
      this.setState({
        showError: true,
        cameraError
      });
    }
  };

  handleTextInput = e => {
    this.setState({
      textValue: e.target.value,
    });
  };

  onKeyHandler = e => {
    if(e.key === 'Enter'){
      this.sendMessage()
    }
  };

  sendMessage = e => {
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

  toggleMobileChat = () => {
    this.setState({
      showMobileChat: !this.state.showMobileChat
    })
  };

  render() {
    const chatElement = (
      <>
        <ChatMessagesContainer>
          {!this.state.messages || !this.state.messages.length ? (
            <NoMessagesTitle>There is no messages yet</NoMessagesTitle>
          ) : (
            this.state.messages.map((msg) =>
              msg.id === this.peer.id ? (
                <div key={uuidv4()} style={{textAlign: 'right'}}>
                  <MyMessage>{msg.text}</MyMessage>
                </div>
              ) : (
                <div key={uuidv4()}>
                  <ChatMessage>{msg.text}</ChatMessage>
                </div>
              )
            )
          )}
        </ChatMessagesContainer>

        <ChatInputContainer onKeyPress={this.onKeyHandler}>
          <ChatInput
            disabled={!this.state.remotePeerID}
            onChange={this.handleTextInput}
            value={this.state.textValue}
          />
          <ChatButton
            onClick={this.sendMessage}
            disabled={
              !this.state.textValue.trim() || !this.state.remotePeerID
            }
          >
            <span className="material-icons">send</span>
          </ChatButton>
        </ChatInputContainer>
      </>
    );

    const controlsElement = (
      <>
        {

        }
        <DesktopButtons>
          <Button
            onClick={this.findCandidate}
            disabled={this.state.remotePeerID}
          >
            {/*<span className="material-icons">call</span>*/}
            Start
          </Button>
          <Button
            disabled={!this.state.remotePeerID}
            onClick={this.destroyPeer}
          >
            {/*<span className="material-icons">call_end</span>*/}
            Stop
          </Button>
        </DesktopButtons>

        <MobileButtons>
          <RoundButton
            onClick={this.findCandidate}
            disabled={this.state.remotePeerID}
          >
            <span className="material-icons">call</span>
          </RoundButton>
          <RoundButton
            disabled={!this.state.remotePeerID}
            onClick={this.destroyPeer}
          >
            <span className="material-icons">call_end</span>
          </RoundButton>
        </MobileButtons>


        <PeersStat>
          <PeersIcon className="material-icons">people</PeersIcon>
          <PeersCount>{this.state.stat.count}</PeersCount>
        </PeersStat>
      </>
    );

    return (
      <Container>
        {this.state.showError && (
          <ModalErrorContainer>
            <ModalError>
              <CloseModal
                onClick={() => this.setState({showError: false})}
                className="material-icons"
              >
                close
              </CloseModal>
              <p>Camera or microphone not found. Please try again.</p>
            </ModalError>
          </ModalErrorContainer>
        )}
        <CommonPlayer>
          <PlayerContainer>
            <RemotePlayer ref={this.remoteVideoRef} autoPlay/>
            {this.state.progress && <Loader/>}
          </PlayerContainer>

          <PlayerContainer>
            {!this.state.cameraError ? (
              <LocalPlayer ref={this.localVideoRef} autoPlay/>
            ) : (
              <NotFound>Camera or microphone not found</NotFound>
            )}
          </PlayerContainer>

        </CommonPlayer>

        {
          this.state.showMobileChat && (
            <ChatContainer>
              <CloseChatIcon onClick={this.toggleMobileChat} className="material-icons">close</CloseChatIcon>
              {chatElement}
            </ChatContainer>
          )
        }

        {
          !this.state.showMobileChat && (
            <MobileControls>
              <OpenChatIcon
                onClick={this.toggleMobileChat}
                disabled={
                  this.state.cameraError ||
                  this.state.connError ||
                  !this.state.active
                }>
                <span className="material-icons">textsms</span>
              </OpenChatIcon>

              {controlsElement}
            </MobileControls>
          )
        }


        <ChatBox>
          <BoxButton>
            {controlsElement}
          </BoxButton>

          {chatElement}
        </ChatBox>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state?.userReducer?.user,
  };
};

export default connect(mapStateToProps)(VideoChat);
