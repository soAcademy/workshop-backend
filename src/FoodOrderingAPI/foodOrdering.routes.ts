import {
  addCategoryHandler,
  addMenuHandler,
  addOrderHandler,
  createBillHandler,
  getBillHandler,
  getCategoryHandler,
  getMenuHandler,
  getOrdersForCheckOutHandler,
  getOrdersHandler,
  updateCategoryHandler,
  updateMenuHandler,
  updateOrderHandler,
} from "./foodOrdering.handler";

export const FoodOrderingRoutes = [
  {
    method: "post",
    path: "/foodOrdering/addCategory",
    action: addCategoryHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/getCategory",
    action: getCategoryHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/updateCategory",
    action: updateCategoryHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/addMenu",
    action: addMenuHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/getMenu",
    action: getMenuHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/updateMenu",
    action: updateMenuHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/addOrder",
    action: addOrderHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/getOrders",
    action: getOrdersHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/updateOrder",
    action: updateOrderHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/getOrders",
    action: getOrdersHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/getOrdersForCheckout",
    action: getOrdersForCheckOutHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/createBill",
    action: createBillHandler,
  },
  {
    method: "post",
    path: "/foodOrdering/getBill",
    action: getBillHandler,
  },
];
