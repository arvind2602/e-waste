import React from "react";
import Navbar from "./Navbar";
import "../Style/Fixit.css";
import sfixer from "../assets/sfixer.jpeg";
import cfixer from "../assets/cfixers.jpeg";
import Footer from "./Footer";

const Fixit = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="fix1">
          
        </div>
        <div className="text">
        <h1>Never take broken for an answer</h1>
        <p>
        Get the instructions you need with quality repair parts and tools 🔧🔩 and the expertise of a robust community. 🤝💪
          </p>
          </div>
        <div className="cards">
          <div className="card card1">
            <img src={sfixer} alt="" />
            <h1>Step-by-Step Guides</h1>
            <p>Learn how to fix anything with simple, easy-to-follow instructions created by real fixers.</p>
            <button className="button"><a href="fixitrepairguide">Find a Guide</a></button>
          </div>
          <div className="card card2">
            <img src={cfixer} alt="" />
            <h1>A Community of Fixers</h1>
            <p>No one knows how to fix everything, but everyone knows how to fix something.</p>
            <button className="button">Fix the World</button>
          </div>
        </div>
        <div>
          <p>
            Repair guides for every thing, written by everyone. We help
            thousands of people repair their things every day. Every time you
            fix something, you help the planet.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fixit;
