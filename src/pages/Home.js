import React from "react";
import Navbar from "../components/Navbar.js";
import "../styles/Home.css";
import megaphone from "../assets/megaphone.png";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <section className="home-titles">
        <h1>
          Take your business <br></br>to the next level
        </h1>
        <p>Because you deserve to be heard.</p>
        <a href="">
          <button className="cta-btn">Get Started</button>
        </a>
      </section>
      <img
        src={megaphone}
        alt="man screaming into megaphone"
        className="home-img"
      ></img>
    </div>
  );
};

export default Home;
