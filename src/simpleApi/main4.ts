import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json()); // ตัวกำหนดให้ express เห็นข้อมูลเป็น json

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  query.name === "First"
    ? res.status(200).send(query)
    : res.status(500).send("Error: Name not found");
});

//http://localhost:3000/get-status-code?name=First

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  body.name === "First"
    ? res.status(200).send(body)
    : res.status(500).send("Error: Name not found");
});

app.get("/get-status-code-2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const numbers = "[1, 2, 3, 4, 5]"; // อันนี้ Error typescript ไม่ให้ผ่าน
  // const numbers = null; // อันนี้ Error typescript ไม่ให้ผ่าน
  let sum;
  try {
    sum = numbers.reduce((acc, r) => acc + r, 0);
    res.status(200).send(`${sum}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("ERROR");
  }
});


// .then
app.get("/get-status-code-3", (req: Request, res: Response) => {
  axios({
    url: "https://www.arifootballstore.com/", // status 200 ok
    // url: "localhost:9999", // status 500 Internal Server Error
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

// async await
app.get("/get-status-code-4", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      url: "https://www.iphonemod.net/", // status 200
    });
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
