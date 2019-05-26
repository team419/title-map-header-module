import React from 'react';
import PropTypes from 'prop-types';
import InfoItem from './infoItem';

import map from '../images/map.png';
import iconAddress from '../images/icon-address.png';
import iconDirections from '../images/icon-get-directions.png';
import iconPhone from '../images/icon-business-phone.png';
import iconBusinessUrl from '../images/icon-business-url.png';
import iconReservation from '../images/icon-reservation.png';
import iconSendPhone from '../images/icon-send-to-phone.png';

const MapBox = (props) => {
  const { business } = props;
  const directions = 'Get Directions';
  const reservation = 'Make a Reservation';
  const send = 'Send to your Phone';
  const link = 'localhost:3418';
  return (
    <div id="map-box-container">
      <img id="map-box-image" alt="map" src={map} />
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
          <InfoItem info={send} iconUrl={iconSendPhone} link={link} />
        </ol>
      </div>
    </div>
  );
};

MapBox.propTypes = {
  business: PropTypes.object.isRequired,
};

export default MapBox;
