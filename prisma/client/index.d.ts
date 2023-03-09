
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
  triviaAnswerChoiceId: number
  triviaCategoryId: number
}

/**
 * Model TriviaChoice
 * 
 */
export type TriviaChoice = {
  id: number
  choice: string
  triviaQuizId: number | null
}

/**
 * Model TriviaCategory
 * 
 */
export type TriviaCategory = {
  id: number
  category: string
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
   * `prisma.triviaCategory`: Exposes CRUD operations for the **TriviaCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaCategories
    * const triviaCategories = await prisma.triviaCategory.findMany()
    * ```
    */
  get triviaCategory(): Prisma.TriviaCategoryDelegate<GlobalReject>;
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
    TriviaQuiz: 'TriviaQuiz',
    TriviaChoice: 'TriviaChoice',
    TriviaCategory: 'TriviaCategory'
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
   * Count Type TriviaQuizCountOutputType
   */


  export type TriviaQuizCountOutputType = {
    choices: number
  }

  export type TriviaQuizCountOutputTypeSelect = {
    choices?: boolean
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
   * Count Type TriviaCategoryCountOutputType
   */


  export type TriviaCategoryCountOutputType = {
    triviaQuizes: number
  }

  export type TriviaCategoryCountOutputTypeSelect = {
    triviaQuizes?: boolean
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
    triviaAnswerChoiceId: number | null
    triviaCategoryId: number | null
  }

  export type TriviaQuizSumAggregateOutputType = {
    id: number | null
    triviaAnswerChoiceId: number | null
    triviaCategoryId: number | null
  }

  export type TriviaQuizMinAggregateOutputType = {
    id: number | null
    quiz: string | null
    triviaAnswerChoiceId: number | null
    triviaCategoryId: number | null
  }

  export type TriviaQuizMaxAggregateOutputType = {
    id: number | null
    quiz: string | null
    triviaAnswerChoiceId: number | null
    triviaCategoryId: number | null
  }

  export type TriviaQuizCountAggregateOutputType = {
    id: number
    quiz: number
    triviaAnswerChoiceId: number
    triviaCategoryId: number
    _all: number
  }


  export type TriviaQuizAvgAggregateInputType = {
    id?: true
    triviaAnswerChoiceId?: true
    triviaCategoryId?: true
  }

  export type TriviaQuizSumAggregateInputType = {
    id?: true
    triviaAnswerChoiceId?: true
    triviaCategoryId?: true
  }

  export type TriviaQuizMinAggregateInputType = {
    id?: true
    quiz?: true
    triviaAnswerChoiceId?: true
    triviaCategoryId?: true
  }

  export type TriviaQuizMaxAggregateInputType = {
    id?: true
    quiz?: true
    triviaAnswerChoiceId?: true
    triviaCategoryId?: true
  }

  export type TriviaQuizCountAggregateInputType = {
    id?: true
    quiz?: true
    triviaAnswerChoiceId?: true
    triviaCategoryId?: true
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
    triviaAnswerChoiceId: number
    triviaCategoryId: number
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
    answer?: boolean | TriviaChoiceArgs
    choices?: boolean | TriviaQuiz$choicesArgs
    triviaAnswerChoiceId?: boolean
    category?: boolean | TriviaCategoryArgs
    triviaCategoryId?: boolean
    _count?: boolean | TriviaQuizCountOutputTypeArgs
  }


  export type TriviaQuizInclude = {
    answer?: boolean | TriviaChoiceArgs
    choices?: boolean | TriviaQuiz$choicesArgs
    category?: boolean | TriviaCategoryArgs
    _count?: boolean | TriviaQuizCountOutputTypeArgs
  }

  export type TriviaQuizGetPayload<S extends boolean | null | undefined | TriviaQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuiz :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuizArgs | TriviaQuizFindManyArgs)
    ? TriviaQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'answer' ? TriviaChoiceGetPayload<S['include'][P]> :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['include'][P]>>  :
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> :
        P extends '_count' ? TriviaQuizCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaQuizArgs | TriviaQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'answer' ? TriviaChoiceGetPayload<S['select'][P]> :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['select'][P]>>  :
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> :
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

    answer<T extends TriviaChoiceArgs= {}>(args?: Subset<T, TriviaChoiceArgs>): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | Null>;

    choices<T extends TriviaQuiz$choicesArgs= {}>(args?: Subset<T, TriviaQuiz$choicesArgs>): Prisma.PrismaPromise<Array<TriviaChoiceGetPayload<T>>| Null>;

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
    triviaQuizId: number | null
  }

  export type TriviaChoiceSumAggregateOutputType = {
    id: number | null
    triviaQuizId: number | null
  }

  export type TriviaChoiceMinAggregateOutputType = {
    id: number | null
    choice: string | null
    triviaQuizId: number | null
  }

  export type TriviaChoiceMaxAggregateOutputType = {
    id: number | null
    choice: string | null
    triviaQuizId: number | null
  }

  export type TriviaChoiceCountAggregateOutputType = {
    id: number
    choice: number
    triviaQuizId: number
    _all: number
  }


  export type TriviaChoiceAvgAggregateInputType = {
    id?: true
    triviaQuizId?: true
  }

  export type TriviaChoiceSumAggregateInputType = {
    id?: true
    triviaQuizId?: true
  }

  export type TriviaChoiceMinAggregateInputType = {
    id?: true
    choice?: true
    triviaQuizId?: true
  }

  export type TriviaChoiceMaxAggregateInputType = {
    id?: true
    choice?: true
    triviaQuizId?: true
  }

  export type TriviaChoiceCountAggregateInputType = {
    id?: true
    choice?: true
    triviaQuizId?: true
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
    triviaQuizId: number | null
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
    triviaQuiz?: boolean | TriviaQuizArgs
    triviaQuizId?: boolean
    triviaQuizAnswer?: boolean | TriviaQuizArgs
  }


  export type TriviaChoiceInclude = {
    triviaQuiz?: boolean | TriviaQuizArgs
    triviaQuizAnswer?: boolean | TriviaQuizArgs
  }

  export type TriviaChoiceGetPayload<S extends boolean | null | undefined | TriviaChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaChoice :
    S extends undefined ? never :
    S extends { include: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
    ? TriviaChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'triviaQuiz' ? TriviaQuizGetPayload<S['include'][P]> | null :
        P extends 'triviaQuizAnswer' ? TriviaQuizGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'triviaQuiz' ? TriviaQuizGetPayload<S['select'][P]> | null :
        P extends 'triviaQuizAnswer' ? TriviaQuizGetPayload<S['select'][P]> | null :  P extends keyof TriviaChoice ? TriviaChoice[P] : never
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

    triviaQuiz<T extends TriviaQuizArgs= {}>(args?: Subset<T, TriviaQuizArgs>): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | Null>;

    triviaQuizAnswer<T extends TriviaQuizArgs= {}>(args?: Subset<T, TriviaQuizArgs>): Prisma__TriviaQuizClient<TriviaQuizGetPayload<T> | Null>;

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
    category: string | null
  }

  export type TriviaCategoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
  }

  export type TriviaCategoryCountAggregateOutputType = {
    id: number
    category: number
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
    category?: true
  }

  export type TriviaCategoryMaxAggregateInputType = {
    id?: true
    category?: true
  }

  export type TriviaCategoryCountAggregateInputType = {
    id?: true
    category?: true
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
    category: string
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
    category?: boolean
    triviaQuizes?: boolean | TriviaCategory$triviaQuizesArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }


  export type TriviaCategoryInclude = {
    triviaQuizes?: boolean | TriviaCategory$triviaQuizesArgs
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
        P extends '_count' ? TriviaCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'triviaQuizes' ? Array < TriviaQuizGetPayload<S['select'][P]>>  :
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
    category: 'category'
  };

  export type TriviaCategoryScalarFieldEnum = (typeof TriviaCategoryScalarFieldEnum)[keyof typeof TriviaCategoryScalarFieldEnum]


  export const TriviaChoiceScalarFieldEnum: {
    id: 'id',
    choice: 'choice',
    triviaQuizId: 'triviaQuizId'
  };

  export type TriviaChoiceScalarFieldEnum = (typeof TriviaChoiceScalarFieldEnum)[keyof typeof TriviaChoiceScalarFieldEnum]


  export const TriviaQuizScalarFieldEnum: {
    id: 'id',
    quiz: 'quiz',
    triviaAnswerChoiceId: 'triviaAnswerChoiceId',
    triviaCategoryId: 'triviaCategoryId'
  };

  export type TriviaQuizScalarFieldEnum = (typeof TriviaQuizScalarFieldEnum)[keyof typeof TriviaQuizScalarFieldEnum]


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

  export type TriviaQuizWhereInput = {
    AND?: Enumerable<TriviaQuizWhereInput>
    OR?: Enumerable<TriviaQuizWhereInput>
    NOT?: Enumerable<TriviaQuizWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    answer?: XOR<TriviaChoiceRelationFilter, TriviaChoiceWhereInput>
    choices?: TriviaChoiceListRelationFilter
    triviaAnswerChoiceId?: IntFilter | number
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput>
    triviaCategoryId?: IntFilter | number
  }

  export type TriviaQuizOrderByWithRelationInput = {
    id?: SortOrder
    quiz?: SortOrder
    answer?: TriviaChoiceOrderByWithRelationInput
    choices?: TriviaChoiceOrderByRelationAggregateInput
    triviaAnswerChoiceId?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    triviaCategoryId?: SortOrder
  }

  export type TriviaQuizWhereUniqueInput = {
    id?: number
    triviaAnswerChoiceId?: number
  }

  export type TriviaQuizOrderByWithAggregationInput = {
    id?: SortOrder
    quiz?: SortOrder
    triviaAnswerChoiceId?: SortOrder
    triviaCategoryId?: SortOrder
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
    triviaAnswerChoiceId?: IntWithAggregatesFilter | number
    triviaCategoryId?: IntWithAggregatesFilter | number
  }

  export type TriviaChoiceWhereInput = {
    AND?: Enumerable<TriviaChoiceWhereInput>
    OR?: Enumerable<TriviaChoiceWhereInput>
    NOT?: Enumerable<TriviaChoiceWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    triviaQuiz?: XOR<TriviaQuizRelationFilter, TriviaQuizWhereInput> | null
    triviaQuizId?: IntNullableFilter | number | null
    triviaQuizAnswer?: XOR<TriviaQuizRelationFilter, TriviaQuizWhereInput> | null
  }

  export type TriviaChoiceOrderByWithRelationInput = {
    id?: SortOrder
    choice?: SortOrder
    triviaQuiz?: TriviaQuizOrderByWithRelationInput
    triviaQuizId?: SortOrder
    triviaQuizAnswer?: TriviaQuizOrderByWithRelationInput
  }

  export type TriviaChoiceWhereUniqueInput = {
    id?: number
  }

  export type TriviaChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    choice?: SortOrder
    triviaQuizId?: SortOrder
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
    triviaQuizId?: IntNullableWithAggregatesFilter | number | null
  }

  export type TriviaCategoryWhereInput = {
    AND?: Enumerable<TriviaCategoryWhereInput>
    OR?: Enumerable<TriviaCategoryWhereInput>
    NOT?: Enumerable<TriviaCategoryWhereInput>
    id?: IntFilter | number
    category?: StringFilter | string
    triviaQuizes?: TriviaQuizListRelationFilter
  }

  export type TriviaCategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    triviaQuizes?: TriviaQuizOrderByRelationAggregateInput
  }

  export type TriviaCategoryWhereUniqueInput = {
    id?: number
  }

  export type TriviaCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
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
    category?: StringWithAggregatesFilter | string
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

  export type TriviaQuizCreateInput = {
    quiz: string
    answer: TriviaChoiceCreateNestedOneWithoutTriviaQuizAnswerInput
    choices?: TriviaChoiceCreateNestedManyWithoutTriviaQuizInput
    category: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
  }

  export type TriviaQuizUncheckedCreateInput = {
    id?: number
    quiz: string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutTriviaQuizInput
    triviaAnswerChoiceId: number
    triviaCategoryId: number
  }

  export type TriviaQuizUpdateInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    answer?: TriviaChoiceUpdateOneRequiredWithoutTriviaQuizAnswerNestedInput
    choices?: TriviaChoiceUpdateManyWithoutTriviaQuizNestedInput
    category?: TriviaCategoryUpdateOneRequiredWithoutTriviaQuizesNestedInput
  }

  export type TriviaQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutTriviaQuizNestedInput
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
    triviaCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaQuizCreateManyInput = {
    id?: number
    quiz: string
    triviaAnswerChoiceId: number
    triviaCategoryId: number
  }

  export type TriviaQuizUpdateManyMutationInput = {
    quiz?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
    triviaCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaChoiceCreateInput = {
    choice: string
    triviaQuiz?: TriviaQuizCreateNestedOneWithoutChoicesInput
    triviaQuizAnswer?: TriviaQuizCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceUncheckedCreateInput = {
    id?: number
    choice: string
    triviaQuizId?: number | null
    triviaQuizAnswer?: TriviaQuizUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceUpdateInput = {
    choice?: StringFieldUpdateOperationsInput | string
    triviaQuiz?: TriviaQuizUpdateOneWithoutChoicesNestedInput
    triviaQuizAnswer?: TriviaQuizUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    triviaQuizId?: NullableIntFieldUpdateOperationsInput | number | null
    triviaQuizAnswer?: TriviaQuizUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceCreateManyInput = {
    id?: number
    choice: string
    triviaQuizId?: number | null
  }

  export type TriviaChoiceUpdateManyMutationInput = {
    choice?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    triviaQuizId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaCategoryCreateInput = {
    category: string
    triviaQuizes?: TriviaQuizCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateInput = {
    id?: number
    category: string
    triviaQuizes?: TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    triviaQuizes?: TriviaQuizUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryCreateManyInput = {
    id?: number
    category: string
  }

  export type TriviaCategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
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

  export type TriviaChoiceRelationFilter = {
    is?: TriviaChoiceWhereInput
    isNot?: TriviaChoiceWhereInput
  }

  export type TriviaChoiceListRelationFilter = {
    every?: TriviaChoiceWhereInput
    some?: TriviaChoiceWhereInput
    none?: TriviaChoiceWhereInput
  }

  export type TriviaCategoryRelationFilter = {
    is?: TriviaCategoryWhereInput
    isNot?: TriviaCategoryWhereInput
  }

  export type TriviaChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaQuizCountOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    triviaAnswerChoiceId?: SortOrder
    triviaCategoryId?: SortOrder
  }

  export type TriviaQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    triviaAnswerChoiceId?: SortOrder
    triviaCategoryId?: SortOrder
  }

  export type TriviaQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    triviaAnswerChoiceId?: SortOrder
    triviaCategoryId?: SortOrder
  }

  export type TriviaQuizMinOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    triviaAnswerChoiceId?: SortOrder
    triviaCategoryId?: SortOrder
  }

  export type TriviaQuizSumOrderByAggregateInput = {
    id?: SortOrder
    triviaAnswerChoiceId?: SortOrder
    triviaCategoryId?: SortOrder
  }

  export type TriviaQuizRelationFilter = {
    is?: TriviaQuizWhereInput | null
    isNot?: TriviaQuizWhereInput | null
  }

  export type TriviaChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    triviaQuizId?: SortOrder
  }

  export type TriviaChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    triviaQuizId?: SortOrder
  }

  export type TriviaChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    triviaQuizId?: SortOrder
  }

  export type TriviaChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    triviaQuizId?: SortOrder
  }

  export type TriviaChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    triviaQuizId?: SortOrder
  }

  export type TriviaQuizListRelationFilter = {
    every?: TriviaQuizWhereInput
    some?: TriviaQuizWhereInput
    none?: TriviaQuizWhereInput
  }

  export type TriviaQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type TriviaCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type TriviaCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
  }

  export type TriviaCategorySumOrderByAggregateInput = {
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

  export type TriviaChoiceCreateNestedOneWithoutTriviaQuizAnswerInput = {
    create?: XOR<TriviaChoiceCreateWithoutTriviaQuizAnswerInput, TriviaChoiceUncheckedCreateWithoutTriviaQuizAnswerInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutTriviaQuizAnswerInput
    connect?: TriviaChoiceWhereUniqueInput
  }

  export type TriviaChoiceCreateNestedManyWithoutTriviaQuizInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutTriviaQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutTriviaQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutTriviaQuizInput>
    createMany?: TriviaChoiceCreateManyTriviaQuizInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaChoiceUncheckedCreateNestedManyWithoutTriviaQuizInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutTriviaQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutTriviaQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutTriviaQuizInput>
    createMany?: TriviaChoiceCreateManyTriviaQuizInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaChoiceUpdateOneRequiredWithoutTriviaQuizAnswerNestedInput = {
    create?: XOR<TriviaChoiceCreateWithoutTriviaQuizAnswerInput, TriviaChoiceUncheckedCreateWithoutTriviaQuizAnswerInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutTriviaQuizAnswerInput
    upsert?: TriviaChoiceUpsertWithoutTriviaQuizAnswerInput
    connect?: TriviaChoiceWhereUniqueInput
    update?: XOR<TriviaChoiceUpdateWithoutTriviaQuizAnswerInput, TriviaChoiceUncheckedUpdateWithoutTriviaQuizAnswerInput>
  }

  export type TriviaChoiceUpdateManyWithoutTriviaQuizNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutTriviaQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutTriviaQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutTriviaQuizInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutTriviaQuizInput>
    createMany?: TriviaChoiceCreateManyTriviaQuizInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutTriviaQuizInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutTriviaQuizInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaCategoryUpdateOneRequiredWithoutTriviaQuizesNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput
    upsert?: TriviaCategoryUpsertWithoutTriviaQuizesInput
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutTriviaQuizesInput, TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput>
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutTriviaQuizNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutTriviaQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutTriviaQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutTriviaQuizInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutTriviaQuizInput>
    createMany?: TriviaChoiceCreateManyTriviaQuizInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutTriviaQuizInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutTriviaQuizInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaQuizCreateNestedOneWithoutChoicesInput = {
    create?: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutChoicesInput
    connect?: TriviaQuizWhereUniqueInput
  }

  export type TriviaQuizCreateNestedOneWithoutAnswerInput = {
    create?: XOR<TriviaQuizCreateWithoutAnswerInput, TriviaQuizUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutAnswerInput
    connect?: TriviaQuizWhereUniqueInput
  }

  export type TriviaQuizUncheckedCreateNestedOneWithoutAnswerInput = {
    create?: XOR<TriviaQuizCreateWithoutAnswerInput, TriviaQuizUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutAnswerInput
    connect?: TriviaQuizWhereUniqueInput
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

  export type TriviaQuizUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<TriviaQuizCreateWithoutAnswerInput, TriviaQuizUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutAnswerInput
    upsert?: TriviaQuizUpsertWithoutAnswerInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuizWhereUniqueInput
    update?: XOR<TriviaQuizUpdateWithoutAnswerInput, TriviaQuizUncheckedUpdateWithoutAnswerInput>
  }

  export type TriviaQuizUncheckedUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<TriviaQuizCreateWithoutAnswerInput, TriviaQuizUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TriviaQuizCreateOrConnectWithoutAnswerInput
    upsert?: TriviaQuizUpsertWithoutAnswerInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuizWhereUniqueInput
    update?: XOR<TriviaQuizUpdateWithoutAnswerInput, TriviaQuizUncheckedUpdateWithoutAnswerInput>
  }

  export type TriviaQuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
  }

  export type TriviaQuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuizCreateWithoutCategoryInput>, Enumerable<TriviaQuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuizCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuizWhereUniqueInput>
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

  export type TriviaChoiceCreateWithoutTriviaQuizAnswerInput = {
    choice: string
    triviaQuiz?: TriviaQuizCreateNestedOneWithoutChoicesInput
  }

  export type TriviaChoiceUncheckedCreateWithoutTriviaQuizAnswerInput = {
    id?: number
    choice: string
    triviaQuizId?: number | null
  }

  export type TriviaChoiceCreateOrConnectWithoutTriviaQuizAnswerInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutTriviaQuizAnswerInput, TriviaChoiceUncheckedCreateWithoutTriviaQuizAnswerInput>
  }

  export type TriviaChoiceCreateWithoutTriviaQuizInput = {
    choice: string
    triviaQuizAnswer?: TriviaQuizCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceUncheckedCreateWithoutTriviaQuizInput = {
    id?: number
    choice: string
    triviaQuizAnswer?: TriviaQuizUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceCreateOrConnectWithoutTriviaQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutTriviaQuizInput, TriviaChoiceUncheckedCreateWithoutTriviaQuizInput>
  }

  export type TriviaChoiceCreateManyTriviaQuizInputEnvelope = {
    data: Enumerable<TriviaChoiceCreateManyTriviaQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryCreateWithoutTriviaQuizesInput = {
    category: string
  }

  export type TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput = {
    id?: number
    category: string
  }

  export type TriviaCategoryCreateOrConnectWithoutTriviaQuizesInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
  }

  export type TriviaChoiceUpsertWithoutTriviaQuizAnswerInput = {
    update: XOR<TriviaChoiceUpdateWithoutTriviaQuizAnswerInput, TriviaChoiceUncheckedUpdateWithoutTriviaQuizAnswerInput>
    create: XOR<TriviaChoiceCreateWithoutTriviaQuizAnswerInput, TriviaChoiceUncheckedCreateWithoutTriviaQuizAnswerInput>
  }

  export type TriviaChoiceUpdateWithoutTriviaQuizAnswerInput = {
    choice?: StringFieldUpdateOperationsInput | string
    triviaQuiz?: TriviaQuizUpdateOneWithoutChoicesNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutTriviaQuizAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    triviaQuizId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaChoiceUpsertWithWhereUniqueWithoutTriviaQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    update: XOR<TriviaChoiceUpdateWithoutTriviaQuizInput, TriviaChoiceUncheckedUpdateWithoutTriviaQuizInput>
    create: XOR<TriviaChoiceCreateWithoutTriviaQuizInput, TriviaChoiceUncheckedCreateWithoutTriviaQuizInput>
  }

  export type TriviaChoiceUpdateWithWhereUniqueWithoutTriviaQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    data: XOR<TriviaChoiceUpdateWithoutTriviaQuizInput, TriviaChoiceUncheckedUpdateWithoutTriviaQuizInput>
  }

  export type TriviaChoiceUpdateManyWithWhereWithoutTriviaQuizInput = {
    where: TriviaChoiceScalarWhereInput
    data: XOR<TriviaChoiceUpdateManyMutationInput, TriviaChoiceUncheckedUpdateManyWithoutChoicesInput>
  }

  export type TriviaChoiceScalarWhereInput = {
    AND?: Enumerable<TriviaChoiceScalarWhereInput>
    OR?: Enumerable<TriviaChoiceScalarWhereInput>
    NOT?: Enumerable<TriviaChoiceScalarWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    triviaQuizId?: IntNullableFilter | number | null
  }

  export type TriviaCategoryUpsertWithoutTriviaQuizesInput = {
    update: XOR<TriviaCategoryUpdateWithoutTriviaQuizesInput, TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput>
    create: XOR<TriviaCategoryCreateWithoutTriviaQuizesInput, TriviaCategoryUncheckedCreateWithoutTriviaQuizesInput>
  }

  export type TriviaCategoryUpdateWithoutTriviaQuizesInput = {
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaCategoryUncheckedUpdateWithoutTriviaQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaQuizCreateWithoutChoicesInput = {
    quiz: string
    answer: TriviaChoiceCreateNestedOneWithoutTriviaQuizAnswerInput
    category: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
  }

  export type TriviaQuizUncheckedCreateWithoutChoicesInput = {
    id?: number
    quiz: string
    triviaAnswerChoiceId: number
    triviaCategoryId: number
  }

  export type TriviaQuizCreateOrConnectWithoutChoicesInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaQuizCreateWithoutAnswerInput = {
    quiz: string
    choices?: TriviaChoiceCreateNestedManyWithoutTriviaQuizInput
    category: TriviaCategoryCreateNestedOneWithoutTriviaQuizesInput
  }

  export type TriviaQuizUncheckedCreateWithoutAnswerInput = {
    id?: number
    quiz: string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutTriviaQuizInput
    triviaCategoryId: number
  }

  export type TriviaQuizCreateOrConnectWithoutAnswerInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutAnswerInput, TriviaQuizUncheckedCreateWithoutAnswerInput>
  }

  export type TriviaQuizUpsertWithoutChoicesInput = {
    update: XOR<TriviaQuizUpdateWithoutChoicesInput, TriviaQuizUncheckedUpdateWithoutChoicesInput>
    create: XOR<TriviaQuizCreateWithoutChoicesInput, TriviaQuizUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaQuizUpdateWithoutChoicesInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    answer?: TriviaChoiceUpdateOneRequiredWithoutTriviaQuizAnswerNestedInput
    category?: TriviaCategoryUpdateOneRequiredWithoutTriviaQuizesNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
    triviaCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaQuizUpsertWithoutAnswerInput = {
    update: XOR<TriviaQuizUpdateWithoutAnswerInput, TriviaQuizUncheckedUpdateWithoutAnswerInput>
    create: XOR<TriviaQuizCreateWithoutAnswerInput, TriviaQuizUncheckedCreateWithoutAnswerInput>
  }

  export type TriviaQuizUpdateWithoutAnswerInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    choices?: TriviaChoiceUpdateManyWithoutTriviaQuizNestedInput
    category?: TriviaCategoryUpdateOneRequiredWithoutTriviaQuizesNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutTriviaQuizNestedInput
    triviaCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaQuizCreateWithoutCategoryInput = {
    quiz: string
    answer: TriviaChoiceCreateNestedOneWithoutTriviaQuizAnswerInput
    choices?: TriviaChoiceCreateNestedManyWithoutTriviaQuizInput
  }

  export type TriviaQuizUncheckedCreateWithoutCategoryInput = {
    id?: number
    quiz: string
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutTriviaQuizInput
    triviaAnswerChoiceId: number
  }

  export type TriviaQuizCreateOrConnectWithoutCategoryInput = {
    where: TriviaQuizWhereUniqueInput
    create: XOR<TriviaQuizCreateWithoutCategoryInput, TriviaQuizUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuizCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaQuizCreateManyCategoryInput>
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
    triviaAnswerChoiceId?: IntFilter | number
    triviaCategoryId?: IntFilter | number
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

  export type TriviaChoiceCreateManyTriviaQuizInput = {
    id?: number
    choice: string
  }

  export type TriviaChoiceUpdateWithoutTriviaQuizInput = {
    choice?: StringFieldUpdateOperationsInput | string
    triviaQuizAnswer?: TriviaQuizUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutTriviaQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    triviaQuizAnswer?: TriviaQuizUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaQuizCreateManyCategoryInput = {
    id?: number
    quiz: string
    triviaAnswerChoiceId: number
  }

  export type TriviaQuizUpdateWithoutCategoryInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    answer?: TriviaChoiceUpdateOneRequiredWithoutTriviaQuizAnswerNestedInput
    choices?: TriviaChoiceUpdateManyWithoutTriviaQuizNestedInput
  }

  export type TriviaQuizUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    choices?: TriviaChoiceUncheckedUpdateManyWithoutTriviaQuizNestedInput
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaQuizUncheckedUpdateManyWithoutTriviaQuizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
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