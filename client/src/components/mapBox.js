import React from 'react';
import PropTypes from 'prop-types';
import map from '../images/map.png';

const InfoItem = (props) => {
  const { info } = props;
  return (
    <li className="info-item">{info}</li>
  );
};

const MapBox = (props) => {
  const { business } = props;
  return (
    <div id="map-box-container">
      <img id="img-map" alt="map" src={map} />
      <ul>
        <strong><InfoItem id="info-address-street" info={business.addressStreet} /></strong>
        {/* <li><b>{business.addressStreet}</b></li> */}
        <li><b>{business.addressCityStateZip}</b></li>
        <li>{business.addressBetween}</li>
        <li>{business.addressNeighborhood}</li>

        <li className="info-item ">Get Directions</li>
        <InfoItem id="info-phone-number" info={business.phoneNumber} />
        {/* <li>{business.phoneNumber}</li> */}

        <InfoItem id="info-url" info={business.url} />
        {/* <li className="link-redirect">{business.url}</li> */}
        <li className="info-item">Make a Reservation</li>
        <li className="info-item">Send to your Phone</li>
      </ul>
    </div>
  );
};

InfoItem.propTypes = {
  info: PropTypes.object.isRequired,
};

MapBox.propTypes = {
  business: PropTypes.object.isRequired,
};

export default MapBox;
