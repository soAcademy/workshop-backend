import { Request, Response } from "express";
import {
  createCategory,
  createMenu,
  createOrder,
  createOrderItem,
  getCategories,
  getMenus,
  getOrder,
  getOrders,
  updateCategory,
  updateMenu,
  updateOrder,
} from "./index";
import { json } from "stream/consumers";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req.body;
  try {
    const result = await createCategory(args);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
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
  const args = req.body;
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

export const createOrderItemHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await createOrderItem(args.orderMenu);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//-------------------------

export const createOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    console.log(args.items);
    const result = await createOrder({
      tableId: args.tableId,
      items: args.items,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//-------------------------

export const updateOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateOrder({
      status: args.status,
      id: args.id,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//-------------------------

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

//-------------------------

export const getOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await getOrder({
      id: args.id,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//-------------------------

export const updateMenuHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateMenu({
      name: args.name,
      price: args.price,
      image: args.image,
      categoryName: args.categoryName,
      id: args.id,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//-------------------------

export const getMenuHandler = async (req: Request, res: Response) => {
  try {
    const result = await getMenus();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//-------------------------

export const updateCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateCategory({
      newName: args.newName,
      oldName: args.oldName,
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

//-------------------------
