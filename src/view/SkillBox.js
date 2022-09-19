import React from 'react';

import './skillBox.css'

const SkillBox = (props) => {
  
  const skillLvls = ['starting', 'beginner', 'junior', 'regular', 'senior'];

  // const appearLvl = () => {
  //   let skills = document.getElementsByClassName('skill');
  //   let dots = skill.getElementsByClassName('skillScore')[0].getElementsByTagName('div');
  //   for(let i = 0; i < 5; i++)
  //     setTimeout(() => { dots[i].style.opacity = 1 }, i * 100);
  // }

  // const createDots = () => {
  //   for(let i = 0; i < parseInt(props.skillLvl); i++) React.createElement('div', null, '')
  // }

  const dots = Array.from({length: props.skillLvl}, () => {return <div></div>});

  return(
    <div className='skill'>
      <p className='skillName'>{props.skillName}</p>
      <div className='skillScore'>
        {dots}
      </div>
      <p>{skillLvls[props.skillLvl - 1]}</p>
    </div>
  )

}

export default SkillBox;