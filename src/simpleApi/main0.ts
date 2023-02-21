// ข้อแรกคือทำหน้า route เดียวไม่ต้องมีอะไรเลย เน้นแค่หน้าเดียว
// import express, { Application, Request, Response} from "express";

// const app : Application = express();
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello Bond!");
// });
// app.listen(3200, () =>{
//   console.log("Server start on port 3200!");
// });

// ต่อมาคือการเพิ่มอะไรสักอย่างเข้าไปแทน "/" เป็นเหมือนการทำ Route อ่ะ แต่มันเอาไปใช้ใน frontend ไม่ได้
import express, { Application, Request, Response} from "express";
const app : Application = express();
app.get("/Hello", (req: Request, res: Response) => {
  res.send("Hello Bond!");
});
app.get("/Hello1", (req: Request, res: Response) => {
  res.send("Hello Bond1");
});
app.listen(3200, () =>{
  console.log("Server start on port 3200!");
});