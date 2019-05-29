import React from 'react';
import PropTypes from 'prop-types';

// Need refactor to dynamic rendering of modals
// possibly set all modals to this single file, and only ever display the relevant one
// could set the click handler to initialize state with the name of the proper module.
// Then, dynamically render the modal currently listed in state.

const Modal = (props) => {
  const {
    toggleModal,
    modalClass,
    showModal,
    content,
  } = props;

  return (
    <div className={`modal ${modalClass}`} style={{ display: showModal ? 'block' : 'none' }}>
      <div className="backdrop" onClick={toggleModal} onKeyDown={toggleModal} role="button" tabIndex="0" />
      <div className={`modal-content ${modalClass}`}>
        {content}
        {/* <span className="modal-close-btn">x</span> */}
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
