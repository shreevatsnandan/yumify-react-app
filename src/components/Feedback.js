import React, { useState, useEffect } from 'react';
import './Feedbackd.css';
import reviews from './reviews.json';

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 4000); 

        return () => {
            clearTimeout(timer);
        };
    }, [currentIndex]); 
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    return (
        <div>
            <div className='feedback-head'><h2>What our customers say</h2></div>
            <div className='feedback'>
                <div className="rev-buttons">
                    <button onClick={handlePrev}><div className='abt-cnt-logo'><img src='./assets/prev-logo.png' alt='prev-logo' /></div></button>
                </div>
                <div className="card">
                    <div className='rev-img'><img src={reviews[currentIndex].profile_pic} alt="Profile" /></div>
                    <div className='rev'><h3>{reviews[currentIndex].name}</h3>
                        <p>{reviews[currentIndex].comment}</p></div>
                </div>
                <div className="rev-buttons">
                    <button onClick={handlePrev}><div className='abt-cnt-logo'><img src='./assets/next-logo.png' alt='next-logo' /></div></button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
