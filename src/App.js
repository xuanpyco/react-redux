import React, { Component } from 'react';
import ContactContainer from './containers/ContactContainer';

class App extends Component {

  render() {
    const {contacts} = this.props;
    return (
      <ContactContainer />
    );
  }
}

export default App;
