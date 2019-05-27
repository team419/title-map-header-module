import React from 'react';
import $ from 'jquery';
import TitleLeft from './titleLeft';
import TitleRight from './titleRight';
import MapBox from './mapBox';
import Modal from './modals/modal';
import ModalShare from './modals/modalShare';
import ModalSave from './modals/modalSave';
import ModalMap from './modals/modalMap';

import photoCarousel from '../images/photoCarousel.png';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      business: null,
      showModal: false,
    };
    this.assignBusiness = this.assignBusiness.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    $.get({
      url: '/business',
      success: this.assignBusiness,
    });
  }

  assignBusiness(data) {
    this.setState({
      business: data,
    });
  }

  toggleModal() {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const { business, showModal } = this.state;

    if (business) {
      return (
        <div id="title-component">
          {/* <Modal toggleModal={this.toggleModal} modalClass="modal-share" showModal={showModal} content={<ModalShare />} /> */}
          {/* <Modal toggleModal={this.toggleModal} modalClass="modal-save" showModal={showModal} content={<ModalSave />} /> */}
          <Modal toggleModal={this.toggleModal} modalClass="modal-map" showModal={showModal} content={<ModalMap />} />
          <div id="backdrop-grey" />
          <div id="content-container">
            <div id="header">
              <TitleLeft business={business} />
              <TitleRight toggleModal={this.toggleModal} />
            </div>
            <div id="sub-header">
              <MapBox business={business} toggleModal={this.toggleModal} />
              <img id="insert-photo-component-here" alt="carousel" src={photoCarousel} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>Rendering</div>
    );
  }
}

export default App;
