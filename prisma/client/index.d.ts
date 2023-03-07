
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
  name: string
  categoryId: number
  answerId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaQuizChoice
 * 
 */
export type TriviaQuizChoice = {
  id: number
  name: string
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
  score: number
  categoryId: number
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
  playerChooseChoice: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TriviaRoundQuizChoice
 * 
 */
export type TriviaRoundQuizChoice = {
  id: number
  roundQuizId: number
  quizChoiceId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  profileImage: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Following
 * 
 */
export type Following = {
  id: number
  fromUserId: number
  toUserId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  userId: number
  postDetail: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DirectMsg
 * 
 */
export type DirectMsg = {
  id: number
  fromUserId: number
  toUserId: number
  msgDetail: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Hashtag
 * 
 */
export type Hashtag = {
  id: number
  hashtag: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Reply
 * 
 */
export type Reply = {
  id: number
  postId: number
  reply: string
  userId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model PostOnHashtag
 * 
 */
export type PostOnHashtag = {
  id: number
  postId: number
  hashtagId: number
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
   * `prisma.triviaQuizChoice`: Exposes CRUD operations for the **TriviaQuizChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaQuizChoices
    * const triviaQuizChoices = await prisma.triviaQuizChoice.findMany()
    * ```
    */
  get triviaQuizChoice(): Prisma.TriviaQuizChoiceDelegate<GlobalReject>;

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
   * `prisma.triviaRoundQuizChoice`: Exposes CRUD operations for the **TriviaRoundQuizChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaRoundQuizChoices
    * const triviaRoundQuizChoices = await prisma.triviaRoundQuizChoice.findMany()
    * ```
    */
  get triviaRoundQuizChoice(): Prisma.TriviaRoundQuizChoiceDelegate<GlobalReject>;

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
   * `prisma.following`: Exposes CRUD operations for the **Following** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followings
    * const followings = await prisma.following.findMany()
    * ```
    */
  get following(): Prisma.FollowingDelegate<GlobalReject>;

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
   * `prisma.directMsg`: Exposes CRUD operations for the **DirectMsg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectMsgs
    * const directMsgs = await prisma.directMsg.findMany()
    * ```
    */
  get directMsg(): Prisma.DirectMsgDelegate<GlobalReject>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **Hashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtag.findMany()
    * ```
    */
  get hashtag(): Prisma.HashtagDelegate<GlobalReject>;

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
   * `prisma.postOnHashtag`: Exposes CRUD operations for the **PostOnHashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostOnHashtags
    * const postOnHashtags = await prisma.postOnHashtag.findMany()
    * ```
    */
  get postOnHashtag(): Prisma.PostOnHashtagDelegate<GlobalReject>;
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
    TriviaQuizChoice: 'TriviaQuizChoice',
    TriviaRound: 'TriviaRound',
    TriviaRoundQuiz: 'TriviaRoundQuiz',
    TriviaRoundQuizChoice: 'TriviaRoundQuizChoice',
    User: 'User',
    Following: 'Following',
    Post: 'Post',
    DirectMsg: 'DirectMsg',
    Hashtag: 'Hashtag',
    Reply: 'Reply',
    PostOnHashtag: 'PostOnHashtag'
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
    BinKitchenMenu: number
  }

  export type BinKitchenCategoryCountOutputTypeSelect = {
    BinKitchenMenu?: boolean
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
    BinKitchenOrderItem: number
  }

  export type BinKitchenMenuCountOutputTypeSelect = {
    BinKitchenOrderItem?: boolean
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
    BinKitchenOrderItem: number
  }

  export type BinKitchenOrderCountOutputTypeSelect = {
    BinKitchenOrderItem?: boolean
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
    triviaQuiz: number
    triviaRound: number
  }

  export type TriviaCategoryCountOutputTypeSelect = {
    triviaQuiz?: boolean
    triviaRound?: boolean
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
    triviaQuizChoice: number
    triviaRoundQuiz: number
  }

  export type TriviaQuizCountOutputTypeSelect = {
    triviaQuizChoice?: boolean
    triviaRoundQuiz?: boolean
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
   * Count Type TriviaQuizChoiceCountOutputType
   */


  export type TriviaQuizChoiceCountOutputType = {
    triviaRoundQuizChoice: number
  }

  export type TriviaQuizChoiceCountOutputTypeSelect = {
    triviaRoundQuizChoice?: boolean
  }

  export type TriviaQuizChoiceCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaQuizChoiceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuizChoiceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuizChoiceCountOutputTypeArgs)
    ? TriviaQuizChoiceCountOutputType 
    : S extends { select: any } & (TriviaQuizChoiceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaQuizChoiceCountOutputType ? TriviaQuizChoiceCountOutputType[P] : never
  } 
      : TriviaQuizChoiceCountOutputType




  // Custom InputTypes

  /**
   * TriviaQuizChoiceCountOutputType without action
   */
  export type TriviaQuizChoiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoiceCountOutputType
     */
    select?: TriviaQuizChoiceCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaRoundCountOutputType
   */


  export type TriviaRoundCountOutputType = {
    triviaRoundQuiz: number
  }

  export type TriviaRoundCountOutputTypeSelect = {
    triviaRoundQuiz?: boolean
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
   * Count Type TriviaRoundQuizCountOutputType
   */


  export type TriviaRoundQuizCountOutputType = {
    triviaRoundQuizChoice: number
  }

  export type TriviaRoundQuizCountOutputTypeSelect = {
    triviaRoundQuizChoice?: boolean
  }

  export type TriviaRoundQuizCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaRoundQuizCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundQuizCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundQuizCountOutputTypeArgs)
    ? TriviaRoundQuizCountOutputType 
    : S extends { select: any } & (TriviaRoundQuizCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaRoundQuizCountOutputType ? TriviaRoundQuizCountOutputType[P] : never
  } 
      : TriviaRoundQuizCountOutputType




  // Custom InputTypes

  /**
   * TriviaRoundQuizCountOutputType without action
   */
  export type TriviaRoundQuizCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizCountOutputType
     */
    select?: TriviaRoundQuizCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    fromFolowing: number
    toFollowing: number
    post: number
    fromDirectMessage: number
    toDirectMessage: number
    Reply: number
  }

  export type UserCountOutputTypeSelect = {
    fromFolowing?: boolean
    toFollowing?: boolean
    post?: boolean
    fromDirectMessage?: boolean
    toDirectMessage?: boolean
    Reply?: boolean
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
    reply: number
    postOnHashtag: number
  }

  export type PostCountOutputTypeSelect = {
    reply?: boolean
    postOnHashtag?: boolean
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
   * Count Type HashtagCountOutputType
   */


  export type HashtagCountOutputType = {
    postOnHashtag: number
  }

  export type HashtagCountOutputTypeSelect = {
    postOnHashtag?: boolean
  }

  export type HashtagCountOutputTypeGetPayload<S extends boolean | null | undefined | HashtagCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashtagCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HashtagCountOutputTypeArgs)
    ? HashtagCountOutputType 
    : S extends { select: any } & (HashtagCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HashtagCountOutputType ? HashtagCountOutputType[P] : never
  } 
      : HashtagCountOutputType




  // Custom InputTypes

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HashtagCountOutputType
     */
    select?: HashtagCountOutputTypeSelect | null
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
    createdAt?: boolean
    updatedAt?: boolean
    BinKitchenMenu?: boolean | BinKitchenCategory$BinKitchenMenuArgs
    _count?: boolean | BinKitchenCategoryCountOutputTypeArgs
  }


  export type BinKitchenCategoryInclude = {
    BinKitchenMenu?: boolean | BinKitchenCategory$BinKitchenMenuArgs
    _count?: boolean | BinKitchenCategoryCountOutputTypeArgs
  }

  export type BinKitchenCategoryGetPayload<S extends boolean | null | undefined | BinKitchenCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenCategory :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenCategoryArgs | BinKitchenCategoryFindManyArgs)
    ? BinKitchenCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BinKitchenMenu' ? Array < BinKitchenMenuGetPayload<S['include'][P]>>  :
        P extends '_count' ? BinKitchenCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BinKitchenCategoryArgs | BinKitchenCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BinKitchenMenu' ? Array < BinKitchenMenuGetPayload<S['select'][P]>>  :
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

    BinKitchenMenu<T extends BinKitchenCategory$BinKitchenMenuArgs= {}>(args?: Subset<T, BinKitchenCategory$BinKitchenMenuArgs>): Prisma.PrismaPromise<Array<BinKitchenMenuGetPayload<T>>| Null>;

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
   * BinKitchenCategory.BinKitchenMenu
   */
  export type BinKitchenCategory$BinKitchenMenuArgs = {
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
    createdAt?: boolean
    updatedAt?: boolean
    BinKitchenOrderItem?: boolean | BinKitchenMenu$BinKitchenOrderItemArgs
    _count?: boolean | BinKitchenMenuCountOutputTypeArgs
  }


  export type BinKitchenMenuInclude = {
    category?: boolean | BinKitchenCategoryArgs
    BinKitchenOrderItem?: boolean | BinKitchenMenu$BinKitchenOrderItemArgs
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
        P extends 'BinKitchenOrderItem' ? Array < BinKitchenOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? BinKitchenMenuCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BinKitchenMenuArgs | BinKitchenMenuFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? BinKitchenCategoryGetPayload<S['select'][P]> | null :
        P extends 'BinKitchenOrderItem' ? Array < BinKitchenOrderItemGetPayload<S['select'][P]>>  :
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

    BinKitchenOrderItem<T extends BinKitchenMenu$BinKitchenOrderItemArgs= {}>(args?: Subset<T, BinKitchenMenu$BinKitchenOrderItemArgs>): Prisma.PrismaPromise<Array<BinKitchenOrderItemGetPayload<T>>| Null>;

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
   * BinKitchenMenu.BinKitchenOrderItem
   */
  export type BinKitchenMenu$BinKitchenOrderItemArgs = {
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
    createdAt?: boolean
    updatedAt?: boolean
    BinKitchenOrderItem?: boolean | BinKitchenOrder$BinKitchenOrderItemArgs
    _count?: boolean | BinKitchenOrderCountOutputTypeArgs
  }


  export type BinKitchenOrderInclude = {
    BinKitchenOrderItem?: boolean | BinKitchenOrder$BinKitchenOrderItemArgs
    _count?: boolean | BinKitchenOrderCountOutputTypeArgs
  }

  export type BinKitchenOrderGetPayload<S extends boolean | null | undefined | BinKitchenOrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BinKitchenOrder :
    S extends undefined ? never :
    S extends { include: any } & (BinKitchenOrderArgs | BinKitchenOrderFindManyArgs)
    ? BinKitchenOrder  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'BinKitchenOrderItem' ? Array < BinKitchenOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? BinKitchenOrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BinKitchenOrderArgs | BinKitchenOrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'BinKitchenOrderItem' ? Array < BinKitchenOrderItemGetPayload<S['select'][P]>>  :
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

    BinKitchenOrderItem<T extends BinKitchenOrder$BinKitchenOrderItemArgs= {}>(args?: Subset<T, BinKitchenOrder$BinKitchenOrderItemArgs>): Prisma.PrismaPromise<Array<BinKitchenOrderItemGetPayload<T>>| Null>;

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
   * BinKitchenOrder.BinKitchenOrderItem
   */
  export type BinKitchenOrder$BinKitchenOrderItemArgs = {
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
    createdAt?: boolean
    updatedAt?: boolean
    triviaQuiz?: boolean | TriviaCategory$triviaQuizArgs
    triviaRound?: boolean | TriviaCategory$triviaRoundArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }


  export type TriviaCategoryInclude = {
    triviaQuiz?: boolean | TriviaCategory$triviaQuizArgs
    triviaRound?: boolean | TriviaCategory$triviaRoundArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }

  export type TriviaCategoryGetPayload<S extends boolean | null | undefined | TriviaCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaCategory :
    S extends undefined ? never :
    S extends { include: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
    ? TriviaCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'triviaQuiz' ? Array < TriviaQuizGetPayload<S['include'][P]>>  :
        P extends 'triviaRound' ? Array < TriviaRoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'triviaQuiz' ? Array < TriviaQuizGetPayload<S['select'][P]>>  :
        P extends 'triviaRound' ? Array < TriviaRoundGetPayload<S['select'][P]>>  :
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

    triviaQuiz<T extends TriviaCategory$triviaQuizArgs= {}>(args?: Subset<T, TriviaCategory$triviaQuizArgs>): Prisma.PrismaPromise<Array<TriviaQuizGetPayload<T>>| Null>;

    triviaRound<T extends TriviaCategory$triviaRoundArgs= {}>(args?: Subset<T, TriviaCategory$triviaRoundArgs>): Prisma.PrismaPromise<Array<TriviaRoundGetPayload<T>>| Null>;

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
   * TriviaCategory.triviaQuiz
   */
  export type TriviaCategory$triviaQuizArgs = {
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
   * TriviaCategory.triviaRound
   */
  export type TriviaCategory$triviaRoundArgs = {
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
    categoryId: number | null
    answerId: number | null
  }

  export type TriviaQuizSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    answerId: number | null
  }

  export type TriviaQuizMinAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
    answerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaQuizMaxAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
    answerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaQuizCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    answerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaQuizAvgAggregateInputType = {
    id?: true
    categoryId?: true
    answerId?: true
  }

  export type TriviaQuizSumAggregateInputType = {
    id?: true
    categoryId?: true
    answerId?: true
  }

  export type TriviaQuizMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaQuizMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaQuizCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    answerId?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    categoryId: number
    answerId: number
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    category?: boolean | TriviaCategoryArgs
    categoryId?: boolean
    answerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    triviaQuizChoice?: boolean | TriviaQuiz$triviaQuizChoiceArgs
    triviaRoundQuiz?: boolean | TriviaQuiz$triviaRoundQuizArgs
    _count?: boolean | TriviaQuizCountOutputTypeArgs
  }


  export type TriviaQuizInclude = {
    category?: boolean | TriviaCategoryArgs
    triviaQuizChoice?: boolean | TriviaQuiz$triviaQuizChoiceArgs
    triviaRoundQuiz?: boolean | TriviaQuiz$triviaRoundQuizArgs
    _count?: boolean | TriviaQuizCountOutputTypeArgs
  }

  export type TriviaQuizGetPayload<S extends boolean | null | undefined | TriviaQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuiz :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuizArgs | TriviaQuizFindManyArgs)
    ? TriviaQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> :
        P extends 'triviaQuizChoice' ? Array < TriviaQuizChoiceGetPayload<S['include'][P]>>  :
        P extends 'triviaRoundQuiz' ? Array < TriviaRoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaQuizCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaQuizArgs | TriviaQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> :
        P extends 'triviaQuizChoice' ? Array < TriviaQuizChoiceGetPayload<S['select'][P]>>  :
        P extends 'triviaRoundQuiz' ? Array < TriviaRoundQuizGetPayload<S['select'][P]>>  :
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

    triviaQuizChoice<T extends TriviaQuiz$triviaQuizChoiceArgs= {}>(args?: Subset<T, TriviaQuiz$triviaQuizChoiceArgs>): Prisma.PrismaPromise<Array<TriviaQuizChoiceGetPayload<T>>| Null>;

    triviaRoundQuiz<T extends TriviaQuiz$triviaRoundQuizArgs= {}>(args?: Subset<T, TriviaQuiz$triviaRoundQuizArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>| Null>;

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
   * TriviaQuiz.triviaQuizChoice
   */
  export type TriviaQuiz$triviaQuizChoiceArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    where?: TriviaQuizChoiceWhereInput
    orderBy?: Enumerable<TriviaQuizChoiceOrderByWithRelationInput>
    cursor?: TriviaQuizChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaQuizChoiceScalarFieldEnum>
  }


  /**
   * TriviaQuiz.triviaRoundQuiz
   */
  export type TriviaQuiz$triviaRoundQuizArgs = {
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
   * Model TriviaQuizChoice
   */


  export type AggregateTriviaQuizChoice = {
    _count: TriviaQuizChoiceCountAggregateOutputType | null
    _avg: TriviaQuizChoiceAvgAggregateOutputType | null
    _sum: TriviaQuizChoiceSumAggregateOutputType | null
    _min: TriviaQuizChoiceMinAggregateOutputType | null
    _max: TriviaQuizChoiceMaxAggregateOutputType | null
  }

  export type TriviaQuizChoiceAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type TriviaQuizChoiceSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type TriviaQuizChoiceMinAggregateOutputType = {
    id: number | null
    name: string | null
    quizId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaQuizChoiceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    quizId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaQuizChoiceCountAggregateOutputType = {
    id: number
    name: number
    quizId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaQuizChoiceAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type TriviaQuizChoiceSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type TriviaQuizChoiceMinAggregateInputType = {
    id?: true
    name?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaQuizChoiceMaxAggregateInputType = {
    id?: true
    name?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaQuizChoiceCountAggregateInputType = {
    id?: true
    name?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaQuizChoiceAggregateArgs = {
    /**
     * Filter which TriviaQuizChoice to aggregate.
     */
    where?: TriviaQuizChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizChoices to fetch.
     */
    orderBy?: Enumerable<TriviaQuizChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaQuizChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaQuizChoices
    **/
    _count?: true | TriviaQuizChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaQuizChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaQuizChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaQuizChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaQuizChoiceMaxAggregateInputType
  }

  export type GetTriviaQuizChoiceAggregateType<T extends TriviaQuizChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaQuizChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaQuizChoice[P]>
      : GetScalarType<T[P], AggregateTriviaQuizChoice[P]>
  }




  export type TriviaQuizChoiceGroupByArgs = {
    where?: TriviaQuizChoiceWhereInput
    orderBy?: Enumerable<TriviaQuizChoiceOrderByWithAggregationInput>
    by: TriviaQuizChoiceScalarFieldEnum[]
    having?: TriviaQuizChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaQuizChoiceCountAggregateInputType | true
    _avg?: TriviaQuizChoiceAvgAggregateInputType
    _sum?: TriviaQuizChoiceSumAggregateInputType
    _min?: TriviaQuizChoiceMinAggregateInputType
    _max?: TriviaQuizChoiceMaxAggregateInputType
  }


  export type TriviaQuizChoiceGroupByOutputType = {
    id: number
    name: string
    quizId: number
    createdAt: Date
    updatedAt: Date
    _count: TriviaQuizChoiceCountAggregateOutputType | null
    _avg: TriviaQuizChoiceAvgAggregateOutputType | null
    _sum: TriviaQuizChoiceSumAggregateOutputType | null
    _min: TriviaQuizChoiceMinAggregateOutputType | null
    _max: TriviaQuizChoiceMaxAggregateOutputType | null
  }

  type GetTriviaQuizChoiceGroupByPayload<T extends TriviaQuizChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaQuizChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaQuizChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaQuizChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaQuizChoiceGroupByOutputType[P]>
        }
      >
    >


  export type TriviaQuizChoiceSelect = {
    id?: boolean
    name?: boolean
    quiz?: boolean | TriviaQuizArgs
    quizId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    triviaRoundQuizChoice?: boolean | TriviaQuizChoice$triviaRoundQuizChoiceArgs
    _count?: boolean | TriviaQuizChoiceCountOutputTypeArgs
  }


  export type TriviaQuizChoiceInclude = {
    quiz?: boolean | TriviaQuizArgs
    triviaRoundQuizChoice?: boolean | TriviaQuizChoice$triviaRoundQuizChoiceArgs
    _count?: boolean | TriviaQuizChoiceCountOutputTypeArgs
  }

  export type TriviaQuizChoiceGetPayload<S extends boolean | null | undefined | TriviaQuizChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuizChoice :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuizChoiceArgs | TriviaQuizChoiceFindManyArgs)
    ? TriviaQuizChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'quiz' ? TriviaQuizGetPayload<S['include'][P]> :
        P extends 'triviaRoundQuizChoice' ? Array < TriviaRoundQuizChoiceGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaQuizChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaQuizChoiceArgs | TriviaQuizChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'quiz' ? TriviaQuizGetPayload<S['select'][P]> :
        P extends 'triviaRoundQuizChoice' ? Array < TriviaRoundQuizChoiceGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaQuizChoiceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaQuizChoice ? TriviaQuizChoice[P] : never
  } 
      : TriviaQuizChoice


  type TriviaQuizChoiceCountArgs = 
    Omit<TriviaQuizChoiceFindManyArgs, 'select' | 'include'> & {
      select?: TriviaQuizChoiceCountAggregateInputType | true
    }

  export interface TriviaQuizChoiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaQuizChoice that matches the filter.
     * @param {TriviaQuizChoiceFindUniqueArgs} args - Arguments to find a TriviaQuizChoice
     * @example
     * // Get one TriviaQuizChoice
     * const triviaQuizChoice = await prisma.triviaQuizChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaQuizChoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaQuizChoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaQuizChoice'> extends True ? Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T>> : Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T> | null, null>

    /**
     * Find one TriviaQuizChoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaQuizChoiceFindUniqueOrThrowArgs} args - Arguments to find a TriviaQuizChoice
     * @example
     * // Get one TriviaQuizChoice
     * const triviaQuizChoice = await prisma.triviaQuizChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaQuizChoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuizChoiceFindUniqueOrThrowArgs>
    ): Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T>>

    /**
     * Find the first TriviaQuizChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizChoiceFindFirstArgs} args - Arguments to find a TriviaQuizChoice
     * @example
     * // Get one TriviaQuizChoice
     * const triviaQuizChoice = await prisma.triviaQuizChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaQuizChoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaQuizChoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaQuizChoice'> extends True ? Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T>> : Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T> | null, null>

    /**
     * Find the first TriviaQuizChoice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizChoiceFindFirstOrThrowArgs} args - Arguments to find a TriviaQuizChoice
     * @example
     * // Get one TriviaQuizChoice
     * const triviaQuizChoice = await prisma.triviaQuizChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaQuizChoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuizChoiceFindFirstOrThrowArgs>
    ): Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T>>

    /**
     * Find zero or more TriviaQuizChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizChoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaQuizChoices
     * const triviaQuizChoices = await prisma.triviaQuizChoice.findMany()
     * 
     * // Get first 10 TriviaQuizChoices
     * const triviaQuizChoices = await prisma.triviaQuizChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaQuizChoiceWithIdOnly = await prisma.triviaQuizChoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaQuizChoiceFindManyArgs>(
      args?: SelectSubset<T, TriviaQuizChoiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaQuizChoiceGetPayload<T>>>

    /**
     * Create a TriviaQuizChoice.
     * @param {TriviaQuizChoiceCreateArgs} args - Arguments to create a TriviaQuizChoice.
     * @example
     * // Create one TriviaQuizChoice
     * const TriviaQuizChoice = await prisma.triviaQuizChoice.create({
     *   data: {
     *     // ... data to create a TriviaQuizChoice
     *   }
     * })
     * 
    **/
    create<T extends TriviaQuizChoiceCreateArgs>(
      args: SelectSubset<T, TriviaQuizChoiceCreateArgs>
    ): Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T>>

    /**
     * Create many TriviaQuizChoices.
     *     @param {TriviaQuizChoiceCreateManyArgs} args - Arguments to create many TriviaQuizChoices.
     *     @example
     *     // Create many TriviaQuizChoices
     *     const triviaQuizChoice = await prisma.triviaQuizChoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaQuizChoiceCreateManyArgs>(
      args?: SelectSubset<T, TriviaQuizChoiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaQuizChoice.
     * @param {TriviaQuizChoiceDeleteArgs} args - Arguments to delete one TriviaQuizChoice.
     * @example
     * // Delete one TriviaQuizChoice
     * const TriviaQuizChoice = await prisma.triviaQuizChoice.delete({
     *   where: {
     *     // ... filter to delete one TriviaQuizChoice
     *   }
     * })
     * 
    **/
    delete<T extends TriviaQuizChoiceDeleteArgs>(
      args: SelectSubset<T, TriviaQuizChoiceDeleteArgs>
    ): Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T>>

    /**
     * Update one TriviaQuizChoice.
     * @param {TriviaQuizChoiceUpdateArgs} args - Arguments to update one TriviaQuizChoice.
     * @example
     * // Update one TriviaQuizChoice
     * const triviaQuizChoice = await prisma.triviaQuizChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaQuizChoiceUpdateArgs>(
      args: SelectSubset<T, TriviaQuizChoiceUpdateArgs>
    ): Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T>>

    /**
     * Delete zero or more TriviaQuizChoices.
     * @param {TriviaQuizChoiceDeleteManyArgs} args - Arguments to filter TriviaQuizChoices to delete.
     * @example
     * // Delete a few TriviaQuizChoices
     * const { count } = await prisma.triviaQuizChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaQuizChoiceDeleteManyArgs>(
      args?: SelectSubset<T, TriviaQuizChoiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaQuizChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaQuizChoices
     * const triviaQuizChoice = await prisma.triviaQuizChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaQuizChoiceUpdateManyArgs>(
      args: SelectSubset<T, TriviaQuizChoiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaQuizChoice.
     * @param {TriviaQuizChoiceUpsertArgs} args - Arguments to update or create a TriviaQuizChoice.
     * @example
     * // Update or create a TriviaQuizChoice
     * const triviaQuizChoice = await prisma.triviaQuizChoice.upsert({
     *   create: {
     *     // ... data to create a TriviaQuizChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaQuizChoice we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaQuizChoiceUpsertArgs>(
      args: SelectSubset<T, TriviaQuizChoiceUpsertArgs>
    ): Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T>>

    /**
     * Count the number of TriviaQuizChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizChoiceCountArgs} args - Arguments to filter TriviaQuizChoices to count.
     * @example
     * // Count the number of TriviaQuizChoices
     * const count = await prisma.triviaQuizChoice.count({
     *   where: {
     *     // ... the filter for the TriviaQuizChoices we want to count
     *   }
     * })
    **/
    count<T extends TriviaQuizChoiceCountArgs>(
      args?: Subset<T, TriviaQuizChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaQuizChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaQuizChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaQuizChoiceAggregateArgs>(args: Subset<T, TriviaQuizChoiceAggregateArgs>): Prisma.PrismaPromise<GetTriviaQuizChoiceAggregateType<T>>

    /**
     * Group by TriviaQuizChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuizChoiceGroupByArgs} args - Group by arguments.
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
      T extends TriviaQuizChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaQuizChoiceGroupByArgs['orderBy'] }
        : { orderBy?: TriviaQuizChoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaQuizChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaQuizChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaQuizChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaQuizChoiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    triviaRoundQuizChoice<T extends TriviaQuizChoice$triviaRoundQuizChoiceArgs= {}>(args?: Subset<T, TriviaQuizChoice$triviaRoundQuizChoiceArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizChoiceGetPayload<T>>| Null>;

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
   * TriviaQuizChoice base type for findUnique actions
   */
  export type TriviaQuizChoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * Filter, which TriviaQuizChoice to fetch.
     */
    where: TriviaQuizChoiceWhereUniqueInput
  }

  /**
   * TriviaQuizChoice findUnique
   */
  export interface TriviaQuizChoiceFindUniqueArgs extends TriviaQuizChoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuizChoice findUniqueOrThrow
   */
  export type TriviaQuizChoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * Filter, which TriviaQuizChoice to fetch.
     */
    where: TriviaQuizChoiceWhereUniqueInput
  }


  /**
   * TriviaQuizChoice base type for findFirst actions
   */
  export type TriviaQuizChoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * Filter, which TriviaQuizChoice to fetch.
     */
    where?: TriviaQuizChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizChoices to fetch.
     */
    orderBy?: Enumerable<TriviaQuizChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuizChoices.
     */
    cursor?: TriviaQuizChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuizChoices.
     */
    distinct?: Enumerable<TriviaQuizChoiceScalarFieldEnum>
  }

  /**
   * TriviaQuizChoice findFirst
   */
  export interface TriviaQuizChoiceFindFirstArgs extends TriviaQuizChoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuizChoice findFirstOrThrow
   */
  export type TriviaQuizChoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * Filter, which TriviaQuizChoice to fetch.
     */
    where?: TriviaQuizChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizChoices to fetch.
     */
    orderBy?: Enumerable<TriviaQuizChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuizChoices.
     */
    cursor?: TriviaQuizChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuizChoices.
     */
    distinct?: Enumerable<TriviaQuizChoiceScalarFieldEnum>
  }


  /**
   * TriviaQuizChoice findMany
   */
  export type TriviaQuizChoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * Filter, which TriviaQuizChoices to fetch.
     */
    where?: TriviaQuizChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuizChoices to fetch.
     */
    orderBy?: Enumerable<TriviaQuizChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaQuizChoices.
     */
    cursor?: TriviaQuizChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuizChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuizChoices.
     */
    skip?: number
    distinct?: Enumerable<TriviaQuizChoiceScalarFieldEnum>
  }


  /**
   * TriviaQuizChoice create
   */
  export type TriviaQuizChoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * The data needed to create a TriviaQuizChoice.
     */
    data: XOR<TriviaQuizChoiceCreateInput, TriviaQuizChoiceUncheckedCreateInput>
  }


  /**
   * TriviaQuizChoice createMany
   */
  export type TriviaQuizChoiceCreateManyArgs = {
    /**
     * The data used to create many TriviaQuizChoices.
     */
    data: Enumerable<TriviaQuizChoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaQuizChoice update
   */
  export type TriviaQuizChoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * The data needed to update a TriviaQuizChoice.
     */
    data: XOR<TriviaQuizChoiceUpdateInput, TriviaQuizChoiceUncheckedUpdateInput>
    /**
     * Choose, which TriviaQuizChoice to update.
     */
    where: TriviaQuizChoiceWhereUniqueInput
  }


  /**
   * TriviaQuizChoice updateMany
   */
  export type TriviaQuizChoiceUpdateManyArgs = {
    /**
     * The data used to update TriviaQuizChoices.
     */
    data: XOR<TriviaQuizChoiceUpdateManyMutationInput, TriviaQuizChoiceUncheckedUpdateManyInput>
    /**
     * Filter which TriviaQuizChoices to update
     */
    where?: TriviaQuizChoiceWhereInput
  }


  /**
   * TriviaQuizChoice upsert
   */
  export type TriviaQuizChoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * The filter to search for the TriviaQuizChoice to update in case it exists.
     */
    where: TriviaQuizChoiceWhereUniqueInput
    /**
     * In case the TriviaQuizChoice found by the `where` argument doesn't exist, create a new TriviaQuizChoice with this data.
     */
    create: XOR<TriviaQuizChoiceCreateInput, TriviaQuizChoiceUncheckedCreateInput>
    /**
     * In case the TriviaQuizChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaQuizChoiceUpdateInput, TriviaQuizChoiceUncheckedUpdateInput>
  }


  /**
   * TriviaQuizChoice delete
   */
  export type TriviaQuizChoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
    /**
     * Filter which TriviaQuizChoice to delete.
     */
    where: TriviaQuizChoiceWhereUniqueInput
  }


  /**
   * TriviaQuizChoice deleteMany
   */
  export type TriviaQuizChoiceDeleteManyArgs = {
    /**
     * Filter which TriviaQuizChoices to delete
     */
    where?: TriviaQuizChoiceWhereInput
  }


  /**
   * TriviaQuizChoice.triviaRoundQuizChoice
   */
  export type TriviaQuizChoice$triviaRoundQuizChoiceArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    where?: TriviaRoundQuizChoiceWhereInput
    orderBy?: Enumerable<TriviaRoundQuizChoiceOrderByWithRelationInput>
    cursor?: TriviaRoundQuizChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizChoiceScalarFieldEnum>
  }


  /**
   * TriviaQuizChoice without action
   */
  export type TriviaQuizChoiceArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuizChoice
     */
    select?: TriviaQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuizChoiceInclude | null
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
    score: number | null
    categoryId: number | null
  }

  export type TriviaRoundSumAggregateOutputType = {
    id: number | null
    score: number | null
    categoryId: number | null
  }

  export type TriviaRoundMinAggregateOutputType = {
    id: number | null
    score: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundMaxAggregateOutputType = {
    id: number | null
    score: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundCountAggregateOutputType = {
    id: number
    score: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaRoundAvgAggregateInputType = {
    id?: true
    score?: true
    categoryId?: true
  }

  export type TriviaRoundSumAggregateInputType = {
    id?: true
    score?: true
    categoryId?: true
  }

  export type TriviaRoundMinAggregateInputType = {
    id?: true
    score?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundMaxAggregateInputType = {
    id?: true
    score?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundCountAggregateInputType = {
    id?: true
    score?: true
    categoryId?: true
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
    score: number
    categoryId: number
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
    score?: boolean
    category?: boolean | TriviaCategoryArgs
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    triviaRoundQuiz?: boolean | TriviaRound$triviaRoundQuizArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }


  export type TriviaRoundInclude = {
    category?: boolean | TriviaCategoryArgs
    triviaRoundQuiz?: boolean | TriviaRound$triviaRoundQuizArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }

  export type TriviaRoundGetPayload<S extends boolean | null | undefined | TriviaRoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRound :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
    ? TriviaRound  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> :
        P extends 'triviaRoundQuiz' ? Array < TriviaRoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaRoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> :
        P extends 'triviaRoundQuiz' ? Array < TriviaRoundQuizGetPayload<S['select'][P]>>  :
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

    triviaRoundQuiz<T extends TriviaRound$triviaRoundQuizArgs= {}>(args?: Subset<T, TriviaRound$triviaRoundQuizArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizGetPayload<T>>| Null>;

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
   * TriviaRound.triviaRoundQuiz
   */
  export type TriviaRound$triviaRoundQuizArgs = {
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
    playerChooseChoice: number | null
  }

  export type TriviaRoundQuizSumAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    playerChooseChoice: number | null
  }

  export type TriviaRoundQuizMinAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    playerChooseChoice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundQuizMaxAggregateOutputType = {
    id: number | null
    roundId: number | null
    quizId: number | null
    playerChooseChoice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundQuizCountAggregateOutputType = {
    id: number
    roundId: number
    quizId: number
    playerChooseChoice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaRoundQuizAvgAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    playerChooseChoice?: true
  }

  export type TriviaRoundQuizSumAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    playerChooseChoice?: true
  }

  export type TriviaRoundQuizMinAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    playerChooseChoice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundQuizMaxAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    playerChooseChoice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundQuizCountAggregateInputType = {
    id?: true
    roundId?: true
    quizId?: true
    playerChooseChoice?: true
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
    playerChooseChoice: number
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
    playerChooseChoice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    triviaRoundQuizChoice?: boolean | TriviaRoundQuiz$triviaRoundQuizChoiceArgs
    _count?: boolean | TriviaRoundQuizCountOutputTypeArgs
  }


  export type TriviaRoundQuizInclude = {
    round?: boolean | TriviaRoundArgs
    quiz?: boolean | TriviaQuizArgs
    triviaRoundQuizChoice?: boolean | TriviaRoundQuiz$triviaRoundQuizChoiceArgs
    _count?: boolean | TriviaRoundQuizCountOutputTypeArgs
  }

  export type TriviaRoundQuizGetPayload<S extends boolean | null | undefined | TriviaRoundQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundQuiz :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundQuizArgs | TriviaRoundQuizFindManyArgs)
    ? TriviaRoundQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'round' ? TriviaRoundGetPayload<S['include'][P]> :
        P extends 'quiz' ? TriviaQuizGetPayload<S['include'][P]> :
        P extends 'triviaRoundQuizChoice' ? Array < TriviaRoundQuizChoiceGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaRoundQuizCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaRoundQuizArgs | TriviaRoundQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'round' ? TriviaRoundGetPayload<S['select'][P]> :
        P extends 'quiz' ? TriviaQuizGetPayload<S['select'][P]> :
        P extends 'triviaRoundQuizChoice' ? Array < TriviaRoundQuizChoiceGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaRoundQuizCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaRoundQuiz ? TriviaRoundQuiz[P] : never
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

    triviaRoundQuizChoice<T extends TriviaRoundQuiz$triviaRoundQuizChoiceArgs= {}>(args?: Subset<T, TriviaRoundQuiz$triviaRoundQuizChoiceArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuizChoiceGetPayload<T>>| Null>;

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
   * TriviaRoundQuiz.triviaRoundQuizChoice
   */
  export type TriviaRoundQuiz$triviaRoundQuizChoiceArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    where?: TriviaRoundQuizChoiceWhereInput
    orderBy?: Enumerable<TriviaRoundQuizChoiceOrderByWithRelationInput>
    cursor?: TriviaRoundQuizChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizChoiceScalarFieldEnum>
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
   * Model TriviaRoundQuizChoice
   */


  export type AggregateTriviaRoundQuizChoice = {
    _count: TriviaRoundQuizChoiceCountAggregateOutputType | null
    _avg: TriviaRoundQuizChoiceAvgAggregateOutputType | null
    _sum: TriviaRoundQuizChoiceSumAggregateOutputType | null
    _min: TriviaRoundQuizChoiceMinAggregateOutputType | null
    _max: TriviaRoundQuizChoiceMaxAggregateOutputType | null
  }

  export type TriviaRoundQuizChoiceAvgAggregateOutputType = {
    id: number | null
    roundQuizId: number | null
    quizChoiceId: number | null
  }

  export type TriviaRoundQuizChoiceSumAggregateOutputType = {
    id: number | null
    roundQuizId: number | null
    quizChoiceId: number | null
  }

  export type TriviaRoundQuizChoiceMinAggregateOutputType = {
    id: number | null
    roundQuizId: number | null
    quizChoiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundQuizChoiceMaxAggregateOutputType = {
    id: number | null
    roundQuizId: number | null
    quizChoiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaRoundQuizChoiceCountAggregateOutputType = {
    id: number
    roundQuizId: number
    quizChoiceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaRoundQuizChoiceAvgAggregateInputType = {
    id?: true
    roundQuizId?: true
    quizChoiceId?: true
  }

  export type TriviaRoundQuizChoiceSumAggregateInputType = {
    id?: true
    roundQuizId?: true
    quizChoiceId?: true
  }

  export type TriviaRoundQuizChoiceMinAggregateInputType = {
    id?: true
    roundQuizId?: true
    quizChoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundQuizChoiceMaxAggregateInputType = {
    id?: true
    roundQuizId?: true
    quizChoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaRoundQuizChoiceCountAggregateInputType = {
    id?: true
    roundQuizId?: true
    quizChoiceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaRoundQuizChoiceAggregateArgs = {
    /**
     * Filter which TriviaRoundQuizChoice to aggregate.
     */
    where?: TriviaRoundQuizChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizChoices to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaRoundQuizChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaRoundQuizChoices
    **/
    _count?: true | TriviaRoundQuizChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaRoundQuizChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaRoundQuizChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaRoundQuizChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaRoundQuizChoiceMaxAggregateInputType
  }

  export type GetTriviaRoundQuizChoiceAggregateType<T extends TriviaRoundQuizChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaRoundQuizChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaRoundQuizChoice[P]>
      : GetScalarType<T[P], AggregateTriviaRoundQuizChoice[P]>
  }




  export type TriviaRoundQuizChoiceGroupByArgs = {
    where?: TriviaRoundQuizChoiceWhereInput
    orderBy?: Enumerable<TriviaRoundQuizChoiceOrderByWithAggregationInput>
    by: TriviaRoundQuizChoiceScalarFieldEnum[]
    having?: TriviaRoundQuizChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaRoundQuizChoiceCountAggregateInputType | true
    _avg?: TriviaRoundQuizChoiceAvgAggregateInputType
    _sum?: TriviaRoundQuizChoiceSumAggregateInputType
    _min?: TriviaRoundQuizChoiceMinAggregateInputType
    _max?: TriviaRoundQuizChoiceMaxAggregateInputType
  }


  export type TriviaRoundQuizChoiceGroupByOutputType = {
    id: number
    roundQuizId: number
    quizChoiceId: number
    createdAt: Date
    updatedAt: Date
    _count: TriviaRoundQuizChoiceCountAggregateOutputType | null
    _avg: TriviaRoundQuizChoiceAvgAggregateOutputType | null
    _sum: TriviaRoundQuizChoiceSumAggregateOutputType | null
    _min: TriviaRoundQuizChoiceMinAggregateOutputType | null
    _max: TriviaRoundQuizChoiceMaxAggregateOutputType | null
  }

  type GetTriviaRoundQuizChoiceGroupByPayload<T extends TriviaRoundQuizChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaRoundQuizChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaRoundQuizChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaRoundQuizChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaRoundQuizChoiceGroupByOutputType[P]>
        }
      >
    >


  export type TriviaRoundQuizChoiceSelect = {
    id?: boolean
    roundQuiz?: boolean | TriviaRoundQuizArgs
    roundQuizId?: boolean
    roundQuizChoice?: boolean | TriviaQuizChoiceArgs
    quizChoiceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TriviaRoundQuizChoiceInclude = {
    roundQuiz?: boolean | TriviaRoundQuizArgs
    roundQuizChoice?: boolean | TriviaQuizChoiceArgs
  }

  export type TriviaRoundQuizChoiceGetPayload<S extends boolean | null | undefined | TriviaRoundQuizChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundQuizChoice :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundQuizChoiceArgs | TriviaRoundQuizChoiceFindManyArgs)
    ? TriviaRoundQuizChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'roundQuiz' ? TriviaRoundQuizGetPayload<S['include'][P]> :
        P extends 'roundQuizChoice' ? TriviaQuizChoiceGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaRoundQuizChoiceArgs | TriviaRoundQuizChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'roundQuiz' ? TriviaRoundQuizGetPayload<S['select'][P]> :
        P extends 'roundQuizChoice' ? TriviaQuizChoiceGetPayload<S['select'][P]> :  P extends keyof TriviaRoundQuizChoice ? TriviaRoundQuizChoice[P] : never
  } 
      : TriviaRoundQuizChoice


  type TriviaRoundQuizChoiceCountArgs = 
    Omit<TriviaRoundQuizChoiceFindManyArgs, 'select' | 'include'> & {
      select?: TriviaRoundQuizChoiceCountAggregateInputType | true
    }

  export interface TriviaRoundQuizChoiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaRoundQuizChoice that matches the filter.
     * @param {TriviaRoundQuizChoiceFindUniqueArgs} args - Arguments to find a TriviaRoundQuizChoice
     * @example
     * // Get one TriviaRoundQuizChoice
     * const triviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaRoundQuizChoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaRoundQuizChoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaRoundQuizChoice'> extends True ? Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T>> : Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T> | null, null>

    /**
     * Find one TriviaRoundQuizChoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaRoundQuizChoiceFindUniqueOrThrowArgs} args - Arguments to find a TriviaRoundQuizChoice
     * @example
     * // Get one TriviaRoundQuizChoice
     * const triviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaRoundQuizChoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuizChoiceFindUniqueOrThrowArgs>
    ): Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T>>

    /**
     * Find the first TriviaRoundQuizChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizChoiceFindFirstArgs} args - Arguments to find a TriviaRoundQuizChoice
     * @example
     * // Get one TriviaRoundQuizChoice
     * const triviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaRoundQuizChoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaRoundQuizChoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaRoundQuizChoice'> extends True ? Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T>> : Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T> | null, null>

    /**
     * Find the first TriviaRoundQuizChoice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizChoiceFindFirstOrThrowArgs} args - Arguments to find a TriviaRoundQuizChoice
     * @example
     * // Get one TriviaRoundQuizChoice
     * const triviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaRoundQuizChoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuizChoiceFindFirstOrThrowArgs>
    ): Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T>>

    /**
     * Find zero or more TriviaRoundQuizChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizChoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaRoundQuizChoices
     * const triviaRoundQuizChoices = await prisma.triviaRoundQuizChoice.findMany()
     * 
     * // Get first 10 TriviaRoundQuizChoices
     * const triviaRoundQuizChoices = await prisma.triviaRoundQuizChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaRoundQuizChoiceWithIdOnly = await prisma.triviaRoundQuizChoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaRoundQuizChoiceFindManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizChoiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaRoundQuizChoiceGetPayload<T>>>

    /**
     * Create a TriviaRoundQuizChoice.
     * @param {TriviaRoundQuizChoiceCreateArgs} args - Arguments to create a TriviaRoundQuizChoice.
     * @example
     * // Create one TriviaRoundQuizChoice
     * const TriviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.create({
     *   data: {
     *     // ... data to create a TriviaRoundQuizChoice
     *   }
     * })
     * 
    **/
    create<T extends TriviaRoundQuizChoiceCreateArgs>(
      args: SelectSubset<T, TriviaRoundQuizChoiceCreateArgs>
    ): Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T>>

    /**
     * Create many TriviaRoundQuizChoices.
     *     @param {TriviaRoundQuizChoiceCreateManyArgs} args - Arguments to create many TriviaRoundQuizChoices.
     *     @example
     *     // Create many TriviaRoundQuizChoices
     *     const triviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaRoundQuizChoiceCreateManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizChoiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaRoundQuizChoice.
     * @param {TriviaRoundQuizChoiceDeleteArgs} args - Arguments to delete one TriviaRoundQuizChoice.
     * @example
     * // Delete one TriviaRoundQuizChoice
     * const TriviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.delete({
     *   where: {
     *     // ... filter to delete one TriviaRoundQuizChoice
     *   }
     * })
     * 
    **/
    delete<T extends TriviaRoundQuizChoiceDeleteArgs>(
      args: SelectSubset<T, TriviaRoundQuizChoiceDeleteArgs>
    ): Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T>>

    /**
     * Update one TriviaRoundQuizChoice.
     * @param {TriviaRoundQuizChoiceUpdateArgs} args - Arguments to update one TriviaRoundQuizChoice.
     * @example
     * // Update one TriviaRoundQuizChoice
     * const triviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaRoundQuizChoiceUpdateArgs>(
      args: SelectSubset<T, TriviaRoundQuizChoiceUpdateArgs>
    ): Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T>>

    /**
     * Delete zero or more TriviaRoundQuizChoices.
     * @param {TriviaRoundQuizChoiceDeleteManyArgs} args - Arguments to filter TriviaRoundQuizChoices to delete.
     * @example
     * // Delete a few TriviaRoundQuizChoices
     * const { count } = await prisma.triviaRoundQuizChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaRoundQuizChoiceDeleteManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuizChoiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaRoundQuizChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaRoundQuizChoices
     * const triviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaRoundQuizChoiceUpdateManyArgs>(
      args: SelectSubset<T, TriviaRoundQuizChoiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaRoundQuizChoice.
     * @param {TriviaRoundQuizChoiceUpsertArgs} args - Arguments to update or create a TriviaRoundQuizChoice.
     * @example
     * // Update or create a TriviaRoundQuizChoice
     * const triviaRoundQuizChoice = await prisma.triviaRoundQuizChoice.upsert({
     *   create: {
     *     // ... data to create a TriviaRoundQuizChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaRoundQuizChoice we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaRoundQuizChoiceUpsertArgs>(
      args: SelectSubset<T, TriviaRoundQuizChoiceUpsertArgs>
    ): Prisma__TriviaRoundQuizChoiceClient<TriviaRoundQuizChoiceGetPayload<T>>

    /**
     * Count the number of TriviaRoundQuizChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizChoiceCountArgs} args - Arguments to filter TriviaRoundQuizChoices to count.
     * @example
     * // Count the number of TriviaRoundQuizChoices
     * const count = await prisma.triviaRoundQuizChoice.count({
     *   where: {
     *     // ... the filter for the TriviaRoundQuizChoices we want to count
     *   }
     * })
    **/
    count<T extends TriviaRoundQuizChoiceCountArgs>(
      args?: Subset<T, TriviaRoundQuizChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaRoundQuizChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaRoundQuizChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaRoundQuizChoiceAggregateArgs>(args: Subset<T, TriviaRoundQuizChoiceAggregateArgs>): Prisma.PrismaPromise<GetTriviaRoundQuizChoiceAggregateType<T>>

    /**
     * Group by TriviaRoundQuizChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuizChoiceGroupByArgs} args - Group by arguments.
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
      T extends TriviaRoundQuizChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaRoundQuizChoiceGroupByArgs['orderBy'] }
        : { orderBy?: TriviaRoundQuizChoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaRoundQuizChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaRoundQuizChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaRoundQuizChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaRoundQuizChoiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    roundQuiz<T extends TriviaRoundQuizArgs= {}>(args?: Subset<T, TriviaRoundQuizArgs>): Prisma__TriviaRoundQuizClient<TriviaRoundQuizGetPayload<T> | Null>;

    roundQuizChoice<T extends TriviaQuizChoiceArgs= {}>(args?: Subset<T, TriviaQuizChoiceArgs>): Prisma__TriviaQuizChoiceClient<TriviaQuizChoiceGetPayload<T> | Null>;

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
   * TriviaRoundQuizChoice base type for findUnique actions
   */
  export type TriviaRoundQuizChoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * Filter, which TriviaRoundQuizChoice to fetch.
     */
    where: TriviaRoundQuizChoiceWhereUniqueInput
  }

  /**
   * TriviaRoundQuizChoice findUnique
   */
  export interface TriviaRoundQuizChoiceFindUniqueArgs extends TriviaRoundQuizChoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuizChoice findUniqueOrThrow
   */
  export type TriviaRoundQuizChoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * Filter, which TriviaRoundQuizChoice to fetch.
     */
    where: TriviaRoundQuizChoiceWhereUniqueInput
  }


  /**
   * TriviaRoundQuizChoice base type for findFirst actions
   */
  export type TriviaRoundQuizChoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * Filter, which TriviaRoundQuizChoice to fetch.
     */
    where?: TriviaRoundQuizChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizChoices to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuizChoices.
     */
    cursor?: TriviaRoundQuizChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuizChoices.
     */
    distinct?: Enumerable<TriviaRoundQuizChoiceScalarFieldEnum>
  }

  /**
   * TriviaRoundQuizChoice findFirst
   */
  export interface TriviaRoundQuizChoiceFindFirstArgs extends TriviaRoundQuizChoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuizChoice findFirstOrThrow
   */
  export type TriviaRoundQuizChoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * Filter, which TriviaRoundQuizChoice to fetch.
     */
    where?: TriviaRoundQuizChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizChoices to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuizChoices.
     */
    cursor?: TriviaRoundQuizChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuizChoices.
     */
    distinct?: Enumerable<TriviaRoundQuizChoiceScalarFieldEnum>
  }


  /**
   * TriviaRoundQuizChoice findMany
   */
  export type TriviaRoundQuizChoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * Filter, which TriviaRoundQuizChoices to fetch.
     */
    where?: TriviaRoundQuizChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuizChoices to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuizChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaRoundQuizChoices.
     */
    cursor?: TriviaRoundQuizChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuizChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuizChoices.
     */
    skip?: number
    distinct?: Enumerable<TriviaRoundQuizChoiceScalarFieldEnum>
  }


  /**
   * TriviaRoundQuizChoice create
   */
  export type TriviaRoundQuizChoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * The data needed to create a TriviaRoundQuizChoice.
     */
    data: XOR<TriviaRoundQuizChoiceCreateInput, TriviaRoundQuizChoiceUncheckedCreateInput>
  }


  /**
   * TriviaRoundQuizChoice createMany
   */
  export type TriviaRoundQuizChoiceCreateManyArgs = {
    /**
     * The data used to create many TriviaRoundQuizChoices.
     */
    data: Enumerable<TriviaRoundQuizChoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaRoundQuizChoice update
   */
  export type TriviaRoundQuizChoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * The data needed to update a TriviaRoundQuizChoice.
     */
    data: XOR<TriviaRoundQuizChoiceUpdateInput, TriviaRoundQuizChoiceUncheckedUpdateInput>
    /**
     * Choose, which TriviaRoundQuizChoice to update.
     */
    where: TriviaRoundQuizChoiceWhereUniqueInput
  }


  /**
   * TriviaRoundQuizChoice updateMany
   */
  export type TriviaRoundQuizChoiceUpdateManyArgs = {
    /**
     * The data used to update TriviaRoundQuizChoices.
     */
    data: XOR<TriviaRoundQuizChoiceUpdateManyMutationInput, TriviaRoundQuizChoiceUncheckedUpdateManyInput>
    /**
     * Filter which TriviaRoundQuizChoices to update
     */
    where?: TriviaRoundQuizChoiceWhereInput
  }


  /**
   * TriviaRoundQuizChoice upsert
   */
  export type TriviaRoundQuizChoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * The filter to search for the TriviaRoundQuizChoice to update in case it exists.
     */
    where: TriviaRoundQuizChoiceWhereUniqueInput
    /**
     * In case the TriviaRoundQuizChoice found by the `where` argument doesn't exist, create a new TriviaRoundQuizChoice with this data.
     */
    create: XOR<TriviaRoundQuizChoiceCreateInput, TriviaRoundQuizChoiceUncheckedCreateInput>
    /**
     * In case the TriviaRoundQuizChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaRoundQuizChoiceUpdateInput, TriviaRoundQuizChoiceUncheckedUpdateInput>
  }


  /**
   * TriviaRoundQuizChoice delete
   */
  export type TriviaRoundQuizChoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
    /**
     * Filter which TriviaRoundQuizChoice to delete.
     */
    where: TriviaRoundQuizChoiceWhereUniqueInput
  }


  /**
   * TriviaRoundQuizChoice deleteMany
   */
  export type TriviaRoundQuizChoiceDeleteManyArgs = {
    /**
     * Filter which TriviaRoundQuizChoices to delete
     */
    where?: TriviaRoundQuizChoiceWhereInput
  }


  /**
   * TriviaRoundQuizChoice without action
   */
  export type TriviaRoundQuizChoiceArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuizChoice
     */
    select?: TriviaRoundQuizChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuizChoiceInclude | null
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    profileImage: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
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
    createdAt: Date
    updatedAt: Date
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
    createdAt?: boolean
    updatedAt?: boolean
    fromFolowing?: boolean | User$fromFolowingArgs
    toFollowing?: boolean | User$toFollowingArgs
    post?: boolean | User$postArgs
    fromDirectMessage?: boolean | User$fromDirectMessageArgs
    toDirectMessage?: boolean | User$toDirectMessageArgs
    Reply?: boolean | User$ReplyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    fromFolowing?: boolean | User$fromFolowingArgs
    toFollowing?: boolean | User$toFollowingArgs
    post?: boolean | User$postArgs
    fromDirectMessage?: boolean | User$fromDirectMessageArgs
    toDirectMessage?: boolean | User$toDirectMessageArgs
    Reply?: boolean | User$ReplyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'fromFolowing' ? Array < FollowingGetPayload<S['include'][P]>>  :
        P extends 'toFollowing' ? Array < FollowingGetPayload<S['include'][P]>>  :
        P extends 'post' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'fromDirectMessage' ? Array < DirectMsgGetPayload<S['include'][P]>>  :
        P extends 'toDirectMessage' ? Array < DirectMsgGetPayload<S['include'][P]>>  :
        P extends 'Reply' ? Array < ReplyGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'fromFolowing' ? Array < FollowingGetPayload<S['select'][P]>>  :
        P extends 'toFollowing' ? Array < FollowingGetPayload<S['select'][P]>>  :
        P extends 'post' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'fromDirectMessage' ? Array < DirectMsgGetPayload<S['select'][P]>>  :
        P extends 'toDirectMessage' ? Array < DirectMsgGetPayload<S['select'][P]>>  :
        P extends 'Reply' ? Array < ReplyGetPayload<S['select'][P]>>  :
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

    fromFolowing<T extends User$fromFolowingArgs= {}>(args?: Subset<T, User$fromFolowingArgs>): Prisma.PrismaPromise<Array<FollowingGetPayload<T>>| Null>;

    toFollowing<T extends User$toFollowingArgs= {}>(args?: Subset<T, User$toFollowingArgs>): Prisma.PrismaPromise<Array<FollowingGetPayload<T>>| Null>;

    post<T extends User$postArgs= {}>(args?: Subset<T, User$postArgs>): Prisma.PrismaPromise<Array<PostGetPayload<T>>| Null>;

    fromDirectMessage<T extends User$fromDirectMessageArgs= {}>(args?: Subset<T, User$fromDirectMessageArgs>): Prisma.PrismaPromise<Array<DirectMsgGetPayload<T>>| Null>;

    toDirectMessage<T extends User$toDirectMessageArgs= {}>(args?: Subset<T, User$toDirectMessageArgs>): Prisma.PrismaPromise<Array<DirectMsgGetPayload<T>>| Null>;

    Reply<T extends User$ReplyArgs= {}>(args?: Subset<T, User$ReplyArgs>): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>| Null>;

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
   * User.fromFolowing
   */
  export type User$fromFolowingArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    where?: FollowingWhereInput
    orderBy?: Enumerable<FollowingOrderByWithRelationInput>
    cursor?: FollowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FollowingScalarFieldEnum>
  }


  /**
   * User.toFollowing
   */
  export type User$toFollowingArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    where?: FollowingWhereInput
    orderBy?: Enumerable<FollowingOrderByWithRelationInput>
    cursor?: FollowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FollowingScalarFieldEnum>
  }


  /**
   * User.post
   */
  export type User$postArgs = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude | null
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * User.fromDirectMessage
   */
  export type User$fromDirectMessageArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    where?: DirectMsgWhereInput
    orderBy?: Enumerable<DirectMsgOrderByWithRelationInput>
    cursor?: DirectMsgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectMsgScalarFieldEnum>
  }


  /**
   * User.toDirectMessage
   */
  export type User$toDirectMessageArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    where?: DirectMsgWhereInput
    orderBy?: Enumerable<DirectMsgOrderByWithRelationInput>
    cursor?: DirectMsgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectMsgScalarFieldEnum>
  }


  /**
   * User.Reply
   */
  export type User$ReplyArgs = {
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
   * Model Following
   */


  export type AggregateFollowing = {
    _count: FollowingCountAggregateOutputType | null
    _avg: FollowingAvgAggregateOutputType | null
    _sum: FollowingSumAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  export type FollowingAvgAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type FollowingSumAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type FollowingMinAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FollowingMaxAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FollowingCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FollowingAvgAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type FollowingSumAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type FollowingMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FollowingMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FollowingCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FollowingAggregateArgs = {
    /**
     * Filter which Following to aggregate.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: Enumerable<FollowingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followings
    **/
    _count?: true | FollowingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowingMaxAggregateInputType
  }

  export type GetFollowingAggregateType<T extends FollowingAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowing[P]>
      : GetScalarType<T[P], AggregateFollowing[P]>
  }




  export type FollowingGroupByArgs = {
    where?: FollowingWhereInput
    orderBy?: Enumerable<FollowingOrderByWithAggregationInput>
    by: FollowingScalarFieldEnum[]
    having?: FollowingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowingCountAggregateInputType | true
    _avg?: FollowingAvgAggregateInputType
    _sum?: FollowingSumAggregateInputType
    _min?: FollowingMinAggregateInputType
    _max?: FollowingMaxAggregateInputType
  }


  export type FollowingGroupByOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    createdAt: Date
    updatedAt: Date
    _count: FollowingCountAggregateOutputType | null
    _avg: FollowingAvgAggregateOutputType | null
    _sum: FollowingSumAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  type GetFollowingGroupByPayload<T extends FollowingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FollowingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowingGroupByOutputType[P]>
            : GetScalarType<T[P], FollowingGroupByOutputType[P]>
        }
      >
    >


  export type FollowingSelect = {
    id?: boolean
    from?: boolean | UserArgs
    fromUserId?: boolean
    to?: boolean | UserArgs
    toUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type FollowingInclude = {
    from?: boolean | UserArgs
    to?: boolean | UserArgs
  }

  export type FollowingGetPayload<S extends boolean | null | undefined | FollowingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Following :
    S extends undefined ? never :
    S extends { include: any } & (FollowingArgs | FollowingFindManyArgs)
    ? Following  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'from' ? UserGetPayload<S['include'][P]> :
        P extends 'to' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FollowingArgs | FollowingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'from' ? UserGetPayload<S['select'][P]> :
        P extends 'to' ? UserGetPayload<S['select'][P]> :  P extends keyof Following ? Following[P] : never
  } 
      : Following


  type FollowingCountArgs = 
    Omit<FollowingFindManyArgs, 'select' | 'include'> & {
      select?: FollowingCountAggregateInputType | true
    }

  export interface FollowingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Following that matches the filter.
     * @param {FollowingFindUniqueArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FollowingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Following'> extends True ? Prisma__FollowingClient<FollowingGetPayload<T>> : Prisma__FollowingClient<FollowingGetPayload<T> | null, null>

    /**
     * Find one Following that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowingFindUniqueOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FollowingFindUniqueOrThrowArgs>
    ): Prisma__FollowingClient<FollowingGetPayload<T>>

    /**
     * Find the first Following that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FollowingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Following'> extends True ? Prisma__FollowingClient<FollowingGetPayload<T>> : Prisma__FollowingClient<FollowingGetPayload<T> | null, null>

    /**
     * Find the first Following that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FollowingFindFirstOrThrowArgs>
    ): Prisma__FollowingClient<FollowingGetPayload<T>>

    /**
     * Find zero or more Followings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followings
     * const followings = await prisma.following.findMany()
     * 
     * // Get first 10 Followings
     * const followings = await prisma.following.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followingWithIdOnly = await prisma.following.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowingFindManyArgs>(
      args?: SelectSubset<T, FollowingFindManyArgs>
    ): Prisma.PrismaPromise<Array<FollowingGetPayload<T>>>

    /**
     * Create a Following.
     * @param {FollowingCreateArgs} args - Arguments to create a Following.
     * @example
     * // Create one Following
     * const Following = await prisma.following.create({
     *   data: {
     *     // ... data to create a Following
     *   }
     * })
     * 
    **/
    create<T extends FollowingCreateArgs>(
      args: SelectSubset<T, FollowingCreateArgs>
    ): Prisma__FollowingClient<FollowingGetPayload<T>>

    /**
     * Create many Followings.
     *     @param {FollowingCreateManyArgs} args - Arguments to create many Followings.
     *     @example
     *     // Create many Followings
     *     const following = await prisma.following.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowingCreateManyArgs>(
      args?: SelectSubset<T, FollowingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Following.
     * @param {FollowingDeleteArgs} args - Arguments to delete one Following.
     * @example
     * // Delete one Following
     * const Following = await prisma.following.delete({
     *   where: {
     *     // ... filter to delete one Following
     *   }
     * })
     * 
    **/
    delete<T extends FollowingDeleteArgs>(
      args: SelectSubset<T, FollowingDeleteArgs>
    ): Prisma__FollowingClient<FollowingGetPayload<T>>

    /**
     * Update one Following.
     * @param {FollowingUpdateArgs} args - Arguments to update one Following.
     * @example
     * // Update one Following
     * const following = await prisma.following.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowingUpdateArgs>(
      args: SelectSubset<T, FollowingUpdateArgs>
    ): Prisma__FollowingClient<FollowingGetPayload<T>>

    /**
     * Delete zero or more Followings.
     * @param {FollowingDeleteManyArgs} args - Arguments to filter Followings to delete.
     * @example
     * // Delete a few Followings
     * const { count } = await prisma.following.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowingDeleteManyArgs>(
      args?: SelectSubset<T, FollowingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowingUpdateManyArgs>(
      args: SelectSubset<T, FollowingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Following.
     * @param {FollowingUpsertArgs} args - Arguments to update or create a Following.
     * @example
     * // Update or create a Following
     * const following = await prisma.following.upsert({
     *   create: {
     *     // ... data to create a Following
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Following we want to update
     *   }
     * })
    **/
    upsert<T extends FollowingUpsertArgs>(
      args: SelectSubset<T, FollowingUpsertArgs>
    ): Prisma__FollowingClient<FollowingGetPayload<T>>

    /**
     * Count the number of Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingCountArgs} args - Arguments to filter Followings to count.
     * @example
     * // Count the number of Followings
     * const count = await prisma.following.count({
     *   where: {
     *     // ... the filter for the Followings we want to count
     *   }
     * })
    **/
    count<T extends FollowingCountArgs>(
      args?: Subset<T, FollowingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowingAggregateArgs>(args: Subset<T, FollowingAggregateArgs>): Prisma.PrismaPromise<GetFollowingAggregateType<T>>

    /**
     * Group by Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingGroupByArgs} args - Group by arguments.
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
      T extends FollowingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowingGroupByArgs['orderBy'] }
        : { orderBy?: FollowingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Following.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FollowingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Following base type for findUnique actions
   */
  export type FollowingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * Filter, which Following to fetch.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following findUnique
   */
  export interface FollowingFindUniqueArgs extends FollowingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Following findUniqueOrThrow
   */
  export type FollowingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * Filter, which Following to fetch.
     */
    where: FollowingWhereUniqueInput
  }


  /**
   * Following base type for findFirst actions
   */
  export type FollowingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * Filter, which Following to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: Enumerable<FollowingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followings.
     */
    distinct?: Enumerable<FollowingScalarFieldEnum>
  }

  /**
   * Following findFirst
   */
  export interface FollowingFindFirstArgs extends FollowingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Following findFirstOrThrow
   */
  export type FollowingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * Filter, which Following to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: Enumerable<FollowingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followings.
     */
    distinct?: Enumerable<FollowingScalarFieldEnum>
  }


  /**
   * Following findMany
   */
  export type FollowingFindManyArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * Filter, which Followings to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: Enumerable<FollowingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    distinct?: Enumerable<FollowingScalarFieldEnum>
  }


  /**
   * Following create
   */
  export type FollowingCreateArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * The data needed to create a Following.
     */
    data: XOR<FollowingCreateInput, FollowingUncheckedCreateInput>
  }


  /**
   * Following createMany
   */
  export type FollowingCreateManyArgs = {
    /**
     * The data used to create many Followings.
     */
    data: Enumerable<FollowingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Following update
   */
  export type FollowingUpdateArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * The data needed to update a Following.
     */
    data: XOR<FollowingUpdateInput, FollowingUncheckedUpdateInput>
    /**
     * Choose, which Following to update.
     */
    where: FollowingWhereUniqueInput
  }


  /**
   * Following updateMany
   */
  export type FollowingUpdateManyArgs = {
    /**
     * The data used to update Followings.
     */
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyInput>
    /**
     * Filter which Followings to update
     */
    where?: FollowingWhereInput
  }


  /**
   * Following upsert
   */
  export type FollowingUpsertArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * The filter to search for the Following to update in case it exists.
     */
    where: FollowingWhereUniqueInput
    /**
     * In case the Following found by the `where` argument doesn't exist, create a new Following with this data.
     */
    create: XOR<FollowingCreateInput, FollowingUncheckedCreateInput>
    /**
     * In case the Following was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowingUpdateInput, FollowingUncheckedUpdateInput>
  }


  /**
   * Following delete
   */
  export type FollowingDeleteArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
    /**
     * Filter which Following to delete.
     */
    where: FollowingWhereUniqueInput
  }


  /**
   * Following deleteMany
   */
  export type FollowingDeleteManyArgs = {
    /**
     * Filter which Followings to delete
     */
    where?: FollowingWhereInput
  }


  /**
   * Following without action
   */
  export type FollowingArgs = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowingInclude | null
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
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postDetail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postDetail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    postDetail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    postDetail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    postDetail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    postDetail?: true
    createdAt?: true
    updatedAt?: true
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
    userId: number
    postDetail: string
    createdAt: Date
    updatedAt: Date
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
    user?: boolean | UserArgs
    userId?: boolean
    postDetail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reply?: boolean | Post$replyArgs
    postOnHashtag?: boolean | Post$postOnHashtagArgs
    _count?: boolean | PostCountOutputTypeArgs
  }


  export type PostInclude = {
    user?: boolean | UserArgs
    reply?: boolean | Post$replyArgs
    postOnHashtag?: boolean | Post$postOnHashtagArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Post :
    S extends undefined ? never :
    S extends { include: any } & (PostArgs | PostFindManyArgs)
    ? Post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'reply' ? Array < ReplyGetPayload<S['include'][P]>>  :
        P extends 'postOnHashtag' ? Array < PostOnHashtagGetPayload<S['include'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'reply' ? Array < ReplyGetPayload<S['select'][P]>>  :
        P extends 'postOnHashtag' ? Array < PostOnHashtagGetPayload<S['select'][P]>>  :
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

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    reply<T extends Post$replyArgs= {}>(args?: Subset<T, Post$replyArgs>): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>| Null>;

    postOnHashtag<T extends Post$postOnHashtagArgs= {}>(args?: Subset<T, Post$postOnHashtagArgs>): Prisma.PrismaPromise<Array<PostOnHashtagGetPayload<T>>| Null>;

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
   * Post.postOnHashtag
   */
  export type Post$postOnHashtagArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    where?: PostOnHashtagWhereInput
    orderBy?: Enumerable<PostOnHashtagOrderByWithRelationInput>
    cursor?: PostOnHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostOnHashtagScalarFieldEnum>
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
   * Model DirectMsg
   */


  export type AggregateDirectMsg = {
    _count: DirectMsgCountAggregateOutputType | null
    _avg: DirectMsgAvgAggregateOutputType | null
    _sum: DirectMsgSumAggregateOutputType | null
    _min: DirectMsgMinAggregateOutputType | null
    _max: DirectMsgMaxAggregateOutputType | null
  }

  export type DirectMsgAvgAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type DirectMsgSumAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type DirectMsgMinAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    msgDetail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMsgMaxAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    msgDetail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMsgCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    msgDetail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectMsgAvgAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type DirectMsgSumAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type DirectMsgMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    msgDetail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMsgMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    msgDetail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMsgCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    msgDetail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectMsgAggregateArgs = {
    /**
     * Filter which DirectMsg to aggregate.
     */
    where?: DirectMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMsgs to fetch.
     */
    orderBy?: Enumerable<DirectMsgOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectMsgs
    **/
    _count?: true | DirectMsgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectMsgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectMsgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectMsgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectMsgMaxAggregateInputType
  }

  export type GetDirectMsgAggregateType<T extends DirectMsgAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectMsg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectMsg[P]>
      : GetScalarType<T[P], AggregateDirectMsg[P]>
  }




  export type DirectMsgGroupByArgs = {
    where?: DirectMsgWhereInput
    orderBy?: Enumerable<DirectMsgOrderByWithAggregationInput>
    by: DirectMsgScalarFieldEnum[]
    having?: DirectMsgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectMsgCountAggregateInputType | true
    _avg?: DirectMsgAvgAggregateInputType
    _sum?: DirectMsgSumAggregateInputType
    _min?: DirectMsgMinAggregateInputType
    _max?: DirectMsgMaxAggregateInputType
  }


  export type DirectMsgGroupByOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    msgDetail: string
    createdAt: Date
    updatedAt: Date
    _count: DirectMsgCountAggregateOutputType | null
    _avg: DirectMsgAvgAggregateOutputType | null
    _sum: DirectMsgSumAggregateOutputType | null
    _min: DirectMsgMinAggregateOutputType | null
    _max: DirectMsgMaxAggregateOutputType | null
  }

  type GetDirectMsgGroupByPayload<T extends DirectMsgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DirectMsgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectMsgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectMsgGroupByOutputType[P]>
            : GetScalarType<T[P], DirectMsgGroupByOutputType[P]>
        }
      >
    >


  export type DirectMsgSelect = {
    id?: boolean
    from?: boolean | UserArgs
    fromUserId?: boolean
    to?: boolean | UserArgs
    toUserId?: boolean
    msgDetail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type DirectMsgInclude = {
    from?: boolean | UserArgs
    to?: boolean | UserArgs
  }

  export type DirectMsgGetPayload<S extends boolean | null | undefined | DirectMsgArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DirectMsg :
    S extends undefined ? never :
    S extends { include: any } & (DirectMsgArgs | DirectMsgFindManyArgs)
    ? DirectMsg  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'from' ? UserGetPayload<S['include'][P]> :
        P extends 'to' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DirectMsgArgs | DirectMsgFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'from' ? UserGetPayload<S['select'][P]> :
        P extends 'to' ? UserGetPayload<S['select'][P]> :  P extends keyof DirectMsg ? DirectMsg[P] : never
  } 
      : DirectMsg


  type DirectMsgCountArgs = 
    Omit<DirectMsgFindManyArgs, 'select' | 'include'> & {
      select?: DirectMsgCountAggregateInputType | true
    }

  export interface DirectMsgDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DirectMsg that matches the filter.
     * @param {DirectMsgFindUniqueArgs} args - Arguments to find a DirectMsg
     * @example
     * // Get one DirectMsg
     * const directMsg = await prisma.directMsg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DirectMsgFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DirectMsgFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DirectMsg'> extends True ? Prisma__DirectMsgClient<DirectMsgGetPayload<T>> : Prisma__DirectMsgClient<DirectMsgGetPayload<T> | null, null>

    /**
     * Find one DirectMsg that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DirectMsgFindUniqueOrThrowArgs} args - Arguments to find a DirectMsg
     * @example
     * // Get one DirectMsg
     * const directMsg = await prisma.directMsg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DirectMsgFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DirectMsgFindUniqueOrThrowArgs>
    ): Prisma__DirectMsgClient<DirectMsgGetPayload<T>>

    /**
     * Find the first DirectMsg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMsgFindFirstArgs} args - Arguments to find a DirectMsg
     * @example
     * // Get one DirectMsg
     * const directMsg = await prisma.directMsg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DirectMsgFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DirectMsgFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DirectMsg'> extends True ? Prisma__DirectMsgClient<DirectMsgGetPayload<T>> : Prisma__DirectMsgClient<DirectMsgGetPayload<T> | null, null>

    /**
     * Find the first DirectMsg that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMsgFindFirstOrThrowArgs} args - Arguments to find a DirectMsg
     * @example
     * // Get one DirectMsg
     * const directMsg = await prisma.directMsg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DirectMsgFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DirectMsgFindFirstOrThrowArgs>
    ): Prisma__DirectMsgClient<DirectMsgGetPayload<T>>

    /**
     * Find zero or more DirectMsgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMsgFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectMsgs
     * const directMsgs = await prisma.directMsg.findMany()
     * 
     * // Get first 10 DirectMsgs
     * const directMsgs = await prisma.directMsg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directMsgWithIdOnly = await prisma.directMsg.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DirectMsgFindManyArgs>(
      args?: SelectSubset<T, DirectMsgFindManyArgs>
    ): Prisma.PrismaPromise<Array<DirectMsgGetPayload<T>>>

    /**
     * Create a DirectMsg.
     * @param {DirectMsgCreateArgs} args - Arguments to create a DirectMsg.
     * @example
     * // Create one DirectMsg
     * const DirectMsg = await prisma.directMsg.create({
     *   data: {
     *     // ... data to create a DirectMsg
     *   }
     * })
     * 
    **/
    create<T extends DirectMsgCreateArgs>(
      args: SelectSubset<T, DirectMsgCreateArgs>
    ): Prisma__DirectMsgClient<DirectMsgGetPayload<T>>

    /**
     * Create many DirectMsgs.
     *     @param {DirectMsgCreateManyArgs} args - Arguments to create many DirectMsgs.
     *     @example
     *     // Create many DirectMsgs
     *     const directMsg = await prisma.directMsg.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DirectMsgCreateManyArgs>(
      args?: SelectSubset<T, DirectMsgCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DirectMsg.
     * @param {DirectMsgDeleteArgs} args - Arguments to delete one DirectMsg.
     * @example
     * // Delete one DirectMsg
     * const DirectMsg = await prisma.directMsg.delete({
     *   where: {
     *     // ... filter to delete one DirectMsg
     *   }
     * })
     * 
    **/
    delete<T extends DirectMsgDeleteArgs>(
      args: SelectSubset<T, DirectMsgDeleteArgs>
    ): Prisma__DirectMsgClient<DirectMsgGetPayload<T>>

    /**
     * Update one DirectMsg.
     * @param {DirectMsgUpdateArgs} args - Arguments to update one DirectMsg.
     * @example
     * // Update one DirectMsg
     * const directMsg = await prisma.directMsg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DirectMsgUpdateArgs>(
      args: SelectSubset<T, DirectMsgUpdateArgs>
    ): Prisma__DirectMsgClient<DirectMsgGetPayload<T>>

    /**
     * Delete zero or more DirectMsgs.
     * @param {DirectMsgDeleteManyArgs} args - Arguments to filter DirectMsgs to delete.
     * @example
     * // Delete a few DirectMsgs
     * const { count } = await prisma.directMsg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DirectMsgDeleteManyArgs>(
      args?: SelectSubset<T, DirectMsgDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectMsgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMsgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectMsgs
     * const directMsg = await prisma.directMsg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DirectMsgUpdateManyArgs>(
      args: SelectSubset<T, DirectMsgUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DirectMsg.
     * @param {DirectMsgUpsertArgs} args - Arguments to update or create a DirectMsg.
     * @example
     * // Update or create a DirectMsg
     * const directMsg = await prisma.directMsg.upsert({
     *   create: {
     *     // ... data to create a DirectMsg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectMsg we want to update
     *   }
     * })
    **/
    upsert<T extends DirectMsgUpsertArgs>(
      args: SelectSubset<T, DirectMsgUpsertArgs>
    ): Prisma__DirectMsgClient<DirectMsgGetPayload<T>>

    /**
     * Count the number of DirectMsgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMsgCountArgs} args - Arguments to filter DirectMsgs to count.
     * @example
     * // Count the number of DirectMsgs
     * const count = await prisma.directMsg.count({
     *   where: {
     *     // ... the filter for the DirectMsgs we want to count
     *   }
     * })
    **/
    count<T extends DirectMsgCountArgs>(
      args?: Subset<T, DirectMsgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectMsgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectMsg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMsgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectMsgAggregateArgs>(args: Subset<T, DirectMsgAggregateArgs>): Prisma.PrismaPromise<GetDirectMsgAggregateType<T>>

    /**
     * Group by DirectMsg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMsgGroupByArgs} args - Group by arguments.
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
      T extends DirectMsgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectMsgGroupByArgs['orderBy'] }
        : { orderBy?: DirectMsgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirectMsgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectMsgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectMsg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirectMsgClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * DirectMsg base type for findUnique actions
   */
  export type DirectMsgFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * Filter, which DirectMsg to fetch.
     */
    where: DirectMsgWhereUniqueInput
  }

  /**
   * DirectMsg findUnique
   */
  export interface DirectMsgFindUniqueArgs extends DirectMsgFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirectMsg findUniqueOrThrow
   */
  export type DirectMsgFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * Filter, which DirectMsg to fetch.
     */
    where: DirectMsgWhereUniqueInput
  }


  /**
   * DirectMsg base type for findFirst actions
   */
  export type DirectMsgFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * Filter, which DirectMsg to fetch.
     */
    where?: DirectMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMsgs to fetch.
     */
    orderBy?: Enumerable<DirectMsgOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMsgs.
     */
    cursor?: DirectMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMsgs.
     */
    distinct?: Enumerable<DirectMsgScalarFieldEnum>
  }

  /**
   * DirectMsg findFirst
   */
  export interface DirectMsgFindFirstArgs extends DirectMsgFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirectMsg findFirstOrThrow
   */
  export type DirectMsgFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * Filter, which DirectMsg to fetch.
     */
    where?: DirectMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMsgs to fetch.
     */
    orderBy?: Enumerable<DirectMsgOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMsgs.
     */
    cursor?: DirectMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMsgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMsgs.
     */
    distinct?: Enumerable<DirectMsgScalarFieldEnum>
  }


  /**
   * DirectMsg findMany
   */
  export type DirectMsgFindManyArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * Filter, which DirectMsgs to fetch.
     */
    where?: DirectMsgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMsgs to fetch.
     */
    orderBy?: Enumerable<DirectMsgOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectMsgs.
     */
    cursor?: DirectMsgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMsgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMsgs.
     */
    skip?: number
    distinct?: Enumerable<DirectMsgScalarFieldEnum>
  }


  /**
   * DirectMsg create
   */
  export type DirectMsgCreateArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * The data needed to create a DirectMsg.
     */
    data: XOR<DirectMsgCreateInput, DirectMsgUncheckedCreateInput>
  }


  /**
   * DirectMsg createMany
   */
  export type DirectMsgCreateManyArgs = {
    /**
     * The data used to create many DirectMsgs.
     */
    data: Enumerable<DirectMsgCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DirectMsg update
   */
  export type DirectMsgUpdateArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * The data needed to update a DirectMsg.
     */
    data: XOR<DirectMsgUpdateInput, DirectMsgUncheckedUpdateInput>
    /**
     * Choose, which DirectMsg to update.
     */
    where: DirectMsgWhereUniqueInput
  }


  /**
   * DirectMsg updateMany
   */
  export type DirectMsgUpdateManyArgs = {
    /**
     * The data used to update DirectMsgs.
     */
    data: XOR<DirectMsgUpdateManyMutationInput, DirectMsgUncheckedUpdateManyInput>
    /**
     * Filter which DirectMsgs to update
     */
    where?: DirectMsgWhereInput
  }


  /**
   * DirectMsg upsert
   */
  export type DirectMsgUpsertArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * The filter to search for the DirectMsg to update in case it exists.
     */
    where: DirectMsgWhereUniqueInput
    /**
     * In case the DirectMsg found by the `where` argument doesn't exist, create a new DirectMsg with this data.
     */
    create: XOR<DirectMsgCreateInput, DirectMsgUncheckedCreateInput>
    /**
     * In case the DirectMsg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectMsgUpdateInput, DirectMsgUncheckedUpdateInput>
  }


  /**
   * DirectMsg delete
   */
  export type DirectMsgDeleteArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
    /**
     * Filter which DirectMsg to delete.
     */
    where: DirectMsgWhereUniqueInput
  }


  /**
   * DirectMsg deleteMany
   */
  export type DirectMsgDeleteManyArgs = {
    /**
     * Filter which DirectMsgs to delete
     */
    where?: DirectMsgWhereInput
  }


  /**
   * DirectMsg without action
   */
  export type DirectMsgArgs = {
    /**
     * Select specific fields to fetch from the DirectMsg
     */
    select?: DirectMsgSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMsgInclude | null
  }



  /**
   * Model Hashtag
   */


  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  export type HashtagAvgAggregateOutputType = {
    id: number | null
  }

  export type HashtagSumAggregateOutputType = {
    id: number | null
  }

  export type HashtagMinAggregateOutputType = {
    id: number | null
    hashtag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HashtagMaxAggregateOutputType = {
    id: number | null
    hashtag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HashtagCountAggregateOutputType = {
    id: number
    hashtag: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HashtagAvgAggregateInputType = {
    id?: true
  }

  export type HashtagSumAggregateInputType = {
    id?: true
  }

  export type HashtagMinAggregateInputType = {
    id?: true
    hashtag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HashtagMaxAggregateInputType = {
    id?: true
    hashtag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HashtagCountAggregateInputType = {
    id?: true
    hashtag?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HashtagAggregateArgs = {
    /**
     * Filter which Hashtag to aggregate.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: Enumerable<HashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hashtags
    **/
    _count?: true | HashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagMaxAggregateInputType
  }

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>
  }




  export type HashtagGroupByArgs = {
    where?: HashtagWhereInput
    orderBy?: Enumerable<HashtagOrderByWithAggregationInput>
    by: HashtagScalarFieldEnum[]
    having?: HashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagCountAggregateInputType | true
    _avg?: HashtagAvgAggregateInputType
    _sum?: HashtagSumAggregateInputType
    _min?: HashtagMinAggregateInputType
    _max?: HashtagMaxAggregateInputType
  }


  export type HashtagGroupByOutputType = {
    id: number
    hashtag: string
    createdAt: Date
    updatedAt: Date
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  type GetHashtagGroupByPayload<T extends HashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
        }
      >
    >


  export type HashtagSelect = {
    id?: boolean
    hashtag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postOnHashtag?: boolean | Hashtag$postOnHashtagArgs
    _count?: boolean | HashtagCountOutputTypeArgs
  }


  export type HashtagInclude = {
    postOnHashtag?: boolean | Hashtag$postOnHashtagArgs
    _count?: boolean | HashtagCountOutputTypeArgs
  }

  export type HashtagGetPayload<S extends boolean | null | undefined | HashtagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Hashtag :
    S extends undefined ? never :
    S extends { include: any } & (HashtagArgs | HashtagFindManyArgs)
    ? Hashtag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'postOnHashtag' ? Array < PostOnHashtagGetPayload<S['include'][P]>>  :
        P extends '_count' ? HashtagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HashtagArgs | HashtagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'postOnHashtag' ? Array < PostOnHashtagGetPayload<S['select'][P]>>  :
        P extends '_count' ? HashtagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Hashtag ? Hashtag[P] : never
  } 
      : Hashtag


  type HashtagCountArgs = 
    Omit<HashtagFindManyArgs, 'select' | 'include'> & {
      select?: HashtagCountAggregateInputType | true
    }

  export interface HashtagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {HashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HashtagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HashtagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Hashtag'> extends True ? Prisma__HashtagClient<HashtagGetPayload<T>> : Prisma__HashtagClient<HashtagGetPayload<T> | null, null>

    /**
     * Find one Hashtag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HashtagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HashtagFindUniqueOrThrowArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HashtagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HashtagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Hashtag'> extends True ? Prisma__HashtagClient<HashtagGetPayload<T>> : Prisma__HashtagClient<HashtagGetPayload<T> | null, null>

    /**
     * Find the first Hashtag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HashtagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HashtagFindFirstOrThrowArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HashtagFindManyArgs>(
      args?: SelectSubset<T, HashtagFindManyArgs>
    ): Prisma.PrismaPromise<Array<HashtagGetPayload<T>>>

    /**
     * Create a Hashtag.
     * @param {HashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     * 
    **/
    create<T extends HashtagCreateArgs>(
      args: SelectSubset<T, HashtagCreateArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Create many Hashtags.
     *     @param {HashtagCreateManyArgs} args - Arguments to create many Hashtags.
     *     @example
     *     // Create many Hashtags
     *     const hashtag = await prisma.hashtag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HashtagCreateManyArgs>(
      args?: SelectSubset<T, HashtagCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hashtag.
     * @param {HashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     * 
    **/
    delete<T extends HashtagDeleteArgs>(
      args: SelectSubset<T, HashtagDeleteArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Update one Hashtag.
     * @param {HashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HashtagUpdateArgs>(
      args: SelectSubset<T, HashtagUpdateArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Delete zero or more Hashtags.
     * @param {HashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HashtagDeleteManyArgs>(
      args?: SelectSubset<T, HashtagDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HashtagUpdateManyArgs>(
      args: SelectSubset<T, HashtagUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hashtag.
     * @param {HashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
    **/
    upsert<T extends HashtagUpsertArgs>(
      args: SelectSubset<T, HashtagUpsertArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends HashtagCountArgs>(
      args?: Subset<T, HashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HashtagAggregateArgs>(args: Subset<T, HashtagAggregateArgs>): Prisma.PrismaPromise<GetHashtagAggregateType<T>>

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagGroupByArgs} args - Group by arguments.
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
      T extends HashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagGroupByArgs['orderBy'] }
        : { orderBy?: HashtagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HashtagClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    postOnHashtag<T extends Hashtag$postOnHashtagArgs= {}>(args?: Subset<T, Hashtag$postOnHashtagArgs>): Prisma.PrismaPromise<Array<PostOnHashtagGetPayload<T>>| Null>;

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
   * Hashtag base type for findUnique actions
   */
  export type HashtagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findUnique
   */
  export interface HashtagFindUniqueArgs extends HashtagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Hashtag findUniqueOrThrow
   */
  export type HashtagFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }


  /**
   * Hashtag base type for findFirst actions
   */
  export type HashtagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: Enumerable<HashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: Enumerable<HashtagScalarFieldEnum>
  }

  /**
   * Hashtag findFirst
   */
  export interface HashtagFindFirstArgs extends HashtagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Hashtag findFirstOrThrow
   */
  export type HashtagFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: Enumerable<HashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: Enumerable<HashtagScalarFieldEnum>
  }


  /**
   * Hashtag findMany
   */
  export type HashtagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtags to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: Enumerable<HashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    distinct?: Enumerable<HashtagScalarFieldEnum>
  }


  /**
   * Hashtag create
   */
  export type HashtagCreateArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * The data needed to create a Hashtag.
     */
    data: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
  }


  /**
   * Hashtag createMany
   */
  export type HashtagCreateManyArgs = {
    /**
     * The data used to create many Hashtags.
     */
    data: Enumerable<HashtagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Hashtag update
   */
  export type HashtagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * The data needed to update a Hashtag.
     */
    data: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
    /**
     * Choose, which Hashtag to update.
     */
    where: HashtagWhereUniqueInput
  }


  /**
   * Hashtag updateMany
   */
  export type HashtagUpdateManyArgs = {
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
  }


  /**
   * Hashtag upsert
   */
  export type HashtagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * The filter to search for the Hashtag to update in case it exists.
     */
    where: HashtagWhereUniqueInput
    /**
     * In case the Hashtag found by the `where` argument doesn't exist, create a new Hashtag with this data.
     */
    create: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
    /**
     * In case the Hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
  }


  /**
   * Hashtag delete
   */
  export type HashtagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter which Hashtag to delete.
     */
    where: HashtagWhereUniqueInput
  }


  /**
   * Hashtag deleteMany
   */
  export type HashtagDeleteManyArgs = {
    /**
     * Filter which Hashtags to delete
     */
    where?: HashtagWhereInput
  }


  /**
   * Hashtag.postOnHashtag
   */
  export type Hashtag$postOnHashtagArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    where?: PostOnHashtagWhereInput
    orderBy?: Enumerable<PostOnHashtagOrderByWithRelationInput>
    cursor?: PostOnHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostOnHashtagScalarFieldEnum>
  }


  /**
   * Hashtag without action
   */
  export type HashtagArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
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
    reply: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    reply: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    postId: number
    reply: number
    userId: number
    createdAt: number
    updatedAt: number
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
    reply?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    postId?: true
    reply?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    postId?: true
    reply?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    reply: string
    userId: number
    createdAt: Date
    updatedAt: Date
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
    post?: boolean | PostArgs
    postId?: boolean
    reply?: boolean
    replyUser?: boolean | UserArgs
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ReplyInclude = {
    post?: boolean | PostArgs
    replyUser?: boolean | UserArgs
  }

  export type ReplyGetPayload<S extends boolean | null | undefined | ReplyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Reply :
    S extends undefined ? never :
    S extends { include: any } & (ReplyArgs | ReplyFindManyArgs)
    ? Reply  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? PostGetPayload<S['include'][P]> :
        P extends 'replyUser' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ReplyArgs | ReplyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? PostGetPayload<S['select'][P]> :
        P extends 'replyUser' ? UserGetPayload<S['select'][P]> :  P extends keyof Reply ? Reply[P] : never
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

    post<T extends PostArgs= {}>(args?: Subset<T, PostArgs>): Prisma__PostClient<PostGetPayload<T> | Null>;

    replyUser<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Model PostOnHashtag
   */


  export type AggregatePostOnHashtag = {
    _count: PostOnHashtagCountAggregateOutputType | null
    _avg: PostOnHashtagAvgAggregateOutputType | null
    _sum: PostOnHashtagSumAggregateOutputType | null
    _min: PostOnHashtagMinAggregateOutputType | null
    _max: PostOnHashtagMaxAggregateOutputType | null
  }

  export type PostOnHashtagAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
  }

  export type PostOnHashtagSumAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
  }

  export type PostOnHashtagMinAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostOnHashtagMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostOnHashtagCountAggregateOutputType = {
    id: number
    postId: number
    hashtagId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostOnHashtagAvgAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
  }

  export type PostOnHashtagSumAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
  }

  export type PostOnHashtagMinAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostOnHashtagMaxAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostOnHashtagCountAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostOnHashtagAggregateArgs = {
    /**
     * Filter which PostOnHashtag to aggregate.
     */
    where?: PostOnHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostOnHashtags to fetch.
     */
    orderBy?: Enumerable<PostOnHashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostOnHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostOnHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostOnHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostOnHashtags
    **/
    _count?: true | PostOnHashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostOnHashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostOnHashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostOnHashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostOnHashtagMaxAggregateInputType
  }

  export type GetPostOnHashtagAggregateType<T extends PostOnHashtagAggregateArgs> = {
        [P in keyof T & keyof AggregatePostOnHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostOnHashtag[P]>
      : GetScalarType<T[P], AggregatePostOnHashtag[P]>
  }




  export type PostOnHashtagGroupByArgs = {
    where?: PostOnHashtagWhereInput
    orderBy?: Enumerable<PostOnHashtagOrderByWithAggregationInput>
    by: PostOnHashtagScalarFieldEnum[]
    having?: PostOnHashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostOnHashtagCountAggregateInputType | true
    _avg?: PostOnHashtagAvgAggregateInputType
    _sum?: PostOnHashtagSumAggregateInputType
    _min?: PostOnHashtagMinAggregateInputType
    _max?: PostOnHashtagMaxAggregateInputType
  }


  export type PostOnHashtagGroupByOutputType = {
    id: number
    postId: number
    hashtagId: number
    createdAt: Date
    updatedAt: Date
    _count: PostOnHashtagCountAggregateOutputType | null
    _avg: PostOnHashtagAvgAggregateOutputType | null
    _sum: PostOnHashtagSumAggregateOutputType | null
    _min: PostOnHashtagMinAggregateOutputType | null
    _max: PostOnHashtagMaxAggregateOutputType | null
  }

  type GetPostOnHashtagGroupByPayload<T extends PostOnHashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PostOnHashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostOnHashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostOnHashtagGroupByOutputType[P]>
            : GetScalarType<T[P], PostOnHashtagGroupByOutputType[P]>
        }
      >
    >


  export type PostOnHashtagSelect = {
    id?: boolean
    post?: boolean | PostArgs
    hashtag?: boolean | HashtagArgs
    postId?: boolean
    hashtagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type PostOnHashtagInclude = {
    post?: boolean | PostArgs
    hashtag?: boolean | HashtagArgs
  }

  export type PostOnHashtagGetPayload<S extends boolean | null | undefined | PostOnHashtagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostOnHashtag :
    S extends undefined ? never :
    S extends { include: any } & (PostOnHashtagArgs | PostOnHashtagFindManyArgs)
    ? PostOnHashtag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? PostGetPayload<S['include'][P]> :
        P extends 'hashtag' ? HashtagGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostOnHashtagArgs | PostOnHashtagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? PostGetPayload<S['select'][P]> :
        P extends 'hashtag' ? HashtagGetPayload<S['select'][P]> :  P extends keyof PostOnHashtag ? PostOnHashtag[P] : never
  } 
      : PostOnHashtag


  type PostOnHashtagCountArgs = 
    Omit<PostOnHashtagFindManyArgs, 'select' | 'include'> & {
      select?: PostOnHashtagCountAggregateInputType | true
    }

  export interface PostOnHashtagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PostOnHashtag that matches the filter.
     * @param {PostOnHashtagFindUniqueArgs} args - Arguments to find a PostOnHashtag
     * @example
     * // Get one PostOnHashtag
     * const postOnHashtag = await prisma.postOnHashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostOnHashtagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostOnHashtagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostOnHashtag'> extends True ? Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T>> : Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T> | null, null>

    /**
     * Find one PostOnHashtag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostOnHashtagFindUniqueOrThrowArgs} args - Arguments to find a PostOnHashtag
     * @example
     * // Get one PostOnHashtag
     * const postOnHashtag = await prisma.postOnHashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostOnHashtagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PostOnHashtagFindUniqueOrThrowArgs>
    ): Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T>>

    /**
     * Find the first PostOnHashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnHashtagFindFirstArgs} args - Arguments to find a PostOnHashtag
     * @example
     * // Get one PostOnHashtag
     * const postOnHashtag = await prisma.postOnHashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostOnHashtagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostOnHashtagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostOnHashtag'> extends True ? Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T>> : Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T> | null, null>

    /**
     * Find the first PostOnHashtag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnHashtagFindFirstOrThrowArgs} args - Arguments to find a PostOnHashtag
     * @example
     * // Get one PostOnHashtag
     * const postOnHashtag = await prisma.postOnHashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostOnHashtagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostOnHashtagFindFirstOrThrowArgs>
    ): Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T>>

    /**
     * Find zero or more PostOnHashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnHashtagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostOnHashtags
     * const postOnHashtags = await prisma.postOnHashtag.findMany()
     * 
     * // Get first 10 PostOnHashtags
     * const postOnHashtags = await prisma.postOnHashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postOnHashtagWithIdOnly = await prisma.postOnHashtag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostOnHashtagFindManyArgs>(
      args?: SelectSubset<T, PostOnHashtagFindManyArgs>
    ): Prisma.PrismaPromise<Array<PostOnHashtagGetPayload<T>>>

    /**
     * Create a PostOnHashtag.
     * @param {PostOnHashtagCreateArgs} args - Arguments to create a PostOnHashtag.
     * @example
     * // Create one PostOnHashtag
     * const PostOnHashtag = await prisma.postOnHashtag.create({
     *   data: {
     *     // ... data to create a PostOnHashtag
     *   }
     * })
     * 
    **/
    create<T extends PostOnHashtagCreateArgs>(
      args: SelectSubset<T, PostOnHashtagCreateArgs>
    ): Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T>>

    /**
     * Create many PostOnHashtags.
     *     @param {PostOnHashtagCreateManyArgs} args - Arguments to create many PostOnHashtags.
     *     @example
     *     // Create many PostOnHashtags
     *     const postOnHashtag = await prisma.postOnHashtag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostOnHashtagCreateManyArgs>(
      args?: SelectSubset<T, PostOnHashtagCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostOnHashtag.
     * @param {PostOnHashtagDeleteArgs} args - Arguments to delete one PostOnHashtag.
     * @example
     * // Delete one PostOnHashtag
     * const PostOnHashtag = await prisma.postOnHashtag.delete({
     *   where: {
     *     // ... filter to delete one PostOnHashtag
     *   }
     * })
     * 
    **/
    delete<T extends PostOnHashtagDeleteArgs>(
      args: SelectSubset<T, PostOnHashtagDeleteArgs>
    ): Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T>>

    /**
     * Update one PostOnHashtag.
     * @param {PostOnHashtagUpdateArgs} args - Arguments to update one PostOnHashtag.
     * @example
     * // Update one PostOnHashtag
     * const postOnHashtag = await prisma.postOnHashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostOnHashtagUpdateArgs>(
      args: SelectSubset<T, PostOnHashtagUpdateArgs>
    ): Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T>>

    /**
     * Delete zero or more PostOnHashtags.
     * @param {PostOnHashtagDeleteManyArgs} args - Arguments to filter PostOnHashtags to delete.
     * @example
     * // Delete a few PostOnHashtags
     * const { count } = await prisma.postOnHashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostOnHashtagDeleteManyArgs>(
      args?: SelectSubset<T, PostOnHashtagDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostOnHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnHashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostOnHashtags
     * const postOnHashtag = await prisma.postOnHashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostOnHashtagUpdateManyArgs>(
      args: SelectSubset<T, PostOnHashtagUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostOnHashtag.
     * @param {PostOnHashtagUpsertArgs} args - Arguments to update or create a PostOnHashtag.
     * @example
     * // Update or create a PostOnHashtag
     * const postOnHashtag = await prisma.postOnHashtag.upsert({
     *   create: {
     *     // ... data to create a PostOnHashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostOnHashtag we want to update
     *   }
     * })
    **/
    upsert<T extends PostOnHashtagUpsertArgs>(
      args: SelectSubset<T, PostOnHashtagUpsertArgs>
    ): Prisma__PostOnHashtagClient<PostOnHashtagGetPayload<T>>

    /**
     * Count the number of PostOnHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnHashtagCountArgs} args - Arguments to filter PostOnHashtags to count.
     * @example
     * // Count the number of PostOnHashtags
     * const count = await prisma.postOnHashtag.count({
     *   where: {
     *     // ... the filter for the PostOnHashtags we want to count
     *   }
     * })
    **/
    count<T extends PostOnHashtagCountArgs>(
      args?: Subset<T, PostOnHashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostOnHashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostOnHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnHashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostOnHashtagAggregateArgs>(args: Subset<T, PostOnHashtagAggregateArgs>): Prisma.PrismaPromise<GetPostOnHashtagAggregateType<T>>

    /**
     * Group by PostOnHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostOnHashtagGroupByArgs} args - Group by arguments.
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
      T extends PostOnHashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostOnHashtagGroupByArgs['orderBy'] }
        : { orderBy?: PostOnHashtagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostOnHashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostOnHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PostOnHashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostOnHashtagClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    hashtag<T extends HashtagArgs= {}>(args?: Subset<T, HashtagArgs>): Prisma__HashtagClient<HashtagGetPayload<T> | Null>;

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
   * PostOnHashtag base type for findUnique actions
   */
  export type PostOnHashtagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * Filter, which PostOnHashtag to fetch.
     */
    where: PostOnHashtagWhereUniqueInput
  }

  /**
   * PostOnHashtag findUnique
   */
  export interface PostOnHashtagFindUniqueArgs extends PostOnHashtagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PostOnHashtag findUniqueOrThrow
   */
  export type PostOnHashtagFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * Filter, which PostOnHashtag to fetch.
     */
    where: PostOnHashtagWhereUniqueInput
  }


  /**
   * PostOnHashtag base type for findFirst actions
   */
  export type PostOnHashtagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * Filter, which PostOnHashtag to fetch.
     */
    where?: PostOnHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostOnHashtags to fetch.
     */
    orderBy?: Enumerable<PostOnHashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostOnHashtags.
     */
    cursor?: PostOnHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostOnHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostOnHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostOnHashtags.
     */
    distinct?: Enumerable<PostOnHashtagScalarFieldEnum>
  }

  /**
   * PostOnHashtag findFirst
   */
  export interface PostOnHashtagFindFirstArgs extends PostOnHashtagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PostOnHashtag findFirstOrThrow
   */
  export type PostOnHashtagFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * Filter, which PostOnHashtag to fetch.
     */
    where?: PostOnHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostOnHashtags to fetch.
     */
    orderBy?: Enumerable<PostOnHashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostOnHashtags.
     */
    cursor?: PostOnHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostOnHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostOnHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostOnHashtags.
     */
    distinct?: Enumerable<PostOnHashtagScalarFieldEnum>
  }


  /**
   * PostOnHashtag findMany
   */
  export type PostOnHashtagFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * Filter, which PostOnHashtags to fetch.
     */
    where?: PostOnHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostOnHashtags to fetch.
     */
    orderBy?: Enumerable<PostOnHashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostOnHashtags.
     */
    cursor?: PostOnHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostOnHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostOnHashtags.
     */
    skip?: number
    distinct?: Enumerable<PostOnHashtagScalarFieldEnum>
  }


  /**
   * PostOnHashtag create
   */
  export type PostOnHashtagCreateArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * The data needed to create a PostOnHashtag.
     */
    data: XOR<PostOnHashtagCreateInput, PostOnHashtagUncheckedCreateInput>
  }


  /**
   * PostOnHashtag createMany
   */
  export type PostOnHashtagCreateManyArgs = {
    /**
     * The data used to create many PostOnHashtags.
     */
    data: Enumerable<PostOnHashtagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostOnHashtag update
   */
  export type PostOnHashtagUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * The data needed to update a PostOnHashtag.
     */
    data: XOR<PostOnHashtagUpdateInput, PostOnHashtagUncheckedUpdateInput>
    /**
     * Choose, which PostOnHashtag to update.
     */
    where: PostOnHashtagWhereUniqueInput
  }


  /**
   * PostOnHashtag updateMany
   */
  export type PostOnHashtagUpdateManyArgs = {
    /**
     * The data used to update PostOnHashtags.
     */
    data: XOR<PostOnHashtagUpdateManyMutationInput, PostOnHashtagUncheckedUpdateManyInput>
    /**
     * Filter which PostOnHashtags to update
     */
    where?: PostOnHashtagWhereInput
  }


  /**
   * PostOnHashtag upsert
   */
  export type PostOnHashtagUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * The filter to search for the PostOnHashtag to update in case it exists.
     */
    where: PostOnHashtagWhereUniqueInput
    /**
     * In case the PostOnHashtag found by the `where` argument doesn't exist, create a new PostOnHashtag with this data.
     */
    create: XOR<PostOnHashtagCreateInput, PostOnHashtagUncheckedCreateInput>
    /**
     * In case the PostOnHashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostOnHashtagUpdateInput, PostOnHashtagUncheckedUpdateInput>
  }


  /**
   * PostOnHashtag delete
   */
  export type PostOnHashtagDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
    /**
     * Filter which PostOnHashtag to delete.
     */
    where: PostOnHashtagWhereUniqueInput
  }


  /**
   * PostOnHashtag deleteMany
   */
  export type PostOnHashtagDeleteManyArgs = {
    /**
     * Filter which PostOnHashtags to delete
     */
    where?: PostOnHashtagWhereInput
  }


  /**
   * PostOnHashtag without action
   */
  export type PostOnHashtagArgs = {
    /**
     * Select specific fields to fetch from the PostOnHashtag
     */
    select?: PostOnHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostOnHashtagInclude | null
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


  export const DirectMsgScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    msgDetail: 'msgDetail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectMsgScalarFieldEnum = (typeof DirectMsgScalarFieldEnum)[keyof typeof DirectMsgScalarFieldEnum]


  export const FollowingScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FollowingScalarFieldEnum = (typeof FollowingScalarFieldEnum)[keyof typeof FollowingScalarFieldEnum]


  export const HashtagScalarFieldEnum: {
    id: 'id',
    hashtag: 'hashtag',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum]


  export const PostOnHashtagScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    hashtagId: 'hashtagId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostOnHashtagScalarFieldEnum = (typeof PostOnHashtagScalarFieldEnum)[keyof typeof PostOnHashtagScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postDetail: 'postDetail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ReplyScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    reply: 'reply',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


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


  export const TriviaQuizChoiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quizId: 'quizId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaQuizChoiceScalarFieldEnum = (typeof TriviaQuizChoiceScalarFieldEnum)[keyof typeof TriviaQuizChoiceScalarFieldEnum]


  export const TriviaQuizScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId',
    answerId: 'answerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaQuizScalarFieldEnum = (typeof TriviaQuizScalarFieldEnum)[keyof typeof TriviaQuizScalarFieldEnum]


  export const TriviaRoundQuizChoiceScalarFieldEnum: {
    id: 'id',
    roundQuizId: 'roundQuizId',
    quizChoiceId: 'quizChoiceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaRoundQuizChoiceScalarFieldEnum = (typeof TriviaRoundQuizChoiceScalarFieldEnum)[keyof typeof TriviaRoundQuizChoiceScalarFieldEnum]


  export const TriviaRoundQuizScalarFieldEnum: {
    id: 'id',
    roundId: 'roundId',
    quizId: 'quizId',
    playerChooseChoice: 'playerChooseChoice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaRoundQuizScalarFieldEnum = (typeof TriviaRoundQuizScalarFieldEnum)[keyof typeof TriviaRoundQuizScalarFieldEnum]


  export const TriviaRoundScalarFieldEnum: {
    id: 'id',
    score: 'score',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaRoundScalarFieldEnum = (typeof TriviaRoundScalarFieldEnum)[keyof typeof TriviaRoundScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    BinKitchenMenu?: BinKitchenMenuListRelationFilter
  }

  export type BinKitchenCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BinKitchenMenu?: BinKitchenMenuOrderByRelationAggregateInput
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
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemListRelationFilter
  }

  export type BinKitchenMenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    category?: BinKitchenCategoryOrderByWithRelationInput
    categoryName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BinKitchenOrderItem?: BinKitchenOrderItemOrderByRelationAggregateInput
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
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemListRelationFilter
  }

  export type BinKitchenOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    BinKitchenOrderItem?: BinKitchenOrderItemOrderByRelationAggregateInput
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
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    triviaQuiz?: TriviaQuizListRelationFilter
    triviaRound?: TriviaRoundListRelationFilter
  }

  export type TriviaCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triviaQuiz?: TriviaQuizOrderByRelationAggregateInput
    triviaRound?: TriviaRoundOrderByRelationAggregateInput
  }

  export type TriviaCategoryWhereUniqueInput = {
    id?: number
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
    name?: StringFilter | string
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput>
    categoryId?: IntFilter | number
    answerId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    triviaQuizChoice?: TriviaQuizChoiceListRelationFilter
    triviaRoundQuiz?: TriviaRoundQuizListRelationFilter
  }

  export type TriviaQuizOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    categoryId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triviaQuizChoice?: TriviaQuizChoiceOrderByRelationAggregateInput
    triviaRoundQuiz?: TriviaRoundQuizOrderByRelationAggregateInput
  }

  export type TriviaQuizWhereUniqueInput = {
    id?: number
  }

  export type TriviaQuizOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    categoryId?: IntWithAggregatesFilter | number
    answerId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaQuizChoiceWhereInput = {
    AND?: Enumerable<TriviaQuizChoiceWhereInput>
    OR?: Enumerable<TriviaQuizChoiceWhereInput>
    NOT?: Enumerable<TriviaQuizChoiceWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    quiz?: XOR<TriviaQuizRelationFilter, TriviaQuizWhereInput>
    quizId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceListRelationFilter
  }

  export type TriviaQuizChoiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quiz?: TriviaQuizOrderByWithRelationInput
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceOrderByRelationAggregateInput
  }

  export type TriviaQuizChoiceWhereUniqueInput = {
    id?: number
  }

  export type TriviaQuizChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaQuizChoiceCountOrderByAggregateInput
    _avg?: TriviaQuizChoiceAvgOrderByAggregateInput
    _max?: TriviaQuizChoiceMaxOrderByAggregateInput
    _min?: TriviaQuizChoiceMinOrderByAggregateInput
    _sum?: TriviaQuizChoiceSumOrderByAggregateInput
  }

  export type TriviaQuizChoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaQuizChoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaQuizChoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaQuizChoiceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    quizId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaRoundWhereInput = {
    AND?: Enumerable<TriviaRoundWhereInput>
    OR?: Enumerable<TriviaRoundWhereInput>
    NOT?: Enumerable<TriviaRoundWhereInput>
    id?: IntFilter | number
    score?: IntFilter | number
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput>
    categoryId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    triviaRoundQuiz?: TriviaRoundQuizListRelationFilter
  }

  export type TriviaRoundOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triviaRoundQuiz?: TriviaRoundQuizOrderByRelationAggregateInput
  }

  export type TriviaRoundWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    categoryId?: SortOrder
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
    score?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaRoundQuizWhereInput = {
    AND?: Enumerable<TriviaRoundQuizWhereInput>
    OR?: Enumerable<TriviaRoundQuizWhereInput>
    NOT?: Enumerable<TriviaRoundQuizWhereInput>
    id?: IntFilter | number
    round?: XOR<TriviaRoundRelationFilter, TriviaRoundWhereInput>
    roundId?: IntFilter | number
    quiz?: XOR<TriviaQuizRelationFilter, TriviaQuizWhereInput>
    quizId?: IntFilter | number
    playerChooseChoice?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceListRelationFilter
  }

  export type TriviaRoundQuizOrderByWithRelationInput = {
    id?: SortOrder
    round?: TriviaRoundOrderByWithRelationInput
    roundId?: SortOrder
    quiz?: TriviaQuizOrderByWithRelationInput
    quizId?: SortOrder
    playerChooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceOrderByRelationAggregateInput
  }

  export type TriviaRoundQuizWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundQuizOrderByWithAggregationInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    playerChooseChoice?: SortOrder
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
    playerChooseChoice?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TriviaRoundQuizChoiceWhereInput = {
    AND?: Enumerable<TriviaRoundQuizChoiceWhereInput>
    OR?: Enumerable<TriviaRoundQuizChoiceWhereInput>
    NOT?: Enumerable<TriviaRoundQuizChoiceWhereInput>
    id?: IntFilter | number
    roundQuiz?: XOR<TriviaRoundQuizRelationFilter, TriviaRoundQuizWhereInput>
    roundQuizId?: IntFilter | number
    roundQuizChoice?: XOR<TriviaQuizChoiceRelationFilter, TriviaQuizChoiceWhereInput>
    quizChoiceId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaRoundQuizChoiceOrderByWithRelationInput = {
    id?: SortOrder
    roundQuiz?: TriviaRoundQuizOrderByWithRelationInput
    roundQuizId?: SortOrder
    roundQuizChoice?: TriviaQuizChoiceOrderByWithRelationInput
    quizChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizChoiceWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundQuizChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    quizChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaRoundQuizChoiceCountOrderByAggregateInput
    _avg?: TriviaRoundQuizChoiceAvgOrderByAggregateInput
    _max?: TriviaRoundQuizChoiceMaxOrderByAggregateInput
    _min?: TriviaRoundQuizChoiceMinOrderByAggregateInput
    _sum?: TriviaRoundQuizChoiceSumOrderByAggregateInput
  }

  export type TriviaRoundQuizChoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaRoundQuizChoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaRoundQuizChoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaRoundQuizChoiceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roundQuizId?: IntWithAggregatesFilter | number
    quizChoiceId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    profileImage?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    fromFolowing?: FollowingListRelationFilter
    toFollowing?: FollowingListRelationFilter
    post?: PostListRelationFilter
    fromDirectMessage?: DirectMsgListRelationFilter
    toDirectMessage?: DirectMsgListRelationFilter
    Reply?: ReplyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromFolowing?: FollowingOrderByRelationAggregateInput
    toFollowing?: FollowingOrderByRelationAggregateInput
    post?: PostOrderByRelationAggregateInput
    fromDirectMessage?: DirectMsgOrderByRelationAggregateInput
    toDirectMessage?: DirectMsgOrderByRelationAggregateInput
    Reply?: ReplyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FollowingWhereInput = {
    AND?: Enumerable<FollowingWhereInput>
    OR?: Enumerable<FollowingWhereInput>
    NOT?: Enumerable<FollowingWhereInput>
    id?: IntFilter | number
    from?: XOR<UserRelationFilter, UserWhereInput>
    fromUserId?: IntFilter | number
    to?: XOR<UserRelationFilter, UserWhereInput>
    toUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type FollowingOrderByWithRelationInput = {
    id?: SortOrder
    from?: UserOrderByWithRelationInput
    fromUserId?: SortOrder
    to?: UserOrderByWithRelationInput
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowingWhereUniqueInput = {
    id?: number
  }

  export type FollowingOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FollowingCountOrderByAggregateInput
    _avg?: FollowingAvgOrderByAggregateInput
    _max?: FollowingMaxOrderByAggregateInput
    _min?: FollowingMinOrderByAggregateInput
    _sum?: FollowingSumOrderByAggregateInput
  }

  export type FollowingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FollowingScalarWhereWithAggregatesInput>
    OR?: Enumerable<FollowingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FollowingScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fromUserId?: IntWithAggregatesFilter | number
    toUserId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    postDetail?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    reply?: ReplyListRelationFilter
    postOnHashtag?: PostOnHashtagListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    postDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reply?: ReplyOrderByRelationAggregateInput
    postOnHashtag?: PostOnHashtagOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    userId?: IntWithAggregatesFilter | number
    postDetail?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DirectMsgWhereInput = {
    AND?: Enumerable<DirectMsgWhereInput>
    OR?: Enumerable<DirectMsgWhereInput>
    NOT?: Enumerable<DirectMsgWhereInput>
    id?: IntFilter | number
    from?: XOR<UserRelationFilter, UserWhereInput>
    fromUserId?: IntFilter | number
    to?: XOR<UserRelationFilter, UserWhereInput>
    toUserId?: IntFilter | number
    msgDetail?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMsgOrderByWithRelationInput = {
    id?: SortOrder
    from?: UserOrderByWithRelationInput
    fromUserId?: SortOrder
    to?: UserOrderByWithRelationInput
    toUserId?: SortOrder
    msgDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMsgWhereUniqueInput = {
    id?: number
  }

  export type DirectMsgOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    msgDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectMsgCountOrderByAggregateInput
    _avg?: DirectMsgAvgOrderByAggregateInput
    _max?: DirectMsgMaxOrderByAggregateInput
    _min?: DirectMsgMinOrderByAggregateInput
    _sum?: DirectMsgSumOrderByAggregateInput
  }

  export type DirectMsgScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DirectMsgScalarWhereWithAggregatesInput>
    OR?: Enumerable<DirectMsgScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DirectMsgScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fromUserId?: IntWithAggregatesFilter | number
    toUserId?: IntWithAggregatesFilter | number
    msgDetail?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HashtagWhereInput = {
    AND?: Enumerable<HashtagWhereInput>
    OR?: Enumerable<HashtagWhereInput>
    NOT?: Enumerable<HashtagWhereInput>
    id?: IntFilter | number
    hashtag?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    postOnHashtag?: PostOnHashtagListRelationFilter
  }

  export type HashtagOrderByWithRelationInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postOnHashtag?: PostOnHashtagOrderByRelationAggregateInput
  }

  export type HashtagWhereUniqueInput = {
    id?: number
  }

  export type HashtagOrderByWithAggregationInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HashtagCountOrderByAggregateInput
    _avg?: HashtagAvgOrderByAggregateInput
    _max?: HashtagMaxOrderByAggregateInput
    _min?: HashtagMinOrderByAggregateInput
    _sum?: HashtagSumOrderByAggregateInput
  }

  export type HashtagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HashtagScalarWhereWithAggregatesInput>
    OR?: Enumerable<HashtagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HashtagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    hashtag?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ReplyWhereInput = {
    AND?: Enumerable<ReplyWhereInput>
    OR?: Enumerable<ReplyWhereInput>
    NOT?: Enumerable<ReplyWhereInput>
    id?: IntFilter | number
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    reply?: StringFilter | string
    replyUser?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    post?: PostOrderByWithRelationInput
    postId?: SortOrder
    reply?: SortOrder
    replyUser?: UserOrderByWithRelationInput
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReplyWhereUniqueInput = {
    id?: number
  }

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    reply?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    reply?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostOnHashtagWhereInput = {
    AND?: Enumerable<PostOnHashtagWhereInput>
    OR?: Enumerable<PostOnHashtagWhereInput>
    NOT?: Enumerable<PostOnHashtagWhereInput>
    id?: IntFilter | number
    post?: XOR<PostRelationFilter, PostWhereInput>
    hashtag?: XOR<HashtagRelationFilter, HashtagWhereInput>
    postId?: IntFilter | number
    hashtagId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PostOnHashtagOrderByWithRelationInput = {
    id?: SortOrder
    post?: PostOrderByWithRelationInput
    hashtag?: HashtagOrderByWithRelationInput
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostOnHashtagWhereUniqueInput = {
    id?: number
  }

  export type PostOnHashtagOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostOnHashtagCountOrderByAggregateInput
    _avg?: PostOnHashtagAvgOrderByAggregateInput
    _max?: PostOnHashtagMaxOrderByAggregateInput
    _min?: PostOnHashtagMinOrderByAggregateInput
    _sum?: PostOnHashtagSumOrderByAggregateInput
  }

  export type PostOnHashtagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostOnHashtagScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostOnHashtagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostOnHashtagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    postId?: IntWithAggregatesFilter | number
    hashtagId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BinKitchenCategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BinKitchenMenu?: BinKitchenMenuCreateNestedManyWithoutCategoryInput
  }

  export type BinKitchenCategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BinKitchenMenu?: BinKitchenMenuUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BinKitchenCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinKitchenMenu?: BinKitchenMenuUpdateManyWithoutCategoryNestedInput
  }

  export type BinKitchenCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinKitchenMenu?: BinKitchenMenuUncheckedUpdateManyWithoutCategoryNestedInput
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
    category?: BinKitchenCategoryCreateNestedOneWithoutBinKitchenMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemCreateNestedManyWithoutMenuInput
  }

  export type BinKitchenMenuUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUncheckedCreateNestedManyWithoutMenuInput
  }

  export type BinKitchenMenuUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: BinKitchenCategoryUpdateOneWithoutBinKitchenMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUpdateManyWithoutMenuNestedInput
  }

  export type BinKitchenMenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUncheckedUpdateManyWithoutMenuNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemCreateNestedManyWithoutOrderInput
  }

  export type BinKitchenOrderUncheckedCreateInput = {
    id?: number
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type BinKitchenOrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type BinKitchenOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUncheckedUpdateManyWithoutOrderNestedInput
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
    menu: BinKitchenMenuCreateNestedOneWithoutBinKitchenOrderItemInput
    order?: BinKitchenOrderCreateNestedOneWithoutBinKitchenOrderItemInput
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
    menu?: BinKitchenMenuUpdateOneRequiredWithoutBinKitchenOrderItemNestedInput
    order?: BinKitchenOrderUpdateOneWithoutBinKitchenOrderItemNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuiz?: TriviaQuizCreateNestedManyWithoutCategoryInput
    triviaRound?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuiz?: TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput
    triviaRound?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuiz?: TriviaQuizUpdateManyWithoutCategoryNestedInput
    triviaRound?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuiz?: TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput
    triviaRound?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
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
    name: string
    category: TriviaCategoryCreateNestedOneWithoutTriviaQuizInput
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuizChoice?: TriviaQuizChoiceCreateNestedManyWithoutQuizInput
    triviaRoundQuiz?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateInput = {
    id?: number
    name: string
    categoryId: number
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuizChoice?: TriviaQuizChoiceUncheckedCreateNestedManyWithoutQuizInput
    triviaRoundQuiz?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneRequiredWithoutTriviaQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuizChoice?: TriviaQuizChoiceUpdateManyWithoutQuizNestedInput
    triviaRoundQuiz?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuizChoice?: TriviaQuizChoiceUncheckedUpdateManyWithoutQuizNestedInput
    triviaRoundQuiz?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizCreateManyInput = {
    id?: number
    name: string
    categoryId: number
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizChoiceCreateInput = {
    name: string
    quiz: TriviaQuizCreateNestedOneWithoutTriviaQuizChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceCreateNestedManyWithoutRoundQuizChoiceInput
  }

  export type TriviaQuizChoiceUncheckedCreateInput = {
    id?: number
    name: string
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedCreateNestedManyWithoutRoundQuizChoiceInput
  }

  export type TriviaQuizChoiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quiz?: TriviaQuizUpdateOneRequiredWithoutTriviaQuizChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUpdateManyWithoutRoundQuizChoiceNestedInput
  }

  export type TriviaQuizChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedUpdateManyWithoutRoundQuizChoiceNestedInput
  }

  export type TriviaQuizChoiceCreateManyInput = {
    id?: number
    name: string
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizChoiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundCreateInput = {
    score: number
    category: TriviaCategoryCreateNestedOneWithoutTriviaRoundInput
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuiz?: TriviaRoundQuizCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateInput = {
    id?: number
    score: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuiz?: TriviaRoundQuizUncheckedCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    category?: TriviaCategoryUpdateOneRequiredWithoutTriviaRoundNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuiz?: TriviaRoundQuizUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuiz?: TriviaRoundQuizUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundCreateManyInput = {
    id?: number
    score: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateInput = {
    round: TriviaRoundCreateNestedOneWithoutTriviaRoundQuizInput
    quiz: TriviaQuizCreateNestedOneWithoutTriviaRoundQuizInput
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceCreateNestedManyWithoutRoundQuizInput
  }

  export type TriviaRoundQuizUncheckedCreateInput = {
    id?: number
    roundId: number
    quizId: number
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedCreateNestedManyWithoutRoundQuizInput
  }

  export type TriviaRoundQuizUpdateInput = {
    round?: TriviaRoundUpdateOneRequiredWithoutTriviaRoundQuizNestedInput
    quiz?: TriviaQuizUpdateOneRequiredWithoutTriviaRoundQuizNestedInput
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUpdateManyWithoutRoundQuizNestedInput
  }

  export type TriviaRoundQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedUpdateManyWithoutRoundQuizNestedInput
  }

  export type TriviaRoundQuizCreateManyInput = {
    id?: number
    roundId: number
    quizId: number
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateManyMutationInput = {
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizChoiceCreateInput = {
    roundQuiz: TriviaRoundQuizCreateNestedOneWithoutTriviaRoundQuizChoiceInput
    roundQuizChoice: TriviaQuizChoiceCreateNestedOneWithoutTriviaRoundQuizChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceUncheckedCreateInput = {
    id?: number
    roundQuizId: number
    quizChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceUpdateInput = {
    roundQuiz?: TriviaRoundQuizUpdateOneRequiredWithoutTriviaRoundQuizChoiceNestedInput
    roundQuizChoice?: TriviaQuizChoiceUpdateOneRequiredWithoutTriviaRoundQuizChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuizId?: IntFieldUpdateOperationsInput | number
    quizChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizChoiceCreateManyInput = {
    id?: number
    roundQuizId: number
    quizChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuizId?: IntFieldUpdateOperationsInput | number
    quizChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingCreateNestedManyWithoutFromInput
    toFollowing?: FollowingCreateNestedManyWithoutToInput
    post?: PostCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgCreateNestedManyWithoutToInput
    Reply?: ReplyCreateNestedManyWithoutReplyUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: FollowingUncheckedCreateNestedManyWithoutToInput
    post?: PostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutToInput
    Reply?: ReplyUncheckedCreateNestedManyWithoutReplyUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUpdateManyWithoutToNestedInput
    post?: PostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUpdateManyWithoutToNestedInput
    Reply?: ReplyUpdateManyWithoutReplyUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUncheckedUpdateManyWithoutToNestedInput
    post?: PostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUncheckedUpdateManyWithoutToNestedInput
    Reply?: ReplyUncheckedUpdateManyWithoutReplyUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingCreateInput = {
    from: UserCreateNestedOneWithoutFromFolowingInput
    to: UserCreateNestedOneWithoutToFollowingInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUncheckedCreateInput = {
    id?: number
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUpdateInput = {
    from?: UserUpdateOneRequiredWithoutFromFolowingNestedInput
    to?: UserUpdateOneRequiredWithoutToFollowingNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingCreateManyInput = {
    id?: number
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    user: UserCreateNestedOneWithoutPostInput
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutPostInput
    postOnHashtag?: PostOnHashtagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId: number
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutPostInput
    postOnHashtag?: PostOnHashtagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    user?: UserUpdateOneRequiredWithoutPostNestedInput
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutPostNestedInput
    postOnHashtag?: PostOnHashtagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutPostNestedInput
    postOnHashtag?: PostOnHashtagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    userId: number
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgCreateInput = {
    from: UserCreateNestedOneWithoutFromDirectMessageInput
    to: UserCreateNestedOneWithoutToDirectMessageInput
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgUncheckedCreateInput = {
    id?: number
    fromUserId: number
    toUserId: number
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgUpdateInput = {
    from?: UserUpdateOneRequiredWithoutFromDirectMessageNestedInput
    to?: UserUpdateOneRequiredWithoutToDirectMessageNestedInput
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgCreateManyInput = {
    id?: number
    fromUserId: number
    toUserId: number
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgUpdateManyMutationInput = {
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagCreateInput = {
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postOnHashtag?: PostOnHashtagCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUncheckedCreateInput = {
    id?: number
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postOnHashtag?: PostOnHashtagUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUpdateInput = {
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postOnHashtag?: PostOnHashtagUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postOnHashtag?: PostOnHashtagUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagCreateManyInput = {
    id?: number
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagUpdateManyMutationInput = {
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateInput = {
    post: PostCreateNestedOneWithoutReplyInput
    reply: string
    replyUser: UserCreateNestedOneWithoutReplyInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUncheckedCreateInput = {
    id?: number
    postId: number
    reply: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUpdateInput = {
    post?: PostUpdateOneRequiredWithoutReplyNestedInput
    reply?: StringFieldUpdateOperationsInput | string
    replyUser?: UserUpdateOneRequiredWithoutReplyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyInput = {
    id?: number
    postId: number
    reply: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUpdateManyMutationInput = {
    reply?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagCreateInput = {
    post: PostCreateNestedOneWithoutPostOnHashtagInput
    hashtag: HashtagCreateNestedOneWithoutPostOnHashtagInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagUncheckedCreateInput = {
    id?: number
    postId: number
    hashtagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagUpdateInput = {
    post?: PostUpdateOneRequiredWithoutPostOnHashtagNestedInput
    hashtag?: HashtagUpdateOneRequiredWithoutPostOnHashtagNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagCreateManyInput = {
    id?: number
    postId: number
    hashtagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
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

  export type BinKitchenMenuListRelationFilter = {
    every?: BinKitchenMenuWhereInput
    some?: BinKitchenMenuWhereInput
    none?: BinKitchenMenuWhereInput
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
    is?: TriviaCategoryWhereInput
    isNot?: TriviaCategoryWhereInput
  }

  export type TriviaQuizChoiceListRelationFilter = {
    every?: TriviaQuizChoiceWhereInput
    some?: TriviaQuizChoiceWhereInput
    none?: TriviaQuizChoiceWhereInput
  }

  export type TriviaRoundQuizListRelationFilter = {
    every?: TriviaRoundQuizWhereInput
    some?: TriviaRoundQuizWhereInput
    none?: TriviaRoundQuizWhereInput
  }

  export type TriviaQuizChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaRoundQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaQuizCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    answerId?: SortOrder
  }

  export type TriviaQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaQuizMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    answerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaQuizSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    answerId?: SortOrder
  }

  export type TriviaQuizRelationFilter = {
    is?: TriviaQuizWhereInput
    isNot?: TriviaQuizWhereInput
  }

  export type TriviaRoundQuizChoiceListRelationFilter = {
    every?: TriviaRoundQuizChoiceWhereInput
    some?: TriviaRoundQuizChoiceWhereInput
    none?: TriviaRoundQuizChoiceWhereInput
  }

  export type TriviaRoundQuizChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaQuizChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaQuizChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaQuizChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaQuizChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaQuizChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaRoundCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    categoryId?: SortOrder
  }

  export type TriviaRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    categoryId?: SortOrder
  }

  export type TriviaRoundRelationFilter = {
    is?: TriviaRoundWhereInput
    isNot?: TriviaRoundWhereInput
  }

  export type TriviaRoundQuizCountOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    playerChooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    playerChooseChoice?: SortOrder
  }

  export type TriviaRoundQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    playerChooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizMinOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    playerChooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizSumOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    quizId?: SortOrder
    playerChooseChoice?: SortOrder
  }

  export type TriviaRoundQuizRelationFilter = {
    is?: TriviaRoundQuizWhereInput
    isNot?: TriviaRoundQuizWhereInput
  }

  export type TriviaQuizChoiceRelationFilter = {
    is?: TriviaQuizChoiceWhereInput
    isNot?: TriviaQuizChoiceWhereInput
  }

  export type TriviaRoundQuizChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    quizChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    quizChoiceId?: SortOrder
  }

  export type TriviaRoundQuizChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    quizChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    quizChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaRoundQuizChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    quizChoiceId?: SortOrder
  }

  export type FollowingListRelationFilter = {
    every?: FollowingWhereInput
    some?: FollowingWhereInput
    none?: FollowingWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type DirectMsgListRelationFilter = {
    every?: DirectMsgWhereInput
    some?: DirectMsgWhereInput
    none?: DirectMsgWhereInput
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type FollowingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectMsgOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FollowingCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowingAvgOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type FollowingMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowingMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FollowingSumOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type PostOnHashtagListRelationFilter = {
    every?: PostOnHashtagWhereInput
    some?: PostOnHashtagWhereInput
    none?: PostOnHashtagWhereInput
  }

  export type PostOnHashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DirectMsgCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    msgDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMsgAvgOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type DirectMsgMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    msgDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMsgMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    msgDetail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMsgSumOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type HashtagCountOrderByAggregateInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagMinOrderByAggregateInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reply?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reply?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reply?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReplySumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type HashtagRelationFilter = {
    is?: HashtagWhereInput
    isNot?: HashtagWhereInput
  }

  export type PostOnHashtagCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostOnHashtagAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostOnHashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostOnHashtagMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostOnHashtagSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type BinKitchenCategoryCreateNestedOneWithoutBinKitchenMenuInput = {
    create?: XOR<BinKitchenCategoryCreateWithoutBinKitchenMenuInput, BinKitchenCategoryUncheckedCreateWithoutBinKitchenMenuInput>
    connectOrCreate?: BinKitchenCategoryCreateOrConnectWithoutBinKitchenMenuInput
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

  export type BinKitchenCategoryUpdateOneWithoutBinKitchenMenuNestedInput = {
    create?: XOR<BinKitchenCategoryCreateWithoutBinKitchenMenuInput, BinKitchenCategoryUncheckedCreateWithoutBinKitchenMenuInput>
    connectOrCreate?: BinKitchenCategoryCreateOrConnectWithoutBinKitchenMenuInput
    upsert?: BinKitchenCategoryUpsertWithoutBinKitchenMenuInput
    disconnect?: boolean
    delete?: boolean
    connect?: BinKitchenCategoryWhereUniqueInput
    update?: XOR<BinKitchenCategoryUpdateWithoutBinKitchenMenuInput, BinKitchenCategoryUncheckedUpdateWithoutBinKitchenMenuInput>
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

  export type BinKitchenMenuCreateNestedOneWithoutBinKitchenOrderItemInput = {
    create?: XOR<BinKitchenMenuCreateWithoutBinKitchenOrderItemInput, BinKitchenMenuUncheckedCreateWithoutBinKitchenOrderItemInput>
    connectOrCreate?: BinKitchenMenuCreateOrConnectWithoutBinKitchenOrderItemInput
    connect?: BinKitchenMenuWhereUniqueInput
  }

  export type BinKitchenOrderCreateNestedOneWithoutBinKitchenOrderItemInput = {
    create?: XOR<BinKitchenOrderCreateWithoutBinKitchenOrderItemInput, BinKitchenOrderUncheckedCreateWithoutBinKitchenOrderItemInput>
    connectOrCreate?: BinKitchenOrderCreateOrConnectWithoutBinKitchenOrderItemInput
    connect?: BinKitchenOrderWhereUniqueInput
  }

  export type BinKitchenMenuUpdateOneRequiredWithoutBinKitchenOrderItemNestedInput = {
    create?: XOR<BinKitchenMenuCreateWithoutBinKitchenOrderItemInput, BinKitchenMenuUncheckedCreateWithoutBinKitchenOrderItemInput>
    connectOrCreate?: BinKitchenMenuCreateOrConnectWithoutBinKitchenOrderItemInput
    upsert?: BinKitchenMenuUpsertWithoutBinKitchenOrderItemInput
    connect?: BinKitchenMenuWhereUniqueInput
    update?: XOR<BinKitchenMenuUpdateWithoutBinKitchenOrderItemInput, BinKitchenMenuUncheckedUpdateWithoutBinKitchenOrderItemInput>
  }

  export type BinKitchenOrderUpdateOneWithoutBinKitchenOrderItemNestedInput = {
    create?: XOR<BinKitchenOrderCreateWithoutBinKitchenOrderItemInput, BinKitchenOrderUncheckedCreateWithoutBinKitchenOrderItemInput>
    connectOrCreate?: BinKitchenOrderCreateOrConnectWithoutBinKitchenOrderItemInput
    upsert?: BinKitchenOrderUpsertWithoutBinKitchenOrderItemInput
    disconnect?: boolean
    delete?: boolean
    connect?: BinKitchenOrderWhereUniqueInput
    update?: XOR<BinKitchenOrderUpdateWithoutBinKitchenOrderItemInput, BinKitchenOrderUncheckedUpdateWithoutBinKitchenOrderItemInput>
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

  export type TriviaCategoryCreateNestedOneWithoutTriviaQuizInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaQuizInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaQuizInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaQuizChoiceCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaQuizChoiceCreateWithoutQuizInput>, Enumerable<TriviaQuizChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaQuizChoiceCreateOrConnectWithoutQuizInput>
    createMany?: TriviaQuizChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuizCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaQuizChoiceUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaQuizChoiceCreateWithoutQuizInput>, Enumerable<TriviaQuizChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaQuizChoiceCreateOrConnectWithoutQuizInput>
    createMany?: TriviaQuizChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaRoundQuizCreateWithoutQuizInput>, Enumerable<TriviaRoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizCreateOrConnectWithoutQuizInput>
    createMany?: TriviaRoundQuizCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaRoundQuizWhereUniqueInput>
  }

  export type TriviaCategoryUpdateOneRequiredWithoutTriviaQuizNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaQuizInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaQuizInput
    upsert?: TriviaCategoryUpsertWithoutTriviaQuizInput
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutTriviaQuizInput, TriviaCategoryUncheckedUpdateWithoutTriviaQuizInput>
  }

  export type TriviaQuizChoiceUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaQuizChoiceCreateWithoutQuizInput>, Enumerable<TriviaQuizChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaQuizChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaQuizChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaQuizChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
    update?: Enumerable<TriviaQuizChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaQuizChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaQuizChoiceScalarWhereInput>
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

  export type TriviaQuizChoiceUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaQuizChoiceCreateWithoutQuizInput>, Enumerable<TriviaQuizChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaQuizChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaQuizChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaQuizChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaQuizChoiceWhereUniqueInput>
    update?: Enumerable<TriviaQuizChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaQuizChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaQuizChoiceScalarWhereInput>
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

  export type TriviaQuizCreateNestedOneWithoutTriviaQuizChoiceInput = {
    create?: XOR<TriviaQuizCreateWithoutTriviaQuizChoiceInput, TriviaQuizUncheckedCreateWithoutTriviaQuizChoiceInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutTriviaQuizChoiceInput
    connect?: TriviaQuizWhereUniqueInput
  }

  export type TriviaRoundQuizChoiceCreateNestedManyWithoutRoundQuizChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuizChoiceCreateWithoutRoundQuizChoiceInput>, Enumerable<TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizChoiceInput>
    createMany?: TriviaRoundQuizChoiceCreateManyRoundQuizChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuizChoiceUncheckedCreateNestedManyWithoutRoundQuizChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuizChoiceCreateWithoutRoundQuizChoiceInput>, Enumerable<TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizChoiceInput>
    createMany?: TriviaRoundQuizChoiceCreateManyRoundQuizChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
  }

  export type TriviaQuizUpdateOneRequiredWithoutTriviaQuizChoiceNestedInput = {
    create?: XOR<TriviaQuizCreateWithoutTriviaQuizChoiceInput, TriviaQuizUncheckedCreateWithoutTriviaQuizChoiceInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutTriviaQuizChoiceInput
    upsert?: TriviaQuizUpsertWithoutTriviaQuizChoiceInput
    connect?: TriviaQuizWhereUniqueInput
    update?: XOR<TriviaQuizUpdateWithoutTriviaQuizChoiceInput, TriviaQuizUncheckedUpdateWithoutTriviaQuizChoiceInput>
  }

  export type TriviaRoundQuizChoiceUpdateManyWithoutRoundQuizChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizChoiceCreateWithoutRoundQuizChoiceInput>, Enumerable<TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizChoiceInput>
    upsert?: Enumerable<TriviaRoundQuizChoiceUpsertWithWhereUniqueWithoutRoundQuizChoiceInput>
    createMany?: TriviaRoundQuizChoiceCreateManyRoundQuizChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizChoiceUpdateWithWhereUniqueWithoutRoundQuizChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuizChoiceUpdateManyWithWhereWithoutRoundQuizChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuizChoiceScalarWhereInput>
  }

  export type TriviaRoundQuizChoiceUncheckedUpdateManyWithoutRoundQuizChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizChoiceCreateWithoutRoundQuizChoiceInput>, Enumerable<TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizChoiceInput>
    upsert?: Enumerable<TriviaRoundQuizChoiceUpsertWithWhereUniqueWithoutRoundQuizChoiceInput>
    createMany?: TriviaRoundQuizChoiceCreateManyRoundQuizChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizChoiceUpdateWithWhereUniqueWithoutRoundQuizChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuizChoiceUpdateManyWithWhereWithoutRoundQuizChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuizChoiceScalarWhereInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutTriviaRoundInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaRoundInput, TriviaCategoryUncheckedCreateWithoutTriviaRoundInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaRoundInput
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

  export type TriviaCategoryUpdateOneRequiredWithoutTriviaRoundNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaRoundInput, TriviaCategoryUncheckedCreateWithoutTriviaRoundInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaRoundInput
    upsert?: TriviaCategoryUpsertWithoutTriviaRoundInput
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutTriviaRoundInput, TriviaCategoryUncheckedUpdateWithoutTriviaRoundInput>
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

  export type TriviaRoundCreateNestedOneWithoutTriviaRoundQuizInput = {
    create?: XOR<TriviaRoundCreateWithoutTriviaRoundQuizInput, TriviaRoundUncheckedCreateWithoutTriviaRoundQuizInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutTriviaRoundQuizInput
    connect?: TriviaRoundWhereUniqueInput
  }

  export type TriviaQuizCreateNestedOneWithoutTriviaRoundQuizInput = {
    create?: XOR<TriviaQuizCreateWithoutTriviaRoundQuizInput, TriviaQuizUncheckedCreateWithoutTriviaRoundQuizInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutTriviaRoundQuizInput
    connect?: TriviaQuizWhereUniqueInput
  }

  export type TriviaRoundQuizChoiceCreateNestedManyWithoutRoundQuizInput = {
    create?: XOR<Enumerable<TriviaRoundQuizChoiceCreateWithoutRoundQuizInput>, Enumerable<TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizInput>
    createMany?: TriviaRoundQuizChoiceCreateManyRoundQuizInputEnvelope
    connect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuizChoiceUncheckedCreateNestedManyWithoutRoundQuizInput = {
    create?: XOR<Enumerable<TriviaRoundQuizChoiceCreateWithoutRoundQuizInput>, Enumerable<TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizInput>
    createMany?: TriviaRoundQuizChoiceCreateManyRoundQuizInputEnvelope
    connect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
  }

  export type TriviaRoundUpdateOneRequiredWithoutTriviaRoundQuizNestedInput = {
    create?: XOR<TriviaRoundCreateWithoutTriviaRoundQuizInput, TriviaRoundUncheckedCreateWithoutTriviaRoundQuizInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutTriviaRoundQuizInput
    upsert?: TriviaRoundUpsertWithoutTriviaRoundQuizInput
    connect?: TriviaRoundWhereUniqueInput
    update?: XOR<TriviaRoundUpdateWithoutTriviaRoundQuizInput, TriviaRoundUncheckedUpdateWithoutTriviaRoundQuizInput>
  }

  export type TriviaQuizUpdateOneRequiredWithoutTriviaRoundQuizNestedInput = {
    create?: XOR<TriviaQuizCreateWithoutTriviaRoundQuizInput, TriviaQuizUncheckedCreateWithoutTriviaRoundQuizInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutTriviaRoundQuizInput
    upsert?: TriviaQuizUpsertWithoutTriviaRoundQuizInput
    connect?: TriviaQuizWhereUniqueInput
    update?: XOR<TriviaQuizUpdateWithoutTriviaRoundQuizInput, TriviaQuizUncheckedUpdateWithoutTriviaRoundQuizInput>
  }

  export type TriviaRoundQuizChoiceUpdateManyWithoutRoundQuizNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizChoiceCreateWithoutRoundQuizInput>, Enumerable<TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizInput>
    upsert?: Enumerable<TriviaRoundQuizChoiceUpsertWithWhereUniqueWithoutRoundQuizInput>
    createMany?: TriviaRoundQuizChoiceCreateManyRoundQuizInputEnvelope
    set?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizChoiceUpdateWithWhereUniqueWithoutRoundQuizInput>
    updateMany?: Enumerable<TriviaRoundQuizChoiceUpdateManyWithWhereWithoutRoundQuizInput>
    deleteMany?: Enumerable<TriviaRoundQuizChoiceScalarWhereInput>
  }

  export type TriviaRoundQuizChoiceUncheckedUpdateManyWithoutRoundQuizNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuizChoiceCreateWithoutRoundQuizInput>, Enumerable<TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizInput>
    upsert?: Enumerable<TriviaRoundQuizChoiceUpsertWithWhereUniqueWithoutRoundQuizInput>
    createMany?: TriviaRoundQuizChoiceCreateManyRoundQuizInputEnvelope
    set?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuizChoiceWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuizChoiceUpdateWithWhereUniqueWithoutRoundQuizInput>
    updateMany?: Enumerable<TriviaRoundQuizChoiceUpdateManyWithWhereWithoutRoundQuizInput>
    deleteMany?: Enumerable<TriviaRoundQuizChoiceScalarWhereInput>
  }

  export type TriviaRoundQuizCreateNestedOneWithoutTriviaRoundQuizChoiceInput = {
    create?: XOR<TriviaRoundQuizCreateWithoutTriviaRoundQuizChoiceInput, TriviaRoundQuizUncheckedCreateWithoutTriviaRoundQuizChoiceInput>
    connectOrCreate?: TriviaRoundQuizCreateOrConnectWithoutTriviaRoundQuizChoiceInput
    connect?: TriviaRoundQuizWhereUniqueInput
  }

  export type TriviaQuizChoiceCreateNestedOneWithoutTriviaRoundQuizChoiceInput = {
    create?: XOR<TriviaQuizChoiceCreateWithoutTriviaRoundQuizChoiceInput, TriviaQuizChoiceUncheckedCreateWithoutTriviaRoundQuizChoiceInput>
    connectOrCreate?: TriviaQuizChoiceCreateOrConnectWithoutTriviaRoundQuizChoiceInput
    connect?: TriviaQuizChoiceWhereUniqueInput
  }

  export type TriviaRoundQuizUpdateOneRequiredWithoutTriviaRoundQuizChoiceNestedInput = {
    create?: XOR<TriviaRoundQuizCreateWithoutTriviaRoundQuizChoiceInput, TriviaRoundQuizUncheckedCreateWithoutTriviaRoundQuizChoiceInput>
    connectOrCreate?: TriviaRoundQuizCreateOrConnectWithoutTriviaRoundQuizChoiceInput
    upsert?: TriviaRoundQuizUpsertWithoutTriviaRoundQuizChoiceInput
    connect?: TriviaRoundQuizWhereUniqueInput
    update?: XOR<TriviaRoundQuizUpdateWithoutTriviaRoundQuizChoiceInput, TriviaRoundQuizUncheckedUpdateWithoutTriviaRoundQuizChoiceInput>
  }

  export type TriviaQuizChoiceUpdateOneRequiredWithoutTriviaRoundQuizChoiceNestedInput = {
    create?: XOR<TriviaQuizChoiceCreateWithoutTriviaRoundQuizChoiceInput, TriviaQuizChoiceUncheckedCreateWithoutTriviaRoundQuizChoiceInput>
    connectOrCreate?: TriviaQuizChoiceCreateOrConnectWithoutTriviaRoundQuizChoiceInput
    upsert?: TriviaQuizChoiceUpsertWithoutTriviaRoundQuizChoiceInput
    connect?: TriviaQuizChoiceWhereUniqueInput
    update?: XOR<TriviaQuizChoiceUpdateWithoutTriviaRoundQuizChoiceInput, TriviaQuizChoiceUncheckedUpdateWithoutTriviaRoundQuizChoiceInput>
  }

  export type FollowingCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<FollowingCreateWithoutFromInput>, Enumerable<FollowingUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<FollowingCreateOrConnectWithoutFromInput>
    createMany?: FollowingCreateManyFromInputEnvelope
    connect?: Enumerable<FollowingWhereUniqueInput>
  }

  export type FollowingCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<FollowingCreateWithoutToInput>, Enumerable<FollowingUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<FollowingCreateOrConnectWithoutToInput>
    createMany?: FollowingCreateManyToInputEnvelope
    connect?: Enumerable<FollowingWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type DirectMsgCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<DirectMsgCreateWithoutFromInput>, Enumerable<DirectMsgUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<DirectMsgCreateOrConnectWithoutFromInput>
    createMany?: DirectMsgCreateManyFromInputEnvelope
    connect?: Enumerable<DirectMsgWhereUniqueInput>
  }

  export type DirectMsgCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<DirectMsgCreateWithoutToInput>, Enumerable<DirectMsgUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<DirectMsgCreateOrConnectWithoutToInput>
    createMany?: DirectMsgCreateManyToInputEnvelope
    connect?: Enumerable<DirectMsgWhereUniqueInput>
  }

  export type ReplyCreateNestedManyWithoutReplyUserInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutReplyUserInput>, Enumerable<ReplyUncheckedCreateWithoutReplyUserInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutReplyUserInput>
    createMany?: ReplyCreateManyReplyUserInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type FollowingUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<FollowingCreateWithoutFromInput>, Enumerable<FollowingUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<FollowingCreateOrConnectWithoutFromInput>
    createMany?: FollowingCreateManyFromInputEnvelope
    connect?: Enumerable<FollowingWhereUniqueInput>
  }

  export type FollowingUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<FollowingCreateWithoutToInput>, Enumerable<FollowingUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<FollowingCreateOrConnectWithoutToInput>
    createMany?: FollowingCreateManyToInputEnvelope
    connect?: Enumerable<FollowingWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type DirectMsgUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<DirectMsgCreateWithoutFromInput>, Enumerable<DirectMsgUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<DirectMsgCreateOrConnectWithoutFromInput>
    createMany?: DirectMsgCreateManyFromInputEnvelope
    connect?: Enumerable<DirectMsgWhereUniqueInput>
  }

  export type DirectMsgUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<DirectMsgCreateWithoutToInput>, Enumerable<DirectMsgUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<DirectMsgCreateOrConnectWithoutToInput>
    createMany?: DirectMsgCreateManyToInputEnvelope
    connect?: Enumerable<DirectMsgWhereUniqueInput>
  }

  export type ReplyUncheckedCreateNestedManyWithoutReplyUserInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutReplyUserInput>, Enumerable<ReplyUncheckedCreateWithoutReplyUserInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutReplyUserInput>
    createMany?: ReplyCreateManyReplyUserInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type FollowingUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<FollowingCreateWithoutFromInput>, Enumerable<FollowingUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<FollowingCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<FollowingUpsertWithWhereUniqueWithoutFromInput>
    createMany?: FollowingCreateManyFromInputEnvelope
    set?: Enumerable<FollowingWhereUniqueInput>
    disconnect?: Enumerable<FollowingWhereUniqueInput>
    delete?: Enumerable<FollowingWhereUniqueInput>
    connect?: Enumerable<FollowingWhereUniqueInput>
    update?: Enumerable<FollowingUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<FollowingUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<FollowingScalarWhereInput>
  }

  export type FollowingUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<FollowingCreateWithoutToInput>, Enumerable<FollowingUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<FollowingCreateOrConnectWithoutToInput>
    upsert?: Enumerable<FollowingUpsertWithWhereUniqueWithoutToInput>
    createMany?: FollowingCreateManyToInputEnvelope
    set?: Enumerable<FollowingWhereUniqueInput>
    disconnect?: Enumerable<FollowingWhereUniqueInput>
    delete?: Enumerable<FollowingWhereUniqueInput>
    connect?: Enumerable<FollowingWhereUniqueInput>
    update?: Enumerable<FollowingUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<FollowingUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<FollowingScalarWhereInput>
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type DirectMsgUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<DirectMsgCreateWithoutFromInput>, Enumerable<DirectMsgUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<DirectMsgCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<DirectMsgUpsertWithWhereUniqueWithoutFromInput>
    createMany?: DirectMsgCreateManyFromInputEnvelope
    set?: Enumerable<DirectMsgWhereUniqueInput>
    disconnect?: Enumerable<DirectMsgWhereUniqueInput>
    delete?: Enumerable<DirectMsgWhereUniqueInput>
    connect?: Enumerable<DirectMsgWhereUniqueInput>
    update?: Enumerable<DirectMsgUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<DirectMsgUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<DirectMsgScalarWhereInput>
  }

  export type DirectMsgUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<DirectMsgCreateWithoutToInput>, Enumerable<DirectMsgUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<DirectMsgCreateOrConnectWithoutToInput>
    upsert?: Enumerable<DirectMsgUpsertWithWhereUniqueWithoutToInput>
    createMany?: DirectMsgCreateManyToInputEnvelope
    set?: Enumerable<DirectMsgWhereUniqueInput>
    disconnect?: Enumerable<DirectMsgWhereUniqueInput>
    delete?: Enumerable<DirectMsgWhereUniqueInput>
    connect?: Enumerable<DirectMsgWhereUniqueInput>
    update?: Enumerable<DirectMsgUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<DirectMsgUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<DirectMsgScalarWhereInput>
  }

  export type ReplyUpdateManyWithoutReplyUserNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutReplyUserInput>, Enumerable<ReplyUncheckedCreateWithoutReplyUserInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutReplyUserInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutReplyUserInput>
    createMany?: ReplyCreateManyReplyUserInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutReplyUserInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutReplyUserInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type FollowingUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<FollowingCreateWithoutFromInput>, Enumerable<FollowingUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<FollowingCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<FollowingUpsertWithWhereUniqueWithoutFromInput>
    createMany?: FollowingCreateManyFromInputEnvelope
    set?: Enumerable<FollowingWhereUniqueInput>
    disconnect?: Enumerable<FollowingWhereUniqueInput>
    delete?: Enumerable<FollowingWhereUniqueInput>
    connect?: Enumerable<FollowingWhereUniqueInput>
    update?: Enumerable<FollowingUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<FollowingUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<FollowingScalarWhereInput>
  }

  export type FollowingUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<FollowingCreateWithoutToInput>, Enumerable<FollowingUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<FollowingCreateOrConnectWithoutToInput>
    upsert?: Enumerable<FollowingUpsertWithWhereUniqueWithoutToInput>
    createMany?: FollowingCreateManyToInputEnvelope
    set?: Enumerable<FollowingWhereUniqueInput>
    disconnect?: Enumerable<FollowingWhereUniqueInput>
    delete?: Enumerable<FollowingWhereUniqueInput>
    connect?: Enumerable<FollowingWhereUniqueInput>
    update?: Enumerable<FollowingUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<FollowingUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<FollowingScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type DirectMsgUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<DirectMsgCreateWithoutFromInput>, Enumerable<DirectMsgUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<DirectMsgCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<DirectMsgUpsertWithWhereUniqueWithoutFromInput>
    createMany?: DirectMsgCreateManyFromInputEnvelope
    set?: Enumerable<DirectMsgWhereUniqueInput>
    disconnect?: Enumerable<DirectMsgWhereUniqueInput>
    delete?: Enumerable<DirectMsgWhereUniqueInput>
    connect?: Enumerable<DirectMsgWhereUniqueInput>
    update?: Enumerable<DirectMsgUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<DirectMsgUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<DirectMsgScalarWhereInput>
  }

  export type DirectMsgUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<DirectMsgCreateWithoutToInput>, Enumerable<DirectMsgUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<DirectMsgCreateOrConnectWithoutToInput>
    upsert?: Enumerable<DirectMsgUpsertWithWhereUniqueWithoutToInput>
    createMany?: DirectMsgCreateManyToInputEnvelope
    set?: Enumerable<DirectMsgWhereUniqueInput>
    disconnect?: Enumerable<DirectMsgWhereUniqueInput>
    delete?: Enumerable<DirectMsgWhereUniqueInput>
    connect?: Enumerable<DirectMsgWhereUniqueInput>
    update?: Enumerable<DirectMsgUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<DirectMsgUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<DirectMsgScalarWhereInput>
  }

  export type ReplyUncheckedUpdateManyWithoutReplyUserNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutReplyUserInput>, Enumerable<ReplyUncheckedCreateWithoutReplyUserInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutReplyUserInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutReplyUserInput>
    createMany?: ReplyCreateManyReplyUserInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutReplyUserInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutReplyUserInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFromFolowingInput = {
    create?: XOR<UserCreateWithoutFromFolowingInput, UserUncheckedCreateWithoutFromFolowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromFolowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutToFollowingInput = {
    create?: XOR<UserCreateWithoutToFollowingInput, UserUncheckedCreateWithoutToFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutToFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFromFolowingNestedInput = {
    create?: XOR<UserCreateWithoutFromFolowingInput, UserUncheckedCreateWithoutFromFolowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromFolowingInput
    upsert?: UserUpsertWithoutFromFolowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFromFolowingInput, UserUncheckedUpdateWithoutFromFolowingInput>
  }

  export type UserUpdateOneRequiredWithoutToFollowingNestedInput = {
    create?: XOR<UserCreateWithoutToFollowingInput, UserUncheckedCreateWithoutToFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutToFollowingInput
    upsert?: UserUpsertWithoutToFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutToFollowingInput, UserUncheckedUpdateWithoutToFollowingInput>
  }

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    connect?: UserWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostInput>, Enumerable<ReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostInput>
    createMany?: ReplyCreateManyPostInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type PostOnHashtagCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutPostInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutPostInput>
    createMany?: PostOnHashtagCreateManyPostInputEnvelope
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
  }

  export type ReplyUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostInput>, Enumerable<ReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostInput>
    createMany?: ReplyCreateManyPostInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type PostOnHashtagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutPostInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutPostInput>
    createMany?: PostOnHashtagCreateManyPostInputEnvelope
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    upsert?: UserUpsertWithoutPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
  }

  export type ReplyUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostInput>, Enumerable<ReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutPostInput>
    createMany?: ReplyCreateManyPostInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type PostOnHashtagUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutPostInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostOnHashtagUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostOnHashtagCreateManyPostInputEnvelope
    set?: Enumerable<PostOnHashtagWhereUniqueInput>
    disconnect?: Enumerable<PostOnHashtagWhereUniqueInput>
    delete?: Enumerable<PostOnHashtagWhereUniqueInput>
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
    update?: Enumerable<PostOnHashtagUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostOnHashtagUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostOnHashtagScalarWhereInput>
  }

  export type ReplyUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostInput>, Enumerable<ReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutPostInput>
    createMany?: ReplyCreateManyPostInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type PostOnHashtagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutPostInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<PostOnHashtagUpsertWithWhereUniqueWithoutPostInput>
    createMany?: PostOnHashtagCreateManyPostInputEnvelope
    set?: Enumerable<PostOnHashtagWhereUniqueInput>
    disconnect?: Enumerable<PostOnHashtagWhereUniqueInput>
    delete?: Enumerable<PostOnHashtagWhereUniqueInput>
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
    update?: Enumerable<PostOnHashtagUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<PostOnHashtagUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<PostOnHashtagScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFromDirectMessageInput = {
    create?: XOR<UserCreateWithoutFromDirectMessageInput, UserUncheckedCreateWithoutFromDirectMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromDirectMessageInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutToDirectMessageInput = {
    create?: XOR<UserCreateWithoutToDirectMessageInput, UserUncheckedCreateWithoutToDirectMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutToDirectMessageInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFromDirectMessageNestedInput = {
    create?: XOR<UserCreateWithoutFromDirectMessageInput, UserUncheckedCreateWithoutFromDirectMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromDirectMessageInput
    upsert?: UserUpsertWithoutFromDirectMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFromDirectMessageInput, UserUncheckedUpdateWithoutFromDirectMessageInput>
  }

  export type UserUpdateOneRequiredWithoutToDirectMessageNestedInput = {
    create?: XOR<UserCreateWithoutToDirectMessageInput, UserUncheckedCreateWithoutToDirectMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutToDirectMessageInput
    upsert?: UserUpsertWithoutToDirectMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutToDirectMessageInput, UserUncheckedUpdateWithoutToDirectMessageInput>
  }

  export type PostOnHashtagCreateNestedManyWithoutHashtagInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutHashtagInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutHashtagInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutHashtagInput>
    createMany?: PostOnHashtagCreateManyHashtagInputEnvelope
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
  }

  export type PostOnHashtagUncheckedCreateNestedManyWithoutHashtagInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutHashtagInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutHashtagInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutHashtagInput>
    createMany?: PostOnHashtagCreateManyHashtagInputEnvelope
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
  }

  export type PostOnHashtagUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutHashtagInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutHashtagInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutHashtagInput>
    upsert?: Enumerable<PostOnHashtagUpsertWithWhereUniqueWithoutHashtagInput>
    createMany?: PostOnHashtagCreateManyHashtagInputEnvelope
    set?: Enumerable<PostOnHashtagWhereUniqueInput>
    disconnect?: Enumerable<PostOnHashtagWhereUniqueInput>
    delete?: Enumerable<PostOnHashtagWhereUniqueInput>
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
    update?: Enumerable<PostOnHashtagUpdateWithWhereUniqueWithoutHashtagInput>
    updateMany?: Enumerable<PostOnHashtagUpdateManyWithWhereWithoutHashtagInput>
    deleteMany?: Enumerable<PostOnHashtagScalarWhereInput>
  }

  export type PostOnHashtagUncheckedUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutHashtagInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutHashtagInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutHashtagInput>
    upsert?: Enumerable<PostOnHashtagUpsertWithWhereUniqueWithoutHashtagInput>
    createMany?: PostOnHashtagCreateManyHashtagInputEnvelope
    set?: Enumerable<PostOnHashtagWhereUniqueInput>
    disconnect?: Enumerable<PostOnHashtagWhereUniqueInput>
    delete?: Enumerable<PostOnHashtagWhereUniqueInput>
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
    update?: Enumerable<PostOnHashtagUpdateWithWhereUniqueWithoutHashtagInput>
    updateMany?: Enumerable<PostOnHashtagUpdateManyWithWhereWithoutHashtagInput>
    deleteMany?: Enumerable<PostOnHashtagScalarWhereInput>
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

  export type PostCreateNestedOneWithoutPostOnHashtagInput = {
    create?: XOR<PostCreateWithoutPostOnHashtagInput, PostUncheckedCreateWithoutPostOnHashtagInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostOnHashtagInput
    connect?: PostWhereUniqueInput
  }

  export type HashtagCreateNestedOneWithoutPostOnHashtagInput = {
    create?: XOR<HashtagCreateWithoutPostOnHashtagInput, HashtagUncheckedCreateWithoutPostOnHashtagInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutPostOnHashtagInput
    connect?: HashtagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutPostOnHashtagNestedInput = {
    create?: XOR<PostCreateWithoutPostOnHashtagInput, PostUncheckedCreateWithoutPostOnHashtagInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostOnHashtagInput
    upsert?: PostUpsertWithoutPostOnHashtagInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutPostOnHashtagInput, PostUncheckedUpdateWithoutPostOnHashtagInput>
  }

  export type HashtagUpdateOneRequiredWithoutPostOnHashtagNestedInput = {
    create?: XOR<HashtagCreateWithoutPostOnHashtagInput, HashtagUncheckedCreateWithoutPostOnHashtagInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutPostOnHashtagInput
    upsert?: HashtagUpsertWithoutPostOnHashtagInput
    connect?: HashtagWhereUniqueInput
    update?: XOR<HashtagUpdateWithoutPostOnHashtagInput, HashtagUncheckedUpdateWithoutPostOnHashtagInput>
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
    createdAt?: Date | string
    updatedAt?: Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemCreateNestedManyWithoutMenuInput
  }

  export type BinKitchenMenuUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    image: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUncheckedCreateNestedManyWithoutMenuInput
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
    data: XOR<BinKitchenMenuUpdateManyMutationInput, BinKitchenMenuUncheckedUpdateManyWithoutBinKitchenMenuInput>
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

  export type BinKitchenCategoryCreateWithoutBinKitchenMenuInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenCategoryUncheckedCreateWithoutBinKitchenMenuInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenCategoryCreateOrConnectWithoutBinKitchenMenuInput = {
    where: BinKitchenCategoryWhereUniqueInput
    create: XOR<BinKitchenCategoryCreateWithoutBinKitchenMenuInput, BinKitchenCategoryUncheckedCreateWithoutBinKitchenMenuInput>
  }

  export type BinKitchenOrderItemCreateWithoutMenuInput = {
    order?: BinKitchenOrderCreateNestedOneWithoutBinKitchenOrderItemInput
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

  export type BinKitchenCategoryUpsertWithoutBinKitchenMenuInput = {
    update: XOR<BinKitchenCategoryUpdateWithoutBinKitchenMenuInput, BinKitchenCategoryUncheckedUpdateWithoutBinKitchenMenuInput>
    create: XOR<BinKitchenCategoryCreateWithoutBinKitchenMenuInput, BinKitchenCategoryUncheckedCreateWithoutBinKitchenMenuInput>
  }

  export type BinKitchenCategoryUpdateWithoutBinKitchenMenuInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenCategoryUncheckedUpdateWithoutBinKitchenMenuInput = {
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
    data: XOR<BinKitchenOrderItemUpdateManyMutationInput, BinKitchenOrderItemUncheckedUpdateManyWithoutBinKitchenOrderItemInput>
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
    menu: BinKitchenMenuCreateNestedOneWithoutBinKitchenOrderItemInput
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
    data: XOR<BinKitchenOrderItemUpdateManyMutationInput, BinKitchenOrderItemUncheckedUpdateManyWithoutBinKitchenOrderItemInput>
  }

  export type BinKitchenMenuCreateWithoutBinKitchenOrderItemInput = {
    name: string
    image: string
    price: number
    category?: BinKitchenCategoryCreateNestedOneWithoutBinKitchenMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuUncheckedCreateWithoutBinKitchenOrderItemInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenMenuCreateOrConnectWithoutBinKitchenOrderItemInput = {
    where: BinKitchenMenuWhereUniqueInput
    create: XOR<BinKitchenMenuCreateWithoutBinKitchenOrderItemInput, BinKitchenMenuUncheckedCreateWithoutBinKitchenOrderItemInput>
  }

  export type BinKitchenOrderCreateWithoutBinKitchenOrderItemInput = {
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderUncheckedCreateWithoutBinKitchenOrderItemInput = {
    id?: number
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BinKitchenOrderCreateOrConnectWithoutBinKitchenOrderItemInput = {
    where: BinKitchenOrderWhereUniqueInput
    create: XOR<BinKitchenOrderCreateWithoutBinKitchenOrderItemInput, BinKitchenOrderUncheckedCreateWithoutBinKitchenOrderItemInput>
  }

  export type BinKitchenMenuUpsertWithoutBinKitchenOrderItemInput = {
    update: XOR<BinKitchenMenuUpdateWithoutBinKitchenOrderItemInput, BinKitchenMenuUncheckedUpdateWithoutBinKitchenOrderItemInput>
    create: XOR<BinKitchenMenuCreateWithoutBinKitchenOrderItemInput, BinKitchenMenuUncheckedCreateWithoutBinKitchenOrderItemInput>
  }

  export type BinKitchenMenuUpdateWithoutBinKitchenOrderItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: BinKitchenCategoryUpdateOneWithoutBinKitchenMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenMenuUncheckedUpdateWithoutBinKitchenOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderUpsertWithoutBinKitchenOrderItemInput = {
    update: XOR<BinKitchenOrderUpdateWithoutBinKitchenOrderItemInput, BinKitchenOrderUncheckedUpdateWithoutBinKitchenOrderItemInput>
    create: XOR<BinKitchenOrderCreateWithoutBinKitchenOrderItemInput, BinKitchenOrderUncheckedCreateWithoutBinKitchenOrderItemInput>
  }

  export type BinKitchenOrderUpdateWithoutBinKitchenOrderItemInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinKitchenOrderUncheckedUpdateWithoutBinKitchenOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizCreateWithoutCategoryInput = {
    name: string
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuizChoice?: TriviaQuizChoiceCreateNestedManyWithoutQuizInput
    triviaRoundQuiz?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuizChoice?: TriviaQuizChoiceUncheckedCreateNestedManyWithoutQuizInput
    triviaRoundQuiz?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
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
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuiz?: TriviaRoundQuizCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateWithoutCategoryInput = {
    id?: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuiz?: TriviaRoundQuizUncheckedCreateNestedManyWithoutRoundInput
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
    data: XOR<TriviaQuizUpdateManyMutationInput, TriviaQuizUncheckedUpdateManyWithoutTriviaQuizInput>
  }

  export type TriviaQuizScalarWhereInput = {
    AND?: Enumerable<TriviaQuizScalarWhereInput>
    OR?: Enumerable<TriviaQuizScalarWhereInput>
    NOT?: Enumerable<TriviaQuizScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    categoryId?: IntFilter | number
    answerId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
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
    data: XOR<TriviaRoundUpdateManyMutationInput, TriviaRoundUncheckedUpdateManyWithoutTriviaRoundInput>
  }

  export type TriviaRoundScalarWhereInput = {
    AND?: Enumerable<TriviaRoundScalarWhereInput>
    OR?: Enumerable<TriviaRoundScalarWhereInput>
    NOT?: Enumerable<TriviaRoundScalarWhereInput>
    id?: IntFilter | number
    score?: IntFilter | number
    categoryId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaCategoryCreateWithoutTriviaQuizInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRound?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateWithoutTriviaQuizInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRound?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryCreateOrConnectWithoutTriviaQuizInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutTriviaQuizInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizInput>
  }

  export type TriviaQuizChoiceCreateWithoutQuizInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceCreateNestedManyWithoutRoundQuizChoiceInput
  }

  export type TriviaQuizChoiceUncheckedCreateWithoutQuizInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedCreateNestedManyWithoutRoundQuizChoiceInput
  }

  export type TriviaQuizChoiceCreateOrConnectWithoutQuizInput = {
    where: TriviaQuizChoiceWhereUniqueInput
    create: XOR<TriviaQuizChoiceCreateWithoutQuizInput, TriviaQuizChoiceUncheckedCreateWithoutQuizInput>
  }

  export type TriviaQuizChoiceCreateManyQuizInputEnvelope = {
    data: Enumerable<TriviaQuizChoiceCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundQuizCreateWithoutQuizInput = {
    round: TriviaRoundCreateNestedOneWithoutTriviaRoundQuizInput
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceCreateNestedManyWithoutRoundQuizInput
  }

  export type TriviaRoundQuizUncheckedCreateWithoutQuizInput = {
    id?: number
    roundId: number
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedCreateNestedManyWithoutRoundQuizInput
  }

  export type TriviaRoundQuizCreateOrConnectWithoutQuizInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutQuizInput, TriviaRoundQuizUncheckedCreateWithoutQuizInput>
  }

  export type TriviaRoundQuizCreateManyQuizInputEnvelope = {
    data: Enumerable<TriviaRoundQuizCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryUpsertWithoutTriviaQuizInput = {
    update: XOR<TriviaCategoryUpdateWithoutTriviaQuizInput, TriviaCategoryUncheckedUpdateWithoutTriviaQuizInput>
    create: XOR<TriviaCategoryCreateWithoutTriviaQuizInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizInput>
  }

  export type TriviaCategoryUpdateWithoutTriviaQuizInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRound?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateWithoutTriviaQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRound?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaQuizChoiceUpsertWithWhereUniqueWithoutQuizInput = {
    where: TriviaQuizChoiceWhereUniqueInput
    update: XOR<TriviaQuizChoiceUpdateWithoutQuizInput, TriviaQuizChoiceUncheckedUpdateWithoutQuizInput>
    create: XOR<TriviaQuizChoiceCreateWithoutQuizInput, TriviaQuizChoiceUncheckedCreateWithoutQuizInput>
  }

  export type TriviaQuizChoiceUpdateWithWhereUniqueWithoutQuizInput = {
    where: TriviaQuizChoiceWhereUniqueInput
    data: XOR<TriviaQuizChoiceUpdateWithoutQuizInput, TriviaQuizChoiceUncheckedUpdateWithoutQuizInput>
  }

  export type TriviaQuizChoiceUpdateManyWithWhereWithoutQuizInput = {
    where: TriviaQuizChoiceScalarWhereInput
    data: XOR<TriviaQuizChoiceUpdateManyMutationInput, TriviaQuizChoiceUncheckedUpdateManyWithoutTriviaQuizChoiceInput>
  }

  export type TriviaQuizChoiceScalarWhereInput = {
    AND?: Enumerable<TriviaQuizChoiceScalarWhereInput>
    OR?: Enumerable<TriviaQuizChoiceScalarWhereInput>
    NOT?: Enumerable<TriviaQuizChoiceScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
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
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyWithoutTriviaRoundQuizInput>
  }

  export type TriviaRoundQuizScalarWhereInput = {
    AND?: Enumerable<TriviaRoundQuizScalarWhereInput>
    OR?: Enumerable<TriviaRoundQuizScalarWhereInput>
    NOT?: Enumerable<TriviaRoundQuizScalarWhereInput>
    id?: IntFilter | number
    roundId?: IntFilter | number
    quizId?: IntFilter | number
    playerChooseChoice?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaQuizCreateWithoutTriviaQuizChoiceInput = {
    name: string
    category: TriviaCategoryCreateNestedOneWithoutTriviaQuizInput
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuiz?: TriviaRoundQuizCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutTriviaQuizChoiceInput = {
    id?: number
    name: string
    categoryId: number
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuiz?: TriviaRoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizCreateOrConnectWithoutTriviaQuizChoiceInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutTriviaQuizChoiceInput, TriviaQuizUncheckedCreateWithoutTriviaQuizChoiceInput>
  }

  export type TriviaRoundQuizChoiceCreateWithoutRoundQuizChoiceInput = {
    roundQuiz: TriviaRoundQuizCreateNestedOneWithoutTriviaRoundQuizChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizChoiceInput = {
    id?: number
    roundQuizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizChoiceInput = {
    where: TriviaRoundQuizChoiceWhereUniqueInput
    create: XOR<TriviaRoundQuizChoiceCreateWithoutRoundQuizChoiceInput, TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizChoiceInput>
  }

  export type TriviaRoundQuizChoiceCreateManyRoundQuizChoiceInputEnvelope = {
    data: Enumerable<TriviaRoundQuizChoiceCreateManyRoundQuizChoiceInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuizUpsertWithoutTriviaQuizChoiceInput = {
    update: XOR<TriviaQuizUpdateWithoutTriviaQuizChoiceInput, TriviaQuizUncheckedUpdateWithoutTriviaQuizChoiceInput>
    create: XOR<TriviaQuizCreateWithoutTriviaQuizChoiceInput, TriviaQuizUncheckedCreateWithoutTriviaQuizChoiceInput>
  }

  export type TriviaQuizUpdateWithoutTriviaQuizChoiceInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneRequiredWithoutTriviaQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuiz?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutTriviaQuizChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuiz?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaRoundQuizChoiceUpsertWithWhereUniqueWithoutRoundQuizChoiceInput = {
    where: TriviaRoundQuizChoiceWhereUniqueInput
    update: XOR<TriviaRoundQuizChoiceUpdateWithoutRoundQuizChoiceInput, TriviaRoundQuizChoiceUncheckedUpdateWithoutRoundQuizChoiceInput>
    create: XOR<TriviaRoundQuizChoiceCreateWithoutRoundQuizChoiceInput, TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizChoiceInput>
  }

  export type TriviaRoundQuizChoiceUpdateWithWhereUniqueWithoutRoundQuizChoiceInput = {
    where: TriviaRoundQuizChoiceWhereUniqueInput
    data: XOR<TriviaRoundQuizChoiceUpdateWithoutRoundQuizChoiceInput, TriviaRoundQuizChoiceUncheckedUpdateWithoutRoundQuizChoiceInput>
  }

  export type TriviaRoundQuizChoiceUpdateManyWithWhereWithoutRoundQuizChoiceInput = {
    where: TriviaRoundQuizChoiceScalarWhereInput
    data: XOR<TriviaRoundQuizChoiceUpdateManyMutationInput, TriviaRoundQuizChoiceUncheckedUpdateManyWithoutTriviaRoundQuizChoiceInput>
  }

  export type TriviaRoundQuizChoiceScalarWhereInput = {
    AND?: Enumerable<TriviaRoundQuizChoiceScalarWhereInput>
    OR?: Enumerable<TriviaRoundQuizChoiceScalarWhereInput>
    NOT?: Enumerable<TriviaRoundQuizChoiceScalarWhereInput>
    id?: IntFilter | number
    roundQuizId?: IntFilter | number
    quizChoiceId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TriviaCategoryCreateWithoutTriviaRoundInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuiz?: TriviaQuizCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateWithoutTriviaRoundInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuiz?: TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryCreateOrConnectWithoutTriviaRoundInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutTriviaRoundInput, TriviaCategoryUncheckedCreateWithoutTriviaRoundInput>
  }

  export type TriviaRoundQuizCreateWithoutRoundInput = {
    quiz: TriviaQuizCreateNestedOneWithoutTriviaRoundQuizInput
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceCreateNestedManyWithoutRoundQuizInput
  }

  export type TriviaRoundQuizUncheckedCreateWithoutRoundInput = {
    id?: number
    quizId: number
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedCreateNestedManyWithoutRoundQuizInput
  }

  export type TriviaRoundQuizCreateOrConnectWithoutRoundInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutRoundInput, TriviaRoundQuizUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuizCreateManyRoundInputEnvelope = {
    data: Enumerable<TriviaRoundQuizCreateManyRoundInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryUpsertWithoutTriviaRoundInput = {
    update: XOR<TriviaCategoryUpdateWithoutTriviaRoundInput, TriviaCategoryUncheckedUpdateWithoutTriviaRoundInput>
    create: XOR<TriviaCategoryCreateWithoutTriviaRoundInput, TriviaCategoryUncheckedCreateWithoutTriviaRoundInput>
  }

  export type TriviaCategoryUpdateWithoutTriviaRoundInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuiz?: TriviaQuizUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateWithoutTriviaRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuiz?: TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput
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
    data: XOR<TriviaRoundQuizUpdateManyMutationInput, TriviaRoundQuizUncheckedUpdateManyWithoutTriviaRoundQuizInput>
  }

  export type TriviaRoundCreateWithoutTriviaRoundQuizInput = {
    score: number
    category: TriviaCategoryCreateNestedOneWithoutTriviaRoundInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundUncheckedCreateWithoutTriviaRoundQuizInput = {
    id?: number
    score: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundCreateOrConnectWithoutTriviaRoundQuizInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutTriviaRoundQuizInput, TriviaRoundUncheckedCreateWithoutTriviaRoundQuizInput>
  }

  export type TriviaQuizCreateWithoutTriviaRoundQuizInput = {
    name: string
    category: TriviaCategoryCreateNestedOneWithoutTriviaQuizInput
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuizChoice?: TriviaQuizChoiceCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutTriviaRoundQuizInput = {
    id?: number
    name: string
    categoryId: number
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    triviaQuizChoice?: TriviaQuizChoiceUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuizCreateOrConnectWithoutTriviaRoundQuizInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutTriviaRoundQuizInput, TriviaQuizUncheckedCreateWithoutTriviaRoundQuizInput>
  }

  export type TriviaRoundQuizChoiceCreateWithoutRoundQuizInput = {
    roundQuizChoice: TriviaQuizChoiceCreateNestedOneWithoutTriviaRoundQuizChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizInput = {
    id?: number
    quizChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceCreateOrConnectWithoutRoundQuizInput = {
    where: TriviaRoundQuizChoiceWhereUniqueInput
    create: XOR<TriviaRoundQuizChoiceCreateWithoutRoundQuizInput, TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizInput>
  }

  export type TriviaRoundQuizChoiceCreateManyRoundQuizInputEnvelope = {
    data: Enumerable<TriviaRoundQuizChoiceCreateManyRoundQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundUpsertWithoutTriviaRoundQuizInput = {
    update: XOR<TriviaRoundUpdateWithoutTriviaRoundQuizInput, TriviaRoundUncheckedUpdateWithoutTriviaRoundQuizInput>
    create: XOR<TriviaRoundCreateWithoutTriviaRoundQuizInput, TriviaRoundUncheckedCreateWithoutTriviaRoundQuizInput>
  }

  export type TriviaRoundUpdateWithoutTriviaRoundQuizInput = {
    score?: IntFieldUpdateOperationsInput | number
    category?: TriviaCategoryUpdateOneRequiredWithoutTriviaRoundNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateWithoutTriviaRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizUpsertWithoutTriviaRoundQuizInput = {
    update: XOR<TriviaQuizUpdateWithoutTriviaRoundQuizInput, TriviaQuizUncheckedUpdateWithoutTriviaRoundQuizInput>
    create: XOR<TriviaQuizCreateWithoutTriviaRoundQuizInput, TriviaQuizUncheckedCreateWithoutTriviaRoundQuizInput>
  }

  export type TriviaQuizUpdateWithoutTriviaRoundQuizInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneRequiredWithoutTriviaQuizNestedInput
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuizChoice?: TriviaQuizChoiceUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutTriviaRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuizChoice?: TriviaQuizChoiceUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaRoundQuizChoiceUpsertWithWhereUniqueWithoutRoundQuizInput = {
    where: TriviaRoundQuizChoiceWhereUniqueInput
    update: XOR<TriviaRoundQuizChoiceUpdateWithoutRoundQuizInput, TriviaRoundQuizChoiceUncheckedUpdateWithoutRoundQuizInput>
    create: XOR<TriviaRoundQuizChoiceCreateWithoutRoundQuizInput, TriviaRoundQuizChoiceUncheckedCreateWithoutRoundQuizInput>
  }

  export type TriviaRoundQuizChoiceUpdateWithWhereUniqueWithoutRoundQuizInput = {
    where: TriviaRoundQuizChoiceWhereUniqueInput
    data: XOR<TriviaRoundQuizChoiceUpdateWithoutRoundQuizInput, TriviaRoundQuizChoiceUncheckedUpdateWithoutRoundQuizInput>
  }

  export type TriviaRoundQuizChoiceUpdateManyWithWhereWithoutRoundQuizInput = {
    where: TriviaRoundQuizChoiceScalarWhereInput
    data: XOR<TriviaRoundQuizChoiceUpdateManyMutationInput, TriviaRoundQuizChoiceUncheckedUpdateManyWithoutTriviaRoundQuizChoiceInput>
  }

  export type TriviaRoundQuizCreateWithoutTriviaRoundQuizChoiceInput = {
    round: TriviaRoundCreateNestedOneWithoutTriviaRoundQuizInput
    quiz: TriviaQuizCreateNestedOneWithoutTriviaRoundQuizInput
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUncheckedCreateWithoutTriviaRoundQuizChoiceInput = {
    id?: number
    roundId: number
    quizId: number
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateOrConnectWithoutTriviaRoundQuizChoiceInput = {
    where: TriviaRoundQuizWhereUniqueInput
    create: XOR<TriviaRoundQuizCreateWithoutTriviaRoundQuizChoiceInput, TriviaRoundQuizUncheckedCreateWithoutTriviaRoundQuizChoiceInput>
  }

  export type TriviaQuizChoiceCreateWithoutTriviaRoundQuizChoiceInput = {
    name: string
    quiz: TriviaQuizCreateNestedOneWithoutTriviaQuizChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizChoiceUncheckedCreateWithoutTriviaRoundQuizChoiceInput = {
    id?: number
    name: string
    quizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizChoiceCreateOrConnectWithoutTriviaRoundQuizChoiceInput = {
    where: TriviaQuizChoiceWhereUniqueInput
    create: XOR<TriviaQuizChoiceCreateWithoutTriviaRoundQuizChoiceInput, TriviaQuizChoiceUncheckedCreateWithoutTriviaRoundQuizChoiceInput>
  }

  export type TriviaRoundQuizUpsertWithoutTriviaRoundQuizChoiceInput = {
    update: XOR<TriviaRoundQuizUpdateWithoutTriviaRoundQuizChoiceInput, TriviaRoundQuizUncheckedUpdateWithoutTriviaRoundQuizChoiceInput>
    create: XOR<TriviaRoundQuizCreateWithoutTriviaRoundQuizChoiceInput, TriviaRoundQuizUncheckedCreateWithoutTriviaRoundQuizChoiceInput>
  }

  export type TriviaRoundQuizUpdateWithoutTriviaRoundQuizChoiceInput = {
    round?: TriviaRoundUpdateOneRequiredWithoutTriviaRoundQuizNestedInput
    quiz?: TriviaQuizUpdateOneRequiredWithoutTriviaRoundQuizNestedInput
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutTriviaRoundQuizChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizChoiceUpsertWithoutTriviaRoundQuizChoiceInput = {
    update: XOR<TriviaQuizChoiceUpdateWithoutTriviaRoundQuizChoiceInput, TriviaQuizChoiceUncheckedUpdateWithoutTriviaRoundQuizChoiceInput>
    create: XOR<TriviaQuizChoiceCreateWithoutTriviaRoundQuizChoiceInput, TriviaQuizChoiceUncheckedCreateWithoutTriviaRoundQuizChoiceInput>
  }

  export type TriviaQuizChoiceUpdateWithoutTriviaRoundQuizChoiceInput = {
    name?: StringFieldUpdateOperationsInput | string
    quiz?: TriviaQuizUpdateOneRequiredWithoutTriviaQuizChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizChoiceUncheckedUpdateWithoutTriviaRoundQuizChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingCreateWithoutFromInput = {
    to: UserCreateNestedOneWithoutToFollowingInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUncheckedCreateWithoutFromInput = {
    id?: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingCreateOrConnectWithoutFromInput = {
    where: FollowingWhereUniqueInput
    create: XOR<FollowingCreateWithoutFromInput, FollowingUncheckedCreateWithoutFromInput>
  }

  export type FollowingCreateManyFromInputEnvelope = {
    data: Enumerable<FollowingCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type FollowingCreateWithoutToInput = {
    from: UserCreateNestedOneWithoutFromFolowingInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUncheckedCreateWithoutToInput = {
    id?: number
    fromUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingCreateOrConnectWithoutToInput = {
    where: FollowingWhereUniqueInput
    create: XOR<FollowingCreateWithoutToInput, FollowingUncheckedCreateWithoutToInput>
  }

  export type FollowingCreateManyToInputEnvelope = {
    data: Enumerable<FollowingCreateManyToInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutPostInput
    postOnHashtag?: PostOnHashtagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutPostInput
    postOnHashtag?: PostOnHashtagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: Enumerable<PostCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type DirectMsgCreateWithoutFromInput = {
    to: UserCreateNestedOneWithoutToDirectMessageInput
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgUncheckedCreateWithoutFromInput = {
    id?: number
    toUserId: number
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgCreateOrConnectWithoutFromInput = {
    where: DirectMsgWhereUniqueInput
    create: XOR<DirectMsgCreateWithoutFromInput, DirectMsgUncheckedCreateWithoutFromInput>
  }

  export type DirectMsgCreateManyFromInputEnvelope = {
    data: Enumerable<DirectMsgCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type DirectMsgCreateWithoutToInput = {
    from: UserCreateNestedOneWithoutFromDirectMessageInput
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgUncheckedCreateWithoutToInput = {
    id?: number
    fromUserId: number
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgCreateOrConnectWithoutToInput = {
    where: DirectMsgWhereUniqueInput
    create: XOR<DirectMsgCreateWithoutToInput, DirectMsgUncheckedCreateWithoutToInput>
  }

  export type DirectMsgCreateManyToInputEnvelope = {
    data: Enumerable<DirectMsgCreateManyToInput>
    skipDuplicates?: boolean
  }

  export type ReplyCreateWithoutReplyUserInput = {
    post: PostCreateNestedOneWithoutReplyInput
    reply: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUncheckedCreateWithoutReplyUserInput = {
    id?: number
    postId: number
    reply: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyCreateOrConnectWithoutReplyUserInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutReplyUserInput, ReplyUncheckedCreateWithoutReplyUserInput>
  }

  export type ReplyCreateManyReplyUserInputEnvelope = {
    data: Enumerable<ReplyCreateManyReplyUserInput>
    skipDuplicates?: boolean
  }

  export type FollowingUpsertWithWhereUniqueWithoutFromInput = {
    where: FollowingWhereUniqueInput
    update: XOR<FollowingUpdateWithoutFromInput, FollowingUncheckedUpdateWithoutFromInput>
    create: XOR<FollowingCreateWithoutFromInput, FollowingUncheckedCreateWithoutFromInput>
  }

  export type FollowingUpdateWithWhereUniqueWithoutFromInput = {
    where: FollowingWhereUniqueInput
    data: XOR<FollowingUpdateWithoutFromInput, FollowingUncheckedUpdateWithoutFromInput>
  }

  export type FollowingUpdateManyWithWhereWithoutFromInput = {
    where: FollowingScalarWhereInput
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyWithoutFromFolowingInput>
  }

  export type FollowingScalarWhereInput = {
    AND?: Enumerable<FollowingScalarWhereInput>
    OR?: Enumerable<FollowingScalarWhereInput>
    NOT?: Enumerable<FollowingScalarWhereInput>
    id?: IntFilter | number
    fromUserId?: IntFilter | number
    toUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type FollowingUpsertWithWhereUniqueWithoutToInput = {
    where: FollowingWhereUniqueInput
    update: XOR<FollowingUpdateWithoutToInput, FollowingUncheckedUpdateWithoutToInput>
    create: XOR<FollowingCreateWithoutToInput, FollowingUncheckedCreateWithoutToInput>
  }

  export type FollowingUpdateWithWhereUniqueWithoutToInput = {
    where: FollowingWhereUniqueInput
    data: XOR<FollowingUpdateWithoutToInput, FollowingUncheckedUpdateWithoutToInput>
  }

  export type FollowingUpdateManyWithWhereWithoutToInput = {
    where: FollowingScalarWhereInput
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyWithoutToFollowingInput>
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    postDetail?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMsgUpsertWithWhereUniqueWithoutFromInput = {
    where: DirectMsgWhereUniqueInput
    update: XOR<DirectMsgUpdateWithoutFromInput, DirectMsgUncheckedUpdateWithoutFromInput>
    create: XOR<DirectMsgCreateWithoutFromInput, DirectMsgUncheckedCreateWithoutFromInput>
  }

  export type DirectMsgUpdateWithWhereUniqueWithoutFromInput = {
    where: DirectMsgWhereUniqueInput
    data: XOR<DirectMsgUpdateWithoutFromInput, DirectMsgUncheckedUpdateWithoutFromInput>
  }

  export type DirectMsgUpdateManyWithWhereWithoutFromInput = {
    where: DirectMsgScalarWhereInput
    data: XOR<DirectMsgUpdateManyMutationInput, DirectMsgUncheckedUpdateManyWithoutFromDirectMessageInput>
  }

  export type DirectMsgScalarWhereInput = {
    AND?: Enumerable<DirectMsgScalarWhereInput>
    OR?: Enumerable<DirectMsgScalarWhereInput>
    NOT?: Enumerable<DirectMsgScalarWhereInput>
    id?: IntFilter | number
    fromUserId?: IntFilter | number
    toUserId?: IntFilter | number
    msgDetail?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMsgUpsertWithWhereUniqueWithoutToInput = {
    where: DirectMsgWhereUniqueInput
    update: XOR<DirectMsgUpdateWithoutToInput, DirectMsgUncheckedUpdateWithoutToInput>
    create: XOR<DirectMsgCreateWithoutToInput, DirectMsgUncheckedCreateWithoutToInput>
  }

  export type DirectMsgUpdateWithWhereUniqueWithoutToInput = {
    where: DirectMsgWhereUniqueInput
    data: XOR<DirectMsgUpdateWithoutToInput, DirectMsgUncheckedUpdateWithoutToInput>
  }

  export type DirectMsgUpdateManyWithWhereWithoutToInput = {
    where: DirectMsgScalarWhereInput
    data: XOR<DirectMsgUpdateManyMutationInput, DirectMsgUncheckedUpdateManyWithoutToDirectMessageInput>
  }

  export type ReplyUpsertWithWhereUniqueWithoutReplyUserInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutReplyUserInput, ReplyUncheckedUpdateWithoutReplyUserInput>
    create: XOR<ReplyCreateWithoutReplyUserInput, ReplyUncheckedCreateWithoutReplyUserInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutReplyUserInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutReplyUserInput, ReplyUncheckedUpdateWithoutReplyUserInput>
  }

  export type ReplyUpdateManyWithWhereWithoutReplyUserInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutReplyInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: Enumerable<ReplyScalarWhereInput>
    OR?: Enumerable<ReplyScalarWhereInput>
    NOT?: Enumerable<ReplyScalarWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    reply?: StringFilter | string
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutFromFolowingInput = {
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    toFollowing?: FollowingCreateNestedManyWithoutToInput
    post?: PostCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgCreateNestedManyWithoutToInput
    Reply?: ReplyCreateNestedManyWithoutReplyUserInput
  }

  export type UserUncheckedCreateWithoutFromFolowingInput = {
    id?: number
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    toFollowing?: FollowingUncheckedCreateNestedManyWithoutToInput
    post?: PostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutToInput
    Reply?: ReplyUncheckedCreateNestedManyWithoutReplyUserInput
  }

  export type UserCreateOrConnectWithoutFromFolowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFromFolowingInput, UserUncheckedCreateWithoutFromFolowingInput>
  }

  export type UserCreateWithoutToFollowingInput = {
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingCreateNestedManyWithoutFromInput
    post?: PostCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgCreateNestedManyWithoutToInput
    Reply?: ReplyCreateNestedManyWithoutReplyUserInput
  }

  export type UserUncheckedCreateWithoutToFollowingInput = {
    id?: number
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingUncheckedCreateNestedManyWithoutFromInput
    post?: PostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutToInput
    Reply?: ReplyUncheckedCreateNestedManyWithoutReplyUserInput
  }

  export type UserCreateOrConnectWithoutToFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToFollowingInput, UserUncheckedCreateWithoutToFollowingInput>
  }

  export type UserUpsertWithoutFromFolowingInput = {
    update: XOR<UserUpdateWithoutFromFolowingInput, UserUncheckedUpdateWithoutFromFolowingInput>
    create: XOR<UserCreateWithoutFromFolowingInput, UserUncheckedCreateWithoutFromFolowingInput>
  }

  export type UserUpdateWithoutFromFolowingInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toFollowing?: FollowingUpdateManyWithoutToNestedInput
    post?: PostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUpdateManyWithoutToNestedInput
    Reply?: ReplyUpdateManyWithoutReplyUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFromFolowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toFollowing?: FollowingUncheckedUpdateManyWithoutToNestedInput
    post?: PostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUncheckedUpdateManyWithoutToNestedInput
    Reply?: ReplyUncheckedUpdateManyWithoutReplyUserNestedInput
  }

  export type UserUpsertWithoutToFollowingInput = {
    update: XOR<UserUpdateWithoutToFollowingInput, UserUncheckedUpdateWithoutToFollowingInput>
    create: XOR<UserCreateWithoutToFollowingInput, UserUncheckedCreateWithoutToFollowingInput>
  }

  export type UserUpdateWithoutToFollowingInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUpdateManyWithoutFromNestedInput
    post?: PostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUpdateManyWithoutToNestedInput
    Reply?: ReplyUpdateManyWithoutReplyUserNestedInput
  }

  export type UserUncheckedUpdateWithoutToFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUncheckedUpdateManyWithoutFromNestedInput
    post?: PostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUncheckedUpdateManyWithoutToNestedInput
    Reply?: ReplyUncheckedUpdateManyWithoutReplyUserNestedInput
  }

  export type UserCreateWithoutPostInput = {
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingCreateNestedManyWithoutFromInput
    toFollowing?: FollowingCreateNestedManyWithoutToInput
    fromDirectMessage?: DirectMsgCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgCreateNestedManyWithoutToInput
    Reply?: ReplyCreateNestedManyWithoutReplyUserInput
  }

  export type UserUncheckedCreateWithoutPostInput = {
    id?: number
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: FollowingUncheckedCreateNestedManyWithoutToInput
    fromDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutToInput
    Reply?: ReplyUncheckedCreateNestedManyWithoutReplyUserInput
  }

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type ReplyCreateWithoutPostInput = {
    reply: string
    replyUser: UserCreateNestedOneWithoutReplyInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUncheckedCreateWithoutPostInput = {
    id?: number
    reply: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyCreateOrConnectWithoutPostInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput>
  }

  export type ReplyCreateManyPostInputEnvelope = {
    data: Enumerable<ReplyCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type PostOnHashtagCreateWithoutPostInput = {
    hashtag: HashtagCreateNestedOneWithoutPostOnHashtagInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagUncheckedCreateWithoutPostInput = {
    id?: number
    hashtagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagCreateOrConnectWithoutPostInput = {
    where: PostOnHashtagWhereUniqueInput
    create: XOR<PostOnHashtagCreateWithoutPostInput, PostOnHashtagUncheckedCreateWithoutPostInput>
  }

  export type PostOnHashtagCreateManyPostInputEnvelope = {
    data: Enumerable<PostOnHashtagCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostInput = {
    update: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type UserUpdateWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUpdateManyWithoutToNestedInput
    fromDirectMessage?: DirectMsgUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUpdateManyWithoutToNestedInput
    Reply?: ReplyUpdateManyWithoutReplyUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUncheckedUpdateManyWithoutToNestedInput
    fromDirectMessage?: DirectMsgUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUncheckedUpdateManyWithoutToNestedInput
    Reply?: ReplyUncheckedUpdateManyWithoutReplyUserNestedInput
  }

  export type ReplyUpsertWithWhereUniqueWithoutPostInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutPostInput, ReplyUncheckedUpdateWithoutPostInput>
    create: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutPostInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutPostInput, ReplyUncheckedUpdateWithoutPostInput>
  }

  export type ReplyUpdateManyWithWhereWithoutPostInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutReplyInput>
  }

  export type PostOnHashtagUpsertWithWhereUniqueWithoutPostInput = {
    where: PostOnHashtagWhereUniqueInput
    update: XOR<PostOnHashtagUpdateWithoutPostInput, PostOnHashtagUncheckedUpdateWithoutPostInput>
    create: XOR<PostOnHashtagCreateWithoutPostInput, PostOnHashtagUncheckedCreateWithoutPostInput>
  }

  export type PostOnHashtagUpdateWithWhereUniqueWithoutPostInput = {
    where: PostOnHashtagWhereUniqueInput
    data: XOR<PostOnHashtagUpdateWithoutPostInput, PostOnHashtagUncheckedUpdateWithoutPostInput>
  }

  export type PostOnHashtagUpdateManyWithWhereWithoutPostInput = {
    where: PostOnHashtagScalarWhereInput
    data: XOR<PostOnHashtagUpdateManyMutationInput, PostOnHashtagUncheckedUpdateManyWithoutPostOnHashtagInput>
  }

  export type PostOnHashtagScalarWhereInput = {
    AND?: Enumerable<PostOnHashtagScalarWhereInput>
    OR?: Enumerable<PostOnHashtagScalarWhereInput>
    NOT?: Enumerable<PostOnHashtagScalarWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    hashtagId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutFromDirectMessageInput = {
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingCreateNestedManyWithoutFromInput
    toFollowing?: FollowingCreateNestedManyWithoutToInput
    post?: PostCreateNestedManyWithoutUserInput
    toDirectMessage?: DirectMsgCreateNestedManyWithoutToInput
    Reply?: ReplyCreateNestedManyWithoutReplyUserInput
  }

  export type UserUncheckedCreateWithoutFromDirectMessageInput = {
    id?: number
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: FollowingUncheckedCreateNestedManyWithoutToInput
    post?: PostUncheckedCreateNestedManyWithoutUserInput
    toDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutToInput
    Reply?: ReplyUncheckedCreateNestedManyWithoutReplyUserInput
  }

  export type UserCreateOrConnectWithoutFromDirectMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFromDirectMessageInput, UserUncheckedCreateWithoutFromDirectMessageInput>
  }

  export type UserCreateWithoutToDirectMessageInput = {
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingCreateNestedManyWithoutFromInput
    toFollowing?: FollowingCreateNestedManyWithoutToInput
    post?: PostCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgCreateNestedManyWithoutFromInput
    Reply?: ReplyCreateNestedManyWithoutReplyUserInput
  }

  export type UserUncheckedCreateWithoutToDirectMessageInput = {
    id?: number
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: FollowingUncheckedCreateNestedManyWithoutToInput
    post?: PostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutFromInput
    Reply?: ReplyUncheckedCreateNestedManyWithoutReplyUserInput
  }

  export type UserCreateOrConnectWithoutToDirectMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToDirectMessageInput, UserUncheckedCreateWithoutToDirectMessageInput>
  }

  export type UserUpsertWithoutFromDirectMessageInput = {
    update: XOR<UserUpdateWithoutFromDirectMessageInput, UserUncheckedUpdateWithoutFromDirectMessageInput>
    create: XOR<UserCreateWithoutFromDirectMessageInput, UserUncheckedCreateWithoutFromDirectMessageInput>
  }

  export type UserUpdateWithoutFromDirectMessageInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUpdateManyWithoutToNestedInput
    post?: PostUpdateManyWithoutUserNestedInput
    toDirectMessage?: DirectMsgUpdateManyWithoutToNestedInput
    Reply?: ReplyUpdateManyWithoutReplyUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFromDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUncheckedUpdateManyWithoutToNestedInput
    post?: PostUncheckedUpdateManyWithoutUserNestedInput
    toDirectMessage?: DirectMsgUncheckedUpdateManyWithoutToNestedInput
    Reply?: ReplyUncheckedUpdateManyWithoutReplyUserNestedInput
  }

  export type UserUpsertWithoutToDirectMessageInput = {
    update: XOR<UserUpdateWithoutToDirectMessageInput, UserUncheckedUpdateWithoutToDirectMessageInput>
    create: XOR<UserCreateWithoutToDirectMessageInput, UserUncheckedCreateWithoutToDirectMessageInput>
  }

  export type UserUpdateWithoutToDirectMessageInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUpdateManyWithoutToNestedInput
    post?: PostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUpdateManyWithoutFromNestedInput
    Reply?: ReplyUpdateManyWithoutReplyUserNestedInput
  }

  export type UserUncheckedUpdateWithoutToDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUncheckedUpdateManyWithoutToNestedInput
    post?: PostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUncheckedUpdateManyWithoutFromNestedInput
    Reply?: ReplyUncheckedUpdateManyWithoutReplyUserNestedInput
  }

  export type PostOnHashtagCreateWithoutHashtagInput = {
    post: PostCreateNestedOneWithoutPostOnHashtagInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagUncheckedCreateWithoutHashtagInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagCreateOrConnectWithoutHashtagInput = {
    where: PostOnHashtagWhereUniqueInput
    create: XOR<PostOnHashtagCreateWithoutHashtagInput, PostOnHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type PostOnHashtagCreateManyHashtagInputEnvelope = {
    data: Enumerable<PostOnHashtagCreateManyHashtagInput>
    skipDuplicates?: boolean
  }

  export type PostOnHashtagUpsertWithWhereUniqueWithoutHashtagInput = {
    where: PostOnHashtagWhereUniqueInput
    update: XOR<PostOnHashtagUpdateWithoutHashtagInput, PostOnHashtagUncheckedUpdateWithoutHashtagInput>
    create: XOR<PostOnHashtagCreateWithoutHashtagInput, PostOnHashtagUncheckedCreateWithoutHashtagInput>
  }

  export type PostOnHashtagUpdateWithWhereUniqueWithoutHashtagInput = {
    where: PostOnHashtagWhereUniqueInput
    data: XOR<PostOnHashtagUpdateWithoutHashtagInput, PostOnHashtagUncheckedUpdateWithoutHashtagInput>
  }

  export type PostOnHashtagUpdateManyWithWhereWithoutHashtagInput = {
    where: PostOnHashtagScalarWhereInput
    data: XOR<PostOnHashtagUpdateManyMutationInput, PostOnHashtagUncheckedUpdateManyWithoutPostOnHashtagInput>
  }

  export type PostCreateWithoutReplyInput = {
    user: UserCreateNestedOneWithoutPostInput
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postOnHashtag?: PostOnHashtagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutReplyInput = {
    id?: number
    userId: number
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postOnHashtag?: PostOnHashtagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutReplyInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutReplyInput, PostUncheckedCreateWithoutReplyInput>
  }

  export type UserCreateWithoutReplyInput = {
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingCreateNestedManyWithoutFromInput
    toFollowing?: FollowingCreateNestedManyWithoutToInput
    post?: PostCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutReplyInput = {
    id?: number
    name: string
    profileImage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFolowing?: FollowingUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: FollowingUncheckedCreateNestedManyWithoutToInput
    post?: PostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: DirectMsgUncheckedCreateNestedManyWithoutToInput
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
    user?: UserUpdateOneRequiredWithoutPostNestedInput
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postOnHashtag?: PostOnHashtagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postOnHashtag?: PostOnHashtagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutReplyInput = {
    update: XOR<UserUpdateWithoutReplyInput, UserUncheckedUpdateWithoutReplyInput>
    create: XOR<UserCreateWithoutReplyInput, UserUncheckedCreateWithoutReplyInput>
  }

  export type UserUpdateWithoutReplyInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUpdateManyWithoutToNestedInput
    post?: PostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFolowing?: FollowingUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: FollowingUncheckedUpdateManyWithoutToNestedInput
    post?: PostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: DirectMsgUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: DirectMsgUncheckedUpdateManyWithoutToNestedInput
  }

  export type PostCreateWithoutPostOnHashtagInput = {
    user: UserCreateNestedOneWithoutPostInput
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostOnHashtagInput = {
    id?: number
    userId: number
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostOnHashtagInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostOnHashtagInput, PostUncheckedCreateWithoutPostOnHashtagInput>
  }

  export type HashtagCreateWithoutPostOnHashtagInput = {
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagUncheckedCreateWithoutPostOnHashtagInput = {
    id?: number
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagCreateOrConnectWithoutPostOnHashtagInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutPostOnHashtagInput, HashtagUncheckedCreateWithoutPostOnHashtagInput>
  }

  export type PostUpsertWithoutPostOnHashtagInput = {
    update: XOR<PostUpdateWithoutPostOnHashtagInput, PostUncheckedUpdateWithoutPostOnHashtagInput>
    create: XOR<PostCreateWithoutPostOnHashtagInput, PostUncheckedCreateWithoutPostOnHashtagInput>
  }

  export type PostUpdateWithoutPostOnHashtagInput = {
    user?: UserUpdateOneRequiredWithoutPostNestedInput
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostOnHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutPostNestedInput
  }

  export type HashtagUpsertWithoutPostOnHashtagInput = {
    update: XOR<HashtagUpdateWithoutPostOnHashtagInput, HashtagUncheckedUpdateWithoutPostOnHashtagInput>
    create: XOR<HashtagCreateWithoutPostOnHashtagInput, HashtagUncheckedCreateWithoutPostOnHashtagInput>
  }

  export type HashtagUpdateWithoutPostOnHashtagInput = {
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUncheckedUpdateWithoutPostOnHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUpdateManyWithoutMenuNestedInput
  }

  export type BinKitchenMenuUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BinKitchenOrderItem?: BinKitchenOrderItemUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type BinKitchenMenuUncheckedUpdateManyWithoutBinKitchenMenuInput = {
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
    order?: BinKitchenOrderUpdateOneWithoutBinKitchenOrderItemNestedInput
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

  export type BinKitchenOrderItemUncheckedUpdateManyWithoutBinKitchenOrderItemInput = {
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
    menu?: BinKitchenMenuUpdateOneRequiredWithoutBinKitchenOrderItemNestedInput
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
    name: string
    answerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundCreateManyCategoryInput = {
    id?: number
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuizChoice?: TriviaQuizChoiceUpdateManyWithoutQuizNestedInput
    triviaRoundQuiz?: TriviaRoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaQuizChoice?: TriviaQuizChoiceUncheckedUpdateManyWithoutQuizNestedInput
    triviaRoundQuiz?: TriviaRoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateManyWithoutTriviaQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUpdateWithoutCategoryInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuiz?: TriviaRoundQuizUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuiz?: TriviaRoundQuizUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateManyWithoutTriviaRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuizChoiceCreateManyQuizInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizCreateManyQuizInput = {
    id?: number
    roundId: number
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaQuizChoiceUpdateWithoutQuizInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUpdateManyWithoutRoundQuizChoiceNestedInput
  }

  export type TriviaQuizChoiceUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedUpdateManyWithoutRoundQuizChoiceNestedInput
  }

  export type TriviaQuizChoiceUncheckedUpdateManyWithoutTriviaQuizChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizUpdateWithoutQuizInput = {
    round?: TriviaRoundUpdateOneRequiredWithoutTriviaRoundQuizNestedInput
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUpdateManyWithoutRoundQuizNestedInput
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedUpdateManyWithoutRoundQuizNestedInput
  }

  export type TriviaRoundQuizUncheckedUpdateManyWithoutTriviaRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: IntFieldUpdateOperationsInput | number
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizChoiceCreateManyRoundQuizChoiceInput = {
    id?: number
    roundQuizId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceUpdateWithoutRoundQuizChoiceInput = {
    roundQuiz?: TriviaRoundQuizUpdateOneRequiredWithoutTriviaRoundQuizChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizChoiceUncheckedUpdateWithoutRoundQuizChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizChoiceUncheckedUpdateManyWithoutTriviaRoundQuizChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuizId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizCreateManyRoundInput = {
    id?: number
    quizId: number
    playerChooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizUpdateWithoutRoundInput = {
    quiz?: TriviaQuizUpdateOneRequiredWithoutTriviaRoundQuizNestedInput
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUpdateManyWithoutRoundQuizNestedInput
  }

  export type TriviaRoundQuizUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    playerChooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    triviaRoundQuizChoice?: TriviaRoundQuizChoiceUncheckedUpdateManyWithoutRoundQuizNestedInput
  }

  export type TriviaRoundQuizChoiceCreateManyRoundQuizInput = {
    id?: number
    quizChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaRoundQuizChoiceUpdateWithoutRoundQuizInput = {
    roundQuizChoice?: TriviaQuizChoiceUpdateOneRequiredWithoutTriviaRoundQuizChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuizChoiceUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingCreateManyFromInput = {
    id?: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingCreateManyToInput = {
    id?: number
    fromUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyUserInput = {
    id?: number
    postDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgCreateManyFromInput = {
    id?: number
    toUserId: number
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMsgCreateManyToInput = {
    id?: number
    fromUserId: number
    msgDetail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyCreateManyReplyUserInput = {
    id?: number
    postId: number
    reply: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FollowingUpdateWithoutFromInput = {
    to?: UserUpdateOneRequiredWithoutToFollowingNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyWithoutFromFolowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUpdateWithoutToInput = {
    from?: UserUpdateOneRequiredWithoutFromFolowingNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyWithoutToFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutPostNestedInput
    postOnHashtag?: PostOnHashtagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutPostNestedInput
    postOnHashtag?: PostOnHashtagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    postDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgUpdateWithoutFromInput = {
    to?: UserUpdateOneRequiredWithoutToDirectMessageNestedInput
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgUncheckedUpdateManyWithoutFromDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgUpdateWithoutToInput = {
    from?: UserUpdateOneRequiredWithoutFromDirectMessageNestedInput
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMsgUncheckedUpdateManyWithoutToDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    msgDetail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUpdateWithoutReplyUserInput = {
    post?: PostUpdateOneRequiredWithoutReplyNestedInput
    reply?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateWithoutReplyUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyPostInput = {
    id?: number
    reply: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagCreateManyPostInput = {
    id?: number
    hashtagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUpdateWithoutPostInput = {
    reply?: StringFieldUpdateOperationsInput | string
    replyUser?: UserUpdateOneRequiredWithoutReplyNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    reply?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagUpdateWithoutPostInput = {
    hashtag?: HashtagUpdateOneRequiredWithoutPostOnHashtagNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagUncheckedUpdateManyWithoutPostOnHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagCreateManyHashtagInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostOnHashtagUpdateWithoutHashtagInput = {
    post?: PostUpdateOneRequiredWithoutPostOnHashtagNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagUncheckedUpdateWithoutHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
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