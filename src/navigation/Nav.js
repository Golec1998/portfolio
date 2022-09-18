import React, { Component } from 'react';

import './nav.css'

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;