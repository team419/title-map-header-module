import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const {
    toggleModal,
    modalClass,
    showModal,
    content,
  } = props;
  // onKeyDown={toggleModal} role="button" tabIndex="0"
  return (
    <div className={`modal ${modalClass}`} style={{ display: showModal ? 'block' : 'none' }}>
      <div className="backdrop" onClick={toggleModal} />
      <div className="modal-content">
        {content}
        <span className="modal-close-btn">x</span>
      </div>
    </div>
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func,
  modalClass: PropTypes.string,
  showModal: PropTypes.bool,
  content: PropTypes.element,
};

Modal.defaultProps = {
  toggleModal: () => false,
  modalClass: '',
  showModal: false,
  content: <div>Empty Default Modal</div>,
};

export default Modal;
