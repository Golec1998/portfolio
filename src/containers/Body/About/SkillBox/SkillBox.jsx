import React from 'react';

import './skillBox.css'

const SkillBox = (props) => {
  
  const skillLvls = ['starting', 'beginner', 'junior', 'regular', 'senior'];

  const dots = Array.from({ length: props.skillLvl }, (_, index) => {
    return <div key={ (index + props.skillName) }></div>
  });

  return(
    <div className='skill'>
      <p className='skillName'>{ props.skillName }</p>
      <div className='skillScore'>
        {dots}
      </div>
      <p>{ skillLvls[props.skillLvl - 1] }</p>
    </div>
  )

}

export default SkillBox;