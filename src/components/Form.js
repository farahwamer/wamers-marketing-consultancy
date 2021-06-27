import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <h1>Want to work with us?</h1>
      <p>Please state the nature of your message and how to contact you.</p>
      <form className="form">
        <label for="name">Name</label>
        <input type="text" name="name" id="name"></input>
        <label for="subject">Subject</label>
        <input type="text" name="subject" id="subject"></input>
        <label for="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <input type="submit" name="submit" id="submit"></input>
      </form>
    </div>
  );
};

export default Form;
