import React, { Component } from 'react'

import './main.css'

class Main extends Component {
  render() {
    return (
      <div id='main'>
        <h1>Paweł <span className='accentTxt'>Ce</span>bula<span className='blink'>_</span></h1>
        <h3>Web <span className='accentTxt'>dev</span>eloper</h3>
      </div>
    )
  }
}

export default Main;