// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary text-white">
      <div className="container">
        <Link to="/" className="navbar-brand text-white">
          Inventory App
        </Link>
        <ul className="nav">
          <li>
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li>
            <Link to="/businesses" className="nav-link">
              Businesses
            </Link>
          </li>
          <li>
            <Link to="/inventory" className="nav-link">
              Inventory
            </Link>
          </li>
          <li>
            <Link to="/sales" className="nav-link">
              Sales
            </Link>
          </li>
          <li>
            <Link to="/insights" className="nav-link">
              Insights
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
