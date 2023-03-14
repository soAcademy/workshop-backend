import { createTweet, createUser } from "./twitter.resolvers";

describe("Twitter", () => {
  let userId: number;
  let tweetId: number;

  it("should create a new user", async () => {
    const userName = "Carlos";
    const result = await createUser({ name: userName });
    userId = result.id;
    expect(result.name === userName).toBe(true);
  });

  it("should create a new tweet for a specific user", async () => {
    const tweetText = "Hello";
    const result = await createTweet({ tweetText: tweetText, userId: userId });
    tweetId = result.id;
    expect(result.tweetText === tweetText).toBe(true);
  });

  it("should create a replying tweet for a specific user", async () => {
    const tweetText = "Hello too";
    const result = await createTweet({
      tweetText: tweetText,
      userId: userId,
      parentTweetId: tweetId,
    });
    expect(result.tweetText === tweetText).toBe(true);
    expect(result.parentTweetId === tweetId).toBe(true);
  });
});
