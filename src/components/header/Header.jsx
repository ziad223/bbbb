import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header container">
      <div className="header-left">
        <div className="header-left-text">
          <h3>No restocking fee ($35 savings)</h3>
          <h2>M75 Sport Watch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore dolore magna aliqua.
          </p>
          <h2>Now Only $320.99</h2>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-up">
        <div>
        <h3>New line required</h3>
          <h2>iPhone 12 Pro Max</h2>
          <h4>$259.99</h4>
        </div>
        </div>
        <div className="header-right-down">
         <div>
         <h3>Weekly Sale!</h3>
          <h4>Saving up to 50% off all online store items this week.</h4>
          <button>Shop Now</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
