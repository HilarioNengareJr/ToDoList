import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css';

const rootElement = createRoot(document.getElementById('root'));

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

