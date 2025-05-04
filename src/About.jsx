import React from 'react';
import './style.css';

const About = () => {
  return (
    <div>
      <nav>
        <img src="https://via.placeholder.com/40" alt="Logo" />
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="menu.html">Menu</a>
        <a href="online.html">Order Online</a>
        <a href="login.html">Login</a>
      </nav>

      <div className="content">
        <h1>About Us</h1>
        <p>We are dedicated to serving the best Italian cuisine with love and tradition.</p>
        <a href="index.html">Back to Home</a>
      </div>
    </div>
  );
};

export default About;
