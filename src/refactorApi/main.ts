import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes"

// Express server
const app: Application = express();

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
