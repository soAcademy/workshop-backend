import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json());

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  query.name === "Bin"
    ? res.status(200).send(query)
    : res.status(500).send("ERROR: Name not found");
});

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  body.name === "Bin"
    ? res.status(200).send(body)
    : res.status(500).send("ERROR: Name not found");
});

app.get("/get-status-code2", (req: Request, res: Response) => {
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

app.get("/get-status-code3", (req: Request, res: Response) => {
  axios({
    url: "https://blognone.com",
  })
    .then((response) => {
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("ERROR");
    });
});

app.get("/get-status-code4", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      // url: "http://localhost:9999",
      url: "https://blognone.com",
    });
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).send("ERROR");
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
