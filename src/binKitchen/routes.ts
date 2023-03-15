// เข้ามาจัดการตัวสุดท้าย ตรง import ไม่ต้องไปจับเลยเพราะมันจะเติมให้เองโดยอัตโนมัติ
import { createCategoryHandler, createMenuHandler, createOrderHandler, createOrderItemHandler, deleteCategoryHandler, deleteMenuHandler, deleteOrderHandler, deleteOrderItemHandler, getCategoryHandler, getMenuHandler, getOrderHandler, updateCategoryHandler, updateMenuHandler, updateOrderHandler, updateOrderItemHandler } from './binKitchen';

export const AppRoutes = [
  { 
    path: "/binKitchen/createCategory", 
    method: "post", 
    action: createCategoryHandler
  },
  { 
    path: "/binKitchen/getCategory", 
    method: "post", 
    action: getCategoryHandler
  },
  { 
    path: "/binKitchen/updateCategory", 
    method: "post", 
    action: updateCategoryHandler
  },
  { 
    path: "/binKitchen/deleteCategory", 
    method: "post", 
    action: deleteCategoryHandler
  },

  { 
    path: "/binKitchen/createMenu", 
    method: "post", 
    action: createMenuHandler
  },
  { 
    path: "/binKitchen/getMenu", 
    method: "post", 
    action: getMenuHandler
  },
  { 
    path: "/binKitchen/updateMenu", 
    method: "post", 
    action: updateMenuHandler
  },
  { 
    path: "/binKitchen/deleteMenu", 
    method: "post", 
    action: deleteMenuHandler
  },

  { 
    path: "/binKitchen/createOrder", 
    method: "post", 
    action: createOrderHandler
  },
  { 
    path: "/binKitchen/getOrder", 
    method: "post", 
    action: getOrderHandler
  },
  { 
    path: "/binKitchen/updateOrder", 
    method: "post", 
    action: updateOrderHandler
  },
  { 
    path: "/binKitchen/deleteOrder", 
    method: "post", 
    action: deleteOrderHandler
  },

  // { 
  //   path: "/binKitchen/createOrderItem", 
  //   method: "post", 
  //   action: createOrderItemHandler
  // },
  // { 
  //   path: "/binKitchen/getOrderItem", 
  //   method: "post", 
  //   action: getOrderItemHandler
  // },
  // { 
  //   path: "/binKitchen/updateOrderItem", 
  //   method: "post", 
  //   action: updateOrderItemHandler
  // },
  // { 
  //   path: "/binKitchen/deleteOrderItem", 
  //   method: "post", 
  //   action: deleteOrderItemHandler
  // },
];