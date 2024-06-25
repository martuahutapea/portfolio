import React, { useState } from "react";
import { MdContactMail } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section id="about" className="about">
      <Header headerText="About Me" icon={<MdContactMail size={40} />} />

      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
