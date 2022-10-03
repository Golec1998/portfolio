import React, { Component, Fragment } from 'react';

import './projectView.css';

class ProjectView extends Component {

  shouldComponentUpdate() {
    return false;
  }

  closeView = () => {
    document.getElementById(this.props.viewId).classList.remove('shown');
  }

  render () {
    return(
      <div id={this.props.viewId} className='projectView'>
        <div className='closeView' onClick={ () => { this.closeView() } }><p>X</p></div>
        <h2 className='projectViewName'>{ this.props.project.name }</h2>
        <div className='technologies'>
          { this.props.project.enviorments.map( env => {
            return (
              <div className='technology'>
                <p>{ env.envType }:</p><a href={ env.github }>{ env.github }</a>
              </div>
            );
          }) }
        </div>
      </div>
    );
  }

}

export default ProjectView;