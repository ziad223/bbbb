import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13744.256779802363!2d31.525580899999994!3d30.5474903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1705015759722!5m2!1sar!2seg"
          ></iframe>
        </div>
        <div className="contact-right">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Your Phone" />
          <textarea cols="60" rows="10" placeholder="Your Message"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
