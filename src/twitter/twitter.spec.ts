import { createTweet, createUser } from "./twitter.resolvers";

describe("Twitter", () => {
  let userId: number;
  let tweetId: number;

  it("should create a new user", async () => {
    const userName = "Daisy";
    const result = await createUser({ name: userName });
    userId = result.id;
    expect(result.name === userName).toBe(true);
  });

  it("should create a new tweet for a specific user", async () => {
    const tweetText = "Hello again";
    const result = await createTweet({
      tweetText: tweetText,
      userId: userId,
      hashTags: [{ hashTagText: "greeting" }],
    });
    tweetId = result.id;
    expect(result.tweetText === tweetText).toBe(true);
  });

  it("should create a replying tweet for a specific user", async () => {
    const tweetText = "Hello again too";
    const result = await createTweet({
      tweetText: tweetText,
      userId: userId,
      parentTweetId: tweetId,
      hashTags: [{ hashTagText: "greeting" }, { hashTagText: "reply" }],
    });
    expect(result.tweetText === tweetText).toBe(true);
    expect(result.parentTweetId === tweetId).toBe(true);
  });
});
