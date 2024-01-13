import React from 'react'
import './home.css'
import avatarImage from '../../assets/avatar1-01.png'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section>
        <Shapes/>
    
    <section className='home__container' id='home'>
 
      <div>
        <img src={avatarImage} className='home__img'></img>
        <h1 className="home__name">Ana Luisa Uribe</h1>
        <span className="home__education">I'm a Front-End Developer </span>
        <HeaderSocials />
        <a href="#contact" className="btn">Hire Me!</a>
        <ScrollDown/>
      </div>
    </section>
    </section>
  )
}

export default Home
