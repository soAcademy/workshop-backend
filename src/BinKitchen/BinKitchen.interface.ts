import * as t from "io-ts";

export const createCategoryCodec = t.type({
  name: t.string,
});

export interface ICreateCategory extends t.TypeOf<typeof createCategoryCodec> {
  category: any;
}

//----------------------------------------

export const createMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  category: t.string,
});

export interface ICreateMenu extends t.TypeOf<typeof createMenuCodec> {}

//----------------------------------------

export const updateCategoryCodec = t.type({
  newName: t.string,
  oldName: t.string,
});

export interface IUpdateCategory extends t.TypeOf<typeof updateCategoryCodec> {}

//----------------------------------------

export const updateOrderCodec = t.type({
  status: t.string,
  id: t.number,
});

export interface IUpdateOrderCodec extends t.TypeOf<typeof updateOrderCodec> {}

//----------------------------------------

export const getOrderCodec = t.type({
  id: t.number,
});

export interface IGetOrderCodec extends t.TypeOf<typeof getOrderCodec> {}

//----------------------------------------

export const createOrderCodec = t.type({
  tableId: t.number,
  items: t.array(
    t.type({
      menuId: t.number,
      quantity: t.number,
      totalPrice: t.number,
    })
  ),
});

export interface ICreateOrder extends t.TypeOf<typeof createOrderCodec> {}

//----------------------------------------
