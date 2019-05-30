import React from 'react';
import css from '../../../dist/styles.css';

const imgSendModal = 'https://s3.us-east-2.amazonaws.com/fec-title-module/images/img-send-modal.png';

const ModalSend = (/* props */) => (
  <img alt="modal-send" className={css['modal-send']} src={imgSendModal} />
);

export default ModalSend;
