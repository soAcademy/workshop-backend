// อันนี้เราเอาไว้ใส่ Functino ซึ่งเราจะตั้งชื่อตาม function ที่เราจะเขียนในนี้
// อันนี้คือตัว function pure จริง ๆ จะเก็บไว้ในนี้ พวกบวกลบคูรหารต่าง ๆ เอาไว้ เราจะไม่ยุ่งกับ express

import { IHelloMultiply } from "./function.interface";

export const isNumber = (data: any) => typeof data === "number";

export const add = (x: number, y: number) => x + y;

export const helloMultiply = (args: IHelloMultiply) => ({
  text: `Hello ${args.name} multiply ${
    args.number.x * args.number.y * args.number.z
  }`,
  createdAt: new Date(),
});
