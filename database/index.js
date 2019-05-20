const mysql = require('mysql');
const mysqlConfig = require('./config');

const connection = mysql.createConnection(mysqlConfig);

// connection.connect((err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('mySQL connection success');
//   }
// });

module.exports = connection;
