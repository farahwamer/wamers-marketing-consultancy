import React from "react";
import "../styles/About.css";
import about from "../assets/about.png";

const About = () => {
  return (
    <div className="about-container">
      <img src={about} alt="picture of an office setting"></img>
      <section className="about-text">
        <h1>About us</h1>
        <p>
          We are a collection of highly trained and seasoned professionals who
          are looking to help others spread their message more effectively.
          <br></br> <br></br>
          By evaluating the business’s current marketing efforts, curating a
          strategy personalized to their needs, and implementing new workflows
          and methods, we can get your business to connect with its consumers
          and reach new heights!
        </p>
      </section>
    </div>
  );
};

export default About;
