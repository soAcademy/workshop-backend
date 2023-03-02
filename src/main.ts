import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes"
import cors from "cors"

// Express server
const app: Application = express();
app.use(cors())
app.use(express.json());

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request, response: Response) => 
    route.action(request, response))
})

app.listen(3700, () => {
  console.log("Server start on port 3700");
});

// value
// function (Laziness)
// Either (<Error, value>)
// Task (Asynchronous, proms)
// Task Either (Task + Either)