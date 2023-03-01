import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./RefactorAPI/routes";
import { SQLRoutes } from "./sql/routes";
import { AccidentRoutes } from "./AccidentData";
import { TodolistRoutes } from "./todolist/todolist.routes";
import { FoodOrderingRoutes } from "./FoodOrderingAPI";
const app: Application = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response) => route.action(req, res)
  );
});

SQLRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response) => route.action(req, res)
  );
});

AccidentRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response) => route.action(req, res)
  );
});

TodolistRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response) => route.action(req, res)
  );
});

FoodOrderingRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response) => route.action(req, res)
  );
});

app.listen(5555, () => {
  console.log("Server started on port 5555");
});
