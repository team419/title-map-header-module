const mysql = require('mysql');

// Create connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'title_module',
});

module.exports = db;
