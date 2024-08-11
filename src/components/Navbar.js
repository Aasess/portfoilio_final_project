// Sandeep Kaur, Bipin Gurung

import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

//REACT-ROUTER-DOM
import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active-nav' : ''
  }

  return (
    <div id="custom-navbar-container">
      <nav className="custom-navbar">
        <ul>
          <li>
            <Link to="/" className={isActive('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className={isActive('/experience')}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className={isActive('/projects')}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
