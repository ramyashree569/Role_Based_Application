import { DATA_SOURCES } from "../config/config";
import mysql from "mysql";

const dataSource = DATA_SOURCES.mySqlDataSource;

//pool Creation
export const pool = mysql.createPool({
  host: dataSource.DB_HOST,
  user: dataSource.DB_USER,
  password: dataSource.DB_PASSWORD,
  database: dataSource.DB_DATABASE,
  connectionLimit: dataSource.DB_CONNECTION_LIMIT,
});
