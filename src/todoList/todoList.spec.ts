import { createTask } from "./todoList.resolvers";

describe("Todo list", () => {
  it("should create a new task", async () => {
    const result = await createTask({ task: "test", bgColor: "slate" });
    expect(result.task === "test").toBe(true);
  });
});
