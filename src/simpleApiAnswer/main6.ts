import express, { Application, Request, Response } from "express";

//สร้าง function

// Hello Add
const add = (x: number, y: number) => x + y;

// Hello at
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

// Express Server
const app: Application = express();

app.use(express.json());

app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

app.post("/function/helloAt", (req: Request, res: Response) => {
  const body = req?.body;
  const result = helloAt({
    name: body?.name,
    location: body?.location,
  })
  res.status(200).json(result);
})

app.listen(3600, () => {
  console.log("Server start on port 3600");
});
