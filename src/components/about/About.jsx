import React from 'react'
import './about.css'
import avatar2 from '../../assets/avatar2.png'
import AboutBox from './AboutBox'
import css_logo from '../../assets/css-logo.png'
import html__logo from '../../assets/html5-logo.png'
import javascript__logo from '../../assets/javascript-logo.png'
import react__logo from '../../assets/react-icon.png'
import python__logo from '../../assets/python-logo.png'
import wordpress__logo from '../../assets/logo-wordpress.png'
import illustrator__logo from '../../assets/illustrator-logo.png'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid" >
        <img src={avatar2} alt="" className="about__img" />
        <div className="about__info">
          <p className="about__description">I am Ana Luisa Uribe from Guayaquil, Ecuador (LATAM).  <br></br>
            My journey in tech companies is about to get much more interesting. I've worked as a Project Manager with a lot of WordPress and StartUps over the years. I've worked in development teams and supporting customers. <br></br>
            Finally, coding has always been my passion, so here I am. </p>
          <a href="https://drive.google.com/file/d/1XyApesZ_XjvELw-73DjOrUnYnUKMoING/view?usp=drive_link" className="btn"> Download CV </a>


          <div className="about__skills">
            <h2 className="skills__title">Developer Skills</h2>
            <div className="skills__data">

              <div className="skills__titles ">
                <img src={css_logo} className='skills__img__html'></img>
                <h3 className="skills__name">CSS</h3>
              </div>

              <div className="skills__titles ">
                <img src={html__logo} alt="" className="skills__img__html" />
                <h3 className="skills__name">HTML5</h3>
              </div>

              <div className="skills__titles ">
                <img src={javascript__logo} alt="" className="skills__img__html" />
                <h3 className="skills__name">Javascript</h3>
              </div>

              <div className="skills__titles ">
                <img src={react__logo} alt="" className="skills__img__html" />
                <h3 className="skills__name">React.JS</h3>
              </div>

              <div className="skills__titles ">
                <img src={python__logo} alt="" className="skills__img__html" />
                <h3 className="skills__name">Python</h3>
              </div>
            </div>
          </div>

          <div className="about__skills">
            <h2 className="skills__title">Design Skills</h2>
            <div className="skills__data data__design">

              <div className="skills__titles ">
                <img src={wordpress__logo} className='skills__img__html '></img>
                <h3 className="skills__name2">WordPress</h3>
              </div>

              <div className="skills__titles ">
                <img src={illustrator__logo} alt="" className="skills__img__html" />
                <h3 className="skills__name2">Illustrator</h3>
              </div>

            </div>
          </div>
        </div>

      </div>
      <AboutBox />
    </section>
  )
}

export default About
