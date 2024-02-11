import React from "react";
import "./services.css";
import {
  MdOutlineLocalShipping,
  MdOutlinePayment,
  MdBrowserNotSupported,
} from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-flex">
        <div className="service">
          <MdOutlineLocalShipping className="service-icon" />
          <h3>Free Shipping</h3>
        </div>
        <div className="service">
          <MdBrowserNotSupported className="service-icon" />
          <h3>24/7 Support.</h3>
        </div>
        <div className="service">
          <MdOutlinePayment className="service-icon" />
          <h3>Online Payment.</h3>
        </div>
        <div className="service">
          <TfiReload className="service-icon" />
          <h3>Easy Return.</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
