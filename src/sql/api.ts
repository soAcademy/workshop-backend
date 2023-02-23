import { db } from "./db";

export const getTeachers = () => {
  const sql = "SELECT * FROM public.teachers";
  return db.query(sql).then((res) => res.rows);
};
