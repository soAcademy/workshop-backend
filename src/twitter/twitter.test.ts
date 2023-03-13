import {
  createUserPost,
  getHashtags,
  getPostByHashtag,
  getPostByUser,
  getUserProfile,
} from "./twitter.resolver";

describe("Twitter", () => {
  test("getUserProfile", async () => {
    const sampleId = 1;
    const result = await getUserProfile({ id: sampleId });
    console.log("getCategories", result);
    expect(result?.id).toEqual(1);
  });

  // test("createUserPostCodec", async () => {
  //   const sampleDetail = "this is a new post.";
  //   const samplePost = {
  //     userId: 1,
  //     detail: sampleDetail,
  //     hashtags: [{ hashtag: "new_post" }, { hashtag: "new_again" }],
  //   };
  //   const result = await createUserPost(samplePost);
  //   console.log("createUserPostCodec", result);
  //   expect(result?.detail).toEqual(sampleDetail);
  // });

  test("getHashtags", async () => {
    const result = await getHashtags();
    console.log("getHashtags", result);
    expect(result?.length).toBeGreaterThan(0);
  });

  test("getPostByHashtag", async () => {
    const sampleHashtagId = 3;
    const result = await getPostByHashtag({ hashtagId: sampleHashtagId });
    console.log("getPostByHashtag", result);
    expect(result?.length).toBeGreaterThan(0);
  });

  test("getPostByUser", async () => {
    const sampleUserId = 1;
    const result = await getPostByUser({ userId: sampleUserId });
    console.log("getPostByUser", result);
    expect(result?.length).toBeGreaterThan(0);
  });
});
