// อันนี้เป็น main ของตัว refactorAPI
import express, {Application, Request, Response} from "exporess";
import {AppRoutes} from "./routes"

// Express Server
const app: Application = express();

app.use(express.json());

AppRoutes.forEach((route) => {
  app[route.method as keyof Application](
    route.path,
    (request: express.Request, response: express.Response) =>
      route.action(request, response),
  );
});

app.listen(3200, () => {
  console.log("Server start on port 3200!");
});