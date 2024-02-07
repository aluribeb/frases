import React from 'react'
import './contact.css'

const Contacts = () => {
  return (
    <>
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in Touch!</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact__details">Don't like forms? Send me an email! :) </p>
          <button onClick={() => { window.open('mailto:luisauribeblum@gmail.com?subject=I%20was%20in%20your%20portfolio'); }} className='contact__email'  >Send Email</button>

        </div>
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Name' />
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Email' />
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="What's up?" />
          </div>
          <div className="contact__form-div">
          <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          className="contact__form-input"
          placeholder='Please, write your cool message here. '>
          </textarea>
          </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
    </>
  )
}

export default Contacts
