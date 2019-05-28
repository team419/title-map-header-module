/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';
import InfoItem from './infoItem';

import map from '../images/map.png';
import iconAddress from '../images/imgIgnore/icon-address.png';
import iconDirections from '../images/imgIgnore/icon-get-directions.png';
import iconPhone from '../images/imgIgnore/icon-business-phone.png';
import iconBusinessUrl from '../images/imgIgnore/icon-business-url.png';
import iconReservation from '../images/imgIgnore/icon-reservation.png';
import iconSendPhone from '../images/imgIgnore/icon-send-to-phone.png';

const MapBox = (props) => {
  const { business, toggleModalMap, toggleModalSend } = props;
  const directions = 'Get Directions';
  const reservation = 'Make a Reservation';
  const send = 'Send to your Phone';
  const link = 'localhost:3418';
  return (
    <div id="map-box-container">
      {/* disabled some linting errors here - see above */}
      <img id="map-box-image" alt="map" src={map} onClick={toggleModalMap} />
      <div id="map-box-text">
        <ol>
          <strong><InfoItem info={business.addressStreet} iconUrl={iconAddress} /></strong>
          <strong><InfoItem info={business.addressCityStateZip} /></strong>
          <InfoItem info={business.addressBetween} />
          <InfoItem info={business.addressNeighborhood} />
          <InfoItem info={directions} iconUrl={iconDirections} link={link} />
          <InfoItem info={business.phoneNumber} iconUrl={iconPhone} />
          <InfoItem info={business.url} iconUrl={iconBusinessUrl} link={link} />
          <InfoItem info={reservation} iconUrl={iconReservation} link={link} />
          <div onClick={toggleModalSend}>
            <InfoItem info={send} iconUrl={iconSendPhone} link={link} />
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
