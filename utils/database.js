const mysql = require('mysql2');

const poolConnections = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: process.env.DB_NAME,
    password: process.env.MYSQL_PASSWORD
})

module.exports = poolConnections.promise();