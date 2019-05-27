import React from 'react';
import $ from 'jquery';
import TitleLeft from './titleLeft';
import TitleRight from './titleRight';
import MapBox from './mapBox';
import ModalShare from './modals/modalShare';
import photoCarousel from '../images/photoCarousel.png';
import Modal from './modals/modal';


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
          <Modal toggleModal={this.toggleModal} modalClass="modal-share" showModal={showModal} content={<ModalShare />} />
          <div id="backdrop-grey" />
          <div id="content-container">
            <div id="header">
              <TitleLeft business={business} />
              <TitleRight toggleModal={this.toggleModal} />
            </div>
            <div id="sub-header">
              <MapBox business={business} />
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
