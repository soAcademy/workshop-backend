import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes";

const app: Application = express();

app.use(express.json());

// map all routes
//use insted of app.post("/aaa", (req: Request, res:Response))
AppRoutes.map((route) => {
  app[route.method as keyof Application]( // forcetype same as Application ("post" or "get")
    route.path,
    (request: Request, response: Response) => route.action(request, response)
  );
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
