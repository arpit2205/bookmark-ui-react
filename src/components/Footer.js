import React from "react";
import "../App.scss";

import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import logoWhite from "../assets/logo-bookmark-white.svg";

function Footer() {
  return (
    <div className="container footer">
      <div className="contact-us-section">
        <p>35,000+ ALREADY JOINED</p>
        <h1>Stay up-to-date with what we are doing</h1>
        <div className="form">
          <input type="text" placeholder="Enter your email address" />
          <button className="btn contact-btn">Contact us</button>
        </div>
      </div>

      <div className="footer-section">
        <div className="flex">
          <img src={logoWhite} className="footer-logo" />
          <p>FEATURES</p>
          <p>PRICING</p>
          <p>CONTACT</p>
        </div>
        <div className="flex flex-row">
          <img src={facebook} className="footer-fb" />
          <img src={twitter} className="footer-tw" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
