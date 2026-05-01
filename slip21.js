const mysql = require('mysql2/promise');

async function manageCustomers() {
    try {
        const con = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'suyash123',
            database: 'customers'
        });

        const deleteId = 2;

        const [result] = await con.query('DELETE FROM customers WHERE id = ?', [deleteId]);
        const [updatedRows] = await con.query('SELECT * FROM customers');

        console.log("\nAfter Delete:");
        console.table(updatedRows);
        await con.end();

    } catch (err) {
        console.error("Error:", err.message);
    }
}

manageCustomers();