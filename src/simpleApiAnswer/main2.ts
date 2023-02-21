import express, { Application, Request, Response } from 'express'

const app: Application = express();

//ทดลองสร้าง API ผ่าน post method

app.post("/", (req: Request, res: Response) => {
  res.send("Hello Kor!")
})

app.post("/post1", (req: Request, res: Response) => {
  const number1 = 15;
  res.send(`API1: ${number1}`)
})

app.post("/post2", (req: Request, res: Response) => {
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const sum = numbers.reduce((acc, r) => acc +r, 0);
  res.send(`API2: ${sum}`)
})

app.post("/post3", (req: Request, res: Response) => {
  const profile = {
    name: 'Kor',
    location: 'Bangkok',
    age: 41
  }
  res.send(profile)
})

app.post("/post4", (req: Request, res: Response) => {
  const products = [
    {
      name: "Collagen",
      price: 390,
    },
    {
      name: "Vit C",
      price: 290
    }
  ]
  res.send(products)
})

app.post("/post5", (req: Request, res: Response) => {
  const products = [
    {
      name: "Collagen",
      price: 390,
    },
    {
      name: "Vit C",
      price: 290
    }
  ]
    res.json(products)
})

app.listen(3200, () => {
  console.log("Server start on port 3200!")
})