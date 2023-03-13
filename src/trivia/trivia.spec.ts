import {
  createQuiz,
  createCategory,
  getQuizesByCategory,
  sumNumber,
  submitQuestion,
  getResults,
  updateQuiz,
} from "./trivia.resolver";

describe("Trivia", () => {
  let category1Name: string;

  // test('should sum number correctly', () => {
  //   const result1 = sumNumber({x: 10, y: 20})
  //   const result2 = sumNumber({x: 10, y: 30});
  //   const result3 = sumNumber({x: 10, y: 40});
  //   // console.log(result1);

  //   expect(result1).toEqual(30);
  //   expect(result2).not.toEqual(30);
  //   expect(result3 === 50).toBe(true);
  // })

  // test('createQuizCategory', async () => {
  //   const category1 = 'คณิตศาสตร์'
  //   const result1 = await createCategory({name: category1})
  //   category1Name = result1.name
  //   expect(result1.name === category1).toBe(true);
  // });

  // test('createQuiz', async () => {
  //   const quizData = {
  //     quiz: "ในอ่างมีปลา 3 ตัว ตายไป 1 ตัว ในอ่างเหลือปลากี่ตัว",
  //     answer: "2 ตัว",
  //     // categoryName: category1Name,
  //     categoryName: 'คณิตศาสตร์',
  //     choices: [
  //       {
  //         choice: "3 ตัว"
  //       },
  //       {
  //         choice: "5 ตัว"
  //       },
  //       {
  //         choice: "4 ตัว"
  //       }
  //     ]
  //   }

  //   const result = await createQuiz(quizData)
  //   console.log('createQuiz', result);
  //   expect(result.quiz === quizData.quiz).toBe(true);
  // })

  test("updateQuiz", async () => {
    const quizData = {
      quizId: 9,
      quiz: "ในอ่างมีปลา 4 ตัว ต้องการแบ่งเป็นอ่างละ 2 ตัว ต้องใช้อ่างกี่ใบ",
      answer: "2 ใบ",
      // categoryName: category1Name,
      categoryName: "คณิตศาสตร์",
      choices: [
        {
          choice: "3 ใบ",
        },
        {
          choice: "5 ใบ",
        },
        {
          choice: "4 ใบ",
        },
      ],
    };

    const result = await updateQuiz(quizData);
    console.log("createQuiz", result);
    expect(result.quiz === quizData.quiz).toBe(true);
  });

  // test('getQuiz', async () => {
  //   const result = await getQuizesByCategory({categoryName: category1Name})
  //   console.log('getQuiz', result);
  //   expect(result.length > 0).toBe(true);
  // })

  // test("submitQuestion", async () => {
  //   const submitData = {
  //     user: "Mr.K",
  //     roundQuizes: [
  //       { quizId: 1, userChoiceId: 1 },
  //       { quizId: 5, userChoiceId: 18 },
  //       { quizId: 6, userChoiceId: 22 },
  //     ],
  //     // categoryName: category1Name,
  //     categoryName: "มีสาระ",
  //   };

  //   const result = await submitQuestion(submitData);
  //   console.log("getQuiz", result);
  //   expect(result.user === submitData.user).toBe(true);
  // });

  // test("getResults", async () => {
  //   const result = await getResults();
  //   console.log("getResults", result);
  //   expect(result.length > 0).toBe(true);
  // });
});
