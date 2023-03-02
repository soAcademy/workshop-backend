import * as t from "io-ts";

export const CreateCategoryCodec = t.type({ name: t.string });

export interface ICreateCategory extends t.TypeOf<typeof CreateCategoryCodec> {}

export const CreateMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  categoryId: t.number,
});

export interface ICreateMenu extends t.TypeOf<typeof CreateMenuCodec> {}

export const CreateOrderItemCodec = t.type({
  menu: t.type({
    connect: t.type({
      id: t.number,
    }),
  }),
  // price: t.number,
  quantity: t.number,
  totalPrice: t.number,
});

export interface ICreateOrderItem extends t.TypeOf<typeof CreateOrderCodec> {}

export const CreateOrderCodec = t.type({
  // status: t.string,
  tableId: t.number,
  items: t.array(CreateOrderItemCodec),
});

export interface ICreateOrder extends t.TypeOf<typeof CreateOrderCodec> {}
