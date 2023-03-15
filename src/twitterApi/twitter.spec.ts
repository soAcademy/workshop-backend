import {
  clickFollowTwitter,
  clickUnFollowTwitter,
  createPostTwitter,
  createReplyTwitter,
  createUserTwitter,
  getHashtagTwitter,
  getPostByHashtagTwitter,
  getPostByUserTwitter,
  getUserTwitter,
  sendDirectMsgTwitter,
} from "./twitter.resolver";

describe("Twitter", () => {
  // test("createUserTwitter", async () => {
  //   const data = { name: "Boat2", profileImage: "AAAAA" };
  //   const result = await createUserTwitter(data);
  //   // console.log("createUserTwitter", result);
  //   expect(result.name === data.name).toBe(true);
  // });

  // test("getUserTwitter", async () => {
  //   const result = await getUserTwitter();
  //   // console.log("getUserTwitter", result);
  //   expect(result.length > 0).toBe(true);
  // });

  // test("clickFollowTwitter", async () => {
  //   const data = { fromUserId: 1, toUserId: 2 };
  //   const result = await clickFollowTwitter(data);
  //   // console.log("clickFollowTwitter", result);
  //   expect(
  //     result.fromUserId === data.fromUserId && result.toUserId === data.toUserId
  //   ).toBe(true);
  // });

  test("createPostTwitter", async () => {
    const data = {
      userId: 1,
      postDetail: "FFFFFFFF #test10 #test11 #test12",
    };
    const result = await createPostTwitter(data);
    console.log("createPostTwitter", result);
    // expect(result.postDetail === data.postDetail).toBe(true);
  });

  // test("sendDirectMsgTwitter", async () => {
  //   const data = { fromUserId: 1, toUserId: 2, msgDetail: "GMGM" };
  //   const result = await sendDirectMsgTwitter(data);
  //   // console.log("sendDirectMsgTwitter", result);
  //   expect(result.msgDetail === data.msgDetail).toBe(true);
  // });

  // test("getHashtagTwitter", async () => {
  //   const result = await getHashtagTwitter();
  //   // console.log("getHashtagTwitter", result);
  //   expect(result.length >= 0).toBe(true);
  // });

  // test("getPostByHashtagTwitter", async () => {
  //   const data = { hashtag: "#Test10" };
  //   const result = await getPostByHashtagTwitter(data);
  //   // console.log("getPostByHashtagTwitter", JSON.stringify(result));
  //   expect(result[0].postOnHashtag.length >= 0).toBe(true);
  // });

  // test("createReplyTwitter", async () => {
  //   const data = { postId: 2, reply: "CCCCCCC", userId: 3 };
  //   const result = await createReplyTwitter(data);
  //   // console.log("createReplyTwitter", result);
  //   expect(result.reply === data.reply).toBe(true);
  // });

  // test("getPostByUserTwitter", async () => {
  //   const data = { userId: 1 };
  //   const result = await getPostByUserTwitter(data);
  //   // console.log("getPostByUserTwitter", result);
  //   expect(result[0].id === data.userId).toBe(true);
  // });

  // test("clickUnFollowTwitter", async () => {
  //   const data = { fromUserId: 1, toUserId: 2 };
  //   const result = await clickUnFollowTwitter(data);
  //   console.log("clickUnFollowTwitter", result);
  //   // expect(result[0].id === data.userId).toBe(true);
  // });
});
