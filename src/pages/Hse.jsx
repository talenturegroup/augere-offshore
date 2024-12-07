import React from 'react'
import "./Hse.css"
import serviceImage from "../assets/service.jpg"
import image6 from "../assets/Image-6.jpg"
import image7 from "../assets/Image-7.jpg"
import image8 from "../assets/Image-8.jpg"
import Navbar from '../Navbar'
import Footer from '../Footer'

const Hse = () => {
  return (
    <>
    <Navbar />
    <section className='hse-title'>
      <h1>HSE</h1>

      <div className="services">
        <img src={image6} alt="" />
        <div className="service">
          <h2>Commitment to Life-Saving Rules in Oil and Gas Operations</h2>
          <p>At Augere Offshore Services, we prioritize safety above all else. We have adopted the nine Life-Saving Rules established by the International Association of Oil & Gas Producers (IOGP) to enhance safety practices across the oil and gas industry. These rules are designed to:</p>
          <ul>
            <li>Promote Standardization: Establish a unified approach to safety that spans the industry.</li>
            <li>Facilitate Knowledge Transfer: Allow for the effective sharing of knowledge, experiences, and lessons learned to foster continuous improvement.</li>
            <li>Enhance Individual Accountability: Increase awareness and ownership among personnel regarding critical safeguards that prevent fatalities and serious injuries. </li>
            <li>Ensure Clarity and Consistency: Provide clear guidelines for contractors and operators working on Augere Offshore Services rigs and facilities.</li>
          </ul>
          <p>Our Life-Saving Rules are integrated into our Management System and are consistently referenced in our operational standards and procedures.</p>
        </div>
      </div>

      <div className="services">
        <div className="service">
          <h2>Safe Systems of Work (SSoW)</h2>
          <p>At Augere Offshore Services, we are dedicated to delivering consistent and effective management of worksite safety, encompassing both personal and process safety. Our Safe Systems of Work framework includes: </p>
          <ul>
            <li>Preventive Measures: Establishing requirements for prevention and mitigation barriers to identify operational hazards. </li>
            <li>Risk Management: Defining relationships between hazards and implementing strategies to manage risks before any work activities commence.</li>
            <li>Minimum Safety Requirements: Our framework outlines five key components that focus on preventing harm to individuals, the environment, and equipment.</li>
          </ul>
        </div>
        <img src={image7} alt="" />
      </div>

      <div className="services">
        <img src={image8} alt="" />
        <div className="service">
          <h2>Behavior-Based Safety Training</h2>
          <p>To further enhance our safety culture, we implement a Behavioral-Based Safety (BBS) Program aimed at preventing incidents and fostering a collaborative safety environment. This program includes:</p>
          <ul>
            <li>Active Observation: We observe personnel at work and engage in open discussions about safety practices. </li>
            <li>Behavior Correction: Unsafe behaviors or conditions are addressed, while positive behaviors are reinforced to promote a culture of safety. </li>
            <li>Respectful Dialogue: We create an environment that encourages respectful conversations about safety, ensuring that everyone feels empowered to contribute to a safer workplace. </li>
          </ul>
        </div>
      </div>

      <div className='conclusion'>
        <p>
          By integrating these comprehensive safety services, Augere Offshore Services is committed to ensuring a secure operational environment for all personnel involved in oil and gas exploration and production. Partner with us to enhance safety and efficiency in your projects. 
        </p>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Hse