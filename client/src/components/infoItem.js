import React from 'react';
import PropTypes from 'prop-types';
import css from '../../dist/styles.css';

const InfoItem = (props) => {
  const {
    info, pngPath, link,
  } = props;

  if (info && link && pngPath) {
    return (
      <div className={css['info-item-entry']}>
        <svg role="img" className={css['svg-generic']} viewBox="0 0 18 18">
          <path d={pngPath} />
        </svg>
        <a className={css['anchor-link']} href={link}><span>{info}</span></a>
      </div>
    );
  }
  if (info && pngPath) {
    return (
      <div className={css['info-item-entry']}>
        <svg role="img" className={css['svg-generic']} viewBox="0 0 18 18">
          <path d={pngPath} />
        </svg>
        <span>{info}</span>
      </div>
    );
  }
  return (
    <div className={`${css['info-item-entry']} ${css['no-icon']}`}>{info}</div>
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
