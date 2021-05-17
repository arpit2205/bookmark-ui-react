import React, { useEffect, useRef } from "react";
import "../App.scss";
import { gsap, Power2, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImage from "../assets/illustration-hero.svg";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const tl = gsap.timeline();
  let title = useRef(null);
  let subtitle = useRef(null);
  let btnOne = useRef(null);
  let btnTwo = useRef(null);
  let header = useRef(null);

  useEffect(() => {
    gsap.to(header, { duration: 0, opacity: 1, delay: 1 });

    window.screen.width > 768
      ? gsap.from(".hero-image", {
          duration: 1,
          delay: 1,
          x: 200,
          opacity: 0,
          ease: Power4.easeInOut,
        })
      : gsap.from(".hero-image", {
          duration: 1,
          delay: 1,
          y: 60,
          opacity: 0,
          ease: Power4.easeInOut,
        });

    tl.from(title, {
      duration: 0.8,
      y: -40,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 2,
    })
      .from(subtitle, { duration: 0.8, opacity: 0, ease: Power2.easeInOut })
      .from(btnOne, {
        duration: 0.4,
        y: 40,
        opacity: 0,
        ease: Power2.easeIn,
      })
      .from(btnTwo, {
        duration: 0.4,
        y: 40,
        opacity: 0,
        ease: Power2.easeIn,
      });
  }, []);

  return (
    <div ref={(el) => (header = el)} className="container header ">
      <div className="hero-div">
        <h1 className="hero-title" ref={(el) => (title = el)}>
          A Simple Bookmark Manager
        </h1>
        <p className="hero-subtitle" ref={(el) => (subtitle = el)}>
          A clean and simple interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free
        </p>
        <div className="buttons">
          <button className="btn chrome-btn" ref={(el) => (btnOne = el)}>
            Get it on Chrome
          </button>
          <button className="btn firefox-btn" ref={(el) => (btnTwo = el)}>
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} />
      </div>
    </div>
  );
}

export default Header;
