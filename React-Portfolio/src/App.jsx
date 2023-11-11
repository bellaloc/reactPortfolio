import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/Nav'; 
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <Nav /> {/* Include Nav component here if you intended to use it */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
};

export default App;