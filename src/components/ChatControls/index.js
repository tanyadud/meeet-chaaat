import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './ChatControls.styles';
import {Button, StartButton, UsersCounter, Flex} from './ChatControls.styles';

const ChatControls = ({ onStart, stat, isDisabled }) => {
  console.log('ChatControls', isDisabled );
  return (
    <Container>
      <Flex>
        <StartButton
          disabled={isDisabled}
          onClick={onStart}>
          START TALK
          <span className="material-icons">call</span>
        </StartButton>
      </Flex>

      <Flex>
        <Button disabled={isDisabled}>
          <span className="material-icons">settings</span>
        </Button>
        <UsersCounter isDisabled={isDisabled}>
          <span className="material-icons">people</span> { stat }
        </UsersCounter>
      </Flex>
    </Container>
  )
};

ChatControls.propTypes = {
  onStart: PropTypes.func,
  stat: PropTypes.number,
  isDisabled: PropTypes.bool
};

export default ChatControls;
