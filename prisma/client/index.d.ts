
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