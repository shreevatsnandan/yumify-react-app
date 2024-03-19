import React, { useState } from 'react';
import './Bookingd.css';

export default function Booking() {


    const [formData, setFormData] = useState({
        uname: '',
        phone: '',
        date: '',
        time: '',
        numOfPersons: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Table Booked");
    };


    return (
        <div>
            <div className='Bookings'>
                <div className='booking-head'>Book a table</div>

                <div className='booking-sub-head'>We consider all the drivers of change gives you the components you need
                    to change to create a truly happens.</div>
                <div className='booking-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-al'> <label>
                            Name:<br></br>
                            <input type='text' name='uname' placeholder= "Name.." value={FormData.uname} onChange={handleChange} />
                        </label>
                            <label>
                                Phone:<br></br>
                                <input type='number' name='phone' value={FormData.phone} onChange={handleChange} />
                            </label>
                        </div>
                        <div className='form-al'>
                            <label>
                                Date:<br></br>
                                <input type="date" name="date" value={formData.date} onChange={handleChange} />
                            </label>
                            <label>
                                Time:<br></br>
                                <input type="time" name="time" value={formData.time} onChange={handleChange} />
                            </label>
                        </div>
                        <div className='form-al'>
                            <label>
                                Guests:
                                <select className='nop'
                                    name="numOfPersons"
                                    value={formData.numOfPersons}
                                    onChange={handleChange}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div><div className='btn-bookings'>
                        <button type="submit">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
