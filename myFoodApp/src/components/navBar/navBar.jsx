import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [Open, setOpen] = useState(false);
  const { getTotalAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo1} className="logo" />
      </Link>
      <div
        className="menu"
        onClick={() => {
          console.log("clickeeds");
          setOpen(!Open);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={Open ? "open" : ""}>
        <span className="cross-navbar" onClick={() => setOpen(!Open)}>
          x
        </span>
        <a
          href="#"
          onClick={() => {
            setMenu("Home");
          }}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("Menu");
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("Mobile-app");
          }}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("Contact-Us");
          }}
          className={menu === "Contact-Us" ? "active" : ""}
        >
          Contact-Us
        </a>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} className="search" />
        <div className="basket">
          <Link to="/cart">
            <img src={assets.basket_icon} className="basket-icon" />
          </Link>
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
