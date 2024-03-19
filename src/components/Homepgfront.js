import React from 'react'
import './Homepagefrontd.css';

export default function Homepgfront({ onPageChange }) {
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
        <div className='bgf'>
            <div className='content'>
                <div className='front-head'>Best food for<br></br>
                    your taste</div>
                <div className='sub-head'>Discover delectable cuisine and unforgettable moments <br></br>in our welcoming, culinary haven.</div>
                <div className='front-btn'>
                    <button className='bk-table' onClick={() => scrollToTopAndChangePage('Book Table')}>Book Table</button>
                    <button className='bk-table' onClick={() => scrollToTopAndChangePage('Menu')}>See Menu</button>
                </div>
            </div>
        </div>
    )
    }
