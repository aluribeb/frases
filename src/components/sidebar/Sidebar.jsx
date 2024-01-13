import React from 'react'
import "./sidebar.css"
import Logo from '../../assets/Logo.png'

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='nav___logo'>
        <img className='nav__logo-img' src={Logo} alt='logo kluvo'/>
      </a>
    <nav className='nav'>
        <div className='nav__menu'>
          <ul className="nav__list">
            <li className="nav__item">
              <a href='#home' className='nav__link'>
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href='#about' className='nav__link'>
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href='#services' className='nav__link'>
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href='#resume' className='nav__link'>
              <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href='#portfolio' className='nav__link'>
              <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href='#contact' className='nav__link'>
              <i className="icon-bubbles"></i>
              </a>
            </li>
          </ul>

        </div>
      </nav>
    <div className='nav__footer'>
      <span className="copyright"> &copy;<span className='must_be'>_</span>2024 </span>
    </div>
    </aside>
  )
}

export default Sidebar
