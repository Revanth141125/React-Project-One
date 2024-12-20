import React from 'react';
import ReactLogo from './R.png';
import { Link } from 'react-router-dom';
import "./App.css"

const Menu = () => {
  
  return (
    
      <div > 
        <ul className='navbar' >
        <li><img src={ReactLogo} alt="hi" height="70" width="100"/></li>
        <li className="no-underline"><Link to="/">Home</Link></li>
        <li className="no-underline" ><Link to="/service">Service</Link></li>
        <li className="no-underline"><Link to="/about">About</Link></li>
        <li className="no-underline"><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
