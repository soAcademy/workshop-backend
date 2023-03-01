// เข้ามาจัดการตัวสุดท้าย ตรง import ไม่ต้องไปจับเลยเพราะมันจะเติมให้เองโดยอัตโนมัติ
import { createCategoryHandler, createMenuHandler, getCategoriesHandler } from './binKitchen';

export const AppRoutes = [
  { 
    path: "/bitKitchen/createCategory", 
    method: "post", 
    action: createCategoryHandler
  },
  { 
    path: "/bitKitchen/getCategories", 
    method: "post", 
    action: getCategoriesHandler
  },
  { 
    path: "/binKitchen/createMenu", 
    method: "post", 
    action: createMenuHandler
  },
];