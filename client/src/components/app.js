import React from 'react';
import $ from 'jquery';

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

  consoleFunc(data) {
    console.log(data);
  }

  assignBusiness(data) {
    this.setState({
      business: data,
    });
  }

  render() {
    return (
      <div id="title-name">Mount Here</div>
    );
  }
}

export default App;
