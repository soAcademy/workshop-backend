import { db } from "./db";
export const getTeacher = async () => {
  const sql = "SELECT * FROM public.teachers";
  const result = await db.query(sql).then((res) => res.rows);
  console.log("result", result);
  return result;
};

export const getTeacherByName = async (args: { name: string }) => {
  const sql = `SELECT * FROM public.teachers WHERE name LIKE '%${args.name}%'`;
  const result = await db.query(sql).then((res) => res.rows);
  return result;
};

export const upDateTeacher = async (args: {
  id: number;
  name: string;
  age: number;
}) => {
  const sql = `UPDATE public.teachers SET name = '${args.name}',
  age = ${args.age} WHERE id = ${args.id}`;
  const result = await db.query(sql);
  console.log("result update>>",result);
  return result.rows;
};
