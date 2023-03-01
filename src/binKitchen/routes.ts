import {
  createCategoryHandler,
  createMenuHandler,
  createOrderHandler,
  getCategoriesHandler,
  getMenusHandler,
  getOrderHandler,
  getOrdersHandler,
  updateCategoryHandler,
  updateMenuHandler,
  // updateMenuHandler,
} from "./binKitchen.handler";

export const AppRoutes = [
  {
    path: "/binKitchen/createCategory",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/binKitchen/getCategories",
    method: "post",
    action: getCategoriesHandler,
  },
  {
    path: "/binKitchen/updateCategory",
    method: "post",
    action: updateCategoryHandler,
  },
  {
    path: "/binKitchen/createMenu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/binKitchen/getMenus",
    method: "post",
    action: getMenusHandler,
  },
  {
    path: "/binKitchen/updateMenu",
    method: "post",
    action: updateMenuHandler,
  },
  {
    path: "/binKitchen/createOrder",
    method: "post",
    action: createOrderHandler,
  },
  {
    path: "/binKitchen/getOrders",
    method: "post",
    action: getOrdersHandler,
  },
  {
    path: "/binKitchen/getOrder",
    method: "post",
    action: getOrderHandler,
  },
];
