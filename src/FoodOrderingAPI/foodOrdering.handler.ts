import { Request, Response } from "express";
import {
  addCategoryCodec,
  addMenuCodec,
  addOrderCodec,
  createBillCodec,
  getBillCodec,
  getMenuCodec,
  getOrdersCodec,
  getOrdersForCheckoutCodec,
  updateCategoryCodec,
  updateMenuCodec,
  updateOrderCodec,
} from "./foodOrdering.interface";
import {
  addCategory,
  addMenu,
  getMenu,
  getCategory,
  updateCategory,
  updateMenu,
  addOrder,
  getOrders,
  updateOrder,
  getOrdersForCheckout,
  createBill,
  getBill,
} from "./foodOrdering.resolver";

export const addCategoryHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (addCategoryCodec.decode(body)._tag === "Right") {
    try {
      addCategory(body)
        .then((response) => res.status(200).json(response))
        .catch((error) => res.status(500).json(error));
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getCategoryHandler = (req: Request, res: Response) => {
  try {
    getCategory()
      .then((response) => res.status(200).json(response))
      .catch((error) => res.status(500).json(error));
  } catch (error) {
    res.status(500).send("Failed to validate codec");
  }
};

export const updateCategoryHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateCategoryCodec.decode(body)._tag === "Right") {
    try {
      updateCategory(body)
        .then((response) => res.status(200).json(response))
        .catch((error) => res.status(500).json(error));
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const addMenuHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (addMenuCodec.decode(body)._tag === "Right") {
    try {
      addMenu(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getMenuHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getMenuCodec.decode(body)._tag === "Right") {
    try {
      getMenu(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const updateMenuHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateMenuCodec.decode(body)._tag === "Right") {
    try {
      updateMenu(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const addOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (addOrderCodec.decode(body)._tag === "Right") {
    try {
      addOrder(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getOrdersHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getOrdersCodec.decode(body)._tag === "Right") {
    try {
      getOrders(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};
export const getOrdersForCheckOutHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getOrdersForCheckoutCodec.decode(body)._tag === "Right") {
    try {
      getOrdersForCheckout(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const updateOrderHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (updateOrderCodec.decode(body)._tag === "Right") {
    try {
      updateOrder(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const createBillHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (createBillCodec.decode(body)._tag === "Right") {
    try {
      createBill(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

export const getBillHandler = (req: Request, res: Response) => {
  const body = req?.body;
  if (getBillCodec.decode(body)._tag === "Right") {
    try {
      getBill(body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).send(err));
    } catch {}
  } else {
    res.status(500).send("Failed to validate codec");
  }
};

