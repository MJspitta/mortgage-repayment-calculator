import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const getRoot = document.getElementById('root');
const root = createRoot(getRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);