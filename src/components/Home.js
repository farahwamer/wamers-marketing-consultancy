import React from "react";
import "../styles/Home.css";
import background from "../assets/home-bg.svg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${background})` }}
      id="home"
    >
      <Navbar />
      <div className="home-content-container">
        <h1 className="title">Take your business to the next level.</h1>
        <a href="#contact">
          <button className="cta-btn">Get started</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
