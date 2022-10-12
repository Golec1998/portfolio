import React, { Component } from 'react';

import './school.css';

import logozsti from '../../../../../../media/logos/logozsti.webp';
import logoms from '../../../../../../media/logos/logoms.webp';

class School extends Component {

  logo = (index) => {
    let logos = [logoms, logozsti];
    return logos[index - 1];
  }

  shouldComponentUpdate() { return false; }

  render() {
    let school = this.props.school;

    return(
      <div className='school'>
        <img src={ this.logo(school.id) } alt='' loading='lazy' />
        <div className='schoolInfo'>
          <h3>{ school.schoolName }</h3>
          { school.faculty !== '' ? <h4>{ school.faculty }</h4> : null }
          <p>{ `${school.startYear} - ${school.endYear}` }</p>
          <h4>Field: { school.field }</h4>
          <h4>Specialization: { school.specialization }</h4>
        </div>
      </div>
    )
  }

}

export default School;