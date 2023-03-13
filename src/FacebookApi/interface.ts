import * as t from "io-ts";

export interface IAddUser2 {
  name: string;
  message: string;
  id: number;
}

export interface IAddPost2{
  message:string;
  id:number;
}

export interface IAddProfile{
  image:string;
  tel:number;
  id:number;
}