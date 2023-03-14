import { PrismaClient } from "../../prisma/client";
import { ICreateManyTasks, IUpdateTaskStatus, ICreateTask, IUpdateManyTaskStatuses, IDelateTask } from "./todoList.interface";

export const prisma = new PrismaClient();

export const createTask = (args: ICreateTask) =>
  prisma.todoList.create({
    data: {
      task: args.task,
    },
  });

export const getTasks = () =>
  prisma.todoList.findMany({
    where: {
      NOT: {
        status: "DELETED",
      },
    },
    orderBy: {
      id: "desc",
    },
  });

export const updateTaskStatus = (args: IUpdateTaskStatus) =>
  prisma.todoList.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });

// export const createManyTasks = () =>
//   prisma.todoList.createMany({
//     data: [
//       { task: "SQL", status: "Under progress" },
//       { task: "CSS", status: "Completed" },
//     ],
//   });

// [
//   {
//     task: "Task1",
//     status: "PENDING"
//   },
//   {
//     task: "Task2",
//     status: "PENDING"
//   }
// ]

export const createManyTasks = (args: ICreateManyTasks) =>
prisma.todoList.createMany({
  data: args.data,
//   data: [{
//     task: args[0].task,
//     status: args[0].status,
//   },
//   {
//     task: args[1].task,
//     status: args[1].status,
//   }
// ],
});

export const updateManyTaskStatuses = (args: IUpdateManyTaskStatuses) =>
  prisma.todoList.updateMany({
    where: {
      status: args.status1,
    },
    data: {
      status: args.status2,
    },
  });

export const findUniqueTask = () =>
  prisma.todoList.findUnique({
    where: {
      id: 1,
    },
  });

export const deleteTask = (args:IDelateTask) =>
  prisma.todoList.delete({
    where: {
      id: args.id,
    },
  });

export const deleteManyTask = () =>
  prisma.todoList.deleteMany({
    where: {
      status: "Under progress",
    },
  });
