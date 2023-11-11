import React from 'react';
import '../styles/styles.css';
import AnimatedComponent from '../components/Animated/AnimatedExample';

const Resume = () => {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'HTML5', level: 'Intermediate' },
    { name: 'CSS3', level: 'Intermediate' },
    // Add more skills with their corresponding levels
  ];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume.pdf
        </a>
      </p>
      <div className="skills-container">
        <h3>Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.name}:</strong> {skill.level}
            </li>
          ))}
        </ul>
      </div>
      <ExampleComponent />
    </section>
  );
};

export default Resume;
