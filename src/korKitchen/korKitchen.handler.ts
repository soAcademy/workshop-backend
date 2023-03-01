import { Request, Response} from "express";
import { createCategoryCodec, createMenuCodec, createOrderCodec, getCategoriesCodec, getMenusCodec, updateCategoryCodec, updateMenuCodec } from "./korKitchen.interface";
import { createCategory, createMenu, createOrder, getCategories, getMenus, updateCategory, updateMenu } from "./korKitchen.resolver";

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

export const updateMenuHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateMenuCodec.decode(body)._tag === "Right") {
    return updateMenu(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const createOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (createOrderCodec.decode(body)._tag === "Right") {
    return createOrder(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};