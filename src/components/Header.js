import React from "react";
import "../App.scss";

import heroImage from "../assets/illustration-hero.svg";

function Header() {
  return (
    <div className="container header">
      <div className="hero-div">
        <h1 className="hero-title">A Simple Bookmark Manager</h1>
        <p className="hero-subtitle">
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free
        </p>
        <div className="buttons">
          <button className="btn chrome-btn">Get it on Chrome</button>
          <button className="btn firefox-btn">Get it on Firefox</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} />
      </div>
    </div>
  );
}

export default Header;
