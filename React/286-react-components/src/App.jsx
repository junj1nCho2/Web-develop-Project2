import React from "react"; 
import Heading from "./Heading";
import List from "./List"

function App() {
    return (
        <div>
            {/* <Heading></Heading> */}
            {/* 자식 요소가 있을 경우<Heading>내용</Heading> */}
            <Heading />
            {/* 아무 내용이 없을 때 <Heading /> (더 간단하고 깔끔!) */}
            <List />
        </div>
    ); 
}

export default App; 

//App 컴포넌트를 다른 파일에서 사용할 수 있게 내보냄/ 기본으로 내보내는 값