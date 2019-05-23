import React from 'react';
import PropTypes from 'prop-types';
import iconClaimed from '../images/icon-claimed.png';

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
        stars, reviws, modal
      </div>

      <div className="title-left-entry" id="left-entry-2">price, type, edit</div>
    </div>
  );
};

TitleLeft.propTypes = {
  business: PropTypes.object.isRequired,
};

export default TitleLeft;
