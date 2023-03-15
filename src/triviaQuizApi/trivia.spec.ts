import {
  createCategoryTrivia,
  createQuizTrivia,
  getQuizTrivia,
  submitQuizTrivia,
} from "./triviaQuiz.resolver";

describe("Trivia", () => {
  test("createCategoryTrivia", async () => {
    const category1 = "ความรู้รอบตัว";
    const result1 = await createCategoryTrivia({ name: category1 });
    expect(result1.categoryName === category1).toBe(true);
  });

  test("createQuizTrivia", async () => {
    const data1 = {
      name: "ยุงมีกี่ขา",
      answer: "6 ขา",
      categoryId: 3,
      choices: [{ choice: "4 ขา" }, { choice: "8 ขา" }],
    };
    const result1 = await createQuizTrivia(data1);
    expect(result1.quizName === data1.name).toBe(true);
  });

  test("getQuizTrivia", async () => {
    const categoryId1 = 1;
    const result1 = await getQuizTrivia({ categoryId: categoryId1 });
    expect(result1.length > 0).toBe(true);
  });

  test("submitQuizTrivia", async () => {
    const data = {
      categoryId: 1,
      TriviaRoundQuiz: [
        { quizId: 2, playerChooseChoice: 15 },
        { quizId: 3, playerChooseChoice: 18 },
        { quizId: 5, playerChooseChoice: 22 },
      ],
    };
    const result = await submitQuizTrivia(data);
    expect(result.score >= 0 && result.score <= 3).toBe(true);
  });
});
