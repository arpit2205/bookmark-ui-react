import React, { useState } from "react";
import "../App.scss";
import { gsap, Power2 } from "gsap";

import arrow from "../assets/icon-arrow.svg";

function Faq() {
  const [stateID, setStateID] = useState(0);
  return (
    <div className="container faq-section">
      <div className="features-header faq-header">
        <h1 className="features-title">Frequently Asked Questions</h1>
        <p className="features-subtitle">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <div className="faq-tabs-container">
        <div className="faq">
          <div
            className="faq-ques"
            onClick={() => {
              setStateID(0);
            }}
          >
            <h1>How can I request a new browser?</h1>
            <img src={arrow} alt="" />
          </div>
          <div
            className={`faq-ans ${stateID === 0 ? "faq-active" : "faq-hidden"}`}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis rerum animi harum eos itaque consequuntur commodi
              facilis nihil odio iste unde quasi vel eius voluptate ex
              asperiores accusamus, saepe mollitia!
            </p>
          </div>
        </div>

        {/* --------------------- */}

        <div className="faq">
          <div
            className="faq-ques"
            onClick={() => {
              setStateID(1);
            }}
          >
            <h1>What is Bookmark?</h1>
            <img src={arrow} alt="" />
          </div>
          <div
            className={`faq-ans ${stateID === 1 ? "faq-active" : "faq-hidden"}`}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis rerum animi harum eos itaque consequuntur commodi
              facilis nihil odio iste unde quasi vel eius voluptate ex
              asperiores accusamus, saepe mollitia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
