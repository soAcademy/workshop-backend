import * as t from "io-ts";

export const createCategoryCodec = t.type({
  name: t.string,
});

export interface ICreateCategory extends t.TypeOf<typeof createCategoryCodec> {}

export const updateCategoryCodec = t.type({
  id: t.number,
  name: t.string,
});

export interface IUpdateCategory extends t.TypeOf<typeof updateCategoryCodec> {}

export const createMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  category: t.string,
});

export interface ICreateMenu extends t.TypeOf<typeof createMenuCodec> {}

export const createManyMenusCodec = t.array(
  t.type({
    id: t.number,
    name: t.string,
    image: t.string,
    price: t.number,
    category: t.string,
  })
);

export interface ICreateManyMenus
  extends t.TypeOf<typeof createManyMenusCodec> {}

// export const getMenuCodec = t.type({
//   id: t.number,
// });

// export interface IGetMenu extends t.TypeOf<typeof getMenuCodec> {}

export const updateMenuCodec = t.type({
  id: t.number,
  name: t.string,
  image: t.string,
  price: t.number,
  category: t.string,
});

export interface IUpdateMenu extends t.TypeOf<typeof updateMenuCodec> {}

export const createOrderCodec = t.type({
  tableId: t.number,
  status: t.string,
  items: t.array(
    t.type({
      id: t.number,
      quantity: t.number,
      totalPrice: t.number,
    })
  ),
});

export interface ICreateOrder extends t.TypeOf<typeof createOrderCodec> {}

export const getOrderCodec = t.type({
  tableId: t.number,
});

export interface IGetOrder extends t.TypeOf<typeof getOrderCodec> {}

export const updateOrderCodec = t.type({
  id: t.number,
  status: t.string,
});

export interface IUpdateOrder extends t.TypeOf<typeof updateOrderCodec> {}
