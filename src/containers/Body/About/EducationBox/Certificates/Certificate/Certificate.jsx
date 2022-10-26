import React, { Component } from 'react';

import './certificate.css';

class Certificate extends Component {

  shouldComponentUpdate() { return false; }

  render() {
    let certificate = this.props.certificate;

    return(
      <div className='certificate'>
        <h3>{ certificate.name }</h3>
        { certificate.description !== '' ? <p>{ certificate.description }</p> : null }
        <p>Received on { certificate.date }</p>
        { certificate.link !== '' ? <a href={ certificate.link } target='_blank' rel='noopener noreferrer'><button>Check the certification <i className="fa fa-link"></i></button></a> : null }
      </div>
    )
  }

}

export default Certificate;