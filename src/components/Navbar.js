import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Navbar;
