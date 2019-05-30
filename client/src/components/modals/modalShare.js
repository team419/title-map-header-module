import React from 'react';
import css from '../../../dist/styles.css';

const imgShareModal = 'https://s3.us-east-2.amazonaws.com/fec-title-module/images/modal-share.png';

const ModalShare = () => (
  <img alt="modal-share" className={css['modal-save']} src={imgShareModal} />
);

export default ModalShare;
