import express, { Application, Request, Response } from "express";
import {
  createCategoryCodec,
  createManyMenusCodec,
  createMenuCodec,
  createOrderCodec,
  getOrderCodec,
  updateCategoryCodec,
  updateMenuCodec,
  updateOrderCodec,
} from "./binKitchen.interface";
import {
  createCategory,
  createManyMenus,
  createMenu,
  createOrder,
  getCategories,
  getManyOrders,
  getMenu,
  getOrder,
  updateCategory,
  updateMenu,
  updateOrder,
} from "./binKitchen.resolver";

export const createCategoryHandler = async (req: Request, res: Response) => {
  try {
    if (createCategoryCodec.decode(req?.body)._tag === "Right") {
      const response = await createCategory(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const getCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const response = await getCategories();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const updateCategoryHandler = async (req: Request, res: Response) => {
  try {
    if (updateCategoryCodec.decode(req?.body)._tag === "Right") {
      const response = await updateCategory(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createMenuHandler = async (req: Request, res: Response) => {
  try {
    if (createMenuCodec.decode(req?.body)._tag === "Right") {
      const response = await createMenu(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createManyMenusHandler = async (req: Request, res: Response) => {
  try {
    if (createManyMenusCodec.decode(req?.body)._tag === "Right") {
      const response = await createManyMenus(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const getMenuHandler = async (req: Request, res: Response) => {
  try {
    const response = await getMenu();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const updateMenuHandler = async (req: Request, res: Response) => {
  try {
    if (updateMenuCodec.decode(req?.body)._tag === "Right") {
      const response = await updateMenu(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const createOrderHandler = async (req: Request, res: Response) => {
  try {
    if (createOrderCodec.decode(req?.body)._tag === "Right") {
      const response = await createOrder(req?.body);
      res.status(200).json(response);
    } else {
      res.status(404).json({
        error: "error: Failed to decode codec",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};


export const getManyOrdersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getManyOrders();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const getOrderHandler = async (req: Request, res: Response) => {
  try {
    if (getOrderCodec.decode(req?.body)._tag === "Right") {
      const response = await getOrder(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};

export const updateOrderHandler = async (req: Request, res: Response) => {
  try {
    if (updateOrderCodec.decode(req?.body)._tag === "Right") {
      const response = await updateOrder(req?.body);
      res.status(200).json(response);
    } else {
      res.status(500).json({
        error: "error",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
};
