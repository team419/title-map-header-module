import React from 'react';
import PropTypes from 'prop-types';
import map from '../images/map.png';
import iconAddress from '../images/icon-address.png';
import iconPhone from '../images/icon-business-phone.png';
import iconBusinessUrl from '../images/icon-business-url.png';
import iconReservation from '../images/icon-reservation.png';
import iconSendPhone from '../images/icon-send-to-phone.png';

const InfoItem = (props) => {
  const { info, iconUrl } = props;

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

const MapBox = (props) => {
  const { business } = props;
  return (
    <div id="map-box-container">
      <img id="map-box-image" alt="map" src={map} />
      <div id="map-box-text">
        <ol>
          <strong><InfoItem id="info-address-street" info={business.addressStreet} iconUrl={iconAddress} /></strong>

          <strong><InfoItem id="address-city-state-zip" info={business.addressCityStateZip} /></strong>
          <InfoItem id="address-between" info={business.addressBetween} />
          <InfoItem id="address-neighborhood" info={business.addressNeighborhood} />

          <div className="info-item"><a href="localhost:3418">Get Directions</a></div>

          <InfoItem id="info-phone-number" info={business.phoneNumber} iconUrl={iconPhone} />
          <InfoItem id="info-url" info={business.url} iconUrl={iconBusinessUrl} />

          {/* <li className="info-item"><a href="localhost:3418">{business.url}</a></li> */}
          <li className="info-item"><a href="localhost:3418">Make a Reservation</a></li>
          <li className="info-item"><a href="localhost:3418">Send to your Phone</a></li>
        </ol>
      </div>
    </div>
  );
};

InfoItem.propTypes = {
  info: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

MapBox.propTypes = {
  business: PropTypes.object.isRequired,
};

export default MapBox;
