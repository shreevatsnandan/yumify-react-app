import React from 'react'
import './Stats.css';


export default function Stats() {
    return (
        <div>
            <div className='stats'>
                <div stats-txt>
                    <div className='stats-head'>
                        A little information for our valuable guest
                    </div>
                    <div className='stats-data'>
                        <div className='stats-card'> <h3>3</h3> locations</div>
                        <div className='stats-card'> <h3>70+</h3>employed</div>
                        </div>
                        <div className='stats-data'>
                        <div className='stats-card'> <h3>1993</h3>Estd.</div>
                        <div className='stats-card'> <h3>30M+</h3>Customers Served</div>
                        
                    </div>
                </div>
                <div className='stats-img'>
                    <img src='../assets/statpg-img.jpg' alt='statimg'/>
                </div>
            </div>
        </div>
    )
}
