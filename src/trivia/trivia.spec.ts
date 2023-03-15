import {
  createQuiz,
  createQuizCategory,
  getQuiz,
  submitQuiz,
  sumNumber,
  updateQuiz,
} from "./trivia.resolver";

describe("Trivia", () => {
  let category1Id: number;
  test("should sum number correctly", () => {
    const result1 = sumNumber({ x: 10, y: 20 });
    const result2 = sumNumber({ x: 10, y: 30 });
    const result3 = sumNumber({ x: 10, y: 40 });
    console.log("result", result1);

    expect(result1).toEqual(30);
    expect(result2).not.toEqual(30);
    expect(result3 === 50).toBe(true);
  });

  test("createQuizCategory", async () => {
    const category1 = "ความรู้รอบตัว2" + new Date().getTime();

    const result1 = await createQuizCategory({ name: category1 });
    category1Id = result1.id;
    expect(result1.name === category1).toBe(true);
  });
  test("createQuiz", async () => {
    const data = {
      name: "ปลาดาวเป็นปลาใช่หรือไม่" + new Date().getTime(),
      answer: "ไม่ใช่",
      quizChoices: [
        {
          choice: "ใช่",
        },
        {
          choice: "ไม่รู้",
        },
      ],
      category: category1Id,
    };
    const result = await createQuiz(data);
    console.log("createQuiz", result);
    expect(result.name === data.name).toBe(true);
  });

  test("getQuiz", async () => {
    const result = await getQuiz({ categoryId: category1Id });
    console.log("getQuiz", result);
    expect(result.length > 0).toBe(true);
  });

  test("submitQuiz", async () => {
    const data = {
      name: "Jrgfrhr",
    category: 1,
    quizRecords: [
        {
            quizQuestionId: 1,
            choice: 1
        }
    ]
    };
    const result = await submitQuiz(data);
    console.log("submitQuiz", result);
    expect(result.name === data.name).toBe(true);
  });

  test("updateQuiz", async () => {
    const data = {
      quizQuestionId: 36,
      name: "Hello?",
      quizChoices: [
          {
              choice: "No"
          },
          {
              choice: "Yes"
          },
          {
              choice: "Thank you"
          }
      ],
      answer: "Good Bye"
    };
    const result = await updateQuiz(data);
    console.log("updateQuiz", result);
    expect(result.name === data.name).toBe(true);
  });

});


