import express,{Application,Request,Response} from "express";
const app: Application = express();
app.use(express.json());

app.get("/get-status-code", (req:Request, res:Response) => {
  const query = req?.query;
  query.name === "Boeing" 
  ? res.status(200).send(query) : res.status(500).send("server error");
});

app.post("/post-status-code", (req:Request, res:Response) => {
  const query = req?.body;
  query.name === "Boeing"
  ? res.status(200).send(query) : res.status(500).send("server error");
})


app.listen(4000, ()=>{
  console.log("Sever start on port 4000");
})
