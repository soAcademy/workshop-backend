import { Request,Response } from "express"
import { addPost2, addProfile, addUser2 } from "./resolve";

export const AddPost2Handler = async(req:Request, res:Response)=>{
  const body = req?.body;
  console.log(body);
  try{
    const _result = await addPost2(body);
    return res.status(200).json(_result);
  }catch(err){res.status(500).send("Error to add user")}
}

export const AddUser2Handler = async(req:Request, res:Response)=>{
  const body = req?.body;
  console.log(body);
  try{
    const _result = await addUser2(body);
    return res.status(200).json(_result);
  }catch(err){res.status(500).send("Error to add user")}
}

export const addProfileHandler = async(req: Request, res: Response) => {
  const body = req?.body;
  console.log(body);
  try{
    const _result = await addProfile(body);
    return res.status(200).json(_result);
  }catch(err){res.status(500).send("Error to add profile")}
}

