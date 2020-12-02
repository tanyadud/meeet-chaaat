import React from 'react';
import { Container, Input, Button } from './ChatInput.styles';
import PropTypes from 'prop-types';

const ChatInput = ({ isSendDisabled, isInputDisabled, value, placeholder, onText, onSend }) => {
  return (
    <Container>
      <Input disabled={isInputDisabled}
             type="text" value={value}
             placeholder={placeholder}
             onChange={({ target }) => onText(target.value)} />

      <Button onClick={onSend}
              disabled={isSendDisabled}>
        <span className="material-icons">send</span>
      </Button>
    </Container>
  )
};

ChatInput.propTypes = {
  isSendDisabled: PropTypes.bool,
  isInputDisabled: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onText: PropTypes.func,
  onSend: PropTypes.func
};

export default ChatInput;
