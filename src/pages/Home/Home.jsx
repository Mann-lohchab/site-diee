import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Home.css';

const Home = memo(({ isVisible, isMobile }) => {
  return (
    <>
      {/* Background */}
      <div className="background-container"></div>

      {/* Main Content */}
      <main className={`main-content ${isVisible ? "fade-in" : ""}`}>
        <div className="hero-container">
          {/* Logo */}
          <div className="logo-container">
            <img src={logo} alt="Logo" className="hero-logo" />
          </div>

          <div className="hero-header">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Mann</span>
            </h1>
            <p className="hero-subtitle">
              <strong>Full-Stack Developer</strong> | React • Node.js • TypeScript • System Design
            </p>
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <p className="description">
                <strong>Computer Science Engineering Student</strong> specializing in full-stack development with expertise in modern JavaScript ecosystems.
                I architect scalable web applications, optimize performance, and implement robust backend solutions.
                Currently exploring <strong>AI/ML integration</strong>, <strong>advanced React patterns</strong>, and <strong>performance optimization</strong>.
              </p>

              <div className="skills-preview">
                <span className="skill-tag"><strong>React/Next.js</strong></span>
                <span className="skill-tag"><strong>Node.js/Express</strong></span>
                <span className="skill-tag"><strong>TypeScript</strong></span>
                <span className="skill-tag"><strong>MongoDB</strong></span>
                <span className="skill-tag"><strong>Python/ML</strong></span>
                <span className="skill-tag"><strong>Git/GitHub</strong></span>
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/about" className="btn-primary">
                Learn More About Me
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <p><strong>💡 Let's build the future together</strong></p>
          <p><em>Always open to discussing innovative ideas and technical challenges</em></p>
        </div>
      </footer>
    </>
  );
});

Home.displayName = 'Home';

export default Home;