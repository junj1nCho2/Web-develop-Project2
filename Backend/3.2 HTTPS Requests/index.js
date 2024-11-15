import express from "express"; 
const app = express(); 
const port = 3000; 

app.get("/", (req, res) => {
    // console.log(req, rawHeaders); 
    res.send("<h1>hello<h1>"); 
})

app.get("/about", (req, res) => {
    // console.log(req, rawHeaders); 
    res.send("<h1>about me<h1><p>My name in junjin</p>");
})

app.get("/contact", (req, res) => {
    // console.log(req, rawHeaders); 
    res.send("<h1>Contact me<h1><p>Phone: 010-1234-5678</p>");
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
}); 
//() => {}  익명의 함수를 실행했을 떄 발생 
//rawHeaders: (원시헤더) 기본적으로 요청이 발생한 곳에서 온 키와 값 쌍의 목록 