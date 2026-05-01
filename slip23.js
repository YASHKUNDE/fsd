const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>
    res.send(`<form method="POST" action="/login">
        <input name="username" placeholder="User">
        <input name="password" type="password" placeholder="Pass">
        <button>Login</button>
        </form>`)
    );

app.post('/login', async (req, res) => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Shiv@123',
        database: 'mydb'
    });

    const [rows] = await conn.query(
        'SELECT * FROM users WHERE username=? AND password=?',
        [req.body.username, req.body.password]
    );

    res.send(rows.length ? "Login Success " : "Login Fail");
    await conn.end();
});

app.listen(3000, () => console.log("http://localhost:3000"));