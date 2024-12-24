import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="container">
        <h3 className="navbar-logo">Keep Notes</h3>
        <ul className="navbar-links">
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/notes" className="nav-link">Notes</Link>
          </li>
          <li>
            <Link to="/account" className="nav-link">Account</Link>
          </li>
          <li>
            <Link className="nav-link" to='/'>Logout</Link>
          </li>
        </ul>
      </div>
      
    </nav>
    
    
    <Outlet/>
    
    
    
    </>
  );
};

export default Navbar;
