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
    },
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

const categoryData = [
  {
    name: "แกง",
    menus: [
      {
        name: "แกงส้ม",
        price: 100,
      },
      {
        name: "แกงเขียวหวาน",
        price: 120,
      },
    ],
  },
  {
    name: "ต้ม",
    menus: [
      {
        name: "ต้มข่าไก่",
        price: 100,
      },
      {
        name: "ต้มจืดหมู",
        price: 120,
      },
    ],
  },
  {
    name: "ผัด",
    menus: [
      {
        name: "ผัดชะอม",
        price: 100,
      },
      {
        name: "ผัดหมูสับ",
        price: 120,
      },
    ],
  },
];

const menusData = [
  {
    name: "แกงส้ม",
    price: 100,
    category: "แกง"
  },
  {
    name: "แกงเขียวหวาน",
    price: 100,
    category: "แกง"
  },
  {
    name: "ผัดชะอม",
    price: 100,
    category: "ผัด"
  }
]

{
  question: "AAAA",
  answer: "BBBB",
  choices: [
    "A1", "B1", "C1", "D1"
  ]
}

// const quizResult = prisma.quiz.create({data: {quiz, choices: {create: choices}}})

// const answerResult = prisma.choice.create({data: {answer, quizId: quizResult.id}})

// // const choiceResult = prisma.choice.create({data: [{chocies, quizId: quizResult.id}]})

// const quizResult = prisma.quiz.update({where: {id: quizResult.id}, data: {answerId: answerResult.id}})

// model Quiz {
//   answer Choice
//   choices Choice[]
// }

// prisma.quiz.create({
//   data: {
//     quiz: args.quiz,
//     answer: {
//       create: {
//         name: args.answer
//       }
//     },
//     choices: {
//       create: args.choices
//     }
//   }
// })