import React from 'react';
import css from '../../../dist/styles.css';

const imgDetailsModal = 'https://s3.us-east-2.amazonaws.com/fec-title-module/images/img-details-modal.png';

// Need refactor to handle dynamic details modal
// import PropTypes from 'prop-types';

const ModalDetails = (/* props */) => (
  <img alt="modal-details" className={css['modal-details']} src={imgDetailsModal} />
);

// need to refactor for dynamic review details
ModalDetails.propTypes = {

};

export default ModalDetails;
