import { PrismaClient } from "../../prisma/client";
export const prisma = new PrismaClient();

//CRUD
// - getUserProfile
// - createUserPost
// - getHashtags
// - getPostByHashtag (ส่ง hashtag ที่ต้องการไป แล้วแสดง post ทั้งหมด)
// - getPostByUser (แสดงรายละเอียดของ user คนนั้น พร้อม reply)
