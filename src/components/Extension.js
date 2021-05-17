import React, { useEffect } from "react";
import "../App.scss";
import { gsap, Power2, TweenMax } from "gsap";

import chrome from "../assets/logo-chrome.svg";
import firefox from "../assets/logo-firefox.svg";
import opera from "../assets/logo-opera.svg";
import dots from "../assets/bg-dots.svg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Extension() {
  const extensionCards = [
    {
      image: chrome,
      name: "Chrome",
      version: "62",
    },
    {
      image: firefox,
      name: "Firefox",
      version: "55",
    },
    {
      image: opera,
      name: "Opera",
      version: "46",
    },
  ];

  const tl = gsap.timeline();

  useEffect(() => {
    gsap.from(".extension-card", {
      scrollTrigger: ".extension-card",
      duration: 1,
      opacity: 0,
      ease: Power2.easeInOut,
      y: 60,
    });

    gsap.to(".extension-section", { duration: 1, opacity: 1, delay: 5 });
  }, []);

  return (
    <div className="container extension-section">
      <div className="features-header extension-header">
        <h1 className="features-title extension-title">
          Download the extension
        </h1>
        <p className="features-subtitle extension-subtitle">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <div className="extension-cards-section">
        {extensionCards.map((card) => (
          <div className="extension-card">
            <img className="browser-logo" src={card.image} />
            <h2>Add to {card.name}</h2>
            <p>Minimum version {card.version}</p>
            <img className="dots" src={dots} />
            <button className="btn install-btn">
              Add and install extension
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Extension;
