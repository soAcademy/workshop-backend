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
