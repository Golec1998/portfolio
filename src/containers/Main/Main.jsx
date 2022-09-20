import React, { Component } from 'react'

import './main.css'

class Main extends Component {

  state = {
    header: '',
    headerLength: 0,
    h3style: {
      opacity: '0'
    }
  }

  headerText = 'Paweł Cebula'.split('');

  componentDidMount() {
    setTimeout(() => {
      setInterval(() => {
        if(this.state.headerLength >= this.headerText.length)
        {
          clearInterval(this);
          this.setState({ h3style: { opacity: 1, transition: 'all 2s' } });
        }
        let headerLength = this.state.headerLength + 1;
        this.setState({
          header: this.headerText.slice(0, headerLength).join(''),
          headerLength: headerLength
        })
      }, 250);
    }, 750);
  }

  render() {

    return (
      <div id='main'>
        <h1>{this.state.header}<span className='blink'>_</span></h1>
        <h3 style={this.state.h3style}>Web developer</h3>
      </div>
    )
  }

}

export default Main;