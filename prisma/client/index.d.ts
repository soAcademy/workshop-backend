
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model KorKitchenCategory
 * 
 */
export type KorKitchenCategory = {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}

/**
 * Model KorKitchenMenu
 * 
 */
export type KorKitchenMenu = {
  id: number
  name: string
  image: string
  price: number
  categoryName: string | null
  createAt: Date
  updateAt: Date
}

/**
 * Model KorKitchenOrder
 * 
 */
export type KorKitchenOrder = {
  id: number
  status: string
  tableId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model KorKitchenOrderItem
 * 
 */
export type KorKitchenOrderItem = {
  id: number
  menuId: number
  orderId: number | null
  quantity: number
  totalPrice: number
  creatAt: Date
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
  createAt: Date
  updateAt: Date
}

/**
 * Model TestModel
 * 
 */
export type TestModel = {
  id: number
  firstname: string
  Surname: string
}

/**
 * Model TriviaCategory
 * 
 */
export type TriviaCategory = {
  id: number
  name: string
}

/**
 * Model TriviaQuestion
 * 
 */
export type TriviaQuestion = {
  id: number
  categoryId: number
  name: string
  answerID: number
}

/**
 * Model TriviaChoice
 * 
 */
export type TriviaChoice = {
  id: number
  quizId: number
  name: string
}

/**
 * Model TriviaRoundQuestion
 * 
 */
export type TriviaRoundQuestion = {
  id: number
  quizId: number
  choiceId: number
  quizResult: boolean
  roundId: number | null
}

/**
 * Model TriviaRound
 * 
 */
export type TriviaRound = {
  id: number
  user: string
  categoryId: number
  totalResult: number
  createAt: Date
}

/**
 * Model TwitterUser
 * 
 */
export type TwitterUser = {
  id: number
  name: string
  image: string
  directMessageId: number
  userRelationId: number
}

/**
 * Model TwitterPost
 * 
 */
export type TwitterPost = {
  id: number
  message: string
}

/**
 * Model TwitterHashtag
 * 
 */
export type TwitterHashtag = {
  id: number
  message: string
}

/**
 * Model TwitterDirectMessage
 * 
 */
export type TwitterDirectMessage = {
  id: number
  from: string
  to: string
  message: string
  createAt: Date
}

/**
 * Model TwitterUserRelation
 * 
 */
export type TwitterUserRelation = {
  id: number
  follower: string
  following: string
}

/**
 * Model TwitterPostReply
 * 
 */
export type TwitterPostReply = {
  id: number
  message: string
  postId: number
  userId: number
  createAt: Date
}

/**
 * Model PostOnHashtag
 * 
 */
export type PostOnHashtag = {
  id: number
  postId: number
  hashtagId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more KorKitchenCategories
 * const korKitchenCategories = await prisma.korKitchenCategory.findMany()
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
   * // Fetch zero or more KorKitchenCategories
   * const korKitchenCategories = await prisma.korKitchenCategory.findMany()
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
   * `prisma.korKitchenCategory`: Exposes CRUD operations for the **KorKitchenCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KorKitchenCategories
    * const korKitchenCategories = await prisma.korKitchenCategory.findMany()
    * ```
    */
  get korKitchenCategory(): Prisma.KorKitchenCategoryDelegate<GlobalReject>;

  /**
   * `prisma.korKitchenMenu`: Exposes CRUD operations for the **KorKitchenMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KorKitchenMenus
    * const korKitchenMenus = await prisma.korKitchenMenu.findMany()
    * ```
    */
  get korKitchenMenu(): Prisma.KorKitchenMenuDelegate<GlobalReject>;

  /**
   * `prisma.korKitchenOrder`: Exposes CRUD operations for the **KorKitchenOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KorKitchenOrders
    * const korKitchenOrders = await prisma.korKitchenOrder.findMany()
    * ```
    */
  get korKitchenOrder(): Prisma.KorKitchenOrderDelegate<GlobalReject>;

  /**
   * `prisma.korKitchenOrderItem`: Exposes CRUD operations for the **KorKitchenOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KorKitchenOrderItems
    * const korKitchenOrderItems = await prisma.korKitchenOrderItem.findMany()
    * ```
    */
  get korKitchenOrderItem(): Prisma.KorKitchenOrderItemDelegate<GlobalReject>;

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
   * `prisma.testModel`: Exposes CRUD operations for the **TestModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestModels
    * const testModels = await prisma.testModel.findMany()
    * ```
    */
  get testModel(): Prisma.TestModelDelegate<GlobalReject>;

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
   * `prisma.triviaQuestion`: Exposes CRUD operations for the **TriviaQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaQuestions
    * const triviaQuestions = await prisma.triviaQuestion.findMany()
    * ```
    */
  get triviaQuestion(): Prisma.TriviaQuestionDelegate<GlobalReject>;

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
   * `prisma.triviaRoundQuestion`: Exposes CRUD operations for the **TriviaRoundQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaRoundQuestions
    * const triviaRoundQuestions = await prisma.triviaRoundQuestion.findMany()
    * ```
    */
  get triviaRoundQuestion(): Prisma.TriviaRoundQuestionDelegate<GlobalReject>;

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
   * `prisma.twitterUser`: Exposes CRUD operations for the **TwitterUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterUsers
    * const twitterUsers = await prisma.twitterUser.findMany()
    * ```
    */
  get twitterUser(): Prisma.TwitterUserDelegate<GlobalReject>;

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
   * `prisma.twitterHashtag`: Exposes CRUD operations for the **TwitterHashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterHashtags
    * const twitterHashtags = await prisma.twitterHashtag.findMany()
    * ```
    */
  get twitterHashtag(): Prisma.TwitterHashtagDelegate<GlobalReject>;

  /**
   * `prisma.twitterDirectMessage`: Exposes CRUD operations for the **TwitterDirectMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterDirectMessages
    * const twitterDirectMessages = await prisma.twitterDirectMessage.findMany()
    * ```
    */
  get twitterDirectMessage(): Prisma.TwitterDirectMessageDelegate<GlobalReject>;

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
   * `prisma.twitterPostReply`: Exposes CRUD operations for the **TwitterPostReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterPostReplies
    * const twitterPostReplies = await prisma.twitterPostReply.findMany()
    * ```
    */
  get twitterPostReply(): Prisma.TwitterPostReplyDelegate<GlobalReject>;

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
    KorKitchenCategory: 'KorKitchenCategory',
    KorKitchenMenu: 'KorKitchenMenu',
    KorKitchenOrder: 'KorKitchenOrder',
    KorKitchenOrderItem: 'KorKitchenOrderItem',
    TodoList: 'TodoList',
    TestModel: 'TestModel',
    TriviaCategory: 'TriviaCategory',
    TriviaQuestion: 'TriviaQuestion',
    TriviaChoice: 'TriviaChoice',
    TriviaRoundQuestion: 'TriviaRoundQuestion',
    TriviaRound: 'TriviaRound',
    TwitterUser: 'TwitterUser',
    TwitterPost: 'TwitterPost',
    TwitterHashtag: 'TwitterHashtag',
    TwitterDirectMessage: 'TwitterDirectMessage',
    TwitterUserRelation: 'TwitterUserRelation',
    TwitterPostReply: 'TwitterPostReply',
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
   * Count Type KorKitchenCategoryCountOutputType
   */


  export type KorKitchenCategoryCountOutputType = {
    menu: number
  }

  export type KorKitchenCategoryCountOutputTypeSelect = {
    menu?: boolean
  }

  export type KorKitchenCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | KorKitchenCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? KorKitchenCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (KorKitchenCategoryCountOutputTypeArgs)
    ? KorKitchenCategoryCountOutputType 
    : S extends { select: any } & (KorKitchenCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof KorKitchenCategoryCountOutputType ? KorKitchenCategoryCountOutputType[P] : never
  } 
      : KorKitchenCategoryCountOutputType




  // Custom InputTypes

  /**
   * KorKitchenCategoryCountOutputType without action
   */
  export type KorKitchenCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategoryCountOutputType
     */
    select?: KorKitchenCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type KorKitchenMenuCountOutputType
   */


  export type KorKitchenMenuCountOutputType = {
    orderItems: number
  }

  export type KorKitchenMenuCountOutputTypeSelect = {
    orderItems?: boolean
  }

  export type KorKitchenMenuCountOutputTypeGetPayload<S extends boolean | null | undefined | KorKitchenMenuCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? KorKitchenMenuCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (KorKitchenMenuCountOutputTypeArgs)
    ? KorKitchenMenuCountOutputType 
    : S extends { select: any } & (KorKitchenMenuCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof KorKitchenMenuCountOutputType ? KorKitchenMenuCountOutputType[P] : never
  } 
      : KorKitchenMenuCountOutputType




  // Custom InputTypes

  /**
   * KorKitchenMenuCountOutputType without action
   */
  export type KorKitchenMenuCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenuCountOutputType
     */
    select?: KorKitchenMenuCountOutputTypeSelect | null
  }



  /**
   * Count Type KorKitchenOrderCountOutputType
   */


  export type KorKitchenOrderCountOutputType = {
    items: number
  }

  export type KorKitchenOrderCountOutputTypeSelect = {
    items?: boolean
  }

  export type KorKitchenOrderCountOutputTypeGetPayload<S extends boolean | null | undefined | KorKitchenOrderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? KorKitchenOrderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (KorKitchenOrderCountOutputTypeArgs)
    ? KorKitchenOrderCountOutputType 
    : S extends { select: any } & (KorKitchenOrderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof KorKitchenOrderCountOutputType ? KorKitchenOrderCountOutputType[P] : never
  } 
      : KorKitchenOrderCountOutputType




  // Custom InputTypes

  /**
   * KorKitchenOrderCountOutputType without action
   */
  export type KorKitchenOrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderCountOutputType
     */
    select?: KorKitchenOrderCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaCategoryCountOutputType
   */


  export type TriviaCategoryCountOutputType = {
    questions: number
    rounds: number
  }

  export type TriviaCategoryCountOutputTypeSelect = {
    questions?: boolean
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
   * Count Type TriviaQuestionCountOutputType
   */


  export type TriviaQuestionCountOutputType = {
    choices: number
    roundQuestions: number
  }

  export type TriviaQuestionCountOutputTypeSelect = {
    choices?: boolean
    roundQuestions?: boolean
  }

  export type TriviaQuestionCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaQuestionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuestionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuestionCountOutputTypeArgs)
    ? TriviaQuestionCountOutputType 
    : S extends { select: any } & (TriviaQuestionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaQuestionCountOutputType ? TriviaQuestionCountOutputType[P] : never
  } 
      : TriviaQuestionCountOutputType




  // Custom InputTypes

  /**
   * TriviaQuestionCountOutputType without action
   */
  export type TriviaQuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestionCountOutputType
     */
    select?: TriviaQuestionCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaChoiceCountOutputType
   */


  export type TriviaChoiceCountOutputType = {
    roundQuestions: number
  }

  export type TriviaChoiceCountOutputTypeSelect = {
    roundQuestions?: boolean
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
    questions: number
  }

  export type TriviaRoundCountOutputTypeSelect = {
    questions?: boolean
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
    TwitterPostReply: number
  }

  export type TwitterUserCountOutputTypeSelect = {
    TwitterPostReply?: boolean
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
    TwitterPostReply: number
    PostOnHashtag: number
  }

  export type TwitterPostCountOutputTypeSelect = {
    TwitterPostReply?: boolean
    PostOnHashtag?: boolean
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
   * Count Type TwitterHashtagCountOutputType
   */


  export type TwitterHashtagCountOutputType = {
    PostOnHashtag: number
  }

  export type TwitterHashtagCountOutputTypeSelect = {
    PostOnHashtag?: boolean
  }

  export type TwitterHashtagCountOutputTypeGetPayload<S extends boolean | null | undefined | TwitterHashtagCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterHashtagCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TwitterHashtagCountOutputTypeArgs)
    ? TwitterHashtagCountOutputType 
    : S extends { select: any } & (TwitterHashtagCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TwitterHashtagCountOutputType ? TwitterHashtagCountOutputType[P] : never
  } 
      : TwitterHashtagCountOutputType




  // Custom InputTypes

  /**
   * TwitterHashtagCountOutputType without action
   */
  export type TwitterHashtagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtagCountOutputType
     */
    select?: TwitterHashtagCountOutputTypeSelect | null
  }



  /**
   * Count Type TwitterDirectMessageCountOutputType
   */


  export type TwitterDirectMessageCountOutputType = {
    TwitterUser: number
  }

  export type TwitterDirectMessageCountOutputTypeSelect = {
    TwitterUser?: boolean
  }

  export type TwitterDirectMessageCountOutputTypeGetPayload<S extends boolean | null | undefined | TwitterDirectMessageCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterDirectMessageCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TwitterDirectMessageCountOutputTypeArgs)
    ? TwitterDirectMessageCountOutputType 
    : S extends { select: any } & (TwitterDirectMessageCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TwitterDirectMessageCountOutputType ? TwitterDirectMessageCountOutputType[P] : never
  } 
      : TwitterDirectMessageCountOutputType




  // Custom InputTypes

  /**
   * TwitterDirectMessageCountOutputType without action
   */
  export type TwitterDirectMessageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessageCountOutputType
     */
    select?: TwitterDirectMessageCountOutputTypeSelect | null
  }



  /**
   * Count Type TwitterUserRelationCountOutputType
   */


  export type TwitterUserRelationCountOutputType = {
    TwitterUser: number
  }

  export type TwitterUserRelationCountOutputTypeSelect = {
    TwitterUser?: boolean
  }

  export type TwitterUserRelationCountOutputTypeGetPayload<S extends boolean | null | undefined | TwitterUserRelationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterUserRelationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TwitterUserRelationCountOutputTypeArgs)
    ? TwitterUserRelationCountOutputType 
    : S extends { select: any } & (TwitterUserRelationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TwitterUserRelationCountOutputType ? TwitterUserRelationCountOutputType[P] : never
  } 
      : TwitterUserRelationCountOutputType




  // Custom InputTypes

  /**
   * TwitterUserRelationCountOutputType without action
   */
  export type TwitterUserRelationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TwitterUserRelationCountOutputType
     */
    select?: TwitterUserRelationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model KorKitchenCategory
   */


  export type AggregateKorKitchenCategory = {
    _count: KorKitchenCategoryCountAggregateOutputType | null
    _avg: KorKitchenCategoryAvgAggregateOutputType | null
    _sum: KorKitchenCategorySumAggregateOutputType | null
    _min: KorKitchenCategoryMinAggregateOutputType | null
    _max: KorKitchenCategoryMaxAggregateOutputType | null
  }

  export type KorKitchenCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type KorKitchenCategorySumAggregateOutputType = {
    id: number | null
  }

  export type KorKitchenCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KorKitchenCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KorKitchenCategoryCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type KorKitchenCategoryAvgAggregateInputType = {
    id?: true
  }

  export type KorKitchenCategorySumAggregateInputType = {
    id?: true
  }

  export type KorKitchenCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type KorKitchenCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type KorKitchenCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type KorKitchenCategoryAggregateArgs = {
    /**
     * Filter which KorKitchenCategory to aggregate.
     */
    where?: KorKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenCategories to fetch.
     */
    orderBy?: Enumerable<KorKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KorKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KorKitchenCategories
    **/
    _count?: true | KorKitchenCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KorKitchenCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KorKitchenCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KorKitchenCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KorKitchenCategoryMaxAggregateInputType
  }

  export type GetKorKitchenCategoryAggregateType<T extends KorKitchenCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateKorKitchenCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKorKitchenCategory[P]>
      : GetScalarType<T[P], AggregateKorKitchenCategory[P]>
  }




  export type KorKitchenCategoryGroupByArgs = {
    where?: KorKitchenCategoryWhereInput
    orderBy?: Enumerable<KorKitchenCategoryOrderByWithAggregationInput>
    by: KorKitchenCategoryScalarFieldEnum[]
    having?: KorKitchenCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KorKitchenCategoryCountAggregateInputType | true
    _avg?: KorKitchenCategoryAvgAggregateInputType
    _sum?: KorKitchenCategorySumAggregateInputType
    _min?: KorKitchenCategoryMinAggregateInputType
    _max?: KorKitchenCategoryMaxAggregateInputType
  }


  export type KorKitchenCategoryGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    updateAt: Date
    _count: KorKitchenCategoryCountAggregateOutputType | null
    _avg: KorKitchenCategoryAvgAggregateOutputType | null
    _sum: KorKitchenCategorySumAggregateOutputType | null
    _min: KorKitchenCategoryMinAggregateOutputType | null
    _max: KorKitchenCategoryMaxAggregateOutputType | null
  }

  type GetKorKitchenCategoryGroupByPayload<T extends KorKitchenCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<KorKitchenCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KorKitchenCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KorKitchenCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], KorKitchenCategoryGroupByOutputType[P]>
        }
      >
    >


  export type KorKitchenCategorySelect = {
    id?: boolean
    name?: boolean
    menu?: boolean | KorKitchenCategory$menuArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | KorKitchenCategoryCountOutputTypeArgs
  }


  export type KorKitchenCategoryInclude = {
    menu?: boolean | KorKitchenCategory$menuArgs
    _count?: boolean | KorKitchenCategoryCountOutputTypeArgs
  }

  export type KorKitchenCategoryGetPayload<S extends boolean | null | undefined | KorKitchenCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? KorKitchenCategory :
    S extends undefined ? never :
    S extends { include: any } & (KorKitchenCategoryArgs | KorKitchenCategoryFindManyArgs)
    ? KorKitchenCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu' ? Array < KorKitchenMenuGetPayload<S['include'][P]>>  :
        P extends '_count' ? KorKitchenCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (KorKitchenCategoryArgs | KorKitchenCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu' ? Array < KorKitchenMenuGetPayload<S['select'][P]>>  :
        P extends '_count' ? KorKitchenCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof KorKitchenCategory ? KorKitchenCategory[P] : never
  } 
      : KorKitchenCategory


  type KorKitchenCategoryCountArgs = 
    Omit<KorKitchenCategoryFindManyArgs, 'select' | 'include'> & {
      select?: KorKitchenCategoryCountAggregateInputType | true
    }

  export interface KorKitchenCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one KorKitchenCategory that matches the filter.
     * @param {KorKitchenCategoryFindUniqueArgs} args - Arguments to find a KorKitchenCategory
     * @example
     * // Get one KorKitchenCategory
     * const korKitchenCategory = await prisma.korKitchenCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KorKitchenCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, KorKitchenCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'KorKitchenCategory'> extends True ? Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T>> : Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T> | null, null>

    /**
     * Find one KorKitchenCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KorKitchenCategoryFindUniqueOrThrowArgs} args - Arguments to find a KorKitchenCategory
     * @example
     * // Get one KorKitchenCategory
     * const korKitchenCategory = await prisma.korKitchenCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KorKitchenCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, KorKitchenCategoryFindUniqueOrThrowArgs>
    ): Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T>>

    /**
     * Find the first KorKitchenCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenCategoryFindFirstArgs} args - Arguments to find a KorKitchenCategory
     * @example
     * // Get one KorKitchenCategory
     * const korKitchenCategory = await prisma.korKitchenCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KorKitchenCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, KorKitchenCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'KorKitchenCategory'> extends True ? Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T>> : Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T> | null, null>

    /**
     * Find the first KorKitchenCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenCategoryFindFirstOrThrowArgs} args - Arguments to find a KorKitchenCategory
     * @example
     * // Get one KorKitchenCategory
     * const korKitchenCategory = await prisma.korKitchenCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KorKitchenCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, KorKitchenCategoryFindFirstOrThrowArgs>
    ): Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T>>

    /**
     * Find zero or more KorKitchenCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KorKitchenCategories
     * const korKitchenCategories = await prisma.korKitchenCategory.findMany()
     * 
     * // Get first 10 KorKitchenCategories
     * const korKitchenCategories = await prisma.korKitchenCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const korKitchenCategoryWithIdOnly = await prisma.korKitchenCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KorKitchenCategoryFindManyArgs>(
      args?: SelectSubset<T, KorKitchenCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<KorKitchenCategoryGetPayload<T>>>

    /**
     * Create a KorKitchenCategory.
     * @param {KorKitchenCategoryCreateArgs} args - Arguments to create a KorKitchenCategory.
     * @example
     * // Create one KorKitchenCategory
     * const KorKitchenCategory = await prisma.korKitchenCategory.create({
     *   data: {
     *     // ... data to create a KorKitchenCategory
     *   }
     * })
     * 
    **/
    create<T extends KorKitchenCategoryCreateArgs>(
      args: SelectSubset<T, KorKitchenCategoryCreateArgs>
    ): Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T>>

    /**
     * Create many KorKitchenCategories.
     *     @param {KorKitchenCategoryCreateManyArgs} args - Arguments to create many KorKitchenCategories.
     *     @example
     *     // Create many KorKitchenCategories
     *     const korKitchenCategory = await prisma.korKitchenCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KorKitchenCategoryCreateManyArgs>(
      args?: SelectSubset<T, KorKitchenCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KorKitchenCategory.
     * @param {KorKitchenCategoryDeleteArgs} args - Arguments to delete one KorKitchenCategory.
     * @example
     * // Delete one KorKitchenCategory
     * const KorKitchenCategory = await prisma.korKitchenCategory.delete({
     *   where: {
     *     // ... filter to delete one KorKitchenCategory
     *   }
     * })
     * 
    **/
    delete<T extends KorKitchenCategoryDeleteArgs>(
      args: SelectSubset<T, KorKitchenCategoryDeleteArgs>
    ): Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T>>

    /**
     * Update one KorKitchenCategory.
     * @param {KorKitchenCategoryUpdateArgs} args - Arguments to update one KorKitchenCategory.
     * @example
     * // Update one KorKitchenCategory
     * const korKitchenCategory = await prisma.korKitchenCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KorKitchenCategoryUpdateArgs>(
      args: SelectSubset<T, KorKitchenCategoryUpdateArgs>
    ): Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T>>

    /**
     * Delete zero or more KorKitchenCategories.
     * @param {KorKitchenCategoryDeleteManyArgs} args - Arguments to filter KorKitchenCategories to delete.
     * @example
     * // Delete a few KorKitchenCategories
     * const { count } = await prisma.korKitchenCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KorKitchenCategoryDeleteManyArgs>(
      args?: SelectSubset<T, KorKitchenCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KorKitchenCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KorKitchenCategories
     * const korKitchenCategory = await prisma.korKitchenCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KorKitchenCategoryUpdateManyArgs>(
      args: SelectSubset<T, KorKitchenCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KorKitchenCategory.
     * @param {KorKitchenCategoryUpsertArgs} args - Arguments to update or create a KorKitchenCategory.
     * @example
     * // Update or create a KorKitchenCategory
     * const korKitchenCategory = await prisma.korKitchenCategory.upsert({
     *   create: {
     *     // ... data to create a KorKitchenCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KorKitchenCategory we want to update
     *   }
     * })
    **/
    upsert<T extends KorKitchenCategoryUpsertArgs>(
      args: SelectSubset<T, KorKitchenCategoryUpsertArgs>
    ): Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T>>

    /**
     * Count the number of KorKitchenCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenCategoryCountArgs} args - Arguments to filter KorKitchenCategories to count.
     * @example
     * // Count the number of KorKitchenCategories
     * const count = await prisma.korKitchenCategory.count({
     *   where: {
     *     // ... the filter for the KorKitchenCategories we want to count
     *   }
     * })
    **/
    count<T extends KorKitchenCategoryCountArgs>(
      args?: Subset<T, KorKitchenCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KorKitchenCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KorKitchenCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KorKitchenCategoryAggregateArgs>(args: Subset<T, KorKitchenCategoryAggregateArgs>): Prisma.PrismaPromise<GetKorKitchenCategoryAggregateType<T>>

    /**
     * Group by KorKitchenCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenCategoryGroupByArgs} args - Group by arguments.
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
      T extends KorKitchenCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KorKitchenCategoryGroupByArgs['orderBy'] }
        : { orderBy?: KorKitchenCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KorKitchenCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKorKitchenCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for KorKitchenCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__KorKitchenCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    menu<T extends KorKitchenCategory$menuArgs= {}>(args?: Subset<T, KorKitchenCategory$menuArgs>): Prisma.PrismaPromise<Array<KorKitchenMenuGetPayload<T>>| Null>;

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
   * KorKitchenCategory base type for findUnique actions
   */
  export type KorKitchenCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * Filter, which KorKitchenCategory to fetch.
     */
    where: KorKitchenCategoryWhereUniqueInput
  }

  /**
   * KorKitchenCategory findUnique
   */
  export interface KorKitchenCategoryFindUniqueArgs extends KorKitchenCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * KorKitchenCategory findUniqueOrThrow
   */
  export type KorKitchenCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * Filter, which KorKitchenCategory to fetch.
     */
    where: KorKitchenCategoryWhereUniqueInput
  }


  /**
   * KorKitchenCategory base type for findFirst actions
   */
  export type KorKitchenCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * Filter, which KorKitchenCategory to fetch.
     */
    where?: KorKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenCategories to fetch.
     */
    orderBy?: Enumerable<KorKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KorKitchenCategories.
     */
    cursor?: KorKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KorKitchenCategories.
     */
    distinct?: Enumerable<KorKitchenCategoryScalarFieldEnum>
  }

  /**
   * KorKitchenCategory findFirst
   */
  export interface KorKitchenCategoryFindFirstArgs extends KorKitchenCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * KorKitchenCategory findFirstOrThrow
   */
  export type KorKitchenCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * Filter, which KorKitchenCategory to fetch.
     */
    where?: KorKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenCategories to fetch.
     */
    orderBy?: Enumerable<KorKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KorKitchenCategories.
     */
    cursor?: KorKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KorKitchenCategories.
     */
    distinct?: Enumerable<KorKitchenCategoryScalarFieldEnum>
  }


  /**
   * KorKitchenCategory findMany
   */
  export type KorKitchenCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * Filter, which KorKitchenCategories to fetch.
     */
    where?: KorKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenCategories to fetch.
     */
    orderBy?: Enumerable<KorKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KorKitchenCategories.
     */
    cursor?: KorKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenCategories.
     */
    skip?: number
    distinct?: Enumerable<KorKitchenCategoryScalarFieldEnum>
  }


  /**
   * KorKitchenCategory create
   */
  export type KorKitchenCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * The data needed to create a KorKitchenCategory.
     */
    data: XOR<KorKitchenCategoryCreateInput, KorKitchenCategoryUncheckedCreateInput>
  }


  /**
   * KorKitchenCategory createMany
   */
  export type KorKitchenCategoryCreateManyArgs = {
    /**
     * The data used to create many KorKitchenCategories.
     */
    data: Enumerable<KorKitchenCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * KorKitchenCategory update
   */
  export type KorKitchenCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * The data needed to update a KorKitchenCategory.
     */
    data: XOR<KorKitchenCategoryUpdateInput, KorKitchenCategoryUncheckedUpdateInput>
    /**
     * Choose, which KorKitchenCategory to update.
     */
    where: KorKitchenCategoryWhereUniqueInput
  }


  /**
   * KorKitchenCategory updateMany
   */
  export type KorKitchenCategoryUpdateManyArgs = {
    /**
     * The data used to update KorKitchenCategories.
     */
    data: XOR<KorKitchenCategoryUpdateManyMutationInput, KorKitchenCategoryUncheckedUpdateManyInput>
    /**
     * Filter which KorKitchenCategories to update
     */
    where?: KorKitchenCategoryWhereInput
  }


  /**
   * KorKitchenCategory upsert
   */
  export type KorKitchenCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * The filter to search for the KorKitchenCategory to update in case it exists.
     */
    where: KorKitchenCategoryWhereUniqueInput
    /**
     * In case the KorKitchenCategory found by the `where` argument doesn't exist, create a new KorKitchenCategory with this data.
     */
    create: XOR<KorKitchenCategoryCreateInput, KorKitchenCategoryUncheckedCreateInput>
    /**
     * In case the KorKitchenCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KorKitchenCategoryUpdateInput, KorKitchenCategoryUncheckedUpdateInput>
  }


  /**
   * KorKitchenCategory delete
   */
  export type KorKitchenCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
    /**
     * Filter which KorKitchenCategory to delete.
     */
    where: KorKitchenCategoryWhereUniqueInput
  }


  /**
   * KorKitchenCategory deleteMany
   */
  export type KorKitchenCategoryDeleteManyArgs = {
    /**
     * Filter which KorKitchenCategories to delete
     */
    where?: KorKitchenCategoryWhereInput
  }


  /**
   * KorKitchenCategory.menu
   */
  export type KorKitchenCategory$menuArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    where?: KorKitchenMenuWhereInput
    orderBy?: Enumerable<KorKitchenMenuOrderByWithRelationInput>
    cursor?: KorKitchenMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<KorKitchenMenuScalarFieldEnum>
  }


  /**
   * KorKitchenCategory without action
   */
  export type KorKitchenCategoryArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenCategory
     */
    select?: KorKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenCategoryInclude | null
  }



  /**
   * Model KorKitchenMenu
   */


  export type AggregateKorKitchenMenu = {
    _count: KorKitchenMenuCountAggregateOutputType | null
    _avg: KorKitchenMenuAvgAggregateOutputType | null
    _sum: KorKitchenMenuSumAggregateOutputType | null
    _min: KorKitchenMenuMinAggregateOutputType | null
    _max: KorKitchenMenuMaxAggregateOutputType | null
  }

  export type KorKitchenMenuAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type KorKitchenMenuSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type KorKitchenMenuMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    categoryName: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KorKitchenMenuMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    categoryName: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KorKitchenMenuCountAggregateOutputType = {
    id: number
    name: number
    image: number
    price: number
    categoryName: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type KorKitchenMenuAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type KorKitchenMenuSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type KorKitchenMenuMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createAt?: true
    updateAt?: true
  }

  export type KorKitchenMenuMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createAt?: true
    updateAt?: true
  }

  export type KorKitchenMenuCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type KorKitchenMenuAggregateArgs = {
    /**
     * Filter which KorKitchenMenu to aggregate.
     */
    where?: KorKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenMenus to fetch.
     */
    orderBy?: Enumerable<KorKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KorKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KorKitchenMenus
    **/
    _count?: true | KorKitchenMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KorKitchenMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KorKitchenMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KorKitchenMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KorKitchenMenuMaxAggregateInputType
  }

  export type GetKorKitchenMenuAggregateType<T extends KorKitchenMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateKorKitchenMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKorKitchenMenu[P]>
      : GetScalarType<T[P], AggregateKorKitchenMenu[P]>
  }




  export type KorKitchenMenuGroupByArgs = {
    where?: KorKitchenMenuWhereInput
    orderBy?: Enumerable<KorKitchenMenuOrderByWithAggregationInput>
    by: KorKitchenMenuScalarFieldEnum[]
    having?: KorKitchenMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KorKitchenMenuCountAggregateInputType | true
    _avg?: KorKitchenMenuAvgAggregateInputType
    _sum?: KorKitchenMenuSumAggregateInputType
    _min?: KorKitchenMenuMinAggregateInputType
    _max?: KorKitchenMenuMaxAggregateInputType
  }


  export type KorKitchenMenuGroupByOutputType = {
    id: number
    name: string
    image: string
    price: number
    categoryName: string | null
    createAt: Date
    updateAt: Date
    _count: KorKitchenMenuCountAggregateOutputType | null
    _avg: KorKitchenMenuAvgAggregateOutputType | null
    _sum: KorKitchenMenuSumAggregateOutputType | null
    _min: KorKitchenMenuMinAggregateOutputType | null
    _max: KorKitchenMenuMaxAggregateOutputType | null
  }

  type GetKorKitchenMenuGroupByPayload<T extends KorKitchenMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<KorKitchenMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KorKitchenMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KorKitchenMenuGroupByOutputType[P]>
            : GetScalarType<T[P], KorKitchenMenuGroupByOutputType[P]>
        }
      >
    >


  export type KorKitchenMenuSelect = {
    id?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    category?: boolean | KorKitchenCategoryArgs
    categoryName?: boolean
    orderItems?: boolean | KorKitchenMenu$orderItemsArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | KorKitchenMenuCountOutputTypeArgs
  }


  export type KorKitchenMenuInclude = {
    category?: boolean | KorKitchenCategoryArgs
    orderItems?: boolean | KorKitchenMenu$orderItemsArgs
    _count?: boolean | KorKitchenMenuCountOutputTypeArgs
  }

  export type KorKitchenMenuGetPayload<S extends boolean | null | undefined | KorKitchenMenuArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? KorKitchenMenu :
    S extends undefined ? never :
    S extends { include: any } & (KorKitchenMenuArgs | KorKitchenMenuFindManyArgs)
    ? KorKitchenMenu  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? KorKitchenCategoryGetPayload<S['include'][P]> | null :
        P extends 'orderItems' ? Array < KorKitchenOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? KorKitchenMenuCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (KorKitchenMenuArgs | KorKitchenMenuFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? KorKitchenCategoryGetPayload<S['select'][P]> | null :
        P extends 'orderItems' ? Array < KorKitchenOrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? KorKitchenMenuCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof KorKitchenMenu ? KorKitchenMenu[P] : never
  } 
      : KorKitchenMenu


  type KorKitchenMenuCountArgs = 
    Omit<KorKitchenMenuFindManyArgs, 'select' | 'include'> & {
      select?: KorKitchenMenuCountAggregateInputType | true
    }

  export interface KorKitchenMenuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one KorKitchenMenu that matches the filter.
     * @param {KorKitchenMenuFindUniqueArgs} args - Arguments to find a KorKitchenMenu
     * @example
     * // Get one KorKitchenMenu
     * const korKitchenMenu = await prisma.korKitchenMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KorKitchenMenuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, KorKitchenMenuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'KorKitchenMenu'> extends True ? Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T>> : Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T> | null, null>

    /**
     * Find one KorKitchenMenu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KorKitchenMenuFindUniqueOrThrowArgs} args - Arguments to find a KorKitchenMenu
     * @example
     * // Get one KorKitchenMenu
     * const korKitchenMenu = await prisma.korKitchenMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KorKitchenMenuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, KorKitchenMenuFindUniqueOrThrowArgs>
    ): Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T>>

    /**
     * Find the first KorKitchenMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenMenuFindFirstArgs} args - Arguments to find a KorKitchenMenu
     * @example
     * // Get one KorKitchenMenu
     * const korKitchenMenu = await prisma.korKitchenMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KorKitchenMenuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, KorKitchenMenuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'KorKitchenMenu'> extends True ? Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T>> : Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T> | null, null>

    /**
     * Find the first KorKitchenMenu that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenMenuFindFirstOrThrowArgs} args - Arguments to find a KorKitchenMenu
     * @example
     * // Get one KorKitchenMenu
     * const korKitchenMenu = await prisma.korKitchenMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KorKitchenMenuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, KorKitchenMenuFindFirstOrThrowArgs>
    ): Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T>>

    /**
     * Find zero or more KorKitchenMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenMenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KorKitchenMenus
     * const korKitchenMenus = await prisma.korKitchenMenu.findMany()
     * 
     * // Get first 10 KorKitchenMenus
     * const korKitchenMenus = await prisma.korKitchenMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const korKitchenMenuWithIdOnly = await prisma.korKitchenMenu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KorKitchenMenuFindManyArgs>(
      args?: SelectSubset<T, KorKitchenMenuFindManyArgs>
    ): Prisma.PrismaPromise<Array<KorKitchenMenuGetPayload<T>>>

    /**
     * Create a KorKitchenMenu.
     * @param {KorKitchenMenuCreateArgs} args - Arguments to create a KorKitchenMenu.
     * @example
     * // Create one KorKitchenMenu
     * const KorKitchenMenu = await prisma.korKitchenMenu.create({
     *   data: {
     *     // ... data to create a KorKitchenMenu
     *   }
     * })
     * 
    **/
    create<T extends KorKitchenMenuCreateArgs>(
      args: SelectSubset<T, KorKitchenMenuCreateArgs>
    ): Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T>>

    /**
     * Create many KorKitchenMenus.
     *     @param {KorKitchenMenuCreateManyArgs} args - Arguments to create many KorKitchenMenus.
     *     @example
     *     // Create many KorKitchenMenus
     *     const korKitchenMenu = await prisma.korKitchenMenu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KorKitchenMenuCreateManyArgs>(
      args?: SelectSubset<T, KorKitchenMenuCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KorKitchenMenu.
     * @param {KorKitchenMenuDeleteArgs} args - Arguments to delete one KorKitchenMenu.
     * @example
     * // Delete one KorKitchenMenu
     * const KorKitchenMenu = await prisma.korKitchenMenu.delete({
     *   where: {
     *     // ... filter to delete one KorKitchenMenu
     *   }
     * })
     * 
    **/
    delete<T extends KorKitchenMenuDeleteArgs>(
      args: SelectSubset<T, KorKitchenMenuDeleteArgs>
    ): Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T>>

    /**
     * Update one KorKitchenMenu.
     * @param {KorKitchenMenuUpdateArgs} args - Arguments to update one KorKitchenMenu.
     * @example
     * // Update one KorKitchenMenu
     * const korKitchenMenu = await prisma.korKitchenMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KorKitchenMenuUpdateArgs>(
      args: SelectSubset<T, KorKitchenMenuUpdateArgs>
    ): Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T>>

    /**
     * Delete zero or more KorKitchenMenus.
     * @param {KorKitchenMenuDeleteManyArgs} args - Arguments to filter KorKitchenMenus to delete.
     * @example
     * // Delete a few KorKitchenMenus
     * const { count } = await prisma.korKitchenMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KorKitchenMenuDeleteManyArgs>(
      args?: SelectSubset<T, KorKitchenMenuDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KorKitchenMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KorKitchenMenus
     * const korKitchenMenu = await prisma.korKitchenMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KorKitchenMenuUpdateManyArgs>(
      args: SelectSubset<T, KorKitchenMenuUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KorKitchenMenu.
     * @param {KorKitchenMenuUpsertArgs} args - Arguments to update or create a KorKitchenMenu.
     * @example
     * // Update or create a KorKitchenMenu
     * const korKitchenMenu = await prisma.korKitchenMenu.upsert({
     *   create: {
     *     // ... data to create a KorKitchenMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KorKitchenMenu we want to update
     *   }
     * })
    **/
    upsert<T extends KorKitchenMenuUpsertArgs>(
      args: SelectSubset<T, KorKitchenMenuUpsertArgs>
    ): Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T>>

    /**
     * Count the number of KorKitchenMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenMenuCountArgs} args - Arguments to filter KorKitchenMenus to count.
     * @example
     * // Count the number of KorKitchenMenus
     * const count = await prisma.korKitchenMenu.count({
     *   where: {
     *     // ... the filter for the KorKitchenMenus we want to count
     *   }
     * })
    **/
    count<T extends KorKitchenMenuCountArgs>(
      args?: Subset<T, KorKitchenMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KorKitchenMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KorKitchenMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KorKitchenMenuAggregateArgs>(args: Subset<T, KorKitchenMenuAggregateArgs>): Prisma.PrismaPromise<GetKorKitchenMenuAggregateType<T>>

    /**
     * Group by KorKitchenMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenMenuGroupByArgs} args - Group by arguments.
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
      T extends KorKitchenMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KorKitchenMenuGroupByArgs['orderBy'] }
        : { orderBy?: KorKitchenMenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KorKitchenMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKorKitchenMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for KorKitchenMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__KorKitchenMenuClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    category<T extends KorKitchenCategoryArgs= {}>(args?: Subset<T, KorKitchenCategoryArgs>): Prisma__KorKitchenCategoryClient<KorKitchenCategoryGetPayload<T> | Null>;

    orderItems<T extends KorKitchenMenu$orderItemsArgs= {}>(args?: Subset<T, KorKitchenMenu$orderItemsArgs>): Prisma.PrismaPromise<Array<KorKitchenOrderItemGetPayload<T>>| Null>;

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
   * KorKitchenMenu base type for findUnique actions
   */
  export type KorKitchenMenuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * Filter, which KorKitchenMenu to fetch.
     */
    where: KorKitchenMenuWhereUniqueInput
  }

  /**
   * KorKitchenMenu findUnique
   */
  export interface KorKitchenMenuFindUniqueArgs extends KorKitchenMenuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * KorKitchenMenu findUniqueOrThrow
   */
  export type KorKitchenMenuFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * Filter, which KorKitchenMenu to fetch.
     */
    where: KorKitchenMenuWhereUniqueInput
  }


  /**
   * KorKitchenMenu base type for findFirst actions
   */
  export type KorKitchenMenuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * Filter, which KorKitchenMenu to fetch.
     */
    where?: KorKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenMenus to fetch.
     */
    orderBy?: Enumerable<KorKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KorKitchenMenus.
     */
    cursor?: KorKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KorKitchenMenus.
     */
    distinct?: Enumerable<KorKitchenMenuScalarFieldEnum>
  }

  /**
   * KorKitchenMenu findFirst
   */
  export interface KorKitchenMenuFindFirstArgs extends KorKitchenMenuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * KorKitchenMenu findFirstOrThrow
   */
  export type KorKitchenMenuFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * Filter, which KorKitchenMenu to fetch.
     */
    where?: KorKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenMenus to fetch.
     */
    orderBy?: Enumerable<KorKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KorKitchenMenus.
     */
    cursor?: KorKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KorKitchenMenus.
     */
    distinct?: Enumerable<KorKitchenMenuScalarFieldEnum>
  }


  /**
   * KorKitchenMenu findMany
   */
  export type KorKitchenMenuFindManyArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * Filter, which KorKitchenMenus to fetch.
     */
    where?: KorKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenMenus to fetch.
     */
    orderBy?: Enumerable<KorKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KorKitchenMenus.
     */
    cursor?: KorKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenMenus.
     */
    skip?: number
    distinct?: Enumerable<KorKitchenMenuScalarFieldEnum>
  }


  /**
   * KorKitchenMenu create
   */
  export type KorKitchenMenuCreateArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * The data needed to create a KorKitchenMenu.
     */
    data: XOR<KorKitchenMenuCreateInput, KorKitchenMenuUncheckedCreateInput>
  }


  /**
   * KorKitchenMenu createMany
   */
  export type KorKitchenMenuCreateManyArgs = {
    /**
     * The data used to create many KorKitchenMenus.
     */
    data: Enumerable<KorKitchenMenuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * KorKitchenMenu update
   */
  export type KorKitchenMenuUpdateArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * The data needed to update a KorKitchenMenu.
     */
    data: XOR<KorKitchenMenuUpdateInput, KorKitchenMenuUncheckedUpdateInput>
    /**
     * Choose, which KorKitchenMenu to update.
     */
    where: KorKitchenMenuWhereUniqueInput
  }


  /**
   * KorKitchenMenu updateMany
   */
  export type KorKitchenMenuUpdateManyArgs = {
    /**
     * The data used to update KorKitchenMenus.
     */
    data: XOR<KorKitchenMenuUpdateManyMutationInput, KorKitchenMenuUncheckedUpdateManyInput>
    /**
     * Filter which KorKitchenMenus to update
     */
    where?: KorKitchenMenuWhereInput
  }


  /**
   * KorKitchenMenu upsert
   */
  export type KorKitchenMenuUpsertArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * The filter to search for the KorKitchenMenu to update in case it exists.
     */
    where: KorKitchenMenuWhereUniqueInput
    /**
     * In case the KorKitchenMenu found by the `where` argument doesn't exist, create a new KorKitchenMenu with this data.
     */
    create: XOR<KorKitchenMenuCreateInput, KorKitchenMenuUncheckedCreateInput>
    /**
     * In case the KorKitchenMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KorKitchenMenuUpdateInput, KorKitchenMenuUncheckedUpdateInput>
  }


  /**
   * KorKitchenMenu delete
   */
  export type KorKitchenMenuDeleteArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
    /**
     * Filter which KorKitchenMenu to delete.
     */
    where: KorKitchenMenuWhereUniqueInput
  }


  /**
   * KorKitchenMenu deleteMany
   */
  export type KorKitchenMenuDeleteManyArgs = {
    /**
     * Filter which KorKitchenMenus to delete
     */
    where?: KorKitchenMenuWhereInput
  }


  /**
   * KorKitchenMenu.orderItems
   */
  export type KorKitchenMenu$orderItemsArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    where?: KorKitchenOrderItemWhereInput
    orderBy?: Enumerable<KorKitchenOrderItemOrderByWithRelationInput>
    cursor?: KorKitchenOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<KorKitchenOrderItemScalarFieldEnum>
  }


  /**
   * KorKitchenMenu without action
   */
  export type KorKitchenMenuArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenMenu
     */
    select?: KorKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenMenuInclude | null
  }



  /**
   * Model KorKitchenOrder
   */


  export type AggregateKorKitchenOrder = {
    _count: KorKitchenOrderCountAggregateOutputType | null
    _avg: KorKitchenOrderAvgAggregateOutputType | null
    _sum: KorKitchenOrderSumAggregateOutputType | null
    _min: KorKitchenOrderMinAggregateOutputType | null
    _max: KorKitchenOrderMaxAggregateOutputType | null
  }

  export type KorKitchenOrderAvgAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type KorKitchenOrderSumAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type KorKitchenOrderMinAggregateOutputType = {
    id: number | null
    status: string | null
    tableId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KorKitchenOrderMaxAggregateOutputType = {
    id: number | null
    status: string | null
    tableId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KorKitchenOrderCountAggregateOutputType = {
    id: number
    status: number
    tableId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type KorKitchenOrderAvgAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type KorKitchenOrderSumAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type KorKitchenOrderMinAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createAt?: true
    updateAt?: true
  }

  export type KorKitchenOrderMaxAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createAt?: true
    updateAt?: true
  }

  export type KorKitchenOrderCountAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type KorKitchenOrderAggregateArgs = {
    /**
     * Filter which KorKitchenOrder to aggregate.
     */
    where?: KorKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenOrders to fetch.
     */
    orderBy?: Enumerable<KorKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KorKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KorKitchenOrders
    **/
    _count?: true | KorKitchenOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KorKitchenOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KorKitchenOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KorKitchenOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KorKitchenOrderMaxAggregateInputType
  }

  export type GetKorKitchenOrderAggregateType<T extends KorKitchenOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateKorKitchenOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKorKitchenOrder[P]>
      : GetScalarType<T[P], AggregateKorKitchenOrder[P]>
  }




  export type KorKitchenOrderGroupByArgs = {
    where?: KorKitchenOrderWhereInput
    orderBy?: Enumerable<KorKitchenOrderOrderByWithAggregationInput>
    by: KorKitchenOrderScalarFieldEnum[]
    having?: KorKitchenOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KorKitchenOrderCountAggregateInputType | true
    _avg?: KorKitchenOrderAvgAggregateInputType
    _sum?: KorKitchenOrderSumAggregateInputType
    _min?: KorKitchenOrderMinAggregateInputType
    _max?: KorKitchenOrderMaxAggregateInputType
  }


  export type KorKitchenOrderGroupByOutputType = {
    id: number
    status: string
    tableId: number
    createAt: Date
    updateAt: Date
    _count: KorKitchenOrderCountAggregateOutputType | null
    _avg: KorKitchenOrderAvgAggregateOutputType | null
    _sum: KorKitchenOrderSumAggregateOutputType | null
    _min: KorKitchenOrderMinAggregateOutputType | null
    _max: KorKitchenOrderMaxAggregateOutputType | null
  }

  type GetKorKitchenOrderGroupByPayload<T extends KorKitchenOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<KorKitchenOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KorKitchenOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KorKitchenOrderGroupByOutputType[P]>
            : GetScalarType<T[P], KorKitchenOrderGroupByOutputType[P]>
        }
      >
    >


  export type KorKitchenOrderSelect = {
    id?: boolean
    status?: boolean
    tableId?: boolean
    items?: boolean | KorKitchenOrder$itemsArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | KorKitchenOrderCountOutputTypeArgs
  }


  export type KorKitchenOrderInclude = {
    items?: boolean | KorKitchenOrder$itemsArgs
    _count?: boolean | KorKitchenOrderCountOutputTypeArgs
  }

  export type KorKitchenOrderGetPayload<S extends boolean | null | undefined | KorKitchenOrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? KorKitchenOrder :
    S extends undefined ? never :
    S extends { include: any } & (KorKitchenOrderArgs | KorKitchenOrderFindManyArgs)
    ? KorKitchenOrder  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'items' ? Array < KorKitchenOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? KorKitchenOrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (KorKitchenOrderArgs | KorKitchenOrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'items' ? Array < KorKitchenOrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? KorKitchenOrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof KorKitchenOrder ? KorKitchenOrder[P] : never
  } 
      : KorKitchenOrder


  type KorKitchenOrderCountArgs = 
    Omit<KorKitchenOrderFindManyArgs, 'select' | 'include'> & {
      select?: KorKitchenOrderCountAggregateInputType | true
    }

  export interface KorKitchenOrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one KorKitchenOrder that matches the filter.
     * @param {KorKitchenOrderFindUniqueArgs} args - Arguments to find a KorKitchenOrder
     * @example
     * // Get one KorKitchenOrder
     * const korKitchenOrder = await prisma.korKitchenOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KorKitchenOrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, KorKitchenOrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'KorKitchenOrder'> extends True ? Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T>> : Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T> | null, null>

    /**
     * Find one KorKitchenOrder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KorKitchenOrderFindUniqueOrThrowArgs} args - Arguments to find a KorKitchenOrder
     * @example
     * // Get one KorKitchenOrder
     * const korKitchenOrder = await prisma.korKitchenOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KorKitchenOrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, KorKitchenOrderFindUniqueOrThrowArgs>
    ): Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T>>

    /**
     * Find the first KorKitchenOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderFindFirstArgs} args - Arguments to find a KorKitchenOrder
     * @example
     * // Get one KorKitchenOrder
     * const korKitchenOrder = await prisma.korKitchenOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KorKitchenOrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, KorKitchenOrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'KorKitchenOrder'> extends True ? Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T>> : Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T> | null, null>

    /**
     * Find the first KorKitchenOrder that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderFindFirstOrThrowArgs} args - Arguments to find a KorKitchenOrder
     * @example
     * // Get one KorKitchenOrder
     * const korKitchenOrder = await prisma.korKitchenOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KorKitchenOrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, KorKitchenOrderFindFirstOrThrowArgs>
    ): Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T>>

    /**
     * Find zero or more KorKitchenOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KorKitchenOrders
     * const korKitchenOrders = await prisma.korKitchenOrder.findMany()
     * 
     * // Get first 10 KorKitchenOrders
     * const korKitchenOrders = await prisma.korKitchenOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const korKitchenOrderWithIdOnly = await prisma.korKitchenOrder.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KorKitchenOrderFindManyArgs>(
      args?: SelectSubset<T, KorKitchenOrderFindManyArgs>
    ): Prisma.PrismaPromise<Array<KorKitchenOrderGetPayload<T>>>

    /**
     * Create a KorKitchenOrder.
     * @param {KorKitchenOrderCreateArgs} args - Arguments to create a KorKitchenOrder.
     * @example
     * // Create one KorKitchenOrder
     * const KorKitchenOrder = await prisma.korKitchenOrder.create({
     *   data: {
     *     // ... data to create a KorKitchenOrder
     *   }
     * })
     * 
    **/
    create<T extends KorKitchenOrderCreateArgs>(
      args: SelectSubset<T, KorKitchenOrderCreateArgs>
    ): Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T>>

    /**
     * Create many KorKitchenOrders.
     *     @param {KorKitchenOrderCreateManyArgs} args - Arguments to create many KorKitchenOrders.
     *     @example
     *     // Create many KorKitchenOrders
     *     const korKitchenOrder = await prisma.korKitchenOrder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KorKitchenOrderCreateManyArgs>(
      args?: SelectSubset<T, KorKitchenOrderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KorKitchenOrder.
     * @param {KorKitchenOrderDeleteArgs} args - Arguments to delete one KorKitchenOrder.
     * @example
     * // Delete one KorKitchenOrder
     * const KorKitchenOrder = await prisma.korKitchenOrder.delete({
     *   where: {
     *     // ... filter to delete one KorKitchenOrder
     *   }
     * })
     * 
    **/
    delete<T extends KorKitchenOrderDeleteArgs>(
      args: SelectSubset<T, KorKitchenOrderDeleteArgs>
    ): Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T>>

    /**
     * Update one KorKitchenOrder.
     * @param {KorKitchenOrderUpdateArgs} args - Arguments to update one KorKitchenOrder.
     * @example
     * // Update one KorKitchenOrder
     * const korKitchenOrder = await prisma.korKitchenOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KorKitchenOrderUpdateArgs>(
      args: SelectSubset<T, KorKitchenOrderUpdateArgs>
    ): Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T>>

    /**
     * Delete zero or more KorKitchenOrders.
     * @param {KorKitchenOrderDeleteManyArgs} args - Arguments to filter KorKitchenOrders to delete.
     * @example
     * // Delete a few KorKitchenOrders
     * const { count } = await prisma.korKitchenOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KorKitchenOrderDeleteManyArgs>(
      args?: SelectSubset<T, KorKitchenOrderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KorKitchenOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KorKitchenOrders
     * const korKitchenOrder = await prisma.korKitchenOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KorKitchenOrderUpdateManyArgs>(
      args: SelectSubset<T, KorKitchenOrderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KorKitchenOrder.
     * @param {KorKitchenOrderUpsertArgs} args - Arguments to update or create a KorKitchenOrder.
     * @example
     * // Update or create a KorKitchenOrder
     * const korKitchenOrder = await prisma.korKitchenOrder.upsert({
     *   create: {
     *     // ... data to create a KorKitchenOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KorKitchenOrder we want to update
     *   }
     * })
    **/
    upsert<T extends KorKitchenOrderUpsertArgs>(
      args: SelectSubset<T, KorKitchenOrderUpsertArgs>
    ): Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T>>

    /**
     * Count the number of KorKitchenOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderCountArgs} args - Arguments to filter KorKitchenOrders to count.
     * @example
     * // Count the number of KorKitchenOrders
     * const count = await prisma.korKitchenOrder.count({
     *   where: {
     *     // ... the filter for the KorKitchenOrders we want to count
     *   }
     * })
    **/
    count<T extends KorKitchenOrderCountArgs>(
      args?: Subset<T, KorKitchenOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KorKitchenOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KorKitchenOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KorKitchenOrderAggregateArgs>(args: Subset<T, KorKitchenOrderAggregateArgs>): Prisma.PrismaPromise<GetKorKitchenOrderAggregateType<T>>

    /**
     * Group by KorKitchenOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderGroupByArgs} args - Group by arguments.
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
      T extends KorKitchenOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KorKitchenOrderGroupByArgs['orderBy'] }
        : { orderBy?: KorKitchenOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KorKitchenOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKorKitchenOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for KorKitchenOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__KorKitchenOrderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    items<T extends KorKitchenOrder$itemsArgs= {}>(args?: Subset<T, KorKitchenOrder$itemsArgs>): Prisma.PrismaPromise<Array<KorKitchenOrderItemGetPayload<T>>| Null>;

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
   * KorKitchenOrder base type for findUnique actions
   */
  export type KorKitchenOrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * Filter, which KorKitchenOrder to fetch.
     */
    where: KorKitchenOrderWhereUniqueInput
  }

  /**
   * KorKitchenOrder findUnique
   */
  export interface KorKitchenOrderFindUniqueArgs extends KorKitchenOrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * KorKitchenOrder findUniqueOrThrow
   */
  export type KorKitchenOrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * Filter, which KorKitchenOrder to fetch.
     */
    where: KorKitchenOrderWhereUniqueInput
  }


  /**
   * KorKitchenOrder base type for findFirst actions
   */
  export type KorKitchenOrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * Filter, which KorKitchenOrder to fetch.
     */
    where?: KorKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenOrders to fetch.
     */
    orderBy?: Enumerable<KorKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KorKitchenOrders.
     */
    cursor?: KorKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KorKitchenOrders.
     */
    distinct?: Enumerable<KorKitchenOrderScalarFieldEnum>
  }

  /**
   * KorKitchenOrder findFirst
   */
  export interface KorKitchenOrderFindFirstArgs extends KorKitchenOrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * KorKitchenOrder findFirstOrThrow
   */
  export type KorKitchenOrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * Filter, which KorKitchenOrder to fetch.
     */
    where?: KorKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenOrders to fetch.
     */
    orderBy?: Enumerable<KorKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KorKitchenOrders.
     */
    cursor?: KorKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KorKitchenOrders.
     */
    distinct?: Enumerable<KorKitchenOrderScalarFieldEnum>
  }


  /**
   * KorKitchenOrder findMany
   */
  export type KorKitchenOrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * Filter, which KorKitchenOrders to fetch.
     */
    where?: KorKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenOrders to fetch.
     */
    orderBy?: Enumerable<KorKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KorKitchenOrders.
     */
    cursor?: KorKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenOrders.
     */
    skip?: number
    distinct?: Enumerable<KorKitchenOrderScalarFieldEnum>
  }


  /**
   * KorKitchenOrder create
   */
  export type KorKitchenOrderCreateArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * The data needed to create a KorKitchenOrder.
     */
    data: XOR<KorKitchenOrderCreateInput, KorKitchenOrderUncheckedCreateInput>
  }


  /**
   * KorKitchenOrder createMany
   */
  export type KorKitchenOrderCreateManyArgs = {
    /**
     * The data used to create many KorKitchenOrders.
     */
    data: Enumerable<KorKitchenOrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * KorKitchenOrder update
   */
  export type KorKitchenOrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * The data needed to update a KorKitchenOrder.
     */
    data: XOR<KorKitchenOrderUpdateInput, KorKitchenOrderUncheckedUpdateInput>
    /**
     * Choose, which KorKitchenOrder to update.
     */
    where: KorKitchenOrderWhereUniqueInput
  }


  /**
   * KorKitchenOrder updateMany
   */
  export type KorKitchenOrderUpdateManyArgs = {
    /**
     * The data used to update KorKitchenOrders.
     */
    data: XOR<KorKitchenOrderUpdateManyMutationInput, KorKitchenOrderUncheckedUpdateManyInput>
    /**
     * Filter which KorKitchenOrders to update
     */
    where?: KorKitchenOrderWhereInput
  }


  /**
   * KorKitchenOrder upsert
   */
  export type KorKitchenOrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * The filter to search for the KorKitchenOrder to update in case it exists.
     */
    where: KorKitchenOrderWhereUniqueInput
    /**
     * In case the KorKitchenOrder found by the `where` argument doesn't exist, create a new KorKitchenOrder with this data.
     */
    create: XOR<KorKitchenOrderCreateInput, KorKitchenOrderUncheckedCreateInput>
    /**
     * In case the KorKitchenOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KorKitchenOrderUpdateInput, KorKitchenOrderUncheckedUpdateInput>
  }


  /**
   * KorKitchenOrder delete
   */
  export type KorKitchenOrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
    /**
     * Filter which KorKitchenOrder to delete.
     */
    where: KorKitchenOrderWhereUniqueInput
  }


  /**
   * KorKitchenOrder deleteMany
   */
  export type KorKitchenOrderDeleteManyArgs = {
    /**
     * Filter which KorKitchenOrders to delete
     */
    where?: KorKitchenOrderWhereInput
  }


  /**
   * KorKitchenOrder.items
   */
  export type KorKitchenOrder$itemsArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    where?: KorKitchenOrderItemWhereInput
    orderBy?: Enumerable<KorKitchenOrderItemOrderByWithRelationInput>
    cursor?: KorKitchenOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<KorKitchenOrderItemScalarFieldEnum>
  }


  /**
   * KorKitchenOrder without action
   */
  export type KorKitchenOrderArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrder
     */
    select?: KorKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderInclude | null
  }



  /**
   * Model KorKitchenOrderItem
   */


  export type AggregateKorKitchenOrderItem = {
    _count: KorKitchenOrderItemCountAggregateOutputType | null
    _avg: KorKitchenOrderItemAvgAggregateOutputType | null
    _sum: KorKitchenOrderItemSumAggregateOutputType | null
    _min: KorKitchenOrderItemMinAggregateOutputType | null
    _max: KorKitchenOrderItemMaxAggregateOutputType | null
  }

  export type KorKitchenOrderItemAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type KorKitchenOrderItemSumAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type KorKitchenOrderItemMinAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
    creatAt: Date | null
    updatedAt: Date | null
  }

  export type KorKitchenOrderItemMaxAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
    creatAt: Date | null
    updatedAt: Date | null
  }

  export type KorKitchenOrderItemCountAggregateOutputType = {
    id: number
    menuId: number
    orderId: number
    quantity: number
    totalPrice: number
    creatAt: number
    updatedAt: number
    _all: number
  }


  export type KorKitchenOrderItemAvgAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
  }

  export type KorKitchenOrderItemSumAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
  }

  export type KorKitchenOrderItemMinAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    creatAt?: true
    updatedAt?: true
  }

  export type KorKitchenOrderItemMaxAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    creatAt?: true
    updatedAt?: true
  }

  export type KorKitchenOrderItemCountAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    creatAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KorKitchenOrderItemAggregateArgs = {
    /**
     * Filter which KorKitchenOrderItem to aggregate.
     */
    where?: KorKitchenOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenOrderItems to fetch.
     */
    orderBy?: Enumerable<KorKitchenOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KorKitchenOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KorKitchenOrderItems
    **/
    _count?: true | KorKitchenOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KorKitchenOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KorKitchenOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KorKitchenOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KorKitchenOrderItemMaxAggregateInputType
  }

  export type GetKorKitchenOrderItemAggregateType<T extends KorKitchenOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateKorKitchenOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKorKitchenOrderItem[P]>
      : GetScalarType<T[P], AggregateKorKitchenOrderItem[P]>
  }




  export type KorKitchenOrderItemGroupByArgs = {
    where?: KorKitchenOrderItemWhereInput
    orderBy?: Enumerable<KorKitchenOrderItemOrderByWithAggregationInput>
    by: KorKitchenOrderItemScalarFieldEnum[]
    having?: KorKitchenOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KorKitchenOrderItemCountAggregateInputType | true
    _avg?: KorKitchenOrderItemAvgAggregateInputType
    _sum?: KorKitchenOrderItemSumAggregateInputType
    _min?: KorKitchenOrderItemMinAggregateInputType
    _max?: KorKitchenOrderItemMaxAggregateInputType
  }


  export type KorKitchenOrderItemGroupByOutputType = {
    id: number
    menuId: number
    orderId: number | null
    quantity: number
    totalPrice: number
    creatAt: Date
    updatedAt: Date
    _count: KorKitchenOrderItemCountAggregateOutputType | null
    _avg: KorKitchenOrderItemAvgAggregateOutputType | null
    _sum: KorKitchenOrderItemSumAggregateOutputType | null
    _min: KorKitchenOrderItemMinAggregateOutputType | null
    _max: KorKitchenOrderItemMaxAggregateOutputType | null
  }

  type GetKorKitchenOrderItemGroupByPayload<T extends KorKitchenOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<KorKitchenOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KorKitchenOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KorKitchenOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], KorKitchenOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type KorKitchenOrderItemSelect = {
    id?: boolean
    menu?: boolean | KorKitchenMenuArgs
    menuId?: boolean
    order?: boolean | KorKitchenOrderArgs
    orderId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    creatAt?: boolean
    updatedAt?: boolean
  }


  export type KorKitchenOrderItemInclude = {
    menu?: boolean | KorKitchenMenuArgs
    order?: boolean | KorKitchenOrderArgs
  }

  export type KorKitchenOrderItemGetPayload<S extends boolean | null | undefined | KorKitchenOrderItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? KorKitchenOrderItem :
    S extends undefined ? never :
    S extends { include: any } & (KorKitchenOrderItemArgs | KorKitchenOrderItemFindManyArgs)
    ? KorKitchenOrderItem  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu' ? KorKitchenMenuGetPayload<S['include'][P]> :
        P extends 'order' ? KorKitchenOrderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (KorKitchenOrderItemArgs | KorKitchenOrderItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu' ? KorKitchenMenuGetPayload<S['select'][P]> :
        P extends 'order' ? KorKitchenOrderGetPayload<S['select'][P]> | null :  P extends keyof KorKitchenOrderItem ? KorKitchenOrderItem[P] : never
  } 
      : KorKitchenOrderItem


  type KorKitchenOrderItemCountArgs = 
    Omit<KorKitchenOrderItemFindManyArgs, 'select' | 'include'> & {
      select?: KorKitchenOrderItemCountAggregateInputType | true
    }

  export interface KorKitchenOrderItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one KorKitchenOrderItem that matches the filter.
     * @param {KorKitchenOrderItemFindUniqueArgs} args - Arguments to find a KorKitchenOrderItem
     * @example
     * // Get one KorKitchenOrderItem
     * const korKitchenOrderItem = await prisma.korKitchenOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KorKitchenOrderItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, KorKitchenOrderItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'KorKitchenOrderItem'> extends True ? Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T>> : Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T> | null, null>

    /**
     * Find one KorKitchenOrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KorKitchenOrderItemFindUniqueOrThrowArgs} args - Arguments to find a KorKitchenOrderItem
     * @example
     * // Get one KorKitchenOrderItem
     * const korKitchenOrderItem = await prisma.korKitchenOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KorKitchenOrderItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, KorKitchenOrderItemFindUniqueOrThrowArgs>
    ): Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T>>

    /**
     * Find the first KorKitchenOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderItemFindFirstArgs} args - Arguments to find a KorKitchenOrderItem
     * @example
     * // Get one KorKitchenOrderItem
     * const korKitchenOrderItem = await prisma.korKitchenOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KorKitchenOrderItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, KorKitchenOrderItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'KorKitchenOrderItem'> extends True ? Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T>> : Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T> | null, null>

    /**
     * Find the first KorKitchenOrderItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderItemFindFirstOrThrowArgs} args - Arguments to find a KorKitchenOrderItem
     * @example
     * // Get one KorKitchenOrderItem
     * const korKitchenOrderItem = await prisma.korKitchenOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KorKitchenOrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, KorKitchenOrderItemFindFirstOrThrowArgs>
    ): Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T>>

    /**
     * Find zero or more KorKitchenOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KorKitchenOrderItems
     * const korKitchenOrderItems = await prisma.korKitchenOrderItem.findMany()
     * 
     * // Get first 10 KorKitchenOrderItems
     * const korKitchenOrderItems = await prisma.korKitchenOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const korKitchenOrderItemWithIdOnly = await prisma.korKitchenOrderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KorKitchenOrderItemFindManyArgs>(
      args?: SelectSubset<T, KorKitchenOrderItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<KorKitchenOrderItemGetPayload<T>>>

    /**
     * Create a KorKitchenOrderItem.
     * @param {KorKitchenOrderItemCreateArgs} args - Arguments to create a KorKitchenOrderItem.
     * @example
     * // Create one KorKitchenOrderItem
     * const KorKitchenOrderItem = await prisma.korKitchenOrderItem.create({
     *   data: {
     *     // ... data to create a KorKitchenOrderItem
     *   }
     * })
     * 
    **/
    create<T extends KorKitchenOrderItemCreateArgs>(
      args: SelectSubset<T, KorKitchenOrderItemCreateArgs>
    ): Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T>>

    /**
     * Create many KorKitchenOrderItems.
     *     @param {KorKitchenOrderItemCreateManyArgs} args - Arguments to create many KorKitchenOrderItems.
     *     @example
     *     // Create many KorKitchenOrderItems
     *     const korKitchenOrderItem = await prisma.korKitchenOrderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KorKitchenOrderItemCreateManyArgs>(
      args?: SelectSubset<T, KorKitchenOrderItemCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KorKitchenOrderItem.
     * @param {KorKitchenOrderItemDeleteArgs} args - Arguments to delete one KorKitchenOrderItem.
     * @example
     * // Delete one KorKitchenOrderItem
     * const KorKitchenOrderItem = await prisma.korKitchenOrderItem.delete({
     *   where: {
     *     // ... filter to delete one KorKitchenOrderItem
     *   }
     * })
     * 
    **/
    delete<T extends KorKitchenOrderItemDeleteArgs>(
      args: SelectSubset<T, KorKitchenOrderItemDeleteArgs>
    ): Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T>>

    /**
     * Update one KorKitchenOrderItem.
     * @param {KorKitchenOrderItemUpdateArgs} args - Arguments to update one KorKitchenOrderItem.
     * @example
     * // Update one KorKitchenOrderItem
     * const korKitchenOrderItem = await prisma.korKitchenOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KorKitchenOrderItemUpdateArgs>(
      args: SelectSubset<T, KorKitchenOrderItemUpdateArgs>
    ): Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T>>

    /**
     * Delete zero or more KorKitchenOrderItems.
     * @param {KorKitchenOrderItemDeleteManyArgs} args - Arguments to filter KorKitchenOrderItems to delete.
     * @example
     * // Delete a few KorKitchenOrderItems
     * const { count } = await prisma.korKitchenOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KorKitchenOrderItemDeleteManyArgs>(
      args?: SelectSubset<T, KorKitchenOrderItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KorKitchenOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KorKitchenOrderItems
     * const korKitchenOrderItem = await prisma.korKitchenOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KorKitchenOrderItemUpdateManyArgs>(
      args: SelectSubset<T, KorKitchenOrderItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KorKitchenOrderItem.
     * @param {KorKitchenOrderItemUpsertArgs} args - Arguments to update or create a KorKitchenOrderItem.
     * @example
     * // Update or create a KorKitchenOrderItem
     * const korKitchenOrderItem = await prisma.korKitchenOrderItem.upsert({
     *   create: {
     *     // ... data to create a KorKitchenOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KorKitchenOrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends KorKitchenOrderItemUpsertArgs>(
      args: SelectSubset<T, KorKitchenOrderItemUpsertArgs>
    ): Prisma__KorKitchenOrderItemClient<KorKitchenOrderItemGetPayload<T>>

    /**
     * Count the number of KorKitchenOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderItemCountArgs} args - Arguments to filter KorKitchenOrderItems to count.
     * @example
     * // Count the number of KorKitchenOrderItems
     * const count = await prisma.korKitchenOrderItem.count({
     *   where: {
     *     // ... the filter for the KorKitchenOrderItems we want to count
     *   }
     * })
    **/
    count<T extends KorKitchenOrderItemCountArgs>(
      args?: Subset<T, KorKitchenOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KorKitchenOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KorKitchenOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KorKitchenOrderItemAggregateArgs>(args: Subset<T, KorKitchenOrderItemAggregateArgs>): Prisma.PrismaPromise<GetKorKitchenOrderItemAggregateType<T>>

    /**
     * Group by KorKitchenOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KorKitchenOrderItemGroupByArgs} args - Group by arguments.
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
      T extends KorKitchenOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KorKitchenOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: KorKitchenOrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KorKitchenOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKorKitchenOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for KorKitchenOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__KorKitchenOrderItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    menu<T extends KorKitchenMenuArgs= {}>(args?: Subset<T, KorKitchenMenuArgs>): Prisma__KorKitchenMenuClient<KorKitchenMenuGetPayload<T> | Null>;

    order<T extends KorKitchenOrderArgs= {}>(args?: Subset<T, KorKitchenOrderArgs>): Prisma__KorKitchenOrderClient<KorKitchenOrderGetPayload<T> | Null>;

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
   * KorKitchenOrderItem base type for findUnique actions
   */
  export type KorKitchenOrderItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * Filter, which KorKitchenOrderItem to fetch.
     */
    where: KorKitchenOrderItemWhereUniqueInput
  }

  /**
   * KorKitchenOrderItem findUnique
   */
  export interface KorKitchenOrderItemFindUniqueArgs extends KorKitchenOrderItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * KorKitchenOrderItem findUniqueOrThrow
   */
  export type KorKitchenOrderItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * Filter, which KorKitchenOrderItem to fetch.
     */
    where: KorKitchenOrderItemWhereUniqueInput
  }


  /**
   * KorKitchenOrderItem base type for findFirst actions
   */
  export type KorKitchenOrderItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * Filter, which KorKitchenOrderItem to fetch.
     */
    where?: KorKitchenOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenOrderItems to fetch.
     */
    orderBy?: Enumerable<KorKitchenOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KorKitchenOrderItems.
     */
    cursor?: KorKitchenOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KorKitchenOrderItems.
     */
    distinct?: Enumerable<KorKitchenOrderItemScalarFieldEnum>
  }

  /**
   * KorKitchenOrderItem findFirst
   */
  export interface KorKitchenOrderItemFindFirstArgs extends KorKitchenOrderItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * KorKitchenOrderItem findFirstOrThrow
   */
  export type KorKitchenOrderItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * Filter, which KorKitchenOrderItem to fetch.
     */
    where?: KorKitchenOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenOrderItems to fetch.
     */
    orderBy?: Enumerable<KorKitchenOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KorKitchenOrderItems.
     */
    cursor?: KorKitchenOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KorKitchenOrderItems.
     */
    distinct?: Enumerable<KorKitchenOrderItemScalarFieldEnum>
  }


  /**
   * KorKitchenOrderItem findMany
   */
  export type KorKitchenOrderItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * Filter, which KorKitchenOrderItems to fetch.
     */
    where?: KorKitchenOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KorKitchenOrderItems to fetch.
     */
    orderBy?: Enumerable<KorKitchenOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KorKitchenOrderItems.
     */
    cursor?: KorKitchenOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KorKitchenOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KorKitchenOrderItems.
     */
    skip?: number
    distinct?: Enumerable<KorKitchenOrderItemScalarFieldEnum>
  }


  /**
   * KorKitchenOrderItem create
   */
  export type KorKitchenOrderItemCreateArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * The data needed to create a KorKitchenOrderItem.
     */
    data: XOR<KorKitchenOrderItemCreateInput, KorKitchenOrderItemUncheckedCreateInput>
  }


  /**
   * KorKitchenOrderItem createMany
   */
  export type KorKitchenOrderItemCreateManyArgs = {
    /**
     * The data used to create many KorKitchenOrderItems.
     */
    data: Enumerable<KorKitchenOrderItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * KorKitchenOrderItem update
   */
  export type KorKitchenOrderItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * The data needed to update a KorKitchenOrderItem.
     */
    data: XOR<KorKitchenOrderItemUpdateInput, KorKitchenOrderItemUncheckedUpdateInput>
    /**
     * Choose, which KorKitchenOrderItem to update.
     */
    where: KorKitchenOrderItemWhereUniqueInput
  }


  /**
   * KorKitchenOrderItem updateMany
   */
  export type KorKitchenOrderItemUpdateManyArgs = {
    /**
     * The data used to update KorKitchenOrderItems.
     */
    data: XOR<KorKitchenOrderItemUpdateManyMutationInput, KorKitchenOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which KorKitchenOrderItems to update
     */
    where?: KorKitchenOrderItemWhereInput
  }


  /**
   * KorKitchenOrderItem upsert
   */
  export type KorKitchenOrderItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * The filter to search for the KorKitchenOrderItem to update in case it exists.
     */
    where: KorKitchenOrderItemWhereUniqueInput
    /**
     * In case the KorKitchenOrderItem found by the `where` argument doesn't exist, create a new KorKitchenOrderItem with this data.
     */
    create: XOR<KorKitchenOrderItemCreateInput, KorKitchenOrderItemUncheckedCreateInput>
    /**
     * In case the KorKitchenOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KorKitchenOrderItemUpdateInput, KorKitchenOrderItemUncheckedUpdateInput>
  }


  /**
   * KorKitchenOrderItem delete
   */
  export type KorKitchenOrderItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
    /**
     * Filter which KorKitchenOrderItem to delete.
     */
    where: KorKitchenOrderItemWhereUniqueInput
  }


  /**
   * KorKitchenOrderItem deleteMany
   */
  export type KorKitchenOrderItemDeleteManyArgs = {
    /**
     * Filter which KorKitchenOrderItems to delete
     */
    where?: KorKitchenOrderItemWhereInput
  }


  /**
   * KorKitchenOrderItem without action
   */
  export type KorKitchenOrderItemArgs = {
    /**
     * Select specific fields to fetch from the KorKitchenOrderItem
     */
    select?: KorKitchenOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KorKitchenOrderItemInclude | null
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
    createAt: Date | null
    updateAt: Date | null
  }

  export type TodoListMaxAggregateOutputType = {
    id: number | null
    task: string | null
    status: string | null
    note: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type TodoListCountAggregateOutputType = {
    id: number
    task: number
    status: number
    note: number
    createAt: number
    updateAt: number
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
    createAt?: true
    updateAt?: true
  }

  export type TodoListMaxAggregateInputType = {
    id?: true
    task?: true
    status?: true
    note?: true
    createAt?: true
    updateAt?: true
  }

  export type TodoListCountAggregateInputType = {
    id?: true
    task?: true
    status?: true
    note?: true
    createAt?: true
    updateAt?: true
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
    createAt: Date
    updateAt: Date
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
    createAt?: boolean
    updateAt?: boolean
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
   * Model TestModel
   */


  export type AggregateTestModel = {
    _count: TestModelCountAggregateOutputType | null
    _avg: TestModelAvgAggregateOutputType | null
    _sum: TestModelSumAggregateOutputType | null
    _min: TestModelMinAggregateOutputType | null
    _max: TestModelMaxAggregateOutputType | null
  }

  export type TestModelAvgAggregateOutputType = {
    id: number | null
  }

  export type TestModelSumAggregateOutputType = {
    id: number | null
  }

  export type TestModelMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    Surname: string | null
  }

  export type TestModelMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    Surname: string | null
  }

  export type TestModelCountAggregateOutputType = {
    id: number
    firstname: number
    Surname: number
    _all: number
  }


  export type TestModelAvgAggregateInputType = {
    id?: true
  }

  export type TestModelSumAggregateInputType = {
    id?: true
  }

  export type TestModelMinAggregateInputType = {
    id?: true
    firstname?: true
    Surname?: true
  }

  export type TestModelMaxAggregateInputType = {
    id?: true
    firstname?: true
    Surname?: true
  }

  export type TestModelCountAggregateInputType = {
    id?: true
    firstname?: true
    Surname?: true
    _all?: true
  }

  export type TestModelAggregateArgs = {
    /**
     * Filter which TestModel to aggregate.
     */
    where?: TestModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestModels to fetch.
     */
    orderBy?: Enumerable<TestModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestModels
    **/
    _count?: true | TestModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestModelMaxAggregateInputType
  }

  export type GetTestModelAggregateType<T extends TestModelAggregateArgs> = {
        [P in keyof T & keyof AggregateTestModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestModel[P]>
      : GetScalarType<T[P], AggregateTestModel[P]>
  }




  export type TestModelGroupByArgs = {
    where?: TestModelWhereInput
    orderBy?: Enumerable<TestModelOrderByWithAggregationInput>
    by: TestModelScalarFieldEnum[]
    having?: TestModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestModelCountAggregateInputType | true
    _avg?: TestModelAvgAggregateInputType
    _sum?: TestModelSumAggregateInputType
    _min?: TestModelMinAggregateInputType
    _max?: TestModelMaxAggregateInputType
  }


  export type TestModelGroupByOutputType = {
    id: number
    firstname: string
    Surname: string
    _count: TestModelCountAggregateOutputType | null
    _avg: TestModelAvgAggregateOutputType | null
    _sum: TestModelSumAggregateOutputType | null
    _min: TestModelMinAggregateOutputType | null
    _max: TestModelMaxAggregateOutputType | null
  }

  type GetTestModelGroupByPayload<T extends TestModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TestModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestModelGroupByOutputType[P]>
            : GetScalarType<T[P], TestModelGroupByOutputType[P]>
        }
      >
    >


  export type TestModelSelect = {
    id?: boolean
    firstname?: boolean
    Surname?: boolean
  }


  export type TestModelGetPayload<S extends boolean | null | undefined | TestModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TestModel :
    S extends undefined ? never :
    S extends { include: any } & (TestModelArgs | TestModelFindManyArgs)
    ? TestModel 
    : S extends { select: any } & (TestModelArgs | TestModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TestModel ? TestModel[P] : never
  } 
      : TestModel


  type TestModelCountArgs = 
    Omit<TestModelFindManyArgs, 'select' | 'include'> & {
      select?: TestModelCountAggregateInputType | true
    }

  export interface TestModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TestModel that matches the filter.
     * @param {TestModelFindUniqueArgs} args - Arguments to find a TestModel
     * @example
     * // Get one TestModel
     * const testModel = await prisma.testModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TestModel'> extends True ? Prisma__TestModelClient<TestModelGetPayload<T>> : Prisma__TestModelClient<TestModelGetPayload<T> | null, null>

    /**
     * Find one TestModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestModelFindUniqueOrThrowArgs} args - Arguments to find a TestModel
     * @example
     * // Get one TestModel
     * const testModel = await prisma.testModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestModelFindUniqueOrThrowArgs>
    ): Prisma__TestModelClient<TestModelGetPayload<T>>

    /**
     * Find the first TestModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestModelFindFirstArgs} args - Arguments to find a TestModel
     * @example
     * // Get one TestModel
     * const testModel = await prisma.testModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TestModel'> extends True ? Prisma__TestModelClient<TestModelGetPayload<T>> : Prisma__TestModelClient<TestModelGetPayload<T> | null, null>

    /**
     * Find the first TestModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestModelFindFirstOrThrowArgs} args - Arguments to find a TestModel
     * @example
     * // Get one TestModel
     * const testModel = await prisma.testModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestModelFindFirstOrThrowArgs>
    ): Prisma__TestModelClient<TestModelGetPayload<T>>

    /**
     * Find zero or more TestModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestModels
     * const testModels = await prisma.testModel.findMany()
     * 
     * // Get first 10 TestModels
     * const testModels = await prisma.testModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testModelWithIdOnly = await prisma.testModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestModelFindManyArgs>(
      args?: SelectSubset<T, TestModelFindManyArgs>
    ): Prisma.PrismaPromise<Array<TestModelGetPayload<T>>>

    /**
     * Create a TestModel.
     * @param {TestModelCreateArgs} args - Arguments to create a TestModel.
     * @example
     * // Create one TestModel
     * const TestModel = await prisma.testModel.create({
     *   data: {
     *     // ... data to create a TestModel
     *   }
     * })
     * 
    **/
    create<T extends TestModelCreateArgs>(
      args: SelectSubset<T, TestModelCreateArgs>
    ): Prisma__TestModelClient<TestModelGetPayload<T>>

    /**
     * Create many TestModels.
     *     @param {TestModelCreateManyArgs} args - Arguments to create many TestModels.
     *     @example
     *     // Create many TestModels
     *     const testModel = await prisma.testModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestModelCreateManyArgs>(
      args?: SelectSubset<T, TestModelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestModel.
     * @param {TestModelDeleteArgs} args - Arguments to delete one TestModel.
     * @example
     * // Delete one TestModel
     * const TestModel = await prisma.testModel.delete({
     *   where: {
     *     // ... filter to delete one TestModel
     *   }
     * })
     * 
    **/
    delete<T extends TestModelDeleteArgs>(
      args: SelectSubset<T, TestModelDeleteArgs>
    ): Prisma__TestModelClient<TestModelGetPayload<T>>

    /**
     * Update one TestModel.
     * @param {TestModelUpdateArgs} args - Arguments to update one TestModel.
     * @example
     * // Update one TestModel
     * const testModel = await prisma.testModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestModelUpdateArgs>(
      args: SelectSubset<T, TestModelUpdateArgs>
    ): Prisma__TestModelClient<TestModelGetPayload<T>>

    /**
     * Delete zero or more TestModels.
     * @param {TestModelDeleteManyArgs} args - Arguments to filter TestModels to delete.
     * @example
     * // Delete a few TestModels
     * const { count } = await prisma.testModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestModelDeleteManyArgs>(
      args?: SelectSubset<T, TestModelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestModels
     * const testModel = await prisma.testModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestModelUpdateManyArgs>(
      args: SelectSubset<T, TestModelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestModel.
     * @param {TestModelUpsertArgs} args - Arguments to update or create a TestModel.
     * @example
     * // Update or create a TestModel
     * const testModel = await prisma.testModel.upsert({
     *   create: {
     *     // ... data to create a TestModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestModel we want to update
     *   }
     * })
    **/
    upsert<T extends TestModelUpsertArgs>(
      args: SelectSubset<T, TestModelUpsertArgs>
    ): Prisma__TestModelClient<TestModelGetPayload<T>>

    /**
     * Count the number of TestModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestModelCountArgs} args - Arguments to filter TestModels to count.
     * @example
     * // Count the number of TestModels
     * const count = await prisma.testModel.count({
     *   where: {
     *     // ... the filter for the TestModels we want to count
     *   }
     * })
    **/
    count<T extends TestModelCountArgs>(
      args?: Subset<T, TestModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestModelAggregateArgs>(args: Subset<T, TestModelAggregateArgs>): Prisma.PrismaPromise<GetTestModelAggregateType<T>>

    /**
     * Group by TestModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestModelGroupByArgs} args - Group by arguments.
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
      T extends TestModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestModelGroupByArgs['orderBy'] }
        : { orderBy?: TestModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TestModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestModelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * TestModel base type for findUnique actions
   */
  export type TestModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * Filter, which TestModel to fetch.
     */
    where: TestModelWhereUniqueInput
  }

  /**
   * TestModel findUnique
   */
  export interface TestModelFindUniqueArgs extends TestModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestModel findUniqueOrThrow
   */
  export type TestModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * Filter, which TestModel to fetch.
     */
    where: TestModelWhereUniqueInput
  }


  /**
   * TestModel base type for findFirst actions
   */
  export type TestModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * Filter, which TestModel to fetch.
     */
    where?: TestModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestModels to fetch.
     */
    orderBy?: Enumerable<TestModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestModels.
     */
    cursor?: TestModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestModels.
     */
    distinct?: Enumerable<TestModelScalarFieldEnum>
  }

  /**
   * TestModel findFirst
   */
  export interface TestModelFindFirstArgs extends TestModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TestModel findFirstOrThrow
   */
  export type TestModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * Filter, which TestModel to fetch.
     */
    where?: TestModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestModels to fetch.
     */
    orderBy?: Enumerable<TestModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestModels.
     */
    cursor?: TestModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestModels.
     */
    distinct?: Enumerable<TestModelScalarFieldEnum>
  }


  /**
   * TestModel findMany
   */
  export type TestModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * Filter, which TestModels to fetch.
     */
    where?: TestModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestModels to fetch.
     */
    orderBy?: Enumerable<TestModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestModels.
     */
    cursor?: TestModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestModels.
     */
    skip?: number
    distinct?: Enumerable<TestModelScalarFieldEnum>
  }


  /**
   * TestModel create
   */
  export type TestModelCreateArgs = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * The data needed to create a TestModel.
     */
    data: XOR<TestModelCreateInput, TestModelUncheckedCreateInput>
  }


  /**
   * TestModel createMany
   */
  export type TestModelCreateManyArgs = {
    /**
     * The data used to create many TestModels.
     */
    data: Enumerable<TestModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TestModel update
   */
  export type TestModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * The data needed to update a TestModel.
     */
    data: XOR<TestModelUpdateInput, TestModelUncheckedUpdateInput>
    /**
     * Choose, which TestModel to update.
     */
    where: TestModelWhereUniqueInput
  }


  /**
   * TestModel updateMany
   */
  export type TestModelUpdateManyArgs = {
    /**
     * The data used to update TestModels.
     */
    data: XOR<TestModelUpdateManyMutationInput, TestModelUncheckedUpdateManyInput>
    /**
     * Filter which TestModels to update
     */
    where?: TestModelWhereInput
  }


  /**
   * TestModel upsert
   */
  export type TestModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * The filter to search for the TestModel to update in case it exists.
     */
    where: TestModelWhereUniqueInput
    /**
     * In case the TestModel found by the `where` argument doesn't exist, create a new TestModel with this data.
     */
    create: XOR<TestModelCreateInput, TestModelUncheckedCreateInput>
    /**
     * In case the TestModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestModelUpdateInput, TestModelUncheckedUpdateInput>
  }


  /**
   * TestModel delete
   */
  export type TestModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
    /**
     * Filter which TestModel to delete.
     */
    where: TestModelWhereUniqueInput
  }


  /**
   * TestModel deleteMany
   */
  export type TestModelDeleteManyArgs = {
    /**
     * Filter which TestModels to delete
     */
    where?: TestModelWhereInput
  }


  /**
   * TestModel without action
   */
  export type TestModelArgs = {
    /**
     * Select specific fields to fetch from the TestModel
     */
    select?: TestModelSelect | null
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
  }

  export type TriviaCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TriviaCategoryCountAggregateOutputType = {
    id: number
    name: number
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
  }

  export type TriviaCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TriviaCategoryCountAggregateInputType = {
    id?: true
    name?: true
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
    questions?: boolean | TriviaCategory$questionsArgs
    rounds?: boolean | TriviaCategory$roundsArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }


  export type TriviaCategoryInclude = {
    questions?: boolean | TriviaCategory$questionsArgs
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
        P extends 'questions' ? Array < TriviaQuestionGetPayload<S['include'][P]>>  :
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'questions' ? Array < TriviaQuestionGetPayload<S['select'][P]>>  :
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

    questions<T extends TriviaCategory$questionsArgs= {}>(args?: Subset<T, TriviaCategory$questionsArgs>): Prisma.PrismaPromise<Array<TriviaQuestionGetPayload<T>>| Null>;

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
   * TriviaCategory.questions
   */
  export type TriviaCategory$questionsArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    where?: TriviaQuestionWhereInput
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    cursor?: TriviaQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaQuestionScalarFieldEnum>
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
   * Model TriviaQuestion
   */


  export type AggregateTriviaQuestion = {
    _count: TriviaQuestionCountAggregateOutputType | null
    _avg: TriviaQuestionAvgAggregateOutputType | null
    _sum: TriviaQuestionSumAggregateOutputType | null
    _min: TriviaQuestionMinAggregateOutputType | null
    _max: TriviaQuestionMaxAggregateOutputType | null
  }

  export type TriviaQuestionAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    answerID: number | null
  }

  export type TriviaQuestionSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    answerID: number | null
  }

  export type TriviaQuestionMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    answerID: number | null
  }

  export type TriviaQuestionMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    answerID: number | null
  }

  export type TriviaQuestionCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    answerID: number
    _all: number
  }


  export type TriviaQuestionAvgAggregateInputType = {
    id?: true
    categoryId?: true
    answerID?: true
  }

  export type TriviaQuestionSumAggregateInputType = {
    id?: true
    categoryId?: true
    answerID?: true
  }

  export type TriviaQuestionMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    answerID?: true
  }

  export type TriviaQuestionMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    answerID?: true
  }

  export type TriviaQuestionCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    answerID?: true
    _all?: true
  }

  export type TriviaQuestionAggregateArgs = {
    /**
     * Filter which TriviaQuestion to aggregate.
     */
    where?: TriviaQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaQuestions
    **/
    _count?: true | TriviaQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaQuestionMaxAggregateInputType
  }

  export type GetTriviaQuestionAggregateType<T extends TriviaQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaQuestion[P]>
      : GetScalarType<T[P], AggregateTriviaQuestion[P]>
  }




  export type TriviaQuestionGroupByArgs = {
    where?: TriviaQuestionWhereInput
    orderBy?: Enumerable<TriviaQuestionOrderByWithAggregationInput>
    by: TriviaQuestionScalarFieldEnum[]
    having?: TriviaQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaQuestionCountAggregateInputType | true
    _avg?: TriviaQuestionAvgAggregateInputType
    _sum?: TriviaQuestionSumAggregateInputType
    _min?: TriviaQuestionMinAggregateInputType
    _max?: TriviaQuestionMaxAggregateInputType
  }


  export type TriviaQuestionGroupByOutputType = {
    id: number
    categoryId: number
    name: string
    answerID: number
    _count: TriviaQuestionCountAggregateOutputType | null
    _avg: TriviaQuestionAvgAggregateOutputType | null
    _sum: TriviaQuestionSumAggregateOutputType | null
    _min: TriviaQuestionMinAggregateOutputType | null
    _max: TriviaQuestionMaxAggregateOutputType | null
  }

  type GetTriviaQuestionGroupByPayload<T extends TriviaQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TriviaQuestionSelect = {
    id?: boolean
    category?: boolean | TriviaCategoryArgs
    categoryId?: boolean
    name?: boolean
    answerID?: boolean
    choices?: boolean | TriviaQuestion$choicesArgs
    roundQuestions?: boolean | TriviaQuestion$roundQuestionsArgs
    _count?: boolean | TriviaQuestionCountOutputTypeArgs
  }


  export type TriviaQuestionInclude = {
    category?: boolean | TriviaCategoryArgs
    choices?: boolean | TriviaQuestion$choicesArgs
    roundQuestions?: boolean | TriviaQuestion$roundQuestionsArgs
    _count?: boolean | TriviaQuestionCountOutputTypeArgs
  }

  export type TriviaQuestionGetPayload<S extends boolean | null | undefined | TriviaQuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuestion :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuestionArgs | TriviaQuestionFindManyArgs)
    ? TriviaQuestion  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['include'][P]>>  :
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaQuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaQuestionArgs | TriviaQuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['select'][P]>>  :
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaQuestionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaQuestion ? TriviaQuestion[P] : never
  } 
      : TriviaQuestion


  type TriviaQuestionCountArgs = 
    Omit<TriviaQuestionFindManyArgs, 'select' | 'include'> & {
      select?: TriviaQuestionCountAggregateInputType | true
    }

  export interface TriviaQuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaQuestion that matches the filter.
     * @param {TriviaQuestionFindUniqueArgs} args - Arguments to find a TriviaQuestion
     * @example
     * // Get one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaQuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaQuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaQuestion'> extends True ? Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>> : Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | null, null>

    /**
     * Find one TriviaQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaQuestionFindUniqueOrThrowArgs} args - Arguments to find a TriviaQuestion
     * @example
     * // Get one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaQuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuestionFindUniqueOrThrowArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Find the first TriviaQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionFindFirstArgs} args - Arguments to find a TriviaQuestion
     * @example
     * // Get one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaQuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaQuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaQuestion'> extends True ? Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>> : Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | null, null>

    /**
     * Find the first TriviaQuestion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionFindFirstOrThrowArgs} args - Arguments to find a TriviaQuestion
     * @example
     * // Get one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaQuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuestionFindFirstOrThrowArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Find zero or more TriviaQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaQuestions
     * const triviaQuestions = await prisma.triviaQuestion.findMany()
     * 
     * // Get first 10 TriviaQuestions
     * const triviaQuestions = await prisma.triviaQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaQuestionWithIdOnly = await prisma.triviaQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaQuestionFindManyArgs>(
      args?: SelectSubset<T, TriviaQuestionFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaQuestionGetPayload<T>>>

    /**
     * Create a TriviaQuestion.
     * @param {TriviaQuestionCreateArgs} args - Arguments to create a TriviaQuestion.
     * @example
     * // Create one TriviaQuestion
     * const TriviaQuestion = await prisma.triviaQuestion.create({
     *   data: {
     *     // ... data to create a TriviaQuestion
     *   }
     * })
     * 
    **/
    create<T extends TriviaQuestionCreateArgs>(
      args: SelectSubset<T, TriviaQuestionCreateArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Create many TriviaQuestions.
     *     @param {TriviaQuestionCreateManyArgs} args - Arguments to create many TriviaQuestions.
     *     @example
     *     // Create many TriviaQuestions
     *     const triviaQuestion = await prisma.triviaQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaQuestionCreateManyArgs>(
      args?: SelectSubset<T, TriviaQuestionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaQuestion.
     * @param {TriviaQuestionDeleteArgs} args - Arguments to delete one TriviaQuestion.
     * @example
     * // Delete one TriviaQuestion
     * const TriviaQuestion = await prisma.triviaQuestion.delete({
     *   where: {
     *     // ... filter to delete one TriviaQuestion
     *   }
     * })
     * 
    **/
    delete<T extends TriviaQuestionDeleteArgs>(
      args: SelectSubset<T, TriviaQuestionDeleteArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Update one TriviaQuestion.
     * @param {TriviaQuestionUpdateArgs} args - Arguments to update one TriviaQuestion.
     * @example
     * // Update one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaQuestionUpdateArgs>(
      args: SelectSubset<T, TriviaQuestionUpdateArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Delete zero or more TriviaQuestions.
     * @param {TriviaQuestionDeleteManyArgs} args - Arguments to filter TriviaQuestions to delete.
     * @example
     * // Delete a few TriviaQuestions
     * const { count } = await prisma.triviaQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaQuestionDeleteManyArgs>(
      args?: SelectSubset<T, TriviaQuestionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaQuestions
     * const triviaQuestion = await prisma.triviaQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaQuestionUpdateManyArgs>(
      args: SelectSubset<T, TriviaQuestionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaQuestion.
     * @param {TriviaQuestionUpsertArgs} args - Arguments to update or create a TriviaQuestion.
     * @example
     * // Update or create a TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.upsert({
     *   create: {
     *     // ... data to create a TriviaQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaQuestionUpsertArgs>(
      args: SelectSubset<T, TriviaQuestionUpsertArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Count the number of TriviaQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionCountArgs} args - Arguments to filter TriviaQuestions to count.
     * @example
     * // Count the number of TriviaQuestions
     * const count = await prisma.triviaQuestion.count({
     *   where: {
     *     // ... the filter for the TriviaQuestions we want to count
     *   }
     * })
    **/
    count<T extends TriviaQuestionCountArgs>(
      args?: Subset<T, TriviaQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaQuestionAggregateArgs>(args: Subset<T, TriviaQuestionAggregateArgs>): Prisma.PrismaPromise<GetTriviaQuestionAggregateType<T>>

    /**
     * Group by TriviaQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionGroupByArgs} args - Group by arguments.
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
      T extends TriviaQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TriviaQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaQuestionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    choices<T extends TriviaQuestion$choicesArgs= {}>(args?: Subset<T, TriviaQuestion$choicesArgs>): Prisma.PrismaPromise<Array<TriviaChoiceGetPayload<T>>| Null>;

    roundQuestions<T extends TriviaQuestion$roundQuestionsArgs= {}>(args?: Subset<T, TriviaQuestion$roundQuestionsArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuestionGetPayload<T>>| Null>;

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
   * TriviaQuestion base type for findUnique actions
   */
  export type TriviaQuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestion to fetch.
     */
    where: TriviaQuestionWhereUniqueInput
  }

  /**
   * TriviaQuestion findUnique
   */
  export interface TriviaQuestionFindUniqueArgs extends TriviaQuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuestion findUniqueOrThrow
   */
  export type TriviaQuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestion to fetch.
     */
    where: TriviaQuestionWhereUniqueInput
  }


  /**
   * TriviaQuestion base type for findFirst actions
   */
  export type TriviaQuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestion to fetch.
     */
    where?: TriviaQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuestions.
     */
    cursor?: TriviaQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuestions.
     */
    distinct?: Enumerable<TriviaQuestionScalarFieldEnum>
  }

  /**
   * TriviaQuestion findFirst
   */
  export interface TriviaQuestionFindFirstArgs extends TriviaQuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuestion findFirstOrThrow
   */
  export type TriviaQuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestion to fetch.
     */
    where?: TriviaQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuestions.
     */
    cursor?: TriviaQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuestions.
     */
    distinct?: Enumerable<TriviaQuestionScalarFieldEnum>
  }


  /**
   * TriviaQuestion findMany
   */
  export type TriviaQuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestions to fetch.
     */
    where?: TriviaQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaQuestions.
     */
    cursor?: TriviaQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuestions.
     */
    skip?: number
    distinct?: Enumerable<TriviaQuestionScalarFieldEnum>
  }


  /**
   * TriviaQuestion create
   */
  export type TriviaQuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * The data needed to create a TriviaQuestion.
     */
    data: XOR<TriviaQuestionCreateInput, TriviaQuestionUncheckedCreateInput>
  }


  /**
   * TriviaQuestion createMany
   */
  export type TriviaQuestionCreateManyArgs = {
    /**
     * The data used to create many TriviaQuestions.
     */
    data: Enumerable<TriviaQuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaQuestion update
   */
  export type TriviaQuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * The data needed to update a TriviaQuestion.
     */
    data: XOR<TriviaQuestionUpdateInput, TriviaQuestionUncheckedUpdateInput>
    /**
     * Choose, which TriviaQuestion to update.
     */
    where: TriviaQuestionWhereUniqueInput
  }


  /**
   * TriviaQuestion updateMany
   */
  export type TriviaQuestionUpdateManyArgs = {
    /**
     * The data used to update TriviaQuestions.
     */
    data: XOR<TriviaQuestionUpdateManyMutationInput, TriviaQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TriviaQuestions to update
     */
    where?: TriviaQuestionWhereInput
  }


  /**
   * TriviaQuestion upsert
   */
  export type TriviaQuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * The filter to search for the TriviaQuestion to update in case it exists.
     */
    where: TriviaQuestionWhereUniqueInput
    /**
     * In case the TriviaQuestion found by the `where` argument doesn't exist, create a new TriviaQuestion with this data.
     */
    create: XOR<TriviaQuestionCreateInput, TriviaQuestionUncheckedCreateInput>
    /**
     * In case the TriviaQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaQuestionUpdateInput, TriviaQuestionUncheckedUpdateInput>
  }


  /**
   * TriviaQuestion delete
   */
  export type TriviaQuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter which TriviaQuestion to delete.
     */
    where: TriviaQuestionWhereUniqueInput
  }


  /**
   * TriviaQuestion deleteMany
   */
  export type TriviaQuestionDeleteManyArgs = {
    /**
     * Filter which TriviaQuestions to delete
     */
    where?: TriviaQuestionWhereInput
  }


  /**
   * TriviaQuestion.choices
   */
  export type TriviaQuestion$choicesArgs = {
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
   * TriviaQuestion.roundQuestions
   */
  export type TriviaQuestion$roundQuestionsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    where?: TriviaRoundQuestionWhereInput
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    cursor?: TriviaRoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }


  /**
   * TriviaQuestion without action
   */
  export type TriviaQuestionArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
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
    quizId: number | null
    name: string | null
  }

  export type TriviaChoiceMaxAggregateOutputType = {
    id: number | null
    quizId: number | null
    name: string | null
  }

  export type TriviaChoiceCountAggregateOutputType = {
    id: number
    quizId: number
    name: number
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
    quizId?: true
    name?: true
  }

  export type TriviaChoiceMaxAggregateInputType = {
    id?: true
    quizId?: true
    name?: true
  }

  export type TriviaChoiceCountAggregateInputType = {
    id?: true
    quizId?: true
    name?: true
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
    quizId: number
    name: string
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
    question?: boolean | TriviaQuestionArgs
    quizId?: boolean
    name?: boolean
    roundQuestions?: boolean | TriviaChoice$roundQuestionsArgs
    _count?: boolean | TriviaChoiceCountOutputTypeArgs
  }


  export type TriviaChoiceInclude = {
    question?: boolean | TriviaQuestionArgs
    roundQuestions?: boolean | TriviaChoice$roundQuestionsArgs
    _count?: boolean | TriviaChoiceCountOutputTypeArgs
  }

  export type TriviaChoiceGetPayload<S extends boolean | null | undefined | TriviaChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaChoice :
    S extends undefined ? never :
    S extends { include: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
    ? TriviaChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'question' ? TriviaQuestionGetPayload<S['include'][P]> :
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'question' ? TriviaQuestionGetPayload<S['select'][P]> :
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['select'][P]>>  :
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

    question<T extends TriviaQuestionArgs= {}>(args?: Subset<T, TriviaQuestionArgs>): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | Null>;

    roundQuestions<T extends TriviaChoice$roundQuestionsArgs= {}>(args?: Subset<T, TriviaChoice$roundQuestionsArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuestionGetPayload<T>>| Null>;

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
   * TriviaChoice.roundQuestions
   */
  export type TriviaChoice$roundQuestionsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    where?: TriviaRoundQuestionWhereInput
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    cursor?: TriviaRoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
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
   * Model TriviaRoundQuestion
   */


  export type AggregateTriviaRoundQuestion = {
    _count: TriviaRoundQuestionCountAggregateOutputType | null
    _avg: TriviaRoundQuestionAvgAggregateOutputType | null
    _sum: TriviaRoundQuestionSumAggregateOutputType | null
    _min: TriviaRoundQuestionMinAggregateOutputType | null
    _max: TriviaRoundQuestionMaxAggregateOutputType | null
  }

  export type TriviaRoundQuestionAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
    choiceId: number | null
    roundId: number | null
  }

  export type TriviaRoundQuestionSumAggregateOutputType = {
    id: number | null
    quizId: number | null
    choiceId: number | null
    roundId: number | null
  }

  export type TriviaRoundQuestionMinAggregateOutputType = {
    id: number | null
    quizId: number | null
    choiceId: number | null
    quizResult: boolean | null
    roundId: number | null
  }

  export type TriviaRoundQuestionMaxAggregateOutputType = {
    id: number | null
    quizId: number | null
    choiceId: number | null
    quizResult: boolean | null
    roundId: number | null
  }

  export type TriviaRoundQuestionCountAggregateOutputType = {
    id: number
    quizId: number
    choiceId: number
    quizResult: number
    roundId: number
    _all: number
  }


  export type TriviaRoundQuestionAvgAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    roundId?: true
  }

  export type TriviaRoundQuestionSumAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    roundId?: true
  }

  export type TriviaRoundQuestionMinAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    quizResult?: true
    roundId?: true
  }

  export type TriviaRoundQuestionMaxAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    quizResult?: true
    roundId?: true
  }

  export type TriviaRoundQuestionCountAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    quizResult?: true
    roundId?: true
    _all?: true
  }

  export type TriviaRoundQuestionAggregateArgs = {
    /**
     * Filter which TriviaRoundQuestion to aggregate.
     */
    where?: TriviaRoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaRoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaRoundQuestions
    **/
    _count?: true | TriviaRoundQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaRoundQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaRoundQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaRoundQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaRoundQuestionMaxAggregateInputType
  }

  export type GetTriviaRoundQuestionAggregateType<T extends TriviaRoundQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaRoundQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaRoundQuestion[P]>
      : GetScalarType<T[P], AggregateTriviaRoundQuestion[P]>
  }




  export type TriviaRoundQuestionGroupByArgs = {
    where?: TriviaRoundQuestionWhereInput
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithAggregationInput>
    by: TriviaRoundQuestionScalarFieldEnum[]
    having?: TriviaRoundQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaRoundQuestionCountAggregateInputType | true
    _avg?: TriviaRoundQuestionAvgAggregateInputType
    _sum?: TriviaRoundQuestionSumAggregateInputType
    _min?: TriviaRoundQuestionMinAggregateInputType
    _max?: TriviaRoundQuestionMaxAggregateInputType
  }


  export type TriviaRoundQuestionGroupByOutputType = {
    id: number
    quizId: number
    choiceId: number
    quizResult: boolean
    roundId: number | null
    _count: TriviaRoundQuestionCountAggregateOutputType | null
    _avg: TriviaRoundQuestionAvgAggregateOutputType | null
    _sum: TriviaRoundQuestionSumAggregateOutputType | null
    _min: TriviaRoundQuestionMinAggregateOutputType | null
    _max: TriviaRoundQuestionMaxAggregateOutputType | null
  }

  type GetTriviaRoundQuestionGroupByPayload<T extends TriviaRoundQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaRoundQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaRoundQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaRoundQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaRoundQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TriviaRoundQuestionSelect = {
    id?: boolean
    question?: boolean | TriviaQuestionArgs
    quizId?: boolean
    userChoice?: boolean | TriviaChoiceArgs
    choiceId?: boolean
    quizResult?: boolean
    round?: boolean | TriviaRoundArgs
    roundId?: boolean
  }


  export type TriviaRoundQuestionInclude = {
    question?: boolean | TriviaQuestionArgs
    userChoice?: boolean | TriviaChoiceArgs
    round?: boolean | TriviaRoundArgs
  }

  export type TriviaRoundQuestionGetPayload<S extends boolean | null | undefined | TriviaRoundQuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundQuestion :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundQuestionArgs | TriviaRoundQuestionFindManyArgs)
    ? TriviaRoundQuestion  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'question' ? TriviaQuestionGetPayload<S['include'][P]> :
        P extends 'userChoice' ? TriviaChoiceGetPayload<S['include'][P]> :
        P extends 'round' ? TriviaRoundGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (TriviaRoundQuestionArgs | TriviaRoundQuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'question' ? TriviaQuestionGetPayload<S['select'][P]> :
        P extends 'userChoice' ? TriviaChoiceGetPayload<S['select'][P]> :
        P extends 'round' ? TriviaRoundGetPayload<S['select'][P]> | null :  P extends keyof TriviaRoundQuestion ? TriviaRoundQuestion[P] : never
  } 
      : TriviaRoundQuestion


  type TriviaRoundQuestionCountArgs = 
    Omit<TriviaRoundQuestionFindManyArgs, 'select' | 'include'> & {
      select?: TriviaRoundQuestionCountAggregateInputType | true
    }

  export interface TriviaRoundQuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaRoundQuestion that matches the filter.
     * @param {TriviaRoundQuestionFindUniqueArgs} args - Arguments to find a TriviaRoundQuestion
     * @example
     * // Get one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaRoundQuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaRoundQuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaRoundQuestion'> extends True ? Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>> : Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T> | null, null>

    /**
     * Find one TriviaRoundQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaRoundQuestionFindUniqueOrThrowArgs} args - Arguments to find a TriviaRoundQuestion
     * @example
     * // Get one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaRoundQuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionFindUniqueOrThrowArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Find the first TriviaRoundQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionFindFirstArgs} args - Arguments to find a TriviaRoundQuestion
     * @example
     * // Get one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaRoundQuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaRoundQuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaRoundQuestion'> extends True ? Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>> : Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T> | null, null>

    /**
     * Find the first TriviaRoundQuestion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionFindFirstOrThrowArgs} args - Arguments to find a TriviaRoundQuestion
     * @example
     * // Get one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaRoundQuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionFindFirstOrThrowArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Find zero or more TriviaRoundQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaRoundQuestions
     * const triviaRoundQuestions = await prisma.triviaRoundQuestion.findMany()
     * 
     * // Get first 10 TriviaRoundQuestions
     * const triviaRoundQuestions = await prisma.triviaRoundQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaRoundQuestionWithIdOnly = await prisma.triviaRoundQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaRoundQuestionFindManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaRoundQuestionGetPayload<T>>>

    /**
     * Create a TriviaRoundQuestion.
     * @param {TriviaRoundQuestionCreateArgs} args - Arguments to create a TriviaRoundQuestion.
     * @example
     * // Create one TriviaRoundQuestion
     * const TriviaRoundQuestion = await prisma.triviaRoundQuestion.create({
     *   data: {
     *     // ... data to create a TriviaRoundQuestion
     *   }
     * })
     * 
    **/
    create<T extends TriviaRoundQuestionCreateArgs>(
      args: SelectSubset<T, TriviaRoundQuestionCreateArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Create many TriviaRoundQuestions.
     *     @param {TriviaRoundQuestionCreateManyArgs} args - Arguments to create many TriviaRoundQuestions.
     *     @example
     *     // Create many TriviaRoundQuestions
     *     const triviaRoundQuestion = await prisma.triviaRoundQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaRoundQuestionCreateManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaRoundQuestion.
     * @param {TriviaRoundQuestionDeleteArgs} args - Arguments to delete one TriviaRoundQuestion.
     * @example
     * // Delete one TriviaRoundQuestion
     * const TriviaRoundQuestion = await prisma.triviaRoundQuestion.delete({
     *   where: {
     *     // ... filter to delete one TriviaRoundQuestion
     *   }
     * })
     * 
    **/
    delete<T extends TriviaRoundQuestionDeleteArgs>(
      args: SelectSubset<T, TriviaRoundQuestionDeleteArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Update one TriviaRoundQuestion.
     * @param {TriviaRoundQuestionUpdateArgs} args - Arguments to update one TriviaRoundQuestion.
     * @example
     * // Update one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaRoundQuestionUpdateArgs>(
      args: SelectSubset<T, TriviaRoundQuestionUpdateArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Delete zero or more TriviaRoundQuestions.
     * @param {TriviaRoundQuestionDeleteManyArgs} args - Arguments to filter TriviaRoundQuestions to delete.
     * @example
     * // Delete a few TriviaRoundQuestions
     * const { count } = await prisma.triviaRoundQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaRoundQuestionDeleteManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaRoundQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaRoundQuestions
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaRoundQuestionUpdateManyArgs>(
      args: SelectSubset<T, TriviaRoundQuestionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaRoundQuestion.
     * @param {TriviaRoundQuestionUpsertArgs} args - Arguments to update or create a TriviaRoundQuestion.
     * @example
     * // Update or create a TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.upsert({
     *   create: {
     *     // ... data to create a TriviaRoundQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaRoundQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaRoundQuestionUpsertArgs>(
      args: SelectSubset<T, TriviaRoundQuestionUpsertArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Count the number of TriviaRoundQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionCountArgs} args - Arguments to filter TriviaRoundQuestions to count.
     * @example
     * // Count the number of TriviaRoundQuestions
     * const count = await prisma.triviaRoundQuestion.count({
     *   where: {
     *     // ... the filter for the TriviaRoundQuestions we want to count
     *   }
     * })
    **/
    count<T extends TriviaRoundQuestionCountArgs>(
      args?: Subset<T, TriviaRoundQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaRoundQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaRoundQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaRoundQuestionAggregateArgs>(args: Subset<T, TriviaRoundQuestionAggregateArgs>): Prisma.PrismaPromise<GetTriviaRoundQuestionAggregateType<T>>

    /**
     * Group by TriviaRoundQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionGroupByArgs} args - Group by arguments.
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
      T extends TriviaRoundQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaRoundQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TriviaRoundQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaRoundQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaRoundQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaRoundQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaRoundQuestionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    question<T extends TriviaQuestionArgs= {}>(args?: Subset<T, TriviaQuestionArgs>): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | Null>;

    userChoice<T extends TriviaChoiceArgs= {}>(args?: Subset<T, TriviaChoiceArgs>): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | Null>;

    round<T extends TriviaRoundArgs= {}>(args?: Subset<T, TriviaRoundArgs>): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | Null>;

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
   * TriviaRoundQuestion base type for findUnique actions
   */
  export type TriviaRoundQuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestion to fetch.
     */
    where: TriviaRoundQuestionWhereUniqueInput
  }

  /**
   * TriviaRoundQuestion findUnique
   */
  export interface TriviaRoundQuestionFindUniqueArgs extends TriviaRoundQuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuestion findUniqueOrThrow
   */
  export type TriviaRoundQuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestion to fetch.
     */
    where: TriviaRoundQuestionWhereUniqueInput
  }


  /**
   * TriviaRoundQuestion base type for findFirst actions
   */
  export type TriviaRoundQuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestion to fetch.
     */
    where?: TriviaRoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuestions.
     */
    cursor?: TriviaRoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuestions.
     */
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }

  /**
   * TriviaRoundQuestion findFirst
   */
  export interface TriviaRoundQuestionFindFirstArgs extends TriviaRoundQuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuestion findFirstOrThrow
   */
  export type TriviaRoundQuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestion to fetch.
     */
    where?: TriviaRoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuestions.
     */
    cursor?: TriviaRoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuestions.
     */
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }


  /**
   * TriviaRoundQuestion findMany
   */
  export type TriviaRoundQuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestions to fetch.
     */
    where?: TriviaRoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaRoundQuestions.
     */
    cursor?: TriviaRoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuestions.
     */
    skip?: number
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }


  /**
   * TriviaRoundQuestion create
   */
  export type TriviaRoundQuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * The data needed to create a TriviaRoundQuestion.
     */
    data: XOR<TriviaRoundQuestionCreateInput, TriviaRoundQuestionUncheckedCreateInput>
  }


  /**
   * TriviaRoundQuestion createMany
   */
  export type TriviaRoundQuestionCreateManyArgs = {
    /**
     * The data used to create many TriviaRoundQuestions.
     */
    data: Enumerable<TriviaRoundQuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaRoundQuestion update
   */
  export type TriviaRoundQuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * The data needed to update a TriviaRoundQuestion.
     */
    data: XOR<TriviaRoundQuestionUpdateInput, TriviaRoundQuestionUncheckedUpdateInput>
    /**
     * Choose, which TriviaRoundQuestion to update.
     */
    where: TriviaRoundQuestionWhereUniqueInput
  }


  /**
   * TriviaRoundQuestion updateMany
   */
  export type TriviaRoundQuestionUpdateManyArgs = {
    /**
     * The data used to update TriviaRoundQuestions.
     */
    data: XOR<TriviaRoundQuestionUpdateManyMutationInput, TriviaRoundQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TriviaRoundQuestions to update
     */
    where?: TriviaRoundQuestionWhereInput
  }


  /**
   * TriviaRoundQuestion upsert
   */
  export type TriviaRoundQuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * The filter to search for the TriviaRoundQuestion to update in case it exists.
     */
    where: TriviaRoundQuestionWhereUniqueInput
    /**
     * In case the TriviaRoundQuestion found by the `where` argument doesn't exist, create a new TriviaRoundQuestion with this data.
     */
    create: XOR<TriviaRoundQuestionCreateInput, TriviaRoundQuestionUncheckedCreateInput>
    /**
     * In case the TriviaRoundQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaRoundQuestionUpdateInput, TriviaRoundQuestionUncheckedUpdateInput>
  }


  /**
   * TriviaRoundQuestion delete
   */
  export type TriviaRoundQuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter which TriviaRoundQuestion to delete.
     */
    where: TriviaRoundQuestionWhereUniqueInput
  }


  /**
   * TriviaRoundQuestion deleteMany
   */
  export type TriviaRoundQuestionDeleteManyArgs = {
    /**
     * Filter which TriviaRoundQuestions to delete
     */
    where?: TriviaRoundQuestionWhereInput
  }


  /**
   * TriviaRoundQuestion without action
   */
  export type TriviaRoundQuestionArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
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
    totalResult: number | null
  }

  export type TriviaRoundSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    totalResult: number | null
  }

  export type TriviaRoundMinAggregateOutputType = {
    id: number | null
    user: string | null
    categoryId: number | null
    totalResult: number | null
    createAt: Date | null
  }

  export type TriviaRoundMaxAggregateOutputType = {
    id: number | null
    user: string | null
    categoryId: number | null
    totalResult: number | null
    createAt: Date | null
  }

  export type TriviaRoundCountAggregateOutputType = {
    id: number
    user: number
    categoryId: number
    totalResult: number
    createAt: number
    _all: number
  }


  export type TriviaRoundAvgAggregateInputType = {
    id?: true
    categoryId?: true
    totalResult?: true
  }

  export type TriviaRoundSumAggregateInputType = {
    id?: true
    categoryId?: true
    totalResult?: true
  }

  export type TriviaRoundMinAggregateInputType = {
    id?: true
    user?: true
    categoryId?: true
    totalResult?: true
    createAt?: true
  }

  export type TriviaRoundMaxAggregateInputType = {
    id?: true
    user?: true
    categoryId?: true
    totalResult?: true
    createAt?: true
  }

  export type TriviaRoundCountAggregateInputType = {
    id?: true
    user?: true
    categoryId?: true
    totalResult?: true
    createAt?: true
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
    user: string
    categoryId: number
    totalResult: number
    createAt: Date
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
    user?: boolean
    questions?: boolean | TriviaRound$questionsArgs
    category?: boolean | TriviaCategoryArgs
    categoryId?: boolean
    totalResult?: boolean
    createAt?: boolean
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }


  export type TriviaRoundInclude = {
    questions?: boolean | TriviaRound$questionsArgs
    category?: boolean | TriviaCategoryArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }

  export type TriviaRoundGetPayload<S extends boolean | null | undefined | TriviaRoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRound :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
    ? TriviaRound  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'questions' ? Array < TriviaRoundQuestionGetPayload<S['include'][P]>>  :
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> :
        P extends '_count' ? TriviaRoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'questions' ? Array < TriviaRoundQuestionGetPayload<S['select'][P]>>  :
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> :
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

    questions<T extends TriviaRound$questionsArgs= {}>(args?: Subset<T, TriviaRound$questionsArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuestionGetPayload<T>>| Null>;

    category<T extends TriviaCategoryArgs= {}>(args?: Subset<T, TriviaCategoryArgs>): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | Null>;

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
   * TriviaRound.questions
   */
  export type TriviaRound$questionsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    where?: TriviaRoundQuestionWhereInput
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    cursor?: TriviaRoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
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
    directMessageId: number | null
    userRelationId: number | null
  }

  export type TwitterUserSumAggregateOutputType = {
    id: number | null
    directMessageId: number | null
    userRelationId: number | null
  }

  export type TwitterUserMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    directMessageId: number | null
    userRelationId: number | null
  }

  export type TwitterUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    directMessageId: number | null
    userRelationId: number | null
  }

  export type TwitterUserCountAggregateOutputType = {
    id: number
    name: number
    image: number
    directMessageId: number
    userRelationId: number
    _all: number
  }


  export type TwitterUserAvgAggregateInputType = {
    id?: true
    directMessageId?: true
    userRelationId?: true
  }

  export type TwitterUserSumAggregateInputType = {
    id?: true
    directMessageId?: true
    userRelationId?: true
  }

  export type TwitterUserMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    directMessageId?: true
    userRelationId?: true
  }

  export type TwitterUserMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    directMessageId?: true
    userRelationId?: true
  }

  export type TwitterUserCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    directMessageId?: true
    userRelationId?: true
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
    name: string
    image: string
    directMessageId: number
    userRelationId: number
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
    name?: boolean
    image?: boolean
    directMessage?: boolean | TwitterDirectMessageArgs
    directMessageId?: boolean
    userRelate?: boolean | TwitterUserRelationArgs
    userRelationId?: boolean
    TwitterPostReply?: boolean | TwitterUser$TwitterPostReplyArgs
    _count?: boolean | TwitterUserCountOutputTypeArgs
  }


  export type TwitterUserInclude = {
    directMessage?: boolean | TwitterDirectMessageArgs
    userRelate?: boolean | TwitterUserRelationArgs
    TwitterPostReply?: boolean | TwitterUser$TwitterPostReplyArgs
    _count?: boolean | TwitterUserCountOutputTypeArgs
  }

  export type TwitterUserGetPayload<S extends boolean | null | undefined | TwitterUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterUser :
    S extends undefined ? never :
    S extends { include: any } & (TwitterUserArgs | TwitterUserFindManyArgs)
    ? TwitterUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'directMessage' ? TwitterDirectMessageGetPayload<S['include'][P]> :
        P extends 'userRelate' ? TwitterUserRelationGetPayload<S['include'][P]> :
        P extends 'TwitterPostReply' ? Array < TwitterPostReplyGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterUserArgs | TwitterUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'directMessage' ? TwitterDirectMessageGetPayload<S['select'][P]> :
        P extends 'userRelate' ? TwitterUserRelationGetPayload<S['select'][P]> :
        P extends 'TwitterPostReply' ? Array < TwitterPostReplyGetPayload<S['select'][P]>>  :
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

    directMessage<T extends TwitterDirectMessageArgs= {}>(args?: Subset<T, TwitterDirectMessageArgs>): Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T> | Null>;

    userRelate<T extends TwitterUserRelationArgs= {}>(args?: Subset<T, TwitterUserRelationArgs>): Prisma__TwitterUserRelationClient<TwitterUserRelationGetPayload<T> | Null>;

    TwitterPostReply<T extends TwitterUser$TwitterPostReplyArgs= {}>(args?: Subset<T, TwitterUser$TwitterPostReplyArgs>): Prisma.PrismaPromise<Array<TwitterPostReplyGetPayload<T>>| Null>;

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
   * TwitterUser.TwitterPostReply
   */
  export type TwitterUser$TwitterPostReplyArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    where?: TwitterPostReplyWhereInput
    orderBy?: Enumerable<TwitterPostReplyOrderByWithRelationInput>
    cursor?: TwitterPostReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterPostReplyScalarFieldEnum>
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
  }

  export type TwitterPostSumAggregateOutputType = {
    id: number | null
  }

  export type TwitterPostMinAggregateOutputType = {
    id: number | null
    message: string | null
  }

  export type TwitterPostMaxAggregateOutputType = {
    id: number | null
    message: string | null
  }

  export type TwitterPostCountAggregateOutputType = {
    id: number
    message: number
    _all: number
  }


  export type TwitterPostAvgAggregateInputType = {
    id?: true
  }

  export type TwitterPostSumAggregateInputType = {
    id?: true
  }

  export type TwitterPostMinAggregateInputType = {
    id?: true
    message?: true
  }

  export type TwitterPostMaxAggregateInputType = {
    id?: true
    message?: true
  }

  export type TwitterPostCountAggregateInputType = {
    id?: true
    message?: true
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
    TwitterPostReply?: boolean | TwitterPost$TwitterPostReplyArgs
    PostOnHashtag?: boolean | TwitterPost$PostOnHashtagArgs
    _count?: boolean | TwitterPostCountOutputTypeArgs
  }


  export type TwitterPostInclude = {
    TwitterPostReply?: boolean | TwitterPost$TwitterPostReplyArgs
    PostOnHashtag?: boolean | TwitterPost$PostOnHashtagArgs
    _count?: boolean | TwitterPostCountOutputTypeArgs
  }

  export type TwitterPostGetPayload<S extends boolean | null | undefined | TwitterPostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterPost :
    S extends undefined ? never :
    S extends { include: any } & (TwitterPostArgs | TwitterPostFindManyArgs)
    ? TwitterPost  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'TwitterPostReply' ? Array < TwitterPostReplyGetPayload<S['include'][P]>>  :
        P extends 'PostOnHashtag' ? Array < PostOnHashtagGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterPostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterPostArgs | TwitterPostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'TwitterPostReply' ? Array < TwitterPostReplyGetPayload<S['select'][P]>>  :
        P extends 'PostOnHashtag' ? Array < PostOnHashtagGetPayload<S['select'][P]>>  :
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

    TwitterPostReply<T extends TwitterPost$TwitterPostReplyArgs= {}>(args?: Subset<T, TwitterPost$TwitterPostReplyArgs>): Prisma.PrismaPromise<Array<TwitterPostReplyGetPayload<T>>| Null>;

    PostOnHashtag<T extends TwitterPost$PostOnHashtagArgs= {}>(args?: Subset<T, TwitterPost$PostOnHashtagArgs>): Prisma.PrismaPromise<Array<PostOnHashtagGetPayload<T>>| Null>;

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
   * TwitterPost.TwitterPostReply
   */
  export type TwitterPost$TwitterPostReplyArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    where?: TwitterPostReplyWhereInput
    orderBy?: Enumerable<TwitterPostReplyOrderByWithRelationInput>
    cursor?: TwitterPostReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterPostReplyScalarFieldEnum>
  }


  /**
   * TwitterPost.PostOnHashtag
   */
  export type TwitterPost$PostOnHashtagArgs = {
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
   * Model TwitterHashtag
   */


  export type AggregateTwitterHashtag = {
    _count: TwitterHashtagCountAggregateOutputType | null
    _avg: TwitterHashtagAvgAggregateOutputType | null
    _sum: TwitterHashtagSumAggregateOutputType | null
    _min: TwitterHashtagMinAggregateOutputType | null
    _max: TwitterHashtagMaxAggregateOutputType | null
  }

  export type TwitterHashtagAvgAggregateOutputType = {
    id: number | null
  }

  export type TwitterHashtagSumAggregateOutputType = {
    id: number | null
  }

  export type TwitterHashtagMinAggregateOutputType = {
    id: number | null
    message: string | null
  }

  export type TwitterHashtagMaxAggregateOutputType = {
    id: number | null
    message: string | null
  }

  export type TwitterHashtagCountAggregateOutputType = {
    id: number
    message: number
    _all: number
  }


  export type TwitterHashtagAvgAggregateInputType = {
    id?: true
  }

  export type TwitterHashtagSumAggregateInputType = {
    id?: true
  }

  export type TwitterHashtagMinAggregateInputType = {
    id?: true
    message?: true
  }

  export type TwitterHashtagMaxAggregateInputType = {
    id?: true
    message?: true
  }

  export type TwitterHashtagCountAggregateInputType = {
    id?: true
    message?: true
    _all?: true
  }

  export type TwitterHashtagAggregateArgs = {
    /**
     * Filter which TwitterHashtag to aggregate.
     */
    where?: TwitterHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterHashtags to fetch.
     */
    orderBy?: Enumerable<TwitterHashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterHashtags
    **/
    _count?: true | TwitterHashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterHashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterHashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterHashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterHashtagMaxAggregateInputType
  }

  export type GetTwitterHashtagAggregateType<T extends TwitterHashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterHashtag[P]>
      : GetScalarType<T[P], AggregateTwitterHashtag[P]>
  }




  export type TwitterHashtagGroupByArgs = {
    where?: TwitterHashtagWhereInput
    orderBy?: Enumerable<TwitterHashtagOrderByWithAggregationInput>
    by: TwitterHashtagScalarFieldEnum[]
    having?: TwitterHashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterHashtagCountAggregateInputType | true
    _avg?: TwitterHashtagAvgAggregateInputType
    _sum?: TwitterHashtagSumAggregateInputType
    _min?: TwitterHashtagMinAggregateInputType
    _max?: TwitterHashtagMaxAggregateInputType
  }


  export type TwitterHashtagGroupByOutputType = {
    id: number
    message: string
    _count: TwitterHashtagCountAggregateOutputType | null
    _avg: TwitterHashtagAvgAggregateOutputType | null
    _sum: TwitterHashtagSumAggregateOutputType | null
    _min: TwitterHashtagMinAggregateOutputType | null
    _max: TwitterHashtagMaxAggregateOutputType | null
  }

  type GetTwitterHashtagGroupByPayload<T extends TwitterHashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterHashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterHashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterHashtagGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterHashtagGroupByOutputType[P]>
        }
      >
    >


  export type TwitterHashtagSelect = {
    id?: boolean
    message?: boolean
    PostOnHashtag?: boolean | TwitterHashtag$PostOnHashtagArgs
    _count?: boolean | TwitterHashtagCountOutputTypeArgs
  }


  export type TwitterHashtagInclude = {
    PostOnHashtag?: boolean | TwitterHashtag$PostOnHashtagArgs
    _count?: boolean | TwitterHashtagCountOutputTypeArgs
  }

  export type TwitterHashtagGetPayload<S extends boolean | null | undefined | TwitterHashtagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterHashtag :
    S extends undefined ? never :
    S extends { include: any } & (TwitterHashtagArgs | TwitterHashtagFindManyArgs)
    ? TwitterHashtag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'PostOnHashtag' ? Array < PostOnHashtagGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterHashtagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterHashtagArgs | TwitterHashtagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'PostOnHashtag' ? Array < PostOnHashtagGetPayload<S['select'][P]>>  :
        P extends '_count' ? TwitterHashtagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TwitterHashtag ? TwitterHashtag[P] : never
  } 
      : TwitterHashtag


  type TwitterHashtagCountArgs = 
    Omit<TwitterHashtagFindManyArgs, 'select' | 'include'> & {
      select?: TwitterHashtagCountAggregateInputType | true
    }

  export interface TwitterHashtagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterHashtag that matches the filter.
     * @param {TwitterHashtagFindUniqueArgs} args - Arguments to find a TwitterHashtag
     * @example
     * // Get one TwitterHashtag
     * const twitterHashtag = await prisma.twitterHashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterHashtagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterHashtagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterHashtag'> extends True ? Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T>> : Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T> | null, null>

    /**
     * Find one TwitterHashtag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterHashtagFindUniqueOrThrowArgs} args - Arguments to find a TwitterHashtag
     * @example
     * // Get one TwitterHashtag
     * const twitterHashtag = await prisma.twitterHashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterHashtagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterHashtagFindUniqueOrThrowArgs>
    ): Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T>>

    /**
     * Find the first TwitterHashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashtagFindFirstArgs} args - Arguments to find a TwitterHashtag
     * @example
     * // Get one TwitterHashtag
     * const twitterHashtag = await prisma.twitterHashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterHashtagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterHashtagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterHashtag'> extends True ? Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T>> : Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T> | null, null>

    /**
     * Find the first TwitterHashtag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashtagFindFirstOrThrowArgs} args - Arguments to find a TwitterHashtag
     * @example
     * // Get one TwitterHashtag
     * const twitterHashtag = await prisma.twitterHashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterHashtagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterHashtagFindFirstOrThrowArgs>
    ): Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T>>

    /**
     * Find zero or more TwitterHashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashtagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterHashtags
     * const twitterHashtags = await prisma.twitterHashtag.findMany()
     * 
     * // Get first 10 TwitterHashtags
     * const twitterHashtags = await prisma.twitterHashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterHashtagWithIdOnly = await prisma.twitterHashtag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterHashtagFindManyArgs>(
      args?: SelectSubset<T, TwitterHashtagFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterHashtagGetPayload<T>>>

    /**
     * Create a TwitterHashtag.
     * @param {TwitterHashtagCreateArgs} args - Arguments to create a TwitterHashtag.
     * @example
     * // Create one TwitterHashtag
     * const TwitterHashtag = await prisma.twitterHashtag.create({
     *   data: {
     *     // ... data to create a TwitterHashtag
     *   }
     * })
     * 
    **/
    create<T extends TwitterHashtagCreateArgs>(
      args: SelectSubset<T, TwitterHashtagCreateArgs>
    ): Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T>>

    /**
     * Create many TwitterHashtags.
     *     @param {TwitterHashtagCreateManyArgs} args - Arguments to create many TwitterHashtags.
     *     @example
     *     // Create many TwitterHashtags
     *     const twitterHashtag = await prisma.twitterHashtag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterHashtagCreateManyArgs>(
      args?: SelectSubset<T, TwitterHashtagCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterHashtag.
     * @param {TwitterHashtagDeleteArgs} args - Arguments to delete one TwitterHashtag.
     * @example
     * // Delete one TwitterHashtag
     * const TwitterHashtag = await prisma.twitterHashtag.delete({
     *   where: {
     *     // ... filter to delete one TwitterHashtag
     *   }
     * })
     * 
    **/
    delete<T extends TwitterHashtagDeleteArgs>(
      args: SelectSubset<T, TwitterHashtagDeleteArgs>
    ): Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T>>

    /**
     * Update one TwitterHashtag.
     * @param {TwitterHashtagUpdateArgs} args - Arguments to update one TwitterHashtag.
     * @example
     * // Update one TwitterHashtag
     * const twitterHashtag = await prisma.twitterHashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterHashtagUpdateArgs>(
      args: SelectSubset<T, TwitterHashtagUpdateArgs>
    ): Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T>>

    /**
     * Delete zero or more TwitterHashtags.
     * @param {TwitterHashtagDeleteManyArgs} args - Arguments to filter TwitterHashtags to delete.
     * @example
     * // Delete a few TwitterHashtags
     * const { count } = await prisma.twitterHashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterHashtagDeleteManyArgs>(
      args?: SelectSubset<T, TwitterHashtagDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterHashtags
     * const twitterHashtag = await prisma.twitterHashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterHashtagUpdateManyArgs>(
      args: SelectSubset<T, TwitterHashtagUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterHashtag.
     * @param {TwitterHashtagUpsertArgs} args - Arguments to update or create a TwitterHashtag.
     * @example
     * // Update or create a TwitterHashtag
     * const twitterHashtag = await prisma.twitterHashtag.upsert({
     *   create: {
     *     // ... data to create a TwitterHashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterHashtag we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterHashtagUpsertArgs>(
      args: SelectSubset<T, TwitterHashtagUpsertArgs>
    ): Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T>>

    /**
     * Count the number of TwitterHashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashtagCountArgs} args - Arguments to filter TwitterHashtags to count.
     * @example
     * // Count the number of TwitterHashtags
     * const count = await prisma.twitterHashtag.count({
     *   where: {
     *     // ... the filter for the TwitterHashtags we want to count
     *   }
     * })
    **/
    count<T extends TwitterHashtagCountArgs>(
      args?: Subset<T, TwitterHashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterHashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterHashtagAggregateArgs>(args: Subset<T, TwitterHashtagAggregateArgs>): Prisma.PrismaPromise<GetTwitterHashtagAggregateType<T>>

    /**
     * Group by TwitterHashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterHashtagGroupByArgs} args - Group by arguments.
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
      T extends TwitterHashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterHashtagGroupByArgs['orderBy'] }
        : { orderBy?: TwitterHashtagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterHashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterHashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterHashtagClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    PostOnHashtag<T extends TwitterHashtag$PostOnHashtagArgs= {}>(args?: Subset<T, TwitterHashtag$PostOnHashtagArgs>): Prisma.PrismaPromise<Array<PostOnHashtagGetPayload<T>>| Null>;

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
   * TwitterHashtag base type for findUnique actions
   */
  export type TwitterHashtagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * Filter, which TwitterHashtag to fetch.
     */
    where: TwitterHashtagWhereUniqueInput
  }

  /**
   * TwitterHashtag findUnique
   */
  export interface TwitterHashtagFindUniqueArgs extends TwitterHashtagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterHashtag findUniqueOrThrow
   */
  export type TwitterHashtagFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * Filter, which TwitterHashtag to fetch.
     */
    where: TwitterHashtagWhereUniqueInput
  }


  /**
   * TwitterHashtag base type for findFirst actions
   */
  export type TwitterHashtagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * Filter, which TwitterHashtag to fetch.
     */
    where?: TwitterHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterHashtags to fetch.
     */
    orderBy?: Enumerable<TwitterHashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterHashtags.
     */
    cursor?: TwitterHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterHashtags.
     */
    distinct?: Enumerable<TwitterHashtagScalarFieldEnum>
  }

  /**
   * TwitterHashtag findFirst
   */
  export interface TwitterHashtagFindFirstArgs extends TwitterHashtagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterHashtag findFirstOrThrow
   */
  export type TwitterHashtagFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * Filter, which TwitterHashtag to fetch.
     */
    where?: TwitterHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterHashtags to fetch.
     */
    orderBy?: Enumerable<TwitterHashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterHashtags.
     */
    cursor?: TwitterHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterHashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterHashtags.
     */
    distinct?: Enumerable<TwitterHashtagScalarFieldEnum>
  }


  /**
   * TwitterHashtag findMany
   */
  export type TwitterHashtagFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * Filter, which TwitterHashtags to fetch.
     */
    where?: TwitterHashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterHashtags to fetch.
     */
    orderBy?: Enumerable<TwitterHashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterHashtags.
     */
    cursor?: TwitterHashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterHashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterHashtags.
     */
    skip?: number
    distinct?: Enumerable<TwitterHashtagScalarFieldEnum>
  }


  /**
   * TwitterHashtag create
   */
  export type TwitterHashtagCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * The data needed to create a TwitterHashtag.
     */
    data: XOR<TwitterHashtagCreateInput, TwitterHashtagUncheckedCreateInput>
  }


  /**
   * TwitterHashtag createMany
   */
  export type TwitterHashtagCreateManyArgs = {
    /**
     * The data used to create many TwitterHashtags.
     */
    data: Enumerable<TwitterHashtagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterHashtag update
   */
  export type TwitterHashtagUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * The data needed to update a TwitterHashtag.
     */
    data: XOR<TwitterHashtagUpdateInput, TwitterHashtagUncheckedUpdateInput>
    /**
     * Choose, which TwitterHashtag to update.
     */
    where: TwitterHashtagWhereUniqueInput
  }


  /**
   * TwitterHashtag updateMany
   */
  export type TwitterHashtagUpdateManyArgs = {
    /**
     * The data used to update TwitterHashtags.
     */
    data: XOR<TwitterHashtagUpdateManyMutationInput, TwitterHashtagUncheckedUpdateManyInput>
    /**
     * Filter which TwitterHashtags to update
     */
    where?: TwitterHashtagWhereInput
  }


  /**
   * TwitterHashtag upsert
   */
  export type TwitterHashtagUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * The filter to search for the TwitterHashtag to update in case it exists.
     */
    where: TwitterHashtagWhereUniqueInput
    /**
     * In case the TwitterHashtag found by the `where` argument doesn't exist, create a new TwitterHashtag with this data.
     */
    create: XOR<TwitterHashtagCreateInput, TwitterHashtagUncheckedCreateInput>
    /**
     * In case the TwitterHashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterHashtagUpdateInput, TwitterHashtagUncheckedUpdateInput>
  }


  /**
   * TwitterHashtag delete
   */
  export type TwitterHashtagDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    /**
     * Filter which TwitterHashtag to delete.
     */
    where: TwitterHashtagWhereUniqueInput
  }


  /**
   * TwitterHashtag deleteMany
   */
  export type TwitterHashtagDeleteManyArgs = {
    /**
     * Filter which TwitterHashtags to delete
     */
    where?: TwitterHashtagWhereInput
  }


  /**
   * TwitterHashtag.PostOnHashtag
   */
  export type TwitterHashtag$PostOnHashtagArgs = {
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
   * TwitterHashtag without action
   */
  export type TwitterHashtagArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
  }



  /**
   * Model TwitterDirectMessage
   */


  export type AggregateTwitterDirectMessage = {
    _count: TwitterDirectMessageCountAggregateOutputType | null
    _avg: TwitterDirectMessageAvgAggregateOutputType | null
    _sum: TwitterDirectMessageSumAggregateOutputType | null
    _min: TwitterDirectMessageMinAggregateOutputType | null
    _max: TwitterDirectMessageMaxAggregateOutputType | null
  }

  export type TwitterDirectMessageAvgAggregateOutputType = {
    id: number | null
  }

  export type TwitterDirectMessageSumAggregateOutputType = {
    id: number | null
  }

  export type TwitterDirectMessageMinAggregateOutputType = {
    id: number | null
    from: string | null
    to: string | null
    message: string | null
    createAt: Date | null
  }

  export type TwitterDirectMessageMaxAggregateOutputType = {
    id: number | null
    from: string | null
    to: string | null
    message: string | null
    createAt: Date | null
  }

  export type TwitterDirectMessageCountAggregateOutputType = {
    id: number
    from: number
    to: number
    message: number
    createAt: number
    _all: number
  }


  export type TwitterDirectMessageAvgAggregateInputType = {
    id?: true
  }

  export type TwitterDirectMessageSumAggregateInputType = {
    id?: true
  }

  export type TwitterDirectMessageMinAggregateInputType = {
    id?: true
    from?: true
    to?: true
    message?: true
    createAt?: true
  }

  export type TwitterDirectMessageMaxAggregateInputType = {
    id?: true
    from?: true
    to?: true
    message?: true
    createAt?: true
  }

  export type TwitterDirectMessageCountAggregateInputType = {
    id?: true
    from?: true
    to?: true
    message?: true
    createAt?: true
    _all?: true
  }

  export type TwitterDirectMessageAggregateArgs = {
    /**
     * Filter which TwitterDirectMessage to aggregate.
     */
    where?: TwitterDirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterDirectMessages to fetch.
     */
    orderBy?: Enumerable<TwitterDirectMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterDirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterDirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterDirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterDirectMessages
    **/
    _count?: true | TwitterDirectMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterDirectMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterDirectMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterDirectMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterDirectMessageMaxAggregateInputType
  }

  export type GetTwitterDirectMessageAggregateType<T extends TwitterDirectMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterDirectMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterDirectMessage[P]>
      : GetScalarType<T[P], AggregateTwitterDirectMessage[P]>
  }




  export type TwitterDirectMessageGroupByArgs = {
    where?: TwitterDirectMessageWhereInput
    orderBy?: Enumerable<TwitterDirectMessageOrderByWithAggregationInput>
    by: TwitterDirectMessageScalarFieldEnum[]
    having?: TwitterDirectMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterDirectMessageCountAggregateInputType | true
    _avg?: TwitterDirectMessageAvgAggregateInputType
    _sum?: TwitterDirectMessageSumAggregateInputType
    _min?: TwitterDirectMessageMinAggregateInputType
    _max?: TwitterDirectMessageMaxAggregateInputType
  }


  export type TwitterDirectMessageGroupByOutputType = {
    id: number
    from: string
    to: string
    message: string
    createAt: Date
    _count: TwitterDirectMessageCountAggregateOutputType | null
    _avg: TwitterDirectMessageAvgAggregateOutputType | null
    _sum: TwitterDirectMessageSumAggregateOutputType | null
    _min: TwitterDirectMessageMinAggregateOutputType | null
    _max: TwitterDirectMessageMaxAggregateOutputType | null
  }

  type GetTwitterDirectMessageGroupByPayload<T extends TwitterDirectMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterDirectMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterDirectMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterDirectMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterDirectMessageGroupByOutputType[P]>
        }
      >
    >


  export type TwitterDirectMessageSelect = {
    id?: boolean
    from?: boolean
    to?: boolean
    message?: boolean
    createAt?: boolean
    TwitterUser?: boolean | TwitterDirectMessage$TwitterUserArgs
    _count?: boolean | TwitterDirectMessageCountOutputTypeArgs
  }


  export type TwitterDirectMessageInclude = {
    TwitterUser?: boolean | TwitterDirectMessage$TwitterUserArgs
    _count?: boolean | TwitterDirectMessageCountOutputTypeArgs
  }

  export type TwitterDirectMessageGetPayload<S extends boolean | null | undefined | TwitterDirectMessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterDirectMessage :
    S extends undefined ? never :
    S extends { include: any } & (TwitterDirectMessageArgs | TwitterDirectMessageFindManyArgs)
    ? TwitterDirectMessage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'TwitterUser' ? Array < TwitterUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterDirectMessageCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterDirectMessageArgs | TwitterDirectMessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'TwitterUser' ? Array < TwitterUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? TwitterDirectMessageCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TwitterDirectMessage ? TwitterDirectMessage[P] : never
  } 
      : TwitterDirectMessage


  type TwitterDirectMessageCountArgs = 
    Omit<TwitterDirectMessageFindManyArgs, 'select' | 'include'> & {
      select?: TwitterDirectMessageCountAggregateInputType | true
    }

  export interface TwitterDirectMessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterDirectMessage that matches the filter.
     * @param {TwitterDirectMessageFindUniqueArgs} args - Arguments to find a TwitterDirectMessage
     * @example
     * // Get one TwitterDirectMessage
     * const twitterDirectMessage = await prisma.twitterDirectMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterDirectMessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterDirectMessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterDirectMessage'> extends True ? Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T>> : Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T> | null, null>

    /**
     * Find one TwitterDirectMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterDirectMessageFindUniqueOrThrowArgs} args - Arguments to find a TwitterDirectMessage
     * @example
     * // Get one TwitterDirectMessage
     * const twitterDirectMessage = await prisma.twitterDirectMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterDirectMessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterDirectMessageFindUniqueOrThrowArgs>
    ): Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T>>

    /**
     * Find the first TwitterDirectMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDirectMessageFindFirstArgs} args - Arguments to find a TwitterDirectMessage
     * @example
     * // Get one TwitterDirectMessage
     * const twitterDirectMessage = await prisma.twitterDirectMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterDirectMessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterDirectMessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterDirectMessage'> extends True ? Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T>> : Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T> | null, null>

    /**
     * Find the first TwitterDirectMessage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDirectMessageFindFirstOrThrowArgs} args - Arguments to find a TwitterDirectMessage
     * @example
     * // Get one TwitterDirectMessage
     * const twitterDirectMessage = await prisma.twitterDirectMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterDirectMessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterDirectMessageFindFirstOrThrowArgs>
    ): Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T>>

    /**
     * Find zero or more TwitterDirectMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDirectMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterDirectMessages
     * const twitterDirectMessages = await prisma.twitterDirectMessage.findMany()
     * 
     * // Get first 10 TwitterDirectMessages
     * const twitterDirectMessages = await prisma.twitterDirectMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterDirectMessageWithIdOnly = await prisma.twitterDirectMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterDirectMessageFindManyArgs>(
      args?: SelectSubset<T, TwitterDirectMessageFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterDirectMessageGetPayload<T>>>

    /**
     * Create a TwitterDirectMessage.
     * @param {TwitterDirectMessageCreateArgs} args - Arguments to create a TwitterDirectMessage.
     * @example
     * // Create one TwitterDirectMessage
     * const TwitterDirectMessage = await prisma.twitterDirectMessage.create({
     *   data: {
     *     // ... data to create a TwitterDirectMessage
     *   }
     * })
     * 
    **/
    create<T extends TwitterDirectMessageCreateArgs>(
      args: SelectSubset<T, TwitterDirectMessageCreateArgs>
    ): Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T>>

    /**
     * Create many TwitterDirectMessages.
     *     @param {TwitterDirectMessageCreateManyArgs} args - Arguments to create many TwitterDirectMessages.
     *     @example
     *     // Create many TwitterDirectMessages
     *     const twitterDirectMessage = await prisma.twitterDirectMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterDirectMessageCreateManyArgs>(
      args?: SelectSubset<T, TwitterDirectMessageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterDirectMessage.
     * @param {TwitterDirectMessageDeleteArgs} args - Arguments to delete one TwitterDirectMessage.
     * @example
     * // Delete one TwitterDirectMessage
     * const TwitterDirectMessage = await prisma.twitterDirectMessage.delete({
     *   where: {
     *     // ... filter to delete one TwitterDirectMessage
     *   }
     * })
     * 
    **/
    delete<T extends TwitterDirectMessageDeleteArgs>(
      args: SelectSubset<T, TwitterDirectMessageDeleteArgs>
    ): Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T>>

    /**
     * Update one TwitterDirectMessage.
     * @param {TwitterDirectMessageUpdateArgs} args - Arguments to update one TwitterDirectMessage.
     * @example
     * // Update one TwitterDirectMessage
     * const twitterDirectMessage = await prisma.twitterDirectMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterDirectMessageUpdateArgs>(
      args: SelectSubset<T, TwitterDirectMessageUpdateArgs>
    ): Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T>>

    /**
     * Delete zero or more TwitterDirectMessages.
     * @param {TwitterDirectMessageDeleteManyArgs} args - Arguments to filter TwitterDirectMessages to delete.
     * @example
     * // Delete a few TwitterDirectMessages
     * const { count } = await prisma.twitterDirectMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterDirectMessageDeleteManyArgs>(
      args?: SelectSubset<T, TwitterDirectMessageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterDirectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDirectMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterDirectMessages
     * const twitterDirectMessage = await prisma.twitterDirectMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterDirectMessageUpdateManyArgs>(
      args: SelectSubset<T, TwitterDirectMessageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterDirectMessage.
     * @param {TwitterDirectMessageUpsertArgs} args - Arguments to update or create a TwitterDirectMessage.
     * @example
     * // Update or create a TwitterDirectMessage
     * const twitterDirectMessage = await prisma.twitterDirectMessage.upsert({
     *   create: {
     *     // ... data to create a TwitterDirectMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterDirectMessage we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterDirectMessageUpsertArgs>(
      args: SelectSubset<T, TwitterDirectMessageUpsertArgs>
    ): Prisma__TwitterDirectMessageClient<TwitterDirectMessageGetPayload<T>>

    /**
     * Count the number of TwitterDirectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDirectMessageCountArgs} args - Arguments to filter TwitterDirectMessages to count.
     * @example
     * // Count the number of TwitterDirectMessages
     * const count = await prisma.twitterDirectMessage.count({
     *   where: {
     *     // ... the filter for the TwitterDirectMessages we want to count
     *   }
     * })
    **/
    count<T extends TwitterDirectMessageCountArgs>(
      args?: Subset<T, TwitterDirectMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterDirectMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterDirectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDirectMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterDirectMessageAggregateArgs>(args: Subset<T, TwitterDirectMessageAggregateArgs>): Prisma.PrismaPromise<GetTwitterDirectMessageAggregateType<T>>

    /**
     * Group by TwitterDirectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterDirectMessageGroupByArgs} args - Group by arguments.
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
      T extends TwitterDirectMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterDirectMessageGroupByArgs['orderBy'] }
        : { orderBy?: TwitterDirectMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterDirectMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterDirectMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterDirectMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterDirectMessageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    TwitterUser<T extends TwitterDirectMessage$TwitterUserArgs= {}>(args?: Subset<T, TwitterDirectMessage$TwitterUserArgs>): Prisma.PrismaPromise<Array<TwitterUserGetPayload<T>>| Null>;

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
   * TwitterDirectMessage base type for findUnique actions
   */
  export type TwitterDirectMessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * Filter, which TwitterDirectMessage to fetch.
     */
    where: TwitterDirectMessageWhereUniqueInput
  }

  /**
   * TwitterDirectMessage findUnique
   */
  export interface TwitterDirectMessageFindUniqueArgs extends TwitterDirectMessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterDirectMessage findUniqueOrThrow
   */
  export type TwitterDirectMessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * Filter, which TwitterDirectMessage to fetch.
     */
    where: TwitterDirectMessageWhereUniqueInput
  }


  /**
   * TwitterDirectMessage base type for findFirst actions
   */
  export type TwitterDirectMessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * Filter, which TwitterDirectMessage to fetch.
     */
    where?: TwitterDirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterDirectMessages to fetch.
     */
    orderBy?: Enumerable<TwitterDirectMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterDirectMessages.
     */
    cursor?: TwitterDirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterDirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterDirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterDirectMessages.
     */
    distinct?: Enumerable<TwitterDirectMessageScalarFieldEnum>
  }

  /**
   * TwitterDirectMessage findFirst
   */
  export interface TwitterDirectMessageFindFirstArgs extends TwitterDirectMessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterDirectMessage findFirstOrThrow
   */
  export type TwitterDirectMessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * Filter, which TwitterDirectMessage to fetch.
     */
    where?: TwitterDirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterDirectMessages to fetch.
     */
    orderBy?: Enumerable<TwitterDirectMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterDirectMessages.
     */
    cursor?: TwitterDirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterDirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterDirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterDirectMessages.
     */
    distinct?: Enumerable<TwitterDirectMessageScalarFieldEnum>
  }


  /**
   * TwitterDirectMessage findMany
   */
  export type TwitterDirectMessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * Filter, which TwitterDirectMessages to fetch.
     */
    where?: TwitterDirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterDirectMessages to fetch.
     */
    orderBy?: Enumerable<TwitterDirectMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterDirectMessages.
     */
    cursor?: TwitterDirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterDirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterDirectMessages.
     */
    skip?: number
    distinct?: Enumerable<TwitterDirectMessageScalarFieldEnum>
  }


  /**
   * TwitterDirectMessage create
   */
  export type TwitterDirectMessageCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * The data needed to create a TwitterDirectMessage.
     */
    data: XOR<TwitterDirectMessageCreateInput, TwitterDirectMessageUncheckedCreateInput>
  }


  /**
   * TwitterDirectMessage createMany
   */
  export type TwitterDirectMessageCreateManyArgs = {
    /**
     * The data used to create many TwitterDirectMessages.
     */
    data: Enumerable<TwitterDirectMessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterDirectMessage update
   */
  export type TwitterDirectMessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * The data needed to update a TwitterDirectMessage.
     */
    data: XOR<TwitterDirectMessageUpdateInput, TwitterDirectMessageUncheckedUpdateInput>
    /**
     * Choose, which TwitterDirectMessage to update.
     */
    where: TwitterDirectMessageWhereUniqueInput
  }


  /**
   * TwitterDirectMessage updateMany
   */
  export type TwitterDirectMessageUpdateManyArgs = {
    /**
     * The data used to update TwitterDirectMessages.
     */
    data: XOR<TwitterDirectMessageUpdateManyMutationInput, TwitterDirectMessageUncheckedUpdateManyInput>
    /**
     * Filter which TwitterDirectMessages to update
     */
    where?: TwitterDirectMessageWhereInput
  }


  /**
   * TwitterDirectMessage upsert
   */
  export type TwitterDirectMessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * The filter to search for the TwitterDirectMessage to update in case it exists.
     */
    where: TwitterDirectMessageWhereUniqueInput
    /**
     * In case the TwitterDirectMessage found by the `where` argument doesn't exist, create a new TwitterDirectMessage with this data.
     */
    create: XOR<TwitterDirectMessageCreateInput, TwitterDirectMessageUncheckedCreateInput>
    /**
     * In case the TwitterDirectMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterDirectMessageUpdateInput, TwitterDirectMessageUncheckedUpdateInput>
  }


  /**
   * TwitterDirectMessage delete
   */
  export type TwitterDirectMessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    /**
     * Filter which TwitterDirectMessage to delete.
     */
    where: TwitterDirectMessageWhereUniqueInput
  }


  /**
   * TwitterDirectMessage deleteMany
   */
  export type TwitterDirectMessageDeleteManyArgs = {
    /**
     * Filter which TwitterDirectMessages to delete
     */
    where?: TwitterDirectMessageWhereInput
  }


  /**
   * TwitterDirectMessage.TwitterUser
   */
  export type TwitterDirectMessage$TwitterUserArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    where?: TwitterUserWhereInput
    orderBy?: Enumerable<TwitterUserOrderByWithRelationInput>
    cursor?: TwitterUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterUserScalarFieldEnum>
  }


  /**
   * TwitterDirectMessage without action
   */
  export type TwitterDirectMessageArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
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
  }

  export type TwitterUserRelationSumAggregateOutputType = {
    id: number | null
  }

  export type TwitterUserRelationMinAggregateOutputType = {
    id: number | null
    follower: string | null
    following: string | null
  }

  export type TwitterUserRelationMaxAggregateOutputType = {
    id: number | null
    follower: string | null
    following: string | null
  }

  export type TwitterUserRelationCountAggregateOutputType = {
    id: number
    follower: number
    following: number
    _all: number
  }


  export type TwitterUserRelationAvgAggregateInputType = {
    id?: true
  }

  export type TwitterUserRelationSumAggregateInputType = {
    id?: true
  }

  export type TwitterUserRelationMinAggregateInputType = {
    id?: true
    follower?: true
    following?: true
  }

  export type TwitterUserRelationMaxAggregateInputType = {
    id?: true
    follower?: true
    following?: true
  }

  export type TwitterUserRelationCountAggregateInputType = {
    id?: true
    follower?: true
    following?: true
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
    follower: string
    following: string
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
    follower?: boolean
    following?: boolean
    TwitterUser?: boolean | TwitterUserRelation$TwitterUserArgs
    _count?: boolean | TwitterUserRelationCountOutputTypeArgs
  }


  export type TwitterUserRelationInclude = {
    TwitterUser?: boolean | TwitterUserRelation$TwitterUserArgs
    _count?: boolean | TwitterUserRelationCountOutputTypeArgs
  }

  export type TwitterUserRelationGetPayload<S extends boolean | null | undefined | TwitterUserRelationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterUserRelation :
    S extends undefined ? never :
    S extends { include: any } & (TwitterUserRelationArgs | TwitterUserRelationFindManyArgs)
    ? TwitterUserRelation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'TwitterUser' ? Array < TwitterUserGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterUserRelationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterUserRelationArgs | TwitterUserRelationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'TwitterUser' ? Array < TwitterUserGetPayload<S['select'][P]>>  :
        P extends '_count' ? TwitterUserRelationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TwitterUserRelation ? TwitterUserRelation[P] : never
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

    TwitterUser<T extends TwitterUserRelation$TwitterUserArgs= {}>(args?: Subset<T, TwitterUserRelation$TwitterUserArgs>): Prisma.PrismaPromise<Array<TwitterUserGetPayload<T>>| Null>;

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
   * TwitterUserRelation.TwitterUser
   */
  export type TwitterUserRelation$TwitterUserArgs = {
    /**
     * Select specific fields to fetch from the TwitterUser
     */
    select?: TwitterUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterUserInclude | null
    where?: TwitterUserWhereInput
    orderBy?: Enumerable<TwitterUserOrderByWithRelationInput>
    cursor?: TwitterUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterUserScalarFieldEnum>
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
   * Model TwitterPostReply
   */


  export type AggregateTwitterPostReply = {
    _count: TwitterPostReplyCountAggregateOutputType | null
    _avg: TwitterPostReplyAvgAggregateOutputType | null
    _sum: TwitterPostReplySumAggregateOutputType | null
    _min: TwitterPostReplyMinAggregateOutputType | null
    _max: TwitterPostReplyMaxAggregateOutputType | null
  }

  export type TwitterPostReplyAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type TwitterPostReplySumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type TwitterPostReplyMinAggregateOutputType = {
    id: number | null
    message: string | null
    postId: number | null
    userId: number | null
    createAt: Date | null
  }

  export type TwitterPostReplyMaxAggregateOutputType = {
    id: number | null
    message: string | null
    postId: number | null
    userId: number | null
    createAt: Date | null
  }

  export type TwitterPostReplyCountAggregateOutputType = {
    id: number
    message: number
    postId: number
    userId: number
    createAt: number
    _all: number
  }


  export type TwitterPostReplyAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type TwitterPostReplySumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type TwitterPostReplyMinAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    userId?: true
    createAt?: true
  }

  export type TwitterPostReplyMaxAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    userId?: true
    createAt?: true
  }

  export type TwitterPostReplyCountAggregateInputType = {
    id?: true
    message?: true
    postId?: true
    userId?: true
    createAt?: true
    _all?: true
  }

  export type TwitterPostReplyAggregateArgs = {
    /**
     * Filter which TwitterPostReply to aggregate.
     */
    where?: TwitterPostReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterPostReplies to fetch.
     */
    orderBy?: Enumerable<TwitterPostReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterPostReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterPostReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterPostReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterPostReplies
    **/
    _count?: true | TwitterPostReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterPostReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterPostReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterPostReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterPostReplyMaxAggregateInputType
  }

  export type GetTwitterPostReplyAggregateType<T extends TwitterPostReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterPostReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterPostReply[P]>
      : GetScalarType<T[P], AggregateTwitterPostReply[P]>
  }




  export type TwitterPostReplyGroupByArgs = {
    where?: TwitterPostReplyWhereInput
    orderBy?: Enumerable<TwitterPostReplyOrderByWithAggregationInput>
    by: TwitterPostReplyScalarFieldEnum[]
    having?: TwitterPostReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterPostReplyCountAggregateInputType | true
    _avg?: TwitterPostReplyAvgAggregateInputType
    _sum?: TwitterPostReplySumAggregateInputType
    _min?: TwitterPostReplyMinAggregateInputType
    _max?: TwitterPostReplyMaxAggregateInputType
  }


  export type TwitterPostReplyGroupByOutputType = {
    id: number
    message: string
    postId: number
    userId: number
    createAt: Date
    _count: TwitterPostReplyCountAggregateOutputType | null
    _avg: TwitterPostReplyAvgAggregateOutputType | null
    _sum: TwitterPostReplySumAggregateOutputType | null
    _min: TwitterPostReplyMinAggregateOutputType | null
    _max: TwitterPostReplyMaxAggregateOutputType | null
  }

  type GetTwitterPostReplyGroupByPayload<T extends TwitterPostReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterPostReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterPostReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterPostReplyGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterPostReplyGroupByOutputType[P]>
        }
      >
    >


  export type TwitterPostReplySelect = {
    id?: boolean
    message?: boolean
    post?: boolean | TwitterPostArgs
    postId?: boolean
    user?: boolean | TwitterUserArgs
    userId?: boolean
    createAt?: boolean
  }


  export type TwitterPostReplyInclude = {
    post?: boolean | TwitterPostArgs
    user?: boolean | TwitterUserArgs
  }

  export type TwitterPostReplyGetPayload<S extends boolean | null | undefined | TwitterPostReplyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterPostReply :
    S extends undefined ? never :
    S extends { include: any } & (TwitterPostReplyArgs | TwitterPostReplyFindManyArgs)
    ? TwitterPostReply  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? TwitterPostGetPayload<S['include'][P]> :
        P extends 'user' ? TwitterUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterPostReplyArgs | TwitterPostReplyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? TwitterPostGetPayload<S['select'][P]> :
        P extends 'user' ? TwitterUserGetPayload<S['select'][P]> :  P extends keyof TwitterPostReply ? TwitterPostReply[P] : never
  } 
      : TwitterPostReply


  type TwitterPostReplyCountArgs = 
    Omit<TwitterPostReplyFindManyArgs, 'select' | 'include'> & {
      select?: TwitterPostReplyCountAggregateInputType | true
    }

  export interface TwitterPostReplyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterPostReply that matches the filter.
     * @param {TwitterPostReplyFindUniqueArgs} args - Arguments to find a TwitterPostReply
     * @example
     * // Get one TwitterPostReply
     * const twitterPostReply = await prisma.twitterPostReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterPostReplyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterPostReplyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterPostReply'> extends True ? Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T>> : Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T> | null, null>

    /**
     * Find one TwitterPostReply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterPostReplyFindUniqueOrThrowArgs} args - Arguments to find a TwitterPostReply
     * @example
     * // Get one TwitterPostReply
     * const twitterPostReply = await prisma.twitterPostReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterPostReplyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterPostReplyFindUniqueOrThrowArgs>
    ): Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T>>

    /**
     * Find the first TwitterPostReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostReplyFindFirstArgs} args - Arguments to find a TwitterPostReply
     * @example
     * // Get one TwitterPostReply
     * const twitterPostReply = await prisma.twitterPostReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterPostReplyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterPostReplyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterPostReply'> extends True ? Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T>> : Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T> | null, null>

    /**
     * Find the first TwitterPostReply that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostReplyFindFirstOrThrowArgs} args - Arguments to find a TwitterPostReply
     * @example
     * // Get one TwitterPostReply
     * const twitterPostReply = await prisma.twitterPostReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterPostReplyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterPostReplyFindFirstOrThrowArgs>
    ): Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T>>

    /**
     * Find zero or more TwitterPostReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterPostReplies
     * const twitterPostReplies = await prisma.twitterPostReply.findMany()
     * 
     * // Get first 10 TwitterPostReplies
     * const twitterPostReplies = await prisma.twitterPostReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterPostReplyWithIdOnly = await prisma.twitterPostReply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterPostReplyFindManyArgs>(
      args?: SelectSubset<T, TwitterPostReplyFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterPostReplyGetPayload<T>>>

    /**
     * Create a TwitterPostReply.
     * @param {TwitterPostReplyCreateArgs} args - Arguments to create a TwitterPostReply.
     * @example
     * // Create one TwitterPostReply
     * const TwitterPostReply = await prisma.twitterPostReply.create({
     *   data: {
     *     // ... data to create a TwitterPostReply
     *   }
     * })
     * 
    **/
    create<T extends TwitterPostReplyCreateArgs>(
      args: SelectSubset<T, TwitterPostReplyCreateArgs>
    ): Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T>>

    /**
     * Create many TwitterPostReplies.
     *     @param {TwitterPostReplyCreateManyArgs} args - Arguments to create many TwitterPostReplies.
     *     @example
     *     // Create many TwitterPostReplies
     *     const twitterPostReply = await prisma.twitterPostReply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterPostReplyCreateManyArgs>(
      args?: SelectSubset<T, TwitterPostReplyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterPostReply.
     * @param {TwitterPostReplyDeleteArgs} args - Arguments to delete one TwitterPostReply.
     * @example
     * // Delete one TwitterPostReply
     * const TwitterPostReply = await prisma.twitterPostReply.delete({
     *   where: {
     *     // ... filter to delete one TwitterPostReply
     *   }
     * })
     * 
    **/
    delete<T extends TwitterPostReplyDeleteArgs>(
      args: SelectSubset<T, TwitterPostReplyDeleteArgs>
    ): Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T>>

    /**
     * Update one TwitterPostReply.
     * @param {TwitterPostReplyUpdateArgs} args - Arguments to update one TwitterPostReply.
     * @example
     * // Update one TwitterPostReply
     * const twitterPostReply = await prisma.twitterPostReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterPostReplyUpdateArgs>(
      args: SelectSubset<T, TwitterPostReplyUpdateArgs>
    ): Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T>>

    /**
     * Delete zero or more TwitterPostReplies.
     * @param {TwitterPostReplyDeleteManyArgs} args - Arguments to filter TwitterPostReplies to delete.
     * @example
     * // Delete a few TwitterPostReplies
     * const { count } = await prisma.twitterPostReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterPostReplyDeleteManyArgs>(
      args?: SelectSubset<T, TwitterPostReplyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterPostReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterPostReplies
     * const twitterPostReply = await prisma.twitterPostReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterPostReplyUpdateManyArgs>(
      args: SelectSubset<T, TwitterPostReplyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterPostReply.
     * @param {TwitterPostReplyUpsertArgs} args - Arguments to update or create a TwitterPostReply.
     * @example
     * // Update or create a TwitterPostReply
     * const twitterPostReply = await prisma.twitterPostReply.upsert({
     *   create: {
     *     // ... data to create a TwitterPostReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterPostReply we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterPostReplyUpsertArgs>(
      args: SelectSubset<T, TwitterPostReplyUpsertArgs>
    ): Prisma__TwitterPostReplyClient<TwitterPostReplyGetPayload<T>>

    /**
     * Count the number of TwitterPostReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostReplyCountArgs} args - Arguments to filter TwitterPostReplies to count.
     * @example
     * // Count the number of TwitterPostReplies
     * const count = await prisma.twitterPostReply.count({
     *   where: {
     *     // ... the filter for the TwitterPostReplies we want to count
     *   }
     * })
    **/
    count<T extends TwitterPostReplyCountArgs>(
      args?: Subset<T, TwitterPostReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterPostReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterPostReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterPostReplyAggregateArgs>(args: Subset<T, TwitterPostReplyAggregateArgs>): Prisma.PrismaPromise<GetTwitterPostReplyAggregateType<T>>

    /**
     * Group by TwitterPostReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterPostReplyGroupByArgs} args - Group by arguments.
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
      T extends TwitterPostReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterPostReplyGroupByArgs['orderBy'] }
        : { orderBy?: TwitterPostReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterPostReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterPostReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterPostReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterPostReplyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * TwitterPostReply base type for findUnique actions
   */
  export type TwitterPostReplyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * Filter, which TwitterPostReply to fetch.
     */
    where: TwitterPostReplyWhereUniqueInput
  }

  /**
   * TwitterPostReply findUnique
   */
  export interface TwitterPostReplyFindUniqueArgs extends TwitterPostReplyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterPostReply findUniqueOrThrow
   */
  export type TwitterPostReplyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * Filter, which TwitterPostReply to fetch.
     */
    where: TwitterPostReplyWhereUniqueInput
  }


  /**
   * TwitterPostReply base type for findFirst actions
   */
  export type TwitterPostReplyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * Filter, which TwitterPostReply to fetch.
     */
    where?: TwitterPostReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterPostReplies to fetch.
     */
    orderBy?: Enumerable<TwitterPostReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterPostReplies.
     */
    cursor?: TwitterPostReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterPostReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterPostReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterPostReplies.
     */
    distinct?: Enumerable<TwitterPostReplyScalarFieldEnum>
  }

  /**
   * TwitterPostReply findFirst
   */
  export interface TwitterPostReplyFindFirstArgs extends TwitterPostReplyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterPostReply findFirstOrThrow
   */
  export type TwitterPostReplyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * Filter, which TwitterPostReply to fetch.
     */
    where?: TwitterPostReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterPostReplies to fetch.
     */
    orderBy?: Enumerable<TwitterPostReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterPostReplies.
     */
    cursor?: TwitterPostReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterPostReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterPostReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterPostReplies.
     */
    distinct?: Enumerable<TwitterPostReplyScalarFieldEnum>
  }


  /**
   * TwitterPostReply findMany
   */
  export type TwitterPostReplyFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * Filter, which TwitterPostReplies to fetch.
     */
    where?: TwitterPostReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterPostReplies to fetch.
     */
    orderBy?: Enumerable<TwitterPostReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterPostReplies.
     */
    cursor?: TwitterPostReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterPostReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterPostReplies.
     */
    skip?: number
    distinct?: Enumerable<TwitterPostReplyScalarFieldEnum>
  }


  /**
   * TwitterPostReply create
   */
  export type TwitterPostReplyCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * The data needed to create a TwitterPostReply.
     */
    data: XOR<TwitterPostReplyCreateInput, TwitterPostReplyUncheckedCreateInput>
  }


  /**
   * TwitterPostReply createMany
   */
  export type TwitterPostReplyCreateManyArgs = {
    /**
     * The data used to create many TwitterPostReplies.
     */
    data: Enumerable<TwitterPostReplyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterPostReply update
   */
  export type TwitterPostReplyUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * The data needed to update a TwitterPostReply.
     */
    data: XOR<TwitterPostReplyUpdateInput, TwitterPostReplyUncheckedUpdateInput>
    /**
     * Choose, which TwitterPostReply to update.
     */
    where: TwitterPostReplyWhereUniqueInput
  }


  /**
   * TwitterPostReply updateMany
   */
  export type TwitterPostReplyUpdateManyArgs = {
    /**
     * The data used to update TwitterPostReplies.
     */
    data: XOR<TwitterPostReplyUpdateManyMutationInput, TwitterPostReplyUncheckedUpdateManyInput>
    /**
     * Filter which TwitterPostReplies to update
     */
    where?: TwitterPostReplyWhereInput
  }


  /**
   * TwitterPostReply upsert
   */
  export type TwitterPostReplyUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * The filter to search for the TwitterPostReply to update in case it exists.
     */
    where: TwitterPostReplyWhereUniqueInput
    /**
     * In case the TwitterPostReply found by the `where` argument doesn't exist, create a new TwitterPostReply with this data.
     */
    create: XOR<TwitterPostReplyCreateInput, TwitterPostReplyUncheckedCreateInput>
    /**
     * In case the TwitterPostReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterPostReplyUpdateInput, TwitterPostReplyUncheckedUpdateInput>
  }


  /**
   * TwitterPostReply delete
   */
  export type TwitterPostReplyDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
    /**
     * Filter which TwitterPostReply to delete.
     */
    where: TwitterPostReplyWhereUniqueInput
  }


  /**
   * TwitterPostReply deleteMany
   */
  export type TwitterPostReplyDeleteManyArgs = {
    /**
     * Filter which TwitterPostReplies to delete
     */
    where?: TwitterPostReplyWhereInput
  }


  /**
   * TwitterPostReply without action
   */
  export type TwitterPostReplyArgs = {
    /**
     * Select specific fields to fetch from the TwitterPostReply
     */
    select?: TwitterPostReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterPostReplyInclude | null
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
  }

  export type PostOnHashtagMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
  }

  export type PostOnHashtagCountAggregateOutputType = {
    id: number
    postId: number
    hashtagId: number
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
  }

  export type PostOnHashtagMaxAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
  }

  export type PostOnHashtagCountAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
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
    post?: boolean | TwitterPostArgs
    postId?: boolean
    hashtag?: boolean | TwitterHashtagArgs
    hashtagId?: boolean
  }


  export type PostOnHashtagInclude = {
    post?: boolean | TwitterPostArgs
    hashtag?: boolean | TwitterHashtagArgs
  }

  export type PostOnHashtagGetPayload<S extends boolean | null | undefined | PostOnHashtagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PostOnHashtag :
    S extends undefined ? never :
    S extends { include: any } & (PostOnHashtagArgs | PostOnHashtagFindManyArgs)
    ? PostOnHashtag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? TwitterPostGetPayload<S['include'][P]> :
        P extends 'hashtag' ? TwitterHashtagGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostOnHashtagArgs | PostOnHashtagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? TwitterPostGetPayload<S['select'][P]> :
        P extends 'hashtag' ? TwitterHashtagGetPayload<S['select'][P]> :  P extends keyof PostOnHashtag ? PostOnHashtag[P] : never
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

    post<T extends TwitterPostArgs= {}>(args?: Subset<T, TwitterPostArgs>): Prisma__TwitterPostClient<TwitterPostGetPayload<T> | Null>;

    hashtag<T extends TwitterHashtagArgs= {}>(args?: Subset<T, TwitterHashtagArgs>): Prisma__TwitterHashtagClient<TwitterHashtagGetPayload<T> | Null>;

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

  export const KorKitchenCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type KorKitchenCategoryScalarFieldEnum = (typeof KorKitchenCategoryScalarFieldEnum)[keyof typeof KorKitchenCategoryScalarFieldEnum]


  export const KorKitchenMenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    price: 'price',
    categoryName: 'categoryName',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type KorKitchenMenuScalarFieldEnum = (typeof KorKitchenMenuScalarFieldEnum)[keyof typeof KorKitchenMenuScalarFieldEnum]


  export const KorKitchenOrderItemScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    orderId: 'orderId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    creatAt: 'creatAt',
    updatedAt: 'updatedAt'
  };

  export type KorKitchenOrderItemScalarFieldEnum = (typeof KorKitchenOrderItemScalarFieldEnum)[keyof typeof KorKitchenOrderItemScalarFieldEnum]


  export const KorKitchenOrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    tableId: 'tableId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type KorKitchenOrderScalarFieldEnum = (typeof KorKitchenOrderScalarFieldEnum)[keyof typeof KorKitchenOrderScalarFieldEnum]


  export const PostOnHashtagScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    hashtagId: 'hashtagId'
  };

  export type PostOnHashtagScalarFieldEnum = (typeof PostOnHashtagScalarFieldEnum)[keyof typeof PostOnHashtagScalarFieldEnum]


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


  export const TestModelScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    Surname: 'Surname'
  };

  export type TestModelScalarFieldEnum = (typeof TestModelScalarFieldEnum)[keyof typeof TestModelScalarFieldEnum]


  export const TodoListScalarFieldEnum: {
    id: 'id',
    task: 'task',
    status: 'status',
    note: 'note',
    createAt: 'createAt',
    updateAt: 'updateAt'
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
    name: 'name'
  };

  export type TriviaCategoryScalarFieldEnum = (typeof TriviaCategoryScalarFieldEnum)[keyof typeof TriviaCategoryScalarFieldEnum]


  export const TriviaChoiceScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    name: 'name'
  };

  export type TriviaChoiceScalarFieldEnum = (typeof TriviaChoiceScalarFieldEnum)[keyof typeof TriviaChoiceScalarFieldEnum]


  export const TriviaQuestionScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    answerID: 'answerID'
  };

  export type TriviaQuestionScalarFieldEnum = (typeof TriviaQuestionScalarFieldEnum)[keyof typeof TriviaQuestionScalarFieldEnum]


  export const TriviaRoundQuestionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    choiceId: 'choiceId',
    quizResult: 'quizResult',
    roundId: 'roundId'
  };

  export type TriviaRoundQuestionScalarFieldEnum = (typeof TriviaRoundQuestionScalarFieldEnum)[keyof typeof TriviaRoundQuestionScalarFieldEnum]


  export const TriviaRoundScalarFieldEnum: {
    id: 'id',
    user: 'user',
    categoryId: 'categoryId',
    totalResult: 'totalResult',
    createAt: 'createAt'
  };

  export type TriviaRoundScalarFieldEnum = (typeof TriviaRoundScalarFieldEnum)[keyof typeof TriviaRoundScalarFieldEnum]


  export const TwitterDirectMessageScalarFieldEnum: {
    id: 'id',
    from: 'from',
    to: 'to',
    message: 'message',
    createAt: 'createAt'
  };

  export type TwitterDirectMessageScalarFieldEnum = (typeof TwitterDirectMessageScalarFieldEnum)[keyof typeof TwitterDirectMessageScalarFieldEnum]


  export const TwitterHashtagScalarFieldEnum: {
    id: 'id',
    message: 'message'
  };

  export type TwitterHashtagScalarFieldEnum = (typeof TwitterHashtagScalarFieldEnum)[keyof typeof TwitterHashtagScalarFieldEnum]


  export const TwitterPostReplyScalarFieldEnum: {
    id: 'id',
    message: 'message',
    postId: 'postId',
    userId: 'userId',
    createAt: 'createAt'
  };

  export type TwitterPostReplyScalarFieldEnum = (typeof TwitterPostReplyScalarFieldEnum)[keyof typeof TwitterPostReplyScalarFieldEnum]


  export const TwitterPostScalarFieldEnum: {
    id: 'id',
    message: 'message'
  };

  export type TwitterPostScalarFieldEnum = (typeof TwitterPostScalarFieldEnum)[keyof typeof TwitterPostScalarFieldEnum]


  export const TwitterUserRelationScalarFieldEnum: {
    id: 'id',
    follower: 'follower',
    following: 'following'
  };

  export type TwitterUserRelationScalarFieldEnum = (typeof TwitterUserRelationScalarFieldEnum)[keyof typeof TwitterUserRelationScalarFieldEnum]


  export const TwitterUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    directMessageId: 'directMessageId',
    userRelationId: 'userRelationId'
  };

  export type TwitterUserScalarFieldEnum = (typeof TwitterUserScalarFieldEnum)[keyof typeof TwitterUserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type KorKitchenCategoryWhereInput = {
    AND?: Enumerable<KorKitchenCategoryWhereInput>
    OR?: Enumerable<KorKitchenCategoryWhereInput>
    NOT?: Enumerable<KorKitchenCategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    menu?: KorKitchenMenuListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type KorKitchenCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    menu?: KorKitchenMenuOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenCategoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type KorKitchenCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: KorKitchenCategoryCountOrderByAggregateInput
    _avg?: KorKitchenCategoryAvgOrderByAggregateInput
    _max?: KorKitchenCategoryMaxOrderByAggregateInput
    _min?: KorKitchenCategoryMinOrderByAggregateInput
    _sum?: KorKitchenCategorySumOrderByAggregateInput
  }

  export type KorKitchenCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<KorKitchenCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<KorKitchenCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<KorKitchenCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type KorKitchenMenuWhereInput = {
    AND?: Enumerable<KorKitchenMenuWhereInput>
    OR?: Enumerable<KorKitchenMenuWhereInput>
    NOT?: Enumerable<KorKitchenMenuWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    price?: FloatFilter | number
    category?: XOR<KorKitchenCategoryRelationFilter, KorKitchenCategoryWhereInput> | null
    categoryName?: StringNullableFilter | string | null
    orderItems?: KorKitchenOrderItemListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type KorKitchenMenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    category?: KorKitchenCategoryOrderByWithRelationInput
    categoryName?: SortOrder
    orderItems?: KorKitchenOrderItemOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenMenuWhereUniqueInput = {
    id?: number
  }

  export type KorKitchenMenuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: KorKitchenMenuCountOrderByAggregateInput
    _avg?: KorKitchenMenuAvgOrderByAggregateInput
    _max?: KorKitchenMenuMaxOrderByAggregateInput
    _min?: KorKitchenMenuMinOrderByAggregateInput
    _sum?: KorKitchenMenuSumOrderByAggregateInput
  }

  export type KorKitchenMenuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<KorKitchenMenuScalarWhereWithAggregatesInput>
    OR?: Enumerable<KorKitchenMenuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<KorKitchenMenuScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    categoryName?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type KorKitchenOrderWhereInput = {
    AND?: Enumerable<KorKitchenOrderWhereInput>
    OR?: Enumerable<KorKitchenOrderWhereInput>
    NOT?: Enumerable<KorKitchenOrderWhereInput>
    id?: IntFilter | number
    status?: StringFilter | string
    tableId?: IntFilter | number
    items?: KorKitchenOrderItemListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type KorKitchenOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    items?: KorKitchenOrderItemOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenOrderWhereUniqueInput = {
    id?: number
  }

  export type KorKitchenOrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: KorKitchenOrderCountOrderByAggregateInput
    _avg?: KorKitchenOrderAvgOrderByAggregateInput
    _max?: KorKitchenOrderMaxOrderByAggregateInput
    _min?: KorKitchenOrderMinOrderByAggregateInput
    _sum?: KorKitchenOrderSumOrderByAggregateInput
  }

  export type KorKitchenOrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<KorKitchenOrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<KorKitchenOrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<KorKitchenOrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    tableId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type KorKitchenOrderItemWhereInput = {
    AND?: Enumerable<KorKitchenOrderItemWhereInput>
    OR?: Enumerable<KorKitchenOrderItemWhereInput>
    NOT?: Enumerable<KorKitchenOrderItemWhereInput>
    id?: IntFilter | number
    menu?: XOR<KorKitchenMenuRelationFilter, KorKitchenMenuWhereInput>
    menuId?: IntFilter | number
    order?: XOR<KorKitchenOrderRelationFilter, KorKitchenOrderWhereInput> | null
    orderId?: IntNullableFilter | number | null
    quantity?: IntFilter | number
    totalPrice?: FloatFilter | number
    creatAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type KorKitchenOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    menu?: KorKitchenMenuOrderByWithRelationInput
    menuId?: SortOrder
    order?: KorKitchenOrderOrderByWithRelationInput
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    creatAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KorKitchenOrderItemWhereUniqueInput = {
    id?: number
  }

  export type KorKitchenOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    creatAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KorKitchenOrderItemCountOrderByAggregateInput
    _avg?: KorKitchenOrderItemAvgOrderByAggregateInput
    _max?: KorKitchenOrderItemMaxOrderByAggregateInput
    _min?: KorKitchenOrderItemMinOrderByAggregateInput
    _sum?: KorKitchenOrderItemSumOrderByAggregateInput
  }

  export type KorKitchenOrderItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<KorKitchenOrderItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<KorKitchenOrderItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<KorKitchenOrderItemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    menuId?: IntWithAggregatesFilter | number
    orderId?: IntNullableWithAggregatesFilter | number | null
    quantity?: IntWithAggregatesFilter | number
    totalPrice?: FloatWithAggregatesFilter | number
    creatAt?: DateTimeWithAggregatesFilter | Date | string
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
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type TodoListOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TodoListWhereUniqueInput = {
    id?: number
  }

  export type TodoListOrderByWithAggregationInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TestModelWhereInput = {
    AND?: Enumerable<TestModelWhereInput>
    OR?: Enumerable<TestModelWhereInput>
    NOT?: Enumerable<TestModelWhereInput>
    id?: IntFilter | number
    firstname?: StringFilter | string
    Surname?: StringFilter | string
  }

  export type TestModelOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    Surname?: SortOrder
  }

  export type TestModelWhereUniqueInput = {
    id?: number
  }

  export type TestModelOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    Surname?: SortOrder
    _count?: TestModelCountOrderByAggregateInput
    _avg?: TestModelAvgOrderByAggregateInput
    _max?: TestModelMaxOrderByAggregateInput
    _min?: TestModelMinOrderByAggregateInput
    _sum?: TestModelSumOrderByAggregateInput
  }

  export type TestModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestModelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    firstname?: StringWithAggregatesFilter | string
    Surname?: StringWithAggregatesFilter | string
  }

  export type TriviaCategoryWhereInput = {
    AND?: Enumerable<TriviaCategoryWhereInput>
    OR?: Enumerable<TriviaCategoryWhereInput>
    NOT?: Enumerable<TriviaCategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    questions?: TriviaQuestionListRelationFilter
    rounds?: TriviaRoundListRelationFilter
  }

  export type TriviaCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: TriviaQuestionOrderByRelationAggregateInput
    rounds?: TriviaRoundOrderByRelationAggregateInput
  }

  export type TriviaCategoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type TriviaCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
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
  }

  export type TriviaQuestionWhereInput = {
    AND?: Enumerable<TriviaQuestionWhereInput>
    OR?: Enumerable<TriviaQuestionWhereInput>
    NOT?: Enumerable<TriviaQuestionWhereInput>
    id?: IntFilter | number
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput>
    categoryId?: IntFilter | number
    name?: StringFilter | string
    answerID?: IntFilter | number
    choices?: TriviaChoiceListRelationFilter
    roundQuestions?: TriviaRoundQuestionListRelationFilter
  }

  export type TriviaQuestionOrderByWithRelationInput = {
    id?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    categoryId?: SortOrder
    name?: SortOrder
    answerID?: SortOrder
    choices?: TriviaChoiceOrderByRelationAggregateInput
    roundQuestions?: TriviaRoundQuestionOrderByRelationAggregateInput
  }

  export type TriviaQuestionWhereUniqueInput = {
    id?: number
  }

  export type TriviaQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    answerID?: SortOrder
    _count?: TriviaQuestionCountOrderByAggregateInput
    _avg?: TriviaQuestionAvgOrderByAggregateInput
    _max?: TriviaQuestionMaxOrderByAggregateInput
    _min?: TriviaQuestionMinOrderByAggregateInput
    _sum?: TriviaQuestionSumOrderByAggregateInput
  }

  export type TriviaQuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaQuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaQuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaQuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    answerID?: IntWithAggregatesFilter | number
  }

  export type TriviaChoiceWhereInput = {
    AND?: Enumerable<TriviaChoiceWhereInput>
    OR?: Enumerable<TriviaChoiceWhereInput>
    NOT?: Enumerable<TriviaChoiceWhereInput>
    id?: IntFilter | number
    question?: XOR<TriviaQuestionRelationFilter, TriviaQuestionWhereInput>
    quizId?: IntFilter | number
    name?: StringFilter | string
    roundQuestions?: TriviaRoundQuestionListRelationFilter
  }

  export type TriviaChoiceOrderByWithRelationInput = {
    id?: SortOrder
    question?: TriviaQuestionOrderByWithRelationInput
    quizId?: SortOrder
    name?: SortOrder
    roundQuestions?: TriviaRoundQuestionOrderByRelationAggregateInput
  }

  export type TriviaChoiceWhereUniqueInput = {
    id?: number
  }

  export type TriviaChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    name?: SortOrder
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
    quizId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type TriviaRoundQuestionWhereInput = {
    AND?: Enumerable<TriviaRoundQuestionWhereInput>
    OR?: Enumerable<TriviaRoundQuestionWhereInput>
    NOT?: Enumerable<TriviaRoundQuestionWhereInput>
    id?: IntFilter | number
    question?: XOR<TriviaQuestionRelationFilter, TriviaQuestionWhereInput>
    quizId?: IntFilter | number
    userChoice?: XOR<TriviaChoiceRelationFilter, TriviaChoiceWhereInput>
    choiceId?: IntFilter | number
    quizResult?: BoolFilter | boolean
    round?: XOR<TriviaRoundRelationFilter, TriviaRoundWhereInput> | null
    roundId?: IntNullableFilter | number | null
  }

  export type TriviaRoundQuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: TriviaQuestionOrderByWithRelationInput
    quizId?: SortOrder
    userChoice?: TriviaChoiceOrderByWithRelationInput
    choiceId?: SortOrder
    quizResult?: SortOrder
    round?: TriviaRoundOrderByWithRelationInput
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
    _count?: TriviaRoundQuestionCountOrderByAggregateInput
    _avg?: TriviaRoundQuestionAvgOrderByAggregateInput
    _max?: TriviaRoundQuestionMaxOrderByAggregateInput
    _min?: TriviaRoundQuestionMinOrderByAggregateInput
    _sum?: TriviaRoundQuestionSumOrderByAggregateInput
  }

  export type TriviaRoundQuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaRoundQuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaRoundQuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaRoundQuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quizId?: IntWithAggregatesFilter | number
    choiceId?: IntWithAggregatesFilter | number
    quizResult?: BoolWithAggregatesFilter | boolean
    roundId?: IntNullableWithAggregatesFilter | number | null
  }

  export type TriviaRoundWhereInput = {
    AND?: Enumerable<TriviaRoundWhereInput>
    OR?: Enumerable<TriviaRoundWhereInput>
    NOT?: Enumerable<TriviaRoundWhereInput>
    id?: IntFilter | number
    user?: StringFilter | string
    questions?: TriviaRoundQuestionListRelationFilter
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput>
    categoryId?: IntFilter | number
    totalResult?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
  }

  export type TriviaRoundOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    questions?: TriviaRoundQuestionOrderByRelationAggregateInput
    category?: TriviaCategoryOrderByWithRelationInput
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
  }

  export type TriviaRoundWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
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
    user?: StringWithAggregatesFilter | string
    categoryId?: IntWithAggregatesFilter | number
    totalResult?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterUserWhereInput = {
    AND?: Enumerable<TwitterUserWhereInput>
    OR?: Enumerable<TwitterUserWhereInput>
    NOT?: Enumerable<TwitterUserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    directMessage?: XOR<TwitterDirectMessageRelationFilter, TwitterDirectMessageWhereInput>
    directMessageId?: IntFilter | number
    userRelate?: XOR<TwitterUserRelationRelationFilter, TwitterUserRelationWhereInput>
    userRelationId?: IntFilter | number
    TwitterPostReply?: TwitterPostReplyListRelationFilter
  }

  export type TwitterUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    directMessage?: TwitterDirectMessageOrderByWithRelationInput
    directMessageId?: SortOrder
    userRelate?: TwitterUserRelationOrderByWithRelationInput
    userRelationId?: SortOrder
    TwitterPostReply?: TwitterPostReplyOrderByRelationAggregateInput
  }

  export type TwitterUserWhereUniqueInput = {
    id?: number
  }

  export type TwitterUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    directMessageId?: SortOrder
    userRelationId?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    directMessageId?: IntWithAggregatesFilter | number
    userRelationId?: IntWithAggregatesFilter | number
  }

  export type TwitterPostWhereInput = {
    AND?: Enumerable<TwitterPostWhereInput>
    OR?: Enumerable<TwitterPostWhereInput>
    NOT?: Enumerable<TwitterPostWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    TwitterPostReply?: TwitterPostReplyListRelationFilter
    PostOnHashtag?: PostOnHashtagListRelationFilter
  }

  export type TwitterPostOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    TwitterPostReply?: TwitterPostReplyOrderByRelationAggregateInput
    PostOnHashtag?: PostOnHashtagOrderByRelationAggregateInput
  }

  export type TwitterPostWhereUniqueInput = {
    id?: number
  }

  export type TwitterPostOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
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
  }

  export type TwitterHashtagWhereInput = {
    AND?: Enumerable<TwitterHashtagWhereInput>
    OR?: Enumerable<TwitterHashtagWhereInput>
    NOT?: Enumerable<TwitterHashtagWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    PostOnHashtag?: PostOnHashtagListRelationFilter
  }

  export type TwitterHashtagOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    PostOnHashtag?: PostOnHashtagOrderByRelationAggregateInput
  }

  export type TwitterHashtagWhereUniqueInput = {
    id?: number
  }

  export type TwitterHashtagOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    _count?: TwitterHashtagCountOrderByAggregateInput
    _avg?: TwitterHashtagAvgOrderByAggregateInput
    _max?: TwitterHashtagMaxOrderByAggregateInput
    _min?: TwitterHashtagMinOrderByAggregateInput
    _sum?: TwitterHashtagSumOrderByAggregateInput
  }

  export type TwitterHashtagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterHashtagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterHashtagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterHashtagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
  }

  export type TwitterDirectMessageWhereInput = {
    AND?: Enumerable<TwitterDirectMessageWhereInput>
    OR?: Enumerable<TwitterDirectMessageWhereInput>
    NOT?: Enumerable<TwitterDirectMessageWhereInput>
    id?: IntFilter | number
    from?: StringFilter | string
    to?: StringFilter | string
    message?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    TwitterUser?: TwitterUserListRelationFilter
  }

  export type TwitterDirectMessageOrderByWithRelationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    TwitterUser?: TwitterUserOrderByRelationAggregateInput
  }

  export type TwitterDirectMessageWhereUniqueInput = {
    id?: number
  }

  export type TwitterDirectMessageOrderByWithAggregationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    _count?: TwitterDirectMessageCountOrderByAggregateInput
    _avg?: TwitterDirectMessageAvgOrderByAggregateInput
    _max?: TwitterDirectMessageMaxOrderByAggregateInput
    _min?: TwitterDirectMessageMinOrderByAggregateInput
    _sum?: TwitterDirectMessageSumOrderByAggregateInput
  }

  export type TwitterDirectMessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterDirectMessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterDirectMessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterDirectMessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    from?: StringWithAggregatesFilter | string
    to?: StringWithAggregatesFilter | string
    message?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterUserRelationWhereInput = {
    AND?: Enumerable<TwitterUserRelationWhereInput>
    OR?: Enumerable<TwitterUserRelationWhereInput>
    NOT?: Enumerable<TwitterUserRelationWhereInput>
    id?: IntFilter | number
    follower?: StringFilter | string
    following?: StringFilter | string
    TwitterUser?: TwitterUserListRelationFilter
  }

  export type TwitterUserRelationOrderByWithRelationInput = {
    id?: SortOrder
    follower?: SortOrder
    following?: SortOrder
    TwitterUser?: TwitterUserOrderByRelationAggregateInput
  }

  export type TwitterUserRelationWhereUniqueInput = {
    id?: number
  }

  export type TwitterUserRelationOrderByWithAggregationInput = {
    id?: SortOrder
    follower?: SortOrder
    following?: SortOrder
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
    follower?: StringWithAggregatesFilter | string
    following?: StringWithAggregatesFilter | string
  }

  export type TwitterPostReplyWhereInput = {
    AND?: Enumerable<TwitterPostReplyWhereInput>
    OR?: Enumerable<TwitterPostReplyWhereInput>
    NOT?: Enumerable<TwitterPostReplyWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    post?: XOR<TwitterPostRelationFilter, TwitterPostWhereInput>
    postId?: IntFilter | number
    user?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    userId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
  }

  export type TwitterPostReplyOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    post?: TwitterPostOrderByWithRelationInput
    postId?: SortOrder
    user?: TwitterUserOrderByWithRelationInput
    userId?: SortOrder
    createAt?: SortOrder
  }

  export type TwitterPostReplyWhereUniqueInput = {
    id?: number
  }

  export type TwitterPostReplyOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    _count?: TwitterPostReplyCountOrderByAggregateInput
    _avg?: TwitterPostReplyAvgOrderByAggregateInput
    _max?: TwitterPostReplyMaxOrderByAggregateInput
    _min?: TwitterPostReplyMinOrderByAggregateInput
    _sum?: TwitterPostReplySumOrderByAggregateInput
  }

  export type TwitterPostReplyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterPostReplyScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterPostReplyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterPostReplyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    postId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostOnHashtagWhereInput = {
    AND?: Enumerable<PostOnHashtagWhereInput>
    OR?: Enumerable<PostOnHashtagWhereInput>
    NOT?: Enumerable<PostOnHashtagWhereInput>
    id?: IntFilter | number
    post?: XOR<TwitterPostRelationFilter, TwitterPostWhereInput>
    postId?: IntFilter | number
    hashtag?: XOR<TwitterHashtagRelationFilter, TwitterHashtagWhereInput>
    hashtagId?: IntFilter | number
  }

  export type PostOnHashtagOrderByWithRelationInput = {
    id?: SortOrder
    post?: TwitterPostOrderByWithRelationInput
    postId?: SortOrder
    hashtag?: TwitterHashtagOrderByWithRelationInput
    hashtagId?: SortOrder
  }

  export type PostOnHashtagWhereUniqueInput = {
    id?: number
  }

  export type PostOnHashtagOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
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
  }

  export type KorKitchenCategoryCreateInput = {
    name: string
    menu?: KorKitchenMenuCreateNestedManyWithoutCategoryInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenCategoryUncheckedCreateInput = {
    id?: number
    name: string
    menu?: KorKitchenMenuUncheckedCreateNestedManyWithoutCategoryInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    menu?: KorKitchenMenuUpdateManyWithoutCategoryNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    menu?: KorKitchenMenuUncheckedUpdateManyWithoutCategoryNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenCategoryCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenMenuCreateInput = {
    name: string
    image: string
    price: number
    category?: KorKitchenCategoryCreateNestedOneWithoutMenuInput
    orderItems?: KorKitchenOrderItemCreateNestedManyWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenMenuUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    orderItems?: KorKitchenOrderItemUncheckedCreateNestedManyWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenMenuUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: KorKitchenCategoryUpdateOneWithoutMenuNestedInput
    orderItems?: KorKitchenOrderItemUpdateManyWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenMenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: KorKitchenOrderItemUncheckedUpdateManyWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenMenuCreateManyInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenMenuUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenMenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderCreateInput = {
    status?: string
    tableId: number
    items?: KorKitchenOrderItemCreateNestedManyWithoutOrderInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderUncheckedCreateInput = {
    id?: number
    status?: string
    tableId: number
    items?: KorKitchenOrderItemUncheckedCreateNestedManyWithoutOrderInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    items?: KorKitchenOrderItemUpdateManyWithoutOrderNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    items?: KorKitchenOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderCreateManyInput = {
    id?: number
    status?: string
    tableId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemCreateInput = {
    menu: KorKitchenMenuCreateNestedOneWithoutOrderItemsInput
    order?: KorKitchenOrderCreateNestedOneWithoutItemsInput
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemUncheckedCreateInput = {
    id?: number
    menuId: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemUpdateInput = {
    menu?: KorKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: KorKitchenOrderUpdateOneWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemCreateManyInput = {
    id?: number
    menuId: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListCreateInput = {
    task: string
    status?: string
    note?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TodoListUncheckedCreateInput = {
    id?: number
    task: string
    status?: string
    note?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TodoListUpdateInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListCreateManyInput = {
    id?: number
    task: string
    status?: string
    note?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type TodoListUpdateManyMutationInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestModelCreateInput = {
    firstname: string
    Surname: string
  }

  export type TestModelUncheckedCreateInput = {
    id?: number
    firstname: string
    Surname: string
  }

  export type TestModelUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    Surname?: StringFieldUpdateOperationsInput | string
  }

  export type TestModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    Surname?: StringFieldUpdateOperationsInput | string
  }

  export type TestModelCreateManyInput = {
    id?: number
    firstname: string
    Surname: string
  }

  export type TestModelUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    Surname?: StringFieldUpdateOperationsInput | string
  }

  export type TestModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    Surname?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaCategoryCreateInput = {
    name: string
    questions?: TriviaQuestionCreateNestedManyWithoutCategoryInput
    rounds?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateInput = {
    id?: number
    name: string
    questions?: TriviaQuestionUncheckedCreateNestedManyWithoutCategoryInput
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: TriviaQuestionUpdateManyWithoutCategoryNestedInput
    rounds?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    questions?: TriviaQuestionUncheckedUpdateManyWithoutCategoryNestedInput
    rounds?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type TriviaCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaQuestionCreateInput = {
    category: TriviaCategoryCreateNestedOneWithoutQuestionsInput
    name: string
    answerID: number
    choices?: TriviaChoiceCreateNestedManyWithoutQuestionInput
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionUncheckedCreateInput = {
    id?: number
    categoryId: number
    name: string
    answerID: number
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuestionInput
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionUpdateInput = {
    category?: TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
    choices?: TriviaChoiceUpdateManyWithoutQuestionNestedInput
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaQuestionCreateManyInput = {
    id?: number
    categoryId: number
    name: string
    answerID: number
  }

  export type TriviaQuestionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaChoiceCreateInput = {
    question: TriviaQuestionCreateNestedOneWithoutChoicesInput
    name: string
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUncheckedCreateInput = {
    id?: number
    quizId: number
    name: string
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUpdateInput = {
    question?: TriviaQuestionUpdateOneRequiredWithoutChoicesNestedInput
    name?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceCreateManyInput = {
    id?: number
    quizId: number
    name: string
  }

  export type TriviaChoiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaRoundQuestionCreateInput = {
    question: TriviaQuestionCreateNestedOneWithoutRoundQuestionsInput
    userChoice: TriviaChoiceCreateNestedOneWithoutRoundQuestionsInput
    quizResult: boolean
    round?: TriviaRoundCreateNestedOneWithoutQuestionsInput
  }

  export type TriviaRoundQuestionUncheckedCreateInput = {
    id?: number
    quizId: number
    choiceId: number
    quizResult: boolean
    roundId?: number | null
  }

  export type TriviaRoundQuestionUpdateInput = {
    question?: TriviaQuestionUpdateOneRequiredWithoutRoundQuestionsNestedInput
    userChoice?: TriviaChoiceUpdateOneRequiredWithoutRoundQuestionsNestedInput
    quizResult?: BoolFieldUpdateOperationsInput | boolean
    round?: TriviaRoundUpdateOneWithoutQuestionsNestedInput
  }

  export type TriviaRoundQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: BoolFieldUpdateOperationsInput | boolean
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaRoundQuestionCreateManyInput = {
    id?: number
    quizId: number
    choiceId: number
    quizResult: boolean
    roundId?: number | null
  }

  export type TriviaRoundQuestionUpdateManyMutationInput = {
    quizResult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriviaRoundQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: BoolFieldUpdateOperationsInput | boolean
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaRoundCreateInput = {
    user: string
    questions?: TriviaRoundQuestionCreateNestedManyWithoutRoundInput
    category: TriviaCategoryCreateNestedOneWithoutRoundsInput
    totalResult: number
    createAt?: Date | string
  }

  export type TriviaRoundUncheckedCreateInput = {
    id?: number
    user: string
    questions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutRoundInput
    categoryId: number
    totalResult: number
    createAt?: Date | string
  }

  export type TriviaRoundUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    questions?: TriviaRoundQuestionUpdateManyWithoutRoundNestedInput
    category?: TriviaCategoryUpdateOneRequiredWithoutRoundsNestedInput
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    questions?: TriviaRoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
    categoryId?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundCreateManyInput = {
    id?: number
    user: string
    categoryId: number
    totalResult: number
    createAt?: Date | string
  }

  export type TriviaRoundUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserCreateInput = {
    name: string
    image: string
    directMessage: TwitterDirectMessageCreateNestedOneWithoutTwitterUserInput
    userRelate: TwitterUserRelationCreateNestedOneWithoutTwitterUserInput
    TwitterPostReply?: TwitterPostReplyCreateNestedManyWithoutUserInput
  }

  export type TwitterUserUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    directMessageId: number
    userRelationId: number
    TwitterPostReply?: TwitterPostReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type TwitterUserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    directMessage?: TwitterDirectMessageUpdateOneRequiredWithoutTwitterUserNestedInput
    userRelate?: TwitterUserRelationUpdateOneRequiredWithoutTwitterUserNestedInput
    TwitterPostReply?: TwitterPostReplyUpdateManyWithoutUserNestedInput
  }

  export type TwitterUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    directMessageId?: IntFieldUpdateOperationsInput | number
    userRelationId?: IntFieldUpdateOperationsInput | number
    TwitterPostReply?: TwitterPostReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TwitterUserCreateManyInput = {
    id?: number
    name: string
    image: string
    directMessageId: number
    userRelationId: number
  }

  export type TwitterUserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    directMessageId?: IntFieldUpdateOperationsInput | number
    userRelationId?: IntFieldUpdateOperationsInput | number
  }

  export type TwitterPostCreateInput = {
    message: string
    TwitterPostReply?: TwitterPostReplyCreateNestedManyWithoutPostInput
    PostOnHashtag?: PostOnHashtagCreateNestedManyWithoutPostInput
  }

  export type TwitterPostUncheckedCreateInput = {
    id?: number
    message: string
    TwitterPostReply?: TwitterPostReplyUncheckedCreateNestedManyWithoutPostInput
    PostOnHashtag?: PostOnHashtagUncheckedCreateNestedManyWithoutPostInput
  }

  export type TwitterPostUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    TwitterPostReply?: TwitterPostReplyUpdateManyWithoutPostNestedInput
    PostOnHashtag?: PostOnHashtagUpdateManyWithoutPostNestedInput
  }

  export type TwitterPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    TwitterPostReply?: TwitterPostReplyUncheckedUpdateManyWithoutPostNestedInput
    PostOnHashtag?: PostOnHashtagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TwitterPostCreateManyInput = {
    id?: number
    message: string
  }

  export type TwitterPostUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterHashtagCreateInput = {
    message: string
    PostOnHashtag?: PostOnHashtagCreateNestedManyWithoutHashtagInput
  }

  export type TwitterHashtagUncheckedCreateInput = {
    id?: number
    message: string
    PostOnHashtag?: PostOnHashtagUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type TwitterHashtagUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    PostOnHashtag?: PostOnHashtagUpdateManyWithoutHashtagNestedInput
  }

  export type TwitterHashtagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    PostOnHashtag?: PostOnHashtagUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type TwitterHashtagCreateManyInput = {
    id?: number
    message: string
  }

  export type TwitterHashtagUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterHashtagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterDirectMessageCreateInput = {
    from: string
    to: string
    message: string
    createAt?: Date | string
    TwitterUser?: TwitterUserCreateNestedManyWithoutDirectMessageInput
  }

  export type TwitterDirectMessageUncheckedCreateInput = {
    id?: number
    from: string
    to: string
    message: string
    createAt?: Date | string
    TwitterUser?: TwitterUserUncheckedCreateNestedManyWithoutDirectMessageInput
  }

  export type TwitterDirectMessageUpdateInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TwitterUser?: TwitterUserUpdateManyWithoutDirectMessageNestedInput
  }

  export type TwitterDirectMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TwitterUser?: TwitterUserUncheckedUpdateManyWithoutDirectMessageNestedInput
  }

  export type TwitterDirectMessageCreateManyInput = {
    id?: number
    from: string
    to: string
    message: string
    createAt?: Date | string
  }

  export type TwitterDirectMessageUpdateManyMutationInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationCreateInput = {
    follower: string
    following: string
    TwitterUser?: TwitterUserCreateNestedManyWithoutUserRelateInput
  }

  export type TwitterUserRelationUncheckedCreateInput = {
    id?: number
    follower: string
    following: string
    TwitterUser?: TwitterUserUncheckedCreateNestedManyWithoutUserRelateInput
  }

  export type TwitterUserRelationUpdateInput = {
    follower?: StringFieldUpdateOperationsInput | string
    following?: StringFieldUpdateOperationsInput | string
    TwitterUser?: TwitterUserUpdateManyWithoutUserRelateNestedInput
  }

  export type TwitterUserRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower?: StringFieldUpdateOperationsInput | string
    following?: StringFieldUpdateOperationsInput | string
    TwitterUser?: TwitterUserUncheckedUpdateManyWithoutUserRelateNestedInput
  }

  export type TwitterUserRelationCreateManyInput = {
    id?: number
    follower: string
    following: string
  }

  export type TwitterUserRelationUpdateManyMutationInput = {
    follower?: StringFieldUpdateOperationsInput | string
    following?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterUserRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower?: StringFieldUpdateOperationsInput | string
    following?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterPostReplyCreateInput = {
    message: string
    post: TwitterPostCreateNestedOneWithoutTwitterPostReplyInput
    user: TwitterUserCreateNestedOneWithoutTwitterPostReplyInput
    createAt?: Date | string
  }

  export type TwitterPostReplyUncheckedCreateInput = {
    id?: number
    message: string
    postId: number
    userId: number
    createAt?: Date | string
  }

  export type TwitterPostReplyUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    post?: TwitterPostUpdateOneRequiredWithoutTwitterPostReplyNestedInput
    user?: TwitterUserUpdateOneRequiredWithoutTwitterPostReplyNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostReplyCreateManyInput = {
    id?: number
    message: string
    postId: number
    userId: number
    createAt?: Date | string
  }

  export type TwitterPostReplyUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagCreateInput = {
    post: TwitterPostCreateNestedOneWithoutPostOnHashtagInput
    hashtag: TwitterHashtagCreateNestedOneWithoutPostOnHashtagInput
  }

  export type PostOnHashtagUncheckedCreateInput = {
    id?: number
    postId: number
    hashtagId: number
  }

  export type PostOnHashtagUpdateInput = {
    post?: TwitterPostUpdateOneRequiredWithoutPostOnHashtagNestedInput
    hashtag?: TwitterHashtagUpdateOneRequiredWithoutPostOnHashtagNestedInput
  }

  export type PostOnHashtagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type PostOnHashtagCreateManyInput = {
    id?: number
    postId: number
    hashtagId: number
  }

  export type PostOnHashtagUpdateManyMutationInput = {

  }

  export type PostOnHashtagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
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

  export type KorKitchenMenuListRelationFilter = {
    every?: KorKitchenMenuWhereInput
    some?: KorKitchenMenuWhereInput
    none?: KorKitchenMenuWhereInput
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

  export type KorKitchenMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KorKitchenCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KorKitchenCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenCategorySumOrderByAggregateInput = {
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

  export type KorKitchenCategoryRelationFilter = {
    is?: KorKitchenCategoryWhereInput | null
    isNot?: KorKitchenCategoryWhereInput | null
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

  export type KorKitchenOrderItemListRelationFilter = {
    every?: KorKitchenOrderItemWhereInput
    some?: KorKitchenOrderItemWhereInput
    none?: KorKitchenOrderItemWhereInput
  }

  export type KorKitchenOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KorKitchenMenuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenMenuAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type KorKitchenMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenMenuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenMenuSumOrderByAggregateInput = {
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

  export type KorKitchenOrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type KorKitchenOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenOrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenOrderSumOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type KorKitchenMenuRelationFilter = {
    is?: KorKitchenMenuWhereInput
    isNot?: KorKitchenMenuWhereInput
  }

  export type KorKitchenOrderRelationFilter = {
    is?: KorKitchenOrderWhereInput | null
    isNot?: KorKitchenOrderWhereInput | null
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

  export type KorKitchenOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    creatAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KorKitchenOrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type KorKitchenOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    creatAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KorKitchenOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    creatAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KorKitchenOrderItemSumOrderByAggregateInput = {
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
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TodoListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TodoListMaxOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TodoListMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type TodoListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestModelCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    Surname?: SortOrder
  }

  export type TestModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestModelMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    Surname?: SortOrder
  }

  export type TestModelMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    Surname?: SortOrder
  }

  export type TestModelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaQuestionListRelationFilter = {
    every?: TriviaQuestionWhereInput
    some?: TriviaQuestionWhereInput
    none?: TriviaQuestionWhereInput
  }

  export type TriviaRoundListRelationFilter = {
    every?: TriviaRoundWhereInput
    some?: TriviaRoundWhereInput
    none?: TriviaRoundWhereInput
  }

  export type TriviaQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TriviaCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TriviaCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TriviaCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaCategoryRelationFilter = {
    is?: TriviaCategoryWhereInput
    isNot?: TriviaCategoryWhereInput
  }

  export type TriviaChoiceListRelationFilter = {
    every?: TriviaChoiceWhereInput
    some?: TriviaChoiceWhereInput
    none?: TriviaChoiceWhereInput
  }

  export type TriviaRoundQuestionListRelationFilter = {
    every?: TriviaRoundQuestionWhereInput
    some?: TriviaRoundQuestionWhereInput
    none?: TriviaRoundQuestionWhereInput
  }

  export type TriviaChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaRoundQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    answerID?: SortOrder
  }

  export type TriviaQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    answerID?: SortOrder
  }

  export type TriviaQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    answerID?: SortOrder
  }

  export type TriviaQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    answerID?: SortOrder
  }

  export type TriviaQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    answerID?: SortOrder
  }

  export type TriviaQuestionRelationFilter = {
    is?: TriviaQuestionWhereInput
    isNot?: TriviaQuestionWhereInput
  }

  export type TriviaChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    name?: SortOrder
  }

  export type TriviaChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    name?: SortOrder
  }

  export type TriviaChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    name?: SortOrder
  }

  export type TriviaChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaChoiceRelationFilter = {
    is?: TriviaChoiceWhereInput
    isNot?: TriviaChoiceWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type TriviaRoundRelationFilter = {
    is?: TriviaRoundWhereInput | null
    isNot?: TriviaRoundWhereInput | null
  }

  export type TriviaRoundQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    roundId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type TriviaRoundCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
  }

  export type TriviaRoundAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
  }

  export type TriviaRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
  }

  export type TriviaRoundMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
  }

  export type TriviaRoundSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
  }

  export type TwitterDirectMessageRelationFilter = {
    is?: TwitterDirectMessageWhereInput
    isNot?: TwitterDirectMessageWhereInput
  }

  export type TwitterUserRelationRelationFilter = {
    is?: TwitterUserRelationWhereInput
    isNot?: TwitterUserRelationWhereInput
  }

  export type TwitterPostReplyListRelationFilter = {
    every?: TwitterPostReplyWhereInput
    some?: TwitterPostReplyWhereInput
    none?: TwitterPostReplyWhereInput
  }

  export type TwitterPostReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    directMessageId?: SortOrder
    userRelationId?: SortOrder
  }

  export type TwitterUserAvgOrderByAggregateInput = {
    id?: SortOrder
    directMessageId?: SortOrder
    userRelationId?: SortOrder
  }

  export type TwitterUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    directMessageId?: SortOrder
    userRelationId?: SortOrder
  }

  export type TwitterUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    directMessageId?: SortOrder
    userRelationId?: SortOrder
  }

  export type TwitterUserSumOrderByAggregateInput = {
    id?: SortOrder
    directMessageId?: SortOrder
    userRelationId?: SortOrder
  }

  export type PostOnHashtagListRelationFilter = {
    every?: PostOnHashtagWhereInput
    some?: PostOnHashtagWhereInput
    none?: PostOnHashtagWhereInput
  }

  export type PostOnHashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterPostCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type TwitterPostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterPostMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type TwitterPostMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type TwitterPostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterHashtagCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type TwitterHashtagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterHashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type TwitterHashtagMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
  }

  export type TwitterHashtagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterUserListRelationFilter = {
    every?: TwitterUserWhereInput
    some?: TwitterUserWhereInput
    none?: TwitterUserWhereInput
  }

  export type TwitterUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterDirectMessageCountOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
  }

  export type TwitterDirectMessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterDirectMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
  }

  export type TwitterDirectMessageMinOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
  }

  export type TwitterDirectMessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterUserRelationCountOrderByAggregateInput = {
    id?: SortOrder
    follower?: SortOrder
    following?: SortOrder
  }

  export type TwitterUserRelationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterUserRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    follower?: SortOrder
    following?: SortOrder
  }

  export type TwitterUserRelationMinOrderByAggregateInput = {
    id?: SortOrder
    follower?: SortOrder
    following?: SortOrder
  }

  export type TwitterUserRelationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterPostRelationFilter = {
    is?: TwitterPostWhereInput
    isNot?: TwitterPostWhereInput
  }

  export type TwitterUserRelationFilter = {
    is?: TwitterUserWhereInput
    isNot?: TwitterUserWhereInput
  }

  export type TwitterPostReplyCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
  }

  export type TwitterPostReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type TwitterPostReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
  }

  export type TwitterPostReplyMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
  }

  export type TwitterPostReplySumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type TwitterHashtagRelationFilter = {
    is?: TwitterHashtagWhereInput
    isNot?: TwitterHashtagWhereInput
  }

  export type PostOnHashtagCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
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
  }

  export type PostOnHashtagMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type PostOnHashtagSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type KorKitchenMenuCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<KorKitchenMenuCreateWithoutCategoryInput>, Enumerable<KorKitchenMenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<KorKitchenMenuCreateOrConnectWithoutCategoryInput>
    createMany?: KorKitchenMenuCreateManyCategoryInputEnvelope
    connect?: Enumerable<KorKitchenMenuWhereUniqueInput>
  }

  export type KorKitchenMenuUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<KorKitchenMenuCreateWithoutCategoryInput>, Enumerable<KorKitchenMenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<KorKitchenMenuCreateOrConnectWithoutCategoryInput>
    createMany?: KorKitchenMenuCreateManyCategoryInputEnvelope
    connect?: Enumerable<KorKitchenMenuWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type KorKitchenMenuUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<KorKitchenMenuCreateWithoutCategoryInput>, Enumerable<KorKitchenMenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<KorKitchenMenuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<KorKitchenMenuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: KorKitchenMenuCreateManyCategoryInputEnvelope
    set?: Enumerable<KorKitchenMenuWhereUniqueInput>
    disconnect?: Enumerable<KorKitchenMenuWhereUniqueInput>
    delete?: Enumerable<KorKitchenMenuWhereUniqueInput>
    connect?: Enumerable<KorKitchenMenuWhereUniqueInput>
    update?: Enumerable<KorKitchenMenuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<KorKitchenMenuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<KorKitchenMenuScalarWhereInput>
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

  export type KorKitchenMenuUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<KorKitchenMenuCreateWithoutCategoryInput>, Enumerable<KorKitchenMenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<KorKitchenMenuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<KorKitchenMenuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: KorKitchenMenuCreateManyCategoryInputEnvelope
    set?: Enumerable<KorKitchenMenuWhereUniqueInput>
    disconnect?: Enumerable<KorKitchenMenuWhereUniqueInput>
    delete?: Enumerable<KorKitchenMenuWhereUniqueInput>
    connect?: Enumerable<KorKitchenMenuWhereUniqueInput>
    update?: Enumerable<KorKitchenMenuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<KorKitchenMenuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<KorKitchenMenuScalarWhereInput>
  }

  export type KorKitchenCategoryCreateNestedOneWithoutMenuInput = {
    create?: XOR<KorKitchenCategoryCreateWithoutMenuInput, KorKitchenCategoryUncheckedCreateWithoutMenuInput>
    connectOrCreate?: KorKitchenCategoryCreateOrConnectWithoutMenuInput
    connect?: KorKitchenCategoryWhereUniqueInput
  }

  export type KorKitchenOrderItemCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<KorKitchenOrderItemCreateWithoutMenuInput>, Enumerable<KorKitchenOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<KorKitchenOrderItemCreateOrConnectWithoutMenuInput>
    createMany?: KorKitchenOrderItemCreateManyMenuInputEnvelope
    connect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
  }

  export type KorKitchenOrderItemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<KorKitchenOrderItemCreateWithoutMenuInput>, Enumerable<KorKitchenOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<KorKitchenOrderItemCreateOrConnectWithoutMenuInput>
    createMany?: KorKitchenOrderItemCreateManyMenuInputEnvelope
    connect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KorKitchenCategoryUpdateOneWithoutMenuNestedInput = {
    create?: XOR<KorKitchenCategoryCreateWithoutMenuInput, KorKitchenCategoryUncheckedCreateWithoutMenuInput>
    connectOrCreate?: KorKitchenCategoryCreateOrConnectWithoutMenuInput
    upsert?: KorKitchenCategoryUpsertWithoutMenuInput
    disconnect?: boolean
    delete?: boolean
    connect?: KorKitchenCategoryWhereUniqueInput
    update?: XOR<KorKitchenCategoryUpdateWithoutMenuInput, KorKitchenCategoryUncheckedUpdateWithoutMenuInput>
  }

  export type KorKitchenOrderItemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<KorKitchenOrderItemCreateWithoutMenuInput>, Enumerable<KorKitchenOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<KorKitchenOrderItemCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<KorKitchenOrderItemUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: KorKitchenOrderItemCreateManyMenuInputEnvelope
    set?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    disconnect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    delete?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    connect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    update?: Enumerable<KorKitchenOrderItemUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<KorKitchenOrderItemUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<KorKitchenOrderItemScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type KorKitchenOrderItemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<KorKitchenOrderItemCreateWithoutMenuInput>, Enumerable<KorKitchenOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<KorKitchenOrderItemCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<KorKitchenOrderItemUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: KorKitchenOrderItemCreateManyMenuInputEnvelope
    set?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    disconnect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    delete?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    connect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    update?: Enumerable<KorKitchenOrderItemUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<KorKitchenOrderItemUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<KorKitchenOrderItemScalarWhereInput>
  }

  export type KorKitchenOrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<KorKitchenOrderItemCreateWithoutOrderInput>, Enumerable<KorKitchenOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<KorKitchenOrderItemCreateOrConnectWithoutOrderInput>
    createMany?: KorKitchenOrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
  }

  export type KorKitchenOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<KorKitchenOrderItemCreateWithoutOrderInput>, Enumerable<KorKitchenOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<KorKitchenOrderItemCreateOrConnectWithoutOrderInput>
    createMany?: KorKitchenOrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
  }

  export type KorKitchenOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<KorKitchenOrderItemCreateWithoutOrderInput>, Enumerable<KorKitchenOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<KorKitchenOrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<KorKitchenOrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: KorKitchenOrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    disconnect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    delete?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    connect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    update?: Enumerable<KorKitchenOrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<KorKitchenOrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<KorKitchenOrderItemScalarWhereInput>
  }

  export type KorKitchenOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<KorKitchenOrderItemCreateWithoutOrderInput>, Enumerable<KorKitchenOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<KorKitchenOrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<KorKitchenOrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: KorKitchenOrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    disconnect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    delete?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    connect?: Enumerable<KorKitchenOrderItemWhereUniqueInput>
    update?: Enumerable<KorKitchenOrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<KorKitchenOrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<KorKitchenOrderItemScalarWhereInput>
  }

  export type KorKitchenMenuCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<KorKitchenMenuCreateWithoutOrderItemsInput, KorKitchenMenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: KorKitchenMenuCreateOrConnectWithoutOrderItemsInput
    connect?: KorKitchenMenuWhereUniqueInput
  }

  export type KorKitchenOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<KorKitchenOrderCreateWithoutItemsInput, KorKitchenOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: KorKitchenOrderCreateOrConnectWithoutItemsInput
    connect?: KorKitchenOrderWhereUniqueInput
  }

  export type KorKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<KorKitchenMenuCreateWithoutOrderItemsInput, KorKitchenMenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: KorKitchenMenuCreateOrConnectWithoutOrderItemsInput
    upsert?: KorKitchenMenuUpsertWithoutOrderItemsInput
    connect?: KorKitchenMenuWhereUniqueInput
    update?: XOR<KorKitchenMenuUpdateWithoutOrderItemsInput, KorKitchenMenuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type KorKitchenOrderUpdateOneWithoutItemsNestedInput = {
    create?: XOR<KorKitchenOrderCreateWithoutItemsInput, KorKitchenOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: KorKitchenOrderCreateOrConnectWithoutItemsInput
    upsert?: KorKitchenOrderUpsertWithoutItemsInput
    disconnect?: boolean
    delete?: boolean
    connect?: KorKitchenOrderWhereUniqueInput
    update?: XOR<KorKitchenOrderUpdateWithoutItemsInput, KorKitchenOrderUncheckedUpdateWithoutItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriviaQuestionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuestionCreateWithoutCategoryInput>, Enumerable<TriviaQuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuestionCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuestionCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuestionWhereUniqueInput>
  }

  export type TriviaRoundCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type TriviaQuestionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuestionCreateWithoutCategoryInput>, Enumerable<TriviaQuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuestionCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuestionCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuestionWhereUniqueInput>
  }

  export type TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type TriviaQuestionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaQuestionCreateWithoutCategoryInput>, Enumerable<TriviaQuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuestionCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaQuestionUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaQuestionCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaQuestionWhereUniqueInput>
    update?: Enumerable<TriviaQuestionUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaQuestionUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaQuestionScalarWhereInput>
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

  export type TriviaQuestionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaQuestionCreateWithoutCategoryInput>, Enumerable<TriviaQuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuestionCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaQuestionUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaQuestionCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaQuestionWhereUniqueInput>
    update?: Enumerable<TriviaQuestionUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaQuestionUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaQuestionScalarWhereInput>
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

  export type TriviaCategoryCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TriviaCategoryCreateWithoutQuestionsInput, TriviaCategoryUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutQuestionsInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaChoiceCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuestionInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuestionInput>
    createMany?: TriviaChoiceCreateManyQuestionInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutQuestionInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutQuestionInput>
    createMany?: TriviaRoundQuestionCreateManyQuestionInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaChoiceUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuestionInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuestionInput>
    createMany?: TriviaChoiceCreateManyQuestionInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutQuestionInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutQuestionInput>
    createMany?: TriviaRoundQuestionCreateManyQuestionInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutQuestionsInput, TriviaCategoryUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutQuestionsInput
    upsert?: TriviaCategoryUpsertWithoutQuestionsInput
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutQuestionsInput, TriviaCategoryUncheckedUpdateWithoutQuestionsInput>
  }

  export type TriviaChoiceUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuestionInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: TriviaChoiceCreateManyQuestionInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutQuestionInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: TriviaRoundQuestionCreateManyQuestionInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuestionInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: TriviaChoiceCreateManyQuestionInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutQuestionInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: TriviaRoundQuestionCreateManyQuestionInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaQuestionCreateNestedOneWithoutChoicesInput = {
    create?: XOR<TriviaQuestionCreateWithoutChoicesInput, TriviaQuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutChoicesInput
    connect?: TriviaQuestionWhereUniqueInput
  }

  export type TriviaRoundQuestionCreateNestedManyWithoutUserChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput>
    createMany?: TriviaRoundQuestionCreateManyUserChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaRoundQuestionUncheckedCreateNestedManyWithoutUserChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput>
    createMany?: TriviaRoundQuestionCreateManyUserChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaQuestionUpdateOneRequiredWithoutChoicesNestedInput = {
    create?: XOR<TriviaQuestionCreateWithoutChoicesInput, TriviaQuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutChoicesInput
    upsert?: TriviaQuestionUpsertWithoutChoicesInput
    connect?: TriviaQuestionWhereUniqueInput
    update?: XOR<TriviaQuestionUpdateWithoutChoicesInput, TriviaQuestionUncheckedUpdateWithoutChoicesInput>
  }

  export type TriviaRoundQuestionUpdateManyWithoutUserChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutUserChoiceInput>
    createMany?: TriviaRoundQuestionCreateManyUserChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutUserChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutUserChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutUserChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutUserChoiceInput>
    createMany?: TriviaRoundQuestionCreateManyUserChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutUserChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutUserChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaQuestionCreateNestedOneWithoutRoundQuestionsInput = {
    create?: XOR<TriviaQuestionCreateWithoutRoundQuestionsInput, TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutRoundQuestionsInput
    connect?: TriviaQuestionWhereUniqueInput
  }

  export type TriviaChoiceCreateNestedOneWithoutRoundQuestionsInput = {
    create?: XOR<TriviaChoiceCreateWithoutRoundQuestionsInput, TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutRoundQuestionsInput
    connect?: TriviaChoiceWhereUniqueInput
  }

  export type TriviaRoundCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TriviaRoundCreateWithoutQuestionsInput, TriviaRoundUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutQuestionsInput
    connect?: TriviaRoundWhereUniqueInput
  }

  export type TriviaQuestionUpdateOneRequiredWithoutRoundQuestionsNestedInput = {
    create?: XOR<TriviaQuestionCreateWithoutRoundQuestionsInput, TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutRoundQuestionsInput
    upsert?: TriviaQuestionUpsertWithoutRoundQuestionsInput
    connect?: TriviaQuestionWhereUniqueInput
    update?: XOR<TriviaQuestionUpdateWithoutRoundQuestionsInput, TriviaQuestionUncheckedUpdateWithoutRoundQuestionsInput>
  }

  export type TriviaChoiceUpdateOneRequiredWithoutRoundQuestionsNestedInput = {
    create?: XOR<TriviaChoiceCreateWithoutRoundQuestionsInput, TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutRoundQuestionsInput
    upsert?: TriviaChoiceUpsertWithoutRoundQuestionsInput
    connect?: TriviaChoiceWhereUniqueInput
    update?: XOR<TriviaChoiceUpdateWithoutRoundQuestionsInput, TriviaChoiceUncheckedUpdateWithoutRoundQuestionsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TriviaRoundUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<TriviaRoundCreateWithoutQuestionsInput, TriviaRoundUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutQuestionsInput
    upsert?: TriviaRoundUpsertWithoutQuestionsInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaRoundWhereUniqueInput
    update?: XOR<TriviaRoundUpdateWithoutQuestionsInput, TriviaRoundUncheckedUpdateWithoutQuestionsInput>
  }

  export type TriviaRoundQuestionCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutRoundInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutRoundInput>
    createMany?: TriviaRoundQuestionCreateManyRoundInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutRoundsInput = {
    create?: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutRoundsInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaRoundQuestionUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutRoundInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutRoundInput>
    createMany?: TriviaRoundQuestionCreateManyRoundInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaRoundQuestionUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutRoundInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: TriviaRoundQuestionCreateManyRoundInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaCategoryUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutRoundsInput
    upsert?: TriviaCategoryUpsertWithoutRoundsInput
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutRoundsInput, TriviaCategoryUncheckedUpdateWithoutRoundsInput>
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutRoundInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: TriviaRoundQuestionCreateManyRoundInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TwitterDirectMessageCreateNestedOneWithoutTwitterUserInput = {
    create?: XOR<TwitterDirectMessageCreateWithoutTwitterUserInput, TwitterDirectMessageUncheckedCreateWithoutTwitterUserInput>
    connectOrCreate?: TwitterDirectMessageCreateOrConnectWithoutTwitterUserInput
    connect?: TwitterDirectMessageWhereUniqueInput
  }

  export type TwitterUserRelationCreateNestedOneWithoutTwitterUserInput = {
    create?: XOR<TwitterUserRelationCreateWithoutTwitterUserInput, TwitterUserRelationUncheckedCreateWithoutTwitterUserInput>
    connectOrCreate?: TwitterUserRelationCreateOrConnectWithoutTwitterUserInput
    connect?: TwitterUserRelationWhereUniqueInput
  }

  export type TwitterPostReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TwitterPostReplyCreateWithoutUserInput>, Enumerable<TwitterPostReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostReplyCreateOrConnectWithoutUserInput>
    createMany?: TwitterPostReplyCreateManyUserInputEnvelope
    connect?: Enumerable<TwitterPostReplyWhereUniqueInput>
  }

  export type TwitterPostReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TwitterPostReplyCreateWithoutUserInput>, Enumerable<TwitterPostReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostReplyCreateOrConnectWithoutUserInput>
    createMany?: TwitterPostReplyCreateManyUserInputEnvelope
    connect?: Enumerable<TwitterPostReplyWhereUniqueInput>
  }

  export type TwitterDirectMessageUpdateOneRequiredWithoutTwitterUserNestedInput = {
    create?: XOR<TwitterDirectMessageCreateWithoutTwitterUserInput, TwitterDirectMessageUncheckedCreateWithoutTwitterUserInput>
    connectOrCreate?: TwitterDirectMessageCreateOrConnectWithoutTwitterUserInput
    upsert?: TwitterDirectMessageUpsertWithoutTwitterUserInput
    connect?: TwitterDirectMessageWhereUniqueInput
    update?: XOR<TwitterDirectMessageUpdateWithoutTwitterUserInput, TwitterDirectMessageUncheckedUpdateWithoutTwitterUserInput>
  }

  export type TwitterUserRelationUpdateOneRequiredWithoutTwitterUserNestedInput = {
    create?: XOR<TwitterUserRelationCreateWithoutTwitterUserInput, TwitterUserRelationUncheckedCreateWithoutTwitterUserInput>
    connectOrCreate?: TwitterUserRelationCreateOrConnectWithoutTwitterUserInput
    upsert?: TwitterUserRelationUpsertWithoutTwitterUserInput
    connect?: TwitterUserRelationWhereUniqueInput
    update?: XOR<TwitterUserRelationUpdateWithoutTwitterUserInput, TwitterUserRelationUncheckedUpdateWithoutTwitterUserInput>
  }

  export type TwitterPostReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TwitterPostReplyCreateWithoutUserInput>, Enumerable<TwitterPostReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TwitterPostReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TwitterPostReplyCreateManyUserInputEnvelope
    set?: Enumerable<TwitterPostReplyWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostReplyWhereUniqueInput>
    delete?: Enumerable<TwitterPostReplyWhereUniqueInput>
    connect?: Enumerable<TwitterPostReplyWhereUniqueInput>
    update?: Enumerable<TwitterPostReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TwitterPostReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TwitterPostReplyScalarWhereInput>
  }

  export type TwitterPostReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TwitterPostReplyCreateWithoutUserInput>, Enumerable<TwitterPostReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TwitterPostReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TwitterPostReplyCreateManyUserInputEnvelope
    set?: Enumerable<TwitterPostReplyWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostReplyWhereUniqueInput>
    delete?: Enumerable<TwitterPostReplyWhereUniqueInput>
    connect?: Enumerable<TwitterPostReplyWhereUniqueInput>
    update?: Enumerable<TwitterPostReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TwitterPostReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TwitterPostReplyScalarWhereInput>
  }

  export type TwitterPostReplyCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<TwitterPostReplyCreateWithoutPostInput>, Enumerable<TwitterPostReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<TwitterPostReplyCreateOrConnectWithoutPostInput>
    createMany?: TwitterPostReplyCreateManyPostInputEnvelope
    connect?: Enumerable<TwitterPostReplyWhereUniqueInput>
  }

  export type PostOnHashtagCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutPostInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutPostInput>
    createMany?: PostOnHashtagCreateManyPostInputEnvelope
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
  }

  export type TwitterPostReplyUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<TwitterPostReplyCreateWithoutPostInput>, Enumerable<TwitterPostReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<TwitterPostReplyCreateOrConnectWithoutPostInput>
    createMany?: TwitterPostReplyCreateManyPostInputEnvelope
    connect?: Enumerable<TwitterPostReplyWhereUniqueInput>
  }

  export type PostOnHashtagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<PostOnHashtagCreateWithoutPostInput>, Enumerable<PostOnHashtagUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<PostOnHashtagCreateOrConnectWithoutPostInput>
    createMany?: PostOnHashtagCreateManyPostInputEnvelope
    connect?: Enumerable<PostOnHashtagWhereUniqueInput>
  }

  export type TwitterPostReplyUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<TwitterPostReplyCreateWithoutPostInput>, Enumerable<TwitterPostReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<TwitterPostReplyCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<TwitterPostReplyUpsertWithWhereUniqueWithoutPostInput>
    createMany?: TwitterPostReplyCreateManyPostInputEnvelope
    set?: Enumerable<TwitterPostReplyWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostReplyWhereUniqueInput>
    delete?: Enumerable<TwitterPostReplyWhereUniqueInput>
    connect?: Enumerable<TwitterPostReplyWhereUniqueInput>
    update?: Enumerable<TwitterPostReplyUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<TwitterPostReplyUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<TwitterPostReplyScalarWhereInput>
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

  export type TwitterPostReplyUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<TwitterPostReplyCreateWithoutPostInput>, Enumerable<TwitterPostReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<TwitterPostReplyCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<TwitterPostReplyUpsertWithWhereUniqueWithoutPostInput>
    createMany?: TwitterPostReplyCreateManyPostInputEnvelope
    set?: Enumerable<TwitterPostReplyWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostReplyWhereUniqueInput>
    delete?: Enumerable<TwitterPostReplyWhereUniqueInput>
    connect?: Enumerable<TwitterPostReplyWhereUniqueInput>
    update?: Enumerable<TwitterPostReplyUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<TwitterPostReplyUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<TwitterPostReplyScalarWhereInput>
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

  export type TwitterUserCreateNestedManyWithoutDirectMessageInput = {
    create?: XOR<Enumerable<TwitterUserCreateWithoutDirectMessageInput>, Enumerable<TwitterUserUncheckedCreateWithoutDirectMessageInput>>
    connectOrCreate?: Enumerable<TwitterUserCreateOrConnectWithoutDirectMessageInput>
    createMany?: TwitterUserCreateManyDirectMessageInputEnvelope
    connect?: Enumerable<TwitterUserWhereUniqueInput>
  }

  export type TwitterUserUncheckedCreateNestedManyWithoutDirectMessageInput = {
    create?: XOR<Enumerable<TwitterUserCreateWithoutDirectMessageInput>, Enumerable<TwitterUserUncheckedCreateWithoutDirectMessageInput>>
    connectOrCreate?: Enumerable<TwitterUserCreateOrConnectWithoutDirectMessageInput>
    createMany?: TwitterUserCreateManyDirectMessageInputEnvelope
    connect?: Enumerable<TwitterUserWhereUniqueInput>
  }

  export type TwitterUserUpdateManyWithoutDirectMessageNestedInput = {
    create?: XOR<Enumerable<TwitterUserCreateWithoutDirectMessageInput>, Enumerable<TwitterUserUncheckedCreateWithoutDirectMessageInput>>
    connectOrCreate?: Enumerable<TwitterUserCreateOrConnectWithoutDirectMessageInput>
    upsert?: Enumerable<TwitterUserUpsertWithWhereUniqueWithoutDirectMessageInput>
    createMany?: TwitterUserCreateManyDirectMessageInputEnvelope
    set?: Enumerable<TwitterUserWhereUniqueInput>
    disconnect?: Enumerable<TwitterUserWhereUniqueInput>
    delete?: Enumerable<TwitterUserWhereUniqueInput>
    connect?: Enumerable<TwitterUserWhereUniqueInput>
    update?: Enumerable<TwitterUserUpdateWithWhereUniqueWithoutDirectMessageInput>
    updateMany?: Enumerable<TwitterUserUpdateManyWithWhereWithoutDirectMessageInput>
    deleteMany?: Enumerable<TwitterUserScalarWhereInput>
  }

  export type TwitterUserUncheckedUpdateManyWithoutDirectMessageNestedInput = {
    create?: XOR<Enumerable<TwitterUserCreateWithoutDirectMessageInput>, Enumerable<TwitterUserUncheckedCreateWithoutDirectMessageInput>>
    connectOrCreate?: Enumerable<TwitterUserCreateOrConnectWithoutDirectMessageInput>
    upsert?: Enumerable<TwitterUserUpsertWithWhereUniqueWithoutDirectMessageInput>
    createMany?: TwitterUserCreateManyDirectMessageInputEnvelope
    set?: Enumerable<TwitterUserWhereUniqueInput>
    disconnect?: Enumerable<TwitterUserWhereUniqueInput>
    delete?: Enumerable<TwitterUserWhereUniqueInput>
    connect?: Enumerable<TwitterUserWhereUniqueInput>
    update?: Enumerable<TwitterUserUpdateWithWhereUniqueWithoutDirectMessageInput>
    updateMany?: Enumerable<TwitterUserUpdateManyWithWhereWithoutDirectMessageInput>
    deleteMany?: Enumerable<TwitterUserScalarWhereInput>
  }

  export type TwitterUserCreateNestedManyWithoutUserRelateInput = {
    create?: XOR<Enumerable<TwitterUserCreateWithoutUserRelateInput>, Enumerable<TwitterUserUncheckedCreateWithoutUserRelateInput>>
    connectOrCreate?: Enumerable<TwitterUserCreateOrConnectWithoutUserRelateInput>
    createMany?: TwitterUserCreateManyUserRelateInputEnvelope
    connect?: Enumerable<TwitterUserWhereUniqueInput>
  }

  export type TwitterUserUncheckedCreateNestedManyWithoutUserRelateInput = {
    create?: XOR<Enumerable<TwitterUserCreateWithoutUserRelateInput>, Enumerable<TwitterUserUncheckedCreateWithoutUserRelateInput>>
    connectOrCreate?: Enumerable<TwitterUserCreateOrConnectWithoutUserRelateInput>
    createMany?: TwitterUserCreateManyUserRelateInputEnvelope
    connect?: Enumerable<TwitterUserWhereUniqueInput>
  }

  export type TwitterUserUpdateManyWithoutUserRelateNestedInput = {
    create?: XOR<Enumerable<TwitterUserCreateWithoutUserRelateInput>, Enumerable<TwitterUserUncheckedCreateWithoutUserRelateInput>>
    connectOrCreate?: Enumerable<TwitterUserCreateOrConnectWithoutUserRelateInput>
    upsert?: Enumerable<TwitterUserUpsertWithWhereUniqueWithoutUserRelateInput>
    createMany?: TwitterUserCreateManyUserRelateInputEnvelope
    set?: Enumerable<TwitterUserWhereUniqueInput>
    disconnect?: Enumerable<TwitterUserWhereUniqueInput>
    delete?: Enumerable<TwitterUserWhereUniqueInput>
    connect?: Enumerable<TwitterUserWhereUniqueInput>
    update?: Enumerable<TwitterUserUpdateWithWhereUniqueWithoutUserRelateInput>
    updateMany?: Enumerable<TwitterUserUpdateManyWithWhereWithoutUserRelateInput>
    deleteMany?: Enumerable<TwitterUserScalarWhereInput>
  }

  export type TwitterUserUncheckedUpdateManyWithoutUserRelateNestedInput = {
    create?: XOR<Enumerable<TwitterUserCreateWithoutUserRelateInput>, Enumerable<TwitterUserUncheckedCreateWithoutUserRelateInput>>
    connectOrCreate?: Enumerable<TwitterUserCreateOrConnectWithoutUserRelateInput>
    upsert?: Enumerable<TwitterUserUpsertWithWhereUniqueWithoutUserRelateInput>
    createMany?: TwitterUserCreateManyUserRelateInputEnvelope
    set?: Enumerable<TwitterUserWhereUniqueInput>
    disconnect?: Enumerable<TwitterUserWhereUniqueInput>
    delete?: Enumerable<TwitterUserWhereUniqueInput>
    connect?: Enumerable<TwitterUserWhereUniqueInput>
    update?: Enumerable<TwitterUserUpdateWithWhereUniqueWithoutUserRelateInput>
    updateMany?: Enumerable<TwitterUserUpdateManyWithWhereWithoutUserRelateInput>
    deleteMany?: Enumerable<TwitterUserScalarWhereInput>
  }

  export type TwitterPostCreateNestedOneWithoutTwitterPostReplyInput = {
    create?: XOR<TwitterPostCreateWithoutTwitterPostReplyInput, TwitterPostUncheckedCreateWithoutTwitterPostReplyInput>
    connectOrCreate?: TwitterPostCreateOrConnectWithoutTwitterPostReplyInput
    connect?: TwitterPostWhereUniqueInput
  }

  export type TwitterUserCreateNestedOneWithoutTwitterPostReplyInput = {
    create?: XOR<TwitterUserCreateWithoutTwitterPostReplyInput, TwitterUserUncheckedCreateWithoutTwitterPostReplyInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutTwitterPostReplyInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterPostUpdateOneRequiredWithoutTwitterPostReplyNestedInput = {
    create?: XOR<TwitterPostCreateWithoutTwitterPostReplyInput, TwitterPostUncheckedCreateWithoutTwitterPostReplyInput>
    connectOrCreate?: TwitterPostCreateOrConnectWithoutTwitterPostReplyInput
    upsert?: TwitterPostUpsertWithoutTwitterPostReplyInput
    connect?: TwitterPostWhereUniqueInput
    update?: XOR<TwitterPostUpdateWithoutTwitterPostReplyInput, TwitterPostUncheckedUpdateWithoutTwitterPostReplyInput>
  }

  export type TwitterUserUpdateOneRequiredWithoutTwitterPostReplyNestedInput = {
    create?: XOR<TwitterUserCreateWithoutTwitterPostReplyInput, TwitterUserUncheckedCreateWithoutTwitterPostReplyInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutTwitterPostReplyInput
    upsert?: TwitterUserUpsertWithoutTwitterPostReplyInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutTwitterPostReplyInput, TwitterUserUncheckedUpdateWithoutTwitterPostReplyInput>
  }

  export type TwitterPostCreateNestedOneWithoutPostOnHashtagInput = {
    create?: XOR<TwitterPostCreateWithoutPostOnHashtagInput, TwitterPostUncheckedCreateWithoutPostOnHashtagInput>
    connectOrCreate?: TwitterPostCreateOrConnectWithoutPostOnHashtagInput
    connect?: TwitterPostWhereUniqueInput
  }

  export type TwitterHashtagCreateNestedOneWithoutPostOnHashtagInput = {
    create?: XOR<TwitterHashtagCreateWithoutPostOnHashtagInput, TwitterHashtagUncheckedCreateWithoutPostOnHashtagInput>
    connectOrCreate?: TwitterHashtagCreateOrConnectWithoutPostOnHashtagInput
    connect?: TwitterHashtagWhereUniqueInput
  }

  export type TwitterPostUpdateOneRequiredWithoutPostOnHashtagNestedInput = {
    create?: XOR<TwitterPostCreateWithoutPostOnHashtagInput, TwitterPostUncheckedCreateWithoutPostOnHashtagInput>
    connectOrCreate?: TwitterPostCreateOrConnectWithoutPostOnHashtagInput
    upsert?: TwitterPostUpsertWithoutPostOnHashtagInput
    connect?: TwitterPostWhereUniqueInput
    update?: XOR<TwitterPostUpdateWithoutPostOnHashtagInput, TwitterPostUncheckedUpdateWithoutPostOnHashtagInput>
  }

  export type TwitterHashtagUpdateOneRequiredWithoutPostOnHashtagNestedInput = {
    create?: XOR<TwitterHashtagCreateWithoutPostOnHashtagInput, TwitterHashtagUncheckedCreateWithoutPostOnHashtagInput>
    connectOrCreate?: TwitterHashtagCreateOrConnectWithoutPostOnHashtagInput
    upsert?: TwitterHashtagUpsertWithoutPostOnHashtagInput
    connect?: TwitterHashtagWhereUniqueInput
    update?: XOR<TwitterHashtagUpdateWithoutPostOnHashtagInput, TwitterHashtagUncheckedUpdateWithoutPostOnHashtagInput>
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

  export type KorKitchenMenuCreateWithoutCategoryInput = {
    name: string
    image: string
    price: number
    orderItems?: KorKitchenOrderItemCreateNestedManyWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenMenuUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    image: string
    price: number
    orderItems?: KorKitchenOrderItemUncheckedCreateNestedManyWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenMenuCreateOrConnectWithoutCategoryInput = {
    where: KorKitchenMenuWhereUniqueInput
    create: XOR<KorKitchenMenuCreateWithoutCategoryInput, KorKitchenMenuUncheckedCreateWithoutCategoryInput>
  }

  export type KorKitchenMenuCreateManyCategoryInputEnvelope = {
    data: Enumerable<KorKitchenMenuCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type KorKitchenMenuUpsertWithWhereUniqueWithoutCategoryInput = {
    where: KorKitchenMenuWhereUniqueInput
    update: XOR<KorKitchenMenuUpdateWithoutCategoryInput, KorKitchenMenuUncheckedUpdateWithoutCategoryInput>
    create: XOR<KorKitchenMenuCreateWithoutCategoryInput, KorKitchenMenuUncheckedCreateWithoutCategoryInput>
  }

  export type KorKitchenMenuUpdateWithWhereUniqueWithoutCategoryInput = {
    where: KorKitchenMenuWhereUniqueInput
    data: XOR<KorKitchenMenuUpdateWithoutCategoryInput, KorKitchenMenuUncheckedUpdateWithoutCategoryInput>
  }

  export type KorKitchenMenuUpdateManyWithWhereWithoutCategoryInput = {
    where: KorKitchenMenuScalarWhereInput
    data: XOR<KorKitchenMenuUpdateManyMutationInput, KorKitchenMenuUncheckedUpdateManyWithoutMenuInput>
  }

  export type KorKitchenMenuScalarWhereInput = {
    AND?: Enumerable<KorKitchenMenuScalarWhereInput>
    OR?: Enumerable<KorKitchenMenuScalarWhereInput>
    NOT?: Enumerable<KorKitchenMenuScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    price?: FloatFilter | number
    categoryName?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type KorKitchenCategoryCreateWithoutMenuInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenCategoryUncheckedCreateWithoutMenuInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenCategoryCreateOrConnectWithoutMenuInput = {
    where: KorKitchenCategoryWhereUniqueInput
    create: XOR<KorKitchenCategoryCreateWithoutMenuInput, KorKitchenCategoryUncheckedCreateWithoutMenuInput>
  }

  export type KorKitchenOrderItemCreateWithoutMenuInput = {
    order?: KorKitchenOrderCreateNestedOneWithoutItemsInput
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemUncheckedCreateWithoutMenuInput = {
    id?: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemCreateOrConnectWithoutMenuInput = {
    where: KorKitchenOrderItemWhereUniqueInput
    create: XOR<KorKitchenOrderItemCreateWithoutMenuInput, KorKitchenOrderItemUncheckedCreateWithoutMenuInput>
  }

  export type KorKitchenOrderItemCreateManyMenuInputEnvelope = {
    data: Enumerable<KorKitchenOrderItemCreateManyMenuInput>
    skipDuplicates?: boolean
  }

  export type KorKitchenCategoryUpsertWithoutMenuInput = {
    update: XOR<KorKitchenCategoryUpdateWithoutMenuInput, KorKitchenCategoryUncheckedUpdateWithoutMenuInput>
    create: XOR<KorKitchenCategoryCreateWithoutMenuInput, KorKitchenCategoryUncheckedCreateWithoutMenuInput>
  }

  export type KorKitchenCategoryUpdateWithoutMenuInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenCategoryUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemUpsertWithWhereUniqueWithoutMenuInput = {
    where: KorKitchenOrderItemWhereUniqueInput
    update: XOR<KorKitchenOrderItemUpdateWithoutMenuInput, KorKitchenOrderItemUncheckedUpdateWithoutMenuInput>
    create: XOR<KorKitchenOrderItemCreateWithoutMenuInput, KorKitchenOrderItemUncheckedCreateWithoutMenuInput>
  }

  export type KorKitchenOrderItemUpdateWithWhereUniqueWithoutMenuInput = {
    where: KorKitchenOrderItemWhereUniqueInput
    data: XOR<KorKitchenOrderItemUpdateWithoutMenuInput, KorKitchenOrderItemUncheckedUpdateWithoutMenuInput>
  }

  export type KorKitchenOrderItemUpdateManyWithWhereWithoutMenuInput = {
    where: KorKitchenOrderItemScalarWhereInput
    data: XOR<KorKitchenOrderItemUpdateManyMutationInput, KorKitchenOrderItemUncheckedUpdateManyWithoutOrderItemsInput>
  }

  export type KorKitchenOrderItemScalarWhereInput = {
    AND?: Enumerable<KorKitchenOrderItemScalarWhereInput>
    OR?: Enumerable<KorKitchenOrderItemScalarWhereInput>
    NOT?: Enumerable<KorKitchenOrderItemScalarWhereInput>
    id?: IntFilter | number
    menuId?: IntFilter | number
    orderId?: IntNullableFilter | number | null
    quantity?: IntFilter | number
    totalPrice?: FloatFilter | number
    creatAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type KorKitchenOrderItemCreateWithoutOrderInput = {
    menu: KorKitchenMenuCreateNestedOneWithoutOrderItemsInput
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    menuId: number
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemCreateOrConnectWithoutOrderInput = {
    where: KorKitchenOrderItemWhereUniqueInput
    create: XOR<KorKitchenOrderItemCreateWithoutOrderInput, KorKitchenOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type KorKitchenOrderItemCreateManyOrderInputEnvelope = {
    data: Enumerable<KorKitchenOrderItemCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type KorKitchenOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: KorKitchenOrderItemWhereUniqueInput
    update: XOR<KorKitchenOrderItemUpdateWithoutOrderInput, KorKitchenOrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<KorKitchenOrderItemCreateWithoutOrderInput, KorKitchenOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type KorKitchenOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: KorKitchenOrderItemWhereUniqueInput
    data: XOR<KorKitchenOrderItemUpdateWithoutOrderInput, KorKitchenOrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type KorKitchenOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: KorKitchenOrderItemScalarWhereInput
    data: XOR<KorKitchenOrderItemUpdateManyMutationInput, KorKitchenOrderItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type KorKitchenMenuCreateWithoutOrderItemsInput = {
    name: string
    image: string
    price: number
    category?: KorKitchenCategoryCreateNestedOneWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenMenuUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenMenuCreateOrConnectWithoutOrderItemsInput = {
    where: KorKitchenMenuWhereUniqueInput
    create: XOR<KorKitchenMenuCreateWithoutOrderItemsInput, KorKitchenMenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type KorKitchenOrderCreateWithoutItemsInput = {
    status?: string
    tableId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderUncheckedCreateWithoutItemsInput = {
    id?: number
    status?: string
    tableId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderCreateOrConnectWithoutItemsInput = {
    where: KorKitchenOrderWhereUniqueInput
    create: XOR<KorKitchenOrderCreateWithoutItemsInput, KorKitchenOrderUncheckedCreateWithoutItemsInput>
  }

  export type KorKitchenMenuUpsertWithoutOrderItemsInput = {
    update: XOR<KorKitchenMenuUpdateWithoutOrderItemsInput, KorKitchenMenuUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<KorKitchenMenuCreateWithoutOrderItemsInput, KorKitchenMenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type KorKitchenMenuUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: KorKitchenCategoryUpdateOneWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenMenuUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderUpsertWithoutItemsInput = {
    update: XOR<KorKitchenOrderUpdateWithoutItemsInput, KorKitchenOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<KorKitchenOrderCreateWithoutItemsInput, KorKitchenOrderUncheckedCreateWithoutItemsInput>
  }

  export type KorKitchenOrderUpdateWithoutItemsInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuestionCreateWithoutCategoryInput = {
    name: string
    answerID: number
    choices?: TriviaChoiceCreateNestedManyWithoutQuestionInput
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    answerID: number
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuestionInput
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionCreateOrConnectWithoutCategoryInput = {
    where: TriviaQuestionWhereUniqueInput
    create: XOR<TriviaQuestionCreateWithoutCategoryInput, TriviaQuestionUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuestionCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaQuestionCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundCreateWithoutCategoryInput = {
    user: string
    questions?: TriviaRoundQuestionCreateNestedManyWithoutRoundInput
    totalResult: number
    createAt?: Date | string
  }

  export type TriviaRoundUncheckedCreateWithoutCategoryInput = {
    id?: number
    user: string
    questions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutRoundInput
    totalResult: number
    createAt?: Date | string
  }

  export type TriviaRoundCreateOrConnectWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutCategoryInput, TriviaRoundUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaRoundCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaRoundCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuestionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TriviaQuestionWhereUniqueInput
    update: XOR<TriviaQuestionUpdateWithoutCategoryInput, TriviaQuestionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TriviaQuestionCreateWithoutCategoryInput, TriviaQuestionUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuestionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TriviaQuestionWhereUniqueInput
    data: XOR<TriviaQuestionUpdateWithoutCategoryInput, TriviaQuestionUncheckedUpdateWithoutCategoryInput>
  }

  export type TriviaQuestionUpdateManyWithWhereWithoutCategoryInput = {
    where: TriviaQuestionScalarWhereInput
    data: XOR<TriviaQuestionUpdateManyMutationInput, TriviaQuestionUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type TriviaQuestionScalarWhereInput = {
    AND?: Enumerable<TriviaQuestionScalarWhereInput>
    OR?: Enumerable<TriviaQuestionScalarWhereInput>
    NOT?: Enumerable<TriviaQuestionScalarWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    name?: StringFilter | string
    answerID?: IntFilter | number
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
    user?: StringFilter | string
    categoryId?: IntFilter | number
    totalResult?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
  }

  export type TriviaCategoryCreateWithoutQuestionsInput = {
    name: string
    rounds?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateWithoutQuestionsInput = {
    id?: number
    name: string
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryCreateOrConnectWithoutQuestionsInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutQuestionsInput, TriviaCategoryUncheckedCreateWithoutQuestionsInput>
  }

  export type TriviaChoiceCreateWithoutQuestionInput = {
    name: string
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceUncheckedCreateWithoutQuestionInput = {
    id?: number
    name: string
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceCreateOrConnectWithoutQuestionInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutQuestionInput, TriviaChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type TriviaChoiceCreateManyQuestionInputEnvelope = {
    data: Enumerable<TriviaChoiceCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundQuestionCreateWithoutQuestionInput = {
    userChoice: TriviaChoiceCreateNestedOneWithoutRoundQuestionsInput
    quizResult: boolean
    round?: TriviaRoundCreateNestedOneWithoutQuestionsInput
  }

  export type TriviaRoundQuestionUncheckedCreateWithoutQuestionInput = {
    id?: number
    choiceId: number
    quizResult: boolean
    roundId?: number | null
  }

  export type TriviaRoundQuestionCreateOrConnectWithoutQuestionInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    create: XOR<TriviaRoundQuestionCreateWithoutQuestionInput, TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type TriviaRoundQuestionCreateManyQuestionInputEnvelope = {
    data: Enumerable<TriviaRoundQuestionCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryUpsertWithoutQuestionsInput = {
    update: XOR<TriviaCategoryUpdateWithoutQuestionsInput, TriviaCategoryUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TriviaCategoryCreateWithoutQuestionsInput, TriviaCategoryUncheckedCreateWithoutQuestionsInput>
  }

  export type TriviaCategoryUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    rounds?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rounds?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaChoiceUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TriviaChoiceWhereUniqueInput
    update: XOR<TriviaChoiceUpdateWithoutQuestionInput, TriviaChoiceUncheckedUpdateWithoutQuestionInput>
    create: XOR<TriviaChoiceCreateWithoutQuestionInput, TriviaChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type TriviaChoiceUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TriviaChoiceWhereUniqueInput
    data: XOR<TriviaChoiceUpdateWithoutQuestionInput, TriviaChoiceUncheckedUpdateWithoutQuestionInput>
  }

  export type TriviaChoiceUpdateManyWithWhereWithoutQuestionInput = {
    where: TriviaChoiceScalarWhereInput
    data: XOR<TriviaChoiceUpdateManyMutationInput, TriviaChoiceUncheckedUpdateManyWithoutChoicesInput>
  }

  export type TriviaChoiceScalarWhereInput = {
    AND?: Enumerable<TriviaChoiceScalarWhereInput>
    OR?: Enumerable<TriviaChoiceScalarWhereInput>
    NOT?: Enumerable<TriviaChoiceScalarWhereInput>
    id?: IntFilter | number
    quizId?: IntFilter | number
    name?: StringFilter | string
  }

  export type TriviaRoundQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    update: XOR<TriviaRoundQuestionUpdateWithoutQuestionInput, TriviaRoundQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<TriviaRoundQuestionCreateWithoutQuestionInput, TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type TriviaRoundQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    data: XOR<TriviaRoundQuestionUpdateWithoutQuestionInput, TriviaRoundQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type TriviaRoundQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: TriviaRoundQuestionScalarWhereInput
    data: XOR<TriviaRoundQuestionUpdateManyMutationInput, TriviaRoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput>
  }

  export type TriviaRoundQuestionScalarWhereInput = {
    AND?: Enumerable<TriviaRoundQuestionScalarWhereInput>
    OR?: Enumerable<TriviaRoundQuestionScalarWhereInput>
    NOT?: Enumerable<TriviaRoundQuestionScalarWhereInput>
    id?: IntFilter | number
    quizId?: IntFilter | number
    choiceId?: IntFilter | number
    quizResult?: BoolFilter | boolean
    roundId?: IntNullableFilter | number | null
  }

  export type TriviaQuestionCreateWithoutChoicesInput = {
    category: TriviaCategoryCreateNestedOneWithoutQuestionsInput
    name: string
    answerID: number
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionUncheckedCreateWithoutChoicesInput = {
    id?: number
    categoryId: number
    name: string
    answerID: number
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionCreateOrConnectWithoutChoicesInput = {
    where: TriviaQuestionWhereUniqueInput
    create: XOR<TriviaQuestionCreateWithoutChoicesInput, TriviaQuestionUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaRoundQuestionCreateWithoutUserChoiceInput = {
    question: TriviaQuestionCreateNestedOneWithoutRoundQuestionsInput
    quizResult: boolean
    round?: TriviaRoundCreateNestedOneWithoutQuestionsInput
  }

  export type TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput = {
    id?: number
    quizId: number
    quizResult: boolean
    roundId?: number | null
  }

  export type TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    create: XOR<TriviaRoundQuestionCreateWithoutUserChoiceInput, TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuestionCreateManyUserChoiceInputEnvelope = {
    data: Enumerable<TriviaRoundQuestionCreateManyUserChoiceInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuestionUpsertWithoutChoicesInput = {
    update: XOR<TriviaQuestionUpdateWithoutChoicesInput, TriviaQuestionUncheckedUpdateWithoutChoicesInput>
    create: XOR<TriviaQuestionCreateWithoutChoicesInput, TriviaQuestionUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaQuestionUpdateWithoutChoicesInput = {
    category?: TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaQuestionUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaRoundQuestionUpsertWithWhereUniqueWithoutUserChoiceInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    update: XOR<TriviaRoundQuestionUpdateWithoutUserChoiceInput, TriviaRoundQuestionUncheckedUpdateWithoutUserChoiceInput>
    create: XOR<TriviaRoundQuestionCreateWithoutUserChoiceInput, TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuestionUpdateWithWhereUniqueWithoutUserChoiceInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    data: XOR<TriviaRoundQuestionUpdateWithoutUserChoiceInput, TriviaRoundQuestionUncheckedUpdateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuestionUpdateManyWithWhereWithoutUserChoiceInput = {
    where: TriviaRoundQuestionScalarWhereInput
    data: XOR<TriviaRoundQuestionUpdateManyMutationInput, TriviaRoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput>
  }

  export type TriviaQuestionCreateWithoutRoundQuestionsInput = {
    category: TriviaCategoryCreateNestedOneWithoutQuestionsInput
    name: string
    answerID: number
    choices?: TriviaChoiceCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput = {
    id?: number
    categoryId: number
    name: string
    answerID: number
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionCreateOrConnectWithoutRoundQuestionsInput = {
    where: TriviaQuestionWhereUniqueInput
    create: XOR<TriviaQuestionCreateWithoutRoundQuestionsInput, TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaChoiceCreateWithoutRoundQuestionsInput = {
    question: TriviaQuestionCreateNestedOneWithoutChoicesInput
    name: string
  }

  export type TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput = {
    id?: number
    quizId: number
    name: string
  }

  export type TriviaChoiceCreateOrConnectWithoutRoundQuestionsInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutRoundQuestionsInput, TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaRoundCreateWithoutQuestionsInput = {
    user: string
    category: TriviaCategoryCreateNestedOneWithoutRoundsInput
    totalResult: number
    createAt?: Date | string
  }

  export type TriviaRoundUncheckedCreateWithoutQuestionsInput = {
    id?: number
    user: string
    categoryId: number
    totalResult: number
    createAt?: Date | string
  }

  export type TriviaRoundCreateOrConnectWithoutQuestionsInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutQuestionsInput, TriviaRoundUncheckedCreateWithoutQuestionsInput>
  }

  export type TriviaQuestionUpsertWithoutRoundQuestionsInput = {
    update: XOR<TriviaQuestionUpdateWithoutRoundQuestionsInput, TriviaQuestionUncheckedUpdateWithoutRoundQuestionsInput>
    create: XOR<TriviaQuestionCreateWithoutRoundQuestionsInput, TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaQuestionUpdateWithoutRoundQuestionsInput = {
    category?: TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
    choices?: TriviaChoiceUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaQuestionUncheckedUpdateWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaChoiceUpsertWithoutRoundQuestionsInput = {
    update: XOR<TriviaChoiceUpdateWithoutRoundQuestionsInput, TriviaChoiceUncheckedUpdateWithoutRoundQuestionsInput>
    create: XOR<TriviaChoiceCreateWithoutRoundQuestionsInput, TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaChoiceUpdateWithoutRoundQuestionsInput = {
    question?: TriviaQuestionUpdateOneRequiredWithoutChoicesNestedInput
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaChoiceUncheckedUpdateWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaRoundUpsertWithoutQuestionsInput = {
    update: XOR<TriviaRoundUpdateWithoutQuestionsInput, TriviaRoundUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TriviaRoundCreateWithoutQuestionsInput, TriviaRoundUncheckedCreateWithoutQuestionsInput>
  }

  export type TriviaRoundUpdateWithoutQuestionsInput = {
    user?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneRequiredWithoutRoundsNestedInput
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundQuestionCreateWithoutRoundInput = {
    question: TriviaQuestionCreateNestedOneWithoutRoundQuestionsInput
    userChoice: TriviaChoiceCreateNestedOneWithoutRoundQuestionsInput
    quizResult: boolean
  }

  export type TriviaRoundQuestionUncheckedCreateWithoutRoundInput = {
    id?: number
    quizId: number
    choiceId: number
    quizResult: boolean
  }

  export type TriviaRoundQuestionCreateOrConnectWithoutRoundInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    create: XOR<TriviaRoundQuestionCreateWithoutRoundInput, TriviaRoundQuestionUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuestionCreateManyRoundInputEnvelope = {
    data: Enumerable<TriviaRoundQuestionCreateManyRoundInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryCreateWithoutRoundsInput = {
    name: string
    questions?: TriviaQuestionCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateWithoutRoundsInput = {
    id?: number
    name: string
    questions?: TriviaQuestionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryCreateOrConnectWithoutRoundsInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaRoundQuestionUpsertWithWhereUniqueWithoutRoundInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    update: XOR<TriviaRoundQuestionUpdateWithoutRoundInput, TriviaRoundQuestionUncheckedUpdateWithoutRoundInput>
    create: XOR<TriviaRoundQuestionCreateWithoutRoundInput, TriviaRoundQuestionUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuestionUpdateWithWhereUniqueWithoutRoundInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    data: XOR<TriviaRoundQuestionUpdateWithoutRoundInput, TriviaRoundQuestionUncheckedUpdateWithoutRoundInput>
  }

  export type TriviaRoundQuestionUpdateManyWithWhereWithoutRoundInput = {
    where: TriviaRoundQuestionScalarWhereInput
    data: XOR<TriviaRoundQuestionUpdateManyMutationInput, TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type TriviaCategoryUpsertWithoutRoundsInput = {
    update: XOR<TriviaCategoryUpdateWithoutRoundsInput, TriviaCategoryUncheckedUpdateWithoutRoundsInput>
    create: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaCategoryUpdateWithoutRoundsInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: TriviaQuestionUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    questions?: TriviaQuestionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TwitterDirectMessageCreateWithoutTwitterUserInput = {
    from: string
    to: string
    message: string
    createAt?: Date | string
  }

  export type TwitterDirectMessageUncheckedCreateWithoutTwitterUserInput = {
    id?: number
    from: string
    to: string
    message: string
    createAt?: Date | string
  }

  export type TwitterDirectMessageCreateOrConnectWithoutTwitterUserInput = {
    where: TwitterDirectMessageWhereUniqueInput
    create: XOR<TwitterDirectMessageCreateWithoutTwitterUserInput, TwitterDirectMessageUncheckedCreateWithoutTwitterUserInput>
  }

  export type TwitterUserRelationCreateWithoutTwitterUserInput = {
    follower: string
    following: string
  }

  export type TwitterUserRelationUncheckedCreateWithoutTwitterUserInput = {
    id?: number
    follower: string
    following: string
  }

  export type TwitterUserRelationCreateOrConnectWithoutTwitterUserInput = {
    where: TwitterUserRelationWhereUniqueInput
    create: XOR<TwitterUserRelationCreateWithoutTwitterUserInput, TwitterUserRelationUncheckedCreateWithoutTwitterUserInput>
  }

  export type TwitterPostReplyCreateWithoutUserInput = {
    message: string
    post: TwitterPostCreateNestedOneWithoutTwitterPostReplyInput
    createAt?: Date | string
  }

  export type TwitterPostReplyUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    postId: number
    createAt?: Date | string
  }

  export type TwitterPostReplyCreateOrConnectWithoutUserInput = {
    where: TwitterPostReplyWhereUniqueInput
    create: XOR<TwitterPostReplyCreateWithoutUserInput, TwitterPostReplyUncheckedCreateWithoutUserInput>
  }

  export type TwitterPostReplyCreateManyUserInputEnvelope = {
    data: Enumerable<TwitterPostReplyCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TwitterDirectMessageUpsertWithoutTwitterUserInput = {
    update: XOR<TwitterDirectMessageUpdateWithoutTwitterUserInput, TwitterDirectMessageUncheckedUpdateWithoutTwitterUserInput>
    create: XOR<TwitterDirectMessageCreateWithoutTwitterUserInput, TwitterDirectMessageUncheckedCreateWithoutTwitterUserInput>
  }

  export type TwitterDirectMessageUpdateWithoutTwitterUserInput = {
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageUncheckedUpdateWithoutTwitterUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserRelationUpsertWithoutTwitterUserInput = {
    update: XOR<TwitterUserRelationUpdateWithoutTwitterUserInput, TwitterUserRelationUncheckedUpdateWithoutTwitterUserInput>
    create: XOR<TwitterUserRelationCreateWithoutTwitterUserInput, TwitterUserRelationUncheckedCreateWithoutTwitterUserInput>
  }

  export type TwitterUserRelationUpdateWithoutTwitterUserInput = {
    follower?: StringFieldUpdateOperationsInput | string
    following?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterUserRelationUncheckedUpdateWithoutTwitterUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower?: StringFieldUpdateOperationsInput | string
    following?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterPostReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: TwitterPostReplyWhereUniqueInput
    update: XOR<TwitterPostReplyUpdateWithoutUserInput, TwitterPostReplyUncheckedUpdateWithoutUserInput>
    create: XOR<TwitterPostReplyCreateWithoutUserInput, TwitterPostReplyUncheckedCreateWithoutUserInput>
  }

  export type TwitterPostReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: TwitterPostReplyWhereUniqueInput
    data: XOR<TwitterPostReplyUpdateWithoutUserInput, TwitterPostReplyUncheckedUpdateWithoutUserInput>
  }

  export type TwitterPostReplyUpdateManyWithWhereWithoutUserInput = {
    where: TwitterPostReplyScalarWhereInput
    data: XOR<TwitterPostReplyUpdateManyMutationInput, TwitterPostReplyUncheckedUpdateManyWithoutTwitterPostReplyInput>
  }

  export type TwitterPostReplyScalarWhereInput = {
    AND?: Enumerable<TwitterPostReplyScalarWhereInput>
    OR?: Enumerable<TwitterPostReplyScalarWhereInput>
    NOT?: Enumerable<TwitterPostReplyScalarWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    postId?: IntFilter | number
    userId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
  }

  export type TwitterPostReplyCreateWithoutPostInput = {
    message: string
    user: TwitterUserCreateNestedOneWithoutTwitterPostReplyInput
    createAt?: Date | string
  }

  export type TwitterPostReplyUncheckedCreateWithoutPostInput = {
    id?: number
    message: string
    userId: number
    createAt?: Date | string
  }

  export type TwitterPostReplyCreateOrConnectWithoutPostInput = {
    where: TwitterPostReplyWhereUniqueInput
    create: XOR<TwitterPostReplyCreateWithoutPostInput, TwitterPostReplyUncheckedCreateWithoutPostInput>
  }

  export type TwitterPostReplyCreateManyPostInputEnvelope = {
    data: Enumerable<TwitterPostReplyCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type PostOnHashtagCreateWithoutPostInput = {
    hashtag: TwitterHashtagCreateNestedOneWithoutPostOnHashtagInput
  }

  export type PostOnHashtagUncheckedCreateWithoutPostInput = {
    id?: number
    hashtagId: number
  }

  export type PostOnHashtagCreateOrConnectWithoutPostInput = {
    where: PostOnHashtagWhereUniqueInput
    create: XOR<PostOnHashtagCreateWithoutPostInput, PostOnHashtagUncheckedCreateWithoutPostInput>
  }

  export type PostOnHashtagCreateManyPostInputEnvelope = {
    data: Enumerable<PostOnHashtagCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type TwitterPostReplyUpsertWithWhereUniqueWithoutPostInput = {
    where: TwitterPostReplyWhereUniqueInput
    update: XOR<TwitterPostReplyUpdateWithoutPostInput, TwitterPostReplyUncheckedUpdateWithoutPostInput>
    create: XOR<TwitterPostReplyCreateWithoutPostInput, TwitterPostReplyUncheckedCreateWithoutPostInput>
  }

  export type TwitterPostReplyUpdateWithWhereUniqueWithoutPostInput = {
    where: TwitterPostReplyWhereUniqueInput
    data: XOR<TwitterPostReplyUpdateWithoutPostInput, TwitterPostReplyUncheckedUpdateWithoutPostInput>
  }

  export type TwitterPostReplyUpdateManyWithWhereWithoutPostInput = {
    where: TwitterPostReplyScalarWhereInput
    data: XOR<TwitterPostReplyUpdateManyMutationInput, TwitterPostReplyUncheckedUpdateManyWithoutTwitterPostReplyInput>
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
  }

  export type PostOnHashtagCreateWithoutHashtagInput = {
    post: TwitterPostCreateNestedOneWithoutPostOnHashtagInput
  }

  export type PostOnHashtagUncheckedCreateWithoutHashtagInput = {
    id?: number
    postId: number
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

  export type TwitterUserCreateWithoutDirectMessageInput = {
    name: string
    image: string
    userRelate: TwitterUserRelationCreateNestedOneWithoutTwitterUserInput
    TwitterPostReply?: TwitterPostReplyCreateNestedManyWithoutUserInput
  }

  export type TwitterUserUncheckedCreateWithoutDirectMessageInput = {
    id?: number
    name: string
    image: string
    userRelationId: number
    TwitterPostReply?: TwitterPostReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type TwitterUserCreateOrConnectWithoutDirectMessageInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutDirectMessageInput, TwitterUserUncheckedCreateWithoutDirectMessageInput>
  }

  export type TwitterUserCreateManyDirectMessageInputEnvelope = {
    data: Enumerable<TwitterUserCreateManyDirectMessageInput>
    skipDuplicates?: boolean
  }

  export type TwitterUserUpsertWithWhereUniqueWithoutDirectMessageInput = {
    where: TwitterUserWhereUniqueInput
    update: XOR<TwitterUserUpdateWithoutDirectMessageInput, TwitterUserUncheckedUpdateWithoutDirectMessageInput>
    create: XOR<TwitterUserCreateWithoutDirectMessageInput, TwitterUserUncheckedCreateWithoutDirectMessageInput>
  }

  export type TwitterUserUpdateWithWhereUniqueWithoutDirectMessageInput = {
    where: TwitterUserWhereUniqueInput
    data: XOR<TwitterUserUpdateWithoutDirectMessageInput, TwitterUserUncheckedUpdateWithoutDirectMessageInput>
  }

  export type TwitterUserUpdateManyWithWhereWithoutDirectMessageInput = {
    where: TwitterUserScalarWhereInput
    data: XOR<TwitterUserUpdateManyMutationInput, TwitterUserUncheckedUpdateManyWithoutTwitterUserInput>
  }

  export type TwitterUserScalarWhereInput = {
    AND?: Enumerable<TwitterUserScalarWhereInput>
    OR?: Enumerable<TwitterUserScalarWhereInput>
    NOT?: Enumerable<TwitterUserScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    directMessageId?: IntFilter | number
    userRelationId?: IntFilter | number
  }

  export type TwitterUserCreateWithoutUserRelateInput = {
    name: string
    image: string
    directMessage: TwitterDirectMessageCreateNestedOneWithoutTwitterUserInput
    TwitterPostReply?: TwitterPostReplyCreateNestedManyWithoutUserInput
  }

  export type TwitterUserUncheckedCreateWithoutUserRelateInput = {
    id?: number
    name: string
    image: string
    directMessageId: number
    TwitterPostReply?: TwitterPostReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type TwitterUserCreateOrConnectWithoutUserRelateInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutUserRelateInput, TwitterUserUncheckedCreateWithoutUserRelateInput>
  }

  export type TwitterUserCreateManyUserRelateInputEnvelope = {
    data: Enumerable<TwitterUserCreateManyUserRelateInput>
    skipDuplicates?: boolean
  }

  export type TwitterUserUpsertWithWhereUniqueWithoutUserRelateInput = {
    where: TwitterUserWhereUniqueInput
    update: XOR<TwitterUserUpdateWithoutUserRelateInput, TwitterUserUncheckedUpdateWithoutUserRelateInput>
    create: XOR<TwitterUserCreateWithoutUserRelateInput, TwitterUserUncheckedCreateWithoutUserRelateInput>
  }

  export type TwitterUserUpdateWithWhereUniqueWithoutUserRelateInput = {
    where: TwitterUserWhereUniqueInput
    data: XOR<TwitterUserUpdateWithoutUserRelateInput, TwitterUserUncheckedUpdateWithoutUserRelateInput>
  }

  export type TwitterUserUpdateManyWithWhereWithoutUserRelateInput = {
    where: TwitterUserScalarWhereInput
    data: XOR<TwitterUserUpdateManyMutationInput, TwitterUserUncheckedUpdateManyWithoutTwitterUserInput>
  }

  export type TwitterPostCreateWithoutTwitterPostReplyInput = {
    message: string
    PostOnHashtag?: PostOnHashtagCreateNestedManyWithoutPostInput
  }

  export type TwitterPostUncheckedCreateWithoutTwitterPostReplyInput = {
    id?: number
    message: string
    PostOnHashtag?: PostOnHashtagUncheckedCreateNestedManyWithoutPostInput
  }

  export type TwitterPostCreateOrConnectWithoutTwitterPostReplyInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutTwitterPostReplyInput, TwitterPostUncheckedCreateWithoutTwitterPostReplyInput>
  }

  export type TwitterUserCreateWithoutTwitterPostReplyInput = {
    name: string
    image: string
    directMessage: TwitterDirectMessageCreateNestedOneWithoutTwitterUserInput
    userRelate: TwitterUserRelationCreateNestedOneWithoutTwitterUserInput
  }

  export type TwitterUserUncheckedCreateWithoutTwitterPostReplyInput = {
    id?: number
    name: string
    image: string
    directMessageId: number
    userRelationId: number
  }

  export type TwitterUserCreateOrConnectWithoutTwitterPostReplyInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutTwitterPostReplyInput, TwitterUserUncheckedCreateWithoutTwitterPostReplyInput>
  }

  export type TwitterPostUpsertWithoutTwitterPostReplyInput = {
    update: XOR<TwitterPostUpdateWithoutTwitterPostReplyInput, TwitterPostUncheckedUpdateWithoutTwitterPostReplyInput>
    create: XOR<TwitterPostCreateWithoutTwitterPostReplyInput, TwitterPostUncheckedCreateWithoutTwitterPostReplyInput>
  }

  export type TwitterPostUpdateWithoutTwitterPostReplyInput = {
    message?: StringFieldUpdateOperationsInput | string
    PostOnHashtag?: PostOnHashtagUpdateManyWithoutPostNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutTwitterPostReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    PostOnHashtag?: PostOnHashtagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TwitterUserUpsertWithoutTwitterPostReplyInput = {
    update: XOR<TwitterUserUpdateWithoutTwitterPostReplyInput, TwitterUserUncheckedUpdateWithoutTwitterPostReplyInput>
    create: XOR<TwitterUserCreateWithoutTwitterPostReplyInput, TwitterUserUncheckedCreateWithoutTwitterPostReplyInput>
  }

  export type TwitterUserUpdateWithoutTwitterPostReplyInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    directMessage?: TwitterDirectMessageUpdateOneRequiredWithoutTwitterUserNestedInput
    userRelate?: TwitterUserRelationUpdateOneRequiredWithoutTwitterUserNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutTwitterPostReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    directMessageId?: IntFieldUpdateOperationsInput | number
    userRelationId?: IntFieldUpdateOperationsInput | number
  }

  export type TwitterPostCreateWithoutPostOnHashtagInput = {
    message: string
    TwitterPostReply?: TwitterPostReplyCreateNestedManyWithoutPostInput
  }

  export type TwitterPostUncheckedCreateWithoutPostOnHashtagInput = {
    id?: number
    message: string
    TwitterPostReply?: TwitterPostReplyUncheckedCreateNestedManyWithoutPostInput
  }

  export type TwitterPostCreateOrConnectWithoutPostOnHashtagInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutPostOnHashtagInput, TwitterPostUncheckedCreateWithoutPostOnHashtagInput>
  }

  export type TwitterHashtagCreateWithoutPostOnHashtagInput = {
    message: string
  }

  export type TwitterHashtagUncheckedCreateWithoutPostOnHashtagInput = {
    id?: number
    message: string
  }

  export type TwitterHashtagCreateOrConnectWithoutPostOnHashtagInput = {
    where: TwitterHashtagWhereUniqueInput
    create: XOR<TwitterHashtagCreateWithoutPostOnHashtagInput, TwitterHashtagUncheckedCreateWithoutPostOnHashtagInput>
  }

  export type TwitterPostUpsertWithoutPostOnHashtagInput = {
    update: XOR<TwitterPostUpdateWithoutPostOnHashtagInput, TwitterPostUncheckedUpdateWithoutPostOnHashtagInput>
    create: XOR<TwitterPostCreateWithoutPostOnHashtagInput, TwitterPostUncheckedCreateWithoutPostOnHashtagInput>
  }

  export type TwitterPostUpdateWithoutPostOnHashtagInput = {
    message?: StringFieldUpdateOperationsInput | string
    TwitterPostReply?: TwitterPostReplyUpdateManyWithoutPostNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutPostOnHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    TwitterPostReply?: TwitterPostReplyUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TwitterHashtagUpsertWithoutPostOnHashtagInput = {
    update: XOR<TwitterHashtagUpdateWithoutPostOnHashtagInput, TwitterHashtagUncheckedUpdateWithoutPostOnHashtagInput>
    create: XOR<TwitterHashtagCreateWithoutPostOnHashtagInput, TwitterHashtagUncheckedCreateWithoutPostOnHashtagInput>
  }

  export type TwitterHashtagUpdateWithoutPostOnHashtagInput = {
    message?: StringFieldUpdateOperationsInput | string
  }

  export type TwitterHashtagUncheckedUpdateWithoutPostOnHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type KorKitchenMenuCreateManyCategoryInput = {
    id?: number
    name: string
    image: string
    price: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenMenuUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: KorKitchenOrderItemUpdateManyWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenMenuUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: KorKitchenOrderItemUncheckedUpdateManyWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenMenuUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemCreateManyMenuInput = {
    id?: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemUpdateWithoutMenuInput = {
    order?: KorKitchenOrderUpdateOneWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemUncheckedUpdateManyWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemCreateManyOrderInput = {
    id?: number
    menuId: number
    quantity: number
    totalPrice: number
    creatAt?: Date | string
    updatedAt?: Date | string
  }

  export type KorKitchenOrderItemUpdateWithoutOrderInput = {
    menu?: KorKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderItemUncheckedUpdateManyWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    creatAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaQuestionCreateManyCategoryInput = {
    id?: number
    name: string
    answerID: number
  }

  export type TriviaRoundCreateManyCategoryInput = {
    id?: number
    user: string
    totalResult: number
    createAt?: Date | string
  }

  export type TriviaQuestionUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
    choices?: TriviaChoiceUpdateManyWithoutQuestionNestedInput
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaQuestionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaQuestionUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    answerID?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundUpdateWithoutCategoryInput = {
    user?: StringFieldUpdateOperationsInput | string
    questions?: TriviaRoundQuestionUpdateManyWithoutRoundNestedInput
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    questions?: TriviaRoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaRoundUncheckedUpdateManyWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaChoiceCreateManyQuestionInput = {
    id?: number
    name: string
  }

  export type TriviaRoundQuestionCreateManyQuestionInput = {
    id?: number
    choiceId: number
    quizResult: boolean
    roundId?: number | null
  }

  export type TriviaChoiceUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaRoundQuestionUpdateWithoutQuestionInput = {
    userChoice?: TriviaChoiceUpdateOneRequiredWithoutRoundQuestionsNestedInput
    quizResult?: BoolFieldUpdateOperationsInput | boolean
    round?: TriviaRoundUpdateOneWithoutQuestionsNestedInput
  }

  export type TriviaRoundQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: BoolFieldUpdateOperationsInput | boolean
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: BoolFieldUpdateOperationsInput | boolean
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaRoundQuestionCreateManyUserChoiceInput = {
    id?: number
    quizId: number
    quizResult: boolean
    roundId?: number | null
  }

  export type TriviaRoundQuestionUpdateWithoutUserChoiceInput = {
    question?: TriviaQuestionUpdateOneRequiredWithoutRoundQuestionsNestedInput
    quizResult?: BoolFieldUpdateOperationsInput | boolean
    round?: TriviaRoundUpdateOneWithoutQuestionsNestedInput
  }

  export type TriviaRoundQuestionUncheckedUpdateWithoutUserChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    quizResult?: BoolFieldUpdateOperationsInput | boolean
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaRoundQuestionCreateManyRoundInput = {
    id?: number
    quizId: number
    choiceId: number
    quizResult: boolean
  }

  export type TriviaRoundQuestionUpdateWithoutRoundInput = {
    question?: TriviaQuestionUpdateOneRequiredWithoutRoundQuestionsNestedInput
    userChoice?: TriviaChoiceUpdateOneRequiredWithoutRoundQuestionsNestedInput
    quizResult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriviaRoundQuestionUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TwitterPostReplyCreateManyUserInput = {
    id?: number
    message: string
    postId: number
    createAt?: Date | string
  }

  export type TwitterPostReplyUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    post?: TwitterPostUpdateOneRequiredWithoutTwitterPostReplyNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostReplyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostReplyUncheckedUpdateManyWithoutTwitterPostReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    postId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostReplyCreateManyPostInput = {
    id?: number
    message: string
    userId: number
    createAt?: Date | string
  }

  export type PostOnHashtagCreateManyPostInput = {
    id?: number
    hashtagId: number
  }

  export type TwitterPostReplyUpdateWithoutPostInput = {
    message?: StringFieldUpdateOperationsInput | string
    user?: TwitterUserUpdateOneRequiredWithoutTwitterPostReplyNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostReplyUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostOnHashtagUpdateWithoutPostInput = {
    hashtag?: TwitterHashtagUpdateOneRequiredWithoutPostOnHashtagNestedInput
  }

  export type PostOnHashtagUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type PostOnHashtagUncheckedUpdateManyWithoutPostOnHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
  }

  export type PostOnHashtagCreateManyHashtagInput = {
    id?: number
    postId: number
  }

  export type PostOnHashtagUpdateWithoutHashtagInput = {
    post?: TwitterPostUpdateOneRequiredWithoutPostOnHashtagNestedInput
  }

  export type PostOnHashtagUncheckedUpdateWithoutHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type TwitterUserCreateManyDirectMessageInput = {
    id?: number
    name: string
    image: string
    userRelationId: number
  }

  export type TwitterUserUpdateWithoutDirectMessageInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userRelate?: TwitterUserRelationUpdateOneRequiredWithoutTwitterUserNestedInput
    TwitterPostReply?: TwitterPostReplyUpdateManyWithoutUserNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userRelationId?: IntFieldUpdateOperationsInput | number
    TwitterPostReply?: TwitterPostReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TwitterUserUncheckedUpdateManyWithoutTwitterUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    userRelationId?: IntFieldUpdateOperationsInput | number
  }

  export type TwitterUserCreateManyUserRelateInput = {
    id?: number
    name: string
    image: string
    directMessageId: number
  }

  export type TwitterUserUpdateWithoutUserRelateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    directMessage?: TwitterDirectMessageUpdateOneRequiredWithoutTwitterUserNestedInput
    TwitterPostReply?: TwitterPostReplyUpdateManyWithoutUserNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutUserRelateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    directMessageId?: IntFieldUpdateOperationsInput | number
    TwitterPostReply?: TwitterPostReplyUncheckedUpdateManyWithoutUserNestedInput
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