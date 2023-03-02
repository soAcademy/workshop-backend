import { parseArgs } from "util";
import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateMenu,
  ICreateOrder,
  IGetOrder,
  IUpdateCategory,
  IUpdateMenu,
  IUpdateOrder,
} from "./binKitchen.interface";
import { isTemplateExpression } from "typescript";

export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) =>
  prisma.binKitchenCategory.create({
    data: {
      name: args.name,
    },
  });

export const getCategory = () => prisma.binKitchenCategory.findMany();

export const createMenu = (args: ICreateMenu) =>
  prisma.binKitchenMenu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      category: {
        connect: { name: args.category },
      },
    },
  });

export const getMenu = () => prisma.binKitchenMenu.findMany();

export const updateCategory = (args: IUpdateCategory) =>
  prisma.binKitchenCategory.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });

export const updateMenu = (args: IUpdateMenu) =>
  prisma.binKitchenMenu.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name ?? undefined,
      image: args.image ?? undefined,
      price: args.price ?? undefined,
    },
  });

// export const createOrder = (args: ICreateOrder) =>
//   prisma.binKitchenOrder.create({
//     data: {
//       tableId: args.tableId,
//     },
//   });

// export const createOrderItem = (args: ICreateOrderItem) =>
//   prisma.binKitchenOrderItem.create({
//     data: {
//       menu: {
//         connect: { id: args.menuId },
//       },
//       order: {
//         connect: { id: args.orderId },
//       },
//       quantity: args.quantity,
//       totalPrice: args.totalPrice,
//     },
//   });

export const createOrder = (args: ICreateOrder) =>
  prisma.binKitchenOrder.create({
    data: {
      tableId: args.tableId,
      BinKitchenOrderItem: {
        create: args.orderItem.map((r) => ({
          menu: {
            connect: { id: r.menuId },
          },
          quantity: r.quantity,
          totalPrice: r.totalPrice,
        })),
      },
    },
  });

export const getOrders = () =>
  prisma.binKitchenOrder.findMany({
    include: {
      BinKitchenOrderItem: {
        include: {
          menu: true,
        },
      },
    },
  });

export const getOrder = (args: IGetOrder) =>
  prisma.binKitchenOrder.findMany({
    where: {
      tableId: args.tableId,
    },
    include: {
      BinKitchenOrderItem: {
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
