import {
  sumNumber,
  createQuizCategory,
  createQuiz,
  getQuiz,
  createUser,
  submitQuiz,
  getResults,
  getQuizCategories,
} from "./trivia.resolver";

describe("Trivia", () => {
  let category1Id: number;
  test("should sum number correctly", () => {
    const result1 = sumNumber({ x: 10, y: 20 });
    const result2 = sumNumber({ x: 10, y: 30 });
    const result3 = sumNumber({ x: 10, y: 40 });
    // console.log(result1)

    expect(result1).toEqual(30);
    expect(result2).not.toEqual(30);
    expect(result3 === 50).toBe(true);
  });

  test("createQuizCategory", async () => {
    const category1 = "ความรู้รอบตัว";
    const result1 = await createQuizCategory({ category: category1 });
    category1Id = result1.id;
    console.log(result1.id);
    expect(result1.category === category1).toBe(true);
  });

  test("createQuiz", async () => {
    const data = {
      quiz: "ปลาโลมาเป็นปลาใช่หรือไม่",
      answer: "ไม่ใช่",
      categoryId: category1Id,
      choices: [
        {
          choice: "ใช่",
        },
        {
          choice: "ไม่รู้",
        },
      ],
    };

    const result = await createQuiz(data);
    console.log("createQuiz", result);
    expect(result.quiz === data.quiz).toBe(true);
  });

  test("getQuiz", async () => {
    const result = await getQuiz({ categoryId: category1Id });
    console.log("getQuiz", result);
    expect(result.length > 0).toBe(true);
  });

  test("createUser", async () => {
    const user1 = "Nana";
    const avatar1 = "Nana_Avatar";
    const result = await createUser({ user: user1, avatar: avatar1 });
    console.log("createUser", result);
    expect(result.user === user1).toBe(true);
  });

  test("submitQuiz", async () => {
    const data = {
      categoryId: 10,
      userId: 2,
      play: [
        {
          quizId: 6,
          choiceId: 10,
        },
      ],
    };
    const result = await submitQuiz(data);
    console.log("submitQuiz", result);
    expect(result.length > 0).toBe(true);
  });

  test("getResults", async () => {
    const result = await getResults();
    console.log("getResults", result);
    expect(result.length > 0).toBe(true);
  });

  test("getQuizCategories", async () => {
    const result = await getQuizCategories();
    console.log("getQuizCategories", result);
    expect(result.length > 0).toBe(true);
  })


});
