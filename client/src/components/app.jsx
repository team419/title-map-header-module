import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businessName: `The Red Barn`
    }
  }

  render() {
    return (
      <div id="title-name">Mount Here</div>
    );
  }
};


export default App;
