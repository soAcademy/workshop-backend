import {
  addFriendFacebook,
  commentFacebook,
  createGroupFacebook,
  createLikeTypeFacebook,
  createPostFacebook,
  createShareTypeFacebook,
  createUserFacebook,
  getHashtagFacebook,
  getPostByHashtagFacebook,
  getPostByUserFacebook,
  getUserFacebook,
  likeFacebook,
  sendDirectMsgFacebook,
  shareFacebook,
  subCommentFacebook,
} from "./facebook.resovler";

describe("Facebook", () => {
  // test("createUserFacebook", async () => {
  //   const data = {
  //     name: "Boat7",
  //     profileImage: "A4",
  //     coverImage: "A4",
  //     bio: "A4",
  //   };
  //   const result = await createUserFacebook(data);
  //   console.log("createUserFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getUserFacebook", async () => {
  //   const result = await getUserFacebook();
  //   console.log("getUserFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("addFriendFacebook", async () => {
  //   const data = {
  //     fromUserId: 1,
  //     toUserId: 2,
  //   };
  //   const result = await addFriendFacebook(data);
  //   console.log("addFriendFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createGroupFacebook", async () => {
  //   const data = {
  //     groupName: "AAAAA2",
  //     groupImage: "BBBBBB2",
  //     userIdOfCreator: 2,
  //   };
  //   const result = await createGroupFacebook(data);
  //   console.log("createGroupFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  test("createPostFacebook", async () => {
    const data = {
      userId: 4,
      postDetail: "BBBB sdfsdfdsfdf",
      image: "CCCCC",
      postIngroupId: null,
      postInUserId: 1,
    };
    const result = await createPostFacebook(data);
    console.log("createPostFacebook", result);
    // expect(result.name === data.name).toBe(true);
  });
  // test("commentFacebook", async () => {
  //   const data = {
  //     postId: 2,
  //     commentDetail: "BBBBBB2",
  //     fromUserId: 3,
  //   };
  //   const result = await commentFacebook(data);
  //   console.log("commentFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("subCommentFacebook", async () => {
  //   const data = {
  //     commentId: 1,
  //     subCommentDetail: "CCCCCC",
  //     fromUserId: 1,
  //   };
  //   const result = await subCommentFacebook(data);
  //   console.log("subCommentFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createLikeTypeFacebook", async () => {
  //   const data = {
  //     name: "Cry",
  //   };
  //   const result = await createLikeTypeFacebook(data);
  //   console.log("createLikeTypeFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("createShareTypeFacebook", async () => {
  //   const data = {
  //     name: "Friends",
  //   };
  //   const result = await createShareTypeFacebook(data);
  //   console.log("createShareTypeFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("likeFacebook", async () => {
  //   const data = {
  //     postId: 1,
  //     fromUserId: 2,
  //     likeTypeId: 1,
  //   };
  //   const result = await likeFacebook(data);
  //   console.log("likeFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("shareFacebook", async () => {
  //   const data = {
  //     postId: 1,
  //     fromUserId: 3,
  //     shareStatusId: 1,
  //   };
  //   const result = await shareFacebook(data);
  //   console.log("shareFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("sendDirectMsgFacebook", async () => {
  //   const data = {
  //     fromUserId: 1,
  //     toUserId: 2,
  //     msgDetail: "HI GM",
  //   };
  //   const result = await sendDirectMsgFacebook(data);
  //   console.log("sendDirectMsgFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });

  // test("getHashtagFacebook", async () => {
  //   const result = await getHashtagFacebook();
  //   console.log("getHashtagFacebook", result);
  //   // expect(result.name === data.name).toBe(true);
  // });

  // test("getPostByHashtagFacebook", async () => {
  //   const data = {
  //     hashtag: "AAA",
  //   };
  //   const result = await getPostByHashtagFacebook(data);
  //   console.log("getPostByHashtagFacebook", JSON.stringify(result));
  //   // expect(result.name === data.name).toBe(true);
  // });
  // test("getPostByUserFacebook", async () => {
  //   const data = {
  //     userId: 2,
  //   };
  //   const result = await getPostByUserFacebook(data);
  //   console.log("getPostByUserFacebook", JSON.stringify(result));
  //   // expect(result.name === data.name).toBe(true);
  // });
});
