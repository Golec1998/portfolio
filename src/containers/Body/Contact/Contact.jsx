import React, { Component } from 'react';

import './contact.css';

import email from '../../../media/icons/email.png';
import linkedin from '../../../media/icons/linkedin.png';
import discord from '../../../media/icons/discord.png';
import github from '../../../media/icons/github.png';

const ContactInfoBox = (props) => {
  return(

    <a id={ props.id }  className='contactInfoBox' href={ props.target } aria-label={ props.aria } target='_blank' rel='noreferrer'>
      <img src={ props.img } alt='' loading='lazy' />
      <div>
        <p>{ props.title }:</p>
        <p>{ props.targetName }</p>
      </div>
    </a>

  )
}

class Contact extends Component {
  
  shouldComponentUpdate() { return false; }
  
  render() {
    return(
      <div id='contact'>
        <div id='contactInformation'>
          <ContactInfoBox id='emailAddress' img={ email } title='E-mail' aria='E-mail me' target='mailto:pawelcebula@paceb.dev' targetName='pawelcebula@paceb.dev' />
          <ContactInfoBox id='linkedIn' img={ linkedin } title='LinkedIn' aria='Contact me on LinkedIn' target='https://linkedin.com/in/pawelcebula98' targetName='pawelcebula98' />
          <ContactInfoBox id='discord' img={ discord } title='Discord' aria='Contact me on Discord' target='https://discord.com/users/271214248107966465' targetName='Cebul#4946' />
          <ContactInfoBox id='github' img={ github } title='Github' aria='Check out my projects on Github' target='https://github.com/Golec1998' targetName='Golec1998' />
        </div>
        <div id='contactForm'>
          <h2>Contact form<span className='blink'>_</span></h2>
          <form action=''>
            <input type='text' placeholder='Name' required/>
            <input type='e-mail' placeholder='E-mail' required/>
            <textarea name='' id='' rows='7' placeholder='Message' required/>
            <label>All fields are required</label>
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }

}

export default Contact;