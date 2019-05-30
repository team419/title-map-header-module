import React from 'react';
import css from '../../../dist/styles.css';

const imgSaveModal = 'https://s3.us-east-2.amazonaws.com/fec-title-module/images/modal-save.png';

const ModalSave = () => (
  <img alt="modal-save" className={css['modal-save']} src={imgSaveModal} />
);

export default ModalSave;
