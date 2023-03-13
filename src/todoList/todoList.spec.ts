import { createTask, createTasks, getTasks } from "./todoList.resolvers";

describe("Todo list", () => {
  it("should create a new task", async () => {
    const result = await createTask({ task: "test", bgColor: "slate" });
    expect(result.task === "test").toBe(true);
  });

  it("should create new tasks", async () => {
    const data = [
      {
        task: "good morning",
        bgColor: "red",
      },
      {
        task: "good afternoon",
        bgColor: "yellow",
      },
    ];
    const result = await createTasks(data);
    expect(result.count === data.length).toBe(true);
  });

  it("should get all pending and done tasks", async () => {
    const result = await getTasks();
    console.log("getTasks", result);
    expect(result.length > 0).toBe(true);
  });
});
