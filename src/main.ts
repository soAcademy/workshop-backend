import express, { Application, Request, Response } from "express";
import axios from "axios";
import * as t from "io-ts";
import { AppRoutes } from "./routes";

// allow cors origins
import cors from 'cors';
const app: Application = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

// Structure : ต้องเพิ่มบรรทัดนี้เพื่อให้ POST method รับข้อมูลแบบ json ได้
app.use(express.json());

AppRoutes.map((route) => {
  app[route.method as keyof Application](
    route.path,
    // cors(corsOptions),
    (request: Request, response: Response) => route.action(request, response)
  );
});

// Structure :
app.listen(3100, () => {
  console.log("Server start on port 3100!");
});
