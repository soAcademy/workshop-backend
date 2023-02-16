import { escape, query } from "./db";

export const getTeachers = () => {
  const sql = ("SELECT * FROM public.teachers")
  return query(sql).then((res) => res.rows);
}