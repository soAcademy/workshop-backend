import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes";

const app: Application = express();

app.use(express.json());

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response) => route.action(req, res)
  );
});

app.listen(5555, () => {
  console.log("Server started on port 5555");
});
