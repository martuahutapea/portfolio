import React, { useState } from "react";
import { MdContactMail } from "react-icons/md";
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
        <div className="personal-info">
          <h3>Personal Information</h3>
          <p>
            <strong>Phone:</strong> <br />
            +62 813-7104-7283
          </p>
          <p>
            <strong>Email:</strong>
            <br /> mhutapea2708@gmail.com
          </p>
          <p>
            <strong>Address:</strong>
            <br /> Jl. TB Simatupang No.30, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430
          </p>
        </div>

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
      {/* <h1>For more Social media</h1>
      <a href="https://bento.me/mihh">Here</a> */}

      <div className="map-container">
        {/* <h3>Location</h3> */}
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24485.24070219006!2d106.77672360724209!3d-6.302277175892739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f13cfb9b1aad%3A0x71a6a4ed514697e1!2sRa%20Suites%20Simatupang!5e0!3m2!1sen!2sid!4v1719527182136!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
