import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json());

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  query.name === "Born"
    ? res.status(200).send(query)
    : res.status(500).send("ERROR : Name not found");
});

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  body.name === "Born"
    ? res.status(200).send(body)
    : res.status(500).send("ERROR : Name not found");
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
    url:
      // "https://blognone.com"
      "http://localhost:9999",
  })
    .then((respond) => {
      console.log(respond.data);
      res.status(200).send(respond.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.get("/get-status-code-4", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      url: "https://blognone.com",
      // "http://localhost:9999",
    });
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
