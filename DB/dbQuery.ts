import { pool } from "./pool";

export const dbQuery = (query: string, params: any) => {
  pool.getConnection(function (err: any, connection: any) {
    if (err) throw err;
    connection.query(
      query,
      params,
      function (error: any, results: any, fields: any) {
        if (error) throw error;
        console.log(results);
        connection.release();
      }
    );
  });
};
