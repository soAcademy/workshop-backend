import express, { Application, Request, Response } from "express";
import multer from "multer";
import path from "path";
import { AppRoutes } from "./src/RefactorApi/routes";
import { SQLRoutes } from "./src/sql/routes";
import { AccidentRoutes } from "./src/AccidentData";
import { TodolistRoutes } from "./src/todolist/todolist.routes";
import { FoodOrderingRoutes } from "./src/FoodOrderingAPI";

const app: Application = express();
// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads/img");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${file.originalname.replace(ext, "")}`;
    cb(null, name + ext);
  },
});

// Set up multer middleware to handle file uploads
const upload = multer({ storage });

app.use(express.json()); 

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// UPLOAD IMAGE END POINT
// Set up a route to handle file uploads
// app.post("/uploadImg", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("No file uploaded.");
//   }

//   const fileName = req.file.filename;

//   // Construct the URL to send back to the client
//   const baseUrl = req.protocol + "://" + req.get("host");
//   const imageUrl = baseUrl + "/images/" + fileName;
//   res.send(imageUrl);
// });

// Set up a route to serve uploaded files
app.use("/images", express.static(__dirname + "/uploads/img"));

app.get("/hello", (req: Request, res: Response) => {
  res.send(__dirname + "");
});

// AppRoutes.map((route) => {
//   app[route.method as keyof Application](
//     route.path,
//     (req: Request, res: Response) => route.action(req, res)
//   );
// });

// SQLRoutes.map((route) => {
//   app[route.method as keyof Application](
//     route.path,
//     (req: Request, res: Response) => route.action(req, res)
//   );
// });

// AccidentRoutes.map((route) => {
//   app[route.method as keyof Application](
//     route.path,
//     (req: Request, res: Response) => route.action(req, res)
//   );
// });

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
