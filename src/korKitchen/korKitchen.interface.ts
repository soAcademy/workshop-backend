import * as t from "io-ts";

export const createCategoryCodec = t.type({ name: t.string });

export interface ICreateCategory extends t.TypeOf<typeof createCategoryCodec> {}

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
