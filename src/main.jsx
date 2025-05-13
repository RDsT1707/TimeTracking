// main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Créer le root une seule fois ici
const root = createRoot(document.getElementById('root'));

// Rendre l'application à partir de 'App'
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
