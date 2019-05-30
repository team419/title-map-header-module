import React from 'react';
import css from '../../../dist/styles.css';

const sfImgMapModal = 'https://s3.us-east-2.amazonaws.com/fec-title-module/images/img-sf-map-modal.png';

const ModalMap = () => (
  <img alt="modal-map" className={css['modal-map']} src={sfImgMapModal} />
);

export default ModalMap;
