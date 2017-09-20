const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.write(JSON.stringify({
        url: req.url
    }));
    res.end();
});
server.listen(1337);

// Option1
function functionName1 (arguments) {
    return whatever;
}

// Option2
var functionName2 = function(arguments) {
    return whatever;
}

// Better than option 2
const functionName3 = function (arguments) {
    this
    return whatever;
}

// Modern way
const functionName4 = (arguments) => {
    return this.whatever;
}

// Even more cool
const functionName5 = arguments => {
    return this.whatever;
}

// The coolest
const functionName6 = arguments => this.whatever;
const MultiplyBy2 = value => value * 2;