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

export const CreateTweetCodec = t.intersection([
  t.type({
    tweetText: t.string,
    userId: t.number,
  }),
  t.partial({
    parentTweetId: t.number,
  }),
]);

export interface ICreateTweet extends t.TypeOf<typeof CreateTweetCodec> {}
