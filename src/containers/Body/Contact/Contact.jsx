import React, { Component } from 'react';

import './contact.css';

import email from '../../../media/icons/email.png';
import linkedin from '../../../media/icons/linkedin.png';
import discord from '../../../media/icons/discord.png';
import github from '../../../media/icons/github.png';

const ContactInfoBox = (props) => {
  return(

    <div id={ props.id } className='contactInfoBox'>
      <img src={ props.img } alt='' loading='lazy' />
      <div>
      <p>{ props.title }:</p>
      <a href={ props.target } target='_blank' rel='noreferrer'>{ props.targetName }</a>
      </div>
    </div>

  )
}

class Contact extends Component {
  
  shouldComponentUpdate() { return false; }
  
  render() {
    return(
      <div id='contact'>
        <div id='contactInformation'>
          <ContactInfoBox id='emailAddress' img={ email } title='E-mail' target='mailto:pawelcebula@paceb.dev' targetName='pawelcebula@paceb.dev' />
          <ContactInfoBox id='linkedIn' img={ linkedin } title='LinkedIn' target='https://linkedin.com/in/pawelcebula98' targetName='pawelcebula98' />
          <ContactInfoBox id='discord' img={ discord } title='Discord' target='https://discord.com/users/271214248107966465' targetName='Cebul#4946' />
          <ContactInfoBox id='github' img={ github } title='Github' target='https://github.com/Golec1998' targetName='Golec1998' />
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