import React from "react";
import "../styles/Services.css";
import socialMedia from "../assets/social-media.svg";
import research from "../assets/research.svg";
import strategy from "../assets/strategy.svg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service">
        <img src={socialMedia} alt="social media icon" id="social-media" />
        <p>Social Media</p>
      </div>
      <hr />
      <div className="service">
        <img src={research} alt="consumer research icon" id="research" />
        <p>Consumer Research</p>
      </div>
      <hr />

      <div className="service">
        <img src={strategy} alt="marketing strategy icon" id="strategy" />
        <p>Marketing Strategy</p>
      </div>
    </div>
  );
};

export default Services;
