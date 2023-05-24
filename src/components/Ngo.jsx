import React from "react";
import "../Style/Ngo.css";
import sambhav from "../assets/sambhav.jpeg";
import sahas from "../assets/sahas.jpeg";
import waste from "../assets/waste.png";

const Ngo = () => {
  return (
    <>
    <div className="cards">
      <div className="card card1">
      <br/>
      <br/>
     
        <img src={sambhav} alt="ok" />
        <br/>
        <h1>Karo Sambhav</h1>
        <p>Karo Sambhav is a leading organization that focuses on implementing responsible ♻️ and sustainable 🌱 e-waste management practices in India. </p>
        <button className="butt"><a href="https://www.karosambhav.com/">Donate</a></button>
      </div>
      <div className="card card1">
      <br/>
        <img src={sahas} alt="ok" />
        
        <h1> Saahas Waste</h1>
        <p>🌿Saahas Zero Waste is an NGO that addresses various aspects of waste management, including electronic waste. 📦</p>
        <button className="butt"><a href="https://saahaszerowaste.com/">Donate</a></button>
      </div>
      <div className="card card1">
      <br/>
      <br/>
        <img src={waste} alt="ok" />
        <br/>
        <h1>Waste Ventures India</h1>
        <p>🌱 Waste Ventures India is an organization that focuses on sustainable waste management practices, including electronic waste. ♻️📦</p>
        <button className="butt"><a href="https://wasteventures.com/">Donate</a></button>
      </div>
    </div>
    <div>
        <br/>
        <br/>
    </div>
    </>
  );
};

export default Ngo;
