
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model BinKitchenCategory
 * 
 */
export type BinKitchenCategory = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model BinKitchenMenu
 * 
 */
export type BinKitchenMenu = {
  id: number
  name: string
  image: string
  price: number
  categoryName: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model BinKitchenOrder
 * 
 */
export type BinKitchenOrder = {
  id: number
  status: string
  tableId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model BinKitchenOrderItem
 * 
 */
export type BinKitchenOrderItem = {
  id: number
  menuId: number
  orderId: number | null
  quantity: number
  totalPrice: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}

/**
 * Model Question
 * 
 */
export type Question = {
  id: number
  name: string
  categoriesId: number
  roundQuestionId: number
  answerId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model RoundQuestion
 * 
 */
export type RoundQuestion = {
  id: number
  roundId: number
  correctAnswer: boolean
  createAt: Date
  updateAt: Date
  choiceId: number
}

/**
 * Model Round
 * 
 */
export type Round = {
  id: number
  categoryId: number
  createAt: Date
  updateAt: Date
  score: number
}

/**
 * Model Choice
 * 
 */
export type Choice = {
  id: number
  choices: number
  questionId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  profileImage: string
  createAt: Date
  updateAt: Date
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  message: string
  createAt: Date
  updateAt: Date
}

/**
 * Model DirecMessage
 * 
 */
export type DirecMessage = {
  id: number
  message: string
  fromUser: string
  toUser: string
  createAt: Date
  updateAt: Date
}

/**
 * Model HashTag
 * 
 */
export type HashTag = {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}

/**
 * Model HashTagOnPost
 * 
 */
export type HashTagOnPost = {
  id: number
  postId: number
  hashTagId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Reply
 * 
 */
export type Reply = {
  id: number
  postId: number
  userId: number
  message: string
  createAt: Date
  updateAt: Date
}

/**
 * Model UserRelation
 * 
 */
export type UserRelation = {
  id: number
  fromId: number
  toId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model TodoList
 * 
 */
export type TodoList = {
  id: number
  task: string
  status: string
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BinKitchenCategories
 * const binKitchenCategories = await prisma.binKitchenCategory.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BinKitchenCategories
   * const binKitchenCategories = await prisma.binKitchenCategory.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.binKitchenCategory`: Exposes CRUD operations for the **BinKitchenCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BinKitchenCategories
    * const binKitchenCategories = await prisma.binKitchenCategory.findMany()
    * ```
    */
  get binKitchenCategory(): Prisma.BinKitchenCategoryDelegate<GlobalReject>;

  /**
   * `prisma.binKitchenMenu`: Exposes CRUD operations for the **BinKitchenMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BinKitchenMenus
    * const binKitchenMenus = await prisma.binKitchenMenu.findMany()
    * ```
    */
  get binKitchenMenu(): Prisma.BinKitchenMenuDelegate<GlobalReject>;

  /**
   * `prisma.binKitchenOrder`: Exposes CRUD operations for the **BinKitchenOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BinKitchenOrders
    * const binKitchenOrders = await prisma.binKitchenOrder.findMany()
    * ```
    */
  get binKitchenOrder(): Prisma.BinKitchenOrderDelegate<GlobalReject>;

  /**
   * `prisma.binKitchenOrderItem`: Exposes CRUD operations for the **BinKitchenOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BinKitchenOrderItems
    * const binKitchenOrderItems = await prisma.binKitchenOrderItem.findMany()
    * ```
    */
  get binKitchenOrderItem(): Prisma.BinKitchenOrderItemDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<GlobalReject>;

  /**
   * `prisma.roundQuestion`: Exposes CRUD operations for the **RoundQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoundQuestions
    * const roundQuestions = await prisma.roundQuestion.findMany()
    * ```
    */
  get roundQuestion(): Prisma.RoundQuestionDelegate<GlobalReject>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<GlobalReject>;

  /**
   * `prisma.choice`: Exposes CRUD operations for the **Choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.ChoiceDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.direcMessage`: Exposes CRUD operations for the **DirecMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirecMessages
    * const direcMessages = await prisma.direcMessage.findMany()
    * ```
    */
  get direcMessage(): Prisma.DirecMessageDelegate<GlobalReject>;

  /**
   * `prisma.hashTag`: Exposes CRUD operations for the **HashTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HashTags
    * const hashTags = await prisma.hashTag.findMany()
    * ```
    */
  get hashTag(): Prisma.HashTagDelegate<GlobalReject>;

  /**
   * `prisma.hashTagOnPost`: Exposes CRUD operations for the **HashTagOnPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HashTagOnPosts
    * const hashTagOnPosts = await prisma.hashTagOnPost.findMany()
    * ```
    */
  get hashTagOnPost(): Prisma.HashTagOnPostDelegate<GlobalReject>;

  /**
   * `prisma.reply`: Exposes CRUD operations for the **Reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replies
    * const replies = await prisma.reply.findMany()
    * ```
    */
  get reply(): Prisma.ReplyDelegate<GlobalReject>;

  /**
   * `prisma.userRelation`: Exposes CRUD operations for the **UserRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRelations
    * const userRelations = await prisma.userRelation.findMany()
    * ```
    */
  get userRelation(): Prisma.UserRelationDelegate<GlobalReject>;

  /**
   * `prisma.todoList`: Exposes CRUD operations for the **TodoList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodoLists
    * const todoLists = await prisma.todoList.findMany()
    * ```
    */
  get todoList(): Prisma.TodoListDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BinKitchenCategory: 'BinKitchenCategory',
    BinKitchenMenu: 'BinKitchenMenu',
    BinKitchenOrder: 'BinKitchenOrder',
    BinKitchenOrderItem: 'BinKitchenOrderItem',
    Category: 'Category',
    Question: 'Question',
    RoundQuestion: 'RoundQuestion',
    Round: 'Round',
    Choice: 'Choice',
    User: 'User',
    Post: 'Post',
    DirecMessage: 'DirecMessage',
    HashTag: 'HashTag',
    HashTagOnPost: 'HashTagOnPost',
    Reply: 'Reply',
    UserRelation: 'UserRelation',
    TodoList: 'TodoList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BinKitchenCategoryCountOutputType
   */


  export type BinKitchenCategoryCountOutputType = {
    menus: number
  }

  export type BinKitchenCategoryCountOutputTypeSelect = {
    menus?: boolean
  }

  export type BinKitchenCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | BinKitchenCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenCategoryCountOutputTypeArgs)
    ? BinKitchenCategoryCountOutputType 
    : S extends { select: any } & (BinKitchenCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BinKitchenCategoryCountOutputType ? BinKitchenCategoryCountOutputType[P] : never
  } 
      : BinKitchenCategoryCountOutputType




  // Custom InputTypes

  /**
   * BinKitchenCategoryCountOutputType without action
   */
  export type BinKitchenCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategoryCountOutputType
     */
    select?: BinKitchenCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type BinKitchenMenuCountOutputType
   */


  export type BinKitchenMenuCountOutputType = {
    orderItems: number
  }

  export type BinKitchenMenuCountOutputTypeSelect = {
    orderItems?: boolean
  }

  export type BinKitchenMenuCountOutputTypeGetPayload<S extends boolean | null | undefined | BinKitchenMenuCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenMenuCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenMenuCountOutputTypeArgs)
    ? BinKitchenMenuCountOutputType 
    : S extends { select: any } & (BinKitchenMenuCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BinKitchenMenuCountOutputType ? BinKitchenMenuCountOutputType[P] : never
  } 
      : BinKitchenMenuCountOutputType




  // Custom InputTypes

  /**
   * BinKitchenMenuCountOutputType without action
   */
  export type BinKitchenMenuCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenuCountOutputType
     */
    select?: BinKitchenMenuCountOutputTypeSelect | null
  }



  /**
   * Count Type BinKitchenOrderCountOutputType
   */


  export type BinKitchenOrderCountOutputType = {
    items: number
  }

  export type BinKitchenOrderCountOutputTypeSelect = {
    items?: boolean
  }

  export type BinKitchenOrderCountOutputTypeGetPayload<S extends boolean | null | undefined | BinKitchenOrderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenOrderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenOrderCountOutputTypeArgs)
    ? BinKitchenOrderCountOutputType 
    : S extends { select: any } & (BinKitchenOrderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BinKitchenOrderCountOutputType ? BinKitchenOrderCountOutputType[P] : never
  } 
      : BinKitchenOrderCountOutputType




  // Custom InputTypes

  /**
   * BinKitchenOrderCountOutputType without action
   */
  export type BinKitchenOrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderCountOutputType
     */
    select?: BinKitchenOrderCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    question: number
    round: number
  }

  export type CategoryCountOutputTypeSelect = {
    question?: boolean
    round?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type QuestionCountOutputType
   */


  export type QuestionCountOutputType = {
    choices: number
  }

  export type QuestionCountOutputTypeSelect = {
    choices?: boolean
  }

  export type QuestionCountOutputTypeGetPayload<S extends boolean | null | undefined | QuestionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QuestionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (QuestionCountOutputTypeArgs)
    ? QuestionCountOutputType 
    : S extends { select: any } & (QuestionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof QuestionCountOutputType ? QuestionCountOutputType[P] : never
  } 
      : QuestionCountOutputType




  // Custom InputTypes

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect | null
  }



  /**
   * Count Type RoundQuestionCountOutputType
   */


  export type RoundQuestionCountOutputType = {
    question: number
  }

  export type RoundQuestionCountOutputTypeSelect = {
    question?: boolean
  }

  export type RoundQuestionCountOutputTypeGetPayload<S extends boolean | null | undefined | RoundQuestionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundQuestionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoundQuestionCountOutputTypeArgs)
    ? RoundQuestionCountOutputType 
    : S extends { select: any } & (RoundQuestionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoundQuestionCountOutputType ? RoundQuestionCountOutputType[P] : never
  } 
      : RoundQuestionCountOutputType




  // Custom InputTypes

  /**
   * RoundQuestionCountOutputType without action
   */
  export type RoundQuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionCountOutputType
     */
    select?: RoundQuestionCountOutputTypeSelect | null
  }



  /**
   * Count Type RoundCountOutputType
   */


  export type RoundCountOutputType = {
    roundQuestion: number
  }

  export type RoundCountOutputTypeSelect = {
    roundQuestion?: boolean
  }

  export type RoundCountOutputTypeGetPayload<S extends boolean | null | undefined | RoundCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoundCountOutputTypeArgs)
    ? RoundCountOutputType 
    : S extends { select: any } & (RoundCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoundCountOutputType ? RoundCountOutputType[P] : never
  } 
      : RoundCountOutputType




  // Custom InputTypes

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect | null
  }



  /**
   * Count Type ChoiceCountOutputType
   */


  export type ChoiceCountOutputType = {
    roundQuestion: number
  }

  export type ChoiceCountOutputTypeSelect = {
    roundQuestion?: boolean
  }

  export type ChoiceCountOutputTypeGetPayload<S extends boolean | null | undefined | ChoiceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ChoiceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ChoiceCountOutputTypeArgs)
    ? ChoiceCountOutputType 
    : S extends { select: any } & (ChoiceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ChoiceCountOutputType ? ChoiceCountOutputType[P] : never
  } 
      : ChoiceCountOutputType




  // Custom InputTypes

  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ChoiceCountOutputType
     */
    select?: ChoiceCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    reply: number
    fromUserRelations: number
    toUserRelations: number
  }

  export type UserCountOutputTypeSelect = {
    reply?: boolean
    fromUserRelations?: boolean
    toUserRelations?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    HashTagOnPost: number
    reply: number
  }

  export type PostCountOutputTypeSelect = {
    HashTagOnPost?: boolean
    reply?: boolean
  }

  export type PostCountOutputTypeGetPayload<S extends boolean | null | undefined | PostCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PostCountOutputTypeArgs)
    ? PostCountOutputType 
    : S extends { select: any } & (PostCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PostCountOutputType ? PostCountOutputType[P] : never
  } 
      : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Count Type HashTagCountOutputType
   */


  export type HashTagCountOutputType = {
    HashTagOnPost: number
  }

  export type HashTagCountOutputTypeSelect = {
    HashTagOnPost?: boolean
  }

  export type HashTagCountOutputTypeGetPayload<S extends boolean | null | undefined | HashTagCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashTagCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HashTagCountOutputTypeArgs)
    ? HashTagCountOutputType 
    : S extends { select: any } & (HashTagCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HashTagCountOutputType ? HashTagCountOutputType[P] : never
  } 
      : HashTagCountOutputType




  // Custom InputTypes

  /**
   * HashTagCountOutputType without action
   */
  export type HashTagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HashTagCountOutputType
     */
    select?: HashTagCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model BinKitchenCategory
   */


  export type AggregateBinKitchenCategory = {
    _count: BinKitchenCategoryCountAggregateOutputType | null
    _avg: BinKitchenCategoryAvgAggregateOutputType | null
    _sum: BinKitchenCategorySumAggregateOutputType | null
    _min: BinKitchenCategoryMinAggregateOutputType | null
    _max: BinKitchenCategoryMaxAggregateOutputType | null
  }

  export type BinKitchenCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type BinKitchenCategorySumAggregateOutputType = {
    id: number | null
  }

  export type BinKitchenCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinKitchenCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinKitchenCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BinKitchenCategoryAvgAggregateInputType = {
    id?: true
  }

  export type BinKitchenCategorySumAggregateInputType = {
    id?: true
  }

  export type BinKitchenCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinKitchenCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinKitchenCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BinKitchenCategoryAggregateArgs = {
    /**
     * Filter which BinKitchenCategory to aggregate.
     */
    where?: BinKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenCategories to fetch.
     */
    orderBy?: Enumerable<BinKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BinKitchenCategories
    **/
    _count?: true | BinKitchenCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinKitchenCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinKitchenCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinKitchenCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinKitchenCategoryMaxAggregateInputType
  }

  export type GetBinKitchenCategoryAggregateType<T extends BinKitchenCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBinKitchenCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinKitchenCategory[P]>
      : GetScalarType<T[P], AggregateBinKitchenCategory[P]>
  }




  export type BinKitchenCategoryGroupByArgs = {
    where?: BinKitchenCategoryWhereInput
    orderBy?: Enumerable<BinKitchenCategoryOrderByWithAggregationInput>
    by: BinKitchenCategoryScalarFieldEnum[]
    having?: BinKitchenCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinKitchenCategoryCountAggregateInputType | true
    _avg?: BinKitchenCategoryAvgAggregateInputType
    _sum?: BinKitchenCategorySumAggregateInputType
    _min?: BinKitchenCategoryMinAggregateInputType
    _max?: BinKitchenCategoryMaxAggregateInputType
  }


  export type BinKitchenCategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BinKitchenCategoryCountAggregateOutputType | null
    _avg: BinKitchenCategoryAvgAggregateOutputType | null
    _sum: BinKitchenCategorySumAggregateOutputType | null
    _min: BinKitchenCategoryMinAggregateOutputType | null
    _max: BinKitchenCategoryMaxAggregateOutputType | null
  }

  type GetBinKitchenCategoryGroupByPayload<T extends BinKitchenCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BinKitchenCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinKitchenCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinKitchenCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BinKitchenCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BinKitchenCategorySelect = {
    id?: boolean
    name?: boolean
    menus?: boolean | BinKitchenCategory$menusArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | BinKitchenCategoryCountOutputTypeArgs
  }


  export type BinKitchenCategoryInclude = {
    menus?: boolean | BinKitchenCategory$menusArgs
    _count?: boolean | BinKitchenCategoryCountOutputTypeArgs
  }

  export type BinKitchenCategoryGetPayload<S extends boolean | null | undefined | BinKitchenCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenCategory :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenCategoryArgs | BinKitchenCategoryFindManyArgs)
    ? BinKitchenCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menus' ? Array < BinKitchenMenuGetPayload<S['include'][P]>>  :
        P extends '_count' ? BinKitchenCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BinKitchenCategoryArgs | BinKitchenCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menus' ? Array < BinKitchenMenuGetPayload<S['select'][P]>>  :
        P extends '_count' ? BinKitchenCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BinKitchenCategory ? BinKitchenCategory[P] : never
  } 
      : BinKitchenCategory


  type BinKitchenCategoryCountArgs = 
    Omit<BinKitchenCategoryFindManyArgs, 'select' | 'include'> & {
      select?: BinKitchenCategoryCountAggregateInputType | true
    }

  export interface BinKitchenCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BinKitchenCategory that matches the filter.
     * @param {BinKitchenCategoryFindUniqueArgs} args - Arguments to find a BinKitchenCategory
     * @example
     * // Get one BinKitchenCategory
     * const binKitchenCategory = await prisma.binKitchenCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BinKitchenCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BinKitchenCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BinKitchenCategory'> extends True ? Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T>> : Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T> | null, null>

    /**
     * Find one BinKitchenCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BinKitchenCategoryFindUniqueOrThrowArgs} args - Arguments to find a BinKitchenCategory
     * @example
     * // Get one BinKitchenCategory
     * const binKitchenCategory = await prisma.binKitchenCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BinKitchenCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BinKitchenCategoryFindUniqueOrThrowArgs>
    ): Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T>>

    /**
     * Find the first BinKitchenCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenCategoryFindFirstArgs} args - Arguments to find a BinKitchenCategory
     * @example
     * // Get one BinKitchenCategory
     * const binKitchenCategory = await prisma.binKitchenCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BinKitchenCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BinKitchenCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BinKitchenCategory'> extends True ? Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T>> : Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T> | null, null>

    /**
     * Find the first BinKitchenCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenCategoryFindFirstOrThrowArgs} args - Arguments to find a BinKitchenCategory
     * @example
     * // Get one BinKitchenCategory
     * const binKitchenCategory = await prisma.binKitchenCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BinKitchenCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BinKitchenCategoryFindFirstOrThrowArgs>
    ): Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T>>

    /**
     * Find zero or more BinKitchenCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BinKitchenCategories
     * const binKitchenCategories = await prisma.binKitchenCategory.findMany()
     * 
     * // Get first 10 BinKitchenCategories
     * const binKitchenCategories = await prisma.binKitchenCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binKitchenCategoryWithIdOnly = await prisma.binKitchenCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BinKitchenCategoryFindManyArgs>(
      args?: SelectSubset<T, BinKitchenCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<BinKitchenCategoryGetPayload<T>>>

    /**
     * Create a BinKitchenCategory.
     * @param {BinKitchenCategoryCreateArgs} args - Arguments to create a BinKitchenCategory.
     * @example
     * // Create one BinKitchenCategory
     * const BinKitchenCategory = await prisma.binKitchenCategory.create({
     *   data: {
     *     // ... data to create a BinKitchenCategory
     *   }
     * })
     * 
    **/
    create<T extends BinKitchenCategoryCreateArgs>(
      args: SelectSubset<T, BinKitchenCategoryCreateArgs>
    ): Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T>>

    /**
     * Create many BinKitchenCategories.
     *     @param {BinKitchenCategoryCreateManyArgs} args - Arguments to create many BinKitchenCategories.
     *     @example
     *     // Create many BinKitchenCategories
     *     const binKitchenCategory = await prisma.binKitchenCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BinKitchenCategoryCreateManyArgs>(
      args?: SelectSubset<T, BinKitchenCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BinKitchenCategory.
     * @param {BinKitchenCategoryDeleteArgs} args - Arguments to delete one BinKitchenCategory.
     * @example
     * // Delete one BinKitchenCategory
     * const BinKitchenCategory = await prisma.binKitchenCategory.delete({
     *   where: {
     *     // ... filter to delete one BinKitchenCategory
     *   }
     * })
     * 
    **/
    delete<T extends BinKitchenCategoryDeleteArgs>(
      args: SelectSubset<T, BinKitchenCategoryDeleteArgs>
    ): Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T>>

    /**
     * Update one BinKitchenCategory.
     * @param {BinKitchenCategoryUpdateArgs} args - Arguments to update one BinKitchenCategory.
     * @example
     * // Update one BinKitchenCategory
     * const binKitchenCategory = await prisma.binKitchenCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BinKitchenCategoryUpdateArgs>(
      args: SelectSubset<T, BinKitchenCategoryUpdateArgs>
    ): Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T>>

    /**
     * Delete zero or more BinKitchenCategories.
     * @param {BinKitchenCategoryDeleteManyArgs} args - Arguments to filter BinKitchenCategories to delete.
     * @example
     * // Delete a few BinKitchenCategories
     * const { count } = await prisma.binKitchenCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BinKitchenCategoryDeleteManyArgs>(
      args?: SelectSubset<T, BinKitchenCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BinKitchenCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BinKitchenCategories
     * const binKitchenCategory = await prisma.binKitchenCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BinKitchenCategoryUpdateManyArgs>(
      args: SelectSubset<T, BinKitchenCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BinKitchenCategory.
     * @param {BinKitchenCategoryUpsertArgs} args - Arguments to update or create a BinKitchenCategory.
     * @example
     * // Update or create a BinKitchenCategory
     * const binKitchenCategory = await prisma.binKitchenCategory.upsert({
     *   create: {
     *     // ... data to create a BinKitchenCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BinKitchenCategory we want to update
     *   }
     * })
    **/
    upsert<T extends BinKitchenCategoryUpsertArgs>(
      args: SelectSubset<T, BinKitchenCategoryUpsertArgs>
    ): Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T>>

    /**
     * Count the number of BinKitchenCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenCategoryCountArgs} args - Arguments to filter BinKitchenCategories to count.
     * @example
     * // Count the number of BinKitchenCategories
     * const count = await prisma.binKitchenCategory.count({
     *   where: {
     *     // ... the filter for the BinKitchenCategories we want to count
     *   }
     * })
    **/
    count<T extends BinKitchenCategoryCountArgs>(
      args?: Subset<T, BinKitchenCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinKitchenCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BinKitchenCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BinKitchenCategoryAggregateArgs>(args: Subset<T, BinKitchenCategoryAggregateArgs>): Prisma.PrismaPromise<GetBinKitchenCategoryAggregateType<T>>

    /**
     * Group by BinKitchenCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BinKitchenCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinKitchenCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BinKitchenCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BinKitchenCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinKitchenCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BinKitchenCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BinKitchenCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    menus<T extends BinKitchenCategory$menusArgs= {}>(args?: Subset<T, BinKitchenCategory$menusArgs>): Prisma.PrismaPromise<Array<BinKitchenMenuGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BinKitchenCategory base type for findUnique actions
   */
  export type BinKitchenCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * Filter, which BinKitchenCategory to fetch.
     */
    where: BinKitchenCategoryWhereUniqueInput
  }

  /**
   * BinKitchenCategory findUnique
   */
  export interface BinKitchenCategoryFindUniqueArgs extends BinKitchenCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BinKitchenCategory findUniqueOrThrow
   */
  export type BinKitchenCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * Filter, which BinKitchenCategory to fetch.
     */
    where: BinKitchenCategoryWhereUniqueInput
  }


  /**
   * BinKitchenCategory base type for findFirst actions
   */
  export type BinKitchenCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * Filter, which BinKitchenCategory to fetch.
     */
    where?: BinKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenCategories to fetch.
     */
    orderBy?: Enumerable<BinKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinKitchenCategories.
     */
    cursor?: BinKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinKitchenCategories.
     */
    distinct?: Enumerable<BinKitchenCategoryScalarFieldEnum>
  }

  /**
   * BinKitchenCategory findFirst
   */
  export interface BinKitchenCategoryFindFirstArgs extends BinKitchenCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BinKitchenCategory findFirstOrThrow
   */
  export type BinKitchenCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * Filter, which BinKitchenCategory to fetch.
     */
    where?: BinKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenCategories to fetch.
     */
    orderBy?: Enumerable<BinKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinKitchenCategories.
     */
    cursor?: BinKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinKitchenCategories.
     */
    distinct?: Enumerable<BinKitchenCategoryScalarFieldEnum>
  }


  /**
   * BinKitchenCategory findMany
   */
  export type BinKitchenCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * Filter, which BinKitchenCategories to fetch.
     */
    where?: BinKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenCategories to fetch.
     */
    orderBy?: Enumerable<BinKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BinKitchenCategories.
     */
    cursor?: BinKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenCategories.
     */
    skip?: number
    distinct?: Enumerable<BinKitchenCategoryScalarFieldEnum>
  }


  /**
   * BinKitchenCategory create
   */
  export type BinKitchenCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * The data needed to create a BinKitchenCategory.
     */
    data: XOR<BinKitchenCategoryCreateInput, BinKitchenCategoryUncheckedCreateInput>
  }


  /**
   * BinKitchenCategory createMany
   */
  export type BinKitchenCategoryCreateManyArgs = {
    /**
     * The data used to create many BinKitchenCategories.
     */
    data: Enumerable<BinKitchenCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BinKitchenCategory update
   */
  export type BinKitchenCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * The data needed to update a BinKitchenCategory.
     */
    data: XOR<BinKitchenCategoryUpdateInput, BinKitchenCategoryUncheckedUpdateInput>
    /**
     * Choose, which BinKitchenCategory to update.
     */
    where: BinKitchenCategoryWhereUniqueInput
  }


  /**
   * BinKitchenCategory updateMany
   */
  export type BinKitchenCategoryUpdateManyArgs = {
    /**
     * The data used to update BinKitchenCategories.
     */
    data: XOR<BinKitchenCategoryUpdateManyMutationInput, BinKitchenCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BinKitchenCategories to update
     */
    where?: BinKitchenCategoryWhereInput
  }


  /**
   * BinKitchenCategory upsert
   */
  export type BinKitchenCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * The filter to search for the BinKitchenCategory to update in case it exists.
     */
    where: BinKitchenCategoryWhereUniqueInput
    /**
     * In case the BinKitchenCategory found by the `where` argument doesn't exist, create a new BinKitchenCategory with this data.
     */
    create: XOR<BinKitchenCategoryCreateInput, BinKitchenCategoryUncheckedCreateInput>
    /**
     * In case the BinKitchenCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinKitchenCategoryUpdateInput, BinKitchenCategoryUncheckedUpdateInput>
  }


  /**
   * BinKitchenCategory delete
   */
  export type BinKitchenCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
    /**
     * Filter which BinKitchenCategory to delete.
     */
    where: BinKitchenCategoryWhereUniqueInput
  }


  /**
   * BinKitchenCategory deleteMany
   */
  export type BinKitchenCategoryDeleteManyArgs = {
    /**
     * Filter which BinKitchenCategories to delete
     */
    where?: BinKitchenCategoryWhereInput
  }


  /**
   * BinKitchenCategory.menus
   */
  export type BinKitchenCategory$menusArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    where?: BinKitchenMenuWhereInput
    orderBy?: Enumerable<BinKitchenMenuOrderByWithRelationInput>
    cursor?: BinKitchenMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BinKitchenMenuScalarFieldEnum>
  }


  /**
   * BinKitchenCategory without action
   */
  export type BinKitchenCategoryArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenCategory
     */
    select?: BinKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenCategoryInclude | null
  }



  /**
   * Model BinKitchenMenu
   */


  export type AggregateBinKitchenMenu = {
    _count: BinKitchenMenuCountAggregateOutputType | null
    _avg: BinKitchenMenuAvgAggregateOutputType | null
    _sum: BinKitchenMenuSumAggregateOutputType | null
    _min: BinKitchenMenuMinAggregateOutputType | null
    _max: BinKitchenMenuMaxAggregateOutputType | null
  }

  export type BinKitchenMenuAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type BinKitchenMenuSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type BinKitchenMenuMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    categoryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinKitchenMenuMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    categoryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinKitchenMenuCountAggregateOutputType = {
    id: number
    name: number
    image: number
    price: number
    categoryName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BinKitchenMenuAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type BinKitchenMenuSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type BinKitchenMenuMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinKitchenMenuMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinKitchenMenuCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BinKitchenMenuAggregateArgs = {
    /**
     * Filter which BinKitchenMenu to aggregate.
     */
    where?: BinKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenMenus to fetch.
     */
    orderBy?: Enumerable<BinKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BinKitchenMenus
    **/
    _count?: true | BinKitchenMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinKitchenMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinKitchenMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinKitchenMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinKitchenMenuMaxAggregateInputType
  }

  export type GetBinKitchenMenuAggregateType<T extends BinKitchenMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateBinKitchenMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinKitchenMenu[P]>
      : GetScalarType<T[P], AggregateBinKitchenMenu[P]>
  }




  export type BinKitchenMenuGroupByArgs = {
    where?: BinKitchenMenuWhereInput
    orderBy?: Enumerable<BinKitchenMenuOrderByWithAggregationInput>
    by: BinKitchenMenuScalarFieldEnum[]
    having?: BinKitchenMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinKitchenMenuCountAggregateInputType | true
    _avg?: BinKitchenMenuAvgAggregateInputType
    _sum?: BinKitchenMenuSumAggregateInputType
    _min?: BinKitchenMenuMinAggregateInputType
    _max?: BinKitchenMenuMaxAggregateInputType
  }


  export type BinKitchenMenuGroupByOutputType = {
    id: number
    name: string
    image: string
    price: number
    categoryName: string | null
    createdAt: Date
    updatedAt: Date
    _count: BinKitchenMenuCountAggregateOutputType | null
    _avg: BinKitchenMenuAvgAggregateOutputType | null
    _sum: BinKitchenMenuSumAggregateOutputType | null
    _min: BinKitchenMenuMinAggregateOutputType | null
    _max: BinKitchenMenuMaxAggregateOutputType | null
  }

  type GetBinKitchenMenuGroupByPayload<T extends BinKitchenMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BinKitchenMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinKitchenMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinKitchenMenuGroupByOutputType[P]>
            : GetScalarType<T[P], BinKitchenMenuGroupByOutputType[P]>
        }
      >
    >


  export type BinKitchenMenuSelect = {
    id?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    category?: boolean | BinKitchenCategoryArgs
    categoryName?: boolean
    orderItems?: boolean | BinKitchenMenu$orderItemsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | BinKitchenMenuCountOutputTypeArgs
  }


  export type BinKitchenMenuInclude = {
    category?: boolean | BinKitchenCategoryArgs
    orderItems?: boolean | BinKitchenMenu$orderItemsArgs
    _count?: boolean | BinKitchenMenuCountOutputTypeArgs
  }

  export type BinKitchenMenuGetPayload<S extends boolean | null | undefined | BinKitchenMenuArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenMenu :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenMenuArgs | BinKitchenMenuFindManyArgs)
    ? BinKitchenMenu  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? BinKitchenCategoryGetPayload<S['include'][P]> | null :
        P extends 'orderItems' ? Array < BinKitchenOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? BinKitchenMenuCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BinKitchenMenuArgs | BinKitchenMenuFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? BinKitchenCategoryGetPayload<S['select'][P]> | null :
        P extends 'orderItems' ? Array < BinKitchenOrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? BinKitchenMenuCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BinKitchenMenu ? BinKitchenMenu[P] : never
  } 
      : BinKitchenMenu


  type BinKitchenMenuCountArgs = 
    Omit<BinKitchenMenuFindManyArgs, 'select' | 'include'> & {
      select?: BinKitchenMenuCountAggregateInputType | true
    }

  export interface BinKitchenMenuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BinKitchenMenu that matches the filter.
     * @param {BinKitchenMenuFindUniqueArgs} args - Arguments to find a BinKitchenMenu
     * @example
     * // Get one BinKitchenMenu
     * const binKitchenMenu = await prisma.binKitchenMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BinKitchenMenuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BinKitchenMenuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BinKitchenMenu'> extends True ? Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T>> : Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T> | null, null>

    /**
     * Find one BinKitchenMenu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BinKitchenMenuFindUniqueOrThrowArgs} args - Arguments to find a BinKitchenMenu
     * @example
     * // Get one BinKitchenMenu
     * const binKitchenMenu = await prisma.binKitchenMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BinKitchenMenuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BinKitchenMenuFindUniqueOrThrowArgs>
    ): Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T>>

    /**
     * Find the first BinKitchenMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenMenuFindFirstArgs} args - Arguments to find a BinKitchenMenu
     * @example
     * // Get one BinKitchenMenu
     * const binKitchenMenu = await prisma.binKitchenMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BinKitchenMenuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BinKitchenMenuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BinKitchenMenu'> extends True ? Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T>> : Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T> | null, null>

    /**
     * Find the first BinKitchenMenu that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenMenuFindFirstOrThrowArgs} args - Arguments to find a BinKitchenMenu
     * @example
     * // Get one BinKitchenMenu
     * const binKitchenMenu = await prisma.binKitchenMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BinKitchenMenuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BinKitchenMenuFindFirstOrThrowArgs>
    ): Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T>>

    /**
     * Find zero or more BinKitchenMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenMenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BinKitchenMenus
     * const binKitchenMenus = await prisma.binKitchenMenu.findMany()
     * 
     * // Get first 10 BinKitchenMenus
     * const binKitchenMenus = await prisma.binKitchenMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binKitchenMenuWithIdOnly = await prisma.binKitchenMenu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BinKitchenMenuFindManyArgs>(
      args?: SelectSubset<T, BinKitchenMenuFindManyArgs>
    ): Prisma.PrismaPromise<Array<BinKitchenMenuGetPayload<T>>>

    /**
     * Create a BinKitchenMenu.
     * @param {BinKitchenMenuCreateArgs} args - Arguments to create a BinKitchenMenu.
     * @example
     * // Create one BinKitchenMenu
     * const BinKitchenMenu = await prisma.binKitchenMenu.create({
     *   data: {
     *     // ... data to create a BinKitchenMenu
     *   }
     * })
     * 
    **/
    create<T extends BinKitchenMenuCreateArgs>(
      args: SelectSubset<T, BinKitchenMenuCreateArgs>
    ): Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T>>

    /**
     * Create many BinKitchenMenus.
     *     @param {BinKitchenMenuCreateManyArgs} args - Arguments to create many BinKitchenMenus.
     *     @example
     *     // Create many BinKitchenMenus
     *     const binKitchenMenu = await prisma.binKitchenMenu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BinKitchenMenuCreateManyArgs>(
      args?: SelectSubset<T, BinKitchenMenuCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BinKitchenMenu.
     * @param {BinKitchenMenuDeleteArgs} args - Arguments to delete one BinKitchenMenu.
     * @example
     * // Delete one BinKitchenMenu
     * const BinKitchenMenu = await prisma.binKitchenMenu.delete({
     *   where: {
     *     // ... filter to delete one BinKitchenMenu
     *   }
     * })
     * 
    **/
    delete<T extends BinKitchenMenuDeleteArgs>(
      args: SelectSubset<T, BinKitchenMenuDeleteArgs>
    ): Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T>>

    /**
     * Update one BinKitchenMenu.
     * @param {BinKitchenMenuUpdateArgs} args - Arguments to update one BinKitchenMenu.
     * @example
     * // Update one BinKitchenMenu
     * const binKitchenMenu = await prisma.binKitchenMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BinKitchenMenuUpdateArgs>(
      args: SelectSubset<T, BinKitchenMenuUpdateArgs>
    ): Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T>>

    /**
     * Delete zero or more BinKitchenMenus.
     * @param {BinKitchenMenuDeleteManyArgs} args - Arguments to filter BinKitchenMenus to delete.
     * @example
     * // Delete a few BinKitchenMenus
     * const { count } = await prisma.binKitchenMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BinKitchenMenuDeleteManyArgs>(
      args?: SelectSubset<T, BinKitchenMenuDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BinKitchenMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BinKitchenMenus
     * const binKitchenMenu = await prisma.binKitchenMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BinKitchenMenuUpdateManyArgs>(
      args: SelectSubset<T, BinKitchenMenuUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BinKitchenMenu.
     * @param {BinKitchenMenuUpsertArgs} args - Arguments to update or create a BinKitchenMenu.
     * @example
     * // Update or create a BinKitchenMenu
     * const binKitchenMenu = await prisma.binKitchenMenu.upsert({
     *   create: {
     *     // ... data to create a BinKitchenMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BinKitchenMenu we want to update
     *   }
     * })
    **/
    upsert<T extends BinKitchenMenuUpsertArgs>(
      args: SelectSubset<T, BinKitchenMenuUpsertArgs>
    ): Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T>>

    /**
     * Count the number of BinKitchenMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenMenuCountArgs} args - Arguments to filter BinKitchenMenus to count.
     * @example
     * // Count the number of BinKitchenMenus
     * const count = await prisma.binKitchenMenu.count({
     *   where: {
     *     // ... the filter for the BinKitchenMenus we want to count
     *   }
     * })
    **/
    count<T extends BinKitchenMenuCountArgs>(
      args?: Subset<T, BinKitchenMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinKitchenMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BinKitchenMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BinKitchenMenuAggregateArgs>(args: Subset<T, BinKitchenMenuAggregateArgs>): Prisma.PrismaPromise<GetBinKitchenMenuAggregateType<T>>

    /**
     * Group by BinKitchenMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BinKitchenMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinKitchenMenuGroupByArgs['orderBy'] }
        : { orderBy?: BinKitchenMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BinKitchenMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinKitchenMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BinKitchenMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BinKitchenMenuClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends BinKitchenCategoryArgs= {}>(args?: Subset<T, BinKitchenCategoryArgs>): Prisma__BinKitchenCategoryClient<BinKitchenCategoryGetPayload<T> | Null>;

    orderItems<T extends BinKitchenMenu$orderItemsArgs= {}>(args?: Subset<T, BinKitchenMenu$orderItemsArgs>): Prisma.PrismaPromise<Array<BinKitchenOrderItemGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BinKitchenMenu base type for findUnique actions
   */
  export type BinKitchenMenuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * Filter, which BinKitchenMenu to fetch.
     */
    where: BinKitchenMenuWhereUniqueInput
  }

  /**
   * BinKitchenMenu findUnique
   */
  export interface BinKitchenMenuFindUniqueArgs extends BinKitchenMenuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BinKitchenMenu findUniqueOrThrow
   */
  export type BinKitchenMenuFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * Filter, which BinKitchenMenu to fetch.
     */
    where: BinKitchenMenuWhereUniqueInput
  }


  /**
   * BinKitchenMenu base type for findFirst actions
   */
  export type BinKitchenMenuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * Filter, which BinKitchenMenu to fetch.
     */
    where?: BinKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenMenus to fetch.
     */
    orderBy?: Enumerable<BinKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinKitchenMenus.
     */
    cursor?: BinKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinKitchenMenus.
     */
    distinct?: Enumerable<BinKitchenMenuScalarFieldEnum>
  }

  /**
   * BinKitchenMenu findFirst
   */
  export interface BinKitchenMenuFindFirstArgs extends BinKitchenMenuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BinKitchenMenu findFirstOrThrow
   */
  export type BinKitchenMenuFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * Filter, which BinKitchenMenu to fetch.
     */
    where?: BinKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenMenus to fetch.
     */
    orderBy?: Enumerable<BinKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinKitchenMenus.
     */
    cursor?: BinKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinKitchenMenus.
     */
    distinct?: Enumerable<BinKitchenMenuScalarFieldEnum>
  }


  /**
   * BinKitchenMenu findMany
   */
  export type BinKitchenMenuFindManyArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * Filter, which BinKitchenMenus to fetch.
     */
    where?: BinKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenMenus to fetch.
     */
    orderBy?: Enumerable<BinKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BinKitchenMenus.
     */
    cursor?: BinKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenMenus.
     */
    skip?: number
    distinct?: Enumerable<BinKitchenMenuScalarFieldEnum>
  }


  /**
   * BinKitchenMenu create
   */
  export type BinKitchenMenuCreateArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * The data needed to create a BinKitchenMenu.
     */
    data: XOR<BinKitchenMenuCreateInput, BinKitchenMenuUncheckedCreateInput>
  }


  /**
   * BinKitchenMenu createMany
   */
  export type BinKitchenMenuCreateManyArgs = {
    /**
     * The data used to create many BinKitchenMenus.
     */
    data: Enumerable<BinKitchenMenuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BinKitchenMenu update
   */
  export type BinKitchenMenuUpdateArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * The data needed to update a BinKitchenMenu.
     */
    data: XOR<BinKitchenMenuUpdateInput, BinKitchenMenuUncheckedUpdateInput>
    /**
     * Choose, which BinKitchenMenu to update.
     */
    where: BinKitchenMenuWhereUniqueInput
  }


  /**
   * BinKitchenMenu updateMany
   */
  export type BinKitchenMenuUpdateManyArgs = {
    /**
     * The data used to update BinKitchenMenus.
     */
    data: XOR<BinKitchenMenuUpdateManyMutationInput, BinKitchenMenuUncheckedUpdateManyInput>
    /**
     * Filter which BinKitchenMenus to update
     */
    where?: BinKitchenMenuWhereInput
  }


  /**
   * BinKitchenMenu upsert
   */
  export type BinKitchenMenuUpsertArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * The filter to search for the BinKitchenMenu to update in case it exists.
     */
    where: BinKitchenMenuWhereUniqueInput
    /**
     * In case the BinKitchenMenu found by the `where` argument doesn't exist, create a new BinKitchenMenu with this data.
     */
    create: XOR<BinKitchenMenuCreateInput, BinKitchenMenuUncheckedCreateInput>
    /**
     * In case the BinKitchenMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinKitchenMenuUpdateInput, BinKitchenMenuUncheckedUpdateInput>
  }


  /**
   * BinKitchenMenu delete
   */
  export type BinKitchenMenuDeleteArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
    /**
     * Filter which BinKitchenMenu to delete.
     */
    where: BinKitchenMenuWhereUniqueInput
  }


  /**
   * BinKitchenMenu deleteMany
   */
  export type BinKitchenMenuDeleteManyArgs = {
    /**
     * Filter which BinKitchenMenus to delete
     */
    where?: BinKitchenMenuWhereInput
  }


  /**
   * BinKitchenMenu.orderItems
   */
  export type BinKitchenMenu$orderItemsArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    where?: BinKitchenOrderItemWhereInput
    orderBy?: Enumerable<BinKitchenOrderItemOrderByWithRelationInput>
    cursor?: BinKitchenOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BinKitchenOrderItemScalarFieldEnum>
  }


  /**
   * BinKitchenMenu without action
   */
  export type BinKitchenMenuArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenMenu
     */
    select?: BinKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenMenuInclude | null
  }



  /**
   * Model BinKitchenOrder
   */


  export type AggregateBinKitchenOrder = {
    _count: BinKitchenOrderCountAggregateOutputType | null
    _avg: BinKitchenOrderAvgAggregateOutputType | null
    _sum: BinKitchenOrderSumAggregateOutputType | null
    _min: BinKitchenOrderMinAggregateOutputType | null
    _max: BinKitchenOrderMaxAggregateOutputType | null
  }

  export type BinKitchenOrderAvgAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type BinKitchenOrderSumAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type BinKitchenOrderMinAggregateOutputType = {
    id: number | null
    status: string | null
    tableId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinKitchenOrderMaxAggregateOutputType = {
    id: number | null
    status: string | null
    tableId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinKitchenOrderCountAggregateOutputType = {
    id: number
    status: number
    tableId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BinKitchenOrderAvgAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type BinKitchenOrderSumAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type BinKitchenOrderMinAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinKitchenOrderMaxAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinKitchenOrderCountAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BinKitchenOrderAggregateArgs = {
    /**
     * Filter which BinKitchenOrder to aggregate.
     */
    where?: BinKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenOrders to fetch.
     */
    orderBy?: Enumerable<BinKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BinKitchenOrders
    **/
    _count?: true | BinKitchenOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinKitchenOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinKitchenOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinKitchenOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinKitchenOrderMaxAggregateInputType
  }

  export type GetBinKitchenOrderAggregateType<T extends BinKitchenOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateBinKitchenOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinKitchenOrder[P]>
      : GetScalarType<T[P], AggregateBinKitchenOrder[P]>
  }




  export type BinKitchenOrderGroupByArgs = {
    where?: BinKitchenOrderWhereInput
    orderBy?: Enumerable<BinKitchenOrderOrderByWithAggregationInput>
    by: BinKitchenOrderScalarFieldEnum[]
    having?: BinKitchenOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinKitchenOrderCountAggregateInputType | true
    _avg?: BinKitchenOrderAvgAggregateInputType
    _sum?: BinKitchenOrderSumAggregateInputType
    _min?: BinKitchenOrderMinAggregateInputType
    _max?: BinKitchenOrderMaxAggregateInputType
  }


  export type BinKitchenOrderGroupByOutputType = {
    id: number
    status: string
    tableId: number
    createdAt: Date
    updatedAt: Date
    _count: BinKitchenOrderCountAggregateOutputType | null
    _avg: BinKitchenOrderAvgAggregateOutputType | null
    _sum: BinKitchenOrderSumAggregateOutputType | null
    _min: BinKitchenOrderMinAggregateOutputType | null
    _max: BinKitchenOrderMaxAggregateOutputType | null
  }

  type GetBinKitchenOrderGroupByPayload<T extends BinKitchenOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BinKitchenOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinKitchenOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinKitchenOrderGroupByOutputType[P]>
            : GetScalarType<T[P], BinKitchenOrderGroupByOutputType[P]>
        }
      >
    >


  export type BinKitchenOrderSelect = {
    id?: boolean
    status?: boolean
    tableId?: boolean
    items?: boolean | BinKitchenOrder$itemsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | BinKitchenOrderCountOutputTypeArgs
  }


  export type BinKitchenOrderInclude = {
    items?: boolean | BinKitchenOrder$itemsArgs
    _count?: boolean | BinKitchenOrderCountOutputTypeArgs
  }

  export type BinKitchenOrderGetPayload<S extends boolean | null | undefined | BinKitchenOrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenOrder :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenOrderArgs | BinKitchenOrderFindManyArgs)
    ? BinKitchenOrder  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'items' ? Array < BinKitchenOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? BinKitchenOrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BinKitchenOrderArgs | BinKitchenOrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'items' ? Array < BinKitchenOrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? BinKitchenOrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BinKitchenOrder ? BinKitchenOrder[P] : never
  } 
      : BinKitchenOrder


  type BinKitchenOrderCountArgs = 
    Omit<BinKitchenOrderFindManyArgs, 'select' | 'include'> & {
      select?: BinKitchenOrderCountAggregateInputType | true
    }

  export interface BinKitchenOrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BinKitchenOrder that matches the filter.
     * @param {BinKitchenOrderFindUniqueArgs} args - Arguments to find a BinKitchenOrder
     * @example
     * // Get one BinKitchenOrder
     * const binKitchenOrder = await prisma.binKitchenOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BinKitchenOrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BinKitchenOrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BinKitchenOrder'> extends True ? Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T>> : Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T> | null, null>

    /**
     * Find one BinKitchenOrder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BinKitchenOrderFindUniqueOrThrowArgs} args - Arguments to find a BinKitchenOrder
     * @example
     * // Get one BinKitchenOrder
     * const binKitchenOrder = await prisma.binKitchenOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BinKitchenOrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BinKitchenOrderFindUniqueOrThrowArgs>
    ): Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T>>

    /**
     * Find the first BinKitchenOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderFindFirstArgs} args - Arguments to find a BinKitchenOrder
     * @example
     * // Get one BinKitchenOrder
     * const binKitchenOrder = await prisma.binKitchenOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BinKitchenOrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BinKitchenOrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BinKitchenOrder'> extends True ? Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T>> : Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T> | null, null>

    /**
     * Find the first BinKitchenOrder that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderFindFirstOrThrowArgs} args - Arguments to find a BinKitchenOrder
     * @example
     * // Get one BinKitchenOrder
     * const binKitchenOrder = await prisma.binKitchenOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BinKitchenOrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BinKitchenOrderFindFirstOrThrowArgs>
    ): Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T>>

    /**
     * Find zero or more BinKitchenOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BinKitchenOrders
     * const binKitchenOrders = await prisma.binKitchenOrder.findMany()
     * 
     * // Get first 10 BinKitchenOrders
     * const binKitchenOrders = await prisma.binKitchenOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binKitchenOrderWithIdOnly = await prisma.binKitchenOrder.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BinKitchenOrderFindManyArgs>(
      args?: SelectSubset<T, BinKitchenOrderFindManyArgs>
    ): Prisma.PrismaPromise<Array<BinKitchenOrderGetPayload<T>>>

    /**
     * Create a BinKitchenOrder.
     * @param {BinKitchenOrderCreateArgs} args - Arguments to create a BinKitchenOrder.
     * @example
     * // Create one BinKitchenOrder
     * const BinKitchenOrder = await prisma.binKitchenOrder.create({
     *   data: {
     *     // ... data to create a BinKitchenOrder
     *   }
     * })
     * 
    **/
    create<T extends BinKitchenOrderCreateArgs>(
      args: SelectSubset<T, BinKitchenOrderCreateArgs>
    ): Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T>>

    /**
     * Create many BinKitchenOrders.
     *     @param {BinKitchenOrderCreateManyArgs} args - Arguments to create many BinKitchenOrders.
     *     @example
     *     // Create many BinKitchenOrders
     *     const binKitchenOrder = await prisma.binKitchenOrder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BinKitchenOrderCreateManyArgs>(
      args?: SelectSubset<T, BinKitchenOrderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BinKitchenOrder.
     * @param {BinKitchenOrderDeleteArgs} args - Arguments to delete one BinKitchenOrder.
     * @example
     * // Delete one BinKitchenOrder
     * const BinKitchenOrder = await prisma.binKitchenOrder.delete({
     *   where: {
     *     // ... filter to delete one BinKitchenOrder
     *   }
     * })
     * 
    **/
    delete<T extends BinKitchenOrderDeleteArgs>(
      args: SelectSubset<T, BinKitchenOrderDeleteArgs>
    ): Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T>>

    /**
     * Update one BinKitchenOrder.
     * @param {BinKitchenOrderUpdateArgs} args - Arguments to update one BinKitchenOrder.
     * @example
     * // Update one BinKitchenOrder
     * const binKitchenOrder = await prisma.binKitchenOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BinKitchenOrderUpdateArgs>(
      args: SelectSubset<T, BinKitchenOrderUpdateArgs>
    ): Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T>>

    /**
     * Delete zero or more BinKitchenOrders.
     * @param {BinKitchenOrderDeleteManyArgs} args - Arguments to filter BinKitchenOrders to delete.
     * @example
     * // Delete a few BinKitchenOrders
     * const { count } = await prisma.binKitchenOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BinKitchenOrderDeleteManyArgs>(
      args?: SelectSubset<T, BinKitchenOrderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BinKitchenOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BinKitchenOrders
     * const binKitchenOrder = await prisma.binKitchenOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BinKitchenOrderUpdateManyArgs>(
      args: SelectSubset<T, BinKitchenOrderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BinKitchenOrder.
     * @param {BinKitchenOrderUpsertArgs} args - Arguments to update or create a BinKitchenOrder.
     * @example
     * // Update or create a BinKitchenOrder
     * const binKitchenOrder = await prisma.binKitchenOrder.upsert({
     *   create: {
     *     // ... data to create a BinKitchenOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BinKitchenOrder we want to update
     *   }
     * })
    **/
    upsert<T extends BinKitchenOrderUpsertArgs>(
      args: SelectSubset<T, BinKitchenOrderUpsertArgs>
    ): Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T>>

    /**
     * Count the number of BinKitchenOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderCountArgs} args - Arguments to filter BinKitchenOrders to count.
     * @example
     * // Count the number of BinKitchenOrders
     * const count = await prisma.binKitchenOrder.count({
     *   where: {
     *     // ... the filter for the BinKitchenOrders we want to count
     *   }
     * })
    **/
    count<T extends BinKitchenOrderCountArgs>(
      args?: Subset<T, BinKitchenOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinKitchenOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BinKitchenOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BinKitchenOrderAggregateArgs>(args: Subset<T, BinKitchenOrderAggregateArgs>): Prisma.PrismaPromise<GetBinKitchenOrderAggregateType<T>>

    /**
     * Group by BinKitchenOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BinKitchenOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinKitchenOrderGroupByArgs['orderBy'] }
        : { orderBy?: BinKitchenOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BinKitchenOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinKitchenOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BinKitchenOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BinKitchenOrderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    items<T extends BinKitchenOrder$itemsArgs= {}>(args?: Subset<T, BinKitchenOrder$itemsArgs>): Prisma.PrismaPromise<Array<BinKitchenOrderItemGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BinKitchenOrder base type for findUnique actions
   */
  export type BinKitchenOrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * Filter, which BinKitchenOrder to fetch.
     */
    where: BinKitchenOrderWhereUniqueInput
  }

  /**
   * BinKitchenOrder findUnique
   */
  export interface BinKitchenOrderFindUniqueArgs extends BinKitchenOrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BinKitchenOrder findUniqueOrThrow
   */
  export type BinKitchenOrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * Filter, which BinKitchenOrder to fetch.
     */
    where: BinKitchenOrderWhereUniqueInput
  }


  /**
   * BinKitchenOrder base type for findFirst actions
   */
  export type BinKitchenOrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * Filter, which BinKitchenOrder to fetch.
     */
    where?: BinKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenOrders to fetch.
     */
    orderBy?: Enumerable<BinKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinKitchenOrders.
     */
    cursor?: BinKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinKitchenOrders.
     */
    distinct?: Enumerable<BinKitchenOrderScalarFieldEnum>
  }

  /**
   * BinKitchenOrder findFirst
   */
  export interface BinKitchenOrderFindFirstArgs extends BinKitchenOrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BinKitchenOrder findFirstOrThrow
   */
  export type BinKitchenOrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * Filter, which BinKitchenOrder to fetch.
     */
    where?: BinKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenOrders to fetch.
     */
    orderBy?: Enumerable<BinKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinKitchenOrders.
     */
    cursor?: BinKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinKitchenOrders.
     */
    distinct?: Enumerable<BinKitchenOrderScalarFieldEnum>
  }


  /**
   * BinKitchenOrder findMany
   */
  export type BinKitchenOrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * Filter, which BinKitchenOrders to fetch.
     */
    where?: BinKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenOrders to fetch.
     */
    orderBy?: Enumerable<BinKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BinKitchenOrders.
     */
    cursor?: BinKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenOrders.
     */
    skip?: number
    distinct?: Enumerable<BinKitchenOrderScalarFieldEnum>
  }


  /**
   * BinKitchenOrder create
   */
  export type BinKitchenOrderCreateArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * The data needed to create a BinKitchenOrder.
     */
    data: XOR<BinKitchenOrderCreateInput, BinKitchenOrderUncheckedCreateInput>
  }


  /**
   * BinKitchenOrder createMany
   */
  export type BinKitchenOrderCreateManyArgs = {
    /**
     * The data used to create many BinKitchenOrders.
     */
    data: Enumerable<BinKitchenOrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BinKitchenOrder update
   */
  export type BinKitchenOrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * The data needed to update a BinKitchenOrder.
     */
    data: XOR<BinKitchenOrderUpdateInput, BinKitchenOrderUncheckedUpdateInput>
    /**
     * Choose, which BinKitchenOrder to update.
     */
    where: BinKitchenOrderWhereUniqueInput
  }


  /**
   * BinKitchenOrder updateMany
   */
  export type BinKitchenOrderUpdateManyArgs = {
    /**
     * The data used to update BinKitchenOrders.
     */
    data: XOR<BinKitchenOrderUpdateManyMutationInput, BinKitchenOrderUncheckedUpdateManyInput>
    /**
     * Filter which BinKitchenOrders to update
     */
    where?: BinKitchenOrderWhereInput
  }


  /**
   * BinKitchenOrder upsert
   */
  export type BinKitchenOrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * The filter to search for the BinKitchenOrder to update in case it exists.
     */
    where: BinKitchenOrderWhereUniqueInput
    /**
     * In case the BinKitchenOrder found by the `where` argument doesn't exist, create a new BinKitchenOrder with this data.
     */
    create: XOR<BinKitchenOrderCreateInput, BinKitchenOrderUncheckedCreateInput>
    /**
     * In case the BinKitchenOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinKitchenOrderUpdateInput, BinKitchenOrderUncheckedUpdateInput>
  }


  /**
   * BinKitchenOrder delete
   */
  export type BinKitchenOrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
    /**
     * Filter which BinKitchenOrder to delete.
     */
    where: BinKitchenOrderWhereUniqueInput
  }


  /**
   * BinKitchenOrder deleteMany
   */
  export type BinKitchenOrderDeleteManyArgs = {
    /**
     * Filter which BinKitchenOrders to delete
     */
    where?: BinKitchenOrderWhereInput
  }


  /**
   * BinKitchenOrder.items
   */
  export type BinKitchenOrder$itemsArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    where?: BinKitchenOrderItemWhereInput
    orderBy?: Enumerable<BinKitchenOrderItemOrderByWithRelationInput>
    cursor?: BinKitchenOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BinKitchenOrderItemScalarFieldEnum>
  }


  /**
   * BinKitchenOrder without action
   */
  export type BinKitchenOrderArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrder
     */
    select?: BinKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderInclude | null
  }



  /**
   * Model BinKitchenOrderItem
   */


  export type AggregateBinKitchenOrderItem = {
    _count: BinKitchenOrderItemCountAggregateOutputType | null
    _avg: BinKitchenOrderItemAvgAggregateOutputType | null
    _sum: BinKitchenOrderItemSumAggregateOutputType | null
    _min: BinKitchenOrderItemMinAggregateOutputType | null
    _max: BinKitchenOrderItemMaxAggregateOutputType | null
  }

  export type BinKitchenOrderItemAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type BinKitchenOrderItemSumAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type BinKitchenOrderItemMinAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinKitchenOrderItemMaxAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BinKitchenOrderItemCountAggregateOutputType = {
    id: number
    menuId: number
    orderId: number
    quantity: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BinKitchenOrderItemAvgAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
  }

  export type BinKitchenOrderItemSumAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
  }

  export type BinKitchenOrderItemMinAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinKitchenOrderItemMaxAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BinKitchenOrderItemCountAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BinKitchenOrderItemAggregateArgs = {
    /**
     * Filter which BinKitchenOrderItem to aggregate.
     */
    where?: BinKitchenOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenOrderItems to fetch.
     */
    orderBy?: Enumerable<BinKitchenOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinKitchenOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BinKitchenOrderItems
    **/
    _count?: true | BinKitchenOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinKitchenOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinKitchenOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinKitchenOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinKitchenOrderItemMaxAggregateInputType
  }

  export type GetBinKitchenOrderItemAggregateType<T extends BinKitchenOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBinKitchenOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBinKitchenOrderItem[P]>
      : GetScalarType<T[P], AggregateBinKitchenOrderItem[P]>
  }




  export type BinKitchenOrderItemGroupByArgs = {
    where?: BinKitchenOrderItemWhereInput
    orderBy?: Enumerable<BinKitchenOrderItemOrderByWithAggregationInput>
    by: BinKitchenOrderItemScalarFieldEnum[]
    having?: BinKitchenOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinKitchenOrderItemCountAggregateInputType | true
    _avg?: BinKitchenOrderItemAvgAggregateInputType
    _sum?: BinKitchenOrderItemSumAggregateInputType
    _min?: BinKitchenOrderItemMinAggregateInputType
    _max?: BinKitchenOrderItemMaxAggregateInputType
  }


  export type BinKitchenOrderItemGroupByOutputType = {
    id: number
    menuId: number
    orderId: number | null
    quantity: number
    totalPrice: number
    createdAt: Date
    updatedAt: Date
    _count: BinKitchenOrderItemCountAggregateOutputType | null
    _avg: BinKitchenOrderItemAvgAggregateOutputType | null
    _sum: BinKitchenOrderItemSumAggregateOutputType | null
    _min: BinKitchenOrderItemMinAggregateOutputType | null
    _max: BinKitchenOrderItemMaxAggregateOutputType | null
  }

  type GetBinKitchenOrderItemGroupByPayload<T extends BinKitchenOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BinKitchenOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinKitchenOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinKitchenOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], BinKitchenOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type BinKitchenOrderItemSelect = {
    id?: boolean
    menu?: boolean | BinKitchenMenuArgs
    menuId?: boolean
    order?: boolean | BinKitchenOrderArgs
    orderId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type BinKitchenOrderItemInclude = {
    menu?: boolean | BinKitchenMenuArgs
    order?: boolean | BinKitchenOrderArgs
  }

  export type BinKitchenOrderItemGetPayload<S extends boolean | null | undefined | BinKitchenOrderItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenOrderItem :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenOrderItemArgs | BinKitchenOrderItemFindManyArgs)
    ? BinKitchenOrderItem  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu' ? BinKitchenMenuGetPayload<S['include'][P]> :
        P extends 'order' ? BinKitchenOrderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (BinKitchenOrderItemArgs | BinKitchenOrderItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu' ? BinKitchenMenuGetPayload<S['select'][P]> :
        P extends 'order' ? BinKitchenOrderGetPayload<S['select'][P]> | null :  P extends keyof BinKitchenOrderItem ? BinKitchenOrderItem[P] : never
  } 
      : BinKitchenOrderItem


  type BinKitchenOrderItemCountArgs = 
    Omit<BinKitchenOrderItemFindManyArgs, 'select' | 'include'> & {
      select?: BinKitchenOrderItemCountAggregateInputType | true
    }

  export interface BinKitchenOrderItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one BinKitchenOrderItem that matches the filter.
     * @param {BinKitchenOrderItemFindUniqueArgs} args - Arguments to find a BinKitchenOrderItem
     * @example
     * // Get one BinKitchenOrderItem
     * const binKitchenOrderItem = await prisma.binKitchenOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BinKitchenOrderItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BinKitchenOrderItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BinKitchenOrderItem'> extends True ? Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T>> : Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T> | null, null>

    /**
     * Find one BinKitchenOrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BinKitchenOrderItemFindUniqueOrThrowArgs} args - Arguments to find a BinKitchenOrderItem
     * @example
     * // Get one BinKitchenOrderItem
     * const binKitchenOrderItem = await prisma.binKitchenOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BinKitchenOrderItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BinKitchenOrderItemFindUniqueOrThrowArgs>
    ): Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T>>

    /**
     * Find the first BinKitchenOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderItemFindFirstArgs} args - Arguments to find a BinKitchenOrderItem
     * @example
     * // Get one BinKitchenOrderItem
     * const binKitchenOrderItem = await prisma.binKitchenOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BinKitchenOrderItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BinKitchenOrderItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BinKitchenOrderItem'> extends True ? Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T>> : Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T> | null, null>

    /**
     * Find the first BinKitchenOrderItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderItemFindFirstOrThrowArgs} args - Arguments to find a BinKitchenOrderItem
     * @example
     * // Get one BinKitchenOrderItem
     * const binKitchenOrderItem = await prisma.binKitchenOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BinKitchenOrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BinKitchenOrderItemFindFirstOrThrowArgs>
    ): Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T>>

    /**
     * Find zero or more BinKitchenOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BinKitchenOrderItems
     * const binKitchenOrderItems = await prisma.binKitchenOrderItem.findMany()
     * 
     * // Get first 10 BinKitchenOrderItems
     * const binKitchenOrderItems = await prisma.binKitchenOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const binKitchenOrderItemWithIdOnly = await prisma.binKitchenOrderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BinKitchenOrderItemFindManyArgs>(
      args?: SelectSubset<T, BinKitchenOrderItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<BinKitchenOrderItemGetPayload<T>>>

    /**
     * Create a BinKitchenOrderItem.
     * @param {BinKitchenOrderItemCreateArgs} args - Arguments to create a BinKitchenOrderItem.
     * @example
     * // Create one BinKitchenOrderItem
     * const BinKitchenOrderItem = await prisma.binKitchenOrderItem.create({
     *   data: {
     *     // ... data to create a BinKitchenOrderItem
     *   }
     * })
     * 
    **/
    create<T extends BinKitchenOrderItemCreateArgs>(
      args: SelectSubset<T, BinKitchenOrderItemCreateArgs>
    ): Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T>>

    /**
     * Create many BinKitchenOrderItems.
     *     @param {BinKitchenOrderItemCreateManyArgs} args - Arguments to create many BinKitchenOrderItems.
     *     @example
     *     // Create many BinKitchenOrderItems
     *     const binKitchenOrderItem = await prisma.binKitchenOrderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BinKitchenOrderItemCreateManyArgs>(
      args?: SelectSubset<T, BinKitchenOrderItemCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BinKitchenOrderItem.
     * @param {BinKitchenOrderItemDeleteArgs} args - Arguments to delete one BinKitchenOrderItem.
     * @example
     * // Delete one BinKitchenOrderItem
     * const BinKitchenOrderItem = await prisma.binKitchenOrderItem.delete({
     *   where: {
     *     // ... filter to delete one BinKitchenOrderItem
     *   }
     * })
     * 
    **/
    delete<T extends BinKitchenOrderItemDeleteArgs>(
      args: SelectSubset<T, BinKitchenOrderItemDeleteArgs>
    ): Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T>>

    /**
     * Update one BinKitchenOrderItem.
     * @param {BinKitchenOrderItemUpdateArgs} args - Arguments to update one BinKitchenOrderItem.
     * @example
     * // Update one BinKitchenOrderItem
     * const binKitchenOrderItem = await prisma.binKitchenOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BinKitchenOrderItemUpdateArgs>(
      args: SelectSubset<T, BinKitchenOrderItemUpdateArgs>
    ): Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T>>

    /**
     * Delete zero or more BinKitchenOrderItems.
     * @param {BinKitchenOrderItemDeleteManyArgs} args - Arguments to filter BinKitchenOrderItems to delete.
     * @example
     * // Delete a few BinKitchenOrderItems
     * const { count } = await prisma.binKitchenOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BinKitchenOrderItemDeleteManyArgs>(
      args?: SelectSubset<T, BinKitchenOrderItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BinKitchenOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BinKitchenOrderItems
     * const binKitchenOrderItem = await prisma.binKitchenOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BinKitchenOrderItemUpdateManyArgs>(
      args: SelectSubset<T, BinKitchenOrderItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BinKitchenOrderItem.
     * @param {BinKitchenOrderItemUpsertArgs} args - Arguments to update or create a BinKitchenOrderItem.
     * @example
     * // Update or create a BinKitchenOrderItem
     * const binKitchenOrderItem = await prisma.binKitchenOrderItem.upsert({
     *   create: {
     *     // ... data to create a BinKitchenOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BinKitchenOrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends BinKitchenOrderItemUpsertArgs>(
      args: SelectSubset<T, BinKitchenOrderItemUpsertArgs>
    ): Prisma__BinKitchenOrderItemClient<BinKitchenOrderItemGetPayload<T>>

    /**
     * Count the number of BinKitchenOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderItemCountArgs} args - Arguments to filter BinKitchenOrderItems to count.
     * @example
     * // Count the number of BinKitchenOrderItems
     * const count = await prisma.binKitchenOrderItem.count({
     *   where: {
     *     // ... the filter for the BinKitchenOrderItems we want to count
     *   }
     * })
    **/
    count<T extends BinKitchenOrderItemCountArgs>(
      args?: Subset<T, BinKitchenOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinKitchenOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BinKitchenOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BinKitchenOrderItemAggregateArgs>(args: Subset<T, BinKitchenOrderItemAggregateArgs>): Prisma.PrismaPromise<GetBinKitchenOrderItemAggregateType<T>>

    /**
     * Group by BinKitchenOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinKitchenOrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BinKitchenOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinKitchenOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: BinKitchenOrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BinKitchenOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinKitchenOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BinKitchenOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BinKitchenOrderItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    menu<T extends BinKitchenMenuArgs= {}>(args?: Subset<T, BinKitchenMenuArgs>): Prisma__BinKitchenMenuClient<BinKitchenMenuGetPayload<T> | Null>;

    order<T extends BinKitchenOrderArgs= {}>(args?: Subset<T, BinKitchenOrderArgs>): Prisma__BinKitchenOrderClient<BinKitchenOrderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BinKitchenOrderItem base type for findUnique actions
   */
  export type BinKitchenOrderItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * Filter, which BinKitchenOrderItem to fetch.
     */
    where: BinKitchenOrderItemWhereUniqueInput
  }

  /**
   * BinKitchenOrderItem findUnique
   */
  export interface BinKitchenOrderItemFindUniqueArgs extends BinKitchenOrderItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BinKitchenOrderItem findUniqueOrThrow
   */
  export type BinKitchenOrderItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * Filter, which BinKitchenOrderItem to fetch.
     */
    where: BinKitchenOrderItemWhereUniqueInput
  }


  /**
   * BinKitchenOrderItem base type for findFirst actions
   */
  export type BinKitchenOrderItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * Filter, which BinKitchenOrderItem to fetch.
     */
    where?: BinKitchenOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenOrderItems to fetch.
     */
    orderBy?: Enumerable<BinKitchenOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinKitchenOrderItems.
     */
    cursor?: BinKitchenOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinKitchenOrderItems.
     */
    distinct?: Enumerable<BinKitchenOrderItemScalarFieldEnum>
  }

  /**
   * BinKitchenOrderItem findFirst
   */
  export interface BinKitchenOrderItemFindFirstArgs extends BinKitchenOrderItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BinKitchenOrderItem findFirstOrThrow
   */
  export type BinKitchenOrderItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * Filter, which BinKitchenOrderItem to fetch.
     */
    where?: BinKitchenOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenOrderItems to fetch.
     */
    orderBy?: Enumerable<BinKitchenOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BinKitchenOrderItems.
     */
    cursor?: BinKitchenOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BinKitchenOrderItems.
     */
    distinct?: Enumerable<BinKitchenOrderItemScalarFieldEnum>
  }


  /**
   * BinKitchenOrderItem findMany
   */
  export type BinKitchenOrderItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * Filter, which BinKitchenOrderItems to fetch.
     */
    where?: BinKitchenOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BinKitchenOrderItems to fetch.
     */
    orderBy?: Enumerable<BinKitchenOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BinKitchenOrderItems.
     */
    cursor?: BinKitchenOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BinKitchenOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BinKitchenOrderItems.
     */
    skip?: number
    distinct?: Enumerable<BinKitchenOrderItemScalarFieldEnum>
  }


  /**
   * BinKitchenOrderItem create
   */
  export type BinKitchenOrderItemCreateArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * The data needed to create a BinKitchenOrderItem.
     */
    data: XOR<BinKitchenOrderItemCreateInput, BinKitchenOrderItemUncheckedCreateInput>
  }


  /**
   * BinKitchenOrderItem createMany
   */
  export type BinKitchenOrderItemCreateManyArgs = {
    /**
     * The data used to create many BinKitchenOrderItems.
     */
    data: Enumerable<BinKitchenOrderItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BinKitchenOrderItem update
   */
  export type BinKitchenOrderItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * The data needed to update a BinKitchenOrderItem.
     */
    data: XOR<BinKitchenOrderItemUpdateInput, BinKitchenOrderItemUncheckedUpdateInput>
    /**
     * Choose, which BinKitchenOrderItem to update.
     */
    where: BinKitchenOrderItemWhereUniqueInput
  }


  /**
   * BinKitchenOrderItem updateMany
   */
  export type BinKitchenOrderItemUpdateManyArgs = {
    /**
     * The data used to update BinKitchenOrderItems.
     */
    data: XOR<BinKitchenOrderItemUpdateManyMutationInput, BinKitchenOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which BinKitchenOrderItems to update
     */
    where?: BinKitchenOrderItemWhereInput
  }


  /**
   * BinKitchenOrderItem upsert
   */
  export type BinKitchenOrderItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * The filter to search for the BinKitchenOrderItem to update in case it exists.
     */
    where: BinKitchenOrderItemWhereUniqueInput
    /**
     * In case the BinKitchenOrderItem found by the `where` argument doesn't exist, create a new BinKitchenOrderItem with this data.
     */
    create: XOR<BinKitchenOrderItemCreateInput, BinKitchenOrderItemUncheckedCreateInput>
    /**
     * In case the BinKitchenOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinKitchenOrderItemUpdateInput, BinKitchenOrderItemUncheckedUpdateInput>
  }


  /**
   * BinKitchenOrderItem delete
   */
  export type BinKitchenOrderItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
    /**
     * Filter which BinKitchenOrderItem to delete.
     */
    where: BinKitchenOrderItemWhereUniqueInput
  }


  /**
   * BinKitchenOrderItem deleteMany
   */
  export type BinKitchenOrderItemDeleteManyArgs = {
    /**
     * Filter which BinKitchenOrderItems to delete
     */
    where?: BinKitchenOrderItemWhereInput
  }


  /**
   * BinKitchenOrderItem without action
   */
  export type BinKitchenOrderItemArgs = {
    /**
     * Select specific fields to fetch from the BinKitchenOrderItem
     */
    select?: BinKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BinKitchenOrderItemInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    updateAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    question?: boolean | Category$questionArgs
    round?: boolean | Category$roundArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    question?: boolean | Category$questionArgs
    round?: boolean | Category$roundArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'question' ? Array < QuestionGetPayload<S['include'][P]>>  :
        P extends 'round' ? Array < RoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'question' ? Array < QuestionGetPayload<S['select'][P]>>  :
        P extends 'round' ? Array < RoundGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    question<T extends Category$questionArgs= {}>(args?: Subset<T, Category$questionArgs>): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>| Null>;

    round<T extends Category$roundArgs= {}>(args?: Subset<T, Category$roundArgs>): Prisma.PrismaPromise<Array<RoundGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.question
   */
  export type Category$questionArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    where?: QuestionWhereInput
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Category.round
   */
  export type Category$roundArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    where?: RoundWhereInput
    orderBy?: Enumerable<RoundOrderByWithRelationInput>
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
  }



  /**
   * Model Question
   */


  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    categoriesId: number | null
    roundQuestionId: number | null
    answerId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    categoriesId: number | null
    roundQuestionId: number | null
    answerId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    name: string | null
    categoriesId: number | null
    roundQuestionId: number | null
    answerId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    categoriesId: number | null
    roundQuestionId: number | null
    answerId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    name: number
    categoriesId: number
    roundQuestionId: number
    answerId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    categoriesId?: true
    roundQuestionId?: true
    answerId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    categoriesId?: true
    roundQuestionId?: true
    answerId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    name?: true
    categoriesId?: true
    roundQuestionId?: true
    answerId?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    name?: true
    categoriesId?: true
    roundQuestionId?: true
    answerId?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    name?: true
    categoriesId?: true
    roundQuestionId?: true
    answerId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs = {
    where?: QuestionWhereInput
    orderBy?: Enumerable<QuestionOrderByWithAggregationInput>
    by: QuestionScalarFieldEnum[]
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }


  export type QuestionGroupByOutputType = {
    id: number
    name: string
    categoriesId: number
    roundQuestionId: number
    answerId: number
    createAt: Date
    updateAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect = {
    id?: boolean
    name?: boolean
    categories?: boolean | CategoryArgs
    categoriesId?: boolean
    roundQuestion?: boolean | RoundQuestionArgs
    roundQuestionId?: boolean
    choices?: boolean | Question$choicesArgs
    answerId?: boolean
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | QuestionCountOutputTypeArgs
  }


  export type QuestionInclude = {
    categories?: boolean | CategoryArgs
    roundQuestion?: boolean | RoundQuestionArgs
    choices?: boolean | Question$choicesArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }

  export type QuestionGetPayload<S extends boolean | null | undefined | QuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Question :
    S extends undefined ? never :
    S extends { include: any } & (QuestionArgs | QuestionFindManyArgs)
    ? Question  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'categories' ? CategoryGetPayload<S['include'][P]> :
        P extends 'roundQuestion' ? RoundQuestionGetPayload<S['include'][P]> :
        P extends 'choices' ? Array < ChoiceGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuestionArgs | QuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'categories' ? CategoryGetPayload<S['select'][P]> :
        P extends 'roundQuestion' ? RoundQuestionGetPayload<S['select'][P]> :
        P extends 'choices' ? Array < ChoiceGetPayload<S['select'][P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Question ? Question[P] : never
  } 
      : Question


  type QuestionCountArgs = 
    Omit<QuestionFindManyArgs, 'select' | 'include'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Question'> extends True ? Prisma__QuestionClient<QuestionGetPayload<T>> : Prisma__QuestionClient<QuestionGetPayload<T> | null, null>

    /**
     * Find one Question that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuestionFindUniqueOrThrowArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Question'> extends True ? Prisma__QuestionClient<QuestionGetPayload<T>> : Prisma__QuestionClient<QuestionGetPayload<T> | null, null>

    /**
     * Find the first Question that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionFindFirstOrThrowArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionFindManyArgs>(
      args?: SelectSubset<T, QuestionFindManyArgs>
    ): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
    **/
    create<T extends QuestionCreateArgs>(
      args: SelectSubset<T, QuestionCreateArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Create many Questions.
     *     @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const question = await prisma.question.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionCreateManyArgs>(
      args?: SelectSubset<T, QuestionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
    **/
    delete<T extends QuestionDeleteArgs>(
      args: SelectSubset<T, QuestionDeleteArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionUpdateArgs>(
      args: SelectSubset<T, QuestionUpdateArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionDeleteManyArgs>(
      args?: SelectSubset<T, QuestionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionUpdateManyArgs>(
      args: SelectSubset<T, QuestionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionUpsertArgs>(
      args: SelectSubset<T, QuestionUpsertArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    categories<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    roundQuestion<T extends RoundQuestionArgs= {}>(args?: Subset<T, RoundQuestionArgs>): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T> | Null>;

    choices<T extends Question$choicesArgs= {}>(args?: Subset<T, Question$choicesArgs>): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Question base type for findUnique actions
   */
  export type QuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUnique
   */
  export interface QuestionFindUniqueArgs extends QuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question base type for findFirst actions
   */
  export type QuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }

  /**
   * Question findFirst
   */
  export interface QuestionFindFirstArgs extends QuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question findMany
   */
  export type QuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question create
   */
  export type QuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }


  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs = {
    /**
     * The data used to create many Questions.
     */
    data: Enumerable<QuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Question update
   */
  export type QuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }


  /**
   * Question upsert
   */
  export type QuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }


  /**
   * Question delete
   */
  export type QuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }


  /**
   * Question.choices
   */
  export type Question$choicesArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    where?: ChoiceWhereInput
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>
    cursor?: ChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChoiceScalarFieldEnum>
  }


  /**
   * Question without action
   */
  export type QuestionArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
  }



  /**
   * Model RoundQuestion
   */


  export type AggregateRoundQuestion = {
    _count: RoundQuestionCountAggregateOutputType | null
    _avg: RoundQuestionAvgAggregateOutputType | null
    _sum: RoundQuestionSumAggregateOutputType | null
    _min: RoundQuestionMinAggregateOutputType | null
    _max: RoundQuestionMaxAggregateOutputType | null
  }

  export type RoundQuestionAvgAggregateOutputType = {
    id: number | null
    roundId: number | null
    choiceId: number | null
  }

  export type RoundQuestionSumAggregateOutputType = {
    id: number | null
    roundId: number | null
    choiceId: number | null
  }

  export type RoundQuestionMinAggregateOutputType = {
    id: number | null
    roundId: number | null
    correctAnswer: boolean | null
    createAt: Date | null
    updateAt: Date | null
    choiceId: number | null
  }

  export type RoundQuestionMaxAggregateOutputType = {
    id: number | null
    roundId: number | null
    correctAnswer: boolean | null
    createAt: Date | null
    updateAt: Date | null
    choiceId: number | null
  }

  export type RoundQuestionCountAggregateOutputType = {
    id: number
    roundId: number
    correctAnswer: number
    createAt: number
    updateAt: number
    choiceId: number
    _all: number
  }


  export type RoundQuestionAvgAggregateInputType = {
    id?: true
    roundId?: true
    choiceId?: true
  }

  export type RoundQuestionSumAggregateInputType = {
    id?: true
    roundId?: true
    choiceId?: true
  }

  export type RoundQuestionMinAggregateInputType = {
    id?: true
    roundId?: true
    correctAnswer?: true
    createAt?: true
    updateAt?: true
    choiceId?: true
  }

  export type RoundQuestionMaxAggregateInputType = {
    id?: true
    roundId?: true
    correctAnswer?: true
    createAt?: true
    updateAt?: true
    choiceId?: true
  }

  export type RoundQuestionCountAggregateInputType = {
    id?: true
    roundId?: true
    correctAnswer?: true
    createAt?: true
    updateAt?: true
    choiceId?: true
    _all?: true
  }

  export type RoundQuestionAggregateArgs = {
    /**
     * Filter which RoundQuestion to aggregate.
     */
    where?: RoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuestions to fetch.
     */
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoundQuestions
    **/
    _count?: true | RoundQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundQuestionMaxAggregateInputType
  }

  export type GetRoundQuestionAggregateType<T extends RoundQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateRoundQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundQuestion[P]>
      : GetScalarType<T[P], AggregateRoundQuestion[P]>
  }




  export type RoundQuestionGroupByArgs = {
    where?: RoundQuestionWhereInput
    orderBy?: Enumerable<RoundQuestionOrderByWithAggregationInput>
    by: RoundQuestionScalarFieldEnum[]
    having?: RoundQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundQuestionCountAggregateInputType | true
    _avg?: RoundQuestionAvgAggregateInputType
    _sum?: RoundQuestionSumAggregateInputType
    _min?: RoundQuestionMinAggregateInputType
    _max?: RoundQuestionMaxAggregateInputType
  }


  export type RoundQuestionGroupByOutputType = {
    id: number
    roundId: number
    correctAnswer: boolean
    createAt: Date
    updateAt: Date
    choiceId: number
    _count: RoundQuestionCountAggregateOutputType | null
    _avg: RoundQuestionAvgAggregateOutputType | null
    _sum: RoundQuestionSumAggregateOutputType | null
    _min: RoundQuestionMinAggregateOutputType | null
    _max: RoundQuestionMaxAggregateOutputType | null
  }

  type GetRoundQuestionGroupByPayload<T extends RoundQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoundQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], RoundQuestionGroupByOutputType[P]>
        }
      >
    >


  export type RoundQuestionSelect = {
    id?: boolean
    question?: boolean | RoundQuestion$questionArgs
    round?: boolean | RoundArgs
    roundId?: boolean
    choice?: boolean | ChoiceArgs
    correctAnswer?: boolean
    createAt?: boolean
    updateAt?: boolean
    choiceId?: boolean
    _count?: boolean | RoundQuestionCountOutputTypeArgs
  }


  export type RoundQuestionInclude = {
    question?: boolean | RoundQuestion$questionArgs
    round?: boolean | RoundArgs
    choice?: boolean | ChoiceArgs
    _count?: boolean | RoundQuestionCountOutputTypeArgs
  }

  export type RoundQuestionGetPayload<S extends boolean | null | undefined | RoundQuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundQuestion :
    S extends undefined ? never :
    S extends { include: any } & (RoundQuestionArgs | RoundQuestionFindManyArgs)
    ? RoundQuestion  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'question' ? Array < QuestionGetPayload<S['include'][P]>>  :
        P extends 'round' ? RoundGetPayload<S['include'][P]> :
        P extends 'choice' ? ChoiceGetPayload<S['include'][P]> :
        P extends '_count' ? RoundQuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundQuestionArgs | RoundQuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'question' ? Array < QuestionGetPayload<S['select'][P]>>  :
        P extends 'round' ? RoundGetPayload<S['select'][P]> :
        P extends 'choice' ? ChoiceGetPayload<S['select'][P]> :
        P extends '_count' ? RoundQuestionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RoundQuestion ? RoundQuestion[P] : never
  } 
      : RoundQuestion


  type RoundQuestionCountArgs = 
    Omit<RoundQuestionFindManyArgs, 'select' | 'include'> & {
      select?: RoundQuestionCountAggregateInputType | true
    }

  export interface RoundQuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoundQuestion that matches the filter.
     * @param {RoundQuestionFindUniqueArgs} args - Arguments to find a RoundQuestion
     * @example
     * // Get one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoundQuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoundQuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoundQuestion'> extends True ? Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>> : Prisma__RoundQuestionClient<RoundQuestionGetPayload<T> | null, null>

    /**
     * Find one RoundQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoundQuestionFindUniqueOrThrowArgs} args - Arguments to find a RoundQuestion
     * @example
     * // Get one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoundQuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundQuestionFindUniqueOrThrowArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Find the first RoundQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionFindFirstArgs} args - Arguments to find a RoundQuestion
     * @example
     * // Get one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoundQuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoundQuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoundQuestion'> extends True ? Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>> : Prisma__RoundQuestionClient<RoundQuestionGetPayload<T> | null, null>

    /**
     * Find the first RoundQuestion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionFindFirstOrThrowArgs} args - Arguments to find a RoundQuestion
     * @example
     * // Get one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoundQuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundQuestionFindFirstOrThrowArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Find zero or more RoundQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundQuestions
     * const roundQuestions = await prisma.roundQuestion.findMany()
     * 
     * // Get first 10 RoundQuestions
     * const roundQuestions = await prisma.roundQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundQuestionWithIdOnly = await prisma.roundQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoundQuestionFindManyArgs>(
      args?: SelectSubset<T, RoundQuestionFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundQuestionGetPayload<T>>>

    /**
     * Create a RoundQuestion.
     * @param {RoundQuestionCreateArgs} args - Arguments to create a RoundQuestion.
     * @example
     * // Create one RoundQuestion
     * const RoundQuestion = await prisma.roundQuestion.create({
     *   data: {
     *     // ... data to create a RoundQuestion
     *   }
     * })
     * 
    **/
    create<T extends RoundQuestionCreateArgs>(
      args: SelectSubset<T, RoundQuestionCreateArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Create many RoundQuestions.
     *     @param {RoundQuestionCreateManyArgs} args - Arguments to create many RoundQuestions.
     *     @example
     *     // Create many RoundQuestions
     *     const roundQuestion = await prisma.roundQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoundQuestionCreateManyArgs>(
      args?: SelectSubset<T, RoundQuestionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoundQuestion.
     * @param {RoundQuestionDeleteArgs} args - Arguments to delete one RoundQuestion.
     * @example
     * // Delete one RoundQuestion
     * const RoundQuestion = await prisma.roundQuestion.delete({
     *   where: {
     *     // ... filter to delete one RoundQuestion
     *   }
     * })
     * 
    **/
    delete<T extends RoundQuestionDeleteArgs>(
      args: SelectSubset<T, RoundQuestionDeleteArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Update one RoundQuestion.
     * @param {RoundQuestionUpdateArgs} args - Arguments to update one RoundQuestion.
     * @example
     * // Update one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoundQuestionUpdateArgs>(
      args: SelectSubset<T, RoundQuestionUpdateArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Delete zero or more RoundQuestions.
     * @param {RoundQuestionDeleteManyArgs} args - Arguments to filter RoundQuestions to delete.
     * @example
     * // Delete a few RoundQuestions
     * const { count } = await prisma.roundQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoundQuestionDeleteManyArgs>(
      args?: SelectSubset<T, RoundQuestionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoundQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundQuestions
     * const roundQuestion = await prisma.roundQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoundQuestionUpdateManyArgs>(
      args: SelectSubset<T, RoundQuestionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoundQuestion.
     * @param {RoundQuestionUpsertArgs} args - Arguments to update or create a RoundQuestion.
     * @example
     * // Update or create a RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.upsert({
     *   create: {
     *     // ... data to create a RoundQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends RoundQuestionUpsertArgs>(
      args: SelectSubset<T, RoundQuestionUpsertArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Count the number of RoundQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionCountArgs} args - Arguments to filter RoundQuestions to count.
     * @example
     * // Count the number of RoundQuestions
     * const count = await prisma.roundQuestion.count({
     *   where: {
     *     // ... the filter for the RoundQuestions we want to count
     *   }
     * })
    **/
    count<T extends RoundQuestionCountArgs>(
      args?: Subset<T, RoundQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoundQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoundQuestionAggregateArgs>(args: Subset<T, RoundQuestionAggregateArgs>): Prisma.PrismaPromise<GetRoundQuestionAggregateType<T>>

    /**
     * Group by RoundQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoundQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundQuestionGroupByArgs['orderBy'] }
        : { orderBy?: RoundQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoundQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundQuestionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    question<T extends RoundQuestion$questionArgs= {}>(args?: Subset<T, RoundQuestion$questionArgs>): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>| Null>;

    round<T extends RoundArgs= {}>(args?: Subset<T, RoundArgs>): Prisma__RoundClient<RoundGetPayload<T> | Null>;

    choice<T extends ChoiceArgs= {}>(args?: Subset<T, ChoiceArgs>): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RoundQuestion base type for findUnique actions
   */
  export type RoundQuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestion to fetch.
     */
    where: RoundQuestionWhereUniqueInput
  }

  /**
   * RoundQuestion findUnique
   */
  export interface RoundQuestionFindUniqueArgs extends RoundQuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundQuestion findUniqueOrThrow
   */
  export type RoundQuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestion to fetch.
     */
    where: RoundQuestionWhereUniqueInput
  }


  /**
   * RoundQuestion base type for findFirst actions
   */
  export type RoundQuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestion to fetch.
     */
    where?: RoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuestions to fetch.
     */
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundQuestions.
     */
    cursor?: RoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundQuestions.
     */
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
  }

  /**
   * RoundQuestion findFirst
   */
  export interface RoundQuestionFindFirstArgs extends RoundQuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundQuestion findFirstOrThrow
   */
  export type RoundQuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestion to fetch.
     */
    where?: RoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuestions to fetch.
     */
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundQuestions.
     */
    cursor?: RoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundQuestions.
     */
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
  }


  /**
   * RoundQuestion findMany
   */
  export type RoundQuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestions to fetch.
     */
    where?: RoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuestions to fetch.
     */
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoundQuestions.
     */
    cursor?: RoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuestions.
     */
    skip?: number
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
  }


  /**
   * RoundQuestion create
   */
  export type RoundQuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * The data needed to create a RoundQuestion.
     */
    data: XOR<RoundQuestionCreateInput, RoundQuestionUncheckedCreateInput>
  }


  /**
   * RoundQuestion createMany
   */
  export type RoundQuestionCreateManyArgs = {
    /**
     * The data used to create many RoundQuestions.
     */
    data: Enumerable<RoundQuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoundQuestion update
   */
  export type RoundQuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * The data needed to update a RoundQuestion.
     */
    data: XOR<RoundQuestionUpdateInput, RoundQuestionUncheckedUpdateInput>
    /**
     * Choose, which RoundQuestion to update.
     */
    where: RoundQuestionWhereUniqueInput
  }


  /**
   * RoundQuestion updateMany
   */
  export type RoundQuestionUpdateManyArgs = {
    /**
     * The data used to update RoundQuestions.
     */
    data: XOR<RoundQuestionUpdateManyMutationInput, RoundQuestionUncheckedUpdateManyInput>
    /**
     * Filter which RoundQuestions to update
     */
    where?: RoundQuestionWhereInput
  }


  /**
   * RoundQuestion upsert
   */
  export type RoundQuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * The filter to search for the RoundQuestion to update in case it exists.
     */
    where: RoundQuestionWhereUniqueInput
    /**
     * In case the RoundQuestion found by the `where` argument doesn't exist, create a new RoundQuestion with this data.
     */
    create: XOR<RoundQuestionCreateInput, RoundQuestionUncheckedCreateInput>
    /**
     * In case the RoundQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundQuestionUpdateInput, RoundQuestionUncheckedUpdateInput>
  }


  /**
   * RoundQuestion delete
   */
  export type RoundQuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter which RoundQuestion to delete.
     */
    where: RoundQuestionWhereUniqueInput
  }


  /**
   * RoundQuestion deleteMany
   */
  export type RoundQuestionDeleteManyArgs = {
    /**
     * Filter which RoundQuestions to delete
     */
    where?: RoundQuestionWhereInput
  }


  /**
   * RoundQuestion.question
   */
  export type RoundQuestion$questionArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    where?: QuestionWhereInput
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * RoundQuestion without action
   */
  export type RoundQuestionArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
  }



  /**
   * Model Round
   */


  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    score: number | null
  }

  export type RoundSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    score: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    createAt: Date | null
    updateAt: Date | null
    score: number | null
  }

  export type RoundMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    createAt: Date | null
    updateAt: Date | null
    score: number | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    categoryId: number
    createAt: number
    updateAt: number
    score: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    id?: true
    categoryId?: true
    score?: true
  }

  export type RoundSumAggregateInputType = {
    id?: true
    categoryId?: true
    score?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    categoryId?: true
    createAt?: true
    updateAt?: true
    score?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    categoryId?: true
    createAt?: true
    updateAt?: true
    score?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    categoryId?: true
    createAt?: true
    updateAt?: true
    score?: true
    _all?: true
  }

  export type RoundAggregateArgs = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: Enumerable<RoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs = {
    where?: RoundWhereInput
    orderBy?: Enumerable<RoundOrderByWithAggregationInput>
    by: RoundScalarFieldEnum[]
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _avg?: RoundAvgAggregateInputType
    _sum?: RoundSumAggregateInputType
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }


  export type RoundGroupByOutputType = {
    id: number
    categoryId: number
    createAt: Date
    updateAt: Date
    score: number
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect = {
    id?: boolean
    category?: boolean | CategoryArgs
    categoryId?: boolean
    createAt?: boolean
    updateAt?: boolean
    score?: boolean
    roundQuestion?: boolean | Round$roundQuestionArgs
    _count?: boolean | RoundCountOutputTypeArgs
  }


  export type RoundInclude = {
    category?: boolean | CategoryArgs
    roundQuestion?: boolean | Round$roundQuestionArgs
    _count?: boolean | RoundCountOutputTypeArgs
  }

  export type RoundGetPayload<S extends boolean | null | undefined | RoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Round :
    S extends undefined ? never :
    S extends { include: any } & (RoundArgs | RoundFindManyArgs)
    ? Round  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? CategoryGetPayload<S['include'][P]> :
        P extends 'roundQuestion' ? Array < RoundQuestionGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundArgs | RoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? CategoryGetPayload<S['select'][P]> :
        P extends 'roundQuestion' ? Array < RoundQuestionGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoundCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Round ? Round[P] : never
  } 
      : Round


  type RoundCountArgs = 
    Omit<RoundFindManyArgs, 'select' | 'include'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoundFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoundFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Round'> extends True ? Prisma__RoundClient<RoundGetPayload<T>> : Prisma__RoundClient<RoundGetPayload<T> | null, null>

    /**
     * Find one Round that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundFindUniqueOrThrowArgs>
    ): Prisma__RoundClient<RoundGetPayload<T>>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoundFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoundFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Round'> extends True ? Prisma__RoundClient<RoundGetPayload<T>> : Prisma__RoundClient<RoundGetPayload<T> | null, null>

    /**
     * Find the first Round that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundFindFirstOrThrowArgs>
    ): Prisma__RoundClient<RoundGetPayload<T>>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundWithIdOnly = await prisma.round.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoundFindManyArgs>(
      args?: SelectSubset<T, RoundFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundGetPayload<T>>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
    **/
    create<T extends RoundCreateArgs>(
      args: SelectSubset<T, RoundCreateArgs>
    ): Prisma__RoundClient<RoundGetPayload<T>>

    /**
     * Create many Rounds.
     *     @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     *     @example
     *     // Create many Rounds
     *     const round = await prisma.round.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoundCreateManyArgs>(
      args?: SelectSubset<T, RoundCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
    **/
    delete<T extends RoundDeleteArgs>(
      args: SelectSubset<T, RoundDeleteArgs>
    ): Prisma__RoundClient<RoundGetPayload<T>>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoundUpdateArgs>(
      args: SelectSubset<T, RoundUpdateArgs>
    ): Prisma__RoundClient<RoundGetPayload<T>>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoundDeleteManyArgs>(
      args?: SelectSubset<T, RoundDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoundUpdateManyArgs>(
      args: SelectSubset<T, RoundUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
    **/
    upsert<T extends RoundUpsertArgs>(
      args: SelectSubset<T, RoundUpsertArgs>
    ): Prisma__RoundClient<RoundGetPayload<T>>

    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    roundQuestion<T extends Round$roundQuestionArgs= {}>(args?: Subset<T, Round$roundQuestionArgs>): Prisma.PrismaPromise<Array<RoundQuestionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Round base type for findUnique actions
   */
  export type RoundFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUnique
   */
  export interface RoundFindUniqueArgs extends RoundFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }


  /**
   * Round base type for findFirst actions
   */
  export type RoundFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: Enumerable<RoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: Enumerable<RoundScalarFieldEnum>
  }

  /**
   * Round findFirst
   */
  export interface RoundFindFirstArgs extends RoundFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: Enumerable<RoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: Enumerable<RoundScalarFieldEnum>
  }


  /**
   * Round findMany
   */
  export type RoundFindManyArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: Enumerable<RoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    distinct?: Enumerable<RoundScalarFieldEnum>
  }


  /**
   * Round create
   */
  export type RoundCreateArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }


  /**
   * Round createMany
   */
  export type RoundCreateManyArgs = {
    /**
     * The data used to create many Rounds.
     */
    data: Enumerable<RoundCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Round update
   */
  export type RoundUpdateArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }


  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
  }


  /**
   * Round upsert
   */
  export type RoundUpsertArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }


  /**
   * Round delete
   */
  export type RoundDeleteArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }


  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
  }


  /**
   * Round.roundQuestion
   */
  export type Round$roundQuestionArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    where?: RoundQuestionWhereInput
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    cursor?: RoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
  }


  /**
   * Round without action
   */
  export type RoundArgs = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundInclude | null
  }



  /**
   * Model Choice
   */


  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  export type ChoiceAvgAggregateOutputType = {
    id: number | null
    choices: number | null
    questionId: number | null
  }

  export type ChoiceSumAggregateOutputType = {
    id: number | null
    choices: number | null
    questionId: number | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: number | null
    choices: number | null
    questionId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: number | null
    choices: number | null
    questionId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    choices: number
    questionId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ChoiceAvgAggregateInputType = {
    id?: true
    choices?: true
    questionId?: true
  }

  export type ChoiceSumAggregateInputType = {
    id?: true
    choices?: true
    questionId?: true
  }

  export type ChoiceMinAggregateInputType = {
    id?: true
    choices?: true
    questionId?: true
    createAt?: true
    updateAt?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    choices?: true
    questionId?: true
    createAt?: true
    updateAt?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    choices?: true
    questionId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ChoiceAggregateArgs = {
    /**
     * Filter which Choice to aggregate.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choices
    **/
    _count?: true | ChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoiceMaxAggregateInputType
  }

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>
  }




  export type ChoiceGroupByArgs = {
    where?: ChoiceWhereInput
    orderBy?: Enumerable<ChoiceOrderByWithAggregationInput>
    by: ChoiceScalarFieldEnum[]
    having?: ChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoiceCountAggregateInputType | true
    _avg?: ChoiceAvgAggregateInputType
    _sum?: ChoiceSumAggregateInputType
    _min?: ChoiceMinAggregateInputType
    _max?: ChoiceMaxAggregateInputType
  }


  export type ChoiceGroupByOutputType = {
    id: number
    choices: number
    questionId: number
    createAt: Date
    updateAt: Date
    _count: ChoiceCountAggregateOutputType | null
    _avg: ChoiceAvgAggregateOutputType | null
    _sum: ChoiceSumAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  type GetChoiceGroupByPayload<T extends ChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
        }
      >
    >


  export type ChoiceSelect = {
    id?: boolean
    choices?: boolean
    question?: boolean | QuestionArgs
    questionId?: boolean
    createAt?: boolean
    updateAt?: boolean
    roundQuestion?: boolean | Choice$roundQuestionArgs
    _count?: boolean | ChoiceCountOutputTypeArgs
  }


  export type ChoiceInclude = {
    question?: boolean | QuestionArgs
    roundQuestion?: boolean | Choice$roundQuestionArgs
    _count?: boolean | ChoiceCountOutputTypeArgs
  }

  export type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Choice :
    S extends undefined ? never :
    S extends { include: any } & (ChoiceArgs | ChoiceFindManyArgs)
    ? Choice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'question' ? QuestionGetPayload<S['include'][P]> :
        P extends 'roundQuestion' ? Array < RoundQuestionGetPayload<S['include'][P]>>  :
        P extends '_count' ? ChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChoiceArgs | ChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'question' ? QuestionGetPayload<S['select'][P]> :
        P extends 'roundQuestion' ? Array < RoundQuestionGetPayload<S['select'][P]>>  :
        P extends '_count' ? ChoiceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Choice ? Choice[P] : never
  } 
      : Choice


  type ChoiceCountArgs = 
    Omit<ChoiceFindManyArgs, 'select' | 'include'> & {
      select?: ChoiceCountAggregateInputType | true
    }

  export interface ChoiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Choice that matches the filter.
     * @param {ChoiceFindUniqueArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Choice'> extends True ? Prisma__ChoiceClient<ChoiceGetPayload<T>> : Prisma__ChoiceClient<ChoiceGetPayload<T> | null, null>

    /**
     * Find one Choice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChoiceFindUniqueOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ChoiceFindUniqueOrThrowArgs>
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>

    /**
     * Find the first Choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Choice'> extends True ? Prisma__ChoiceClient<ChoiceGetPayload<T>> : Prisma__ChoiceClient<ChoiceGetPayload<T> | null, null>

    /**
     * Find the first Choice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChoiceFindFirstOrThrowArgs>
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choice.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choiceWithIdOnly = await prisma.choice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChoiceFindManyArgs>(
      args?: SelectSubset<T, ChoiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>>>

    /**
     * Create a Choice.
     * @param {ChoiceCreateArgs} args - Arguments to create a Choice.
     * @example
     * // Create one Choice
     * const Choice = await prisma.choice.create({
     *   data: {
     *     // ... data to create a Choice
     *   }
     * })
     * 
    **/
    create<T extends ChoiceCreateArgs>(
      args: SelectSubset<T, ChoiceCreateArgs>
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>

    /**
     * Create many Choices.
     *     @param {ChoiceCreateManyArgs} args - Arguments to create many Choices.
     *     @example
     *     // Create many Choices
     *     const choice = await prisma.choice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChoiceCreateManyArgs>(
      args?: SelectSubset<T, ChoiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Choice.
     * @param {ChoiceDeleteArgs} args - Arguments to delete one Choice.
     * @example
     * // Delete one Choice
     * const Choice = await prisma.choice.delete({
     *   where: {
     *     // ... filter to delete one Choice
     *   }
     * })
     * 
    **/
    delete<T extends ChoiceDeleteArgs>(
      args: SelectSubset<T, ChoiceDeleteArgs>
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>

    /**
     * Update one Choice.
     * @param {ChoiceUpdateArgs} args - Arguments to update one Choice.
     * @example
     * // Update one Choice
     * const choice = await prisma.choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChoiceUpdateArgs>(
      args: SelectSubset<T, ChoiceUpdateArgs>
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>

    /**
     * Delete zero or more Choices.
     * @param {ChoiceDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChoiceDeleteManyArgs>(
      args?: SelectSubset<T, ChoiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChoiceUpdateManyArgs>(
      args: SelectSubset<T, ChoiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Choice.
     * @param {ChoiceUpsertArgs} args - Arguments to update or create a Choice.
     * @example
     * // Update or create a Choice
     * const choice = await prisma.choice.upsert({
     *   create: {
     *     // ... data to create a Choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choice we want to update
     *   }
     * })
    **/
    upsert<T extends ChoiceUpsertArgs>(
      args: SelectSubset<T, ChoiceUpsertArgs>
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>

    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choice.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends ChoiceCountArgs>(
      args?: Subset<T, ChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoiceAggregateArgs>(args: Subset<T, ChoiceAggregateArgs>): Prisma.PrismaPromise<GetChoiceAggregateType<T>>

    /**
     * Group by Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoiceGroupByArgs['orderBy'] }
        : { orderBy?: ChoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChoiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    question<T extends QuestionArgs= {}>(args?: Subset<T, QuestionArgs>): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

    roundQuestion<T extends Choice$roundQuestionArgs= {}>(args?: Subset<T, Choice$roundQuestionArgs>): Prisma.PrismaPromise<Array<RoundQuestionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Choice base type for findUnique actions
   */
  export type ChoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findUnique
   */
  export interface ChoiceFindUniqueArgs extends ChoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Choice findUniqueOrThrow
   */
  export type ChoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }


  /**
   * Choice base type for findFirst actions
   */
  export type ChoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: Enumerable<ChoiceScalarFieldEnum>
  }

  /**
   * Choice findFirst
   */
  export interface ChoiceFindFirstArgs extends ChoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Choice findFirstOrThrow
   */
  export type ChoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: Enumerable<ChoiceScalarFieldEnum>
  }


  /**
   * Choice findMany
   */
  export type ChoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * Filter, which Choices to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    distinct?: Enumerable<ChoiceScalarFieldEnum>
  }


  /**
   * Choice create
   */
  export type ChoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * The data needed to create a Choice.
     */
    data: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
  }


  /**
   * Choice createMany
   */
  export type ChoiceCreateManyArgs = {
    /**
     * The data used to create many Choices.
     */
    data: Enumerable<ChoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Choice update
   */
  export type ChoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * The data needed to update a Choice.
     */
    data: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
    /**
     * Choose, which Choice to update.
     */
    where: ChoiceWhereUniqueInput
  }


  /**
   * Choice updateMany
   */
  export type ChoiceUpdateManyArgs = {
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput
  }


  /**
   * Choice upsert
   */
  export type ChoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * The filter to search for the Choice to update in case it exists.
     */
    where: ChoiceWhereUniqueInput
    /**
     * In case the Choice found by the `where` argument doesn't exist, create a new Choice with this data.
     */
    create: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
    /**
     * In case the Choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
  }


  /**
   * Choice delete
   */
  export type ChoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
    /**
     * Filter which Choice to delete.
     */
    where: ChoiceWhereUniqueInput
  }


  /**
   * Choice deleteMany
   */
  export type ChoiceDeleteManyArgs = {
    /**
     * Filter which Choices to delete
     */
    where?: ChoiceWhereInput
  }


  /**
   * Choice.roundQuestion
   */
  export type Choice$roundQuestionArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    where?: RoundQuestionWhereInput
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    cursor?: RoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
  }


  /**
   * Choice without action
   */
  export type ChoiceArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    profileImage: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    profileImage: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    profileImage: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string
    profileImage: string
    createAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    profileImage?: boolean
    createAt?: boolean
    updateAt?: boolean
    reply?: boolean | User$replyArgs
    fromUserRelations?: boolean | User$fromUserRelationsArgs
    toUserRelations?: boolean | User$toUserRelationsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    reply?: boolean | User$replyArgs
    fromUserRelations?: boolean | User$fromUserRelationsArgs
    toUserRelations?: boolean | User$toUserRelationsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'reply' ? Array < ReplyGetPayload<S['include'][P]>>  :
        P extends 'fromUserRelations' ? Array < UserRelationGetPayload<S['include'][P]>>  :
        P extends 'toUserRelations' ? Array < UserRelationGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'reply' ? Array < ReplyGetPayload<S['select'][P]>>  :
        P extends 'fromUserRelations' ? Array < UserRelationGetPayload<S['select'][P]>>  :
        P extends 'toUserRelations' ? Array < UserRelationGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    reply<T extends User$replyArgs= {}>(args?: Subset<T, User$replyArgs>): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>| Null>;

    fromUserRelations<T extends User$fromUserRelationsArgs= {}>(args?: Subset<T, User$fromUserRelationsArgs>): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>| Null>;

    toUserRelations<T extends User$toUserRelationsArgs= {}>(args?: Subset<T, User$toUserRelationsArgs>): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.reply
   */
  export type User$replyArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    where?: ReplyWhereInput
    orderBy?: Enumerable<ReplyOrderByWithRelationInput>
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReplyScalarFieldEnum>
  }


  /**
   * User.fromUserRelations
   */
  export type User$fromUserRelationsArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    where?: UserRelationWhereInput
    orderBy?: Enumerable<UserRelationOrderByWithRelationInput>
    cursor?: UserRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserRelationScalarFieldEnum>
  }


  /**
   * User.toUserRelations
   */
  export type User$toUserRelationsArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    where?: UserRelationWhereInput
    orderBy?: Enumerable<UserRelationOrderByWithRelationInput>
    cursor?: UserRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserRelationScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    message: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    message: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    message: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    message?: true
    createAt?: true
    updateAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    message?: true
    createAt?: true
    updateAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    message?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: PostScalarFieldEnum[]
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    message: string
    createAt: Date
    updateAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    message?: boolean
    createAt?: boolean
    updateAt?: boolean
    HashTagOnPost?: boolean | Post$HashTagOnPostArgs
    reply?: boolean | Post$replyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }


  export type PostInclude = {
    HashTagOnPost?: boolean | Post$HashTagOnPostArgs
    reply?: boolean | Post$replyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Post :
    S extends undefined ? never :
    S extends { include: any } & (PostArgs | PostFindManyArgs)
    ? Post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'HashTagOnPost' ? Array < HashTagOnPostGetPayload<S['include'][P]>>  :
        P extends 'reply' ? Array < ReplyGetPayload<S['include'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'HashTagOnPost' ? Array < HashTagOnPostGetPayload<S['select'][P]>>  :
        P extends 'reply' ? Array < ReplyGetPayload<S['select'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Post ? Post[P] : never
  } 
      : Post


  type PostCountArgs = 
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? Prisma__PostClient<PostGetPayload<T>> : Prisma__PostClient<PostGetPayload<T> | null, null>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): Prisma.PrismaPromise<Array<PostGetPayload<T>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): Prisma__PostClient<PostGetPayload<T>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    HashTagOnPost<T extends Post$HashTagOnPostArgs= {}>(args?: Subset<T, Post$HashTagOnPostArgs>): Prisma.PrismaPromise<Array<HashTagOnPostGetPayload<T>>| Null>;

    reply<T extends Post$replyArgs= {}>(args?: Subset<T, Post$replyArgs>): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Post base type for findUnique actions
   */
  export type PostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUnique
   */
  export interface PostFindUniqueArgs extends PostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post base type for findFirst actions
   */
  export type PostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * Post findFirst
   */
  export interface PostFindFirstArgs extends PostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    /**
     * The data used to create many Posts.
     */
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.HashTagOnPost
   */
  export type Post$HashTagOnPostArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    where?: HashTagOnPostWhereInput
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    cursor?: HashTagOnPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
  }


  /**
   * Post.reply
   */
  export type Post$replyArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    where?: ReplyWhereInput
    orderBy?: Enumerable<ReplyOrderByWithRelationInput>
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReplyScalarFieldEnum>
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
  }



  /**
   * Model DirecMessage
   */


  export type AggregateDirecMessage = {
    _count: DirecMessageCountAggregateOutputType | null
    _avg: DirecMessageAvgAggregateOutputType | null
    _sum: DirecMessageSumAggregateOutputType | null
    _min: DirecMessageMinAggregateOutputType | null
    _max: DirecMessageMaxAggregateOutputType | null
  }

  export type DirecMessageAvgAggregateOutputType = {
    id: number | null
  }

  export type DirecMessageSumAggregateOutputType = {
    id: number | null
  }

  export type DirecMessageMinAggregateOutputType = {
    id: number | null
    message: string | null
    fromUser: string | null
    toUser: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DirecMessageMaxAggregateOutputType = {
    id: number | null
    message: string | null
    fromUser: string | null
    toUser: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DirecMessageCountAggregateOutputType = {
    id: number
    message: number
    fromUser: number
    toUser: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DirecMessageAvgAggregateInputType = {
    id?: true
  }

  export type DirecMessageSumAggregateInputType = {
    id?: true
  }

  export type DirecMessageMinAggregateInputType = {
    id?: true
    message?: true
    fromUser?: true
    toUser?: true
    createAt?: true
    updateAt?: true
  }

  export type DirecMessageMaxAggregateInputType = {
    id?: true
    message?: true
    fromUser?: true
    toUser?: true
    createAt?: true
    updateAt?: true
  }

  export type DirecMessageCountAggregateInputType = {
    id?: true
    message?: true
    fromUser?: true
    toUser?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DirecMessageAggregateArgs = {
    /**
     * Filter which DirecMessage to aggregate.
     */
    where?: DirecMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirecMessages to fetch.
     */
    orderBy?: Enumerable<DirecMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirecMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirecMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirecMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirecMessages
    **/
    _count?: true | DirecMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirecMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirecMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirecMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirecMessageMaxAggregateInputType
  }

  export type GetDirecMessageAggregateType<T extends DirecMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateDirecMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirecMessage[P]>
      : GetScalarType<T[P], AggregateDirecMessage[P]>
  }




  export type DirecMessageGroupByArgs = {
    where?: DirecMessageWhereInput
    orderBy?: Enumerable<DirecMessageOrderByWithAggregationInput>
    by: DirecMessageScalarFieldEnum[]
    having?: DirecMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirecMessageCountAggregateInputType | true
    _avg?: DirecMessageAvgAggregateInputType
    _sum?: DirecMessageSumAggregateInputType
    _min?: DirecMessageMinAggregateInputType
    _max?: DirecMessageMaxAggregateInputType
  }


  export type DirecMessageGroupByOutputType = {
    id: number
    message: string
    fromUser: string
    toUser: string
    createAt: Date
    updateAt: Date
    _count: DirecMessageCountAggregateOutputType | null
    _avg: DirecMessageAvgAggregateOutputType | null
    _sum: DirecMessageSumAggregateOutputType | null
    _min: DirecMessageMinAggregateOutputType | null
    _max: DirecMessageMaxAggregateOutputType | null
  }

  type GetDirecMessageGroupByPayload<T extends DirecMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DirecMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirecMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirecMessageGroupByOutputType[P]>
            : GetScalarType<T[P], DirecMessageGroupByOutputType[P]>
        }
      >
    >


  export type DirecMessageSelect = {
    id?: boolean
    message?: boolean
    fromUser?: boolean
    toUser?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type DirecMessageGetPayload<S extends boolean | null | undefined | DirecMessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DirecMessage :
    S extends undefined ? never :
    S extends { include: any } & (DirecMessageArgs | DirecMessageFindManyArgs)
    ? DirecMessage 
    : S extends { select: any } & (DirecMessageArgs | DirecMessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DirecMessage ? DirecMessage[P] : never
  } 
      : DirecMessage


  type DirecMessageCountArgs = 
    Omit<DirecMessageFindManyArgs, 'select' | 'include'> & {
      select?: DirecMessageCountAggregateInputType | true
    }

  export interface DirecMessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DirecMessage that matches the filter.
     * @param {DirecMessageFindUniqueArgs} args - Arguments to find a DirecMessage
     * @example
     * // Get one DirecMessage
     * const direcMessage = await prisma.direcMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DirecMessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DirecMessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DirecMessage'> extends True ? Prisma__DirecMessageClient<DirecMessageGetPayload<T>> : Prisma__DirecMessageClient<DirecMessageGetPayload<T> | null, null>

    /**
     * Find one DirecMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DirecMessageFindUniqueOrThrowArgs} args - Arguments to find a DirecMessage
     * @example
     * // Get one DirecMessage
     * const direcMessage = await prisma.direcMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DirecMessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DirecMessageFindUniqueOrThrowArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Find the first DirecMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageFindFirstArgs} args - Arguments to find a DirecMessage
     * @example
     * // Get one DirecMessage
     * const direcMessage = await prisma.direcMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DirecMessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DirecMessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DirecMessage'> extends True ? Prisma__DirecMessageClient<DirecMessageGetPayload<T>> : Prisma__DirecMessageClient<DirecMessageGetPayload<T> | null, null>

    /**
     * Find the first DirecMessage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageFindFirstOrThrowArgs} args - Arguments to find a DirecMessage
     * @example
     * // Get one DirecMessage
     * const direcMessage = await prisma.direcMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DirecMessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DirecMessageFindFirstOrThrowArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Find zero or more DirecMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirecMessages
     * const direcMessages = await prisma.direcMessage.findMany()
     * 
     * // Get first 10 DirecMessages
     * const direcMessages = await prisma.direcMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direcMessageWithIdOnly = await prisma.direcMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DirecMessageFindManyArgs>(
      args?: SelectSubset<T, DirecMessageFindManyArgs>
    ): Prisma.PrismaPromise<Array<DirecMessageGetPayload<T>>>

    /**
     * Create a DirecMessage.
     * @param {DirecMessageCreateArgs} args - Arguments to create a DirecMessage.
     * @example
     * // Create one DirecMessage
     * const DirecMessage = await prisma.direcMessage.create({
     *   data: {
     *     // ... data to create a DirecMessage
     *   }
     * })
     * 
    **/
    create<T extends DirecMessageCreateArgs>(
      args: SelectSubset<T, DirecMessageCreateArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Create many DirecMessages.
     *     @param {DirecMessageCreateManyArgs} args - Arguments to create many DirecMessages.
     *     @example
     *     // Create many DirecMessages
     *     const direcMessage = await prisma.direcMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DirecMessageCreateManyArgs>(
      args?: SelectSubset<T, DirecMessageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DirecMessage.
     * @param {DirecMessageDeleteArgs} args - Arguments to delete one DirecMessage.
     * @example
     * // Delete one DirecMessage
     * const DirecMessage = await prisma.direcMessage.delete({
     *   where: {
     *     // ... filter to delete one DirecMessage
     *   }
     * })
     * 
    **/
    delete<T extends DirecMessageDeleteArgs>(
      args: SelectSubset<T, DirecMessageDeleteArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Update one DirecMessage.
     * @param {DirecMessageUpdateArgs} args - Arguments to update one DirecMessage.
     * @example
     * // Update one DirecMessage
     * const direcMessage = await prisma.direcMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DirecMessageUpdateArgs>(
      args: SelectSubset<T, DirecMessageUpdateArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Delete zero or more DirecMessages.
     * @param {DirecMessageDeleteManyArgs} args - Arguments to filter DirecMessages to delete.
     * @example
     * // Delete a few DirecMessages
     * const { count } = await prisma.direcMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DirecMessageDeleteManyArgs>(
      args?: SelectSubset<T, DirecMessageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirecMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirecMessages
     * const direcMessage = await prisma.direcMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DirecMessageUpdateManyArgs>(
      args: SelectSubset<T, DirecMessageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DirecMessage.
     * @param {DirecMessageUpsertArgs} args - Arguments to update or create a DirecMessage.
     * @example
     * // Update or create a DirecMessage
     * const direcMessage = await prisma.direcMessage.upsert({
     *   create: {
     *     // ... data to create a DirecMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirecMessage we want to update
     *   }
     * })
    **/
    upsert<T extends DirecMessageUpsertArgs>(
      args: SelectSubset<T, DirecMessageUpsertArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Count the number of DirecMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageCountArgs} args - Arguments to filter DirecMessages to count.
     * @example
     * // Count the number of DirecMessages
     * const count = await prisma.direcMessage.count({
     *   where: {
     *     // ... the filter for the DirecMessages we want to count
     *   }
     * })
    **/
    count<T extends DirecMessageCountArgs>(
      args?: Subset<T, DirecMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirecMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirecMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirecMessageAggregateArgs>(args: Subset<T, DirecMessageAggregateArgs>): Prisma.PrismaPromise<GetDirecMessageAggregateType<T>>

    /**
     * Group by DirecMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirecMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirecMessageGroupByArgs['orderBy'] }
        : { orderBy?: DirecMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirecMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirecMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DirecMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirecMessageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DirecMessage base type for findUnique actions
   */
  export type DirecMessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessage to fetch.
     */
    where: DirecMessageWhereUniqueInput
  }

  /**
   * DirecMessage findUnique
   */
  export interface DirecMessageFindUniqueArgs extends DirecMessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirecMessage findUniqueOrThrow
   */
  export type DirecMessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessage to fetch.
     */
    where: DirecMessageWhereUniqueInput
  }


  /**
   * DirecMessage base type for findFirst actions
   */
  export type DirecMessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessage to fetch.
     */
    where?: DirecMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirecMessages to fetch.
     */
    orderBy?: Enumerable<DirecMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirecMessages.
     */
    cursor?: DirecMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirecMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirecMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirecMessages.
     */
    distinct?: Enumerable<DirecMessageScalarFieldEnum>
  }

  /**
   * DirecMessage findFirst
   */
  export interface DirecMessageFindFirstArgs extends DirecMessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirecMessage findFirstOrThrow
   */
  export type DirecMessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessage to fetch.
     */
    where?: DirecMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirecMessages to fetch.
     */
    orderBy?: Enumerable<DirecMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirecMessages.
     */
    cursor?: DirecMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirecMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirecMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirecMessages.
     */
    distinct?: Enumerable<DirecMessageScalarFieldEnum>
  }


  /**
   * DirecMessage findMany
   */
  export type DirecMessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessages to fetch.
     */
    where?: DirecMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirecMessages to fetch.
     */
    orderBy?: Enumerable<DirecMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirecMessages.
     */
    cursor?: DirecMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirecMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirecMessages.
     */
    skip?: number
    distinct?: Enumerable<DirecMessageScalarFieldEnum>
  }


  /**
   * DirecMessage create
   */
  export type DirecMessageCreateArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * The data needed to create a DirecMessage.
     */
    data: XOR<DirecMessageCreateInput, DirecMessageUncheckedCreateInput>
  }


  /**
   * DirecMessage createMany
   */
  export type DirecMessageCreateManyArgs = {
    /**
     * The data used to create many DirecMessages.
     */
    data: Enumerable<DirecMessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DirecMessage update
   */
  export type DirecMessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * The data needed to update a DirecMessage.
     */
    data: XOR<DirecMessageUpdateInput, DirecMessageUncheckedUpdateInput>
    /**
     * Choose, which DirecMessage to update.
     */
    where: DirecMessageWhereUniqueInput
  }


  /**
   * DirecMessage updateMany
   */
  export type DirecMessageUpdateManyArgs = {
    /**
     * The data used to update DirecMessages.
     */
    data: XOR<DirecMessageUpdateManyMutationInput, DirecMessageUncheckedUpdateManyInput>
    /**
     * Filter which DirecMessages to update
     */
    where?: DirecMessageWhereInput
  }


  /**
   * DirecMessage upsert
   */
  export type DirecMessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * The filter to search for the DirecMessage to update in case it exists.
     */
    where: DirecMessageWhereUniqueInput
    /**
     * In case the DirecMessage found by the `where` argument doesn't exist, create a new DirecMessage with this data.
     */
    create: XOR<DirecMessageCreateInput, DirecMessageUncheckedCreateInput>
    /**
     * In case the DirecMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirecMessageUpdateInput, DirecMessageUncheckedUpdateInput>
  }


  /**
   * DirecMessage delete
   */
  export type DirecMessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter which DirecMessage to delete.
     */
    where: DirecMessageWhereUniqueInput
  }


  /**
   * DirecMessage deleteMany
   */
  export type DirecMessageDeleteManyArgs = {
    /**
     * Filter which DirecMessages to delete
     */
    where?: DirecMessageWhereInput
  }


  /**
   * DirecMessage without action
   */
  export type DirecMessageArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
  }



  /**
   * Model HashTag
   */


  export type AggregateHashTag = {
    _count: HashTagCountAggregateOutputType | null
    _avg: HashTagAvgAggregateOutputType | null
    _sum: HashTagSumAggregateOutputType | null
    _min: HashTagMinAggregateOutputType | null
    _max: HashTagMaxAggregateOutputType | null
  }

  export type HashTagAvgAggregateOutputType = {
    id: number | null
  }

  export type HashTagSumAggregateOutputType = {
    id: number | null
  }

  export type HashTagMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type HashTagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type HashTagCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type HashTagAvgAggregateInputType = {
    id?: true
  }

  export type HashTagSumAggregateInputType = {
    id?: true
  }

  export type HashTagMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type HashTagMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type HashTagCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type HashTagAggregateArgs = {
    /**
     * Filter which HashTag to aggregate.
     */
    where?: HashTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTags to fetch.
     */
    orderBy?: Enumerable<HashTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HashTags
    **/
    _count?: true | HashTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashTagMaxAggregateInputType
  }

  export type GetHashTagAggregateType<T extends HashTagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashTag[P]>
      : GetScalarType<T[P], AggregateHashTag[P]>
  }




  export type HashTagGroupByArgs = {
    where?: HashTagWhereInput
    orderBy?: Enumerable<HashTagOrderByWithAggregationInput>
    by: HashTagScalarFieldEnum[]
    having?: HashTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashTagCountAggregateInputType | true
    _avg?: HashTagAvgAggregateInputType
    _sum?: HashTagSumAggregateInputType
    _min?: HashTagMinAggregateInputType
    _max?: HashTagMaxAggregateInputType
  }


  export type HashTagGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    updateAt: Date
    _count: HashTagCountAggregateOutputType | null
    _avg: HashTagAvgAggregateOutputType | null
    _sum: HashTagSumAggregateOutputType | null
    _min: HashTagMinAggregateOutputType | null
    _max: HashTagMaxAggregateOutputType | null
  }

  type GetHashTagGroupByPayload<T extends HashTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HashTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashTagGroupByOutputType[P]>
            : GetScalarType<T[P], HashTagGroupByOutputType[P]>
        }
      >
    >


  export type HashTagSelect = {
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    HashTagOnPost?: boolean | HashTag$HashTagOnPostArgs
    _count?: boolean | HashTagCountOutputTypeArgs
  }


  export type HashTagInclude = {
    HashTagOnPost?: boolean | HashTag$HashTagOnPostArgs
    _count?: boolean | HashTagCountOutputTypeArgs
  }

  export type HashTagGetPayload<S extends boolean | null | undefined | HashTagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashTag :
    S extends undefined ? never :
    S extends { include: any } & (HashTagArgs | HashTagFindManyArgs)
    ? HashTag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'HashTagOnPost' ? Array < HashTagOnPostGetPayload<S['include'][P]>>  :
        P extends '_count' ? HashTagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HashTagArgs | HashTagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'HashTagOnPost' ? Array < HashTagOnPostGetPayload<S['select'][P]>>  :
        P extends '_count' ? HashTagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof HashTag ? HashTag[P] : never
  } 
      : HashTag


  type HashTagCountArgs = 
    Omit<HashTagFindManyArgs, 'select' | 'include'> & {
      select?: HashTagCountAggregateInputType | true
    }

  export interface HashTagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HashTag that matches the filter.
     * @param {HashTagFindUniqueArgs} args - Arguments to find a HashTag
     * @example
     * // Get one HashTag
     * const hashTag = await prisma.hashTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HashTagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HashTagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HashTag'> extends True ? Prisma__HashTagClient<HashTagGetPayload<T>> : Prisma__HashTagClient<HashTagGetPayload<T> | null, null>

    /**
     * Find one HashTag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HashTagFindUniqueOrThrowArgs} args - Arguments to find a HashTag
     * @example
     * // Get one HashTag
     * const hashTag = await prisma.hashTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HashTagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HashTagFindUniqueOrThrowArgs>
    ): Prisma__HashTagClient<HashTagGetPayload<T>>

    /**
     * Find the first HashTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagFindFirstArgs} args - Arguments to find a HashTag
     * @example
     * // Get one HashTag
     * const hashTag = await prisma.hashTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HashTagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HashTagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HashTag'> extends True ? Prisma__HashTagClient<HashTagGetPayload<T>> : Prisma__HashTagClient<HashTagGetPayload<T> | null, null>

    /**
     * Find the first HashTag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagFindFirstOrThrowArgs} args - Arguments to find a HashTag
     * @example
     * // Get one HashTag
     * const hashTag = await prisma.hashTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HashTagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HashTagFindFirstOrThrowArgs>
    ): Prisma__HashTagClient<HashTagGetPayload<T>>

    /**
     * Find zero or more HashTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HashTags
     * const hashTags = await prisma.hashTag.findMany()
     * 
     * // Get first 10 HashTags
     * const hashTags = await prisma.hashTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashTagWithIdOnly = await prisma.hashTag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HashTagFindManyArgs>(
      args?: SelectSubset<T, HashTagFindManyArgs>
    ): Prisma.PrismaPromise<Array<HashTagGetPayload<T>>>

    /**
     * Create a HashTag.
     * @param {HashTagCreateArgs} args - Arguments to create a HashTag.
     * @example
     * // Create one HashTag
     * const HashTag = await prisma.hashTag.create({
     *   data: {
     *     // ... data to create a HashTag
     *   }
     * })
     * 
    **/
    create<T extends HashTagCreateArgs>(
      args: SelectSubset<T, HashTagCreateArgs>
    ): Prisma__HashTagClient<HashTagGetPayload<T>>

    /**
     * Create many HashTags.
     *     @param {HashTagCreateManyArgs} args - Arguments to create many HashTags.
     *     @example
     *     // Create many HashTags
     *     const hashTag = await prisma.hashTag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HashTagCreateManyArgs>(
      args?: SelectSubset<T, HashTagCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HashTag.
     * @param {HashTagDeleteArgs} args - Arguments to delete one HashTag.
     * @example
     * // Delete one HashTag
     * const HashTag = await prisma.hashTag.delete({
     *   where: {
     *     // ... filter to delete one HashTag
     *   }
     * })
     * 
    **/
    delete<T extends HashTagDeleteArgs>(
      args: SelectSubset<T, HashTagDeleteArgs>
    ): Prisma__HashTagClient<HashTagGetPayload<T>>

    /**
     * Update one HashTag.
     * @param {HashTagUpdateArgs} args - Arguments to update one HashTag.
     * @example
     * // Update one HashTag
     * const hashTag = await prisma.hashTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HashTagUpdateArgs>(
      args: SelectSubset<T, HashTagUpdateArgs>
    ): Prisma__HashTagClient<HashTagGetPayload<T>>

    /**
     * Delete zero or more HashTags.
     * @param {HashTagDeleteManyArgs} args - Arguments to filter HashTags to delete.
     * @example
     * // Delete a few HashTags
     * const { count } = await prisma.hashTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HashTagDeleteManyArgs>(
      args?: SelectSubset<T, HashTagDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HashTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HashTags
     * const hashTag = await prisma.hashTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HashTagUpdateManyArgs>(
      args: SelectSubset<T, HashTagUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HashTag.
     * @param {HashTagUpsertArgs} args - Arguments to update or create a HashTag.
     * @example
     * // Update or create a HashTag
     * const hashTag = await prisma.hashTag.upsert({
     *   create: {
     *     // ... data to create a HashTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HashTag we want to update
     *   }
     * })
    **/
    upsert<T extends HashTagUpsertArgs>(
      args: SelectSubset<T, HashTagUpsertArgs>
    ): Prisma__HashTagClient<HashTagGetPayload<T>>

    /**
     * Count the number of HashTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagCountArgs} args - Arguments to filter HashTags to count.
     * @example
     * // Count the number of HashTags
     * const count = await prisma.hashTag.count({
     *   where: {
     *     // ... the filter for the HashTags we want to count
     *   }
     * })
    **/
    count<T extends HashTagCountArgs>(
      args?: Subset<T, HashTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HashTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HashTagAggregateArgs>(args: Subset<T, HashTagAggregateArgs>): Prisma.PrismaPromise<GetHashTagAggregateType<T>>

    /**
     * Group by HashTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HashTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashTagGroupByArgs['orderBy'] }
        : { orderBy?: HashTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HashTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HashTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HashTagClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    HashTagOnPost<T extends HashTag$HashTagOnPostArgs= {}>(args?: Subset<T, HashTag$HashTagOnPostArgs>): Prisma.PrismaPromise<Array<HashTagOnPostGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HashTag base type for findUnique actions
   */
  export type HashTagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * Filter, which HashTag to fetch.
     */
    where: HashTagWhereUniqueInput
  }

  /**
   * HashTag findUnique
   */
  export interface HashTagFindUniqueArgs extends HashTagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HashTag findUniqueOrThrow
   */
  export type HashTagFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * Filter, which HashTag to fetch.
     */
    where: HashTagWhereUniqueInput
  }


  /**
   * HashTag base type for findFirst actions
   */
  export type HashTagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * Filter, which HashTag to fetch.
     */
    where?: HashTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTags to fetch.
     */
    orderBy?: Enumerable<HashTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HashTags.
     */
    cursor?: HashTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HashTags.
     */
    distinct?: Enumerable<HashTagScalarFieldEnum>
  }

  /**
   * HashTag findFirst
   */
  export interface HashTagFindFirstArgs extends HashTagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HashTag findFirstOrThrow
   */
  export type HashTagFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * Filter, which HashTag to fetch.
     */
    where?: HashTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTags to fetch.
     */
    orderBy?: Enumerable<HashTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HashTags.
     */
    cursor?: HashTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HashTags.
     */
    distinct?: Enumerable<HashTagScalarFieldEnum>
  }


  /**
   * HashTag findMany
   */
  export type HashTagFindManyArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * Filter, which HashTags to fetch.
     */
    where?: HashTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTags to fetch.
     */
    orderBy?: Enumerable<HashTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HashTags.
     */
    cursor?: HashTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTags.
     */
    skip?: number
    distinct?: Enumerable<HashTagScalarFieldEnum>
  }


  /**
   * HashTag create
   */
  export type HashTagCreateArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * The data needed to create a HashTag.
     */
    data: XOR<HashTagCreateInput, HashTagUncheckedCreateInput>
  }


  /**
   * HashTag createMany
   */
  export type HashTagCreateManyArgs = {
    /**
     * The data used to create many HashTags.
     */
    data: Enumerable<HashTagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HashTag update
   */
  export type HashTagUpdateArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * The data needed to update a HashTag.
     */
    data: XOR<HashTagUpdateInput, HashTagUncheckedUpdateInput>
    /**
     * Choose, which HashTag to update.
     */
    where: HashTagWhereUniqueInput
  }


  /**
   * HashTag updateMany
   */
  export type HashTagUpdateManyArgs = {
    /**
     * The data used to update HashTags.
     */
    data: XOR<HashTagUpdateManyMutationInput, HashTagUncheckedUpdateManyInput>
    /**
     * Filter which HashTags to update
     */
    where?: HashTagWhereInput
  }


  /**
   * HashTag upsert
   */
  export type HashTagUpsertArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * The filter to search for the HashTag to update in case it exists.
     */
    where: HashTagWhereUniqueInput
    /**
     * In case the HashTag found by the `where` argument doesn't exist, create a new HashTag with this data.
     */
    create: XOR<HashTagCreateInput, HashTagUncheckedCreateInput>
    /**
     * In case the HashTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashTagUpdateInput, HashTagUncheckedUpdateInput>
  }


  /**
   * HashTag delete
   */
  export type HashTagDeleteArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    /**
     * Filter which HashTag to delete.
     */
    where: HashTagWhereUniqueInput
  }


  /**
   * HashTag deleteMany
   */
  export type HashTagDeleteManyArgs = {
    /**
     * Filter which HashTags to delete
     */
    where?: HashTagWhereInput
  }


  /**
   * HashTag.HashTagOnPost
   */
  export type HashTag$HashTagOnPostArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    where?: HashTagOnPostWhereInput
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    cursor?: HashTagOnPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
  }


  /**
   * HashTag without action
   */
  export type HashTagArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
  }



  /**
   * Model HashTagOnPost
   */


  export type AggregateHashTagOnPost = {
    _count: HashTagOnPostCountAggregateOutputType | null
    _avg: HashTagOnPostAvgAggregateOutputType | null
    _sum: HashTagOnPostSumAggregateOutputType | null
    _min: HashTagOnPostMinAggregateOutputType | null
    _max: HashTagOnPostMaxAggregateOutputType | null
  }

  export type HashTagOnPostAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    hashTagId: number | null
  }

  export type HashTagOnPostSumAggregateOutputType = {
    id: number | null
    postId: number | null
    hashTagId: number | null
  }

  export type HashTagOnPostMinAggregateOutputType = {
    id: number | null
    postId: number | null
    hashTagId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type HashTagOnPostMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    hashTagId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type HashTagOnPostCountAggregateOutputType = {
    id: number
    postId: number
    hashTagId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type HashTagOnPostAvgAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
  }

  export type HashTagOnPostSumAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
  }

  export type HashTagOnPostMinAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
    createAt?: true
    updateAt?: true
  }

  export type HashTagOnPostMaxAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
    createAt?: true
    updateAt?: true
  }

  export type HashTagOnPostCountAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type HashTagOnPostAggregateArgs = {
    /**
     * Filter which HashTagOnPost to aggregate.
     */
    where?: HashTagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashTagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HashTagOnPosts
    **/
    _count?: true | HashTagOnPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashTagOnPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashTagOnPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashTagOnPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashTagOnPostMaxAggregateInputType
  }

  export type GetHashTagOnPostAggregateType<T extends HashTagOnPostAggregateArgs> = {
        [P in keyof T & keyof AggregateHashTagOnPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashTagOnPost[P]>
      : GetScalarType<T[P], AggregateHashTagOnPost[P]>
  }




  export type HashTagOnPostGroupByArgs = {
    where?: HashTagOnPostWhereInput
    orderBy?: Enumerable<HashTagOnPostOrderByWithAggregationInput>
    by: HashTagOnPostScalarFieldEnum[]
    having?: HashTagOnPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashTagOnPostCountAggregateInputType | true
    _avg?: HashTagOnPostAvgAggregateInputType
    _sum?: HashTagOnPostSumAggregateInputType
    _min?: HashTagOnPostMinAggregateInputType
    _max?: HashTagOnPostMaxAggregateInputType
  }


  export type HashTagOnPostGroupByOutputType = {
    id: number
    postId: number
    hashTagId: number
    createAt: Date
    updateAt: Date
    _count: HashTagOnPostCountAggregateOutputType | null
    _avg: HashTagOnPostAvgAggregateOutputType | null
    _sum: HashTagOnPostSumAggregateOutputType | null
    _min: HashTagOnPostMinAggregateOutputType | null
    _max: HashTagOnPostMaxAggregateOutputType | null
  }

  type GetHashTagOnPostGroupByPayload<T extends HashTagOnPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HashTagOnPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashTagOnPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashTagOnPostGroupByOutputType[P]>
            : GetScalarType<T[P], HashTagOnPostGroupByOutputType[P]>
        }
      >
    >


  export type HashTagOnPostSelect = {
    id?: boolean
    post?: boolean | PostArgs
    postId?: boolean
    hashTags?: boolean | HashTagArgs
    hashTagId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type HashTagOnPostInclude = {
    post?: boolean | PostArgs
    hashTags?: boolean | HashTagArgs
  }

  export type HashTagOnPostGetPayload<S extends boolean | null | undefined | HashTagOnPostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashTagOnPost :
    S extends undefined ? never :
    S extends { include: any } & (HashTagOnPostArgs | HashTagOnPostFindManyArgs)
    ? HashTagOnPost  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? PostGetPayload<S['include'][P]> :
        P extends 'hashTags' ? HashTagGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HashTagOnPostArgs | HashTagOnPostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? PostGetPayload<S['select'][P]> :
        P extends 'hashTags' ? HashTagGetPayload<S['select'][P]> :  P extends keyof HashTagOnPost ? HashTagOnPost[P] : never
  } 
      : HashTagOnPost


  type HashTagOnPostCountArgs = 
    Omit<HashTagOnPostFindManyArgs, 'select' | 'include'> & {
      select?: HashTagOnPostCountAggregateInputType | true
    }

  export interface HashTagOnPostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HashTagOnPost that matches the filter.
     * @param {HashTagOnPostFindUniqueArgs} args - Arguments to find a HashTagOnPost
     * @example
     * // Get one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HashTagOnPostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HashTagOnPostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HashTagOnPost'> extends True ? Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>> : Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T> | null, null>

    /**
     * Find one HashTagOnPost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HashTagOnPostFindUniqueOrThrowArgs} args - Arguments to find a HashTagOnPost
     * @example
     * // Get one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HashTagOnPostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HashTagOnPostFindUniqueOrThrowArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Find the first HashTagOnPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostFindFirstArgs} args - Arguments to find a HashTagOnPost
     * @example
     * // Get one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HashTagOnPostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HashTagOnPostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HashTagOnPost'> extends True ? Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>> : Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T> | null, null>

    /**
     * Find the first HashTagOnPost that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostFindFirstOrThrowArgs} args - Arguments to find a HashTagOnPost
     * @example
     * // Get one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HashTagOnPostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HashTagOnPostFindFirstOrThrowArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Find zero or more HashTagOnPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HashTagOnPosts
     * const hashTagOnPosts = await prisma.hashTagOnPost.findMany()
     * 
     * // Get first 10 HashTagOnPosts
     * const hashTagOnPosts = await prisma.hashTagOnPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashTagOnPostWithIdOnly = await prisma.hashTagOnPost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HashTagOnPostFindManyArgs>(
      args?: SelectSubset<T, HashTagOnPostFindManyArgs>
    ): Prisma.PrismaPromise<Array<HashTagOnPostGetPayload<T>>>

    /**
     * Create a HashTagOnPost.
     * @param {HashTagOnPostCreateArgs} args - Arguments to create a HashTagOnPost.
     * @example
     * // Create one HashTagOnPost
     * const HashTagOnPost = await prisma.hashTagOnPost.create({
     *   data: {
     *     // ... data to create a HashTagOnPost
     *   }
     * })
     * 
    **/
    create<T extends HashTagOnPostCreateArgs>(
      args: SelectSubset<T, HashTagOnPostCreateArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Create many HashTagOnPosts.
     *     @param {HashTagOnPostCreateManyArgs} args - Arguments to create many HashTagOnPosts.
     *     @example
     *     // Create many HashTagOnPosts
     *     const hashTagOnPost = await prisma.hashTagOnPost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HashTagOnPostCreateManyArgs>(
      args?: SelectSubset<T, HashTagOnPostCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HashTagOnPost.
     * @param {HashTagOnPostDeleteArgs} args - Arguments to delete one HashTagOnPost.
     * @example
     * // Delete one HashTagOnPost
     * const HashTagOnPost = await prisma.hashTagOnPost.delete({
     *   where: {
     *     // ... filter to delete one HashTagOnPost
     *   }
     * })
     * 
    **/
    delete<T extends HashTagOnPostDeleteArgs>(
      args: SelectSubset<T, HashTagOnPostDeleteArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Update one HashTagOnPost.
     * @param {HashTagOnPostUpdateArgs} args - Arguments to update one HashTagOnPost.
     * @example
     * // Update one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HashTagOnPostUpdateArgs>(
      args: SelectSubset<T, HashTagOnPostUpdateArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Delete zero or more HashTagOnPosts.
     * @param {HashTagOnPostDeleteManyArgs} args - Arguments to filter HashTagOnPosts to delete.
     * @example
     * // Delete a few HashTagOnPosts
     * const { count } = await prisma.hashTagOnPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HashTagOnPostDeleteManyArgs>(
      args?: SelectSubset<T, HashTagOnPostDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HashTagOnPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HashTagOnPosts
     * const hashTagOnPost = await prisma.hashTagOnPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HashTagOnPostUpdateManyArgs>(
      args: SelectSubset<T, HashTagOnPostUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HashTagOnPost.
     * @param {HashTagOnPostUpsertArgs} args - Arguments to update or create a HashTagOnPost.
     * @example
     * // Update or create a HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.upsert({
     *   create: {
     *     // ... data to create a HashTagOnPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HashTagOnPost we want to update
     *   }
     * })
    **/
    upsert<T extends HashTagOnPostUpsertArgs>(
      args: SelectSubset<T, HashTagOnPostUpsertArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Count the number of HashTagOnPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostCountArgs} args - Arguments to filter HashTagOnPosts to count.
     * @example
     * // Count the number of HashTagOnPosts
     * const count = await prisma.hashTagOnPost.count({
     *   where: {
     *     // ... the filter for the HashTagOnPosts we want to count
     *   }
     * })
    **/
    count<T extends HashTagOnPostCountArgs>(
      args?: Subset<T, HashTagOnPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashTagOnPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HashTagOnPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HashTagOnPostAggregateArgs>(args: Subset<T, HashTagOnPostAggregateArgs>): Prisma.PrismaPromise<GetHashTagOnPostAggregateType<T>>

    /**
     * Group by HashTagOnPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HashTagOnPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashTagOnPostGroupByArgs['orderBy'] }
        : { orderBy?: HashTagOnPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HashTagOnPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashTagOnPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HashTagOnPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HashTagOnPostClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    post<T extends PostArgs= {}>(args?: Subset<T, PostArgs>): Prisma__PostClient<PostGetPayload<T> | Null>;

    hashTags<T extends HashTagArgs= {}>(args?: Subset<T, HashTagArgs>): Prisma__HashTagClient<HashTagGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HashTagOnPost base type for findUnique actions
   */
  export type HashTagOnPostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPost to fetch.
     */
    where: HashTagOnPostWhereUniqueInput
  }

  /**
   * HashTagOnPost findUnique
   */
  export interface HashTagOnPostFindUniqueArgs extends HashTagOnPostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HashTagOnPost findUniqueOrThrow
   */
  export type HashTagOnPostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPost to fetch.
     */
    where: HashTagOnPostWhereUniqueInput
  }


  /**
   * HashTagOnPost base type for findFirst actions
   */
  export type HashTagOnPostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPost to fetch.
     */
    where?: HashTagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HashTagOnPosts.
     */
    cursor?: HashTagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HashTagOnPosts.
     */
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
  }

  /**
   * HashTagOnPost findFirst
   */
  export interface HashTagOnPostFindFirstArgs extends HashTagOnPostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HashTagOnPost findFirstOrThrow
   */
  export type HashTagOnPostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPost to fetch.
     */
    where?: HashTagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HashTagOnPosts.
     */
    cursor?: HashTagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HashTagOnPosts.
     */
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
  }


  /**
   * HashTagOnPost findMany
   */
  export type HashTagOnPostFindManyArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPosts to fetch.
     */
    where?: HashTagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HashTagOnPosts.
     */
    cursor?: HashTagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTagOnPosts.
     */
    skip?: number
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
  }


  /**
   * HashTagOnPost create
   */
  export type HashTagOnPostCreateArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * The data needed to create a HashTagOnPost.
     */
    data: XOR<HashTagOnPostCreateInput, HashTagOnPostUncheckedCreateInput>
  }


  /**
   * HashTagOnPost createMany
   */
  export type HashTagOnPostCreateManyArgs = {
    /**
     * The data used to create many HashTagOnPosts.
     */
    data: Enumerable<HashTagOnPostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HashTagOnPost update
   */
  export type HashTagOnPostUpdateArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * The data needed to update a HashTagOnPost.
     */
    data: XOR<HashTagOnPostUpdateInput, HashTagOnPostUncheckedUpdateInput>
    /**
     * Choose, which HashTagOnPost to update.
     */
    where: HashTagOnPostWhereUniqueInput
  }


  /**
   * HashTagOnPost updateMany
   */
  export type HashTagOnPostUpdateManyArgs = {
    /**
     * The data used to update HashTagOnPosts.
     */
    data: XOR<HashTagOnPostUpdateManyMutationInput, HashTagOnPostUncheckedUpdateManyInput>
    /**
     * Filter which HashTagOnPosts to update
     */
    where?: HashTagOnPostWhereInput
  }


  /**
   * HashTagOnPost upsert
   */
  export type HashTagOnPostUpsertArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * The filter to search for the HashTagOnPost to update in case it exists.
     */
    where: HashTagOnPostWhereUniqueInput
    /**
     * In case the HashTagOnPost found by the `where` argument doesn't exist, create a new HashTagOnPost with this data.
     */
    create: XOR<HashTagOnPostCreateInput, HashTagOnPostUncheckedCreateInput>
    /**
     * In case the HashTagOnPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashTagOnPostUpdateInput, HashTagOnPostUncheckedUpdateInput>
  }


  /**
   * HashTagOnPost delete
   */
  export type HashTagOnPostDeleteArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter which HashTagOnPost to delete.
     */
    where: HashTagOnPostWhereUniqueInput
  }


  /**
   * HashTagOnPost deleteMany
   */
  export type HashTagOnPostDeleteManyArgs = {
    /**
     * Filter which HashTagOnPosts to delete
     */
    where?: HashTagOnPostWhereInput
  }


  /**
   * HashTagOnPost without action
   */
  export type HashTagOnPostArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
  }



  /**
   * Model Reply
   */


  export type AggregateReply = {
    _count: ReplyCountAggregateOutputType | null
    _avg: ReplyAvgAggregateOutputType | null
    _sum: ReplySumAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  export type ReplyAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type ReplySumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type ReplyMinAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    message: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    message: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    message: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ReplyAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type ReplySumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type ReplyMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    message?: true
    createAt?: true
    updateAt?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    message?: true
    createAt?: true
    updateAt?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    message?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ReplyAggregateArgs = {
    /**
     * Filter which Reply to aggregate.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: Enumerable<ReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Replies
    **/
    _count?: true | ReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplyMaxAggregateInputType
  }

  export type GetReplyAggregateType<T extends ReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReply[P]>
      : GetScalarType<T[P], AggregateReply[P]>
  }




  export type ReplyGroupByArgs = {
    where?: ReplyWhereInput
    orderBy?: Enumerable<ReplyOrderByWithAggregationInput>
    by: ReplyScalarFieldEnum[]
    having?: ReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplyCountAggregateInputType | true
    _avg?: ReplyAvgAggregateInputType
    _sum?: ReplySumAggregateInputType
    _min?: ReplyMinAggregateInputType
    _max?: ReplyMaxAggregateInputType
  }


  export type ReplyGroupByOutputType = {
    id: number
    postId: number
    userId: number
    message: string
    createAt: Date
    updateAt: Date
    _count: ReplyCountAggregateOutputType | null
    _avg: ReplyAvgAggregateOutputType | null
    _sum: ReplySumAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  type GetReplyGroupByPayload<T extends ReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ReplyGroupByOutputType[P]>
        }
      >
    >


  export type ReplySelect = {
    id?: boolean
    posts?: boolean | PostArgs
    postId?: boolean
    users?: boolean | UserArgs
    userId?: boolean
    message?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type ReplyInclude = {
    posts?: boolean | PostArgs
    users?: boolean | UserArgs
  }

  export type ReplyGetPayload<S extends boolean | null | undefined | ReplyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Reply :
    S extends undefined ? never :
    S extends { include: any } & (ReplyArgs | ReplyFindManyArgs)
    ? Reply  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'posts' ? PostGetPayload<S['include'][P]> :
        P extends 'users' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ReplyArgs | ReplyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'posts' ? PostGetPayload<S['select'][P]> :
        P extends 'users' ? UserGetPayload<S['select'][P]> :  P extends keyof Reply ? Reply[P] : never
  } 
      : Reply


  type ReplyCountArgs = 
    Omit<ReplyFindManyArgs, 'select' | 'include'> & {
      select?: ReplyCountAggregateInputType | true
    }

  export interface ReplyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Reply that matches the filter.
     * @param {ReplyFindUniqueArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReplyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReplyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Reply'> extends True ? Prisma__ReplyClient<ReplyGetPayload<T>> : Prisma__ReplyClient<ReplyGetPayload<T> | null, null>

    /**
     * Find one Reply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReplyFindUniqueOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReplyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReplyFindUniqueOrThrowArgs>
    ): Prisma__ReplyClient<ReplyGetPayload<T>>

    /**
     * Find the first Reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReplyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReplyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Reply'> extends True ? Prisma__ReplyClient<ReplyGetPayload<T>> : Prisma__ReplyClient<ReplyGetPayload<T> | null, null>

    /**
     * Find the first Reply that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReplyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReplyFindFirstOrThrowArgs>
    ): Prisma__ReplyClient<ReplyGetPayload<T>>

    /**
     * Find zero or more Replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Replies
     * const replies = await prisma.reply.findMany()
     * 
     * // Get first 10 Replies
     * const replies = await prisma.reply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replyWithIdOnly = await prisma.reply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReplyFindManyArgs>(
      args?: SelectSubset<T, ReplyFindManyArgs>
    ): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>>

    /**
     * Create a Reply.
     * @param {ReplyCreateArgs} args - Arguments to create a Reply.
     * @example
     * // Create one Reply
     * const Reply = await prisma.reply.create({
     *   data: {
     *     // ... data to create a Reply
     *   }
     * })
     * 
    **/
    create<T extends ReplyCreateArgs>(
      args: SelectSubset<T, ReplyCreateArgs>
    ): Prisma__ReplyClient<ReplyGetPayload<T>>

    /**
     * Create many Replies.
     *     @param {ReplyCreateManyArgs} args - Arguments to create many Replies.
     *     @example
     *     // Create many Replies
     *     const reply = await prisma.reply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReplyCreateManyArgs>(
      args?: SelectSubset<T, ReplyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reply.
     * @param {ReplyDeleteArgs} args - Arguments to delete one Reply.
     * @example
     * // Delete one Reply
     * const Reply = await prisma.reply.delete({
     *   where: {
     *     // ... filter to delete one Reply
     *   }
     * })
     * 
    **/
    delete<T extends ReplyDeleteArgs>(
      args: SelectSubset<T, ReplyDeleteArgs>
    ): Prisma__ReplyClient<ReplyGetPayload<T>>

    /**
     * Update one Reply.
     * @param {ReplyUpdateArgs} args - Arguments to update one Reply.
     * @example
     * // Update one Reply
     * const reply = await prisma.reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReplyUpdateArgs>(
      args: SelectSubset<T, ReplyUpdateArgs>
    ): Prisma__ReplyClient<ReplyGetPayload<T>>

    /**
     * Delete zero or more Replies.
     * @param {ReplyDeleteManyArgs} args - Arguments to filter Replies to delete.
     * @example
     * // Delete a few Replies
     * const { count } = await prisma.reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReplyDeleteManyArgs>(
      args?: SelectSubset<T, ReplyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReplyUpdateManyArgs>(
      args: SelectSubset<T, ReplyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reply.
     * @param {ReplyUpsertArgs} args - Arguments to update or create a Reply.
     * @example
     * // Update or create a Reply
     * const reply = await prisma.reply.upsert({
     *   create: {
     *     // ... data to create a Reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reply we want to update
     *   }
     * })
    **/
    upsert<T extends ReplyUpsertArgs>(
      args: SelectSubset<T, ReplyUpsertArgs>
    ): Prisma__ReplyClient<ReplyGetPayload<T>>

    /**
     * Count the number of Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyCountArgs} args - Arguments to filter Replies to count.
     * @example
     * // Count the number of Replies
     * const count = await prisma.reply.count({
     *   where: {
     *     // ... the filter for the Replies we want to count
     *   }
     * })
    **/
    count<T extends ReplyCountArgs>(
      args?: Subset<T, ReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReplyAggregateArgs>(args: Subset<T, ReplyAggregateArgs>): Prisma.PrismaPromise<GetReplyAggregateType<T>>

    /**
     * Group by Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplyGroupByArgs['orderBy'] }
        : { orderBy?: ReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReplyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    posts<T extends PostArgs= {}>(args?: Subset<T, PostArgs>): Prisma__PostClient<PostGetPayload<T> | Null>;

    users<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Reply base type for findUnique actions
   */
  export type ReplyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findUnique
   */
  export interface ReplyFindUniqueArgs extends ReplyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Reply findUniqueOrThrow
   */
  export type ReplyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }


  /**
   * Reply base type for findFirst actions
   */
  export type ReplyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: Enumerable<ReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: Enumerable<ReplyScalarFieldEnum>
  }

  /**
   * Reply findFirst
   */
  export interface ReplyFindFirstArgs extends ReplyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Reply findFirstOrThrow
   */
  export type ReplyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: Enumerable<ReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: Enumerable<ReplyScalarFieldEnum>
  }


  /**
   * Reply findMany
   */
  export type ReplyFindManyArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * Filter, which Replies to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: Enumerable<ReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    distinct?: Enumerable<ReplyScalarFieldEnum>
  }


  /**
   * Reply create
   */
  export type ReplyCreateArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * The data needed to create a Reply.
     */
    data: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
  }


  /**
   * Reply createMany
   */
  export type ReplyCreateManyArgs = {
    /**
     * The data used to create many Replies.
     */
    data: Enumerable<ReplyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Reply update
   */
  export type ReplyUpdateArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * The data needed to update a Reply.
     */
    data: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
    /**
     * Choose, which Reply to update.
     */
    where: ReplyWhereUniqueInput
  }


  /**
   * Reply updateMany
   */
  export type ReplyUpdateManyArgs = {
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
  }


  /**
   * Reply upsert
   */
  export type ReplyUpsertArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * The filter to search for the Reply to update in case it exists.
     */
    where: ReplyWhereUniqueInput
    /**
     * In case the Reply found by the `where` argument doesn't exist, create a new Reply with this data.
     */
    create: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
    /**
     * In case the Reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
  }


  /**
   * Reply delete
   */
  export type ReplyDeleteArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
    /**
     * Filter which Reply to delete.
     */
    where: ReplyWhereUniqueInput
  }


  /**
   * Reply deleteMany
   */
  export type ReplyDeleteManyArgs = {
    /**
     * Filter which Replies to delete
     */
    where?: ReplyWhereInput
  }


  /**
   * Reply without action
   */
  export type ReplyArgs = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReplyInclude | null
  }



  /**
   * Model UserRelation
   */


  export type AggregateUserRelation = {
    _count: UserRelationCountAggregateOutputType | null
    _avg: UserRelationAvgAggregateOutputType | null
    _sum: UserRelationSumAggregateOutputType | null
    _min: UserRelationMinAggregateOutputType | null
    _max: UserRelationMaxAggregateOutputType | null
  }

  export type UserRelationAvgAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
  }

  export type UserRelationSumAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
  }

  export type UserRelationMinAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserRelationMaxAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserRelationCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserRelationAvgAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type UserRelationSumAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type UserRelationMinAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createAt?: true
    updateAt?: true
  }

  export type UserRelationMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createAt?: true
    updateAt?: true
  }

  export type UserRelationCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserRelationAggregateArgs = {
    /**
     * Filter which UserRelation to aggregate.
     */
    where?: UserRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRelations to fetch.
     */
    orderBy?: Enumerable<UserRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRelations
    **/
    _count?: true | UserRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRelationMaxAggregateInputType
  }

  export type GetUserRelationAggregateType<T extends UserRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRelation[P]>
      : GetScalarType<T[P], AggregateUserRelation[P]>
  }




  export type UserRelationGroupByArgs = {
    where?: UserRelationWhereInput
    orderBy?: Enumerable<UserRelationOrderByWithAggregationInput>
    by: UserRelationScalarFieldEnum[]
    having?: UserRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRelationCountAggregateInputType | true
    _avg?: UserRelationAvgAggregateInputType
    _sum?: UserRelationSumAggregateInputType
    _min?: UserRelationMinAggregateInputType
    _max?: UserRelationMaxAggregateInputType
  }


  export type UserRelationGroupByOutputType = {
    id: number
    fromId: number
    toId: number
    createAt: Date
    updateAt: Date
    _count: UserRelationCountAggregateOutputType | null
    _avg: UserRelationAvgAggregateOutputType | null
    _sum: UserRelationSumAggregateOutputType | null
    _min: UserRelationMinAggregateOutputType | null
    _max: UserRelationMaxAggregateOutputType | null
  }

  type GetUserRelationGroupByPayload<T extends UserRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRelationGroupByOutputType[P]>
            : GetScalarType<T[P], UserRelationGroupByOutputType[P]>
        }
      >
    >


  export type UserRelationSelect = {
    id?: boolean
    from?: boolean | UserArgs
    fromId?: boolean
    to?: boolean | UserArgs
    toId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type UserRelationInclude = {
    from?: boolean | UserArgs
    to?: boolean | UserArgs
  }

  export type UserRelationGetPayload<S extends boolean | null | undefined | UserRelationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserRelation :
    S extends undefined ? never :
    S extends { include: any } & (UserRelationArgs | UserRelationFindManyArgs)
    ? UserRelation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'from' ? UserGetPayload<S['include'][P]> :
        P extends 'to' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserRelationArgs | UserRelationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'from' ? UserGetPayload<S['select'][P]> :
        P extends 'to' ? UserGetPayload<S['select'][P]> :  P extends keyof UserRelation ? UserRelation[P] : never
  } 
      : UserRelation


  type UserRelationCountArgs = 
    Omit<UserRelationFindManyArgs, 'select' | 'include'> & {
      select?: UserRelationCountAggregateInputType | true
    }

  export interface UserRelationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserRelation that matches the filter.
     * @param {UserRelationFindUniqueArgs} args - Arguments to find a UserRelation
     * @example
     * // Get one UserRelation
     * const userRelation = await prisma.userRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserRelationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserRelationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserRelation'> extends True ? Prisma__UserRelationClient<UserRelationGetPayload<T>> : Prisma__UserRelationClient<UserRelationGetPayload<T> | null, null>

    /**
     * Find one UserRelation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserRelationFindUniqueOrThrowArgs} args - Arguments to find a UserRelation
     * @example
     * // Get one UserRelation
     * const userRelation = await prisma.userRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserRelationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserRelationFindUniqueOrThrowArgs>
    ): Prisma__UserRelationClient<UserRelationGetPayload<T>>

    /**
     * Find the first UserRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationFindFirstArgs} args - Arguments to find a UserRelation
     * @example
     * // Get one UserRelation
     * const userRelation = await prisma.userRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserRelationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserRelationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserRelation'> extends True ? Prisma__UserRelationClient<UserRelationGetPayload<T>> : Prisma__UserRelationClient<UserRelationGetPayload<T> | null, null>

    /**
     * Find the first UserRelation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationFindFirstOrThrowArgs} args - Arguments to find a UserRelation
     * @example
     * // Get one UserRelation
     * const userRelation = await prisma.userRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserRelationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserRelationFindFirstOrThrowArgs>
    ): Prisma__UserRelationClient<UserRelationGetPayload<T>>

    /**
     * Find zero or more UserRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRelations
     * const userRelations = await prisma.userRelation.findMany()
     * 
     * // Get first 10 UserRelations
     * const userRelations = await prisma.userRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRelationWithIdOnly = await prisma.userRelation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserRelationFindManyArgs>(
      args?: SelectSubset<T, UserRelationFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>>

    /**
     * Create a UserRelation.
     * @param {UserRelationCreateArgs} args - Arguments to create a UserRelation.
     * @example
     * // Create one UserRelation
     * const UserRelation = await prisma.userRelation.create({
     *   data: {
     *     // ... data to create a UserRelation
     *   }
     * })
     * 
    **/
    create<T extends UserRelationCreateArgs>(
      args: SelectSubset<T, UserRelationCreateArgs>
    ): Prisma__UserRelationClient<UserRelationGetPayload<T>>

    /**
     * Create many UserRelations.
     *     @param {UserRelationCreateManyArgs} args - Arguments to create many UserRelations.
     *     @example
     *     // Create many UserRelations
     *     const userRelation = await prisma.userRelation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserRelationCreateManyArgs>(
      args?: SelectSubset<T, UserRelationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRelation.
     * @param {UserRelationDeleteArgs} args - Arguments to delete one UserRelation.
     * @example
     * // Delete one UserRelation
     * const UserRelation = await prisma.userRelation.delete({
     *   where: {
     *     // ... filter to delete one UserRelation
     *   }
     * })
     * 
    **/
    delete<T extends UserRelationDeleteArgs>(
      args: SelectSubset<T, UserRelationDeleteArgs>
    ): Prisma__UserRelationClient<UserRelationGetPayload<T>>

    /**
     * Update one UserRelation.
     * @param {UserRelationUpdateArgs} args - Arguments to update one UserRelation.
     * @example
     * // Update one UserRelation
     * const userRelation = await prisma.userRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserRelationUpdateArgs>(
      args: SelectSubset<T, UserRelationUpdateArgs>
    ): Prisma__UserRelationClient<UserRelationGetPayload<T>>

    /**
     * Delete zero or more UserRelations.
     * @param {UserRelationDeleteManyArgs} args - Arguments to filter UserRelations to delete.
     * @example
     * // Delete a few UserRelations
     * const { count } = await prisma.userRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserRelationDeleteManyArgs>(
      args?: SelectSubset<T, UserRelationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRelations
     * const userRelation = await prisma.userRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserRelationUpdateManyArgs>(
      args: SelectSubset<T, UserRelationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRelation.
     * @param {UserRelationUpsertArgs} args - Arguments to update or create a UserRelation.
     * @example
     * // Update or create a UserRelation
     * const userRelation = await prisma.userRelation.upsert({
     *   create: {
     *     // ... data to create a UserRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRelation we want to update
     *   }
     * })
    **/
    upsert<T extends UserRelationUpsertArgs>(
      args: SelectSubset<T, UserRelationUpsertArgs>
    ): Prisma__UserRelationClient<UserRelationGetPayload<T>>

    /**
     * Count the number of UserRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationCountArgs} args - Arguments to filter UserRelations to count.
     * @example
     * // Count the number of UserRelations
     * const count = await prisma.userRelation.count({
     *   where: {
     *     // ... the filter for the UserRelations we want to count
     *   }
     * })
    **/
    count<T extends UserRelationCountArgs>(
      args?: Subset<T, UserRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRelationAggregateArgs>(args: Subset<T, UserRelationAggregateArgs>): Prisma.PrismaPromise<GetUserRelationAggregateType<T>>

    /**
     * Group by UserRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRelationGroupByArgs['orderBy'] }
        : { orderBy?: UserRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserRelationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    from<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    to<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserRelation base type for findUnique actions
   */
  export type UserRelationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * Filter, which UserRelation to fetch.
     */
    where: UserRelationWhereUniqueInput
  }

  /**
   * UserRelation findUnique
   */
  export interface UserRelationFindUniqueArgs extends UserRelationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserRelation findUniqueOrThrow
   */
  export type UserRelationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * Filter, which UserRelation to fetch.
     */
    where: UserRelationWhereUniqueInput
  }


  /**
   * UserRelation base type for findFirst actions
   */
  export type UserRelationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * Filter, which UserRelation to fetch.
     */
    where?: UserRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRelations to fetch.
     */
    orderBy?: Enumerable<UserRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRelations.
     */
    cursor?: UserRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRelations.
     */
    distinct?: Enumerable<UserRelationScalarFieldEnum>
  }

  /**
   * UserRelation findFirst
   */
  export interface UserRelationFindFirstArgs extends UserRelationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserRelation findFirstOrThrow
   */
  export type UserRelationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * Filter, which UserRelation to fetch.
     */
    where?: UserRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRelations to fetch.
     */
    orderBy?: Enumerable<UserRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRelations.
     */
    cursor?: UserRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRelations.
     */
    distinct?: Enumerable<UserRelationScalarFieldEnum>
  }


  /**
   * UserRelation findMany
   */
  export type UserRelationFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * Filter, which UserRelations to fetch.
     */
    where?: UserRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRelations to fetch.
     */
    orderBy?: Enumerable<UserRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRelations.
     */
    cursor?: UserRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRelations.
     */
    skip?: number
    distinct?: Enumerable<UserRelationScalarFieldEnum>
  }


  /**
   * UserRelation create
   */
  export type UserRelationCreateArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * The data needed to create a UserRelation.
     */
    data: XOR<UserRelationCreateInput, UserRelationUncheckedCreateInput>
  }


  /**
   * UserRelation createMany
   */
  export type UserRelationCreateManyArgs = {
    /**
     * The data used to create many UserRelations.
     */
    data: Enumerable<UserRelationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserRelation update
   */
  export type UserRelationUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * The data needed to update a UserRelation.
     */
    data: XOR<UserRelationUpdateInput, UserRelationUncheckedUpdateInput>
    /**
     * Choose, which UserRelation to update.
     */
    where: UserRelationWhereUniqueInput
  }


  /**
   * UserRelation updateMany
   */
  export type UserRelationUpdateManyArgs = {
    /**
     * The data used to update UserRelations.
     */
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyInput>
    /**
     * Filter which UserRelations to update
     */
    where?: UserRelationWhereInput
  }


  /**
   * UserRelation upsert
   */
  export type UserRelationUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * The filter to search for the UserRelation to update in case it exists.
     */
    where: UserRelationWhereUniqueInput
    /**
     * In case the UserRelation found by the `where` argument doesn't exist, create a new UserRelation with this data.
     */
    create: XOR<UserRelationCreateInput, UserRelationUncheckedCreateInput>
    /**
     * In case the UserRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRelationUpdateInput, UserRelationUncheckedUpdateInput>
  }


  /**
   * UserRelation delete
   */
  export type UserRelationDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
    /**
     * Filter which UserRelation to delete.
     */
    where: UserRelationWhereUniqueInput
  }


  /**
   * UserRelation deleteMany
   */
  export type UserRelationDeleteManyArgs = {
    /**
     * Filter which UserRelations to delete
     */
    where?: UserRelationWhereInput
  }


  /**
   * UserRelation without action
   */
  export type UserRelationArgs = {
    /**
     * Select specific fields to fetch from the UserRelation
     */
    select?: UserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserRelationInclude | null
  }



  /**
   * Model TodoList
   */


  export type AggregateTodoList = {
    _count: TodoListCountAggregateOutputType | null
    _avg: TodoListAvgAggregateOutputType | null
    _sum: TodoListSumAggregateOutputType | null
    _min: TodoListMinAggregateOutputType | null
    _max: TodoListMaxAggregateOutputType | null
  }

  export type TodoListAvgAggregateOutputType = {
    id: number | null
  }

  export type TodoListSumAggregateOutputType = {
    id: number | null
  }

  export type TodoListMinAggregateOutputType = {
    id: number | null
    task: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoListMaxAggregateOutputType = {
    id: number | null
    task: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoListCountAggregateOutputType = {
    id: number
    task: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TodoListAvgAggregateInputType = {
    id?: true
  }

  export type TodoListSumAggregateInputType = {
    id?: true
  }

  export type TodoListMinAggregateInputType = {
    id?: true
    task?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoListMaxAggregateInputType = {
    id?: true
    task?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoListCountAggregateInputType = {
    id?: true
    task?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TodoListAggregateArgs = {
    /**
     * Filter which TodoList to aggregate.
     */
    where?: TodoListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoLists to fetch.
     */
    orderBy?: Enumerable<TodoListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TodoLists
    **/
    _count?: true | TodoListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodoListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodoListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoListMaxAggregateInputType
  }

  export type GetTodoListAggregateType<T extends TodoListAggregateArgs> = {
        [P in keyof T & keyof AggregateTodoList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodoList[P]>
      : GetScalarType<T[P], AggregateTodoList[P]>
  }




  export type TodoListGroupByArgs = {
    where?: TodoListWhereInput
    orderBy?: Enumerable<TodoListOrderByWithAggregationInput>
    by: TodoListScalarFieldEnum[]
    having?: TodoListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoListCountAggregateInputType | true
    _avg?: TodoListAvgAggregateInputType
    _sum?: TodoListSumAggregateInputType
    _min?: TodoListMinAggregateInputType
    _max?: TodoListMaxAggregateInputType
  }


  export type TodoListGroupByOutputType = {
    id: number
    task: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TodoListCountAggregateOutputType | null
    _avg: TodoListAvgAggregateOutputType | null
    _sum: TodoListSumAggregateOutputType | null
    _min: TodoListMinAggregateOutputType | null
    _max: TodoListMaxAggregateOutputType | null
  }

  type GetTodoListGroupByPayload<T extends TodoListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TodoListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoListGroupByOutputType[P]>
            : GetScalarType<T[P], TodoListGroupByOutputType[P]>
        }
      >
    >


  export type TodoListSelect = {
    id?: boolean
    task?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TodoListGetPayload<S extends boolean | null | undefined | TodoListArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TodoList :
    S extends undefined ? never :
    S extends { include: any } & (TodoListArgs | TodoListFindManyArgs)
    ? TodoList 
    : S extends { select: any } & (TodoListArgs | TodoListFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TodoList ? TodoList[P] : never
  } 
      : TodoList


  type TodoListCountArgs = 
    Omit<TodoListFindManyArgs, 'select' | 'include'> & {
      select?: TodoListCountAggregateInputType | true
    }

  export interface TodoListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TodoList that matches the filter.
     * @param {TodoListFindUniqueArgs} args - Arguments to find a TodoList
     * @example
     * // Get one TodoList
     * const todoList = await prisma.todoList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TodoListFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TodoListFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TodoList'> extends True ? Prisma__TodoListClient<TodoListGetPayload<T>> : Prisma__TodoListClient<TodoListGetPayload<T> | null, null>

    /**
     * Find one TodoList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TodoListFindUniqueOrThrowArgs} args - Arguments to find a TodoList
     * @example
     * // Get one TodoList
     * const todoList = await prisma.todoList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TodoListFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TodoListFindUniqueOrThrowArgs>
    ): Prisma__TodoListClient<TodoListGetPayload<T>>

    /**
     * Find the first TodoList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoListFindFirstArgs} args - Arguments to find a TodoList
     * @example
     * // Get one TodoList
     * const todoList = await prisma.todoList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TodoListFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TodoListFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TodoList'> extends True ? Prisma__TodoListClient<TodoListGetPayload<T>> : Prisma__TodoListClient<TodoListGetPayload<T> | null, null>

    /**
     * Find the first TodoList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoListFindFirstOrThrowArgs} args - Arguments to find a TodoList
     * @example
     * // Get one TodoList
     * const todoList = await prisma.todoList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TodoListFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TodoListFindFirstOrThrowArgs>
    ): Prisma__TodoListClient<TodoListGetPayload<T>>

    /**
     * Find zero or more TodoLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TodoLists
     * const todoLists = await prisma.todoList.findMany()
     * 
     * // Get first 10 TodoLists
     * const todoLists = await prisma.todoList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoListWithIdOnly = await prisma.todoList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TodoListFindManyArgs>(
      args?: SelectSubset<T, TodoListFindManyArgs>
    ): Prisma.PrismaPromise<Array<TodoListGetPayload<T>>>

    /**
     * Create a TodoList.
     * @param {TodoListCreateArgs} args - Arguments to create a TodoList.
     * @example
     * // Create one TodoList
     * const TodoList = await prisma.todoList.create({
     *   data: {
     *     // ... data to create a TodoList
     *   }
     * })
     * 
    **/
    create<T extends TodoListCreateArgs>(
      args: SelectSubset<T, TodoListCreateArgs>
    ): Prisma__TodoListClient<TodoListGetPayload<T>>

    /**
     * Create many TodoLists.
     *     @param {TodoListCreateManyArgs} args - Arguments to create many TodoLists.
     *     @example
     *     // Create many TodoLists
     *     const todoList = await prisma.todoList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TodoListCreateManyArgs>(
      args?: SelectSubset<T, TodoListCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TodoList.
     * @param {TodoListDeleteArgs} args - Arguments to delete one TodoList.
     * @example
     * // Delete one TodoList
     * const TodoList = await prisma.todoList.delete({
     *   where: {
     *     // ... filter to delete one TodoList
     *   }
     * })
     * 
    **/
    delete<T extends TodoListDeleteArgs>(
      args: SelectSubset<T, TodoListDeleteArgs>
    ): Prisma__TodoListClient<TodoListGetPayload<T>>

    /**
     * Update one TodoList.
     * @param {TodoListUpdateArgs} args - Arguments to update one TodoList.
     * @example
     * // Update one TodoList
     * const todoList = await prisma.todoList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TodoListUpdateArgs>(
      args: SelectSubset<T, TodoListUpdateArgs>
    ): Prisma__TodoListClient<TodoListGetPayload<T>>

    /**
     * Delete zero or more TodoLists.
     * @param {TodoListDeleteManyArgs} args - Arguments to filter TodoLists to delete.
     * @example
     * // Delete a few TodoLists
     * const { count } = await prisma.todoList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TodoListDeleteManyArgs>(
      args?: SelectSubset<T, TodoListDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TodoLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TodoLists
     * const todoList = await prisma.todoList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TodoListUpdateManyArgs>(
      args: SelectSubset<T, TodoListUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TodoList.
     * @param {TodoListUpsertArgs} args - Arguments to update or create a TodoList.
     * @example
     * // Update or create a TodoList
     * const todoList = await prisma.todoList.upsert({
     *   create: {
     *     // ... data to create a TodoList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TodoList we want to update
     *   }
     * })
    **/
    upsert<T extends TodoListUpsertArgs>(
      args: SelectSubset<T, TodoListUpsertArgs>
    ): Prisma__TodoListClient<TodoListGetPayload<T>>

    /**
     * Count the number of TodoLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoListCountArgs} args - Arguments to filter TodoLists to count.
     * @example
     * // Count the number of TodoLists
     * const count = await prisma.todoList.count({
     *   where: {
     *     // ... the filter for the TodoLists we want to count
     *   }
     * })
    **/
    count<T extends TodoListCountArgs>(
      args?: Subset<T, TodoListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TodoList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoListAggregateArgs>(args: Subset<T, TodoListAggregateArgs>): Prisma.PrismaPromise<GetTodoListAggregateType<T>>

    /**
     * Group by TodoList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoListGroupByArgs['orderBy'] }
        : { orderBy?: TodoListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TodoList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TodoListClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TodoList base type for findUnique actions
   */
  export type TodoListFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * Filter, which TodoList to fetch.
     */
    where: TodoListWhereUniqueInput
  }

  /**
   * TodoList findUnique
   */
  export interface TodoListFindUniqueArgs extends TodoListFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TodoList findUniqueOrThrow
   */
  export type TodoListFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * Filter, which TodoList to fetch.
     */
    where: TodoListWhereUniqueInput
  }


  /**
   * TodoList base type for findFirst actions
   */
  export type TodoListFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * Filter, which TodoList to fetch.
     */
    where?: TodoListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoLists to fetch.
     */
    orderBy?: Enumerable<TodoListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodoLists.
     */
    cursor?: TodoListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodoLists.
     */
    distinct?: Enumerable<TodoListScalarFieldEnum>
  }

  /**
   * TodoList findFirst
   */
  export interface TodoListFindFirstArgs extends TodoListFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TodoList findFirstOrThrow
   */
  export type TodoListFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * Filter, which TodoList to fetch.
     */
    where?: TodoListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoLists to fetch.
     */
    orderBy?: Enumerable<TodoListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TodoLists.
     */
    cursor?: TodoListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TodoLists.
     */
    distinct?: Enumerable<TodoListScalarFieldEnum>
  }


  /**
   * TodoList findMany
   */
  export type TodoListFindManyArgs = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * Filter, which TodoLists to fetch.
     */
    where?: TodoListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TodoLists to fetch.
     */
    orderBy?: Enumerable<TodoListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TodoLists.
     */
    cursor?: TodoListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TodoLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TodoLists.
     */
    skip?: number
    distinct?: Enumerable<TodoListScalarFieldEnum>
  }


  /**
   * TodoList create
   */
  export type TodoListCreateArgs = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * The data needed to create a TodoList.
     */
    data: XOR<TodoListCreateInput, TodoListUncheckedCreateInput>
  }


  /**
   * TodoList createMany
   */
  export type TodoListCreateManyArgs = {
    /**
     * The data used to create many TodoLists.
     */
    data: Enumerable<TodoListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TodoList update
   */
  export type TodoListUpdateArgs = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * The data needed to update a TodoList.
     */
    data: XOR<TodoListUpdateInput, TodoListUncheckedUpdateInput>
    /**
     * Choose, which TodoList to update.
     */
    where: TodoListWhereUniqueInput
  }


  /**
   * TodoList updateMany
   */
  export type TodoListUpdateManyArgs = {
    /**
     * The data used to update TodoLists.
     */
    data: XOR<TodoListUpdateManyMutationInput, TodoListUncheckedUpdateManyInput>
    /**
     * Filter which TodoLists to update
     */
    where?: TodoListWhereInput
  }


  /**
   * TodoList upsert
   */
  export type TodoListUpsertArgs = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * The filter to search for the TodoList to update in case it exists.
     */
    where: TodoListWhereUniqueInput
    /**
     * In case the TodoList found by the `where` argument doesn't exist, create a new TodoList with this data.
     */
    create: XOR<TodoListCreateInput, TodoListUncheckedCreateInput>
    /**
     * In case the TodoList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoListUpdateInput, TodoListUncheckedUpdateInput>
  }


  /**
   * TodoList delete
   */
  export type TodoListDeleteArgs = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
    /**
     * Filter which TodoList to delete.
     */
    where: TodoListWhereUniqueInput
  }


  /**
   * TodoList deleteMany
   */
  export type TodoListDeleteManyArgs = {
    /**
     * Filter which TodoLists to delete
     */
    where?: TodoListWhereInput
  }


  /**
   * TodoList without action
   */
  export type TodoListArgs = {
    /**
     * Select specific fields to fetch from the TodoList
     */
    select?: TodoListSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BinKitchenCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BinKitchenCategoryScalarFieldEnum = (typeof BinKitchenCategoryScalarFieldEnum)[keyof typeof BinKitchenCategoryScalarFieldEnum]


  export const BinKitchenMenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    price: 'price',
    categoryName: 'categoryName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BinKitchenMenuScalarFieldEnum = (typeof BinKitchenMenuScalarFieldEnum)[keyof typeof BinKitchenMenuScalarFieldEnum]


  export const BinKitchenOrderItemScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    orderId: 'orderId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BinKitchenOrderItemScalarFieldEnum = (typeof BinKitchenOrderItemScalarFieldEnum)[keyof typeof BinKitchenOrderItemScalarFieldEnum]


  export const BinKitchenOrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    tableId: 'tableId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BinKitchenOrderScalarFieldEnum = (typeof BinKitchenOrderScalarFieldEnum)[keyof typeof BinKitchenOrderScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    choices: 'choices',
    questionId: 'questionId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const DirecMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    fromUser: 'fromUser',
    toUser: 'toUser',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DirecMessageScalarFieldEnum = (typeof DirecMessageScalarFieldEnum)[keyof typeof DirecMessageScalarFieldEnum]


  export const HashTagOnPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    hashTagId: 'hashTagId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type HashTagOnPostScalarFieldEnum = (typeof HashTagOnPostScalarFieldEnum)[keyof typeof HashTagOnPostScalarFieldEnum]


  export const HashTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type HashTagScalarFieldEnum = (typeof HashTagScalarFieldEnum)[keyof typeof HashTagScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoriesId: 'categoriesId',
    roundQuestionId: 'roundQuestionId',
    answerId: 'answerId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ReplyScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    message: 'message',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


  export const RoundQuestionScalarFieldEnum: {
    id: 'id',
    roundId: 'roundId',
    correctAnswer: 'correctAnswer',
    createAt: 'createAt',
    updateAt: 'updateAt',
    choiceId: 'choiceId'
  };

  export type RoundQuestionScalarFieldEnum = (typeof RoundQuestionScalarFieldEnum)[keyof typeof RoundQuestionScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    createAt: 'createAt',
    updateAt: 'updateAt',
    score: 'score'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TodoListScalarFieldEnum: {
    id: 'id',
    task: 'task',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TodoListScalarFieldEnum = (typeof TodoListScalarFieldEnum)[keyof typeof TodoListScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserRelationScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserRelationScalarFieldEnum = (typeof UserRelationScalarFieldEnum)[keyof typeof UserRelationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profileImage: 'profileImage',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type BinKitchenCategoryWhereInput = {
    AND?: Enumerable<BinKitchenCategoryWhereInput>
    OR?: Enumerable<BinKitchenCategoryWhereInput>
    NOT?: Enumerable<BinKitchenCategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    menus?: BinKitchenMenuListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BinKitchenCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    menus?: BinKitchenMenuOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenCategoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type BinKitchenCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BinKitchenCategoryCountOrderByAggregateInput
    _avg?: BinKitchenCategoryAvgOrderByAggregateInput
    _max?: BinKitchenCategoryMaxOrderByAggregateInput
    _min?: BinKitchenCategoryMinOrderByAggregateInput
    _sum?: BinKitchenCategorySumOrderByAggregateInput
  }

  export type BinKitchenCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BinKitchenCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<BinKitchenCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BinKitchenCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BinKitchenMenuWhereInput = {
    AND?: Enumerable<BinKitchenMenuWhereInput>
    OR?: Enumerable<BinKitchenMenuWhereInput>
    NOT?: Enumerable<BinKitchenMenuWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    price?: FloatFilter | number
    category?: XOR<BinKitchenCategoryRelationFilter, BinKitchenCategoryWhereInput> | null
    categoryName?: StringNullableFilter | string | null
    orderItems?: BinKitchenOrderItemListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BinKitchenMenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    category?: BinKitchenCategoryOrderByWithRelationInput
    categoryName?: SortOrder
    orderItems?: BinKitchenOrderItemOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenMenuWhereUniqueInput = {
    id?: number
  }

  export type BinKitchenMenuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BinKitchenMenuCountOrderByAggregateInput
    _avg?: BinKitchenMenuAvgOrderByAggregateInput
    _max?: BinKitchenMenuMaxOrderByAggregateInput
    _min?: BinKitchenMenuMinOrderByAggregateInput
    _sum?: BinKitchenMenuSumOrderByAggregateInput
  }

  export type BinKitchenMenuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BinKitchenMenuScalarWhereWithAggregatesInput>
    OR?: Enumerable<BinKitchenMenuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BinKitchenMenuScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    categoryName?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BinKitchenOrderWhereInput = {
    AND?: Enumerable<BinKitchenOrderWhereInput>
    OR?: Enumerable<BinKitchenOrderWhereInput>
    NOT?: Enumerable<BinKitchenOrderWhereInput>
    id?: IntFilter | number
    status?: StringFilter | string
    tableId?: IntFilter | number
    items?: BinKitchenOrderItemListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BinKitchenOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    items?: BinKitchenOrderItemOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenOrderWhereUniqueInput = {
    id?: number
  }

  export type BinKitchenOrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BinKitchenOrderCountOrderByAggregateInput
    _avg?: BinKitchenOrderAvgOrderByAggregateInput
    _max?: BinKitchenOrderMaxOrderByAggregateInput
    _min?: BinKitchenOrderMinOrderByAggregateInput
    _sum?: BinKitchenOrderSumOrderByAggregateInput
  }

  export type BinKitchenOrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BinKitchenOrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<BinKitchenOrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BinKitchenOrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    tableId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BinKitchenOrderItemWhereInput = {
    AND?: Enumerable<BinKitchenOrderItemWhereInput>
    OR?: Enumerable<BinKitchenOrderItemWhereInput>
    NOT?: Enumerable<BinKitchenOrderItemWhereInput>
    id?: IntFilter | number
    menu?: XOR<BinKitchenMenuRelationFilter, BinKitchenMenuWhereInput>
    menuId?: IntFilter | number
    order?: XOR<BinKitchenOrderRelationFilter, BinKitchenOrderWhereInput> | null
    orderId?: IntNullableFilter | number | null
    quantity?: IntFilter | number
    totalPrice?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BinKitchenOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    menu?: BinKitchenMenuOrderByWithRelationInput
    menuId?: SortOrder
    order?: BinKitchenOrderOrderByWithRelationInput
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenOrderItemWhereUniqueInput = {
    id?: number
  }

  export type BinKitchenOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BinKitchenOrderItemCountOrderByAggregateInput
    _avg?: BinKitchenOrderItemAvgOrderByAggregateInput
    _max?: BinKitchenOrderItemMaxOrderByAggregateInput
    _min?: BinKitchenOrderItemMinOrderByAggregateInput
    _sum?: BinKitchenOrderItemSumOrderByAggregateInput
  }

  export type BinKitchenOrderItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BinKitchenOrderItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<BinKitchenOrderItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BinKitchenOrderItemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    menuId?: IntWithAggregatesFilter | number
    orderId?: IntNullableWithAggregatesFilter | number | null
    quantity?: IntWithAggregatesFilter | number
    totalPrice?: FloatWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    question?: QuestionListRelationFilter
    round?: RoundListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    question?: QuestionOrderByRelationAggregateInput
    round?: RoundOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuestionWhereInput = {
    AND?: Enumerable<QuestionWhereInput>
    OR?: Enumerable<QuestionWhereInput>
    NOT?: Enumerable<QuestionWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    categories?: XOR<CategoryRelationFilter, CategoryWhereInput>
    categoriesId?: IntFilter | number
    roundQuestion?: XOR<RoundQuestionRelationFilter, RoundQuestionWhereInput>
    roundQuestionId?: IntFilter | number
    choices?: ChoiceListRelationFilter
    answerId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categories?: CategoryOrderByWithRelationInput
    categoriesId?: SortOrder
    roundQuestion?: RoundQuestionOrderByWithRelationInput
    roundQuestionId?: SortOrder
    choices?: ChoiceOrderByRelationAggregateInput
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionWhereUniqueInput = {
    id?: number
  }

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    roundQuestionId?: SortOrder
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    categoriesId?: IntWithAggregatesFilter | number
    roundQuestionId?: IntWithAggregatesFilter | number
    answerId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoundQuestionWhereInput = {
    AND?: Enumerable<RoundQuestionWhereInput>
    OR?: Enumerable<RoundQuestionWhereInput>
    NOT?: Enumerable<RoundQuestionWhereInput>
    id?: IntFilter | number
    question?: QuestionListRelationFilter
    round?: XOR<RoundRelationFilter, RoundWhereInput>
    roundId?: IntFilter | number
    choice?: XOR<ChoiceRelationFilter, ChoiceWhereInput>
    correctAnswer?: BoolFilter | boolean
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    choiceId?: IntFilter | number
  }

  export type RoundQuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: QuestionOrderByRelationAggregateInput
    round?: RoundOrderByWithRelationInput
    roundId?: SortOrder
    choice?: ChoiceOrderByWithRelationInput
    correctAnswer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    choiceId?: SortOrder
  }

  export type RoundQuestionWhereUniqueInput = {
    id?: number
  }

  export type RoundQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    roundId?: SortOrder
    correctAnswer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    choiceId?: SortOrder
    _count?: RoundQuestionCountOrderByAggregateInput
    _avg?: RoundQuestionAvgOrderByAggregateInput
    _max?: RoundQuestionMaxOrderByAggregateInput
    _min?: RoundQuestionMinOrderByAggregateInput
    _sum?: RoundQuestionSumOrderByAggregateInput
  }

  export type RoundQuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundQuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoundQuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoundQuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roundId?: IntWithAggregatesFilter | number
    correctAnswer?: BoolWithAggregatesFilter | boolean
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    choiceId?: IntWithAggregatesFilter | number
  }

  export type RoundWhereInput = {
    AND?: Enumerable<RoundWhereInput>
    OR?: Enumerable<RoundWhereInput>
    NOT?: Enumerable<RoundWhereInput>
    id?: IntFilter | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    categoryId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    score?: IntFilter | number
    roundQuestion?: RoundQuestionListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    category?: CategoryOrderByWithRelationInput
    categoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    score?: SortOrder
    roundQuestion?: RoundQuestionOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = {
    id?: number
  }

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    score?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _avg?: RoundAvgOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
    _sum?: RoundSumOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoundScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoundScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    score?: IntWithAggregatesFilter | number
  }

  export type ChoiceWhereInput = {
    AND?: Enumerable<ChoiceWhereInput>
    OR?: Enumerable<ChoiceWhereInput>
    NOT?: Enumerable<ChoiceWhereInput>
    id?: IntFilter | number
    choices?: IntFilter | number
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    questionId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    roundQuestion?: RoundQuestionListRelationFilter
  }

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder
    choices?: SortOrder
    question?: QuestionOrderByWithRelationInput
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    roundQuestion?: RoundQuestionOrderByRelationAggregateInput
  }

  export type ChoiceWhereUniqueInput = {
    id?: number
    choices?: number
  }

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    choices?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ChoiceCountOrderByAggregateInput
    _avg?: ChoiceAvgOrderByAggregateInput
    _max?: ChoiceMaxOrderByAggregateInput
    _min?: ChoiceMinOrderByAggregateInput
    _sum?: ChoiceSumOrderByAggregateInput
  }

  export type ChoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChoiceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    choices?: IntWithAggregatesFilter | number
    questionId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    profileImage?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    reply?: ReplyListRelationFilter
    fromUserRelations?: UserRelationListRelationFilter
    toUserRelations?: UserRelationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    reply?: ReplyOrderByRelationAggregateInput
    fromUserRelations?: UserRelationOrderByRelationAggregateInput
    toUserRelations?: UserRelationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    profileImage?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    HashTagOnPost?: HashTagOnPostListRelationFilter
    reply?: ReplyListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    HashTagOnPost?: HashTagOnPostOrderByRelationAggregateInput
    reply?: ReplyOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DirecMessageWhereInput = {
    AND?: Enumerable<DirecMessageWhereInput>
    OR?: Enumerable<DirecMessageWhereInput>
    NOT?: Enumerable<DirecMessageWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    fromUser?: StringFilter | string
    toUser?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type DirecMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DirecMessageWhereUniqueInput = {
    id?: number
  }

  export type DirecMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DirecMessageCountOrderByAggregateInput
    _avg?: DirecMessageAvgOrderByAggregateInput
    _max?: DirecMessageMaxOrderByAggregateInput
    _min?: DirecMessageMinOrderByAggregateInput
    _sum?: DirecMessageSumOrderByAggregateInput
  }

  export type DirecMessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DirecMessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<DirecMessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DirecMessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    fromUser?: StringWithAggregatesFilter | string
    toUser?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HashTagWhereInput = {
    AND?: Enumerable<HashTagWhereInput>
    OR?: Enumerable<HashTagWhereInput>
    NOT?: Enumerable<HashTagWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    HashTagOnPost?: HashTagOnPostListRelationFilter
  }

  export type HashTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    HashTagOnPost?: HashTagOnPostOrderByRelationAggregateInput
  }

  export type HashTagWhereUniqueInput = {
    id?: number
  }

  export type HashTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: HashTagCountOrderByAggregateInput
    _avg?: HashTagAvgOrderByAggregateInput
    _max?: HashTagMaxOrderByAggregateInput
    _min?: HashTagMinOrderByAggregateInput
    _sum?: HashTagSumOrderByAggregateInput
  }

  export type HashTagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HashTagScalarWhereWithAggregatesInput>
    OR?: Enumerable<HashTagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HashTagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HashTagOnPostWhereInput = {
    AND?: Enumerable<HashTagOnPostWhereInput>
    OR?: Enumerable<HashTagOnPostWhereInput>
    NOT?: Enumerable<HashTagOnPostWhereInput>
    id?: IntFilter | number
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    hashTags?: XOR<HashTagRelationFilter, HashTagWhereInput>
    hashTagId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type HashTagOnPostOrderByWithRelationInput = {
    id?: SortOrder
    post?: PostOrderByWithRelationInput
    postId?: SortOrder
    hashTags?: HashTagOrderByWithRelationInput
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagOnPostWhereUniqueInput = {
    id?: number
  }

  export type HashTagOnPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: HashTagOnPostCountOrderByAggregateInput
    _avg?: HashTagOnPostAvgOrderByAggregateInput
    _max?: HashTagOnPostMaxOrderByAggregateInput
    _min?: HashTagOnPostMinOrderByAggregateInput
    _sum?: HashTagOnPostSumOrderByAggregateInput
  }

  export type HashTagOnPostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HashTagOnPostScalarWhereWithAggregatesInput>
    OR?: Enumerable<HashTagOnPostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HashTagOnPostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    postId?: IntWithAggregatesFilter | number
    hashTagId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ReplyWhereInput = {
    AND?: Enumerable<ReplyWhereInput>
    OR?: Enumerable<ReplyWhereInput>
    NOT?: Enumerable<ReplyWhereInput>
    id?: IntFilter | number
    posts?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    users?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    message?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    posts?: PostOrderByWithRelationInput
    postId?: SortOrder
    users?: UserOrderByWithRelationInput
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReplyWhereUniqueInput = {
    id?: number
  }

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: ReplyCountOrderByAggregateInput
    _avg?: ReplyAvgOrderByAggregateInput
    _max?: ReplyMaxOrderByAggregateInput
    _min?: ReplyMinOrderByAggregateInput
    _sum?: ReplySumOrderByAggregateInput
  }

  export type ReplyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReplyScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReplyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReplyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    postId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserRelationWhereInput = {
    AND?: Enumerable<UserRelationWhereInput>
    OR?: Enumerable<UserRelationWhereInput>
    NOT?: Enumerable<UserRelationWhereInput>
    id?: IntFilter | number
    from?: XOR<UserRelationFilter, UserWhereInput>
    fromId?: IntFilter | number
    to?: XOR<UserRelationFilter, UserWhereInput>
    toId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type UserRelationOrderByWithRelationInput = {
    id?: SortOrder
    from?: UserOrderByWithRelationInput
    fromId?: SortOrder
    to?: UserOrderByWithRelationInput
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserRelationWhereUniqueInput = {
    id?: number
  }

  export type UserRelationOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserRelationCountOrderByAggregateInput
    _avg?: UserRelationAvgOrderByAggregateInput
    _max?: UserRelationMaxOrderByAggregateInput
    _min?: UserRelationMinOrderByAggregateInput
    _sum?: UserRelationSumOrderByAggregateInput
  }

  export type UserRelationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserRelationScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserRelationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserRelationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fromId?: IntWithAggregatesFilter | number
    toId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TodoListWhereInput = {
    AND?: Enumerable<TodoListWhereInput>
    OR?: Enumerable<TodoListWhereInput>
    NOT?: Enumerable<TodoListWhereInput>
    id?: IntFilter | number
    task?: StringFilter | string
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TodoListOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoListWhereUniqueInput = {
    id?: number
  }

  export type TodoListOrderByWithAggregationInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TodoListCountOrderByAggregateInput
    _avg?: TodoListAvgOrderByAggregateInput
    _max?: TodoListMaxOrderByAggregateInput
    _min?: TodoListMinOrderByAggregateInput
    _sum?: TodoListSumOrderByAggregateInput
  }

  export type TodoListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TodoListScalarWhereWithAggregatesInput>
    OR?: Enumerable<TodoListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TodoListScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    task?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BinKitchenCategoryCreateInput = {
    name: string
    menus?: BinKitchenMenuCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenCategoryUncheckedCreateInput = {
    id?: number
    name: string
    menus?: BinKitchenMenuUncheckedCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    menus?: BinKitchenMenuUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    menus?: BinKitchenMenuUncheckedUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenCategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenMenuCreateInput = {
    name: string
    image: string
    price: number
    category?: BinKitchenCategoryCreateNestedOneWithoutMenusInput
    orderItems?: BinKitchenOrderItemCreateNestedManyWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    orderItems?: BinKitchenOrderItemUncheckedCreateNestedManyWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: BinKitchenCategoryUpdateOneWithoutMenusNestedInput
    orderItems?: BinKitchenOrderItemUpdateManyWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenMenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: BinKitchenOrderItemUncheckedUpdateManyWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenMenuCreateManyInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenMenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderCreateInput = {
    status?: string
    tableId: number
    items?: BinKitchenOrderItemCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderUncheckedCreateInput = {
    id?: number
    status?: string
    tableId: number
    items?: BinKitchenOrderItemUncheckedCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    items?: BinKitchenOrderItemUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    items?: BinKitchenOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderCreateManyInput = {
    id?: number
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemCreateInput = {
    menu: BinKitchenMenuCreateNestedOneWithoutOrderItemsInput
    order?: BinKitchenOrderCreateNestedOneWithoutItemsInput
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemUncheckedCreateInput = {
    id?: number
    menuId: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemUpdateInput = {
    menu?: BinKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: BinKitchenOrderUpdateOneWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemCreateManyInput = {
    id?: number
    menuId: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    question?: QuestionCreateNestedManyWithoutCategoriesInput
    round?: RoundCreateNestedManyWithoutCategoryInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    question?: QuestionUncheckedCreateNestedManyWithoutCategoriesInput
    round?: RoundUncheckedCreateNestedManyWithoutCategoryInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateManyWithoutCategoriesNestedInput
    round?: RoundUpdateManyWithoutCategoryNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    question?: QuestionUncheckedUpdateManyWithoutCategoriesNestedInput
    round?: RoundUncheckedUpdateManyWithoutCategoryNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    name: string
    categories: CategoryCreateNestedOneWithoutQuestionInput
    roundQuestion: RoundQuestionCreateNestedOneWithoutQuestionInput
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    name: string
    categoriesId: number
    roundQuestionId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateOneRequiredWithoutQuestionNestedInput
    roundQuestion?: RoundQuestionUpdateOneRequiredWithoutQuestionNestedInput
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriesId?: IntFieldUpdateOperationsInput | number
    roundQuestionId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: number
    name: string
    categoriesId: number
    roundQuestionId: number
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriesId?: IntFieldUpdateOperationsInput | number
    roundQuestionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionCreateInput = {
    question?: QuestionCreateNestedManyWithoutRoundQuestionInput
    round: RoundCreateNestedOneWithoutRoundQuestionInput
    choice: ChoiceCreateNestedOneWithoutRoundQuestionInput
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuestionUncheckedCreateInput = {
    id?: number
    question?: QuestionUncheckedCreateNestedManyWithoutRoundQuestionInput
    roundId: number
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
    choiceId: number
  }

  export type RoundQuestionUpdateInput = {
    question?: QuestionUpdateManyWithoutRoundQuestionNestedInput
    round?: RoundUpdateOneRequiredWithoutRoundQuestionNestedInput
    choice?: ChoiceUpdateOneRequiredWithoutRoundQuestionNestedInput
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: QuestionUncheckedUpdateManyWithoutRoundQuestionNestedInput
    roundId?: IntFieldUpdateOperationsInput | number
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choiceId?: IntFieldUpdateOperationsInput | number
  }

  export type RoundQuestionCreateManyInput = {
    id?: number
    roundId: number
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
    choiceId: number
  }

  export type RoundQuestionUpdateManyMutationInput = {
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choiceId?: IntFieldUpdateOperationsInput | number
  }

  export type RoundCreateInput = {
    category: CategoryCreateNestedOneWithoutRoundInput
    createAt?: Date | string
    updateAt?: Date | string
    score: number
    roundQuestion?: RoundQuestionCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id?: number
    categoryId: number
    createAt?: Date | string
    updateAt?: Date | string
    score: number
    roundQuestion?: RoundQuestionUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    category?: CategoryUpdateOneRequiredWithoutRoundNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    roundQuestion?: RoundQuestionUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    roundQuestion?: RoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: number
    categoryId: number
    createAt?: Date | string
    updateAt?: Date | string
    score: number
  }

  export type RoundUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ChoiceCreateInput = {
    choices: number
    question: QuestionCreateNestedOneWithoutChoicesInput
    createAt?: Date | string
    updateAt?: Date | string
    roundQuestion?: RoundQuestionCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateInput = {
    id?: number
    choices: number
    questionId: number
    createAt?: Date | string
    updateAt?: Date | string
    roundQuestion?: RoundQuestionUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUpdateInput = {
    choices?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutChoicesNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    choices?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceCreateManyInput = {
    id?: number
    choices: number
    questionId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUpdateManyMutationInput = {
    choices?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    choices?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostCreateNestedManyWithoutPostInput
    reply?: ReplyCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostUncheckedCreateNestedManyWithoutPostInput
    reply?: ReplyUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUpdateManyWithoutPostNestedInput
    reply?: ReplyUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUncheckedUpdateManyWithoutPostNestedInput
    reply?: ReplyUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirecMessageCreateInput = {
    message: string
    fromUser: string
    toUser: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DirecMessageUncheckedCreateInput = {
    id?: number
    message: string
    fromUser: string
    toUser: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DirecMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirecMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirecMessageCreateManyInput = {
    id?: number
    message: string
    fromUser: string
    toUser: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DirecMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirecMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagCreateInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostCreateNestedManyWithoutHashTagsInput
  }

  export type HashTagUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostUncheckedCreateNestedManyWithoutHashTagsInput
  }

  export type HashTagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUpdateManyWithoutHashTagsNestedInput
  }

  export type HashTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUncheckedUpdateManyWithoutHashTagsNestedInput
  }

  export type HashTagCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostCreateInput = {
    post: PostCreateNestedOneWithoutHashTagOnPostInput
    hashTags: HashTagCreateNestedOneWithoutHashTagOnPostInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUncheckedCreateInput = {
    id?: number
    postId: number
    hashTagId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUpdateInput = {
    post?: PostUpdateOneRequiredWithoutHashTagOnPostNestedInput
    hashTags?: HashTagUpdateOneRequiredWithoutHashTagOnPostNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashTagId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostCreateManyInput = {
    id?: number
    postId: number
    hashTagId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashTagId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateInput = {
    posts: PostCreateNestedOneWithoutReplyInput
    users: UserCreateNestedOneWithoutReplyInput
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUncheckedCreateInput = {
    id?: number
    postId: number
    userId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUpdateInput = {
    posts?: PostUpdateOneRequiredWithoutReplyNestedInput
    users?: UserUpdateOneRequiredWithoutReplyNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyInput = {
    id?: number
    postId: number
    userId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateInput = {
    from: UserCreateNestedOneWithoutFromUserRelationsInput
    to: UserCreateNestedOneWithoutToUserRelationsInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUncheckedCreateInput = {
    id?: number
    fromId: number
    toId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUpdateInput = {
    from?: UserUpdateOneRequiredWithoutFromUserRelationsNestedInput
    to?: UserUpdateOneRequiredWithoutToUserRelationsNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateManyInput = {
    id?: number
    fromId: number
    toId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListCreateInput = {
    task: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUncheckedCreateInput = {
    id?: number
    task: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUpdateInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListCreateManyInput = {
    id?: number
    task: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUpdateManyMutationInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BinKitchenMenuListRelationFilter = {
    every?: BinKitchenMenuWhereInput
    some?: BinKitchenMenuWhereInput
    none?: BinKitchenMenuWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BinKitchenMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BinKitchenCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BinKitchenCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type BinKitchenCategoryRelationFilter = {
    is?: BinKitchenCategoryWhereInput | null
    isNot?: BinKitchenCategoryWhereInput | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BinKitchenOrderItemListRelationFilter = {
    every?: BinKitchenOrderItemWhereInput
    some?: BinKitchenOrderItemWhereInput
    none?: BinKitchenOrderItemWhereInput
  }

  export type BinKitchenOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BinKitchenMenuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenMenuAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type BinKitchenMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenMenuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenMenuSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BinKitchenOrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type BinKitchenOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenOrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenOrderSumOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type BinKitchenMenuRelationFilter = {
    is?: BinKitchenMenuWhereInput
    isNot?: BinKitchenMenuWhereInput
  }

  export type BinKitchenOrderRelationFilter = {
    is?: BinKitchenOrderWhereInput | null
    isNot?: BinKitchenOrderWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BinKitchenOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenOrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type BinKitchenOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BinKitchenOrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type RoundQuestionRelationFilter = {
    is?: RoundQuestionWhereInput
    isNot?: RoundQuestionWhereInput
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    roundQuestionId?: SortOrder
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriesId?: SortOrder
    roundQuestionId?: SortOrder
    answerId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    roundQuestionId?: SortOrder
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoriesId?: SortOrder
    roundQuestionId?: SortOrder
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    categoriesId?: SortOrder
    roundQuestionId?: SortOrder
    answerId?: SortOrder
  }

  export type RoundRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type ChoiceRelationFilter = {
    is?: ChoiceWhereInput
    isNot?: ChoiceWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type RoundQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    correctAnswer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    choiceId?: SortOrder
  }

  export type RoundQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
  }

  export type RoundQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    correctAnswer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    choiceId?: SortOrder
  }

  export type RoundQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    correctAnswer?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    choiceId?: SortOrder
  }

  export type RoundQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type RoundQuestionListRelationFilter = {
    every?: RoundQuestionWhereInput
    some?: RoundQuestionWhereInput
    none?: RoundQuestionWhereInput
  }

  export type RoundQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    score?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    score?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    score?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    score?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    score?: SortOrder
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    choices?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    choices?: SortOrder
    questionId?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    choices?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    choices?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    choices?: SortOrder
    questionId?: SortOrder
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type UserRelationListRelationFilter = {
    every?: UserRelationWhereInput
    some?: UserRelationWhereInput
    none?: UserRelationWhereInput
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashTagOnPostListRelationFilter = {
    every?: HashTagOnPostWhereInput
    some?: HashTagOnPostWhereInput
    none?: HashTagOnPostWhereInput
  }

  export type HashTagOnPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DirecMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DirecMessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DirecMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DirecMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DirecMessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type HashTagRelationFilter = {
    is?: HashTagWhereInput
    isNot?: HashTagWhereInput
  }

  export type HashTagOnPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagOnPostAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
  }

  export type HashTagOnPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagOnPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagOnPostSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReplySumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type UserRelationCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserRelationAvgOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type UserRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserRelationMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserRelationSumOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type TodoListCountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TodoListMaxOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoListMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BinKitchenMenuCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<BinKitchenMenuCreateWithoutCategoryInput>, Enumerable<BinKitchenMenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BinKitchenMenuCreateOrConnectWithoutCategoryInput>
    createMany?: BinKitchenMenuCreateManyCategoryInputEnvelope
    connect?: Enumerable<BinKitchenMenuWhereUniqueInput>
  }

  export type BinKitchenMenuUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<BinKitchenMenuCreateWithoutCategoryInput>, Enumerable<BinKitchenMenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BinKitchenMenuCreateOrConnectWithoutCategoryInput>
    createMany?: BinKitchenMenuCreateManyCategoryInputEnvelope
    connect?: Enumerable<BinKitchenMenuWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BinKitchenMenuUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<BinKitchenMenuCreateWithoutCategoryInput>, Enumerable<BinKitchenMenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BinKitchenMenuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<BinKitchenMenuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: BinKitchenMenuCreateManyCategoryInputEnvelope
    set?: Enumerable<BinKitchenMenuWhereUniqueInput>
    disconnect?: Enumerable<BinKitchenMenuWhereUniqueInput>
    delete?: Enumerable<BinKitchenMenuWhereUniqueInput>
    connect?: Enumerable<BinKitchenMenuWhereUniqueInput>
    update?: Enumerable<BinKitchenMenuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<BinKitchenMenuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<BinKitchenMenuScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BinKitchenMenuUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<BinKitchenMenuCreateWithoutCategoryInput>, Enumerable<BinKitchenMenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<BinKitchenMenuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<BinKitchenMenuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: BinKitchenMenuCreateManyCategoryInputEnvelope
    set?: Enumerable<BinKitchenMenuWhereUniqueInput>
    disconnect?: Enumerable<BinKitchenMenuWhereUniqueInput>
    delete?: Enumerable<BinKitchenMenuWhereUniqueInput>
    connect?: Enumerable<BinKitchenMenuWhereUniqueInput>
    update?: Enumerable<BinKitchenMenuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<BinKitchenMenuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<BinKitchenMenuScalarWhereInput>
  }

  export type BinKitchenCategoryCreateNestedOneWithoutMenusInput = {
    create?: XOR<BinKitchenCategoryCreateWithoutMenusInput, BinKitchenCategoryUncheckedCreateWithoutMenusInput>
    connectOrCreate?: BinKitchenCategoryCreateOrConnectWithoutMenusInput
    connect?: BinKitchenCategoryWhereUniqueInput
  }

  export type BinKitchenOrderItemCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<BinKitchenOrderItemCreateWithoutMenuInput>, Enumerable<BinKitchenOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<BinKitchenOrderItemCreateOrConnectWithoutMenuInput>
    createMany?: BinKitchenOrderItemCreateManyMenuInputEnvelope
    connect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
  }

  export type BinKitchenOrderItemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<BinKitchenOrderItemCreateWithoutMenuInput>, Enumerable<BinKitchenOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<BinKitchenOrderItemCreateOrConnectWithoutMenuInput>
    createMany?: BinKitchenOrderItemCreateManyMenuInputEnvelope
    connect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BinKitchenCategoryUpdateOneWithoutMenusNestedInput = {
    create?: XOR<BinKitchenCategoryCreateWithoutMenusInput, BinKitchenCategoryUncheckedCreateWithoutMenusInput>
    connectOrCreate?: BinKitchenCategoryCreateOrConnectWithoutMenusInput
    upsert?: BinKitchenCategoryUpsertWithoutMenusInput
    disconnect?: boolean
    delete?: boolean
    connect?: BinKitchenCategoryWhereUniqueInput
    update?: XOR<BinKitchenCategoryUpdateWithoutMenusInput, BinKitchenCategoryUncheckedUpdateWithoutMenusInput>
  }

  export type BinKitchenOrderItemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<BinKitchenOrderItemCreateWithoutMenuInput>, Enumerable<BinKitchenOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<BinKitchenOrderItemCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<BinKitchenOrderItemUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: BinKitchenOrderItemCreateManyMenuInputEnvelope
    set?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    disconnect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    delete?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    connect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    update?: Enumerable<BinKitchenOrderItemUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<BinKitchenOrderItemUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<BinKitchenOrderItemScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BinKitchenOrderItemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<BinKitchenOrderItemCreateWithoutMenuInput>, Enumerable<BinKitchenOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<BinKitchenOrderItemCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<BinKitchenOrderItemUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: BinKitchenOrderItemCreateManyMenuInputEnvelope
    set?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    disconnect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    delete?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    connect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    update?: Enumerable<BinKitchenOrderItemUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<BinKitchenOrderItemUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<BinKitchenOrderItemScalarWhereInput>
  }

  export type BinKitchenOrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<BinKitchenOrderItemCreateWithoutOrderInput>, Enumerable<BinKitchenOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<BinKitchenOrderItemCreateOrConnectWithoutOrderInput>
    createMany?: BinKitchenOrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
  }

  export type BinKitchenOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<BinKitchenOrderItemCreateWithoutOrderInput>, Enumerable<BinKitchenOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<BinKitchenOrderItemCreateOrConnectWithoutOrderInput>
    createMany?: BinKitchenOrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
  }

  export type BinKitchenOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<BinKitchenOrderItemCreateWithoutOrderInput>, Enumerable<BinKitchenOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<BinKitchenOrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<BinKitchenOrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: BinKitchenOrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    disconnect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    delete?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    connect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    update?: Enumerable<BinKitchenOrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<BinKitchenOrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<BinKitchenOrderItemScalarWhereInput>
  }

  export type BinKitchenOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<BinKitchenOrderItemCreateWithoutOrderInput>, Enumerable<BinKitchenOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<BinKitchenOrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<BinKitchenOrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: BinKitchenOrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    disconnect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    delete?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    connect?: Enumerable<BinKitchenOrderItemWhereUniqueInput>
    update?: Enumerable<BinKitchenOrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<BinKitchenOrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<BinKitchenOrderItemScalarWhereInput>
  }

  export type BinKitchenMenuCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<BinKitchenMenuCreateWithoutOrderItemsInput, BinKitchenMenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: BinKitchenMenuCreateOrConnectWithoutOrderItemsInput
    connect?: BinKitchenMenuWhereUniqueInput
  }

  export type BinKitchenOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<BinKitchenOrderCreateWithoutItemsInput, BinKitchenOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BinKitchenOrderCreateOrConnectWithoutItemsInput
    connect?: BinKitchenOrderWhereUniqueInput
  }

  export type BinKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<BinKitchenMenuCreateWithoutOrderItemsInput, BinKitchenMenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: BinKitchenMenuCreateOrConnectWithoutOrderItemsInput
    upsert?: BinKitchenMenuUpsertWithoutOrderItemsInput
    connect?: BinKitchenMenuWhereUniqueInput
    update?: XOR<BinKitchenMenuUpdateWithoutOrderItemsInput, BinKitchenMenuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type BinKitchenOrderUpdateOneWithoutItemsNestedInput = {
    create?: XOR<BinKitchenOrderCreateWithoutItemsInput, BinKitchenOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: BinKitchenOrderCreateOrConnectWithoutItemsInput
    upsert?: BinKitchenOrderUpsertWithoutItemsInput
    disconnect?: boolean
    delete?: boolean
    connect?: BinKitchenOrderWhereUniqueInput
    update?: XOR<BinKitchenOrderUpdateWithoutItemsInput, BinKitchenOrderUncheckedUpdateWithoutItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutCategoriesInput>, Enumerable<QuestionUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutCategoriesInput>
    createMany?: QuestionCreateManyCategoriesInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type RoundCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<RoundCreateWithoutCategoryInput>, Enumerable<RoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutCategoryInput>
    createMany?: RoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type QuestionUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutCategoriesInput>, Enumerable<QuestionUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutCategoriesInput>
    createMany?: QuestionCreateManyCategoriesInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type RoundUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<RoundCreateWithoutCategoryInput>, Enumerable<RoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutCategoryInput>
    createMany?: RoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type QuestionUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutCategoriesInput>, Enumerable<QuestionUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutCategoriesInput>
    createMany?: QuestionCreateManyCategoriesInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type RoundUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<RoundCreateWithoutCategoryInput>, Enumerable<RoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<RoundUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: RoundCreateManyCategoryInputEnvelope
    set?: Enumerable<RoundWhereUniqueInput>
    disconnect?: Enumerable<RoundWhereUniqueInput>
    delete?: Enumerable<RoundWhereUniqueInput>
    connect?: Enumerable<RoundWhereUniqueInput>
    update?: Enumerable<RoundUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<RoundUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<RoundScalarWhereInput>
  }

  export type QuestionUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutCategoriesInput>, Enumerable<QuestionUncheckedCreateWithoutCategoriesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutCategoriesInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutCategoriesInput>
    createMany?: QuestionCreateManyCategoriesInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutCategoriesInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutCategoriesInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type RoundUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<RoundCreateWithoutCategoryInput>, Enumerable<RoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<RoundUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: RoundCreateManyCategoryInputEnvelope
    set?: Enumerable<RoundWhereUniqueInput>
    disconnect?: Enumerable<RoundWhereUniqueInput>
    delete?: Enumerable<RoundWhereUniqueInput>
    connect?: Enumerable<RoundWhereUniqueInput>
    update?: Enumerable<RoundUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<RoundUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<RoundScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutQuestionInput = {
    create?: XOR<CategoryCreateWithoutQuestionInput, CategoryUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuestionInput
    connect?: CategoryWhereUniqueInput
  }

  export type RoundQuestionCreateNestedOneWithoutQuestionInput = {
    create?: XOR<RoundQuestionCreateWithoutQuestionInput, RoundQuestionUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: RoundQuestionCreateOrConnectWithoutQuestionInput
    connect?: RoundQuestionWhereUniqueInput
  }

  export type ChoiceCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type ChoiceUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type CategoryUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<CategoryCreateWithoutQuestionInput, CategoryUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuestionInput
    upsert?: CategoryUpsertWithoutQuestionInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutQuestionInput, CategoryUncheckedUpdateWithoutQuestionInput>
  }

  export type RoundQuestionUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<RoundQuestionCreateWithoutQuestionInput, RoundQuestionUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: RoundQuestionCreateOrConnectWithoutQuestionInput
    upsert?: RoundQuestionUpsertWithoutQuestionInput
    connect?: RoundQuestionWhereUniqueInput
    update?: XOR<RoundQuestionUpdateWithoutQuestionInput, RoundQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type ChoiceUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    set?: Enumerable<ChoiceWhereUniqueInput>
    disconnect?: Enumerable<ChoiceWhereUniqueInput>
    delete?: Enumerable<ChoiceWhereUniqueInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<ChoiceScalarWhereInput>
  }

  export type ChoiceUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    set?: Enumerable<ChoiceWhereUniqueInput>
    disconnect?: Enumerable<ChoiceWhereUniqueInput>
    delete?: Enumerable<ChoiceWhereUniqueInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<ChoiceScalarWhereInput>
  }

  export type QuestionCreateNestedManyWithoutRoundQuestionInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutRoundQuestionInput>, Enumerable<QuestionUncheckedCreateWithoutRoundQuestionInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutRoundQuestionInput>
    createMany?: QuestionCreateManyRoundQuestionInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type RoundCreateNestedOneWithoutRoundQuestionInput = {
    create?: XOR<RoundCreateWithoutRoundQuestionInput, RoundUncheckedCreateWithoutRoundQuestionInput>
    connectOrCreate?: RoundCreateOrConnectWithoutRoundQuestionInput
    connect?: RoundWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutRoundQuestionInput = {
    create?: XOR<ChoiceCreateWithoutRoundQuestionInput, ChoiceUncheckedCreateWithoutRoundQuestionInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutRoundQuestionInput
    connect?: ChoiceWhereUniqueInput
  }

  export type QuestionUncheckedCreateNestedManyWithoutRoundQuestionInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutRoundQuestionInput>, Enumerable<QuestionUncheckedCreateWithoutRoundQuestionInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutRoundQuestionInput>
    createMany?: QuestionCreateManyRoundQuestionInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type QuestionUpdateManyWithoutRoundQuestionNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutRoundQuestionInput>, Enumerable<QuestionUncheckedCreateWithoutRoundQuestionInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutRoundQuestionInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutRoundQuestionInput>
    createMany?: QuestionCreateManyRoundQuestionInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutRoundQuestionInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutRoundQuestionInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type RoundUpdateOneRequiredWithoutRoundQuestionNestedInput = {
    create?: XOR<RoundCreateWithoutRoundQuestionInput, RoundUncheckedCreateWithoutRoundQuestionInput>
    connectOrCreate?: RoundCreateOrConnectWithoutRoundQuestionInput
    upsert?: RoundUpsertWithoutRoundQuestionInput
    connect?: RoundWhereUniqueInput
    update?: XOR<RoundUpdateWithoutRoundQuestionInput, RoundUncheckedUpdateWithoutRoundQuestionInput>
  }

  export type ChoiceUpdateOneRequiredWithoutRoundQuestionNestedInput = {
    create?: XOR<ChoiceCreateWithoutRoundQuestionInput, ChoiceUncheckedCreateWithoutRoundQuestionInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutRoundQuestionInput
    upsert?: ChoiceUpsertWithoutRoundQuestionInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<ChoiceUpdateWithoutRoundQuestionInput, ChoiceUncheckedUpdateWithoutRoundQuestionInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUncheckedUpdateManyWithoutRoundQuestionNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutRoundQuestionInput>, Enumerable<QuestionUncheckedCreateWithoutRoundQuestionInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutRoundQuestionInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutRoundQuestionInput>
    createMany?: QuestionCreateManyRoundQuestionInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutRoundQuestionInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutRoundQuestionInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutRoundInput = {
    create?: XOR<CategoryCreateWithoutRoundInput, CategoryUncheckedCreateWithoutRoundInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRoundInput
    connect?: CategoryWhereUniqueInput
  }

  export type RoundQuestionCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutRoundInput>, Enumerable<RoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutRoundInput>
    createMany?: RoundQuestionCreateManyRoundInputEnvelope
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
  }

  export type RoundQuestionUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutRoundInput>, Enumerable<RoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutRoundInput>
    createMany?: RoundQuestionCreateManyRoundInputEnvelope
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
  }

  export type CategoryUpdateOneRequiredWithoutRoundNestedInput = {
    create?: XOR<CategoryCreateWithoutRoundInput, CategoryUncheckedCreateWithoutRoundInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRoundInput
    upsert?: CategoryUpsertWithoutRoundInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutRoundInput, CategoryUncheckedUpdateWithoutRoundInput>
  }

  export type RoundQuestionUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutRoundInput>, Enumerable<RoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<RoundQuestionUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: RoundQuestionCreateManyRoundInputEnvelope
    set?: Enumerable<RoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<RoundQuestionWhereUniqueInput>
    delete?: Enumerable<RoundQuestionWhereUniqueInput>
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
    update?: Enumerable<RoundQuestionUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<RoundQuestionUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<RoundQuestionScalarWhereInput>
  }

  export type RoundQuestionUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutRoundInput>, Enumerable<RoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<RoundQuestionUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: RoundQuestionCreateManyRoundInputEnvelope
    set?: Enumerable<RoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<RoundQuestionWhereUniqueInput>
    delete?: Enumerable<RoundQuestionWhereUniqueInput>
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
    update?: Enumerable<RoundQuestionUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<RoundQuestionUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<RoundQuestionScalarWhereInput>
  }

  export type QuestionCreateNestedOneWithoutChoicesInput = {
    create?: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoicesInput
    connect?: QuestionWhereUniqueInput
  }

  export type RoundQuestionCreateNestedManyWithoutChoiceInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutChoiceInput>, Enumerable<RoundQuestionUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutChoiceInput>
    createMany?: RoundQuestionCreateManyChoiceInputEnvelope
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
  }

  export type RoundQuestionUncheckedCreateNestedManyWithoutChoiceInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutChoiceInput>, Enumerable<RoundQuestionUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutChoiceInput>
    createMany?: RoundQuestionCreateManyChoiceInputEnvelope
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
  }

  export type QuestionUpdateOneRequiredWithoutChoicesNestedInput = {
    create?: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoicesInput
    upsert?: QuestionUpsertWithoutChoicesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutChoicesInput, QuestionUncheckedUpdateWithoutChoicesInput>
  }

  export type RoundQuestionUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutChoiceInput>, Enumerable<RoundQuestionUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutChoiceInput>
    upsert?: Enumerable<RoundQuestionUpsertWithWhereUniqueWithoutChoiceInput>
    createMany?: RoundQuestionCreateManyChoiceInputEnvelope
    set?: Enumerable<RoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<RoundQuestionWhereUniqueInput>
    delete?: Enumerable<RoundQuestionWhereUniqueInput>
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
    update?: Enumerable<RoundQuestionUpdateWithWhereUniqueWithoutChoiceInput>
    updateMany?: Enumerable<RoundQuestionUpdateManyWithWhereWithoutChoiceInput>
    deleteMany?: Enumerable<RoundQuestionScalarWhereInput>
  }

  export type RoundQuestionUncheckedUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutChoiceInput>, Enumerable<RoundQuestionUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutChoiceInput>
    upsert?: Enumerable<RoundQuestionUpsertWithWhereUniqueWithoutChoiceInput>
    createMany?: RoundQuestionCreateManyChoiceInputEnvelope
    set?: Enumerable<RoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<RoundQuestionWhereUniqueInput>
    delete?: Enumerable<RoundQuestionWhereUniqueInput>
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
    update?: Enumerable<RoundQuestionUpdateWithWhereUniqueWithoutChoiceInput>
    updateMany?: Enumerable<RoundQuestionUpdateManyWithWhereWithoutChoiceInput>
    deleteMany?: Enumerable<RoundQuestionScalarWhereInput>
  }

  export type ReplyCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUsersInput>, Enumerable<ReplyUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUsersInput>
    createMany?: ReplyCreateManyUsersInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type UserRelationCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFromInput>, Enumerable<UserRelationUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFromInput>
    createMany?: UserRelationCreateManyFromInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type UserRelationCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutToInput>, Enumerable<UserRelationUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutToInput>
    createMany?: UserRelationCreateManyToInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type ReplyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUsersInput>, Enumerable<ReplyUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUsersInput>
    createMany?: ReplyCreateManyUsersInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type UserRelationUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFromInput>, Enumerable<UserRelationUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFromInput>
    createMany?: UserRelationCreateManyFromInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type UserRelationUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutToInput>, Enumerable<UserRelationUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutToInput>
    createMany?: UserRelationCreateManyToInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type ReplyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUsersInput>, Enumerable<ReplyUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ReplyCreateManyUsersInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type UserRelationUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFromInput>, Enumerable<UserRelationUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutFromInput>
    createMany?: UserRelationCreateManyFromInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type UserRelationUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutToInput>, Enumerable<UserRelationUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutToInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutToInput>
    createMany?: UserRelationCreateManyToInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type ReplyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUsersInput>, Enumerable<ReplyUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ReplyCreateManyUsersInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type UserRelationUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFromInput>, Enumerable<UserRelationUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutFromInput>
    createMany?: UserRelationCreateManyFromInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type UserRelationUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutToInput>, Enumerable<UserRelationUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutToInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutToInput>
    createMany?: UserRelationCreateManyToInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type HashTagOnPostCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutPostInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutPostInput>
    createMany?: HashTagOnPostCreateManyPostInputEnvelope
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
  }

  export type ReplyCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostsInput>, Enumerable<ReplyUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostsInput>
    createMany?: ReplyCreateManyPostsInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type HashTagOnPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutPostInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutPostInput>
    createMany?: HashTagOnPostCreateManyPostInputEnvelope
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
  }

  export type ReplyUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostsInput>, Enumerable<ReplyUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostsInput>
    createMany?: ReplyCreateManyPostsInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type HashTagOnPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutPostInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<HashTagOnPostUpsertWithWhereUniqueWithoutPostInput>
    createMany?: HashTagOnPostCreateManyPostInputEnvelope
    set?: Enumerable<HashTagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashTagOnPostWhereUniqueInput>
    delete?: Enumerable<HashTagOnPostWhereUniqueInput>
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
    update?: Enumerable<HashTagOnPostUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<HashTagOnPostUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<HashTagOnPostScalarWhereInput>
  }

  export type ReplyUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostsInput>, Enumerable<ReplyUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutPostsInput>
    createMany?: ReplyCreateManyPostsInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type HashTagOnPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutPostInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<HashTagOnPostUpsertWithWhereUniqueWithoutPostInput>
    createMany?: HashTagOnPostCreateManyPostInputEnvelope
    set?: Enumerable<HashTagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashTagOnPostWhereUniqueInput>
    delete?: Enumerable<HashTagOnPostWhereUniqueInput>
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
    update?: Enumerable<HashTagOnPostUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<HashTagOnPostUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<HashTagOnPostScalarWhereInput>
  }

  export type ReplyUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostsInput>, Enumerable<ReplyUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutPostsInput>
    createMany?: ReplyCreateManyPostsInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type HashTagOnPostCreateNestedManyWithoutHashTagsInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutHashTagsInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutHashTagsInput>
    createMany?: HashTagOnPostCreateManyHashTagsInputEnvelope
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
  }

  export type HashTagOnPostUncheckedCreateNestedManyWithoutHashTagsInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutHashTagsInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutHashTagsInput>
    createMany?: HashTagOnPostCreateManyHashTagsInputEnvelope
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
  }

  export type HashTagOnPostUpdateManyWithoutHashTagsNestedInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutHashTagsInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutHashTagsInput>
    upsert?: Enumerable<HashTagOnPostUpsertWithWhereUniqueWithoutHashTagsInput>
    createMany?: HashTagOnPostCreateManyHashTagsInputEnvelope
    set?: Enumerable<HashTagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashTagOnPostWhereUniqueInput>
    delete?: Enumerable<HashTagOnPostWhereUniqueInput>
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
    update?: Enumerable<HashTagOnPostUpdateWithWhereUniqueWithoutHashTagsInput>
    updateMany?: Enumerable<HashTagOnPostUpdateManyWithWhereWithoutHashTagsInput>
    deleteMany?: Enumerable<HashTagOnPostScalarWhereInput>
  }

  export type HashTagOnPostUncheckedUpdateManyWithoutHashTagsNestedInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutHashTagsInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutHashTagsInput>
    upsert?: Enumerable<HashTagOnPostUpsertWithWhereUniqueWithoutHashTagsInput>
    createMany?: HashTagOnPostCreateManyHashTagsInputEnvelope
    set?: Enumerable<HashTagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashTagOnPostWhereUniqueInput>
    delete?: Enumerable<HashTagOnPostWhereUniqueInput>
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
    update?: Enumerable<HashTagOnPostUpdateWithWhereUniqueWithoutHashTagsInput>
    updateMany?: Enumerable<HashTagOnPostUpdateManyWithWhereWithoutHashTagsInput>
    deleteMany?: Enumerable<HashTagOnPostScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutHashTagOnPostInput = {
    create?: XOR<PostCreateWithoutHashTagOnPostInput, PostUncheckedCreateWithoutHashTagOnPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutHashTagOnPostInput
    connect?: PostWhereUniqueInput
  }

  export type HashTagCreateNestedOneWithoutHashTagOnPostInput = {
    create?: XOR<HashTagCreateWithoutHashTagOnPostInput, HashTagUncheckedCreateWithoutHashTagOnPostInput>
    connectOrCreate?: HashTagCreateOrConnectWithoutHashTagOnPostInput
    connect?: HashTagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutHashTagOnPostNestedInput = {
    create?: XOR<PostCreateWithoutHashTagOnPostInput, PostUncheckedCreateWithoutHashTagOnPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutHashTagOnPostInput
    upsert?: PostUpsertWithoutHashTagOnPostInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutHashTagOnPostInput, PostUncheckedUpdateWithoutHashTagOnPostInput>
  }

  export type HashTagUpdateOneRequiredWithoutHashTagOnPostNestedInput = {
    create?: XOR<HashTagCreateWithoutHashTagOnPostInput, HashTagUncheckedCreateWithoutHashTagOnPostInput>
    connectOrCreate?: HashTagCreateOrConnectWithoutHashTagOnPostInput
    upsert?: HashTagUpsertWithoutHashTagOnPostInput
    connect?: HashTagWhereUniqueInput
    update?: XOR<HashTagUpdateWithoutHashTagOnPostInput, HashTagUncheckedUpdateWithoutHashTagOnPostInput>
  }

  export type PostCreateNestedOneWithoutReplyInput = {
    create?: XOR<PostCreateWithoutReplyInput, PostUncheckedCreateWithoutReplyInput>
    connectOrCreate?: PostCreateOrConnectWithoutReplyInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReplyInput = {
    create?: XOR<UserCreateWithoutReplyInput, UserUncheckedCreateWithoutReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutReplyInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutReplyNestedInput = {
    create?: XOR<PostCreateWithoutReplyInput, PostUncheckedCreateWithoutReplyInput>
    connectOrCreate?: PostCreateOrConnectWithoutReplyInput
    upsert?: PostUpsertWithoutReplyInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutReplyInput, PostUncheckedUpdateWithoutReplyInput>
  }

  export type UserUpdateOneRequiredWithoutReplyNestedInput = {
    create?: XOR<UserCreateWithoutReplyInput, UserUncheckedCreateWithoutReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutReplyInput
    upsert?: UserUpsertWithoutReplyInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReplyInput, UserUncheckedUpdateWithoutReplyInput>
  }

  export type UserCreateNestedOneWithoutFromUserRelationsInput = {
    create?: XOR<UserCreateWithoutFromUserRelationsInput, UserUncheckedCreateWithoutFromUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromUserRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutToUserRelationsInput = {
    create?: XOR<UserCreateWithoutToUserRelationsInput, UserUncheckedCreateWithoutToUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToUserRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFromUserRelationsNestedInput = {
    create?: XOR<UserCreateWithoutFromUserRelationsInput, UserUncheckedCreateWithoutFromUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromUserRelationsInput
    upsert?: UserUpsertWithoutFromUserRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFromUserRelationsInput, UserUncheckedUpdateWithoutFromUserRelationsInput>
  }

  export type UserUpdateOneRequiredWithoutToUserRelationsNestedInput = {
    create?: XOR<UserCreateWithoutToUserRelationsInput, UserUncheckedCreateWithoutToUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToUserRelationsInput
    upsert?: UserUpsertWithoutToUserRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutToUserRelationsInput, UserUncheckedUpdateWithoutToUserRelationsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BinKitchenMenuCreateWithoutCategoryInput = {
    name: string
    image: string
    price: number
    orderItems?: BinKitchenOrderItemCreateNestedManyWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    image: string
    price: number
    orderItems?: BinKitchenOrderItemUncheckedCreateNestedManyWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuCreateOrConnectWithoutCategoryInput = {
    where: BinKitchenMenuWhereUniqueInput
    create: XOR<BinKitchenMenuCreateWithoutCategoryInput, BinKitchenMenuUncheckedCreateWithoutCategoryInput>
  }

  export type BinKitchenMenuCreateManyCategoryInputEnvelope = {
    data: Enumerable<BinKitchenMenuCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type BinKitchenMenuUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BinKitchenMenuWhereUniqueInput
    update: XOR<BinKitchenMenuUpdateWithoutCategoryInput, BinKitchenMenuUncheckedUpdateWithoutCategoryInput>
    create: XOR<BinKitchenMenuCreateWithoutCategoryInput, BinKitchenMenuUncheckedCreateWithoutCategoryInput>
  }

  export type BinKitchenMenuUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BinKitchenMenuWhereUniqueInput
    data: XOR<BinKitchenMenuUpdateWithoutCategoryInput, BinKitchenMenuUncheckedUpdateWithoutCategoryInput>
  }

  export type BinKitchenMenuUpdateManyWithWhereWithoutCategoryInput = {
    where: BinKitchenMenuScalarWhereInput
    data: XOR<BinKitchenMenuUpdateManyMutationInput, BinKitchenMenuUncheckedUpdateManyWithoutMenusInput>
  }

  export type BinKitchenMenuScalarWhereInput = {
    AND?: Enumerable<BinKitchenMenuScalarWhereInput>
    OR?: Enumerable<BinKitchenMenuScalarWhereInput>
    NOT?: Enumerable<BinKitchenMenuScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    price?: FloatFilter | number
    categoryName?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BinKitchenCategoryCreateWithoutMenusInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenCategoryUncheckedCreateWithoutMenusInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenCategoryCreateOrConnectWithoutMenusInput = {
    where: BinKitchenCategoryWhereUniqueInput
    create: XOR<BinKitchenCategoryCreateWithoutMenusInput, BinKitchenCategoryUncheckedCreateWithoutMenusInput>
  }

  export type BinKitchenOrderItemCreateWithoutMenuInput = {
    order?: BinKitchenOrderCreateNestedOneWithoutItemsInput
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemUncheckedCreateWithoutMenuInput = {
    id?: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemCreateOrConnectWithoutMenuInput = {
    where: BinKitchenOrderItemWhereUniqueInput
    create: XOR<BinKitchenOrderItemCreateWithoutMenuInput, BinKitchenOrderItemUncheckedCreateWithoutMenuInput>
  }

  export type BinKitchenOrderItemCreateManyMenuInputEnvelope = {
    data: Enumerable<BinKitchenOrderItemCreateManyMenuInput>
    skipDuplicates?: boolean
  }

  export type BinKitchenCategoryUpsertWithoutMenusInput = {
    update: XOR<BinKitchenCategoryUpdateWithoutMenusInput, BinKitchenCategoryUncheckedUpdateWithoutMenusInput>
    create: XOR<BinKitchenCategoryCreateWithoutMenusInput, BinKitchenCategoryUncheckedCreateWithoutMenusInput>
  }

  export type BinKitchenCategoryUpdateWithoutMenusInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenCategoryUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemUpsertWithWhereUniqueWithoutMenuInput = {
    where: BinKitchenOrderItemWhereUniqueInput
    update: XOR<BinKitchenOrderItemUpdateWithoutMenuInput, BinKitchenOrderItemUncheckedUpdateWithoutMenuInput>
    create: XOR<BinKitchenOrderItemCreateWithoutMenuInput, BinKitchenOrderItemUncheckedCreateWithoutMenuInput>
  }

  export type BinKitchenOrderItemUpdateWithWhereUniqueWithoutMenuInput = {
    where: BinKitchenOrderItemWhereUniqueInput
    data: XOR<BinKitchenOrderItemUpdateWithoutMenuInput, BinKitchenOrderItemUncheckedUpdateWithoutMenuInput>
  }

  export type BinKitchenOrderItemUpdateManyWithWhereWithoutMenuInput = {
    where: BinKitchenOrderItemScalarWhereInput
    data: XOR<BinKitchenOrderItemUpdateManyMutationInput, BinKitchenOrderItemUncheckedUpdateManyWithoutOrderItemsInput>
  }

  export type BinKitchenOrderItemScalarWhereInput = {
    AND?: Enumerable<BinKitchenOrderItemScalarWhereInput>
    OR?: Enumerable<BinKitchenOrderItemScalarWhereInput>
    NOT?: Enumerable<BinKitchenOrderItemScalarWhereInput>
    id?: IntFilter | number
    menuId?: IntFilter | number
    orderId?: IntNullableFilter | number | null
    quantity?: IntFilter | number
    totalPrice?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BinKitchenOrderItemCreateWithoutOrderInput = {
    menu: BinKitchenMenuCreateNestedOneWithoutOrderItemsInput
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    menuId: number
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemCreateOrConnectWithoutOrderInput = {
    where: BinKitchenOrderItemWhereUniqueInput
    create: XOR<BinKitchenOrderItemCreateWithoutOrderInput, BinKitchenOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type BinKitchenOrderItemCreateManyOrderInputEnvelope = {
    data: Enumerable<BinKitchenOrderItemCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type BinKitchenOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: BinKitchenOrderItemWhereUniqueInput
    update: XOR<BinKitchenOrderItemUpdateWithoutOrderInput, BinKitchenOrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<BinKitchenOrderItemCreateWithoutOrderInput, BinKitchenOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type BinKitchenOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: BinKitchenOrderItemWhereUniqueInput
    data: XOR<BinKitchenOrderItemUpdateWithoutOrderInput, BinKitchenOrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type BinKitchenOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: BinKitchenOrderItemScalarWhereInput
    data: XOR<BinKitchenOrderItemUpdateManyMutationInput, BinKitchenOrderItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type BinKitchenMenuCreateWithoutOrderItemsInput = {
    name: string
    image: string
    price: number
    category?: BinKitchenCategoryCreateNestedOneWithoutMenusInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuCreateOrConnectWithoutOrderItemsInput = {
    where: BinKitchenMenuWhereUniqueInput
    create: XOR<BinKitchenMenuCreateWithoutOrderItemsInput, BinKitchenMenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type BinKitchenOrderCreateWithoutItemsInput = {
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderUncheckedCreateWithoutItemsInput = {
    id?: number
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderCreateOrConnectWithoutItemsInput = {
    where: BinKitchenOrderWhereUniqueInput
    create: XOR<BinKitchenOrderCreateWithoutItemsInput, BinKitchenOrderUncheckedCreateWithoutItemsInput>
  }

  export type BinKitchenMenuUpsertWithoutOrderItemsInput = {
    update: XOR<BinKitchenMenuUpdateWithoutOrderItemsInput, BinKitchenMenuUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<BinKitchenMenuCreateWithoutOrderItemsInput, BinKitchenMenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type BinKitchenMenuUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: BinKitchenCategoryUpdateOneWithoutMenusNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenMenuUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderUpsertWithoutItemsInput = {
    update: XOR<BinKitchenOrderUpdateWithoutItemsInput, BinKitchenOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<BinKitchenOrderCreateWithoutItemsInput, BinKitchenOrderUncheckedCreateWithoutItemsInput>
  }

  export type BinKitchenOrderUpdateWithoutItemsInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateWithoutCategoriesInput = {
    name: string
    roundQuestion: RoundQuestionCreateNestedOneWithoutQuestionInput
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    roundQuestionId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutCategoriesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCategoriesInput, QuestionUncheckedCreateWithoutCategoriesInput>
  }

  export type QuestionCreateManyCategoriesInputEnvelope = {
    data: Enumerable<QuestionCreateManyCategoriesInput>
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutCategoryInput = {
    createAt?: Date | string
    updateAt?: Date | string
    score: number
    roundQuestion?: RoundQuestionCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutCategoryInput = {
    id?: number
    createAt?: Date | string
    updateAt?: Date | string
    score: number
    roundQuestion?: RoundQuestionUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutCategoryInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutCategoryInput, RoundUncheckedCreateWithoutCategoryInput>
  }

  export type RoundCreateManyCategoryInputEnvelope = {
    data: Enumerable<RoundCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCategoriesInput, QuestionUncheckedUpdateWithoutCategoriesInput>
    create: XOR<QuestionCreateWithoutCategoriesInput, QuestionUncheckedCreateWithoutCategoriesInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCategoriesInput, QuestionUncheckedUpdateWithoutCategoriesInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCategoriesInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: Enumerable<QuestionScalarWhereInput>
    OR?: Enumerable<QuestionScalarWhereInput>
    NOT?: Enumerable<QuestionScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    categoriesId?: IntFilter | number
    roundQuestionId?: IntFilter | number
    answerId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type RoundUpsertWithWhereUniqueWithoutCategoryInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutCategoryInput, RoundUncheckedUpdateWithoutCategoryInput>
    create: XOR<RoundCreateWithoutCategoryInput, RoundUncheckedCreateWithoutCategoryInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutCategoryInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutCategoryInput, RoundUncheckedUpdateWithoutCategoryInput>
  }

  export type RoundUpdateManyWithWhereWithoutCategoryInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutRoundInput>
  }

  export type RoundScalarWhereInput = {
    AND?: Enumerable<RoundScalarWhereInput>
    OR?: Enumerable<RoundScalarWhereInput>
    NOT?: Enumerable<RoundScalarWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    score?: IntFilter | number
  }

  export type CategoryCreateWithoutQuestionInput = {
    name: string
    round?: RoundCreateNestedManyWithoutCategoryInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutQuestionInput = {
    id?: number
    name: string
    round?: RoundUncheckedCreateNestedManyWithoutCategoryInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutQuestionInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutQuestionInput, CategoryUncheckedCreateWithoutQuestionInput>
  }

  export type RoundQuestionCreateWithoutQuestionInput = {
    round: RoundCreateNestedOneWithoutRoundQuestionInput
    choice: ChoiceCreateNestedOneWithoutRoundQuestionInput
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuestionUncheckedCreateWithoutQuestionInput = {
    id?: number
    roundId: number
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
    choiceId: number
  }

  export type RoundQuestionCreateOrConnectWithoutQuestionInput = {
    where: RoundQuestionWhereUniqueInput
    create: XOR<RoundQuestionCreateWithoutQuestionInput, RoundQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceCreateWithoutQuestionInput = {
    choices: number
    createAt?: Date | string
    updateAt?: Date | string
    roundQuestion?: RoundQuestionCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutQuestionInput = {
    id?: number
    choices: number
    createAt?: Date | string
    updateAt?: Date | string
    roundQuestion?: RoundQuestionUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceCreateOrConnectWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceCreateManyQuestionInputEnvelope = {
    data: Enumerable<ChoiceCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutQuestionInput = {
    update: XOR<CategoryUpdateWithoutQuestionInput, CategoryUncheckedUpdateWithoutQuestionInput>
    create: XOR<CategoryCreateWithoutQuestionInput, CategoryUncheckedCreateWithoutQuestionInput>
  }

  export type CategoryUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    round?: RoundUpdateManyWithoutCategoryNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    round?: RoundUncheckedUpdateManyWithoutCategoryNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUpsertWithoutQuestionInput = {
    update: XOR<RoundQuestionUpdateWithoutQuestionInput, RoundQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<RoundQuestionCreateWithoutQuestionInput, RoundQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type RoundQuestionUpdateWithoutQuestionInput = {
    round?: RoundUpdateOneRequiredWithoutRoundQuestionNestedInput
    choice?: ChoiceUpdateOneRequiredWithoutRoundQuestionNestedInput
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choiceId?: IntFieldUpdateOperationsInput | number
  }

  export type ChoiceUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutQuestionInput, ChoiceUncheckedUpdateWithoutQuestionInput>
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutQuestionInput, ChoiceUncheckedUpdateWithoutQuestionInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutQuestionInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutChoicesInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: Enumerable<ChoiceScalarWhereInput>
    OR?: Enumerable<ChoiceScalarWhereInput>
    NOT?: Enumerable<ChoiceScalarWhereInput>
    id?: IntFilter | number
    choices?: IntFilter | number
    questionId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type QuestionCreateWithoutRoundQuestionInput = {
    name: string
    categories: CategoryCreateNestedOneWithoutQuestionInput
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutRoundQuestionInput = {
    id?: number
    name: string
    categoriesId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutRoundQuestionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutRoundQuestionInput, QuestionUncheckedCreateWithoutRoundQuestionInput>
  }

  export type QuestionCreateManyRoundQuestionInputEnvelope = {
    data: Enumerable<QuestionCreateManyRoundQuestionInput>
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutRoundQuestionInput = {
    category: CategoryCreateNestedOneWithoutRoundInput
    createAt?: Date | string
    updateAt?: Date | string
    score: number
  }

  export type RoundUncheckedCreateWithoutRoundQuestionInput = {
    id?: number
    categoryId: number
    createAt?: Date | string
    updateAt?: Date | string
    score: number
  }

  export type RoundCreateOrConnectWithoutRoundQuestionInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutRoundQuestionInput, RoundUncheckedCreateWithoutRoundQuestionInput>
  }

  export type ChoiceCreateWithoutRoundQuestionInput = {
    choices: number
    question: QuestionCreateNestedOneWithoutChoicesInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUncheckedCreateWithoutRoundQuestionInput = {
    id?: number
    choices: number
    questionId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutRoundQuestionInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutRoundQuestionInput, ChoiceUncheckedCreateWithoutRoundQuestionInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutRoundQuestionInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutRoundQuestionInput, QuestionUncheckedUpdateWithoutRoundQuestionInput>
    create: XOR<QuestionCreateWithoutRoundQuestionInput, QuestionUncheckedCreateWithoutRoundQuestionInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutRoundQuestionInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutRoundQuestionInput, QuestionUncheckedUpdateWithoutRoundQuestionInput>
  }

  export type QuestionUpdateManyWithWhereWithoutRoundQuestionInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type RoundUpsertWithoutRoundQuestionInput = {
    update: XOR<RoundUpdateWithoutRoundQuestionInput, RoundUncheckedUpdateWithoutRoundQuestionInput>
    create: XOR<RoundCreateWithoutRoundQuestionInput, RoundUncheckedCreateWithoutRoundQuestionInput>
  }

  export type RoundUpdateWithoutRoundQuestionInput = {
    category?: CategoryUpdateOneRequiredWithoutRoundNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type RoundUncheckedUpdateWithoutRoundQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ChoiceUpsertWithoutRoundQuestionInput = {
    update: XOR<ChoiceUpdateWithoutRoundQuestionInput, ChoiceUncheckedUpdateWithoutRoundQuestionInput>
    create: XOR<ChoiceCreateWithoutRoundQuestionInput, ChoiceUncheckedCreateWithoutRoundQuestionInput>
  }

  export type ChoiceUpdateWithoutRoundQuestionInput = {
    choices?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutChoicesNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateWithoutRoundQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    choices?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateWithoutRoundInput = {
    name: string
    question?: QuestionCreateNestedManyWithoutCategoriesInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutRoundInput = {
    id?: number
    name: string
    question?: QuestionUncheckedCreateNestedManyWithoutCategoriesInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutRoundInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRoundInput, CategoryUncheckedCreateWithoutRoundInput>
  }

  export type RoundQuestionCreateWithoutRoundInput = {
    question?: QuestionCreateNestedManyWithoutRoundQuestionInput
    choice: ChoiceCreateNestedOneWithoutRoundQuestionInput
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuestionUncheckedCreateWithoutRoundInput = {
    id?: number
    question?: QuestionUncheckedCreateNestedManyWithoutRoundQuestionInput
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
    choiceId: number
  }

  export type RoundQuestionCreateOrConnectWithoutRoundInput = {
    where: RoundQuestionWhereUniqueInput
    create: XOR<RoundQuestionCreateWithoutRoundInput, RoundQuestionUncheckedCreateWithoutRoundInput>
  }

  export type RoundQuestionCreateManyRoundInputEnvelope = {
    data: Enumerable<RoundQuestionCreateManyRoundInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutRoundInput = {
    update: XOR<CategoryUpdateWithoutRoundInput, CategoryUncheckedUpdateWithoutRoundInput>
    create: XOR<CategoryCreateWithoutRoundInput, CategoryUncheckedCreateWithoutRoundInput>
  }

  export type CategoryUpdateWithoutRoundInput = {
    name?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateManyWithoutCategoriesNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    question?: QuestionUncheckedUpdateManyWithoutCategoriesNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUpsertWithWhereUniqueWithoutRoundInput = {
    where: RoundQuestionWhereUniqueInput
    update: XOR<RoundQuestionUpdateWithoutRoundInput, RoundQuestionUncheckedUpdateWithoutRoundInput>
    create: XOR<RoundQuestionCreateWithoutRoundInput, RoundQuestionUncheckedCreateWithoutRoundInput>
  }

  export type RoundQuestionUpdateWithWhereUniqueWithoutRoundInput = {
    where: RoundQuestionWhereUniqueInput
    data: XOR<RoundQuestionUpdateWithoutRoundInput, RoundQuestionUncheckedUpdateWithoutRoundInput>
  }

  export type RoundQuestionUpdateManyWithWhereWithoutRoundInput = {
    where: RoundQuestionScalarWhereInput
    data: XOR<RoundQuestionUpdateManyMutationInput, RoundQuestionUncheckedUpdateManyWithoutRoundQuestionInput>
  }

  export type RoundQuestionScalarWhereInput = {
    AND?: Enumerable<RoundQuestionScalarWhereInput>
    OR?: Enumerable<RoundQuestionScalarWhereInput>
    NOT?: Enumerable<RoundQuestionScalarWhereInput>
    id?: IntFilter | number
    roundId?: IntFilter | number
    correctAnswer?: BoolFilter | boolean
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    choiceId?: IntFilter | number
  }

  export type QuestionCreateWithoutChoicesInput = {
    name: string
    categories: CategoryCreateNestedOneWithoutQuestionInput
    roundQuestion: RoundQuestionCreateNestedOneWithoutQuestionInput
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutChoicesInput = {
    id?: number
    name: string
    categoriesId: number
    roundQuestionId: number
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutChoicesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
  }

  export type RoundQuestionCreateWithoutChoiceInput = {
    question?: QuestionCreateNestedManyWithoutRoundQuestionInput
    round: RoundCreateNestedOneWithoutRoundQuestionInput
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuestionUncheckedCreateWithoutChoiceInput = {
    id?: number
    question?: QuestionUncheckedCreateNestedManyWithoutRoundQuestionInput
    roundId: number
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuestionCreateOrConnectWithoutChoiceInput = {
    where: RoundQuestionWhereUniqueInput
    create: XOR<RoundQuestionCreateWithoutChoiceInput, RoundQuestionUncheckedCreateWithoutChoiceInput>
  }

  export type RoundQuestionCreateManyChoiceInputEnvelope = {
    data: Enumerable<RoundQuestionCreateManyChoiceInput>
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutChoicesInput = {
    update: XOR<QuestionUpdateWithoutChoicesInput, QuestionUncheckedUpdateWithoutChoicesInput>
    create: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
  }

  export type QuestionUpdateWithoutChoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateOneRequiredWithoutQuestionNestedInput
    roundQuestion?: RoundQuestionUpdateOneRequiredWithoutQuestionNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriesId?: IntFieldUpdateOperationsInput | number
    roundQuestionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUpsertWithWhereUniqueWithoutChoiceInput = {
    where: RoundQuestionWhereUniqueInput
    update: XOR<RoundQuestionUpdateWithoutChoiceInput, RoundQuestionUncheckedUpdateWithoutChoiceInput>
    create: XOR<RoundQuestionCreateWithoutChoiceInput, RoundQuestionUncheckedCreateWithoutChoiceInput>
  }

  export type RoundQuestionUpdateWithWhereUniqueWithoutChoiceInput = {
    where: RoundQuestionWhereUniqueInput
    data: XOR<RoundQuestionUpdateWithoutChoiceInput, RoundQuestionUncheckedUpdateWithoutChoiceInput>
  }

  export type RoundQuestionUpdateManyWithWhereWithoutChoiceInput = {
    where: RoundQuestionScalarWhereInput
    data: XOR<RoundQuestionUpdateManyMutationInput, RoundQuestionUncheckedUpdateManyWithoutRoundQuestionInput>
  }

  export type ReplyCreateWithoutUsersInput = {
    posts: PostCreateNestedOneWithoutReplyInput
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUncheckedCreateWithoutUsersInput = {
    id?: number
    postId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyCreateOrConnectWithoutUsersInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutUsersInput, ReplyUncheckedCreateWithoutUsersInput>
  }

  export type ReplyCreateManyUsersInputEnvelope = {
    data: Enumerable<ReplyCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type UserRelationCreateWithoutFromInput = {
    to: UserCreateNestedOneWithoutToUserRelationsInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUncheckedCreateWithoutFromInput = {
    id?: number
    toId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationCreateOrConnectWithoutFromInput = {
    where: UserRelationWhereUniqueInput
    create: XOR<UserRelationCreateWithoutFromInput, UserRelationUncheckedCreateWithoutFromInput>
  }

  export type UserRelationCreateManyFromInputEnvelope = {
    data: Enumerable<UserRelationCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type UserRelationCreateWithoutToInput = {
    from: UserCreateNestedOneWithoutFromUserRelationsInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUncheckedCreateWithoutToInput = {
    id?: number
    fromId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationCreateOrConnectWithoutToInput = {
    where: UserRelationWhereUniqueInput
    create: XOR<UserRelationCreateWithoutToInput, UserRelationUncheckedCreateWithoutToInput>
  }

  export type UserRelationCreateManyToInputEnvelope = {
    data: Enumerable<UserRelationCreateManyToInput>
    skipDuplicates?: boolean
  }

  export type ReplyUpsertWithWhereUniqueWithoutUsersInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutUsersInput, ReplyUncheckedUpdateWithoutUsersInput>
    create: XOR<ReplyCreateWithoutUsersInput, ReplyUncheckedCreateWithoutUsersInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutUsersInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutUsersInput, ReplyUncheckedUpdateWithoutUsersInput>
  }

  export type ReplyUpdateManyWithWhereWithoutUsersInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutReplyInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: Enumerable<ReplyScalarWhereInput>
    OR?: Enumerable<ReplyScalarWhereInput>
    NOT?: Enumerable<ReplyScalarWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    userId?: IntFilter | number
    message?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type UserRelationUpsertWithWhereUniqueWithoutFromInput = {
    where: UserRelationWhereUniqueInput
    update: XOR<UserRelationUpdateWithoutFromInput, UserRelationUncheckedUpdateWithoutFromInput>
    create: XOR<UserRelationCreateWithoutFromInput, UserRelationUncheckedCreateWithoutFromInput>
  }

  export type UserRelationUpdateWithWhereUniqueWithoutFromInput = {
    where: UserRelationWhereUniqueInput
    data: XOR<UserRelationUpdateWithoutFromInput, UserRelationUncheckedUpdateWithoutFromInput>
  }

  export type UserRelationUpdateManyWithWhereWithoutFromInput = {
    where: UserRelationScalarWhereInput
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyWithoutFromUserRelationsInput>
  }

  export type UserRelationScalarWhereInput = {
    AND?: Enumerable<UserRelationScalarWhereInput>
    OR?: Enumerable<UserRelationScalarWhereInput>
    NOT?: Enumerable<UserRelationScalarWhereInput>
    id?: IntFilter | number
    fromId?: IntFilter | number
    toId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type UserRelationUpsertWithWhereUniqueWithoutToInput = {
    where: UserRelationWhereUniqueInput
    update: XOR<UserRelationUpdateWithoutToInput, UserRelationUncheckedUpdateWithoutToInput>
    create: XOR<UserRelationCreateWithoutToInput, UserRelationUncheckedCreateWithoutToInput>
  }

  export type UserRelationUpdateWithWhereUniqueWithoutToInput = {
    where: UserRelationWhereUniqueInput
    data: XOR<UserRelationUpdateWithoutToInput, UserRelationUncheckedUpdateWithoutToInput>
  }

  export type UserRelationUpdateManyWithWhereWithoutToInput = {
    where: UserRelationScalarWhereInput
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyWithoutToUserRelationsInput>
  }

  export type HashTagOnPostCreateWithoutPostInput = {
    hashTags: HashTagCreateNestedOneWithoutHashTagOnPostInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUncheckedCreateWithoutPostInput = {
    id?: number
    hashTagId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostCreateOrConnectWithoutPostInput = {
    where: HashTagOnPostWhereUniqueInput
    create: XOR<HashTagOnPostCreateWithoutPostInput, HashTagOnPostUncheckedCreateWithoutPostInput>
  }

  export type HashTagOnPostCreateManyPostInputEnvelope = {
    data: Enumerable<HashTagOnPostCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type ReplyCreateWithoutPostsInput = {
    users: UserCreateNestedOneWithoutReplyInput
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUncheckedCreateWithoutPostsInput = {
    id?: number
    userId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyCreateOrConnectWithoutPostsInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutPostsInput, ReplyUncheckedCreateWithoutPostsInput>
  }

  export type ReplyCreateManyPostsInputEnvelope = {
    data: Enumerable<ReplyCreateManyPostsInput>
    skipDuplicates?: boolean
  }

  export type HashTagOnPostUpsertWithWhereUniqueWithoutPostInput = {
    where: HashTagOnPostWhereUniqueInput
    update: XOR<HashTagOnPostUpdateWithoutPostInput, HashTagOnPostUncheckedUpdateWithoutPostInput>
    create: XOR<HashTagOnPostCreateWithoutPostInput, HashTagOnPostUncheckedCreateWithoutPostInput>
  }

  export type HashTagOnPostUpdateWithWhereUniqueWithoutPostInput = {
    where: HashTagOnPostWhereUniqueInput
    data: XOR<HashTagOnPostUpdateWithoutPostInput, HashTagOnPostUncheckedUpdateWithoutPostInput>
  }

  export type HashTagOnPostUpdateManyWithWhereWithoutPostInput = {
    where: HashTagOnPostScalarWhereInput
    data: XOR<HashTagOnPostUpdateManyMutationInput, HashTagOnPostUncheckedUpdateManyWithoutHashTagOnPostInput>
  }

  export type HashTagOnPostScalarWhereInput = {
    AND?: Enumerable<HashTagOnPostScalarWhereInput>
    OR?: Enumerable<HashTagOnPostScalarWhereInput>
    NOT?: Enumerable<HashTagOnPostScalarWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    hashTagId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type ReplyUpsertWithWhereUniqueWithoutPostsInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutPostsInput, ReplyUncheckedUpdateWithoutPostsInput>
    create: XOR<ReplyCreateWithoutPostsInput, ReplyUncheckedCreateWithoutPostsInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutPostsInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutPostsInput, ReplyUncheckedUpdateWithoutPostsInput>
  }

  export type ReplyUpdateManyWithWhereWithoutPostsInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutReplyInput>
  }

  export type HashTagOnPostCreateWithoutHashTagsInput = {
    post: PostCreateNestedOneWithoutHashTagOnPostInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUncheckedCreateWithoutHashTagsInput = {
    id?: number
    postId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostCreateOrConnectWithoutHashTagsInput = {
    where: HashTagOnPostWhereUniqueInput
    create: XOR<HashTagOnPostCreateWithoutHashTagsInput, HashTagOnPostUncheckedCreateWithoutHashTagsInput>
  }

  export type HashTagOnPostCreateManyHashTagsInputEnvelope = {
    data: Enumerable<HashTagOnPostCreateManyHashTagsInput>
    skipDuplicates?: boolean
  }

  export type HashTagOnPostUpsertWithWhereUniqueWithoutHashTagsInput = {
    where: HashTagOnPostWhereUniqueInput
    update: XOR<HashTagOnPostUpdateWithoutHashTagsInput, HashTagOnPostUncheckedUpdateWithoutHashTagsInput>
    create: XOR<HashTagOnPostCreateWithoutHashTagsInput, HashTagOnPostUncheckedCreateWithoutHashTagsInput>
  }

  export type HashTagOnPostUpdateWithWhereUniqueWithoutHashTagsInput = {
    where: HashTagOnPostWhereUniqueInput
    data: XOR<HashTagOnPostUpdateWithoutHashTagsInput, HashTagOnPostUncheckedUpdateWithoutHashTagsInput>
  }

  export type HashTagOnPostUpdateManyWithWhereWithoutHashTagsInput = {
    where: HashTagOnPostScalarWhereInput
    data: XOR<HashTagOnPostUpdateManyMutationInput, HashTagOnPostUncheckedUpdateManyWithoutHashTagOnPostInput>
  }

  export type PostCreateWithoutHashTagOnPostInput = {
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutHashTagOnPostInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutHashTagOnPostInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutHashTagOnPostInput, PostUncheckedCreateWithoutHashTagOnPostInput>
  }

  export type HashTagCreateWithoutHashTagOnPostInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagUncheckedCreateWithoutHashTagOnPostInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagCreateOrConnectWithoutHashTagOnPostInput = {
    where: HashTagWhereUniqueInput
    create: XOR<HashTagCreateWithoutHashTagOnPostInput, HashTagUncheckedCreateWithoutHashTagOnPostInput>
  }

  export type PostUpsertWithoutHashTagOnPostInput = {
    update: XOR<PostUpdateWithoutHashTagOnPostInput, PostUncheckedUpdateWithoutHashTagOnPostInput>
    create: XOR<PostCreateWithoutHashTagOnPostInput, PostUncheckedCreateWithoutHashTagOnPostInput>
  }

  export type PostUpdateWithoutHashTagOnPostInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutHashTagOnPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type HashTagUpsertWithoutHashTagOnPostInput = {
    update: XOR<HashTagUpdateWithoutHashTagOnPostInput, HashTagUncheckedUpdateWithoutHashTagOnPostInput>
    create: XOR<HashTagCreateWithoutHashTagOnPostInput, HashTagUncheckedCreateWithoutHashTagOnPostInput>
  }

  export type HashTagUpdateWithoutHashTagOnPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUncheckedUpdateWithoutHashTagOnPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutReplyInput = {
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutReplyInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutReplyInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutReplyInput, PostUncheckedCreateWithoutReplyInput>
  }

  export type UserCreateWithoutReplyInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    fromUserRelations?: UserRelationCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutReplyInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    fromUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutReplyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReplyInput, UserUncheckedCreateWithoutReplyInput>
  }

  export type PostUpsertWithoutReplyInput = {
    update: XOR<PostUpdateWithoutReplyInput, PostUncheckedUpdateWithoutReplyInput>
    create: XOR<PostCreateWithoutReplyInput, PostUncheckedCreateWithoutReplyInput>
  }

  export type PostUpdateWithoutReplyInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutReplyInput = {
    update: XOR<UserUpdateWithoutReplyInput, UserUncheckedUpdateWithoutReplyInput>
    create: XOR<UserCreateWithoutReplyInput, UserUncheckedCreateWithoutReplyInput>
  }

  export type UserUpdateWithoutReplyInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserRelations?: UserRelationUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserRelations?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type UserCreateWithoutFromUserRelationsInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutUsersInput
    toUserRelations?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutFromUserRelationsInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutUsersInput
    toUserRelations?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutFromUserRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFromUserRelationsInput, UserUncheckedCreateWithoutFromUserRelationsInput>
  }

  export type UserCreateWithoutToUserRelationsInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationCreateNestedManyWithoutFromInput
  }

  export type UserUncheckedCreateWithoutToUserRelationsInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFromInput
  }

  export type UserCreateOrConnectWithoutToUserRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToUserRelationsInput, UserUncheckedCreateWithoutToUserRelationsInput>
  }

  export type UserUpsertWithoutFromUserRelationsInput = {
    update: XOR<UserUpdateWithoutFromUserRelationsInput, UserUncheckedUpdateWithoutFromUserRelationsInput>
    create: XOR<UserCreateWithoutFromUserRelationsInput, UserUncheckedCreateWithoutFromUserRelationsInput>
  }

  export type UserUpdateWithoutFromUserRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutUsersNestedInput
    toUserRelations?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutFromUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutUsersNestedInput
    toUserRelations?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type UserUpsertWithoutToUserRelationsInput = {
    update: XOR<UserUpdateWithoutToUserRelationsInput, UserUncheckedUpdateWithoutToUserRelationsInput>
    create: XOR<UserCreateWithoutToUserRelationsInput, UserUncheckedCreateWithoutToUserRelationsInput>
  }

  export type UserUpdateWithoutToUserRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUpdateManyWithoutFromNestedInput
  }

  export type UserUncheckedUpdateWithoutToUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
  }

  export type BinKitchenMenuCreateManyCategoryInput = {
    id?: number
    name: string
    image: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: BinKitchenOrderItemUpdateManyWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenMenuUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: BinKitchenOrderItemUncheckedUpdateManyWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenMenuUncheckedUpdateManyWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemCreateManyMenuInput = {
    id?: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemUpdateWithoutMenuInput = {
    order?: BinKitchenOrderUpdateOneWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemUncheckedUpdateManyWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemCreateManyOrderInput = {
    id?: number
    menuId: number
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderItemUpdateWithoutOrderInput = {
    menu?: BinKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderItemUncheckedUpdateManyWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyCategoriesInput = {
    id?: number
    name: string
    roundQuestionId: number
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundCreateManyCategoryInput = {
    id?: number
    createAt?: Date | string
    updateAt?: Date | string
    score: number
  }

  export type QuestionUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    roundQuestion?: RoundQuestionUpdateOneRequiredWithoutQuestionNestedInput
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roundQuestionId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roundQuestionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUpdateWithoutCategoryInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    roundQuestion?: RoundQuestionUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    roundQuestion?: RoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ChoiceCreateManyQuestionInput = {
    id?: number
    choices: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUpdateWithoutQuestionInput = {
    choices?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    choices?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    choices?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyRoundQuestionInput = {
    id?: number
    name: string
    categoriesId: number
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateWithoutRoundQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateOneRequiredWithoutQuestionNestedInput
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutRoundQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoriesId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionCreateManyRoundInput = {
    id?: number
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
    choiceId: number
  }

  export type RoundQuestionUpdateWithoutRoundInput = {
    question?: QuestionUpdateManyWithoutRoundQuestionNestedInput
    choice?: ChoiceUpdateOneRequiredWithoutRoundQuestionNestedInput
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: QuestionUncheckedUpdateManyWithoutRoundQuestionNestedInput
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choiceId?: IntFieldUpdateOperationsInput | number
  }

  export type RoundQuestionUncheckedUpdateManyWithoutRoundQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choiceId?: IntFieldUpdateOperationsInput | number
  }

  export type RoundQuestionCreateManyChoiceInput = {
    id?: number
    roundId: number
    correctAnswer: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuestionUpdateWithoutChoiceInput = {
    question?: QuestionUpdateManyWithoutRoundQuestionNestedInput
    round?: RoundUpdateOneRequiredWithoutRoundQuestionNestedInput
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: QuestionUncheckedUpdateManyWithoutRoundQuestionNestedInput
    roundId?: IntFieldUpdateOperationsInput | number
    correctAnswer?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyUsersInput = {
    id?: number
    postId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationCreateManyFromInput = {
    id?: number
    toId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationCreateManyToInput = {
    id?: number
    fromId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUpdateWithoutUsersInput = {
    posts?: PostUpdateOneRequiredWithoutReplyNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUpdateWithoutFromInput = {
    to?: UserUpdateOneRequiredWithoutToUserRelationsNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyWithoutFromUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUpdateWithoutToInput = {
    from?: UserUpdateOneRequiredWithoutFromUserRelationsNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyWithoutToUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostCreateManyPostInput = {
    id?: number
    hashTagId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyCreateManyPostsInput = {
    id?: number
    userId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUpdateWithoutPostInput = {
    hashTags?: HashTagUpdateOneRequiredWithoutHashTagOnPostNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashTagId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateManyWithoutHashTagOnPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashTagId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUpdateWithoutPostsInput = {
    users?: UserUpdateOneRequiredWithoutReplyNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostCreateManyHashTagsInput = {
    id?: number
    postId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUpdateWithoutHashTagsInput = {
    post?: PostUpdateOneRequiredWithoutHashTagOnPostNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateWithoutHashTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}