import React from 'react'
import "./Footer.css"
import logo from "./assets/AO white tp.png"

const Footer = () => {
  return (
    // <footer>
    //         <div class="top">
    //             <img src={logo} alt=""/>
    //             <div class="contact">
    //                 <h2>Contact</h2>
    //                 <div>
    //                     <p>Augere Offshore<br/>18a Babatunde Dabiri Street<br/>Lekki Phase 1, Lagos, Nigeria <br/>
    //                     <a href="mailto:hello@augereoffshore.com ">hello@augereoffshore.com </a></p>
    //                 </div>
    //             </div>
    //             <div class="social">
    //                 <b style={{fontSize:18}}>Follow Us:</b>
    //                 <a href="/"><i class="fa-brands fa-linkedin"></i></a>
    //                 <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
    //             </div>
    //         </div>
    //         <p class="privacy">Copyright <span class="year"></span> © Augere Offshore | <a href="/">Privacy Policy</a></p>
    //     </footer>

    <footer>
        <div className="left">
            <img src={logo} alt="" />
            <p class="privacy">Copyright <span class="year">{new Date().getFullYear()}</span> © Augere Offshore | <a href="/">Privacy Policy</a></p>
        </div>
        <div className="right">
            <div className="social">
            <a href="/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer