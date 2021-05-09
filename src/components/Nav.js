import React from "react";
import "../App.scss";
import { gsap, Power2, TimelineLite } from "gsap";

import logo from "../assets/logo-bookmark.svg";
import menu from "../assets/icon-hamburger.svg";
import cross from "../assets/icon-close.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";

function Nav() {
  const tl = new TimelineLite();

  const showMenu = () => {
    tl.to(".mobile-nav-menu", 1, {
      css: { visibility: "visible", width: "100vw" },
      ease: Power2.easeInOut,
    })
      .to(".mobile-nav-menu-content", 0.4, { css: { opacity: 1 } })
      .to(".header", 0.4, { opacity: 0, delay: -2 });

    //   tl.to(".mobile-nav-menu", 0, {
    //     css: { visibility: "visible", zIndex: 999 },
    //     ease: Power2.easeInOut,
    //   }).to(".mobile-nav-menu", 0.4, {
    //     css: { opacity: 1 },
    //     ease: Power2.easeInOut,
    //   });
    //   gsap.to(".header", 0, { opacity: 0, delay: 0.4 });
  };

  const hideMenu = () => {
    tl.to(".mobile-nav-menu-content", 0.4, { opacity: 0 })
      .to(".mobile-nav-menu", 1, {
        css: { width: 0 },
        ease: Power2.easeInOut,
      })
      .to(".mobile-nav-menu", 0, { css: { visibility: "hidden" } })
      .to(".header", 0.4, { opacity: 1, delay: -0.4 });

    // tl.to(".mobile-nav-menu", 0.4, {
    //   css: { opacity: 0, zIndex: -1 },
    //   ease: Power2.easeInOut,
    // }).to(".mobile-nav-menu", 0, {
    //   css: { visibility: "hidden" },
    //   ease: Power2.easeInOut,
    // });
    // gsap.to(".header", 0, { opacity: 1, ease: Power2.easeInOut });
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
          <div className="mobile-nav-menu-content">
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
        </div>
      </nav>
    </div>
  );
}

export default Nav;
