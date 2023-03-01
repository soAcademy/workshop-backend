// จัดการตัวแรกให้เสร็จ
import { PrismaClient } from "../../prisma/client";
import {
  ICreateTask,
  IDeleteTasks,
  IDeleteManyTasks
  IGetTasks,
  IUpdateTaskStatus,
  IUpdateTasks,
  IFindThrow,
  IFindTask,
  ICreateManyTasks
} from "./todoList.interface";

export const prisma = new PrismaClient();
// คลิกขวาไปที createTask เพื่อดูว่ามันสามารถส่ง Key value ตัวไหนได้บ้าง แล้วก็ทำวนไป
export const createTask = (args: ICreateTask) =>
  prisma.todoList.create({
    data: { task: args.task },
  });
// export const createManyTasks = (args: ICreateTasks) =>
//   prisma.todoList.createMany({
//     data: [
//       {task: "Task1"},
//       {task: "Task2"},
//       {task: "Task3"},
//     ]
//   })


// เราไม่ต้องมี argument เพราะเราเอาหมดทุกตัว ปกติถ้ามันมีในวงเล็บ แปลว่าเราเลือกแล้วว่าเราจะเอาอะไรบ้างในนั้น
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
    // เพิ่มตัวนี้เข้ามาทีหลัง ไว่้แค่เลือกเฉพาะบางฟีล แบบถ้าเราไม่มี select อ่ะมันก็จะขึ้นมาให้เราหมดเลย 
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
      task: args.task,
      status: args.status,
    },
  });


export const findTask = (args: IFindTask) =>
prisma.todoList.findUnique({
  where: {
    id: args.id,
  }
})

export const findThrow = (args: IFindThrow) =>
prisma.todoList.findUniqueOrThrow({
  where: {
    id: args.id,
  },
  // ตัวนี้มันเป็นฟังชันของมัน ไม่ต้องไปดูที่ .prisma
  select: {
    id: true,
    task: true,
    status: true,
    updatedAt: true
  }
  // data: {
  //   task: args.task,
  // },
});

export const updateMany = (args: IUpdateTasks) =>
prisma.todoList.updateMany({
  where: {
    status: "DELETE"
  }, 
  data: {
    task: "------"
  }
})

// const export = updateMany = (args: IUpdate) =>
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
export const deleteTasks = (args: IDeleteTasks) =>
prisma.todoList.delete({
  where: {
    id: 10
  }
})

export const deleteManyTasks = (args: IDeleteManyTasks) =>
prisma.todoList.deleteMany({
  where: {
    status: 'DONE'
  }
})

// [
//   {
//     id: 1,,
//     status: 'PENDING'
//   },
//   {
//     id: 2,,
//     status: 'PENDING'
//   }
// ]


// ข้อดีคือถ้ามันเขียนผิดแล้วมันจะแดงให้เราเห็นเลย ซึ่งส่วนใหญ่ความผิดมาจากการส่ง Type หรือประกาศ Type ผิด
export const createManyTasks = (args: ICreateManyTasks[]) =>
  prisma.todoList.createMany({
    // data: [{ task: args[0].task, 
    //         status: args[0].status},
    //         { task: args[1].task, 
    //           status: args[1].status},
    //       ],
    data: args
  });