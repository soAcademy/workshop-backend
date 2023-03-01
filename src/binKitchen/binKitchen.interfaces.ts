import * as t from "io-ts";

export const CreateCategoryCodec = t.type({ name: t.string });

export interface ICreateCategory extends t.TypeOf<typeof CreateCategoryCodec> {}
