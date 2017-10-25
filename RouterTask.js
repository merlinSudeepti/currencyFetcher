// Make a node web server
// With express, use a router to create a single route /whatever
// When user opens this route, use callbacks to wait 2 seconds and then return a string/message to the user "I am loaded"


const express = require('express');

const app = express();
app.get('/', function (req, res) {
    setTimeout(() => {
        res.send("Hello! Wait 5 seconds");
    }, 5000);
});
//console.log("I am loaded"), 2000);
//res.send('Hello!');
//setTimeout(() => console.log("I am loaded"), 2000);

app.listen(3000, function () {
    console.log("Listening on port 3000");
});

//const waht = [1, 2, 5, 4]
//( waht[3] > 5 ? console.log : console.error )(waht)


