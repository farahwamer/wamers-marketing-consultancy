import React from "react";
import Form from "../components/Form";
import "../styles/Contact.css";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <Form />
      <img src={contact} alt="man with headset"></img>
    </div>
  );
};

export default Contact;
