import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      {/* Logo Component */}
      <div className="logo">Logo</div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home" className="nav-home">Home</a></li>
        <li><a href="#about" className="nav-about">About</a></li>
        <li><a href="#menu" className="nav-menu">Menu</a></li>
        <li><a href="#reserve" className="nav-reserve">Reserve</a></li>
        <li><a href="#online" className="nav-online">Online</a></li>
        <li><a href="#login" className="nav-login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
