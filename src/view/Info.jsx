import React, { Component } from 'react'
import SkillBox from './SkillBox'

import SkillsJSON from '../media/data/skills.json'

import './info.css'
import photo from '../media/image/photo_alpha.png'

class Info extends Component {

  skillsShown = false;

  selectInfo = () => {
    document.getElementById('infoContainer').style.left = '0';
    document.getElementById('selectInfoButton').style.border = '3px solid white';
    document.getElementById('selectSkillsButton').style.border = '3px solid transparent';
  }

  selectSkills = () => {
    document.getElementById('infoContainer').style.left = '-100%';
    document.getElementById('selectSkillsButton').style.border = '3px solid white';
    document.getElementById('selectInfoButton').style.border = '3px solid transparent';
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

    let main = document.getElementById('main');
    let mainStyles = window.getComputedStyle(main);
    let height = (parseFloat(mainStyles['marginTop']) + parseFloat(mainStyles['marginBottom']) + parseFloat(mainStyles['height'])) * 0.8;

    if(y < height) {
      let pos = parseInt((y / height) * 50);
      
      document.getElementById('photo').style.left = `${pos - 50}%`;
      document.getElementById('photo').style.opacity = `${pos / 100.}`;
      
      document.getElementById('personalBox').style.right = `calc(5em + ${pos - 50}%)`;
      document.getElementById('personalBox').style.opacity = `${pos / 100.}`;
      
      document.getElementById('infoButtons').style.right = `calc(5em + ${pos - 50}%)`;
      document.getElementById('infoButtons').style.opacity = `${pos / 100.}`;

      console.log(pos);
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

  render() {
    return (
      <div id='info'>
        <div id='photo'>
          <img src={photo} alt='' />
        </div>
        <div id='infoButtons'>
          <button id='selectInfoButton' onClick={this.selectInfo}>Info</button>
          <button id='selectSkillsButton' onClick={this.selectSkills}>Skills</button>
        </div>
        <div id='personalBox'>
          <div id='infoContainer'>
            <div id='infoBox'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nulla et officia? Ad beatae sit excepturi nam, at consectetur atque provident in enim tempore aspernatur nisi delectus veniam neque reiciendis?</p>
              <p>Quam quos perspiciatis aliquid maiores modi pariatur, enim odio voluptates accusamus commodi optio ut consectetur in asperiores ratione rerum quae, mollitia ea obcaecati. Autem deserunt sit esse reprehenderit molestiae veritatis?</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, id quos velit neque perferendis ipsum ab enim, veritatis voluptatum tempora quod. Nobis odio quos porro quam ad, distinctio, rem quisquam alias, magni nam vel similique beatae voluptatum qui tempore consectetur perferendis voluptas laboriosam ab ipsum iure illum. Tenetur reiciendis quod quisquam, dolore, provident sint alias molestiae, quia labore cupiditate aspernatur.</p>
              <p>Tempore animi beatae reprehenderit facilis! Veritatis ab iure fuga corporis voluptate consequuntur laudantium, assumenda facere deserunt, cumque deleniti omnis id laborum optio eos, explicabo itaque sunt maiores consequatur et culpa?</p>
            </div>
            <div id='skillsBox'>
              {
                SkillsJSON.map((skill) => {
                  return <SkillBox skillName={skill.name} skillLvl={skill.lvl} key={skill.id} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Info;