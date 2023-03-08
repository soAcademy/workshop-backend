import { Request, Response } from "express";
import {
  createCategoryCodec,
  createMenuCodec,
  createOrderCodec,
  deleteMenuCodec,
  getCategoriesCodec,
  getMenusCodec,
  getOrderCodec,
  updateCategoryCodec,
  updateMenuCodec,
  updateOrderCodec,
} from "./korKitchen.interface";
import {
  createCategory,
  createMenu,
  createOrder,
  deleteMenu,
  getCategories,
  getMenus,
  getOrder,
  getOrders,
  updateCategory,
  updateMenu,
  updateOrder,
} from "./korKitchen.resolver";

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

export const createOrderHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  // if (createOrderCodec.decode(body)._tag === "Right") {
  //   return createOrder(body)
  console.log(body);
  try {
    // const response = await createOrder();
    // return res.status(200).send("Test order");
    return res.status(200).json(await createOrder(body));
  } catch (error) {
    return res.status(500).send("Error" + String(error));
  }
  // } else {
  //   res.status(500).send("Failed to validate codec");
  // }
};

export const getOrderHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (getOrderCodec.decode(body)._tag === "Right") {
    return getOrder(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getOrdersHandler = async (req: Request, res: Response) => {
  try {
    const result = await getOrders();
    res.status(200).send(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const updateOrderHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (updateOrderCodec.decode(body)._tag === "Right") {
    return updateOrder(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const deleteMenuHandler = (req: Request, res: Response) => {
  const body = req.body;
  if (deleteMenuCodec.decode(body)._tag === "Right") {
    return deleteMenu(body)
      .then((response) => res.status(200).send(response))
      .catch((error) => res.status(500).send(error));
  } else {
    res.status(500).send("Failed to validate codec");
  }
};
