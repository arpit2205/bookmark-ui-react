import React, { useState } from "react";
import { gsap, Power2 } from "gsap";
import "../App.scss";

import imgOne from "../assets/illustration-features-tab-1.svg";
import imgTwo from "../assets/illustration-features-tab-2.svg";
import imgThree from "../assets/illustration-features-tab-3.svg";

function Features() {
  const [stateID, setStateID] = useState(0);
  const featuresContent = [
    {
      id: 0,
      image: imgOne,
      title: "Bookmark in one click",
      subtitle:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manange your favourite sites.",
    },
    {
      id: 1,
      image: imgTwo,
      title: "Intelligent search",
      subtitle:
        "Our intelligent search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      id: 2,
      image: imgThree,
      title: "Share your bookmarks",
      subtitle:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  const fadeOut = () => {
    gsap.to(".tabbed-features", {
      opacity: 0,
      duration: 0.2,
      ease: Power2.easeInOut,
    });
  };

  const fadeIn = () => {
    gsap.to(".tabbed-features", {
      opacity: 1,
      duration: 0.2,
      ease: Power2.easeInOut,
    });
  };

  const animateFeature = (id) => {
    fadeOut();
    setTimeout(() => {
      setStateID(id);
    }, 200);
    setTimeout(() => {
      fadeIn();
    }, 200);
  };

  return (
    <div className="container features-section">
      <div className="features-header">
        <h1 className="features-title">Features</h1>
        <p className="features-subtitle">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      {/* Tabbed section container */}
      <div className="tabbed-section-container">
        <div className="tabs-container">
          <div className="tabs">
            <p
              className={`tab tab-one ${stateID === 0 ? "active" : ""}`}
              onClick={() => {
                animateFeature(0);
              }}
            >
              Simple Bookmarking
            </p>
            <p
              className={`tab tab-one ${stateID === 1 ? "active" : ""}`}
              onClick={() => {
                animateFeature(1);
              }}
            >
              Speedy Searching
            </p>
            <p
              className={`tab tab-one ${stateID === 2 ? "active" : ""}`}
              onClick={() => {
                animateFeature(2);
              }}
            >
              Easy Sharing
            </p>
          </div>
        </div>

        <>
          <div className="container header tabbed-features">
            <div className="hero-image features-image">
              <img src={featuresContent[stateID].image} />
            </div>
            <div className="hero-div feature-div">
              <h1 className="hero-title feature-title">
                {featuresContent[stateID].title}
              </h1>
              <p className="hero-subtitle feature-subtitle">
                {featuresContent[stateID].subtitle}
              </p>
              <div className="buttons">
                <button className="btn chrome-btn feature-btn">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Features;
