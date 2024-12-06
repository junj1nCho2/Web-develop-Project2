//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

//React를 이용해 HTML 요소를 Dom에 렌더링하는 과정 
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//     <div>
//         <h1>My favourite Foods</h1>
//         <ul>
//             <li>Bacon</li>
//             <li>Noodles</li>
//             <li>Jamon</li>
//         </ul>
//     </div>
//     document.getElementById("root")
// );
// div안의 2개의 하위요소: ul, H1
//----------------실행되지 않음-------------------

//-----------------해결---------------------------
//원인: React19버전 이후로 ReactDOM.createRoot API를 사용해야 됨! 
import React from "react";
import ReactDOM from "react-dom/client";

// 'root' ID를 가진 DOM 요소를 가져옵니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// 렌더링할 내용을 작성합니다.
root.render(
    <div>
        <h1>My favourite Foods</h1>
        <ul>
            <li>Bacon</li>
            <li>Noodles</li>
            <li>Jamón</li>
        </ul>
    </div>
);
