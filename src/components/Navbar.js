import React from 'react';
import { Link } from 'react-router-dom'
import Logo from "../Assets/logo.png";

import "./navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
<div className="leftSide">
      <Link to="/">
        <img src={Logo} />
        </Link>
        <div className="rightSide">
          <Link to="/" > HOME </Link>
          <Link to="/attendence"> ATTENDENCE </Link>
          <Link to="/about"> ABOUT </Link>
        </div>
      </div>
      </div>
      )
}

export default Navbar

