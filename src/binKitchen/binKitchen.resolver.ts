import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateMenu,
  ICreateOrder,
  IDeleteOrder,
  IGetMenuByCategory,
  IGetOrder,
  IUpdateCategory,
  IUpdateMenu,
  IUpdateOrder,
} from "./binKitchen.interface";

export const prisma = new PrismaClient();
// CRUD
// 1. Create Category /
// 2. Get Categories /
// 3. Update Category /
// 4. Create Menu /
// 5. Get Menus /
// 6. Update Menu / -- เลือกแก้ไขหลายๆ แยกกันยังไม่ไดั้
// 7. Create Order / -- ไม่มั่นใจว่าถูกหรือป่าว
// 8. Get Orders --
// 9. Get order --
// 10. Update order /

//----------Categories------------//

export const createCategory = (args: ICreateCategory) =>
  prisma.binKitchenCategory.create({
    data: {
      name: args.name,
    },
  });

export const getCategory = () =>
  prisma.binKitchenCategory.findMany({
    where: {},
    orderBy: { id: "asc" },
  });

export const updateCategory = (args: IUpdateCategory) =>
  prisma.binKitchenCategory.update({
    where: { id: args.id },
    data: { name: args.name },
  });

//----------Menu------------//

export const createMenu = (args: ICreateMenu) =>
  prisma.binKitchenMenu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      category: { connect: { name: args.categoryName } },
    },
  });

export const getMenu = () =>
  prisma.binKitchenMenu.findMany({
    where: {},
    orderBy: { id: "asc" },
  });

export const getMenuByCategory = (args: IGetMenuByCategory) =>
  prisma.binKitchenMenu.findFirstOrThrow({
    where: { name: args.name },
    orderBy: { id: "asc" },
  });

export const updateMenu = (args: IUpdateMenu) =>
  prisma.binKitchenMenu.update({
    where: { id: args.id },
    data: {
      name: args.name ?? undefined,
      price: args.price ?? undefined,
      // category: { connect: { name: args.categoryName ?? undefined } },
    },
  });

//-----------------Orders ----------------//

export const createOrder = (args: ICreateOrder) =>
  prisma.binKitchenOrder.create({
    data: {
      tableId: args.tableId,
      items: {
        create: args.orderItem.map((item) => ({
          menu: {
            connect: { id: item.menuId },
          },
          quantity: item.quantity,
          totalPrice: item.totalPrice,
        })),
      },
    },
  });

export const getOrder = (args: IGetOrder) =>
  prisma.binKitchenOrder.findMany({
    where: { tableId: args.tableId },
    include: { items: { include: { menu: true } } },
    orderBy: { id: "asc" },
  });

export const getOrders = () =>
  prisma.binKitchenOrder.findMany({
    include: { items: { include: { menu: true } } },
    orderBy: { id: "asc" },
  });

export const updateOrder = (args: IUpdateOrder) =>
  prisma.binKitchenOrder.updateMany({
    where: { id: args.id },
    data: { status: args.updateStatus },
  });

export const deleteOrder = (args: IDeleteOrder) =>
  prisma.binKitchenOrder.delete({
    where: { id: args.id },
  });
