import React from 'react';
import './About.css';

// Import your profile image - adjust the path as needed
import profileImage from '../assets/image.png';

const About = ({ onBack }) => {
  return (
    <div className="about-container">
      <button className="back-button" onClick={onBack}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </button>

      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">About</h1>
          <p className="about-subtitle">
            Crafting digital experiences with purpose
          </p>
        </div>

        <div className="about-section">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div className="profile-image-overlay"></div>
          </div>
          
          <div className="about-text">
            <p className="paragraph">
              I’m a second-year B.Tech student in Computer Science and Engineering, passionate about building impactful digital experiences and exploring full-stack development. With a strong foundation in C programming and hands-on experience in modern web and mobile technologies, 
              I enjoy turning ideas into functional, user-friendly applications.
            </p>
            
            <p className="paragraph">
        I actively work with JavaScript, HTML, TailwindCSS, React, Remix, Node.js, MongoDB, and React Native, which allows me to build everything from responsive websites to cross-platform mobile apps. My curiosity drives me to constantly learn and improve,
         while my goal is to create scalable solutions that merge creativity with performance.
            </p>
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">SRM University </h3>
                <p className="timeline-company">B.Tech CSE </p>
                <p className="timeline-date">2024 - Present</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Scholars Global School</h3>
                <p className="timeline-company">Secondary Education</p>
                <p className="timeline-date">2022 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;