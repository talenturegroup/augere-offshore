import React from 'react'
import './Contact.css'
import lagos from "../assets/lagos.jpg"
import Navbar from '../Navbar'
import Footer from '../Footer'

const Contact = () => {
  return (
    <>
    <Navbar />
    <section className='contact-title'>
      <h1>Contact Us</h1>

      <div className="location">
        <h2>Lagos</h2>
        <div className="address">
          <img src={lagos} alt="" />
          <div className="info">
            <p>Augere Offshore</p>
            <p>18A Babatunde Dabiri Street</p>
            <p>Lekki Phase 1, Lagos, Nigeria</p>
            <a href='mailto:hello@augereoffshore.com'>hello@augereoffshore.com</a>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact