import React from 'react'
import './about.css'
import avatar2 from '../../assets/avatar2.png'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid" >
        <img src={avatar2} alt="" className="about__img" />
        <div className="about__info">
          <p className="about__description">I am Ana Luisa Uribe from Guayaquil, Ecuador (LATAM).  <br></br>
          My journey in tech companies is about to get much more interesting. I've worked as a Project Manager with a lot of WordPress and StartUps over the years. I've worked in development teams and supporting customers. <br></br>
          Finally, coding has always been my pation, so here I am. </p>
          <a href="https://drive.google.com/file/d/1VYhFWuFTNk_fH6N_9EzKf7kzV5H-q7Rv/view?usp=sharing" className="btn"> Download CV </a>
        </div>

        <div className="about__skills grid">
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">Development</h3>
            <span className="skills__number">since 2023</span>
          </div>

        </div>
        </div>
        
        <div className="about__skills grid">
        <div className="skills__data">
          <div className="skills__titles">
            <h3 className="skills__name">WordPress / Project Management</h3>
            <span className="skills__number">since 2019</span>
          </div>
        </div>
        </div>

      </div>
      <AboutBox />
    </section>
  )
}

export default About
