import React from 'react';
import '../styles/styles.css'; 
import AnimatedExample from '../components/Animated/AnimatedExample';

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-me-content">
        <h2>About Me</h2>
        <img src="path-to-your-image.jpg" alt="Your Avatar" className="avatar" />
        <p>
          Hi, I'm Christa Lococo, a passionate web developer with experience in creating
          awesome web applications. I love turning ideas into reality using code.
        </p>
        <AnimatedExample /> {/* Include the suggested animated component */}
      </div>
    </section>
  );
};

export default AboutMe;
