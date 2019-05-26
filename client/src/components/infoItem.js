import React from 'react';
import PropTypes from 'prop-types';

const InfoItem = (props) => {
  const {
    info, iconUrl, link,
  } = props;

  if (link && iconUrl) {
    return (
      <div className="info-item-icon">
        <img className="icon" alt="icon" src={iconUrl} />
        <a href={link}><span>{info}</span></a>
      </div>
    );
  }
  if (iconUrl) {
    return (
      <div className="info-item-icon">
        <img className="icon" alt="icon" src={iconUrl} />
        <span>{info}</span>
      </div>
    );
  }
  return (
    <div>
      <div className="info-item">{info}</div>
    </div>
  );
};

InfoItem.propTypes = {
  info: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  link: PropTypes.string,
};

InfoItem.defaultProps = {
  iconUrl: '',
  link: '',
};

export default InfoItem;
