import React from 'react'
import './home.css'

const HeaderSocials = () => {
  return (

    <div className="home__socials">
        <a href="https://www.instagram.com/aluribeb/" className="home__social-link" target='_blank'>
        <i className="fa-brands fa-instagram"></i>
        </a>
        
        <a href="https://github.com/aluribeb" className="home__social-link" target='_blank'>
        <i className="fa-brands fa-github"></i>
        </a>
      
        <a href="https://wa.me/message/IW4BXW5NFWMDM1" className="home__social-link" target='_blank'>
        <i className="fa-brands fa-whatsapp"></i>
        </a>

    </div>
  )
}

export default HeaderSocials
