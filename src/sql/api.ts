import { db } from "./db";

export const getTeachers = async () => {
  const sql = "SELECT * FROM public.teachers";
  const res = await db.query(sql);
  return res.rows;
};

export const getTeachersByAge = async (args: { age: number }) => {
  const sql = `SELECT * FROM public.teachers WHERE age = ${args.age}`;
  const res = await db.query(sql);
  return res.rows;
};
