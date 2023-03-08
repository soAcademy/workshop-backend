/*import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateMenu,
  ICreateOrder,
  IGetOrderCodec,
  IUpdateCategory,
  IUpdateOrderCodec,
} from "./index";

// CRUD
// 1. Create Category -
// 2. Get Categories -
// 4. Create Menu -
// 3. Update Category -
// 5. Get Menus -
// 6. Update Menu -
// 7. Create Order ****
// 8. Get Orders -
// 9. Get order -
// 10. Update order -

export const prisma = new PrismaClient();

export const createCategory = (args: ICreateCategory) =>
  prisma.binKitchenCategory.create({
    data: {
      name: args.category,
    },
  }); //*

//-----------------------------------------------------------

export const getCategories = () =>
  prisma.binKitchenCategory.findMany({
    // where: {},
    orderBy: {
      id: "asc",
    },
  }); //*

//-----------------------------------------------------------

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
  }); //*

//-----------------------------------------------------------

export const updateCategory = (args: IUpdateCategory) => {
  console.log(args);
  return prisma.binKitchenCategory.update({
    data: {
      name: args.newName,
    },
    where: {
      name: args.oldName,
    },
  });
};
//-----------------------------------------------------------

export const getMenus = () =>
  prisma.binKitchenMenu.findMany({
    orderBy: {
      id: "asc",
    },
  });

//-----------------------------------------------------------

export const updateMenu = (args: {
  name: string;
  price: number;
  image: string;
  categoryName: string;
  id: number;
}) =>
  prisma.binKitchenMenu.update({
    data: {
      name: args.name,
      price: args.price,
      image: args.image,
      category: {
        connect: {
          name: args.categoryName,
        },
      },
    },
    where: {
      id: args.id,
    },
  });

//-----------------------------------------------------------
// ###########################

export const createOrder = (args: ICreateOrder) =>
  prisma.binKitchenOrder.create({
    data: {
      tableId: args.tableId,
      items: {
        createMany: {
          data: args.items,
        },
      },
    },
  }); //*
// ###########################

export const createOrderItem = (
  args: {
    orderId: number;
    menuId: number;
    quantity: number;
    totalPrice: number;
  }[]
) =>
  prisma.binKitchenOrderItem.createMany({
    data: args.map((r) => ({
      quantity: r.quantity,
      totalPrice: r.totalPrice,
      orderId: r.orderId, //map เพื่อสร้างก้อน orderId ใหม่
      menuId: r.menuId,
    })),
  });

//-----------------------------------------------------------

export const getOrder = (args: IGetOrderCodec) =>
  prisma.binKitchenOrder.findUnique({
    where: {
      id: args.id,
    },
    include: {
      items: {
        include: {
          menu: true,
        },
      },
    },
  });

//-----------------------------------------------------------

export const getOrders = () =>
  prisma.binKitchenOrder.findMany({
    orderBy: {
      id: "asc",
    },
  });

//-----------------------------------------------------------

export const updateOrder = (args: IUpdateOrderCodec) =>
  prisma.binKitchenOrder.update({
    data: {
      status: args.status,
    },
    where: {
      id: args.id,
    },
  });

//-----------------------------------------------------------
*/
