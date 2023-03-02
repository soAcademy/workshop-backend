
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model DewKitchenCategory
 * 
 */
export type DewKitchenCategory = {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}

/**
 * Model DewKitchenMenu
 * 
 */
export type DewKitchenMenu = {
  id: number
  name: string
  image: string
  price: number
  categoryName: string | null
  createAt: Date
  updateAt: Date
}

/**
 * Model DewKitchenOrder
 * 
 */
export type DewKitchenOrder = {
  id: number
  status: string
  tableId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model DewOrderItem
 * 
 */
export type DewOrderItem = {
  id: number
  menuId: number
  orderId: number | null
  quantity: number
  totalPrice: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Todolist
 * 
 */
export type Todolist = {
  id: number
  task: string
  notes: string | null
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
 * // Fetch zero or more DewKitchenCategories
 * const dewKitchenCategories = await prisma.dewKitchenCategory.findMany()
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
   * // Fetch zero or more DewKitchenCategories
   * const dewKitchenCategories = await prisma.dewKitchenCategory.findMany()
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
   * `prisma.dewKitchenCategory`: Exposes CRUD operations for the **DewKitchenCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DewKitchenCategories
    * const dewKitchenCategories = await prisma.dewKitchenCategory.findMany()
    * ```
    */
  get dewKitchenCategory(): Prisma.DewKitchenCategoryDelegate<GlobalReject>;

  /**
   * `prisma.dewKitchenMenu`: Exposes CRUD operations for the **DewKitchenMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DewKitchenMenus
    * const dewKitchenMenus = await prisma.dewKitchenMenu.findMany()
    * ```
    */
  get dewKitchenMenu(): Prisma.DewKitchenMenuDelegate<GlobalReject>;

  /**
   * `prisma.dewKitchenOrder`: Exposes CRUD operations for the **DewKitchenOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DewKitchenOrders
    * const dewKitchenOrders = await prisma.dewKitchenOrder.findMany()
    * ```
    */
  get dewKitchenOrder(): Prisma.DewKitchenOrderDelegate<GlobalReject>;

  /**
   * `prisma.dewOrderItem`: Exposes CRUD operations for the **DewOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DewOrderItems
    * const dewOrderItems = await prisma.dewOrderItem.findMany()
    * ```
    */
  get dewOrderItem(): Prisma.DewOrderItemDelegate<GlobalReject>;

  /**
   * `prisma.todolist`: Exposes CRUD operations for the **Todolist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todolists
    * const todolists = await prisma.todolist.findMany()
    * ```
    */
  get todolist(): Prisma.TodolistDelegate<GlobalReject>;
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
    DewKitchenCategory: 'DewKitchenCategory',
    DewKitchenMenu: 'DewKitchenMenu',
    DewKitchenOrder: 'DewKitchenOrder',
    DewOrderItem: 'DewOrderItem',
    Todolist: 'Todolist'
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
   * Count Type DewKitchenCategoryCountOutputType
   */


  export type DewKitchenCategoryCountOutputType = {
    menus: number
  }

  export type DewKitchenCategoryCountOutputTypeSelect = {
    menus?: boolean
  }

  export type DewKitchenCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | DewKitchenCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DewKitchenCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DewKitchenCategoryCountOutputTypeArgs)
    ? DewKitchenCategoryCountOutputType 
    : S extends { select: any } & (DewKitchenCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DewKitchenCategoryCountOutputType ? DewKitchenCategoryCountOutputType[P] : never
  } 
      : DewKitchenCategoryCountOutputType




  // Custom InputTypes

  /**
   * DewKitchenCategoryCountOutputType without action
   */
  export type DewKitchenCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategoryCountOutputType
     */
    select?: DewKitchenCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type DewKitchenMenuCountOutputType
   */


  export type DewKitchenMenuCountOutputType = {
    orderItems: number
  }

  export type DewKitchenMenuCountOutputTypeSelect = {
    orderItems?: boolean
  }

  export type DewKitchenMenuCountOutputTypeGetPayload<S extends boolean | null | undefined | DewKitchenMenuCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DewKitchenMenuCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DewKitchenMenuCountOutputTypeArgs)
    ? DewKitchenMenuCountOutputType 
    : S extends { select: any } & (DewKitchenMenuCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DewKitchenMenuCountOutputType ? DewKitchenMenuCountOutputType[P] : never
  } 
      : DewKitchenMenuCountOutputType




  // Custom InputTypes

  /**
   * DewKitchenMenuCountOutputType without action
   */
  export type DewKitchenMenuCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenuCountOutputType
     */
    select?: DewKitchenMenuCountOutputTypeSelect | null
  }



  /**
   * Count Type DewKitchenOrderCountOutputType
   */


  export type DewKitchenOrderCountOutputType = {
    items: number
  }

  export type DewKitchenOrderCountOutputTypeSelect = {
    items?: boolean
  }

  export type DewKitchenOrderCountOutputTypeGetPayload<S extends boolean | null | undefined | DewKitchenOrderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DewKitchenOrderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DewKitchenOrderCountOutputTypeArgs)
    ? DewKitchenOrderCountOutputType 
    : S extends { select: any } & (DewKitchenOrderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DewKitchenOrderCountOutputType ? DewKitchenOrderCountOutputType[P] : never
  } 
      : DewKitchenOrderCountOutputType




  // Custom InputTypes

  /**
   * DewKitchenOrderCountOutputType without action
   */
  export type DewKitchenOrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrderCountOutputType
     */
    select?: DewKitchenOrderCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model DewKitchenCategory
   */


  export type AggregateDewKitchenCategory = {
    _count: DewKitchenCategoryCountAggregateOutputType | null
    _avg: DewKitchenCategoryAvgAggregateOutputType | null
    _sum: DewKitchenCategorySumAggregateOutputType | null
    _min: DewKitchenCategoryMinAggregateOutputType | null
    _max: DewKitchenCategoryMaxAggregateOutputType | null
  }

  export type DewKitchenCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type DewKitchenCategorySumAggregateOutputType = {
    id: number | null
  }

  export type DewKitchenCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DewKitchenCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DewKitchenCategoryCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DewKitchenCategoryAvgAggregateInputType = {
    id?: true
  }

  export type DewKitchenCategorySumAggregateInputType = {
    id?: true
  }

  export type DewKitchenCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type DewKitchenCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type DewKitchenCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DewKitchenCategoryAggregateArgs = {
    /**
     * Filter which DewKitchenCategory to aggregate.
     */
    where?: DewKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenCategories to fetch.
     */
    orderBy?: Enumerable<DewKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DewKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DewKitchenCategories
    **/
    _count?: true | DewKitchenCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DewKitchenCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DewKitchenCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DewKitchenCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DewKitchenCategoryMaxAggregateInputType
  }

  export type GetDewKitchenCategoryAggregateType<T extends DewKitchenCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDewKitchenCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDewKitchenCategory[P]>
      : GetScalarType<T[P], AggregateDewKitchenCategory[P]>
  }




  export type DewKitchenCategoryGroupByArgs = {
    where?: DewKitchenCategoryWhereInput
    orderBy?: Enumerable<DewKitchenCategoryOrderByWithAggregationInput>
    by: DewKitchenCategoryScalarFieldEnum[]
    having?: DewKitchenCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DewKitchenCategoryCountAggregateInputType | true
    _avg?: DewKitchenCategoryAvgAggregateInputType
    _sum?: DewKitchenCategorySumAggregateInputType
    _min?: DewKitchenCategoryMinAggregateInputType
    _max?: DewKitchenCategoryMaxAggregateInputType
  }


  export type DewKitchenCategoryGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    updateAt: Date
    _count: DewKitchenCategoryCountAggregateOutputType | null
    _avg: DewKitchenCategoryAvgAggregateOutputType | null
    _sum: DewKitchenCategorySumAggregateOutputType | null
    _min: DewKitchenCategoryMinAggregateOutputType | null
    _max: DewKitchenCategoryMaxAggregateOutputType | null
  }

  type GetDewKitchenCategoryGroupByPayload<T extends DewKitchenCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DewKitchenCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DewKitchenCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DewKitchenCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DewKitchenCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DewKitchenCategorySelect = {
    id?: boolean
    name?: boolean
    menus?: boolean | DewKitchenCategory$menusArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | DewKitchenCategoryCountOutputTypeArgs
  }


  export type DewKitchenCategoryInclude = {
    menus?: boolean | DewKitchenCategory$menusArgs
    _count?: boolean | DewKitchenCategoryCountOutputTypeArgs
  }

  export type DewKitchenCategoryGetPayload<S extends boolean | null | undefined | DewKitchenCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DewKitchenCategory :
    S extends undefined ? never :
    S extends { include: any } & (DewKitchenCategoryArgs | DewKitchenCategoryFindManyArgs)
    ? DewKitchenCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menus' ? Array < DewKitchenMenuGetPayload<S['include'][P]>>  :
        P extends '_count' ? DewKitchenCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DewKitchenCategoryArgs | DewKitchenCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menus' ? Array < DewKitchenMenuGetPayload<S['select'][P]>>  :
        P extends '_count' ? DewKitchenCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DewKitchenCategory ? DewKitchenCategory[P] : never
  } 
      : DewKitchenCategory


  type DewKitchenCategoryCountArgs = 
    Omit<DewKitchenCategoryFindManyArgs, 'select' | 'include'> & {
      select?: DewKitchenCategoryCountAggregateInputType | true
    }

  export interface DewKitchenCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DewKitchenCategory that matches the filter.
     * @param {DewKitchenCategoryFindUniqueArgs} args - Arguments to find a DewKitchenCategory
     * @example
     * // Get one DewKitchenCategory
     * const dewKitchenCategory = await prisma.dewKitchenCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DewKitchenCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DewKitchenCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DewKitchenCategory'> extends True ? Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T>> : Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T> | null, null>

    /**
     * Find one DewKitchenCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DewKitchenCategoryFindUniqueOrThrowArgs} args - Arguments to find a DewKitchenCategory
     * @example
     * // Get one DewKitchenCategory
     * const dewKitchenCategory = await prisma.dewKitchenCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DewKitchenCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DewKitchenCategoryFindUniqueOrThrowArgs>
    ): Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T>>

    /**
     * Find the first DewKitchenCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenCategoryFindFirstArgs} args - Arguments to find a DewKitchenCategory
     * @example
     * // Get one DewKitchenCategory
     * const dewKitchenCategory = await prisma.dewKitchenCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DewKitchenCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DewKitchenCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DewKitchenCategory'> extends True ? Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T>> : Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T> | null, null>

    /**
     * Find the first DewKitchenCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenCategoryFindFirstOrThrowArgs} args - Arguments to find a DewKitchenCategory
     * @example
     * // Get one DewKitchenCategory
     * const dewKitchenCategory = await prisma.dewKitchenCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DewKitchenCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DewKitchenCategoryFindFirstOrThrowArgs>
    ): Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T>>

    /**
     * Find zero or more DewKitchenCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DewKitchenCategories
     * const dewKitchenCategories = await prisma.dewKitchenCategory.findMany()
     * 
     * // Get first 10 DewKitchenCategories
     * const dewKitchenCategories = await prisma.dewKitchenCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dewKitchenCategoryWithIdOnly = await prisma.dewKitchenCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DewKitchenCategoryFindManyArgs>(
      args?: SelectSubset<T, DewKitchenCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<DewKitchenCategoryGetPayload<T>>>

    /**
     * Create a DewKitchenCategory.
     * @param {DewKitchenCategoryCreateArgs} args - Arguments to create a DewKitchenCategory.
     * @example
     * // Create one DewKitchenCategory
     * const DewKitchenCategory = await prisma.dewKitchenCategory.create({
     *   data: {
     *     // ... data to create a DewKitchenCategory
     *   }
     * })
     * 
    **/
    create<T extends DewKitchenCategoryCreateArgs>(
      args: SelectSubset<T, DewKitchenCategoryCreateArgs>
    ): Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T>>

    /**
     * Create many DewKitchenCategories.
     *     @param {DewKitchenCategoryCreateManyArgs} args - Arguments to create many DewKitchenCategories.
     *     @example
     *     // Create many DewKitchenCategories
     *     const dewKitchenCategory = await prisma.dewKitchenCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DewKitchenCategoryCreateManyArgs>(
      args?: SelectSubset<T, DewKitchenCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DewKitchenCategory.
     * @param {DewKitchenCategoryDeleteArgs} args - Arguments to delete one DewKitchenCategory.
     * @example
     * // Delete one DewKitchenCategory
     * const DewKitchenCategory = await prisma.dewKitchenCategory.delete({
     *   where: {
     *     // ... filter to delete one DewKitchenCategory
     *   }
     * })
     * 
    **/
    delete<T extends DewKitchenCategoryDeleteArgs>(
      args: SelectSubset<T, DewKitchenCategoryDeleteArgs>
    ): Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T>>

    /**
     * Update one DewKitchenCategory.
     * @param {DewKitchenCategoryUpdateArgs} args - Arguments to update one DewKitchenCategory.
     * @example
     * // Update one DewKitchenCategory
     * const dewKitchenCategory = await prisma.dewKitchenCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DewKitchenCategoryUpdateArgs>(
      args: SelectSubset<T, DewKitchenCategoryUpdateArgs>
    ): Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T>>

    /**
     * Delete zero or more DewKitchenCategories.
     * @param {DewKitchenCategoryDeleteManyArgs} args - Arguments to filter DewKitchenCategories to delete.
     * @example
     * // Delete a few DewKitchenCategories
     * const { count } = await prisma.dewKitchenCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DewKitchenCategoryDeleteManyArgs>(
      args?: SelectSubset<T, DewKitchenCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DewKitchenCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DewKitchenCategories
     * const dewKitchenCategory = await prisma.dewKitchenCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DewKitchenCategoryUpdateManyArgs>(
      args: SelectSubset<T, DewKitchenCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DewKitchenCategory.
     * @param {DewKitchenCategoryUpsertArgs} args - Arguments to update or create a DewKitchenCategory.
     * @example
     * // Update or create a DewKitchenCategory
     * const dewKitchenCategory = await prisma.dewKitchenCategory.upsert({
     *   create: {
     *     // ... data to create a DewKitchenCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DewKitchenCategory we want to update
     *   }
     * })
    **/
    upsert<T extends DewKitchenCategoryUpsertArgs>(
      args: SelectSubset<T, DewKitchenCategoryUpsertArgs>
    ): Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T>>

    /**
     * Count the number of DewKitchenCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenCategoryCountArgs} args - Arguments to filter DewKitchenCategories to count.
     * @example
     * // Count the number of DewKitchenCategories
     * const count = await prisma.dewKitchenCategory.count({
     *   where: {
     *     // ... the filter for the DewKitchenCategories we want to count
     *   }
     * })
    **/
    count<T extends DewKitchenCategoryCountArgs>(
      args?: Subset<T, DewKitchenCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DewKitchenCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DewKitchenCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DewKitchenCategoryAggregateArgs>(args: Subset<T, DewKitchenCategoryAggregateArgs>): Prisma.PrismaPromise<GetDewKitchenCategoryAggregateType<T>>

    /**
     * Group by DewKitchenCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenCategoryGroupByArgs} args - Group by arguments.
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
      T extends DewKitchenCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DewKitchenCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DewKitchenCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DewKitchenCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDewKitchenCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DewKitchenCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DewKitchenCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    menus<T extends DewKitchenCategory$menusArgs= {}>(args?: Subset<T, DewKitchenCategory$menusArgs>): Prisma.PrismaPromise<Array<DewKitchenMenuGetPayload<T>>| Null>;

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
   * DewKitchenCategory base type for findUnique actions
   */
  export type DewKitchenCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * Filter, which DewKitchenCategory to fetch.
     */
    where: DewKitchenCategoryWhereUniqueInput
  }

  /**
   * DewKitchenCategory findUnique
   */
  export interface DewKitchenCategoryFindUniqueArgs extends DewKitchenCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DewKitchenCategory findUniqueOrThrow
   */
  export type DewKitchenCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * Filter, which DewKitchenCategory to fetch.
     */
    where: DewKitchenCategoryWhereUniqueInput
  }


  /**
   * DewKitchenCategory base type for findFirst actions
   */
  export type DewKitchenCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * Filter, which DewKitchenCategory to fetch.
     */
    where?: DewKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenCategories to fetch.
     */
    orderBy?: Enumerable<DewKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DewKitchenCategories.
     */
    cursor?: DewKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DewKitchenCategories.
     */
    distinct?: Enumerable<DewKitchenCategoryScalarFieldEnum>
  }

  /**
   * DewKitchenCategory findFirst
   */
  export interface DewKitchenCategoryFindFirstArgs extends DewKitchenCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DewKitchenCategory findFirstOrThrow
   */
  export type DewKitchenCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * Filter, which DewKitchenCategory to fetch.
     */
    where?: DewKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenCategories to fetch.
     */
    orderBy?: Enumerable<DewKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DewKitchenCategories.
     */
    cursor?: DewKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DewKitchenCategories.
     */
    distinct?: Enumerable<DewKitchenCategoryScalarFieldEnum>
  }


  /**
   * DewKitchenCategory findMany
   */
  export type DewKitchenCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * Filter, which DewKitchenCategories to fetch.
     */
    where?: DewKitchenCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenCategories to fetch.
     */
    orderBy?: Enumerable<DewKitchenCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DewKitchenCategories.
     */
    cursor?: DewKitchenCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenCategories.
     */
    skip?: number
    distinct?: Enumerable<DewKitchenCategoryScalarFieldEnum>
  }


  /**
   * DewKitchenCategory create
   */
  export type DewKitchenCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * The data needed to create a DewKitchenCategory.
     */
    data: XOR<DewKitchenCategoryCreateInput, DewKitchenCategoryUncheckedCreateInput>
  }


  /**
   * DewKitchenCategory createMany
   */
  export type DewKitchenCategoryCreateManyArgs = {
    /**
     * The data used to create many DewKitchenCategories.
     */
    data: Enumerable<DewKitchenCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DewKitchenCategory update
   */
  export type DewKitchenCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * The data needed to update a DewKitchenCategory.
     */
    data: XOR<DewKitchenCategoryUpdateInput, DewKitchenCategoryUncheckedUpdateInput>
    /**
     * Choose, which DewKitchenCategory to update.
     */
    where: DewKitchenCategoryWhereUniqueInput
  }


  /**
   * DewKitchenCategory updateMany
   */
  export type DewKitchenCategoryUpdateManyArgs = {
    /**
     * The data used to update DewKitchenCategories.
     */
    data: XOR<DewKitchenCategoryUpdateManyMutationInput, DewKitchenCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DewKitchenCategories to update
     */
    where?: DewKitchenCategoryWhereInput
  }


  /**
   * DewKitchenCategory upsert
   */
  export type DewKitchenCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * The filter to search for the DewKitchenCategory to update in case it exists.
     */
    where: DewKitchenCategoryWhereUniqueInput
    /**
     * In case the DewKitchenCategory found by the `where` argument doesn't exist, create a new DewKitchenCategory with this data.
     */
    create: XOR<DewKitchenCategoryCreateInput, DewKitchenCategoryUncheckedCreateInput>
    /**
     * In case the DewKitchenCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DewKitchenCategoryUpdateInput, DewKitchenCategoryUncheckedUpdateInput>
  }


  /**
   * DewKitchenCategory delete
   */
  export type DewKitchenCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
    /**
     * Filter which DewKitchenCategory to delete.
     */
    where: DewKitchenCategoryWhereUniqueInput
  }


  /**
   * DewKitchenCategory deleteMany
   */
  export type DewKitchenCategoryDeleteManyArgs = {
    /**
     * Filter which DewKitchenCategories to delete
     */
    where?: DewKitchenCategoryWhereInput
  }


  /**
   * DewKitchenCategory.menus
   */
  export type DewKitchenCategory$menusArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    where?: DewKitchenMenuWhereInput
    orderBy?: Enumerable<DewKitchenMenuOrderByWithRelationInput>
    cursor?: DewKitchenMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DewKitchenMenuScalarFieldEnum>
  }


  /**
   * DewKitchenCategory without action
   */
  export type DewKitchenCategoryArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenCategory
     */
    select?: DewKitchenCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenCategoryInclude | null
  }



  /**
   * Model DewKitchenMenu
   */


  export type AggregateDewKitchenMenu = {
    _count: DewKitchenMenuCountAggregateOutputType | null
    _avg: DewKitchenMenuAvgAggregateOutputType | null
    _sum: DewKitchenMenuSumAggregateOutputType | null
    _min: DewKitchenMenuMinAggregateOutputType | null
    _max: DewKitchenMenuMaxAggregateOutputType | null
  }

  export type DewKitchenMenuAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type DewKitchenMenuSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type DewKitchenMenuMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    categoryName: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DewKitchenMenuMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    categoryName: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DewKitchenMenuCountAggregateOutputType = {
    id: number
    name: number
    image: number
    price: number
    categoryName: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DewKitchenMenuAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type DewKitchenMenuSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type DewKitchenMenuMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createAt?: true
    updateAt?: true
  }

  export type DewKitchenMenuMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createAt?: true
    updateAt?: true
  }

  export type DewKitchenMenuCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    categoryName?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DewKitchenMenuAggregateArgs = {
    /**
     * Filter which DewKitchenMenu to aggregate.
     */
    where?: DewKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenMenus to fetch.
     */
    orderBy?: Enumerable<DewKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DewKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DewKitchenMenus
    **/
    _count?: true | DewKitchenMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DewKitchenMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DewKitchenMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DewKitchenMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DewKitchenMenuMaxAggregateInputType
  }

  export type GetDewKitchenMenuAggregateType<T extends DewKitchenMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateDewKitchenMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDewKitchenMenu[P]>
      : GetScalarType<T[P], AggregateDewKitchenMenu[P]>
  }




  export type DewKitchenMenuGroupByArgs = {
    where?: DewKitchenMenuWhereInput
    orderBy?: Enumerable<DewKitchenMenuOrderByWithAggregationInput>
    by: DewKitchenMenuScalarFieldEnum[]
    having?: DewKitchenMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DewKitchenMenuCountAggregateInputType | true
    _avg?: DewKitchenMenuAvgAggregateInputType
    _sum?: DewKitchenMenuSumAggregateInputType
    _min?: DewKitchenMenuMinAggregateInputType
    _max?: DewKitchenMenuMaxAggregateInputType
  }


  export type DewKitchenMenuGroupByOutputType = {
    id: number
    name: string
    image: string
    price: number
    categoryName: string | null
    createAt: Date
    updateAt: Date
    _count: DewKitchenMenuCountAggregateOutputType | null
    _avg: DewKitchenMenuAvgAggregateOutputType | null
    _sum: DewKitchenMenuSumAggregateOutputType | null
    _min: DewKitchenMenuMinAggregateOutputType | null
    _max: DewKitchenMenuMaxAggregateOutputType | null
  }

  type GetDewKitchenMenuGroupByPayload<T extends DewKitchenMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DewKitchenMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DewKitchenMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DewKitchenMenuGroupByOutputType[P]>
            : GetScalarType<T[P], DewKitchenMenuGroupByOutputType[P]>
        }
      >
    >


  export type DewKitchenMenuSelect = {
    id?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    categoryKey?: boolean | DewKitchenCategoryArgs
    categoryName?: boolean
    orderItems?: boolean | DewKitchenMenu$orderItemsArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | DewKitchenMenuCountOutputTypeArgs
  }


  export type DewKitchenMenuInclude = {
    categoryKey?: boolean | DewKitchenCategoryArgs
    orderItems?: boolean | DewKitchenMenu$orderItemsArgs
    _count?: boolean | DewKitchenMenuCountOutputTypeArgs
  }

  export type DewKitchenMenuGetPayload<S extends boolean | null | undefined | DewKitchenMenuArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DewKitchenMenu :
    S extends undefined ? never :
    S extends { include: any } & (DewKitchenMenuArgs | DewKitchenMenuFindManyArgs)
    ? DewKitchenMenu  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'categoryKey' ? DewKitchenCategoryGetPayload<S['include'][P]> | null :
        P extends 'orderItems' ? Array < DewOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? DewKitchenMenuCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DewKitchenMenuArgs | DewKitchenMenuFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'categoryKey' ? DewKitchenCategoryGetPayload<S['select'][P]> | null :
        P extends 'orderItems' ? Array < DewOrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? DewKitchenMenuCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DewKitchenMenu ? DewKitchenMenu[P] : never
  } 
      : DewKitchenMenu


  type DewKitchenMenuCountArgs = 
    Omit<DewKitchenMenuFindManyArgs, 'select' | 'include'> & {
      select?: DewKitchenMenuCountAggregateInputType | true
    }

  export interface DewKitchenMenuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DewKitchenMenu that matches the filter.
     * @param {DewKitchenMenuFindUniqueArgs} args - Arguments to find a DewKitchenMenu
     * @example
     * // Get one DewKitchenMenu
     * const dewKitchenMenu = await prisma.dewKitchenMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DewKitchenMenuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DewKitchenMenuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DewKitchenMenu'> extends True ? Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T>> : Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T> | null, null>

    /**
     * Find one DewKitchenMenu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DewKitchenMenuFindUniqueOrThrowArgs} args - Arguments to find a DewKitchenMenu
     * @example
     * // Get one DewKitchenMenu
     * const dewKitchenMenu = await prisma.dewKitchenMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DewKitchenMenuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DewKitchenMenuFindUniqueOrThrowArgs>
    ): Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T>>

    /**
     * Find the first DewKitchenMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenMenuFindFirstArgs} args - Arguments to find a DewKitchenMenu
     * @example
     * // Get one DewKitchenMenu
     * const dewKitchenMenu = await prisma.dewKitchenMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DewKitchenMenuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DewKitchenMenuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DewKitchenMenu'> extends True ? Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T>> : Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T> | null, null>

    /**
     * Find the first DewKitchenMenu that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenMenuFindFirstOrThrowArgs} args - Arguments to find a DewKitchenMenu
     * @example
     * // Get one DewKitchenMenu
     * const dewKitchenMenu = await prisma.dewKitchenMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DewKitchenMenuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DewKitchenMenuFindFirstOrThrowArgs>
    ): Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T>>

    /**
     * Find zero or more DewKitchenMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenMenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DewKitchenMenus
     * const dewKitchenMenus = await prisma.dewKitchenMenu.findMany()
     * 
     * // Get first 10 DewKitchenMenus
     * const dewKitchenMenus = await prisma.dewKitchenMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dewKitchenMenuWithIdOnly = await prisma.dewKitchenMenu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DewKitchenMenuFindManyArgs>(
      args?: SelectSubset<T, DewKitchenMenuFindManyArgs>
    ): Prisma.PrismaPromise<Array<DewKitchenMenuGetPayload<T>>>

    /**
     * Create a DewKitchenMenu.
     * @param {DewKitchenMenuCreateArgs} args - Arguments to create a DewKitchenMenu.
     * @example
     * // Create one DewKitchenMenu
     * const DewKitchenMenu = await prisma.dewKitchenMenu.create({
     *   data: {
     *     // ... data to create a DewKitchenMenu
     *   }
     * })
     * 
    **/
    create<T extends DewKitchenMenuCreateArgs>(
      args: SelectSubset<T, DewKitchenMenuCreateArgs>
    ): Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T>>

    /**
     * Create many DewKitchenMenus.
     *     @param {DewKitchenMenuCreateManyArgs} args - Arguments to create many DewKitchenMenus.
     *     @example
     *     // Create many DewKitchenMenus
     *     const dewKitchenMenu = await prisma.dewKitchenMenu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DewKitchenMenuCreateManyArgs>(
      args?: SelectSubset<T, DewKitchenMenuCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DewKitchenMenu.
     * @param {DewKitchenMenuDeleteArgs} args - Arguments to delete one DewKitchenMenu.
     * @example
     * // Delete one DewKitchenMenu
     * const DewKitchenMenu = await prisma.dewKitchenMenu.delete({
     *   where: {
     *     // ... filter to delete one DewKitchenMenu
     *   }
     * })
     * 
    **/
    delete<T extends DewKitchenMenuDeleteArgs>(
      args: SelectSubset<T, DewKitchenMenuDeleteArgs>
    ): Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T>>

    /**
     * Update one DewKitchenMenu.
     * @param {DewKitchenMenuUpdateArgs} args - Arguments to update one DewKitchenMenu.
     * @example
     * // Update one DewKitchenMenu
     * const dewKitchenMenu = await prisma.dewKitchenMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DewKitchenMenuUpdateArgs>(
      args: SelectSubset<T, DewKitchenMenuUpdateArgs>
    ): Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T>>

    /**
     * Delete zero or more DewKitchenMenus.
     * @param {DewKitchenMenuDeleteManyArgs} args - Arguments to filter DewKitchenMenus to delete.
     * @example
     * // Delete a few DewKitchenMenus
     * const { count } = await prisma.dewKitchenMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DewKitchenMenuDeleteManyArgs>(
      args?: SelectSubset<T, DewKitchenMenuDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DewKitchenMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DewKitchenMenus
     * const dewKitchenMenu = await prisma.dewKitchenMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DewKitchenMenuUpdateManyArgs>(
      args: SelectSubset<T, DewKitchenMenuUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DewKitchenMenu.
     * @param {DewKitchenMenuUpsertArgs} args - Arguments to update or create a DewKitchenMenu.
     * @example
     * // Update or create a DewKitchenMenu
     * const dewKitchenMenu = await prisma.dewKitchenMenu.upsert({
     *   create: {
     *     // ... data to create a DewKitchenMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DewKitchenMenu we want to update
     *   }
     * })
    **/
    upsert<T extends DewKitchenMenuUpsertArgs>(
      args: SelectSubset<T, DewKitchenMenuUpsertArgs>
    ): Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T>>

    /**
     * Count the number of DewKitchenMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenMenuCountArgs} args - Arguments to filter DewKitchenMenus to count.
     * @example
     * // Count the number of DewKitchenMenus
     * const count = await prisma.dewKitchenMenu.count({
     *   where: {
     *     // ... the filter for the DewKitchenMenus we want to count
     *   }
     * })
    **/
    count<T extends DewKitchenMenuCountArgs>(
      args?: Subset<T, DewKitchenMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DewKitchenMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DewKitchenMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DewKitchenMenuAggregateArgs>(args: Subset<T, DewKitchenMenuAggregateArgs>): Prisma.PrismaPromise<GetDewKitchenMenuAggregateType<T>>

    /**
     * Group by DewKitchenMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenMenuGroupByArgs} args - Group by arguments.
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
      T extends DewKitchenMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DewKitchenMenuGroupByArgs['orderBy'] }
        : { orderBy?: DewKitchenMenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DewKitchenMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDewKitchenMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DewKitchenMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DewKitchenMenuClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    categoryKey<T extends DewKitchenCategoryArgs= {}>(args?: Subset<T, DewKitchenCategoryArgs>): Prisma__DewKitchenCategoryClient<DewKitchenCategoryGetPayload<T> | Null>;

    orderItems<T extends DewKitchenMenu$orderItemsArgs= {}>(args?: Subset<T, DewKitchenMenu$orderItemsArgs>): Prisma.PrismaPromise<Array<DewOrderItemGetPayload<T>>| Null>;

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
   * DewKitchenMenu base type for findUnique actions
   */
  export type DewKitchenMenuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * Filter, which DewKitchenMenu to fetch.
     */
    where: DewKitchenMenuWhereUniqueInput
  }

  /**
   * DewKitchenMenu findUnique
   */
  export interface DewKitchenMenuFindUniqueArgs extends DewKitchenMenuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DewKitchenMenu findUniqueOrThrow
   */
  export type DewKitchenMenuFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * Filter, which DewKitchenMenu to fetch.
     */
    where: DewKitchenMenuWhereUniqueInput
  }


  /**
   * DewKitchenMenu base type for findFirst actions
   */
  export type DewKitchenMenuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * Filter, which DewKitchenMenu to fetch.
     */
    where?: DewKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenMenus to fetch.
     */
    orderBy?: Enumerable<DewKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DewKitchenMenus.
     */
    cursor?: DewKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DewKitchenMenus.
     */
    distinct?: Enumerable<DewKitchenMenuScalarFieldEnum>
  }

  /**
   * DewKitchenMenu findFirst
   */
  export interface DewKitchenMenuFindFirstArgs extends DewKitchenMenuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DewKitchenMenu findFirstOrThrow
   */
  export type DewKitchenMenuFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * Filter, which DewKitchenMenu to fetch.
     */
    where?: DewKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenMenus to fetch.
     */
    orderBy?: Enumerable<DewKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DewKitchenMenus.
     */
    cursor?: DewKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DewKitchenMenus.
     */
    distinct?: Enumerable<DewKitchenMenuScalarFieldEnum>
  }


  /**
   * DewKitchenMenu findMany
   */
  export type DewKitchenMenuFindManyArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * Filter, which DewKitchenMenus to fetch.
     */
    where?: DewKitchenMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenMenus to fetch.
     */
    orderBy?: Enumerable<DewKitchenMenuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DewKitchenMenus.
     */
    cursor?: DewKitchenMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenMenus.
     */
    skip?: number
    distinct?: Enumerable<DewKitchenMenuScalarFieldEnum>
  }


  /**
   * DewKitchenMenu create
   */
  export type DewKitchenMenuCreateArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * The data needed to create a DewKitchenMenu.
     */
    data: XOR<DewKitchenMenuCreateInput, DewKitchenMenuUncheckedCreateInput>
  }


  /**
   * DewKitchenMenu createMany
   */
  export type DewKitchenMenuCreateManyArgs = {
    /**
     * The data used to create many DewKitchenMenus.
     */
    data: Enumerable<DewKitchenMenuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DewKitchenMenu update
   */
  export type DewKitchenMenuUpdateArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * The data needed to update a DewKitchenMenu.
     */
    data: XOR<DewKitchenMenuUpdateInput, DewKitchenMenuUncheckedUpdateInput>
    /**
     * Choose, which DewKitchenMenu to update.
     */
    where: DewKitchenMenuWhereUniqueInput
  }


  /**
   * DewKitchenMenu updateMany
   */
  export type DewKitchenMenuUpdateManyArgs = {
    /**
     * The data used to update DewKitchenMenus.
     */
    data: XOR<DewKitchenMenuUpdateManyMutationInput, DewKitchenMenuUncheckedUpdateManyInput>
    /**
     * Filter which DewKitchenMenus to update
     */
    where?: DewKitchenMenuWhereInput
  }


  /**
   * DewKitchenMenu upsert
   */
  export type DewKitchenMenuUpsertArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * The filter to search for the DewKitchenMenu to update in case it exists.
     */
    where: DewKitchenMenuWhereUniqueInput
    /**
     * In case the DewKitchenMenu found by the `where` argument doesn't exist, create a new DewKitchenMenu with this data.
     */
    create: XOR<DewKitchenMenuCreateInput, DewKitchenMenuUncheckedCreateInput>
    /**
     * In case the DewKitchenMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DewKitchenMenuUpdateInput, DewKitchenMenuUncheckedUpdateInput>
  }


  /**
   * DewKitchenMenu delete
   */
  export type DewKitchenMenuDeleteArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
    /**
     * Filter which DewKitchenMenu to delete.
     */
    where: DewKitchenMenuWhereUniqueInput
  }


  /**
   * DewKitchenMenu deleteMany
   */
  export type DewKitchenMenuDeleteManyArgs = {
    /**
     * Filter which DewKitchenMenus to delete
     */
    where?: DewKitchenMenuWhereInput
  }


  /**
   * DewKitchenMenu.orderItems
   */
  export type DewKitchenMenu$orderItemsArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    where?: DewOrderItemWhereInput
    orderBy?: Enumerable<DewOrderItemOrderByWithRelationInput>
    cursor?: DewOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DewOrderItemScalarFieldEnum>
  }


  /**
   * DewKitchenMenu without action
   */
  export type DewKitchenMenuArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenMenu
     */
    select?: DewKitchenMenuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenMenuInclude | null
  }



  /**
   * Model DewKitchenOrder
   */


  export type AggregateDewKitchenOrder = {
    _count: DewKitchenOrderCountAggregateOutputType | null
    _avg: DewKitchenOrderAvgAggregateOutputType | null
    _sum: DewKitchenOrderSumAggregateOutputType | null
    _min: DewKitchenOrderMinAggregateOutputType | null
    _max: DewKitchenOrderMaxAggregateOutputType | null
  }

  export type DewKitchenOrderAvgAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type DewKitchenOrderSumAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type DewKitchenOrderMinAggregateOutputType = {
    id: number | null
    status: string | null
    tableId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DewKitchenOrderMaxAggregateOutputType = {
    id: number | null
    status: string | null
    tableId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DewKitchenOrderCountAggregateOutputType = {
    id: number
    status: number
    tableId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DewKitchenOrderAvgAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type DewKitchenOrderSumAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type DewKitchenOrderMinAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createAt?: true
    updateAt?: true
  }

  export type DewKitchenOrderMaxAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createAt?: true
    updateAt?: true
  }

  export type DewKitchenOrderCountAggregateInputType = {
    id?: true
    status?: true
    tableId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DewKitchenOrderAggregateArgs = {
    /**
     * Filter which DewKitchenOrder to aggregate.
     */
    where?: DewKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenOrders to fetch.
     */
    orderBy?: Enumerable<DewKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DewKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DewKitchenOrders
    **/
    _count?: true | DewKitchenOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DewKitchenOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DewKitchenOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DewKitchenOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DewKitchenOrderMaxAggregateInputType
  }

  export type GetDewKitchenOrderAggregateType<T extends DewKitchenOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateDewKitchenOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDewKitchenOrder[P]>
      : GetScalarType<T[P], AggregateDewKitchenOrder[P]>
  }




  export type DewKitchenOrderGroupByArgs = {
    where?: DewKitchenOrderWhereInput
    orderBy?: Enumerable<DewKitchenOrderOrderByWithAggregationInput>
    by: DewKitchenOrderScalarFieldEnum[]
    having?: DewKitchenOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DewKitchenOrderCountAggregateInputType | true
    _avg?: DewKitchenOrderAvgAggregateInputType
    _sum?: DewKitchenOrderSumAggregateInputType
    _min?: DewKitchenOrderMinAggregateInputType
    _max?: DewKitchenOrderMaxAggregateInputType
  }


  export type DewKitchenOrderGroupByOutputType = {
    id: number
    status: string
    tableId: number
    createAt: Date
    updateAt: Date
    _count: DewKitchenOrderCountAggregateOutputType | null
    _avg: DewKitchenOrderAvgAggregateOutputType | null
    _sum: DewKitchenOrderSumAggregateOutputType | null
    _min: DewKitchenOrderMinAggregateOutputType | null
    _max: DewKitchenOrderMaxAggregateOutputType | null
  }

  type GetDewKitchenOrderGroupByPayload<T extends DewKitchenOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DewKitchenOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DewKitchenOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DewKitchenOrderGroupByOutputType[P]>
            : GetScalarType<T[P], DewKitchenOrderGroupByOutputType[P]>
        }
      >
    >


  export type DewKitchenOrderSelect = {
    id?: boolean
    status?: boolean
    tableId?: boolean
    items?: boolean | DewKitchenOrder$itemsArgs
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | DewKitchenOrderCountOutputTypeArgs
  }


  export type DewKitchenOrderInclude = {
    items?: boolean | DewKitchenOrder$itemsArgs
    _count?: boolean | DewKitchenOrderCountOutputTypeArgs
  }

  export type DewKitchenOrderGetPayload<S extends boolean | null | undefined | DewKitchenOrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DewKitchenOrder :
    S extends undefined ? never :
    S extends { include: any } & (DewKitchenOrderArgs | DewKitchenOrderFindManyArgs)
    ? DewKitchenOrder  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'items' ? Array < DewOrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? DewKitchenOrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DewKitchenOrderArgs | DewKitchenOrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'items' ? Array < DewOrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? DewKitchenOrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DewKitchenOrder ? DewKitchenOrder[P] : never
  } 
      : DewKitchenOrder


  type DewKitchenOrderCountArgs = 
    Omit<DewKitchenOrderFindManyArgs, 'select' | 'include'> & {
      select?: DewKitchenOrderCountAggregateInputType | true
    }

  export interface DewKitchenOrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DewKitchenOrder that matches the filter.
     * @param {DewKitchenOrderFindUniqueArgs} args - Arguments to find a DewKitchenOrder
     * @example
     * // Get one DewKitchenOrder
     * const dewKitchenOrder = await prisma.dewKitchenOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DewKitchenOrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DewKitchenOrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DewKitchenOrder'> extends True ? Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T>> : Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T> | null, null>

    /**
     * Find one DewKitchenOrder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DewKitchenOrderFindUniqueOrThrowArgs} args - Arguments to find a DewKitchenOrder
     * @example
     * // Get one DewKitchenOrder
     * const dewKitchenOrder = await prisma.dewKitchenOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DewKitchenOrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DewKitchenOrderFindUniqueOrThrowArgs>
    ): Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T>>

    /**
     * Find the first DewKitchenOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenOrderFindFirstArgs} args - Arguments to find a DewKitchenOrder
     * @example
     * // Get one DewKitchenOrder
     * const dewKitchenOrder = await prisma.dewKitchenOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DewKitchenOrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DewKitchenOrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DewKitchenOrder'> extends True ? Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T>> : Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T> | null, null>

    /**
     * Find the first DewKitchenOrder that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenOrderFindFirstOrThrowArgs} args - Arguments to find a DewKitchenOrder
     * @example
     * // Get one DewKitchenOrder
     * const dewKitchenOrder = await prisma.dewKitchenOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DewKitchenOrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DewKitchenOrderFindFirstOrThrowArgs>
    ): Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T>>

    /**
     * Find zero or more DewKitchenOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenOrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DewKitchenOrders
     * const dewKitchenOrders = await prisma.dewKitchenOrder.findMany()
     * 
     * // Get first 10 DewKitchenOrders
     * const dewKitchenOrders = await prisma.dewKitchenOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dewKitchenOrderWithIdOnly = await prisma.dewKitchenOrder.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DewKitchenOrderFindManyArgs>(
      args?: SelectSubset<T, DewKitchenOrderFindManyArgs>
    ): Prisma.PrismaPromise<Array<DewKitchenOrderGetPayload<T>>>

    /**
     * Create a DewKitchenOrder.
     * @param {DewKitchenOrderCreateArgs} args - Arguments to create a DewKitchenOrder.
     * @example
     * // Create one DewKitchenOrder
     * const DewKitchenOrder = await prisma.dewKitchenOrder.create({
     *   data: {
     *     // ... data to create a DewKitchenOrder
     *   }
     * })
     * 
    **/
    create<T extends DewKitchenOrderCreateArgs>(
      args: SelectSubset<T, DewKitchenOrderCreateArgs>
    ): Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T>>

    /**
     * Create many DewKitchenOrders.
     *     @param {DewKitchenOrderCreateManyArgs} args - Arguments to create many DewKitchenOrders.
     *     @example
     *     // Create many DewKitchenOrders
     *     const dewKitchenOrder = await prisma.dewKitchenOrder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DewKitchenOrderCreateManyArgs>(
      args?: SelectSubset<T, DewKitchenOrderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DewKitchenOrder.
     * @param {DewKitchenOrderDeleteArgs} args - Arguments to delete one DewKitchenOrder.
     * @example
     * // Delete one DewKitchenOrder
     * const DewKitchenOrder = await prisma.dewKitchenOrder.delete({
     *   where: {
     *     // ... filter to delete one DewKitchenOrder
     *   }
     * })
     * 
    **/
    delete<T extends DewKitchenOrderDeleteArgs>(
      args: SelectSubset<T, DewKitchenOrderDeleteArgs>
    ): Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T>>

    /**
     * Update one DewKitchenOrder.
     * @param {DewKitchenOrderUpdateArgs} args - Arguments to update one DewKitchenOrder.
     * @example
     * // Update one DewKitchenOrder
     * const dewKitchenOrder = await prisma.dewKitchenOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DewKitchenOrderUpdateArgs>(
      args: SelectSubset<T, DewKitchenOrderUpdateArgs>
    ): Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T>>

    /**
     * Delete zero or more DewKitchenOrders.
     * @param {DewKitchenOrderDeleteManyArgs} args - Arguments to filter DewKitchenOrders to delete.
     * @example
     * // Delete a few DewKitchenOrders
     * const { count } = await prisma.dewKitchenOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DewKitchenOrderDeleteManyArgs>(
      args?: SelectSubset<T, DewKitchenOrderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DewKitchenOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DewKitchenOrders
     * const dewKitchenOrder = await prisma.dewKitchenOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DewKitchenOrderUpdateManyArgs>(
      args: SelectSubset<T, DewKitchenOrderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DewKitchenOrder.
     * @param {DewKitchenOrderUpsertArgs} args - Arguments to update or create a DewKitchenOrder.
     * @example
     * // Update or create a DewKitchenOrder
     * const dewKitchenOrder = await prisma.dewKitchenOrder.upsert({
     *   create: {
     *     // ... data to create a DewKitchenOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DewKitchenOrder we want to update
     *   }
     * })
    **/
    upsert<T extends DewKitchenOrderUpsertArgs>(
      args: SelectSubset<T, DewKitchenOrderUpsertArgs>
    ): Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T>>

    /**
     * Count the number of DewKitchenOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenOrderCountArgs} args - Arguments to filter DewKitchenOrders to count.
     * @example
     * // Count the number of DewKitchenOrders
     * const count = await prisma.dewKitchenOrder.count({
     *   where: {
     *     // ... the filter for the DewKitchenOrders we want to count
     *   }
     * })
    **/
    count<T extends DewKitchenOrderCountArgs>(
      args?: Subset<T, DewKitchenOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DewKitchenOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DewKitchenOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DewKitchenOrderAggregateArgs>(args: Subset<T, DewKitchenOrderAggregateArgs>): Prisma.PrismaPromise<GetDewKitchenOrderAggregateType<T>>

    /**
     * Group by DewKitchenOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewKitchenOrderGroupByArgs} args - Group by arguments.
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
      T extends DewKitchenOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DewKitchenOrderGroupByArgs['orderBy'] }
        : { orderBy?: DewKitchenOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DewKitchenOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDewKitchenOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DewKitchenOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DewKitchenOrderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    items<T extends DewKitchenOrder$itemsArgs= {}>(args?: Subset<T, DewKitchenOrder$itemsArgs>): Prisma.PrismaPromise<Array<DewOrderItemGetPayload<T>>| Null>;

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
   * DewKitchenOrder base type for findUnique actions
   */
  export type DewKitchenOrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * Filter, which DewKitchenOrder to fetch.
     */
    where: DewKitchenOrderWhereUniqueInput
  }

  /**
   * DewKitchenOrder findUnique
   */
  export interface DewKitchenOrderFindUniqueArgs extends DewKitchenOrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DewKitchenOrder findUniqueOrThrow
   */
  export type DewKitchenOrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * Filter, which DewKitchenOrder to fetch.
     */
    where: DewKitchenOrderWhereUniqueInput
  }


  /**
   * DewKitchenOrder base type for findFirst actions
   */
  export type DewKitchenOrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * Filter, which DewKitchenOrder to fetch.
     */
    where?: DewKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenOrders to fetch.
     */
    orderBy?: Enumerable<DewKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DewKitchenOrders.
     */
    cursor?: DewKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DewKitchenOrders.
     */
    distinct?: Enumerable<DewKitchenOrderScalarFieldEnum>
  }

  /**
   * DewKitchenOrder findFirst
   */
  export interface DewKitchenOrderFindFirstArgs extends DewKitchenOrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DewKitchenOrder findFirstOrThrow
   */
  export type DewKitchenOrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * Filter, which DewKitchenOrder to fetch.
     */
    where?: DewKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenOrders to fetch.
     */
    orderBy?: Enumerable<DewKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DewKitchenOrders.
     */
    cursor?: DewKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DewKitchenOrders.
     */
    distinct?: Enumerable<DewKitchenOrderScalarFieldEnum>
  }


  /**
   * DewKitchenOrder findMany
   */
  export type DewKitchenOrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * Filter, which DewKitchenOrders to fetch.
     */
    where?: DewKitchenOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewKitchenOrders to fetch.
     */
    orderBy?: Enumerable<DewKitchenOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DewKitchenOrders.
     */
    cursor?: DewKitchenOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewKitchenOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewKitchenOrders.
     */
    skip?: number
    distinct?: Enumerable<DewKitchenOrderScalarFieldEnum>
  }


  /**
   * DewKitchenOrder create
   */
  export type DewKitchenOrderCreateArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * The data needed to create a DewKitchenOrder.
     */
    data: XOR<DewKitchenOrderCreateInput, DewKitchenOrderUncheckedCreateInput>
  }


  /**
   * DewKitchenOrder createMany
   */
  export type DewKitchenOrderCreateManyArgs = {
    /**
     * The data used to create many DewKitchenOrders.
     */
    data: Enumerable<DewKitchenOrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DewKitchenOrder update
   */
  export type DewKitchenOrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * The data needed to update a DewKitchenOrder.
     */
    data: XOR<DewKitchenOrderUpdateInput, DewKitchenOrderUncheckedUpdateInput>
    /**
     * Choose, which DewKitchenOrder to update.
     */
    where: DewKitchenOrderWhereUniqueInput
  }


  /**
   * DewKitchenOrder updateMany
   */
  export type DewKitchenOrderUpdateManyArgs = {
    /**
     * The data used to update DewKitchenOrders.
     */
    data: XOR<DewKitchenOrderUpdateManyMutationInput, DewKitchenOrderUncheckedUpdateManyInput>
    /**
     * Filter which DewKitchenOrders to update
     */
    where?: DewKitchenOrderWhereInput
  }


  /**
   * DewKitchenOrder upsert
   */
  export type DewKitchenOrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * The filter to search for the DewKitchenOrder to update in case it exists.
     */
    where: DewKitchenOrderWhereUniqueInput
    /**
     * In case the DewKitchenOrder found by the `where` argument doesn't exist, create a new DewKitchenOrder with this data.
     */
    create: XOR<DewKitchenOrderCreateInput, DewKitchenOrderUncheckedCreateInput>
    /**
     * In case the DewKitchenOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DewKitchenOrderUpdateInput, DewKitchenOrderUncheckedUpdateInput>
  }


  /**
   * DewKitchenOrder delete
   */
  export type DewKitchenOrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
    /**
     * Filter which DewKitchenOrder to delete.
     */
    where: DewKitchenOrderWhereUniqueInput
  }


  /**
   * DewKitchenOrder deleteMany
   */
  export type DewKitchenOrderDeleteManyArgs = {
    /**
     * Filter which DewKitchenOrders to delete
     */
    where?: DewKitchenOrderWhereInput
  }


  /**
   * DewKitchenOrder.items
   */
  export type DewKitchenOrder$itemsArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    where?: DewOrderItemWhereInput
    orderBy?: Enumerable<DewOrderItemOrderByWithRelationInput>
    cursor?: DewOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DewOrderItemScalarFieldEnum>
  }


  /**
   * DewKitchenOrder without action
   */
  export type DewKitchenOrderArgs = {
    /**
     * Select specific fields to fetch from the DewKitchenOrder
     */
    select?: DewKitchenOrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewKitchenOrderInclude | null
  }



  /**
   * Model DewOrderItem
   */


  export type AggregateDewOrderItem = {
    _count: DewOrderItemCountAggregateOutputType | null
    _avg: DewOrderItemAvgAggregateOutputType | null
    _sum: DewOrderItemSumAggregateOutputType | null
    _min: DewOrderItemMinAggregateOutputType | null
    _max: DewOrderItemMaxAggregateOutputType | null
  }

  export type DewOrderItemAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type DewOrderItemSumAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
  }

  export type DewOrderItemMinAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DewOrderItemMaxAggregateOutputType = {
    id: number | null
    menuId: number | null
    orderId: number | null
    quantity: number | null
    totalPrice: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DewOrderItemCountAggregateOutputType = {
    id: number
    menuId: number
    orderId: number
    quantity: number
    totalPrice: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DewOrderItemAvgAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
  }

  export type DewOrderItemSumAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
  }

  export type DewOrderItemMinAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createAt?: true
    updateAt?: true
  }

  export type DewOrderItemMaxAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createAt?: true
    updateAt?: true
  }

  export type DewOrderItemCountAggregateInputType = {
    id?: true
    menuId?: true
    orderId?: true
    quantity?: true
    totalPrice?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DewOrderItemAggregateArgs = {
    /**
     * Filter which DewOrderItem to aggregate.
     */
    where?: DewOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewOrderItems to fetch.
     */
    orderBy?: Enumerable<DewOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DewOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DewOrderItems
    **/
    _count?: true | DewOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DewOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DewOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DewOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DewOrderItemMaxAggregateInputType
  }

  export type GetDewOrderItemAggregateType<T extends DewOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDewOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDewOrderItem[P]>
      : GetScalarType<T[P], AggregateDewOrderItem[P]>
  }




  export type DewOrderItemGroupByArgs = {
    where?: DewOrderItemWhereInput
    orderBy?: Enumerable<DewOrderItemOrderByWithAggregationInput>
    by: DewOrderItemScalarFieldEnum[]
    having?: DewOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DewOrderItemCountAggregateInputType | true
    _avg?: DewOrderItemAvgAggregateInputType
    _sum?: DewOrderItemSumAggregateInputType
    _min?: DewOrderItemMinAggregateInputType
    _max?: DewOrderItemMaxAggregateInputType
  }


  export type DewOrderItemGroupByOutputType = {
    id: number
    menuId: number
    orderId: number | null
    quantity: number
    totalPrice: number
    createAt: Date
    updateAt: Date
    _count: DewOrderItemCountAggregateOutputType | null
    _avg: DewOrderItemAvgAggregateOutputType | null
    _sum: DewOrderItemSumAggregateOutputType | null
    _min: DewOrderItemMinAggregateOutputType | null
    _max: DewOrderItemMaxAggregateOutputType | null
  }

  type GetDewOrderItemGroupByPayload<T extends DewOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DewOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DewOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DewOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], DewOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type DewOrderItemSelect = {
    id?: boolean
    menu?: boolean | DewKitchenMenuArgs
    menuId?: boolean
    order?: boolean | DewKitchenOrderArgs
    orderId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type DewOrderItemInclude = {
    menu?: boolean | DewKitchenMenuArgs
    order?: boolean | DewKitchenOrderArgs
  }

  export type DewOrderItemGetPayload<S extends boolean | null | undefined | DewOrderItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DewOrderItem :
    S extends undefined ? never :
    S extends { include: any } & (DewOrderItemArgs | DewOrderItemFindManyArgs)
    ? DewOrderItem  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu' ? DewKitchenMenuGetPayload<S['include'][P]> :
        P extends 'order' ? DewKitchenOrderGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (DewOrderItemArgs | DewOrderItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu' ? DewKitchenMenuGetPayload<S['select'][P]> :
        P extends 'order' ? DewKitchenOrderGetPayload<S['select'][P]> | null :  P extends keyof DewOrderItem ? DewOrderItem[P] : never
  } 
      : DewOrderItem


  type DewOrderItemCountArgs = 
    Omit<DewOrderItemFindManyArgs, 'select' | 'include'> & {
      select?: DewOrderItemCountAggregateInputType | true
    }

  export interface DewOrderItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DewOrderItem that matches the filter.
     * @param {DewOrderItemFindUniqueArgs} args - Arguments to find a DewOrderItem
     * @example
     * // Get one DewOrderItem
     * const dewOrderItem = await prisma.dewOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DewOrderItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DewOrderItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DewOrderItem'> extends True ? Prisma__DewOrderItemClient<DewOrderItemGetPayload<T>> : Prisma__DewOrderItemClient<DewOrderItemGetPayload<T> | null, null>

    /**
     * Find one DewOrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DewOrderItemFindUniqueOrThrowArgs} args - Arguments to find a DewOrderItem
     * @example
     * // Get one DewOrderItem
     * const dewOrderItem = await prisma.dewOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DewOrderItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DewOrderItemFindUniqueOrThrowArgs>
    ): Prisma__DewOrderItemClient<DewOrderItemGetPayload<T>>

    /**
     * Find the first DewOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewOrderItemFindFirstArgs} args - Arguments to find a DewOrderItem
     * @example
     * // Get one DewOrderItem
     * const dewOrderItem = await prisma.dewOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DewOrderItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DewOrderItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DewOrderItem'> extends True ? Prisma__DewOrderItemClient<DewOrderItemGetPayload<T>> : Prisma__DewOrderItemClient<DewOrderItemGetPayload<T> | null, null>

    /**
     * Find the first DewOrderItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewOrderItemFindFirstOrThrowArgs} args - Arguments to find a DewOrderItem
     * @example
     * // Get one DewOrderItem
     * const dewOrderItem = await prisma.dewOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DewOrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DewOrderItemFindFirstOrThrowArgs>
    ): Prisma__DewOrderItemClient<DewOrderItemGetPayload<T>>

    /**
     * Find zero or more DewOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewOrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DewOrderItems
     * const dewOrderItems = await prisma.dewOrderItem.findMany()
     * 
     * // Get first 10 DewOrderItems
     * const dewOrderItems = await prisma.dewOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dewOrderItemWithIdOnly = await prisma.dewOrderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DewOrderItemFindManyArgs>(
      args?: SelectSubset<T, DewOrderItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<DewOrderItemGetPayload<T>>>

    /**
     * Create a DewOrderItem.
     * @param {DewOrderItemCreateArgs} args - Arguments to create a DewOrderItem.
     * @example
     * // Create one DewOrderItem
     * const DewOrderItem = await prisma.dewOrderItem.create({
     *   data: {
     *     // ... data to create a DewOrderItem
     *   }
     * })
     * 
    **/
    create<T extends DewOrderItemCreateArgs>(
      args: SelectSubset<T, DewOrderItemCreateArgs>
    ): Prisma__DewOrderItemClient<DewOrderItemGetPayload<T>>

    /**
     * Create many DewOrderItems.
     *     @param {DewOrderItemCreateManyArgs} args - Arguments to create many DewOrderItems.
     *     @example
     *     // Create many DewOrderItems
     *     const dewOrderItem = await prisma.dewOrderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DewOrderItemCreateManyArgs>(
      args?: SelectSubset<T, DewOrderItemCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DewOrderItem.
     * @param {DewOrderItemDeleteArgs} args - Arguments to delete one DewOrderItem.
     * @example
     * // Delete one DewOrderItem
     * const DewOrderItem = await prisma.dewOrderItem.delete({
     *   where: {
     *     // ... filter to delete one DewOrderItem
     *   }
     * })
     * 
    **/
    delete<T extends DewOrderItemDeleteArgs>(
      args: SelectSubset<T, DewOrderItemDeleteArgs>
    ): Prisma__DewOrderItemClient<DewOrderItemGetPayload<T>>

    /**
     * Update one DewOrderItem.
     * @param {DewOrderItemUpdateArgs} args - Arguments to update one DewOrderItem.
     * @example
     * // Update one DewOrderItem
     * const dewOrderItem = await prisma.dewOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DewOrderItemUpdateArgs>(
      args: SelectSubset<T, DewOrderItemUpdateArgs>
    ): Prisma__DewOrderItemClient<DewOrderItemGetPayload<T>>

    /**
     * Delete zero or more DewOrderItems.
     * @param {DewOrderItemDeleteManyArgs} args - Arguments to filter DewOrderItems to delete.
     * @example
     * // Delete a few DewOrderItems
     * const { count } = await prisma.dewOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DewOrderItemDeleteManyArgs>(
      args?: SelectSubset<T, DewOrderItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DewOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DewOrderItems
     * const dewOrderItem = await prisma.dewOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DewOrderItemUpdateManyArgs>(
      args: SelectSubset<T, DewOrderItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DewOrderItem.
     * @param {DewOrderItemUpsertArgs} args - Arguments to update or create a DewOrderItem.
     * @example
     * // Update or create a DewOrderItem
     * const dewOrderItem = await prisma.dewOrderItem.upsert({
     *   create: {
     *     // ... data to create a DewOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DewOrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends DewOrderItemUpsertArgs>(
      args: SelectSubset<T, DewOrderItemUpsertArgs>
    ): Prisma__DewOrderItemClient<DewOrderItemGetPayload<T>>

    /**
     * Count the number of DewOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewOrderItemCountArgs} args - Arguments to filter DewOrderItems to count.
     * @example
     * // Count the number of DewOrderItems
     * const count = await prisma.dewOrderItem.count({
     *   where: {
     *     // ... the filter for the DewOrderItems we want to count
     *   }
     * })
    **/
    count<T extends DewOrderItemCountArgs>(
      args?: Subset<T, DewOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DewOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DewOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DewOrderItemAggregateArgs>(args: Subset<T, DewOrderItemAggregateArgs>): Prisma.PrismaPromise<GetDewOrderItemAggregateType<T>>

    /**
     * Group by DewOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DewOrderItemGroupByArgs} args - Group by arguments.
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
      T extends DewOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DewOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: DewOrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DewOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDewOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DewOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DewOrderItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    menu<T extends DewKitchenMenuArgs= {}>(args?: Subset<T, DewKitchenMenuArgs>): Prisma__DewKitchenMenuClient<DewKitchenMenuGetPayload<T> | Null>;

    order<T extends DewKitchenOrderArgs= {}>(args?: Subset<T, DewKitchenOrderArgs>): Prisma__DewKitchenOrderClient<DewKitchenOrderGetPayload<T> | Null>;

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
   * DewOrderItem base type for findUnique actions
   */
  export type DewOrderItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * Filter, which DewOrderItem to fetch.
     */
    where: DewOrderItemWhereUniqueInput
  }

  /**
   * DewOrderItem findUnique
   */
  export interface DewOrderItemFindUniqueArgs extends DewOrderItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DewOrderItem findUniqueOrThrow
   */
  export type DewOrderItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * Filter, which DewOrderItem to fetch.
     */
    where: DewOrderItemWhereUniqueInput
  }


  /**
   * DewOrderItem base type for findFirst actions
   */
  export type DewOrderItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * Filter, which DewOrderItem to fetch.
     */
    where?: DewOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewOrderItems to fetch.
     */
    orderBy?: Enumerable<DewOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DewOrderItems.
     */
    cursor?: DewOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DewOrderItems.
     */
    distinct?: Enumerable<DewOrderItemScalarFieldEnum>
  }

  /**
   * DewOrderItem findFirst
   */
  export interface DewOrderItemFindFirstArgs extends DewOrderItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DewOrderItem findFirstOrThrow
   */
  export type DewOrderItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * Filter, which DewOrderItem to fetch.
     */
    where?: DewOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewOrderItems to fetch.
     */
    orderBy?: Enumerable<DewOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DewOrderItems.
     */
    cursor?: DewOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DewOrderItems.
     */
    distinct?: Enumerable<DewOrderItemScalarFieldEnum>
  }


  /**
   * DewOrderItem findMany
   */
  export type DewOrderItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * Filter, which DewOrderItems to fetch.
     */
    where?: DewOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DewOrderItems to fetch.
     */
    orderBy?: Enumerable<DewOrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DewOrderItems.
     */
    cursor?: DewOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DewOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DewOrderItems.
     */
    skip?: number
    distinct?: Enumerable<DewOrderItemScalarFieldEnum>
  }


  /**
   * DewOrderItem create
   */
  export type DewOrderItemCreateArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * The data needed to create a DewOrderItem.
     */
    data: XOR<DewOrderItemCreateInput, DewOrderItemUncheckedCreateInput>
  }


  /**
   * DewOrderItem createMany
   */
  export type DewOrderItemCreateManyArgs = {
    /**
     * The data used to create many DewOrderItems.
     */
    data: Enumerable<DewOrderItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DewOrderItem update
   */
  export type DewOrderItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * The data needed to update a DewOrderItem.
     */
    data: XOR<DewOrderItemUpdateInput, DewOrderItemUncheckedUpdateInput>
    /**
     * Choose, which DewOrderItem to update.
     */
    where: DewOrderItemWhereUniqueInput
  }


  /**
   * DewOrderItem updateMany
   */
  export type DewOrderItemUpdateManyArgs = {
    /**
     * The data used to update DewOrderItems.
     */
    data: XOR<DewOrderItemUpdateManyMutationInput, DewOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which DewOrderItems to update
     */
    where?: DewOrderItemWhereInput
  }


  /**
   * DewOrderItem upsert
   */
  export type DewOrderItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * The filter to search for the DewOrderItem to update in case it exists.
     */
    where: DewOrderItemWhereUniqueInput
    /**
     * In case the DewOrderItem found by the `where` argument doesn't exist, create a new DewOrderItem with this data.
     */
    create: XOR<DewOrderItemCreateInput, DewOrderItemUncheckedCreateInput>
    /**
     * In case the DewOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DewOrderItemUpdateInput, DewOrderItemUncheckedUpdateInput>
  }


  /**
   * DewOrderItem delete
   */
  export type DewOrderItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
    /**
     * Filter which DewOrderItem to delete.
     */
    where: DewOrderItemWhereUniqueInput
  }


  /**
   * DewOrderItem deleteMany
   */
  export type DewOrderItemDeleteManyArgs = {
    /**
     * Filter which DewOrderItems to delete
     */
    where?: DewOrderItemWhereInput
  }


  /**
   * DewOrderItem without action
   */
  export type DewOrderItemArgs = {
    /**
     * Select specific fields to fetch from the DewOrderItem
     */
    select?: DewOrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DewOrderItemInclude | null
  }



  /**
   * Model Todolist
   */


  export type AggregateTodolist = {
    _count: TodolistCountAggregateOutputType | null
    _avg: TodolistAvgAggregateOutputType | null
    _sum: TodolistSumAggregateOutputType | null
    _min: TodolistMinAggregateOutputType | null
    _max: TodolistMaxAggregateOutputType | null
  }

  export type TodolistAvgAggregateOutputType = {
    id: number | null
  }

  export type TodolistSumAggregateOutputType = {
    id: number | null
  }

  export type TodolistMinAggregateOutputType = {
    id: number | null
    task: string | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodolistMaxAggregateOutputType = {
    id: number | null
    task: string | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodolistCountAggregateOutputType = {
    id: number
    task: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TodolistAvgAggregateInputType = {
    id?: true
  }

  export type TodolistSumAggregateInputType = {
    id?: true
  }

  export type TodolistMinAggregateInputType = {
    id?: true
    task?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodolistMaxAggregateInputType = {
    id?: true
    task?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodolistCountAggregateInputType = {
    id?: true
    task?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TodolistAggregateArgs = {
    /**
     * Filter which Todolist to aggregate.
     */
    where?: TodolistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolists to fetch.
     */
    orderBy?: Enumerable<TodolistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodolistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todolists
    **/
    _count?: true | TodolistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodolistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodolistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodolistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodolistMaxAggregateInputType
  }

  export type GetTodolistAggregateType<T extends TodolistAggregateArgs> = {
        [P in keyof T & keyof AggregateTodolist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodolist[P]>
      : GetScalarType<T[P], AggregateTodolist[P]>
  }




  export type TodolistGroupByArgs = {
    where?: TodolistWhereInput
    orderBy?: Enumerable<TodolistOrderByWithAggregationInput>
    by: TodolistScalarFieldEnum[]
    having?: TodolistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodolistCountAggregateInputType | true
    _avg?: TodolistAvgAggregateInputType
    _sum?: TodolistSumAggregateInputType
    _min?: TodolistMinAggregateInputType
    _max?: TodolistMaxAggregateInputType
  }


  export type TodolistGroupByOutputType = {
    id: number
    task: string
    notes: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TodolistCountAggregateOutputType | null
    _avg: TodolistAvgAggregateOutputType | null
    _sum: TodolistSumAggregateOutputType | null
    _min: TodolistMinAggregateOutputType | null
    _max: TodolistMaxAggregateOutputType | null
  }

  type GetTodolistGroupByPayload<T extends TodolistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TodolistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodolistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodolistGroupByOutputType[P]>
            : GetScalarType<T[P], TodolistGroupByOutputType[P]>
        }
      >
    >


  export type TodolistSelect = {
    id?: boolean
    task?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TodolistGetPayload<S extends boolean | null | undefined | TodolistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Todolist :
    S extends undefined ? never :
    S extends { include: any } & (TodolistArgs | TodolistFindManyArgs)
    ? Todolist 
    : S extends { select: any } & (TodolistArgs | TodolistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Todolist ? Todolist[P] : never
  } 
      : Todolist


  type TodolistCountArgs = 
    Omit<TodolistFindManyArgs, 'select' | 'include'> & {
      select?: TodolistCountAggregateInputType | true
    }

  export interface TodolistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Todolist that matches the filter.
     * @param {TodolistFindUniqueArgs} args - Arguments to find a Todolist
     * @example
     * // Get one Todolist
     * const todolist = await prisma.todolist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TodolistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TodolistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Todolist'> extends True ? Prisma__TodolistClient<TodolistGetPayload<T>> : Prisma__TodolistClient<TodolistGetPayload<T> | null, null>

    /**
     * Find one Todolist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TodolistFindUniqueOrThrowArgs} args - Arguments to find a Todolist
     * @example
     * // Get one Todolist
     * const todolist = await prisma.todolist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TodolistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TodolistFindUniqueOrThrowArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Find the first Todolist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistFindFirstArgs} args - Arguments to find a Todolist
     * @example
     * // Get one Todolist
     * const todolist = await prisma.todolist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TodolistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TodolistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Todolist'> extends True ? Prisma__TodolistClient<TodolistGetPayload<T>> : Prisma__TodolistClient<TodolistGetPayload<T> | null, null>

    /**
     * Find the first Todolist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistFindFirstOrThrowArgs} args - Arguments to find a Todolist
     * @example
     * // Get one Todolist
     * const todolist = await prisma.todolist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TodolistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TodolistFindFirstOrThrowArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Find zero or more Todolists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todolists
     * const todolists = await prisma.todolist.findMany()
     * 
     * // Get first 10 Todolists
     * const todolists = await prisma.todolist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todolistWithIdOnly = await prisma.todolist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TodolistFindManyArgs>(
      args?: SelectSubset<T, TodolistFindManyArgs>
    ): Prisma.PrismaPromise<Array<TodolistGetPayload<T>>>

    /**
     * Create a Todolist.
     * @param {TodolistCreateArgs} args - Arguments to create a Todolist.
     * @example
     * // Create one Todolist
     * const Todolist = await prisma.todolist.create({
     *   data: {
     *     // ... data to create a Todolist
     *   }
     * })
     * 
    **/
    create<T extends TodolistCreateArgs>(
      args: SelectSubset<T, TodolistCreateArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Create many Todolists.
     *     @param {TodolistCreateManyArgs} args - Arguments to create many Todolists.
     *     @example
     *     // Create many Todolists
     *     const todolist = await prisma.todolist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TodolistCreateManyArgs>(
      args?: SelectSubset<T, TodolistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Todolist.
     * @param {TodolistDeleteArgs} args - Arguments to delete one Todolist.
     * @example
     * // Delete one Todolist
     * const Todolist = await prisma.todolist.delete({
     *   where: {
     *     // ... filter to delete one Todolist
     *   }
     * })
     * 
    **/
    delete<T extends TodolistDeleteArgs>(
      args: SelectSubset<T, TodolistDeleteArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Update one Todolist.
     * @param {TodolistUpdateArgs} args - Arguments to update one Todolist.
     * @example
     * // Update one Todolist
     * const todolist = await prisma.todolist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TodolistUpdateArgs>(
      args: SelectSubset<T, TodolistUpdateArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Delete zero or more Todolists.
     * @param {TodolistDeleteManyArgs} args - Arguments to filter Todolists to delete.
     * @example
     * // Delete a few Todolists
     * const { count } = await prisma.todolist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TodolistDeleteManyArgs>(
      args?: SelectSubset<T, TodolistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todolists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todolists
     * const todolist = await prisma.todolist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TodolistUpdateManyArgs>(
      args: SelectSubset<T, TodolistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Todolist.
     * @param {TodolistUpsertArgs} args - Arguments to update or create a Todolist.
     * @example
     * // Update or create a Todolist
     * const todolist = await prisma.todolist.upsert({
     *   create: {
     *     // ... data to create a Todolist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todolist we want to update
     *   }
     * })
    **/
    upsert<T extends TodolistUpsertArgs>(
      args: SelectSubset<T, TodolistUpsertArgs>
    ): Prisma__TodolistClient<TodolistGetPayload<T>>

    /**
     * Count the number of Todolists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistCountArgs} args - Arguments to filter Todolists to count.
     * @example
     * // Count the number of Todolists
     * const count = await prisma.todolist.count({
     *   where: {
     *     // ... the filter for the Todolists we want to count
     *   }
     * })
    **/
    count<T extends TodolistCountArgs>(
      args?: Subset<T, TodolistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodolistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todolist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TodolistAggregateArgs>(args: Subset<T, TodolistAggregateArgs>): Prisma.PrismaPromise<GetTodolistAggregateType<T>>

    /**
     * Group by Todolist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodolistGroupByArgs} args - Group by arguments.
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
      T extends TodolistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodolistGroupByArgs['orderBy'] }
        : { orderBy?: TodolistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TodolistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodolistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Todolist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TodolistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Todolist base type for findUnique actions
   */
  export type TodolistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * Filter, which Todolist to fetch.
     */
    where: TodolistWhereUniqueInput
  }

  /**
   * Todolist findUnique
   */
  export interface TodolistFindUniqueArgs extends TodolistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todolist findUniqueOrThrow
   */
  export type TodolistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * Filter, which Todolist to fetch.
     */
    where: TodolistWhereUniqueInput
  }


  /**
   * Todolist base type for findFirst actions
   */
  export type TodolistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * Filter, which Todolist to fetch.
     */
    where?: TodolistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolists to fetch.
     */
    orderBy?: Enumerable<TodolistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todolists.
     */
    cursor?: TodolistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todolists.
     */
    distinct?: Enumerable<TodolistScalarFieldEnum>
  }

  /**
   * Todolist findFirst
   */
  export interface TodolistFindFirstArgs extends TodolistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Todolist findFirstOrThrow
   */
  export type TodolistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * Filter, which Todolist to fetch.
     */
    where?: TodolistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolists to fetch.
     */
    orderBy?: Enumerable<TodolistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todolists.
     */
    cursor?: TodolistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todolists.
     */
    distinct?: Enumerable<TodolistScalarFieldEnum>
  }


  /**
   * Todolist findMany
   */
  export type TodolistFindManyArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * Filter, which Todolists to fetch.
     */
    where?: TodolistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todolists to fetch.
     */
    orderBy?: Enumerable<TodolistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todolists.
     */
    cursor?: TodolistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todolists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todolists.
     */
    skip?: number
    distinct?: Enumerable<TodolistScalarFieldEnum>
  }


  /**
   * Todolist create
   */
  export type TodolistCreateArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * The data needed to create a Todolist.
     */
    data: XOR<TodolistCreateInput, TodolistUncheckedCreateInput>
  }


  /**
   * Todolist createMany
   */
  export type TodolistCreateManyArgs = {
    /**
     * The data used to create many Todolists.
     */
    data: Enumerable<TodolistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Todolist update
   */
  export type TodolistUpdateArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * The data needed to update a Todolist.
     */
    data: XOR<TodolistUpdateInput, TodolistUncheckedUpdateInput>
    /**
     * Choose, which Todolist to update.
     */
    where: TodolistWhereUniqueInput
  }


  /**
   * Todolist updateMany
   */
  export type TodolistUpdateManyArgs = {
    /**
     * The data used to update Todolists.
     */
    data: XOR<TodolistUpdateManyMutationInput, TodolistUncheckedUpdateManyInput>
    /**
     * Filter which Todolists to update
     */
    where?: TodolistWhereInput
  }


  /**
   * Todolist upsert
   */
  export type TodolistUpsertArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * The filter to search for the Todolist to update in case it exists.
     */
    where: TodolistWhereUniqueInput
    /**
     * In case the Todolist found by the `where` argument doesn't exist, create a new Todolist with this data.
     */
    create: XOR<TodolistCreateInput, TodolistUncheckedCreateInput>
    /**
     * In case the Todolist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodolistUpdateInput, TodolistUncheckedUpdateInput>
  }


  /**
   * Todolist delete
   */
  export type TodolistDeleteArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
    /**
     * Filter which Todolist to delete.
     */
    where: TodolistWhereUniqueInput
  }


  /**
   * Todolist deleteMany
   */
  export type TodolistDeleteManyArgs = {
    /**
     * Filter which Todolists to delete
     */
    where?: TodolistWhereInput
  }


  /**
   * Todolist without action
   */
  export type TodolistArgs = {
    /**
     * Select specific fields to fetch from the Todolist
     */
    select?: TodolistSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DewKitchenCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DewKitchenCategoryScalarFieldEnum = (typeof DewKitchenCategoryScalarFieldEnum)[keyof typeof DewKitchenCategoryScalarFieldEnum]


  export const DewKitchenMenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    price: 'price',
    categoryName: 'categoryName',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DewKitchenMenuScalarFieldEnum = (typeof DewKitchenMenuScalarFieldEnum)[keyof typeof DewKitchenMenuScalarFieldEnum]


  export const DewKitchenOrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    tableId: 'tableId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DewKitchenOrderScalarFieldEnum = (typeof DewKitchenOrderScalarFieldEnum)[keyof typeof DewKitchenOrderScalarFieldEnum]


  export const DewOrderItemScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    orderId: 'orderId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DewOrderItemScalarFieldEnum = (typeof DewOrderItemScalarFieldEnum)[keyof typeof DewOrderItemScalarFieldEnum]


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


  export const TodolistScalarFieldEnum: {
    id: 'id',
    task: 'task',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TodolistScalarFieldEnum = (typeof TodolistScalarFieldEnum)[keyof typeof TodolistScalarFieldEnum]


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


  export type DewKitchenCategoryWhereInput = {
    AND?: Enumerable<DewKitchenCategoryWhereInput>
    OR?: Enumerable<DewKitchenCategoryWhereInput>
    NOT?: Enumerable<DewKitchenCategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    menus?: DewKitchenMenuListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type DewKitchenCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    menus?: DewKitchenMenuOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenCategoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type DewKitchenCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DewKitchenCategoryCountOrderByAggregateInput
    _avg?: DewKitchenCategoryAvgOrderByAggregateInput
    _max?: DewKitchenCategoryMaxOrderByAggregateInput
    _min?: DewKitchenCategoryMinOrderByAggregateInput
    _sum?: DewKitchenCategorySumOrderByAggregateInput
  }

  export type DewKitchenCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DewKitchenCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<DewKitchenCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DewKitchenCategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DewKitchenMenuWhereInput = {
    AND?: Enumerable<DewKitchenMenuWhereInput>
    OR?: Enumerable<DewKitchenMenuWhereInput>
    NOT?: Enumerable<DewKitchenMenuWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    price?: FloatFilter | number
    categoryKey?: XOR<DewKitchenCategoryRelationFilter, DewKitchenCategoryWhereInput> | null
    categoryName?: StringNullableFilter | string | null
    orderItems?: DewOrderItemListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type DewKitchenMenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryKey?: DewKitchenCategoryOrderByWithRelationInput
    categoryName?: SortOrder
    orderItems?: DewOrderItemOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenMenuWhereUniqueInput = {
    id?: number
  }

  export type DewKitchenMenuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DewKitchenMenuCountOrderByAggregateInput
    _avg?: DewKitchenMenuAvgOrderByAggregateInput
    _max?: DewKitchenMenuMaxOrderByAggregateInput
    _min?: DewKitchenMenuMinOrderByAggregateInput
    _sum?: DewKitchenMenuSumOrderByAggregateInput
  }

  export type DewKitchenMenuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DewKitchenMenuScalarWhereWithAggregatesInput>
    OR?: Enumerable<DewKitchenMenuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DewKitchenMenuScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    categoryName?: StringNullableWithAggregatesFilter | string | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DewKitchenOrderWhereInput = {
    AND?: Enumerable<DewKitchenOrderWhereInput>
    OR?: Enumerable<DewKitchenOrderWhereInput>
    NOT?: Enumerable<DewKitchenOrderWhereInput>
    id?: IntFilter | number
    status?: StringFilter | string
    tableId?: IntFilter | number
    items?: DewOrderItemListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type DewKitchenOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    items?: DewOrderItemOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenOrderWhereUniqueInput = {
    id?: number
  }

  export type DewKitchenOrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DewKitchenOrderCountOrderByAggregateInput
    _avg?: DewKitchenOrderAvgOrderByAggregateInput
    _max?: DewKitchenOrderMaxOrderByAggregateInput
    _min?: DewKitchenOrderMinOrderByAggregateInput
    _sum?: DewKitchenOrderSumOrderByAggregateInput
  }

  export type DewKitchenOrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DewKitchenOrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<DewKitchenOrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DewKitchenOrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    tableId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DewOrderItemWhereInput = {
    AND?: Enumerable<DewOrderItemWhereInput>
    OR?: Enumerable<DewOrderItemWhereInput>
    NOT?: Enumerable<DewOrderItemWhereInput>
    id?: IntFilter | number
    menu?: XOR<DewKitchenMenuRelationFilter, DewKitchenMenuWhereInput>
    menuId?: IntFilter | number
    order?: XOR<DewKitchenOrderRelationFilter, DewKitchenOrderWhereInput> | null
    orderId?: IntNullableFilter | number | null
    quantity?: IntFilter | number
    totalPrice?: FloatFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type DewOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    menu?: DewKitchenMenuOrderByWithRelationInput
    menuId?: SortOrder
    order?: DewKitchenOrderOrderByWithRelationInput
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewOrderItemWhereUniqueInput = {
    id?: number
  }

  export type DewOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DewOrderItemCountOrderByAggregateInput
    _avg?: DewOrderItemAvgOrderByAggregateInput
    _max?: DewOrderItemMaxOrderByAggregateInput
    _min?: DewOrderItemMinOrderByAggregateInput
    _sum?: DewOrderItemSumOrderByAggregateInput
  }

  export type DewOrderItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DewOrderItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<DewOrderItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DewOrderItemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    menuId?: IntWithAggregatesFilter | number
    orderId?: IntNullableWithAggregatesFilter | number | null
    quantity?: IntWithAggregatesFilter | number
    totalPrice?: FloatWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TodolistWhereInput = {
    AND?: Enumerable<TodolistWhereInput>
    OR?: Enumerable<TodolistWhereInput>
    NOT?: Enumerable<TodolistWhereInput>
    id?: IntFilter | number
    task?: StringFilter | string
    notes?: StringNullableFilter | string | null
    status?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TodolistOrderByWithRelationInput = {
    id?: SortOrder
    task?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodolistWhereUniqueInput = {
    id?: number
  }

  export type TodolistOrderByWithAggregationInput = {
    id?: SortOrder
    task?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TodolistCountOrderByAggregateInput
    _avg?: TodolistAvgOrderByAggregateInput
    _max?: TodolistMaxOrderByAggregateInput
    _min?: TodolistMinOrderByAggregateInput
    _sum?: TodolistSumOrderByAggregateInput
  }

  export type TodolistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TodolistScalarWhereWithAggregatesInput>
    OR?: Enumerable<TodolistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TodolistScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    task?: StringWithAggregatesFilter | string
    notes?: StringNullableWithAggregatesFilter | string | null
    status?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DewKitchenCategoryCreateInput = {
    name: string
    menus?: DewKitchenMenuCreateNestedManyWithoutCategoryKeyInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenCategoryUncheckedCreateInput = {
    id?: number
    name: string
    menus?: DewKitchenMenuUncheckedCreateNestedManyWithoutCategoryKeyInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    menus?: DewKitchenMenuUpdateManyWithoutCategoryKeyNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    menus?: DewKitchenMenuUncheckedUpdateManyWithoutCategoryKeyNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenCategoryCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenMenuCreateInput = {
    name: string
    image: string
    price: number
    categoryKey?: DewKitchenCategoryCreateNestedOneWithoutMenusInput
    orderItems?: DewOrderItemCreateNestedManyWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenMenuUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    orderItems?: DewOrderItemUncheckedCreateNestedManyWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenMenuUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryKey?: DewKitchenCategoryUpdateOneWithoutMenusNestedInput
    orderItems?: DewOrderItemUpdateManyWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenMenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: DewOrderItemUncheckedUpdateManyWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenMenuCreateManyInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenMenuUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenMenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenOrderCreateInput = {
    status?: string
    tableId: number
    items?: DewOrderItemCreateNestedManyWithoutOrderInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenOrderUncheckedCreateInput = {
    id?: number
    status?: string
    tableId: number
    items?: DewOrderItemUncheckedCreateNestedManyWithoutOrderInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenOrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    items?: DewOrderItemUpdateManyWithoutOrderNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    items?: DewOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenOrderCreateManyInput = {
    id?: number
    status?: string
    tableId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenOrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemCreateInput = {
    menu: DewKitchenMenuCreateNestedOneWithoutOrderItemsInput
    order?: DewKitchenOrderCreateNestedOneWithoutItemsInput
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemUncheckedCreateInput = {
    id?: number
    menuId: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemUpdateInput = {
    menu?: DewKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput
    order?: DewKitchenOrderUpdateOneWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemCreateManyInput = {
    id?: number
    menuId: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodolistCreateInput = {
    task: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodolistUncheckedCreateInput = {
    id?: number
    task: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodolistUpdateInput = {
    task?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodolistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodolistCreateManyInput = {
    id?: number
    task: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodolistUpdateManyMutationInput = {
    task?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodolistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DewKitchenMenuListRelationFilter = {
    every?: DewKitchenMenuWhereInput
    some?: DewKitchenMenuWhereInput
    none?: DewKitchenMenuWhereInput
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

  export type DewKitchenMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DewKitchenCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DewKitchenCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenCategorySumOrderByAggregateInput = {
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

  export type DewKitchenCategoryRelationFilter = {
    is?: DewKitchenCategoryWhereInput | null
    isNot?: DewKitchenCategoryWhereInput | null
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

  export type DewOrderItemListRelationFilter = {
    every?: DewOrderItemWhereInput
    some?: DewOrderItemWhereInput
    none?: DewOrderItemWhereInput
  }

  export type DewOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DewKitchenMenuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenMenuAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type DewKitchenMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenMenuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    categoryName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenMenuSumOrderByAggregateInput = {
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

  export type DewKitchenOrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type DewKitchenOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenOrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewKitchenOrderSumOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type DewKitchenMenuRelationFilter = {
    is?: DewKitchenMenuWhereInput
    isNot?: DewKitchenMenuWhereInput
  }

  export type DewKitchenOrderRelationFilter = {
    is?: DewKitchenOrderWhereInput | null
    isNot?: DewKitchenOrderWhereInput | null
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

  export type DewOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewOrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type DewOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    orderId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DewOrderItemSumOrderByAggregateInput = {
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

  export type TodolistCountOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodolistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TodolistMaxOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodolistMinOrderByAggregateInput = {
    id?: SortOrder
    task?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodolistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DewKitchenMenuCreateNestedManyWithoutCategoryKeyInput = {
    create?: XOR<Enumerable<DewKitchenMenuCreateWithoutCategoryKeyInput>, Enumerable<DewKitchenMenuUncheckedCreateWithoutCategoryKeyInput>>
    connectOrCreate?: Enumerable<DewKitchenMenuCreateOrConnectWithoutCategoryKeyInput>
    createMany?: DewKitchenMenuCreateManyCategoryKeyInputEnvelope
    connect?: Enumerable<DewKitchenMenuWhereUniqueInput>
  }

  export type DewKitchenMenuUncheckedCreateNestedManyWithoutCategoryKeyInput = {
    create?: XOR<Enumerable<DewKitchenMenuCreateWithoutCategoryKeyInput>, Enumerable<DewKitchenMenuUncheckedCreateWithoutCategoryKeyInput>>
    connectOrCreate?: Enumerable<DewKitchenMenuCreateOrConnectWithoutCategoryKeyInput>
    createMany?: DewKitchenMenuCreateManyCategoryKeyInputEnvelope
    connect?: Enumerable<DewKitchenMenuWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DewKitchenMenuUpdateManyWithoutCategoryKeyNestedInput = {
    create?: XOR<Enumerable<DewKitchenMenuCreateWithoutCategoryKeyInput>, Enumerable<DewKitchenMenuUncheckedCreateWithoutCategoryKeyInput>>
    connectOrCreate?: Enumerable<DewKitchenMenuCreateOrConnectWithoutCategoryKeyInput>
    upsert?: Enumerable<DewKitchenMenuUpsertWithWhereUniqueWithoutCategoryKeyInput>
    createMany?: DewKitchenMenuCreateManyCategoryKeyInputEnvelope
    set?: Enumerable<DewKitchenMenuWhereUniqueInput>
    disconnect?: Enumerable<DewKitchenMenuWhereUniqueInput>
    delete?: Enumerable<DewKitchenMenuWhereUniqueInput>
    connect?: Enumerable<DewKitchenMenuWhereUniqueInput>
    update?: Enumerable<DewKitchenMenuUpdateWithWhereUniqueWithoutCategoryKeyInput>
    updateMany?: Enumerable<DewKitchenMenuUpdateManyWithWhereWithoutCategoryKeyInput>
    deleteMany?: Enumerable<DewKitchenMenuScalarWhereInput>
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

  export type DewKitchenMenuUncheckedUpdateManyWithoutCategoryKeyNestedInput = {
    create?: XOR<Enumerable<DewKitchenMenuCreateWithoutCategoryKeyInput>, Enumerable<DewKitchenMenuUncheckedCreateWithoutCategoryKeyInput>>
    connectOrCreate?: Enumerable<DewKitchenMenuCreateOrConnectWithoutCategoryKeyInput>
    upsert?: Enumerable<DewKitchenMenuUpsertWithWhereUniqueWithoutCategoryKeyInput>
    createMany?: DewKitchenMenuCreateManyCategoryKeyInputEnvelope
    set?: Enumerable<DewKitchenMenuWhereUniqueInput>
    disconnect?: Enumerable<DewKitchenMenuWhereUniqueInput>
    delete?: Enumerable<DewKitchenMenuWhereUniqueInput>
    connect?: Enumerable<DewKitchenMenuWhereUniqueInput>
    update?: Enumerable<DewKitchenMenuUpdateWithWhereUniqueWithoutCategoryKeyInput>
    updateMany?: Enumerable<DewKitchenMenuUpdateManyWithWhereWithoutCategoryKeyInput>
    deleteMany?: Enumerable<DewKitchenMenuScalarWhereInput>
  }

  export type DewKitchenCategoryCreateNestedOneWithoutMenusInput = {
    create?: XOR<DewKitchenCategoryCreateWithoutMenusInput, DewKitchenCategoryUncheckedCreateWithoutMenusInput>
    connectOrCreate?: DewKitchenCategoryCreateOrConnectWithoutMenusInput
    connect?: DewKitchenCategoryWhereUniqueInput
  }

  export type DewOrderItemCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<DewOrderItemCreateWithoutMenuInput>, Enumerable<DewOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<DewOrderItemCreateOrConnectWithoutMenuInput>
    createMany?: DewOrderItemCreateManyMenuInputEnvelope
    connect?: Enumerable<DewOrderItemWhereUniqueInput>
  }

  export type DewOrderItemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<DewOrderItemCreateWithoutMenuInput>, Enumerable<DewOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<DewOrderItemCreateOrConnectWithoutMenuInput>
    createMany?: DewOrderItemCreateManyMenuInputEnvelope
    connect?: Enumerable<DewOrderItemWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DewKitchenCategoryUpdateOneWithoutMenusNestedInput = {
    create?: XOR<DewKitchenCategoryCreateWithoutMenusInput, DewKitchenCategoryUncheckedCreateWithoutMenusInput>
    connectOrCreate?: DewKitchenCategoryCreateOrConnectWithoutMenusInput
    upsert?: DewKitchenCategoryUpsertWithoutMenusInput
    disconnect?: boolean
    delete?: boolean
    connect?: DewKitchenCategoryWhereUniqueInput
    update?: XOR<DewKitchenCategoryUpdateWithoutMenusInput, DewKitchenCategoryUncheckedUpdateWithoutMenusInput>
  }

  export type DewOrderItemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<DewOrderItemCreateWithoutMenuInput>, Enumerable<DewOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<DewOrderItemCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<DewOrderItemUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: DewOrderItemCreateManyMenuInputEnvelope
    set?: Enumerable<DewOrderItemWhereUniqueInput>
    disconnect?: Enumerable<DewOrderItemWhereUniqueInput>
    delete?: Enumerable<DewOrderItemWhereUniqueInput>
    connect?: Enumerable<DewOrderItemWhereUniqueInput>
    update?: Enumerable<DewOrderItemUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<DewOrderItemUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<DewOrderItemScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DewOrderItemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<DewOrderItemCreateWithoutMenuInput>, Enumerable<DewOrderItemUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<DewOrderItemCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<DewOrderItemUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: DewOrderItemCreateManyMenuInputEnvelope
    set?: Enumerable<DewOrderItemWhereUniqueInput>
    disconnect?: Enumerable<DewOrderItemWhereUniqueInput>
    delete?: Enumerable<DewOrderItemWhereUniqueInput>
    connect?: Enumerable<DewOrderItemWhereUniqueInput>
    update?: Enumerable<DewOrderItemUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<DewOrderItemUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<DewOrderItemScalarWhereInput>
  }

  export type DewOrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<DewOrderItemCreateWithoutOrderInput>, Enumerable<DewOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<DewOrderItemCreateOrConnectWithoutOrderInput>
    createMany?: DewOrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<DewOrderItemWhereUniqueInput>
  }

  export type DewOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<DewOrderItemCreateWithoutOrderInput>, Enumerable<DewOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<DewOrderItemCreateOrConnectWithoutOrderInput>
    createMany?: DewOrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<DewOrderItemWhereUniqueInput>
  }

  export type DewOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<DewOrderItemCreateWithoutOrderInput>, Enumerable<DewOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<DewOrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<DewOrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: DewOrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<DewOrderItemWhereUniqueInput>
    disconnect?: Enumerable<DewOrderItemWhereUniqueInput>
    delete?: Enumerable<DewOrderItemWhereUniqueInput>
    connect?: Enumerable<DewOrderItemWhereUniqueInput>
    update?: Enumerable<DewOrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<DewOrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<DewOrderItemScalarWhereInput>
  }

  export type DewOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<DewOrderItemCreateWithoutOrderInput>, Enumerable<DewOrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<DewOrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<DewOrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: DewOrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<DewOrderItemWhereUniqueInput>
    disconnect?: Enumerable<DewOrderItemWhereUniqueInput>
    delete?: Enumerable<DewOrderItemWhereUniqueInput>
    connect?: Enumerable<DewOrderItemWhereUniqueInput>
    update?: Enumerable<DewOrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<DewOrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<DewOrderItemScalarWhereInput>
  }

  export type DewKitchenMenuCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<DewKitchenMenuCreateWithoutOrderItemsInput, DewKitchenMenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: DewKitchenMenuCreateOrConnectWithoutOrderItemsInput
    connect?: DewKitchenMenuWhereUniqueInput
  }

  export type DewKitchenOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<DewKitchenOrderCreateWithoutItemsInput, DewKitchenOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DewKitchenOrderCreateOrConnectWithoutItemsInput
    connect?: DewKitchenOrderWhereUniqueInput
  }

  export type DewKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<DewKitchenMenuCreateWithoutOrderItemsInput, DewKitchenMenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: DewKitchenMenuCreateOrConnectWithoutOrderItemsInput
    upsert?: DewKitchenMenuUpsertWithoutOrderItemsInput
    connect?: DewKitchenMenuWhereUniqueInput
    update?: XOR<DewKitchenMenuUpdateWithoutOrderItemsInput, DewKitchenMenuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type DewKitchenOrderUpdateOneWithoutItemsNestedInput = {
    create?: XOR<DewKitchenOrderCreateWithoutItemsInput, DewKitchenOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: DewKitchenOrderCreateOrConnectWithoutItemsInput
    upsert?: DewKitchenOrderUpsertWithoutItemsInput
    disconnect?: boolean
    delete?: boolean
    connect?: DewKitchenOrderWhereUniqueInput
    update?: XOR<DewKitchenOrderUpdateWithoutItemsInput, DewKitchenOrderUncheckedUpdateWithoutItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type DewKitchenMenuCreateWithoutCategoryKeyInput = {
    name: string
    image: string
    price: number
    orderItems?: DewOrderItemCreateNestedManyWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenMenuUncheckedCreateWithoutCategoryKeyInput = {
    id?: number
    name: string
    image: string
    price: number
    orderItems?: DewOrderItemUncheckedCreateNestedManyWithoutMenuInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenMenuCreateOrConnectWithoutCategoryKeyInput = {
    where: DewKitchenMenuWhereUniqueInput
    create: XOR<DewKitchenMenuCreateWithoutCategoryKeyInput, DewKitchenMenuUncheckedCreateWithoutCategoryKeyInput>
  }

  export type DewKitchenMenuCreateManyCategoryKeyInputEnvelope = {
    data: Enumerable<DewKitchenMenuCreateManyCategoryKeyInput>
    skipDuplicates?: boolean
  }

  export type DewKitchenMenuUpsertWithWhereUniqueWithoutCategoryKeyInput = {
    where: DewKitchenMenuWhereUniqueInput
    update: XOR<DewKitchenMenuUpdateWithoutCategoryKeyInput, DewKitchenMenuUncheckedUpdateWithoutCategoryKeyInput>
    create: XOR<DewKitchenMenuCreateWithoutCategoryKeyInput, DewKitchenMenuUncheckedCreateWithoutCategoryKeyInput>
  }

  export type DewKitchenMenuUpdateWithWhereUniqueWithoutCategoryKeyInput = {
    where: DewKitchenMenuWhereUniqueInput
    data: XOR<DewKitchenMenuUpdateWithoutCategoryKeyInput, DewKitchenMenuUncheckedUpdateWithoutCategoryKeyInput>
  }

  export type DewKitchenMenuUpdateManyWithWhereWithoutCategoryKeyInput = {
    where: DewKitchenMenuScalarWhereInput
    data: XOR<DewKitchenMenuUpdateManyMutationInput, DewKitchenMenuUncheckedUpdateManyWithoutMenusInput>
  }

  export type DewKitchenMenuScalarWhereInput = {
    AND?: Enumerable<DewKitchenMenuScalarWhereInput>
    OR?: Enumerable<DewKitchenMenuScalarWhereInput>
    NOT?: Enumerable<DewKitchenMenuScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    price?: FloatFilter | number
    categoryName?: StringNullableFilter | string | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type DewKitchenCategoryCreateWithoutMenusInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenCategoryUncheckedCreateWithoutMenusInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenCategoryCreateOrConnectWithoutMenusInput = {
    where: DewKitchenCategoryWhereUniqueInput
    create: XOR<DewKitchenCategoryCreateWithoutMenusInput, DewKitchenCategoryUncheckedCreateWithoutMenusInput>
  }

  export type DewOrderItemCreateWithoutMenuInput = {
    order?: DewKitchenOrderCreateNestedOneWithoutItemsInput
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemUncheckedCreateWithoutMenuInput = {
    id?: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemCreateOrConnectWithoutMenuInput = {
    where: DewOrderItemWhereUniqueInput
    create: XOR<DewOrderItemCreateWithoutMenuInput, DewOrderItemUncheckedCreateWithoutMenuInput>
  }

  export type DewOrderItemCreateManyMenuInputEnvelope = {
    data: Enumerable<DewOrderItemCreateManyMenuInput>
    skipDuplicates?: boolean
  }

  export type DewKitchenCategoryUpsertWithoutMenusInput = {
    update: XOR<DewKitchenCategoryUpdateWithoutMenusInput, DewKitchenCategoryUncheckedUpdateWithoutMenusInput>
    create: XOR<DewKitchenCategoryCreateWithoutMenusInput, DewKitchenCategoryUncheckedCreateWithoutMenusInput>
  }

  export type DewKitchenCategoryUpdateWithoutMenusInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenCategoryUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemUpsertWithWhereUniqueWithoutMenuInput = {
    where: DewOrderItemWhereUniqueInput
    update: XOR<DewOrderItemUpdateWithoutMenuInput, DewOrderItemUncheckedUpdateWithoutMenuInput>
    create: XOR<DewOrderItemCreateWithoutMenuInput, DewOrderItemUncheckedCreateWithoutMenuInput>
  }

  export type DewOrderItemUpdateWithWhereUniqueWithoutMenuInput = {
    where: DewOrderItemWhereUniqueInput
    data: XOR<DewOrderItemUpdateWithoutMenuInput, DewOrderItemUncheckedUpdateWithoutMenuInput>
  }

  export type DewOrderItemUpdateManyWithWhereWithoutMenuInput = {
    where: DewOrderItemScalarWhereInput
    data: XOR<DewOrderItemUpdateManyMutationInput, DewOrderItemUncheckedUpdateManyWithoutOrderItemsInput>
  }

  export type DewOrderItemScalarWhereInput = {
    AND?: Enumerable<DewOrderItemScalarWhereInput>
    OR?: Enumerable<DewOrderItemScalarWhereInput>
    NOT?: Enumerable<DewOrderItemScalarWhereInput>
    id?: IntFilter | number
    menuId?: IntFilter | number
    orderId?: IntNullableFilter | number | null
    quantity?: IntFilter | number
    totalPrice?: FloatFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type DewOrderItemCreateWithoutOrderInput = {
    menu: DewKitchenMenuCreateNestedOneWithoutOrderItemsInput
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    menuId: number
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemCreateOrConnectWithoutOrderInput = {
    where: DewOrderItemWhereUniqueInput
    create: XOR<DewOrderItemCreateWithoutOrderInput, DewOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type DewOrderItemCreateManyOrderInputEnvelope = {
    data: Enumerable<DewOrderItemCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type DewOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: DewOrderItemWhereUniqueInput
    update: XOR<DewOrderItemUpdateWithoutOrderInput, DewOrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<DewOrderItemCreateWithoutOrderInput, DewOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type DewOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: DewOrderItemWhereUniqueInput
    data: XOR<DewOrderItemUpdateWithoutOrderInput, DewOrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type DewOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: DewOrderItemScalarWhereInput
    data: XOR<DewOrderItemUpdateManyMutationInput, DewOrderItemUncheckedUpdateManyWithoutItemsInput>
  }

  export type DewKitchenMenuCreateWithoutOrderItemsInput = {
    name: string
    image: string
    price: number
    categoryKey?: DewKitchenCategoryCreateNestedOneWithoutMenusInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenMenuUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    image: string
    price: number
    categoryName?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenMenuCreateOrConnectWithoutOrderItemsInput = {
    where: DewKitchenMenuWhereUniqueInput
    create: XOR<DewKitchenMenuCreateWithoutOrderItemsInput, DewKitchenMenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type DewKitchenOrderCreateWithoutItemsInput = {
    status?: string
    tableId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenOrderUncheckedCreateWithoutItemsInput = {
    id?: number
    status?: string
    tableId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenOrderCreateOrConnectWithoutItemsInput = {
    where: DewKitchenOrderWhereUniqueInput
    create: XOR<DewKitchenOrderCreateWithoutItemsInput, DewKitchenOrderUncheckedCreateWithoutItemsInput>
  }

  export type DewKitchenMenuUpsertWithoutOrderItemsInput = {
    update: XOR<DewKitchenMenuUpdateWithoutOrderItemsInput, DewKitchenMenuUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<DewKitchenMenuCreateWithoutOrderItemsInput, DewKitchenMenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type DewKitchenMenuUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryKey?: DewKitchenCategoryUpdateOneWithoutMenusNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenMenuUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryName?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenOrderUpsertWithoutItemsInput = {
    update: XOR<DewKitchenOrderUpdateWithoutItemsInput, DewKitchenOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<DewKitchenOrderCreateWithoutItemsInput, DewKitchenOrderUncheckedCreateWithoutItemsInput>
  }

  export type DewKitchenOrderUpdateWithoutItemsInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenOrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenMenuCreateManyCategoryKeyInput = {
    id?: number
    name: string
    image: string
    price: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewKitchenMenuUpdateWithoutCategoryKeyInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: DewOrderItemUpdateManyWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenMenuUncheckedUpdateWithoutCategoryKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: DewOrderItemUncheckedUpdateManyWithoutMenuNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewKitchenMenuUncheckedUpdateManyWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemCreateManyMenuInput = {
    id?: number
    orderId?: number | null
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemUpdateWithoutMenuInput = {
    order?: DewKitchenOrderUpdateOneWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemUncheckedUpdateManyWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemCreateManyOrderInput = {
    id?: number
    menuId: number
    quantity: number
    totalPrice: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DewOrderItemUpdateWithoutOrderInput = {
    menu?: DewKitchenMenuUpdateOneRequiredWithoutOrderItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DewOrderItemUncheckedUpdateManyWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
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