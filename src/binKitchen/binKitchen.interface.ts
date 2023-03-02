import * as t from "io-ts";
import { optional } from "io-ts-extra";

export interface ICreateCategory {
  name: string;
}

export const createCategoryCodec = t.type({
  name: t.string,
});

export interface ICreateMenu {
  name: string;
  image: string;
  price: number;
  category: string;
}

export const createMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  category: t.string,
});

export interface IUpdateCategory {
  id: number;
  name: string;
}

export const updateCategoryCodec = t.type({
  id: t.number,
  name: t.string,
});

export interface IUpdateMenu {
  id: number;
  name?: string;
  image?: string;
  price?: number;
}

export const updateMenuCodec = t.type({
  id: t.number,
  name: optional(t.string),
  image: optional(t.string),
  price: optional(t.number),
});

// export interface ICreateOrder {
//   tableId: number;
// }

// export const createOrderCodec = t.type({
//   tableId: t.number,
// });

// export interface ICreateOrderItem {
//   menuId: number;
//   orderId: number;
//   quantity: number;
//   totalPrice: number;
// }

// export const createOrderItemCodec = t.type({
//   menuId: t.number,
//   orderId: t.number,
//   quantity: t.number,
//   totalPrice: t.number,
// });

export interface ICreateOrder {
  tableId: number;
  orderItem: {
    menuId: number;
    quantity: number;
    totalPrice: number;
  }[];
}

export const createOrderCodec = t.type({
  tableId: t.number,
  orderItem: t.array(
    t.type({ menuId: t.number, quantity: t.number, totalPrice: t.number })
  ),
});

export interface IGetOrder {
  tableId: number;
}

export const getOrderCodec = t.type({
  tableId: t.number,
});

export interface IUpdateOrder {
  id: number;
  status: string;
}

export const updateOrderCodec = t.type({
  id: t.number,
  status: t.string,
});
