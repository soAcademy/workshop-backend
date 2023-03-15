import {
  CreateDirectMessage,
  createTweet,
  createUser,
  createUserRelation,
  getTweetWithReplies,
} from "./twitter.resolvers";

describe("Twitter", () => {
  let user1Id: number;
  let user2Id: number;
  let tweetId: number;

  it("should create a new user", async () => {
    const userName = "Kevin";
    const result = await createUser({ name: userName });
    user1Id = result.id;
    expect(result.name === userName).toBe(true);
  });

  it("should create another new user with bio", async () => {
    const userName = "Linda";
    const bio = "Who am I?";
    const result = await createUser({ name: userName, bio: bio });
    user2Id = result.id;
    expect(result.name === userName).toBe(true);
    expect(result.bio === bio).toBe(true);
  });

  it("should create a new tweet for a specific user", async () => {
    const tweetText = "Hello!";
    const result = await createTweet({
      tweetText: tweetText,
      userId: user1Id,
      hashTags: [{ hashTagText: "greeting" }],
    });
    tweetId = result.id;
    expect(result.tweetText === tweetText).toBe(true);
  });

  it("should create a replying tweet to their own tweet", async () => {
    const tweetText = "Hello again!";
    const result = await createTweet({
      tweetText: tweetText,
      userId: user1Id,
      parentTweetId: tweetId,
      hashTags: [
        { hashTagText: "greeting" },
        { hashTagText: "reply" },
        { hashTagText: "own" },
      ],
    });
    expect(result.tweetText === tweetText).toBe(true);
    expect(result.parentTweetId === tweetId).toBe(true);
  });

  it("should create a replying tweet to another user's tweet", async () => {
    const tweetText = "Hello too!";
    const result = await createTweet({
      tweetText: tweetText,
      userId: user2Id,
      parentTweetId: tweetId,
      hashTags: [
        { hashTagText: "greeting" },
        { hashTagText: "reply" },
        { hashTagText: "other" },
      ],
    });
    expect(result.tweetText === tweetText).toBe(true);
    expect(result.parentTweetId === tweetId).toBe(true);
  });

  it("should get a specific tweet with its replies", async () => {
    const result = await getTweetWithReplies({ id: tweetId });
    console.log("getTweetWithReplies:", result);
    expect(result?.tweetText).toEqual("Hello!");
  });

  it("should create a following/followed relation between two users", async () => {
    const result = await createUserRelation({
      followingUserId: user2Id,
      followedUserId: user1Id,
    });
    expect(result.followingUserId).toEqual(user2Id);
    expect(result.followedUserId).toEqual(user1Id);
  });

  it("should create a direct message between two users", async () => {
    const result = await CreateDirectMessage({
      dmText: "test text",
      fromUserId: user1Id,
      toUserId: user2Id,
    });
    expect(result.dmText).toEqual("test text");
    expect(result.fromUserId).toEqual(user1Id);
    expect(result.toUserId).toEqual(user2Id);
  });
});
