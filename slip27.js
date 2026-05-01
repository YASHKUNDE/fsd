const http = require('http');
const myModule = require('./modules');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Current Date & Time: " + myModule.getDateTime());

}).listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
