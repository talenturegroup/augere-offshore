import React from 'react'
import "./Navbar.css"
import logo from './assets/AO white tp.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check"/>
            <label for="check" class="checkbtn">
                <i class="fa-solid fa-bars"></i>
            </label>
      <Link to="/"><img className="logo" src={logo} alt=""/></Link>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/hse">HSE</Link></li>
        <li><Link to="/sustainability">Sustainability</Link></li>
        <li><Link to="/insights">Insights</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
  </nav>
  )
}

export default Navbar