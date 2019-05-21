import React from 'react';
import PropTypes from 'prop-types';

const MapBox = (props) => {
  const { business } = props;
  return (
    <div id="map-box-container">
      <ul><b>{business.addressStreet}</b></ul>
      <ul><b>{business.addressCityStateZip}</b></ul>
      <ul>{business.addressBetween}</ul>
      <ul>{business.addressNeighborhood}</ul>
      <ul>Get Directions</ul>
      <ul>{business.phoneNumber}</ul>
      <ul>{business.url}</ul>
      <ul>Make a Reservation</ul>
      <ul>Send to your Phone</ul>
    </div>
  );
};

MapBox.propTypes = {
  business: PropTypes.object.isRequired,
};

export default MapBox;
