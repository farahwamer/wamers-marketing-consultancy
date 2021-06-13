import React from "react";
import "../styles/About.css";
import workplace from "../assets/about-pic.png";

const About = () => {
  return (
    <div className="about-container">
      <img src={workplace} alt="workspace" />
      <div className="about-text-container">
        <section className="about-text">
          <h1>About us</h1>
          <p>
            We are a collection of highly trained and seasoned professionals who
            are looking to help others spread their message more effectivly.
          </p>
          <p>
            By evaluating the business’s current marketing efforts, curating a
            strategy personalized to their needs, and implementing new workflows
            and methods, we can get your business to connect with its consumers
            and reach new heights!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
