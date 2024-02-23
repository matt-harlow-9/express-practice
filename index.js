// index.js
const http = require('http');
const routes = require('./routes');

const handleRequest = (req, res) => {
    if(routes[req.url] !== undefined) {
        routes[req.url](req, res);
    } else {
        res.end("404, no such route");
    }
};

const server = http.createServer(handleRequest);

server.listen(8000, () => {
    console.log("Listening...");
});