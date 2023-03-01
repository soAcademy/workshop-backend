import {
  createCategoryHandler,
  createMenuHandler,
  getCategoriesHandler,
  getMenusHandler,
  updateCategoryHandler,
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
  // {
  //   path: "/binKitchen/updateMenu",
  //   method: "post",
  //   action: updateMenuHandler,
  // },
];
