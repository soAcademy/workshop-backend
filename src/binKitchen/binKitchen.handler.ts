import { Request, Response } from "express";
import {
  CreateCategoryCodec,
  CreateMenuCodec,
  UpdateCategoryCodec,
  createCategory,
  createMenu,
  getCategories,
  getMenus,
  updateCategory,
  updateMenu,
} from "./binKitchen.resolve";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    CreateCategoryCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await createCategory(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getCategoriesHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getCategories());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const updateCategoryHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    UpdateCategoryCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await updateCategory(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

//
export const createMenuHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try {
    CreateMenuCodec.decode(body)._tag === "Right"
      ? res.status(200).json(await createMenu(body))
      : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const getMenusHandler = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await getMenus());
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};

export const updateMenuHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);

  try {
    // UpdateMenuCodec.decode(body)._tag === "Right"
    // ? res.status(200).json(await updateMenu(body))
    res.status(200).json(await updateMenu(body));
    // : res.status(500).json({ error: "Invalid type Input" });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
