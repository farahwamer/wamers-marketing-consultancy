import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo-big.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Navbar;
