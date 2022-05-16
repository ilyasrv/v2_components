import React from 'react';
import ReactDOM from "react-dom";
import { App } from './App';



// import './index.css';
// import MyComponent from './components/features/index.jsx';
// import { Appform } from './components/FormNew';
//import Reviews from './components/reviews/Reviews';


ReactDOM.render(
  (
    <React.StrictMode> 
      <App />
    </React.StrictMode>
  ),
  document.getElementById("root")
);





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode> 
//     <App />   
//     <Appform />
//     <Features /> 
//   </React.StrictMode>
// );
// reportWebVitals();
