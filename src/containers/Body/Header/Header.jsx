import React, { Component } from 'react';

import './header.css';

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

    window.addEventListener('scroll', () => setArrowVisibility());

    const setArrowVisibility = () => {
      let y = window.scrollY;
      y > 20 ? document.getElementById('downArrow').classList.remove('arrowShown') : document.getElementById('downArrow').classList.add('arrowShown');;
    }

    setTimeout(() => {
      let interval = setInterval(() => {
        if(this.state.headerLength >= this.headerText.length)
        {
          clearInterval(interval);
          this.setState({ pstyle: { opacity: 1, transition: 'all 2s' } });
          document.getElementById('menu').classList.add('menuShown');
          document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
          document.getElementById('downArrow').classList.add('arrowShown');
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
        <i id='downArrow' class="fa-solid fa-arrow-down" onClick={ () => {
          let header = document.getElementById('header');
          let headerStyles = window.getComputedStyle(header);
          let headerHeight = (parseFloat(headerStyles['marginTop']) + parseFloat(headerStyles['marginBottom']) + parseFloat(headerStyles['height']));
          window.scrollTo(0, headerHeight);
        } } />
      </header>
    )
  }

}

export default Header;