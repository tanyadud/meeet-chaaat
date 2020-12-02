import React from 'react';

import { MessageText } from './Message.styles';
import PropTypes from 'prop-types';

const Message = ({ value, isOwner }) => {
  return (
    <div style={{ textAlign: isOwner ? 'left' : 'right' }}>
      <MessageText style={{ background: isOwner ? '#AD8DA6' : '820665' }}>
        { value }
      </MessageText>
    </div>
  )
};

Message.propTypes = {
  value: PropTypes.string,
  isOwner: PropTypes.bool
};

export default Message;
