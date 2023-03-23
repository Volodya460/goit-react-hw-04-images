// import React, { PureComponent } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ closeModal, showModal }) {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.closeEscModal);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.closeEscModal);
  // }

  useEffect(() => {
    window.addEventListener('keydown', closeEscModal);
    return () => {
      window.removeEventListener('keydown', closeEscModal);
    };
  });

  const closeEscModal = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <div>
      <Overlay onClick={handleBackDropClick}>
        <ModalWindow>
          <img src={showModal} alt="" />
        </ModalWindow>
      </Overlay>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  showModal: PropTypes.string.isRequired,
};
