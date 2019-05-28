import React from 'react';
import PropTypes from 'prop-types';

const InfoItem = (props) => {
  const {
    info, pngPath, link,
  } = props;

  if (info && link && pngPath) {
    return (
      <div className="info-item-entry">
        <svg role="img" className="icon-svg" viewBox="0 0 18 18">
          <path d={pngPath} />
        </svg>
        <a href={link}><span>{info}</span></a>
      </div>
    );
  }
  if (info && pngPath) {
    return (
      <div className="info-item-entry">
        <svg role="img" className="icon-svg" viewBox="0 0 18 18">
          <path d={pngPath} />
        </svg>
        <span>{info}</span>
      </div>
    );
  }
  return (
    <div className="info-item-entry no-icon">{info}</div>
  );
};

InfoItem.propTypes = {
  info: PropTypes.string.isRequired,
  pngPath: PropTypes.string,
  link: PropTypes.string,
};

InfoItem.defaultProps = {
  pngPath: '',
  link: '',
};

export default InfoItem;
