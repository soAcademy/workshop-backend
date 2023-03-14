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

export const CreateHashTagCodec = t.type({ hashTagText: t.string });

export interface ICreateHashTag extends t.TypeOf<typeof CreateHashTagCodec> {}

export const CreateTweetCodec = t.intersection([
  t.type({
    tweetText: t.string,
    userId: t.number,
    hashTags: t.array(CreateHashTagCodec),
  }),
  t.partial({
    parentTweetId: t.number,
  }),
]);

export interface ICreateTweet extends t.TypeOf<typeof CreateTweetCodec> {}

export const CreateDirectMessageCodec = t.type({
  dmText: t.string,
  fromUserId: t.number,
  toUserId: t.number,
});

export interface ICreateDirectMessage
  extends t.TypeOf<typeof CreateDirectMessageCodec> {}
