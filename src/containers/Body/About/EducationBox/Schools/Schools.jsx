import React, { Component } from 'react';
import School from './School/School';

import './schools.css';

class Schools extends Component {

  shouldComponentUpdate() { return false; }

  render() {
    return(
      <div id='schools'>
        <h2>Schools:</h2>
        { this.props.schoolList.map( school => {
          return <School school={ school } key={ school.id } />
        }) }
      </div>
    )
  }

}

export default Schools;