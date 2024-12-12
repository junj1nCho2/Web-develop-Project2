import React from "react";
import ReactDOM from "react-dom/client";
import "../public/styles.css"; //상대경로 
// import "/283-jsx-attributes-and-styling/public/styles.css"; //절대경로


// react-dom/client: React 18에서 클라이언트 렌더링을 위한 모듈 
// client가 포함된 이유: 새로운 렌더링 API(createRoot)와 React 18의 Concurrent Mode를 지원하기 위함

const root = ReactDOM.createRoot(document.getElementById("root"));
const img = "https://picsum.photos/200";

root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
    <img src={img + "?grayscale"} />
    //grayscale: 흑백 

    <img
      className="food-img"
      alt="bacon"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
    />
    <img
      className="food-img"
      alt="jamon"
      src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
    />
    <img
      className="food-img"
      alt="noodles"
      src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
    />
  </div>
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
