import { getUserProfileCodec } from "./interface";
import {
  createTweet,
  createUser,
  follow,
  getHashtags,
  getTweetsByHashtags,
  getTweetsByUser,
  getUserProfile,
  likeTweet,
  replyTweet,
  sendDirectMessage,
  unfollow,
  unlikeTweet,
  updateUserProfilePicture,
} from "./resolver";

describe("TwitterAPI", () => {
  let userId1: number;
  let userId2: number;
  let userId3: number;
  let username: string;
  test("createUser", async () => {
    username = "TestUser" + new Date().getTime();
    const result = await createUser({
      username: username,
    });
    userId1 = result.id;
    userId2 = (
      await createUser({ username: "TestUser" + new Date().getTime() })
    ).id;
    userId3 = (
      await createUser({ username: "TestUser" + new Date().getTime() })
    ).id;
    expect(result.username).toBe(username);
  });

  test("follow", async () => {
    const followResult = await follow({
      userId: userId1,
      followId: userId2,
    });
    await follow({ userId: userId1, followId: userId3 });
    const result = await getUserProfile({
      userId: userId1,
    });
    expect(result.followings[0].id).toBe(userId2);
    expect(result.followings[1].id).not.toBe(userId2);
  });

  test("getUserProfile", async () => {
    const result = await getUserProfile({
      userId: userId1,
    });
    expect(result).toEqual(
      expect.objectContaining({
        id: userId1,
        username: username,
      })
    );
  });

  test("getUserFollowings", async () => {
    const result = await getUserProfile({
      userId: userId1,
    });
    expect(result).toEqual(
      expect.objectContaining({
        id: userId1,
        username: username,
        followings: expect.arrayContaining([
          expect.objectContaining({
            id: userId2 || userId3,
          }),
        ]),
      })
    );
  });

  test("getUserFollowers", async () => {
    const result = await getUserProfile({
      userId: userId2,
    });
    expect(result).toEqual(
      expect.objectContaining({
        id: userId2,
        followers: expect.arrayContaining([
          expect.objectContaining({
            id: userId1,
          }),
        ]),
      })
    );
  });

  test("unfollow", async () => {
    await unfollow({
      userId: userId1,
      unFollowId: userId2,
    });
    const result = await getUserProfile({
      userId: userId1,
    });
    expect(result.followings).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: userId2,
        }),
      ])
    );
    expect(result.followings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: userId3,
        }),
      ])
    );
  });
  let tweetId: number;
  test("createTweet", async () => {
    const resultWithoutHashtag = await createTweet({
      userId: userId1,
      message: "Hello WOrld without hashtag!",
      hashtags: null,
    });
    const resultWithHashtags = await createTweet({
      userId: userId2,
      message: "Hello World with hashtags!",
      hashtags: ["Hello", "World"],
    });
    tweetId = resultWithHashtags.id;
    expect(resultWithoutHashtag).toEqual(
      expect.objectContaining({
        userId: userId1,
        message: "Hello WOrld without hashtag!",
      })
    );
    expect(resultWithHashtags).toEqual(
      expect.objectContaining({
        userId: userId2,
        message: "Hello World with hashtags!",
        hashtags: expect.arrayContaining([
          expect.objectContaining({
            hashtag: "Hello" || "World",
          }),
        ]),
      })
    );
  });

  test("getHashtags", async () => {
    const result = await getHashtags();
    // console.log("getHashtags", result);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          hashtag: expect.any(String),
        }),
      ])
    );
  });

  test("getTweetsByHashtags", async () => {
    const tweetWithHashtagHello = await getTweetsByHashtags({
      hashtag: "Hello",
    });
    const tweetWithHashtagWorld = await getTweetsByHashtags({
      hashtag: "World",
    });
    // console.log("tweetWithHashtagHello", tweetWithHashtagHello);
    // console.log("tweetWithHashtagWorld", tweetWithHashtagWorld);
    expect(tweetWithHashtagHello).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          hashtags: expect.arrayContaining([
            expect.objectContaining({
              hashtag: "Hello",
            }),
          ]),
        }),
      ])
    );
    expect(tweetWithHashtagWorld).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          hashtags: expect.arrayContaining([
            expect.objectContaining({
              hashtag: "World",
            }),
          ]),
        }),
      ])
    );
  });

  test("getTweetsByUser", async () => {
    await createTweet({
      userId: userId1,
      message: "add tweets",
      hashtags: ["GetTweetByUser"],
    });
    const tweets = await getTweetsByUser({
      userId: userId1,
    });
    // console.log("getTweetsByUser", tweets);
    expect(tweets).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          message: "add tweets" || "Hello WOrld without hashtag!",
          userId: userId1,
        }),
      ])
    );
  });

  test("replyTweet", async () => {
    const result = await replyTweet({
      tweetId: tweetId,
      message: "Reply To TweetId No." + tweetId,
      hashtags: ["World"],
      userId: userId3
    });
    // console.log("Reply Tweet",result)
    expect(result.id).toBe(tweetId);
    expect(result.replyBy).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          message: "Reply To TweetId No." + tweetId,
          userId: userId3,
        }),
      ])
    );
  });

  test("Like Tweet", async () => {
    const result = await likeTweet({
      userId: userId2,
      tweetId: 1,
    });
    // console.log("Like Tweet", result);
    expect(result.id).toBe(1);
    expect(result.likedBy.at(-1)?.id === userId2).toBe(true);
  });

  test("Unlike Tweet", async () => {
    const result = await unlikeTweet({
      userId: userId2,
      tweetId: 1,
    });
    // console.log("Like Tweet", result);
    expect(result.id).toBe(1);
    expect(result.likedBy).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: userId2,
        }),
      ])
    );
  });

  test("update profile image", async () => {
    const imageUrl = "http://test.com/image.jpg"
    const result =  await updateUserProfilePicture({
      userId: userId1,
      imageUrl: imageUrl
    })
    // console.log('update profile image', result)
    expect(result.profileImage).toBe(imageUrl)
  })

  test("Send DirectMessage",async()=>{
    const result = await sendDirectMessage({
      message : "Test DM",
      fromUserId: userId1,
      toUserId: 1,
    })
    // console.log('DirectMessage', result)
    expect(result).toMatchObject({
      message: "Test DM",
      fromUserId: userId1,
      toUserId: 1
    })
  })
});
