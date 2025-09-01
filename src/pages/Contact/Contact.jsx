import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Link to="/" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </Link>

      <div className="contact-content">
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Let's <span className="hero-highlight">Connect</span>
            </h1>
            <p className="hero-subtitle">
              Full-Stack Developer | Open Source Contributor | Problem Solver
            </p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="contact-methods">
          <div className="method-card primary">
            <div className="method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                <path d="M21 12l-7.89-4.26a2 2 0 00-2.22 0L3 12"/>
              </svg>
            </div>
            <div className="method-content">
              <h3 className="method-title">Email</h3>
              <p className="method-value">10324210286@stu.srmuniversity.ac.in</p>
              <p className="method-description">Drop me a line for collaborations and opportunities</p>
            </div>
          </div>

          <div className="method-card">
            <div className="method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="method-content">
              <h3 className="method-title">Location</h3>
              <p className="method-value">Delhi-NCR, India</p>
              <p className="method-description">Open to remote work and global opportunities</p>
            </div>
          </div>

          <div className="method-card">
            <div className="method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="method-content">
              <h3 className="method-title">Response Time</h3>
              <p className="method-value">Within 24 hours</p>
              <p className="method-description">Quick responses during business hours IST</p>
            </div>
          </div>
        </div>

        {/* Social Profiles Section */}
        <div className="social-section">
          <h2 className="section-title">Find Me Online</h2>
          <div className="social-grid">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">LinkedIn</h3>
                <p className="social-description">Professional networking and career updates</p>
              </div>
              <div className="social-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </div>
            </a>

            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-card github">
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">GitHub</h3>
                <p className="social-description">Open source projects and contributions</p>
              </div>
              <div className="social-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </div>
            </a>

            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-card twitter">
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
              <div className="social-content">
                <h3 className="social-title">Twitter</h3>
                <p className="social-description">Tech discussions and industry insights</p>
              </div>
              <div className="social-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">🚀 Ready to Start a Project?</h2>
              <p className="cta-text">
                I'm always excited to work on innovative projects and collaborate with like-minded developers.
                Whether you have a project in mind or just want to connect, I'd love to hear from you!
              </p>
              <div className="cta-actions">
                <a href="mailto:10324210286@stu.srmuniversity.ac.in" className="cta-button primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Send Email
                </a>
                <span className="cta-separator">or</span>
                <div className="cta-social">
                  <span>Connect on</span>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link-small">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;