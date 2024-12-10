import React from 'react'
import "./About.css"
import image1 from "../assets/Image-1.jpg"
import image2 from "../assets/Image-2.jpg"
import image3 from "../assets/Image-3.jpg"
import image9 from "../assets/Image-9.jpg"
import Navbar from '../Navbar'
import Footer from '../Footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <section className='about-title'>
      <div className="about-banner">
        <img src={image1} alt="" />
        <h1>About Augere Offshore</h1>
        <p>Augere Offshore Services Limited (AOSL) stands at the forefront of offshore and deepwater drilling sector in West Africa, offering innovative and sustainable solutions to the oil and gas industry.</p>
      </div>

      <div className="services">
        <img src={image9} alt="" />
        <div className="service">
          <h2>DRIVING INNOVATION AND EXCELLENCE IN OFFSHORE AND deepwater DRILLING</h2>
          <p>Augere Offshore Services Limited (AOSL) stands at the forefront of the Offshore and Deepwater drilling sector in Nigeria, offering innovative and sustainable solutions to the oil and gas industry.</p>
          <p>As a next-generation company, AOSL is dedicated to responsibly delivering energy that powers the world, positioning itself as a leader in a wide spectrum of customers well program requirements</p>
        </div>
      </div>

      <div className="services">
        <div className="service">
          <h2>REDEFINING Offshore and Deepwater DRILLING</h2>
          <p>At AOSL, our core mission is to provide responsible drilling services that resonate with global demands. This commitment drives our operations and defines our identity as a new generation offshore and offshore drilling contractor. We harness cutting-edge technology and a skilled workforce to ensure our services meet the highest standards</p>
          <p>Through our joint venture partnerships, AOSL offers operators access to an extensive rig fleet, including ultra-deepwater drill ships, versatile semisubmersibles and jack up’s rigs. Our diverse capabilities enable us to cater to a wide array of well program requirements, ensuring that we meet the unique needs of each client.</p>
        </div>
        <img src={image2} alt="" />
      </div>

      <div className="services">
        <img src={image3} alt="" />
        <div className="service">
          <h2>Leading with Excellence</h2>
          <p>Safety and quality are at the heart of everything we do at AOSL. We are committed to setting new benchmarks in customer satisfaction, which reflects the dedication and hard work of our team and partners both locally and globally. Our unwavering focus on these principles ensures that we deliver exceptional service and maintain the highest operational standards in offshore drilling.</p>
          <p>We are your committed partner in delivering energy responsibly and effectively. Join us as we lead the way in transforming the drilling landscape in Nigeria and beyond.</p>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default About