import React from 'react';
import img1 from '../../../assets/Photos/Train.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://live.staticflickr.com/65535/50228195238_1150556b76_b.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Railway Ticket <span className='text-green-400'>Reservation</span> System</h1>
                        <p className="mb-5">Bangladesh Railway is the state-owned rail transport agency of Bangladesh</p>
                        <button className="btn btn-outline btn-success "><span className='text-neutral-content'>Book Ticket</span> </button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Banner;