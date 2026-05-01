const mysql = require('mysql2/promise');

async function getCustomers() {
    try {
        const con = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'suyash123',
            database: 'customers'
        });

        const [rows] = await con.query('SELECT * FROM customers');
        console.log("Customers Data:");
        console.log(rows);
        await con.end();

    } catch (err) {
        console.error("Error:", err.message);
    }
}

getCustomers();