const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.end("Error loading file");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
    
}).listen(3000, () => console.log("http://localhost:3000"));
