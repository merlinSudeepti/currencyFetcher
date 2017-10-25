
// move from promises to async/await

const express = require('express');

const getMessage = timeToWait =>
    new Promise(resolve =>
        setTimeout(() => resolve(Math.random() * 9000), timeToWait)
    );

const wait = async (timeToWait) => {
    await getMessage(3000);
    console.log('waited');
}
wait();

const app = express();
app.get('/', (req, res) =>
    getMessage(1000).then(str => res.json(str))
);

/*async function wait(time) {
    //const wait = (time) = async(() => {
    await getMessage();
    console.log('waited');
}
*/

app.listen(3000, function () {
    console.log("Listening on port 3000");
})

