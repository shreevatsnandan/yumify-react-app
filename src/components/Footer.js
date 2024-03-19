import React from 'react';
import './Footerd.css'

export default function Footer({ onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const scrollToTopAndChangePage = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handlePageChange(page);
  }
  return (
    <div>
      <div className='footer'>
        <div className='about-app'>
        <div className='app-name'>
                <img src='./assets/app-logo.png' alt='logo' className='logo'/>Yumify
            </div>
            <div className='about-app-txt'>Elevating your dining experience, one delivery at a time.</div>

        </div>
        <div className='pages'>
            <h3>Pages</h3>
            <ul>
                <li onClick={() => scrollToTopAndChangePage('Home')}>Home</li>
                <li onClick={() => scrollToTopAndChangePage('Menu')}>Menu</li>
                <li onClick={() => scrollToTopAndChangePage('About Us')}>About-us</li>
            </ul>

        </div>
        <div className='learn-more'>
        <h3>Learn more</h3>
            <ul>
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
            </ul>

        </div>
      </div>
    </div>
  )
}
