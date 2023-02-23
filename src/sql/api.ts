import { db } from "./db";

export const getTeachers = async () => {
  const sql = "SELECT * FROM public.teachers";
  const res = await db.query(sql);
  return res.rows;
};

export const getTeachersByAge = async (args: { age: number }) => {
  const sql = {
    text: "SELECT * FROM public.teachers WHERE age = $1",
    values: [args.age],
  };
  const res = await db.query(sql);
  return res.rows;
};

export const getTeachersByName = async (args: { name: string }) => {
  const sql = {
    text: "SELECT * FROM public.teachers WHERE name = $1",
    values: [args.name],
  };
  const res = await db.query(sql);
  return res.rows;
};
