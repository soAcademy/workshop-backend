import { createQuiz, createQuizCategory, getQuiz, sumNumber } from "./trivia.resolver"

describe("Trivia", () => {
  let category1Id: number;
  test('should sum number correctly', () => {
    const result1 = sumNumber({x: 10, y: 20})
    const result2 = sumNumber({x: 10, y: 30});
    const result3 = sumNumber({x: 10, y: 40});
    console.log(result1);

    expect(result1).toEqual(30);
    expect(result2).not.toEqual(30);
    expect(result3 === 50).toBe(true);
  })

  test('createQuizCategory', async () => {
    const category1 = 'ความรู้รอบตัว'
    const result1 = await createQuizCategory({category: category1})
    category1Id = result1.id
    console.log(result1);
    expect(result1.category === category1).toBe(true);
  });

  test('createQuiz', async () => {
    const data = {
      quiz: "ปลาโลมาเป็นปลาใช่หรือไม่",
      answer: "ไม่ใช่",
      categoryId: category1Id,
      choices: [
        {
          choice: "ใช่"
        },
        {
          choice: "ไม่รู้"
        }
      ]
    }

    const result = await createQuiz(data)
    console.log('createQuiz', result);
    expect(result.quiz === data.quiz).toBe(true);
  })

  test('getQuiz', async () => {
    const result = await getQuiz({categoryId: category1Id})
    console.log('getQuiz', result);
    expect(result.length > 0).toBe(true);
  })

  test('f1', () => {
    const result = f1({x: 3, y: 3})
    expect(result).toEqual(9)
  })
  test('f2', () => {
    const result = f2({x: 4})
    expect(result).toEqual(16)
  })
  test('f3', () => {
    const result = f3({x: 4, y: 3})
    expect(result).toEqual(24)
  })

  test('getQuizs', async () => {})
  test('calculateTotalScore', async () => {})
  test('createQuizeRound', async () => {})
  test('submitQuiz', async () => {})
})

function f1(arg0: { x: number; y: number; }) {
  throw new Error("Function not implemented.");
}
function f2(arg0: { x: number; }) {
  throw new Error("Function not implemented.");
}

function f3(arg0: { x: number; y: number; }) {
  throw new Error("Function not implemented.");
}

