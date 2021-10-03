import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {
    return (
        <div className="nav-container">
            <Link to="/home"><button>Home</button></Link>
            <Link to="/about">About</Link>
            <Link to="/serviceDetail">Service</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Header;