import { PrismaClient } from "../../prisma/client";

// เรามาเริ่มต้นการเขียน API กันเลย
export const prisma = new PrismaClient();

export const createCategory = (args: { name: string }) =>
  prisma.binKitchenCategory.create({
    data: {
      name: args.name,
    },
  });

// ถ้าเราต้องการดึงหมดก็ไม่ต้องใส่ args
export const getCategory = () =>
  prisma.binKitchenCategory.findMany({
    select: {
      id: true,
      name: true,
    },
  });

export const updateCategory = (args: {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}) =>
  prisma.binKitchenCategory.update({
    where: {
      id: args.id,
      name: args.name,
    },
    data: {
      name: args.name,
    },
  });

export const deleteCategory = (args: { id: number; name: string }) =>
  prisma.binKitchenCategory.delete({
    where: {
      id: args.id,
      name: args.name,
    },
  });

// เดี๋ยวค่อยกลับมาถามอีกที
export const createMenu = (args: {
  name: string;
  image: string;
  price: number;
  category: string;
}) =>
  prisma.binKitchenMenu.create({
    data: {
      name: args.name,
      image: args.image,
      price: args.price,
      // ตัวนี้มันเป็น relation ซึ่งหมายความว่ามันไมได้เก็บข้อมูล แต่มันเก็บเป็นแค่เลข ID ของฝั่งที่มันดึงมาเท่านั้น
      category: {
        connect: {
          name: args.category,
        },
      },
    },
  });

export const getMenu = () =>
  prisma.binKitchenMenu.findMany({
    select: {
      id: true,
      name: true,
    },
  });

export const updateMenu = (args: { id: number; name: string }) =>
  prisma.binKitchenMenu.update({
    where: {
      id: args.id,
    },
    data: {
      name: args.name,
    },
  });

export const deleteMenu = (args: { id: number }) =>
  prisma.binKitchenMenu.delete({
    where: { id: args.id },
  });

  export const createOrder = (args: CreateOrder) =>
  prisma.binKitchenOrder.create({
    data: {
      tableId: args.tableId,
      items: {
        create: args.items.map((r) => ({
          menu: {
            connect: {
              id: r.menuId,
            },
          },
          quantity: r.quantity,
          totalPrice: r.totalPrice,
        })),
      },
    },
  });
    // data: args.data,
  //   data: {
  //     tableId: args.tableId,
  //     items: {
  //       create: [
  //         {
  //           quantity: 1,
  //           totalPrice: 100,
  //           menu: {
  //             connect: {
  //               id: 1,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

export const getOrder = (args: {
  id: number;
  status: string;
  tableId: number;
}) =>
  prisma.binKitchenOrder.findMany({
    where: { id: args.id, status: args.status, tableId: args.tableId },
    // select: { id: true, status: true, tableId: true },
    include: { items: true },
  });

export const updateOrder = (args: {
  id: number;
  name: string;
  image: string;
  price: number;
}) =>
  prisma.binKitchenMenu.update({
    where: { id: args.id },
    data: { name: args.name, image: args.image, price: args.price },
  });

export const deleteOrder = (args: { id: number }) =>
  prisma.binKitchenOrder.delete({
    where: { id: args.id },
  });

// // อันนี้ต้องแก้ไขอีกที อะไรวะเนี่ย
// export const createOrderItem = (args: {quantity: number; totalPrice: number; menu: string}) =>
//   prisma.binKitchenOrderItem.create({
//     data: {quantity: args.quantity, totalPrice: args.totalPrice, menu: args.menu}
//   });

// // เกิดอะไรขึ้ยงง? ทำยังไง?
// export const getOrderItem = (args: {NOT:; status: string}) =>
//   prisma.binKitchenOrderItem.findMany({
//     where: {
//       NOT: {
//         status: args.status,,
//       },
//     },
//   });

//   export const updateOrderItem = (args: {id: number; quantity: number; totalPrice: number;}) =>
//   prisma.binKitchenOrderItem.update({
//     where: {id: args.id},
//     data: {quantity: args.quantity, totalPrice: args.totalPrice},
//   });

//   export const deleteOrderItem = (args: {id: number}) =>
//   prisma.binKitchenOrderItem.delete ({
//     where: {id: args.id}
//   });
