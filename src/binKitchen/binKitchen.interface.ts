import * as t from "io-ts";
// createCategory
export const createCategoryCodec = t.type({
  category: t.string,
});
export interface ICreateCategory extends t.TypeOf<typeof createCategoryCodec> {}

// createMenu
export const createMenuCodec = t.type({
  name: t.string,
  image: t.string,
  price: t.number,
  category: t.number,
});
export interface ICreateMenu extends t.TypeOf<typeof createMenuCodec> {}

// createManyMenu
export const createManyMenusCodec = t.array(createMenuCodec);
export interface ICreateManyMenus extends t.TypeOf<typeof createManyMenusCodec> {}