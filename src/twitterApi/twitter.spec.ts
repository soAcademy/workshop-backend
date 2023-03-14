import {
  createPost,
  getHashtags,
  getPostByHashtag,
  getPostByUser,
  getUserProfile,
  replyPost,
} from "./twitter.resolver";

describe("twitterApi", () => {
  test("getUserProfile", async () => {
    const data = {
      name: "A",
    };
    const result = await getUserProfile(data);
    console.log("getUserProfile:", result);
    expect(result.image === "Ai").toBe(true);
  });

  test("createPost", async () => {
    const data = {
      userId: 2,
      caption: "Test2",
      hashtags: [
        {
          hashtag: "CSS",
        },
        {
          hashtag: "SQL",
        },
      ],
    };
    const result = await createPost(data);
    console.log("createPost:", result);
    expect(result.userId === data.userId).toBe(true);
  });

  test("getHashtags", async () => {
    const result = await getHashtags();
    console.log("getHashtags:", result);
  });

  test("getPostByHashtag", async () => {
    const data = {
      hashtag: "CSS",
    };
    const result = await getPostByHashtag(data);
    console.log("getPostByHashtag:", result);
    expect(result.length > 0).toBe(true);
  });
});

test("replyPost", async () => {
  const data = {
    postId: 1,
    reply: "Fundamental",
    userId: 1,
    hashtags: [
      {
        hashtag: "CSS",
      },
      {
        hashtag: "REACT",
      },
    ],
  };
  const result = await replyPost(data);
  console.log("replyPost:", result);
  expect(result.replyBy[0].caption === data.reply).toBe(true);
});

test("getPostByUser", async () => {
  const data = {
    userId: 2,
  };
  const result = await getPostByUser(data);
  console.log("getPostByUser:", result);
  expect(result.length > 0).toBe(true);
});
