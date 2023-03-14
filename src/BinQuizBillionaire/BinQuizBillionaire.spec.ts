import {
  createCategory,
  createQuestion,
  getQuestion,
  getResultByCategory,
  submitQuestion,
  updateAnswer,
  updateQuestion,
} from "./BinQuizBillionaire.resolver";

describe("trivia", () => {
  let category1Id: number;

  test("getQuestion", async () => {
    const result = await getQuestion({
      categoryId: category1Id,
    });
    // console.log("getQuestion", result);
    expect(result.length > 0).toBe(true);
  });

  // test("createCategory", async () => {
  //   const category1 = "Car" + new Date().getTime(); //เพิ่มสุ่มตัวเลขให้สามารถ test ได้ปกติ สำหรับ UniqueCase
  //   const result = await createCategory({
  //     name: category1,
  //   });
  //   category1Id = result.id;
  //   // console.log("createCategory", result);
  //   expect(result.name === category1).toBe(true);
  // });

  // test("createQuestion", async () => {
  //   const data = {
  //     questName: "งูหลามบอล (ball python) มีพิษหรือไม่",
  //     categoryId: 7,
  //     answer: "ไม่มีพิษ",
  //     choices: [
  //       {
  //         choice: "มีพิษ",
  //       },
  //       {
  //         choice: "ไม่ทราบ",
  //       },
  //       {
  //         choice: "ไม่เคยเลี้ยง",
  //       },
  //     ],
  //   };
  //   const result = await createQuestion(data);
  //   console.log("createQuestion", result);
  //   expect(result.questName === data.questName).toBe(true);
  // });

  // test("submitQuestion", async () => {
  //   const data = {
  //     user: "First Movie 4",
  //     categoryId: 2,
  //     roundQuestions: [
  //       {
  //         questionId: 3,
  //         userChoiceId: 9,
  //       },
  //       {
  //         questionId: 11,
  //         userChoiceId: 41,
  //       },
  //       {
  //         questionId: 12,
  //         userChoiceId: 45,
  //       },
  //       {
  //         questionId: 4,
  //         userChoiceId: 13,
  //       },
  //       {
  //         questionId: 13,
  //         userChoiceId: 48,
  //       },
  //     ],
  //   };

  //   const result = await submitQuestion(data);
  //   console.log("submitQuestion", result);
  //   expect(result.user === data.user).toBe(true);
  // });

  test("getResultByCategory", async () => {
    const result = await getResultByCategory({
      categoryId: category1Id,
    });
    console.log("Ranking By Category", result);
    expect(result.length > 0).toBe(true);
  });

  test("updateQuestion", async () => {
    const data = {
      quizId: 39,
      questName: "ตราสโมสรลิเวอร์พูล คือสัตว์ชนิดใด ?",
      choices: [],
    };

    const result = await updateQuestion(data);
    console.log("updateQuestion", result);
    expect(result.id === data.quizId).toBe(true);
  });

  test("updateAnswer", async () => {
    const data = {
      quizId: 39,
      answerName: "นก",
    };

    const result = await updateAnswer(data);
    console.log("updateAnswer", result);
  });
});
