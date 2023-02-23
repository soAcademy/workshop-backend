import express, {Application, Request, Response, Router} from "express";
import {AppRoutes} from "./routes";
const app: Application= express();

app.use(express.json());

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request , res: Response) =>
    Router.action(request, response),
  );
)};