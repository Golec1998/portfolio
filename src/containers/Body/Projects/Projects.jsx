import React, { Component } from 'react';
import Project from './Project/Project';

import ProjectsJSON from '../../../media/data/projects.json'

import './projects.css';

class Projects extends Component {
  
  shouldComponentUpdate() { return false; }
  
  render() {
    return(
      <div id='projects'>
        {
          ProjectsJSON.map( project => {
            return <Project project={ project } key={ project.id } />
          })
        }
      </div>
    );
  }

}

export default Projects;