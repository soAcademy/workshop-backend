import express, { Application, Request, Response } from "express";

const add = (x: number, y: number) => x + y;
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

const app: Application = express();

// สร้าง function

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
  });
  res.status(200).json(result);
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
