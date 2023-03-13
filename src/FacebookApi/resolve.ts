import { PrismaClient } from "../../prisma/client";
import { IAddPost2, IAddProfile, IAddUser2 } from "./interface";
export const prisma = new PrismaClient();
export const addUser2 = async (args:IAddUser2)=>{
  // const result = await prisma.user.create()
}

export const addPost2 = async (args:IAddPost2)=>{
  const result = await prisma.post.create({
    data:{
      message: args.message,
      user:{
        connect:{
          id: args.id
        },
      },
    },
  
  }); 
  return result;
};

export const addProfile = async(args:IAddProfile)=>{
  // const result = await prisma.profile.create({
  //   data:{
  //     image: args.image,
  //     tel: args.tel,
  //     user:{
  //       connect:{
  //         id: args.id
  //       },
  //     }
  //   }
  // });
  // return result;
};