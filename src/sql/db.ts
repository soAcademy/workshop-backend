import { Client } from "pg";
// connect with dBeaver
export const db = new Client({
  user: "postgres",
  database: "postgres",
  password: "password",
  host: "localhost",
  port: 5432, //port connecting with dBeaver (SQL)
});

db.connect();
