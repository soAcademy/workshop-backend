import { ADDRGETNETWORKPARAMS } from "dns";
import { prisma } from "../todoList";

// เรามาเริ่มต้นการเขียน API กันเลย

export const createCategory = (args: { category: string }) =>
  prisma.binKitchenCategory.create({
    data: {
      name: args.category,
    },
  });

  // ถ้าเราต้องการดึงหมดก็ไม่ต้องใส่ args
export const getCategories = () =>
  prisma.binKitchenCategory.findMany({
    select: {
      id: true,
      name: true,
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
      category: {
        connect: {
          name: args.category,
        },
      },
    },
  });
