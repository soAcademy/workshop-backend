import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json()); //เพื่อให้ POST method รับข้อมูลแบบ JSON ได้

app.get("/get-status-code", (req: Request, res: Response) => {
  //eg http://localhost:3000/get-status-code?name=Teak
  // eg http://localhost:3000/get-query?var=1&var=23
  const query = req?.query;
  query.name === "Teak"
    ? res.status(200).send(query)
    : res.status(500).send("ERROR: Name not found");
  console.log(query);
});

app.post("/post-status-code", (req: Request, res: Response) => {
  //พิมพ์ใน body
  const body = req?.body;
  body.name === "Teak"
    ? res.status(200).send(body)
    : res.status(500).send("ERROR: Name not found");
  console.log(body);
});

app.get("/get-status-code-2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5];
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
    url: "http://blognone.com",
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
      url: "http://localhost:9999",
    })
    console.log(response.data)
    res.status(200).send(response.data)
  } catch (e) {
    console.log(e);
    res.status(500).send(e)
  }
})

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
