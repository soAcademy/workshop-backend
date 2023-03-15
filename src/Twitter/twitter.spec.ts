import {
  createHashTag,
  createTweet,
  createTweetWithHashTag,
  createUserTwitter,
  getUserProfileTwitter,
} from "./Twitter.resolver";

describe("questionquiz", () => {
  //input = interface, args
  //output = สิ่งที่เรา return ออกมาจาก function นั้น
  let userId: number;
  let postId: number;
  // test("should createUserTwitter correctly", async () => {
  //   const input = {
  //     name: "boeing",
  //     profileImage:
  //       "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ",
  //   };

  //   const output = await createUserTwitter({
  //     name: input.name,
  //     profileImage: input.profileImage,
  //   });
  //   userId = output.id;
  //   expect(output.name === input.name).toBe(true);
  //   expect(output.profileImage === input.profileImage).toBe(true);
  // });

  //  test("should getUserProfileTwitter correctly", async () => {
  //   const input = {
  //     id:userId
  //   }
  //   const output = await getUserProfileTwitter(input)
  //   expect(output )

  //  })

  // test("should createTweet correctly", async () => {
  //   const input = {
  //     message: "hello it's me... I wondering if i get grade above C",
  //     userId: "11",
  //   };
  //   const output = await createTweet({
  //     message: input.message,
  //     userId: userId,
  //   });
  //   userId = output.id;
  //   expect(output.message === input.message).toBe(true);
  // });

  test("should createTweetWithHashTag correctly", async () => {
    const input = {
      hashTagName: [
        "test" + new Date().getTime(),
        "bingbing" + new Date().getTime(),
      ],
      postId: 1,
    };
    const output = await createTweetWithHashTag({
      hashTagName: input.hashTagName,
      postId: 1,
    });
    postId = postId;
    console.log(output);

    // expect(output.hashTagName[0] === input.hashTagName[0]).toBe(true);
  });

  test("should createHashTag correctly", async () => {
    const input = {
      postId: 1,
      hashTagName: "Dprisma",
    };
    const output = await createHashTag({
      postId: input.postId,
      hashTagName: input.hashTagName,
    });
    postId = postId;
    console.log(output);
    expect(output.hashTagName === input.hashTagName).toBe(true);
  });
});
