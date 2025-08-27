import './About.css';
import Dither from '../components/bg';

function About({ onBack }) {
  return (
    <div className="about-container">
      {/* Background */}
      <div className="about-background">
        <Dither />
      </div>
      
      {/* Navigation */}
      <nav className="about-nav">
        <div className="nav-brand">
          <div className="logo-badge">
            <span>P</span>
          </div>
          <div className="brand-text">Portfolio</div>
        </div>
        <button onClick={onBack} className="back-btn">
          <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      </nav>

      {/* Main Content */}
      <div className="about-content">
        <div className="about-wrapper">
          {/* Header */}
          <div className="about-header">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
              Passionate developer with a love for creating meaningful digital experiences
            </p>
          </div>

          {/* Content Grid */}
          <div className="about-grid">
            {/* Bio Section */}
            <div className="bio-section">
              <h2 className="section-title">My Story</h2>
              <div className="bio-content">
                <p>
                  I'm a creative developer with over 5 years of experience in building 
                  web applications and digital products. My journey started with a 
                  curiosity for how things work, which led me to explore the intersection 
                  of design and technology.
                </p>
                <p>
                  I believe in crafting solutions that not only look beautiful but also 
                  solve real problems. Every project is an opportunity to push boundaries 
                  and create something that makes a difference.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or enjoying a good cup of coffee 
                  while sketching out new ideas.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <h2 className="section-title">Expertise</h2>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <h3>Frontend Development</h3>
                  <p>React, Vue.js, TypeScript, Next.js</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="expertise-item">
                  <h3>Backend Development</h3>
                  <p>Node.js, Python, PostgreSQL, MongoDB</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="expertise-item">
                  <h3>UI/UX Design</h3>
                  <p>Figma, Adobe XD, Prototyping, User Research</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="expertise-item">
                  <h3>Mobile Development</h3>
                  <p>React Native, Flutter, iOS, Android</p>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="experience-section">
              <h2 className="section-title">Experience</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Senior Frontend Developer</h3>
                    <p className="timeline-company">TechCorp Inc.</p>
                    <p className="timeline-date">2022 - Present</p>
                    <p className="timeline-desc">
                      Leading frontend development for enterprise applications, 
                      mentoring junior developers, and architecting scalable solutions.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Full Stack Developer</h3>
                    <p className="timeline-company">StartupXYZ</p>
                    <p className="timeline-date">2020 - 2022</p>
                    <p className="timeline-desc">
                      Built multiple web applications from scratch, implemented 
                      CI/CD pipelines, and collaborated with cross-functional teams.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>Frontend Developer</h3>
                    <p className="timeline-company">Digital Agency</p>
                    <p className="timeline-date">2019 - 2020</p>
                    <p className="timeline-desc">
                      Developed responsive websites and web applications for various 
                      clients, focusing on performance and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="contact-section">
              <h2 className="section-title">Let's Work Together</h2>
              <p className="contact-text">
                I'm always excited to take on new challenges and collaborate on 
                interesting projects. Let's create something amazing together!
              </p>
              <div className="contact-buttons">
                <button className="btn-primary">
                  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in Touch
                </button>
                <button className="btn-secondary">
                  <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;