import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

//กำหนด status code สำหรับกรณี Success และ Error

//ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รันข้อมูลแบบ json ได้
app.use(express.json());

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  query.name === "kor"
    ? res.status(200).send(query)
    : res.status(500).send("ERROR: Name not found");
});

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  body.name === "kor"
    ? res.status(200).send(body)
    : res.status(500).send("ERROR: Name not found");
});

app.get("/get-status-code2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5]; // อันนี้ผ่าน
  //const numbers = "[1,2,3,4,5]"; //อันนี้ Error typescript ไม่ให้ผ่าน
  //const numbers = numbers = null; // อันนี้ Error typescript ไม่ให้ผ่าน

  let sum;
  try {
    sum = numbers.reduce((acc, r) => acc + r, 0);
    res.status(200).send(`${sum}`);
  } catch (e) {
    console.log(e);
    res.status(500).send("ERROR");
  }
});

app.get("/get-status-code-3", (req: Request, res: Response) => {
  axios({
    // url: "http://localhost:9999",
    url: "https://blognone.com",
  })
    .then((response) => {
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.get("/get-status-code-4", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      // url: "http://localhost:9999",
      url: "https://blognone.com",
    });
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.listen(3400, () => {
  console.log("Server start on port 3400");
});
