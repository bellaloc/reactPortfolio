// Header.jsx
import React from 'react';
import Navigation from './navigation';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>Your Name</h1>
      <Navigation />
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const headingStyle = {
  margin: 0,
};

export default Header;