import React from 'react';
import {Container, Button, ChatButton, StopButton} from './VideoControls.styles';
import PropTypes from 'prop-types';

const VideoControls = ({ isDisabled, onChatOpen, onStopped }) => {

  const onKeyHandler = e => {
    if (e.key === 'Enter') {
      onChatOpen()
    }
  };

  return (
    <Container onKeyPress={onKeyHandler}>
      <StopButton onClick={onStopped} disabled={isDisabled}>
        <span>STOP</span>
        <i className="material-icons">pause</i>
      </StopButton>
      <Button disabled={isDisabled}>
        <span>SWITCH OFF</span>
        <i className="material-icons">mic_off</i>
      </Button>

      <ChatButton disabled={isDisabled} onClick={onChatOpen}>
        <span>CHAT</span>
        <i className="material-icons">textsms</i>
      </ChatButton>
    </Container>
  )
};

VideoControls.propTypes = {
  isDisabled: PropTypes.bool,
  onChatOpen: PropTypes.func,
  onStopped: PropTypes.func,
};

export default VideoControls;
