import React from "react";
import "../Style/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
      <ul>
        <img src={logo} alt="logo" className="logo" />
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shopping">Shopping</a>
        </li>
        <li>
          <a href="/fixit">Fixit</a>
        </li>
        <li>
          <a href="https://www.google.com/maps">Repair Near me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
