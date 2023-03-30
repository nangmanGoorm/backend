const mysql = require('mysql2/promise');

const rdsConfig = {
  development: {
    host: process.env.DB_host,
    user: process.env.DB_user,
    port: 3306,
    password: process.env.DB_password,
    database: process.env.DB_database,
    connectionLimit: process.env.DB_connectionLimit,
  },
};

const pool = mysql.createPool(rdsConfig.development);

module.exports = pool;
