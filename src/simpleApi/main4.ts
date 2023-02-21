// อันนี้เรียนเขียนการกำหนด Status code ให้เรารู้ว่ามันส่งค่าอะไรสำเร็จหรือไม่สำเร็จ
// ลบพวกอันเก่าทิ้งไปได้เลย
import express, { Application, Request, Response } from "express";
import axios from "axios";
const app: Application = express();

app.use(express.json());

// อันนี้ลืม yarn add axios
// app.get("/get-status-code", (req: Request, res: Response) => {
//   const query = req?.query;
//   query.name === "Bond"
//     ? res.status(200).send(query)
//     : res.status(500).send("ERROR: NAME NOT FOUND");
// });

// อันนี้เป็นตัว Post ระวังดี ๆ เย็น ๆ
// app.post("/post-status-code", (req: Request, res: Response) => {
//   const body = req?.body;
//   body.name === "Bond"
//     ? res.status(200).send(body)
//     : res.status(500).send("ERROR: NAME NOT FOUND");
// });

// ตัวนี้คือเรากำหนดตัวแปรมาเรียบร้ยอแล้ว ไม่ต้องไปใส่ค่าใน Postman
// app.get("/get-status-code2", (req: Request, res: Response) => {
//   const numbers = [1, 2, 3, 4, 5];
//   let sum;
//   try {
//     sum = numbers.reduce((acc, r) => acc + r, 0);
//     res.status(200).send(`${sum}`);
//   } catch (e) {
//     res.status(500).send("ERROR");
//   }
// });
// response ไว้วตอนที่เราส่ง output ออกไป request คือตัวที่เราไว้ใช้ตอนเราขอ API เข้ามา
// อันนี้เป็ API ยิงเข้า web bloc อันหนึ่งของไทย ถ้าอยากเห็นแบบพร้อมสีก็ให้ไปที่ preview แทนที่จะเป็น pretty
// app.get("/get-status-code3", (req: Request, res: Response) => {
//   axios({
//     // url: "http://localhost:9999",
//     url: "https://blognone.com",
//   })
//   .then((response)=>{
//     res.status(200).send(response.data);
//   })
//   .catch((e) => {
//     res.status(500).send("ERROR");
//   });
// });

// อันนี้ทำเพื่อให้ดูว่า เราใช้ Error handling ให้เรารู้ว่ามันมีข้อผิดพลาดที่ไหน
// ข้อผิดพลาดมันมีทั้งตัว token/ URL web ที่เราดึงมาที่มันปิดไป/ 
app.get("/get-status-code4", async (req: Request, res: Response) => {
  try {
    const response = await axios ({
      // url: "http://localhost:9999",
      url: "https://blognone.com",
    });
    res.status(200).send(response.data);
  } catch (e) {
    res.status(500).send("ERROR");
  }
});


app.listen(3200, () => {
  console.log("Server start on port 3200!");
});
