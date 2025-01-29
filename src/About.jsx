import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Adventure Co.</h1>
      <p className="statement">
        At Adventure Co., we believe that life is an adventure waiting to be explored. Our mission is to provide unforgettable experiences that connect people with nature, culture, and themselves.
      </p>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="ceo.avif" alt="Harry Johnson" />
            <h3>Harry Johnson</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="team.avif" alt="Shane Watson" />
            <h3>Shane Watson</h3>
            <p>Adventure Guide</p>
          </div>
          <div className="team-member">
            <img src="teamm.avif" alt="Julie Lester" />
            <h3>Julie Lester</h3>
            <p>Travel Planner</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;