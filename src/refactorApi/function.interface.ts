// พวกนี้อะไรที่เป็นพวก codec พวก type ทั้งหมดที่เกี่ยวกับงานเราเอาจะเอามาเก็บไว้ในนี้
// หน้านี้เราจะ export ไปให้กับทาง function
// หน้านี้จะเป็นหน้าไว้เก็ฐ Data types ทั้งหมด
import * as t from "io-ts";

export interface IHelloMultiply {
  name: string;
  number: { x: number; y: number; z: number };
}

