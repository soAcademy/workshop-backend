
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Menu
 * 
 */
export type Menu = {
  id: number
  name: string
  image: string
  price: number
  categoryId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Order
 * 
 */
export type Order = {
  id: number
  status: string
  tableId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model OrderItem
 * 
 */
export type OrderItem = {
  id: number
  menuId: number
  orderId: number | null
  quantity: number
  totalPrice: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model QuizCategory
 * 
 */
export type QuizCategory = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Choice
 * 
 */
export type Choice = {
  id: number
  answerText: string
  quizId: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Quiz
 * 
 */
export type Quiz = {
  id: number
  questionText: string
  quizCategoryId: number
  correctChoiceId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Round
 * 
 */
export type Round = {
  id: number
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
  bgColor: string
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
  imageUrl: string
  bio: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserRelation
 * 
 */
export type UserRelation = {
  id: number
  followingUserId: number
  followedUserId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Tweet
 * 
 */
export type Tweet = {
  id: number
  tweetText: string
  replyToTweetId: number | null
  userId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model HashTag
 * 
 */
export type HashTag = {
  id: number
  hashTagText: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DirectMessage
 * 
 */
export type DirectMessage = {
  id: number
  dmText: string
  fromUserId: number
  toUserId: number
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
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<GlobalReject>;

  /**
   * `prisma.quizCategory`: Exposes CRUD operations for the **QuizCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizCategories
    * const quizCategories = await prisma.quizCategory.findMany()
    * ```
    */
  get quizCategory(): Prisma.QuizCategoryDelegate<GlobalReject>;

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
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<GlobalReject>;

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
   * `prisma.todoList`: Exposes CRUD operations for the **TodoList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TodoLists
    * const todoLists = await prisma.todoList.findMany()
    * ```
    */
  get todoList(): Prisma.TodoListDelegate<GlobalReject>;

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
   * `prisma.userRelation`: Exposes CRUD operations for the **UserRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRelations
    * const userRelations = await prisma.userRelation.findMany()
    * ```
    */
  get userRelation(): Prisma.UserRelationDelegate<GlobalReject>;

  /**
   * `prisma.tweet`: Exposes CRUD operations for the **Tweet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tweets
    * const tweets = await prisma.tweet.findMany()
    * ```
    */
  get tweet(): Prisma.TweetDelegate<GlobalReject>;

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
   * `prisma.directMessage`: Exposes CRUD operations for the **DirectMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectMessages
    * const directMessages = await prisma.directMessage.findMany()
    * ```
    */
  get directMessage(): Prisma.DirectMessageDelegate<GlobalReject>;
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
    Category: 'Category',
    Menu: 'Menu',
    Order: 'Order',
    OrderItem: 'OrderItem',
    QuizCategory: 'QuizCategory',
    Choice: 'Choice',
    Quiz: 'Quiz',
    Round: 'Round',
    TodoList: 'TodoList',
    User: 'User',
    UserRelation: 'UserRelation',
    Tweet: 'Tweet',
    HashTag: 'HashTag',
    DirectMessage: 'DirectMessage'
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
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    Menu: number
  }

  export type CategoryCountOutputTypeSelect = {
    Menu?: boolean
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
   * Count Type MenuCountOutputType
   */


  export type MenuCountOutputType = {
    orderItems: number
  }

  export type MenuCountOutputTypeSelect = {
    orderItems?: boolean
  }

  export type MenuCountOutputTypeGetPayload<S extends boolean | null | undefined | MenuCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MenuCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MenuCountOutputTypeArgs)
    ? MenuCountOutputType 
    : S extends { select: any } & (MenuCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MenuCountOutputType ? MenuCountOutputType[P] : never
  } 
      : MenuCountOutputType




  // Custom InputTypes

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect | null
  }



  /**
   * Count Type OrderCountOutputType
   */


  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect = {
    items?: boolean
  }

  export type OrderCountOutputTypeGetPayload<S extends boolean | null | undefined | OrderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrderCountOutputTypeArgs)
    ? OrderCountOutputType 
    : S extends { select: any } & (OrderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrderCountOutputType ? OrderCountOutputType[P] : never
  } 
      : OrderCountOutputType




  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect | null
  }



  /**
   * Count Type QuizCategoryCountOutputType
   */


  export type QuizCategoryCountOutputType = {
    quizzes: number
  }

  export type QuizCategoryCountOutputTypeSelect = {
    quizzes?: boolean
  }

  export type QuizCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | QuizCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QuizCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (QuizCategoryCountOutputTypeArgs)
    ? QuizCategoryCountOutputType 
    : S extends { select: any } & (QuizCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof QuizCategoryCountOutputType ? QuizCategoryCountOutputType[P] : never
  } 
      : QuizCategoryCountOutputType




  // Custom InputTypes

  /**
   * QuizCategoryCountOutputType without action
   */
  export type QuizCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuizCategoryCountOutputType
     */
    select?: QuizCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type ChoiceCountOutputType
   */


  export type ChoiceCountOutputType = {
    correctQuizzes: number
    rounds: number
  }

  export type ChoiceCountOutputTypeSelect = {
    correctQuizzes?: boolean
    rounds?: boolean
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
   * Count Type QuizCountOutputType
   */


  export type QuizCountOutputType = {
    choices: number
    rounds: number
  }

  export type QuizCountOutputTypeSelect = {
    choices?: boolean
    rounds?: boolean
  }

  export type QuizCountOutputTypeGetPayload<S extends boolean | null | undefined | QuizCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QuizCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (QuizCountOutputTypeArgs)
    ? QuizCountOutputType 
    : S extends { select: any } & (QuizCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof QuizCountOutputType ? QuizCountOutputType[P] : never
  } 
      : QuizCountOutputType




  // Custom InputTypes

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect | null
  }



  /**
   * Count Type RoundCountOutputType
   */


  export type RoundCountOutputType = {
    quizzes: number
    selectedChoices: number
  }

  export type RoundCountOutputTypeSelect = {
    quizzes?: boolean
    selectedChoices?: boolean
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
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    followingUserRelations: number
    followedUserRelations: number
    tweets: number
    directMessagesFrom: number
    directMessagesTo: number
  }

  export type UserCountOutputTypeSelect = {
    followingUserRelations?: boolean
    followedUserRelations?: boolean
    tweets?: boolean
    directMessagesFrom?: boolean
    directMessagesTo?: boolean
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
   * Count Type TweetCountOutputType
   */


  export type TweetCountOutputType = {
    hashTags: number
  }

  export type TweetCountOutputTypeSelect = {
    hashTags?: boolean
  }

  export type TweetCountOutputTypeGetPayload<S extends boolean | null | undefined | TweetCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TweetCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TweetCountOutputTypeArgs)
    ? TweetCountOutputType 
    : S extends { select: any } & (TweetCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TweetCountOutputType ? TweetCountOutputType[P] : never
  } 
      : TweetCountOutputType




  // Custom InputTypes

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TweetCountOutputType
     */
    select?: TweetCountOutputTypeSelect | null
  }



  /**
   * Count Type HashTagCountOutputType
   */


  export type HashTagCountOutputType = {
    isIntweets: number
  }

  export type HashTagCountOutputTypeSelect = {
    isIntweets?: boolean
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
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
    createdAt: Date
    updatedAt: Date
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
    createdAt?: boolean
    updatedAt?: boolean
    Menu?: boolean | Category$MenuArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    Menu?: boolean | Category$MenuArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Menu' ? Array < MenuGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Menu' ? Array < MenuGetPayload<S['select'][P]>>  :
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

    Menu<T extends Category$MenuArgs= {}>(args?: Subset<T, Category$MenuArgs>): Prisma.PrismaPromise<Array<MenuGetPayload<T>>| Null>;

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
   * Category.Menu
   */
  export type Category$MenuArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    where?: MenuWhereInput
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
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
   * Model Menu
   */


  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    name: number
    image: number
    price: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs = {
    where?: MenuWhereInput
    orderBy?: Enumerable<MenuOrderByWithAggregationInput>
    by: MenuScalarFieldEnum[]
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }


  export type MenuGroupByOutputType = {
    id: number
    name: string
    image: string
    price: number
    categoryId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect = {
    id?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    category?: boolean | CategoryArgs
    categoryId?: boolean
    orderItems?: boolean | Menu$orderItemsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | MenuCountOutputTypeArgs
  }


  export type MenuInclude = {
    category?: boolean | CategoryArgs
    orderItems?: boolean | Menu$orderItemsArgs
    _count?: boolean | MenuCountOutputTypeArgs
  }

  export type MenuGetPayload<S extends boolean | null | undefined | MenuArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Menu :
    S extends undefined ? never :
    S extends { include: any } & (MenuArgs | MenuFindManyArgs)
    ? Menu  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? CategoryGetPayload<S['include'][P]> | null :
        P extends 'orderItems' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? MenuCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MenuArgs | MenuFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? CategoryGetPayload<S['select'][P]> | null :
        P extends 'orderItems' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? MenuCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Menu ? Menu[P] : never
  } 
      : Menu


  type MenuCountArgs = 
    Omit<MenuFindManyArgs, 'select' | 'include'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MenuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MenuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Menu'> extends True ? Prisma__MenuClient<MenuGetPayload<T>> : Prisma__MenuClient<MenuGetPayload<T> | null, null>

    /**
     * Find one Menu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MenuFindUniqueOrThrowArgs>
    ): Prisma__MenuClient<MenuGetPayload<T>>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MenuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MenuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Menu'> extends True ? Prisma__MenuClient<MenuGetPayload<T>> : Prisma__MenuClient<MenuGetPayload<T> | null, null>

    /**
     * Find the first Menu that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MenuFindFirstOrThrowArgs>
    ): Prisma__MenuClient<MenuGetPayload<T>>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MenuFindManyArgs>(
      args?: SelectSubset<T, MenuFindManyArgs>
    ): Prisma.PrismaPromise<Array<MenuGetPayload<T>>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends MenuCreateArgs>(
      args: SelectSubset<T, MenuCreateArgs>
    ): Prisma__MenuClient<MenuGetPayload<T>>

    /**
     * Create many Menus.
     *     @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MenuCreateManyArgs>(
      args?: SelectSubset<T, MenuCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends MenuDeleteArgs>(
      args: SelectSubset<T, MenuDeleteArgs>
    ): Prisma__MenuClient<MenuGetPayload<T>>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MenuUpdateArgs>(
      args: SelectSubset<T, MenuUpdateArgs>
    ): Prisma__MenuClient<MenuGetPayload<T>>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MenuDeleteManyArgs>(
      args?: SelectSubset<T, MenuDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MenuUpdateManyArgs>(
      args: SelectSubset<T, MenuUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
    **/
    upsert<T extends MenuUpsertArgs>(
      args: SelectSubset<T, MenuUpsertArgs>
    ): Prisma__MenuClient<MenuGetPayload<T>>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MenuClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    orderItems<T extends Menu$orderItemsArgs= {}>(args?: Subset<T, Menu$orderItemsArgs>): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>| Null>;

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
   * Menu base type for findUnique actions
   */
  export type MenuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUnique
   */
  export interface MenuFindUniqueArgs extends MenuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu base type for findFirst actions
   */
  export type MenuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: Enumerable<MenuScalarFieldEnum>
  }

  /**
   * Menu findFirst
   */
  export interface MenuFindFirstArgs extends MenuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu findMany
   */
  export type MenuFindManyArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: Enumerable<MenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * Menu create
   */
  export type MenuCreateArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }


  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs = {
    /**
     * The data used to create many Menus.
     */
    data: Enumerable<MenuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Menu update
   */
  export type MenuUpdateArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }


  /**
   * Menu upsert
   */
  export type MenuUpsertArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }


  /**
   * Menu delete
   */
  export type MenuDeleteArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }


  /**
   * Menu.orderItems
   */
  export type Menu$orderItemsArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * Menu without action
   */
  export type MenuArgs = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    status: string | null
    tableId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    status: string | null
    tableId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    status: number
    tableId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: OrderScalarFieldEnum[]
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: number
    status: string
    tableId: number
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect = {
    id?: boolean
    status?: boolean
    tableId?: boolean
    items?: boolean | Order$itemsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | OrderCountOutputTypeArgs
  }


  export type OrderInclude = {
    items?: boolean | Order$itemsArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }

  export type OrderGetPayload<S extends boolean | null | undefined | OrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Order :
    S extends undefined ? never :
    S extends { include: any } & (OrderArgs | OrderFindManyArgs)
    ? Order  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'items' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrderArgs | OrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'items' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Order ? Order[P] : never
  } 
      : Order


  type OrderCountArgs = 
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): Prisma.PrismaPromise<Array<OrderGetPayload<T>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    items<T extends Order$itemsArgs= {}>(args?: Subset<T, Order$itemsArgs>): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>| Null>;

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
   * Order base type for findUnique actions
   */
  export type OrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUnique
   */
  export interface OrderFindUniqueArgs extends OrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order base type for findFirst actions
   */
  export type OrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * Order findFirst
   */
  export interface OrderFindFirstArgs extends OrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs = {
    /**
     * The data used to create many Orders.
     */
    data: Enumerable<OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.items
   */
  export type Order$itemsArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
  }



  /**
   * Model OrderItem
   */


  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    menuId: number
    orderId: number
    quantity: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs = {
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithAggregationInput>
    by: OrderItemScalarFieldEnum[]
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }


  export type OrderItemGroupByOutputType = {
    id: number
    menuId: number
    orderId: number | null
    quantity: number
    totalPrice: number
    createdAt: Date
    updatedAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect = {
    id?: boolean
    menu?: boolean | MenuArgs
    menuId?: boolean
    order?: boolean | OrderArgs
    orderId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type OrderItemInclude = {
    menu?: boolean | MenuArgs
    order?: boolean | OrderArgs
  }

  export type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderItem :
    S extends undefined ? never :
    S extends { include: any } & (OrderItemArgs | OrderItemFindManyArgs)
    ? OrderItem  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu' ? MenuGetPayload<S['include'][P]> :
        P extends 'order' ? OrderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (OrderItemArgs | OrderItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu' ? MenuGetPayload<S['select'][P]> :
        P extends 'order' ? OrderGetPayload<S['select'][P]> | null :  P extends keyof OrderItem ? OrderItem[P] : never
  } 
      : OrderItem


  type OrderItemCountArgs = 
    Omit<OrderItemFindManyArgs, 'select' | 'include'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderItem'> extends True ? Prisma__OrderItemClient<OrderItemGetPayload<T>> : Prisma__OrderItemClient<OrderItemGetPayload<T> | null, null>

    /**
     * Find one OrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderItem'> extends True ? Prisma__OrderItemClient<OrderItemGetPayload<T>> : Prisma__OrderItemClient<OrderItemGetPayload<T> | null, null>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs>(
      args?: SelectSubset<T, OrderItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs>(
      args: SelectSubset<T, OrderItemCreateArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Create many OrderItems.
     *     @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItem = await prisma.orderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderItemCreateManyArgs>(
      args?: SelectSubset<T, OrderItemCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs>(
      args: SelectSubset<T, OrderItemDeleteArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs>(
      args: SelectSubset<T, OrderItemUpdateArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs>(
      args: SelectSubset<T, OrderItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs>(
      args: SelectSubset<T, OrderItemUpsertArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    menu<T extends MenuArgs= {}>(args?: Subset<T, MenuArgs>): Prisma__MenuClient<MenuGetPayload<T> | Null>;

    order<T extends OrderArgs= {}>(args?: Subset<T, OrderArgs>): Prisma__OrderClient<OrderGetPayload<T> | Null>;

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
   * OrderItem base type for findUnique actions
   */
  export type OrderItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUnique
   */
  export interface OrderItemFindUniqueArgs extends OrderItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem base type for findFirst actions
   */
  export type OrderItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }

  /**
   * OrderItem findFirst
   */
  export interface OrderItemFindFirstArgs extends OrderItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs = {
    /**
     * The data used to create many OrderItems.
     */
    data: Enumerable<OrderItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem without action
   */
  export type OrderItemArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
  }



  /**
   * Model QuizCategory
   */


  export type AggregateQuizCategory = {
    _count: QuizCategoryCountAggregateOutputType | null
    _avg: QuizCategoryAvgAggregateOutputType | null
    _sum: QuizCategorySumAggregateOutputType | null
    _min: QuizCategoryMinAggregateOutputType | null
    _max: QuizCategoryMaxAggregateOutputType | null
  }

  export type QuizCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type QuizCategorySumAggregateOutputType = {
    id: number | null
  }

  export type QuizCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizCategoryAvgAggregateInputType = {
    id?: true
  }

  export type QuizCategorySumAggregateInputType = {
    id?: true
  }

  export type QuizCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizCategoryAggregateArgs = {
    /**
     * Filter which QuizCategory to aggregate.
     */
    where?: QuizCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCategories to fetch.
     */
    orderBy?: Enumerable<QuizCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizCategories
    **/
    _count?: true | QuizCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizCategoryMaxAggregateInputType
  }

  export type GetQuizCategoryAggregateType<T extends QuizCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizCategory[P]>
      : GetScalarType<T[P], AggregateQuizCategory[P]>
  }




  export type QuizCategoryGroupByArgs = {
    where?: QuizCategoryWhereInput
    orderBy?: Enumerable<QuizCategoryOrderByWithAggregationInput>
    by: QuizCategoryScalarFieldEnum[]
    having?: QuizCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCategoryCountAggregateInputType | true
    _avg?: QuizCategoryAvgAggregateInputType
    _sum?: QuizCategorySumAggregateInputType
    _min?: QuizCategoryMinAggregateInputType
    _max?: QuizCategoryMaxAggregateInputType
  }


  export type QuizCategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: QuizCategoryCountAggregateOutputType | null
    _avg: QuizCategoryAvgAggregateOutputType | null
    _sum: QuizCategorySumAggregateOutputType | null
    _min: QuizCategoryMinAggregateOutputType | null
    _max: QuizCategoryMaxAggregateOutputType | null
  }

  type GetQuizCategoryGroupByPayload<T extends QuizCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuizCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], QuizCategoryGroupByOutputType[P]>
        }
      >
    >


  export type QuizCategorySelect = {
    id?: boolean
    name?: boolean
    quizzes?: boolean | QuizCategory$quizzesArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | QuizCategoryCountOutputTypeArgs
  }


  export type QuizCategoryInclude = {
    quizzes?: boolean | QuizCategory$quizzesArgs
    _count?: boolean | QuizCategoryCountOutputTypeArgs
  }

  export type QuizCategoryGetPayload<S extends boolean | null | undefined | QuizCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QuizCategory :
    S extends undefined ? never :
    S extends { include: any } & (QuizCategoryArgs | QuizCategoryFindManyArgs)
    ? QuizCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'quizzes' ? Array < QuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuizCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuizCategoryArgs | QuizCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'quizzes' ? Array < QuizGetPayload<S['select'][P]>>  :
        P extends '_count' ? QuizCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof QuizCategory ? QuizCategory[P] : never
  } 
      : QuizCategory


  type QuizCategoryCountArgs = 
    Omit<QuizCategoryFindManyArgs, 'select' | 'include'> & {
      select?: QuizCategoryCountAggregateInputType | true
    }

  export interface QuizCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one QuizCategory that matches the filter.
     * @param {QuizCategoryFindUniqueArgs} args - Arguments to find a QuizCategory
     * @example
     * // Get one QuizCategory
     * const quizCategory = await prisma.quizCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuizCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuizCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'QuizCategory'> extends True ? Prisma__QuizCategoryClient<QuizCategoryGetPayload<T>> : Prisma__QuizCategoryClient<QuizCategoryGetPayload<T> | null, null>

    /**
     * Find one QuizCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuizCategoryFindUniqueOrThrowArgs} args - Arguments to find a QuizCategory
     * @example
     * // Get one QuizCategory
     * const quizCategory = await prisma.quizCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuizCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuizCategoryFindUniqueOrThrowArgs>
    ): Prisma__QuizCategoryClient<QuizCategoryGetPayload<T>>

    /**
     * Find the first QuizCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryFindFirstArgs} args - Arguments to find a QuizCategory
     * @example
     * // Get one QuizCategory
     * const quizCategory = await prisma.quizCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuizCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuizCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'QuizCategory'> extends True ? Prisma__QuizCategoryClient<QuizCategoryGetPayload<T>> : Prisma__QuizCategoryClient<QuizCategoryGetPayload<T> | null, null>

    /**
     * Find the first QuizCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryFindFirstOrThrowArgs} args - Arguments to find a QuizCategory
     * @example
     * // Get one QuizCategory
     * const quizCategory = await prisma.quizCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuizCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuizCategoryFindFirstOrThrowArgs>
    ): Prisma__QuizCategoryClient<QuizCategoryGetPayload<T>>

    /**
     * Find zero or more QuizCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizCategories
     * const quizCategories = await prisma.quizCategory.findMany()
     * 
     * // Get first 10 QuizCategories
     * const quizCategories = await prisma.quizCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizCategoryWithIdOnly = await prisma.quizCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuizCategoryFindManyArgs>(
      args?: SelectSubset<T, QuizCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<QuizCategoryGetPayload<T>>>

    /**
     * Create a QuizCategory.
     * @param {QuizCategoryCreateArgs} args - Arguments to create a QuizCategory.
     * @example
     * // Create one QuizCategory
     * const QuizCategory = await prisma.quizCategory.create({
     *   data: {
     *     // ... data to create a QuizCategory
     *   }
     * })
     * 
    **/
    create<T extends QuizCategoryCreateArgs>(
      args: SelectSubset<T, QuizCategoryCreateArgs>
    ): Prisma__QuizCategoryClient<QuizCategoryGetPayload<T>>

    /**
     * Create many QuizCategories.
     *     @param {QuizCategoryCreateManyArgs} args - Arguments to create many QuizCategories.
     *     @example
     *     // Create many QuizCategories
     *     const quizCategory = await prisma.quizCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuizCategoryCreateManyArgs>(
      args?: SelectSubset<T, QuizCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuizCategory.
     * @param {QuizCategoryDeleteArgs} args - Arguments to delete one QuizCategory.
     * @example
     * // Delete one QuizCategory
     * const QuizCategory = await prisma.quizCategory.delete({
     *   where: {
     *     // ... filter to delete one QuizCategory
     *   }
     * })
     * 
    **/
    delete<T extends QuizCategoryDeleteArgs>(
      args: SelectSubset<T, QuizCategoryDeleteArgs>
    ): Prisma__QuizCategoryClient<QuizCategoryGetPayload<T>>

    /**
     * Update one QuizCategory.
     * @param {QuizCategoryUpdateArgs} args - Arguments to update one QuizCategory.
     * @example
     * // Update one QuizCategory
     * const quizCategory = await prisma.quizCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuizCategoryUpdateArgs>(
      args: SelectSubset<T, QuizCategoryUpdateArgs>
    ): Prisma__QuizCategoryClient<QuizCategoryGetPayload<T>>

    /**
     * Delete zero or more QuizCategories.
     * @param {QuizCategoryDeleteManyArgs} args - Arguments to filter QuizCategories to delete.
     * @example
     * // Delete a few QuizCategories
     * const { count } = await prisma.quizCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuizCategoryDeleteManyArgs>(
      args?: SelectSubset<T, QuizCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizCategories
     * const quizCategory = await prisma.quizCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuizCategoryUpdateManyArgs>(
      args: SelectSubset<T, QuizCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuizCategory.
     * @param {QuizCategoryUpsertArgs} args - Arguments to update or create a QuizCategory.
     * @example
     * // Update or create a QuizCategory
     * const quizCategory = await prisma.quizCategory.upsert({
     *   create: {
     *     // ... data to create a QuizCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizCategory we want to update
     *   }
     * })
    **/
    upsert<T extends QuizCategoryUpsertArgs>(
      args: SelectSubset<T, QuizCategoryUpsertArgs>
    ): Prisma__QuizCategoryClient<QuizCategoryGetPayload<T>>

    /**
     * Count the number of QuizCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryCountArgs} args - Arguments to filter QuizCategories to count.
     * @example
     * // Count the number of QuizCategories
     * const count = await prisma.quizCategory.count({
     *   where: {
     *     // ... the filter for the QuizCategories we want to count
     *   }
     * })
    **/
    count<T extends QuizCategoryCountArgs>(
      args?: Subset<T, QuizCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizCategoryAggregateArgs>(args: Subset<T, QuizCategoryAggregateArgs>): Prisma.PrismaPromise<GetQuizCategoryAggregateType<T>>

    /**
     * Group by QuizCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCategoryGroupByArgs} args - Group by arguments.
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
      T extends QuizCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizCategoryGroupByArgs['orderBy'] }
        : { orderBy?: QuizCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuizCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    quizzes<T extends QuizCategory$quizzesArgs= {}>(args?: Subset<T, QuizCategory$quizzesArgs>): Prisma.PrismaPromise<Array<QuizGetPayload<T>>| Null>;

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
   * QuizCategory base type for findUnique actions
   */
  export type QuizCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * Filter, which QuizCategory to fetch.
     */
    where: QuizCategoryWhereUniqueInput
  }

  /**
   * QuizCategory findUnique
   */
  export interface QuizCategoryFindUniqueArgs extends QuizCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QuizCategory findUniqueOrThrow
   */
  export type QuizCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * Filter, which QuizCategory to fetch.
     */
    where: QuizCategoryWhereUniqueInput
  }


  /**
   * QuizCategory base type for findFirst actions
   */
  export type QuizCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * Filter, which QuizCategory to fetch.
     */
    where?: QuizCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCategories to fetch.
     */
    orderBy?: Enumerable<QuizCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCategories.
     */
    cursor?: QuizCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCategories.
     */
    distinct?: Enumerable<QuizCategoryScalarFieldEnum>
  }

  /**
   * QuizCategory findFirst
   */
  export interface QuizCategoryFindFirstArgs extends QuizCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QuizCategory findFirstOrThrow
   */
  export type QuizCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * Filter, which QuizCategory to fetch.
     */
    where?: QuizCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCategories to fetch.
     */
    orderBy?: Enumerable<QuizCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizCategories.
     */
    cursor?: QuizCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizCategories.
     */
    distinct?: Enumerable<QuizCategoryScalarFieldEnum>
  }


  /**
   * QuizCategory findMany
   */
  export type QuizCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * Filter, which QuizCategories to fetch.
     */
    where?: QuizCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizCategories to fetch.
     */
    orderBy?: Enumerable<QuizCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizCategories.
     */
    cursor?: QuizCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizCategories.
     */
    skip?: number
    distinct?: Enumerable<QuizCategoryScalarFieldEnum>
  }


  /**
   * QuizCategory create
   */
  export type QuizCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * The data needed to create a QuizCategory.
     */
    data: XOR<QuizCategoryCreateInput, QuizCategoryUncheckedCreateInput>
  }


  /**
   * QuizCategory createMany
   */
  export type QuizCategoryCreateManyArgs = {
    /**
     * The data used to create many QuizCategories.
     */
    data: Enumerable<QuizCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * QuizCategory update
   */
  export type QuizCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * The data needed to update a QuizCategory.
     */
    data: XOR<QuizCategoryUpdateInput, QuizCategoryUncheckedUpdateInput>
    /**
     * Choose, which QuizCategory to update.
     */
    where: QuizCategoryWhereUniqueInput
  }


  /**
   * QuizCategory updateMany
   */
  export type QuizCategoryUpdateManyArgs = {
    /**
     * The data used to update QuizCategories.
     */
    data: XOR<QuizCategoryUpdateManyMutationInput, QuizCategoryUncheckedUpdateManyInput>
    /**
     * Filter which QuizCategories to update
     */
    where?: QuizCategoryWhereInput
  }


  /**
   * QuizCategory upsert
   */
  export type QuizCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * The filter to search for the QuizCategory to update in case it exists.
     */
    where: QuizCategoryWhereUniqueInput
    /**
     * In case the QuizCategory found by the `where` argument doesn't exist, create a new QuizCategory with this data.
     */
    create: XOR<QuizCategoryCreateInput, QuizCategoryUncheckedCreateInput>
    /**
     * In case the QuizCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizCategoryUpdateInput, QuizCategoryUncheckedUpdateInput>
  }


  /**
   * QuizCategory delete
   */
  export type QuizCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
    /**
     * Filter which QuizCategory to delete.
     */
    where: QuizCategoryWhereUniqueInput
  }


  /**
   * QuizCategory deleteMany
   */
  export type QuizCategoryDeleteManyArgs = {
    /**
     * Filter which QuizCategories to delete
     */
    where?: QuizCategoryWhereInput
  }


  /**
   * QuizCategory.quizzes
   */
  export type QuizCategory$quizzesArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    where?: QuizWhereInput
    orderBy?: Enumerable<QuizOrderByWithRelationInput>
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuizScalarFieldEnum>
  }


  /**
   * QuizCategory without action
   */
  export type QuizCategoryArgs = {
    /**
     * Select specific fields to fetch from the QuizCategory
     */
    select?: QuizCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizCategoryInclude | null
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
    quizId: number | null
  }

  export type ChoiceSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: number | null
    answerText: string | null
    quizId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: number | null
    answerText: string | null
    quizId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    answerText: number
    quizId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoiceAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type ChoiceSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type ChoiceMinAggregateInputType = {
    id?: true
    answerText?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    answerText?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    answerText?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
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
    answerText: string
    quizId: number | null
    createdAt: Date
    updatedAt: Date
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
    answerText?: boolean
    quiz?: boolean | QuizArgs
    quizId?: boolean
    correctQuizzes?: boolean | Choice$correctQuizzesArgs
    rounds?: boolean | Choice$roundsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | ChoiceCountOutputTypeArgs
  }


  export type ChoiceInclude = {
    quiz?: boolean | QuizArgs
    correctQuizzes?: boolean | Choice$correctQuizzesArgs
    rounds?: boolean | Choice$roundsArgs
    _count?: boolean | ChoiceCountOutputTypeArgs
  }

  export type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Choice :
    S extends undefined ? never :
    S extends { include: any } & (ChoiceArgs | ChoiceFindManyArgs)
    ? Choice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'quiz' ? QuizGetPayload<S['include'][P]> | null :
        P extends 'correctQuizzes' ? Array < QuizGetPayload<S['include'][P]>>  :
        P extends 'rounds' ? Array < RoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? ChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChoiceArgs | ChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'quiz' ? QuizGetPayload<S['select'][P]> | null :
        P extends 'correctQuizzes' ? Array < QuizGetPayload<S['select'][P]>>  :
        P extends 'rounds' ? Array < RoundGetPayload<S['select'][P]>>  :
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

    quiz<T extends QuizArgs= {}>(args?: Subset<T, QuizArgs>): Prisma__QuizClient<QuizGetPayload<T> | Null>;

    correctQuizzes<T extends Choice$correctQuizzesArgs= {}>(args?: Subset<T, Choice$correctQuizzesArgs>): Prisma.PrismaPromise<Array<QuizGetPayload<T>>| Null>;

    rounds<T extends Choice$roundsArgs= {}>(args?: Subset<T, Choice$roundsArgs>): Prisma.PrismaPromise<Array<RoundGetPayload<T>>| Null>;

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
   * Choice.correctQuizzes
   */
  export type Choice$correctQuizzesArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    where?: QuizWhereInput
    orderBy?: Enumerable<QuizOrderByWithRelationInput>
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuizScalarFieldEnum>
  }


  /**
   * Choice.rounds
   */
  export type Choice$roundsArgs = {
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
   * Model Quiz
   */


  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    quizCategoryId: number | null
    correctChoiceId: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
    quizCategoryId: number | null
    correctChoiceId: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    questionText: string | null
    quizCategoryId: number | null
    correctChoiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    questionText: string | null
    quizCategoryId: number | null
    correctChoiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    questionText: number
    quizCategoryId: number
    correctChoiceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    quizCategoryId?: true
    correctChoiceId?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    quizCategoryId?: true
    correctChoiceId?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    questionText?: true
    quizCategoryId?: true
    correctChoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    questionText?: true
    quizCategoryId?: true
    correctChoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    questionText?: true
    quizCategoryId?: true
    correctChoiceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: Enumerable<QuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs = {
    where?: QuizWhereInput
    orderBy?: Enumerable<QuizOrderByWithAggregationInput>
    by: QuizScalarFieldEnum[]
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }


  export type QuizGroupByOutputType = {
    id: number
    questionText: string
    quizCategoryId: number
    correctChoiceId: number
    createdAt: Date
    updatedAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect = {
    id?: boolean
    questionText?: boolean
    category?: boolean | QuizCategoryArgs
    quizCategoryId?: boolean
    choices?: boolean | Quiz$choicesArgs
    correctChoice?: boolean | ChoiceArgs
    correctChoiceId?: boolean
    rounds?: boolean | Quiz$roundsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | QuizCountOutputTypeArgs
  }


  export type QuizInclude = {
    category?: boolean | QuizCategoryArgs
    choices?: boolean | Quiz$choicesArgs
    correctChoice?: boolean | ChoiceArgs
    rounds?: boolean | Quiz$roundsArgs
    _count?: boolean | QuizCountOutputTypeArgs
  }

  export type QuizGetPayload<S extends boolean | null | undefined | QuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Quiz :
    S extends undefined ? never :
    S extends { include: any } & (QuizArgs | QuizFindManyArgs)
    ? Quiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? QuizCategoryGetPayload<S['include'][P]> :
        P extends 'choices' ? Array < ChoiceGetPayload<S['include'][P]>>  :
        P extends 'correctChoice' ? ChoiceGetPayload<S['include'][P]> :
        P extends 'rounds' ? Array < RoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuizCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuizArgs | QuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? QuizCategoryGetPayload<S['select'][P]> :
        P extends 'choices' ? Array < ChoiceGetPayload<S['select'][P]>>  :
        P extends 'correctChoice' ? ChoiceGetPayload<S['select'][P]> :
        P extends 'rounds' ? Array < RoundGetPayload<S['select'][P]>>  :
        P extends '_count' ? QuizCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Quiz ? Quiz[P] : never
  } 
      : Quiz


  type QuizCountArgs = 
    Omit<QuizFindManyArgs, 'select' | 'include'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuizFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuizFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Quiz'> extends True ? Prisma__QuizClient<QuizGetPayload<T>> : Prisma__QuizClient<QuizGetPayload<T> | null, null>

    /**
     * Find one Quiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuizFindUniqueOrThrowArgs>
    ): Prisma__QuizClient<QuizGetPayload<T>>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuizFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuizFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Quiz'> extends True ? Prisma__QuizClient<QuizGetPayload<T>> : Prisma__QuizClient<QuizGetPayload<T> | null, null>

    /**
     * Find the first Quiz that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuizFindFirstOrThrowArgs>
    ): Prisma__QuizClient<QuizGetPayload<T>>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuizFindManyArgs>(
      args?: SelectSubset<T, QuizFindManyArgs>
    ): Prisma.PrismaPromise<Array<QuizGetPayload<T>>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
    **/
    create<T extends QuizCreateArgs>(
      args: SelectSubset<T, QuizCreateArgs>
    ): Prisma__QuizClient<QuizGetPayload<T>>

    /**
     * Create many Quizzes.
     *     @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     *     @example
     *     // Create many Quizzes
     *     const quiz = await prisma.quiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuizCreateManyArgs>(
      args?: SelectSubset<T, QuizCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
    **/
    delete<T extends QuizDeleteArgs>(
      args: SelectSubset<T, QuizDeleteArgs>
    ): Prisma__QuizClient<QuizGetPayload<T>>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuizUpdateArgs>(
      args: SelectSubset<T, QuizUpdateArgs>
    ): Prisma__QuizClient<QuizGetPayload<T>>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuizDeleteManyArgs>(
      args?: SelectSubset<T, QuizDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuizUpdateManyArgs>(
      args: SelectSubset<T, QuizUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
    **/
    upsert<T extends QuizUpsertArgs>(
      args: SelectSubset<T, QuizUpsertArgs>
    ): Prisma__QuizClient<QuizGetPayload<T>>

    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuizClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    category<T extends QuizCategoryArgs= {}>(args?: Subset<T, QuizCategoryArgs>): Prisma__QuizCategoryClient<QuizCategoryGetPayload<T> | Null>;

    choices<T extends Quiz$choicesArgs= {}>(args?: Subset<T, Quiz$choicesArgs>): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>>| Null>;

    correctChoice<T extends ChoiceArgs= {}>(args?: Subset<T, ChoiceArgs>): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

    rounds<T extends Quiz$roundsArgs= {}>(args?: Subset<T, Quiz$roundsArgs>): Prisma.PrismaPromise<Array<RoundGetPayload<T>>| Null>;

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
   * Quiz base type for findUnique actions
   */
  export type QuizFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUnique
   */
  export interface QuizFindUniqueArgs extends QuizFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz base type for findFirst actions
   */
  export type QuizFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: Enumerable<QuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: Enumerable<QuizScalarFieldEnum>
  }

  /**
   * Quiz findFirst
   */
  export interface QuizFindFirstArgs extends QuizFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: Enumerable<QuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: Enumerable<QuizScalarFieldEnum>
  }


  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: Enumerable<QuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: Enumerable<QuizScalarFieldEnum>
  }


  /**
   * Quiz create
   */
  export type QuizCreateArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }


  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs = {
    /**
     * The data used to create many Quizzes.
     */
    data: Enumerable<QuizCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Quiz update
   */
  export type QuizUpdateArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
  }


  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }


  /**
   * Quiz delete
   */
  export type QuizDeleteArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }


  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
  }


  /**
   * Quiz.choices
   */
  export type Quiz$choicesArgs = {
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
   * Quiz.rounds
   */
  export type Quiz$roundsArgs = {
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
   * Quiz without action
   */
  export type QuizArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
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
  }

  export type RoundSumAggregateOutputType = {
    id: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    id?: true
  }

  export type RoundSumAggregateInputType = {
    id?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
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
    createdAt: Date
    updatedAt: Date
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
    quizzes?: boolean | Round$quizzesArgs
    selectedChoices?: boolean | Round$selectedChoicesArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | RoundCountOutputTypeArgs
  }


  export type RoundInclude = {
    quizzes?: boolean | Round$quizzesArgs
    selectedChoices?: boolean | Round$selectedChoicesArgs
    _count?: boolean | RoundCountOutputTypeArgs
  }

  export type RoundGetPayload<S extends boolean | null | undefined | RoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Round :
    S extends undefined ? never :
    S extends { include: any } & (RoundArgs | RoundFindManyArgs)
    ? Round  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'quizzes' ? Array < QuizGetPayload<S['include'][P]>>  :
        P extends 'selectedChoices' ? Array < ChoiceGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundArgs | RoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'quizzes' ? Array < QuizGetPayload<S['select'][P]>>  :
        P extends 'selectedChoices' ? Array < ChoiceGetPayload<S['select'][P]>>  :
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

    quizzes<T extends Round$quizzesArgs= {}>(args?: Subset<T, Round$quizzesArgs>): Prisma.PrismaPromise<Array<QuizGetPayload<T>>| Null>;

    selectedChoices<T extends Round$selectedChoicesArgs= {}>(args?: Subset<T, Round$selectedChoicesArgs>): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>>| Null>;

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
   * Round.quizzes
   */
  export type Round$quizzesArgs = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuizInclude | null
    where?: QuizWhereInput
    orderBy?: Enumerable<QuizOrderByWithRelationInput>
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<QuizScalarFieldEnum>
  }


  /**
   * Round.selectedChoices
   */
  export type Round$selectedChoicesArgs = {
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
    bgColor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoListMaxAggregateOutputType = {
    id: number | null
    task: string | null
    status: string | null
    bgColor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoListCountAggregateOutputType = {
    id: number
    task: number
    status: number
    bgColor: number
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
    bgColor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoListMaxAggregateInputType = {
    id?: true
    task?: true
    status?: true
    bgColor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoListCountAggregateInputType = {
    id?: true
    task?: true
    status?: true
    bgColor?: true
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
    bgColor: string
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
    bgColor?: boolean
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
    imageUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    bio: number
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
    imageUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    bio?: true
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
    imageUrl: string
    bio: string
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
    imageUrl?: boolean
    bio?: boolean
    followingUserRelations?: boolean | User$followingUserRelationsArgs
    followedUserRelations?: boolean | User$followedUserRelationsArgs
    tweets?: boolean | User$tweetsArgs
    directMessagesFrom?: boolean | User$directMessagesFromArgs
    directMessagesTo?: boolean | User$directMessagesToArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    followingUserRelations?: boolean | User$followingUserRelationsArgs
    followedUserRelations?: boolean | User$followedUserRelationsArgs
    tweets?: boolean | User$tweetsArgs
    directMessagesFrom?: boolean | User$directMessagesFromArgs
    directMessagesTo?: boolean | User$directMessagesToArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'followingUserRelations' ? Array < UserRelationGetPayload<S['include'][P]>>  :
        P extends 'followedUserRelations' ? Array < UserRelationGetPayload<S['include'][P]>>  :
        P extends 'tweets' ? Array < TweetGetPayload<S['include'][P]>>  :
        P extends 'directMessagesFrom' ? Array < DirectMessageGetPayload<S['include'][P]>>  :
        P extends 'directMessagesTo' ? Array < DirectMessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'followingUserRelations' ? Array < UserRelationGetPayload<S['select'][P]>>  :
        P extends 'followedUserRelations' ? Array < UserRelationGetPayload<S['select'][P]>>  :
        P extends 'tweets' ? Array < TweetGetPayload<S['select'][P]>>  :
        P extends 'directMessagesFrom' ? Array < DirectMessageGetPayload<S['select'][P]>>  :
        P extends 'directMessagesTo' ? Array < DirectMessageGetPayload<S['select'][P]>>  :
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

    followingUserRelations<T extends User$followingUserRelationsArgs= {}>(args?: Subset<T, User$followingUserRelationsArgs>): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>| Null>;

    followedUserRelations<T extends User$followedUserRelationsArgs= {}>(args?: Subset<T, User$followedUserRelationsArgs>): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>| Null>;

    tweets<T extends User$tweetsArgs= {}>(args?: Subset<T, User$tweetsArgs>): Prisma.PrismaPromise<Array<TweetGetPayload<T>>| Null>;

    directMessagesFrom<T extends User$directMessagesFromArgs= {}>(args?: Subset<T, User$directMessagesFromArgs>): Prisma.PrismaPromise<Array<DirectMessageGetPayload<T>>| Null>;

    directMessagesTo<T extends User$directMessagesToArgs= {}>(args?: Subset<T, User$directMessagesToArgs>): Prisma.PrismaPromise<Array<DirectMessageGetPayload<T>>| Null>;

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
   * User.followingUserRelations
   */
  export type User$followingUserRelationsArgs = {
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
   * User.followedUserRelations
   */
  export type User$followedUserRelationsArgs = {
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
   * User.tweets
   */
  export type User$tweetsArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    where?: TweetWhereInput
    orderBy?: Enumerable<TweetOrderByWithRelationInput>
    cursor?: TweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TweetScalarFieldEnum>
  }


  /**
   * User.directMessagesFrom
   */
  export type User$directMessagesFromArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    where?: DirectMessageWhereInput
    orderBy?: Enumerable<DirectMessageOrderByWithRelationInput>
    cursor?: DirectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectMessageScalarFieldEnum>
  }


  /**
   * User.directMessagesTo
   */
  export type User$directMessagesToArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    where?: DirectMessageWhereInput
    orderBy?: Enumerable<DirectMessageOrderByWithRelationInput>
    cursor?: DirectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectMessageScalarFieldEnum>
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
    followingUserId: number | null
    followedUserId: number | null
  }

  export type UserRelationSumAggregateOutputType = {
    id: number | null
    followingUserId: number | null
    followedUserId: number | null
  }

  export type UserRelationMinAggregateOutputType = {
    id: number | null
    followingUserId: number | null
    followedUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRelationMaxAggregateOutputType = {
    id: number | null
    followingUserId: number | null
    followedUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRelationCountAggregateOutputType = {
    id: number
    followingUserId: number
    followedUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRelationAvgAggregateInputType = {
    id?: true
    followingUserId?: true
    followedUserId?: true
  }

  export type UserRelationSumAggregateInputType = {
    id?: true
    followingUserId?: true
    followedUserId?: true
  }

  export type UserRelationMinAggregateInputType = {
    id?: true
    followingUserId?: true
    followedUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRelationMaxAggregateInputType = {
    id?: true
    followingUserId?: true
    followedUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRelationCountAggregateInputType = {
    id?: true
    followingUserId?: true
    followedUserId?: true
    createdAt?: true
    updatedAt?: true
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
    followingUserId: number
    followedUserId: number
    createdAt: Date
    updatedAt: Date
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
    followingUser?: boolean | UserArgs
    followingUserId?: boolean
    followedUser?: boolean | UserArgs
    followedUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UserRelationInclude = {
    followingUser?: boolean | UserArgs
    followedUser?: boolean | UserArgs
  }

  export type UserRelationGetPayload<S extends boolean | null | undefined | UserRelationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserRelation :
    S extends undefined ? never :
    S extends { include: any } & (UserRelationArgs | UserRelationFindManyArgs)
    ? UserRelation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'followingUser' ? UserGetPayload<S['include'][P]> :
        P extends 'followedUser' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserRelationArgs | UserRelationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'followingUser' ? UserGetPayload<S['select'][P]> :
        P extends 'followedUser' ? UserGetPayload<S['select'][P]> :  P extends keyof UserRelation ? UserRelation[P] : never
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

    followingUser<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    followedUser<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Model Tweet
   */


  export type AggregateTweet = {
    _count: TweetCountAggregateOutputType | null
    _avg: TweetAvgAggregateOutputType | null
    _sum: TweetSumAggregateOutputType | null
    _min: TweetMinAggregateOutputType | null
    _max: TweetMaxAggregateOutputType | null
  }

  export type TweetAvgAggregateOutputType = {
    id: number | null
    replyToTweetId: number | null
    userId: number | null
  }

  export type TweetSumAggregateOutputType = {
    id: number | null
    replyToTweetId: number | null
    userId: number | null
  }

  export type TweetMinAggregateOutputType = {
    id: number | null
    tweetText: string | null
    replyToTweetId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TweetMaxAggregateOutputType = {
    id: number | null
    tweetText: string | null
    replyToTweetId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TweetCountAggregateOutputType = {
    id: number
    tweetText: number
    replyToTweetId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TweetAvgAggregateInputType = {
    id?: true
    replyToTweetId?: true
    userId?: true
  }

  export type TweetSumAggregateInputType = {
    id?: true
    replyToTweetId?: true
    userId?: true
  }

  export type TweetMinAggregateInputType = {
    id?: true
    tweetText?: true
    replyToTweetId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TweetMaxAggregateInputType = {
    id?: true
    tweetText?: true
    replyToTweetId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TweetCountAggregateInputType = {
    id?: true
    tweetText?: true
    replyToTweetId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TweetAggregateArgs = {
    /**
     * Filter which Tweet to aggregate.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: Enumerable<TweetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tweets
    **/
    _count?: true | TweetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TweetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TweetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TweetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TweetMaxAggregateInputType
  }

  export type GetTweetAggregateType<T extends TweetAggregateArgs> = {
        [P in keyof T & keyof AggregateTweet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTweet[P]>
      : GetScalarType<T[P], AggregateTweet[P]>
  }




  export type TweetGroupByArgs = {
    where?: TweetWhereInput
    orderBy?: Enumerable<TweetOrderByWithAggregationInput>
    by: TweetScalarFieldEnum[]
    having?: TweetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TweetCountAggregateInputType | true
    _avg?: TweetAvgAggregateInputType
    _sum?: TweetSumAggregateInputType
    _min?: TweetMinAggregateInputType
    _max?: TweetMaxAggregateInputType
  }


  export type TweetGroupByOutputType = {
    id: number
    tweetText: string
    replyToTweetId: number | null
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: TweetCountAggregateOutputType | null
    _avg: TweetAvgAggregateOutputType | null
    _sum: TweetSumAggregateOutputType | null
    _min: TweetMinAggregateOutputType | null
    _max: TweetMaxAggregateOutputType | null
  }

  type GetTweetGroupByPayload<T extends TweetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TweetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TweetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TweetGroupByOutputType[P]>
            : GetScalarType<T[P], TweetGroupByOutputType[P]>
        }
      >
    >


  export type TweetSelect = {
    id?: boolean
    tweetText?: boolean
    tweetingUser?: boolean | UserArgs
    replyToTweet?: boolean | TweetArgs
    replyToTweetId?: boolean
    repliedTweet?: boolean | TweetArgs
    userId?: boolean
    hashTags?: boolean | Tweet$hashTagsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | TweetCountOutputTypeArgs
  }


  export type TweetInclude = {
    tweetingUser?: boolean | UserArgs
    replyToTweet?: boolean | TweetArgs
    repliedTweet?: boolean | TweetArgs
    hashTags?: boolean | Tweet$hashTagsArgs
    _count?: boolean | TweetCountOutputTypeArgs
  }

  export type TweetGetPayload<S extends boolean | null | undefined | TweetArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tweet :
    S extends undefined ? never :
    S extends { include: any } & (TweetArgs | TweetFindManyArgs)
    ? Tweet  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tweetingUser' ? UserGetPayload<S['include'][P]> :
        P extends 'replyToTweet' ? TweetGetPayload<S['include'][P]> | null :
        P extends 'repliedTweet' ? TweetGetPayload<S['include'][P]> | null :
        P extends 'hashTags' ? Array < HashTagGetPayload<S['include'][P]>>  :
        P extends '_count' ? TweetCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TweetArgs | TweetFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tweetingUser' ? UserGetPayload<S['select'][P]> :
        P extends 'replyToTweet' ? TweetGetPayload<S['select'][P]> | null :
        P extends 'repliedTweet' ? TweetGetPayload<S['select'][P]> | null :
        P extends 'hashTags' ? Array < HashTagGetPayload<S['select'][P]>>  :
        P extends '_count' ? TweetCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Tweet ? Tweet[P] : never
  } 
      : Tweet


  type TweetCountArgs = 
    Omit<TweetFindManyArgs, 'select' | 'include'> & {
      select?: TweetCountAggregateInputType | true
    }

  export interface TweetDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tweet that matches the filter.
     * @param {TweetFindUniqueArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TweetFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TweetFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tweet'> extends True ? Prisma__TweetClient<TweetGetPayload<T>> : Prisma__TweetClient<TweetGetPayload<T> | null, null>

    /**
     * Find one Tweet that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TweetFindUniqueOrThrowArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TweetFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TweetFindUniqueOrThrowArgs>
    ): Prisma__TweetClient<TweetGetPayload<T>>

    /**
     * Find the first Tweet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindFirstArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TweetFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TweetFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tweet'> extends True ? Prisma__TweetClient<TweetGetPayload<T>> : Prisma__TweetClient<TweetGetPayload<T> | null, null>

    /**
     * Find the first Tweet that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindFirstOrThrowArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TweetFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TweetFindFirstOrThrowArgs>
    ): Prisma__TweetClient<TweetGetPayload<T>>

    /**
     * Find zero or more Tweets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tweets
     * const tweets = await prisma.tweet.findMany()
     * 
     * // Get first 10 Tweets
     * const tweets = await prisma.tweet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tweetWithIdOnly = await prisma.tweet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TweetFindManyArgs>(
      args?: SelectSubset<T, TweetFindManyArgs>
    ): Prisma.PrismaPromise<Array<TweetGetPayload<T>>>

    /**
     * Create a Tweet.
     * @param {TweetCreateArgs} args - Arguments to create a Tweet.
     * @example
     * // Create one Tweet
     * const Tweet = await prisma.tweet.create({
     *   data: {
     *     // ... data to create a Tweet
     *   }
     * })
     * 
    **/
    create<T extends TweetCreateArgs>(
      args: SelectSubset<T, TweetCreateArgs>
    ): Prisma__TweetClient<TweetGetPayload<T>>

    /**
     * Create many Tweets.
     *     @param {TweetCreateManyArgs} args - Arguments to create many Tweets.
     *     @example
     *     // Create many Tweets
     *     const tweet = await prisma.tweet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TweetCreateManyArgs>(
      args?: SelectSubset<T, TweetCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tweet.
     * @param {TweetDeleteArgs} args - Arguments to delete one Tweet.
     * @example
     * // Delete one Tweet
     * const Tweet = await prisma.tweet.delete({
     *   where: {
     *     // ... filter to delete one Tweet
     *   }
     * })
     * 
    **/
    delete<T extends TweetDeleteArgs>(
      args: SelectSubset<T, TweetDeleteArgs>
    ): Prisma__TweetClient<TweetGetPayload<T>>

    /**
     * Update one Tweet.
     * @param {TweetUpdateArgs} args - Arguments to update one Tweet.
     * @example
     * // Update one Tweet
     * const tweet = await prisma.tweet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TweetUpdateArgs>(
      args: SelectSubset<T, TweetUpdateArgs>
    ): Prisma__TweetClient<TweetGetPayload<T>>

    /**
     * Delete zero or more Tweets.
     * @param {TweetDeleteManyArgs} args - Arguments to filter Tweets to delete.
     * @example
     * // Delete a few Tweets
     * const { count } = await prisma.tweet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TweetDeleteManyArgs>(
      args?: SelectSubset<T, TweetDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tweets
     * const tweet = await prisma.tweet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TweetUpdateManyArgs>(
      args: SelectSubset<T, TweetUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tweet.
     * @param {TweetUpsertArgs} args - Arguments to update or create a Tweet.
     * @example
     * // Update or create a Tweet
     * const tweet = await prisma.tweet.upsert({
     *   create: {
     *     // ... data to create a Tweet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tweet we want to update
     *   }
     * })
    **/
    upsert<T extends TweetUpsertArgs>(
      args: SelectSubset<T, TweetUpsertArgs>
    ): Prisma__TweetClient<TweetGetPayload<T>>

    /**
     * Count the number of Tweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetCountArgs} args - Arguments to filter Tweets to count.
     * @example
     * // Count the number of Tweets
     * const count = await prisma.tweet.count({
     *   where: {
     *     // ... the filter for the Tweets we want to count
     *   }
     * })
    **/
    count<T extends TweetCountArgs>(
      args?: Subset<T, TweetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TweetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TweetAggregateArgs>(args: Subset<T, TweetAggregateArgs>): Prisma.PrismaPromise<GetTweetAggregateType<T>>

    /**
     * Group by Tweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetGroupByArgs} args - Group by arguments.
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
      T extends TweetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TweetGroupByArgs['orderBy'] }
        : { orderBy?: TweetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TweetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTweetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tweet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TweetClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    tweetingUser<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    replyToTweet<T extends TweetArgs= {}>(args?: Subset<T, TweetArgs>): Prisma__TweetClient<TweetGetPayload<T> | Null>;

    repliedTweet<T extends TweetArgs= {}>(args?: Subset<T, TweetArgs>): Prisma__TweetClient<TweetGetPayload<T> | Null>;

    hashTags<T extends Tweet$hashTagsArgs= {}>(args?: Subset<T, Tweet$hashTagsArgs>): Prisma.PrismaPromise<Array<HashTagGetPayload<T>>| Null>;

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
   * Tweet base type for findUnique actions
   */
  export type TweetFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * Filter, which Tweet to fetch.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet findUnique
   */
  export interface TweetFindUniqueArgs extends TweetFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tweet findUniqueOrThrow
   */
  export type TweetFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * Filter, which Tweet to fetch.
     */
    where: TweetWhereUniqueInput
  }


  /**
   * Tweet base type for findFirst actions
   */
  export type TweetFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * Filter, which Tweet to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: Enumerable<TweetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tweets.
     */
    distinct?: Enumerable<TweetScalarFieldEnum>
  }

  /**
   * Tweet findFirst
   */
  export interface TweetFindFirstArgs extends TweetFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tweet findFirstOrThrow
   */
  export type TweetFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * Filter, which Tweet to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: Enumerable<TweetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tweets.
     */
    distinct?: Enumerable<TweetScalarFieldEnum>
  }


  /**
   * Tweet findMany
   */
  export type TweetFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * Filter, which Tweets to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: Enumerable<TweetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    distinct?: Enumerable<TweetScalarFieldEnum>
  }


  /**
   * Tweet create
   */
  export type TweetCreateArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * The data needed to create a Tweet.
     */
    data: XOR<TweetCreateInput, TweetUncheckedCreateInput>
  }


  /**
   * Tweet createMany
   */
  export type TweetCreateManyArgs = {
    /**
     * The data used to create many Tweets.
     */
    data: Enumerable<TweetCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tweet update
   */
  export type TweetUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * The data needed to update a Tweet.
     */
    data: XOR<TweetUpdateInput, TweetUncheckedUpdateInput>
    /**
     * Choose, which Tweet to update.
     */
    where: TweetWhereUniqueInput
  }


  /**
   * Tweet updateMany
   */
  export type TweetUpdateManyArgs = {
    /**
     * The data used to update Tweets.
     */
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyInput>
    /**
     * Filter which Tweets to update
     */
    where?: TweetWhereInput
  }


  /**
   * Tweet upsert
   */
  export type TweetUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * The filter to search for the Tweet to update in case it exists.
     */
    where: TweetWhereUniqueInput
    /**
     * In case the Tweet found by the `where` argument doesn't exist, create a new Tweet with this data.
     */
    create: XOR<TweetCreateInput, TweetUncheckedCreateInput>
    /**
     * In case the Tweet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TweetUpdateInput, TweetUncheckedUpdateInput>
  }


  /**
   * Tweet delete
   */
  export type TweetDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    /**
     * Filter which Tweet to delete.
     */
    where: TweetWhereUniqueInput
  }


  /**
   * Tweet deleteMany
   */
  export type TweetDeleteManyArgs = {
    /**
     * Filter which Tweets to delete
     */
    where?: TweetWhereInput
  }


  /**
   * Tweet.hashTags
   */
  export type Tweet$hashTagsArgs = {
    /**
     * Select specific fields to fetch from the HashTag
     */
    select?: HashTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagInclude | null
    where?: HashTagWhereInput
    orderBy?: Enumerable<HashTagOrderByWithRelationInput>
    cursor?: HashTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HashTagScalarFieldEnum>
  }


  /**
   * Tweet without action
   */
  export type TweetArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
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
    hashTagText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HashTagMaxAggregateOutputType = {
    id: number | null
    hashTagText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HashTagCountAggregateOutputType = {
    id: number
    hashTagText: number
    createdAt: number
    updatedAt: number
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
    hashTagText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HashTagMaxAggregateInputType = {
    id?: true
    hashTagText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HashTagCountAggregateInputType = {
    id?: true
    hashTagText?: true
    createdAt?: true
    updatedAt?: true
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
    hashTagText: string
    createdAt: Date
    updatedAt: Date
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
    hashTagText?: boolean
    isIntweets?: boolean | HashTag$isIntweetsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | HashTagCountOutputTypeArgs
  }


  export type HashTagInclude = {
    isIntweets?: boolean | HashTag$isIntweetsArgs
    _count?: boolean | HashTagCountOutputTypeArgs
  }

  export type HashTagGetPayload<S extends boolean | null | undefined | HashTagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashTag :
    S extends undefined ? never :
    S extends { include: any } & (HashTagArgs | HashTagFindManyArgs)
    ? HashTag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'isIntweets' ? Array < TweetGetPayload<S['include'][P]>>  :
        P extends '_count' ? HashTagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HashTagArgs | HashTagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'isIntweets' ? Array < TweetGetPayload<S['select'][P]>>  :
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

    isIntweets<T extends HashTag$isIntweetsArgs= {}>(args?: Subset<T, HashTag$isIntweetsArgs>): Prisma.PrismaPromise<Array<TweetGetPayload<T>>| Null>;

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
   * HashTag.isIntweets
   */
  export type HashTag$isIntweetsArgs = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TweetInclude | null
    where?: TweetWhereInput
    orderBy?: Enumerable<TweetOrderByWithRelationInput>
    cursor?: TweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TweetScalarFieldEnum>
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
   * Model DirectMessage
   */


  export type AggregateDirectMessage = {
    _count: DirectMessageCountAggregateOutputType | null
    _avg: DirectMessageAvgAggregateOutputType | null
    _sum: DirectMessageSumAggregateOutputType | null
    _min: DirectMessageMinAggregateOutputType | null
    _max: DirectMessageMaxAggregateOutputType | null
  }

  export type DirectMessageAvgAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type DirectMessageSumAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type DirectMessageMinAggregateOutputType = {
    id: number | null
    dmText: string | null
    fromUserId: number | null
    toUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMessageMaxAggregateOutputType = {
    id: number | null
    dmText: string | null
    fromUserId: number | null
    toUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMessageCountAggregateOutputType = {
    id: number
    dmText: number
    fromUserId: number
    toUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectMessageAvgAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type DirectMessageSumAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type DirectMessageMinAggregateInputType = {
    id?: true
    dmText?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMessageMaxAggregateInputType = {
    id?: true
    dmText?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMessageCountAggregateInputType = {
    id?: true
    dmText?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectMessageAggregateArgs = {
    /**
     * Filter which DirectMessage to aggregate.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: Enumerable<DirectMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectMessages
    **/
    _count?: true | DirectMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectMessageMaxAggregateInputType
  }

  export type GetDirectMessageAggregateType<T extends DirectMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectMessage[P]>
      : GetScalarType<T[P], AggregateDirectMessage[P]>
  }




  export type DirectMessageGroupByArgs = {
    where?: DirectMessageWhereInput
    orderBy?: Enumerable<DirectMessageOrderByWithAggregationInput>
    by: DirectMessageScalarFieldEnum[]
    having?: DirectMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectMessageCountAggregateInputType | true
    _avg?: DirectMessageAvgAggregateInputType
    _sum?: DirectMessageSumAggregateInputType
    _min?: DirectMessageMinAggregateInputType
    _max?: DirectMessageMaxAggregateInputType
  }


  export type DirectMessageGroupByOutputType = {
    id: number
    dmText: string
    fromUserId: number
    toUserId: number
    createdAt: Date
    updatedAt: Date
    _count: DirectMessageCountAggregateOutputType | null
    _avg: DirectMessageAvgAggregateOutputType | null
    _sum: DirectMessageSumAggregateOutputType | null
    _min: DirectMessageMinAggregateOutputType | null
    _max: DirectMessageMaxAggregateOutputType | null
  }

  type GetDirectMessageGroupByPayload<T extends DirectMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DirectMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectMessageGroupByOutputType[P]>
            : GetScalarType<T[P], DirectMessageGroupByOutputType[P]>
        }
      >
    >


  export type DirectMessageSelect = {
    id?: boolean
    dmText?: boolean
    fromUser?: boolean | UserArgs
    toUser?: boolean | UserArgs
    fromUserId?: boolean
    toUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type DirectMessageInclude = {
    fromUser?: boolean | UserArgs
    toUser?: boolean | UserArgs
  }

  export type DirectMessageGetPayload<S extends boolean | null | undefined | DirectMessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DirectMessage :
    S extends undefined ? never :
    S extends { include: any } & (DirectMessageArgs | DirectMessageFindManyArgs)
    ? DirectMessage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'fromUser' ? UserGetPayload<S['include'][P]> :
        P extends 'toUser' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DirectMessageArgs | DirectMessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'fromUser' ? UserGetPayload<S['select'][P]> :
        P extends 'toUser' ? UserGetPayload<S['select'][P]> :  P extends keyof DirectMessage ? DirectMessage[P] : never
  } 
      : DirectMessage


  type DirectMessageCountArgs = 
    Omit<DirectMessageFindManyArgs, 'select' | 'include'> & {
      select?: DirectMessageCountAggregateInputType | true
    }

  export interface DirectMessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DirectMessage that matches the filter.
     * @param {DirectMessageFindUniqueArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DirectMessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DirectMessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DirectMessage'> extends True ? Prisma__DirectMessageClient<DirectMessageGetPayload<T>> : Prisma__DirectMessageClient<DirectMessageGetPayload<T> | null, null>

    /**
     * Find one DirectMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DirectMessageFindUniqueOrThrowArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DirectMessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DirectMessageFindUniqueOrThrowArgs>
    ): Prisma__DirectMessageClient<DirectMessageGetPayload<T>>

    /**
     * Find the first DirectMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindFirstArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DirectMessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DirectMessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DirectMessage'> extends True ? Prisma__DirectMessageClient<DirectMessageGetPayload<T>> : Prisma__DirectMessageClient<DirectMessageGetPayload<T> | null, null>

    /**
     * Find the first DirectMessage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindFirstOrThrowArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DirectMessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DirectMessageFindFirstOrThrowArgs>
    ): Prisma__DirectMessageClient<DirectMessageGetPayload<T>>

    /**
     * Find zero or more DirectMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectMessages
     * const directMessages = await prisma.directMessage.findMany()
     * 
     * // Get first 10 DirectMessages
     * const directMessages = await prisma.directMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directMessageWithIdOnly = await prisma.directMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DirectMessageFindManyArgs>(
      args?: SelectSubset<T, DirectMessageFindManyArgs>
    ): Prisma.PrismaPromise<Array<DirectMessageGetPayload<T>>>

    /**
     * Create a DirectMessage.
     * @param {DirectMessageCreateArgs} args - Arguments to create a DirectMessage.
     * @example
     * // Create one DirectMessage
     * const DirectMessage = await prisma.directMessage.create({
     *   data: {
     *     // ... data to create a DirectMessage
     *   }
     * })
     * 
    **/
    create<T extends DirectMessageCreateArgs>(
      args: SelectSubset<T, DirectMessageCreateArgs>
    ): Prisma__DirectMessageClient<DirectMessageGetPayload<T>>

    /**
     * Create many DirectMessages.
     *     @param {DirectMessageCreateManyArgs} args - Arguments to create many DirectMessages.
     *     @example
     *     // Create many DirectMessages
     *     const directMessage = await prisma.directMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DirectMessageCreateManyArgs>(
      args?: SelectSubset<T, DirectMessageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DirectMessage.
     * @param {DirectMessageDeleteArgs} args - Arguments to delete one DirectMessage.
     * @example
     * // Delete one DirectMessage
     * const DirectMessage = await prisma.directMessage.delete({
     *   where: {
     *     // ... filter to delete one DirectMessage
     *   }
     * })
     * 
    **/
    delete<T extends DirectMessageDeleteArgs>(
      args: SelectSubset<T, DirectMessageDeleteArgs>
    ): Prisma__DirectMessageClient<DirectMessageGetPayload<T>>

    /**
     * Update one DirectMessage.
     * @param {DirectMessageUpdateArgs} args - Arguments to update one DirectMessage.
     * @example
     * // Update one DirectMessage
     * const directMessage = await prisma.directMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DirectMessageUpdateArgs>(
      args: SelectSubset<T, DirectMessageUpdateArgs>
    ): Prisma__DirectMessageClient<DirectMessageGetPayload<T>>

    /**
     * Delete zero or more DirectMessages.
     * @param {DirectMessageDeleteManyArgs} args - Arguments to filter DirectMessages to delete.
     * @example
     * // Delete a few DirectMessages
     * const { count } = await prisma.directMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DirectMessageDeleteManyArgs>(
      args?: SelectSubset<T, DirectMessageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectMessages
     * const directMessage = await prisma.directMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DirectMessageUpdateManyArgs>(
      args: SelectSubset<T, DirectMessageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DirectMessage.
     * @param {DirectMessageUpsertArgs} args - Arguments to update or create a DirectMessage.
     * @example
     * // Update or create a DirectMessage
     * const directMessage = await prisma.directMessage.upsert({
     *   create: {
     *     // ... data to create a DirectMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectMessage we want to update
     *   }
     * })
    **/
    upsert<T extends DirectMessageUpsertArgs>(
      args: SelectSubset<T, DirectMessageUpsertArgs>
    ): Prisma__DirectMessageClient<DirectMessageGetPayload<T>>

    /**
     * Count the number of DirectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageCountArgs} args - Arguments to filter DirectMessages to count.
     * @example
     * // Count the number of DirectMessages
     * const count = await prisma.directMessage.count({
     *   where: {
     *     // ... the filter for the DirectMessages we want to count
     *   }
     * })
    **/
    count<T extends DirectMessageCountArgs>(
      args?: Subset<T, DirectMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectMessageAggregateArgs>(args: Subset<T, DirectMessageAggregateArgs>): Prisma.PrismaPromise<GetDirectMessageAggregateType<T>>

    /**
     * Group by DirectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageGroupByArgs} args - Group by arguments.
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
      T extends DirectMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectMessageGroupByArgs['orderBy'] }
        : { orderBy?: DirectMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirectMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirectMessageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    fromUser<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    toUser<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * DirectMessage base type for findUnique actions
   */
  export type DirectMessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage findUnique
   */
  export interface DirectMessageFindUniqueArgs extends DirectMessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirectMessage findUniqueOrThrow
   */
  export type DirectMessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where: DirectMessageWhereUniqueInput
  }


  /**
   * DirectMessage base type for findFirst actions
   */
  export type DirectMessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: Enumerable<DirectMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessages.
     */
    distinct?: Enumerable<DirectMessageScalarFieldEnum>
  }

  /**
   * DirectMessage findFirst
   */
  export interface DirectMessageFindFirstArgs extends DirectMessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirectMessage findFirstOrThrow
   */
  export type DirectMessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: Enumerable<DirectMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessages.
     */
    distinct?: Enumerable<DirectMessageScalarFieldEnum>
  }


  /**
   * DirectMessage findMany
   */
  export type DirectMessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * Filter, which DirectMessages to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: Enumerable<DirectMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    distinct?: Enumerable<DirectMessageScalarFieldEnum>
  }


  /**
   * DirectMessage create
   */
  export type DirectMessageCreateArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * The data needed to create a DirectMessage.
     */
    data: XOR<DirectMessageCreateInput, DirectMessageUncheckedCreateInput>
  }


  /**
   * DirectMessage createMany
   */
  export type DirectMessageCreateManyArgs = {
    /**
     * The data used to create many DirectMessages.
     */
    data: Enumerable<DirectMessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DirectMessage update
   */
  export type DirectMessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * The data needed to update a DirectMessage.
     */
    data: XOR<DirectMessageUpdateInput, DirectMessageUncheckedUpdateInput>
    /**
     * Choose, which DirectMessage to update.
     */
    where: DirectMessageWhereUniqueInput
  }


  /**
   * DirectMessage updateMany
   */
  export type DirectMessageUpdateManyArgs = {
    /**
     * The data used to update DirectMessages.
     */
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyInput>
    /**
     * Filter which DirectMessages to update
     */
    where?: DirectMessageWhereInput
  }


  /**
   * DirectMessage upsert
   */
  export type DirectMessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * The filter to search for the DirectMessage to update in case it exists.
     */
    where: DirectMessageWhereUniqueInput
    /**
     * In case the DirectMessage found by the `where` argument doesn't exist, create a new DirectMessage with this data.
     */
    create: XOR<DirectMessageCreateInput, DirectMessageUncheckedCreateInput>
    /**
     * In case the DirectMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectMessageUpdateInput, DirectMessageUncheckedUpdateInput>
  }


  /**
   * DirectMessage delete
   */
  export type DirectMessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
    /**
     * Filter which DirectMessage to delete.
     */
    where: DirectMessageWhereUniqueInput
  }


  /**
   * DirectMessage deleteMany
   */
  export type DirectMessageDeleteManyArgs = {
    /**
     * Filter which DirectMessages to delete
     */
    where?: DirectMessageWhereInput
  }


  /**
   * DirectMessage without action
   */
  export type DirectMessageArgs = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectMessageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    answerText: 'answerText',
    quizId: 'quizId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const DirectMessageScalarFieldEnum: {
    id: 'id',
    dmText: 'dmText',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectMessageScalarFieldEnum = (typeof DirectMessageScalarFieldEnum)[keyof typeof DirectMessageScalarFieldEnum]


  export const HashTagScalarFieldEnum: {
    id: 'id',
    hashTagText: 'hashTagText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HashTagScalarFieldEnum = (typeof HashTagScalarFieldEnum)[keyof typeof HashTagScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    price: 'price',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    orderId: 'orderId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    tableId: 'tableId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QuizCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizCategoryScalarFieldEnum = (typeof QuizCategoryScalarFieldEnum)[keyof typeof QuizCategoryScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    questionText: 'questionText',
    quizCategoryId: 'quizCategoryId',
    correctChoiceId: 'correctChoiceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    bgColor: 'bgColor',
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


  export const TweetScalarFieldEnum: {
    id: 'id',
    tweetText: 'tweetText',
    replyToTweetId: 'replyToTweetId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TweetScalarFieldEnum = (typeof TweetScalarFieldEnum)[keyof typeof TweetScalarFieldEnum]


  export const UserRelationScalarFieldEnum: {
    id: 'id',
    followingUserId: 'followingUserId',
    followedUserId: 'followedUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRelationScalarFieldEnum = (typeof UserRelationScalarFieldEnum)[keyof typeof UserRelationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Menu?: MenuListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Menu?: MenuOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    id?: number
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MenuWhereInput = {
    AND?: Enumerable<MenuWhereInput>
    OR?: Enumerable<MenuWhereInput>
    NOT?: Enumerable<MenuWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    price?: FloatFilter | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput> | null
    categoryId?: IntNullableFilter | number | null
    orderItems?: OrderItemListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    category?: CategoryOrderByWithRelationInput
    categoryId?: SortOrder
    orderItems?: OrderItemOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuWhereUniqueInput = {
    id?: number
  }

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MenuScalarWhereWithAggregatesInput>
    OR?: Enumerable<MenuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MenuScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    categoryId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: IntFilter | number
    status?: StringFilter | string
    tableId?: IntFilter | number
    items?: OrderItemListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    items?: OrderItemOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderWhereUniqueInput = {
    id?: number
  }

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    tableId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: Enumerable<OrderItemWhereInput>
    OR?: Enumerable<OrderItemWhereInput>
    NOT?: Enumerable<OrderItemWhereInput>
    id?: IntFilter | number
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
    menuId?: IntFilter | number
    order?: XOR<OrderRelationFilter, OrderWhereInput> | null
    orderId?: IntNullableFilter | number | null
    quantity?: IntFilter | number
    totalPrice?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    menu?: MenuOrderByWithRelationInput
    menuId?: SortOrder
    order?: OrderOrderByWithRelationInput
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemWhereUniqueInput = {
    id?: number
  }

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    menuId?: IntWithAggregatesFilter | number
    orderId?: IntNullableWithAggregatesFilter | number | null
    quantity?: IntWithAggregatesFilter | number
    totalPrice?: FloatWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuizCategoryWhereInput = {
    AND?: Enumerable<QuizCategoryWhereInput>
    OR?: Enumerable<QuizCategoryWhereInput>
    NOT?: Enumerable<QuizCategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    quizzes?: QuizListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type QuizCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizCategoryWhereUniqueInput = {
    id?: number
  }

  export type QuizCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCategoryCountOrderByAggregateInput
    _avg?: QuizCategoryAvgOrderByAggregateInput
    _max?: QuizCategoryMaxOrderByAggregateInput
    _min?: QuizCategoryMinOrderByAggregateInput
    _sum?: QuizCategorySumOrderByAggregateInput
  }

  export type QuizCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuizCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuizCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuizCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ChoiceWhereInput = {
    AND?: Enumerable<ChoiceWhereInput>
    OR?: Enumerable<ChoiceWhereInput>
    NOT?: Enumerable<ChoiceWhereInput>
    id?: IntFilter | number
    answerText?: StringFilter | string
    quiz?: XOR<QuizRelationFilter, QuizWhereInput> | null
    quizId?: IntNullableFilter | number | null
    correctQuizzes?: QuizListRelationFilter
    rounds?: RoundListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder
    answerText?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    quizId?: SortOrder
    correctQuizzes?: QuizOrderByRelationAggregateInput
    rounds?: RoundOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceWhereUniqueInput = {
    id?: number
  }

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    answerText?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    answerText?: StringWithAggregatesFilter | string
    quizId?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuizWhereInput = {
    AND?: Enumerable<QuizWhereInput>
    OR?: Enumerable<QuizWhereInput>
    NOT?: Enumerable<QuizWhereInput>
    id?: IntFilter | number
    questionText?: StringFilter | string
    category?: XOR<QuizCategoryRelationFilter, QuizCategoryWhereInput>
    quizCategoryId?: IntFilter | number
    choices?: ChoiceListRelationFilter
    correctChoice?: XOR<ChoiceRelationFilter, ChoiceWhereInput>
    correctChoiceId?: IntFilter | number
    rounds?: RoundListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    questionText?: SortOrder
    category?: QuizCategoryOrderByWithRelationInput
    quizCategoryId?: SortOrder
    choices?: ChoiceOrderByRelationAggregateInput
    correctChoice?: ChoiceOrderByWithRelationInput
    correctChoiceId?: SortOrder
    rounds?: RoundOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizWhereUniqueInput = {
    id?: number
  }

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    questionText?: SortOrder
    quizCategoryId?: SortOrder
    correctChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuizScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuizScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuizScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    questionText?: StringWithAggregatesFilter | string
    quizCategoryId?: IntWithAggregatesFilter | number
    correctChoiceId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoundWhereInput = {
    AND?: Enumerable<RoundWhereInput>
    OR?: Enumerable<RoundWhereInput>
    NOT?: Enumerable<RoundWhereInput>
    id?: IntFilter | number
    quizzes?: QuizListRelationFilter
    selectedChoices?: ChoiceListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
    selectedChoices?: ChoiceOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundWhereUniqueInput = {
    id?: number
  }

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    bgColor?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TodoListOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    bgColor?: SortOrder
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
    bgColor?: SortOrder
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
    bgColor?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    imageUrl?: StringFilter | string
    bio?: StringFilter | string
    followingUserRelations?: UserRelationListRelationFilter
    followedUserRelations?: UserRelationListRelationFilter
    tweets?: TweetListRelationFilter
    directMessagesFrom?: DirectMessageListRelationFilter
    directMessagesTo?: DirectMessageListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    followingUserRelations?: UserRelationOrderByRelationAggregateInput
    followedUserRelations?: UserRelationOrderByRelationAggregateInput
    tweets?: TweetOrderByRelationAggregateInput
    directMessagesFrom?: DirectMessageOrderByRelationAggregateInput
    directMessagesTo?: DirectMessageOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
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
    imageUrl?: StringWithAggregatesFilter | string
    bio?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserRelationWhereInput = {
    AND?: Enumerable<UserRelationWhereInput>
    OR?: Enumerable<UserRelationWhereInput>
    NOT?: Enumerable<UserRelationWhereInput>
    id?: IntFilter | number
    followingUser?: XOR<UserRelationFilter, UserWhereInput>
    followingUserId?: IntFilter | number
    followedUser?: XOR<UserRelationFilter, UserWhereInput>
    followedUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserRelationOrderByWithRelationInput = {
    id?: SortOrder
    followingUser?: UserOrderByWithRelationInput
    followingUserId?: SortOrder
    followedUser?: UserOrderByWithRelationInput
    followedUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationWhereUniqueInput = {
    id?: number
  }

  export type UserRelationOrderByWithAggregationInput = {
    id?: SortOrder
    followingUserId?: SortOrder
    followedUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    followingUserId?: IntWithAggregatesFilter | number
    followedUserId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TweetWhereInput = {
    AND?: Enumerable<TweetWhereInput>
    OR?: Enumerable<TweetWhereInput>
    NOT?: Enumerable<TweetWhereInput>
    id?: IntFilter | number
    tweetText?: StringFilter | string
    tweetingUser?: XOR<UserRelationFilter, UserWhereInput>
    replyToTweet?: XOR<TweetRelationFilter, TweetWhereInput> | null
    replyToTweetId?: IntNullableFilter | number | null
    repliedTweet?: XOR<TweetRelationFilter, TweetWhereInput> | null
    userId?: IntFilter | number
    hashTags?: HashTagListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TweetOrderByWithRelationInput = {
    id?: SortOrder
    tweetText?: SortOrder
    tweetingUser?: UserOrderByWithRelationInput
    replyToTweet?: TweetOrderByWithRelationInput
    replyToTweetId?: SortOrder
    repliedTweet?: TweetOrderByWithRelationInput
    userId?: SortOrder
    hashTags?: HashTagOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TweetWhereUniqueInput = {
    id?: number
    replyToTweetId?: number
  }

  export type TweetOrderByWithAggregationInput = {
    id?: SortOrder
    tweetText?: SortOrder
    replyToTweetId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TweetCountOrderByAggregateInput
    _avg?: TweetAvgOrderByAggregateInput
    _max?: TweetMaxOrderByAggregateInput
    _min?: TweetMinOrderByAggregateInput
    _sum?: TweetSumOrderByAggregateInput
  }

  export type TweetScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TweetScalarWhereWithAggregatesInput>
    OR?: Enumerable<TweetScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TweetScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    tweetText?: StringWithAggregatesFilter | string
    replyToTweetId?: IntNullableWithAggregatesFilter | number | null
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HashTagWhereInput = {
    AND?: Enumerable<HashTagWhereInput>
    OR?: Enumerable<HashTagWhereInput>
    NOT?: Enumerable<HashTagWhereInput>
    id?: IntFilter | number
    hashTagText?: StringFilter | string
    isIntweets?: TweetListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type HashTagOrderByWithRelationInput = {
    id?: SortOrder
    hashTagText?: SortOrder
    isIntweets?: TweetOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashTagWhereUniqueInput = {
    id?: number
  }

  export type HashTagOrderByWithAggregationInput = {
    id?: SortOrder
    hashTagText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    hashTagText?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DirectMessageWhereInput = {
    AND?: Enumerable<DirectMessageWhereInput>
    OR?: Enumerable<DirectMessageWhereInput>
    NOT?: Enumerable<DirectMessageWhereInput>
    id?: IntFilter | number
    dmText?: StringFilter | string
    fromUser?: XOR<UserRelationFilter, UserWhereInput>
    toUser?: XOR<UserRelationFilter, UserWhereInput>
    fromUserId?: IntFilter | number
    toUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMessageOrderByWithRelationInput = {
    id?: SortOrder
    dmText?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageWhereUniqueInput = {
    id?: number
  }

  export type DirectMessageOrderByWithAggregationInput = {
    id?: SortOrder
    dmText?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectMessageCountOrderByAggregateInput
    _avg?: DirectMessageAvgOrderByAggregateInput
    _max?: DirectMessageMaxOrderByAggregateInput
    _min?: DirectMessageMinOrderByAggregateInput
    _sum?: DirectMessageSumOrderByAggregateInput
  }

  export type DirectMessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DirectMessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<DirectMessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DirectMessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dmText?: StringWithAggregatesFilter | string
    fromUserId?: IntWithAggregatesFilter | number
    toUserId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Menu?: MenuCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Menu?: MenuUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Menu?: MenuUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Menu?: MenuUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateInput = {
    name: string
    image: string
    price: number
    category?: CategoryCreateNestedOneWithoutMenuInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryId?: number | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutMenuNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateManyInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    status?: string
    tableId: number
    items?: OrderItemCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    status?: string
    tableId: number
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    menu: MenuCreateNestedOneWithoutOrderItemsInput
    order?: OrderCreateNestedOneWithoutItemsInput
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    menuId: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    menu?: MenuUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: OrderUpdateOneWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: number
    menuId: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCategoryCreateInput = {
    name: string
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCategoryUncheckedCreateInput = {
    id?: number
    name: string
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateInput = {
    answerText: string
    quiz?: QuizCreateNestedOneWithoutChoicesInput
    correctQuizzes?: QuizCreateNestedManyWithoutCorrectChoiceInput
    rounds?: RoundCreateNestedManyWithoutSelectedChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUncheckedCreateInput = {
    id?: number
    answerText: string
    quizId?: number | null
    correctQuizzes?: QuizUncheckedCreateNestedManyWithoutCorrectChoiceInput
    rounds?: RoundUncheckedCreateNestedManyWithoutSelectedChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateInput = {
    answerText?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneWithoutChoicesNestedInput
    correctQuizzes?: QuizUpdateManyWithoutCorrectChoiceNestedInput
    rounds?: RoundUpdateManyWithoutSelectedChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerText?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    correctQuizzes?: QuizUncheckedUpdateManyWithoutCorrectChoiceNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutSelectedChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateManyInput = {
    id?: number
    answerText: string
    quizId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateManyMutationInput = {
    answerText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerText?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    questionText: string
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    choices?: ChoiceCreateNestedManyWithoutQuizInput
    correctChoice: ChoiceCreateNestedOneWithoutCorrectQuizzesInput
    rounds?: RoundCreateNestedManyWithoutQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    questionText: string
    quizCategoryId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuizInput
    correctChoiceId: number
    rounds?: RoundUncheckedCreateNestedManyWithoutQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    choices?: ChoiceUpdateManyWithoutQuizNestedInput
    correctChoice?: ChoiceUpdateOneRequiredWithoutCorrectQuizzesNestedInput
    rounds?: RoundUpdateManyWithoutQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    quizCategoryId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuizNestedInput
    correctChoiceId?: IntFieldUpdateOperationsInput | number
    rounds?: RoundUncheckedUpdateManyWithoutQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateManyInput = {
    id?: number
    questionText: string
    quizCategoryId: number
    correctChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    quizCategoryId?: IntFieldUpdateOperationsInput | number
    correctChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundCreateInput = {
    quizzes?: QuizCreateNestedManyWithoutRoundsInput
    selectedChoices?: ChoiceCreateNestedManyWithoutRoundsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUncheckedCreateInput = {
    id?: number
    quizzes?: QuizUncheckedCreateNestedManyWithoutRoundsInput
    selectedChoices?: ChoiceUncheckedCreateNestedManyWithoutRoundsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUpdateInput = {
    quizzes?: QuizUpdateManyWithoutRoundsNestedInput
    selectedChoices?: ChoiceUpdateManyWithoutRoundsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzes?: QuizUncheckedUpdateManyWithoutRoundsNestedInput
    selectedChoices?: ChoiceUncheckedUpdateManyWithoutRoundsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListCreateInput = {
    task: string
    status?: string
    bgColor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUncheckedCreateInput = {
    id?: number
    task: string
    status?: string
    bgColor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUpdateInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListCreateManyInput = {
    id?: number
    task: string
    status?: string
    bgColor?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoListUpdateManyMutationInput = {
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationCreateNestedManyWithoutFollowingUserInput
    followedUserRelations?: UserRelationCreateNestedManyWithoutFollowedUserInput
    tweets?: TweetCreateNestedManyWithoutTweetingUserInput
    directMessagesFrom?: DirectMessageCreateNestedManyWithoutFromUserInput
    directMessagesTo?: DirectMessageCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowingUserInput
    followedUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowedUserInput
    tweets?: TweetUncheckedCreateNestedManyWithoutTweetingUserInput
    directMessagesFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromUserInput
    directMessagesTo?: DirectMessageUncheckedCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUpdateManyWithoutFollowingUserNestedInput
    followedUserRelations?: UserRelationUpdateManyWithoutFollowedUserNestedInput
    tweets?: TweetUpdateManyWithoutTweetingUserNestedInput
    directMessagesFrom?: DirectMessageUpdateManyWithoutFromUserNestedInput
    directMessagesTo?: DirectMessageUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowingUserNestedInput
    followedUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowedUserNestedInput
    tweets?: TweetUncheckedUpdateManyWithoutTweetingUserNestedInput
    directMessagesFrom?: DirectMessageUncheckedUpdateManyWithoutFromUserNestedInput
    directMessagesTo?: DirectMessageUncheckedUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    imageUrl: string
    bio: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateInput = {
    followingUser: UserCreateNestedOneWithoutFollowingUserRelationsInput
    followedUser: UserCreateNestedOneWithoutFollowedUserRelationsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUncheckedCreateInput = {
    id?: number
    followingUserId: number
    followedUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUpdateInput = {
    followingUser?: UserUpdateOneRequiredWithoutFollowingUserRelationsNestedInput
    followedUser?: UserUpdateOneRequiredWithoutFollowedUserRelationsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingUserId?: IntFieldUpdateOperationsInput | number
    followedUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateManyInput = {
    id?: number
    followingUserId: number
    followedUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingUserId?: IntFieldUpdateOperationsInput | number
    followedUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetCreateInput = {
    tweetText: string
    tweetingUser: UserCreateNestedOneWithoutTweetsInput
    replyToTweet?: TweetCreateNestedOneWithoutRepliedTweetInput
    repliedTweet?: TweetCreateNestedOneWithoutReplyToTweetInput
    hashTags?: HashTagCreateNestedManyWithoutIsIntweetsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetUncheckedCreateInput = {
    id?: number
    tweetText: string
    replyToTweetId?: number | null
    repliedTweet?: TweetUncheckedCreateNestedOneWithoutReplyToTweetInput
    userId: number
    hashTags?: HashTagUncheckedCreateNestedManyWithoutIsIntweetsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetUpdateInput = {
    tweetText?: StringFieldUpdateOperationsInput | string
    tweetingUser?: UserUpdateOneRequiredWithoutTweetsNestedInput
    replyToTweet?: TweetUpdateOneWithoutRepliedTweetNestedInput
    repliedTweet?: TweetUpdateOneWithoutReplyToTweetNestedInput
    hashTags?: HashTagUpdateManyWithoutIsIntweetsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetText?: StringFieldUpdateOperationsInput | string
    replyToTweetId?: NullableIntFieldUpdateOperationsInput | number | null
    repliedTweet?: TweetUncheckedUpdateOneWithoutReplyToTweetNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    hashTags?: HashTagUncheckedUpdateManyWithoutIsIntweetsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetCreateManyInput = {
    id?: number
    tweetText: string
    replyToTweetId?: number | null
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetUpdateManyMutationInput = {
    tweetText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetText?: StringFieldUpdateOperationsInput | string
    replyToTweetId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagCreateInput = {
    hashTagText: string
    isIntweets?: TweetCreateNestedManyWithoutHashTagsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashTagUncheckedCreateInput = {
    id?: number
    hashTagText: string
    isIntweets?: TweetUncheckedCreateNestedManyWithoutHashTagsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashTagUpdateInput = {
    hashTagText?: StringFieldUpdateOperationsInput | string
    isIntweets?: TweetUpdateManyWithoutHashTagsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashTagText?: StringFieldUpdateOperationsInput | string
    isIntweets?: TweetUncheckedUpdateManyWithoutHashTagsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagCreateManyInput = {
    id?: number
    hashTagText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashTagUpdateManyMutationInput = {
    hashTagText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashTagText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageCreateInput = {
    dmText: string
    fromUser: UserCreateNestedOneWithoutDirectMessagesFromInput
    toUser: UserCreateNestedOneWithoutDirectMessagesToInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUncheckedCreateInput = {
    id?: number
    dmText: string
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUpdateInput = {
    dmText?: StringFieldUpdateOperationsInput | string
    fromUser?: UserUpdateOneRequiredWithoutDirectMessagesFromNestedInput
    toUser?: UserUpdateOneRequiredWithoutDirectMessagesToNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dmText?: StringFieldUpdateOperationsInput | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageCreateManyInput = {
    id?: number
    dmText: string
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUpdateManyMutationInput = {
    dmText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dmText?: StringFieldUpdateOperationsInput | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
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

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
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

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
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

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
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

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuizCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuizRelationFilter = {
    is?: QuizWhereInput | null
    isNot?: QuizWhereInput | null
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    answerText?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    answerText?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    answerText?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type QuizCategoryRelationFilter = {
    is?: QuizCategoryWhereInput
    isNot?: QuizCategoryWhereInput
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type ChoiceRelationFilter = {
    is?: ChoiceWhereInput
    isNot?: ChoiceWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    quizCategoryId?: SortOrder
    correctChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    quizCategoryId?: SortOrder
    correctChoiceId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    quizCategoryId?: SortOrder
    correctChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    questionText?: SortOrder
    quizCategoryId?: SortOrder
    correctChoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    quizCategoryId?: SortOrder
    correctChoiceId?: SortOrder
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TodoListCountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    bgColor?: SortOrder
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
    bgColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoListMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    status?: SortOrder
    bgColor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationListRelationFilter = {
    every?: UserRelationWhereInput
    some?: UserRelationWhereInput
    none?: UserRelationWhereInput
  }

  export type TweetListRelationFilter = {
    every?: TweetWhereInput
    some?: TweetWhereInput
    none?: TweetWhereInput
  }

  export type DirectMessageListRelationFilter = {
    every?: DirectMessageWhereInput
    some?: DirectMessageWhereInput
    none?: DirectMessageWhereInput
  }

  export type UserRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TweetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
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

  export type UserRelationCountOrderByAggregateInput = {
    id?: SortOrder
    followingUserId?: SortOrder
    followedUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationAvgOrderByAggregateInput = {
    id?: SortOrder
    followingUserId?: SortOrder
    followedUserId?: SortOrder
  }

  export type UserRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    followingUserId?: SortOrder
    followedUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationMinOrderByAggregateInput = {
    id?: SortOrder
    followingUserId?: SortOrder
    followedUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationSumOrderByAggregateInput = {
    id?: SortOrder
    followingUserId?: SortOrder
    followedUserId?: SortOrder
  }

  export type TweetRelationFilter = {
    is?: TweetWhereInput | null
    isNot?: TweetWhereInput | null
  }

  export type HashTagListRelationFilter = {
    every?: HashTagWhereInput
    some?: HashTagWhereInput
    none?: HashTagWhereInput
  }

  export type HashTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TweetCountOrderByAggregateInput = {
    id?: SortOrder
    tweetText?: SortOrder
    replyToTweetId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TweetAvgOrderByAggregateInput = {
    id?: SortOrder
    replyToTweetId?: SortOrder
    userId?: SortOrder
  }

  export type TweetMaxOrderByAggregateInput = {
    id?: SortOrder
    tweetText?: SortOrder
    replyToTweetId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TweetMinOrderByAggregateInput = {
    id?: SortOrder
    tweetText?: SortOrder
    replyToTweetId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TweetSumOrderByAggregateInput = {
    id?: SortOrder
    replyToTweetId?: SortOrder
    userId?: SortOrder
  }

  export type HashTagCountOrderByAggregateInput = {
    id?: SortOrder
    hashTagText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashTagMaxOrderByAggregateInput = {
    id?: SortOrder
    hashTagText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashTagMinOrderByAggregateInput = {
    id?: SortOrder
    hashTagText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DirectMessageCountOrderByAggregateInput = {
    id?: SortOrder
    dmText?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type DirectMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    dmText?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageMinOrderByAggregateInput = {
    id?: SortOrder
    dmText?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageSumOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type MenuCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<MenuCreateWithoutCategoryInput>, Enumerable<MenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutCategoryInput>
    createMany?: MenuCreateManyCategoryInputEnvelope
    connect?: Enumerable<MenuWhereUniqueInput>
  }

  export type MenuUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<MenuCreateWithoutCategoryInput>, Enumerable<MenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutCategoryInput>
    createMany?: MenuCreateManyCategoryInputEnvelope
    connect?: Enumerable<MenuWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MenuUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<MenuCreateWithoutCategoryInput>, Enumerable<MenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<MenuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: MenuCreateManyCategoryInputEnvelope
    set?: Enumerable<MenuWhereUniqueInput>
    disconnect?: Enumerable<MenuWhereUniqueInput>
    delete?: Enumerable<MenuWhereUniqueInput>
    connect?: Enumerable<MenuWhereUniqueInput>
    update?: Enumerable<MenuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<MenuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<MenuScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<MenuCreateWithoutCategoryInput>, Enumerable<MenuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<MenuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<MenuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: MenuCreateManyCategoryInputEnvelope
    set?: Enumerable<MenuWhereUniqueInput>
    disconnect?: Enumerable<MenuWhereUniqueInput>
    delete?: Enumerable<MenuWhereUniqueInput>
    connect?: Enumerable<MenuWhereUniqueInput>
    update?: Enumerable<MenuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<MenuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<MenuScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutMenuInput = {
    create?: XOR<CategoryCreateWithoutMenuInput, CategoryUncheckedCreateWithoutMenuInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenuInput
    connect?: CategoryWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutMenuInput>, Enumerable<OrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutMenuInput>
    createMany?: OrderItemCreateManyMenuInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutMenuInput>, Enumerable<OrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutMenuInput>
    createMany?: OrderItemCreateManyMenuInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneWithoutMenuNestedInput = {
    create?: XOR<CategoryCreateWithoutMenuInput, CategoryUncheckedCreateWithoutMenuInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenuInput
    upsert?: CategoryUpsertWithoutMenuInput
    disconnect?: boolean
    delete?: boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutMenuInput, CategoryUncheckedUpdateWithoutMenuInput>
  }

  export type OrderItemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutMenuInput>, Enumerable<OrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: OrderItemCreateManyMenuInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutMenuInput>, Enumerable<OrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: OrderItemCreateManyMenuInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type MenuCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutOrderItemsInput
    connect?: MenuWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type MenuUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuUpsertWithoutOrderItemsInput
    connect?: MenuWhereUniqueInput
    update?: XOR<MenuUpdateWithoutOrderItemsInput, MenuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateOneWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    disconnect?: boolean
    delete?: boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type QuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCategoryInput>, Enumerable<QuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCategoryInput>
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<QuizWhereUniqueInput>
  }

  export type QuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCategoryInput>, Enumerable<QuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCategoryInput>
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<QuizWhereUniqueInput>
  }

  export type QuizUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCategoryInput>, Enumerable<QuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<QuizUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: Enumerable<QuizWhereUniqueInput>
    disconnect?: Enumerable<QuizWhereUniqueInput>
    delete?: Enumerable<QuizWhereUniqueInput>
    connect?: Enumerable<QuizWhereUniqueInput>
    update?: Enumerable<QuizUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<QuizUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<QuizScalarWhereInput>
  }

  export type QuizUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCategoryInput>, Enumerable<QuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<QuizUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: Enumerable<QuizWhereUniqueInput>
    disconnect?: Enumerable<QuizWhereUniqueInput>
    delete?: Enumerable<QuizWhereUniqueInput>
    connect?: Enumerable<QuizWhereUniqueInput>
    update?: Enumerable<QuizUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<QuizUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<QuizScalarWhereInput>
  }

  export type QuizCreateNestedOneWithoutChoicesInput = {
    create?: XOR<QuizCreateWithoutChoicesInput, QuizUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutChoicesInput
    connect?: QuizWhereUniqueInput
  }

  export type QuizCreateNestedManyWithoutCorrectChoiceInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCorrectChoiceInput>, Enumerable<QuizUncheckedCreateWithoutCorrectChoiceInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCorrectChoiceInput>
    createMany?: QuizCreateManyCorrectChoiceInputEnvelope
    connect?: Enumerable<QuizWhereUniqueInput>
  }

  export type RoundCreateNestedManyWithoutSelectedChoicesInput = {
    create?: XOR<Enumerable<RoundCreateWithoutSelectedChoicesInput>, Enumerable<RoundUncheckedCreateWithoutSelectedChoicesInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutSelectedChoicesInput>
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type QuizUncheckedCreateNestedManyWithoutCorrectChoiceInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCorrectChoiceInput>, Enumerable<QuizUncheckedCreateWithoutCorrectChoiceInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCorrectChoiceInput>
    createMany?: QuizCreateManyCorrectChoiceInputEnvelope
    connect?: Enumerable<QuizWhereUniqueInput>
  }

  export type RoundUncheckedCreateNestedManyWithoutSelectedChoicesInput = {
    create?: XOR<Enumerable<RoundCreateWithoutSelectedChoicesInput>, Enumerable<RoundUncheckedCreateWithoutSelectedChoicesInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutSelectedChoicesInput>
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type QuizUpdateOneWithoutChoicesNestedInput = {
    create?: XOR<QuizCreateWithoutChoicesInput, QuizUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutChoicesInput
    upsert?: QuizUpsertWithoutChoicesInput
    disconnect?: boolean
    delete?: boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<QuizUpdateWithoutChoicesInput, QuizUncheckedUpdateWithoutChoicesInput>
  }

  export type QuizUpdateManyWithoutCorrectChoiceNestedInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCorrectChoiceInput>, Enumerable<QuizUncheckedCreateWithoutCorrectChoiceInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCorrectChoiceInput>
    upsert?: Enumerable<QuizUpsertWithWhereUniqueWithoutCorrectChoiceInput>
    createMany?: QuizCreateManyCorrectChoiceInputEnvelope
    set?: Enumerable<QuizWhereUniqueInput>
    disconnect?: Enumerable<QuizWhereUniqueInput>
    delete?: Enumerable<QuizWhereUniqueInput>
    connect?: Enumerable<QuizWhereUniqueInput>
    update?: Enumerable<QuizUpdateWithWhereUniqueWithoutCorrectChoiceInput>
    updateMany?: Enumerable<QuizUpdateManyWithWhereWithoutCorrectChoiceInput>
    deleteMany?: Enumerable<QuizScalarWhereInput>
  }

  export type RoundUpdateManyWithoutSelectedChoicesNestedInput = {
    create?: XOR<Enumerable<RoundCreateWithoutSelectedChoicesInput>, Enumerable<RoundUncheckedCreateWithoutSelectedChoicesInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutSelectedChoicesInput>
    upsert?: Enumerable<RoundUpsertWithWhereUniqueWithoutSelectedChoicesInput>
    set?: Enumerable<RoundWhereUniqueInput>
    disconnect?: Enumerable<RoundWhereUniqueInput>
    delete?: Enumerable<RoundWhereUniqueInput>
    connect?: Enumerable<RoundWhereUniqueInput>
    update?: Enumerable<RoundUpdateWithWhereUniqueWithoutSelectedChoicesInput>
    updateMany?: Enumerable<RoundUpdateManyWithWhereWithoutSelectedChoicesInput>
    deleteMany?: Enumerable<RoundScalarWhereInput>
  }

  export type QuizUncheckedUpdateManyWithoutCorrectChoiceNestedInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCorrectChoiceInput>, Enumerable<QuizUncheckedCreateWithoutCorrectChoiceInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCorrectChoiceInput>
    upsert?: Enumerable<QuizUpsertWithWhereUniqueWithoutCorrectChoiceInput>
    createMany?: QuizCreateManyCorrectChoiceInputEnvelope
    set?: Enumerable<QuizWhereUniqueInput>
    disconnect?: Enumerable<QuizWhereUniqueInput>
    delete?: Enumerable<QuizWhereUniqueInput>
    connect?: Enumerable<QuizWhereUniqueInput>
    update?: Enumerable<QuizUpdateWithWhereUniqueWithoutCorrectChoiceInput>
    updateMany?: Enumerable<QuizUpdateManyWithWhereWithoutCorrectChoiceInput>
    deleteMany?: Enumerable<QuizScalarWhereInput>
  }

  export type RoundUncheckedUpdateManyWithoutSelectedChoicesNestedInput = {
    create?: XOR<Enumerable<RoundCreateWithoutSelectedChoicesInput>, Enumerable<RoundUncheckedCreateWithoutSelectedChoicesInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutSelectedChoicesInput>
    upsert?: Enumerable<RoundUpsertWithWhereUniqueWithoutSelectedChoicesInput>
    set?: Enumerable<RoundWhereUniqueInput>
    disconnect?: Enumerable<RoundWhereUniqueInput>
    delete?: Enumerable<RoundWhereUniqueInput>
    connect?: Enumerable<RoundWhereUniqueInput>
    update?: Enumerable<RoundUpdateWithWhereUniqueWithoutSelectedChoicesInput>
    updateMany?: Enumerable<RoundUpdateManyWithWhereWithoutSelectedChoicesInput>
    deleteMany?: Enumerable<RoundScalarWhereInput>
  }

  export type QuizCategoryCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<QuizCategoryCreateWithoutQuizzesInput, QuizCategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: QuizCategoryCreateOrConnectWithoutQuizzesInput
    connect?: QuizCategoryWhereUniqueInput
  }

  export type ChoiceCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuizInput>, Enumerable<ChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuizInput>
    createMany?: ChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type ChoiceCreateNestedOneWithoutCorrectQuizzesInput = {
    create?: XOR<ChoiceCreateWithoutCorrectQuizzesInput, ChoiceUncheckedCreateWithoutCorrectQuizzesInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutCorrectQuizzesInput
    connect?: ChoiceWhereUniqueInput
  }

  export type RoundCreateNestedManyWithoutQuizzesInput = {
    create?: XOR<Enumerable<RoundCreateWithoutQuizzesInput>, Enumerable<RoundUncheckedCreateWithoutQuizzesInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutQuizzesInput>
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type ChoiceUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuizInput>, Enumerable<ChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuizInput>
    createMany?: ChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type RoundUncheckedCreateNestedManyWithoutQuizzesInput = {
    create?: XOR<Enumerable<RoundCreateWithoutQuizzesInput>, Enumerable<RoundUncheckedCreateWithoutQuizzesInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutQuizzesInput>
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<QuizCategoryCreateWithoutQuizzesInput, QuizCategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: QuizCategoryCreateOrConnectWithoutQuizzesInput
    upsert?: QuizCategoryUpsertWithoutQuizzesInput
    connect?: QuizCategoryWhereUniqueInput
    update?: XOR<QuizCategoryUpdateWithoutQuizzesInput, QuizCategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type ChoiceUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuizInput>, Enumerable<ChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: ChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<ChoiceWhereUniqueInput>
    disconnect?: Enumerable<ChoiceWhereUniqueInput>
    delete?: Enumerable<ChoiceWhereUniqueInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<ChoiceScalarWhereInput>
  }

  export type ChoiceUpdateOneRequiredWithoutCorrectQuizzesNestedInput = {
    create?: XOR<ChoiceCreateWithoutCorrectQuizzesInput, ChoiceUncheckedCreateWithoutCorrectQuizzesInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutCorrectQuizzesInput
    upsert?: ChoiceUpsertWithoutCorrectQuizzesInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<ChoiceUpdateWithoutCorrectQuizzesInput, ChoiceUncheckedUpdateWithoutCorrectQuizzesInput>
  }

  export type RoundUpdateManyWithoutQuizzesNestedInput = {
    create?: XOR<Enumerable<RoundCreateWithoutQuizzesInput>, Enumerable<RoundUncheckedCreateWithoutQuizzesInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutQuizzesInput>
    upsert?: Enumerable<RoundUpsertWithWhereUniqueWithoutQuizzesInput>
    set?: Enumerable<RoundWhereUniqueInput>
    disconnect?: Enumerable<RoundWhereUniqueInput>
    delete?: Enumerable<RoundWhereUniqueInput>
    connect?: Enumerable<RoundWhereUniqueInput>
    update?: Enumerable<RoundUpdateWithWhereUniqueWithoutQuizzesInput>
    updateMany?: Enumerable<RoundUpdateManyWithWhereWithoutQuizzesInput>
    deleteMany?: Enumerable<RoundScalarWhereInput>
  }

  export type ChoiceUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuizInput>, Enumerable<ChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: ChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<ChoiceWhereUniqueInput>
    disconnect?: Enumerable<ChoiceWhereUniqueInput>
    delete?: Enumerable<ChoiceWhereUniqueInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<ChoiceScalarWhereInput>
  }

  export type RoundUncheckedUpdateManyWithoutQuizzesNestedInput = {
    create?: XOR<Enumerable<RoundCreateWithoutQuizzesInput>, Enumerable<RoundUncheckedCreateWithoutQuizzesInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutQuizzesInput>
    upsert?: Enumerable<RoundUpsertWithWhereUniqueWithoutQuizzesInput>
    set?: Enumerable<RoundWhereUniqueInput>
    disconnect?: Enumerable<RoundWhereUniqueInput>
    delete?: Enumerable<RoundWhereUniqueInput>
    connect?: Enumerable<RoundWhereUniqueInput>
    update?: Enumerable<RoundUpdateWithWhereUniqueWithoutQuizzesInput>
    updateMany?: Enumerable<RoundUpdateManyWithWhereWithoutQuizzesInput>
    deleteMany?: Enumerable<RoundScalarWhereInput>
  }

  export type QuizCreateNestedManyWithoutRoundsInput = {
    create?: XOR<Enumerable<QuizCreateWithoutRoundsInput>, Enumerable<QuizUncheckedCreateWithoutRoundsInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutRoundsInput>
    connect?: Enumerable<QuizWhereUniqueInput>
  }

  export type ChoiceCreateNestedManyWithoutRoundsInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutRoundsInput>, Enumerable<ChoiceUncheckedCreateWithoutRoundsInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutRoundsInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type QuizUncheckedCreateNestedManyWithoutRoundsInput = {
    create?: XOR<Enumerable<QuizCreateWithoutRoundsInput>, Enumerable<QuizUncheckedCreateWithoutRoundsInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutRoundsInput>
    connect?: Enumerable<QuizWhereUniqueInput>
  }

  export type ChoiceUncheckedCreateNestedManyWithoutRoundsInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutRoundsInput>, Enumerable<ChoiceUncheckedCreateWithoutRoundsInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutRoundsInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type QuizUpdateManyWithoutRoundsNestedInput = {
    create?: XOR<Enumerable<QuizCreateWithoutRoundsInput>, Enumerable<QuizUncheckedCreateWithoutRoundsInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutRoundsInput>
    upsert?: Enumerable<QuizUpsertWithWhereUniqueWithoutRoundsInput>
    set?: Enumerable<QuizWhereUniqueInput>
    disconnect?: Enumerable<QuizWhereUniqueInput>
    delete?: Enumerable<QuizWhereUniqueInput>
    connect?: Enumerable<QuizWhereUniqueInput>
    update?: Enumerable<QuizUpdateWithWhereUniqueWithoutRoundsInput>
    updateMany?: Enumerable<QuizUpdateManyWithWhereWithoutRoundsInput>
    deleteMany?: Enumerable<QuizScalarWhereInput>
  }

  export type ChoiceUpdateManyWithoutRoundsNestedInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutRoundsInput>, Enumerable<ChoiceUncheckedCreateWithoutRoundsInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutRoundsInput>
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutRoundsInput>
    set?: Enumerable<ChoiceWhereUniqueInput>
    disconnect?: Enumerable<ChoiceWhereUniqueInput>
    delete?: Enumerable<ChoiceWhereUniqueInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutRoundsInput>
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutRoundsInput>
    deleteMany?: Enumerable<ChoiceScalarWhereInput>
  }

  export type QuizUncheckedUpdateManyWithoutRoundsNestedInput = {
    create?: XOR<Enumerable<QuizCreateWithoutRoundsInput>, Enumerable<QuizUncheckedCreateWithoutRoundsInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutRoundsInput>
    upsert?: Enumerable<QuizUpsertWithWhereUniqueWithoutRoundsInput>
    set?: Enumerable<QuizWhereUniqueInput>
    disconnect?: Enumerable<QuizWhereUniqueInput>
    delete?: Enumerable<QuizWhereUniqueInput>
    connect?: Enumerable<QuizWhereUniqueInput>
    update?: Enumerable<QuizUpdateWithWhereUniqueWithoutRoundsInput>
    updateMany?: Enumerable<QuizUpdateManyWithWhereWithoutRoundsInput>
    deleteMany?: Enumerable<QuizScalarWhereInput>
  }

  export type ChoiceUncheckedUpdateManyWithoutRoundsNestedInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutRoundsInput>, Enumerable<ChoiceUncheckedCreateWithoutRoundsInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutRoundsInput>
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutRoundsInput>
    set?: Enumerable<ChoiceWhereUniqueInput>
    disconnect?: Enumerable<ChoiceWhereUniqueInput>
    delete?: Enumerable<ChoiceWhereUniqueInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutRoundsInput>
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutRoundsInput>
    deleteMany?: Enumerable<ChoiceScalarWhereInput>
  }

  export type UserRelationCreateNestedManyWithoutFollowingUserInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFollowingUserInput>, Enumerable<UserRelationUncheckedCreateWithoutFollowingUserInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFollowingUserInput>
    createMany?: UserRelationCreateManyFollowingUserInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type UserRelationCreateNestedManyWithoutFollowedUserInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFollowedUserInput>, Enumerable<UserRelationUncheckedCreateWithoutFollowedUserInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFollowedUserInput>
    createMany?: UserRelationCreateManyFollowedUserInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type TweetCreateNestedManyWithoutTweetingUserInput = {
    create?: XOR<Enumerable<TweetCreateWithoutTweetingUserInput>, Enumerable<TweetUncheckedCreateWithoutTweetingUserInput>>
    connectOrCreate?: Enumerable<TweetCreateOrConnectWithoutTweetingUserInput>
    createMany?: TweetCreateManyTweetingUserInputEnvelope
    connect?: Enumerable<TweetWhereUniqueInput>
  }

  export type DirectMessageCreateNestedManyWithoutFromUserInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutFromUserInput>, Enumerable<DirectMessageUncheckedCreateWithoutFromUserInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutFromUserInput>
    createMany?: DirectMessageCreateManyFromUserInputEnvelope
    connect?: Enumerable<DirectMessageWhereUniqueInput>
  }

  export type DirectMessageCreateNestedManyWithoutToUserInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutToUserInput>, Enumerable<DirectMessageUncheckedCreateWithoutToUserInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutToUserInput>
    createMany?: DirectMessageCreateManyToUserInputEnvelope
    connect?: Enumerable<DirectMessageWhereUniqueInput>
  }

  export type UserRelationUncheckedCreateNestedManyWithoutFollowingUserInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFollowingUserInput>, Enumerable<UserRelationUncheckedCreateWithoutFollowingUserInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFollowingUserInput>
    createMany?: UserRelationCreateManyFollowingUserInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type UserRelationUncheckedCreateNestedManyWithoutFollowedUserInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFollowedUserInput>, Enumerable<UserRelationUncheckedCreateWithoutFollowedUserInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFollowedUserInput>
    createMany?: UserRelationCreateManyFollowedUserInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type TweetUncheckedCreateNestedManyWithoutTweetingUserInput = {
    create?: XOR<Enumerable<TweetCreateWithoutTweetingUserInput>, Enumerable<TweetUncheckedCreateWithoutTweetingUserInput>>
    connectOrCreate?: Enumerable<TweetCreateOrConnectWithoutTweetingUserInput>
    createMany?: TweetCreateManyTweetingUserInputEnvelope
    connect?: Enumerable<TweetWhereUniqueInput>
  }

  export type DirectMessageUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutFromUserInput>, Enumerable<DirectMessageUncheckedCreateWithoutFromUserInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutFromUserInput>
    createMany?: DirectMessageCreateManyFromUserInputEnvelope
    connect?: Enumerable<DirectMessageWhereUniqueInput>
  }

  export type DirectMessageUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutToUserInput>, Enumerable<DirectMessageUncheckedCreateWithoutToUserInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutToUserInput>
    createMany?: DirectMessageCreateManyToUserInputEnvelope
    connect?: Enumerable<DirectMessageWhereUniqueInput>
  }

  export type UserRelationUpdateManyWithoutFollowingUserNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFollowingUserInput>, Enumerable<UserRelationUncheckedCreateWithoutFollowingUserInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFollowingUserInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutFollowingUserInput>
    createMany?: UserRelationCreateManyFollowingUserInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutFollowingUserInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutFollowingUserInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type UserRelationUpdateManyWithoutFollowedUserNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFollowedUserInput>, Enumerable<UserRelationUncheckedCreateWithoutFollowedUserInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFollowedUserInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutFollowedUserInput>
    createMany?: UserRelationCreateManyFollowedUserInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutFollowedUserInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutFollowedUserInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type TweetUpdateManyWithoutTweetingUserNestedInput = {
    create?: XOR<Enumerable<TweetCreateWithoutTweetingUserInput>, Enumerable<TweetUncheckedCreateWithoutTweetingUserInput>>
    connectOrCreate?: Enumerable<TweetCreateOrConnectWithoutTweetingUserInput>
    upsert?: Enumerable<TweetUpsertWithWhereUniqueWithoutTweetingUserInput>
    createMany?: TweetCreateManyTweetingUserInputEnvelope
    set?: Enumerable<TweetWhereUniqueInput>
    disconnect?: Enumerable<TweetWhereUniqueInput>
    delete?: Enumerable<TweetWhereUniqueInput>
    connect?: Enumerable<TweetWhereUniqueInput>
    update?: Enumerable<TweetUpdateWithWhereUniqueWithoutTweetingUserInput>
    updateMany?: Enumerable<TweetUpdateManyWithWhereWithoutTweetingUserInput>
    deleteMany?: Enumerable<TweetScalarWhereInput>
  }

  export type DirectMessageUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutFromUserInput>, Enumerable<DirectMessageUncheckedCreateWithoutFromUserInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutFromUserInput>
    upsert?: Enumerable<DirectMessageUpsertWithWhereUniqueWithoutFromUserInput>
    createMany?: DirectMessageCreateManyFromUserInputEnvelope
    set?: Enumerable<DirectMessageWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageWhereUniqueInput>
    delete?: Enumerable<DirectMessageWhereUniqueInput>
    connect?: Enumerable<DirectMessageWhereUniqueInput>
    update?: Enumerable<DirectMessageUpdateWithWhereUniqueWithoutFromUserInput>
    updateMany?: Enumerable<DirectMessageUpdateManyWithWhereWithoutFromUserInput>
    deleteMany?: Enumerable<DirectMessageScalarWhereInput>
  }

  export type DirectMessageUpdateManyWithoutToUserNestedInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutToUserInput>, Enumerable<DirectMessageUncheckedCreateWithoutToUserInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutToUserInput>
    upsert?: Enumerable<DirectMessageUpsertWithWhereUniqueWithoutToUserInput>
    createMany?: DirectMessageCreateManyToUserInputEnvelope
    set?: Enumerable<DirectMessageWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageWhereUniqueInput>
    delete?: Enumerable<DirectMessageWhereUniqueInput>
    connect?: Enumerable<DirectMessageWhereUniqueInput>
    update?: Enumerable<DirectMessageUpdateWithWhereUniqueWithoutToUserInput>
    updateMany?: Enumerable<DirectMessageUpdateManyWithWhereWithoutToUserInput>
    deleteMany?: Enumerable<DirectMessageScalarWhereInput>
  }

  export type UserRelationUncheckedUpdateManyWithoutFollowingUserNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFollowingUserInput>, Enumerable<UserRelationUncheckedCreateWithoutFollowingUserInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFollowingUserInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutFollowingUserInput>
    createMany?: UserRelationCreateManyFollowingUserInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutFollowingUserInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutFollowingUserInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type UserRelationUncheckedUpdateManyWithoutFollowedUserNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFollowedUserInput>, Enumerable<UserRelationUncheckedCreateWithoutFollowedUserInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFollowedUserInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutFollowedUserInput>
    createMany?: UserRelationCreateManyFollowedUserInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutFollowedUserInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutFollowedUserInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type TweetUncheckedUpdateManyWithoutTweetingUserNestedInput = {
    create?: XOR<Enumerable<TweetCreateWithoutTweetingUserInput>, Enumerable<TweetUncheckedCreateWithoutTweetingUserInput>>
    connectOrCreate?: Enumerable<TweetCreateOrConnectWithoutTweetingUserInput>
    upsert?: Enumerable<TweetUpsertWithWhereUniqueWithoutTweetingUserInput>
    createMany?: TweetCreateManyTweetingUserInputEnvelope
    set?: Enumerable<TweetWhereUniqueInput>
    disconnect?: Enumerable<TweetWhereUniqueInput>
    delete?: Enumerable<TweetWhereUniqueInput>
    connect?: Enumerable<TweetWhereUniqueInput>
    update?: Enumerable<TweetUpdateWithWhereUniqueWithoutTweetingUserInput>
    updateMany?: Enumerable<TweetUpdateManyWithWhereWithoutTweetingUserInput>
    deleteMany?: Enumerable<TweetScalarWhereInput>
  }

  export type DirectMessageUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutFromUserInput>, Enumerable<DirectMessageUncheckedCreateWithoutFromUserInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutFromUserInput>
    upsert?: Enumerable<DirectMessageUpsertWithWhereUniqueWithoutFromUserInput>
    createMany?: DirectMessageCreateManyFromUserInputEnvelope
    set?: Enumerable<DirectMessageWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageWhereUniqueInput>
    delete?: Enumerable<DirectMessageWhereUniqueInput>
    connect?: Enumerable<DirectMessageWhereUniqueInput>
    update?: Enumerable<DirectMessageUpdateWithWhereUniqueWithoutFromUserInput>
    updateMany?: Enumerable<DirectMessageUpdateManyWithWhereWithoutFromUserInput>
    deleteMany?: Enumerable<DirectMessageScalarWhereInput>
  }

  export type DirectMessageUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutToUserInput>, Enumerable<DirectMessageUncheckedCreateWithoutToUserInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutToUserInput>
    upsert?: Enumerable<DirectMessageUpsertWithWhereUniqueWithoutToUserInput>
    createMany?: DirectMessageCreateManyToUserInputEnvelope
    set?: Enumerable<DirectMessageWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageWhereUniqueInput>
    delete?: Enumerable<DirectMessageWhereUniqueInput>
    connect?: Enumerable<DirectMessageWhereUniqueInput>
    update?: Enumerable<DirectMessageUpdateWithWhereUniqueWithoutToUserInput>
    updateMany?: Enumerable<DirectMessageUpdateManyWithWhereWithoutToUserInput>
    deleteMany?: Enumerable<DirectMessageScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFollowingUserRelationsInput = {
    create?: XOR<UserCreateWithoutFollowingUserRelationsInput, UserUncheckedCreateWithoutFollowingUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingUserRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowedUserRelationsInput = {
    create?: XOR<UserCreateWithoutFollowedUserRelationsInput, UserUncheckedCreateWithoutFollowedUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowedUserRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowingUserRelationsNestedInput = {
    create?: XOR<UserCreateWithoutFollowingUserRelationsInput, UserUncheckedCreateWithoutFollowingUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingUserRelationsInput
    upsert?: UserUpsertWithoutFollowingUserRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowingUserRelationsInput, UserUncheckedUpdateWithoutFollowingUserRelationsInput>
  }

  export type UserUpdateOneRequiredWithoutFollowedUserRelationsNestedInput = {
    create?: XOR<UserCreateWithoutFollowedUserRelationsInput, UserUncheckedCreateWithoutFollowedUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowedUserRelationsInput
    upsert?: UserUpsertWithoutFollowedUserRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowedUserRelationsInput, UserUncheckedUpdateWithoutFollowedUserRelationsInput>
  }

  export type UserCreateNestedOneWithoutTweetsInput = {
    create?: XOR<UserCreateWithoutTweetsInput, UserUncheckedCreateWithoutTweetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTweetsInput
    connect?: UserWhereUniqueInput
  }

  export type TweetCreateNestedOneWithoutRepliedTweetInput = {
    create?: XOR<TweetCreateWithoutRepliedTweetInput, TweetUncheckedCreateWithoutRepliedTweetInput>
    connectOrCreate?: TweetCreateOrConnectWithoutRepliedTweetInput
    connect?: TweetWhereUniqueInput
  }

  export type TweetCreateNestedOneWithoutReplyToTweetInput = {
    create?: XOR<TweetCreateWithoutReplyToTweetInput, TweetUncheckedCreateWithoutReplyToTweetInput>
    connectOrCreate?: TweetCreateOrConnectWithoutReplyToTweetInput
    connect?: TweetWhereUniqueInput
  }

  export type HashTagCreateNestedManyWithoutIsIntweetsInput = {
    create?: XOR<Enumerable<HashTagCreateWithoutIsIntweetsInput>, Enumerable<HashTagUncheckedCreateWithoutIsIntweetsInput>>
    connectOrCreate?: Enumerable<HashTagCreateOrConnectWithoutIsIntweetsInput>
    connect?: Enumerable<HashTagWhereUniqueInput>
  }

  export type TweetUncheckedCreateNestedOneWithoutReplyToTweetInput = {
    create?: XOR<TweetCreateWithoutReplyToTweetInput, TweetUncheckedCreateWithoutReplyToTweetInput>
    connectOrCreate?: TweetCreateOrConnectWithoutReplyToTweetInput
    connect?: TweetWhereUniqueInput
  }

  export type HashTagUncheckedCreateNestedManyWithoutIsIntweetsInput = {
    create?: XOR<Enumerable<HashTagCreateWithoutIsIntweetsInput>, Enumerable<HashTagUncheckedCreateWithoutIsIntweetsInput>>
    connectOrCreate?: Enumerable<HashTagCreateOrConnectWithoutIsIntweetsInput>
    connect?: Enumerable<HashTagWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutTweetsNestedInput = {
    create?: XOR<UserCreateWithoutTweetsInput, UserUncheckedCreateWithoutTweetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTweetsInput
    upsert?: UserUpsertWithoutTweetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTweetsInput, UserUncheckedUpdateWithoutTweetsInput>
  }

  export type TweetUpdateOneWithoutRepliedTweetNestedInput = {
    create?: XOR<TweetCreateWithoutRepliedTweetInput, TweetUncheckedCreateWithoutRepliedTweetInput>
    connectOrCreate?: TweetCreateOrConnectWithoutRepliedTweetInput
    upsert?: TweetUpsertWithoutRepliedTweetInput
    disconnect?: boolean
    delete?: boolean
    connect?: TweetWhereUniqueInput
    update?: XOR<TweetUpdateWithoutRepliedTweetInput, TweetUncheckedUpdateWithoutRepliedTweetInput>
  }

  export type TweetUpdateOneWithoutReplyToTweetNestedInput = {
    create?: XOR<TweetCreateWithoutReplyToTweetInput, TweetUncheckedCreateWithoutReplyToTweetInput>
    connectOrCreate?: TweetCreateOrConnectWithoutReplyToTweetInput
    upsert?: TweetUpsertWithoutReplyToTweetInput
    disconnect?: boolean
    delete?: boolean
    connect?: TweetWhereUniqueInput
    update?: XOR<TweetUpdateWithoutReplyToTweetInput, TweetUncheckedUpdateWithoutReplyToTweetInput>
  }

  export type HashTagUpdateManyWithoutIsIntweetsNestedInput = {
    create?: XOR<Enumerable<HashTagCreateWithoutIsIntweetsInput>, Enumerable<HashTagUncheckedCreateWithoutIsIntweetsInput>>
    connectOrCreate?: Enumerable<HashTagCreateOrConnectWithoutIsIntweetsInput>
    upsert?: Enumerable<HashTagUpsertWithWhereUniqueWithoutIsIntweetsInput>
    set?: Enumerable<HashTagWhereUniqueInput>
    disconnect?: Enumerable<HashTagWhereUniqueInput>
    delete?: Enumerable<HashTagWhereUniqueInput>
    connect?: Enumerable<HashTagWhereUniqueInput>
    update?: Enumerable<HashTagUpdateWithWhereUniqueWithoutIsIntweetsInput>
    updateMany?: Enumerable<HashTagUpdateManyWithWhereWithoutIsIntweetsInput>
    deleteMany?: Enumerable<HashTagScalarWhereInput>
  }

  export type TweetUncheckedUpdateOneWithoutReplyToTweetNestedInput = {
    create?: XOR<TweetCreateWithoutReplyToTweetInput, TweetUncheckedCreateWithoutReplyToTweetInput>
    connectOrCreate?: TweetCreateOrConnectWithoutReplyToTweetInput
    upsert?: TweetUpsertWithoutReplyToTweetInput
    disconnect?: boolean
    delete?: boolean
    connect?: TweetWhereUniqueInput
    update?: XOR<TweetUpdateWithoutReplyToTweetInput, TweetUncheckedUpdateWithoutReplyToTweetInput>
  }

  export type HashTagUncheckedUpdateManyWithoutIsIntweetsNestedInput = {
    create?: XOR<Enumerable<HashTagCreateWithoutIsIntweetsInput>, Enumerable<HashTagUncheckedCreateWithoutIsIntweetsInput>>
    connectOrCreate?: Enumerable<HashTagCreateOrConnectWithoutIsIntweetsInput>
    upsert?: Enumerable<HashTagUpsertWithWhereUniqueWithoutIsIntweetsInput>
    set?: Enumerable<HashTagWhereUniqueInput>
    disconnect?: Enumerable<HashTagWhereUniqueInput>
    delete?: Enumerable<HashTagWhereUniqueInput>
    connect?: Enumerable<HashTagWhereUniqueInput>
    update?: Enumerable<HashTagUpdateWithWhereUniqueWithoutIsIntweetsInput>
    updateMany?: Enumerable<HashTagUpdateManyWithWhereWithoutIsIntweetsInput>
    deleteMany?: Enumerable<HashTagScalarWhereInput>
  }

  export type TweetCreateNestedManyWithoutHashTagsInput = {
    create?: XOR<Enumerable<TweetCreateWithoutHashTagsInput>, Enumerable<TweetUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<TweetCreateOrConnectWithoutHashTagsInput>
    connect?: Enumerable<TweetWhereUniqueInput>
  }

  export type TweetUncheckedCreateNestedManyWithoutHashTagsInput = {
    create?: XOR<Enumerable<TweetCreateWithoutHashTagsInput>, Enumerable<TweetUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<TweetCreateOrConnectWithoutHashTagsInput>
    connect?: Enumerable<TweetWhereUniqueInput>
  }

  export type TweetUpdateManyWithoutHashTagsNestedInput = {
    create?: XOR<Enumerable<TweetCreateWithoutHashTagsInput>, Enumerable<TweetUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<TweetCreateOrConnectWithoutHashTagsInput>
    upsert?: Enumerable<TweetUpsertWithWhereUniqueWithoutHashTagsInput>
    set?: Enumerable<TweetWhereUniqueInput>
    disconnect?: Enumerable<TweetWhereUniqueInput>
    delete?: Enumerable<TweetWhereUniqueInput>
    connect?: Enumerable<TweetWhereUniqueInput>
    update?: Enumerable<TweetUpdateWithWhereUniqueWithoutHashTagsInput>
    updateMany?: Enumerable<TweetUpdateManyWithWhereWithoutHashTagsInput>
    deleteMany?: Enumerable<TweetScalarWhereInput>
  }

  export type TweetUncheckedUpdateManyWithoutHashTagsNestedInput = {
    create?: XOR<Enumerable<TweetCreateWithoutHashTagsInput>, Enumerable<TweetUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<TweetCreateOrConnectWithoutHashTagsInput>
    upsert?: Enumerable<TweetUpsertWithWhereUniqueWithoutHashTagsInput>
    set?: Enumerable<TweetWhereUniqueInput>
    disconnect?: Enumerable<TweetWhereUniqueInput>
    delete?: Enumerable<TweetWhereUniqueInput>
    connect?: Enumerable<TweetWhereUniqueInput>
    update?: Enumerable<TweetUpdateWithWhereUniqueWithoutHashTagsInput>
    updateMany?: Enumerable<TweetUpdateManyWithWhereWithoutHashTagsInput>
    deleteMany?: Enumerable<TweetScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutDirectMessagesFromInput = {
    create?: XOR<UserCreateWithoutDirectMessagesFromInput, UserUncheckedCreateWithoutDirectMessagesFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectMessagesFromInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDirectMessagesToInput = {
    create?: XOR<UserCreateWithoutDirectMessagesToInput, UserUncheckedCreateWithoutDirectMessagesToInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectMessagesToInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDirectMessagesFromNestedInput = {
    create?: XOR<UserCreateWithoutDirectMessagesFromInput, UserUncheckedCreateWithoutDirectMessagesFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectMessagesFromInput
    upsert?: UserUpsertWithoutDirectMessagesFromInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDirectMessagesFromInput, UserUncheckedUpdateWithoutDirectMessagesFromInput>
  }

  export type UserUpdateOneRequiredWithoutDirectMessagesToNestedInput = {
    create?: XOR<UserCreateWithoutDirectMessagesToInput, UserUncheckedCreateWithoutDirectMessagesToInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectMessagesToInput
    upsert?: UserUpsertWithoutDirectMessagesToInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDirectMessagesToInput, UserUncheckedUpdateWithoutDirectMessagesToInput>
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

  export type MenuCreateWithoutCategoryInput = {
    name: string
    image: string
    price: number
    orderItems?: OrderItemCreateNestedManyWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    image: string
    price: number
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCreateOrConnectWithoutCategoryInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutCategoryInput, MenuUncheckedCreateWithoutCategoryInput>
  }

  export type MenuCreateManyCategoryInputEnvelope = {
    data: Enumerable<MenuCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type MenuUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutCategoryInput, MenuUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuCreateWithoutCategoryInput, MenuUncheckedCreateWithoutCategoryInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutCategoryInput, MenuUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuScalarWhereInput = {
    AND?: Enumerable<MenuScalarWhereInput>
    OR?: Enumerable<MenuScalarWhereInput>
    NOT?: Enumerable<MenuScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    price?: FloatFilter | number
    categoryId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CategoryCreateWithoutMenuInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutMenuInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutMenuInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMenuInput, CategoryUncheckedCreateWithoutMenuInput>
  }

  export type OrderItemCreateWithoutMenuInput = {
    order?: OrderCreateNestedOneWithoutItemsInput
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUncheckedCreateWithoutMenuInput = {
    id?: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutMenuInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenuInput, OrderItemUncheckedCreateWithoutMenuInput>
  }

  export type OrderItemCreateManyMenuInputEnvelope = {
    data: Enumerable<OrderItemCreateManyMenuInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutMenuInput = {
    update: XOR<CategoryUpdateWithoutMenuInput, CategoryUncheckedUpdateWithoutMenuInput>
    create: XOR<CategoryCreateWithoutMenuInput, CategoryUncheckedCreateWithoutMenuInput>
  }

  export type CategoryUpdateWithoutMenuInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMenuInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMenuInput, OrderItemUncheckedUpdateWithoutMenuInput>
    create: XOR<OrderItemCreateWithoutMenuInput, OrderItemUncheckedCreateWithoutMenuInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMenuInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMenuInput, OrderItemUncheckedUpdateWithoutMenuInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMenuInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderItemsInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: Enumerable<OrderItemScalarWhereInput>
    OR?: Enumerable<OrderItemScalarWhereInput>
    NOT?: Enumerable<OrderItemScalarWhereInput>
    id?: IntFilter | number
    menuId?: IntFilter | number
    orderId?: IntNullableFilter | number | null
    quantity?: IntFilter | number
    totalPrice?: FloatFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type OrderItemCreateWithoutOrderInput = {
    menu: MenuCreateNestedOneWithoutOrderItemsInput
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    menuId: number
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: Enumerable<OrderItemCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type MenuCreateWithoutOrderItemsInput = {
    name: string
    image: string
    price: number
    category?: CategoryCreateNestedOneWithoutMenuInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCreateOrConnectWithoutOrderItemsInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderCreateWithoutItemsInput = {
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: number
    status?: string
    tableId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type MenuUpsertWithoutOrderItemsInput = {
    update: XOR<MenuUpdateWithoutOrderItemsInput, MenuUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type MenuUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateWithoutCategoryInput = {
    questionText: string
    choices?: ChoiceCreateNestedManyWithoutQuizInput
    correctChoice: ChoiceCreateNestedOneWithoutCorrectQuizzesInput
    rounds?: RoundCreateNestedManyWithoutQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUncheckedCreateWithoutCategoryInput = {
    id?: number
    questionText: string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuizInput
    correctChoiceId: number
    rounds?: RoundUncheckedCreateNestedManyWithoutQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateOrConnectWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizCreateManyCategoryInputEnvelope = {
    data: Enumerable<QuizCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
  }

  export type QuizUpdateManyWithWhereWithoutCategoryInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutQuizzesInput>
  }

  export type QuizScalarWhereInput = {
    AND?: Enumerable<QuizScalarWhereInput>
    OR?: Enumerable<QuizScalarWhereInput>
    NOT?: Enumerable<QuizScalarWhereInput>
    id?: IntFilter | number
    questionText?: StringFilter | string
    quizCategoryId?: IntFilter | number
    correctChoiceId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type QuizCreateWithoutChoicesInput = {
    questionText: string
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    correctChoice: ChoiceCreateNestedOneWithoutCorrectQuizzesInput
    rounds?: RoundCreateNestedManyWithoutQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUncheckedCreateWithoutChoicesInput = {
    id?: number
    questionText: string
    quizCategoryId: number
    correctChoiceId: number
    rounds?: RoundUncheckedCreateNestedManyWithoutQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateOrConnectWithoutChoicesInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutChoicesInput, QuizUncheckedCreateWithoutChoicesInput>
  }

  export type QuizCreateWithoutCorrectChoiceInput = {
    questionText: string
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    choices?: ChoiceCreateNestedManyWithoutQuizInput
    rounds?: RoundCreateNestedManyWithoutQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUncheckedCreateWithoutCorrectChoiceInput = {
    id?: number
    questionText: string
    quizCategoryId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuizInput
    rounds?: RoundUncheckedCreateNestedManyWithoutQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateOrConnectWithoutCorrectChoiceInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCorrectChoiceInput, QuizUncheckedCreateWithoutCorrectChoiceInput>
  }

  export type QuizCreateManyCorrectChoiceInputEnvelope = {
    data: Enumerable<QuizCreateManyCorrectChoiceInput>
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutSelectedChoicesInput = {
    quizzes?: QuizCreateNestedManyWithoutRoundsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUncheckedCreateWithoutSelectedChoicesInput = {
    id?: number
    quizzes?: QuizUncheckedCreateNestedManyWithoutRoundsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundCreateOrConnectWithoutSelectedChoicesInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutSelectedChoicesInput, RoundUncheckedCreateWithoutSelectedChoicesInput>
  }

  export type QuizUpsertWithoutChoicesInput = {
    update: XOR<QuizUpdateWithoutChoicesInput, QuizUncheckedUpdateWithoutChoicesInput>
    create: XOR<QuizCreateWithoutChoicesInput, QuizUncheckedCreateWithoutChoicesInput>
  }

  export type QuizUpdateWithoutChoicesInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    correctChoice?: ChoiceUpdateOneRequiredWithoutCorrectQuizzesNestedInput
    rounds?: RoundUpdateManyWithoutQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    quizCategoryId?: IntFieldUpdateOperationsInput | number
    correctChoiceId?: IntFieldUpdateOperationsInput | number
    rounds?: RoundUncheckedUpdateManyWithoutQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpsertWithWhereUniqueWithoutCorrectChoiceInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCorrectChoiceInput, QuizUncheckedUpdateWithoutCorrectChoiceInput>
    create: XOR<QuizCreateWithoutCorrectChoiceInput, QuizUncheckedCreateWithoutCorrectChoiceInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCorrectChoiceInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCorrectChoiceInput, QuizUncheckedUpdateWithoutCorrectChoiceInput>
  }

  export type QuizUpdateManyWithWhereWithoutCorrectChoiceInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCorrectQuizzesInput>
  }

  export type RoundUpsertWithWhereUniqueWithoutSelectedChoicesInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutSelectedChoicesInput, RoundUncheckedUpdateWithoutSelectedChoicesInput>
    create: XOR<RoundCreateWithoutSelectedChoicesInput, RoundUncheckedCreateWithoutSelectedChoicesInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutSelectedChoicesInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutSelectedChoicesInput, RoundUncheckedUpdateWithoutSelectedChoicesInput>
  }

  export type RoundUpdateManyWithWhereWithoutSelectedChoicesInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutRoundsInput>
  }

  export type RoundScalarWhereInput = {
    AND?: Enumerable<RoundScalarWhereInput>
    OR?: Enumerable<RoundScalarWhereInput>
    NOT?: Enumerable<RoundScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type QuizCategoryCreateWithoutQuizzesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCategoryUncheckedCreateWithoutQuizzesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCategoryCreateOrConnectWithoutQuizzesInput = {
    where: QuizCategoryWhereUniqueInput
    create: XOR<QuizCategoryCreateWithoutQuizzesInput, QuizCategoryUncheckedCreateWithoutQuizzesInput>
  }

  export type ChoiceCreateWithoutQuizInput = {
    answerText: string
    correctQuizzes?: QuizCreateNestedManyWithoutCorrectChoiceInput
    rounds?: RoundCreateNestedManyWithoutSelectedChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUncheckedCreateWithoutQuizInput = {
    id?: number
    answerText: string
    correctQuizzes?: QuizUncheckedCreateNestedManyWithoutCorrectChoiceInput
    rounds?: RoundUncheckedCreateNestedManyWithoutSelectedChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutQuizInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuizInput, ChoiceUncheckedCreateWithoutQuizInput>
  }

  export type ChoiceCreateManyQuizInputEnvelope = {
    data: Enumerable<ChoiceCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type ChoiceCreateWithoutCorrectQuizzesInput = {
    answerText: string
    quiz?: QuizCreateNestedOneWithoutChoicesInput
    rounds?: RoundCreateNestedManyWithoutSelectedChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUncheckedCreateWithoutCorrectQuizzesInput = {
    id?: number
    answerText: string
    quizId?: number | null
    rounds?: RoundUncheckedCreateNestedManyWithoutSelectedChoicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutCorrectQuizzesInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutCorrectQuizzesInput, ChoiceUncheckedCreateWithoutCorrectQuizzesInput>
  }

  export type RoundCreateWithoutQuizzesInput = {
    selectedChoices?: ChoiceCreateNestedManyWithoutRoundsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUncheckedCreateWithoutQuizzesInput = {
    id?: number
    selectedChoices?: ChoiceUncheckedCreateNestedManyWithoutRoundsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundCreateOrConnectWithoutQuizzesInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutQuizzesInput, RoundUncheckedCreateWithoutQuizzesInput>
  }

  export type QuizCategoryUpsertWithoutQuizzesInput = {
    update: XOR<QuizCategoryUpdateWithoutQuizzesInput, QuizCategoryUncheckedUpdateWithoutQuizzesInput>
    create: XOR<QuizCategoryCreateWithoutQuizzesInput, QuizCategoryUncheckedCreateWithoutQuizzesInput>
  }

  export type QuizCategoryUpdateWithoutQuizzesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCategoryUncheckedUpdateWithoutQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUpsertWithWhereUniqueWithoutQuizInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutQuizInput, ChoiceUncheckedUpdateWithoutQuizInput>
    create: XOR<ChoiceCreateWithoutQuizInput, ChoiceUncheckedCreateWithoutQuizInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutQuizInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutQuizInput, ChoiceUncheckedUpdateWithoutQuizInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutQuizInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutChoicesInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: Enumerable<ChoiceScalarWhereInput>
    OR?: Enumerable<ChoiceScalarWhereInput>
    NOT?: Enumerable<ChoiceScalarWhereInput>
    id?: IntFilter | number
    answerText?: StringFilter | string
    quizId?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ChoiceUpsertWithoutCorrectQuizzesInput = {
    update: XOR<ChoiceUpdateWithoutCorrectQuizzesInput, ChoiceUncheckedUpdateWithoutCorrectQuizzesInput>
    create: XOR<ChoiceCreateWithoutCorrectQuizzesInput, ChoiceUncheckedCreateWithoutCorrectQuizzesInput>
  }

  export type ChoiceUpdateWithoutCorrectQuizzesInput = {
    answerText?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneWithoutChoicesNestedInput
    rounds?: RoundUpdateManyWithoutSelectedChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateWithoutCorrectQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerText?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    rounds?: RoundUncheckedUpdateManyWithoutSelectedChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUpsertWithWhereUniqueWithoutQuizzesInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutQuizzesInput, RoundUncheckedUpdateWithoutQuizzesInput>
    create: XOR<RoundCreateWithoutQuizzesInput, RoundUncheckedCreateWithoutQuizzesInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutQuizzesInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutQuizzesInput, RoundUncheckedUpdateWithoutQuizzesInput>
  }

  export type RoundUpdateManyWithWhereWithoutQuizzesInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutRoundsInput>
  }

  export type QuizCreateWithoutRoundsInput = {
    questionText: string
    category: QuizCategoryCreateNestedOneWithoutQuizzesInput
    choices?: ChoiceCreateNestedManyWithoutQuizInput
    correctChoice: ChoiceCreateNestedOneWithoutCorrectQuizzesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUncheckedCreateWithoutRoundsInput = {
    id?: number
    questionText: string
    quizCategoryId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuizInput
    correctChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateOrConnectWithoutRoundsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutRoundsInput, QuizUncheckedCreateWithoutRoundsInput>
  }

  export type ChoiceCreateWithoutRoundsInput = {
    answerText: string
    quiz?: QuizCreateNestedOneWithoutChoicesInput
    correctQuizzes?: QuizCreateNestedManyWithoutCorrectChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUncheckedCreateWithoutRoundsInput = {
    id?: number
    answerText: string
    quizId?: number | null
    correctQuizzes?: QuizUncheckedCreateNestedManyWithoutCorrectChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutRoundsInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutRoundsInput, ChoiceUncheckedCreateWithoutRoundsInput>
  }

  export type QuizUpsertWithWhereUniqueWithoutRoundsInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutRoundsInput, QuizUncheckedUpdateWithoutRoundsInput>
    create: XOR<QuizCreateWithoutRoundsInput, QuizUncheckedCreateWithoutRoundsInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutRoundsInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutRoundsInput, QuizUncheckedUpdateWithoutRoundsInput>
  }

  export type QuizUpdateManyWithWhereWithoutRoundsInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutQuizzesInput>
  }

  export type ChoiceUpsertWithWhereUniqueWithoutRoundsInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutRoundsInput, ChoiceUncheckedUpdateWithoutRoundsInput>
    create: XOR<ChoiceCreateWithoutRoundsInput, ChoiceUncheckedCreateWithoutRoundsInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutRoundsInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutRoundsInput, ChoiceUncheckedUpdateWithoutRoundsInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutRoundsInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutSelectedChoicesInput>
  }

  export type UserRelationCreateWithoutFollowingUserInput = {
    followedUser: UserCreateNestedOneWithoutFollowedUserRelationsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUncheckedCreateWithoutFollowingUserInput = {
    id?: number
    followedUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationCreateOrConnectWithoutFollowingUserInput = {
    where: UserRelationWhereUniqueInput
    create: XOR<UserRelationCreateWithoutFollowingUserInput, UserRelationUncheckedCreateWithoutFollowingUserInput>
  }

  export type UserRelationCreateManyFollowingUserInputEnvelope = {
    data: Enumerable<UserRelationCreateManyFollowingUserInput>
    skipDuplicates?: boolean
  }

  export type UserRelationCreateWithoutFollowedUserInput = {
    followingUser: UserCreateNestedOneWithoutFollowingUserRelationsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUncheckedCreateWithoutFollowedUserInput = {
    id?: number
    followingUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationCreateOrConnectWithoutFollowedUserInput = {
    where: UserRelationWhereUniqueInput
    create: XOR<UserRelationCreateWithoutFollowedUserInput, UserRelationUncheckedCreateWithoutFollowedUserInput>
  }

  export type UserRelationCreateManyFollowedUserInputEnvelope = {
    data: Enumerable<UserRelationCreateManyFollowedUserInput>
    skipDuplicates?: boolean
  }

  export type TweetCreateWithoutTweetingUserInput = {
    tweetText: string
    replyToTweet?: TweetCreateNestedOneWithoutRepliedTweetInput
    repliedTweet?: TweetCreateNestedOneWithoutReplyToTweetInput
    hashTags?: HashTagCreateNestedManyWithoutIsIntweetsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetUncheckedCreateWithoutTweetingUserInput = {
    id?: number
    tweetText: string
    replyToTweetId?: number | null
    repliedTweet?: TweetUncheckedCreateNestedOneWithoutReplyToTweetInput
    hashTags?: HashTagUncheckedCreateNestedManyWithoutIsIntweetsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetCreateOrConnectWithoutTweetingUserInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutTweetingUserInput, TweetUncheckedCreateWithoutTweetingUserInput>
  }

  export type TweetCreateManyTweetingUserInputEnvelope = {
    data: Enumerable<TweetCreateManyTweetingUserInput>
    skipDuplicates?: boolean
  }

  export type DirectMessageCreateWithoutFromUserInput = {
    dmText: string
    toUser: UserCreateNestedOneWithoutDirectMessagesToInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUncheckedCreateWithoutFromUserInput = {
    id?: number
    dmText: string
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateOrConnectWithoutFromUserInput = {
    where: DirectMessageWhereUniqueInput
    create: XOR<DirectMessageCreateWithoutFromUserInput, DirectMessageUncheckedCreateWithoutFromUserInput>
  }

  export type DirectMessageCreateManyFromUserInputEnvelope = {
    data: Enumerable<DirectMessageCreateManyFromUserInput>
    skipDuplicates?: boolean
  }

  export type DirectMessageCreateWithoutToUserInput = {
    dmText: string
    fromUser: UserCreateNestedOneWithoutDirectMessagesFromInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUncheckedCreateWithoutToUserInput = {
    id?: number
    dmText: string
    fromUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateOrConnectWithoutToUserInput = {
    where: DirectMessageWhereUniqueInput
    create: XOR<DirectMessageCreateWithoutToUserInput, DirectMessageUncheckedCreateWithoutToUserInput>
  }

  export type DirectMessageCreateManyToUserInputEnvelope = {
    data: Enumerable<DirectMessageCreateManyToUserInput>
    skipDuplicates?: boolean
  }

  export type UserRelationUpsertWithWhereUniqueWithoutFollowingUserInput = {
    where: UserRelationWhereUniqueInput
    update: XOR<UserRelationUpdateWithoutFollowingUserInput, UserRelationUncheckedUpdateWithoutFollowingUserInput>
    create: XOR<UserRelationCreateWithoutFollowingUserInput, UserRelationUncheckedCreateWithoutFollowingUserInput>
  }

  export type UserRelationUpdateWithWhereUniqueWithoutFollowingUserInput = {
    where: UserRelationWhereUniqueInput
    data: XOR<UserRelationUpdateWithoutFollowingUserInput, UserRelationUncheckedUpdateWithoutFollowingUserInput>
  }

  export type UserRelationUpdateManyWithWhereWithoutFollowingUserInput = {
    where: UserRelationScalarWhereInput
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyWithoutFollowingUserRelationsInput>
  }

  export type UserRelationScalarWhereInput = {
    AND?: Enumerable<UserRelationScalarWhereInput>
    OR?: Enumerable<UserRelationScalarWhereInput>
    NOT?: Enumerable<UserRelationScalarWhereInput>
    id?: IntFilter | number
    followingUserId?: IntFilter | number
    followedUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserRelationUpsertWithWhereUniqueWithoutFollowedUserInput = {
    where: UserRelationWhereUniqueInput
    update: XOR<UserRelationUpdateWithoutFollowedUserInput, UserRelationUncheckedUpdateWithoutFollowedUserInput>
    create: XOR<UserRelationCreateWithoutFollowedUserInput, UserRelationUncheckedCreateWithoutFollowedUserInput>
  }

  export type UserRelationUpdateWithWhereUniqueWithoutFollowedUserInput = {
    where: UserRelationWhereUniqueInput
    data: XOR<UserRelationUpdateWithoutFollowedUserInput, UserRelationUncheckedUpdateWithoutFollowedUserInput>
  }

  export type UserRelationUpdateManyWithWhereWithoutFollowedUserInput = {
    where: UserRelationScalarWhereInput
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyWithoutFollowedUserRelationsInput>
  }

  export type TweetUpsertWithWhereUniqueWithoutTweetingUserInput = {
    where: TweetWhereUniqueInput
    update: XOR<TweetUpdateWithoutTweetingUserInput, TweetUncheckedUpdateWithoutTweetingUserInput>
    create: XOR<TweetCreateWithoutTweetingUserInput, TweetUncheckedCreateWithoutTweetingUserInput>
  }

  export type TweetUpdateWithWhereUniqueWithoutTweetingUserInput = {
    where: TweetWhereUniqueInput
    data: XOR<TweetUpdateWithoutTweetingUserInput, TweetUncheckedUpdateWithoutTweetingUserInput>
  }

  export type TweetUpdateManyWithWhereWithoutTweetingUserInput = {
    where: TweetScalarWhereInput
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyWithoutTweetsInput>
  }

  export type TweetScalarWhereInput = {
    AND?: Enumerable<TweetScalarWhereInput>
    OR?: Enumerable<TweetScalarWhereInput>
    NOT?: Enumerable<TweetScalarWhereInput>
    id?: IntFilter | number
    tweetText?: StringFilter | string
    replyToTweetId?: IntNullableFilter | number | null
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMessageUpsertWithWhereUniqueWithoutFromUserInput = {
    where: DirectMessageWhereUniqueInput
    update: XOR<DirectMessageUpdateWithoutFromUserInput, DirectMessageUncheckedUpdateWithoutFromUserInput>
    create: XOR<DirectMessageCreateWithoutFromUserInput, DirectMessageUncheckedCreateWithoutFromUserInput>
  }

  export type DirectMessageUpdateWithWhereUniqueWithoutFromUserInput = {
    where: DirectMessageWhereUniqueInput
    data: XOR<DirectMessageUpdateWithoutFromUserInput, DirectMessageUncheckedUpdateWithoutFromUserInput>
  }

  export type DirectMessageUpdateManyWithWhereWithoutFromUserInput = {
    where: DirectMessageScalarWhereInput
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyWithoutDirectMessagesFromInput>
  }

  export type DirectMessageScalarWhereInput = {
    AND?: Enumerable<DirectMessageScalarWhereInput>
    OR?: Enumerable<DirectMessageScalarWhereInput>
    NOT?: Enumerable<DirectMessageScalarWhereInput>
    id?: IntFilter | number
    dmText?: StringFilter | string
    fromUserId?: IntFilter | number
    toUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMessageUpsertWithWhereUniqueWithoutToUserInput = {
    where: DirectMessageWhereUniqueInput
    update: XOR<DirectMessageUpdateWithoutToUserInput, DirectMessageUncheckedUpdateWithoutToUserInput>
    create: XOR<DirectMessageCreateWithoutToUserInput, DirectMessageUncheckedCreateWithoutToUserInput>
  }

  export type DirectMessageUpdateWithWhereUniqueWithoutToUserInput = {
    where: DirectMessageWhereUniqueInput
    data: XOR<DirectMessageUpdateWithoutToUserInput, DirectMessageUncheckedUpdateWithoutToUserInput>
  }

  export type DirectMessageUpdateManyWithWhereWithoutToUserInput = {
    where: DirectMessageScalarWhereInput
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyWithoutDirectMessagesToInput>
  }

  export type UserCreateWithoutFollowingUserRelationsInput = {
    name: string
    imageUrl: string
    bio: string
    followedUserRelations?: UserRelationCreateNestedManyWithoutFollowedUserInput
    tweets?: TweetCreateNestedManyWithoutTweetingUserInput
    directMessagesFrom?: DirectMessageCreateNestedManyWithoutFromUserInput
    directMessagesTo?: DirectMessageCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFollowingUserRelationsInput = {
    id?: number
    name: string
    imageUrl: string
    bio: string
    followedUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowedUserInput
    tweets?: TweetUncheckedCreateNestedManyWithoutTweetingUserInput
    directMessagesFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromUserInput
    directMessagesTo?: DirectMessageUncheckedCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFollowingUserRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingUserRelationsInput, UserUncheckedCreateWithoutFollowingUserRelationsInput>
  }

  export type UserCreateWithoutFollowedUserRelationsInput = {
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationCreateNestedManyWithoutFollowingUserInput
    tweets?: TweetCreateNestedManyWithoutTweetingUserInput
    directMessagesFrom?: DirectMessageCreateNestedManyWithoutFromUserInput
    directMessagesTo?: DirectMessageCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutFollowedUserRelationsInput = {
    id?: number
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowingUserInput
    tweets?: TweetUncheckedCreateNestedManyWithoutTweetingUserInput
    directMessagesFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromUserInput
    directMessagesTo?: DirectMessageUncheckedCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutFollowedUserRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedUserRelationsInput, UserUncheckedCreateWithoutFollowedUserRelationsInput>
  }

  export type UserUpsertWithoutFollowingUserRelationsInput = {
    update: XOR<UserUpdateWithoutFollowingUserRelationsInput, UserUncheckedUpdateWithoutFollowingUserRelationsInput>
    create: XOR<UserCreateWithoutFollowingUserRelationsInput, UserUncheckedCreateWithoutFollowingUserRelationsInput>
  }

  export type UserUpdateWithoutFollowingUserRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followedUserRelations?: UserRelationUpdateManyWithoutFollowedUserNestedInput
    tweets?: TweetUpdateManyWithoutTweetingUserNestedInput
    directMessagesFrom?: DirectMessageUpdateManyWithoutFromUserNestedInput
    directMessagesTo?: DirectMessageUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFollowingUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followedUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowedUserNestedInput
    tweets?: TweetUncheckedUpdateManyWithoutTweetingUserNestedInput
    directMessagesFrom?: DirectMessageUncheckedUpdateManyWithoutFromUserNestedInput
    directMessagesTo?: DirectMessageUncheckedUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutFollowedUserRelationsInput = {
    update: XOR<UserUpdateWithoutFollowedUserRelationsInput, UserUncheckedUpdateWithoutFollowedUserRelationsInput>
    create: XOR<UserCreateWithoutFollowedUserRelationsInput, UserUncheckedCreateWithoutFollowedUserRelationsInput>
  }

  export type UserUpdateWithoutFollowedUserRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUpdateManyWithoutFollowingUserNestedInput
    tweets?: TweetUpdateManyWithoutTweetingUserNestedInput
    directMessagesFrom?: DirectMessageUpdateManyWithoutFromUserNestedInput
    directMessagesTo?: DirectMessageUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutFollowedUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowingUserNestedInput
    tweets?: TweetUncheckedUpdateManyWithoutTweetingUserNestedInput
    directMessagesFrom?: DirectMessageUncheckedUpdateManyWithoutFromUserNestedInput
    directMessagesTo?: DirectMessageUncheckedUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTweetsInput = {
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationCreateNestedManyWithoutFollowingUserInput
    followedUserRelations?: UserRelationCreateNestedManyWithoutFollowedUserInput
    directMessagesFrom?: DirectMessageCreateNestedManyWithoutFromUserInput
    directMessagesTo?: DirectMessageCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTweetsInput = {
    id?: number
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowingUserInput
    followedUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowedUserInput
    directMessagesFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromUserInput
    directMessagesTo?: DirectMessageUncheckedCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTweetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTweetsInput, UserUncheckedCreateWithoutTweetsInput>
  }

  export type TweetCreateWithoutRepliedTweetInput = {
    tweetText: string
    tweetingUser: UserCreateNestedOneWithoutTweetsInput
    replyToTweet?: TweetCreateNestedOneWithoutRepliedTweetInput
    hashTags?: HashTagCreateNestedManyWithoutIsIntweetsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetUncheckedCreateWithoutRepliedTweetInput = {
    id?: number
    tweetText: string
    replyToTweetId?: number | null
    userId: number
    hashTags?: HashTagUncheckedCreateNestedManyWithoutIsIntweetsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetCreateOrConnectWithoutRepliedTweetInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutRepliedTweetInput, TweetUncheckedCreateWithoutRepliedTweetInput>
  }

  export type TweetCreateWithoutReplyToTweetInput = {
    tweetText: string
    tweetingUser: UserCreateNestedOneWithoutTweetsInput
    repliedTweet?: TweetCreateNestedOneWithoutReplyToTweetInput
    hashTags?: HashTagCreateNestedManyWithoutIsIntweetsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetUncheckedCreateWithoutReplyToTweetInput = {
    id?: number
    tweetText: string
    repliedTweet?: TweetUncheckedCreateNestedOneWithoutReplyToTweetInput
    userId: number
    hashTags?: HashTagUncheckedCreateNestedManyWithoutIsIntweetsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetCreateOrConnectWithoutReplyToTweetInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutReplyToTweetInput, TweetUncheckedCreateWithoutReplyToTweetInput>
  }

  export type HashTagCreateWithoutIsIntweetsInput = {
    hashTagText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashTagUncheckedCreateWithoutIsIntweetsInput = {
    id?: number
    hashTagText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashTagCreateOrConnectWithoutIsIntweetsInput = {
    where: HashTagWhereUniqueInput
    create: XOR<HashTagCreateWithoutIsIntweetsInput, HashTagUncheckedCreateWithoutIsIntweetsInput>
  }

  export type UserUpsertWithoutTweetsInput = {
    update: XOR<UserUpdateWithoutTweetsInput, UserUncheckedUpdateWithoutTweetsInput>
    create: XOR<UserCreateWithoutTweetsInput, UserUncheckedCreateWithoutTweetsInput>
  }

  export type UserUpdateWithoutTweetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUpdateManyWithoutFollowingUserNestedInput
    followedUserRelations?: UserRelationUpdateManyWithoutFollowedUserNestedInput
    directMessagesFrom?: DirectMessageUpdateManyWithoutFromUserNestedInput
    directMessagesTo?: DirectMessageUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTweetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowingUserNestedInput
    followedUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowedUserNestedInput
    directMessagesFrom?: DirectMessageUncheckedUpdateManyWithoutFromUserNestedInput
    directMessagesTo?: DirectMessageUncheckedUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUpsertWithoutRepliedTweetInput = {
    update: XOR<TweetUpdateWithoutRepliedTweetInput, TweetUncheckedUpdateWithoutRepliedTweetInput>
    create: XOR<TweetCreateWithoutRepliedTweetInput, TweetUncheckedCreateWithoutRepliedTweetInput>
  }

  export type TweetUpdateWithoutRepliedTweetInput = {
    tweetText?: StringFieldUpdateOperationsInput | string
    tweetingUser?: UserUpdateOneRequiredWithoutTweetsNestedInput
    replyToTweet?: TweetUpdateOneWithoutRepliedTweetNestedInput
    hashTags?: HashTagUpdateManyWithoutIsIntweetsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateWithoutRepliedTweetInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetText?: StringFieldUpdateOperationsInput | string
    replyToTweetId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
    hashTags?: HashTagUncheckedUpdateManyWithoutIsIntweetsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUpsertWithoutReplyToTweetInput = {
    update: XOR<TweetUpdateWithoutReplyToTweetInput, TweetUncheckedUpdateWithoutReplyToTweetInput>
    create: XOR<TweetCreateWithoutReplyToTweetInput, TweetUncheckedCreateWithoutReplyToTweetInput>
  }

  export type TweetUpdateWithoutReplyToTweetInput = {
    tweetText?: StringFieldUpdateOperationsInput | string
    tweetingUser?: UserUpdateOneRequiredWithoutTweetsNestedInput
    repliedTweet?: TweetUpdateOneWithoutReplyToTweetNestedInput
    hashTags?: HashTagUpdateManyWithoutIsIntweetsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateWithoutReplyToTweetInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetText?: StringFieldUpdateOperationsInput | string
    repliedTweet?: TweetUncheckedUpdateOneWithoutReplyToTweetNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    hashTags?: HashTagUncheckedUpdateManyWithoutIsIntweetsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUpsertWithWhereUniqueWithoutIsIntweetsInput = {
    where: HashTagWhereUniqueInput
    update: XOR<HashTagUpdateWithoutIsIntweetsInput, HashTagUncheckedUpdateWithoutIsIntweetsInput>
    create: XOR<HashTagCreateWithoutIsIntweetsInput, HashTagUncheckedCreateWithoutIsIntweetsInput>
  }

  export type HashTagUpdateWithWhereUniqueWithoutIsIntweetsInput = {
    where: HashTagWhereUniqueInput
    data: XOR<HashTagUpdateWithoutIsIntweetsInput, HashTagUncheckedUpdateWithoutIsIntweetsInput>
  }

  export type HashTagUpdateManyWithWhereWithoutIsIntweetsInput = {
    where: HashTagScalarWhereInput
    data: XOR<HashTagUpdateManyMutationInput, HashTagUncheckedUpdateManyWithoutHashTagsInput>
  }

  export type HashTagScalarWhereInput = {
    AND?: Enumerable<HashTagScalarWhereInput>
    OR?: Enumerable<HashTagScalarWhereInput>
    NOT?: Enumerable<HashTagScalarWhereInput>
    id?: IntFilter | number
    hashTagText?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TweetCreateWithoutHashTagsInput = {
    tweetText: string
    tweetingUser: UserCreateNestedOneWithoutTweetsInput
    replyToTweet?: TweetCreateNestedOneWithoutRepliedTweetInput
    repliedTweet?: TweetCreateNestedOneWithoutReplyToTweetInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetUncheckedCreateWithoutHashTagsInput = {
    id?: number
    tweetText: string
    replyToTweetId?: number | null
    repliedTweet?: TweetUncheckedCreateNestedOneWithoutReplyToTweetInput
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetCreateOrConnectWithoutHashTagsInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutHashTagsInput, TweetUncheckedCreateWithoutHashTagsInput>
  }

  export type TweetUpsertWithWhereUniqueWithoutHashTagsInput = {
    where: TweetWhereUniqueInput
    update: XOR<TweetUpdateWithoutHashTagsInput, TweetUncheckedUpdateWithoutHashTagsInput>
    create: XOR<TweetCreateWithoutHashTagsInput, TweetUncheckedCreateWithoutHashTagsInput>
  }

  export type TweetUpdateWithWhereUniqueWithoutHashTagsInput = {
    where: TweetWhereUniqueInput
    data: XOR<TweetUpdateWithoutHashTagsInput, TweetUncheckedUpdateWithoutHashTagsInput>
  }

  export type TweetUpdateManyWithWhereWithoutHashTagsInput = {
    where: TweetScalarWhereInput
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyWithoutIsIntweetsInput>
  }

  export type UserCreateWithoutDirectMessagesFromInput = {
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationCreateNestedManyWithoutFollowingUserInput
    followedUserRelations?: UserRelationCreateNestedManyWithoutFollowedUserInput
    tweets?: TweetCreateNestedManyWithoutTweetingUserInput
    directMessagesTo?: DirectMessageCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDirectMessagesFromInput = {
    id?: number
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowingUserInput
    followedUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowedUserInput
    tweets?: TweetUncheckedCreateNestedManyWithoutTweetingUserInput
    directMessagesTo?: DirectMessageUncheckedCreateNestedManyWithoutToUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDirectMessagesFromInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDirectMessagesFromInput, UserUncheckedCreateWithoutDirectMessagesFromInput>
  }

  export type UserCreateWithoutDirectMessagesToInput = {
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationCreateNestedManyWithoutFollowingUserInput
    followedUserRelations?: UserRelationCreateNestedManyWithoutFollowedUserInput
    tweets?: TweetCreateNestedManyWithoutTweetingUserInput
    directMessagesFrom?: DirectMessageCreateNestedManyWithoutFromUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDirectMessagesToInput = {
    id?: number
    name: string
    imageUrl: string
    bio: string
    followingUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowingUserInput
    followedUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFollowedUserInput
    tweets?: TweetUncheckedCreateNestedManyWithoutTweetingUserInput
    directMessagesFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDirectMessagesToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDirectMessagesToInput, UserUncheckedCreateWithoutDirectMessagesToInput>
  }

  export type UserUpsertWithoutDirectMessagesFromInput = {
    update: XOR<UserUpdateWithoutDirectMessagesFromInput, UserUncheckedUpdateWithoutDirectMessagesFromInput>
    create: XOR<UserCreateWithoutDirectMessagesFromInput, UserUncheckedCreateWithoutDirectMessagesFromInput>
  }

  export type UserUpdateWithoutDirectMessagesFromInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUpdateManyWithoutFollowingUserNestedInput
    followedUserRelations?: UserRelationUpdateManyWithoutFollowedUserNestedInput
    tweets?: TweetUpdateManyWithoutTweetingUserNestedInput
    directMessagesTo?: DirectMessageUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDirectMessagesFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowingUserNestedInput
    followedUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowedUserNestedInput
    tweets?: TweetUncheckedUpdateManyWithoutTweetingUserNestedInput
    directMessagesTo?: DirectMessageUncheckedUpdateManyWithoutToUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutDirectMessagesToInput = {
    update: XOR<UserUpdateWithoutDirectMessagesToInput, UserUncheckedUpdateWithoutDirectMessagesToInput>
    create: XOR<UserCreateWithoutDirectMessagesToInput, UserUncheckedCreateWithoutDirectMessagesToInput>
  }

  export type UserUpdateWithoutDirectMessagesToInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUpdateManyWithoutFollowingUserNestedInput
    followedUserRelations?: UserRelationUpdateManyWithoutFollowedUserNestedInput
    tweets?: TweetUpdateManyWithoutTweetingUserNestedInput
    directMessagesFrom?: DirectMessageUpdateManyWithoutFromUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDirectMessagesToInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    followingUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowingUserNestedInput
    followedUserRelations?: UserRelationUncheckedUpdateManyWithoutFollowedUserNestedInput
    tweets?: TweetUncheckedUpdateManyWithoutTweetingUserNestedInput
    directMessagesFrom?: DirectMessageUncheckedUpdateManyWithoutFromUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateManyCategoryInput = {
    id?: number
    name: string
    image: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: OrderItemUpdateManyWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyMenuInput = {
    id?: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateWithoutMenuInput = {
    order?: OrderUpdateOneWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    menuId: number
    quantity: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    menu?: MenuUpdateOneRequiredWithoutOrderItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateManyCategoryInput = {
    id?: number
    questionText: string
    correctChoiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateWithoutCategoryInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    choices?: ChoiceUpdateManyWithoutQuizNestedInput
    correctChoice?: ChoiceUpdateOneRequiredWithoutCorrectQuizzesNestedInput
    rounds?: RoundUpdateManyWithoutQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuizNestedInput
    correctChoiceId?: IntFieldUpdateOperationsInput | number
    rounds?: RoundUncheckedUpdateManyWithoutQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyWithoutQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    correctChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateManyCorrectChoiceInput = {
    id?: number
    questionText: string
    quizCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateWithoutCorrectChoiceInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    choices?: ChoiceUpdateManyWithoutQuizNestedInput
    rounds?: RoundUpdateManyWithoutQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateWithoutCorrectChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    quizCategoryId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuizNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyWithoutCorrectQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    quizCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUpdateWithoutSelectedChoicesInput = {
    quizzes?: QuizUpdateManyWithoutRoundsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateWithoutSelectedChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzes?: QuizUncheckedUpdateManyWithoutRoundsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateManyQuizInput = {
    id?: number
    answerText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateWithoutQuizInput = {
    answerText?: StringFieldUpdateOperationsInput | string
    correctQuizzes?: QuizUpdateManyWithoutCorrectChoiceNestedInput
    rounds?: RoundUpdateManyWithoutSelectedChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerText?: StringFieldUpdateOperationsInput | string
    correctQuizzes?: QuizUncheckedUpdateManyWithoutCorrectChoiceNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutSelectedChoicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUpdateWithoutQuizzesInput = {
    selectedChoices?: ChoiceUpdateManyWithoutRoundsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateWithoutQuizzesInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedChoices?: ChoiceUncheckedUpdateManyWithoutRoundsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutRoundsInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    category?: QuizCategoryUpdateOneRequiredWithoutQuizzesNestedInput
    choices?: ChoiceUpdateManyWithoutQuizNestedInput
    correctChoice?: ChoiceUpdateOneRequiredWithoutCorrectQuizzesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    quizCategoryId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuizNestedInput
    correctChoiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUpdateWithoutRoundsInput = {
    answerText?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneWithoutChoicesNestedInput
    correctQuizzes?: QuizUpdateManyWithoutCorrectChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerText?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    correctQuizzes?: QuizUncheckedUpdateManyWithoutCorrectChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyWithoutSelectedChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerText?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateManyFollowingUserInput = {
    id?: number
    followedUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationCreateManyFollowedUserInput = {
    id?: number
    followingUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TweetCreateManyTweetingUserInput = {
    id?: number
    tweetText: string
    replyToTweetId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateManyFromUserInput = {
    id?: number
    dmText: string
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateManyToUserInput = {
    id?: number
    dmText: string
    fromUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUpdateWithoutFollowingUserInput = {
    followedUser?: UserUpdateOneRequiredWithoutFollowedUserRelationsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateWithoutFollowingUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    followedUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyWithoutFollowingUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    followedUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUpdateWithoutFollowedUserInput = {
    followingUser?: UserUpdateOneRequiredWithoutFollowingUserRelationsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateWithoutFollowedUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyWithoutFollowedUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    followingUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUpdateWithoutTweetingUserInput = {
    tweetText?: StringFieldUpdateOperationsInput | string
    replyToTweet?: TweetUpdateOneWithoutRepliedTweetNestedInput
    repliedTweet?: TweetUpdateOneWithoutReplyToTweetNestedInput
    hashTags?: HashTagUpdateManyWithoutIsIntweetsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateWithoutTweetingUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetText?: StringFieldUpdateOperationsInput | string
    replyToTweetId?: NullableIntFieldUpdateOperationsInput | number | null
    repliedTweet?: TweetUncheckedUpdateOneWithoutReplyToTweetNestedInput
    hashTags?: HashTagUncheckedUpdateManyWithoutIsIntweetsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateManyWithoutTweetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetText?: StringFieldUpdateOperationsInput | string
    replyToTweetId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUpdateWithoutFromUserInput = {
    dmText?: StringFieldUpdateOperationsInput | string
    toUser?: UserUpdateOneRequiredWithoutDirectMessagesToNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dmText?: StringFieldUpdateOperationsInput | string
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyWithoutDirectMessagesFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    dmText?: StringFieldUpdateOperationsInput | string
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUpdateWithoutToUserInput = {
    dmText?: StringFieldUpdateOperationsInput | string
    fromUser?: UserUpdateOneRequiredWithoutDirectMessagesFromNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dmText?: StringFieldUpdateOperationsInput | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyWithoutDirectMessagesToInput = {
    id?: IntFieldUpdateOperationsInput | number
    dmText?: StringFieldUpdateOperationsInput | string
    fromUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUpdateWithoutIsIntweetsInput = {
    hashTagText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUncheckedUpdateWithoutIsIntweetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashTagText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUncheckedUpdateManyWithoutHashTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashTagText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUpdateWithoutHashTagsInput = {
    tweetText?: StringFieldUpdateOperationsInput | string
    tweetingUser?: UserUpdateOneRequiredWithoutTweetsNestedInput
    replyToTweet?: TweetUpdateOneWithoutRepliedTweetNestedInput
    repliedTweet?: TweetUpdateOneWithoutReplyToTweetNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateWithoutHashTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetText?: StringFieldUpdateOperationsInput | string
    replyToTweetId?: NullableIntFieldUpdateOperationsInput | number | null
    repliedTweet?: TweetUncheckedUpdateOneWithoutReplyToTweetNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateManyWithoutIsIntweetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tweetText?: StringFieldUpdateOperationsInput | string
    replyToTweetId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: IntFieldUpdateOperationsInput | number
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