require("dotenv").config();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  port: DB_PORT,
  database: DB_SCHEMA
});

connection.connect(function(err) {
  if (err) {
    console.log(
      "connection.js - An error happened while connecting to mysql database"
    );
    throw err;
  }
  console.log("Connected successfully to mysql DB - " + connection.threadId);
});

module.exports = connection;
