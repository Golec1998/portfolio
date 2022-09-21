import React, { Component } from 'react';

import './nav.css'
import aboutIcon from '../../media/icons/about.png'
import projectsIcon from '../../media/icons/projects.png'
import contactIcon from '../../media/icons/contact.png'

class Nav extends Component {

  selectView = (view) => {
    let buttons = document.getElementsByClassName('menuButton');
    for(let i = 0; i < buttons.length; i++)
      buttons[i].classList.remove('menuButtonActive');
    if(view != 'x') {
      document.getElementById(view + 'Button').classList.add('menuButtonActive');
    }
  }

  scrollTo = (view) => {
    let main = document.getElementById('main');
    let mainStyles = window.getComputedStyle(main);
    let height = (parseFloat(mainStyles['marginTop']) + parseFloat(mainStyles['marginBottom']) + parseFloat(mainStyles['height']));
    window.scrollTo(0, view * height);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let main = document.getElementById('main');
      let mainStyles = window.getComputedStyle(main);
      let height = (parseFloat(mainStyles['marginTop']) + parseFloat(mainStyles['marginBottom']) + parseFloat(mainStyles['height']));

      let breakpointValue = 0.75;

      this.selectView('x');
      if(window.scrollY > height * breakpointValue)
        this.selectView('about');
      if(window.scrollY > height * (breakpointValue + 1))
        this.selectView('projects');
      if(window.scrollY > height * (breakpointValue + 2))
        this.selectView('contact');
    });
  }

  render() {
    return (
      <nav>
        <ul id='menu'>
          <li><div className='menuButton' id='aboutButton' onClick={ () => { this.scrollTo(1) } }><div>About</div><div><img src={aboutIcon} alt="" /></div></div></li>
          <li><div className='menuButton' id='projectsButton' onClick={ () => { this.scrollTo(2) } }><div>Projects</div><div><img src={projectsIcon} alt="" /></div></div></li>
          <li><div className='menuButton' id='contactButton' onClick={ () => { this.scrollTo(3) } }><div>Contact</div><div><img src={contactIcon} alt="" /></div></div></li>
        </ul>
      </nav>
    );
  }

}

export default Nav;