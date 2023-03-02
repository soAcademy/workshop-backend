import { Request, Response } from "express";
import {
  createCategory,
  createMenu,
  createOrder,
  getCategories,
  getMenu,
  getOrder,
  getOrders,
  updateCategory,
  updateOrder,
} from "./resolve";
import {
  CreateCategoryCodec,
  CreateMenuCodec,
  CreateOrderCodec,
  GetOrderCodec,
  UpdateCategoryCodec,
  UpdateOrderCodec,
} from "./interface";

export const createCategoryhandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  if (CreateCategoryCodec.decode(body)._tag === "Right") {
    const result = await createCategory(body);
    return res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate category");
  }
};

export const getCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCategories();
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateCategoryHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  if (UpdateCategoryCodec.decode(body)._tag === "Right") {
    const result = await updateCategory(body);
    return res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};

export const createMenuHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(CreateMenuCodec.decode(body));
  if (CreateMenuCodec.decode(body)._tag === "Right") {
    const result = await createMenu(body);
    return res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};

export const getMenuHandler = async (req: Request, res: Response) => {
  try {
    const result = await getMenu();
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const createOrderHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  console.log(CreateOrderCodec.decode(body));
  if (CreateOrderCodec.decode(body)._tag === "Right") {
    const result = await createOrder(body);
    return res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};
export const getOrdersHandler = async (req: Request, res: Response) => {
  try {
    const result = await getOrders();
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).send("Error");
  }
};

export const getOrderHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  console.log(GetOrderCodec.decode(body));
  if (GetOrderCodec.decode(body)._tag === "Right") {
    const result = await getOrder(body);
    return res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};

export const updateOrderHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  if (UpdateOrderCodec.decode(body)._tag === "Right") {
    const result = await updateOrder(body);
    return res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate ");
  }
};
