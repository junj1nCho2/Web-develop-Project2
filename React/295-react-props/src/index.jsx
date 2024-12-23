import React from "react";
import ReactDOM from "react-dom/client";
import "../public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")); 

function Card(props) {

  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img
        src={props.img} alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
//Card는 이름, 전화번호, 이메일" 같은 정보를 받아서 완성된 그림을 만듦"
root.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+64687698"
      email="jack@sdfs.com"
    />
    {/* <input id="fName" placeholder="Enter your first name." value="junjinchoi" /> */}
  </div>,
  console.log("ss"); 
);
//root.render()는 완성된 그림을 액자에 넣어서 벽에 걸어주는 사람

//브라우저:그림이 걸린 벽

// 주의할 점: 문자열로 쓰지 않고 변수처리 하기!!ㅠㅠ
// JSX안에서 문자열 그대로를 표시하려면 따옴표""
// 변수나 동적으로 계산된 값을 사용하려면 중괄호{}//