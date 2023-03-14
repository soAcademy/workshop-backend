import {
  createPostAndHashtag,
  createUser,
  directMessage,
  followUser,
  getHashtag,
  getPost,
  getPostByHashtag,
  getUser,
  replyPost,
  unFollowUser,
  updateUser,
} from "./CloneTwitter.resolver";

describe("cloneTwitter", () => {
  // test("createUser", async () => {
  //   const username1 = "A name";
  //   const result = await createUser({
  //     username: username1,
  //   });
  //   console.log("createUser", result);
  //   expect(result.username).toEqual("A name");
  // });

  // test("updateUser", async () => {
  //   const data = {
  //     id: 5,
  //     username: "AAA username",
  //     image:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   };

  //   const result = await updateUser(data);
  //   console.log("updated user", result);
  //   expect(result.id === data.id).toBe(true);
  // });

  test("getUser", async () => {
    const result = await getUser();
    console.log("getUser", result);
  });

  // test("followUser", async () => {
  //   const data = {
  //     userId: 1,
  //     followId: 3,
  //   };

  //   const result = await followUser(data);
  //   console.log("followUser", result);
  //   expect(result.id === data.userId).toBe(true);
  // });

  // test("unFollowUser", async () => {
  //   const data = {
  //     userId: 3,
  //     unFollowId: 5,
  //   };

  //   const result = await unFollowUser(data);
  //   console.log("unFollowUser", result);
  //   expect(result.id === data.userId).toBe(true);
  // });

  // test("createPostAndHashtags", async () => {
  //   const data = {
  //     userId: 1,
  //     message: "Hello Twitter!!",
  //     image: "",
  //     hashtags: [{ name: "#FirstTweet" }],
  //   };

  //   const result = await createPostAndHashtag(data);
  //   console.log("createPostAndHashtags", result);
  // });

  test("getPost", async () => {
    const result = await getPost();
    console.log("getPost", result);
  });

  test("getHashtag", async () => {
    const result = await getHashtag();
    console.log("getPost", result);
  });

  test("getPostByHashtag", async () => {
    const data = {
      hashtagName: "#FirstTweet",
    };

    const result = await getPostByHashtag(data);
    console.log("getPostByHashtag", result);
  });

  // test("replyPost", async () => {
  //   const data = {
  //     postId: 2,
  //     userId: 5,
  //     message: "Hi First !!!",
  //     image: "",
  //     hashtags: [{ hashtagName: "#ReplyTweet" }],
  //   };

  //   const result = await replyPost(data);
  //   console.log("Reply post", result);
  //   expect(result.userId === data.userId).toBe(true);
  // });

  test("directMessage", async () => {
    const data = {
      fromUserId: 1,
      toUserId: 3,
      message: "Hi User No.3 !!",
      image: "",
    };

    const result = await directMessage(data);
    console.log("DM", result);
  });
});
