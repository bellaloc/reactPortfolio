// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh', // This is correct
  fontFamily: 'Arial, sans-serif',
};

export default App;
