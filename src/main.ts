import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes";

const app: Application = express();

app.use(express.json())

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: express.Request, response: express.Response) => {
      route.action(request, response)
    }
  )
})

app.listen(5555, () => {
  console.log("Server started on port 5555");
});
