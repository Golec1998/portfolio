import React, { Component } from 'react';

import './contact.css';

class Contact extends Component {
  
  shouldComponentUpdate() { return false; }
  
  render() {
    return(
      <div id='contact'>
        <div id='contactInformation'>
          <div id='emailAddress'>
            <p>E-Mail:</p>
            <a href='mailto:cybertempo3355@gmail.com' target='_blank' rel='noreferrer'>cybertempo3355@gmail.com</a>
          </div>
          <div id='linkedIn'>
            <p>LinkedIn:</p>
            <a href="https://linkedin.com/in/pawelcebula98" target='_blank' rel='noreferrer'>/pawelcebula98</a>
          </div>
          <div id='discord'>
            <p>Discord:</p>
            <a href='https://discord.com/users/271214248107966465' target='_blank' rel='noreferrer'>Cebul#4946</a>
          </div>
        </div>
        <div id='contactForm'>
          <h2>Contact form<span className='blink'>_</span></h2>
          <form action=''>
            <input type='text' placeholder='Name'/>
            <input type='e-mail' placeholder='E-mail'/>
            <textarea name='' id='' rows='7' placeholder='Message'/>
            <button type='button'>Send</button>
          </form>
        </div>
      </div>
    );
  }

}

export default Contact;