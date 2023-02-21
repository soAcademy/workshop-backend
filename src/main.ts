import express, { Application, Request, Response } from "express"

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Bin!")
})

app.listen(8000, () => { console.log("Server start on port 8000!") })