import React, { Component } from "react";

import './project.css'
import android from '../../../../media/icons/android.png';
import arduino from '../../../../media/icons/arduino.png';
import cpp from '../../../../media/icons/cpp.png';
import cs from '../../../../media/icons/cs.png';
import firebase from '../../../../media/icons/firebase.png';
import js from '../../../../media/icons/js.png';
import kotlin from '../../../../media/icons/kotlin.png';
import pc from '../../../../media/icons/pc.png';
import python from '../../../../media/icons/python.png';
import react from '../../../../media/icons/react.png';
import room from '../../../../media/icons/room.png';
import unity from '../../../../media/icons/unity.png';
import web from '../../../../media/icons/web.png';

import automobilevents from '../../../../media/videos/automobilevents.webm';

class Project extends Component {

  componentDidMount() {
    let projects = document.getElementsByClassName('project');
    let videos = document.getElementsByTagName('video');
    
    for(let i = 0; i < projects.length; i++) {
      projects[i].addEventListener('mouseover', () => {
        videos[i].play();
      });
      projects[i].addEventListener('mouseleave', () => {
        videos[i].pause();
      });
    }
  }

  render() {
    let tech = (icon) => {
      switch(icon) {
        case 'Android': return android;
        case 'Arduino': return arduino;
        case 'C++': return cpp;
        case 'C#': return cs;
        case 'Firebase': return firebase;
        case 'JavaScript': return js;
        case 'Kotlin': return kotlin;
        case 'PC': return pc;
        case 'Python': return python;
        case 'React.JS': return react;
        case 'Room': return room;
        case 'Unity3D': return unity;
        case 'Web': return web;
        default: return;
      }
    }

    return(
      <div className="project">
        <div className="projVideo">
          <video className="video" loop preload="none">
            <source src={ automobilevents } type="video/webm" />
          </video>
        </div>
        <div className="projHeader">
          <div className="projEnvImg">
            {
              this.props.project.enviorments.map( env => {
                return <img key={ this.props.project.id + env.envType } src={ tech(env.envType) } alt="" />
              })
            }
          </div>
          <div className="projName">{ this.props.project.name }</div>
        </div>
        <div className="projTechStack">
          {
            this.props.project.enviorments.map( env => {
              //return <img key={(this.props.project.id + env.envType)} src={tech(env.envType)} alt="" />
              return env.technologies.map( tec => {
                return <img key={(this.props.project.id + env.envType + tec)} src={tech(tec)} alt="" />
              })
            })
          }
        </div>
      </div>
    );
  }
}

export default Project;