import { Request, Response } from "express";

import { CreateCategoryCodec, CreateMenuCodec } from "./binKitchen.interfaces";
import {
  createCategory,
  createMenu,
  getCategories,
  getMenus,
} from "./binKitchen.resolvers";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  if (CreateCategoryCodec.decode(args)._tag === "Right") {
    try {
      const result = await createCategory({
        name: args.name,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};

export const getCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCategories();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createMenuHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  if (CreateMenuCodec.decode(args)._tag === "Right") {
    try {
      const result = await createMenu({
        name: args.name,
        image: args.image,
        price: args.price,
        categoryId: args.categoryId,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (io-ts codec)" });
  }
};

export const getMenusHandler = async (req: Request, res: Response) => {
  try {
    const result = await getMenus();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
