import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateManyMenu,
  ICreateMenu,
  ICreateOrder,
  IDeleteCategory,
  IDeleteMenu,
  IGetOrder,
  IGetOrderByTableId,
  IUpdateCategory,
  IUpdateMenu,
  IupdateOrder,
} from "./interface";
export const prisma = new PrismaClient();

export const createCategory = async (args: ICreateCategory) => {
  console.log("args", args);

  const result = await prisma.dewKitchenCategory.createMany({
    data: args.data,
  });
  console.log(result);
  return result;
};

export const getCategories = async () =>
  await prisma.dewKitchenCategory.findMany({
    orderBy: { id: "asc" },
  });

export const updateCategory = async (args: IUpdateCategory) => {
  console.log("args", args);
  const result = await prisma.dewKitchenCategory.update({
    where: {
      id: args.id,
    },
    data: { name: args.name },
  });
  return result;
};

export const createMenu = async (args: ICreateMenu) => {
  console.log("args", args);
  const result = await prisma.dewKitchenMenu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      categoryKey: {
        connect: {
          id: args.id,
        },
      },
    },
  });
  return result;
};

export const getMenu = async () =>
  await prisma.dewKitchenMenu.findMany({
    orderBy: { id: "asc" },
  });

export const createOrder = async (args: ICreateOrder) => {
  console.log("args", args);
  const result = await prisma.dewKitchenOrder.create({
    data: {
      tableId: args.tableId,
      items: {
        create: args.items.map((r) => {
          return {
            quantity: r.quantity,
            totalPrice: r.totalPrice,
            menu: {
              connect: { id: r.menuId },
            },
          };
        }),
      },
    },
  });
  return result;
};

export const getOrders = async () => {
  const result = await prisma.dewKitchenOrder.findMany({
    select:{
      tableId:true,
      items:{
        select:{
          menu:{
            select:{
              name:true,
              price:true,
          
            },
          },
          menuId:true,
          quantity:true,
          totalPrice:true,
        }

      },
    }
  });
  return result;
};

export const getOrder = async (args: IGetOrder) => {
  console.log(args);
  const result = await prisma.dewKitchenOrder.findUnique({
    where: { id: args.id },
  });
  return result;
};

export const updateOrder = async (args: IupdateOrder) => {
  console.log(args);
  const result = await prisma.dewKitchenOrder.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    },
  });
  return result;
};

export const deleteCategory = async (args: IDeleteCategory) => {
  console.log(args);
  const result = await prisma.dewKitchenCategory.deleteMany({
    where: {
      id: {
        in: args.id,
      },
    },
  });
  return result;
};

export const deleteMenu = async (args: IDeleteMenu) => {
  console.log(args);
  const result = await prisma.dewKitchenMenu.delete({
    where: {
      id: args.id,
    },
  });
  return result;
};

export const updateMenu = async (args: IUpdateMenu) => {
  console.log("args", args);
  const result = await prisma.dewKitchenMenu.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
      price: args.price,
      image: args.image,
      categoryKey: {
        connect: { id: args.categoryKey.connect.id2 },
      },
    },
  });
  return result;
};

export const createManyMenu = async (args: ICreateManyMenu) => {
  const result = await prisma.dewKitchenMenu.createMany({
    data: args.data.map((r) => {
      return {
        id: r.id,
        name: r.name,
        image: r.image,
        price: r.price,
        categoryName: r.categoryName,
      };
    }),
  });
  return result;
};

export const deleteAllOrder = async () => {
  const result = await prisma.dewOrderItem.deleteMany();
  return result;
};

export const getOrderByTableId = async (args: IGetOrderByTableId) => {
  const result = await prisma.dewKitchenOrder.findMany({
    where: {
      tableId: args.tableId,
    },
    select: {
      tableId: true,
      items: {
        select:{
          id:true,
          menu:{
            select:{
              name:true,
              price:true,
              categoryName:true,
            }
          },
          menuId:true,
          quantity:true, 
          totalPrice:true,
          
        }
      },
    },
  });
  return result;
};
