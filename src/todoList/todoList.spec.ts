import {
  createTask,
  createTasks,
  getTasks,
  updateTaskStatus,
} from "./todoList.resolvers";

describe("Todo list", () => {
  let taskId: number;

  it("should create a new task", async () => {
    const result = await createTask({ task: "test", bgColor: "slate" });
    taskId = result.id;
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

  it("should update a specific task status to DONE", async () => {
    const result = await updateTaskStatus({
      id: taskId,
      status: "DONE",
    });
    expect(result.status === "DONE").toBe(true);
  });

  it("should update a specific task status to DELETED", async () => {
    const result = await updateTaskStatus({
      id: taskId,
      status: "DELETED",
    });
    expect(result.status === "DELETED").toBe(true);
  });
});
