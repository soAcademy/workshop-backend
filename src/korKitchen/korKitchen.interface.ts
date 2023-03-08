import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const createCategoryCodec = t.type({ name: t.string });

export interface ICreateCategory extends t.TypeOf<typeof createCategoryCodec> {}

// export interface ICreateCategory {
//   id?: number;
//   name: string;
// }

export const getCategoriesCodec = t.type({ name: t.string });

export interface IGetCategories extends t.TypeOf<typeof getCategoriesCodec> {}

export const createMenuCodec = t.type({
  name: t.string,
  price: t.number,
  image: t.string,
  category: t.string,
});

export interface ICreateMenu extends t.TypeOf<typeof createMenuCodec> {}

export const updateCategoryCodec = t.type({ id: t.number, name: t.string });

export interface IUpdateCategory extends t.TypeOf<typeof updateCategoryCodec> {}

export const getMenusCodec = t.type({ name: t.string });

export interface IGetMenus extends t.TypeOf<typeof getMenusCodec> {}

export const updateMenuCodec = t.type({
  id: t.number,
  price: optional(t.number),
  name: optional(t.string),
  image: optional(t.string),
});

export interface IUpdateMenu extends t.TypeOf<typeof updateMenuCodec> {}

export const createOrderCodec = t.type({
  tableId: t.number,
  quantity: t.number,
  totalPrice: t.number,
  menu: t.number,
  // items: t.type({create:t.array(t.type({ quantity: t.number, totalPrice: t.number}))})
  // items: t.array(
  //   t.type({ menu: t.number, quantity: t.number, totalPrice: t.number })
  // ),
});

export interface ICreateOrder extends t.TypeOf<typeof createOrderCodec> {}

// export interface ICreateOrder {tableId: number, quantity: number, totalPrice: number}

export const getOrderCodec = t.type({
  id: t.number,
});

export interface IGetOrder extends t.TypeOf<typeof getOrderCodec> {}

export const updateOrderCodec = t.type({ id: t.number, status: t.string });

export interface IUpdateOrder extends t.TypeOf<typeof updateOrderCodec> {}

export const deleteMenuCodec = t.type({ id: t.number});

export interface IDeleteMenu extends t.TypeOf<typeof deleteMenuCodec> {}
