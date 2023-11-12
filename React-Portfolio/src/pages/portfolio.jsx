import React from 'react';
import Project from '../components/Project';
import AnimatedExample from '../components/Animated/AnimatedExample';
import '../styles/styles.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Wine Wizard',
      imageSrc: 'path-to-image-1.jpg',
      deployedLink: ' https://wine-wizard-a6de255e2c53.herokuapp.com/',
      githubLink: 'https://github.com/ramitaarora/wine-wizard',
    },
    {
      title: 'First Portfolio',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'https://bellaloc.github.io/Portfolio/',
      githubLink: 'https://github.com/bellaloc/Portfolio',
    },
    {
      title: 'Password Generator',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'https://github.com/bellaloc/PasswordGenerator',
      githubLink: 'https://bellaloc.github.io/PasswordGenerator',
    }, 
    {
      title: 'Coding Quiz',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'https://bellaloc.github.io/JsCodingQuiz',
      githubLink: 'https://github.com/bellaloc/JsCodingQuiz/tree/main',
    }, 
    {
      title: 'Day Planner',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'https://github.com/bellaloc/dayPlannerHomework',
      githubLink: ' https://bellaloc.github.io/dayPlannerHomework',
    }, 
    {
      title: 'Weather App',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'https://github.com/bellaloc/Weather',
      githubLink: 'https://bellaloc.github.io/Weather',
    },
    
   
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index} // Make sure to use a unique key for each project
            title={project.title}
            imageSrc={project.imageSrc}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <AnimatedExample /> {/* Include the suggested animated component */}
    </section>
  );
};

export default Portfolio;
