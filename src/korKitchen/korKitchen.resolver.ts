import { includes } from "fp-ts/lib/string";
import { PrismaClient } from "../../prisma/client";
import {
  ICreateCategory,
  ICreateMenu,
  ICreateOrder,
  IDeleteMenu,
  IGetCategories,
  IGetMenus,
  IGetOrder,
  IUpdateCategory,
  IUpdateMenu,
  IUpdateOrder,
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
      categoryName: true,
    },
  });

export const updateMenu = (args: IUpdateMenu) =>
  prisma.korKitchenMenu.update({
    where: {
      id: args.id,
    },
    data: {
      price: args?.price ?? undefined,
      name: args?.name ?? undefined,
      image: args?.image ?? undefined,
    },
  });

export const createOrder = (args: ICreateOrder) =>
  prisma.korKitchenOrder.create({
    data: {
      tableId: args.tableId,
      items: {
        create: [
          {
            menu: {
              connect: {
                id: args.menu,
              },
            },
            quantity: args.quantity,
            totalPrice: args.totalPrice,
          },
        ],
      },
    },
  });

// export const createOrder = () => {
//   try {
//     return prisma.korKitchenOrder.create({
//       data: {
//         tableId: 2,
//         items: {
//           create: [
//             {
//               menu: {
//                 connect: {
//                   id: 1,
//                 },
//               },
//               quantity: 3,
//               totalPrice: 5,
//             },
//           ],
//         },
//       },
//     });
//   } catch (e) {
//     console.log(e);
//     return e;
//   }
// };

export const getOrder = (args: IGetOrder) =>
  prisma.korKitchenOrder.findUnique({
    where: {
      id: args.id,
    },
    include: {
      items: { include: { menu: true } },
    },
  });

export const getOrders = () =>
  prisma.korKitchenOrder.findMany({
    include: {
      items: { include: { menu: true } },
    },
  });

  export const updateOrder = (args: IUpdateOrder) =>
  prisma.korKitchenOrder.update({
    where: {
      id: args.id,
    },
    data: {
      status: args.status,
    }
  })

  export const deleteMenu = (args: IDeleteMenu) =>
   prisma.korKitchenMenu.delete({
    where: {
      id: args.id,
    }
   })

   