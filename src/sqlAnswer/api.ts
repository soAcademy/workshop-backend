import { escape, query } from "./db";

export const getTeachers = () => {
  const sql = "SELECT * FROM public.teachers";
  return query(sql).then((res) => res.rows);
};

export const getTeachersByAge = (args: { age: number }) => {
  const sql = `SELECT * FROM public.teachers WHERE age = ${args.age}`;
  return query(sql).then((res) => res.rows);
};
