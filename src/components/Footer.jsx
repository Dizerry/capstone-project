import React from 'react';
import logo_footer from '../assets/logo_footer.png'; // Ensure you have the correct path to your image

const Footer = () => {
  return (
    <footer>
      <div className="footer-image">
        <img src={logo_footer}alt="Footer Image" />
      </div>
      <div className="footer-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Donec vehicula, elit vel dapibus facilisis, orci justo commodo.</p>
      </div>
    </footer>
  );
};

export default Footer;
