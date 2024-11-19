import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setmenu] = useState("home");

    return (
        <div className="navbar">
            <h1 className="navbar-title">Tasty Kart</h1>
            <ul className="navbar-menu">
                <li 
                    className={menu === "home" ? "active" : ""} 
                    onClick={() => setmenu("home")}
                >
                    Home
                </li>
                <li 
                    className={menu === "menu" ? "active" : ""} 
                    onClick={() => setmenu("menu")}
                >
                    Menu
                </li>
                <li 
                    className={menu === "contact" ? "active" : ""} 
                    onClick={() => setmenu("contact")}
                >
                    Contact Us
                </li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="shopping cart" />
                    <div className="dot"></div>
                </div>
                <button className="sign-in-btn">Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
