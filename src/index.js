import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EuiContext, EuiProvider } from '@elastic/eui';
import en from './json/en.json';
import vn from './json/vn.json';
import "@elastic/eui/dist/eui_theme_light.css";
// import "@elastic/eui/dist/eui_theme_dark.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const Root=()=>{
  const [language, setLanguage] = useState('vn');
  
  const translations = language === 'en' ? en : vn;
  return(
    <EuiProvider>
      <EuiContext i18n={{ mapping: translations }}>
        <App language={language} setLanguage={setLanguage} />
      </EuiContext>
      </EuiProvider>
  )
}
root.render(
    <Root />
);
