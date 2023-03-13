import { number } from "io-ts";
import {
  createCategory,
  createQuestion,
  getCategories,
  getGameHistories,
  getQuestions,
  getRanking,
  submitAnswer,
} from "./resolver";

describe("TriviaAPI", () => {
  // test("createCategory", async () => {
  //   const categoryName = "name"+new Date().getTime()
  //   const result = await createCategory({
  //     name: categoryName,
  //   });
  //   expect(result.name).toBe(categoryName);
  // });

  test("getCategories", async () => {
    const result = await getCategories();
    expect(result.length >= 0).toBe(true);
  });

  test("createQuestion", async () => {
    const result = await createQuestion({
      question: "ปลาอะไรไม่ใช่แมว",
      categoryId: 2,
      choices: ["ปลาโลโมโซนิค", "ปลาปริก้า", "ปลาวาฬ"],
      answer: "ปลาอะไรจะเป็นแมว",
    });
    expect(result).toMatchObject({
      question: "ปลาอะไรไม่ใช่แมว",
      categoryId: 2,
    });
  });

  test("getQuestions", async () => {
    const categoryId = 1;
    const questionAmount = 3;
    const choiceAmount = 3;
    const result = await getQuestions({
      categoryId,
      questionAmount,
      choiceAmount,
    });
    expect(result.length === questionAmount).toBe(true);
    expect(result[0].choices.length).toBe(choiceAmount + 1);
    expect(result[0].categoryId).toBe(categoryId);
  });

  test("submitAnswer", async () => {
    const result = await submitAnswer({
      userName: "TestUser",
      categoryId: 2,
      answer: [
        //true
        {
          questionId: 1,
          answerChoiceId: 1,
        },
        //false
        {
          questionId: 2,
          answerChoiceId: 5,
        },
      ],
    });
    expect(result.result[0].correct).toBe(true);
    expect(result.result[1].correct).toBe(false);
    expect(result.score).toBe(1);
  });

  test("getGameHistories", async () => {
    const result = await getGameHistories();
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          categoryId: expect.any(Number),
          category: {
            name: "วิทยาศาสตร์",
          },
        }),
      ])
    );
  });

  test("getRanking", async () => {
    const result = await getRanking();
    console.log("getRanking", result);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(Number),
          bestScore: expect.any(Number),
        }),
      ])
    );
  });
});
