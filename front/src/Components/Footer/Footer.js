import React from 'react'
import './FooterStyle.css'

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-top'>
          <div className='top-1'>
            <h1>eX</h1>
            <p>We Choose best music for you</p>
          </div>
          <div className='top-2'>
              <a href='https://www.facebook.com/im.monukumar/'>
                <i className='fa-brands fa-facebook-square'></i>
              </a>
              <a href='https://instagram.com/im.monukumar/'>
                <i className='fa-brands fa-instagram-square'></i>
              </a>
              <a href='https://www.linkedin.com/in/monukumar012/'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
              <a href='https://github.com/Monukumar012'>
                <i className='fa-brands fa-github-square'></i>
              </a>
          </div>
      </div>
      <div className='footer-middle'>
        <div className='middle-div'>
          <h2>Links</h2>
          <a href='/'>Home</a>
          <a href='/'>Contact</a>
          <a href='/'>About</a>
        </div>
        <div className='middle-div'>
          <h2>Category</h2>
          <a href='/motivational'>Motivational</a>
          <a href='/slow-vibes'>Slow-Vibe</a>
          <a href='/customize'>Customize</a>
        </div>
        <div className='middle-div'>
          <h2>Links</h2>
          <a href='/'>Home</a>
          <a href='/'>Contact</a>
          <a href='/'>About</a>
        </div>
      </div>
      <div className='footer-bottom'>
      <p>&copy; {new Date().getFullYear()} X. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer