import React from 'react';
import './Frontmenud.css';

export default function Frontmenu({ onPageChange }) {
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
            <div className='heading'>Browse Our Menu</div>
            <div className='options'>
                <div className='menu-type'>
                    <div className='menu-type-logo'>
                        <img src='./assets/starters-logo.png' alt='menu-logo' />
                    </div>
                    <div className='option-head'>Starters</div>
                    <div className='option-disc'>
                    A tantalizing beginning, setting the stage for culinary delight.
                    </div>
                    <div className='option-exp'>
                        <button onClick={() => scrollToTopAndChangePage('Menu')}>Explore Menu</button>
                    </div>
                </div>
                <div className='menu-type'>
                    <div className='menu-type-logo'>
                        <img src='./assets/maincourse-logo.png' alt='menu-logo' />
                    </div>
                    <div className='option-head'>Main Coursre</div>
                    <div className='option-disc'>
                    A symphony of flavors dancing on the palate, satisfying both hunger and soul.
                    </div>
                    <div className='option-exp'>
                        <button onClick={() => scrollToTopAndChangePage('Menu')}>Explore Menu</button>
                    </div>
                </div>
                <div className='menu-type'>
                    <div className='menu-type-logo'>
                        <img src='./assets/drinks-logo.png' alt='menu-logo' />
                    </div>
                    <div className='option-head'>Drinks</div>
                    <div className='option-disc'>
                    Quenching thirst with every sip, a refreshing pause in the rhythm of life.
                    </div>
                    <div className='option-exp'>
                        <button onClick={() => scrollToTopAndChangePage('Menu')}>Explore Menu</button>
                    </div>
                </div>
                <div className='menu-type'>
                    <div className='menu-type-logo'>
                        <img src='./assets/desert-logo.png' alt='menu-logo' />
                    </div>
                    <div className='option-head'>Deserts</div>
                    <div className='option-disc'>
                    Sweet indulgence, a heavenly finale to a perfect meal, leaving a lingering taste of joy.
                    </div>
                    <div className='option-exp'>
                        <button onClick={() => scrollToTopAndChangePage('Menu')}>Explore Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
