import {
  createCategoryHandler,
  createMenuHandler,
  createOrderHandler,
  deleteMenuHandler,
  getCategoriesHandler,
  getMenusHandler,
  getOrderHandler,
  getOrdersHandler,
  updateCategoryHandler,
  updateMenuHandler,
  updateOrderHandler,
} from "./korKitchen.handler";

export const AppRoutes = [
  {
    path: "/createCategory",
    method: "post",
    action: createCategoryHandler,
  },
  {
    path: "/getCategories",
    method: "post",
    action: getCategoriesHandler,
  },
  {
    path: "/createMenu",
    method: "post",
    action: createMenuHandler,
  },
  {
    path: "/updateCategory",
    method: "post",
    action: updateCategoryHandler,
  },
  {
    path: "/getMenus",
    method: "post",
    action: getMenusHandler,
  },
  {
    path: "/updateMenu",
    method: "post",
    action: updateMenuHandler,
  },
  {
    path: "/createOrder",
    method: "post",
    action: createOrderHandler,
  },
  {
    path: "/getOrder",
    method: "post",
    action: getOrderHandler,
  },
  {
    path: "/getOrders",
    method: "post",
    action: getOrdersHandler,
  },
  {
    path: "/updateOrder",
    method: "post",
    action: updateOrderHandler,
  },
  {
    path: "/deleteMenu",
    method: "post",
    action: deleteMenuHandler,
  },
]