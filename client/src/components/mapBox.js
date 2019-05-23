import React from 'react';
import PropTypes from 'prop-types';
import map from '../images/map.png';

const InfoItem = (props) => {
  const { info } = props;
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
      <img id="img-map" alt="map" src={map} />
      <ol>
        <strong><InfoItem id="info-address-street" info={business.addressStreet} /></strong>
        <strong><InfoItem id="address-city-state-zip" info={business.addressCityStateZip} /></strong>
        <InfoItem id="address-between" info={business.addressBetween} />
        <InfoItem id="address-neighborhood" info={business.addressNeighborhood} />
        <li className="info-item"><a href="localhost:3418">Get Directions</a></li>
        <InfoItem id="info-phone-number" info={business.phoneNumber} />
        <li className="info-item"><a href="localhost:3418">{business.url}</a></li>
        <li className="info-item"><a href="localhost:3418">Make a Reservation</a></li>
        <li className="info-item"><a href="localhost:3418">Send to your Phone</a></li>
      </ol>
    </div>
  );
};

InfoItem.propTypes = {
  info: PropTypes.string.isRequired,
};

MapBox.propTypes = {
  business: PropTypes.object.isRequired,
};

export default MapBox;
