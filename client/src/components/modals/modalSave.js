import React from 'react';
import PropTypes from 'prop-types';

const ModalSave = (/* props */) => {
  const message = 'I\'m a save modal!';

  return (
    <div className="modal" id="modal-save">
      <div className="backdrop" />
      <div className="modal-content">
        <span className="modal-close-btn">x</span>
        {message}
      </div>
    </div>
  );
};

ModalSave.propTypes = {

};

export default ModalSave;

// select modal for page save
const modalSave = document.getElementById('modal-save');
// button to open save modal
const modalSaveBtn = document.getElementById('btn-save');

// generic button to close modal
const modalCloseBtn = document.getElementsByClassName('modal-close-btn'); // returns an array, need to select

// evenet listeners for modal open and close
modalSaveBtn.addEventListener('click', modalSaveOpen);

modalCloseBtn.addEventListener('click', modalClose);

// event listener to close modal with outside click
window.addEventListener('click', modalClose);
