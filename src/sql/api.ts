// ตัวนี้แหละที่เราจะเปลี่ยนตัวแรก
// อันนี้คือตัว pure function เราเา
import {db} from "./db";

// อันแรกได้ข้อมูลคุณครูทั้งหมด
export const getTeachers = () => {
const sql = "SELECT * FROM public.teachers";
return db.query(sql).then((res)=> res.rows);
};

// อันที่สองได้ตัวอายุครู
export const getTeachersByAge = async (args: { age: number }) => {
  const sql = `SELECT * FROM public.teachers WHERE age = ${args.age}`;
  const res = await db.query(sql);
  return res.rows;
};

// อันที่สามได้ตัวชื่อครู
export const getTeachersByName = async (args: { name: string }) => {
  const sql = `SELECT * FROM public.teachers WHERE name LIKE '%${args.name}%'`;
  const res = await db.query(sql);
  return res.rows;
};

// อันที่สี่ได้ตัวคอร์ส
export const getCourses = async () => {
  const sql = `SELECT * FROM public.courses`;
  const res = await db.query(sql);
  return res.rows;
};