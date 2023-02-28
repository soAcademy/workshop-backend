import { PrismaClient } from "../../prisma/client";
import { ICreateTask, IUpdateTaskStatus } from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task,
    },
  });

// createMany
// updateMany
// findUnique(id)
// prisma.todoList.findUnique({
//   where: {
//     id: args.id,
//   }
// })

// prisma.todoList.findUniqueOrThrow({
//   where: {
//     id: args.id,
//   }
// })
// delete

// prisma.todoList.createMany({
//   data: [
//     {task: "Task1"},
//     {task: "Task2"},
//     {task: "Task3"},
//   ]
// })

// prisma.todoList.updateMany({
//   where: {
//     status: "DELETE"
//   }, 
//   data: {
//     task: "------"
//   }
// })

// prisma.todoList.updateMany({
//   where: {
//     status: args.status1
//   }, 
//   data: {
//     status: args.status2
//   }
// })

// {
//   status1: "DONE",
//   status2: "DELETE
// }

// prisma.todoList.delete({
//   where: {
//     id: 10
//   }
// })

// prisma.todoList.deleteMany({
//   where: {
//     status: 'DONE'
//   }
// })

// interface IUpdateMany {
//   status: string;
//   task: string;
// }


export const getTasks = () =>
  prisma.todoList.findMany({
    where: {
      NOT: {
        status: "DELETE",
      },
    },
    orderBy: {
      id: "desc",
    },
    select: {
      id: true,
      task: true,
      status: true,
    }
  });

export const updateTaskStatus = (args: IUpdateTaskStatus) =>
  prisma.todoList.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
      task: args.task,
    },
  });


