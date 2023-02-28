import * as t from "io-ts"

// export interface IcreateTask {
//   task: string;
// }

export const createTaskCodec = t.type({task: t.string})

export interface IcreateTask extends t.TypeOf<typeof createTaskCodec> {}