import React from 'react';
import './HeroSection.css';
import Navbar from './Navbar'; // Import the Navbar

const HeroSection = () => {
  return (
    <div className='Hero-Background'>
      <Navbar /> {/* Add Navbar to HeroSection */}
      <div className="hero-content">
        <h1>Welcome to the Hero Section</h1>
        <p>Your journey starts here</p>
      </div>
    </div>
  );
}

export default HeroSection;
