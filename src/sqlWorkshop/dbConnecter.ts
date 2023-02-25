import { Client } from "pg";

// ตัวที่ connect กับ database

export const db = new Client({
  user: "postgres",
  database: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
});

db.connect();
