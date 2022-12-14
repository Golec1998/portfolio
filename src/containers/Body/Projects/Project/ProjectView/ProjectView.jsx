import React, { Component } from 'react';

import './projectView.css';

import android from '../../../../../media/icons/android.png';
import api from '../../../../../media/icons/api.png';
import arduino from '../../../../../media/icons/arduino.png';
import cpp from '../../../../../media/icons/cpp.png';
import cs from '../../../../../media/icons/cs.png';
import firebase from '../../../../../media/icons/firebase.png';
import js from '../../../../../media/icons/js.png';
import kotlin from '../../../../../media/icons/kotlin.png';
import pc from '../../../../../media/icons/pc.png';
import php from '../../../../../media/icons/php.png';
import python from '../../../../../media/icons/python.png';
import react from '../../../../../media/icons/react.png';
import room from '../../../../../media/icons/room.png';
import unity from '../../../../../media/icons/unity.png';
import web from '../../../../../media/icons/web.png';

class ProjectView extends Component {

  shouldComponentUpdate() {
    return false;
  }

  closeView = () => {
    document.getElementById(this.props.viewId).classList.remove('shown');
  }

  render () {
    let tech = (icon) => {
      switch(icon) {
        case 'Android': return android;
        case 'API': return api;
        case 'Arduino': return arduino;
        case 'C++': return cpp;
        case 'C#': return cs;
        case 'Firebase': return firebase;
        case 'JavaScript': return js;
        case 'Kotlin': return kotlin;
        case 'PC': return pc;
        case 'PHP': return php;
        case 'Python': return python;
        case 'React.JS': return react;
        case 'Room': return room;
        case 'Unity3D': return unity;
        case 'Web': return web;
        default: return;
      }
    }

    return(
      <div id={ this.props.viewId } className='projectView'>
        <div className='closeView' onClick={ () => { this.closeView() } }><p>X</p></div>
        <h2 className='projectViewName'>{ this.props.project.name }</h2>
        <p className='projectViewLanguages'>Project languages: { this.props.project.projectLanguages.map( lang => {
          return(lang)
        }) }</p>
        { this.props.project.description.split('|').map( (desc, index) => {
          return(
            <p className='projectViewDescription' key={ this.props.project.name + 'desc' + index }>{ desc }</p>
          )
        }) }
        <div className='technologies'>
          { this.props.project.enviorments.map( env => {
            return (
              <div className='technology' key={ `tech${ this.props.id + env.envType }` }>
                <img loading='lazy' src={ tech(env.envType) } alt='' width='auto' height='auto' />
                <div className='techInfo'>
                  <h3>{ env.envType }:</h3>
                  <a href={ env.github } target='_blank' rel='noopener noreferrer' aria-label={ `Repository link for ${ env.envType } version of ${ this.props.project.name }` }>{ env.github }</a>
                  <div className='techImages'>
                    { env.technologies.map( technology => {
                      return (
                        <img loading='lazy' src={ tech(technology) } alt='' key={ `tech${ this.props.id + env.envType + technology }` } width='auto' height='auto' />
                      )
                    }) }
                  </div>
                </div>
              </div>
            );
          }) }
        </div>
      </div>
    );
  }

}

export default ProjectView;