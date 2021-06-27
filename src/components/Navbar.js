import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <ul className="navbar-container">
      <li className="list">
        <img src={logo} alt="logo"></img>
      </li>
      <li className="list">
        <a href="#home">Home</a>
      </li>
      <li className="list">
        <a href="#about">About</a>
      </li>
      <li className="list">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
