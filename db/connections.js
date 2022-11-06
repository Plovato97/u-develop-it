const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user: 'root',
        // your mysql password
        password: '@Themightylion0769godly',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;