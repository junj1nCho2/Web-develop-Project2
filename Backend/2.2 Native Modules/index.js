const fs = require("fs");

// fs.writeFile("message.txt", "hello from NodeJS!", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

<<<<<<< HEAD
fs.readFile("./message.txt", (err, data) => {
=======
fs.readFile("./message.txt", "utf8", (err, data) => {
>>>>>>> 138af41220b73236d6731bed310ce71469bc2203
    if (err) throw err;
    console.log(data);
}); 