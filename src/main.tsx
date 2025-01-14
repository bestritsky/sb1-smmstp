import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Function to initialize the app
function initBrookfieldPodiatry(containerId: string) {
  const container = document.getElementById(containerId);
  if (container) {
    createRoot(container).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

// Make the init function available globally
(window as any).initBrookfieldPodiatry = initBrookfieldPodiatry;

// Auto-initialize if the default container exists
const defaultContainer = document.getElementById('root');
if (defaultContainer) {
  initBrookfieldPodiatry('root');
}