import express, { Application, Request, Response } from "express";

// Hello Add
const add = (x: number, y: number) => x + y;

const maybeNumber = (data: any) => typeof data === "number";

// Express server
const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body
  if (maybeNumber(body.x) && maybeNumber(body.y)) {
    const result = add(body?.x, body?.y)
    res.status(200).send(`Result: ${result}`)
  } else {
    res.status(500).json({error: "Error invalid codec"})
  }
})

app.listen(3700, () => {
  console.log("Server start on port 3700");
});