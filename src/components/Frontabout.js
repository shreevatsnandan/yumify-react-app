import React from 'react';
import './Frontaboutd.css';


export default function Frontabout({ onPageChange }) {
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
            <div className='about-types'>
                <div className='about-box'>
                    <div className='about-img'><img src='./assets/frontabt.jpg' alt='front-food' /></div>
                    <div className='about-cnt'>
                        <div className='abt-cnt-head'><h2>Come and visit us</h2></div>
                        <div className='abt-cnt-phone'>
                            <div className='abt-cnt-logo'><img src='../assets/phone-logo.png' alt='ph-logo' /></div>
                            <div className='ph-abt'>+91-7525936841</div>
                        </div>
                        <div className='abt-cnt-phone'>
                            <div className='abt-cnt-logo'><img src='../assets/message-logo.png' alt='ph-logo' /></div>
                            <div className='ph-abt'>shreevatsnandan@gmail.com</div>
                        </div>
                        <div className='abt-cnt-phone'>
                            <div className='abt-cnt-logo'><img src='../assets/location-logo.png' alt='ph-logo' /></div>
                            <div className='ph-abt'>G-33 Mgl House, Bandra Kurla Complex, Bandra</div>
                        </div>
                    </div>

                </div>
                <div className='abt-txt'>
                    <div className='abt-txt-head'>We provide healthy food for your family.</div>
                    <div className='abt-txt-sub-head'>Our story began with a vision to create a unique
                     dining experience that merges fine dining, exceptional service, and a vibrant ambiance. 
                     Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</div>
                     <div className='abt-txt-gn-txt'>At place, we believe that dining is not just about food, but also about the overall experience. 
                     Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</div>
                     <div className='btn-abt'>
                <button onClick={() => scrollToTopAndChangePage('About Us')}>More About Us</button>
            </div>
                </div>
                
            </div>
        </div>
    )
}
