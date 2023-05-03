import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='icons-footer'>
          <div>
            <h3>
            Sign up to get 10% off your first order
            </h3>
            <input type='text' placeholder='enterr your email'/>
            <button className='subscribe'>Subscribe</button>
          </div>
      <div className='icons'>
      <img className='icon' src='icons/facebook.svg' alt="facebook icon"/> 
      <img className='icon' src='icons/twitter.svg' alt="facebook icon"/>
      <img className='icon' src='icons/instagram.svg' alt="facebook icon"/>
      </div>
     <h2>Download our application</h2>
      <div className='icons'>
      <img className='icon' src='icons/app-store-ios.svg' alt="facebook icon"/>
      <img className='icon' src='icons/google-play.svg' alt="facebook icon"/>
      </div>
      </div>
     
      <div className='footer-p1'>
        <h2>
          HELP
        </h2>
        <p className='p1'>Contact Us</p>
        <p className='p1'>FAQ</p>
        <p className='p1'>Accessibility</p>
        <p className='p1'>Satisfaction</p>
      </div>
      <div className='footer-p2'>
        <h2>
          ABOUT
        </h2>
        <p className='p2'>Reviews</p>
        <p className='p2'>Affiliate Program</p>
        <p className='p2'>Help center</p>
        <p className='p2'>Careers</p>
      </div>
    </div>
  )
}

export default Footer
