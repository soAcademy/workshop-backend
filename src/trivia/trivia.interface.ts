// จัดการตัวสุดท้าย อันนี้ไม่ต้องเหมือนหลังบ้าน แต่ตัว Create กับตัว Update จะะต้องเหมือนกัน

export interface ICreateCategory {
  id: number;
  category: string;
}

export interface IGetQuiz {
  where: {
    category: {
      id: number;
    };
  };
  include: {
    answer: boolean;
    choices: boolean;
  };
}
