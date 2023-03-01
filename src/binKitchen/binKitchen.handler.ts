import { Request, Response } from "express";
import { createCategory, createMenu, getCategories } from "./binKitchen.resolver";
// ถ้าเรากด quick fix มันก็จะขึ้นมาเองในส่วนนี้ เราไม่ต้องกังวล

export const createCategoryHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return createCategory({
    // เข้าไปดูที่ resolver ว่าเค้าใช้ args อะไร เราก็เอาตัวนั้นมาที่นี่
    category: body.category,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getCategoriesHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return getCategories()
  // ตัวนี้ก็ตอบโจทย์เรื่องการเอาใสทั้งหมดแบบไม่ต้องใส่ args ในตัว resolver
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const createMenuHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return createMenu({
    name: body.name,
    image: body.image,
    price: body.price,
    category: body.category,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};