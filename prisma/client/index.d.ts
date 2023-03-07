
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
 * Model TodoList
 * 
 */
export type TodoList = {
  id: number
  task: string
  status: string
  note: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaCategory
 * 
 */
export type TriviaCategory = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaQuiz
 * 
 */
export type TriviaQuiz = {
  id: number
  quiz: string
  categoryName: string
  createdAt: Date
  updatedAt: Date
  answerId: number
}

/**
 * Model TriviaChoice
 * 
 */
export type TriviaChoice = {
  id: number
  choice: string
  quizId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaRound
 * 
 */
export type TriviaRound = {
  id: number
  round: string
  categoryId: number
  score: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaRoundQuiz
 * 
 */
export type TriviaRoundQuiz = {
  id: number
  roundId: number
  quizId: number
  userChoiceId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterUser
 * 
 */
export type TwitterUser = {
  id: number
  image: string
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterUserRelation
 * 
 */
export type TwitterUserRelation = {
  id: number
  followerId: number
  followingId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterPost
 * 
 */
export type TwitterPost = {
  id: number
  message: string
  postByUserId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterHashTag
 * 
 */
export type TwitterHashTag = {
  id: number
  message: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterReply
 * 
 */
export type TwitterReply = {
  id: number
  message: string
  postId: number
  postByUserId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterDM
 * 
 */
export type TwitterDM = {
  id: number
  message: string
  directFromId: number
  directToId: number
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
   * `prisma.todoList`: Exposes CRUD operations for the **TodoList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodoLists
    * const todoLists = await prisma.todoList.findMany()
    * ```
    */
  get todoList(): Prisma.TodoListDelegate<GlobalReject>;

  /**
   * `prisma.triviaCategory`: Exposes CRUD operations for the **TriviaCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaCategories
    * const triviaCategories = await prisma.triviaCategory.findMany()
    * ```
    */
  get triviaCategory(): Prisma.TriviaCategoryDelegate<GlobalReject>;

  /**
   * `prisma.triviaQuiz`: Exposes CRUD operations for the **TriviaQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaQuizs
    * const triviaQuizs = await prisma.triviaQuiz.findMany()
    * ```
    */
  get triviaQuiz(): Prisma.TriviaQuizDelegate<GlobalReject>;

  /**
   * `prisma.triviaChoice`: Exposes CRUD operations for the **TriviaChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaChoices
    * const triviaChoices = await prisma.triviaChoice.findMany()
    * ```
    */
  get triviaChoice(): Prisma.TriviaChoiceDelegate<GlobalReject>;

  /**
   * `prisma.triviaRound`: Exposes CRUD operations for the **TriviaRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaRounds
    * const triviaRounds = await prisma.triviaRound.findMany()
    * ```
    */
  get triviaRound(): Prisma.TriviaRoundDelegate<GlobalReject>;

  /**
   * `prisma.triviaRoundQuiz`: Exposes CRUD operations for the **TriviaRoundQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaRoundQuizs
    * const triviaRoundQuizs = await prisma.triviaRoundQuiz.findMany()
    * ```
    */
  get triviaRoundQuiz(): Prisma.TriviaRoundQuizDelegate<GlobalReject>;

  /**
   * `prisma.twitterUser`: Exposes CRUD operations for the **TwitterUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterUsers
    * const twitterUsers = await prisma.twitterUser.findMany()
    * ```
    */
  get twitterUser(): Prisma.TwitterUserDelegate<GlobalReject>;

  /**
   * `prisma.twitterUserRelation`: Exposes CRUD operations for the **TwitterUserRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterUserRelations
    * const twitterUserRelations = await prisma.twitterUserRelation.findMany()
    * ```
    */
  get twitterUserRelation(): Prisma.TwitterUserRelationDelegate<GlobalReject>;

  /**
   * `prisma.twitterPost`: Exposes CRUD operations for the **TwitterPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterPosts
    * const twitterPosts = await prisma.twitterPost.findMany()
    * ```
    */
  get twitterPost(): Prisma.TwitterPostDelegate<GlobalReject>;

  /**
   * `prisma.twitterHashTag`: Exposes CRUD operations for the **TwitterHashTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterHashTags
    * const twitterHashTags = await prisma.twitterHashTag.findMany()
    * ```
    */
  get twitterHashTag(): Prisma.TwitterHashTagDelegate<GlobalReject>;

  /**
   * `prisma.twitterReply`: Exposes CRUD operations for the **TwitterReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterReplies
    * const twitterReplies = await prisma.twitterReply.findMany()
    * ```
    */
  get twitterReply(): Prisma.TwitterReplyDelegate<GlobalReject>;

  /**
   * `prisma.twitterDM`: Exposes CRUD operations for the **TwitterDM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterDMS
    * const twitterDMS = await prisma.twitterDM.findMany()
    * ```
    */
  get twitterDM(): Prisma.TwitterDMDelegate<GlobalReject>;
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
    TodoList: 'TodoList',
    TriviaCategory: 'TriviaCategory',
    TriviaQuiz: 'TriviaQuiz',
    TriviaChoice: 'TriviaChoice',
    TriviaRound: 'TriviaRound',
    TriviaRoundQuiz: 'TriviaRoundQuiz',
    TwitterUser: 'TwitterUser',
    TwitterUserRelation: 'TwitterUserRelation',
    TwitterPost: 'TwitterPost',
    TwitterHashTag: 'TwitterHashTag',
    TwitterReply: 'TwitterReply',
    TwitterDM: 'TwitterDM'
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
    orderItems: number
  }

  export type BinKitchenOrderCountOutputTypeSelect = {
    orderItems?: boolean
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
   * Count Type TriviaCategoryCountOutputType
   */


  export type TriviaCategoryCountOutputType = {
    triviaQuizes: number
    rounds: number
  }

  export type TriviaCategoryCountOutputTypeSelect = {
    triviaQuizes?: boolean
    rounds?: boolean
  }

  export type TriviaCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaCategoryCountOutputTypeArgs)
    ? TriviaCategoryCountOutputType 
    : S extends { select: any } & (TriviaCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaCategoryCountOutputType ? TriviaCategoryCountOutputType[P] : never
  } 
      : TriviaCategoryCountOutputType




  // Custom InputTypes

  /**
   * TriviaCategoryCountOutputType without action
   */
  export type TriviaCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategoryCountOutputType
     */
    select?: TriviaCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaQuizCountOutputType
   */


  export type TriviaQuizCountOutputType = {
    choices: number
    roundQuizes: number
  }

  export type TriviaQuizCountOutputTypeSelect = {
    choices?: boolean
    roundQuizes?: boolean
  }

  export type TriviaQuizCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaQuizCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuizCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuizCountOutputTypeArgs)
    ? TriviaQuizCountOutputType 
    : S extends { select: any } & (TriviaQuizCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaQuizCountOutputType ? TriviaQuizCountOutputType[P] : never
  } 
      : TriviaQuizCountOutputType




  // Custom InputTypes

  /**
   * TriviaQuizCountOutputType without action
   */
  export type TriviaQuizCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizCountOutputType
     */
    select?: TriviaQuizCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaChoiceCountOutputType
   */


  export type TriviaChoiceCountOutputType = {
    roundQuizes: number
  }

  export type TriviaChoiceCountOutputTypeSelect = {
    roundQuizes?: boolean
  }

  export type TriviaChoiceCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaChoiceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaChoiceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaChoiceCountOutputTypeArgs)
    ? TriviaChoiceCountOutputType 
    : S extends { select: any } & (TriviaChoiceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaChoiceCountOutputType ? TriviaChoiceCountOutputType[P] : never
  } 
      : TriviaChoiceCountOutputType




  // Custom InputTypes

  /**
   * TriviaChoiceCountOutputType without action
   */
  export type TriviaChoiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoiceCountOutputType
     */
    select?: TriviaChoiceCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaRoundCountOutputType
   */


  export type TriviaRoundCountOutputType = {
    roundQuizes: number
  }

  export type TriviaRoundCountOutputTypeSelect = {
    roundQuizes?: boolean
  }

  export type TriviaRoundCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaRoundCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundCountOutputTypeArgs)
    ? TriviaRoundCountOutputType 
    : S extends { select: any } & (TriviaRoundCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaRoundCountOutputType ? TriviaRoundCountOutputType[P] : never
  } 
      : TriviaRoundCountOutputType




  // Custom InputTypes

  /**
   * TriviaRoundCountOutputType without action
   */
  export type TriviaRoundCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundCountOutputType
     */
    select?: TriviaRoundCountOutputTypeSelect | null
  }



  /**
   * Count Type TwitterUserCountOutputType
   */


  export type TwitterUserCountOutputType = {
    follwer: number
    following: number
    TwitterPost: number
    TwitterReply: number
    directFrom: number
    directTo: number
  }

  export type TwitterUserCountOutputTypeSelect = {
    follwer?: boolean
    following?: boolean
    TwitterPost?: boolean
    TwitterReply?: boolean
    directFrom?: boolean
    directTo?: boolean
  }

  export type TwitterUserCountOutputTypeGetPayload<S extends boolean | null | undefined | TwitterUserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterUserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TwitterUserCountOutputTypeArgs)
    ? TwitterUserCountOutputType 
    : S extends { select: any } & (TwitterUserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TwitterUserCountOutputType ? TwitterUserCountOutputType[P] : never
  } 
      : TwitterUserCountOutputType




  // Custom InputTypes

  /**
   * TwitterUserCountOutputType without action
   */
  export type TwitterUserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserCountOutputType
     */
    select?: TwitterUserCountOutputTypeSelect | null
  }



  /**
   * Count Type TwitterPostCountOutputType
   */


  export type TwitterPostCountOutputType = {
    TwitterReply: number
    hashTags: number
  }

  export type TwitterPostCountOutputTypeSelect = {
    TwitterReply?: boolean
    hashTags?: boolean
  }

  export type TwitterPostCountOutputTypeGetPayload<S extends boolean | null | undefined | TwitterPostCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterPostCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TwitterPostCountOutputTypeArgs)
    ? TwitterPostCountOutputType 
    : S extends { select: any } & (TwitterPostCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TwitterPostCountOutputType ? TwitterPostCountOutputType[P] : never
  } 
      : TwitterPostCountOutputType




  // Custom InputTypes

  /**
   * TwitterPostCountOutputType without action
   */
  export type TwitterPostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostCountOutputType
     */
    select?: TwitterPostCountOutputTypeSelect | null
  }



  /**
   * Count Type TwitterHashTagCountOutputType
   */


  export type TwitterHashTagCountOutputType = {
    posts: number
  }

  export type TwitterHashTagCountOutputTypeSelect = {
    posts?: boolean
  }

  export type TwitterHashTagCountOutputTypeGetPayload<S extends boolean | null | undefined | TwitterHashTagCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterHashTagCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TwitterHashTagCountOutputTypeArgs)
    ? TwitterHashTagCountOutputType 
    : S extends { select: any } & (TwitterHashTagCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TwitterHashTagCountOutputType ? TwitterHashTagCountOutputType[P] : never
  } 
      : TwitterHashTagCountOutputType




  // Custom InputTypes

  /**
   * TwitterHashTagCountOutputType without action
   */
  export type TwitterHashTagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTagCountOutputType
     */
    select?: TwitterHashTagCountOutputTypeSelect | null
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
    orderItems?: boolean | BinKitchenOrder$orderItemsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | BinKitchenOrderCountOutputTypeArgs
  }


  export type BinKitchenOrderInclude = {
    orderItems?: boolean | BinKitchenOrder$orderItemsArgs
    _count?: boolean | BinKitchenOrderCountOutputTypeArgs
  }

  export type BinKitchenOrderGetPayload<S extends boolean | null | undefined | BinKitchenOrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenOrder :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenOrderArgs | BinKitchenOrderFindManyArgs)
    ? BinKitchenOrder  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'orderItems' ? Array < BinKitchenOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? BinKitchenOrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BinKitchenOrderArgs | BinKitchenOrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'orderItems' ? Array < BinKitchenOrderItemGetPayload<S['select'][P]>>  :
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

    orderItems<T extends BinKitchenOrder$orderItemsArgs= {}>(args?: Subset<T, BinKitchenOrder$orderItemsArgs>): Prisma.PrismaPromise<Array<BinKitchenOrderItemGetPayload<T>>| Null>;

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
   * BinKitchenOrder.orderItems
   */
  export type BinKitchenOrder$orderItemsArgs = {
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
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoListMaxAggregateOutputType = {
    id: number | null
    task: string | null
    status: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoListCountAggregateOutputType = {
    id: number
    task: number
    status: number
    note: number
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
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoListMaxAggregateInputType = {
    id?: true
    task?: true
    status?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoListCountAggregateInputType = {
    id?: true
    task?: true
    status?: true
    note?: true
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
    note: string | null
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
    note?: boolean
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
   * Model TriviaCategory
   */


  export type AggregateTriviaCategory = {
    _count: TriviaCategoryCountAggregateOutputType | null
    _avg: TriviaCategoryAvgAggregateOutputType | null
    _sum: TriviaCategorySumAggregateOutputType | null
    _min: TriviaCategoryMinAggregateOutputType | null
    _max: TriviaCategoryMaxAggregateOutputType | null
  }

  export type TriviaCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type TriviaCategorySumAggregateOutputType = {
    id: number | null
  }

  export type TriviaCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaCategoryAvgAggregateInputType = {
    id?: true
  }

  export type TriviaCategorySumAggregateInputType = {
    id?: true
  }

  export type TriviaCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaCategoryAggregateArgs = {
    /**
     * Filter which TriviaCategory to aggregate.
     */
    where?: TriviaCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaCategories to fetch.
     */
    orderBy?: Enumerable<TriviaCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaCategories
    **/
    _count?: true | TriviaCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaCategoryMaxAggregateInputType
  }

  export type GetTriviaCategoryAggregateType<T extends TriviaCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaCategory[P]>
      : GetScalarType<T[P], AggregateTriviaCategory[P]>
  }




  export type TriviaCategoryGroupByArgs = {
    where?: TriviaCategoryWhereInput
    orderBy?: Enumerable<TriviaCategoryOrderByWithAggregationInput>
    by: TriviaCategoryScalarFieldEnum[]
    having?: TriviaCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaCategoryCountAggregateInputType | true
    _avg?: TriviaCategoryAvgAggregateInputType
    _sum?: TriviaCategorySumAggregateInputType
    _min?: TriviaCategoryMinAggregateInputType
    _max?: TriviaCategoryMaxAggregateInputType
  }


  export type TriviaCategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TriviaCategoryCountAggregateOutputType | null
    _avg: TriviaCategoryAvgAggregateOutputType | null
    _sum: TriviaCategorySumAggregateOutputType | null
    _min: TriviaCategoryMinAggregateOutputType | null
    _max: TriviaCategoryMaxAggregateOutputType | null
  }

  type GetTriviaCategoryGroupByPayload<T extends TriviaCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TriviaCategorySelect = {
    id?: boolean
    name?: boolean
    triviaQuizes?: boolean | TriviaCategory$triviaQuizesArgs
    createdAt?: boolean
    updatedAt?: boolean
    rounds?: boolean | TriviaCategory$roundsArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }


  export type TriviaCategoryInclude = {
    triviaQuizes?: boolean | TriviaCategory$triviaQuizesArgs
    rounds?: boolean | TriviaCategory$roundsArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }

  export type TriviaCategoryGetPayload<S extends boolean | null | undefined | TriviaCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaCategory :
    S extends undefined ? never :
    S extends { include: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
    ? TriviaCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'triviaQuizes' ? Array < TriviaQuizGetPayload<S['include'][P]>>  :
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'triviaQuizes' ? Array < TriviaQuizGetPayload<S['select'][P]>>  :
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaCategory ? TriviaCategory[P] : never
  } 
      : TriviaCategory


  type TriviaCategoryCountArgs = 
    Omit<TriviaCategoryFindManyArgs, 'select' | 'include'> & {
      select?: TriviaCategoryCountAggregateInputType | true
    }

  export interface TriviaCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaCategory that matches the filter.
     * @param {TriviaCategoryFindUniqueArgs} args - Arguments to find a TriviaCategory
     * @example
     * // Get one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaCategory'> extends True ? Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>> : Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | null, null>

    /**
     * Find one TriviaCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaCategoryFindUniqueOrThrowArgs} args - Arguments to find a TriviaCategory
     * @example
     * // Get one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaCategoryFindUniqueOrThrowArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Find the first TriviaCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryFindFirstArgs} args - Arguments to find a TriviaCategory
     * @example
     * // Get one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaCategory'> extends True ? Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>> : Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | null, null>

    /**
     * Find the first TriviaCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryFindFirstOrThrowArgs} args - Arguments to find a TriviaCategory
     * @example
     * // Get one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaCategoryFindFirstOrThrowArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Find zero or more TriviaCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaCategories
     * const triviaCategories = await prisma.triviaCategory.findMany()
     * 
     * // Get first 10 TriviaCategories
     * const triviaCategories = await prisma.triviaCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaCategoryWithIdOnly = await prisma.triviaCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaCategoryFindManyArgs>(
      args?: SelectSubset<T, TriviaCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaCategoryGetPayload<T>>>

    /**
     * Create a TriviaCategory.
     * @param {TriviaCategoryCreateArgs} args - Arguments to create a TriviaCategory.
     * @example
     * // Create one TriviaCategory
     * const TriviaCategory = await prisma.triviaCategory.create({
     *   data: {
     *     // ... data to create a TriviaCategory
     *   }
     * })
     * 
    **/
    create<T extends TriviaCategoryCreateArgs>(
      args: SelectSubset<T, TriviaCategoryCreateArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Create many TriviaCategories.
     *     @param {TriviaCategoryCreateManyArgs} args - Arguments to create many TriviaCategories.
     *     @example
     *     // Create many TriviaCategories
     *     const triviaCategory = await prisma.triviaCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaCategoryCreateManyArgs>(
      args?: SelectSubset<T, TriviaCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaCategory.
     * @param {TriviaCategoryDeleteArgs} args - Arguments to delete one TriviaCategory.
     * @example
     * // Delete one TriviaCategory
     * const TriviaCategory = await prisma.triviaCategory.delete({
     *   where: {
     *     // ... filter to delete one TriviaCategory
     *   }
     * })
     * 
    **/
    delete<T extends TriviaCategoryDeleteArgs>(
      args: SelectSubset<T, TriviaCategoryDeleteArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Update one TriviaCategory.
     * @param {TriviaCategoryUpdateArgs} args - Arguments to update one TriviaCategory.
     * @example
     * // Update one TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaCategoryUpdateArgs>(
      args: SelectSubset<T, TriviaCategoryUpdateArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Delete zero or more TriviaCategories.
     * @param {TriviaCategoryDeleteManyArgs} args - Arguments to filter TriviaCategories to delete.
     * @example
     * // Delete a few TriviaCategories
     * const { count } = await prisma.triviaCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaCategoryDeleteManyArgs>(
      args?: SelectSubset<T, TriviaCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaCategories
     * const triviaCategory = await prisma.triviaCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaCategoryUpdateManyArgs>(
      args: SelectSubset<T, TriviaCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaCategory.
     * @param {TriviaCategoryUpsertArgs} args - Arguments to update or create a TriviaCategory.
     * @example
     * // Update or create a TriviaCategory
     * const triviaCategory = await prisma.triviaCategory.upsert({
     *   create: {
     *     // ... data to create a TriviaCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaCategory we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaCategoryUpsertArgs>(
      args: SelectSubset<T, TriviaCategoryUpsertArgs>
    ): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T>>

    /**
     * Count the number of TriviaCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryCountArgs} args - Arguments to filter TriviaCategories to count.
     * @example
     * // Count the number of TriviaCategories
     * const count = await prisma.triviaCategory.count({
     *   where: {
     *     // ... the filter for the TriviaCategories we want to count
     *   }
     * })
    **/
    count<T extends TriviaCategoryCountArgs>(
      args?: Subset<T, TriviaCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaCategoryAggregateArgs>(args: Subset<T, TriviaCategoryAggregateArgs>): Prisma.PrismaPromise<GetTriviaCategoryAggregateType<T>>

    /**
     * Group by TriviaCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCategoryGroupByArgs} args - Group by arguments.
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
      T extends TriviaCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TriviaCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    triviaQuizes<T extends TriviaCategory$triviaQuizesArgs= {}>(args?: Subset<T, TriviaCategory$triviaQuizesArgs>): Prisma.PrismaPromise<Array<TriviaQuizGetPayload<T>>| Null>;

    rounds<T extends TriviaCategory$roundsArgs= {}>(args?: Subset<T, TriviaCategory$roundsArgs>): Prisma.PrismaPromise<Array<TriviaRoundGetPayload<T>>| Null>;

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
   * TriviaCategory base type for findUnique actions
   */
  export type TriviaCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategory to fetch.
     */
    where: TriviaCategoryWhereUniqueInput
  }

  /**
   * TriviaCategory findUnique
   */
  export interface TriviaCategoryFindUniqueArgs extends TriviaCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaCategory findUniqueOrThrow
   */
  export type TriviaCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategory to fetch.
     */
    where: TriviaCategoryWhereUniqueInput
  }


  /**
   * TriviaCategory base type for findFirst actions
   */
  export type TriviaCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategory to fetch.
     */
    where?: TriviaCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaCategories to fetch.
     */
    orderBy?: Enumerable<TriviaCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaCategories.
     */
    cursor?: TriviaCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaCategories.
     */
    distinct?: Enumerable<TriviaCategoryScalarFieldEnum>
  }

  /**
   * TriviaCategory findFirst
   */
  export interface TriviaCategoryFindFirstArgs extends TriviaCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaCategory findFirstOrThrow
   */
  export type TriviaCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategory to fetch.
     */
    where?: TriviaCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaCategories to fetch.
     */
    orderBy?: Enumerable<TriviaCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaCategories.
     */
    cursor?: TriviaCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaCategories.
     */
    distinct?: Enumerable<TriviaCategoryScalarFieldEnum>
  }


  /**
   * TriviaCategory findMany
   */
  export type TriviaCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter, which TriviaCategories to fetch.
     */
    where?: TriviaCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaCategories to fetch.
     */
    orderBy?: Enumerable<TriviaCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaCategories.
     */
    cursor?: TriviaCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaCategories.
     */
    skip?: number
    distinct?: Enumerable<TriviaCategoryScalarFieldEnum>
  }


  /**
   * TriviaCategory create
   */
  export type TriviaCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * The data needed to create a TriviaCategory.
     */
    data: XOR<TriviaCategoryCreateInput, TriviaCategoryUncheckedCreateInput>
  }


  /**
   * TriviaCategory createMany
   */
  export type TriviaCategoryCreateManyArgs = {
    /**
     * The data used to create many TriviaCategories.
     */
    data: Enumerable<TriviaCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaCategory update
   */
  export type TriviaCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * The data needed to update a TriviaCategory.
     */
    data: XOR<TriviaCategoryUpdateInput, TriviaCategoryUncheckedUpdateInput>
    /**
     * Choose, which TriviaCategory to update.
     */
    where: TriviaCategoryWhereUniqueInput
  }


  /**
   * TriviaCategory updateMany
   */
  export type TriviaCategoryUpdateManyArgs = {
    /**
     * The data used to update TriviaCategories.
     */
    data: XOR<TriviaCategoryUpdateManyMutationInput, TriviaCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TriviaCategories to update
     */
    where?: TriviaCategoryWhereInput
  }


  /**
   * TriviaCategory upsert
   */
  export type TriviaCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * The filter to search for the TriviaCategory to update in case it exists.
     */
    where: TriviaCategoryWhereUniqueInput
    /**
     * In case the TriviaCategory found by the `where` argument doesn't exist, create a new TriviaCategory with this data.
     */
    create: XOR<TriviaCategoryCreateInput, TriviaCategoryUncheckedCreateInput>
    /**
     * In case the TriviaCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaCategoryUpdateInput, TriviaCategoryUncheckedUpdateInput>
  }


  /**
   * TriviaCategory delete
   */
  export type TriviaCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
    /**
     * Filter which TriviaCategory to delete.
     */
    where: TriviaCategoryWhereUniqueInput
  }


  /**
   * TriviaCategory deleteMany
   */
  export type TriviaCategoryDeleteManyArgs = {
    /**
     * Filter which TriviaCategories to delete
     */
    where?: TriviaCategoryWhereInput
  }


  /**
   * TriviaCategory.triviaQuizes
   */
  export type TriviaCategory$triviaQuizesArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    where?: TriviaQuizWhereInput
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    cursor?: TriviaQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }


  /**
   * TriviaCategory.rounds
   */
  export type TriviaCategory$roundsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    where?: TriviaRoundWhereInput
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    cursor?: TriviaRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaCategory without action
   */
  export type TriviaCategoryArgs = {
    /**
     * Select specific fields to fetch from the TriviaCategory
     */
    select?: TriviaCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaCategoryInclude | null
  }



  /**
   * Model TriviaQuiz
   */


  export type AggregateTriviaQuiz = {
    _count: TriviaQuizCountAggregateOutputType | null
    _avg: TriviaQuizAvgAggregateOutputType | null
    _sum: TriviaQuizSumAggregateOutputType | null
    _min: TriviaQuizMinAggregateOutputType | null
    _max: TriviaQuizMaxAggregateOutputType | null
  }

  export type TriviaQuizAvgAggregateOutputType = {
    id: number | null
    answerId: number | null
  }

  export type TriviaQuizSumAggregateOutputType = {
    id: number | null
    answerId: number | null
  }

  export type TriviaQuizMinAggregateOutputType = {
    id: number | null
    quiz: string | null
    categoryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    answerId: number | null
  }

  export type TriviaQuizMaxAggregateOutputType = {
    id: number | null
    quiz: string | null
    categoryName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    answerId: number | null
  }

  export type TriviaQuizCountAggregateOutputType = {
    id: number
    quiz: number
    categoryName: number
    createdAt: number
    updatedAt: number
    answerId: number
    _all: number
  }


  export type TriviaQuizAvgAggregateInputType = {
    id?: true
    answerId?: true
  }

  export type TriviaQuizSumAggregateInputType = {
    id?: true
    answerId?: true
  }

  export type TriviaQuizMinAggregateInputType = {
    id?: true
    quiz?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
    answerId?: true
  }

  export type TriviaQuizMaxAggregateInputType = {
    id?: true
    quiz?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
    answerId?: true
  }

  export type TriviaQuizCountAggregateInputType = {
    id?: true
    quiz?: true
    categoryName?: true
    createdAt?: true
    updatedAt?: true
    answerId?: true
    _all?: true
  }

  export type TriviaQuizAggregateArgs = {
    /**
     * Filter which TriviaQuiz to aggregate.
     */
    where?: TriviaQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaQuizs
    **/
    _count?: true | TriviaQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaQuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaQuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaQuizMaxAggregateInputType
  }

  export type GetTriviaQuizAggregateType<T extends TriviaQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaQuiz[P]>
      : GetScalarType<T[P], AggregateTriviaQuiz[P]>
  }




  export type TriviaQuizGroupByArgs = {
    where?: TriviaQuizWhereInput
    orderBy?: Enumerable<TriviaQuizOrderByWithAggregationInput>
    by: TriviaQuizScalarFieldEnum[]
    having?: TriviaQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaQuizCountAggregateInputType | true
    _avg?: TriviaQuizAvgAggregateInputType
    _sum?: TriviaQuizSumAggregateInputType
    _min?: TriviaQuizMinAggregateInputType
    _max?: TriviaQuizMaxAggregateInputType
  }


  export type TriviaQuizGroupByOutputType = {
    id: number
    quiz: string
    categoryName: string
    createdAt: Date
    updatedAt: Date
    answerId: number
    _count: TriviaQuizCountAggregateOutputType | null
    _avg: TriviaQuizAvgAggregateOutputType | null
    _sum: TriviaQuizSumAggregateOutputType | null
    _min: TriviaQuizMinAggregateOutputType | null
    _max: TriviaQuizMaxAggregateOutputType | null
  }

  type GetTriviaQuizGroupByPayload<T extends TriviaQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaQuizGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaQuizGroupByOutputType[P]>
        }
      >
    >


  export type TriviaQuizSelect = {
    id?: boolean
    quiz?: boolean
    category?: boolean | TriviaCategoryArgs
    categoryName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    choices?: boolean | TriviaQuiz$choicesArgs
    answerId?: boolean
    roundQuizes?: boolean | TriviaQuiz$roundQuizesArgs
    _count?: boolean | TriviaQuizCountOutputTypeArgs
  }


  export type TriviaQuizInclude = {
    category?: boolean | TriviaCategoryArgs
    choices?: boolean | TriviaQuiz$choicesArgs
    roundQuizes?: boolean | TriviaQuiz$roundQuizesArgs
    _count?: boolean | TriviaQuizCountOutputTypeArgs
  }

  export type TriviaQuizGetPayload<S extends boolean | null | undefined | TriviaQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuiz :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuizArgs | TriviaQuizFindManyArgs)
    ? TriviaQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> | null :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['include'][P]>>  :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaQuizCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaQuizArgs | TriviaQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> | null :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['select'][P]>>  :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaQuizCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaQuiz ? TriviaQuiz[P] : never
  } 
      : TriviaQuiz


  type TriviaQuizCountArgs = 
    Omit<TriviaQuizFindManyArgs, 'select' | 'include'> & {
      select?: TriviaQuizCountAggregateInputType | true
    }

  export interface TriviaQuizDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaQuiz that matches the filter.
     * @param {TriviaQuizFindUniqueArgs} args - Arguments to find a TriviaQuiz
     * @example
     * // Get one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaQuizFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaQuizFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaQuiz'> extends True ? Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>> : Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | null, null>

    /**
     * Find one TriviaQuiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaQuizFindUniqueOrThrowArgs} args - Arguments to find a TriviaQuiz
     * @example
     * // Get one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaQuizFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuizFindUniqueOrThrowArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Find the first TriviaQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizFindFirstArgs} args - Arguments to find a TriviaQuiz
     * @example
     * // Get one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaQuizFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaQuizFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaQuiz'> extends True ? Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>> : Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | null, null>

    /**
     * Find the first TriviaQuiz that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizFindFirstOrThrowArgs} args - Arguments to find a TriviaQuiz
     * @example
     * // Get one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaQuizFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuizFindFirstOrThrowArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Find zero or more TriviaQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaQuizs
     * const triviaQuizs = await prisma.triviaQuiz.findMany()
     * 
     * // Get first 10 TriviaQuizs
     * const triviaQuizs = await prisma.triviaQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaQuizWithIdOnly = await prisma.triviaQuiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaQuizFindManyArgs>(
      args?: SelectSubset<T, TriviaQuizFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaQuizGetPayload<T>>>

    /**
     * Create a TriviaQuiz.
     * @param {TriviaQuizCreateArgs} args - Arguments to create a TriviaQuiz.
     * @example
     * // Create one TriviaQuiz
     * const TriviaQuiz = await prisma.triviaQuiz.create({
     *   data: {
     *     // ... data to create a TriviaQuiz
     *   }
     * })
     * 
    **/
    create<T extends TriviaQuizCreateArgs>(
      args: SelectSubset<T, TriviaQuizCreateArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Create many TriviaQuizs.
     *     @param {TriviaQuizCreateManyArgs} args - Arguments to create many TriviaQuizs.
     *     @example
     *     // Create many TriviaQuizs
     *     const triviaQuiz = await prisma.triviaQuiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaQuizCreateManyArgs>(
      args?: SelectSubset<T, TriviaQuizCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaQuiz.
     * @param {TriviaQuizDeleteArgs} args - Arguments to delete one TriviaQuiz.
     * @example
     * // Delete one TriviaQuiz
     * const TriviaQuiz = await prisma.triviaQuiz.delete({
     *   where: {
     *     // ... filter to delete one TriviaQuiz
     *   }
     * })
     * 
    **/
    delete<T extends TriviaQuizDeleteArgs>(
      args: SelectSubset<T, TriviaQuizDeleteArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Update one TriviaQuiz.
     * @param {TriviaQuizUpdateArgs} args - Arguments to update one TriviaQuiz.
     * @example
     * // Update one TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaQuizUpdateArgs>(
      args: SelectSubset<T, TriviaQuizUpdateArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Delete zero or more TriviaQuizs.
     * @param {TriviaQuizDeleteManyArgs} args - Arguments to filter TriviaQuizs to delete.
     * @example
     * // Delete a few TriviaQuizs
     * const { count } = await prisma.triviaQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaQuizDeleteManyArgs>(
      args?: SelectSubset<T, TriviaQuizDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaQuizs
     * const triviaQuiz = await prisma.triviaQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaQuizUpdateManyArgs>(
      args: SelectSubset<T, TriviaQuizUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaQuiz.
     * @param {TriviaQuizUpsertArgs} args - Arguments to update or create a TriviaQuiz.
     * @example
     * // Update or create a TriviaQuiz
     * const triviaQuiz = await prisma.triviaQuiz.upsert({
     *   create: {
     *     // ... data to create a TriviaQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaQuizUpsertArgs>(
      args: SelectSubset<T, TriviaQuizUpsertArgs>
    ): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T>>

    /**
     * Count the number of TriviaQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizCountArgs} args - Arguments to filter TriviaQuizs to count.
     * @example
     * // Count the number of TriviaQuizs
     * const count = await prisma.triviaQuiz.count({
     *   where: {
     *     // ... the filter for the TriviaQuizs we want to count
     *   }
     * })
    **/
    count<T extends TriviaQuizCountArgs>(
      args?: Subset<T, TriviaQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaQuizAggregateArgs>(args: Subset<T, TriviaQuizAggregateArgs>): Prisma.PrismaPromise<GetTriviaQuizAggregateType<T>>

    /**
     * Group by TriviaQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizGroupByArgs} args - Group by arguments.
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
      T extends TriviaQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaQuizGroupByArgs['orderBy'] }
        : { orderBy?: TriviaQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaQuizClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    category<T extends TriviaCategoryArgs= {}>(args?: Subset<T, TriviaCategoryArgs>): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | Null>;

    choices<T extends TriviaQuiz$choicesArgs= {}>(args?: Subset<T, TriviaQuiz$choicesArgs>): Prisma.PrismaPromise<Array<TriviaChoiceGetPayload<T>>| Null>;

    roundQuizes<T extends TriviaQuiz$roundQuizesArgs= {}>(args?: Subset<T, TriviaQuiz$roundQuizesArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>| Null>;

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
   * TriviaQuiz base type for findUnique actions
   */
  export type TriviaQuizFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuiz to fetch.
     */
    where: TriviaQuizWhereUniqueInput
  }

  /**
   * TriviaQuiz findUnique
   */
  export interface TriviaQuizFindUniqueArgs extends TriviaQuizFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuiz findUniqueOrThrow
   */
  export type TriviaQuizFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuiz to fetch.
     */
    where: TriviaQuizWhereUniqueInput
  }


  /**
   * TriviaQuiz base type for findFirst actions
   */
  export type TriviaQuizFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuiz to fetch.
     */
    where?: TriviaQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuizs.
     */
    cursor?: TriviaQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuizs.
     */
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }

  /**
   * TriviaQuiz findFirst
   */
  export interface TriviaQuizFindFirstArgs extends TriviaQuizFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuiz findFirstOrThrow
   */
  export type TriviaQuizFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuiz to fetch.
     */
    where?: TriviaQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuizs.
     */
    cursor?: TriviaQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuizs.
     */
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }


  /**
   * TriviaQuiz findMany
   */
  export type TriviaQuizFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter, which TriviaQuizs to fetch.
     */
    where?: TriviaQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaQuizs.
     */
    cursor?: TriviaQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizs.
     */
    skip?: number
    distinct?: Enumerable<TriviaQuizScalarFieldEnum>
  }


  /**
   * TriviaQuiz create
   */
  export type TriviaQuizCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * The data needed to create a TriviaQuiz.
     */
    data: XOR<TriviaQuizCreateInput, TriviaQuizUncheckedCreateInput>
  }


  /**
   * TriviaQuiz createMany
   */
  export type TriviaQuizCreateManyArgs = {
    /**
     * The data used to create many TriviaQuizs.
     */
    data: Enumerable<TriviaQuizCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaQuiz update
   */
  export type TriviaQuizUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * The data needed to update a TriviaQuiz.
     */
    data: XOR<TriviaQuizUpdateInput, TriviaQuizUncheckedUpdateInput>
    /**
     * Choose, which TriviaQuiz to update.
     */
    where: TriviaQuizWhereUniqueInput
  }


  /**
   * TriviaQuiz updateMany
   */
  export type TriviaQuizUpdateManyArgs = {
    /**
     * The data used to update TriviaQuizs.
     */
    data: XOR<TriviaQuizUpdateManyMutationInput, TriviaQuizUncheckedUpdateManyInput>
    /**
     * Filter which TriviaQuizs to update
     */
    where?: TriviaQuizWhereInput
  }


  /**
   * TriviaQuiz upsert
   */
  export type TriviaQuizUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * The filter to search for the TriviaQuiz to update in case it exists.
     */
    where: TriviaQuizWhereUniqueInput
    /**
     * In case the TriviaQuiz found by the `where` argument doesn't exist, create a new TriviaQuiz with this data.
     */
    create: XOR<TriviaQuizCreateInput, TriviaQuizUncheckedCreateInput>
    /**
     * In case the TriviaQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaQuizUpdateInput, TriviaQuizUncheckedUpdateInput>
  }


  /**
   * TriviaQuiz delete
   */
  export type TriviaQuizDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
    /**
     * Filter which TriviaQuiz to delete.
     */
    where: TriviaQuizWhereUniqueInput
  }


  /**
   * TriviaQuiz deleteMany
   */
  export type TriviaQuizDeleteManyArgs = {
    /**
     * Filter which TriviaQuizs to delete
     */
    where?: TriviaQuizWhereInput
  }


  /**
   * TriviaQuiz.choices
   */
  export type TriviaQuiz$choicesArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    where?: TriviaChoiceWhereInput
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    cursor?: TriviaChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaChoiceScalarFieldEnum>
  }


  /**
   * TriviaQuiz.roundQuizes
   */
  export type TriviaQuiz$roundQuizesArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    where?: TriviaRoundQuizWhereInput
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    cursor?: TriviaRoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaQuiz without action
   */
  export type TriviaQuizArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuiz
     */
    select?: TriviaQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizInclude | null
  }



  /**
   * Model TriviaChoice
   */


  export type AggregateTriviaChoice = {
    _count: TriviaChoiceCountAggregateOutputType | null
    _avg: TriviaChoiceAvgAggregateOutputType | null
    _sum: TriviaChoiceSumAggregateOutputType | null
    _min: TriviaChoiceMinAggregateOutputType | null
    _max: TriviaChoiceMaxAggregateOutputType | null
  }

  export type TriviaChoiceAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type TriviaChoiceSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type TriviaChoiceMinAggregateOutputType = {
    id: number | null
    choice: string | null
    quizId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaChoiceMaxAggregateOutputType = {
    id: number | null
    choice: string | null
    quizId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaChoiceCountAggregateOutputType = {
    id: number
    choice: number
    quizId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaChoiceAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type TriviaChoiceSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type TriviaChoiceMinAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaChoiceMaxAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaChoiceCountAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaChoiceAggregateArgs = {
    /**
     * Filter which TriviaChoice to aggregate.
     */
    where?: TriviaChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaChoices to fetch.
     */
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaChoices
    **/
    _count?: true | TriviaChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaChoiceMaxAggregateInputType
  }

  export type GetTriviaChoiceAggregateType<T extends TriviaChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaChoice[P]>
      : GetScalarType<T[P], AggregateTriviaChoice[P]>
  }




  export type TriviaChoiceGroupByArgs = {
    where?: TriviaChoiceWhereInput
    orderBy?: Enumerable<TriviaChoiceOrderByWithAggregationInput>
    by: TriviaChoiceScalarFieldEnum[]
    having?: TriviaChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaChoiceCountAggregateInputType | true
    _avg?: TriviaChoiceAvgAggregateInputType
    _sum?: TriviaChoiceSumAggregateInputType
    _min?: TriviaChoiceMinAggregateInputType
    _max?: TriviaChoiceMaxAggregateInputType
  }


  export type TriviaChoiceGroupByOutputType = {
    id: number
    choice: string
    quizId: number
    createdAt: Date
    updatedAt: Date
    _count: TriviaChoiceCountAggregateOutputType | null
    _avg: TriviaChoiceAvgAggregateOutputType | null
    _sum: TriviaChoiceSumAggregateOutputType | null
    _min: TriviaChoiceMinAggregateOutputType | null
    _max: TriviaChoiceMaxAggregateOutputType | null
  }

  type GetTriviaChoiceGroupByPayload<T extends TriviaChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaChoiceGroupByOutputType[P]>
        }
      >
    >


  export type TriviaChoiceSelect = {
    id?: boolean
    choice?: boolean
    quiz?: boolean | TriviaQuizArgs
    quizId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roundQuizes?: boolean | TriviaChoice$roundQuizesArgs
    _count?: boolean | TriviaChoiceCountOutputTypeArgs
  }


  export type TriviaChoiceInclude = {
    quiz?: boolean | TriviaQuizArgs
    roundQuizes?: boolean | TriviaChoice$roundQuizesArgs
    _count?: boolean | TriviaChoiceCountOutputTypeArgs
  }

  export type TriviaChoiceGetPayload<S extends boolean | null | undefined | TriviaChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaChoice :
    S extends undefined ? never :
    S extends { include: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
    ? TriviaChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'quiz' ? TriviaQuizGetPayload<S['include'][P]> | null :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'quiz' ? TriviaQuizGetPayload<S['select'][P]> | null :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaChoiceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaChoice ? TriviaChoice[P] : never
  } 
      : TriviaChoice


  type TriviaChoiceCountArgs = 
    Omit<TriviaChoiceFindManyArgs, 'select' | 'include'> & {
      select?: TriviaChoiceCountAggregateInputType | true
    }

  export interface TriviaChoiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaChoice that matches the filter.
     * @param {TriviaChoiceFindUniqueArgs} args - Arguments to find a TriviaChoice
     * @example
     * // Get one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaChoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaChoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaChoice'> extends True ? Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>> : Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | null, null>

    /**
     * Find one TriviaChoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaChoiceFindUniqueOrThrowArgs} args - Arguments to find a TriviaChoice
     * @example
     * // Get one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaChoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaChoiceFindUniqueOrThrowArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Find the first TriviaChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceFindFirstArgs} args - Arguments to find a TriviaChoice
     * @example
     * // Get one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaChoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaChoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaChoice'> extends True ? Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>> : Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | null, null>

    /**
     * Find the first TriviaChoice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceFindFirstOrThrowArgs} args - Arguments to find a TriviaChoice
     * @example
     * // Get one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaChoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaChoiceFindFirstOrThrowArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Find zero or more TriviaChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaChoices
     * const triviaChoices = await prisma.triviaChoice.findMany()
     * 
     * // Get first 10 TriviaChoices
     * const triviaChoices = await prisma.triviaChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaChoiceWithIdOnly = await prisma.triviaChoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaChoiceFindManyArgs>(
      args?: SelectSubset<T, TriviaChoiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaChoiceGetPayload<T>>>

    /**
     * Create a TriviaChoice.
     * @param {TriviaChoiceCreateArgs} args - Arguments to create a TriviaChoice.
     * @example
     * // Create one TriviaChoice
     * const TriviaChoice = await prisma.triviaChoice.create({
     *   data: {
     *     // ... data to create a TriviaChoice
     *   }
     * })
     * 
    **/
    create<T extends TriviaChoiceCreateArgs>(
      args: SelectSubset<T, TriviaChoiceCreateArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Create many TriviaChoices.
     *     @param {TriviaChoiceCreateManyArgs} args - Arguments to create many TriviaChoices.
     *     @example
     *     // Create many TriviaChoices
     *     const triviaChoice = await prisma.triviaChoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaChoiceCreateManyArgs>(
      args?: SelectSubset<T, TriviaChoiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaChoice.
     * @param {TriviaChoiceDeleteArgs} args - Arguments to delete one TriviaChoice.
     * @example
     * // Delete one TriviaChoice
     * const TriviaChoice = await prisma.triviaChoice.delete({
     *   where: {
     *     // ... filter to delete one TriviaChoice
     *   }
     * })
     * 
    **/
    delete<T extends TriviaChoiceDeleteArgs>(
      args: SelectSubset<T, TriviaChoiceDeleteArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Update one TriviaChoice.
     * @param {TriviaChoiceUpdateArgs} args - Arguments to update one TriviaChoice.
     * @example
     * // Update one TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaChoiceUpdateArgs>(
      args: SelectSubset<T, TriviaChoiceUpdateArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Delete zero or more TriviaChoices.
     * @param {TriviaChoiceDeleteManyArgs} args - Arguments to filter TriviaChoices to delete.
     * @example
     * // Delete a few TriviaChoices
     * const { count } = await prisma.triviaChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaChoiceDeleteManyArgs>(
      args?: SelectSubset<T, TriviaChoiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaChoices
     * const triviaChoice = await prisma.triviaChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaChoiceUpdateManyArgs>(
      args: SelectSubset<T, TriviaChoiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaChoice.
     * @param {TriviaChoiceUpsertArgs} args - Arguments to update or create a TriviaChoice.
     * @example
     * // Update or create a TriviaChoice
     * const triviaChoice = await prisma.triviaChoice.upsert({
     *   create: {
     *     // ... data to create a TriviaChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaChoice we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaChoiceUpsertArgs>(
      args: SelectSubset<T, TriviaChoiceUpsertArgs>
    ): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T>>

    /**
     * Count the number of TriviaChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceCountArgs} args - Arguments to filter TriviaChoices to count.
     * @example
     * // Count the number of TriviaChoices
     * const count = await prisma.triviaChoice.count({
     *   where: {
     *     // ... the filter for the TriviaChoices we want to count
     *   }
     * })
    **/
    count<T extends TriviaChoiceCountArgs>(
      args?: Subset<T, TriviaChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaChoiceAggregateArgs>(args: Subset<T, TriviaChoiceAggregateArgs>): Prisma.PrismaPromise<GetTriviaChoiceAggregateType<T>>

    /**
     * Group by TriviaChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaChoiceGroupByArgs} args - Group by arguments.
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
      T extends TriviaChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaChoiceGroupByArgs['orderBy'] }
        : { orderBy?: TriviaChoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaChoiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    quiz<T extends TriviaQuizArgs= {}>(args?: Subset<T, TriviaQuizArgs>): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | Null>;

    roundQuizes<T extends TriviaChoice$roundQuizesArgs= {}>(args?: Subset<T, TriviaChoice$roundQuizesArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>| Null>;

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
   * TriviaChoice base type for findUnique actions
   */
  export type TriviaChoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoice to fetch.
     */
    where: TriviaChoiceWhereUniqueInput
  }

  /**
   * TriviaChoice findUnique
   */
  export interface TriviaChoiceFindUniqueArgs extends TriviaChoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaChoice findUniqueOrThrow
   */
  export type TriviaChoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoice to fetch.
     */
    where: TriviaChoiceWhereUniqueInput
  }


  /**
   * TriviaChoice base type for findFirst actions
   */
  export type TriviaChoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoice to fetch.
     */
    where?: TriviaChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaChoices to fetch.
     */
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaChoices.
     */
    cursor?: TriviaChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaChoices.
     */
    distinct?: Enumerable<TriviaChoiceScalarFieldEnum>
  }

  /**
   * TriviaChoice findFirst
   */
  export interface TriviaChoiceFindFirstArgs extends TriviaChoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaChoice findFirstOrThrow
   */
  export type TriviaChoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoice to fetch.
     */
    where?: TriviaChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaChoices to fetch.
     */
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaChoices.
     */
    cursor?: TriviaChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaChoices.
     */
    distinct?: Enumerable<TriviaChoiceScalarFieldEnum>
  }


  /**
   * TriviaChoice findMany
   */
  export type TriviaChoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter, which TriviaChoices to fetch.
     */
    where?: TriviaChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaChoices to fetch.
     */
    orderBy?: Enumerable<TriviaChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaChoices.
     */
    cursor?: TriviaChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaChoices.
     */
    skip?: number
    distinct?: Enumerable<TriviaChoiceScalarFieldEnum>
  }


  /**
   * TriviaChoice create
   */
  export type TriviaChoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * The data needed to create a TriviaChoice.
     */
    data: XOR<TriviaChoiceCreateInput, TriviaChoiceUncheckedCreateInput>
  }


  /**
   * TriviaChoice createMany
   */
  export type TriviaChoiceCreateManyArgs = {
    /**
     * The data used to create many TriviaChoices.
     */
    data: Enumerable<TriviaChoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaChoice update
   */
  export type TriviaChoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * The data needed to update a TriviaChoice.
     */
    data: XOR<TriviaChoiceUpdateInput, TriviaChoiceUncheckedUpdateInput>
    /**
     * Choose, which TriviaChoice to update.
     */
    where: TriviaChoiceWhereUniqueInput
  }


  /**
   * TriviaChoice updateMany
   */
  export type TriviaChoiceUpdateManyArgs = {
    /**
     * The data used to update TriviaChoices.
     */
    data: XOR<TriviaChoiceUpdateManyMutationInput, TriviaChoiceUncheckedUpdateManyInput>
    /**
     * Filter which TriviaChoices to update
     */
    where?: TriviaChoiceWhereInput
  }


  /**
   * TriviaChoice upsert
   */
  export type TriviaChoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * The filter to search for the TriviaChoice to update in case it exists.
     */
    where: TriviaChoiceWhereUniqueInput
    /**
     * In case the TriviaChoice found by the `where` argument doesn't exist, create a new TriviaChoice with this data.
     */
    create: XOR<TriviaChoiceCreateInput, TriviaChoiceUncheckedCreateInput>
    /**
     * In case the TriviaChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaChoiceUpdateInput, TriviaChoiceUncheckedUpdateInput>
  }


  /**
   * TriviaChoice delete
   */
  export type TriviaChoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
    /**
     * Filter which TriviaChoice to delete.
     */
    where: TriviaChoiceWhereUniqueInput
  }


  /**
   * TriviaChoice deleteMany
   */
  export type TriviaChoiceDeleteManyArgs = {
    /**
     * Filter which TriviaChoices to delete
     */
    where?: TriviaChoiceWhereInput
  }


  /**
   * TriviaChoice.roundQuizes
   */
  export type TriviaChoice$roundQuizesArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    where?: TriviaRoundQuizWhereInput
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    cursor?: TriviaRoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaChoice without action
   */
  export type TriviaChoiceArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoice
     */
    select?: TriviaChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaChoiceInclude | null
  }



  /**
   * Model TriviaRound
   */


  export type AggregateTriviaRound = {
    _count: TriviaRoundCountAggregateOutputType | null
    _avg: TriviaRoundAvgAggregateOutputType | null
    _sum: TriviaRoundSumAggregateOutputType | null
    _min: TriviaRoundMinAggregateOutputType | null
    _max: TriviaRoundMaxAggregateOutputType | null
  }

  export type TriviaRoundAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    score: number | null
  }

  export type TriviaRoundSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    score: number | null
  }

  export type TriviaRoundMinAggregateOutputType = {
    id: number | null
    round: string | null
    categoryId: number | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundMaxAggregateOutputType = {
    id: number | null
    round: string | null
    categoryId: number | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundCountAggregateOutputType = {
    id: number
    round: number
    categoryId: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaRoundAvgAggregateInputType = {
    id?: true
    categoryId?: true
    score?: true
  }

  export type TriviaRoundSumAggregateInputType = {
    id?: true
    categoryId?: true
    score?: true
  }

  export type TriviaRoundMinAggregateInputType = {
    id?: true
    round?: true
    categoryId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundMaxAggregateInputType = {
    id?: true
    round?: true
    categoryId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundCountAggregateInputType = {
    id?: true
    round?: true
    categoryId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaRoundAggregateArgs = {
    /**
     * Filter which TriviaRound to aggregate.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaRounds
    **/
    _count?: true | TriviaRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaRoundMaxAggregateInputType
  }

  export type GetTriviaRoundAggregateType<T extends TriviaRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaRound[P]>
      : GetScalarType<T[P], AggregateTriviaRound[P]>
  }




  export type TriviaRoundGroupByArgs = {
    where?: TriviaRoundWhereInput
    orderBy?: Enumerable<TriviaRoundOrderByWithAggregationInput>
    by: TriviaRoundScalarFieldEnum[]
    having?: TriviaRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaRoundCountAggregateInputType | true
    _avg?: TriviaRoundAvgAggregateInputType
    _sum?: TriviaRoundSumAggregateInputType
    _min?: TriviaRoundMinAggregateInputType
    _max?: TriviaRoundMaxAggregateInputType
  }


  export type TriviaRoundGroupByOutputType = {
    id: number
    round: string
    categoryId: number
    score: number
    createdAt: Date
    updatedAt: Date
    _count: TriviaRoundCountAggregateOutputType | null
    _avg: TriviaRoundAvgAggregateOutputType | null
    _sum: TriviaRoundSumAggregateOutputType | null
    _min: TriviaRoundMinAggregateOutputType | null
    _max: TriviaRoundMaxAggregateOutputType | null
  }

  type GetTriviaRoundGroupByPayload<T extends TriviaRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaRoundGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaRoundGroupByOutputType[P]>
        }
      >
    >


  export type TriviaRoundSelect = {
    id?: boolean
    round?: boolean
    category?: boolean | TriviaCategoryArgs
    categoryId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roundQuizes?: boolean | TriviaRound$roundQuizesArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }


  export type TriviaRoundInclude = {
    category?: boolean | TriviaCategoryArgs
    roundQuizes?: boolean | TriviaRound$roundQuizesArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }

  export type TriviaRoundGetPayload<S extends boolean | null | undefined | TriviaRoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRound :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
    ? TriviaRound  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> | null :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaRoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> | null :
        P extends 'roundQuizes' ? Array < TriviaRoundQuizGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaRoundCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaRound ? TriviaRound[P] : never
  } 
      : TriviaRound


  type TriviaRoundCountArgs = 
    Omit<TriviaRoundFindManyArgs, 'select' | 'include'> & {
      select?: TriviaRoundCountAggregateInputType | true
    }

  export interface TriviaRoundDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaRound that matches the filter.
     * @param {TriviaRoundFindUniqueArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaRoundFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaRoundFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaRound'> extends True ? Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>> : Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | null, null>

    /**
     * Find one TriviaRound that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaRoundFindUniqueOrThrowArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaRoundFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundFindUniqueOrThrowArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Find the first TriviaRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindFirstArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaRoundFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaRoundFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaRound'> extends True ? Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>> : Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | null, null>

    /**
     * Find the first TriviaRound that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindFirstOrThrowArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaRoundFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundFindFirstOrThrowArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Find zero or more TriviaRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaRounds
     * const triviaRounds = await prisma.triviaRound.findMany()
     * 
     * // Get first 10 TriviaRounds
     * const triviaRounds = await prisma.triviaRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaRoundWithIdOnly = await prisma.triviaRound.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaRoundFindManyArgs>(
      args?: SelectSubset<T, TriviaRoundFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaRoundGetPayload<T>>>

    /**
     * Create a TriviaRound.
     * @param {TriviaRoundCreateArgs} args - Arguments to create a TriviaRound.
     * @example
     * // Create one TriviaRound
     * const TriviaRound = await prisma.triviaRound.create({
     *   data: {
     *     // ... data to create a TriviaRound
     *   }
     * })
     * 
    **/
    create<T extends TriviaRoundCreateArgs>(
      args: SelectSubset<T, TriviaRoundCreateArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Create many TriviaRounds.
     *     @param {TriviaRoundCreateManyArgs} args - Arguments to create many TriviaRounds.
     *     @example
     *     // Create many TriviaRounds
     *     const triviaRound = await prisma.triviaRound.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaRoundCreateManyArgs>(
      args?: SelectSubset<T, TriviaRoundCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaRound.
     * @param {TriviaRoundDeleteArgs} args - Arguments to delete one TriviaRound.
     * @example
     * // Delete one TriviaRound
     * const TriviaRound = await prisma.triviaRound.delete({
     *   where: {
     *     // ... filter to delete one TriviaRound
     *   }
     * })
     * 
    **/
    delete<T extends TriviaRoundDeleteArgs>(
      args: SelectSubset<T, TriviaRoundDeleteArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Update one TriviaRound.
     * @param {TriviaRoundUpdateArgs} args - Arguments to update one TriviaRound.
     * @example
     * // Update one TriviaRound
     * const triviaRound = await prisma.triviaRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaRoundUpdateArgs>(
      args: SelectSubset<T, TriviaRoundUpdateArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Delete zero or more TriviaRounds.
     * @param {TriviaRoundDeleteManyArgs} args - Arguments to filter TriviaRounds to delete.
     * @example
     * // Delete a few TriviaRounds
     * const { count } = await prisma.triviaRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaRoundDeleteManyArgs>(
      args?: SelectSubset<T, TriviaRoundDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaRounds
     * const triviaRound = await prisma.triviaRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaRoundUpdateManyArgs>(
      args: SelectSubset<T, TriviaRoundUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaRound.
     * @param {TriviaRoundUpsertArgs} args - Arguments to update or create a TriviaRound.
     * @example
     * // Update or create a TriviaRound
     * const triviaRound = await prisma.triviaRound.upsert({
     *   create: {
     *     // ... data to create a TriviaRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaRound we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaRoundUpsertArgs>(
      args: SelectSubset<T, TriviaRoundUpsertArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Count the number of TriviaRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundCountArgs} args - Arguments to filter TriviaRounds to count.
     * @example
     * // Count the number of TriviaRounds
     * const count = await prisma.triviaRound.count({
     *   where: {
     *     // ... the filter for the TriviaRounds we want to count
     *   }
     * })
    **/
    count<T extends TriviaRoundCountArgs>(
      args?: Subset<T, TriviaRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaRoundAggregateArgs>(args: Subset<T, TriviaRoundAggregateArgs>): Prisma.PrismaPromise<GetTriviaRoundAggregateType<T>>

    /**
     * Group by TriviaRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundGroupByArgs} args - Group by arguments.
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
      T extends TriviaRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaRoundGroupByArgs['orderBy'] }
        : { orderBy?: TriviaRoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaRoundClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    category<T extends TriviaCategoryArgs= {}>(args?: Subset<T, TriviaCategoryArgs>): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | Null>;

    roundQuizes<T extends TriviaRound$roundQuizesArgs= {}>(args?: Subset<T, TriviaRound$roundQuizesArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>| Null>;

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
   * TriviaRound base type for findUnique actions
   */
  export type TriviaRoundFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where: TriviaRoundWhereUniqueInput
  }

  /**
   * TriviaRound findUnique
   */
  export interface TriviaRoundFindUniqueArgs extends TriviaRoundFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRound findUniqueOrThrow
   */
  export type TriviaRoundFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound base type for findFirst actions
   */
  export type TriviaRoundFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRounds.
     */
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }

  /**
   * TriviaRound findFirst
   */
  export interface TriviaRoundFindFirstArgs extends TriviaRoundFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRound findFirstOrThrow
   */
  export type TriviaRoundFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRounds.
     */
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaRound findMany
   */
  export type TriviaRoundFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRounds to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaRound create
   */
  export type TriviaRoundCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The data needed to create a TriviaRound.
     */
    data: XOR<TriviaRoundCreateInput, TriviaRoundUncheckedCreateInput>
  }


  /**
   * TriviaRound createMany
   */
  export type TriviaRoundCreateManyArgs = {
    /**
     * The data used to create many TriviaRounds.
     */
    data: Enumerable<TriviaRoundCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaRound update
   */
  export type TriviaRoundUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The data needed to update a TriviaRound.
     */
    data: XOR<TriviaRoundUpdateInput, TriviaRoundUncheckedUpdateInput>
    /**
     * Choose, which TriviaRound to update.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound updateMany
   */
  export type TriviaRoundUpdateManyArgs = {
    /**
     * The data used to update TriviaRounds.
     */
    data: XOR<TriviaRoundUpdateManyMutationInput, TriviaRoundUncheckedUpdateManyInput>
    /**
     * Filter which TriviaRounds to update
     */
    where?: TriviaRoundWhereInput
  }


  /**
   * TriviaRound upsert
   */
  export type TriviaRoundUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The filter to search for the TriviaRound to update in case it exists.
     */
    where: TriviaRoundWhereUniqueInput
    /**
     * In case the TriviaRound found by the `where` argument doesn't exist, create a new TriviaRound with this data.
     */
    create: XOR<TriviaRoundCreateInput, TriviaRoundUncheckedCreateInput>
    /**
     * In case the TriviaRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaRoundUpdateInput, TriviaRoundUncheckedUpdateInput>
  }


  /**
   * TriviaRound delete
   */
  export type TriviaRoundDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter which TriviaRound to delete.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound deleteMany
   */
  export type TriviaRoundDeleteManyArgs = {
    /**
     * Filter which TriviaRounds to delete
     */
    where?: TriviaRoundWhereInput
  }


  /**
   * TriviaRound.roundQuizes
   */
  export type TriviaRound$roundQuizesArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    where?: TriviaRoundQuizWhereInput
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    cursor?: TriviaRoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaRound without action
   */
  export type TriviaRoundArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
  }



  /**
   * Model TriviaRoundQuiz
   */


  export type AggregateTriviaRoundQuiz = {
    _count: TriviaRoundQuizCountAggregateOutputType | null
    _avg: TriviaRoundQuizAvgAggregateOutputType | null
    _sum: TriviaRoundQuizSumAggregateOutputType | null
    _min: TriviaRoundQuizMinAggregateOutputType | null
    _max: TriviaRoundQuizMaxAggregateOutputType | null
  }

  export type TriviaRoundQuizAvgAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    userChoiceId: number | null
  }

  export type TriviaRoundQuizSumAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    userChoiceId: number | null
  }

  export type TriviaRoundQuizMinAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    userChoiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundQuizMaxAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    userChoiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundQuizCountAggregateOutputType = {
    id: number
    roundId: number
    quizId: number
    userChoiceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaRoundQuizAvgAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
  }

  export type TriviaRoundQuizSumAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
  }

  export type TriviaRoundQuizMinAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundQuizMaxAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundQuizCountAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    userChoiceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaRoundQuizAggregateArgs = {
    /**
     * Filter which TriviaRoundQuiz to aggregate.
     */
    where?: TriviaRoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaRoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaRoundQuizs
    **/
    _count?: true | TriviaRoundQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaRoundQuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaRoundQuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaRoundQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaRoundQuizMaxAggregateInputType
  }

  export type GetTriviaRoundQuizAggregateType<T extends TriviaRoundQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaRoundQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaRoundQuiz[P]>
      : GetScalarType<T[P], AggregateTriviaRoundQuiz[P]>
  }




  export type TriviaRoundQuizGroupByArgs = {
    where?: TriviaRoundQuizWhereInput
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithAggregationInput>
    by: TriviaRoundQuizScalarFieldEnum[]
    having?: TriviaRoundQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaRoundQuizCountAggregateInputType | true
    _avg?: TriviaRoundQuizAvgAggregateInputType
    _sum?: TriviaRoundQuizSumAggregateInputType
    _min?: TriviaRoundQuizMinAggregateInputType
    _max?: TriviaRoundQuizMaxAggregateInputType
  }


  export type TriviaRoundQuizGroupByOutputType = {
    id: number
    roundId: number
    quizId: number
    userChoiceId: number
    createdAt: Date
    updatedAt: Date
    _count: TriviaRoundQuizCountAggregateOutputType | null
    _avg: TriviaRoundQuizAvgAggregateOutputType | null
    _sum: TriviaRoundQuizSumAggregateOutputType | null
    _min: TriviaRoundQuizMinAggregateOutputType | null
    _max: TriviaRoundQuizMaxAggregateOutputType | null
  }

  type GetTriviaRoundQuizGroupByPayload<T extends TriviaRoundQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaRoundQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaRoundQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaRoundQuizGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaRoundQuizGroupByOutputType[P]>
        }
      >
    >


  export type TriviaRoundQuizSelect = {
    id?: boolean
    round?: boolean | TriviaRoundArgs
    roundId?: boolean
    quiz?: boolean | TriviaQuizArgs
    quizId?: boolean
    userChoice?: boolean | TriviaChoiceArgs
    userChoiceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TriviaRoundQuizInclude = {
    round?: boolean | TriviaRoundArgs
    quiz?: boolean | TriviaQuizArgs
    userChoice?: boolean | TriviaChoiceArgs
  }

  export type TriviaRoundQuizGetPayload<S extends boolean | null | undefined | TriviaRoundQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundQuiz :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundQuizArgs | TriviaRoundQuizFindManyArgs)
    ? TriviaRoundQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'round' ? TriviaRoundGetPayload<S['include'][P]> | null :
        P extends 'quiz' ? TriviaQuizGetPayload<S['include'][P]> | null :
        P extends 'userChoice' ? TriviaChoiceGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (TriviaRoundQuizArgs | TriviaRoundQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'round' ? TriviaRoundGetPayload<S['select'][P]> | null :
        P extends 'quiz' ? TriviaQuizGetPayload<S['select'][P]> | null :
        P extends 'userChoice' ? TriviaChoiceGetPayload<S['select'][P]> | null :  P extends keyof TriviaRoundQuiz ? TriviaRoundQuiz[P] : never
  } 
      : TriviaRoundQuiz


  type TriviaRoundQuizCountArgs = 
    Omit<TriviaRoundQuizFindManyArgs, 'select' | 'include'> & {
      select?: TriviaRoundQuizCountAggregateInputType | true
    }

  export interface TriviaRoundQuizDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaRoundQuiz that matches the filter.
     * @param {TriviaRoundQuizFindUniqueArgs} args - Arguments to find a TriviaRoundQuiz
     * @example
     * // Get one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaRoundQuizFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaRoundQuizFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaRoundQuiz'> extends True ? Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>> : Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T> | null, null>

    /**
     * Find one TriviaRoundQuiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaRoundQuizFindUniqueOrThrowArgs} args - Arguments to find a TriviaRoundQuiz
     * @example
     * // Get one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaRoundQuizFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuizFindUniqueOrThrowArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Find the first TriviaRoundQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizFindFirstArgs} args - Arguments to find a TriviaRoundQuiz
     * @example
     * // Get one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaRoundQuizFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaRoundQuizFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaRoundQuiz'> extends True ? Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>> : Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T> | null, null>

    /**
     * Find the first TriviaRoundQuiz that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizFindFirstOrThrowArgs} args - Arguments to find a TriviaRoundQuiz
     * @example
     * // Get one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaRoundQuizFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuizFindFirstOrThrowArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Find zero or more TriviaRoundQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaRoundQuizs
     * const triviaRoundQuizs = await prisma.triviaRoundQuiz.findMany()
     * 
     * // Get first 10 TriviaRoundQuizs
     * const triviaRoundQuizs = await prisma.triviaRoundQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaRoundQuizWithIdOnly = await prisma.triviaRoundQuiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaRoundQuizFindManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>>

    /**
     * Create a TriviaRoundQuiz.
     * @param {TriviaRoundQuizCreateArgs} args - Arguments to create a TriviaRoundQuiz.
     * @example
     * // Create one TriviaRoundQuiz
     * const TriviaRoundQuiz = await prisma.triviaRoundQuiz.create({
     *   data: {
     *     // ... data to create a TriviaRoundQuiz
     *   }
     * })
     * 
    **/
    create<T extends TriviaRoundQuizCreateArgs>(
      args: SelectSubset<T, TriviaRoundQuizCreateArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Create many TriviaRoundQuizs.
     *     @param {TriviaRoundQuizCreateManyArgs} args - Arguments to create many TriviaRoundQuizs.
     *     @example
     *     // Create many TriviaRoundQuizs
     *     const triviaRoundQuiz = await prisma.triviaRoundQuiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaRoundQuizCreateManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaRoundQuiz.
     * @param {TriviaRoundQuizDeleteArgs} args - Arguments to delete one TriviaRoundQuiz.
     * @example
     * // Delete one TriviaRoundQuiz
     * const TriviaRoundQuiz = await prisma.triviaRoundQuiz.delete({
     *   where: {
     *     // ... filter to delete one TriviaRoundQuiz
     *   }
     * })
     * 
    **/
    delete<T extends TriviaRoundQuizDeleteArgs>(
      args: SelectSubset<T, TriviaRoundQuizDeleteArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Update one TriviaRoundQuiz.
     * @param {TriviaRoundQuizUpdateArgs} args - Arguments to update one TriviaRoundQuiz.
     * @example
     * // Update one TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaRoundQuizUpdateArgs>(
      args: SelectSubset<T, TriviaRoundQuizUpdateArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Delete zero or more TriviaRoundQuizs.
     * @param {TriviaRoundQuizDeleteManyArgs} args - Arguments to filter TriviaRoundQuizs to delete.
     * @example
     * // Delete a few TriviaRoundQuizs
     * const { count } = await prisma.triviaRoundQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaRoundQuizDeleteManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaRoundQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaRoundQuizs
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaRoundQuizUpdateManyArgs>(
      args: SelectSubset<T, TriviaRoundQuizUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaRoundQuiz.
     * @param {TriviaRoundQuizUpsertArgs} args - Arguments to update or create a TriviaRoundQuiz.
     * @example
     * // Update or create a TriviaRoundQuiz
     * const triviaRoundQuiz = await prisma.triviaRoundQuiz.upsert({
     *   create: {
     *     // ... data to create a TriviaRoundQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaRoundQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaRoundQuizUpsertArgs>(
      args: SelectSubset<T, TriviaRoundQuizUpsertArgs>
    ): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T>>

    /**
     * Count the number of TriviaRoundQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizCountArgs} args - Arguments to filter TriviaRoundQuizs to count.
     * @example
     * // Count the number of TriviaRoundQuizs
     * const count = await prisma.triviaRoundQuiz.count({
     *   where: {
     *     // ... the filter for the TriviaRoundQuizs we want to count
     *   }
     * })
    **/
    count<T extends TriviaRoundQuizCountArgs>(
      args?: Subset<T, TriviaRoundQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaRoundQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaRoundQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaRoundQuizAggregateArgs>(args: Subset<T, TriviaRoundQuizAggregateArgs>): Prisma.PrismaPromise<GetTriviaRoundQuizAggregateType<T>>

    /**
     * Group by TriviaRoundQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizGroupByArgs} args - Group by arguments.
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
      T extends TriviaRoundQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaRoundQuizGroupByArgs['orderBy'] }
        : { orderBy?: TriviaRoundQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaRoundQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaRoundQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaRoundQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaRoundQuizClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    round<T extends TriviaRoundArgs= {}>(args?: Subset<T, TriviaRoundArgs>): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | Null>;

    quiz<T extends TriviaQuizArgs= {}>(args?: Subset<T, TriviaQuizArgs>): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | Null>;

    userChoice<T extends TriviaChoiceArgs= {}>(args?: Subset<T, TriviaChoiceArgs>): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | Null>;

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
   * TriviaRoundQuiz base type for findUnique actions
   */
  export type TriviaRoundQuizFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuiz to fetch.
     */
    where: TriviaRoundQuizWhereUniqueInput
  }

  /**
   * TriviaRoundQuiz findUnique
   */
  export interface TriviaRoundQuizFindUniqueArgs extends TriviaRoundQuizFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuiz findUniqueOrThrow
   */
  export type TriviaRoundQuizFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuiz to fetch.
     */
    where: TriviaRoundQuizWhereUniqueInput
  }


  /**
   * TriviaRoundQuiz base type for findFirst actions
   */
  export type TriviaRoundQuizFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuiz to fetch.
     */
    where?: TriviaRoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuizs.
     */
    cursor?: TriviaRoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuizs.
     */
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }

  /**
   * TriviaRoundQuiz findFirst
   */
  export interface TriviaRoundQuizFindFirstArgs extends TriviaRoundQuizFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuiz findFirstOrThrow
   */
  export type TriviaRoundQuizFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuiz to fetch.
     */
    where?: TriviaRoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuizs.
     */
    cursor?: TriviaRoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuizs.
     */
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaRoundQuiz findMany
   */
  export type TriviaRoundQuizFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter, which TriviaRoundQuizs to fetch.
     */
    where?: TriviaRoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizs to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaRoundQuizs.
     */
    cursor?: TriviaRoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizs.
     */
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizScalarFieldEnum>
  }


  /**
   * TriviaRoundQuiz create
   */
  export type TriviaRoundQuizCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * The data needed to create a TriviaRoundQuiz.
     */
    data: XOR<TriviaRoundQuizCreateInput, TriviaRoundQuizUncheckedCreateInput>
  }


  /**
   * TriviaRoundQuiz createMany
   */
  export type TriviaRoundQuizCreateManyArgs = {
    /**
     * The data used to create many TriviaRoundQuizs.
     */
    data: Enumerable<TriviaRoundQuizCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaRoundQuiz update
   */
  export type TriviaRoundQuizUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * The data needed to update a TriviaRoundQuiz.
     */
    data: XOR<TriviaRoundQuizUpdateInput, TriviaRoundQuizUncheckedUpdateInput>
    /**
     * Choose, which TriviaRoundQuiz to update.
     */
    where: TriviaRoundQuizWhereUniqueInput
  }


  /**
   * TriviaRoundQuiz updateMany
   */
  export type TriviaRoundQuizUpdateManyArgs = {
    /**
     * The data used to update TriviaRoundQuizs.
     */
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyInput>
    /**
     * Filter which TriviaRoundQuizs to update
     */
    where?: TriviaRoundQuizWhereInput
  }


  /**
   * TriviaRoundQuiz upsert
   */
  export type TriviaRoundQuizUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * The filter to search for the TriviaRoundQuiz to update in case it exists.
     */
    where: TriviaRoundQuizWhereUniqueInput
    /**
     * In case the TriviaRoundQuiz found by the `where` argument doesn't exist, create a new TriviaRoundQuiz with this data.
     */
    create: XOR<TriviaRoundQuizCreateInput, TriviaRoundQuizUncheckedCreateInput>
    /**
     * In case the TriviaRoundQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaRoundQuizUpdateInput, TriviaRoundQuizUncheckedUpdateInput>
  }


  /**
   * TriviaRoundQuiz delete
   */
  export type TriviaRoundQuizDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
    /**
     * Filter which TriviaRoundQuiz to delete.
     */
    where: TriviaRoundQuizWhereUniqueInput
  }


  /**
   * TriviaRoundQuiz deleteMany
   */
  export type TriviaRoundQuizDeleteManyArgs = {
    /**
     * Filter which TriviaRoundQuizs to delete
     */
    where?: TriviaRoundQuizWhereInput
  }


  /**
   * TriviaRoundQuiz without action
   */
  export type TriviaRoundQuizArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuiz
     */
    select?: TriviaRoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizInclude | null
  }



  /**
   * Model TwitterUser
   */


  export type AggregateTwitterUser = {
    _count: TwitterUserCountAggregateOutputType | null
    _avg: TwitterUserAvgAggregateOutputType | null
    _sum: TwitterUserSumAggregateOutputType | null
    _min: TwitterUserMinAggregateOutputType | null
    _max: TwitterUserMaxAggregateOutputType | null
  }

  export type TwitterUserAvgAggregateOutputType = {
    id: number | null
  }

  export type TwitterUserSumAggregateOutputType = {
    id: number | null
  }

  export type TwitterUserMinAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterUserMaxAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterUserCountAggregateOutputType = {
    id: number
    image: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterUserAvgAggregateInputType = {
    id?: true
  }

  export type TwitterUserSumAggregateInputType = {
    id?: true
  }

  export type TwitterUserMinAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterUserMaxAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterUserCountAggregateInputType = {
    id?: true
    image?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwitterUserAggregateArgs = {
    /**
     * Filter which TwitterUser to aggregate.
     */
    where?: TwitterUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterUsers to fetch.
     */
    orderBy?: Enumerable<TwitterUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterUsers
    **/
    _count?: true | TwitterUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterUserMaxAggregateInputType
  }

  export type GetTwitterUserAggregateType<T extends TwitterUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterUser[P]>
      : GetScalarType<T[P], AggregateTwitterUser[P]>
  }




  export type TwitterUserGroupByArgs = {
    where?: TwitterUserWhereInput
    orderBy?: Enumerable<TwitterUserOrderByWithAggregationInput>
    by: TwitterUserScalarFieldEnum[]
    having?: TwitterUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterUserCountAggregateInputType | true
    _avg?: TwitterUserAvgAggregateInputType
    _sum?: TwitterUserSumAggregateInputType
    _min?: TwitterUserMinAggregateInputType
    _max?: TwitterUserMaxAggregateInputType
  }


  export type TwitterUserGroupByOutputType = {
    id: number
    image: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TwitterUserCountAggregateOutputType | null
    _avg: TwitterUserAvgAggregateOutputType | null
    _sum: TwitterUserSumAggregateOutputType | null
    _min: TwitterUserMinAggregateOutputType | null
    _max: TwitterUserMaxAggregateOutputType | null
  }

  type GetTwitterUserGroupByPayload<T extends TwitterUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterUserGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterUserGroupByOutputType[P]>
        }
      >
    >


  export type TwitterUserSelect = {
    id?: boolean
    image?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    follwer?: boolean | TwitterUser$follwerArgs
    following?: boolean | TwitterUser$followingArgs
    TwitterPost?: boolean | TwitterUser$TwitterPostArgs
    TwitterReply?: boolean | TwitterUser$TwitterReplyArgs
    directFrom?: boolean | TwitterUser$directFromArgs
    directTo?: boolean | TwitterUser$directToArgs
    _count?: boolean | TwitterUserCountOutputTypeArgs
  }


  export type TwitterUserInclude = {
    follwer?: boolean | TwitterUser$follwerArgs
    following?: boolean | TwitterUser$followingArgs
    TwitterPost?: boolean | TwitterUser$TwitterPostArgs
    TwitterReply?: boolean | TwitterUser$TwitterReplyArgs
    directFrom?: boolean | TwitterUser$directFromArgs
    directTo?: boolean | TwitterUser$directToArgs
    _count?: boolean | TwitterUserCountOutputTypeArgs
  }

  export type TwitterUserGetPayload<S extends boolean | null | undefined | TwitterUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterUser :
    S extends undefined ? never :
    S extends { include: any } & (TwitterUserArgs | TwitterUserFindManyArgs)
    ? TwitterUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'follwer' ? Array < TwitterUserRelationGetPayload<S['include'][P]>>  :
        P extends 'following' ? Array < TwitterUserRelationGetPayload<S['include'][P]>>  :
        P extends 'TwitterPost' ? Array < TwitterPostGetPayload<S['include'][P]>>  :
        P extends 'TwitterReply' ? Array < TwitterReplyGetPayload<S['include'][P]>>  :
        P extends 'directFrom' ? Array < TwitterDMGetPayload<S['include'][P]>>  :
        P extends 'directTo' ? Array < TwitterDMGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterUserArgs | TwitterUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'follwer' ? Array < TwitterUserRelationGetPayload<S['select'][P]>>  :
        P extends 'following' ? Array < TwitterUserRelationGetPayload<S['select'][P]>>  :
        P extends 'TwitterPost' ? Array < TwitterPostGetPayload<S['select'][P]>>  :
        P extends 'TwitterReply' ? Array < TwitterReplyGetPayload<S['select'][P]>>  :
        P extends 'directFrom' ? Array < TwitterDMGetPayload<S['select'][P]>>  :
        P extends 'directTo' ? Array < TwitterDMGetPayload<S['select'][P]>>  :
        P extends '_count' ? TwitterUserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TwitterUser ? TwitterUser[P] : never
  } 
      : TwitterUser


  type TwitterUserCountArgs = 
    Omit<TwitterUserFindManyArgs, 'select' | 'include'> & {
      select?: TwitterUserCountAggregateInputType | true
    }

  export interface TwitterUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterUser that matches the filter.
     * @param {TwitterUserFindUniqueArgs} args - Arguments to find a TwitterUser
     * @example
     * // Get one TwitterUser
     * const twitterUser = await prisma.twitterUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterUser'> extends True ? Prisma__TwitterUserClient<TwitterUserGetPayload<T>> : Prisma__TwitterUserClient<TwitterUserGetPayload<T> | null, null>

    /**
     * Find one TwitterUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterUserFindUniqueOrThrowArgs} args - Arguments to find a TwitterUser
     * @example
     * // Get one TwitterUser
     * const twitterUser = await prisma.twitterUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterUserFindUniqueOrThrowArgs>
    ): Prisma__TwitterUserClient<TwitterUserGetPayload<T>>

    /**
     * Find the first TwitterUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserFindFirstArgs} args - Arguments to find a TwitterUser
     * @example
     * // Get one TwitterUser
     * const twitterUser = await prisma.twitterUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterUser'> extends True ? Prisma__TwitterUserClient<TwitterUserGetPayload<T>> : Prisma__TwitterUserClient<TwitterUserGetPayload<T> | null, null>

    /**
     * Find the first TwitterUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserFindFirstOrThrowArgs} args - Arguments to find a TwitterUser
     * @example
     * // Get one TwitterUser
     * const twitterUser = await prisma.twitterUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterUserFindFirstOrThrowArgs>
    ): Prisma__TwitterUserClient<TwitterUserGetPayload<T>>

    /**
     * Find zero or more TwitterUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterUsers
     * const twitterUsers = await prisma.twitterUser.findMany()
     * 
     * // Get first 10 TwitterUsers
     * const twitterUsers = await prisma.twitterUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterUserWithIdOnly = await prisma.twitterUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterUserFindManyArgs>(
      args?: SelectSubset<T, TwitterUserFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterUserGetPayload<T>>>

    /**
     * Create a TwitterUser.
     * @param {TwitterUserCreateArgs} args - Arguments to create a TwitterUser.
     * @example
     * // Create one TwitterUser
     * const TwitterUser = await prisma.twitterUser.create({
     *   data: {
     *     // ... data to create a TwitterUser
     *   }
     * })
     * 
    **/
    create<T extends TwitterUserCreateArgs>(
      args: SelectSubset<T, TwitterUserCreateArgs>
    ): Prisma__TwitterUserClient<TwitterUserGetPayload<T>>

    /**
     * Create many TwitterUsers.
     *     @param {TwitterUserCreateManyArgs} args - Arguments to create many TwitterUsers.
     *     @example
     *     // Create many TwitterUsers
     *     const twitterUser = await prisma.twitterUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterUserCreateManyArgs>(
      args?: SelectSubset<T, TwitterUserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterUser.
     * @param {TwitterUserDeleteArgs} args - Arguments to delete one TwitterUser.
     * @example
     * // Delete one TwitterUser
     * const TwitterUser = await prisma.twitterUser.delete({
     *   where: {
     *     // ... filter to delete one TwitterUser
     *   }
     * })
     * 
    **/
    delete<T extends TwitterUserDeleteArgs>(
      args: SelectSubset<T, TwitterUserDeleteArgs>
    ): Prisma__TwitterUserClient<TwitterUserGetPayload<T>>

    /**
     * Update one TwitterUser.
     * @param {TwitterUserUpdateArgs} args - Arguments to update one TwitterUser.
     * @example
     * // Update one TwitterUser
     * const twitterUser = await prisma.twitterUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterUserUpdateArgs>(
      args: SelectSubset<T, TwitterUserUpdateArgs>
    ): Prisma__TwitterUserClient<TwitterUserGetPayload<T>>

    /**
     * Delete zero or more TwitterUsers.
     * @param {TwitterUserDeleteManyArgs} args - Arguments to filter TwitterUsers to delete.
     * @example
     * // Delete a few TwitterUsers
     * const { count } = await prisma.twitterUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterUserDeleteManyArgs>(
      args?: SelectSubset<T, TwitterUserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterUsers
     * const twitterUser = await prisma.twitterUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterUserUpdateManyArgs>(
      args: SelectSubset<T, TwitterUserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterUser.
     * @param {TwitterUserUpsertArgs} args - Arguments to update or create a TwitterUser.
     * @example
     * // Update or create a TwitterUser
     * const twitterUser = await prisma.twitterUser.upsert({
     *   create: {
     *     // ... data to create a TwitterUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterUser we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterUserUpsertArgs>(
      args: SelectSubset<T, TwitterUserUpsertArgs>
    ): Prisma__TwitterUserClient<TwitterUserGetPayload<T>>

    /**
     * Count the number of TwitterUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserCountArgs} args - Arguments to filter TwitterUsers to count.
     * @example
     * // Count the number of TwitterUsers
     * const count = await prisma.twitterUser.count({
     *   where: {
     *     // ... the filter for the TwitterUsers we want to count
     *   }
     * })
    **/
    count<T extends TwitterUserCountArgs>(
      args?: Subset<T, TwitterUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterUserAggregateArgs>(args: Subset<T, TwitterUserAggregateArgs>): Prisma.PrismaPromise<GetTwitterUserAggregateType<T>>

    /**
     * Group by TwitterUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserGroupByArgs} args - Group by arguments.
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
      T extends TwitterUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterUserGroupByArgs['orderBy'] }
        : { orderBy?: TwitterUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterUserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    follwer<T extends TwitterUser$follwerArgs= {}>(args?: Subset<T, TwitterUser$follwerArgs>): Prisma.PrismaPromise<Array<TwitterUserRelationGetPayload<T>>| Null>;

    following<T extends TwitterUser$followingArgs= {}>(args?: Subset<T, TwitterUser$followingArgs>): Prisma.PrismaPromise<Array<TwitterUserRelationGetPayload<T>>| Null>;

    TwitterPost<T extends TwitterUser$TwitterPostArgs= {}>(args?: Subset<T, TwitterUser$TwitterPostArgs>): Prisma.PrismaPromise<Array<TwitterPostGetPayload<T>>| Null>;

    TwitterReply<T extends TwitterUser$TwitterReplyArgs= {}>(args?: Subset<T, TwitterUser$TwitterReplyArgs>): Prisma.PrismaPromise<Array<TwitterReplyGetPayload<T>>| Null>;

    directFrom<T extends TwitterUser$directFromArgs= {}>(args?: Subset<T, TwitterUser$directFromArgs>): Prisma.PrismaPromise<Array<TwitterDMGetPayload<T>>| Null>;

    directTo<T extends TwitterUser$directToArgs= {}>(args?: Subset<T, TwitterUser$directToArgs>): Prisma.PrismaPromise<Array<TwitterDMGetPayload<T>>| Null>;

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
   * TwitterUser base type for findUnique actions
   */
  export type TwitterUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * Filter, which TwitterUser to fetch.
     */
    where: TwitterUserWhereUniqueInput
  }

  /**
   * TwitterUser findUnique
   */
  export interface TwitterUserFindUniqueArgs extends TwitterUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterUser findUniqueOrThrow
   */
  export type TwitterUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * Filter, which TwitterUser to fetch.
     */
    where: TwitterUserWhereUniqueInput
  }


  /**
   * TwitterUser base type for findFirst actions
   */
  export type TwitterUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * Filter, which TwitterUser to fetch.
     */
    where?: TwitterUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterUsers to fetch.
     */
    orderBy?: Enumerable<TwitterUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterUsers.
     */
    cursor?: TwitterUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterUsers.
     */
    distinct?: Enumerable<TwitterUserScalarFieldEnum>
  }

  /**
   * TwitterUser findFirst
   */
  export interface TwitterUserFindFirstArgs extends TwitterUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterUser findFirstOrThrow
   */
  export type TwitterUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * Filter, which TwitterUser to fetch.
     */
    where?: TwitterUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterUsers to fetch.
     */
    orderBy?: Enumerable<TwitterUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterUsers.
     */
    cursor?: TwitterUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterUsers.
     */
    distinct?: Enumerable<TwitterUserScalarFieldEnum>
  }


  /**
   * TwitterUser findMany
   */
  export type TwitterUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * Filter, which TwitterUsers to fetch.
     */
    where?: TwitterUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterUsers to fetch.
     */
    orderBy?: Enumerable<TwitterUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterUsers.
     */
    cursor?: TwitterUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterUsers.
     */
    skip?: number
    distinct?: Enumerable<TwitterUserScalarFieldEnum>
  }


  /**
   * TwitterUser create
   */
  export type TwitterUserCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * The data needed to create a TwitterUser.
     */
    data: XOR<TwitterUserCreateInput, TwitterUserUncheckedCreateInput>
  }


  /**
   * TwitterUser createMany
   */
  export type TwitterUserCreateManyArgs = {
    /**
     * The data used to create many TwitterUsers.
     */
    data: Enumerable<TwitterUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterUser update
   */
  export type TwitterUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * The data needed to update a TwitterUser.
     */
    data: XOR<TwitterUserUpdateInput, TwitterUserUncheckedUpdateInput>
    /**
     * Choose, which TwitterUser to update.
     */
    where: TwitterUserWhereUniqueInput
  }


  /**
   * TwitterUser updateMany
   */
  export type TwitterUserUpdateManyArgs = {
    /**
     * The data used to update TwitterUsers.
     */
    data: XOR<TwitterUserUpdateManyMutationInput, TwitterUserUncheckedUpdateManyInput>
    /**
     * Filter which TwitterUsers to update
     */
    where?: TwitterUserWhereInput
  }


  /**
   * TwitterUser upsert
   */
  export type TwitterUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * The filter to search for the TwitterUser to update in case it exists.
     */
    where: TwitterUserWhereUniqueInput
    /**
     * In case the TwitterUser found by the `where` argument doesn't exist, create a new TwitterUser with this data.
     */
    create: XOR<TwitterUserCreateInput, TwitterUserUncheckedCreateInput>
    /**
     * In case the TwitterUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterUserUpdateInput, TwitterUserUncheckedUpdateInput>
  }


  /**
   * TwitterUser delete
   */
  export type TwitterUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    /**
     * Filter which TwitterUser to delete.
     */
    where: TwitterUserWhereUniqueInput
  }


  /**
   * TwitterUser deleteMany
   */
  export type TwitterUserDeleteManyArgs = {
    /**
     * Filter which TwitterUsers to delete
     */
    where?: TwitterUserWhereInput
  }


  /**
   * TwitterUser.follwer
   */
  export type TwitterUser$follwerArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    where?: TwitterUserRelationWhereInput
    orderBy?: Enumerable<TwitterUserRelationOrderByWithRelationInput>
    cursor?: TwitterUserRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterUserRelationScalarFieldEnum>
  }


  /**
   * TwitterUser.following
   */
  export type TwitterUser$followingArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    where?: TwitterUserRelationWhereInput
    orderBy?: Enumerable<TwitterUserRelationOrderByWithRelationInput>
    cursor?: TwitterUserRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterUserRelationScalarFieldEnum>
  }


  /**
   * TwitterUser.TwitterPost
   */
  export type TwitterUser$TwitterPostArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    where?: TwitterPostWhereInput
    orderBy?: Enumerable<TwitterPostOrderByWithRelationInput>
    cursor?: TwitterPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterPostScalarFieldEnum>
  }


  /**
   * TwitterUser.TwitterReply
   */
  export type TwitterUser$TwitterReplyArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    where?: TwitterReplyWhereInput
    orderBy?: Enumerable<TwitterReplyOrderByWithRelationInput>
    cursor?: TwitterReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterReplyScalarFieldEnum>
  }


  /**
   * TwitterUser.directFrom
   */
  export type TwitterUser$directFromArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    where?: TwitterDMWhereInput
    orderBy?: Enumerable<TwitterDMOrderByWithRelationInput>
    cursor?: TwitterDMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterDMScalarFieldEnum>
  }


  /**
   * TwitterUser.directTo
   */
  export type TwitterUser$directToArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    where?: TwitterDMWhereInput
    orderBy?: Enumerable<TwitterDMOrderByWithRelationInput>
    cursor?: TwitterDMWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterDMScalarFieldEnum>
  }


  /**
   * TwitterUser without action
   */
  export type TwitterUserArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
  }



  /**
   * Model TwitterUserRelation
   */


  export type AggregateTwitterUserRelation = {
    _count: TwitterUserRelationCountAggregateOutputType | null
    _avg: TwitterUserRelationAvgAggregateOutputType | null
    _sum: TwitterUserRelationSumAggregateOutputType | null
    _min: TwitterUserRelationMinAggregateOutputType | null
    _max: TwitterUserRelationMaxAggregateOutputType | null
  }

  export type TwitterUserRelationAvgAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
  }

  export type TwitterUserRelationSumAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
  }

  export type TwitterUserRelationMinAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterUserRelationMaxAggregateOutputType = {
    id: number | null
    followerId: number | null
    followingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterUserRelationCountAggregateOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterUserRelationAvgAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
  }

  export type TwitterUserRelationSumAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
  }

  export type TwitterUserRelationMinAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterUserRelationMaxAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterUserRelationCountAggregateInputType = {
    id?: true
    followerId?: true
    followingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwitterUserRelationAggregateArgs = {
    /**
     * Filter which TwitterUserRelation to aggregate.
     */
    where?: TwitterUserRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterUserRelations to fetch.
     */
    orderBy?: Enumerable<TwitterUserRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterUserRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterUserRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterUserRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterUserRelations
    **/
    _count?: true | TwitterUserRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterUserRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterUserRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterUserRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterUserRelationMaxAggregateInputType
  }

  export type GetTwitterUserRelationAggregateType<T extends TwitterUserRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterUserRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterUserRelation[P]>
      : GetScalarType<T[P], AggregateTwitterUserRelation[P]>
  }




  export type TwitterUserRelationGroupByArgs = {
    where?: TwitterUserRelationWhereInput
    orderBy?: Enumerable<TwitterUserRelationOrderByWithAggregationInput>
    by: TwitterUserRelationScalarFieldEnum[]
    having?: TwitterUserRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterUserRelationCountAggregateInputType | true
    _avg?: TwitterUserRelationAvgAggregateInputType
    _sum?: TwitterUserRelationSumAggregateInputType
    _min?: TwitterUserRelationMinAggregateInputType
    _max?: TwitterUserRelationMaxAggregateInputType
  }


  export type TwitterUserRelationGroupByOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: Date
    updatedAt: Date
    _count: TwitterUserRelationCountAggregateOutputType | null
    _avg: TwitterUserRelationAvgAggregateOutputType | null
    _sum: TwitterUserRelationSumAggregateOutputType | null
    _min: TwitterUserRelationMinAggregateOutputType | null
    _max: TwitterUserRelationMaxAggregateOutputType | null
  }

  type GetTwitterUserRelationGroupByPayload<T extends TwitterUserRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterUserRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterUserRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterUserRelationGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterUserRelationGroupByOutputType[P]>
        }
      >
    >


  export type TwitterUserRelationSelect = {
    id?: boolean
    follwer?: boolean | TwitterUserArgs
    followerId?: boolean
    following?: boolean | TwitterUserArgs
    followingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TwitterUserRelationInclude = {
    follwer?: boolean | TwitterUserArgs
    following?: boolean | TwitterUserArgs
  }

  export type TwitterUserRelationGetPayload<S extends boolean | null | undefined | TwitterUserRelationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterUserRelation :
    S extends undefined ? never :
    S extends { include: any } & (TwitterUserRelationArgs | TwitterUserRelationFindManyArgs)
    ? TwitterUserRelation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'follwer' ? TwitterUserGetPayload<S['include'][P]> :
        P extends 'following' ? TwitterUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterUserRelationArgs | TwitterUserRelationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'follwer' ? TwitterUserGetPayload<S['select'][P]> :
        P extends 'following' ? TwitterUserGetPayload<S['select'][P]> :  P extends keyof TwitterUserRelation ? TwitterUserRelation[P] : never
  } 
      : TwitterUserRelation


  type TwitterUserRelationCountArgs = 
    Omit<TwitterUserRelationFindManyArgs, 'select' | 'include'> & {
      select?: TwitterUserRelationCountAggregateInputType | true
    }

  export interface TwitterUserRelationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterUserRelation that matches the filter.
     * @param {TwitterUserRelationFindUniqueArgs} args - Arguments to find a TwitterUserRelation
     * @example
     * // Get one TwitterUserRelation
     * const twitterUserRelation = await prisma.twitterUserRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterUserRelationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterUserRelationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterUserRelation'> extends True ? Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T>> : Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T> | null, null>

    /**
     * Find one TwitterUserRelation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterUserRelationFindUniqueOrThrowArgs} args - Arguments to find a TwitterUserRelation
     * @example
     * // Get one TwitterUserRelation
     * const twitterUserRelation = await prisma.twitterUserRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterUserRelationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterUserRelationFindUniqueOrThrowArgs>
    ): Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T>>

    /**
     * Find the first TwitterUserRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserRelationFindFirstArgs} args - Arguments to find a TwitterUserRelation
     * @example
     * // Get one TwitterUserRelation
     * const twitterUserRelation = await prisma.twitterUserRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterUserRelationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterUserRelationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterUserRelation'> extends True ? Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T>> : Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T> | null, null>

    /**
     * Find the first TwitterUserRelation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserRelationFindFirstOrThrowArgs} args - Arguments to find a TwitterUserRelation
     * @example
     * // Get one TwitterUserRelation
     * const twitterUserRelation = await prisma.twitterUserRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterUserRelationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterUserRelationFindFirstOrThrowArgs>
    ): Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T>>

    /**
     * Find zero or more TwitterUserRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserRelationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterUserRelations
     * const twitterUserRelations = await prisma.twitterUserRelation.findMany()
     * 
     * // Get first 10 TwitterUserRelations
     * const twitterUserRelations = await prisma.twitterUserRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterUserRelationWithIdOnly = await prisma.twitterUserRelation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterUserRelationFindManyArgs>(
      args?: SelectSubset<T, TwitterUserRelationFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterUserRelationGetPayload<T>>>

    /**
     * Create a TwitterUserRelation.
     * @param {TwitterUserRelationCreateArgs} args - Arguments to create a TwitterUserRelation.
     * @example
     * // Create one TwitterUserRelation
     * const TwitterUserRelation = await prisma.twitterUserRelation.create({
     *   data: {
     *     // ... data to create a TwitterUserRelation
     *   }
     * })
     * 
    **/
    create<T extends TwitterUserRelationCreateArgs>(
      args: SelectSubset<T, TwitterUserRelationCreateArgs>
    ): Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T>>

    /**
     * Create many TwitterUserRelations.
     *     @param {TwitterUserRelationCreateManyArgs} args - Arguments to create many TwitterUserRelations.
     *     @example
     *     // Create many TwitterUserRelations
     *     const twitterUserRelation = await prisma.twitterUserRelation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterUserRelationCreateManyArgs>(
      args?: SelectSubset<T, TwitterUserRelationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterUserRelation.
     * @param {TwitterUserRelationDeleteArgs} args - Arguments to delete one TwitterUserRelation.
     * @example
     * // Delete one TwitterUserRelation
     * const TwitterUserRelation = await prisma.twitterUserRelation.delete({
     *   where: {
     *     // ... filter to delete one TwitterUserRelation
     *   }
     * })
     * 
    **/
    delete<T extends TwitterUserRelationDeleteArgs>(
      args: SelectSubset<T, TwitterUserRelationDeleteArgs>
    ): Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T>>

    /**
     * Update one TwitterUserRelation.
     * @param {TwitterUserRelationUpdateArgs} args - Arguments to update one TwitterUserRelation.
     * @example
     * // Update one TwitterUserRelation
     * const twitterUserRelation = await prisma.twitterUserRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterUserRelationUpdateArgs>(
      args: SelectSubset<T, TwitterUserRelationUpdateArgs>
    ): Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T>>

    /**
     * Delete zero or more TwitterUserRelations.
     * @param {TwitterUserRelationDeleteManyArgs} args - Arguments to filter TwitterUserRelations to delete.
     * @example
     * // Delete a few TwitterUserRelations
     * const { count } = await prisma.twitterUserRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterUserRelationDeleteManyArgs>(
      args?: SelectSubset<T, TwitterUserRelationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterUserRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterUserRelations
     * const twitterUserRelation = await prisma.twitterUserRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterUserRelationUpdateManyArgs>(
      args: SelectSubset<T, TwitterUserRelationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterUserRelation.
     * @param {TwitterUserRelationUpsertArgs} args - Arguments to update or create a TwitterUserRelation.
     * @example
     * // Update or create a TwitterUserRelation
     * const twitterUserRelation = await prisma.twitterUserRelation.upsert({
     *   create: {
     *     // ... data to create a TwitterUserRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterUserRelation we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterUserRelationUpsertArgs>(
      args: SelectSubset<T, TwitterUserRelationUpsertArgs>
    ): Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T>>

    /**
     * Count the number of TwitterUserRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserRelationCountArgs} args - Arguments to filter TwitterUserRelations to count.
     * @example
     * // Count the number of TwitterUserRelations
     * const count = await prisma.twitterUserRelation.count({
     *   where: {
     *     // ... the filter for the TwitterUserRelations we want to count
     *   }
     * })
    **/
    count<T extends TwitterUserRelationCountArgs>(
      args?: Subset<T, TwitterUserRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterUserRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterUserRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterUserRelationAggregateArgs>(args: Subset<T, TwitterUserRelationAggregateArgs>): Prisma.PrismaPromise<GetTwitterUserRelationAggregateType<T>>

    /**
     * Group by TwitterUserRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterUserRelationGroupByArgs} args - Group by arguments.
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
      T extends TwitterUserRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterUserRelationGroupByArgs['orderBy'] }
        : { orderBy?: TwitterUserRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterUserRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterUserRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterUserRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterUserRelationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    follwer<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

    following<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

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
   * TwitterUserRelation base type for findUnique actions
   */
  export type TwitterUserRelationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * Filter, which TwitterUserRelation to fetch.
     */
    where: TwitterUserRelationWhereUniqueInput
  }

  /**
   * TwitterUserRelation findUnique
   */
  export interface TwitterUserRelationFindUniqueArgs extends TwitterUserRelationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterUserRelation findUniqueOrThrow
   */
  export type TwitterUserRelationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * Filter, which TwitterUserRelation to fetch.
     */
    where: TwitterUserRelationWhereUniqueInput
  }


  /**
   * TwitterUserRelation base type for findFirst actions
   */
  export type TwitterUserRelationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * Filter, which TwitterUserRelation to fetch.
     */
    where?: TwitterUserRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterUserRelations to fetch.
     */
    orderBy?: Enumerable<TwitterUserRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterUserRelations.
     */
    cursor?: TwitterUserRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterUserRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterUserRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterUserRelations.
     */
    distinct?: Enumerable<TwitterUserRelationScalarFieldEnum>
  }

  /**
   * TwitterUserRelation findFirst
   */
  export interface TwitterUserRelationFindFirstArgs extends TwitterUserRelationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterUserRelation findFirstOrThrow
   */
  export type TwitterUserRelationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * Filter, which TwitterUserRelation to fetch.
     */
    where?: TwitterUserRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterUserRelations to fetch.
     */
    orderBy?: Enumerable<TwitterUserRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterUserRelations.
     */
    cursor?: TwitterUserRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterUserRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterUserRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterUserRelations.
     */
    distinct?: Enumerable<TwitterUserRelationScalarFieldEnum>
  }


  /**
   * TwitterUserRelation findMany
   */
  export type TwitterUserRelationFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * Filter, which TwitterUserRelations to fetch.
     */
    where?: TwitterUserRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterUserRelations to fetch.
     */
    orderBy?: Enumerable<TwitterUserRelationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterUserRelations.
     */
    cursor?: TwitterUserRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterUserRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterUserRelations.
     */
    skip?: number
    distinct?: Enumerable<TwitterUserRelationScalarFieldEnum>
  }


  /**
   * TwitterUserRelation create
   */
  export type TwitterUserRelationCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * The data needed to create a TwitterUserRelation.
     */
    data: XOR<TwitterUserRelationCreateInput, TwitterUserRelationUncheckedCreateInput>
  }


  /**
   * TwitterUserRelation createMany
   */
  export type TwitterUserRelationCreateManyArgs = {
    /**
     * The data used to create many TwitterUserRelations.
     */
    data: Enumerable<TwitterUserRelationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterUserRelation update
   */
  export type TwitterUserRelationUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * The data needed to update a TwitterUserRelation.
     */
    data: XOR<TwitterUserRelationUpdateInput, TwitterUserRelationUncheckedUpdateInput>
    /**
     * Choose, which TwitterUserRelation to update.
     */
    where: TwitterUserRelationWhereUniqueInput
  }


  /**
   * TwitterUserRelation updateMany
   */
  export type TwitterUserRelationUpdateManyArgs = {
    /**
     * The data used to update TwitterUserRelations.
     */
    data: XOR<TwitterUserRelationUpdateManyMutationInput, TwitterUserRelationUncheckedUpdateManyInput>
    /**
     * Filter which TwitterUserRelations to update
     */
    where?: TwitterUserRelationWhereInput
  }


  /**
   * TwitterUserRelation upsert
   */
  export type TwitterUserRelationUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * The filter to search for the TwitterUserRelation to update in case it exists.
     */
    where: TwitterUserRelationWhereUniqueInput
    /**
     * In case the TwitterUserRelation found by the `where` argument doesn't exist, create a new TwitterUserRelation with this data.
     */
    create: XOR<TwitterUserRelationCreateInput, TwitterUserRelationUncheckedCreateInput>
    /**
     * In case the TwitterUserRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterUserRelationUpdateInput, TwitterUserRelationUncheckedUpdateInput>
  }


  /**
   * TwitterUserRelation delete
   */
  export type TwitterUserRelationDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
    /**
     * Filter which TwitterUserRelation to delete.
     */
    where: TwitterUserRelationWhereUniqueInput
  }


  /**
   * TwitterUserRelation deleteMany
   */
  export type TwitterUserRelationDeleteManyArgs = {
    /**
     * Filter which TwitterUserRelations to delete
     */
    where?: TwitterUserRelationWhereInput
  }


  /**
   * TwitterUserRelation without action
   */
  export type TwitterUserRelationArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelation
     */
    select?: TwitterUserRelationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserRelationInclude | null
  }



  /**
   * Model TwitterPost
   */


  export type AggregateTwitterPost = {
    _count: TwitterPostCountAggregateOutputType | null
    _avg: TwitterPostAvgAggregateOutputType | null
    _sum: TwitterPostSumAggregateOutputType | null
    _min: TwitterPostMinAggregateOutputType | null
    _max: TwitterPostMaxAggregateOutputType | null
  }

  export type TwitterPostAvgAggregateOutputType = {
    id: number | null
    postByUserId: number | null
  }

  export type TwitterPostSumAggregateOutputType = {
    id: number | null
    postByUserId: number | null
  }

  export type TwitterPostMinAggregateOutputType = {
    id: number | null
    message: string | null
    postByUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterPostMaxAggregateOutputType = {
    id: number | null
    message: string | null
    postByUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterPostCountAggregateOutputType = {
    id: number
    message: number
    postByUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterPostAvgAggregateInputType = {
    id?: true
    postByUserId?: true
  }

  export type TwitterPostSumAggregateInputType = {
    id?: true
    postByUserId?: true
  }

  export type TwitterPostMinAggregateInputType = {
    id?: true
    message?: true
    postByUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterPostMaxAggregateInputType = {
    id?: true
    message?: true
    postByUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterPostCountAggregateInputType = {
    id?: true
    message?: true
    postByUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwitterPostAggregateArgs = {
    /**
     * Filter which TwitterPost to aggregate.
     */
    where?: TwitterPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterPosts to fetch.
     */
    orderBy?: Enumerable<TwitterPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterPosts
    **/
    _count?: true | TwitterPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterPostMaxAggregateInputType
  }

  export type GetTwitterPostAggregateType<T extends TwitterPostAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterPost[P]>
      : GetScalarType<T[P], AggregateTwitterPost[P]>
  }




  export type TwitterPostGroupByArgs = {
    where?: TwitterPostWhereInput
    orderBy?: Enumerable<TwitterPostOrderByWithAggregationInput>
    by: TwitterPostScalarFieldEnum[]
    having?: TwitterPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterPostCountAggregateInputType | true
    _avg?: TwitterPostAvgAggregateInputType
    _sum?: TwitterPostSumAggregateInputType
    _min?: TwitterPostMinAggregateInputType
    _max?: TwitterPostMaxAggregateInputType
  }


  export type TwitterPostGroupByOutputType = {
    id: number
    message: string
    postByUserId: number
    createdAt: Date
    updatedAt: Date
    _count: TwitterPostCountAggregateOutputType | null
    _avg: TwitterPostAvgAggregateOutputType | null
    _sum: TwitterPostSumAggregateOutputType | null
    _min: TwitterPostMinAggregateOutputType | null
    _max: TwitterPostMaxAggregateOutputType | null
  }

  type GetTwitterPostGroupByPayload<T extends TwitterPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterPostGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterPostGroupByOutputType[P]>
        }
      >
    >


  export type TwitterPostSelect = {
    id?: boolean
    message?: boolean
    user?: boolean | TwitterUserArgs
    postByUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TwitterReply?: boolean | TwitterPost$TwitterReplyArgs
    hashTags?: boolean | TwitterPost$hashTagsArgs
    _count?: boolean | TwitterPostCountOutputTypeArgs
  }


  export type TwitterPostInclude = {
    user?: boolean | TwitterUserArgs
    TwitterReply?: boolean | TwitterPost$TwitterReplyArgs
    hashTags?: boolean | TwitterPost$hashTagsArgs
    _count?: boolean | TwitterPostCountOutputTypeArgs
  }

  export type TwitterPostGetPayload<S extends boolean | null | undefined | TwitterPostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterPost :
    S extends undefined ? never :
    S extends { include: any } & (TwitterPostArgs | TwitterPostFindManyArgs)
    ? TwitterPost  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? TwitterUserGetPayload<S['include'][P]> :
        P extends 'TwitterReply' ? Array < TwitterReplyGetPayload<S['include'][P]>>  :
        P extends 'hashTags' ? Array < TwitterHashTagGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterPostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterPostArgs | TwitterPostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? TwitterUserGetPayload<S['select'][P]> :
        P extends 'TwitterReply' ? Array < TwitterReplyGetPayload<S['select'][P]>>  :
        P extends 'hashTags' ? Array < TwitterHashTagGetPayload<S['select'][P]>>  :
        P extends '_count' ? TwitterPostCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TwitterPost ? TwitterPost[P] : never
  } 
      : TwitterPost


  type TwitterPostCountArgs = 
    Omit<TwitterPostFindManyArgs, 'select' | 'include'> & {
      select?: TwitterPostCountAggregateInputType | true
    }

  export interface TwitterPostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterPost that matches the filter.
     * @param {TwitterPostFindUniqueArgs} args - Arguments to find a TwitterPost
     * @example
     * // Get one TwitterPost
     * const twitterPost = await prisma.twitterPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterPostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterPostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterPost'> extends True ? Prisma__TwitterPostClient<TwitterPostGetPayload<T>> : Prisma__TwitterPostClient<TwitterPostGetPayload<T> | null, null>

    /**
     * Find one TwitterPost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterPostFindUniqueOrThrowArgs} args - Arguments to find a TwitterPost
     * @example
     * // Get one TwitterPost
     * const twitterPost = await prisma.twitterPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterPostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterPostFindUniqueOrThrowArgs>
    ): Prisma__TwitterPostClient<TwitterPostGetPayload<T>>

    /**
     * Find the first TwitterPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostFindFirstArgs} args - Arguments to find a TwitterPost
     * @example
     * // Get one TwitterPost
     * const twitterPost = await prisma.twitterPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterPostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterPostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterPost'> extends True ? Prisma__TwitterPostClient<TwitterPostGetPayload<T>> : Prisma__TwitterPostClient<TwitterPostGetPayload<T> | null, null>

    /**
     * Find the first TwitterPost that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostFindFirstOrThrowArgs} args - Arguments to find a TwitterPost
     * @example
     * // Get one TwitterPost
     * const twitterPost = await prisma.twitterPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterPostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterPostFindFirstOrThrowArgs>
    ): Prisma__TwitterPostClient<TwitterPostGetPayload<T>>

    /**
     * Find zero or more TwitterPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterPosts
     * const twitterPosts = await prisma.twitterPost.findMany()
     * 
     * // Get first 10 TwitterPosts
     * const twitterPosts = await prisma.twitterPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterPostWithIdOnly = await prisma.twitterPost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterPostFindManyArgs>(
      args?: SelectSubset<T, TwitterPostFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterPostGetPayload<T>>>

    /**
     * Create a TwitterPost.
     * @param {TwitterPostCreateArgs} args - Arguments to create a TwitterPost.
     * @example
     * // Create one TwitterPost
     * const TwitterPost = await prisma.twitterPost.create({
     *   data: {
     *     // ... data to create a TwitterPost
     *   }
     * })
     * 
    **/
    create<T extends TwitterPostCreateArgs>(
      args: SelectSubset<T, TwitterPostCreateArgs>
    ): Prisma__TwitterPostClient<TwitterPostGetPayload<T>>

    /**
     * Create many TwitterPosts.
     *     @param {TwitterPostCreateManyArgs} args - Arguments to create many TwitterPosts.
     *     @example
     *     // Create many TwitterPosts
     *     const twitterPost = await prisma.twitterPost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterPostCreateManyArgs>(
      args?: SelectSubset<T, TwitterPostCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterPost.
     * @param {TwitterPostDeleteArgs} args - Arguments to delete one TwitterPost.
     * @example
     * // Delete one TwitterPost
     * const TwitterPost = await prisma.twitterPost.delete({
     *   where: {
     *     // ... filter to delete one TwitterPost
     *   }
     * })
     * 
    **/
    delete<T extends TwitterPostDeleteArgs>(
      args: SelectSubset<T, TwitterPostDeleteArgs>
    ): Prisma__TwitterPostClient<TwitterPostGetPayload<T>>

    /**
     * Update one TwitterPost.
     * @param {TwitterPostUpdateArgs} args - Arguments to update one TwitterPost.
     * @example
     * // Update one TwitterPost
     * const twitterPost = await prisma.twitterPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterPostUpdateArgs>(
      args: SelectSubset<T, TwitterPostUpdateArgs>
    ): Prisma__TwitterPostClient<TwitterPostGetPayload<T>>

    /**
     * Delete zero or more TwitterPosts.
     * @param {TwitterPostDeleteManyArgs} args - Arguments to filter TwitterPosts to delete.
     * @example
     * // Delete a few TwitterPosts
     * const { count } = await prisma.twitterPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterPostDeleteManyArgs>(
      args?: SelectSubset<T, TwitterPostDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterPosts
     * const twitterPost = await prisma.twitterPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterPostUpdateManyArgs>(
      args: SelectSubset<T, TwitterPostUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterPost.
     * @param {TwitterPostUpsertArgs} args - Arguments to update or create a TwitterPost.
     * @example
     * // Update or create a TwitterPost
     * const twitterPost = await prisma.twitterPost.upsert({
     *   create: {
     *     // ... data to create a TwitterPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterPost we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterPostUpsertArgs>(
      args: SelectSubset<T, TwitterPostUpsertArgs>
    ): Prisma__TwitterPostClient<TwitterPostGetPayload<T>>

    /**
     * Count the number of TwitterPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostCountArgs} args - Arguments to filter TwitterPosts to count.
     * @example
     * // Count the number of TwitterPosts
     * const count = await prisma.twitterPost.count({
     *   where: {
     *     // ... the filter for the TwitterPosts we want to count
     *   }
     * })
    **/
    count<T extends TwitterPostCountArgs>(
      args?: Subset<T, TwitterPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterPostAggregateArgs>(args: Subset<T, TwitterPostAggregateArgs>): Prisma.PrismaPromise<GetTwitterPostAggregateType<T>>

    /**
     * Group by TwitterPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostGroupByArgs} args - Group by arguments.
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
      T extends TwitterPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterPostGroupByArgs['orderBy'] }
        : { orderBy?: TwitterPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterPostClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

    TwitterReply<T extends TwitterPost$TwitterReplyArgs= {}>(args?: Subset<T, TwitterPost$TwitterReplyArgs>): Prisma.PrismaPromise<Array<TwitterReplyGetPayload<T>>| Null>;

    hashTags<T extends TwitterPost$hashTagsArgs= {}>(args?: Subset<T, TwitterPost$hashTagsArgs>): Prisma.PrismaPromise<Array<TwitterHashTagGetPayload<T>>| Null>;

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
   * TwitterPost base type for findUnique actions
   */
  export type TwitterPostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * Filter, which TwitterPost to fetch.
     */
    where: TwitterPostWhereUniqueInput
  }

  /**
   * TwitterPost findUnique
   */
  export interface TwitterPostFindUniqueArgs extends TwitterPostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterPost findUniqueOrThrow
   */
  export type TwitterPostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * Filter, which TwitterPost to fetch.
     */
    where: TwitterPostWhereUniqueInput
  }


  /**
   * TwitterPost base type for findFirst actions
   */
  export type TwitterPostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * Filter, which TwitterPost to fetch.
     */
    where?: TwitterPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterPosts to fetch.
     */
    orderBy?: Enumerable<TwitterPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterPosts.
     */
    cursor?: TwitterPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterPosts.
     */
    distinct?: Enumerable<TwitterPostScalarFieldEnum>
  }

  /**
   * TwitterPost findFirst
   */
  export interface TwitterPostFindFirstArgs extends TwitterPostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterPost findFirstOrThrow
   */
  export type TwitterPostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * Filter, which TwitterPost to fetch.
     */
    where?: TwitterPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterPosts to fetch.
     */
    orderBy?: Enumerable<TwitterPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterPosts.
     */
    cursor?: TwitterPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterPosts.
     */
    distinct?: Enumerable<TwitterPostScalarFieldEnum>
  }


  /**
   * TwitterPost findMany
   */
  export type TwitterPostFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * Filter, which TwitterPosts to fetch.
     */
    where?: TwitterPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterPosts to fetch.
     */
    orderBy?: Enumerable<TwitterPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterPosts.
     */
    cursor?: TwitterPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterPosts.
     */
    skip?: number
    distinct?: Enumerable<TwitterPostScalarFieldEnum>
  }


  /**
   * TwitterPost create
   */
  export type TwitterPostCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * The data needed to create a TwitterPost.
     */
    data: XOR<TwitterPostCreateInput, TwitterPostUncheckedCreateInput>
  }


  /**
   * TwitterPost createMany
   */
  export type TwitterPostCreateManyArgs = {
    /**
     * The data used to create many TwitterPosts.
     */
    data: Enumerable<TwitterPostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterPost update
   */
  export type TwitterPostUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * The data needed to update a TwitterPost.
     */
    data: XOR<TwitterPostUpdateInput, TwitterPostUncheckedUpdateInput>
    /**
     * Choose, which TwitterPost to update.
     */
    where: TwitterPostWhereUniqueInput
  }


  /**
   * TwitterPost updateMany
   */
  export type TwitterPostUpdateManyArgs = {
    /**
     * The data used to update TwitterPosts.
     */
    data: XOR<TwitterPostUpdateManyMutationInput, TwitterPostUncheckedUpdateManyInput>
    /**
     * Filter which TwitterPosts to update
     */
    where?: TwitterPostWhereInput
  }


  /**
   * TwitterPost upsert
   */
  export type TwitterPostUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * The filter to search for the TwitterPost to update in case it exists.
     */
    where: TwitterPostWhereUniqueInput
    /**
     * In case the TwitterPost found by the `where` argument doesn't exist, create a new TwitterPost with this data.
     */
    create: XOR<TwitterPostCreateInput, TwitterPostUncheckedCreateInput>
    /**
     * In case the TwitterPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterPostUpdateInput, TwitterPostUncheckedUpdateInput>
  }


  /**
   * TwitterPost delete
   */
  export type TwitterPostDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    /**
     * Filter which TwitterPost to delete.
     */
    where: TwitterPostWhereUniqueInput
  }


  /**
   * TwitterPost deleteMany
   */
  export type TwitterPostDeleteManyArgs = {
    /**
     * Filter which TwitterPosts to delete
     */
    where?: TwitterPostWhereInput
  }


  /**
   * TwitterPost.TwitterReply
   */
  export type TwitterPost$TwitterReplyArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    where?: TwitterReplyWhereInput
    orderBy?: Enumerable<TwitterReplyOrderByWithRelationInput>
    cursor?: TwitterReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterReplyScalarFieldEnum>
  }


  /**
   * TwitterPost.hashTags
   */
  export type TwitterPost$hashTagsArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    where?: TwitterHashTagWhereInput
    orderBy?: Enumerable<TwitterHashTagOrderByWithRelationInput>
    cursor?: TwitterHashTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterHashTagScalarFieldEnum>
  }


  /**
   * TwitterPost without action
   */
  export type TwitterPostArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
  }



  /**
   * Model TwitterHashTag
   */


  export type AggregateTwitterHashTag = {
    _count: TwitterHashTagCountAggregateOutputType | null
    _avg: TwitterHashTagAvgAggregateOutputType | null
    _sum: TwitterHashTagSumAggregateOutputType | null
    _min: TwitterHashTagMinAggregateOutputType | null
    _max: TwitterHashTagMaxAggregateOutputType | null
  }

  export type TwitterHashTagAvgAggregateOutputType = {
    id: number | null
  }

  export type TwitterHashTagSumAggregateOutputType = {
    id: number | null
  }

  export type TwitterHashTagMinAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterHashTagMaxAggregateOutputType = {
    id: number | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterHashTagCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterHashTagAvgAggregateInputType = {
    id?: true
  }

  export type TwitterHashTagSumAggregateInputType = {
    id?: true
  }

  export type TwitterHashTagMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterHashTagMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterHashTagCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwitterHashTagAggregateArgs = {
    /**
     * Filter which TwitterHashTag to aggregate.
     */
    where?: TwitterHashTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterHashTags to fetch.
     */
    orderBy?: Enumerable<TwitterHashTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterHashTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterHashTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterHashTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterHashTags
    **/
    _count?: true | TwitterHashTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterHashTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterHashTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterHashTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterHashTagMaxAggregateInputType
  }

  export type GetTwitterHashTagAggregateType<T extends TwitterHashTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterHashTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterHashTag[P]>
      : GetScalarType<T[P], AggregateTwitterHashTag[P]>
  }




  export type TwitterHashTagGroupByArgs = {
    where?: TwitterHashTagWhereInput
    orderBy?: Enumerable<TwitterHashTagOrderByWithAggregationInput>
    by: TwitterHashTagScalarFieldEnum[]
    having?: TwitterHashTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterHashTagCountAggregateInputType | true
    _avg?: TwitterHashTagAvgAggregateInputType
    _sum?: TwitterHashTagSumAggregateInputType
    _min?: TwitterHashTagMinAggregateInputType
    _max?: TwitterHashTagMaxAggregateInputType
  }


  export type TwitterHashTagGroupByOutputType = {
    id: number
    message: string
    createdAt: Date
    updatedAt: Date
    _count: TwitterHashTagCountAggregateOutputType | null
    _avg: TwitterHashTagAvgAggregateOutputType | null
    _sum: TwitterHashTagSumAggregateOutputType | null
    _min: TwitterHashTagMinAggregateOutputType | null
    _max: TwitterHashTagMaxAggregateOutputType | null
  }

  type GetTwitterHashTagGroupByPayload<T extends TwitterHashTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterHashTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterHashTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterHashTagGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterHashTagGroupByOutputType[P]>
        }
      >
    >


  export type TwitterHashTagSelect = {
    id?: boolean
    message?: boolean
    posts?: boolean | TwitterHashTag$postsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | TwitterHashTagCountOutputTypeArgs
  }


  export type TwitterHashTagInclude = {
    posts?: boolean | TwitterHashTag$postsArgs
    _count?: boolean | TwitterHashTagCountOutputTypeArgs
  }

  export type TwitterHashTagGetPayload<S extends boolean | null | undefined | TwitterHashTagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterHashTag :
    S extends undefined ? never :
    S extends { include: any } & (TwitterHashTagArgs | TwitterHashTagFindManyArgs)
    ? TwitterHashTag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'posts' ? Array < TwitterPostGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterHashTagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterHashTagArgs | TwitterHashTagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'posts' ? Array < TwitterPostGetPayload<S['select'][P]>>  :
        P extends '_count' ? TwitterHashTagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TwitterHashTag ? TwitterHashTag[P] : never
  } 
      : TwitterHashTag


  type TwitterHashTagCountArgs = 
    Omit<TwitterHashTagFindManyArgs, 'select' | 'include'> & {
      select?: TwitterHashTagCountAggregateInputType | true
    }

  export interface TwitterHashTagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterHashTag that matches the filter.
     * @param {TwitterHashTagFindUniqueArgs} args - Arguments to find a TwitterHashTag
     * @example
     * // Get one TwitterHashTag
     * const twitterHashTag = await prisma.twitterHashTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterHashTagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterHashTagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterHashTag'> extends True ? Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T>> : Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T> | null, null>

    /**
     * Find one TwitterHashTag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterHashTagFindUniqueOrThrowArgs} args - Arguments to find a TwitterHashTag
     * @example
     * // Get one TwitterHashTag
     * const twitterHashTag = await prisma.twitterHashTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterHashTagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterHashTagFindUniqueOrThrowArgs>
    ): Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T>>

    /**
     * Find the first TwitterHashTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashTagFindFirstArgs} args - Arguments to find a TwitterHashTag
     * @example
     * // Get one TwitterHashTag
     * const twitterHashTag = await prisma.twitterHashTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterHashTagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterHashTagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterHashTag'> extends True ? Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T>> : Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T> | null, null>

    /**
     * Find the first TwitterHashTag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashTagFindFirstOrThrowArgs} args - Arguments to find a TwitterHashTag
     * @example
     * // Get one TwitterHashTag
     * const twitterHashTag = await prisma.twitterHashTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterHashTagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterHashTagFindFirstOrThrowArgs>
    ): Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T>>

    /**
     * Find zero or more TwitterHashTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashTagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterHashTags
     * const twitterHashTags = await prisma.twitterHashTag.findMany()
     * 
     * // Get first 10 TwitterHashTags
     * const twitterHashTags = await prisma.twitterHashTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterHashTagWithIdOnly = await prisma.twitterHashTag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterHashTagFindManyArgs>(
      args?: SelectSubset<T, TwitterHashTagFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterHashTagGetPayload<T>>>

    /**
     * Create a TwitterHashTag.
     * @param {TwitterHashTagCreateArgs} args - Arguments to create a TwitterHashTag.
     * @example
     * // Create one TwitterHashTag
     * const TwitterHashTag = await prisma.twitterHashTag.create({
     *   data: {
     *     // ... data to create a TwitterHashTag
     *   }
     * })
     * 
    **/
    create<T extends TwitterHashTagCreateArgs>(
      args: SelectSubset<T, TwitterHashTagCreateArgs>
    ): Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T>>

    /**
     * Create many TwitterHashTags.
     *     @param {TwitterHashTagCreateManyArgs} args - Arguments to create many TwitterHashTags.
     *     @example
     *     // Create many TwitterHashTags
     *     const twitterHashTag = await prisma.twitterHashTag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterHashTagCreateManyArgs>(
      args?: SelectSubset<T, TwitterHashTagCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterHashTag.
     * @param {TwitterHashTagDeleteArgs} args - Arguments to delete one TwitterHashTag.
     * @example
     * // Delete one TwitterHashTag
     * const TwitterHashTag = await prisma.twitterHashTag.delete({
     *   where: {
     *     // ... filter to delete one TwitterHashTag
     *   }
     * })
     * 
    **/
    delete<T extends TwitterHashTagDeleteArgs>(
      args: SelectSubset<T, TwitterHashTagDeleteArgs>
    ): Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T>>

    /**
     * Update one TwitterHashTag.
     * @param {TwitterHashTagUpdateArgs} args - Arguments to update one TwitterHashTag.
     * @example
     * // Update one TwitterHashTag
     * const twitterHashTag = await prisma.twitterHashTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterHashTagUpdateArgs>(
      args: SelectSubset<T, TwitterHashTagUpdateArgs>
    ): Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T>>

    /**
     * Delete zero or more TwitterHashTags.
     * @param {TwitterHashTagDeleteManyArgs} args - Arguments to filter TwitterHashTags to delete.
     * @example
     * // Delete a few TwitterHashTags
     * const { count } = await prisma.twitterHashTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterHashTagDeleteManyArgs>(
      args?: SelectSubset<T, TwitterHashTagDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterHashTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterHashTags
     * const twitterHashTag = await prisma.twitterHashTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterHashTagUpdateManyArgs>(
      args: SelectSubset<T, TwitterHashTagUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterHashTag.
     * @param {TwitterHashTagUpsertArgs} args - Arguments to update or create a TwitterHashTag.
     * @example
     * // Update or create a TwitterHashTag
     * const twitterHashTag = await prisma.twitterHashTag.upsert({
     *   create: {
     *     // ... data to create a TwitterHashTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterHashTag we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterHashTagUpsertArgs>(
      args: SelectSubset<T, TwitterHashTagUpsertArgs>
    ): Prisma__TwitterHashTagClient<TwitterHashTagGetPayload<T>>

    /**
     * Count the number of TwitterHashTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashTagCountArgs} args - Arguments to filter TwitterHashTags to count.
     * @example
     * // Count the number of TwitterHashTags
     * const count = await prisma.twitterHashTag.count({
     *   where: {
     *     // ... the filter for the TwitterHashTags we want to count
     *   }
     * })
    **/
    count<T extends TwitterHashTagCountArgs>(
      args?: Subset<T, TwitterHashTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterHashTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterHashTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterHashTagAggregateArgs>(args: Subset<T, TwitterHashTagAggregateArgs>): Prisma.PrismaPromise<GetTwitterHashTagAggregateType<T>>

    /**
     * Group by TwitterHashTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashTagGroupByArgs} args - Group by arguments.
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
      T extends TwitterHashTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterHashTagGroupByArgs['orderBy'] }
        : { orderBy?: TwitterHashTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterHashTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterHashTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterHashTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterHashTagClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    posts<T extends TwitterHashTag$postsArgs= {}>(args?: Subset<T, TwitterHashTag$postsArgs>): Prisma.PrismaPromise<Array<TwitterPostGetPayload<T>>| Null>;

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
   * TwitterHashTag base type for findUnique actions
   */
  export type TwitterHashTagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * Filter, which TwitterHashTag to fetch.
     */
    where: TwitterHashTagWhereUniqueInput
  }

  /**
   * TwitterHashTag findUnique
   */
  export interface TwitterHashTagFindUniqueArgs extends TwitterHashTagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterHashTag findUniqueOrThrow
   */
  export type TwitterHashTagFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * Filter, which TwitterHashTag to fetch.
     */
    where: TwitterHashTagWhereUniqueInput
  }


  /**
   * TwitterHashTag base type for findFirst actions
   */
  export type TwitterHashTagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * Filter, which TwitterHashTag to fetch.
     */
    where?: TwitterHashTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterHashTags to fetch.
     */
    orderBy?: Enumerable<TwitterHashTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterHashTags.
     */
    cursor?: TwitterHashTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterHashTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterHashTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterHashTags.
     */
    distinct?: Enumerable<TwitterHashTagScalarFieldEnum>
  }

  /**
   * TwitterHashTag findFirst
   */
  export interface TwitterHashTagFindFirstArgs extends TwitterHashTagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterHashTag findFirstOrThrow
   */
  export type TwitterHashTagFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * Filter, which TwitterHashTag to fetch.
     */
    where?: TwitterHashTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterHashTags to fetch.
     */
    orderBy?: Enumerable<TwitterHashTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterHashTags.
     */
    cursor?: TwitterHashTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterHashTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterHashTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterHashTags.
     */
    distinct?: Enumerable<TwitterHashTagScalarFieldEnum>
  }


  /**
   * TwitterHashTag findMany
   */
  export type TwitterHashTagFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * Filter, which TwitterHashTags to fetch.
     */
    where?: TwitterHashTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterHashTags to fetch.
     */
    orderBy?: Enumerable<TwitterHashTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterHashTags.
     */
    cursor?: TwitterHashTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterHashTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterHashTags.
     */
    skip?: number
    distinct?: Enumerable<TwitterHashTagScalarFieldEnum>
  }


  /**
   * TwitterHashTag create
   */
  export type TwitterHashTagCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * The data needed to create a TwitterHashTag.
     */
    data: XOR<TwitterHashTagCreateInput, TwitterHashTagUncheckedCreateInput>
  }


  /**
   * TwitterHashTag createMany
   */
  export type TwitterHashTagCreateManyArgs = {
    /**
     * The data used to create many TwitterHashTags.
     */
    data: Enumerable<TwitterHashTagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterHashTag update
   */
  export type TwitterHashTagUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * The data needed to update a TwitterHashTag.
     */
    data: XOR<TwitterHashTagUpdateInput, TwitterHashTagUncheckedUpdateInput>
    /**
     * Choose, which TwitterHashTag to update.
     */
    where: TwitterHashTagWhereUniqueInput
  }


  /**
   * TwitterHashTag updateMany
   */
  export type TwitterHashTagUpdateManyArgs = {
    /**
     * The data used to update TwitterHashTags.
     */
    data: XOR<TwitterHashTagUpdateManyMutationInput, TwitterHashTagUncheckedUpdateManyInput>
    /**
     * Filter which TwitterHashTags to update
     */
    where?: TwitterHashTagWhereInput
  }


  /**
   * TwitterHashTag upsert
   */
  export type TwitterHashTagUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * The filter to search for the TwitterHashTag to update in case it exists.
     */
    where: TwitterHashTagWhereUniqueInput
    /**
     * In case the TwitterHashTag found by the `where` argument doesn't exist, create a new TwitterHashTag with this data.
     */
    create: XOR<TwitterHashTagCreateInput, TwitterHashTagUncheckedCreateInput>
    /**
     * In case the TwitterHashTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterHashTagUpdateInput, TwitterHashTagUncheckedUpdateInput>
  }


  /**
   * TwitterHashTag delete
   */
  export type TwitterHashTagDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
    /**
     * Filter which TwitterHashTag to delete.
     */
    where: TwitterHashTagWhereUniqueInput
  }


  /**
   * TwitterHashTag deleteMany
   */
  export type TwitterHashTagDeleteManyArgs = {
    /**
     * Filter which TwitterHashTags to delete
     */
    where?: TwitterHashTagWhereInput
  }


  /**
   * TwitterHashTag.posts
   */
  export type TwitterHashTag$postsArgs = {
    /**
     * Select specific fields to fetch from the TwitterPost
     */
    select?: TwitterPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostInclude | null
    where?: TwitterPostWhereInput
    orderBy?: Enumerable<TwitterPostOrderByWithRelationInput>
    cursor?: TwitterPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterPostScalarFieldEnum>
  }


  /**
   * TwitterHashTag without action
   */
  export type TwitterHashTagArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashTag
     */
    select?: TwitterHashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashTagInclude | null
  }



  /**
   * Model TwitterReply
   */


  export type AggregateTwitterReply = {
    _count: TwitterReplyCountAggregateOutputType | null
    _avg: TwitterReplyAvgAggregateOutputType | null
    _sum: TwitterReplySumAggregateOutputType | null
    _min: TwitterReplyMinAggregateOutputType | null
    _max: TwitterReplyMaxAggregateOutputType | null
  }

  export type TwitterReplyAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    postByUserId: number | null
  }

  export type TwitterReplySumAggregateOutputType = {
    id: number | null
    postId: number | null
    postByUserId: number | null
  }

  export type TwitterReplyMinAggregateOutputType = {
    id: number | null
    message: string | null
    postId: number | null
    postByUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterReplyMaxAggregateOutputType = {
    id: number | null
    message: string | null
    postId: number | null
    postByUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterReplyCountAggregateOutputType = {
    id: number
    message: number
    postId: number
    postByUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterReplyAvgAggregateInputType = {
    id?: true
    postId?: true
    postByUserId?: true
  }

  export type TwitterReplySumAggregateInputType = {
    id?: true
    postId?: true
    postByUserId?: true
  }

  export type TwitterReplyMinAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    postByUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterReplyMaxAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    postByUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterReplyCountAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    postByUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwitterReplyAggregateArgs = {
    /**
     * Filter which TwitterReply to aggregate.
     */
    where?: TwitterReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterReplies to fetch.
     */
    orderBy?: Enumerable<TwitterReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterReplies
    **/
    _count?: true | TwitterReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterReplyMaxAggregateInputType
  }

  export type GetTwitterReplyAggregateType<T extends TwitterReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterReply[P]>
      : GetScalarType<T[P], AggregateTwitterReply[P]>
  }




  export type TwitterReplyGroupByArgs = {
    where?: TwitterReplyWhereInput
    orderBy?: Enumerable<TwitterReplyOrderByWithAggregationInput>
    by: TwitterReplyScalarFieldEnum[]
    having?: TwitterReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterReplyCountAggregateInputType | true
    _avg?: TwitterReplyAvgAggregateInputType
    _sum?: TwitterReplySumAggregateInputType
    _min?: TwitterReplyMinAggregateInputType
    _max?: TwitterReplyMaxAggregateInputType
  }


  export type TwitterReplyGroupByOutputType = {
    id: number
    message: string
    postId: number
    postByUserId: number
    createdAt: Date
    updatedAt: Date
    _count: TwitterReplyCountAggregateOutputType | null
    _avg: TwitterReplyAvgAggregateOutputType | null
    _sum: TwitterReplySumAggregateOutputType | null
    _min: TwitterReplyMinAggregateOutputType | null
    _max: TwitterReplyMaxAggregateOutputType | null
  }

  type GetTwitterReplyGroupByPayload<T extends TwitterReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterReplyGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterReplyGroupByOutputType[P]>
        }
      >
    >


  export type TwitterReplySelect = {
    id?: boolean
    message?: boolean
    post?: boolean | TwitterPostArgs
    postId?: boolean
    user?: boolean | TwitterUserArgs
    postByUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TwitterReplyInclude = {
    post?: boolean | TwitterPostArgs
    user?: boolean | TwitterUserArgs
  }

  export type TwitterReplyGetPayload<S extends boolean | null | undefined | TwitterReplyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterReply :
    S extends undefined ? never :
    S extends { include: any } & (TwitterReplyArgs | TwitterReplyFindManyArgs)
    ? TwitterReply  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? TwitterPostGetPayload<S['include'][P]> :
        P extends 'user' ? TwitterUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterReplyArgs | TwitterReplyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? TwitterPostGetPayload<S['select'][P]> :
        P extends 'user' ? TwitterUserGetPayload<S['select'][P]> :  P extends keyof TwitterReply ? TwitterReply[P] : never
  } 
      : TwitterReply


  type TwitterReplyCountArgs = 
    Omit<TwitterReplyFindManyArgs, 'select' | 'include'> & {
      select?: TwitterReplyCountAggregateInputType | true
    }

  export interface TwitterReplyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterReply that matches the filter.
     * @param {TwitterReplyFindUniqueArgs} args - Arguments to find a TwitterReply
     * @example
     * // Get one TwitterReply
     * const twitterReply = await prisma.twitterReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterReplyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterReplyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterReply'> extends True ? Prisma__TwitterReplyClient<TwitterReplyGetPayload<T>> : Prisma__TwitterReplyClient<TwitterReplyGetPayload<T> | null, null>

    /**
     * Find one TwitterReply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterReplyFindUniqueOrThrowArgs} args - Arguments to find a TwitterReply
     * @example
     * // Get one TwitterReply
     * const twitterReply = await prisma.twitterReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterReplyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterReplyFindUniqueOrThrowArgs>
    ): Prisma__TwitterReplyClient<TwitterReplyGetPayload<T>>

    /**
     * Find the first TwitterReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterReplyFindFirstArgs} args - Arguments to find a TwitterReply
     * @example
     * // Get one TwitterReply
     * const twitterReply = await prisma.twitterReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterReplyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterReplyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterReply'> extends True ? Prisma__TwitterReplyClient<TwitterReplyGetPayload<T>> : Prisma__TwitterReplyClient<TwitterReplyGetPayload<T> | null, null>

    /**
     * Find the first TwitterReply that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterReplyFindFirstOrThrowArgs} args - Arguments to find a TwitterReply
     * @example
     * // Get one TwitterReply
     * const twitterReply = await prisma.twitterReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterReplyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterReplyFindFirstOrThrowArgs>
    ): Prisma__TwitterReplyClient<TwitterReplyGetPayload<T>>

    /**
     * Find zero or more TwitterReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterReplies
     * const twitterReplies = await prisma.twitterReply.findMany()
     * 
     * // Get first 10 TwitterReplies
     * const twitterReplies = await prisma.twitterReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterReplyWithIdOnly = await prisma.twitterReply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterReplyFindManyArgs>(
      args?: SelectSubset<T, TwitterReplyFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterReplyGetPayload<T>>>

    /**
     * Create a TwitterReply.
     * @param {TwitterReplyCreateArgs} args - Arguments to create a TwitterReply.
     * @example
     * // Create one TwitterReply
     * const TwitterReply = await prisma.twitterReply.create({
     *   data: {
     *     // ... data to create a TwitterReply
     *   }
     * })
     * 
    **/
    create<T extends TwitterReplyCreateArgs>(
      args: SelectSubset<T, TwitterReplyCreateArgs>
    ): Prisma__TwitterReplyClient<TwitterReplyGetPayload<T>>

    /**
     * Create many TwitterReplies.
     *     @param {TwitterReplyCreateManyArgs} args - Arguments to create many TwitterReplies.
     *     @example
     *     // Create many TwitterReplies
     *     const twitterReply = await prisma.twitterReply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterReplyCreateManyArgs>(
      args?: SelectSubset<T, TwitterReplyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterReply.
     * @param {TwitterReplyDeleteArgs} args - Arguments to delete one TwitterReply.
     * @example
     * // Delete one TwitterReply
     * const TwitterReply = await prisma.twitterReply.delete({
     *   where: {
     *     // ... filter to delete one TwitterReply
     *   }
     * })
     * 
    **/
    delete<T extends TwitterReplyDeleteArgs>(
      args: SelectSubset<T, TwitterReplyDeleteArgs>
    ): Prisma__TwitterReplyClient<TwitterReplyGetPayload<T>>

    /**
     * Update one TwitterReply.
     * @param {TwitterReplyUpdateArgs} args - Arguments to update one TwitterReply.
     * @example
     * // Update one TwitterReply
     * const twitterReply = await prisma.twitterReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterReplyUpdateArgs>(
      args: SelectSubset<T, TwitterReplyUpdateArgs>
    ): Prisma__TwitterReplyClient<TwitterReplyGetPayload<T>>

    /**
     * Delete zero or more TwitterReplies.
     * @param {TwitterReplyDeleteManyArgs} args - Arguments to filter TwitterReplies to delete.
     * @example
     * // Delete a few TwitterReplies
     * const { count } = await prisma.twitterReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterReplyDeleteManyArgs>(
      args?: SelectSubset<T, TwitterReplyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterReplies
     * const twitterReply = await prisma.twitterReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterReplyUpdateManyArgs>(
      args: SelectSubset<T, TwitterReplyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterReply.
     * @param {TwitterReplyUpsertArgs} args - Arguments to update or create a TwitterReply.
     * @example
     * // Update or create a TwitterReply
     * const twitterReply = await prisma.twitterReply.upsert({
     *   create: {
     *     // ... data to create a TwitterReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterReply we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterReplyUpsertArgs>(
      args: SelectSubset<T, TwitterReplyUpsertArgs>
    ): Prisma__TwitterReplyClient<TwitterReplyGetPayload<T>>

    /**
     * Count the number of TwitterReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterReplyCountArgs} args - Arguments to filter TwitterReplies to count.
     * @example
     * // Count the number of TwitterReplies
     * const count = await prisma.twitterReply.count({
     *   where: {
     *     // ... the filter for the TwitterReplies we want to count
     *   }
     * })
    **/
    count<T extends TwitterReplyCountArgs>(
      args?: Subset<T, TwitterReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterReplyAggregateArgs>(args: Subset<T, TwitterReplyAggregateArgs>): Prisma.PrismaPromise<GetTwitterReplyAggregateType<T>>

    /**
     * Group by TwitterReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterReplyGroupByArgs} args - Group by arguments.
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
      T extends TwitterReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterReplyGroupByArgs['orderBy'] }
        : { orderBy?: TwitterReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterReplyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    post<T extends TwitterPostArgs= {}>(args?: Subset<T, TwitterPostArgs>): Prisma__TwitterPostClient<TwitterPostGetPayload<T> | Null>;

    user<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

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
   * TwitterReply base type for findUnique actions
   */
  export type TwitterReplyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * Filter, which TwitterReply to fetch.
     */
    where: TwitterReplyWhereUniqueInput
  }

  /**
   * TwitterReply findUnique
   */
  export interface TwitterReplyFindUniqueArgs extends TwitterReplyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterReply findUniqueOrThrow
   */
  export type TwitterReplyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * Filter, which TwitterReply to fetch.
     */
    where: TwitterReplyWhereUniqueInput
  }


  /**
   * TwitterReply base type for findFirst actions
   */
  export type TwitterReplyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * Filter, which TwitterReply to fetch.
     */
    where?: TwitterReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterReplies to fetch.
     */
    orderBy?: Enumerable<TwitterReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterReplies.
     */
    cursor?: TwitterReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterReplies.
     */
    distinct?: Enumerable<TwitterReplyScalarFieldEnum>
  }

  /**
   * TwitterReply findFirst
   */
  export interface TwitterReplyFindFirstArgs extends TwitterReplyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterReply findFirstOrThrow
   */
  export type TwitterReplyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * Filter, which TwitterReply to fetch.
     */
    where?: TwitterReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterReplies to fetch.
     */
    orderBy?: Enumerable<TwitterReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterReplies.
     */
    cursor?: TwitterReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterReplies.
     */
    distinct?: Enumerable<TwitterReplyScalarFieldEnum>
  }


  /**
   * TwitterReply findMany
   */
  export type TwitterReplyFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * Filter, which TwitterReplies to fetch.
     */
    where?: TwitterReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterReplies to fetch.
     */
    orderBy?: Enumerable<TwitterReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterReplies.
     */
    cursor?: TwitterReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterReplies.
     */
    skip?: number
    distinct?: Enumerable<TwitterReplyScalarFieldEnum>
  }


  /**
   * TwitterReply create
   */
  export type TwitterReplyCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * The data needed to create a TwitterReply.
     */
    data: XOR<TwitterReplyCreateInput, TwitterReplyUncheckedCreateInput>
  }


  /**
   * TwitterReply createMany
   */
  export type TwitterReplyCreateManyArgs = {
    /**
     * The data used to create many TwitterReplies.
     */
    data: Enumerable<TwitterReplyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterReply update
   */
  export type TwitterReplyUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * The data needed to update a TwitterReply.
     */
    data: XOR<TwitterReplyUpdateInput, TwitterReplyUncheckedUpdateInput>
    /**
     * Choose, which TwitterReply to update.
     */
    where: TwitterReplyWhereUniqueInput
  }


  /**
   * TwitterReply updateMany
   */
  export type TwitterReplyUpdateManyArgs = {
    /**
     * The data used to update TwitterReplies.
     */
    data: XOR<TwitterReplyUpdateManyMutationInput, TwitterReplyUncheckedUpdateManyInput>
    /**
     * Filter which TwitterReplies to update
     */
    where?: TwitterReplyWhereInput
  }


  /**
   * TwitterReply upsert
   */
  export type TwitterReplyUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * The filter to search for the TwitterReply to update in case it exists.
     */
    where: TwitterReplyWhereUniqueInput
    /**
     * In case the TwitterReply found by the `where` argument doesn't exist, create a new TwitterReply with this data.
     */
    create: XOR<TwitterReplyCreateInput, TwitterReplyUncheckedCreateInput>
    /**
     * In case the TwitterReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterReplyUpdateInput, TwitterReplyUncheckedUpdateInput>
  }


  /**
   * TwitterReply delete
   */
  export type TwitterReplyDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
    /**
     * Filter which TwitterReply to delete.
     */
    where: TwitterReplyWhereUniqueInput
  }


  /**
   * TwitterReply deleteMany
   */
  export type TwitterReplyDeleteManyArgs = {
    /**
     * Filter which TwitterReplies to delete
     */
    where?: TwitterReplyWhereInput
  }


  /**
   * TwitterReply without action
   */
  export type TwitterReplyArgs = {
    /**
     * Select specific fields to fetch from the TwitterReply
     */
    select?: TwitterReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterReplyInclude | null
  }



  /**
   * Model TwitterDM
   */


  export type AggregateTwitterDM = {
    _count: TwitterDMCountAggregateOutputType | null
    _avg: TwitterDMAvgAggregateOutputType | null
    _sum: TwitterDMSumAggregateOutputType | null
    _min: TwitterDMMinAggregateOutputType | null
    _max: TwitterDMMaxAggregateOutputType | null
  }

  export type TwitterDMAvgAggregateOutputType = {
    id: number | null
    directFromId: number | null
    directToId: number | null
  }

  export type TwitterDMSumAggregateOutputType = {
    id: number | null
    directFromId: number | null
    directToId: number | null
  }

  export type TwitterDMMinAggregateOutputType = {
    id: number | null
    message: string | null
    directFromId: number | null
    directToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterDMMaxAggregateOutputType = {
    id: number | null
    message: string | null
    directFromId: number | null
    directToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterDMCountAggregateOutputType = {
    id: number
    message: number
    directFromId: number
    directToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterDMAvgAggregateInputType = {
    id?: true
    directFromId?: true
    directToId?: true
  }

  export type TwitterDMSumAggregateInputType = {
    id?: true
    directFromId?: true
    directToId?: true
  }

  export type TwitterDMMinAggregateInputType = {
    id?: true
    message?: true
    directFromId?: true
    directToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterDMMaxAggregateInputType = {
    id?: true
    message?: true
    directFromId?: true
    directToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterDMCountAggregateInputType = {
    id?: true
    message?: true
    directFromId?: true
    directToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwitterDMAggregateArgs = {
    /**
     * Filter which TwitterDM to aggregate.
     */
    where?: TwitterDMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterDMS to fetch.
     */
    orderBy?: Enumerable<TwitterDMOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterDMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterDMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterDMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterDMS
    **/
    _count?: true | TwitterDMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterDMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterDMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterDMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterDMMaxAggregateInputType
  }

  export type GetTwitterDMAggregateType<T extends TwitterDMAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterDM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterDM[P]>
      : GetScalarType<T[P], AggregateTwitterDM[P]>
  }




  export type TwitterDMGroupByArgs = {
    where?: TwitterDMWhereInput
    orderBy?: Enumerable<TwitterDMOrderByWithAggregationInput>
    by: TwitterDMScalarFieldEnum[]
    having?: TwitterDMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterDMCountAggregateInputType | true
    _avg?: TwitterDMAvgAggregateInputType
    _sum?: TwitterDMSumAggregateInputType
    _min?: TwitterDMMinAggregateInputType
    _max?: TwitterDMMaxAggregateInputType
  }


  export type TwitterDMGroupByOutputType = {
    id: number
    message: string
    directFromId: number
    directToId: number
    createdAt: Date
    updatedAt: Date
    _count: TwitterDMCountAggregateOutputType | null
    _avg: TwitterDMAvgAggregateOutputType | null
    _sum: TwitterDMSumAggregateOutputType | null
    _min: TwitterDMMinAggregateOutputType | null
    _max: TwitterDMMaxAggregateOutputType | null
  }

  type GetTwitterDMGroupByPayload<T extends TwitterDMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterDMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterDMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterDMGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterDMGroupByOutputType[P]>
        }
      >
    >


  export type TwitterDMSelect = {
    id?: boolean
    message?: boolean
    directFrom?: boolean | TwitterUserArgs
    directFromId?: boolean
    directTo?: boolean | TwitterUserArgs
    directToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TwitterDMInclude = {
    directFrom?: boolean | TwitterUserArgs
    directTo?: boolean | TwitterUserArgs
  }

  export type TwitterDMGetPayload<S extends boolean | null | undefined | TwitterDMArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterDM :
    S extends undefined ? never :
    S extends { include: any } & (TwitterDMArgs | TwitterDMFindManyArgs)
    ? TwitterDM  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'directFrom' ? TwitterUserGetPayload<S['include'][P]> :
        P extends 'directTo' ? TwitterUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterDMArgs | TwitterDMFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'directFrom' ? TwitterUserGetPayload<S['select'][P]> :
        P extends 'directTo' ? TwitterUserGetPayload<S['select'][P]> :  P extends keyof TwitterDM ? TwitterDM[P] : never
  } 
      : TwitterDM


  type TwitterDMCountArgs = 
    Omit<TwitterDMFindManyArgs, 'select' | 'include'> & {
      select?: TwitterDMCountAggregateInputType | true
    }

  export interface TwitterDMDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterDM that matches the filter.
     * @param {TwitterDMFindUniqueArgs} args - Arguments to find a TwitterDM
     * @example
     * // Get one TwitterDM
     * const twitterDM = await prisma.twitterDM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterDMFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterDMFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterDM'> extends True ? Prisma__TwitterDMClient<TwitterDMGetPayload<T>> : Prisma__TwitterDMClient<TwitterDMGetPayload<T> | null, null>

    /**
     * Find one TwitterDM that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterDMFindUniqueOrThrowArgs} args - Arguments to find a TwitterDM
     * @example
     * // Get one TwitterDM
     * const twitterDM = await prisma.twitterDM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterDMFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterDMFindUniqueOrThrowArgs>
    ): Prisma__TwitterDMClient<TwitterDMGetPayload<T>>

    /**
     * Find the first TwitterDM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDMFindFirstArgs} args - Arguments to find a TwitterDM
     * @example
     * // Get one TwitterDM
     * const twitterDM = await prisma.twitterDM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterDMFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterDMFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterDM'> extends True ? Prisma__TwitterDMClient<TwitterDMGetPayload<T>> : Prisma__TwitterDMClient<TwitterDMGetPayload<T> | null, null>

    /**
     * Find the first TwitterDM that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDMFindFirstOrThrowArgs} args - Arguments to find a TwitterDM
     * @example
     * // Get one TwitterDM
     * const twitterDM = await prisma.twitterDM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterDMFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterDMFindFirstOrThrowArgs>
    ): Prisma__TwitterDMClient<TwitterDMGetPayload<T>>

    /**
     * Find zero or more TwitterDMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDMFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterDMS
     * const twitterDMS = await prisma.twitterDM.findMany()
     * 
     * // Get first 10 TwitterDMS
     * const twitterDMS = await prisma.twitterDM.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterDMWithIdOnly = await prisma.twitterDM.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterDMFindManyArgs>(
      args?: SelectSubset<T, TwitterDMFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterDMGetPayload<T>>>

    /**
     * Create a TwitterDM.
     * @param {TwitterDMCreateArgs} args - Arguments to create a TwitterDM.
     * @example
     * // Create one TwitterDM
     * const TwitterDM = await prisma.twitterDM.create({
     *   data: {
     *     // ... data to create a TwitterDM
     *   }
     * })
     * 
    **/
    create<T extends TwitterDMCreateArgs>(
      args: SelectSubset<T, TwitterDMCreateArgs>
    ): Prisma__TwitterDMClient<TwitterDMGetPayload<T>>

    /**
     * Create many TwitterDMS.
     *     @param {TwitterDMCreateManyArgs} args - Arguments to create many TwitterDMS.
     *     @example
     *     // Create many TwitterDMS
     *     const twitterDM = await prisma.twitterDM.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterDMCreateManyArgs>(
      args?: SelectSubset<T, TwitterDMCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterDM.
     * @param {TwitterDMDeleteArgs} args - Arguments to delete one TwitterDM.
     * @example
     * // Delete one TwitterDM
     * const TwitterDM = await prisma.twitterDM.delete({
     *   where: {
     *     // ... filter to delete one TwitterDM
     *   }
     * })
     * 
    **/
    delete<T extends TwitterDMDeleteArgs>(
      args: SelectSubset<T, TwitterDMDeleteArgs>
    ): Prisma__TwitterDMClient<TwitterDMGetPayload<T>>

    /**
     * Update one TwitterDM.
     * @param {TwitterDMUpdateArgs} args - Arguments to update one TwitterDM.
     * @example
     * // Update one TwitterDM
     * const twitterDM = await prisma.twitterDM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterDMUpdateArgs>(
      args: SelectSubset<T, TwitterDMUpdateArgs>
    ): Prisma__TwitterDMClient<TwitterDMGetPayload<T>>

    /**
     * Delete zero or more TwitterDMS.
     * @param {TwitterDMDeleteManyArgs} args - Arguments to filter TwitterDMS to delete.
     * @example
     * // Delete a few TwitterDMS
     * const { count } = await prisma.twitterDM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterDMDeleteManyArgs>(
      args?: SelectSubset<T, TwitterDMDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterDMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterDMS
     * const twitterDM = await prisma.twitterDM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterDMUpdateManyArgs>(
      args: SelectSubset<T, TwitterDMUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterDM.
     * @param {TwitterDMUpsertArgs} args - Arguments to update or create a TwitterDM.
     * @example
     * // Update or create a TwitterDM
     * const twitterDM = await prisma.twitterDM.upsert({
     *   create: {
     *     // ... data to create a TwitterDM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterDM we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterDMUpsertArgs>(
      args: SelectSubset<T, TwitterDMUpsertArgs>
    ): Prisma__TwitterDMClient<TwitterDMGetPayload<T>>

    /**
     * Count the number of TwitterDMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDMCountArgs} args - Arguments to filter TwitterDMS to count.
     * @example
     * // Count the number of TwitterDMS
     * const count = await prisma.twitterDM.count({
     *   where: {
     *     // ... the filter for the TwitterDMS we want to count
     *   }
     * })
    **/
    count<T extends TwitterDMCountArgs>(
      args?: Subset<T, TwitterDMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterDMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterDM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterDMAggregateArgs>(args: Subset<T, TwitterDMAggregateArgs>): Prisma.PrismaPromise<GetTwitterDMAggregateType<T>>

    /**
     * Group by TwitterDM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDMGroupByArgs} args - Group by arguments.
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
      T extends TwitterDMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterDMGroupByArgs['orderBy'] }
        : { orderBy?: TwitterDMGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterDMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterDMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterDM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterDMClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    directFrom<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

    directTo<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

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
   * TwitterDM base type for findUnique actions
   */
  export type TwitterDMFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * Filter, which TwitterDM to fetch.
     */
    where: TwitterDMWhereUniqueInput
  }

  /**
   * TwitterDM findUnique
   */
  export interface TwitterDMFindUniqueArgs extends TwitterDMFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterDM findUniqueOrThrow
   */
  export type TwitterDMFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * Filter, which TwitterDM to fetch.
     */
    where: TwitterDMWhereUniqueInput
  }


  /**
   * TwitterDM base type for findFirst actions
   */
  export type TwitterDMFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * Filter, which TwitterDM to fetch.
     */
    where?: TwitterDMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterDMS to fetch.
     */
    orderBy?: Enumerable<TwitterDMOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterDMS.
     */
    cursor?: TwitterDMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterDMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterDMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterDMS.
     */
    distinct?: Enumerable<TwitterDMScalarFieldEnum>
  }

  /**
   * TwitterDM findFirst
   */
  export interface TwitterDMFindFirstArgs extends TwitterDMFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterDM findFirstOrThrow
   */
  export type TwitterDMFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * Filter, which TwitterDM to fetch.
     */
    where?: TwitterDMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterDMS to fetch.
     */
    orderBy?: Enumerable<TwitterDMOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterDMS.
     */
    cursor?: TwitterDMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterDMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterDMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterDMS.
     */
    distinct?: Enumerable<TwitterDMScalarFieldEnum>
  }


  /**
   * TwitterDM findMany
   */
  export type TwitterDMFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * Filter, which TwitterDMS to fetch.
     */
    where?: TwitterDMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterDMS to fetch.
     */
    orderBy?: Enumerable<TwitterDMOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterDMS.
     */
    cursor?: TwitterDMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterDMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterDMS.
     */
    skip?: number
    distinct?: Enumerable<TwitterDMScalarFieldEnum>
  }


  /**
   * TwitterDM create
   */
  export type TwitterDMCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * The data needed to create a TwitterDM.
     */
    data: XOR<TwitterDMCreateInput, TwitterDMUncheckedCreateInput>
  }


  /**
   * TwitterDM createMany
   */
  export type TwitterDMCreateManyArgs = {
    /**
     * The data used to create many TwitterDMS.
     */
    data: Enumerable<TwitterDMCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterDM update
   */
  export type TwitterDMUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * The data needed to update a TwitterDM.
     */
    data: XOR<TwitterDMUpdateInput, TwitterDMUncheckedUpdateInput>
    /**
     * Choose, which TwitterDM to update.
     */
    where: TwitterDMWhereUniqueInput
  }


  /**
   * TwitterDM updateMany
   */
  export type TwitterDMUpdateManyArgs = {
    /**
     * The data used to update TwitterDMS.
     */
    data: XOR<TwitterDMUpdateManyMutationInput, TwitterDMUncheckedUpdateManyInput>
    /**
     * Filter which TwitterDMS to update
     */
    where?: TwitterDMWhereInput
  }


  /**
   * TwitterDM upsert
   */
  export type TwitterDMUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * The filter to search for the TwitterDM to update in case it exists.
     */
    where: TwitterDMWhereUniqueInput
    /**
     * In case the TwitterDM found by the `where` argument doesn't exist, create a new TwitterDM with this data.
     */
    create: XOR<TwitterDMCreateInput, TwitterDMUncheckedCreateInput>
    /**
     * In case the TwitterDM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterDMUpdateInput, TwitterDMUncheckedUpdateInput>
  }


  /**
   * TwitterDM delete
   */
  export type TwitterDMDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
    /**
     * Filter which TwitterDM to delete.
     */
    where: TwitterDMWhereUniqueInput
  }


  /**
   * TwitterDM deleteMany
   */
  export type TwitterDMDeleteManyArgs = {
    /**
     * Filter which TwitterDMS to delete
     */
    where?: TwitterDMWhereInput
  }


  /**
   * TwitterDM without action
   */
  export type TwitterDMArgs = {
    /**
     * Select specific fields to fetch from the TwitterDM
     */
    select?: TwitterDMSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDMInclude | null
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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TodoListScalarFieldEnum: {
    id: 'id',
    task: 'task',
    status: 'status',
    note: 'note',
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


  export const TriviaCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaCategoryScalarFieldEnum = (typeof TriviaCategoryScalarFieldEnum)[keyof typeof TriviaCategoryScalarFieldEnum]


  export const TriviaChoiceScalarFieldEnum: {
    id: 'id',
    choice: 'choice',
    quizId: 'quizId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaChoiceScalarFieldEnum = (typeof TriviaChoiceScalarFieldEnum)[keyof typeof TriviaChoiceScalarFieldEnum]


  export const TriviaQuizScalarFieldEnum: {
    id: 'id',
    quiz: 'quiz',
    categoryName: 'categoryName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    answerId: 'answerId'
  };

  export type TriviaQuizScalarFieldEnum = (typeof TriviaQuizScalarFieldEnum)[keyof typeof TriviaQuizScalarFieldEnum]


  export const TriviaRoundQuizScalarFieldEnum: {
    id: 'id',
    roundId: 'roundId',
    quizId: 'quizId',
    userChoiceId: 'userChoiceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaRoundQuizScalarFieldEnum = (typeof TriviaRoundQuizScalarFieldEnum)[keyof typeof TriviaRoundQuizScalarFieldEnum]


  export const TriviaRoundScalarFieldEnum: {
    id: 'id',
    round: 'round',
    categoryId: 'categoryId',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaRoundScalarFieldEnum = (typeof TriviaRoundScalarFieldEnum)[keyof typeof TriviaRoundScalarFieldEnum]


  export const TwitterDMScalarFieldEnum: {
    id: 'id',
    message: 'message',
    directFromId: 'directFromId',
    directToId: 'directToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterDMScalarFieldEnum = (typeof TwitterDMScalarFieldEnum)[keyof typeof TwitterDMScalarFieldEnum]


  export const TwitterHashTagScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterHashTagScalarFieldEnum = (typeof TwitterHashTagScalarFieldEnum)[keyof typeof TwitterHashTagScalarFieldEnum]


  export const TwitterPostScalarFieldEnum: {
    id: 'id',
    message: 'message',
    postByUserId: 'postByUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterPostScalarFieldEnum = (typeof TwitterPostScalarFieldEnum)[keyof typeof TwitterPostScalarFieldEnum]


  export const TwitterReplyScalarFieldEnum: {
    id: 'id',
    message: 'message',
    postId: 'postId',
    postByUserId: 'postByUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterReplyScalarFieldEnum = (typeof TwitterReplyScalarFieldEnum)[keyof typeof TwitterReplyScalarFieldEnum]


  export const TwitterUserRelationScalarFieldEnum: {
    id: 'id',
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterUserRelationScalarFieldEnum = (typeof TwitterUserRelationScalarFieldEnum)[keyof typeof TwitterUserRelationScalarFieldEnum]


  export const TwitterUserScalarFieldEnum: {
    id: 'id',
    image: 'image',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterUserScalarFieldEnum = (typeof TwitterUserScalarFieldEnum)[keyof typeof TwitterUserScalarFieldEnum]


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
    orderItems?: BinKitchenOrderItemListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BinKitchenOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    orderItems?: BinKitchenOrderItemOrderByRelationAggregateInput
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

  export type TodoListWhereInput = {
    AND?: Enumerable<TodoListWhereInput>
    OR?: Enumerable<TodoListWhereInput>
    NOT?: Enumerable<TodoListWhereInput>
    id?: IntFilter | number
    task?: StringFilter | string
    status?: StringFilter | string
    note?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TodoListOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    note?: SortOrder
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
    note?: SortOrder
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
    note?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaCategoryWhereInput = {
    AND?: Enumerable<TriviaCategoryWhereInput>
    OR?: Enumerable<TriviaCategoryWhereInput>
    NOT?: Enumerable<TriviaCategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    triviaQuizes?: TriviaQuizListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    rounds?: TriviaRoundListRelationFilter
  }

  export type TriviaCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    triviaQuizes?: TriviaQuizOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rounds?: TriviaRoundOrderByRelationAggregateInput
  }

  export type TriviaCategoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type TriviaCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaCategoryCountOrderByAggregateInput
    _avg?: TriviaCategoryAvgOrderByAggregateInput
    _max?: TriviaCategoryMaxOrderByAggregateInput
    _min?: TriviaCategoryMinOrderByAggregateInput
    _sum?: TriviaCategorySumOrderByAggregateInput
  }

  export type TriviaCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaQuizWhereInput = {
    AND?: Enumerable<TriviaQuizWhereInput>
    OR?: Enumerable<TriviaQuizWhereInput>
    NOT?: Enumerable<TriviaQuizWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput> | null
    categoryName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    choices?: TriviaChoiceListRelationFilter
    answerId?: IntFilter | number
    roundQuizes?: TriviaRoundQuizListRelationFilter
  }

  export type TriviaQuizOrderByWithRelationInput = {
    id?: SortOrder
    quiz?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    choices?: TriviaChoiceOrderByRelationAggregateInput
    answerId?: SortOrder
    roundQuizes?: TriviaRoundQuizOrderByRelationAggregateInput
  }

  export type TriviaQuizWhereUniqueInput = {
    id?: number
  }

  export type TriviaQuizOrderByWithAggregationInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
    _count?: TriviaQuizCountOrderByAggregateInput
    _avg?: TriviaQuizAvgOrderByAggregateInput
    _max?: TriviaQuizMaxOrderByAggregateInput
    _min?: TriviaQuizMinOrderByAggregateInput
    _sum?: TriviaQuizSumOrderByAggregateInput
  }

  export type TriviaQuizScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaQuizScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaQuizScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaQuizScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quiz?: StringWithAggregatesFilter | string
    categoryName?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    answerId?: IntWithAggregatesFilter | number
  }

  export type TriviaChoiceWhereInput = {
    AND?: Enumerable<TriviaChoiceWhereInput>
    OR?: Enumerable<TriviaChoiceWhereInput>
    NOT?: Enumerable<TriviaChoiceWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    quiz?: XOR<TriviaQuizRelationFilter, TriviaQuizWhereInput> | null
    quizId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roundQuizes?: TriviaRoundQuizListRelationFilter
  }

  export type TriviaChoiceOrderByWithRelationInput = {
    id?: SortOrder
    choice?: SortOrder
    quiz?: TriviaQuizOrderByWithRelationInput
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roundQuizes?: TriviaRoundQuizOrderByRelationAggregateInput
  }

  export type TriviaChoiceWhereUniqueInput = {
    id?: number
  }

  export type TriviaChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaChoiceCountOrderByAggregateInput
    _avg?: TriviaChoiceAvgOrderByAggregateInput
    _max?: TriviaChoiceMaxOrderByAggregateInput
    _min?: TriviaChoiceMinOrderByAggregateInput
    _sum?: TriviaChoiceSumOrderByAggregateInput
  }

  export type TriviaChoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaChoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaChoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaChoiceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    choice?: StringWithAggregatesFilter | string
    quizId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaRoundWhereInput = {
    AND?: Enumerable<TriviaRoundWhereInput>
    OR?: Enumerable<TriviaRoundWhereInput>
    NOT?: Enumerable<TriviaRoundWhereInput>
    id?: IntFilter | number
    round?: StringFilter | string
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput> | null
    categoryId?: IntFilter | number
    score?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roundQuizes?: TriviaRoundQuizListRelationFilter
  }

  export type TriviaRoundOrderByWithRelationInput = {
    id?: SortOrder
    round?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    categoryId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roundQuizes?: TriviaRoundQuizOrderByRelationAggregateInput
  }

  export type TriviaRoundWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundOrderByWithAggregationInput = {
    id?: SortOrder
    round?: SortOrder
    categoryId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaRoundCountOrderByAggregateInput
    _avg?: TriviaRoundAvgOrderByAggregateInput
    _max?: TriviaRoundMaxOrderByAggregateInput
    _min?: TriviaRoundMinOrderByAggregateInput
    _sum?: TriviaRoundSumOrderByAggregateInput
  }

  export type TriviaRoundScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    round?: StringWithAggregatesFilter | string
    categoryId?: IntWithAggregatesFilter | number
    score?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaRoundQuizWhereInput = {
    AND?: Enumerable<TriviaRoundQuizWhereInput>
    OR?: Enumerable<TriviaRoundQuizWhereInput>
    NOT?: Enumerable<TriviaRoundQuizWhereInput>
    id?: IntFilter | number
    round?: XOR<TriviaRoundRelationFilter, TriviaRoundWhereInput> | null
    roundId?: IntFilter | number
    quiz?: XOR<TriviaQuizRelationFilter, TriviaQuizWhereInput> | null
    quizId?: IntFilter | number
    userChoice?: XOR<TriviaChoiceRelationFilter, TriviaChoiceWhereInput> | null
    userChoiceId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaRoundQuizOrderByWithRelationInput = {
    id?: SortOrder
    round?: TriviaRoundOrderByWithRelationInput
    roundId?: SortOrder
    quiz?: TriviaQuizOrderByWithRelationInput
    quizId?: SortOrder
    userChoice?: TriviaChoiceOrderByWithRelationInput
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundQuizOrderByWithAggregationInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaRoundQuizCountOrderByAggregateInput
    _avg?: TriviaRoundQuizAvgOrderByAggregateInput
    _max?: TriviaRoundQuizMaxOrderByAggregateInput
    _min?: TriviaRoundQuizMinOrderByAggregateInput
    _sum?: TriviaRoundQuizSumOrderByAggregateInput
  }

  export type TriviaRoundQuizScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaRoundQuizScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaRoundQuizScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaRoundQuizScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roundId?: IntWithAggregatesFilter | number
    quizId?: IntWithAggregatesFilter | number
    userChoiceId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterUserWhereInput = {
    AND?: Enumerable<TwitterUserWhereInput>
    OR?: Enumerable<TwitterUserWhereInput>
    NOT?: Enumerable<TwitterUserWhereInput>
    id?: IntFilter | number
    image?: StringFilter | string
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    follwer?: TwitterUserRelationListRelationFilter
    following?: TwitterUserRelationListRelationFilter
    TwitterPost?: TwitterPostListRelationFilter
    TwitterReply?: TwitterReplyListRelationFilter
    directFrom?: TwitterDMListRelationFilter
    directTo?: TwitterDMListRelationFilter
  }

  export type TwitterUserOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    follwer?: TwitterUserRelationOrderByRelationAggregateInput
    following?: TwitterUserRelationOrderByRelationAggregateInput
    TwitterPost?: TwitterPostOrderByRelationAggregateInput
    TwitterReply?: TwitterReplyOrderByRelationAggregateInput
    directFrom?: TwitterDMOrderByRelationAggregateInput
    directTo?: TwitterDMOrderByRelationAggregateInput
  }

  export type TwitterUserWhereUniqueInput = {
    id?: number
    image?: string
    name?: string
  }

  export type TwitterUserOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwitterUserCountOrderByAggregateInput
    _avg?: TwitterUserAvgOrderByAggregateInput
    _max?: TwitterUserMaxOrderByAggregateInput
    _min?: TwitterUserMinOrderByAggregateInput
    _sum?: TwitterUserSumOrderByAggregateInput
  }

  export type TwitterUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterUserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    image?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterUserRelationWhereInput = {
    AND?: Enumerable<TwitterUserRelationWhereInput>
    OR?: Enumerable<TwitterUserRelationWhereInput>
    NOT?: Enumerable<TwitterUserRelationWhereInput>
    id?: IntFilter | number
    follwer?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    followerId?: IntFilter | number
    following?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    followingId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterUserRelationOrderByWithRelationInput = {
    id?: SortOrder
    follwer?: TwitterUserOrderByWithRelationInput
    followerId?: SortOrder
    following?: TwitterUserOrderByWithRelationInput
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserRelationWhereUniqueInput = {
    id?: number
  }

  export type TwitterUserRelationOrderByWithAggregationInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwitterUserRelationCountOrderByAggregateInput
    _avg?: TwitterUserRelationAvgOrderByAggregateInput
    _max?: TwitterUserRelationMaxOrderByAggregateInput
    _min?: TwitterUserRelationMinOrderByAggregateInput
    _sum?: TwitterUserRelationSumOrderByAggregateInput
  }

  export type TwitterUserRelationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterUserRelationScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterUserRelationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterUserRelationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    followerId?: IntWithAggregatesFilter | number
    followingId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterPostWhereInput = {
    AND?: Enumerable<TwitterPostWhereInput>
    OR?: Enumerable<TwitterPostWhereInput>
    NOT?: Enumerable<TwitterPostWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    user?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    postByUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    TwitterReply?: TwitterReplyListRelationFilter
    hashTags?: TwitterHashTagListRelationFilter
  }

  export type TwitterPostOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    user?: TwitterUserOrderByWithRelationInput
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    TwitterReply?: TwitterReplyOrderByRelationAggregateInput
    hashTags?: TwitterHashTagOrderByRelationAggregateInput
  }

  export type TwitterPostWhereUniqueInput = {
    id?: number
  }

  export type TwitterPostOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwitterPostCountOrderByAggregateInput
    _avg?: TwitterPostAvgOrderByAggregateInput
    _max?: TwitterPostMaxOrderByAggregateInput
    _min?: TwitterPostMinOrderByAggregateInput
    _sum?: TwitterPostSumOrderByAggregateInput
  }

  export type TwitterPostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterPostScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterPostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterPostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    postByUserId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterHashTagWhereInput = {
    AND?: Enumerable<TwitterHashTagWhereInput>
    OR?: Enumerable<TwitterHashTagWhereInput>
    NOT?: Enumerable<TwitterHashTagWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    posts?: TwitterPostListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterHashTagOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    posts?: TwitterPostOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterHashTagWhereUniqueInput = {
    id?: number
  }

  export type TwitterHashTagOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwitterHashTagCountOrderByAggregateInput
    _avg?: TwitterHashTagAvgOrderByAggregateInput
    _max?: TwitterHashTagMaxOrderByAggregateInput
    _min?: TwitterHashTagMinOrderByAggregateInput
    _sum?: TwitterHashTagSumOrderByAggregateInput
  }

  export type TwitterHashTagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterHashTagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterHashTagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterHashTagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterReplyWhereInput = {
    AND?: Enumerable<TwitterReplyWhereInput>
    OR?: Enumerable<TwitterReplyWhereInput>
    NOT?: Enumerable<TwitterReplyWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    post?: XOR<TwitterPostRelationFilter, TwitterPostWhereInput>
    postId?: IntFilter | number
    user?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    postByUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterReplyOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    post?: TwitterPostOrderByWithRelationInput
    postId?: SortOrder
    user?: TwitterUserOrderByWithRelationInput
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterReplyWhereUniqueInput = {
    id?: number
  }

  export type TwitterReplyOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwitterReplyCountOrderByAggregateInput
    _avg?: TwitterReplyAvgOrderByAggregateInput
    _max?: TwitterReplyMaxOrderByAggregateInput
    _min?: TwitterReplyMinOrderByAggregateInput
    _sum?: TwitterReplySumOrderByAggregateInput
  }

  export type TwitterReplyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterReplyScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterReplyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterReplyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    postId?: IntWithAggregatesFilter | number
    postByUserId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterDMWhereInput = {
    AND?: Enumerable<TwitterDMWhereInput>
    OR?: Enumerable<TwitterDMWhereInput>
    NOT?: Enumerable<TwitterDMWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    directFrom?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    directFromId?: IntFilter | number
    directTo?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    directToId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterDMOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    directFrom?: TwitterUserOrderByWithRelationInput
    directFromId?: SortOrder
    directTo?: TwitterUserOrderByWithRelationInput
    directToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterDMWhereUniqueInput = {
    id?: number
  }

  export type TwitterDMOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    directFromId?: SortOrder
    directToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwitterDMCountOrderByAggregateInput
    _avg?: TwitterDMAvgOrderByAggregateInput
    _max?: TwitterDMMaxOrderByAggregateInput
    _min?: TwitterDMMinOrderByAggregateInput
    _sum?: TwitterDMSumOrderByAggregateInput
  }

  export type TwitterDMScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterDMScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterDMScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterDMScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    directFromId?: IntWithAggregatesFilter | number
    directToId?: IntWithAggregatesFilter | number
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
    orderItems?: BinKitchenOrderItemCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderUncheckedCreateInput = {
    id?: number
    status?: string
    tableId: number
    orderItems?: BinKitchenOrderItemUncheckedCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    orderItems?: BinKitchenOrderItemUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    orderItems?: BinKitchenOrderItemUncheckedUpdateManyWithoutOrderNestedInput
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
    order?: BinKitchenOrderCreateNestedOneWithoutOrderItemsInput
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
    order?: BinKitchenOrderUpdateOneWithoutOrderItemsNestedInput
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

  export type TodoListCreateInput = {
    task: string
    status?: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUncheckedCreateInput = {
    id?: number
    task: string
    status?: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUpdateInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListCreateManyInput = {
    id?: number
    task: string
    status?: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUpdateManyMutationInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaCategoryCreateInput = {
    name: string
    triviaQuizes?: TriviaQuizCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateInput = {
    id?: number
    name: string
    triviaQuizes?: TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizCreateInput = {
    quiz: string
    category?: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answerId: number
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
    answerId: number
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUpdateInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizCreateManyInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerId: number
  }

  export type TriviaQuizUpdateManyMutationInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaChoiceCreateInput = {
    choice: string
    quiz?: TriviaQuizCreateNestedOneWithoutChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUncheckedCreateInput = {
    id?: number
    choice: string
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUpdateInput = {
    choice?: StringFieldUpdateOperationsInput | string
    quiz?: TriviaQuizUpdateOneWithoutChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceCreateManyInput = {
    id?: number
    choice: string
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaChoiceUpdateManyMutationInput = {
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundCreateInput = {
    round: string
    category?: TriviaCategoryCreateNestedOneWithoutRoundsInput
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateInput = {
    id?: number
    round: string
    categoryId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUpdateInput = {
    round?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutRoundsNestedInput
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    round?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundCreateManyInput = {
    id?: number
    round: string
    categoryId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundUpdateManyMutationInput = {
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    round?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateInput = {
    round?: TriviaRoundCreateNestedOneWithoutRoundQuizesInput
    quiz?: TriviaQuizCreateNestedOneWithoutRoundQuizesInput
    userChoice?: TriviaChoiceCreateNestedOneWithoutRoundQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateInput = {
    id?: number
    roundId: number
    quizId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateInput = {
    round?: TriviaRoundUpdateOneWithoutRoundQuizesNestedInput
    quiz?: TriviaQuizUpdateOneWithoutRoundQuizesNestedInput
    userChoice?: TriviaChoiceUpdateOneWithoutRoundQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateManyInput = {
    id?: number
    roundId: number
    quizId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserCreateInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserUncheckedCreateInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMUncheckedCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMUncheckedCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUncheckedUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUncheckedUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUncheckedUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUncheckedUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserCreateManyInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationCreateInput = {
    follwer: TwitterUserCreateNestedOneWithoutFollwerInput
    following: TwitterUserCreateNestedOneWithoutFollowingInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationUncheckedCreateInput = {
    id?: number
    followerId: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationUpdateInput = {
    follwer?: TwitterUserUpdateOneRequiredWithoutFollwerNestedInput
    following?: TwitterUserUpdateOneRequiredWithoutFollowingNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationCreateManyInput = {
    id?: number
    followerId: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostCreateInput = {
    message: string
    user: TwitterUserCreateNestedOneWithoutTwitterPostInput
    createdAt?: Date | string
    updatedAt?: Date | string
    TwitterReply?: TwitterReplyCreateNestedManyWithoutPostInput
    hashTags?: TwitterHashTagCreateNestedManyWithoutPostsInput
  }

  export type TwitterPostUncheckedCreateInput = {
    id?: number
    message: string
    postByUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutPostInput
    hashTags?: TwitterHashTagUncheckedCreateNestedManyWithoutPostsInput
  }

  export type TwitterPostUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    user?: TwitterUserUpdateOneRequiredWithoutTwitterPostNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TwitterReply?: TwitterReplyUpdateManyWithoutPostNestedInput
    hashTags?: TwitterHashTagUpdateManyWithoutPostsNestedInput
  }

  export type TwitterPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postByUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutPostNestedInput
    hashTags?: TwitterHashTagUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type TwitterPostCreateManyInput = {
    id?: number
    message: string
    postByUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterPostUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postByUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashTagCreateInput = {
    message: string
    posts?: TwitterPostCreateNestedManyWithoutHashTagsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterHashTagUncheckedCreateInput = {
    id?: number
    message: string
    posts?: TwitterPostUncheckedCreateNestedManyWithoutHashTagsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterHashTagUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    posts?: TwitterPostUpdateManyWithoutHashTagsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    posts?: TwitterPostUncheckedUpdateManyWithoutHashTagsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashTagCreateManyInput = {
    id?: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterHashTagUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyCreateInput = {
    message: string
    post: TwitterPostCreateNestedOneWithoutTwitterReplyInput
    user: TwitterUserCreateNestedOneWithoutTwitterReplyInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyUncheckedCreateInput = {
    id?: number
    message: string
    postId: number
    postByUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    post?: TwitterPostUpdateOneRequiredWithoutTwitterReplyNestedInput
    user?: TwitterUserUpdateOneRequiredWithoutTwitterReplyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    postByUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyCreateManyInput = {
    id?: number
    message: string
    postId: number
    postByUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    postByUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMCreateInput = {
    message: string
    directFrom: TwitterUserCreateNestedOneWithoutDirectFromInput
    directTo: TwitterUserCreateNestedOneWithoutDirectToInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMUncheckedCreateInput = {
    id?: number
    message: string
    directFromId: number
    directToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    directFrom?: TwitterUserUpdateOneRequiredWithoutDirectFromNestedInput
    directTo?: TwitterUserUpdateOneRequiredWithoutDirectToNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    directFromId?: IntFieldUpdateOperationsInput | number
    directToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMCreateManyInput = {
    id?: number
    message: string
    directFromId: number
    directToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    directFromId?: IntFieldUpdateOperationsInput | number
    directToId?: IntFieldUpdateOperationsInput | number
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

  export type TodoListCountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    note?: SortOrder
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
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoListMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaQuizListRelationFilter = {
    every?: TriviaQuizWhereInput
    some?: TriviaQuizWhereInput
    none?: TriviaQuizWhereInput
  }

  export type TriviaRoundListRelationFilter = {
    every?: TriviaRoundWhereInput
    some?: TriviaRoundWhereInput
    none?: TriviaRoundWhereInput
  }

  export type TriviaQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaCategoryRelationFilter = {
    is?: TriviaCategoryWhereInput | null
    isNot?: TriviaCategoryWhereInput | null
  }

  export type TriviaChoiceListRelationFilter = {
    every?: TriviaChoiceWhereInput
    some?: TriviaChoiceWhereInput
    none?: TriviaChoiceWhereInput
  }

  export type TriviaRoundQuizListRelationFilter = {
    every?: TriviaRoundQuizWhereInput
    some?: TriviaRoundQuizWhereInput
    none?: TriviaRoundQuizWhereInput
  }

  export type TriviaChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaRoundQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaQuizCountOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
  }

  export type TriviaQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
  }

  export type TriviaQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
  }

  export type TriviaQuizMinOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answerId?: SortOrder
  }

  export type TriviaQuizSumOrderByAggregateInput = {
    id?: SortOrder
    answerId?: SortOrder
  }

  export type TriviaQuizRelationFilter = {
    is?: TriviaQuizWhereInput | null
    isNot?: TriviaQuizWhereInput | null
  }

  export type TriviaChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaRoundCountOrderByAggregateInput = {
    id?: SortOrder
    round?: SortOrder
    categoryId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    score?: SortOrder
  }

  export type TriviaRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    round?: SortOrder
    categoryId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundMinOrderByAggregateInput = {
    id?: SortOrder
    round?: SortOrder
    categoryId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    score?: SortOrder
  }

  export type TriviaRoundRelationFilter = {
    is?: TriviaRoundWhereInput | null
    isNot?: TriviaRoundWhereInput | null
  }

  export type TriviaChoiceRelationFilter = {
    is?: TriviaChoiceWhereInput | null
    isNot?: TriviaChoiceWhereInput | null
  }

  export type TriviaRoundQuizCountOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
  }

  export type TriviaRoundQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizMinOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizSumOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    userChoiceId?: SortOrder
  }

  export type TwitterUserRelationListRelationFilter = {
    every?: TwitterUserRelationWhereInput
    some?: TwitterUserRelationWhereInput
    none?: TwitterUserRelationWhereInput
  }

  export type TwitterPostListRelationFilter = {
    every?: TwitterPostWhereInput
    some?: TwitterPostWhereInput
    none?: TwitterPostWhereInput
  }

  export type TwitterReplyListRelationFilter = {
    every?: TwitterReplyWhereInput
    some?: TwitterReplyWhereInput
    none?: TwitterReplyWhereInput
  }

  export type TwitterDMListRelationFilter = {
    every?: TwitterDMWhereInput
    some?: TwitterDMWhereInput
    none?: TwitterDMWhereInput
  }

  export type TwitterUserRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterDMOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterUserCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterUserMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterUserRelationFilter = {
    is?: TwitterUserWhereInput
    isNot?: TwitterUserWhereInput
  }

  export type TwitterUserRelationCountOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserRelationAvgOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type TwitterUserRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserRelationMinOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserRelationSumOrderByAggregateInput = {
    id?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type TwitterHashTagListRelationFilter = {
    every?: TwitterHashTagWhereInput
    some?: TwitterHashTagWhereInput
    none?: TwitterHashTagWhereInput
  }

  export type TwitterHashTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterPostCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterPostAvgOrderByAggregateInput = {
    id?: SortOrder
    postByUserId?: SortOrder
  }

  export type TwitterPostMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterPostMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterPostSumOrderByAggregateInput = {
    id?: SortOrder
    postByUserId?: SortOrder
  }

  export type TwitterHashTagCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterHashTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterHashTagMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterHashTagMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterHashTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterPostRelationFilter = {
    is?: TwitterPostWhereInput
    isNot?: TwitterPostWhereInput
  }

  export type TwitterReplyCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    postByUserId?: SortOrder
  }

  export type TwitterReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterReplyMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    postByUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterReplySumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    postByUserId?: SortOrder
  }

  export type TwitterDMCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    directFromId?: SortOrder
    directToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterDMAvgOrderByAggregateInput = {
    id?: SortOrder
    directFromId?: SortOrder
    directToId?: SortOrder
  }

  export type TwitterDMMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    directFromId?: SortOrder
    directToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterDMMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    directFromId?: SortOrder
    directToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterDMSumOrderByAggregateInput = {
    id?: SortOrder
    directFromId?: SortOrder
    directToId?: SortOrder
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

  export type BinKitchenOrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<BinKitchenOrderCreateWithoutOrderItemsInput, BinKitchenOrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: BinKitchenOrderCreateOrConnectWithoutOrderItemsInput
    connect?: BinKitchenOrderWhereUniqueInput
  }

  export type BinKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<BinKitchenMenuCreateWithoutOrderItemsInput, BinKitchenMenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: BinKitchenMenuCreateOrConnectWithoutOrderItemsInput
    upsert?: BinKitchenMenuUpsertWithoutOrderItemsInput
    connect?: BinKitchenMenuWhereUniqueInput
    update?: XOR<BinKitchenMenuUpdateWithoutOrderItemsInput, BinKitchenMenuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type BinKitchenOrderUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<BinKitchenOrderCreateWithoutOrderItemsInput, BinKitchenOrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: BinKitchenOrderCreateOrConnectWithoutOrderItemsInput
    upsert?: BinKitchenOrderUpsertWithoutOrderItemsInput
    disconnect?: boolean
    delete?: boolean
    connect?: BinKitchenOrderWhereUniqueInput
    update?: XOR<BinKitchenOrderUpdateWithoutOrderItemsInput, BinKitchenOrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriviaQuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
  }

  export type TriviaRoundCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
  }

  export type TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type TriviaQuizUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaQuizUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuizWhereUniqueInput>
    delete?: Enumerable<TriviaQuizWhereUniqueInput>
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
    update?: Enumerable<TriviaQuizUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaQuizUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaQuizScalarWhereInput>
  }

  export type TriviaRoundUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaRoundWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundWhereUniqueInput>
    delete?: Enumerable<TriviaRoundWhereUniqueInput>
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
    update?: Enumerable<TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaRoundUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaRoundScalarWhereInput>
  }

  export type TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaQuizUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuizWhereUniqueInput>
    delete?: Enumerable<TriviaQuizWhereUniqueInput>
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
    update?: Enumerable<TriviaQuizUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaQuizUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaQuizScalarWhereInput>
  }

  export type TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaRoundWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundWhereUniqueInput>
    delete?: Enumerable<TriviaRoundWhereUniqueInput>
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
    update?: Enumerable<TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaRoundUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaRoundScalarWhereInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaChoiceCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuizCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput
    upsert?: TriviaCategoryUpsertWithoutTriviaQuizesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutTriviaQuizesInput, TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput>
  }

  export type TriviaChoiceUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaRoundQuizUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaQuizCreateNestedOneWithoutChoicesInput = {
    create?: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutChoicesInput
    connect?: TriviaQuizWhereUniqueInput
  }

  export type TriviaRoundQuizCreateNestedManyWithoutUserChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput>
    createMany?: TriviaRoundQuizCreateManyUserChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaRoundQuizUncheckedCreateNestedManyWithoutUserChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput>
    createMany?: TriviaRoundQuizCreateManyUserChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaQuizUpdateOneWithoutChoicesNestedInput = {
    create?: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutChoicesInput
    upsert?: TriviaQuizUpsertWithoutChoicesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuizWhereUniqueInput
    update?: XOR<TriviaQuizUpdateWithoutChoicesInput, TriviaQuizUncheckedUpdateWithoutChoicesInput>
  }

  export type TriviaRoundQuizUpdateManyWithoutUserChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutUserChoiceInput>
    createMany?: TriviaRoundQuizCreateManyUserChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutUserChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutUserChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutUserChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutUserChoiceInput>
    createMany?: TriviaRoundQuizCreateManyUserChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutUserChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutUserChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutRoundsInput = {
    create?: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutRoundsInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaRoundQuizCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutRoundInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutRoundInput>
    createMany?: TriviaRoundQuizCreateManyRoundInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaRoundQuizUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutRoundInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutRoundInput>
    createMany?: TriviaRoundQuizCreateManyRoundInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaCategoryUpdateOneWithoutRoundsNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutRoundsInput
    upsert?: TriviaCategoryUpsertWithoutRoundsInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutRoundsInput, TriviaCategoryUncheckedUpdateWithoutRoundsInput>
  }

  export type TriviaRoundQuizUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutRoundInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: TriviaRoundQuizCreateManyRoundInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutRoundInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<TriviaRoundQuizUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: TriviaRoundQuizCreateManyRoundInputEnvelope
    set?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<TriviaRoundQuizUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<TriviaRoundQuizScalarWhereInput>
  }

  export type TriviaRoundCreateNestedOneWithoutRoundQuizesInput = {
    create?: XOR<TriviaRoundCreateWithoutRoundQuizesInput, TriviaRoundUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutRoundQuizesInput
    connect?: TriviaRoundWhereUniqueInput
  }

  export type TriviaQuizCreateNestedOneWithoutRoundQuizesInput = {
    create?: XOR<TriviaQuizCreateWithoutRoundQuizesInput, TriviaQuizUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutRoundQuizesInput
    connect?: TriviaQuizWhereUniqueInput
  }

  export type TriviaChoiceCreateNestedOneWithoutRoundQuizesInput = {
    create?: XOR<TriviaChoiceCreateWithoutRoundQuizesInput, TriviaChoiceUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutRoundQuizesInput
    connect?: TriviaChoiceWhereUniqueInput
  }

  export type TriviaRoundUpdateOneWithoutRoundQuizesNestedInput = {
    create?: XOR<TriviaRoundCreateWithoutRoundQuizesInput, TriviaRoundUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutRoundQuizesInput
    upsert?: TriviaRoundUpsertWithoutRoundQuizesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaRoundWhereUniqueInput
    update?: XOR<TriviaRoundUpdateWithoutRoundQuizesInput, TriviaRoundUncheckedUpdateWithoutRoundQuizesInput>
  }

  export type TriviaQuizUpdateOneWithoutRoundQuizesNestedInput = {
    create?: XOR<TriviaQuizCreateWithoutRoundQuizesInput, TriviaQuizUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutRoundQuizesInput
    upsert?: TriviaQuizUpsertWithoutRoundQuizesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuizWhereUniqueInput
    update?: XOR<TriviaQuizUpdateWithoutRoundQuizesInput, TriviaQuizUncheckedUpdateWithoutRoundQuizesInput>
  }

  export type TriviaChoiceUpdateOneWithoutRoundQuizesNestedInput = {
    create?: XOR<TriviaChoiceCreateWithoutRoundQuizesInput, TriviaChoiceUncheckedCreateWithoutRoundQuizesInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutRoundQuizesInput
    upsert?: TriviaChoiceUpsertWithoutRoundQuizesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaChoiceWhereUniqueInput
    update?: XOR<TriviaChoiceUpdateWithoutRoundQuizesInput, TriviaChoiceUncheckedUpdateWithoutRoundQuizesInput>
  }

  export type TwitterUserRelationCreateNestedManyWithoutFollwerInput = {
    create?: XOR<Enumerable<TwitterUserRelationCreateWithoutFollwerInput>, Enumerable<TwitterUserRelationUncheckedCreateWithoutFollwerInput>>
    connectOrCreate?: Enumerable<TwitterUserRelationCreateOrConnectWithoutFollwerInput>
    createMany?: TwitterUserRelationCreateManyFollwerInputEnvelope
    connect?: Enumerable<TwitterUserRelationWhereUniqueInput>
  }

  export type TwitterUserRelationCreateNestedManyWithoutFollowingInput = {
    create?: XOR<Enumerable<TwitterUserRelationCreateWithoutFollowingInput>, Enumerable<TwitterUserRelationUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<TwitterUserRelationCreateOrConnectWithoutFollowingInput>
    createMany?: TwitterUserRelationCreateManyFollowingInputEnvelope
    connect?: Enumerable<TwitterUserRelationWhereUniqueInput>
  }

  export type TwitterPostCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutUserInput>, Enumerable<TwitterPostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutUserInput>
    createMany?: TwitterPostCreateManyUserInputEnvelope
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TwitterReplyCreateWithoutUserInput>, Enumerable<TwitterReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterReplyCreateOrConnectWithoutUserInput>
    createMany?: TwitterReplyCreateManyUserInputEnvelope
    connect?: Enumerable<TwitterReplyWhereUniqueInput>
  }

  export type TwitterDMCreateNestedManyWithoutDirectFromInput = {
    create?: XOR<Enumerable<TwitterDMCreateWithoutDirectFromInput>, Enumerable<TwitterDMUncheckedCreateWithoutDirectFromInput>>
    connectOrCreate?: Enumerable<TwitterDMCreateOrConnectWithoutDirectFromInput>
    createMany?: TwitterDMCreateManyDirectFromInputEnvelope
    connect?: Enumerable<TwitterDMWhereUniqueInput>
  }

  export type TwitterDMCreateNestedManyWithoutDirectToInput = {
    create?: XOR<Enumerable<TwitterDMCreateWithoutDirectToInput>, Enumerable<TwitterDMUncheckedCreateWithoutDirectToInput>>
    connectOrCreate?: Enumerable<TwitterDMCreateOrConnectWithoutDirectToInput>
    createMany?: TwitterDMCreateManyDirectToInputEnvelope
    connect?: Enumerable<TwitterDMWhereUniqueInput>
  }

  export type TwitterUserRelationUncheckedCreateNestedManyWithoutFollwerInput = {
    create?: XOR<Enumerable<TwitterUserRelationCreateWithoutFollwerInput>, Enumerable<TwitterUserRelationUncheckedCreateWithoutFollwerInput>>
    connectOrCreate?: Enumerable<TwitterUserRelationCreateOrConnectWithoutFollwerInput>
    createMany?: TwitterUserRelationCreateManyFollwerInputEnvelope
    connect?: Enumerable<TwitterUserRelationWhereUniqueInput>
  }

  export type TwitterUserRelationUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<Enumerable<TwitterUserRelationCreateWithoutFollowingInput>, Enumerable<TwitterUserRelationUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<TwitterUserRelationCreateOrConnectWithoutFollowingInput>
    createMany?: TwitterUserRelationCreateManyFollowingInputEnvelope
    connect?: Enumerable<TwitterUserRelationWhereUniqueInput>
  }

  export type TwitterPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutUserInput>, Enumerable<TwitterPostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutUserInput>
    createMany?: TwitterPostCreateManyUserInputEnvelope
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TwitterReplyCreateWithoutUserInput>, Enumerable<TwitterReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterReplyCreateOrConnectWithoutUserInput>
    createMany?: TwitterReplyCreateManyUserInputEnvelope
    connect?: Enumerable<TwitterReplyWhereUniqueInput>
  }

  export type TwitterDMUncheckedCreateNestedManyWithoutDirectFromInput = {
    create?: XOR<Enumerable<TwitterDMCreateWithoutDirectFromInput>, Enumerable<TwitterDMUncheckedCreateWithoutDirectFromInput>>
    connectOrCreate?: Enumerable<TwitterDMCreateOrConnectWithoutDirectFromInput>
    createMany?: TwitterDMCreateManyDirectFromInputEnvelope
    connect?: Enumerable<TwitterDMWhereUniqueInput>
  }

  export type TwitterDMUncheckedCreateNestedManyWithoutDirectToInput = {
    create?: XOR<Enumerable<TwitterDMCreateWithoutDirectToInput>, Enumerable<TwitterDMUncheckedCreateWithoutDirectToInput>>
    connectOrCreate?: Enumerable<TwitterDMCreateOrConnectWithoutDirectToInput>
    createMany?: TwitterDMCreateManyDirectToInputEnvelope
    connect?: Enumerable<TwitterDMWhereUniqueInput>
  }

  export type TwitterUserRelationUpdateManyWithoutFollwerNestedInput = {
    create?: XOR<Enumerable<TwitterUserRelationCreateWithoutFollwerInput>, Enumerable<TwitterUserRelationUncheckedCreateWithoutFollwerInput>>
    connectOrCreate?: Enumerable<TwitterUserRelationCreateOrConnectWithoutFollwerInput>
    upsert?: Enumerable<TwitterUserRelationUpsertWithWhereUniqueWithoutFollwerInput>
    createMany?: TwitterUserRelationCreateManyFollwerInputEnvelope
    set?: Enumerable<TwitterUserRelationWhereUniqueInput>
    disconnect?: Enumerable<TwitterUserRelationWhereUniqueInput>
    delete?: Enumerable<TwitterUserRelationWhereUniqueInput>
    connect?: Enumerable<TwitterUserRelationWhereUniqueInput>
    update?: Enumerable<TwitterUserRelationUpdateWithWhereUniqueWithoutFollwerInput>
    updateMany?: Enumerable<TwitterUserRelationUpdateManyWithWhereWithoutFollwerInput>
    deleteMany?: Enumerable<TwitterUserRelationScalarWhereInput>
  }

  export type TwitterUserRelationUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<Enumerable<TwitterUserRelationCreateWithoutFollowingInput>, Enumerable<TwitterUserRelationUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<TwitterUserRelationCreateOrConnectWithoutFollowingInput>
    upsert?: Enumerable<TwitterUserRelationUpsertWithWhereUniqueWithoutFollowingInput>
    createMany?: TwitterUserRelationCreateManyFollowingInputEnvelope
    set?: Enumerable<TwitterUserRelationWhereUniqueInput>
    disconnect?: Enumerable<TwitterUserRelationWhereUniqueInput>
    delete?: Enumerable<TwitterUserRelationWhereUniqueInput>
    connect?: Enumerable<TwitterUserRelationWhereUniqueInput>
    update?: Enumerable<TwitterUserRelationUpdateWithWhereUniqueWithoutFollowingInput>
    updateMany?: Enumerable<TwitterUserRelationUpdateManyWithWhereWithoutFollowingInput>
    deleteMany?: Enumerable<TwitterUserRelationScalarWhereInput>
  }

  export type TwitterPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutUserInput>, Enumerable<TwitterPostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TwitterPostCreateManyUserInputEnvelope
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TwitterReplyCreateWithoutUserInput>, Enumerable<TwitterReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TwitterReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TwitterReplyCreateManyUserInputEnvelope
    set?: Enumerable<TwitterReplyWhereUniqueInput>
    disconnect?: Enumerable<TwitterReplyWhereUniqueInput>
    delete?: Enumerable<TwitterReplyWhereUniqueInput>
    connect?: Enumerable<TwitterReplyWhereUniqueInput>
    update?: Enumerable<TwitterReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TwitterReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TwitterReplyScalarWhereInput>
  }

  export type TwitterDMUpdateManyWithoutDirectFromNestedInput = {
    create?: XOR<Enumerable<TwitterDMCreateWithoutDirectFromInput>, Enumerable<TwitterDMUncheckedCreateWithoutDirectFromInput>>
    connectOrCreate?: Enumerable<TwitterDMCreateOrConnectWithoutDirectFromInput>
    upsert?: Enumerable<TwitterDMUpsertWithWhereUniqueWithoutDirectFromInput>
    createMany?: TwitterDMCreateManyDirectFromInputEnvelope
    set?: Enumerable<TwitterDMWhereUniqueInput>
    disconnect?: Enumerable<TwitterDMWhereUniqueInput>
    delete?: Enumerable<TwitterDMWhereUniqueInput>
    connect?: Enumerable<TwitterDMWhereUniqueInput>
    update?: Enumerable<TwitterDMUpdateWithWhereUniqueWithoutDirectFromInput>
    updateMany?: Enumerable<TwitterDMUpdateManyWithWhereWithoutDirectFromInput>
    deleteMany?: Enumerable<TwitterDMScalarWhereInput>
  }

  export type TwitterDMUpdateManyWithoutDirectToNestedInput = {
    create?: XOR<Enumerable<TwitterDMCreateWithoutDirectToInput>, Enumerable<TwitterDMUncheckedCreateWithoutDirectToInput>>
    connectOrCreate?: Enumerable<TwitterDMCreateOrConnectWithoutDirectToInput>
    upsert?: Enumerable<TwitterDMUpsertWithWhereUniqueWithoutDirectToInput>
    createMany?: TwitterDMCreateManyDirectToInputEnvelope
    set?: Enumerable<TwitterDMWhereUniqueInput>
    disconnect?: Enumerable<TwitterDMWhereUniqueInput>
    delete?: Enumerable<TwitterDMWhereUniqueInput>
    connect?: Enumerable<TwitterDMWhereUniqueInput>
    update?: Enumerable<TwitterDMUpdateWithWhereUniqueWithoutDirectToInput>
    updateMany?: Enumerable<TwitterDMUpdateManyWithWhereWithoutDirectToInput>
    deleteMany?: Enumerable<TwitterDMScalarWhereInput>
  }

  export type TwitterUserRelationUncheckedUpdateManyWithoutFollwerNestedInput = {
    create?: XOR<Enumerable<TwitterUserRelationCreateWithoutFollwerInput>, Enumerable<TwitterUserRelationUncheckedCreateWithoutFollwerInput>>
    connectOrCreate?: Enumerable<TwitterUserRelationCreateOrConnectWithoutFollwerInput>
    upsert?: Enumerable<TwitterUserRelationUpsertWithWhereUniqueWithoutFollwerInput>
    createMany?: TwitterUserRelationCreateManyFollwerInputEnvelope
    set?: Enumerable<TwitterUserRelationWhereUniqueInput>
    disconnect?: Enumerable<TwitterUserRelationWhereUniqueInput>
    delete?: Enumerable<TwitterUserRelationWhereUniqueInput>
    connect?: Enumerable<TwitterUserRelationWhereUniqueInput>
    update?: Enumerable<TwitterUserRelationUpdateWithWhereUniqueWithoutFollwerInput>
    updateMany?: Enumerable<TwitterUserRelationUpdateManyWithWhereWithoutFollwerInput>
    deleteMany?: Enumerable<TwitterUserRelationScalarWhereInput>
  }

  export type TwitterUserRelationUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<Enumerable<TwitterUserRelationCreateWithoutFollowingInput>, Enumerable<TwitterUserRelationUncheckedCreateWithoutFollowingInput>>
    connectOrCreate?: Enumerable<TwitterUserRelationCreateOrConnectWithoutFollowingInput>
    upsert?: Enumerable<TwitterUserRelationUpsertWithWhereUniqueWithoutFollowingInput>
    createMany?: TwitterUserRelationCreateManyFollowingInputEnvelope
    set?: Enumerable<TwitterUserRelationWhereUniqueInput>
    disconnect?: Enumerable<TwitterUserRelationWhereUniqueInput>
    delete?: Enumerable<TwitterUserRelationWhereUniqueInput>
    connect?: Enumerable<TwitterUserRelationWhereUniqueInput>
    update?: Enumerable<TwitterUserRelationUpdateWithWhereUniqueWithoutFollowingInput>
    updateMany?: Enumerable<TwitterUserRelationUpdateManyWithWhereWithoutFollowingInput>
    deleteMany?: Enumerable<TwitterUserRelationScalarWhereInput>
  }

  export type TwitterPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutUserInput>, Enumerable<TwitterPostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TwitterPostCreateManyUserInputEnvelope
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TwitterReplyCreateWithoutUserInput>, Enumerable<TwitterReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TwitterReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TwitterReplyCreateManyUserInputEnvelope
    set?: Enumerable<TwitterReplyWhereUniqueInput>
    disconnect?: Enumerable<TwitterReplyWhereUniqueInput>
    delete?: Enumerable<TwitterReplyWhereUniqueInput>
    connect?: Enumerable<TwitterReplyWhereUniqueInput>
    update?: Enumerable<TwitterReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TwitterReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TwitterReplyScalarWhereInput>
  }

  export type TwitterDMUncheckedUpdateManyWithoutDirectFromNestedInput = {
    create?: XOR<Enumerable<TwitterDMCreateWithoutDirectFromInput>, Enumerable<TwitterDMUncheckedCreateWithoutDirectFromInput>>
    connectOrCreate?: Enumerable<TwitterDMCreateOrConnectWithoutDirectFromInput>
    upsert?: Enumerable<TwitterDMUpsertWithWhereUniqueWithoutDirectFromInput>
    createMany?: TwitterDMCreateManyDirectFromInputEnvelope
    set?: Enumerable<TwitterDMWhereUniqueInput>
    disconnect?: Enumerable<TwitterDMWhereUniqueInput>
    delete?: Enumerable<TwitterDMWhereUniqueInput>
    connect?: Enumerable<TwitterDMWhereUniqueInput>
    update?: Enumerable<TwitterDMUpdateWithWhereUniqueWithoutDirectFromInput>
    updateMany?: Enumerable<TwitterDMUpdateManyWithWhereWithoutDirectFromInput>
    deleteMany?: Enumerable<TwitterDMScalarWhereInput>
  }

  export type TwitterDMUncheckedUpdateManyWithoutDirectToNestedInput = {
    create?: XOR<Enumerable<TwitterDMCreateWithoutDirectToInput>, Enumerable<TwitterDMUncheckedCreateWithoutDirectToInput>>
    connectOrCreate?: Enumerable<TwitterDMCreateOrConnectWithoutDirectToInput>
    upsert?: Enumerable<TwitterDMUpsertWithWhereUniqueWithoutDirectToInput>
    createMany?: TwitterDMCreateManyDirectToInputEnvelope
    set?: Enumerable<TwitterDMWhereUniqueInput>
    disconnect?: Enumerable<TwitterDMWhereUniqueInput>
    delete?: Enumerable<TwitterDMWhereUniqueInput>
    connect?: Enumerable<TwitterDMWhereUniqueInput>
    update?: Enumerable<TwitterDMUpdateWithWhereUniqueWithoutDirectToInput>
    updateMany?: Enumerable<TwitterDMUpdateManyWithWhereWithoutDirectToInput>
    deleteMany?: Enumerable<TwitterDMScalarWhereInput>
  }

  export type TwitterUserCreateNestedOneWithoutFollwerInput = {
    create?: XOR<TwitterUserCreateWithoutFollwerInput, TwitterUserUncheckedCreateWithoutFollwerInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutFollwerInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterUserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<TwitterUserCreateWithoutFollowingInput, TwitterUserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutFollowingInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterUserUpdateOneRequiredWithoutFollwerNestedInput = {
    create?: XOR<TwitterUserCreateWithoutFollwerInput, TwitterUserUncheckedCreateWithoutFollwerInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutFollwerInput
    upsert?: TwitterUserUpsertWithoutFollwerInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutFollwerInput, TwitterUserUncheckedUpdateWithoutFollwerInput>
  }

  export type TwitterUserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<TwitterUserCreateWithoutFollowingInput, TwitterUserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutFollowingInput
    upsert?: TwitterUserUpsertWithoutFollowingInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutFollowingInput, TwitterUserUncheckedUpdateWithoutFollowingInput>
  }

  export type TwitterUserCreateNestedOneWithoutTwitterPostInput = {
    create?: XOR<TwitterUserCreateWithoutTwitterPostInput, TwitterUserUncheckedCreateWithoutTwitterPostInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutTwitterPostInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterReplyCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<TwitterReplyCreateWithoutPostInput>, Enumerable<TwitterReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<TwitterReplyCreateOrConnectWithoutPostInput>
    createMany?: TwitterReplyCreateManyPostInputEnvelope
    connect?: Enumerable<TwitterReplyWhereUniqueInput>
  }

  export type TwitterHashTagCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<TwitterHashTagCreateWithoutPostsInput>, Enumerable<TwitterHashTagUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TwitterHashTagCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<TwitterHashTagWhereUniqueInput>
  }

  export type TwitterReplyUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<TwitterReplyCreateWithoutPostInput>, Enumerable<TwitterReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<TwitterReplyCreateOrConnectWithoutPostInput>
    createMany?: TwitterReplyCreateManyPostInputEnvelope
    connect?: Enumerable<TwitterReplyWhereUniqueInput>
  }

  export type TwitterHashTagUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<TwitterHashTagCreateWithoutPostsInput>, Enumerable<TwitterHashTagUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TwitterHashTagCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<TwitterHashTagWhereUniqueInput>
  }

  export type TwitterUserUpdateOneRequiredWithoutTwitterPostNestedInput = {
    create?: XOR<TwitterUserCreateWithoutTwitterPostInput, TwitterUserUncheckedCreateWithoutTwitterPostInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutTwitterPostInput
    upsert?: TwitterUserUpsertWithoutTwitterPostInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutTwitterPostInput, TwitterUserUncheckedUpdateWithoutTwitterPostInput>
  }

  export type TwitterReplyUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<TwitterReplyCreateWithoutPostInput>, Enumerable<TwitterReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<TwitterReplyCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<TwitterReplyUpsertWithWhereUniqueWithoutPostInput>
    createMany?: TwitterReplyCreateManyPostInputEnvelope
    set?: Enumerable<TwitterReplyWhereUniqueInput>
    disconnect?: Enumerable<TwitterReplyWhereUniqueInput>
    delete?: Enumerable<TwitterReplyWhereUniqueInput>
    connect?: Enumerable<TwitterReplyWhereUniqueInput>
    update?: Enumerable<TwitterReplyUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<TwitterReplyUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<TwitterReplyScalarWhereInput>
  }

  export type TwitterHashTagUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<TwitterHashTagCreateWithoutPostsInput>, Enumerable<TwitterHashTagUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TwitterHashTagCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<TwitterHashTagUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<TwitterHashTagWhereUniqueInput>
    disconnect?: Enumerable<TwitterHashTagWhereUniqueInput>
    delete?: Enumerable<TwitterHashTagWhereUniqueInput>
    connect?: Enumerable<TwitterHashTagWhereUniqueInput>
    update?: Enumerable<TwitterHashTagUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<TwitterHashTagUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<TwitterHashTagScalarWhereInput>
  }

  export type TwitterReplyUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<TwitterReplyCreateWithoutPostInput>, Enumerable<TwitterReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<TwitterReplyCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<TwitterReplyUpsertWithWhereUniqueWithoutPostInput>
    createMany?: TwitterReplyCreateManyPostInputEnvelope
    set?: Enumerable<TwitterReplyWhereUniqueInput>
    disconnect?: Enumerable<TwitterReplyWhereUniqueInput>
    delete?: Enumerable<TwitterReplyWhereUniqueInput>
    connect?: Enumerable<TwitterReplyWhereUniqueInput>
    update?: Enumerable<TwitterReplyUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<TwitterReplyUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<TwitterReplyScalarWhereInput>
  }

  export type TwitterHashTagUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<TwitterHashTagCreateWithoutPostsInput>, Enumerable<TwitterHashTagUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TwitterHashTagCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<TwitterHashTagUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<TwitterHashTagWhereUniqueInput>
    disconnect?: Enumerable<TwitterHashTagWhereUniqueInput>
    delete?: Enumerable<TwitterHashTagWhereUniqueInput>
    connect?: Enumerable<TwitterHashTagWhereUniqueInput>
    update?: Enumerable<TwitterHashTagUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<TwitterHashTagUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<TwitterHashTagScalarWhereInput>
  }

  export type TwitterPostCreateNestedManyWithoutHashTagsInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutHashTagsInput>, Enumerable<TwitterPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutHashTagsInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterPostUncheckedCreateNestedManyWithoutHashTagsInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutHashTagsInput>, Enumerable<TwitterPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutHashTagsInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterPostUpdateManyWithoutHashTagsNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutHashTagsInput>, Enumerable<TwitterPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutHashTagsInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutHashTagsInput>
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutHashTagsInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutHashTagsInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterPostUncheckedUpdateManyWithoutHashTagsNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutHashTagsInput>, Enumerable<TwitterPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutHashTagsInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutHashTagsInput>
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutHashTagsInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutHashTagsInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterPostCreateNestedOneWithoutTwitterReplyInput = {
    create?: XOR<TwitterPostCreateWithoutTwitterReplyInput, TwitterPostUncheckedCreateWithoutTwitterReplyInput>
    connectOrCreate?: TwitterPostCreateOrConnectWithoutTwitterReplyInput
    connect?: TwitterPostWhereUniqueInput
  }

  export type TwitterUserCreateNestedOneWithoutTwitterReplyInput = {
    create?: XOR<TwitterUserCreateWithoutTwitterReplyInput, TwitterUserUncheckedCreateWithoutTwitterReplyInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutTwitterReplyInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterPostUpdateOneRequiredWithoutTwitterReplyNestedInput = {
    create?: XOR<TwitterPostCreateWithoutTwitterReplyInput, TwitterPostUncheckedCreateWithoutTwitterReplyInput>
    connectOrCreate?: TwitterPostCreateOrConnectWithoutTwitterReplyInput
    upsert?: TwitterPostUpsertWithoutTwitterReplyInput
    connect?: TwitterPostWhereUniqueInput
    update?: XOR<TwitterPostUpdateWithoutTwitterReplyInput, TwitterPostUncheckedUpdateWithoutTwitterReplyInput>
  }

  export type TwitterUserUpdateOneRequiredWithoutTwitterReplyNestedInput = {
    create?: XOR<TwitterUserCreateWithoutTwitterReplyInput, TwitterUserUncheckedCreateWithoutTwitterReplyInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutTwitterReplyInput
    upsert?: TwitterUserUpsertWithoutTwitterReplyInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutTwitterReplyInput, TwitterUserUncheckedUpdateWithoutTwitterReplyInput>
  }

  export type TwitterUserCreateNestedOneWithoutDirectFromInput = {
    create?: XOR<TwitterUserCreateWithoutDirectFromInput, TwitterUserUncheckedCreateWithoutDirectFromInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutDirectFromInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterUserCreateNestedOneWithoutDirectToInput = {
    create?: XOR<TwitterUserCreateWithoutDirectToInput, TwitterUserUncheckedCreateWithoutDirectToInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutDirectToInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterUserUpdateOneRequiredWithoutDirectFromNestedInput = {
    create?: XOR<TwitterUserCreateWithoutDirectFromInput, TwitterUserUncheckedCreateWithoutDirectFromInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutDirectFromInput
    upsert?: TwitterUserUpsertWithoutDirectFromInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutDirectFromInput, TwitterUserUncheckedUpdateWithoutDirectFromInput>
  }

  export type TwitterUserUpdateOneRequiredWithoutDirectToNestedInput = {
    create?: XOR<TwitterUserCreateWithoutDirectToInput, TwitterUserUncheckedCreateWithoutDirectToInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutDirectToInput
    upsert?: TwitterUserUpsertWithoutDirectToInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutDirectToInput, TwitterUserUncheckedUpdateWithoutDirectToInput>
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
    order?: BinKitchenOrderCreateNestedOneWithoutOrderItemsInput
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
    data: XOR<BinKitchenOrderItemUpdateManyMutationInput, BinKitchenOrderItemUncheckedUpdateManyWithoutOrderItemsInput>
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

  export type BinKitchenOrderCreateWithoutOrderItemsInput = {
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderCreateOrConnectWithoutOrderItemsInput = {
    where: BinKitchenOrderWhereUniqueInput
    create: XOR<BinKitchenOrderCreateWithoutOrderItemsInput, BinKitchenOrderUncheckedCreateWithoutOrderItemsInput>
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

  export type BinKitchenOrderUpsertWithoutOrderItemsInput = {
    update: XOR<BinKitchenOrderUpdateWithoutOrderItemsInput, BinKitchenOrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<BinKitchenOrderCreateWithoutOrderItemsInput, BinKitchenOrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type BinKitchenOrderUpdateWithoutOrderItemsInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizCreateWithoutCategoryInput = {
    quiz: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answerId: number
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutCategoryInput = {
    id?: number
    quiz: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
    answerId: number
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizCreateOrConnectWithoutCategoryInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutCategoryInput, TriviaQuizUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuizCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaQuizCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundCreateWithoutCategoryInput = {
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateWithoutCategoryInput = {
    id?: number
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundCreateOrConnectWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutCategoryInput, TriviaRoundUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaRoundCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaRoundCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuizUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TriviaQuizWhereUniqueInput
    update: XOR<TriviaQuizUpdateWithoutCategoryInput, TriviaQuizUncheckedUpdateWithoutCategoryInput>
    create: XOR<TriviaQuizCreateWithoutCategoryInput, TriviaQuizUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuizUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TriviaQuizWhereUniqueInput
    data: XOR<TriviaQuizUpdateWithoutCategoryInput, TriviaQuizUncheckedUpdateWithoutCategoryInput>
  }

  export type TriviaQuizUpdateManyWithWhereWithoutCategoryInput = {
    where: TriviaQuizScalarWhereInput
    data: XOR<TriviaQuizUpdateManyMutationInput, TriviaQuizUncheckedUpdateManyWithoutTriviaQuizesInput>
  }

  export type TriviaQuizScalarWhereInput = {
    AND?: Enumerable<TriviaQuizScalarWhereInput>
    OR?: Enumerable<TriviaQuizScalarWhereInput>
    NOT?: Enumerable<TriviaQuizScalarWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    categoryName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    answerId?: IntFilter | number
  }

  export type TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    update: XOR<TriviaRoundUpdateWithoutCategoryInput, TriviaRoundUncheckedUpdateWithoutCategoryInput>
    create: XOR<TriviaRoundCreateWithoutCategoryInput, TriviaRoundUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    data: XOR<TriviaRoundUpdateWithoutCategoryInput, TriviaRoundUncheckedUpdateWithoutCategoryInput>
  }

  export type TriviaRoundUpdateManyWithWhereWithoutCategoryInput = {
    where: TriviaRoundScalarWhereInput
    data: XOR<TriviaRoundUpdateManyMutationInput, TriviaRoundUncheckedUpdateManyWithoutRoundsInput>
  }

  export type TriviaRoundScalarWhereInput = {
    AND?: Enumerable<TriviaRoundScalarWhereInput>
    OR?: Enumerable<TriviaRoundScalarWhereInput>
    NOT?: Enumerable<TriviaRoundScalarWhereInput>
    id?: IntFilter | number
    round?: StringFilter | string
    categoryId?: IntFilter | number
    score?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaCategoryCreateWithoutTriviaQuizesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
  }

  export type TriviaChoiceCreateWithoutQuizInput = {
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUncheckedCreateWithoutQuizInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceCreateOrConnectWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutQuizInput, TriviaChoiceUncheckedCreateWithoutQuizInput>
  }

  export type TriviaChoiceCreateManyQuizInputEnvelope = {
    data: Enumerable<TriviaChoiceCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundQuizCreateWithoutQuizInput = {
    round?: TriviaRoundCreateNestedOneWithoutRoundQuizesInput
    userChoice?: TriviaChoiceCreateNestedOneWithoutRoundQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateWithoutQuizInput = {
    id?: number
    roundId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateOrConnectWithoutQuizInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutQuizInput, TriviaRoundQuizUncheckedCreateWithoutQuizInput>
  }

  export type TriviaRoundQuizCreateManyQuizInputEnvelope = {
    data: Enumerable<TriviaRoundQuizCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryUpsertWithoutTriviaQuizesInput = {
    update: XOR<TriviaCategoryUpdateWithoutTriviaQuizesInput, TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput>
    create: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
  }

  export type TriviaCategoryUpdateWithoutTriviaQuizesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    update: XOR<TriviaChoiceUpdateWithoutQuizInput, TriviaChoiceUncheckedUpdateWithoutQuizInput>
    create: XOR<TriviaChoiceCreateWithoutQuizInput, TriviaChoiceUncheckedCreateWithoutQuizInput>
  }

  export type TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    data: XOR<TriviaChoiceUpdateWithoutQuizInput, TriviaChoiceUncheckedUpdateWithoutQuizInput>
  }

  export type TriviaChoiceUpdateManyWithWhereWithoutQuizInput = {
    where: TriviaChoiceScalarWhereInput
    data: XOR<TriviaChoiceUpdateManyMutationInput, TriviaChoiceUncheckedUpdateManyWithoutChoicesInput>
  }

  export type TriviaChoiceScalarWhereInput = {
    AND?: Enumerable<TriviaChoiceScalarWhereInput>
    OR?: Enumerable<TriviaChoiceScalarWhereInput>
    NOT?: Enumerable<TriviaChoiceScalarWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    quizId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaRoundQuizUpsertWithWhereUniqueWithoutQuizInput = {
    where: TriviaRoundQuizWhereUniqueInput
    update: XOR<TriviaRoundQuizUpdateWithoutQuizInput, TriviaRoundQuizUncheckedUpdateWithoutQuizInput>
    create: XOR<TriviaRoundQuizCreateWithoutQuizInput, TriviaRoundQuizUncheckedCreateWithoutQuizInput>
  }

  export type TriviaRoundQuizUpdateWithWhereUniqueWithoutQuizInput = {
    where: TriviaRoundQuizWhereUniqueInput
    data: XOR<TriviaRoundQuizUpdateWithoutQuizInput, TriviaRoundQuizUncheckedUpdateWithoutQuizInput>
  }

  export type TriviaRoundQuizUpdateManyWithWhereWithoutQuizInput = {
    where: TriviaRoundQuizScalarWhereInput
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyWithoutRoundQuizesInput>
  }

  export type TriviaRoundQuizScalarWhereInput = {
    AND?: Enumerable<TriviaRoundQuizScalarWhereInput>
    OR?: Enumerable<TriviaRoundQuizScalarWhereInput>
    NOT?: Enumerable<TriviaRoundQuizScalarWhereInput>
    id?: IntFilter | number
    roundId?: IntFilter | number
    quizId?: IntFilter | number
    userChoiceId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaQuizCreateWithoutChoicesInput = {
    quiz: string
    category?: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    answerId: number
    roundQuizes?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutChoicesInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerId: number
    roundQuizes?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizCreateOrConnectWithoutChoicesInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaRoundQuizCreateWithoutUserChoiceInput = {
    round?: TriviaRoundCreateNestedOneWithoutRoundQuizesInput
    quiz?: TriviaQuizCreateNestedOneWithoutRoundQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput = {
    id?: number
    roundId: number
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateOrConnectWithoutUserChoiceInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutUserChoiceInput, TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuizCreateManyUserChoiceInputEnvelope = {
    data: Enumerable<TriviaRoundQuizCreateManyUserChoiceInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuizUpsertWithoutChoicesInput = {
    update: XOR<TriviaQuizUpdateWithoutChoicesInput, TriviaQuizUncheckedUpdateWithoutChoicesInput>
    create: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaQuizUpdateWithoutChoicesInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaRoundQuizUpsertWithWhereUniqueWithoutUserChoiceInput = {
    where: TriviaRoundQuizWhereUniqueInput
    update: XOR<TriviaRoundQuizUpdateWithoutUserChoiceInput, TriviaRoundQuizUncheckedUpdateWithoutUserChoiceInput>
    create: XOR<TriviaRoundQuizCreateWithoutUserChoiceInput, TriviaRoundQuizUncheckedCreateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuizUpdateWithWhereUniqueWithoutUserChoiceInput = {
    where: TriviaRoundQuizWhereUniqueInput
    data: XOR<TriviaRoundQuizUpdateWithoutUserChoiceInput, TriviaRoundQuizUncheckedUpdateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuizUpdateManyWithWhereWithoutUserChoiceInput = {
    where: TriviaRoundQuizScalarWhereInput
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyWithoutRoundQuizesInput>
  }

  export type TriviaCategoryCreateWithoutRoundsInput = {
    name: string
    triviaQuizes?: TriviaQuizCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaCategoryUncheckedCreateWithoutRoundsInput = {
    id?: number
    name: string
    triviaQuizes?: TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaCategoryCreateOrConnectWithoutRoundsInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaRoundQuizCreateWithoutRoundInput = {
    quiz?: TriviaQuizCreateNestedOneWithoutRoundQuizesInput
    userChoice?: TriviaChoiceCreateNestedOneWithoutRoundQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateWithoutRoundInput = {
    id?: number
    quizId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateOrConnectWithoutRoundInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutRoundInput, TriviaRoundQuizUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuizCreateManyRoundInputEnvelope = {
    data: Enumerable<TriviaRoundQuizCreateManyRoundInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryUpsertWithoutRoundsInput = {
    update: XOR<TriviaCategoryUpdateWithoutRoundsInput, TriviaCategoryUncheckedUpdateWithoutRoundsInput>
    create: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaCategoryUpdateWithoutRoundsInput = {
    name?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaCategoryUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUpsertWithWhereUniqueWithoutRoundInput = {
    where: TriviaRoundQuizWhereUniqueInput
    update: XOR<TriviaRoundQuizUpdateWithoutRoundInput, TriviaRoundQuizUncheckedUpdateWithoutRoundInput>
    create: XOR<TriviaRoundQuizCreateWithoutRoundInput, TriviaRoundQuizUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuizUpdateWithWhereUniqueWithoutRoundInput = {
    where: TriviaRoundQuizWhereUniqueInput
    data: XOR<TriviaRoundQuizUpdateWithoutRoundInput, TriviaRoundQuizUncheckedUpdateWithoutRoundInput>
  }

  export type TriviaRoundQuizUpdateManyWithWhereWithoutRoundInput = {
    where: TriviaRoundQuizScalarWhereInput
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyWithoutRoundQuizesInput>
  }

  export type TriviaRoundCreateWithoutRoundQuizesInput = {
    round: string
    category?: TriviaCategoryCreateNestedOneWithoutRoundsInput
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundUncheckedCreateWithoutRoundQuizesInput = {
    id?: number
    round: string
    categoryId: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundCreateOrConnectWithoutRoundQuizesInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutRoundQuizesInput, TriviaRoundUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaQuizCreateWithoutRoundQuizesInput = {
    quiz: string
    category?: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answerId: number
  }

  export type TriviaQuizUncheckedCreateWithoutRoundQuizesInput = {
    id?: number
    quiz: string
    categoryName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
    answerId: number
  }

  export type TriviaQuizCreateOrConnectWithoutRoundQuizesInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutRoundQuizesInput, TriviaQuizUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaChoiceCreateWithoutRoundQuizesInput = {
    choice: string
    quiz?: TriviaQuizCreateNestedOneWithoutChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaChoiceUncheckedCreateWithoutRoundQuizesInput = {
    id?: number
    choice: string
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaChoiceCreateOrConnectWithoutRoundQuizesInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutRoundQuizesInput, TriviaChoiceUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaRoundUpsertWithoutRoundQuizesInput = {
    update: XOR<TriviaRoundUpdateWithoutRoundQuizesInput, TriviaRoundUncheckedUpdateWithoutRoundQuizesInput>
    create: XOR<TriviaRoundCreateWithoutRoundQuizesInput, TriviaRoundUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaRoundUpdateWithoutRoundQuizesInput = {
    round?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutRoundsNestedInput
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateWithoutRoundQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    round?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizUpsertWithoutRoundQuizesInput = {
    update: XOR<TriviaQuizUpdateWithoutRoundQuizesInput, TriviaQuizUncheckedUpdateWithoutRoundQuizesInput>
    create: XOR<TriviaQuizCreateWithoutRoundQuizesInput, TriviaQuizUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaQuizUpdateWithoutRoundQuizesInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneWithoutTriviaQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaQuizUncheckedUpdateWithoutRoundQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaChoiceUpsertWithoutRoundQuizesInput = {
    update: XOR<TriviaChoiceUpdateWithoutRoundQuizesInput, TriviaChoiceUncheckedUpdateWithoutRoundQuizesInput>
    create: XOR<TriviaChoiceCreateWithoutRoundQuizesInput, TriviaChoiceUncheckedCreateWithoutRoundQuizesInput>
  }

  export type TriviaChoiceUpdateWithoutRoundQuizesInput = {
    choice?: StringFieldUpdateOperationsInput | string
    quiz?: TriviaQuizUpdateOneWithoutChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaChoiceUncheckedUpdateWithoutRoundQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationCreateWithoutFollwerInput = {
    following: TwitterUserCreateNestedOneWithoutFollowingInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationUncheckedCreateWithoutFollwerInput = {
    id?: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationCreateOrConnectWithoutFollwerInput = {
    where: TwitterUserRelationWhereUniqueInput
    create: XOR<TwitterUserRelationCreateWithoutFollwerInput, TwitterUserRelationUncheckedCreateWithoutFollwerInput>
  }

  export type TwitterUserRelationCreateManyFollwerInputEnvelope = {
    data: Enumerable<TwitterUserRelationCreateManyFollwerInput>
    skipDuplicates?: boolean
  }

  export type TwitterUserRelationCreateWithoutFollowingInput = {
    follwer: TwitterUserCreateNestedOneWithoutFollwerInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationUncheckedCreateWithoutFollowingInput = {
    id?: number
    followerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationCreateOrConnectWithoutFollowingInput = {
    where: TwitterUserRelationWhereUniqueInput
    create: XOR<TwitterUserRelationCreateWithoutFollowingInput, TwitterUserRelationUncheckedCreateWithoutFollowingInput>
  }

  export type TwitterUserRelationCreateManyFollowingInputEnvelope = {
    data: Enumerable<TwitterUserRelationCreateManyFollowingInput>
    skipDuplicates?: boolean
  }

  export type TwitterPostCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TwitterReply?: TwitterReplyCreateNestedManyWithoutPostInput
    hashTags?: TwitterHashTagCreateNestedManyWithoutPostsInput
  }

  export type TwitterPostUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutPostInput
    hashTags?: TwitterHashTagUncheckedCreateNestedManyWithoutPostsInput
  }

  export type TwitterPostCreateOrConnectWithoutUserInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutUserInput, TwitterPostUncheckedCreateWithoutUserInput>
  }

  export type TwitterPostCreateManyUserInputEnvelope = {
    data: Enumerable<TwitterPostCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TwitterReplyCreateWithoutUserInput = {
    message: string
    post: TwitterPostCreateNestedOneWithoutTwitterReplyInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyCreateOrConnectWithoutUserInput = {
    where: TwitterReplyWhereUniqueInput
    create: XOR<TwitterReplyCreateWithoutUserInput, TwitterReplyUncheckedCreateWithoutUserInput>
  }

  export type TwitterReplyCreateManyUserInputEnvelope = {
    data: Enumerable<TwitterReplyCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TwitterDMCreateWithoutDirectFromInput = {
    message: string
    directTo: TwitterUserCreateNestedOneWithoutDirectToInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMUncheckedCreateWithoutDirectFromInput = {
    id?: number
    message: string
    directToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMCreateOrConnectWithoutDirectFromInput = {
    where: TwitterDMWhereUniqueInput
    create: XOR<TwitterDMCreateWithoutDirectFromInput, TwitterDMUncheckedCreateWithoutDirectFromInput>
  }

  export type TwitterDMCreateManyDirectFromInputEnvelope = {
    data: Enumerable<TwitterDMCreateManyDirectFromInput>
    skipDuplicates?: boolean
  }

  export type TwitterDMCreateWithoutDirectToInput = {
    message: string
    directFrom: TwitterUserCreateNestedOneWithoutDirectFromInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMUncheckedCreateWithoutDirectToInput = {
    id?: number
    message: string
    directFromId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMCreateOrConnectWithoutDirectToInput = {
    where: TwitterDMWhereUniqueInput
    create: XOR<TwitterDMCreateWithoutDirectToInput, TwitterDMUncheckedCreateWithoutDirectToInput>
  }

  export type TwitterDMCreateManyDirectToInputEnvelope = {
    data: Enumerable<TwitterDMCreateManyDirectToInput>
    skipDuplicates?: boolean
  }

  export type TwitterUserRelationUpsertWithWhereUniqueWithoutFollwerInput = {
    where: TwitterUserRelationWhereUniqueInput
    update: XOR<TwitterUserRelationUpdateWithoutFollwerInput, TwitterUserRelationUncheckedUpdateWithoutFollwerInput>
    create: XOR<TwitterUserRelationCreateWithoutFollwerInput, TwitterUserRelationUncheckedCreateWithoutFollwerInput>
  }

  export type TwitterUserRelationUpdateWithWhereUniqueWithoutFollwerInput = {
    where: TwitterUserRelationWhereUniqueInput
    data: XOR<TwitterUserRelationUpdateWithoutFollwerInput, TwitterUserRelationUncheckedUpdateWithoutFollwerInput>
  }

  export type TwitterUserRelationUpdateManyWithWhereWithoutFollwerInput = {
    where: TwitterUserRelationScalarWhereInput
    data: XOR<TwitterUserRelationUpdateManyMutationInput, TwitterUserRelationUncheckedUpdateManyWithoutFollwerInput>
  }

  export type TwitterUserRelationScalarWhereInput = {
    AND?: Enumerable<TwitterUserRelationScalarWhereInput>
    OR?: Enumerable<TwitterUserRelationScalarWhereInput>
    NOT?: Enumerable<TwitterUserRelationScalarWhereInput>
    id?: IntFilter | number
    followerId?: IntFilter | number
    followingId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterUserRelationUpsertWithWhereUniqueWithoutFollowingInput = {
    where: TwitterUserRelationWhereUniqueInput
    update: XOR<TwitterUserRelationUpdateWithoutFollowingInput, TwitterUserRelationUncheckedUpdateWithoutFollowingInput>
    create: XOR<TwitterUserRelationCreateWithoutFollowingInput, TwitterUserRelationUncheckedCreateWithoutFollowingInput>
  }

  export type TwitterUserRelationUpdateWithWhereUniqueWithoutFollowingInput = {
    where: TwitterUserRelationWhereUniqueInput
    data: XOR<TwitterUserRelationUpdateWithoutFollowingInput, TwitterUserRelationUncheckedUpdateWithoutFollowingInput>
  }

  export type TwitterUserRelationUpdateManyWithWhereWithoutFollowingInput = {
    where: TwitterUserRelationScalarWhereInput
    data: XOR<TwitterUserRelationUpdateManyMutationInput, TwitterUserRelationUncheckedUpdateManyWithoutFollowingInput>
  }

  export type TwitterPostUpsertWithWhereUniqueWithoutUserInput = {
    where: TwitterPostWhereUniqueInput
    update: XOR<TwitterPostUpdateWithoutUserInput, TwitterPostUncheckedUpdateWithoutUserInput>
    create: XOR<TwitterPostCreateWithoutUserInput, TwitterPostUncheckedCreateWithoutUserInput>
  }

  export type TwitterPostUpdateWithWhereUniqueWithoutUserInput = {
    where: TwitterPostWhereUniqueInput
    data: XOR<TwitterPostUpdateWithoutUserInput, TwitterPostUncheckedUpdateWithoutUserInput>
  }

  export type TwitterPostUpdateManyWithWhereWithoutUserInput = {
    where: TwitterPostScalarWhereInput
    data: XOR<TwitterPostUpdateManyMutationInput, TwitterPostUncheckedUpdateManyWithoutTwitterPostInput>
  }

  export type TwitterPostScalarWhereInput = {
    AND?: Enumerable<TwitterPostScalarWhereInput>
    OR?: Enumerable<TwitterPostScalarWhereInput>
    NOT?: Enumerable<TwitterPostScalarWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    postByUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: TwitterReplyWhereUniqueInput
    update: XOR<TwitterReplyUpdateWithoutUserInput, TwitterReplyUncheckedUpdateWithoutUserInput>
    create: XOR<TwitterReplyCreateWithoutUserInput, TwitterReplyUncheckedCreateWithoutUserInput>
  }

  export type TwitterReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: TwitterReplyWhereUniqueInput
    data: XOR<TwitterReplyUpdateWithoutUserInput, TwitterReplyUncheckedUpdateWithoutUserInput>
  }

  export type TwitterReplyUpdateManyWithWhereWithoutUserInput = {
    where: TwitterReplyScalarWhereInput
    data: XOR<TwitterReplyUpdateManyMutationInput, TwitterReplyUncheckedUpdateManyWithoutTwitterReplyInput>
  }

  export type TwitterReplyScalarWhereInput = {
    AND?: Enumerable<TwitterReplyScalarWhereInput>
    OR?: Enumerable<TwitterReplyScalarWhereInput>
    NOT?: Enumerable<TwitterReplyScalarWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    postId?: IntFilter | number
    postByUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterDMUpsertWithWhereUniqueWithoutDirectFromInput = {
    where: TwitterDMWhereUniqueInput
    update: XOR<TwitterDMUpdateWithoutDirectFromInput, TwitterDMUncheckedUpdateWithoutDirectFromInput>
    create: XOR<TwitterDMCreateWithoutDirectFromInput, TwitterDMUncheckedCreateWithoutDirectFromInput>
  }

  export type TwitterDMUpdateWithWhereUniqueWithoutDirectFromInput = {
    where: TwitterDMWhereUniqueInput
    data: XOR<TwitterDMUpdateWithoutDirectFromInput, TwitterDMUncheckedUpdateWithoutDirectFromInput>
  }

  export type TwitterDMUpdateManyWithWhereWithoutDirectFromInput = {
    where: TwitterDMScalarWhereInput
    data: XOR<TwitterDMUpdateManyMutationInput, TwitterDMUncheckedUpdateManyWithoutDirectFromInput>
  }

  export type TwitterDMScalarWhereInput = {
    AND?: Enumerable<TwitterDMScalarWhereInput>
    OR?: Enumerable<TwitterDMScalarWhereInput>
    NOT?: Enumerable<TwitterDMScalarWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    directFromId?: IntFilter | number
    directToId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterDMUpsertWithWhereUniqueWithoutDirectToInput = {
    where: TwitterDMWhereUniqueInput
    update: XOR<TwitterDMUpdateWithoutDirectToInput, TwitterDMUncheckedUpdateWithoutDirectToInput>
    create: XOR<TwitterDMCreateWithoutDirectToInput, TwitterDMUncheckedCreateWithoutDirectToInput>
  }

  export type TwitterDMUpdateWithWhereUniqueWithoutDirectToInput = {
    where: TwitterDMWhereUniqueInput
    data: XOR<TwitterDMUpdateWithoutDirectToInput, TwitterDMUncheckedUpdateWithoutDirectToInput>
  }

  export type TwitterDMUpdateManyWithWhereWithoutDirectToInput = {
    where: TwitterDMScalarWhereInput
    data: XOR<TwitterDMUpdateManyMutationInput, TwitterDMUncheckedUpdateManyWithoutDirectToInput>
  }

  export type TwitterUserCreateWithoutFollwerInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: TwitterUserRelationCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserUncheckedCreateWithoutFollwerInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    following?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMUncheckedCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMUncheckedCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserCreateOrConnectWithoutFollwerInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutFollwerInput, TwitterUserUncheckedCreateWithoutFollwerInput>
  }

  export type TwitterUserCreateWithoutFollowingInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationCreateNestedManyWithoutFollwerInput
    TwitterPost?: TwitterPostCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserUncheckedCreateWithoutFollowingInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollwerInput
    TwitterPost?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMUncheckedCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMUncheckedCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserCreateOrConnectWithoutFollowingInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutFollowingInput, TwitterUserUncheckedCreateWithoutFollowingInput>
  }

  export type TwitterUserUpsertWithoutFollwerInput = {
    update: XOR<TwitterUserUpdateWithoutFollwerInput, TwitterUserUncheckedUpdateWithoutFollwerInput>
    create: XOR<TwitterUserCreateWithoutFollwerInput, TwitterUserUncheckedCreateWithoutFollwerInput>
  }

  export type TwitterUserUpdateWithoutFollwerInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: TwitterUserRelationUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutFollwerInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: TwitterUserRelationUncheckedUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUncheckedUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUncheckedUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserUpsertWithoutFollowingInput = {
    update: XOR<TwitterUserUpdateWithoutFollowingInput, TwitterUserUncheckedUpdateWithoutFollowingInput>
    create: XOR<TwitterUserCreateWithoutFollowingInput, TwitterUserUncheckedCreateWithoutFollowingInput>
  }

  export type TwitterUserUpdateWithoutFollowingInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUpdateManyWithoutFollwerNestedInput
    TwitterPost?: TwitterPostUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUncheckedUpdateManyWithoutFollwerNestedInput
    TwitterPost?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUncheckedUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUncheckedUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserCreateWithoutTwitterPostInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationCreateNestedManyWithoutFollowingInput
    TwitterReply?: TwitterReplyCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserUncheckedCreateWithoutTwitterPostInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollowingInput
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMUncheckedCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMUncheckedCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserCreateOrConnectWithoutTwitterPostInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutTwitterPostInput, TwitterUserUncheckedCreateWithoutTwitterPostInput>
  }

  export type TwitterReplyCreateWithoutPostInput = {
    message: string
    user: TwitterUserCreateNestedOneWithoutTwitterReplyInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyUncheckedCreateWithoutPostInput = {
    id?: number
    message: string
    postByUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyCreateOrConnectWithoutPostInput = {
    where: TwitterReplyWhereUniqueInput
    create: XOR<TwitterReplyCreateWithoutPostInput, TwitterReplyUncheckedCreateWithoutPostInput>
  }

  export type TwitterReplyCreateManyPostInputEnvelope = {
    data: Enumerable<TwitterReplyCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type TwitterHashTagCreateWithoutPostsInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterHashTagUncheckedCreateWithoutPostsInput = {
    id?: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterHashTagCreateOrConnectWithoutPostsInput = {
    where: TwitterHashTagWhereUniqueInput
    create: XOR<TwitterHashTagCreateWithoutPostsInput, TwitterHashTagUncheckedCreateWithoutPostsInput>
  }

  export type TwitterUserUpsertWithoutTwitterPostInput = {
    update: XOR<TwitterUserUpdateWithoutTwitterPostInput, TwitterUserUncheckedUpdateWithoutTwitterPostInput>
    create: XOR<TwitterUserCreateWithoutTwitterPostInput, TwitterUserUncheckedCreateWithoutTwitterPostInput>
  }

  export type TwitterUserUpdateWithoutTwitterPostInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUpdateManyWithoutFollowingNestedInput
    TwitterReply?: TwitterReplyUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutTwitterPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUncheckedUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUncheckedUpdateManyWithoutFollowingNestedInput
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUncheckedUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUncheckedUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterReplyUpsertWithWhereUniqueWithoutPostInput = {
    where: TwitterReplyWhereUniqueInput
    update: XOR<TwitterReplyUpdateWithoutPostInput, TwitterReplyUncheckedUpdateWithoutPostInput>
    create: XOR<TwitterReplyCreateWithoutPostInput, TwitterReplyUncheckedCreateWithoutPostInput>
  }

  export type TwitterReplyUpdateWithWhereUniqueWithoutPostInput = {
    where: TwitterReplyWhereUniqueInput
    data: XOR<TwitterReplyUpdateWithoutPostInput, TwitterReplyUncheckedUpdateWithoutPostInput>
  }

  export type TwitterReplyUpdateManyWithWhereWithoutPostInput = {
    where: TwitterReplyScalarWhereInput
    data: XOR<TwitterReplyUpdateManyMutationInput, TwitterReplyUncheckedUpdateManyWithoutTwitterReplyInput>
  }

  export type TwitterHashTagUpsertWithWhereUniqueWithoutPostsInput = {
    where: TwitterHashTagWhereUniqueInput
    update: XOR<TwitterHashTagUpdateWithoutPostsInput, TwitterHashTagUncheckedUpdateWithoutPostsInput>
    create: XOR<TwitterHashTagCreateWithoutPostsInput, TwitterHashTagUncheckedCreateWithoutPostsInput>
  }

  export type TwitterHashTagUpdateWithWhereUniqueWithoutPostsInput = {
    where: TwitterHashTagWhereUniqueInput
    data: XOR<TwitterHashTagUpdateWithoutPostsInput, TwitterHashTagUncheckedUpdateWithoutPostsInput>
  }

  export type TwitterHashTagUpdateManyWithWhereWithoutPostsInput = {
    where: TwitterHashTagScalarWhereInput
    data: XOR<TwitterHashTagUpdateManyMutationInput, TwitterHashTagUncheckedUpdateManyWithoutHashTagsInput>
  }

  export type TwitterHashTagScalarWhereInput = {
    AND?: Enumerable<TwitterHashTagScalarWhereInput>
    OR?: Enumerable<TwitterHashTagScalarWhereInput>
    NOT?: Enumerable<TwitterHashTagScalarWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterPostCreateWithoutHashTagsInput = {
    message: string
    user: TwitterUserCreateNestedOneWithoutTwitterPostInput
    createdAt?: Date | string
    updatedAt?: Date | string
    TwitterReply?: TwitterReplyCreateNestedManyWithoutPostInput
  }

  export type TwitterPostUncheckedCreateWithoutHashTagsInput = {
    id?: number
    message: string
    postByUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutPostInput
  }

  export type TwitterPostCreateOrConnectWithoutHashTagsInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutHashTagsInput, TwitterPostUncheckedCreateWithoutHashTagsInput>
  }

  export type TwitterPostUpsertWithWhereUniqueWithoutHashTagsInput = {
    where: TwitterPostWhereUniqueInput
    update: XOR<TwitterPostUpdateWithoutHashTagsInput, TwitterPostUncheckedUpdateWithoutHashTagsInput>
    create: XOR<TwitterPostCreateWithoutHashTagsInput, TwitterPostUncheckedCreateWithoutHashTagsInput>
  }

  export type TwitterPostUpdateWithWhereUniqueWithoutHashTagsInput = {
    where: TwitterPostWhereUniqueInput
    data: XOR<TwitterPostUpdateWithoutHashTagsInput, TwitterPostUncheckedUpdateWithoutHashTagsInput>
  }

  export type TwitterPostUpdateManyWithWhereWithoutHashTagsInput = {
    where: TwitterPostScalarWhereInput
    data: XOR<TwitterPostUpdateManyMutationInput, TwitterPostUncheckedUpdateManyWithoutPostsInput>
  }

  export type TwitterPostCreateWithoutTwitterReplyInput = {
    message: string
    user: TwitterUserCreateNestedOneWithoutTwitterPostInput
    createdAt?: Date | string
    updatedAt?: Date | string
    hashTags?: TwitterHashTagCreateNestedManyWithoutPostsInput
  }

  export type TwitterPostUncheckedCreateWithoutTwitterReplyInput = {
    id?: number
    message: string
    postByUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hashTags?: TwitterHashTagUncheckedCreateNestedManyWithoutPostsInput
  }

  export type TwitterPostCreateOrConnectWithoutTwitterReplyInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutTwitterReplyInput, TwitterPostUncheckedCreateWithoutTwitterReplyInput>
  }

  export type TwitterUserCreateWithoutTwitterReplyInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserUncheckedCreateWithoutTwitterReplyInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMUncheckedCreateNestedManyWithoutDirectFromInput
    directTo?: TwitterDMUncheckedCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserCreateOrConnectWithoutTwitterReplyInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutTwitterReplyInput, TwitterUserUncheckedCreateWithoutTwitterReplyInput>
  }

  export type TwitterPostUpsertWithoutTwitterReplyInput = {
    update: XOR<TwitterPostUpdateWithoutTwitterReplyInput, TwitterPostUncheckedUpdateWithoutTwitterReplyInput>
    create: XOR<TwitterPostCreateWithoutTwitterReplyInput, TwitterPostUncheckedCreateWithoutTwitterReplyInput>
  }

  export type TwitterPostUpdateWithoutTwitterReplyInput = {
    message?: StringFieldUpdateOperationsInput | string
    user?: TwitterUserUpdateOneRequiredWithoutTwitterPostNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashTags?: TwitterHashTagUpdateManyWithoutPostsNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutTwitterReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postByUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashTags?: TwitterHashTagUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type TwitterUserUpsertWithoutTwitterReplyInput = {
    update: XOR<TwitterUserUpdateWithoutTwitterReplyInput, TwitterUserUncheckedUpdateWithoutTwitterReplyInput>
    create: XOR<TwitterUserCreateWithoutTwitterReplyInput, TwitterUserUncheckedCreateWithoutTwitterReplyInput>
  }

  export type TwitterUserUpdateWithoutTwitterReplyInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutTwitterReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUncheckedUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUncheckedUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUncheckedUpdateManyWithoutDirectFromNestedInput
    directTo?: TwitterDMUncheckedUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserCreateWithoutDirectFromInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyCreateNestedManyWithoutUserInput
    directTo?: TwitterDMCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserUncheckedCreateWithoutDirectFromInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutUserInput
    directTo?: TwitterDMUncheckedCreateNestedManyWithoutDirectToInput
  }

  export type TwitterUserCreateOrConnectWithoutDirectFromInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutDirectFromInput, TwitterUserUncheckedCreateWithoutDirectFromInput>
  }

  export type TwitterUserCreateWithoutDirectToInput = {
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMCreateNestedManyWithoutDirectFromInput
  }

  export type TwitterUserUncheckedCreateWithoutDirectToInput = {
    id?: number
    image: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    follwer?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollwerInput
    following?: TwitterUserRelationUncheckedCreateNestedManyWithoutFollowingInput
    TwitterPost?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    TwitterReply?: TwitterReplyUncheckedCreateNestedManyWithoutUserInput
    directFrom?: TwitterDMUncheckedCreateNestedManyWithoutDirectFromInput
  }

  export type TwitterUserCreateOrConnectWithoutDirectToInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutDirectToInput, TwitterUserUncheckedCreateWithoutDirectToInput>
  }

  export type TwitterUserUpsertWithoutDirectFromInput = {
    update: XOR<TwitterUserUpdateWithoutDirectFromInput, TwitterUserUncheckedUpdateWithoutDirectFromInput>
    create: XOR<TwitterUserCreateWithoutDirectFromInput, TwitterUserUncheckedCreateWithoutDirectFromInput>
  }

  export type TwitterUserUpdateWithoutDirectFromInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUpdateManyWithoutUserNestedInput
    directTo?: TwitterDMUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutDirectFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUncheckedUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUncheckedUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutUserNestedInput
    directTo?: TwitterDMUncheckedUpdateManyWithoutDirectToNestedInput
  }

  export type TwitterUserUpsertWithoutDirectToInput = {
    update: XOR<TwitterUserUpdateWithoutDirectToInput, TwitterUserUncheckedUpdateWithoutDirectToInput>
    create: XOR<TwitterUserCreateWithoutDirectToInput, TwitterUserUncheckedCreateWithoutDirectToInput>
  }

  export type TwitterUserUpdateWithoutDirectToInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUpdateManyWithoutDirectFromNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutDirectToInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follwer?: TwitterUserRelationUncheckedUpdateManyWithoutFollwerNestedInput
    following?: TwitterUserRelationUncheckedUpdateManyWithoutFollowingNestedInput
    TwitterPost?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutUserNestedInput
    directFrom?: TwitterDMUncheckedUpdateManyWithoutDirectFromNestedInput
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
    order?: BinKitchenOrderUpdateOneWithoutOrderItemsNestedInput
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

  export type TriviaQuizCreateManyCategoryInput = {
    id?: number
    quiz: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answerId: number
  }

  export type TriviaRoundCreateManyCategoryInput = {
    id?: number
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizUpdateWithoutCategoryInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateManyWithoutTriviaQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answerId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundUpdateWithoutCategoryInput = {
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateManyWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaChoiceCreateManyQuizInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateManyQuizInput = {
    id?: number
    roundId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaChoiceUpdateWithoutQuizInput = {
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuizes?: TriviaRoundQuizUncheckedUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUpdateWithoutQuizInput = {
    round?: TriviaRoundUpdateOneWithoutRoundQuizesNestedInput
    userChoice?: TriviaChoiceUpdateOneWithoutRoundQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutRoundQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateManyUserChoiceInput = {
    id?: number
    roundId: number
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateWithoutUserChoiceInput = {
    round?: TriviaRoundUpdateOneWithoutRoundQuizesNestedInput
    quiz?: TriviaQuizUpdateOneWithoutRoundQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutUserChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateManyRoundInput = {
    id?: number
    quizId: number
    userChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateWithoutRoundInput = {
    quiz?: TriviaQuizUpdateOneWithoutRoundQuizesNestedInput
    userChoice?: TriviaChoiceUpdateOneWithoutRoundQuizesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    userChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationCreateManyFollwerInput = {
    id?: number
    followingId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationCreateManyFollowingInput = {
    id?: number
    followerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterPostCreateManyUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyCreateManyUserInput = {
    id?: number
    message: string
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMCreateManyDirectFromInput = {
    id?: number
    message: string
    directToId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDMCreateManyDirectToInput = {
    id?: number
    message: string
    directFromId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserRelationUpdateWithoutFollwerInput = {
    following?: TwitterUserUpdateOneRequiredWithoutFollowingNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationUncheckedUpdateWithoutFollwerInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationUncheckedUpdateManyWithoutFollwerInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationUpdateWithoutFollowingInput = {
    follwer?: TwitterUserUpdateOneRequiredWithoutFollwerNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationUncheckedUpdateManyWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    followerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TwitterReply?: TwitterReplyUpdateManyWithoutPostNestedInput
    hashTags?: TwitterHashTagUpdateManyWithoutPostsNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutPostNestedInput
    hashTags?: TwitterHashTagUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type TwitterPostUncheckedUpdateManyWithoutTwitterPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    post?: TwitterPostUpdateOneRequiredWithoutTwitterReplyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyUncheckedUpdateManyWithoutTwitterReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMUpdateWithoutDirectFromInput = {
    message?: StringFieldUpdateOperationsInput | string
    directTo?: TwitterUserUpdateOneRequiredWithoutDirectToNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMUncheckedUpdateWithoutDirectFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    directToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMUncheckedUpdateManyWithoutDirectFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    directToId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMUpdateWithoutDirectToInput = {
    message?: StringFieldUpdateOperationsInput | string
    directFrom?: TwitterUserUpdateOneRequiredWithoutDirectFromNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMUncheckedUpdateWithoutDirectToInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    directFromId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDMUncheckedUpdateManyWithoutDirectToInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    directFromId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyCreateManyPostInput = {
    id?: number
    message: string
    postByUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterReplyUpdateWithoutPostInput = {
    message?: StringFieldUpdateOperationsInput | string
    user?: TwitterUserUpdateOneRequiredWithoutTwitterReplyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterReplyUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postByUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashTagUpdateWithoutPostsInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashTagUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashTagUncheckedUpdateManyWithoutHashTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostUpdateWithoutHashTagsInput = {
    message?: StringFieldUpdateOperationsInput | string
    user?: TwitterUserUpdateOneRequiredWithoutTwitterPostNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TwitterReply?: TwitterReplyUpdateManyWithoutPostNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutHashTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postByUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TwitterReply?: TwitterReplyUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TwitterPostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postByUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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