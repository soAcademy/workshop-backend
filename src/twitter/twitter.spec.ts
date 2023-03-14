import { createUser } from "./twitter.resolvers";

describe("Twitter", () => {
  it("should create a new user", async () => {
    const userName = "Keng";
    const result = await createUser({ name: userName });
    expect(result.name === userName).toBe(true);
  });
});
