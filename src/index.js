import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EuiProvider } from '@elastic/eui';
import "@elastic/eui/dist/eui_theme_light.css";
// import "@elastic/eui/dist/eui_theme_dark.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EuiProvider >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </EuiProvider>
);
