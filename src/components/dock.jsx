// MinimalDock.jsx
import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MinimalDock = memo(({ currentSection, isMobile }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const hideTimeoutRef = useRef(null);
  const dockRef = useRef(null);
  const location = useLocation();

  // Debounced mouse move handler
  const debouncedMouseMove = useCallback(() => {
    let timeoutId;
    return (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (e.clientY > window.innerHeight - 150) {
          setIsHidden(false);
          resetHideTimer();
        }
      }, 16); // ~60fps
    };
  }, []);

  const handleMouseMove = useMemo(() => debouncedMouseMove(), [debouncedMouseMove]);

  const handleMouseEnter = useCallback(() => {
    setIsHidden(false);
    resetHideTimer();
  }, []);

  const resetHideTimer = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      setIsHidden(true);
    }, 3000); // Hide after 3 seconds of inactivity
  }, []);

  // Auto-hide functionality
  useEffect(() => {
    // Initial hide timer
    resetHideTimer();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    if (dockRef.current) {
      dockRef.current.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (dockRef.current) {
        dockRef.current.removeEventListener('mouseenter', handleMouseEnter);
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [handleMouseMove, handleMouseEnter, resetHideTimer]);

  const dockItems = [
    {
      id: 'home',
      path: '/',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      ),
      label: 'Home'
    },
    {
      id: 'about',
      path: '/about',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="m12 1 0 6m0 6v6m11-7h-6m-6 0H1"/>
        </svg>
      ),
      label: 'About'
    },
    {
      id: 'projects',
      path: '/projects',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      label: 'Projects'
    },
    {
      id: 'contact',
      path: '/contact',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Contact'
    },
  ];

  return (
    <>
      {/* Tooltip */}
      {hoveredItem && !isHidden && (
        <div className="dock-tooltip">
          {hoveredItem.label}
        </div>
      )}

      {/* Minimal Dock */}
      <div className="minimal-dock-container">
        <div
          ref={dockRef}
          className={`minimal-dock ${isHidden ? 'hidden' : ''}`}
        >
          {dockItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`minimal-dock-item ${currentSection === item.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.icon}
              {currentSection === item.id && <div className="active-indicator" />}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});

MinimalDock.displayName = 'MinimalDock';

export default MinimalDock;