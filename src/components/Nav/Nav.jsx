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
    if(view !== 'x') {
      document.getElementById(view + 'Button').classList.add('menuButtonActive');
    }
  }

  scrollTo = (view) => {
    let main = document.getElementById('main');
    let about = document.getElementById('about');
    let projects = document.getElementById('projects');

    let mainStyles = window.getComputedStyle(main);
    let aboutStyles = window.getComputedStyle(about);
    let projectsStyles = window.getComputedStyle(projects);

    let mainHeight = (parseFloat(mainStyles['marginTop']) + parseFloat(mainStyles['marginBottom']) + parseFloat(mainStyles['height']));
    let aboutHeight = (parseFloat(aboutStyles['marginTop']) + parseFloat(aboutStyles['marginBottom']) + parseFloat(aboutStyles['height']));
    let projectsHeight = (parseFloat(projectsStyles['marginTop']) + parseFloat(projectsStyles['marginBottom']) + parseFloat(projectsStyles['height']));

    switch(view) {
      case 1: window.scrollTo(0, mainHeight); break;
      case 2: window.scrollTo(0, mainHeight + aboutHeight); break;
      case 3: window.scrollTo(0, mainHeight + aboutHeight + projectsHeight); break;
      default: break;
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let main = document.getElementById('main');
      let about = document.getElementById('about');
      let projects = document.getElementById('projects');

      let mainStyles = window.getComputedStyle(main);
      let aboutStyles = window.getComputedStyle(about);
      let projectsStyles = window.getComputedStyle(projects);

      let mainHeight = (parseFloat(mainStyles['marginTop']) + parseFloat(mainStyles['marginBottom']) + parseFloat(mainStyles['height']));
      let aboutHeight = (parseFloat(aboutStyles['marginTop']) + parseFloat(aboutStyles['marginBottom']) + parseFloat(aboutStyles['height']));
      let projectsHeight = (parseFloat(projectsStyles['marginTop']) + parseFloat(projectsStyles['marginBottom']) + parseFloat(projectsStyles['height']));

      let breakpointValue = 0.75;

      if(window.scrollY > mainHeight + aboutHeight + projectsHeight * breakpointValue)
        this.selectView('contact');
      else if(window.scrollY > mainHeight + aboutHeight * breakpointValue)
        this.selectView('projects');
      else if(window.scrollY > mainHeight * breakpointValue)
        this.selectView('about');
      else
        this.selectView('x');
    });
  }

  shouldComponentUpdate() { return false; }

  render() {
    return (
      <nav>
        <ul id='menu'>
          <li><div className='menuButton' id='aboutButton' onClick={ () => { this.scrollTo(1) } }><div>About</div><div><img src={aboutIcon} alt='' /></div></div></li>
          <li><div className='menuButton' id='projectsButton' onClick={ () => { this.scrollTo(2) } }><div>Projects</div><div><img src={projectsIcon} alt='' /></div></div></li>
          <li><div className='menuButton' id='contactButton' onClick={ () => { this.scrollTo(3) } }><div>Contact</div><div><img src={contactIcon} alt='' /></div></div></li>
        </ul>
      </nav>
    );
  }

}

export default Nav;