import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'; // Ensure assets path is correct
import { Link } from 'react-router-dom'; // Ensure you import Link for routing
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');


  const { getTotalCartAmount } = useContext(StoreContext)


  return (
    <div className="navbar">
      {/* Corrected Link for Navbar Title */}
      <Link to='/'>
        <h1 className="navbar-title">Tasty Kart</h1>
      </Link>

      {/* Navbar Menu */}
      <ul className="navbar-menu">
        <Link to='/'
          className={menu === 'home' ? 'active' : ''}
          onClick={() => setMenu('home')}
        >
          Home
        </Link>
        <a href='#explore-menu'
          className={menu === 'menu' ? 'active' : ''}
          onClick={() => setMenu('menu')}
        >
          Menu
        </a>
        <a href='#footer'
          className={menu === 'contact' ? 'active' : ''}
          onClick={() => setMenu('contact')}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Side Icons and Button */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="icon" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Shopping Cart" className="icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* Sign In Button */}
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
