import axios from "axios";
import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  console.log(query);
  query.name === "Bin"
    ? res.status(200).send(query)
    : res.status(500).send("ERROR: name not found");
});

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  body.name === "Bin"
    ? res.status(200).send(body)
    : res.status(500).send("ERROR: name not found");
});

app.get("/get-status-code-2", (req: Request, res: Response) => {
  const numbers = [1, 2, 3, 4, 5];
  // const numbers = "[1, 2, 3, 4, 5]";
  // const numbers = null;
  let sum;
  try {
    sum = numbers.reduce((acc, n) => acc + n, 0);
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
    .catch((e) => {
      console.log(e);
      res.status(500).send(e);
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

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});
