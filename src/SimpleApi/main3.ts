import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();
app.use(express.json());

app.get("/get-status-code", (req: Request, res: Response) => {
  const query = req?.query;
  query.name
    ? res.status(200).send(query)
    : res.status(500).send("Error: name not found");
});

app.post("/post-status-code", (req: Request, res: Response) => {
  const body = req?.body;
  body.name
    ? res.status(200).send(body)
    : res.status(500).send("Error: name not found");
});

app.get("/get-status-code2", (req: Request, res: Response) => {
  const numbers = Object.values(req?.query);
  // const numbers = [1,2,3,3,3,3,4,4]
  console.log(numbers)
  let sum;
  try {
    sum = numbers?.reduce((acc, n) => acc + Number(n), 0);
    console.log(sum)
    res.status(200).send(`${sum}`);
  } catch {
    res.status(500).send("Error");
  }
});

app.get("/get-status-code3", (req: Request, res: Response) => {
  axios({
    // url: "https://blognone.com",
    url: "http://localhost:5555/get-status-code2?a=10&b=20&x=30",
  })
    .then((response) => {
      console.log(response.data);
      res.status(200).send(`${response.data}`);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
      // res.status(500).send("Error");
    });
});

app.get("/get-status-code4", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      // url: "http://localhost:5555/get-status-code2?a=10&b=20&x=30"
      url: "http://localhost:5555/get-status-code?name=EARth",
    });
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (e) {
    console.log(e);
    // res.status(500).send(e)
    res.status(500).send("ERROR");
  }
});

app.listen(5555, () => {
  console.log("Server start on port 5555!");
});
