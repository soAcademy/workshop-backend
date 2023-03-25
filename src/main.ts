// import axios from "axios";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { AppRoutes } from "./routes";
import { appRouter, createContext } from "./binKitchen/binKitchen.router";

const app: Application = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(8000, () => {
  console.log("Server start on port 8000!");
});

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    // cors(corsOptions),
    (request: Request, response: Response) => route.action(request, response)
  );
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
