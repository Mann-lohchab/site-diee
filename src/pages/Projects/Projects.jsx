import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <Link to="/" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </Link>

      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title">🚀 My Projects</h1>
          <p className="projects-subtitle">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="projects-container">
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title"><strong>Student Portal API</strong></h3>
                  <div className="project-tech">
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                  </div>
                </div>
                <p className="project-description">
                  Intelligent chat application with natural language processing capabilities.
                  Features context-aware responses, conversation history, and seamless user experience.
                </p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Natural language processing</li>
                    <li>Context-aware conversations</li>
                    <li>Conversation history & persistence</li>
                    <li>Real-time messaging</li>
                    <li>Modern UI/UX design</li>
                  </ul>
                </div>
                <div className="project-links">
                  <a href="http://210.79.129.37" className="project-link">🔗 Live Demo</a>
                  <a href="https://github.com/Error404Found404/PortalMoney" className="project-link">📂 GitHub</a>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title"><strong>Portfolio Website</strong></h3>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">TailwindCSS</span>
                  </div>
                </div>
                <p className="project-description">
                  Modern, responsive portfolio website showcasing development skills and projects.
                  Built with performance optimization and accessibility in mind.
                </p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Responsive design for all devices</li>
                    <li>Performance optimized with lazy loading</li>
                    <li>Accessibility compliant</li>
                    <li>Modern React patterns</li>
                    <li>Clean, maintainable code</li>
                  </ul>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">🔗 Live Demo</a>
                  <a href="#" className="project-link">📂 GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;