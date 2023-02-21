import express,{Application,Request,Response} from "express";
import axios from "axios";

const app: Application = express();
app.use(express.json());

app.get("/get-status-code", (req:Request, res:Response) => {
  const query = req?.query;
  query.name === "Boeing" 
  ? res.status(200).send(query) : res.status(500).send("server error");
});

app.post("/post-status-code", (req:Request, res:Response) => {
  const query = req?.body;
  query.name === "Boeing"
  ? res.status(200).send(query) : res.status(500).send("server error");
})

// app.get("/get-status-code2", (req:Request, res:Response) => {
//   const number = [1,2,3,4,5]; 
//    // const numbers = "[1, 2, 3, 4, 5]"; // อันนี้ Error typescript ไม่ให้ผ่าน
//   // const numbers = null; // อันนี้ Error typescript ไม่ให้ผ่าน
//  let sum;
//  try {
//   sum = number.reduce((acc,r)=> acc + r ,0);
//   res.status(200).send(`${sum}`)
//  } catch (err) {
// console.log(err);
// res.status(500).send("ERROR");
//  }
// });

// app.get("/get-status-code3", (req:Request, res:Response) => {
//   axios({
//     url:
//     // url: "http://localhost:9999",
//     "https://blognone.com"
//   })
//   .then((response)=>{
//     console.log(response.data);
//     res.status(200).send(response.data)
//   })
//   .catch((err)=>{
//     console.log(err);
//     res.status(500).send(err);
//   })
// })

app.get("/get-status-code4",async(req:Request, res:Response) => {
 try {
  const response = await axios({
    // url: "http://localhost:9999",
    url: "https://blognone.com",
  });
  console.log(response.data);
  res.status(200).send(response.data);
 } catch (err) {
  console.log(err);
  res.status(500).send(err);
 }
})
//ใส่ async หน้า func => await

app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})
