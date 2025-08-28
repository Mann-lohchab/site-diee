import { useState, useEffect } from "react";
import "./App.css";
import Dither from "./components/bg";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";
import MinimalDock from "./components/dock";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsVisible(true);
    const preloadSections = async () => {
      await Promise.all([
        import("./pages/About"),
        import("./pages/Blog"),
        import("./pages/contact"),
      ]);
    };
    preloadSections();

    // Handle window resize for responsiveness
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <About onBack={() => setCurrentSection("home")} isMobile={isMobile} />;
      case "blog":
        return <Blog onBack={() => setCurrentSection("home")} isMobile={isMobile} />;
      case "contact":
        return <Contact onBack={() => setCurrentSection("home")} isMobile={isMobile} />;
      case "home":
      default:
        return (
          <>
            {/* Background */}
            <div className="background-container">
              <Dither
                waveColor={[0.1, 0.1, 0.1]}
                disableAnimation={isMobile} // Disable animation on mobile for performance
                enableMouseInteraction={!isMobile} // Disable mouse interaction on mobile
                mouseRadius={0.2}
                colorNum={3}
                waveAmplitude={0.1}
                waveFrequency={1.5}
                waveSpeed={0.02}
              />
            </div>

            {/* Main Content */}
            <main className={`main-content ${isVisible ? "fade-in" : ""}`}>
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Creative Dev</span>
              </h1>
              <p className="hero-subtitle">
                Building clean, functional & user-friendly digital experiences.
              </p>

              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => setCurrentSection("blog")}
                >
                  View Work
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => setCurrentSection("contact")}
                >
                  Contact Me
                </button>
              </div>

              {/* Skills */}
              <div className="skills-grid">
                <div className="skill-item">⚡ Frontend – React</div>
                <div className="skill-item">⚙️ Backend – Node.js</div>
                <div className="skill-item">🎨 UI/UX – Tailwind</div>
                <div className="skill-item">📱 Mobile – React Native</div>
              </div>
            </main>

            {/* Footer */}
            <footer className="footer">
              <div className="social-links">
                <a href="#" className="social-link">
                  LinkedIn
                </a>
                <a href="#" className="social-link">
                  GitHub
                </a>
                <a href="#" className="social-link">
                  Twitter
                </a>
              </div>
            </footer>
          </>
        );
    }
  };

  return (
    <div className="app-container">
      {renderSection()}

      {/* Dock stays same */}
      <MinimalDock
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;