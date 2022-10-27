import React, { Component, Fragment } from 'react';
import ProjectView from './ProjectView/ProjectView';

import './project.css'

import android from '../../../../media/icons/android.png';
import api from '../../../../media/icons/api.png';
import arduino from '../../../../media/icons/arduino.png';
import cpp from '../../../../media/icons/cpp.png';
import cs from '../../../../media/icons/cs.png';
import firebase from '../../../../media/icons/firebase.png';
import js from '../../../../media/icons/js.png';
import kotlin from '../../../../media/icons/kotlin.png';
import pc from '../../../../media/icons/pc.png';
import php from '../../../../media/icons/php.png';
import python from '../../../../media/icons/python.png';
import react from '../../../../media/icons/react.png';
import room from '../../../../media/icons/room.png';
import unity from '../../../../media/icons/unity.png';
import web from '../../../../media/icons/web.png';

import automobilevents from '../../../../media/videos/automobilevents.webm';
import weatherapp from '../../../../media/videos/weatherapp.webm';
import piecehub from '../../../../media/videos/piecehub.webm';
import hydrashootingtrainer from '../../../../media/videos/hydrashootingtrainer.webm';
import sleeptight from '../../../../media/videos/automobilevents.webm';
import drawmaze from '../../../../media/videos/drawmaze.webm';
import lightsout from '../../../../media/videos/lightsout.webm';
import fennotation from '../../../../media/videos/fennotation.webm';
import teacherassistant from '../../../../media/videos/automobilevents.webm';

class Project extends Component {

  shouldComponentUpdate() { return false; }

  componentDidMount() {
    let projects = document.getElementsByClassName('project');
    let videos = document.getElementsByTagName('video');
    
    for(let i = 0; i < projects.length; i++) {
      videos[i].playbackRate = 0.75;

      projects[i].addEventListener('mouseover', () => {
        videos[i].playbackRate = 1.7;
      });
      projects[i].addEventListener('mouseleave', () => {
        videos[i].playbackRate = 0.75;
      });
    }
  }

  render() {
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

    let vid = (projId) => {
      let vids = [
        automobilevents,
        weatherapp,
        piecehub,
        hydrashootingtrainer,
        sleeptight,
        drawmaze,
        lightsout,
        fennotation,
        teacherassistant
      ];
      return vids[projId - 1];
    }

    const showProjectView = (viewId, origin) => {
      document.getElementById(viewId).classList.add('shown');
    }

    return(
      <Fragment>
        <div className='project' onClick={ () => { showProjectView(`projectView${ this.props.project.id }`, this) } }>
          <div className='loadingAnim'>
            <div><div></div></div>
          </div>
          <div className='projVideo'>
            <video className='video' muted loop preload='none' autoPlay>
              <source src={ vid(this.props.project.id) } type='video/webm' />
            </video>
          </div>
          <div className='projHeader'>
            <div className='projName'>{ this.props.project.name }</div>
            <div className='projEnvImg'>
              {
                this.props.project.enviorments.map( env => {
                  return <img key={ this.props.project.id + env.envType } src={ tech(env.envType) } alt='' />
                })
              }
            </div>
          </div>
          <div className='projTechStack'>
            {
              this.props.project.enviorments.map( env => {
                return env.technologies.map( tec => {
                  return <img key={ (this.props.project.id + env.envType + tec) } src={ tech(tec) } alt='' />
                })
              })
            }
          </div>
        </div>
        <ProjectView viewId={`projectView${ this.props.project.id }`} project={ this.props.project } />
      </Fragment>
    );
  }
}

export default Project;