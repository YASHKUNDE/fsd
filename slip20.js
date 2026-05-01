const mysql = require('mysql2/promise');

async function insertStudents() {

    try {
        const con = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'suyash123',
            database: 'mydb'
        });

        const students = [
            ['Kunal', 'kunal@gmail.com'],
            ['Rahul', 'rahul@gmail.com'],
            ['Sneha', 'sneha@gmail.com']
        ];

        const q = 'INSERT INTO student (name, email) VALUES ?';
        const [result] = await con.query(q, [students]);
        console.log("Insert Result:");
        console.log(result);
        await con.end();

    } catch (err) {
        console.error("Error:", err.message);
    }
}

insertStudents();