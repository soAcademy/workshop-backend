import { category } from "fp-ts";
import * as t from "io-ts";

export interface ICreateCategory {
  data: [{ name: string }];
}

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
  tableId: number;
  id: number;
  items: [
    {
      quantity: number;
      totalPrice: number;
      menuId: number;
    }
  ];
}

export const CreateOrderCodec = t.type({
  tableId: t.number,
  items: t.array(
    t.type({
      quantity: t.number,
      totalPrice: t.number,
      menuId: t.number,
    })
  ),
});

export const GetOrderCodec = t.type({
  id: t.number,
});

export interface IGetOrder extends t.TypeOf<typeof GetOrderCodec> {}

export const UpdateOrderCodec = t.type({
  id: t.number,
  status: t.string,
});

export interface IupdateOrder extends t.TypeOf<typeof UpdateOrderCodec> {}
//

export const DeleteCategoryCodec = t.type({
  id: t.array(t.number),
});
export interface IDeleteCategory extends t.TypeOf<typeof DeleteCategoryCodec> {}

//

export const DeleteMenuCodec = t.type({
  id: t.number,
});
export interface IDeleteMenu extends t.TypeOf<typeof DeleteMenuCodec> {}

//
export interface IUpdateMenu {
    id: number,
    name: string,
    price: number,
    image: string
    categoryKey:{
      connect:{id2:number}
    }
}

export const UpdateMenuCodec = t.type({
  id:t.number,
  name:t.string,
  price:t.number,
  image:t.string,
  categoryKey:t.type({
    connect:t.type({id2:t.number})
  })
})


// export interface ICreateManyMenu{
//   data:[
//     {
//       id: number,
//       name: string,
//       image: string,
//       price: number,
//       categoryName:string
      
//     }
//   ]
// }
export const CreateManyMenuCodec = t.type({
  data:t.array(
    t.type({
      id: t.number,
      name: t.string,
      image: t.string,
      price: t.number,
      categoryName: t.string
    })
  )
})

export  interface ICreateManyMenu extends t.TypeOf<typeof CreateManyMenuCodec>{}

//

export interface IGetOrderByTableId{

    tableId: number
    name: boolean,  
 }
 
