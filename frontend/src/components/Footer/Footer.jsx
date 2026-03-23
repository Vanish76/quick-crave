import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='tomatologofooter' src={assets.logo} alt="" />
            <p>is your go-to destination for fast, fresh, and flavorful meals delivered right to your doorstep.
               Whether you're craving local delights or international cuisine, we've got something for every palate.</p>
          
        </div>
        <div className="footer-content-center">
            <h2>DISCOVER </h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
              <li>01970-245299</li>
              <li>Quickcrave@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
    
    </div>
  )
}

export default Footer