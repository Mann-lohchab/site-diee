import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Import your profile image - adjust the path as needed
import profileImage from '../../assets/image.png';

const About = () => {
  return (
    <div className="about-container">
      <Link to="/" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </Link>

      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            <strong>Full-Stack Developer</strong> | <strong>Computer Science Engineering</strong> | <strong>Problem Solver</strong>
          </p>
        </div>

        <div className="about-section">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div className="profile-image-overlay"></div>
          </div>
          
          <div className="about-text">
            <p className="paragraph">
              <strong>Second-year Computer Science Engineering student</strong> with a passion for <strong>full-stack development</strong> and <strong>system architecture</strong>.
              Specialized in building <strong>scalable web applications</strong> with modern JavaScript frameworks and implementing robust backend solutions.
              Strong foundation in <strong>algorithms, data structures, and software engineering principles</strong>.
            </p>

            <p className="paragraph">
              <strong>Technical Expertise:</strong> React/Next.js, Node.js, TypeScript, MongoDB, Python, C/C++, Git<br/>
              <strong>Current Focus:</strong> Building <strong>production-ready applications</strong>, implementing <strong>component-based architectures</strong>,
              and exploring <strong>AI/ML integration</strong> in web applications. Committed to writing <strong>clean, maintainable code</strong>
              and following <strong>industry best practices</strong> for scalable software development.
            </p>
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-title">🎓 Education & Technical Background</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title"><strong>SRM University</strong></h3>
                <p className="timeline-company"><strong>B.Tech Computer Science & Engineering</strong></p>
                <p className="timeline-date"><strong>2024 - Present</strong></p>
                <p className="timeline-description">• Data Structures & Algorithms • Database Management • Software Engineering • Web Technologies</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title"><strong>Scholars Global School</strong></h3>
                <p className="timeline-company"><strong>Higher Secondary Education (CBSE)</strong></p>
                <p className="timeline-date"><strong>2022 - 2024</strong></p>
                <p className="timeline-description">• Mathematics • Physics • Computer Science • Foundation in Programming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;