import express, { Application, Request, Response } from "express";
import axios from "axios";
import * as t from "io-ts";
import { AppRoutes } from "./routes";

const app: Application = express();

// Structure : ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: Request, response: Response) => route.action(request, response)
  );
});

// Structure :
app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
