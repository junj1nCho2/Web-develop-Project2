import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./../public/styles.css"; 

// 'root' ID를 가진 DOM 요소를 가져옵니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// 렌더링할 내용을 작성합니다.
root.render(
  <App /> // React 컴포넌트를 올바르게 전달합니다.
);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


