import React, { Component } from 'react';
import axios from 'axios';

import './contact.css';

import email from '../../../media/icons/email.png';
import linkedin from '../../../media/icons/linkedin.png';
import discord from '../../../media/icons/discord.png';
import github from '../../../media/icons/github.png';

const ContactInfoBox = (props) => {
  return(

    <a
      id={ props.id }
      className='contactInfoBox'
      href={ props.target }
      aria-label={ props.aria }
      target='_blank'
      rel='noopener noreferrer'
    >
      <img src={ props.img } alt='' loading='lazy' width='auto' height='auto' />
      <div>
        <p>{ props.title }:</p>
        <p>{ props.targetName }</p>
      </div>
    </a>

  )
}

class Contact extends Component {

  state = {
    formName: '',
    formEmail: '',
    formMessage: '',
    submitting: false,
    feedback: ''
  }

  contactFormId = 'SQpIAnaj';
  formSparkURL = `https://submit-form.com/${ this.contactFormId }`;
  
  render() {

    const submitForm = async (event) => {
      event.preventDefault();
      let tempState = { ...this.state };
      tempState['submitting'] = true;
      this.setState(tempState);
      await postSubmission();
    }
  
    const postSubmission = async() => {
      const payload = {
        name: this.state.formName,
        email: this.state.formEmail,
        message: this.state.formMessage
      };
  
      try {
        const result = await axios.post(this.formSparkURL, payload);
        console.log(result);
        this.setState({
          formName: '',
          formEmail: '',
          formMessage: '',
          submitting: false,
          feedback: 'Message sent, thank you 😊'
        });
      }
      catch(error) {
        console.log(error);
        this.setState({
          formName: '',
          formEmail: '',
          formMessage: '',
          submitting: false,
          feedback: 'An error occurred, sorry for the inconvenience 😥'
        });
      }
    }

    const updateFormHandler = (event) => {
      const { id, value } = event.target;
      const formKey = id;
      const updatedFormState = { ...this.state }
      updatedFormState[formKey] = value;
      this.setState(updatedFormState);
    }

    return(
      <div id='contact'>
        <address id='contactInformation'>

          <ContactInfoBox
            id='emailAddress'
            img={ email }
            title='E-mail'
            aria='E-mail me'
            target='mailto:pawelcebula@paceb.dev'
            targetName='pawelcebula@paceb.dev'
          />
          <ContactInfoBox
            id='linkedIn'
            img={ linkedin }
            title='LinkedIn'
            aria='Contact me on LinkedIn'
            target='https://linkedin.com/in/pawelcebula98'
            targetName='pawelcebula98'
          />
          <ContactInfoBox
            id='discord'
            img={ discord }
            title='Discord'
            aria='Contact me on Discord'
            target='https://discord.com/users/271214248107966465'
            targetName='Cebul#4946'
          />
          <ContactInfoBox
            id='github'
            img={ github }
            title='Github'
            aria='Check out my projects on Github'
            target='https://github.com/Golec1998'
            targetName='Golec1998'
          />

        </address>

        <div id='contactForm'>

          <h2>Contact form<span className='blink'>_</span></h2>
          
          <form onSubmit={ submitForm }>
            <input
              id='formName'
              onChange={ updateFormHandler }
              type='text'
              placeholder='Name'
              value={ this.state.formName }
              required
            />
            <input
              id='formEmail'
              onChange={ updateFormHandler }
              type='email'
              placeholder='E-mail'
              value={ this.state.formEmail }
              required
            />
            <textarea
              id='formMessage'
              onChange={ updateFormHandler }
              rows='7'
              placeholder='Message'
              value={ this.state.formMessage }
              required
            />
            <label>All fields are required</label>
            { this.state.submitting ?
              <button className='clicked' disabled>Sending...</button> :
              this.state.feedback === '' ?
                <button>Send</button> :
                <p className='formFeedback'>{ this.state.feedback }</p>}
          </form>

        </div>
      </div>
    );
  }

}

export default Contact;