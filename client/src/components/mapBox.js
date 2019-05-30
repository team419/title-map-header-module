/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';
import InfoItem from './infoItem';
import css from '../../dist/styles.css';

const map = 'https://s3.us-east-2.amazonaws.com/fec-title-module/images/map.png';
const png = {
  address: 'M 14 7 A 5 5 0 0 0 4 7 c 0 1.97 1.15 3.658 2.806 4.472 h -0.17 L 9 16 l 2.363 -4.528 h -0.17 C 12.85 10.658 14 8.97 14 7 Z M 9 5 a 2 2 0 1 1 0 4 a 2 2 0 0 1 0 -4 Z',
  directions: 'M 16.444 7.556 l -5.957 -5.958 a 2.145 2.145 0 0 0 -3.034 0 L 1.598 7.453 a 2.145 2.145 0 0 0 0 3.034 l 5.958 5.957 a 2 2 0 0 0 2.828 0 l 6.06 -6.06 a 2 2 0 0 0 0 -2.828 Z M 9.97 11.47 v -2.5 h -3 v 3 h -1 v -4 h 4 v -2.5 l 3 3 l -3 3 Z',
  phone: 'M 15.862 12.526 l -2.91 -1.68 a 0.442 0.442 0 0 0 -0.486 0.087 l -1.58 1.687 a 0.857 0.857 0 0 1 -0.52 0.232 s -1.083 0.03 -3.13 -1.985 c -2.046 -2.015 -2.054 -3.12 -2.054 -3.12 c 0 -0.17 0.094 -0.41 0.21 -0.533 L 6.85 5.656 a 0.49 0.49 0 0 0 0.08 -0.504 L 5.295 2.14 c -0.073 -0.155 -0.228 -0.18 -0.345 -0.058 L 2.26 4.924 a 1.07 1.07 0 0 0 -0.248 0.53 s -0.34 2.927 3.75 6.955 c 4.093 4.025 6.96 3.59 6.96 3.59 c 0.167 -0.027 0.4 -0.148 0.516 -0.27 l 2.684 -2.845 c 0.117 -0.123 0.09 -0.285 -0.062 -0.36 Z',
  url: 'M 14 15 H 4 c -0.55 0 -1 -0.45 -1 -1 V 4 c 0 -0.55 0.45 -1 1 -1 h 3 v 1 H 4 v 10 h 10 v -3 h 1 v 3 c 0 0.55 -0.45 1 -1 1 Z m -5.12 -4.465 L 7.463 9.12 l 3.83 -3.827 L 9 3 h 6 v 6 l -2.293 -2.293 l -3.828 3.828 Z',
  reservation: 'M 13.6 16 H 4.4 C 3.077 16 2 14.88 2 13.5 v -9 C 2 3.12 3.077 2 4.4 2 H 5 a 1 1 0 0 1 2 0 h 4 a 1 1 0 0 1 2 0 h 0.6 C 14.923 2 16 3.12 16 4.5 v 9 c 0 1.38 -1.077 2.5 -2.4 2.5 Z M 15 7 H 3 v 6.5 c 0 0.828 0.627 1.5 1.4 1.5 h 9.2 c 0.773 0 1.4 -0.672 1.4 -1.5 V 7 Z m -5 3 h 3 v 3 h -3 v -3 Z',
  send: 'M 9 16 H 1 a 1 1 0 0 1 -1 -1 V 1 a 1 1 0 0 1 1 -1 h 8 a 1 1 0 0 1 1 1 v 14 a 1 1 0 0 1 -1 1 Z M 9 2.463 A 0.463 0.463 0 0 0 8.537 2 H 1.463 A 0.463 0.463 0 0 0 1 2.463 v 11.074 c 0 0.256 0.207 0.463 0.463 0.463 h 7.074 A 0.463 0.463 0 0 0 9 13.537 V 2.463 Z M 5 13.5 a 1.15 1.15 0 1 1 0 -2.3 a 1.15 1.15 0 0 1 0 2.3 Z',
};

// need to define png
const MapBox = (props) => {
  const { business, toggleModalMap, toggleModalSend } = props;
  const directions = 'Get Directions';
  const reservation = 'Make a Reservation';
  const send = 'Send to your Phone';
  const link = 'localhost:3418';
  return (
    <div id="map-box-container">
      <img id="map-box-image" alt="map" src={map} onClick={toggleModalMap} />
      <div id="map-box-text">
        <ol className={css['map-box-list']}>
          <strong><InfoItem info={business.addressStreet} pngPath={png.address} /></strong>
          <strong><InfoItem info={business.addressCityStateZip} /></strong>
          <InfoItem info={business.addressBetween} />
          <InfoItem info={business.addressNeighborhood} />
          <InfoItem info={directions} pngPath={png.directions} link={link} />
          <InfoItem info={business.phoneNumber} pngPath={png.phone} />
          <InfoItem info={business.url} pngPath={png.url} link={link} />
          <InfoItem info={reservation} pngPath={png.reservations} link={link} />
          <div onClick={toggleModalSend}>
            <InfoItem info={send} pngPath={png.send} link={link} />
          </div>
        </ol>
      </div>
    </div>
  );
};

MapBox.propTypes = {
  business: PropTypes.object.isRequired,
  toggleModalMap: PropTypes.func.isRequired,
  toggleModalSend: PropTypes.func.isRequired,
};

export default MapBox;
