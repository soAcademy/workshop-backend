import {
  getAllQuestions,
  getCategories,
  getQuestionsByCategory,
  getRounds,
} from "./triviaGame.resolver";

describe("Trivia", () => {
  test("getCategories", async () => {
    const result = await getCategories();
    // console.log("getCategories", result);

    expect(result.length).toEqual(4);
  });

  test("getQuestionsByCategory", async () => {
    const result = await getQuestionsByCategory({ categoryId: 6 });
    // console.log("getQuestionsByCategory", result);

    expect(result.length).toEqual(3);
  });

  test("getRounds", async () => {
    const result = await getRounds();
    // console.log("getRounds", result);

    expect(result.length).toBeGreaterThan(0);
  });

  test("getAllQuestions", async () => {
    const result = await getAllQuestions();
    // console.log("getRounds", result);

    expect(result.length).toBeGreaterThan(0);
  });
});
