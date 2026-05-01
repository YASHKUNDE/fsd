const express = require('express');
const path = require('path');
const app = express();

app.get('/download', (req, res) => {

    const filePath = path.join(__dirname, 'sample.txt');

    res.download(filePath, 'myfile.txt', (err) => {
        if (err) {
            res.send("Error downloading file");
        }
    });
});

app.get('/', (req, res) => {
    res.send('<h2>Download File</h2><a href="/download">Click to Download</a>');
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
