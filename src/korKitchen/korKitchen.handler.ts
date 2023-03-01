import { Request, Response, response } from "express";
import { createCategoryCodec, createMenuCodec, getCategoriesCodec, getMenusCodec, updateCategoryCodec } from "./korKitchen.interface";
import { createCategory, createMenu, getCategories, getMenus, updateCategory } from "./korKitchen.resolver";

export const createCategoryHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (createCategoryCodec.decode(body)._tag === "Right") {
    return createCategory(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getCategoriesHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getCategoriesCodec.decode(body)._tag === "Right") {
    return getCategories(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const createMenuHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (createMenuCodec.decode(body)._tag === "Right") {
    return createMenu(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const updateCategoryHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateCategoryCodec.decode(body)._tag === "Right") {
    return updateCategory(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getMenusHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getMenusCodec.decode(body)._tag === "Right") {
    return getMenus(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};