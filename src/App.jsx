import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import MinimalDock from "./components/dock";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);

    // Handle window resize for responsiveness
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get current section from pathname
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path === "/about") return "about";
    if (path === "/projects") return "projects";
    if (path === "/contact") return "contact";
    return "home";
  };

  return (
    <div className="app-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home isVisible={isVisible} isMobile={isMobile} />} />
          <Route path="/about" element={<About isMobile={isMobile} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact isMobile={isMobile} />} />
        </Routes>
      </Suspense>

      {/* Dock with routing support */}
      <MinimalDock
        currentSection={getCurrentSection()}
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;