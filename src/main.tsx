import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './translations.js';
import './script.js';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
