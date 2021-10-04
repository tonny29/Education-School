import React from 'react';

import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {
    return (
        <div className="nav-container">
            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/serviceDetail"><button>Service</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
            
        </div>
    );
};

export default Header;