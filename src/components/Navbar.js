import React from 'react';
import './Navbard.css';

export default function Navbar({ onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const scrollToTopAndChangePage = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handlePageChange(page);
  };

  return (
    <div>
      <div className='nav'>
        <div className='app-name' onClick={() => scrollToTopAndChangePage('Home')}>
          <img src='.\assets\app-logo.png' alt='logo' className='logo' />Yumify
        </div>
        <div className='page-navigate'>
          <ul>
          <li onClick={() => scrollToTopAndChangePage('Home')}>Home</li>
            <li onClick={() => scrollToTopAndChangePage('Menu')}>Menu</li>
            <li onClick={() => scrollToTopAndChangePage('About Us')}>About Us</li>
          </ul>
        </div>
        <div className='table-book'>
          <button className='bk-table' onClick={() => scrollToTopAndChangePage('Book Table')}>Book Table</button>
        </div>
      </div>
    </div>
  );
}
