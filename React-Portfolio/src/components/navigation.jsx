import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
