import React from "react";
import Navbar from "./Navbar";
import Ngo from "./Ngo";
import "../Style/Home.css";
import h1 from "../assets/h1.png";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home__container">
          <span className="h">
            Cracking the E-waste Code: Save the Planet, Win the Game! 🌍
          </span>
          <p className="ph">
            {" "}
            💪 Are you ready to discover the untapped potential 💥 of your
            discarded gadgets? 💻
          </p>
          <button className="but">EXPLORE</button>
        </div>
        <div className="home__container">
          <img src={h1} alt="ok" />
        </div>
      </div>
<div className="make">
      <h1>Want to make Donations</h1>
      <p>Our Partner NGOs</p>
      </div>
      
      <div className="ngo"><Ngo/></div>
      <Footer />

    </>
  );
};

export default Home;
