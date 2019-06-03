const mysql = require('mysql');

// Create connection to MySQL database
// const db = mysql.createConnection({
//   host: 'database',
//   user: 'root',
//   password: 'docking',
//   database: 'title_module',
// });

const db = mysql.createConnection('mysql://root:docking@database:3306/title_module');

module.exports = db;
