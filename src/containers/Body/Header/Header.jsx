import React, { Component } from 'react'

import './header.css'

class Header extends Component {

  state = {
    header: '>',
    headerLength: 1,
    pstyle: {
      opacity: '0'
    }
  }

  headerText = '>Paweł Cebula'.split('');

  componentDidMount() {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 0) {
      document.getElementById('menu').classList.add('menuShown');
      document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
    }

    setTimeout(() => {
      let interval = setInterval(() => {
        if(this.state.headerLength >= this.headerText.length)
        {
          clearInterval(interval);
          this.setState({ pstyle: { opacity: 1, transition: 'all 2s' } });
          document.getElementById('menu').classList.add('menuShown');
          document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
        }
        let headerLength = this.state.headerLength + 1;
        this.setState({
          header: this.headerText.slice(0, headerLength).join(''),
          headerLength: headerLength
        })
      }, 250);
    }, 1000);
  }

  render() {

    return (
      <header id='header'>
        <h1>{ this.state.header }<span className='blink'>_</span></h1>
        <p className='subHeader' style={ this.state.pstyle }>Web developer</p>
      </header>
    )
  }

}

export default Header;