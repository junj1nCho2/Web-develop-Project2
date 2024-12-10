import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.jsx'

// let fName = "junjin"
// let lname = "choi"; 
// let num = 7; 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <div>
//       <h1>Hello {`${fName} ${lname}`}!</h1> 
//       <p>Your lucky number is {Math.floor(Math.random() * 100)}</p>
      
//     </div>
//   </React.StrictMode>
// );

// //Create a react app from scratch.
// import React from "react";
// import ReactDOM from "react-dom/client";

// //It should display 2 paragraph HTML elements.

// // 렌더링할 내용을 작성합니다.
// const currentYear = new Date().getFullYear(); // 현재 연도

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <div>
//     <p>Created by YOURNAME</p>
//     <p>Copyright {currentYear}</p>
//   </div>
// );
