import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have questions or want to book an adventure? Reach out to us!</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: sneadventure@gmail.com</p>
        <p>Phone: 0491 570 159</p>
        <p>Address: Tasmania,Australia</p>
      </div>

      <form className="contact-form">
        <h2>Send Us a Message</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5"></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;