import express, { Application, Request, Response } from "express";
import { AppRoutes } from "./routes";

// Express Server

const app: Application = express();

app.use(express.json());

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    // map ไปหา method และกำหนด type ด้วย as keyof Application
    route.path, // กำหนด map ให้ไปหาใน path
    (request: Request, response: Response) => route.action(request, response) // map เข้าไปหา function
  );
});

app.listen(3000, () => {
  console.log("Server start on port 3000!");
});
