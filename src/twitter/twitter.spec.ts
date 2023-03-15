import { createComment, createDirectMessage, createUser, createUserPost, getPostsbyHashtag, getPostsbyUser } from "./twitter.resolver";

describe("Twitter", () => {
  let userId: number;
  let hashtagId: number;
  test("createUser", async () => {
    const data = {
      name: "T",
      image: "ergegergerg",
    };
    const result = await createUser(data);
    console.log("createUser", result);
    expect(result.name === data.name).toBe(true);
  });

  test("createUserPost", async () => {
    const data = {
      userId: 1,
      post: "dfgdfggdf445",
      postToHashtags: [
        {
          hashtagId: 1,
          hashtag: "#xcdfbdf",
        },
      ],
    };
    const result = await createUserPost(data);
    console.log("createUser", result);
    expect(result.post === data.post).toBe(true);
  });

  // test("createHashtag", async () => {
  //   const data = {
  //     hashtag: "dfgdfgds",
  //   };
  //   const result = await createHashtag(data);
  //   console.log("createHashtag", result);
  //   expect(result.hashtag === data.hashtag).toBe(true);
  // });

test("getPostsbyHashtag", async () => {
  const result = await getPostsbyHashtag({hashtagId: hashtagId});
  console.log("createUser", result);
  expect(result.length > 0).toBe(true);
});

test("createComment", async () => {
  const data = {
    message: "dfgvdfgddfdfb",
    postId: 1,
    userId: 1
  };
  const result = await createComment(data);
  console.log("createComment", result);
  expect(result.message === data.message).toBe(true);
});

test("getPostsbyUser", async () => {
  const result = await getPostsbyUser({userId: userId});
  console.log("getPostsbyUser", result);
  expect(result.length > 0).toBe(true);
});

test("createDirectMessage", async () => {
  const data = {
    message: "rfgegrgeagr",
    fromUserId: 2,
    toUserId: 1
  };
  const result = await createDirectMessage(data);
  console.log("createComment", result);
  expect(result.message === data.message).toBe(true);
});

});


