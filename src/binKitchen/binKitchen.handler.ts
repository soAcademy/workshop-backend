import { Request, Response } from "express";
import {
  createCategoryCodec,
  createManyMenusCodec,
  createMenuCodec,
} from "./binKitchen.interface";
import {
  createCategory,
  createManyMenus,
  createMenu,
  getCategories,
} from "./binKitchen.resolve";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  console.log(createCategoryCodec.decode(req?.body));
  try {
    const result = createCategory({
      category: args.category,
    });
    return createCategoryCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCategories();
    return res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createMenuHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  console.log(createMenuCodec.decode(req?.body));
  try {
    const result = createMenu({
      name: args.name,
      image: args.image,
      price: args.price,
      category: args.category,
    });
    return createCategoryCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createManyMenusHandler = async (req: Request, res: Response) => {
  const args = req.body;
  console.log("args", args);
  console.log(createManyMenusCodec.decode(req?.body));
  try {
    const result = createManyMenus(args);
    return createManyMenusCodec.decode(args)._tag === "Right"
      ? res.status(200).json(await result)
      : res.status(500).json({ error: "Error invalid codec" });
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
