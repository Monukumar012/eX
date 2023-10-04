import React from 'react';
import './FooterStyle.css';
import {Link} from 'react-router-dom';

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
          <Link to='/'>Home</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>About</Link>
        </div>
        <div className='middle-div'>
          <h2>Category</h2>
          <Link to='/motivational'>Motivational</Link>
          <Link to='/slow-vibes'>Slow-Vibe</Link>
          <Link to='/melodious'>Melodious</Link>
        </div>
        <div className='middle-div'>
          <h2>Links</h2>
          <Link to='/'>Home</Link>
          <Link to='/library'>Librery</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
      <div className='footer-bottom'>
      <p>&copy; {new Date().getFullYear()} X. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer