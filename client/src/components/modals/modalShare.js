import React from 'react';
import PropTypes from 'prop-types';

const ModalShare = (/* props */) => {
  const message = 'I\'m a share modal!';

  return (
    <div>
      {message}
    </div>
  );
};

// ModalShare.propTypes = {

// };

export default ModalShare;

// // select modal for page share
// const modalShare = document.getElementById('modal-share');
// // button to open share modal
// const modalShareBtn = document.getElementById('btn-share');

// // generic button to close modal
// const modalCloseBtn = document.getElementsByClassName('modal-close-btn');
// returns an array, need to select

// // evenet listeners for modal open and close
// modalShareBtn.addEventListener('click', modalShareOpen);

// modalCloseBtn.addEventListener('click', modalClose);

// // event listener to close modal with outside click
// window.addEventListener('click', modalClose);
