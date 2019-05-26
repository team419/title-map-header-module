import React from 'react';
import PropTypes from 'prop-types';

const ModalMap = (/* props */) => {
  const message = 'I\'m a map modal!';

  return (
    <div className="modal" id="modal-map">
      <div className="backdrop" />
      <div className="modal-content">
        <span className="modal-close-btn">x</span>
        {message}
      </div>
    </div>
  );
};

ModalMap.propTypes = {

};

export default ModalMap;

// select modal for page share
const modalMap = document.getElementById('modal-map');
// button to open share modal
const modalMapBtn = document.getElementById('map-box-image');

// generic button to close modal
const modalCloseBtn = document.getElementsByClassName('modal-close-btn'); // returns an array, need to select

// evenet listeners for modal open and close
modalMapBtn.addEventListener('click', modalMapOpen);

modalCloseBtn.addEventListener('click', modalClose);

// event listener to close modal with outside click
window.addEventListener('click', modalClose);
