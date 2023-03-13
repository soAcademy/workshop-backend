// import "./simpleApis/main0";
// import "./simpleApis/main1";
// import "./simpleApis/main2";
// import "./simpleApis/main3";
// import "./simpleApis/main4";
// import "./simpleApis/main5";
// import "./simpleApis/main6";

import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes";
// import { AppRoutes as TodoListRoutes } from "./todoList/routes"; //todoList
// import { AppRoutes as binKitchenRoutes } from "./binKitchen/routes"; //binKitchen
// import { AppRoutes as TriviaGame } from "./triviaGame/routes";
import { AppRoutes as Twitter } from "./twitter/route";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());
// app.get("/hello", (req: Request, res: Response) => {
//   res.send("Hello Express");
// });

// app.get("/hello2", (req: Request, res: Response) => {
//   res.send("Hello Express2");
// });

// AppRoutes.forEach((route) => {
//   app[route.method as keyof Application](
//     route.path,
//     (req: Request, res: Response) => route.action(req, res)
//   );
// });

// TodoListRoutes.forEach((route) => {
//   app[route.method as keyof Application](
//     route.path,
//     (req: Request, res: Response) => route.action(req, res)
//   );
// });

// binKitchenRoutes.forEach((route) => {
//   app[route.method as keyof Application](
//     route.path,
//     (req: Request, res: Response) => route.action(req, res)
//   );
// });

// TriviaGame.forEach((route) => {
//   app[route.method as keyof Application](
//     route.path,
//     (req: Request, res: Response) => route.action(req, res)
//   );
// });

Twitter.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    (req: Request, res: Response) => route.action(req, res)
  );
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
