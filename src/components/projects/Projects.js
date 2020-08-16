import React from 'react';
import './Projects.css';
import axios from 'axios';
import ProjectItem from './ProjectItem';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import project3 from './images/project3.jpg';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      current: null,
      project: -10,
    };
  }
  outclick = false;
  projects = [
    {
      name: 'To-do List',
      index: 0,
      description: 'My first react app for a to-do list ',
      technologies: ['devicon-react-original-wordmark'],
      image: project1,
      github: 'https://github.com/JAnanthakrishnan/React-learn',
      live_demo: '#!',
    },
    {
      name: 'To-do List',
      description: 'My first vue app for a to-do list',
      technologies: ['devicon-vuejs-plain-wordmark'],
      image: project2,
      index: 1,
      github: 'https://github.com/JAnanthakrishnan/vue_learn',
      live_demo: '#!',
    },
    {
      name: 'To-do List',
      description: 'My first angular app for a to-do list',
      technologies: ['devicon-angularjs-plain-wordmark'],
      image: project3,
      index: 2,
      github: 'https://github.com/JAnanthakrishnan/Angular_learn',
      live_demo: '#!',
    },
  ];
  handleClick = (id, e) => {
    e.preventDefault();
    if (!this.outclick) {
      this.setState((state) => ({
        clicked: !state.clicked,
        current: this.projects[id],
        project: id,
      }));
    }
  };
  outsideClick = (e) => {
    this.outclick = true;
    if (this.outclick) {
      setTimeout(() => {
        this.outclick = false;
      }, 200);
    }

    e.preventDefault();
    this.setState((state) => ({
      clicked: !state.clicked,
      current: null,
      project: -10,
    }));
  };

  render() {
    return (
      <section id="projects">
        <div
          className={this.state.clicked ? 'wrapper blur' : 'wrapper'}
          id="project-wrapper"
        >
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="projectContainer">
          <h1>
            Available <span className="color-secondary">Courses</span>
          </h1>
          <p>Check for your course...</p>

          <div className="projectbox">
            {this.projects.map((project) => (
              <div className="item">
                <a
                  href="#!"
                  className="pimage"
                  onClick={(e) => this.handleClick(project.index, e)}
                >
                  <img src={project.image} alt="Project" />
                </a>
                <a href={project.live_demo} className="btn-light">
                  <i className="fas fa-eye"></i>
                  {' ' + project.name}
                </a>
                <a href={project.github} className="btn-dark">
                  <i className="fab fa-github"></i>
                  {' Github'}
                </a>
              </div>
            ))}
          </div>
        </div>

        {this.state.clicked && (
          <ProjectItem info={this.state} outsideClick={this.outsideClick} />
        )}
      </section>
    );
  }
}

export default Projects;
