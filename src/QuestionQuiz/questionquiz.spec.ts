// import { ISubmitQuiz } from "./QuestionQuiz.interface";
// import {
//   createCategory,
//   createQuiz,
//   createUser,
//   getQuizbyCategory,
//   prisma,
//   submitQuiz,
//   sumNumber,
// } from "./QuestionQuiz.resolver";

// //input = interface, args
// //output = สิ่งที่เรา return ออกมาจาก function นั้น
// describe("questionquiz", () => {
//   let categoryId: number = 1;
//   let userId: number;
//   let roundQuizId: number;
//   let dataQuestion: {
//     questionId: number;
//     answerId?: number;
//     choice: {
//       id: number;
//       choice: string;
//     }[];
//   }[];

//   test("should sum number correctly", () => {
//     const result1 = sumNumber({ x: 10, y: 20 });
//     const result2 = sumNumber({ x: 10, y: 30 });
//     const result3 = sumNumber({ x: 10, y: 40 });
//     // console.log(result1);

//     expect(result1).toEqual(30);
//     expect(result2).not.toEqual(30);
//     expect(result3 === 50).toBe(true);
//   });

//   test("should createQuizCategory correctly", async () => {
//     const input = "test";
//     const output = await createCategory({
//       name: input,
//     });
//     // console.log(output);
//     // categoryId = output.id;
//     expect(output.name === input).toBe(true);
//   });

//   test("should createUser correctly", async () => {
//     const input = "Rocket";
//     const output = await createUser({
//       name: input,
//     });
//     // console.log(output);
//     userId = output.id;
//     expect(output.name === input).toBe(true);
//   });

//   test("should createQuiz correctly", async () => {
//     const input = {
//       question: "ข้อใดคือความหมายของ Algorithm",
//       answer: "กระบวนการแก้ปัญหาที่สามารถเข้าใจได้",
//       categoryId: categoryId,
//       choices: [
//         {
//           choiceName: "รูปแบบการเขียนโปรแกรม",
//         },
//         {
//           choiceName: "การพิสูจน์ทางคณิตศาสตร์",
//         },
//         {
//           choiceName: "ขั้นตอนการทำงานของโปรแกรม",
//         },
//       ],
//     };
//     const output = await createQuiz(input);
//     console.log(output);
//     expect(output.textQuestion === input.question).toBe(true);
//   });

//   test("should getQuizbyCategory correctly", async () => {
//     const input = {
//       categoryId: categoryId,
//       userId: userId,
//     };
//     const output = await getQuizbyCategory(input);
//     console.log(output);
//     roundQuizId = output[0].roundQuizId;
//     //questionที่สุ่มมาแล้ว
//     dataQuestion = output.map((r) => ({
//       choice: r.choices,
//       questionId: r.questionId,
//     }));
//     expect(output.length === 3).toBe(true);
//   });

//   test("should submitQuiz with all answers correctly", async () => {
//     //############ สิ่งที่ต้องเอามา ##############
//     // คำถามที่ถูก
//     // คำตอบที่ถูกของคำถามนั้น
//     // choice ที่ถูกของคำถามนั้น
//     // choice ที่ผิดของคำถามนั้น

//     //############ สิ่งที่ต้องเทส ##############
//     // ตอบคำถามถูกต้องได้คะแนน (ถูกทั้งหมด ถูกบางข้อ ผิดทุกข้อ)

//     const allQuestion = await prisma.question.findMany({
//       where: {
//         questionCategoryId: categoryId,
//       },
//     });

//     dataQuestion.forEach((r) => {
//       const question = allQuestion.find((item) => item.id === r.questionId);
//       r.answerId = question?.answerId;
//     });
//     //
//     const input = {
//       userId: userId,
//       roundQuizId: roundQuizId,
//       categoryId: categoryId,
//       questions: dataQuestion.map((r) => ({
//         questionId: r.questionId,
//         userChoose: r.answerId as number,
//       })),
//     };
//     const output = await submitQuiz(input);
//     expect(output.countedScore === 3).toBe(true);
//   });
// });
