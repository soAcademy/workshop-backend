import { Request, Response } from "express";
import {
  createCategory,
  createManyCategory,
  createMenu,
  createOrder,
  getCategory,
  getMenus,
  getOrdersByTableId,
  getOrders,
  updateCategory,
  updateOrder,
  getOrderById,
} from "./binKitchen.resolver";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
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
};

export const createManyCategoryHandler = (req: Request, res: Response) => {
  console.log(req?.body);
  return createManyCategory(req?.body.names)
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(500).json({ error: String(error) }));
};

export const getCategoryHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCategory();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateCategoryHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await updateCategory({
      name1: body.name1,
      name2: body.name2,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const createMenuHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await createMenu({
      name: args.name,
      image: args.image,
      price: args.price,
      category: args.category,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
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

export const createOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await createOrder({
      tableId: args.tableId,
      orderItems: args.orderItems,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getOrdersHandler = async (req: Request, res: Response) => {
  try {
    const result = await getOrders();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getOrdersByTableIdHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getOrdersByTableId({ tableId: req?.body.tableId });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getOrderByIdHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getOrderById({ id: req?.body.id });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateOrderHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  try {
    const result = await updateOrder({
      id: body.id,
      status: body.status,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
