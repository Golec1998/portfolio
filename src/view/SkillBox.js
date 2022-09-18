import React, { Component } from 'react';

import './skillBox.css'

class SkillBox extends Component {
  
  skillName = '';

  componentDidMount() {
    this.skillName = 'Skill';
  }

  render() {
    return(
      <div className='skill'>
        <p>{this.skillName}</p>
        <div className="skillScore">
          <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    )
  }

}

export default SkillBox;