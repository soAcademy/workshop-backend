import {
  createTwitterDM,
  createTwitterPost,
  createTwitterReply,
  createTwitterUser,
  createTwitterUserRelation,
  deleteTwitterUserRelation,
  updateTwitterUser,
} from "./twitter.resolver";

describe("Twitter", () => {
  // test("createTwitterUser", async () => {
  //   const userData = {image:
  //     "https://www.nme.com/wp-content/uploads/2022/05/jisoo-blackpink-yg-entertainment-300522.jpg",
  //   name: `JISOO ${new Date().getTime()}`}
  //   const result1 = await createTwitterUser(userData);
  //   expect(result1.name === userData.name).toBe(true);
  // });

  // test("updateTwitterUser", async () => {
  //   const userData = {id:12,
  //     image:
  //     "https://nationaltoday.com/wp-content/uploads/2022/04/16-BamBam.jpg",
  //   name: `BAMBAM ${new Date().getTime()}`}
  //   const result1 = await updateTwitterUser(userData);
  //   expect(result1.name === userData.name).toBe(true);
  // });

  // test("createTwitterPost", async () => {
  //   const postData = {
  //     userId: 2,
  //     message: "I love NEWJEANS!!!!",
  //     hashTags: [{ message: "#NewJeans" }, { message: "#BUNNIES" }],
  //   };
  //   const result = await createTwitterPost(postData);
  //   console.log("createTwitterPost", result);
  //   expect(result.message === postData.message).toBe(true);
  // });

  // test("createTwitterUserRelation", async () => {
  //   const relationData = {
  //     followerId: 1,
  //     followingId: 3,
  //   };
  //   const result = await createTwitterUserRelation(relationData);
  //   console.log("createTwitterPost", result);
  //   expect(result.followerId === relationData.followerId).toBe(true);
  // });

  // test("deleteTwitterUserRelation", async () => {
  //   const relationDeleteData = {
  //     id: 4,
  //   };
  //   const result = await deleteTwitterUserRelation(relationDeleteData);
  //   console.log("createTwitterPost", result);
  //   expect(result.id === relationDeleteData.id).toBe(true);
  // });

  // test("createTwitterReply", async () => {
  //   const replyData = {
  //     postId: 1,
  //     userId: 3,
  //     message: "LISA is mt Favorite!!!",
  //   };
  //   const result = await createTwitterReply(replyData);
  //   console.log("createTwitterPost", result);
  //   expect(result.postId === replyData.postId).toBe(true);
  // });

  test("createTwitterDM", async () => {
    const DMData = {
      directFromId: 2,
      directToId: 1,
      message:
        "The best way is to go to a website like Travelocity or Expedia. They can help you find the best price.",
    };
    const result = await createTwitterDM(DMData);
    console.log("createTwitterPost", result);
    expect(result.directFromId === DMData.directFromId).toBe(true);
  });
});
