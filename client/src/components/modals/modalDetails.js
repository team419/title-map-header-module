import React from 'react';
import css from '../../../dist/styles.css';
import imgDetailsModal from '../../images/img-details-modal.png';

// Need refactor to handle dynamic details modal
// import PropTypes from 'prop-types';

const ModalDetails = (/* props */) => (
  <img alt="modal-details" className={css['modal-details']} src={imgDetailsModal} />
);

// need to refactor for dynamic review details
ModalDetails.propTypes = {

};

export default ModalDetails;
