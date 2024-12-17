const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',     // MySQL server
  user: 'root',          // Your username
  password: 'HarshuR!123',          // Your password
  database: 'employeeDB' // Database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

module.exports = db;
