const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "43.201.142.147",
  user: "ubse",
  password: "ubse!",
  port: 57902,
  database: "ubseWebSite",
});

module.exports = pool;
