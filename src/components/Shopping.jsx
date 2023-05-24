import React from "react";
import "../Style/Shopping.css";
import logo from "../assets/logo.png";
import hp from "../assets/shopping/hp.jpeg";
import macl from "../assets/shopping/macl.jpeg";
import mi from "../assets/shopping/mi.png";
import samsung from "../assets/shopping/samsung.jpeg";
import Footer from "./Footer";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


const Shopping = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li><img src={logo} alt="ok" className="logos" /></li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="cart"><AddShoppingCartIcon/>Cart</a>
          </li>
          <li>
            <a href="Login"><ManageAccountsIcon/>Account</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="cards">
          <div className="card card1">
            <img src={macl} alt=""></img>
            <h1>Mac-Book</h1>
            <p>All new macbook pro M2 <br/> RS: 60,000</p>
            <button className="buy">Buy</button>
          </div>

          <div className="card card1">
            <img src={hp} alt=""></img>
            <h1>HP- Probook 15</h1>
            <p>This laptop is the fastest <br/> RS: 30,000</p>
            <button className="buy">Buy</button>
          </div>

          <div className="card card1">
            <img src={mi} alt=""></img>
            <h1>Redmi</h1>
            <p>Redmi note-pro 15 <br/> RS: 12,000</p>
            <button className="buy">Buy</button>
          </div>

          <div className="card card1">
            <img src={samsung} alt=""></img>
            <h1>Device</h1>
            <p>Samsung Galaxy A15 <br/> RS: 15,000</p>
            <button className="buy">Buy</button>
          </div>
</div>
<div className="cards">
          <div className="card card1">
            <img src={macl} alt=""></img>
            <h1>Mac-Book</h1>
            <p>All new macbook pro M2 <br/> RS: 60,000</p>
            <button className="buy">Buy</button>
          </div>

          <div className="card card1">
            <img src={hp} alt=""></img>
            <h1>HP- Probook 15</h1>
            <p>This laptop is the fastest <br/> RS: 30,000</p>
            <button className="buy">Buy</button>
          </div>

          <div className="card card1">
            <img src={mi} alt=""></img>
            <h1>Redmi</h1>
            <p>Redmi note-pro 15 <br/> RS: 12,000</p>
            <button className="buy">Buy</button>
          </div>

          <div className="card card1">
            <img src={samsung} alt=""></img>
            <h1>Device</h1>
            <p>Samsung Galaxy A15 <br/> RS: 15,000</p>
            <button className="buy">Buy</button>
          </div>
          </div>
        </div>
      
      <Footer />
    </>
  );
};

export default Shopping;
