import { Request, Response } from "express";
import {
  createCategory,
  createManyMenu,
  createMenu,
  createOrder,
  deleteAllOrder,
  deleteCategory,
  deleteMenu,
  getCategories,
  getMenu,
  getOrder,
  getOrderByTableId,
  getOrders,
  updateCategory,
  updateMenu,
  updateOrder,
} from "./resolve";
import {
  CreateManyMenuCodec,
  CreateMenuCodec,
  CreateOrderCodec,
  DeleteCategoryCodec,
  DeleteMenuCodec,
  GetOrderCodec,
  UpdateCategoryCodec,
  UpdateMenuCodec,
  UpdateOrderCodec,
} from "./interface";

export const createCategoryhandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log("body", body);
  // if (CreateCategoryCodec.decode(body)._tag === "Right") {
  //   const result = await createCategory(body);
  //   return res.status(200).json(result);
  // } else {
  //   res.status(500).send("Error to validate category");
  // }

  const result = await createCategory(body);
  return res.status(200).json(result);
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

export const deleteCategoryHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  if (DeleteCategoryCodec.decode(body)._tag === "Right") {
    return res.status(200).json(deleteCategory(body));
  } else {
    res.status(500).send("Error to validate");
  }
};

//*** error */
export const deleteMenuHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(DeleteMenuCodec.decode(body));
  if (DeleteMenuCodec.decode(body)._tag === "Right") {
    const result = await deleteMenu(body);
    res.status(200).json(result);
  } else {
    res.status(500).send("Error to delete");
  }
};

export const updateMenuHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(UpdateMenuCodec.decode(body));
  if (UpdateMenuCodec.decode(body)._tag === "Right") {
    const result = await updateMenu(body);
    return res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate menu");
  }
};

export const createManyMenuHandler = async (req: Request, res: Response) => {
  const body = req?.body;
  console.log(CreateManyMenuCodec.decode(body));
  if (CreateManyMenuCodec.decode(body)._tag === "Right") {
    const result = await createManyMenu(body);
    return res.status(200).json(result);
  } else {
    res.status(500).send("Error to validate");
  }
};
export const deleteAllOrderHandler = async (req: Request, res: Response) => {
  const result = await deleteAllOrder();
  res.status(200).json(result);
};

export const getOrderByTableIdHandler = async (req: Request, res: Response) => {
  try {
    const body = req?.body;
    const result = await getOrderByTableId(body);
   res.status(200).json(result);
   
  } catch {
    res.status(500).send("Error to validate");
  }
};
