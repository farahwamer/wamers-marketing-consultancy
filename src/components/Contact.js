import React from "react";
import "../styles/Contact.css";
import contact from "../assets/contact-pic.png";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="form-container">
        <div className="form">
          <h1>Want to work with us?</h1>
          <p>Please state the nature of your message and how to reach you.</p>
          <input type="text" name="name" id="name" placeholder="Name"></input>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          ></input>
          <label for="message">Message</label>
          <textarea name="message" id="message"></textarea>
          <input type="submit" name="submit" id="submit"></input>
        </div>
      </div>
      <img src={contact} alt="woman smiling on the phone"></img>
    </div>
  );
};

export default Contact;
