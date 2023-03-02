import { Request, Response } from "express";

import {
  CreateCategoryCodec,
  CreateMenuCodec,
  CreateOrderCodec,
} from "./binKitchen.interfaces";
import {
  createCategory,
  getCategories,
  createMenu,
  getMenus,
  createOrder,
  getOrders,
  getOrdersByTable,
  updateOrderStatus,
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

export const createOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  if (CreateOrderCodec.decode(args)._tag === "Right") {
    try {
      const result = await createOrder({
        // status: args.status,
        tableId: args.tableId,
        items: args.items,
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

export const getOrdersByTableHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await getOrdersByTable(args.tableId);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateOrderStatusHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  try {
    const result = await updateOrderStatus(args.orderId, args.status);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};
