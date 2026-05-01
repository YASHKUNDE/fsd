const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>E-Learning System</h2><a href="/courses">View Courses</a>');
});

app.get('/courses', async (req, res) => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'suyash123',
        database: 'mydb'
    });

    const [rows] = await conn.query('SELECT * FROM courses');
    await conn.end();

    res.send(
        "<h2>Courses</h2>" +
        rows.map(c => `<p>${c.name}</p>`).join('') +
        "<br><a href='/'>Back</a>"
    );
});

app.listen(3000, () => console.log("http://localhost:3000"));