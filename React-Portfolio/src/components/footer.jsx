import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <p className="m-0">&copy; {new Date().getFullYear()} Christa Lococo</p>
      </div>
    </footer>
  );
};

export default Footer;
