import React, { Component } from 'react';
import Schools from './Schools/Schools';
import Certificates from './Certificates/Certificates';

import educationJSON from '../../../../media/data/education.json';

import './educationBox.css'

class EducationBox extends Component {

  shouldComponentUpdate() { return false; }

  render() {
    return(
      <div id='educationBox'>
        <Schools schoolList={ educationJSON.schools } />
        <Certificates certificateList={ educationJSON.certificates } />
      </div>
    );
  }

}

export default EducationBox;