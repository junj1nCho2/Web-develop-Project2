import express from "express"; 

const app = express(); 
const port = 3000; 

app.get("/", (req, res) => {
    const today = new Date("November 16, 2024:11:13:00");
    const day = today.getDay();

    // console.log(day);
    let type = "a weekday"; 
    let adv = "it's time to work hard"

    if (day === 0 || day === 6) {
        type = "the weekend"; 
        adv = "it's time to have some fun"; 
    }; 
    
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
}); 

app.listen(port, () => {
     console.log(`1server running on port ${port}.`);
    console.log("2server running on port " + String(port) + ".");
}); 
