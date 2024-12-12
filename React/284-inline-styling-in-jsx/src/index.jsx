import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <h1 style={{ color: "blue" }}>hello world!</h1>
    //jsx: style 속성에 CSS를 객체 형식으로 전달해야함, camelCase!로 작성!
    // 첫번째 중괄호: JSX표현식을 감싸기 위해, 두번째 중괄호: JS 객체!
); 

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
