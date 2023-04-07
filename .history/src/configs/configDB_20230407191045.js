import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const createConnectionPool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
  })
  .promise();

export default createConnectionPool;
