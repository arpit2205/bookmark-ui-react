import React from "react";
import "../App.scss";
import { gsap, Power2 } from "gsap";

import logo from "../assets/logo-bookmark.svg";
import menu from "../assets/icon-hamburger.svg";
import cross from "../assets/icon-close.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";

function Nav() {
  const showMenu = () => {
    gsap.to(".mobile-nav-menu", 0, { css: { display: "block" } });
  };

  const hideMenu = () => {
    gsap.to(".mobile-nav-menu", 0, { css: { display: "none" } });
  };
  return (
    <div className="container">
      {/* Desktop Nav */}
      <nav className="nav desktop-nav">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="desktop-nav-links">
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
          <button className="btn login-btn">LOGIN</button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="nav mobile-nav">
        <div className="nav-header">
          <img src={logo} />
          <img src={menu} onClick={showMenu} />
        </div>

        <div className="mobile-nav-menu">
          <div className="nav-header">
            <img src={logo} />
            <img src={cross} onClick={hideMenu} />
          </div>
          <div className="mobile-nav-links">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Contact</a>
            <button className="btn login-btn">LOGIN</button>
          </div>
          <div className="social">
            <div className="social-icons">
              <img src={facebook} />
              <img src={twitter} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
