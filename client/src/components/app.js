import React from 'react';
import $ from 'jquery';
import TitleLeft from './titleLeft';
import TitleRight from './titleRight';
import MapBox from './mapBox';

import Modal from './modals/modal';
import ModalShare from './modals/modalShare';
import ModalSave from './modals/modalSave';
import ModalMap from './modals/modalMap';
import ModalDetails from './modals/modalDetails';
import ModalSend from './modals/modalSend';

// import photoCarousel from '../images/photoCarousel.png';
// import yelpHeader from '../images/img-yelp-header.png';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      business: null,
      showModal: null,

      showModalDetails: false,
      showModalShare: false,
      showModalSave: false,
      showModalMap: false,
      showModalSend: false,
    };
    this.assignBusiness = this.assignBusiness.bind(this);
    // this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalOff = this.toggleModalOff.bind(this);

    this.toggleModalDetails = this.toggleModalDetails.bind(this);
    this.toggleModalShare = this.toggleModalShare.bind(this);
    this.toggleModalSave = this.toggleModalSave.bind(this);
    this.toggleModalMap = this.toggleModalMap.bind(this);
    this.toggleModalSend = this.toggleModalSend.bind(this);
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

  // toggleModal() {
  //   const { showModal } = this.state;
  //   this.setState({
  //     showModal: !showModal,
  //   });
  // }

  // Need major refactor to use a single toggleModal function across all modals
  // Possible make event listeners to ensure when a triggering element is clicked,
  // that only the proper modal will be toggled.

  toggleModalOff() {
    this.setState({
      showModal: null,
    });
  }

  toggleModalDetails() {
    const { showModalDetails } = this.state;
    this.setState({
      showModalDetails: !showModalDetails,
    });
  }

  toggleModalShare() {
    const { showModalShare } = this.state;
    this.setState({
      showModalShare: !showModalShare,
    });
  }

  toggleModalSave() {
    const { showModalSave } = this.state;
    this.setState({
      showModalSave: !showModalSave,
    });
  }

  toggleModalMap() {
    const { showModalMap } = this.state;
    this.setState({
      showModalMap: !showModalMap,
    });
  }

  toggleModalSend() {
    const { showModalSend } = this.state;
    this.setState({
      showModalSend: !showModalSend,
    });
  }

  render() {
    const {
      business,
      // showModal,
      showModalDetails,
      showModalShare,
      showModalSave,
      showModalMap,
      showModalSend,
    } = this.state;

    if (business) {
      return (
        <div id="title-component">
          {/* add in line below to goggle on the generic header bar */}
          {/* <img alt="yelp-header" id="yelp-header" src={yelpHeader} /> */}
          <div id="backdrop-grey" />
          <div id="content-container">
            <div id="header-component">
              {/* refactor needed */}
              <TitleLeft
                business={business}
                toggleModalDetails={this.toggleModalDetails}
              />
              <TitleRight
                toggleModalShare={this.toggleModalShare}
                toggleModalSave={this.toggleModalSave}
              />
            </div>
            <div id="sub-header">
              {/* refactor needed */}
              <MapBox
                business={business}
                toggleModalMap={this.toggleModalMap}
                toggleModalSend={this.toggleModalSend}
              />
              {/* line below is the placeholder for photo carousel component */}
              {/* <img id="insert-photo-componentgit a-here" alt="carousel" src={photoCarousel} /> */}
            </div>
          </div>
          {/* Need to refactor modal props for reusable toggleModal function */}
          <Modal toggleModal={this.toggleModalDetails} modalClass="modal-details" showModal={showModalDetails} content={<ModalDetails />} />
          <Modal toggleModal={this.toggleModalShare} modalClass="modal-share" showModal={showModalShare} content={<ModalShare />} />
          <Modal toggleModal={this.toggleModalSave} modalClass="modal-save" showModal={showModalSave} content={<ModalSave />} />
          <Modal toggleModal={this.toggleModalMap} modalClass="modal-map" showModal={showModalMap} content={<ModalMap />} />
          <Modal toggleModal={this.toggleModalSend} modalClass="modal-send" showModal={showModalSend} content={<ModalSend />} />
        </div>
      );
    }
    return (
      <div>Rendering</div>
    );
  }
}

export default App;
