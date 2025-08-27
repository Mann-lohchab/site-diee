import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Ensure the root element exists and has proper styling
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

// Set root element styles to ensure full viewport coverage
rootElement.style.margin = '0'
rootElement.style.padding = '0'
rootElement.style.width = '100vw'
rootElement.style.height = '100vh'
rootElement.style.overflow = 'hidden'

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)