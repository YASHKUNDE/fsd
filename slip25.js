const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Recipe Book</h2><a href="/recipes">View Recipes</a>');
});

app.get('/recipes', async (req, res) => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Shiv@123',
        database: 'mydb'
    });

    const [rows] = await conn.query('SELECT * FROM recipes');
    await conn.end();

    res.send(
        "<h2>Recipes</h2>" +
        rows.map(r => `<p><b>${r.name}</b>: ${r.steps}</p>`).join('') +
        "<br><a href='/'>Back</a>"
    );
});

app.listen(3000, () => console.log("http://localhost:3000"));