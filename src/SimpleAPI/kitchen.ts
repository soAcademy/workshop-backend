import express, { Application, Request, Response } from "express";
import * as t from "io-ts";

const app: Application = express();
app.use(express.json());

//funtion
const totalprice =(args:IOrder)=>{
  const result = args.order.reduce((acc,r)=>acc+r.price,0)
  console.log("result",result)
  console.log("args",args)
  return {
    id : args.id,
    totalPrice : result 
  }
};

// interface IOrder {
//   id: number,
//   order: [{
//     menu: string,
//     price: number
//   }]
// }
const OrderCodec = t.type({
  id:t.number,
  order:t.array(t.type({
    menu: t.string,
    price: t.number
  }))
})

interface IOrder extends t.TypeOf<typeof OrderCodec>{}

app.post("/order/kitchen",(req:Request ,res:Response)=>{
  const body = req?.body
  console.log("body>>>>>>>>>>>>>>>",body);
  console.log("body.order",body?.order[0])
  console.log(OrderCodec.decode(body));
  if(OrderCodec.decode(body)._tag === "Right"){
    const result = totalprice({
      id:body?.id,
      order: [{
        menu: body?.order[0].menu,
        price: body?.order[0].price
      }]
    })
    res.status(200).json(result);
  }else{
    res.status(500).send("Error to validate");
  }
})

app.listen(5000, () => {
  console.log("Sever start on port 5000");
});

