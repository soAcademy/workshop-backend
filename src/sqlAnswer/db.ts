import { Client } from "pg";

export const db = new Client({
  user: "postgres",
  database: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
});

// const db = new Client({
//   user: process.env.DB_USER || "postgres",
//   database: process.env.DB_DATABASE || "postgres",
//   password: process.env.DB_PASSWORD || "password",
//   host: process.env.DB_HOST || "localhost",
//   port: Number(process.env.DB_PORT) || 5432,
// });

db.connect();

// export const query = (query: string) => db.query(query);
