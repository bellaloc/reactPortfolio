import React from 'react';
import '../styles/styles.css';
import ExampleComponent from '../components/Animated/AnimatedExample';

const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'Express.js', level: 'Advanced' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'RESTful APIs', level: 'Intermediate' },
  { name: 'React Router', level: 'Advanced' },
  { name: 'Redux', level: 'Advanced' },
  { name: 'Webpack', level: 'Intermediate' },
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3', level: 'Advanced' },
  { name: 'Responsive Design', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'GraphQL', level: 'Intermediate' },
  { name: 'Git', level: 'Advanced' },
  { name: 'Bootstrap', level: 'Intermediate' },
  // { name: 'Docker', level: 'Intermediate' },
  // { name: 'AWS', level: 'Intermediate' },
  { name: 'Jest', level: 'Intermediate' },
  { name: 'Babel', level: 'Intermediate' },
  { name: 'UI/UX Design', level: 'Intermediate' },
  { name: 'React Spring (Animation)', level: 'Intermediate' },
  { name: 'SQL', level: 'Advanced' },
  // { name: 'Python', level: 'Intermediate' },
  // { name: 'Django', level: 'Intermediate' },
  // { name: 'CI/CD', level: 'Intermediate' },
  // { name: 'Agile/Scrum', level: 'Intermediate' },
  { name: 'Continuous Learning', level: 'Advanced' },
  { name: 'Problem Solving', level: 'Advanced' },
  { name: 'Teamwork', level: 'Advanced' },
  { name: 'Adaptability', level: 'Advanced' },
  { name: 'Time Management', level: 'Advanced' },
  { name: 'Attention to Detail', level: 'Advanced' },
  { name: 'Communication', level: 'Advanced' },
  { name: 'Leadership', level: 'Intermediate' },
  { name: 'Passion for Technology', level: 'Advanced' },
];

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        Download my resume:{' '}
        <a href="path-to-my-resume.pdf" target="_blank" rel="noopener noreferrer">
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
