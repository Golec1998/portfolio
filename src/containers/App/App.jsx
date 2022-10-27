import React, { Component, Fragment } from 'react';

import Body from '../Body/Body';
import Nav from '../../components/Nav/Nav';

import '../../index.css';
import '../../fa/css/all.min.css';

import ParticlesBG from '../../components/ParticlesBG/ParticlesBG';

class App extends Component {

  render() {

    return(
      <Fragment>
        <ParticlesBG />

        <Body />

        <Nav />
      </Fragment>
    );

  }

}

export default App;