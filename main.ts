import express, { Application, Request, Response } from "express";

// Hello Add
const add = (x: number, y: number) => x + y;

// Hello At
const helloAt = (args: { name: string; location: string }) => ({
  text: `Hello ${args.name} at ${args.location}`,
  createdAt: new Date(),
});

// อันนี้เราจะส่งตัวแปรไปตรง ๆ 
const app: Application = express();
app.use(express.json());
app.post("/function/add", (req: Request, res: Response) => {
  const body = req?.body;
  const result = add(body?.x, body?.y);
  res.status(200).send(`Result: ${result}`);
});

// อันนี้เราจะส่งตัวแปรเป็ฯ Object ไปแทน
app.post("/function/helloAt", (req: Request, res: Response)=>{
  const body = req?.body;
  const result = helloAt ({
  name: body?.name,
  location: body?.location,
  });
  res.status(200).send(result);
});