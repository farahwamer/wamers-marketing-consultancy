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
        <p>Home</p>
      </li>
      <li className="list">
        <p>About</p>
      </li>
      <li className="list">
        <p>Contact</p>
      </li>
    </ul>
  );
};

export default Navbar;
