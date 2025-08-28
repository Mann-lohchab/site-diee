// MinimalDock.jsx
import { useState } from 'react';

const MinimalDock = ({ currentSection, onSectionChange }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const dockItems = [
    { 
      id: 'home', 
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
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="m12 1 0 6m0 6v6m11-7h-6m-6 0H1"/>
        </svg>
      ),
      label: 'About'
    },
    { 
      id: 'blog', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      label: 'Blog'
    },
    { 
      id: 'contact', 
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
      {hoveredItem && (
        <div className="dock-tooltip">
          {hoveredItem.label}
        </div>
      )}
      
      {/* Minimal Dock */}
      <div className="minimal-dock-container">
        <div className="minimal-dock">
          {dockItems.map((item) => (
            <button
              key={item.id}
              className={`minimal-dock-item ${currentSection === item.id ? 'active' : ''}`}
              onClick={() => onSectionChange(item.id)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.icon}
              {currentSection === item.id && <div className="active-indicator" />}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MinimalDock;