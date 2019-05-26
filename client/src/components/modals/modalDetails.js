import React from 'react';
import PropTypes from 'prop-types';

const ModalDetails = (/* props */) => {
  const message = 'I\'m a map modal!';

  return (
    <div className="modal" id="modal-details">
      <div className="backdrop" />
      <div className="modal-content">
        <span className="modal-close-btn">x</span>
        {message}
      </div>
    </div>
  );
};

ModalDetails.propTypes = {

};

export default ModalDetails;

// select modal for page share
const modalDetails = document.getElementById('modal-details');
// button to open share modal
const modalDetailsBtn = document.getElementById('btn-details-modal');

// generic button to close modal
const modalCloseBtn = document.getElementsByClassName('modal-close-btn'); // returns an array, need to select

// evenet listeners for modal open and close
modalDetailsBtn.addEventListener('click', modalDetailsOpen);

modalCloseBtn.addEventListener('click', modalClose);

// event listener to close modal with outside click
window.addEventListener('click', modalClose);
