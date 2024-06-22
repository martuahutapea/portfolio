import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Header headerText="Contact" icon={<BsInfoCircle size={40} />} />
    </section>
  );
};

export default Contact;
