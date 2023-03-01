// import { PrismaClient } from "../../prisma/client";
// import {
//   ICreateTask,
//   ICreateMany,
//   IUpdateTaskStatus,
//   IGetTaskUnique,
//   IUpdateMany,
//   IDeleteId,
// } from "./todoList.interface";

// export const prisma = new PrismaClient();

// export const createTask = (args: ICreateTask) =>
//   prisma.todoList.create({
//     data: {
//       task: args.task,
//     },
//   });

// export const createMany = (args: ICreateMany) =>
//   prisma.todoList.createMany(args);

// export const getTasks = () =>
//   prisma.todoList.findMany({
//     where: {
//       NOT: {
//         status: "DELETE",
//       },
//     },
//     orderBy: [
//       {
//         status: "desc",
//       },
//       { id: "asc" },
//     ],
//   });

// export const getTaskUnique = (args: IGetTaskUnique) =>
//   prisma.todoList.findUnique({
//     where: {
//       id: args.id,
//     },
//   });

// export const getUniqueOrThrow = (args: IGetTaskUnique) =>
//   prisma.todoList.findUniqueOrThrow({
//     where: {
//       id: args.id,
//     },
//   });

// export const updateTaskStatus = (args: IUpdateTaskStatus) =>
//   prisma.todoList.update({
//     where: {
//       id: args.id,
//     },
//     data: {
//       status: args.status,
//     },
//   });

// export const updateMany = (args: IUpdateMany) =>
//   prisma.todoList.updateMany({
//     where: { status: args.curr_status },
//     data: { status: args.status },
//   });

// export const deleteId = (args: IDeleteId) =>
//   prisma.todoList.delete({
//     where: { id: args.id },
//   });
