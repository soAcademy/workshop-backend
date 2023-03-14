import { PrismaClient } from "../../prisma/client";
import { ICreateUser } from "./twitter.interfaces";

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) => {
  return prisma.user.create({
    data: {
      name: args.name,
      imageUrl: args.imageUrl,
      bio: args.bio,
    },
  });
};
