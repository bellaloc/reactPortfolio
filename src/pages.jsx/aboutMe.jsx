// AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section style={sectionStyle}>
      <h2>About Me</h2>
      <img style={imageStyle} src="path-to-your-image.jpg" alt="Your Avatar" />
      <p>
        Hi, I'm [Your Name], a passionate web developer with experience in creating
        awesome web applications. I love turning ideas into reality using code.
      </p>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
};

const imageStyle = {
  width: '100%',
  borderRadius: '50%',
};

export default AboutMe;
