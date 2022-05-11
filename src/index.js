import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Features from './components/features/Features';
import { Appform } from './components/FormNew';

//import Reviews from './components/reviews/Reviews';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />   
    <Appform />
    <Features /> 
  </React.StrictMode>
);
reportWebVitals();
