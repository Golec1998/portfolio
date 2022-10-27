import React, { Component } from 'react'
import InfoBox from './InfoBox/InfoBox'
import EducationBox from './EducationBox/EducationBox'
import SkillBox from './SkillBox/SkillBox'

import SkillsJSON from '../../../media/data/skills.json'

import './about.css'
import photo from '../../../media/images/photo_alpha.webp'

class About extends Component {

  state = {
    staticImage: false
  };

  skillsShown = false;

  selectInfo = () => {
    document.getElementById('infoContainer').style.left = '0';
    for(let i = 0; i < 3; i++)
    {
      document.getElementById('infoButtons').getElementsByTagName('button')[i].style.borderTop = '3px solid transparent';
      document.getElementById('infoButtons').getElementsByTagName('button')[i].style.borderBottom = '3px solid transparent';
    }
    document.getElementById('selectInfoButton').style.borderTop = '3px solid white';
    document.getElementById('selectInfoButton').style.borderBottom = '3px solid white';
  }

  selectEducation = () => {
    document.getElementById('infoContainer').style.left = '-100%';
    for(let i = 0; i < 3; i++)
    {
      document.getElementById('infoButtons').getElementsByTagName('button')[i].style.borderTop = '3px solid transparent';
      document.getElementById('infoButtons').getElementsByTagName('button')[i].style.borderBottom = '3px solid transparent';
    }
    document.getElementById('selectEducationButton').style.borderTop = '3px solid white';
    document.getElementById('selectEducationButton').style.borderBottom = '3px solid white';
  }

  selectSkills = () => {
    document.getElementById('infoContainer').style.left = '-200%';
    for(let i = 0; i < 3; i++)
    {
      document.getElementById('infoButtons').getElementsByTagName('button')[i].style.borderTop = '3px solid transparent';
      document.getElementById('infoButtons').getElementsByTagName('button')[i].style.borderBottom = '3px solid transparent';
    }
    document.getElementById('selectSkillsButton').style.borderTop = '3px solid white';
    document.getElementById('selectSkillsButton').style.borderBottom = '3px solid white';
    if(!this.skillsShown) this.appearSkills();
  }

  appearSkills = () => {
    this.skillsShown = true;
    let skills = document.getElementsByClassName('skill');
    for(let i = 0; i < skills.length; i++)
      setTimeout( () => {
        skills[i].style.opacity = 1;
        let dots = skills[i].getElementsByClassName('skillScore')[0].getElementsByTagName('div');
        for(let j = 0; j < dots.length; j++)
          setTimeout( () => { dots[j].style.opacity = 1; },  100 * j + 200);
      } , i * 150 + 300)
  }

  editPhotoPosition = () => {
    let y = window.scrollY;

    let header = document.getElementById('header');
    let headerStyles = window.getComputedStyle(header);
    let height = (parseFloat(headerStyles['marginTop']) + parseFloat(headerStyles['marginBottom']) + parseFloat(headerStyles['height'])) * 0.8;

    if(y < height / 4)
      this.setState({ staticImage: false });
    if(y > height)
      this.setState({ staticImage: true });

    if(y < height && !this.state.staticImage) {
      let pos = parseInt((y / height) * 50);
      
      document.getElementById('photo').style.left = `${pos - 50}%`;
      document.getElementById('photo').style.opacity = `${pos / 100.}`;
      
      document.getElementById('personalBox').style.right = `calc(5em + ${pos - 50}%)`;
      document.getElementById('personalBox').style.opacity = `${pos / 100.}`;
      
      document.getElementById('infoButtons').style.right = `calc(5em + ${pos - 50}%)`;
      document.getElementById('infoButtons').style.opacity = `${pos / 100.}`;
    }
    else {
      document.getElementById('photo').style.left = `0%`;
      document.getElementById('photo').style.opacity = `1`;
      
      document.getElementById('personalBox').style.right = `5em`;
      document.getElementById('personalBox').style.opacity = `1`;
      
      document.getElementById('infoButtons').style.right = `5em`;
      document.getElementById('infoButtons').style.opacity = `1`;
    }
  }

  componentDidMount() {
    this.selectInfo();
    this.editPhotoPosition()

    window.addEventListener('scroll', () => this.editPhotoPosition());
  }

  shouldComponentUpdate() { return false; }

  render() {
    return (
      <main id='about'>
        <div id='photo'>
          <img src={ photo } alt='' />
        </div>
        <div id='infoButtons'>
          <button id='selectInfoButton' onClick={this.selectInfo}>Info</button>
          <button id='selectEducationButton' onClick={this.selectEducation}>Education</button>
          <button id='selectSkillsButton' onClick={this.selectSkills}>Skills</button>
        </div>
        <div id='personalBox'>
          <div id='infoContainer'>
            <InfoBox />
            <EducationBox />
            <div id='skillsBox'>
              {
                SkillsJSON.map((skill) => {
                  return <SkillBox skillName={ skill.name } skillLvl={ skill.lvl } key={ skill.id } />
                })
              }
            </div>
          </div>
        </div>
      </main>
    )
  }

}

export default About;