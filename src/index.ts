import express, { Request, Response } from "express";
import mysql from "mysql";
import { dbQuery } from "../DB/dbQuery";

const app = express();

let queryString: string = "SELECT * FROM new_table";

dbQuery(queryString, "ok");

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
