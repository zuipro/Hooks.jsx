import React from 'react';
import './HeroSection.css';
import Navbar from './Navbar';
import img1 from './Hero-Images/event.png'; 
import img2 from './Hero-Images/progress1.png'
import img3 from './Hero-Images/achieve.png'
import Location from './location'
const HeroSection = () => {
  return (
    <div className='Hero-Background'>
      <Navbar /> 
      <div className="hero-content">
        <h1>Welcome to the Environment </h1>
      </div>
      <div className='cards'>
        <div className='card1'>
          <div className="card-content">
            <img src={img1} alt="Event" />
            <div className="card-text">
              <h2>Event Calender</h2>
            </div>
          </div>
        </div>
        <div className='card2'>
          <div className="card-content">
            <img src={img2} alt="Event" />
            <div className="card-text">
              <h2>Track Progress</h2>
            </div>
          </div>
        </div>
        <div className='card3'>
          <div className="card-content">
            <img src={img3} alt="Event" />
            <div className="card-text">
              <h2>Achievements</h2>
            </div>
          </div>
        </div>
      </div>
      <Location />
      
    </div>
  );
}

export default HeroSection;
