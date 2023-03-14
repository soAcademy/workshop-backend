import { createManyTasks, createTask, deleteTask, findUniqueTask, getTasks, updateManyTaskStatuses, updateTaskStatus } from "./todoList.resolver"

describe("todolist", () => {
  let _id: number
  test("createTask", async () => {
    const data = {
      task: "unitTest"
    }
    const result = await createTask(data)
    console.log('createTask:', result)
    expect(result.task === data.task).toBe(true)
  })

  test("getTask", async () => {
    const result = await getTasks()
    console.log('getTask:', result)
    expect(result.length > 0).toBe(true)
  }
  )

  // test("updateTaskStatus", async () => {
  //   const data = {
  //     id: 6,
  //     status: "complete"
  //   }
  //   _id = data.id
  //   const result = await updateTaskStatus(data)
  //   console.log('updateTaskStatus:', result)
  //   expect(result.id === data.id).toBe(true)
  // })

  // test("updateManyTaskStatuses", async () => {
  //   const data = {
  //     status1: "complete",
  //     status2: "Done"
  //   }
  //   const result = await updateManyTaskStatuses(data)
  //   console.log('updateManyTaskStatuses:', result)
  //   expect(result.count).toEqual(1)
  // })

  // test("deleteTask", async () => {
  //   const data = {
  //     id: _id
  //   }
  //   const result = await deleteTask(data)
  //   console.log('deleteTask:', result)
  //   expect (result.status === 'Done').toBe(true)
  // })

  test("createManyTask", async () => {
    const task = {
      data:
      [
          {
              task: "AI"
          },
          {
              task: "PRISMA"
          }
      ]
  }
    const result = await createManyTasks(task)
    console.log('createManyTasks:', result)
    expect (result.count).toEqual(task.data.length)
  })

})