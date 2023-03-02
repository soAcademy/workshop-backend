import * as t from "io-ts";
import { optional, strict } from "io-ts-extra";

export const addCategoryCodec = t.type({ name: t.string });
export interface IAddCategory extends t.TypeOf<typeof addCategoryCodec> {}

export const updateCategoryCodec = t.type({ id: t.number, name: t.string });
export interface IUpdateCategory extends t.TypeOf<typeof updateCategoryCodec> {}

export const addMenuCodec = t.partial({
  image: t.string,
  price: t.number,
  categoryId: t.number,
});
export interface IAddMenu extends t.TypeOf<typeof addMenuCodec> {
  name: string;
}

export const getMenuCodec = t.union([
  t.record(t.string, t.undefined),
  t.type({
    categoryId: t.number,
  }),
]);
export interface IGetMenu {
  categoryId?: number;
}

export const updateMenuCodec = strict({
  id: t.number,
  name: optional(t.string),
  image: optional(t.string),
  price: optional(t.number),
  categoryId: optional(t.number),
});
export interface IUpdateMenu extends t.TypeOf<typeof updateMenuCodec> {}

export const addOrderCodec = t.type({
  table_id: t.number,
  total_price: t.number,
  items: t.array(
    t.type({
      menuId: t.number,
      quantity: t.number,
    })
  ),
});
export interface IAddOrder extends t.TypeOf<typeof addOrderCodec> {}

export const getOrdersCodec = t.union([
  t.record(t.string, t.undefined),
  t.type({
    table_id: t.number,
  }),
]);
export interface IGetOrders {
  table_id?: number;
}

export const getOrdersForCheckoutCodec = t.type({
  table_id: t.number,
});
export interface IGetOrdersForCheckout {
  table_id: number;
}

export const updateOrderCodec = t.type({
  order_id: t.number,
  status: t.string,
});
export interface IUpdateOrder extends t.TypeOf<typeof updateOrderCodec> {}

export const createBillCodec = t.type({
  bill_id: t.number,
  table_id: t.number,
  bill_price: t.number,
});
export interface ICreateBill extends t.TypeOf<typeof createBillCodec> {}

export const getBillCodec = t.type({
  bill_id: t.number,
});
export interface IGetBill extends t.TypeOf<typeof getBillCodec> {}
