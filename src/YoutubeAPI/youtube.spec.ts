import {
  AdminRoleEnum,
  BenefitEnum,
  PermissionEnum,
  ReactionEnum,
} from "@prisma/client";
import {
  addChannelAdmin,
  addComment,
  addReaction,
  createChannel,
  createChannelLevel,
  createUser,
  deleteChannelLevel,
  deleteVideo,
  postVideo,
  removeComment,
  removeReaction,
  subscribe,
  unsubscribe,
  updateChannelAdmin,
  updateChannelInfo,
  updateChannelLevel,
  updateUser,
  updateVideo,
} from "./resolver";

describe("Youtube", () => {
  let userId: number;
  test("createUser", async () => {
    const data = {
      username: "TestUser" + new Date().getTime(),
      email: "TestEmail" + new Date().getTime() + "@email.com",
      accountName: "TestName" + new Date().getTime(),
    };
    const result = await createUser(data);
    userId = result.id;
    console.log("createUser", result);
    expect(result.username).toBe(data.username);
    expect(result.email).toBe(data.email);
    expect(result.accountName).toBe(data.accountName);
  });

  test("updateUser", async () => {
    const data = {
      userId,
      accountName: "TestUpdate" + new Date().getTime(),
      profilePicture: "https://img.img/TestProfile.jpg",
    };
    const result = await updateUser(data);
    console.log("updateUser", result);
    expect(result.accountName).toBe(data.accountName);
    expect(result.profilePicture).toBe(data.profilePicture);
  });
  let channelId: number;
  test("createChannel", async () => {
    const data = {
      userId,
      name: "Channel" + new Date().getTime(),
      profilePicture: "https://img.img/TestChannelProfile.jpg",
    };
    const result = await createChannel(data);
    channelId = result.id;
    console.log("createChannel", result);
    expect(result.name).toBe(data.name);
  });

  test("updateChannelInfo", async () => {
    const data = {
      channelId,
      name: "UpdatedChannelName" + new Date().getTime(),
      about: "UpdatedChannelAbout",
    };
    const result = await updateChannelInfo(data);
    console.log("updateChannelInfo", result);
    expect(result.name).toBe(data.name);
    expect(result.id).toBe(data.channelId);
    expect(result.about).toBe(data.about);
  });

  test("addChannelAdmin", async () => {
    const roles = [
      AdminRoleEnum.ADMIN,
      AdminRoleEnum.CREATOR,
      AdminRoleEnum.EDITOR,
    ];
    const data = {
      channelId,
      userId: userId - 1,
      roleName: roles[Math.floor(Math.random() * roles.length)],
      permissions: [PermissionEnum.DELETE, PermissionEnum.EDIT],
    };
    const result = await addChannelAdmin(data);
    console.log("addChannelAdmin", result);
    expect(result.channelId).toBe(data.channelId);
    expect(result.roleName).toBe(data.roleName);
    expect(result.userId).toBe(data.userId);
  });

  test("updateChannelAdmin", async () => {
    const data = {
      channelAdminId: 5,
      roleName: AdminRoleEnum.CREATOR,
      permissions: [PermissionEnum.EDIT, PermissionEnum.POST],
    };
    const result = await updateChannelAdmin(data);
    console.log("result", result);
    expect(result.id).toBe(data.channelAdminId);
    expect(result.roleName).toBe(data.roleName);
    expect(result.permissions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          permission: expect.stringMatching(/CREATE|EDIT|POST|DELETE/),
        }),
      ])
    );
  });
  test("subscribe", async () => {
    const data = {
      userId,
      channelId,
    };
    const result = await subscribe(data);
    console.log("subscribe", result);
    expect(result.id).toBe(data.userId);
  });
  test("unsubscribe", async () => {
    const data = {
      userId,
      channelId,
    };
    const result = await unsubscribe(data);
    console.log("result", result);
    expect(result.id).toBe(data.userId);
  });
  let videoId: number;
  test("postVideo", async () => {
    const data = {
      channelId: channelId,
      name: "video" + new Date().getTime(),
      description: "VIDEO POSTING TEST",
    };
    const result = await postVideo(data);
    videoId = result.id;
    console.log("postVideo", result);
    expect(result.name).toBe(data.name);
  });

  test("updateVideo", async () => {
    const data = {
      videoId,
      description: "UPDATE DESCRIPTION",
    };
    const result = await updateVideo(data);
    console.log("updateVideo", result);
    expect(result.description).toBe(data.description);
  });

  test("deleteVideo", async () => {
    const result = await deleteVideo({ videoId });
    console.log("deleteVideo", result);
    expect(result.id).toBe(videoId);
  });
  let reactionType: string;
  test("addReaction", async () => {
    const data = {
      videoId: 2,
      userId,
      type: [ReactionEnum.DISLIKE, ReactionEnum.LIKE][
        Math.floor(Math.random() * 2)
      ],
    };
    reactionType = data.type;
    const result = await addReaction(data);
    console.log("addReaction", result);
    expect(result.reactions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          videoId: 2,
          user: expect.arrayContaining([
            expect.objectContaining({ id: userId }),
          ]),
        }),
      ])
    );
  });

  test("removeReaction", async () => {
    const data = {
      userId: 34,
      type: reactionType === "LIKE" ? ReactionEnum.LIKE : ReactionEnum.DISLIKE,
      videoId: 2,
    };
    const result = await removeReaction(data);
    console.log("removeReaction", result);
    expect(result.id).toBe(34);
    expect(result.reactions).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          user: expect.objectContaining({ id: 34 }),
        }),
      ])
    );
  });

  test("addComment", async () => {
    const data = {
      comment: "Test Comment",
      userId,
      videoId: 3,
      commentToId: 2,
    };
    const result = await addComment(data);
    console.log("addComment", result);
  });

  test("removeComment", async () => {
    const data = {
      commentId: 2,
    };
    const result = await removeComment(data);
    console.log("removeComment", result);
    expect(result.comment).toBe(null);
    expect(result.userId).toBe(null);
  });
  let channelLevelId: number;
  test("createChannelLevel", async () => {
    const data = {
      level: "หมอก",
      channelId,
      benefits: [BenefitEnum.COMMUNITY_VIDEO, BenefitEnum.EARLY_ACCESS],
    };
    const result = await createChannelLevel(data);
    channelLevelId = result.id;
    console.log("createChannelLevel", result);
    expect(result.id).toBe(data.channelId);
  });

  test("updateChannelLevel", async () => {
    const data = {
      channelLevelId: 3,
      level: "อากาศ",
      benefits: [
        BenefitEnum.COMMUNITY_VIDEO,
        BenefitEnum.EARLY_ACCESS,
        BenefitEnum.EMOTICON,
      ],
    };
    const result = await updateChannelLevel(data);
    console.log('updateChannelLevel', result)
  });
  test("deleteChannelLevel", async () => {
    const data = {
      level: "หมอก",
      channelId,
    };
    const result = await deleteChannelLevel(data);
    console.log("deleteChannelLevel", result);
    expect(result.level).toBe(data.level);
    expect(result.channelId).toBe(data.channelId);
  });
});
