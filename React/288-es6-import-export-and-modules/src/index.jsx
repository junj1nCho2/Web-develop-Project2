import React from "react";
import ReactDOM from "react-dom/client";
import pi, { doublePi, triplePi } from "./math.js"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
);

console.log("Sss");
console.log("junjin"); 
console.log({ pi }); 
console.log(doublePi()); 
console.log(triplePi()); 
console.log("HEllO WORLD");

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
