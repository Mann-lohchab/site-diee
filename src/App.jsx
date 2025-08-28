import { useState } from 'react';
import './App.css';
import Dither from './components/bg';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About onBack={() => setCurrentSection('home')} />;
      case 'blog':
        return <Blog onBack={() => setCurrentSection('home')} />;
      case 'home':
      default:
        return (
          <>
            {/* Background */}
            <div className="background-container">
              <Dither
                waveColor={[0.2, 0.2, 0.2]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.2}
                colorNum={3}
                waveAmplitude={0.2}
                waveFrequency={2}
                waveSpeed={0.03}
              />
            </div>

            {/* Navigation */}
            <nav className="main-nav">
              <div className="nav-brand">
                <div className="logo-badge">
                  <span>P</span>
                </div>
                <div className="brand-text">Portfolio</div>
              </div>
              <div className="nav-links">
                <a
                  href="#blog"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentSection('blog');
                  }}
                >
                  Blog
                  <span className="nav-underline"></span>
                </a>
                <a
                  href="#about"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentSection('about');
                  }}
                >
                  About
                  <span className="nav-underline"></span>
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                  <span className="nav-underline"></span>
                </a>
                <button className="hire-btn">
                  Hire Me
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="mobile-menu">
                <button className="mobile-menu-btn">
                  <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>

            {/* Main Content */}
            <div className="main-content">
              <div className="hero-container">
                {/* Hero Section */}
                <div className="hero-section">
                  <h1 className="hero-title">
                    Creative
                    <br />
                    <span className="hero-title-bold">Developer</span>
                  </h1>
                  <p className="hero-subtitle">
                    Crafting digital experiences with precision and purpose
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="cta-buttons">
                  <button className="btn-primary">
                    View Work
                  </button>
                  <button className="btn-secondary">
                    Get in Touch
                  </button>
                </div>

                {/* Skills/Services Grid */}
                <div className="skills-grid">
                  <div className="skill-item">
                    <div className="skill-label">Frontend</div>
                    <div className="skill-tech">React & Vue</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-label">Backend</div>
                    <div className="skill-tech">Node & Python</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-label">Design</div>
                    <div className="skill-tech">UI/UX</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-label">Mobile</div>
                    <div className="skill-tech">React Native</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="footer">
              <div className="footer-content">
                <div className="availability">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <div className="status-pulse"></div>
                  </div>
                  Available for freelance projects
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link">
                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="social-link">
                    <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="app-container">
      {renderSection()}
    </div>
  );
}

export default App;