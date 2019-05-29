import React from 'react';
import PropTypes from 'prop-types';

const TitleRight = (props) => {
  // refactor needed here to use single toggleModal function
  // const { toggleModal } = props;

  const { toggleModalShare, toggleModalSave } = props;

  return (
    <div className="title" id="title-right">
      <button type="button" id="btn-review">
        <svg role="img" className="icon-svg svg-generic" id="svg-star" viewBox="0 0 24 24">
          <path d="M 12 1.5 l 2.61 6.727 l 6.89 0.53 l -5.278 4.688 l 1.65 7.055 L 12 16.67 L 6.13 20.5 l 1.648 -7.055 L 2.5 8.757 l 6.89 -0.53 L 12 1.5 Z" />
        </svg>
        <strong>
          <span>Write a Review</span>
        </strong>
      </button>

      <button type="button" className="btn-text" id="btn-photo">
        <svg role="img" className="icon-svg svg-generic" id="svg-add-img" viewBox="0 0 18 18">
          <path d="M 15 15 H 3 a 2 2 0 0 1 -2 -2 V 6 a 2 2 0 0 1 2 -2 h 2 a 2 2 0 0 1 2 -2 h 4 a 2 2 0 0 1 2 2 h 2 a 2 2 0 0 1 2 2 v 7 a 2 2 0 0 1 -2 2 Z M 9 4.75 a 4.25 4.25 0 1 0 0 8.5 a 4.25 4.25 0 0 0 0 -8.5 Z M 11 10 h -1 v 1 a 1 1 0 0 1 -2 0 v -1 H 7 a 1 1 0 0 1 0 -2 h 1 V 7 a 1 1 0 0 1 2 0 v 1 h 1 a 1 1 0 0 1 0 2 Z" />
        </svg>
        <strong><span>Add Photo</span></strong>
      </button>

      {/* need refactor for reusable toggleModal */}
      <button type="button" className="btn-text" id="btn-share" onClick={toggleModalShare}>
        <svg role="img" className="icon-svg svg-generic" id="svg-share" viewBox="0 0 18 18">
          <path d="M 17.714 6.43 L 13 10.356 v -3.03 c -1 0 -5.097 1.47 -6.286 3.62 c 0.274 -3.08 4.286 -5.5 6.286 -5.5 V 2.5 l 4.714 3.93 Z M 3 4 v 10 h 11 v -2.5 l 1 -1 V 15 H 2 V 3 h 8.5 l -1 1 H 3 Z" />
        </svg>
        <strong><span>Share</span></strong>
      </button>

      {/* need refactor for reusable toggleModal */}
      <button type="button" className="btn-text" id="btn-save" onClick={toggleModalSave}>
        <svg role="img" className="icon-svg svg-generic" id="svg-save" viewBox="0 0 14 14">
          <path d="M 9 1 H 5 a 2 2 0 0 0 -2 2 v 10 l 4 -3 l 4 3 V 3 a 2 2 0 0 0 -2 -2 Z" />
        </svg>
        <strong><span>Save</span></strong>
      </button>
    </div>
  );
};

TitleRight.propTypes = {
  // need refactor here
  // toggleModal: PropTypes.func.isRequired,
  toggleModalShare: PropTypes.func.isRequired,
  toggleModalSave: PropTypes.func.isRequired,
};

export default TitleRight;
