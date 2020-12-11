import React from 'react';
import {Overlay, Container, CloseButton} from './Modal.styles';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, text }) => {
  return (
    isOpen &&
    <Overlay>
      <Container>
        <p>{ text }</p>
        <CloseButton onClick={onClose}>
          <span className="material-icons">close</span>
        </CloseButton>
      </Container>
    </Overlay>
  )
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;
