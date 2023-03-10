import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const CreateCategoryCodec = t.type({
  name: t.string,
});

export interface ICreateCategory extends t.TypeOf<typeof CreateCategoryCodec> {}

export const CreateMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  categoryName: t.string,
});

export interface ICreateMenu extends t.TypeOf<typeof CreateMenuCodec> {}

export const UpdateCategoryCodec = t.type({
  id: t.number,
  name: t.string,
});

export interface IUpdateCategory extends t.TypeOf<typeof UpdateCategoryCodec> {}

export const GetMenuByCategoryCodec = t.type({
  name: t.string,
});

export interface IGetMenuByCategory
  extends t.TypeOf<typeof GetMenuByCategoryCodec> {}

export const UpdateMenuCodec = t.type({
  id: t.number,
  // categoryName: optional(t.string),
  name: optional(t.string),
  price: optional(t.number),
});

export interface IUpdateMenu extends t.TypeOf<typeof UpdateMenuCodec> {}

export const CreateOrderCodec = t.type({
  tableId: t.number,
  orderItem: t.array(
    t.type({
      menuId: t.number,
      quantity: t.number,
      totalPrice: t.number,
    })
  ),
});

export interface ICreateOrder extends t.TypeOf<typeof CreateOrderCodec> {}

export const UpdateOrderCodec = t.type({
  id: t.number,
  updateStatus: t.string,
});

export interface IUpdateOrder extends t.TypeOf<typeof UpdateOrderCodec> {}

export const GetOrderCodec = t.type({
  tableId: t.number,
});

export interface IGetOrder extends t.TypeOf<typeof GetOrderCodec> {}

export const DeleteOrderCodec = t.type({
  id: t.number,
});

export interface IDeleteOrder extends t.TypeOf<typeof DeleteOrderCodec> {}
