import { createUserTwitter, getUserProfileTwitter } from "./Twitter.resolver";

describe("questionquiz", () => {
  //input = interface, args
  //output = สิ่งที่เรา return ออกมาจาก function นั้น
  let userId: number;
  test("should createUserTwitter correctly", async () => {
    const input = {
      name: "boeing",
      profileImage:
        "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ",
    };

    const output = await createUserTwitter({
      name: input.name,
      profileImage: input.profileImage,
    });
    userId = output.id;
    expect(output.name === input.name).toBe(true);
    expect(output.profileImage === input.profileImage).toBe(true);
  });

  //  test("should getUserProfileTwitter correctly", async () => {
  //   const input = {
  //     id:userId
  //   }
  //   const output = await getUserProfileTwitter(input)
  //   expect(output )

  //  })
});
