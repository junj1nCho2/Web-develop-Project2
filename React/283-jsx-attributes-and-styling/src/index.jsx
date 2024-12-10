import React from "react";
import ReactDOM from "react-dom/client";
import "../public/styles.css"; //상대경로 
// import "/283-jsx-attributes-and-styling/public/styles.css"; //절대경로 


// react-dom/client: React 18에서 클라이언트 렌더링을 위한 모듈 
// client가 포함된 이유: 새로운 렌더링 API(createRoot)와 React 18의 Concurrent Mode를 지원하기 위함

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1 class="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>
);
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
