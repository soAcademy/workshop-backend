import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateManyMenus,
  ICreateMenu,
  ICreateOrder,
  IGetOrder,
  IUpdateCategory,
  IUpdateMenu,
  IUpdateOrder,
} from "./binKitchen.interface";

export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) =>
  prisma.binKitchenCategory.create({
    data: {
      name: args.name,
    },
  });

export const getCategories = () => prisma.binKitchenCategory.findMany();

export const updateCategory = (args: IUpdateCategory) =>
  prisma.binKitchenCategory.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });

export const createMenu = (args: ICreateMenu) =>
  prisma.binKitchenMenu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      category: {
        connect: {
          name: args.category,
        },
      },
    },
  });

export const createManyMenus = (args: ICreateManyMenus) =>
  prisma.binKitchenMenu.createMany({
    data: args.map((r) => ({
      id: r.id,
      name: r.name,
      image: r.image,
      price: r.price,
      categoryName: r.category,
    })),
  });

// export const getMenu = (args: IGetMenu) =>
//   prisma.binKitchenMenu.findUnique({
//     where: {
//       id: args.id,
//     },
//   });

export const getMenu = () => prisma.binKitchenMenu.findMany();

export const updateMenu = (args: IUpdateMenu) =>
  prisma.binKitchenMenu.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      category: {
        connect: {
          name: args.category,
        },
      },
    },
  });

export const createOrder = (args: ICreateOrder) =>
  prisma.binKitchenOrder.create({
    data: {
      tableId: args.tableId,
      status: args.status,
      items: {
        //has to be the same as prisma
        create: args.items.map((r) => ({
          //"items" here can be anything but has to match the interface
          menu: {
            connect: {
              id: r.id,
            },
          },
          quantity: r.quantity,
          totalPrice: r.totalPrice,
        })),
      },
    },
  });

export const getManyOrders = () =>
  prisma.binKitchenOrder.findMany({
    include: {
      items: {
        include: {
          menu: true,
        },
      },
    },
  });

// export const getOrder = (args: IGetOrder) =>
//   prisma.binKitchenOrder.findUnique({
//     where: {
//       id: args.id,
//     },
//     include: {
//       items: {
//         include: {
//           menu: true,
//         },
//       },
//     },
//   });

export const getOrder = (args: IGetOrder) =>
  prisma.binKitchenOrder.findMany({
    where: {
      tableId: args.tableId,
    },
    include: {
      items: {
        include: {
          menu: true,
        },
      },
    },
  });

export const updateOrder = (args: IUpdateOrder) =>
  prisma.binKitchenOrder.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });

  
