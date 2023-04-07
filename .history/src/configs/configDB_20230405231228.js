import mysql from "mysql2";

const createConnectionPool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejs_basic",
});

export default createConnectionPool;
