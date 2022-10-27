import React, { Component } from 'react';
import Certificate from './Certificate/Certificate';

import './certificates.css';

class Certificates extends Component {

  shouldComponentUpdate() { return false; }

  render() {
    return(
      <div id='certificates'>
        <h2>Certificates:</h2>
        { this.props.certificateList.map( certificate => {
          return <Certificate certificate={ certificate } key={ certificate.id } />
        }) }
      </div>
    )
  }

}

export default Certificates;