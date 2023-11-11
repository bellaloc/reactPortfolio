// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

const Navigation = () => {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Us
        </Link>,
        <Link key={3} className="nav-link" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={4} className="nav-link" to="/contact">
          Contact
        </Link>,
        <Link key={5} className="nav-link" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
};

export default Navigation;
