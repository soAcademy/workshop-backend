import * as t from "io-ts";

export const CreateUserCodec = t.type({
  name: t.string,
  imageUrl: t.string || null,
  bio: t.string || null,
});

export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> {}
