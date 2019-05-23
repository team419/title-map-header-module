import React from 'react';
import PropTypes from 'prop-types';
import iconClaimed from '../images/icon-claimed.png';
import ratingFourStar from '../images/rating-four-star.png';

const TitleLeft = (props) => {
  const { business } = props;

  return (
    <div className="title" id="title-left">
      <div className="title-left-entry" id="left-entry-0">
        <h1 id="title-left-business-name">{business.name}</h1>
        <img id="icon-claimed" alt="claimed" src={iconClaimed} />
        <span id="title-business-claimed">Claimed</span>
      </div>

      <div className="title-left-entry" id="left-entry-1">
        <img alt="rating" id="img-rating" src={ratingFourStar} />
        <span id="review-count">487 reviews</span>
        <button type="button" id="btn-details-modal">
          <svg role="img" className="icon-svg" id="svg-histogram" viewBox="0 0 14 14">
            <path d="M 9 11 V 5 h 2 v 6 H 9 Z M 6 3 h 2 v 8 H 6 V 3 Z M 3 7 h 2 v 4 H 3 V 7 Z" />
          </svg>
          <span>Details</span>
        </button>
      </div>

      <div className="title-left-entry" id="left-entry-2">
        price, type, edit
      </div>
    </div>
  );
};

TitleLeft.propTypes = {
  business: PropTypes.object.isRequired,
};

export default TitleLeft;
