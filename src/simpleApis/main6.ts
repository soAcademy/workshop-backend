import express, { Application, Request, Response } from "express";
import axios from "axios";

const app: Application = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("listening on port 3000");
});
