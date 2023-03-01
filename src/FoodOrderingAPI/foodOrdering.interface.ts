import * as t from "io-ts";

export const addCategoryCodec = t.type({ name: t.string });
export interface IAddCategory extends t.TypeOf<typeof addCategoryCodec> {}
