import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Welcome to our Environmental Sustainability Action Platform, where we empower individuals and communities to make a positive impact on our planet.</p>
            </header>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <img src= "/images/Mission.jpeg" alt="Our Mission" className="mission-image" />
                <p>We strive to foster sustainable practices and raise awareness about environmental issues. Our goal is to connect people with resources, tools, and community support to drive meaningful change.</p>
            </section>

            <section className="founders-section">
                <h2>Meet Our Founders</h2>
                <img src="/images/Founder.jpeg" alt="Founders" className="founders-image" />
                <div className="founders-info">
                    <h3>Jane Doe</h3>
                    <p>Jane is a passionate environmentalist with over a decade of experience in sustainability initiatives. She believes in the power of community to create lasting change.</p>
                    <h3>John Smith</h3>
                    <p>John, an ecologist, focuses on integrating science into environmental policy. His expertise helps guide our initiatives and programs effectively.</p>
                </div>
            </section>

            <section className="team-section">
                <h2>Our Team</h2>
                <img src="/images/Team.jpeg" alt="Our Team" className="team-image" />
                <p>Our dedicated team consists of experts from various fields, all united by a shared vision of a sustainable future. Together, we work tirelessly to promote awareness and action.</p>
            </section>

            <footer className="about-footer">
                <h2>Join Us</h2>
                <p>Become part of our movement for a greener planet. Together, we can make a difference!</p>
                <button className="join-button">Get Involved</button>
            </footer>
        </div>
    );
};

export default About;
