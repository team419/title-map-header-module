import React from 'react';
import PropTypes from 'prop-types';

import iconRedStar from '../images/icon-red-star.png';
import iconAddPhoto from '../images/icon-add-photo.png';
import iconShare from '../images/icon-share.png';
import iconSave from '../images/icon-save.png';

const TitleRight = (props) => {
  const { toggleModal } = props;

  return (
    <div className="title" id="title-right">
      <button type="button" id="btn-review">
        <img alt="icon" id="icon-review-star" src={iconRedStar} />
        <strong>
          <span>Write a Review</span>
        </strong>
      </button>

      <button type="button" className="btn-text" id="btn-photo">
        <img alt="icon" className="btn-icon" id="icon-add-img" src={iconAddPhoto} />
        <strong><span>Add Photo</span></strong>
      </button>

      <button type="button" className="btn-text" id="btn-share" onClick={toggleModal}>
        <img alt="icon" className="btn-icon" id="icon-share" src={iconShare} />
        <strong><span>Share</span></strong>
      </button>

      <button type="button" className="btn-text" id="btn-save">
        <img alt="icon" className="btn-icon" id="icon-save" src={iconSave} />
        <strong><span>Save</span></strong>
      </button>
    </div>
  );
};

TitleRight.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default TitleRight;
