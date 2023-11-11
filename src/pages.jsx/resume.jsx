// Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section style={sectionStyle}>
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume.pdf
        </a>
      </p>
      <h3>Skills</h3>
      <ul style={listStyle}>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
};

const listStyle = {
  listStyleType: 'circle',
};

export default Resume;
