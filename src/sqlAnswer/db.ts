import { Client } from "pg";
import * as sqlString from "sqlstring";

const db = new Client({
  user: "postgres",
  database: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
});

db.connect();

export const escape = (str: string) => sqlString.escape(str);

export const query = (query: string) => db.query(query);
