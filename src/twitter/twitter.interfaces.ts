import * as t from "io-ts";

export const CreateUserCodec = t.intersection([
  t.type({
    name: t.string,
  }),
  t.partial({
    imageUrl: t.string,
    bio: t.string,
  }),
]);

export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> {}
