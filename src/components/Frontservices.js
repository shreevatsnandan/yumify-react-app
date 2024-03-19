import React from 'react';
import './Frontservicesd.css';

export default function Frontservices() {
  return (
    <div>
        <div className='service-head'>We also offer unique services for your events</div>
        <div className='services'>
        <div className='service-type'>
                    <div className='service-type-logo'>
                        <img src='./assets/cattering.jpg' alt='menu-logo' />
                    </div>
                    <div className='service-head'>Caterings</div>
                    <div className='service-disc'>
                    Crafting culinary experiences that elevate every occasion to unforgettable heights.
                    </div>
                </div>

                <div className='service-type'>
                    <div className='service-type-logo'>
                        <img src='./assets/birthday.jpg' alt='menu-logo' />
                    </div>
                    <div className='service-head'>Birthdays</div>
                    <div className='service-disc'>
                    Celebrating love with every bite, creating cherished memories through exquisite flavors.
                    </div>
                </div>
                <div className='service-type'>
                    <div className='service-type-logo'>
                        <img src='./assets/wedding.jpg' alt='menu-logo' />
                    </div>
                    <div className='service-head'>Weddings</div>
                    <div className='service-disc'>
                    Savoring each moment with delectable delights, adding sweetness to the celebration of life.
                    </div>
                </div>
                <div className='service-type'>
                    <div className='service-type-logo'>
                        <img src='./assets/events.jpg' alt='menu-logo' />
                    </div>
                    <div className='service-head'>Events</div>
                    <div className='service-disc'>
                    Transforming gatherings into gastronomic adventures, where every taste tells a story of joy and togetherness.
                    </div>
                    </div>
                </div>
                
                
    </div>
  )
}
