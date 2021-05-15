import React, { useEffect } from "react";
import "./App.scss";
import { gsap, Power2 } from "gsap";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    gsap.to(".wrapper", { duration: 0, opacity: 1, ease: Power2.easeInOut });
  }, []);
  return (
    <>
      <div className="wrapper">
        <Nav />
        <Header />
        <Features />
        <Extension />
        <Footer />
      </div>
    </>
  );
}

export default App;
