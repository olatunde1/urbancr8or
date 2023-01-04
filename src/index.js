import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './components/styles.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    
      <App />
   
  </StrictMode>
);
