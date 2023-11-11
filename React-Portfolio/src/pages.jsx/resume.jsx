// Resume.jsx
import React from 'react';
import './styles.css';
import ExampleComponent from './ExampleComponent';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume.pdf
        </a>
      </p>
      <h3>Skills</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        {/* Add more skills */}
      </ul>
      <ExampleComponent />
    </section>
  );
};

export default Resume;
