// AboutMe.jsx
import React from 'react';
import './styles.css'; // Import the styles
import ExampleComponent from './ExampleComponent';

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src="path-to-your-image.jpg" alt="Your Avatar" />
      <p>
        Hi, I'm Christa Lococo, a passionate web developer with experience in creating
        awesome web applications. I love turning ideas into reality using code.
      </p>
      <ExampleComponent /> {/* Include the animated component */}
    </section>
  );
};

export default AboutMe;
