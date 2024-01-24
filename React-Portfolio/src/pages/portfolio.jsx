import React from 'react';
import Project from '../components/Project';
//import AnimatedExample from '../components/Animated/AnimatedExample';
import '../styles/styles.css';
import { Link } from "react-router-dom"

const Portfolio = () => {
  const projects = [
    {
      title: 'Wine Wizard',
      imageSrc: 'path-to-image-1.jpg',
      deployedLink: ' https://wine-wizard-a6de255e2c53.herokuapp.com/',
      githubLink: 'https://github.com/ramitaarora/wine-wizard',
    },
    {
      title: 'Book Search Engine',
      imageSrc: 'path-to-image-1.jpg',
      deployedLink: ' https://murmuring-retreat-88718-1ebbef69cc1f.herokuapp.com/',
      githubLink: 'https://github.com/booksearchengine',
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
      deployedLink: 'https://bellaloc.github.io/Weather/',
      githubLink: 'https://github.com/bellaloc/Weather',
    },
    {
      title: 'Employee Management System',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'https://bellaloc.github.io/employeeMgmtSystem/',
      githubLink: 'https://github.com/bellaloc/employeeMgmtSystem',
    },
    {
      title: 'Regex Tutorial',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'https://github.com/bellaloc/RegexTutorial',
      githubLink: 'https://gist.github.com/bellaloc/53dff2d3cec06a490432af65733532db',
    },
    {
      title: 'Tech Blog',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: 'heroku: https://morning-temple-91811-57fafbc7cf6d.herokuapp.com/',
      githubLink: 'https://github.com/bellaloc/TechBlogLinks',
    },
    {
      title: 'Social Network',
      imageSrc: 'path-to-image-2.jpg',
      deployedLink: '',
      githubLink: 'https://github.com/bellaloc/SocialNetwork',
    },
   
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Link to = { project.deployedLink}>
          <Project
            key={index} // Make sure to use a unique key for each project
            title={project.title}
            imageSrc={project.imageSrc}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
          </Link>
        ))}
      </div>
      <AnimatedExample /> {}
    </section>
  );
};

export default Portfolio;
