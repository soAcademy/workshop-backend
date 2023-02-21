import express, { Application, Request, Response, query } from "express";
import axios from "axios";

const app: Application = express();
app.use(express.json());

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query; // get data
  query.name === "Dew"
    ? res.status(200).send(query)
    : res.status(500).send("Error name not found");
});

app.post("/post-status-code", (req: Request, res: Response) => {
  const inputBody = req?.body;
  inputBody.name === "Dew"
    ? res.status(200).send(inputBody)
    : res.status(500).send("Error name not found");
});

app.get("/get-status-code2", (req: Request, res: Response) => {
  const number = [1, 2, 3, 4, 5];
  let sum;
  try {
    sum = number.reduce((acc, r) => acc + r, 0);
    res.status(200).send(`${sum}`);
  } catch (e) {
    res.status(500).send("Error");
  }
});

app.get("/get-status-code3", (req: Request, res: Response) => {
  axios({
    url: "https://blognone.com",
  })
    .then((response) => {
      console.log(response);
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
    });
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(5500, () => {
  console.log("Sever start on port 5500");
});
