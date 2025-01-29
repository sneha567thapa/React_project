import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'; 
import './Homepage.css';

const HomePage = () => {
  return (
    <Router>
      <div className="homepage">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="logo">Adventure Co.</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Adventure Co. All rights reserved.</p>
          
        </footer>
      </div>
    </Router>
  );
};

export default HomePage;