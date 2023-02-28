// อันนี้เราเอาไว้เป็น database connector โดยใช้ syntax ของ lib pg ที่เราพึ่ง add ไป
// เรียกง่าย ๆ คือเรากำลังสร้างตัว connection ไปยังตัว postgres
import {Client} from "pg";


export const db = new Client({
user: "postgres",
database: "postgres",
password: "password",
host: "localhost",
port: 5432,
});
// อันนี้เรียกฟังชัน connect เพื่อเชื่อมต่อกับ database
db.connect();