import React from 'react';
import $ from 'jquery';
import TitleLeft from './titleLeft';
import TitleRight from './titleRight';
import MapBox from './mapBox';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: null,
    };
    this.assignBusiness = this.assignBusiness.bind(this);
  }

  componentDidMount() {
    console.log('mounted');

    $.get({
      url: '/business',
      success: this.assignBusiness,
    });
  }

  // consoleFunc(data) {
  //   console.log(data);
  // }

  assignBusiness(data) {
    this.setState({
      business: data,
    });
  }

  render() {
    const { business } = this.state;
    console.log('rendering');
    if (business) {
      return (
        <div id="title-component">
          <div id="content-container">
            <div id="header">
              <TitleLeft business={business} />
              <TitleRight />
            </div>
            <div id="sub-header">
              <MapBox business={business} />
              <div id="insert-photo-component-here">insert-photo-component-here</div>
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
