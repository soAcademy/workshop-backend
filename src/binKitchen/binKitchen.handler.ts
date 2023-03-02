import { Request, Response } from "express";
import {
  createCategoryCodec,
  createMenuCodec,
  createOrderCodec,
  getOrderCodec,
  updateCategoryCodec,
  updateMenuCodec,
  updateOrderCodec,
} from "./binKitchen.interface";
import {
  createCategory,
  createMenu,
  createOrder,
  getCategory,
  getMenu,
  getOrder,
  getOrders,
  updateCategory,
  updateMenu,
  updateOrder,
} from "./binKitchen.resolver";

export const createCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (createCategoryCodec.decode(args)._tag === "Right") {
    try {
      const result = await createCategory(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getCategoryHandler = async (req: Request, res: Response) => {
  try {
    const response = await getCategory();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const createMenuHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (createMenuCodec.decode(args)._tag === "Right") {
    try {
      const result = await createMenu(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateCategoryHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (updateCategoryCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateCategory(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const getMenuHandler = async (req: Request, res: Response) => {
  try {
    const response = await getMenu();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const updateMenuHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (updateMenuCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateMenu(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const createOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;
  console.log(args);
  console.log(args.orderItem.map((r: any) => r.menuId));

  if (createOrderCodec.decode(args)._tag === "Right") {
    try {
      const result = await createOrder(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

// export const createOrderItemHandler = async (req: Request, res: Response) => {
//   const args = req?.body;

//   if (createOrderItemCodec.decode(args)._tag === "Right") {
//     try {
//       const result = await createOrderItem(args);
//       res.status(200).json(result);
//     } catch (e) {
//       res.status(500).json({ error: String(e) });
//     }
//   } else {
//     res.status(500).json({ error: "Error invalid codec" });
//   }
// };

export const getOrdersHandler = async (req: Request, res: Response) => {
  try {
    const response = await getOrders();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e);
  }
};

export const getOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (getOrderCodec.decode(args)._tag === "Right") {
    try {
      const result = await getOrder(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};

export const updateOrderHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (updateOrderCodec.decode(args)._tag === "Right") {
    try {
      const result = await updateOrder(args);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ error: String(e) });
    }
  } else {
    res.status(500).json({ error: "Error invalid codec" });
  }
};
