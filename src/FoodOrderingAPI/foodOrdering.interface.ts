import * as t from "io-ts";

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

export const updateMenuCodec = t.intersection([
  addMenuCodec,
  t.type({ id: t.number }),
  t.partial({ name: t.string }),
]);
// export interface IUpdateMenu extends t.TypeOf<typeof updateMenuCodec> {}
export interface IUpdateMenu {
  id: number;
  name?: string;
  image?: string;
  price?: number;
  categoryId?: number
}

export const addOrderCodec = t.type({
  table_id: t.number,
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

export const updateOrderCodec = t.type({
  order_id: t.number,
  status: t.string,
});
export interface IUpdateOrder extends t.TypeOf<typeof updateOrderCodec> {}
