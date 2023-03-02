
import * as t from "io-ts";

// export interface ICreateCategory{
//   category: string;
// }

export const CreateCategoryCodec = t.type({
  category: t.string,
});
export interface ICreateCategory extends t.TypeOf<typeof CreateCategoryCodec> {}

// export interface IUpdateCategory {
//   id:number,
//   name:string,
// }
export const UpdateCategoryCodec = t.type({
  id: t.number,
  name: t.string,
});
export interface IUpdateCategory extends t.TypeOf<typeof UpdateCategoryCodec> {}

export interface ICreateMenu {
  id: number;
  name: string;
  image: string;
  price: number;
  category?: {
    connection?: {
      id?: number;
    };
  };
}
export const CreateMenuCodec = t.type({
  id: t.number,
  name: t.string,
  image: t.string,
  price: t.number,
});

export interface ICreateOrder {
  tableId: number,
  id: number,
  items:[ 
    {
    quantity: number,
    totalPrice: number,
    menuId: number,
  }
];
}

export const CreateOrderCodec = t.type({
  tableId: t.number,
  items:t.array(t.type({
    quantity: t.number,
    totalPrice: t.number,
    menuId:t.number
  }))
})


export const GetOrderCodec = t.type({
  id:t.number,
})

export interface IGetOrder extends  t.TypeOf<typeof GetOrderCodec>{}

export const UpdateOrderCodec=t.type({
  id:t.number,
  status:t.string
})
  

export interface IupdateOrder extends t.TypeOf<typeof UpdateOrderCodec>{}