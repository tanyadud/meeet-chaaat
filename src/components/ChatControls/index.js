import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './ChatControls.styles';
import {Button, StartButton, UsersCounter, Flex} from './ChatControls.styles';

const ChatControls = ({ onStart, onReady, stat, isDisabled, isReady }) => {
  return (
    <Container>
      <Flex>
        {
          isReady ?
            (
              <StartButton
                disabled={isDisabled}
                onClick={onStart}>
                START TALK
                <span className="material-icons">call</span>
              </StartButton>
            ) :
            (
              <StartButton
                disabled={isDisabled}
                onClick={onReady}>
                I AM READY
                <span className="material-icons"> done </span>
              </StartButton>
            )
        }
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
