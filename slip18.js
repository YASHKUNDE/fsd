const mysql = require('mysql2/promise');

async function setupDB() {
    const con = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'suyash123'
    });

    await con.query('CREATE DATABASE IF NOT EXISTS mydb');
    await con.query('USE mydb');
    await con.query(`
        CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50)
        )`
    );
    
    console.log('DB & Table created ✅');
    await con.end();
}

setupDB();