import React, { Component } from 'react';
import Nav from './navigation/Nav';
import Main from './view/Main';
import Info from './view/Info';

import './index.css'

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