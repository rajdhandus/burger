require("dotenv").config({ path: __dirname + "/.env" });
const mysql = require("mysql");

const connectionParams = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_SCHEMA
};
let connection;

//adding JAWSDB_URL

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(connectionParams);
}

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
