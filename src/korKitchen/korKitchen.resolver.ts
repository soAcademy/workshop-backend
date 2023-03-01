import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateMenu,
  ICreateOrder,
  IGetCategories,
  IGetMenus,
  IUpdateCategory,
  IUpdateMenu,
} from "./korKitchen.interface";
export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) =>
  prisma.korKitchenCategory.create({
    data: {
      // id: args?.id,
      name: args.name,
    },
  });

export const getCategories = (args: IGetCategories) =>
  prisma.korKitchenCategory.findMany({
    select: {
      id: true,
      name: true,
    },
  });

export const createMenu = (args: ICreateMenu) =>
  prisma.korKitchenMenu.create({
    data: {
      name: args.name,
      price: args.price,
      image: args.image,
      category: {
        connect: {
          name: args.category,
        },
      },
    },
  });

export const updateCategory = (args: IUpdateCategory) =>
  prisma.korKitchenCategory.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });

export const getMenus = (args: IGetMenus) =>
  prisma.korKitchenMenu.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
    },
  });

export const updateMenu = (args: IUpdateMenu) =>
  prisma.korKitchenMenu.update({
    where: {
      id: args.id,
    },
    data: {
      price: args.price,
    },
  });

// export const createOrder = (args: ICreateOrder) =>
//   prisma.korKitchenOrder.create({
//     data: {
//       tableId: args.tableId,
//       items: {
//         create:[
//         {quantity: args.quantity},


//         ]
//       }
//     },
//   });

export const createOrder = (args: ICreateOrder) =>
  prisma.korKitchenOrder.create({
    data: {
      tableId: 2,
      items: {
        create: [
          { quantity: 3 },
          { totalPrice: 5 },
        ],
      },
    },
  });