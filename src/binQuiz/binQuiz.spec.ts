import { createCategory, sumNumbers } from "./binQuiz.resolvers";

describe("Trivia", () => {
  let category1Id: number;
  test("should do a summation of two numbers correctly", () => {
    const result1 = sumNumbers({ number1: 10, number2: 20 });
    const result2 = sumNumbers({ number1: 10, number2: 30 });
    const result3 = sumNumbers({ number1: 10, number2: 40 });

    expect(result1).toEqual(30);
    expect(result2).not.toEqual(30);
    expect(result3 === 50).toBe(true);
  });

  test("should create a new category", async () => {
    const category1 = "Trivia";
    const result1 = await createCategory({ name: category1 });
    category1Id = result1.id;
    expect(result1.name === category1).toBe(true);
  });

  test("should create a new quiz", async () => {
    const data = {
      questionText: "Dolphin is a fish. True or false?",
      quizCategoryId: category1Id,
      correctChoice: {
        answerText: "False",
      },
      otherChoices: [
        {
          answerText: "True",
        },
        {
          answerText: "Don't know",
        },
        {
          answerText: "Why not both?",
        },
      ],
    };
  });
});
