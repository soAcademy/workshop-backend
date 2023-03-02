import { Request, Response } from "express";
import {
  CreateCategoryCodec,
  CreateMenuCodec,
  CreateOrderCodec,
  GetMenuByCategoryCodec,
  UpdateCategoryCodec,
  UpdateMenuCodec,
  UpdateOrderCodec,
} from "./binKitchen.interface";
import {
  createCategory,
  createMenu,
  createOrder,
  getCategory,
  getMenu,
  getMenuByCategory,
  getOrder,
  getOrders,
  updateCategory,
  updateMenu,
  updateOrder,
} from "./binKitchen.resolver";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(CreateCategoryCodec.decode(args));

  try {
    if (CreateCategoryCodec.decode(args)._tag === "Right") {
      const result = await createCategory({
        name: args.name,
      });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getCategoryHandler = async (req: Request, res: Response) => {
  try {
    const result = await getCategory();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const updateCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(UpdateCategoryCodec.decode(args));

  try {
    if (UpdateCategoryCodec.decode(args)._tag === "Right") {
      const result = await updateCategory({
        id: args.id,
        name: args.name,
      });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const createMenuHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(CreateMenuCodec.decode(args));

  try {
    if (CreateMenuCodec.decode(args)._tag === "Right") {
      const result = await createMenu({
        name: args.name,
        image: args.image,
        price: args.price,
        categoryName: args.categoryName,
      });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getMenuHandler = async (req: Request, res: Response) => {
  try {
    const result = await getMenu();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const getMenuByCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(GetMenuByCategoryCodec.decode(args));

  try {
    if (GetMenuByCategoryCodec.decode(args)._tag === "Right") {
      const result = await getMenuByCategory({
        name: args.name,
      });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateMenuHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(UpdateMenuCodec.decode(args));

  if (UpdateMenuCodec.decode(args)._tag === "Right") {
    const result = await updateMenu({
      id: args.id,
      // categoryName: args?.categoryName,
      name: args?.name,
      price: args?.price,
    });
    res.status(200).json(result);
  } else {
    res.status(500).json({ error: String("Error invalid codec") });
  }
};

export const createOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(CreateOrderCodec.decode(args));

  try {
    if (CreateOrderCodec.decode(args)._tag === "Right") {
      const result = await createOrder(args);
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getOrderHandler = async (req: Request, res: Response) => {
  try {
    const result = await getOrder();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const getOrdersHandler = async (req: Request, res: Response) => {
  try {
    const result = await getOrders();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};

export const updateOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(UpdateOrderCodec.decode(args));

  try {
    if (UpdateOrderCodec.decode(args)._tag === "Right") {
      const result = await updateOrder({
        id: args.id,
        status: args.status,
        updateStatus: args.updateStatus,
      });
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: String("Error invalid codec") });
    }
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};
