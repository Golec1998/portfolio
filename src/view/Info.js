import React, { Component } from 'react'
import SkillBox from './SkillBox'

import './info.css'
import photo from '../media/image/photo_alpha.png'

class Info extends Component {

  selectInfo = () => {
    document.getElementById('infoContainer').style.left = '0';
    document.getElementById('selectInfoButton').style.border = '3px solid white';
    document.getElementById('selectSkillsButton').style.border = '3px solid transparent';
  }

  selectSkills = () => {
    document.getElementById('infoContainer').style.left = '-100%';
    document.getElementById('selectSkillsButton').style.border = '3px solid white';
    document.getElementById('selectInfoButton').style.border = '3px solid transparent';
  }

  appearInfo = () => {

  }

  componentDidMount() {
    this.selectInfo();
  }

  render() {
    return (
      <div id='info'>
        <img src={photo} alt='' />
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
              <SkillBox />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Info;