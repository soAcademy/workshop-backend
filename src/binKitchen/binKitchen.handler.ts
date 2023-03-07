import { Request, Response } from "express";
import { createCategory, createMenu, createOrder, deleteCategory, deleteMenu, deleteOrder, deleteOrderItem, getCategory, getMenu, getOrder, getOrderItem, updateCategory, updateMenu, updateOrder, updateOrderItem } from "./binKitchen.resolver";
import { createOrderItem } from "./binKitchen.resolver";
// ถ้าเรากด quick fix มันก็จะขึ้นมาเองในส่วนนี้ เราไม่ต้องกังวล

export const createCategoryHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return createCategory({
    name: body.name,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getCategoryHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return getCategory()
  // ตัวนี้ก็ตอบโจทย์เรื่องการเอาใสทั้งหมดแบบไม่ต้องใส่ args ในตัว resolver
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const updateCategoryHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return updateCategory({
    id: body.id,
    name: body.name,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const deleteCategoryHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return deleteCategory({
    id: body.id,
    name: body.name,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};


export const createMenuHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return createMenu({
    name: body.name,
    image: body.image,
    price: body.price,
    category: body.category,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getMenuHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return getMenu()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const updateMenuHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return updateMenu({
    id: body.id, 
  name: body.name,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const deleteMenuHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return deleteMenu({
    id: body.id, 
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const createOrderHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return createOrder({
    tableId: body.tableId, 
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const getOrderHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return getOrder({
    id: body.id,
    status: body.status,
    tableId: body.tableId,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const updateOrderHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return updateOrder({
    id: body.id,
    name: body.name,
    image: body.image,
    price: body.price,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};

export const deleteOrderHandler = (req: Request, res: Response) => {
  console.log(req.body);
  const body = req?.body;
  return deleteOrder({
    id: body.id,
  })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};


// export const createOrderItemHandler = (req: Request, res: Response) => {
//   console.log(req.body);
//   const body = req?.body;
//   return createOrderItem({
//     quantity: body.quantity,
//     totalPrice: body.totalPrice, 
//     menu: body.menu,
//   })
//     .then((response) => res.status(200).send(response))
//     .catch((error) => res.status(500).send(error));
// };

// export const getOrderItemHandler = (req: Request, res: Response) => {
//   console.log(req.body);
//   const body = req?.body;
//   return getOrderItem({
//     quantity: body.quantity,
//     totalPrice: body.totalPrice, 
//     menu: body.menu,
//   })
//     .then((response) => res.status(200).send(response))
//     .catch((error) => res.status(500).send(error));
// };

// export const updateOrderItemHandler = (req: Request, res: Response) => {
//   console.log(req.body);
//   const body = req?.body;
//   return updateOrderItem({
//     id: body.id,
//     quantity: body.quantity, 
//     totalPrice: body.totalPrice,
//   })
//     .then((response) => res.status(200).send(response))
//     .catch((error) => res.status(500).send(error));
// };

// export const deleteOrderItemHandler = (req: Request, res: Response) => {
//   console.log(req.body);
//   const body = req?.body;
//   return deleteOrderItem({
//     id: body.id,
//   })
//     .then((response) => res.status(200).send(response))
//     .catch((error) => res.status(500).send(error));
// };