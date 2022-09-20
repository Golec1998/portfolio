import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Main from '../Main/Main';
import Info from '../Info/Info';

import '../../index.css'

class App extends Component {
  render() {
    return(
      <div>
        <Nav />
        <Main />
        <Info />
      </div>
    );
  }
}

export default App;