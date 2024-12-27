import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts) {
  return <Card 
    id={contacts.id}
    key={contacts.id}
    // key: 배열 렌더링시, 각 요소를 고유하게 식별하기 위해, 항상 고유한 값!(인덱스 사용 금지)
    name={contacts.name}
    img={contacts.imgURL}
    tel={contacts.phone}
    email={contacts.email} />; 
  
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* map: 배열 순회, 각 요소를 기반으로 컴포넌트를 동적으로 생성하는데 사용 */}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
