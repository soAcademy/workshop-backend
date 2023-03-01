
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model category
 * 
 */
export type category = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model orderItems
 * 
 */
export type orderItems = {
  id: number
  menuId: number
  quantity: number
  createdAt: Date
  updatedAt: Date
  orderId: number
}

/**
 * Model orders
 * 
 */
export type orders = {
  id: number
  table_id: number
  status: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model menu
 * 
 */
export type menu = {
  id: number
  categoryId: number
  name: string | null
  image: string | null
  price: number | null
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
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<GlobalReject>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **orderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.orderItemsDelegate<GlobalReject>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<GlobalReject>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.menuDelegate<GlobalReject>;
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
    category: 'category',
    orderItems: 'orderItems',
    orders: 'orders',
    menu: 'menu'
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
    menu: number
  }

  export type CategoryCountOutputTypeSelect = {
    menu?: boolean
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
   * Count Type OrdersCountOutputType
   */


  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect = {
    order_items?: boolean
  }

  export type OrdersCountOutputTypeGetPayload<S extends boolean | null | undefined | OrdersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrdersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrdersCountOutputTypeArgs)
    ? OrdersCountOutputType 
    : S extends { select: any } & (OrdersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrdersCountOutputType ? OrdersCountOutputType[P] : never
  } 
      : OrdersCountOutputType




  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect | null
  }



  /**
   * Count Type MenuCountOutputType
   */


  export type MenuCountOutputType = {
    items: number
  }

  export type MenuCountOutputTypeSelect = {
    items?: boolean
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
   * Models
   */

  /**
   * Model category
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
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
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
    where?: categoryWhereInput
    orderBy?: Enumerable<categoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: categoryScalarWhereWithAggregatesInput
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


  export type categorySelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menu?: boolean | category$menuArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type categoryInclude = {
    menu?: boolean | category$menuArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type categoryGetPayload<S extends boolean | null | undefined | categoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? category :
    S extends undefined ? never :
    S extends { include: any } & (categoryArgs | categoryFindManyArgs)
    ? category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu' ? Array < menuGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (categoryArgs | categoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu' ? Array < menuGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof category ? category[P] : never
  } 
      : category


  type categoryCountArgs = 
    Omit<categoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'category'> extends True ? Prisma__categoryClient<categoryGetPayload<T>> : Prisma__categoryClient<categoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, categoryFindUniqueOrThrowArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'category'> extends True ? Prisma__categoryClient<categoryGetPayload<T>> : Prisma__categoryClient<categoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends categoryFindManyArgs>(
      args?: SelectSubset<T, categoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<categoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends categoryCreateArgs>(
      args: SelectSubset<T, categoryCreateArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoryCreateManyArgs>(
      args?: SelectSubset<T, categoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends categoryDeleteArgs>(
      args: SelectSubset<T, categoryDeleteArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
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
    update<T extends categoryUpdateArgs>(
      args: SelectSubset<T, categoryUpdateArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoryDeleteManyArgs>(
      args?: SelectSubset<T, categoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends categoryUpdateManyArgs>(
      args: SelectSubset<T, categoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
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
    upsert<T extends categoryUpsertArgs>(
      args: SelectSubset<T, categoryUpsertArgs>
    ): Prisma__categoryClient<categoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
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
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    menu<T extends category$menuArgs= {}>(args?: Subset<T, category$menuArgs>): Prisma.PrismaPromise<Array<menuGetPayload<T>>| Null>;

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
   * category base type for findUnique actions
   */
  export type categoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUnique
   */
  export interface categoryFindUniqueArgs extends categoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category base type for findFirst actions
   */
  export type categoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * category findFirst
   */
  export interface categoryFindFirstArgs extends categoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * category findMany
   */
  export type categoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: Enumerable<categoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * category create
   */
  export type categoryCreateArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }


  /**
   * category createMany
   */
  export type categoryCreateManyArgs = {
    /**
     * The data used to create many categories.
     */
    data: Enumerable<categoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * category update
   */
  export type categoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
  }


  /**
   * category upsert
   */
  export type categoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }


  /**
   * category delete
   */
  export type categoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }


  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
  }


  /**
   * category.menu
   */
  export type category$menuArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    where?: menuWhereInput
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    cursor?: menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * category without action
   */
  export type categoryArgs = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude | null
  }



  /**
   * Model orderItems
   */


  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
    quantity: number | null
    orderId: number | null
  }

  export type OrderItemsSumAggregateOutputType = {
    id: number | null
    menuId: number | null
    quantity: number | null
    orderId: number | null
  }

  export type OrderItemsMinAggregateOutputType = {
    id: number | null
    menuId: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: number | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    id: number | null
    menuId: number | null
    quantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: number | null
  }

  export type OrderItemsCountAggregateOutputType = {
    id: number
    menuId: number
    quantity: number
    createdAt: number
    updatedAt: number
    orderId: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    id?: true
    menuId?: true
    quantity?: true
    orderId?: true
  }

  export type OrderItemsSumAggregateInputType = {
    id?: true
    menuId?: true
    quantity?: true
    orderId?: true
  }

  export type OrderItemsMinAggregateInputType = {
    id?: true
    menuId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    id?: true
    menuId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
  }

  export type OrderItemsCountAggregateInputType = {
    id?: true
    menuId?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs = {
    /**
     * Filter which orderItems to aggregate.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: Enumerable<orderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderItems
    **/
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type OrderItemsGroupByArgs = {
    where?: orderItemsWhereInput
    orderBy?: Enumerable<orderItemsOrderByWithAggregationInput>
    by: OrderItemsScalarFieldEnum[]
    having?: orderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }


  export type OrderItemsGroupByOutputType = {
    id: number
    menuId: number
    quantity: number
    createdAt: Date
    updatedAt: Date
    orderId: number
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type orderItemsSelect = {
    id?: boolean
    menuId?: boolean
    menu_id?: boolean | menuArgs
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order_id?: boolean | ordersArgs
    orderId?: boolean
  }


  export type orderItemsInclude = {
    menu_id?: boolean | menuArgs
    order_id?: boolean | ordersArgs
  }

  export type orderItemsGetPayload<S extends boolean | null | undefined | orderItemsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? orderItems :
    S extends undefined ? never :
    S extends { include: any } & (orderItemsArgs | orderItemsFindManyArgs)
    ? orderItems  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu_id' ? menuGetPayload<S['include'][P]> :
        P extends 'order_id' ? ordersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (orderItemsArgs | orderItemsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu_id' ? menuGetPayload<S['select'][P]> :
        P extends 'order_id' ? ordersGetPayload<S['select'][P]> :  P extends keyof orderItems ? orderItems[P] : never
  } 
      : orderItems


  type orderItemsCountArgs = 
    Omit<orderItemsFindManyArgs, 'select' | 'include'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface orderItemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {orderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends orderItemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, orderItemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'orderItems'> extends True ? Prisma__orderItemsClient<orderItemsGetPayload<T>> : Prisma__orderItemsClient<orderItemsGetPayload<T> | null, null>

    /**
     * Find one OrderItems that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {orderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends orderItemsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, orderItemsFindUniqueOrThrowArgs>
    ): Prisma__orderItemsClient<orderItemsGetPayload<T>>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends orderItemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, orderItemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'orderItems'> extends True ? Prisma__orderItemsClient<orderItemsGetPayload<T>> : Prisma__orderItemsClient<orderItemsGetPayload<T> | null, null>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends orderItemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, orderItemsFindFirstOrThrowArgs>
    ): Prisma__orderItemsClient<orderItemsGetPayload<T>>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends orderItemsFindManyArgs>(
      args?: SelectSubset<T, orderItemsFindManyArgs>
    ): Prisma.PrismaPromise<Array<orderItemsGetPayload<T>>>

    /**
     * Create a OrderItems.
     * @param {orderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
    **/
    create<T extends orderItemsCreateArgs>(
      args: SelectSubset<T, orderItemsCreateArgs>
    ): Prisma__orderItemsClient<orderItemsGetPayload<T>>

    /**
     * Create many OrderItems.
     *     @param {orderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItems = await prisma.orderItems.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends orderItemsCreateManyArgs>(
      args?: SelectSubset<T, orderItemsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItems.
     * @param {orderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
    **/
    delete<T extends orderItemsDeleteArgs>(
      args: SelectSubset<T, orderItemsDeleteArgs>
    ): Prisma__orderItemsClient<orderItemsGetPayload<T>>

    /**
     * Update one OrderItems.
     * @param {orderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends orderItemsUpdateArgs>(
      args: SelectSubset<T, orderItemsUpdateArgs>
    ): Prisma__orderItemsClient<orderItemsGetPayload<T>>

    /**
     * Delete zero or more OrderItems.
     * @param {orderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends orderItemsDeleteManyArgs>(
      args?: SelectSubset<T, orderItemsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends orderItemsUpdateManyArgs>(
      args: SelectSubset<T, orderItemsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItems.
     * @param {orderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
    **/
    upsert<T extends orderItemsUpsertArgs>(
      args: SelectSubset<T, orderItemsUpsertArgs>
    ): Prisma__orderItemsClient<orderItemsGetPayload<T>>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends orderItemsCountArgs>(
      args?: Subset<T, orderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
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
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for orderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__orderItemsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    menu_id<T extends menuArgs= {}>(args?: Subset<T, menuArgs>): Prisma__menuClient<menuGetPayload<T> | Null>;

    order_id<T extends ordersArgs= {}>(args?: Subset<T, ordersArgs>): Prisma__ordersClient<ordersGetPayload<T> | Null>;

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
   * orderItems base type for findUnique actions
   */
  export type orderItemsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * Filter, which orderItems to fetch.
     */
    where: orderItemsWhereUniqueInput
  }

  /**
   * orderItems findUnique
   */
  export interface orderItemsFindUniqueArgs extends orderItemsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * orderItems findUniqueOrThrow
   */
  export type orderItemsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * Filter, which orderItems to fetch.
     */
    where: orderItemsWhereUniqueInput
  }


  /**
   * orderItems base type for findFirst actions
   */
  export type orderItemsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: Enumerable<orderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: Enumerable<OrderItemsScalarFieldEnum>
  }

  /**
   * orderItems findFirst
   */
  export interface orderItemsFindFirstArgs extends orderItemsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * orderItems findFirstOrThrow
   */
  export type orderItemsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: Enumerable<orderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: Enumerable<OrderItemsScalarFieldEnum>
  }


  /**
   * orderItems findMany
   */
  export type orderItemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: Enumerable<orderItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderItems.
     */
    cursor?: orderItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    distinct?: Enumerable<OrderItemsScalarFieldEnum>
  }


  /**
   * orderItems create
   */
  export type orderItemsCreateArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * The data needed to create a orderItems.
     */
    data: XOR<orderItemsCreateInput, orderItemsUncheckedCreateInput>
  }


  /**
   * orderItems createMany
   */
  export type orderItemsCreateManyArgs = {
    /**
     * The data used to create many orderItems.
     */
    data: Enumerable<orderItemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * orderItems update
   */
  export type orderItemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * The data needed to update a orderItems.
     */
    data: XOR<orderItemsUpdateInput, orderItemsUncheckedUpdateInput>
    /**
     * Choose, which orderItems to update.
     */
    where: orderItemsWhereUniqueInput
  }


  /**
   * orderItems updateMany
   */
  export type orderItemsUpdateManyArgs = {
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemsWhereInput
  }


  /**
   * orderItems upsert
   */
  export type orderItemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * The filter to search for the orderItems to update in case it exists.
     */
    where: orderItemsWhereUniqueInput
    /**
     * In case the orderItems found by the `where` argument doesn't exist, create a new orderItems with this data.
     */
    create: XOR<orderItemsCreateInput, orderItemsUncheckedCreateInput>
    /**
     * In case the orderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderItemsUpdateInput, orderItemsUncheckedUpdateInput>
  }


  /**
   * orderItems delete
   */
  export type orderItemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    /**
     * Filter which orderItems to delete.
     */
    where: orderItemsWhereUniqueInput
  }


  /**
   * orderItems deleteMany
   */
  export type orderItemsDeleteManyArgs = {
    /**
     * Filter which orderItems to delete
     */
    where?: orderItemsWhereInput
  }


  /**
   * orderItems without action
   */
  export type orderItemsArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
  }



  /**
   * Model orders
   */


  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    table_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    table_id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    table_id: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    table_id: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    table_id: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    table_id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    table_id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    table_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    table_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    table_id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs = {
    where?: ordersWhereInput
    orderBy?: Enumerable<ordersOrderByWithAggregationInput>
    by: OrdersScalarFieldEnum[]
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }


  export type OrdersGroupByOutputType = {
    id: number
    table_id: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect = {
    id?: boolean
    table_id?: boolean
    status?: boolean
    order_items?: boolean | orders$order_itemsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | OrdersCountOutputTypeArgs
  }


  export type ordersInclude = {
    order_items?: boolean | orders$order_itemsArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  }

  export type ordersGetPayload<S extends boolean | null | undefined | ordersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? orders :
    S extends undefined ? never :
    S extends { include: any } & (ordersArgs | ordersFindManyArgs)
    ? orders  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'order_items' ? Array < orderItemsGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ordersArgs | ordersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'order_items' ? Array < orderItemsGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof orders ? orders[P] : never
  } 
      : orders


  type ordersCountArgs = 
    Omit<ordersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ordersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'orders'> extends True ? Prisma__ordersClient<ordersGetPayload<T>> : Prisma__ordersClient<ordersGetPayload<T> | null, null>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ordersFindUniqueOrThrowArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ordersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'orders'> extends True ? Prisma__ordersClient<ordersGetPayload<T>> : Prisma__ordersClient<ordersGetPayload<T> | null, null>

    /**
     * Find the first Orders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs>(
      args?: SelectSubset<T, ordersFindManyArgs>
    ): Prisma.PrismaPromise<Array<ordersGetPayload<T>>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs>(
      args: SelectSubset<T, ordersCreateArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs>(
      args?: SelectSubset<T, ordersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs>(
      args: SelectSubset<T, ordersDeleteArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs>(
      args: SelectSubset<T, ordersUpdateArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs>(
      args?: SelectSubset<T, ordersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs>(
      args: SelectSubset<T, ordersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs>(
      args: SelectSubset<T, ordersUpsertArgs>
    ): Prisma__ordersClient<ordersGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ordersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    order_items<T extends orders$order_itemsArgs= {}>(args?: Subset<T, orders$order_itemsArgs>): Prisma.PrismaPromise<Array<orderItemsGetPayload<T>>| Null>;

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
   * orders base type for findUnique actions
   */
  export type ordersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUnique
   */
  export interface ordersFindUniqueArgs extends ordersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders base type for findFirst actions
   */
  export type ordersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }

  /**
   * orders findFirst
   */
  export interface ordersFindFirstArgs extends ordersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * orders findMany
   */
  export type ordersFindManyArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: Enumerable<ordersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * orders create
   */
  export type ordersCreateArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs = {
    /**
     * The data used to create many orders.
     */
    data: Enumerable<ordersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
  }


  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    where?: orderItemsWhereInput
    orderBy?: Enumerable<orderItemsOrderByWithRelationInput>
    cursor?: orderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemsScalarFieldEnum>
  }


  /**
   * orders without action
   */
  export type ordersArgs = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude | null
  }



  /**
   * Model menu
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
    categoryId: number | null
    price: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    price: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    image: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    name: string | null
    image: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    image: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    categoryId?: true
    price?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    categoryId?: true
    price?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    image?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    image?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    image?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
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
    where?: menuWhereInput
    orderBy?: Enumerable<menuOrderByWithAggregationInput>
    by: MenuScalarFieldEnum[]
    having?: menuScalarWhereWithAggregatesInput
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
    categoryId: number
    name: string | null
    image: string | null
    price: number | null
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


  export type menuSelect = {
    id?: boolean
    category?: boolean | categoryArgs
    categoryId?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | menu$itemsArgs
    _count?: boolean | MenuCountOutputTypeArgs
  }


  export type menuInclude = {
    category?: boolean | categoryArgs
    items?: boolean | menu$itemsArgs
    _count?: boolean | MenuCountOutputTypeArgs
  }

  export type menuGetPayload<S extends boolean | null | undefined | menuArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? menu :
    S extends undefined ? never :
    S extends { include: any } & (menuArgs | menuFindManyArgs)
    ? menu  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? categoryGetPayload<S['include'][P]> :
        P extends 'items' ? Array < orderItemsGetPayload<S['include'][P]>>  :
        P extends '_count' ? MenuCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (menuArgs | menuFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? categoryGetPayload<S['select'][P]> :
        P extends 'items' ? Array < orderItemsGetPayload<S['select'][P]>>  :
        P extends '_count' ? MenuCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof menu ? menu[P] : never
  } 
      : menu


  type menuCountArgs = 
    Omit<menuFindManyArgs, 'select' | 'include'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface menuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends menuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, menuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'menu'> extends True ? Prisma__menuClient<menuGetPayload<T>> : Prisma__menuClient<menuGetPayload<T> | null, null>

    /**
     * Find one Menu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, menuFindUniqueOrThrowArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends menuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, menuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'menu'> extends True ? Prisma__menuClient<menuGetPayload<T>> : Prisma__menuClient<menuGetPayload<T> | null, null>

    /**
     * Find the first Menu that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, menuFindFirstOrThrowArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends menuFindManyArgs>(
      args?: SelectSubset<T, menuFindManyArgs>
    ): Prisma.PrismaPromise<Array<menuGetPayload<T>>>

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends menuCreateArgs>(
      args: SelectSubset<T, menuCreateArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Create many Menus.
     *     @param {menuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends menuCreateManyArgs>(
      args?: SelectSubset<T, menuCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends menuDeleteArgs>(
      args: SelectSubset<T, menuDeleteArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
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
    update<T extends menuUpdateArgs>(
      args: SelectSubset<T, menuUpdateArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends menuDeleteManyArgs>(
      args?: SelectSubset<T, menuDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends menuUpdateManyArgs>(
      args: SelectSubset<T, menuUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
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
    upsert<T extends menuUpsertArgs>(
      args: SelectSubset<T, menuUpsertArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
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
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__menuClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    category<T extends categoryArgs= {}>(args?: Subset<T, categoryArgs>): Prisma__categoryClient<categoryGetPayload<T> | Null>;

    items<T extends menu$itemsArgs= {}>(args?: Subset<T, menu$itemsArgs>): Prisma.PrismaPromise<Array<orderItemsGetPayload<T>>| Null>;

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
   * menu base type for findUnique actions
   */
  export type menuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findUnique
   */
  export interface menuFindUniqueArgs extends menuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }


  /**
   * menu base type for findFirst actions
   */
  export type menuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: Enumerable<MenuScalarFieldEnum>
  }

  /**
   * menu findFirst
   */
  export interface menuFindFirstArgs extends menuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * menu findMany
   */
  export type menuFindManyArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * menu create
   */
  export type menuCreateArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * The data needed to create a menu.
     */
    data: XOR<menuCreateInput, menuUncheckedCreateInput>
  }


  /**
   * menu createMany
   */
  export type menuCreateManyArgs = {
    /**
     * The data used to create many menus.
     */
    data: Enumerable<menuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * menu update
   */
  export type menuUpdateArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput
  }


  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
  }


  /**
   * menu upsert
   */
  export type menuUpsertArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>
  }


  /**
   * menu delete
   */
  export type menuDeleteArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput
  }


  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput
  }


  /**
   * menu.items
   */
  export type menu$itemsArgs = {
    /**
     * Select specific fields to fetch from the orderItems
     */
    select?: orderItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: orderItemsInclude | null
    where?: orderItemsWhereInput
    orderBy?: Enumerable<orderItemsOrderByWithRelationInput>
    cursor?: orderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemsScalarFieldEnum>
  }


  /**
   * menu without action
   */
  export type menuArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menuInclude | null
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


  export const MenuScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    image: 'image',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderId: 'orderId'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    table_id: 'table_id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


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


  export type categoryWhereInput = {
    AND?: Enumerable<categoryWhereInput>
    OR?: Enumerable<categoryWhereInput>
    NOT?: Enumerable<categoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    menu?: MenuListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menu?: menuOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type orderItemsWhereInput = {
    AND?: Enumerable<orderItemsWhereInput>
    OR?: Enumerable<orderItemsWhereInput>
    NOT?: Enumerable<orderItemsWhereInput>
    id?: IntFilter | number
    menuId?: IntFilter | number
    menu_id?: XOR<MenuRelationFilter, menuWhereInput>
    quantity?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    order_id?: XOR<OrdersRelationFilter, ordersWhereInput>
    orderId?: IntFilter | number
  }

  export type orderItemsOrderByWithRelationInput = {
    id?: SortOrder
    menuId?: SortOrder
    menu_id?: menuOrderByWithRelationInput
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order_id?: ordersOrderByWithRelationInput
    orderId?: SortOrder
  }

  export type orderItemsWhereUniqueInput = {
    id?: number
  }

  export type orderItemsOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    _count?: orderItemsCountOrderByAggregateInput
    _avg?: orderItemsAvgOrderByAggregateInput
    _max?: orderItemsMaxOrderByAggregateInput
    _min?: orderItemsMinOrderByAggregateInput
    _sum?: orderItemsSumOrderByAggregateInput
  }

  export type orderItemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<orderItemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<orderItemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<orderItemsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    menuId?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    orderId?: IntWithAggregatesFilter | number
  }

  export type ordersWhereInput = {
    AND?: Enumerable<ordersWhereInput>
    OR?: Enumerable<ordersWhereInput>
    NOT?: Enumerable<ordersWhereInput>
    id?: IntFilter | number
    table_id?: IntFilter | number
    status?: StringFilter | string
    order_items?: OrderItemsListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrder
    order_items?: orderItemsOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersWhereUniqueInput = {
    id?: number
  }

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ordersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ordersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ordersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    table_id?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type menuWhereInput = {
    AND?: Enumerable<menuWhereInput>
    OR?: Enumerable<menuWhereInput>
    NOT?: Enumerable<menuWhereInput>
    id?: IntFilter | number
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
    categoryId?: IntFilter | number
    name?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    price?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    items?: OrderItemsListRelationFilter
  }

  export type menuOrderByWithRelationInput = {
    id?: SortOrder
    category?: categoryOrderByWithRelationInput
    categoryId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: orderItemsOrderByRelationAggregateInput
  }

  export type menuWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type menuOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: menuCountOrderByAggregateInput
    _avg?: menuAvgOrderByAggregateInput
    _max?: menuMaxOrderByAggregateInput
    _min?: menuMinOrderByAggregateInput
    _sum?: menuSumOrderByAggregateInput
  }

  export type menuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<menuScalarWhereWithAggregatesInput>
    OR?: Enumerable<menuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<menuScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    image?: StringNullableWithAggregatesFilter | string | null
    price?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type categoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menu?: menuCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menu?: menuUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: menuUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: menuUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsCreateInput = {
    menu_id: menuCreateNestedOneWithoutItemsInput
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order_id: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type orderItemsUncheckedCreateInput = {
    id?: number
    menuId: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
  }

  export type orderItemsUpdateInput = {
    menu_id?: menuUpdateOneRequiredWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type orderItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemsCreateManyInput = {
    id?: number
    menuId: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
  }

  export type orderItemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type ordersCreateInput = {
    table_id: number
    status?: string
    order_items?: orderItemsCreateNestedManyWithoutOrder_idInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    table_id: number
    status?: string
    order_items?: orderItemsUncheckedCreateNestedManyWithoutOrder_idInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateInput = {
    table_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_items?: orderItemsUpdateManyWithoutOrder_idNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order_items?: orderItemsUncheckedUpdateManyWithoutOrder_idNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyInput = {
    id?: number
    table_id: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    table_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuCreateInput = {
    category: categoryCreateNestedOneWithoutMenuInput
    name?: string | null
    image?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: orderItemsCreateNestedManyWithoutMenu_idInput
  }

  export type menuUncheckedCreateInput = {
    id?: number
    categoryId: number
    name?: string | null
    image?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: orderItemsUncheckedCreateNestedManyWithoutMenu_idInput
  }

  export type menuUpdateInput = {
    category?: categoryUpdateOneRequiredWithoutMenuNestedInput
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemsUpdateManyWithoutMenu_idNestedInput
  }

  export type menuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemsUncheckedUpdateManyWithoutMenu_idNestedInput
  }

  export type menuCreateManyInput = {
    id?: number
    categoryId: number
    name?: string | null
    image?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menuUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
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
    every?: menuWhereInput
    some?: menuWhereInput
    none?: menuWhereInput
  }

  export type menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
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

  export type MenuRelationFilter = {
    is?: menuWhereInput
    isNot?: menuWhereInput
  }

  export type OrdersRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type orderItemsCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type orderItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type orderItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type orderItemsMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
  }

  export type orderItemsSumOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
    orderId?: SortOrder
  }

  export type OrderItemsListRelationFilter = {
    every?: orderItemsWhereInput
    some?: orderItemsWhereInput
    none?: orderItemsWhereInput
  }

  export type orderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    table_id?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
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

  export type menuCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type menuAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
  }

  export type menuMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type menuMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type menuSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
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

  export type menuCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<menuCreateWithoutCategoryInput>, Enumerable<menuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<menuCreateOrConnectWithoutCategoryInput>
    createMany?: menuCreateManyCategoryInputEnvelope
    connect?: Enumerable<menuWhereUniqueInput>
  }

  export type menuUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<menuCreateWithoutCategoryInput>, Enumerable<menuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<menuCreateOrConnectWithoutCategoryInput>
    createMany?: menuCreateManyCategoryInputEnvelope
    connect?: Enumerable<menuWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type menuUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<menuCreateWithoutCategoryInput>, Enumerable<menuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<menuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<menuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: menuCreateManyCategoryInputEnvelope
    set?: Enumerable<menuWhereUniqueInput>
    disconnect?: Enumerable<menuWhereUniqueInput>
    delete?: Enumerable<menuWhereUniqueInput>
    connect?: Enumerable<menuWhereUniqueInput>
    update?: Enumerable<menuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<menuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<menuScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type menuUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<menuCreateWithoutCategoryInput>, Enumerable<menuUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<menuCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<menuUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: menuCreateManyCategoryInputEnvelope
    set?: Enumerable<menuWhereUniqueInput>
    disconnect?: Enumerable<menuWhereUniqueInput>
    delete?: Enumerable<menuWhereUniqueInput>
    connect?: Enumerable<menuWhereUniqueInput>
    update?: Enumerable<menuUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<menuUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<menuScalarWhereInput>
  }

  export type menuCreateNestedOneWithoutItemsInput = {
    create?: XOR<menuCreateWithoutItemsInput, menuUncheckedCreateWithoutItemsInput>
    connectOrCreate?: menuCreateOrConnectWithoutItemsInput
    connect?: menuWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type menuUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<menuCreateWithoutItemsInput, menuUncheckedCreateWithoutItemsInput>
    connectOrCreate?: menuCreateOrConnectWithoutItemsInput
    upsert?: menuUpsertWithoutItemsInput
    connect?: menuWhereUniqueInput
    update?: XOR<menuUpdateWithoutItemsInput, menuUncheckedUpdateWithoutItemsInput>
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type orderItemsCreateNestedManyWithoutOrder_idInput = {
    create?: XOR<Enumerable<orderItemsCreateWithoutOrder_idInput>, Enumerable<orderItemsUncheckedCreateWithoutOrder_idInput>>
    connectOrCreate?: Enumerable<orderItemsCreateOrConnectWithoutOrder_idInput>
    createMany?: orderItemsCreateManyOrder_idInputEnvelope
    connect?: Enumerable<orderItemsWhereUniqueInput>
  }

  export type orderItemsUncheckedCreateNestedManyWithoutOrder_idInput = {
    create?: XOR<Enumerable<orderItemsCreateWithoutOrder_idInput>, Enumerable<orderItemsUncheckedCreateWithoutOrder_idInput>>
    connectOrCreate?: Enumerable<orderItemsCreateOrConnectWithoutOrder_idInput>
    createMany?: orderItemsCreateManyOrder_idInputEnvelope
    connect?: Enumerable<orderItemsWhereUniqueInput>
  }

  export type orderItemsUpdateManyWithoutOrder_idNestedInput = {
    create?: XOR<Enumerable<orderItemsCreateWithoutOrder_idInput>, Enumerable<orderItemsUncheckedCreateWithoutOrder_idInput>>
    connectOrCreate?: Enumerable<orderItemsCreateOrConnectWithoutOrder_idInput>
    upsert?: Enumerable<orderItemsUpsertWithWhereUniqueWithoutOrder_idInput>
    createMany?: orderItemsCreateManyOrder_idInputEnvelope
    set?: Enumerable<orderItemsWhereUniqueInput>
    disconnect?: Enumerable<orderItemsWhereUniqueInput>
    delete?: Enumerable<orderItemsWhereUniqueInput>
    connect?: Enumerable<orderItemsWhereUniqueInput>
    update?: Enumerable<orderItemsUpdateWithWhereUniqueWithoutOrder_idInput>
    updateMany?: Enumerable<orderItemsUpdateManyWithWhereWithoutOrder_idInput>
    deleteMany?: Enumerable<orderItemsScalarWhereInput>
  }

  export type orderItemsUncheckedUpdateManyWithoutOrder_idNestedInput = {
    create?: XOR<Enumerable<orderItemsCreateWithoutOrder_idInput>, Enumerable<orderItemsUncheckedCreateWithoutOrder_idInput>>
    connectOrCreate?: Enumerable<orderItemsCreateOrConnectWithoutOrder_idInput>
    upsert?: Enumerable<orderItemsUpsertWithWhereUniqueWithoutOrder_idInput>
    createMany?: orderItemsCreateManyOrder_idInputEnvelope
    set?: Enumerable<orderItemsWhereUniqueInput>
    disconnect?: Enumerable<orderItemsWhereUniqueInput>
    delete?: Enumerable<orderItemsWhereUniqueInput>
    connect?: Enumerable<orderItemsWhereUniqueInput>
    update?: Enumerable<orderItemsUpdateWithWhereUniqueWithoutOrder_idInput>
    updateMany?: Enumerable<orderItemsUpdateManyWithWhereWithoutOrder_idInput>
    deleteMany?: Enumerable<orderItemsScalarWhereInput>
  }

  export type categoryCreateNestedOneWithoutMenuInput = {
    create?: XOR<categoryCreateWithoutMenuInput, categoryUncheckedCreateWithoutMenuInput>
    connectOrCreate?: categoryCreateOrConnectWithoutMenuInput
    connect?: categoryWhereUniqueInput
  }

  export type orderItemsCreateNestedManyWithoutMenu_idInput = {
    create?: XOR<Enumerable<orderItemsCreateWithoutMenu_idInput>, Enumerable<orderItemsUncheckedCreateWithoutMenu_idInput>>
    connectOrCreate?: Enumerable<orderItemsCreateOrConnectWithoutMenu_idInput>
    createMany?: orderItemsCreateManyMenu_idInputEnvelope
    connect?: Enumerable<orderItemsWhereUniqueInput>
  }

  export type orderItemsUncheckedCreateNestedManyWithoutMenu_idInput = {
    create?: XOR<Enumerable<orderItemsCreateWithoutMenu_idInput>, Enumerable<orderItemsUncheckedCreateWithoutMenu_idInput>>
    connectOrCreate?: Enumerable<orderItemsCreateOrConnectWithoutMenu_idInput>
    createMany?: orderItemsCreateManyMenu_idInputEnvelope
    connect?: Enumerable<orderItemsWhereUniqueInput>
  }

  export type categoryUpdateOneRequiredWithoutMenuNestedInput = {
    create?: XOR<categoryCreateWithoutMenuInput, categoryUncheckedCreateWithoutMenuInput>
    connectOrCreate?: categoryCreateOrConnectWithoutMenuInput
    upsert?: categoryUpsertWithoutMenuInput
    connect?: categoryWhereUniqueInput
    update?: XOR<categoryUpdateWithoutMenuInput, categoryUncheckedUpdateWithoutMenuInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type orderItemsUpdateManyWithoutMenu_idNestedInput = {
    create?: XOR<Enumerable<orderItemsCreateWithoutMenu_idInput>, Enumerable<orderItemsUncheckedCreateWithoutMenu_idInput>>
    connectOrCreate?: Enumerable<orderItemsCreateOrConnectWithoutMenu_idInput>
    upsert?: Enumerable<orderItemsUpsertWithWhereUniqueWithoutMenu_idInput>
    createMany?: orderItemsCreateManyMenu_idInputEnvelope
    set?: Enumerable<orderItemsWhereUniqueInput>
    disconnect?: Enumerable<orderItemsWhereUniqueInput>
    delete?: Enumerable<orderItemsWhereUniqueInput>
    connect?: Enumerable<orderItemsWhereUniqueInput>
    update?: Enumerable<orderItemsUpdateWithWhereUniqueWithoutMenu_idInput>
    updateMany?: Enumerable<orderItemsUpdateManyWithWhereWithoutMenu_idInput>
    deleteMany?: Enumerable<orderItemsScalarWhereInput>
  }

  export type orderItemsUncheckedUpdateManyWithoutMenu_idNestedInput = {
    create?: XOR<Enumerable<orderItemsCreateWithoutMenu_idInput>, Enumerable<orderItemsUncheckedCreateWithoutMenu_idInput>>
    connectOrCreate?: Enumerable<orderItemsCreateOrConnectWithoutMenu_idInput>
    upsert?: Enumerable<orderItemsUpsertWithWhereUniqueWithoutMenu_idInput>
    createMany?: orderItemsCreateManyMenu_idInputEnvelope
    set?: Enumerable<orderItemsWhereUniqueInput>
    disconnect?: Enumerable<orderItemsWhereUniqueInput>
    delete?: Enumerable<orderItemsWhereUniqueInput>
    connect?: Enumerable<orderItemsWhereUniqueInput>
    update?: Enumerable<orderItemsUpdateWithWhereUniqueWithoutMenu_idInput>
    updateMany?: Enumerable<orderItemsUpdateManyWithWhereWithoutMenu_idInput>
    deleteMany?: Enumerable<orderItemsScalarWhereInput>
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

  export type menuCreateWithoutCategoryInput = {
    name?: string | null
    image?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: orderItemsCreateNestedManyWithoutMenu_idInput
  }

  export type menuUncheckedCreateWithoutCategoryInput = {
    id?: number
    name?: string | null
    image?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: orderItemsUncheckedCreateNestedManyWithoutMenu_idInput
  }

  export type menuCreateOrConnectWithoutCategoryInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutCategoryInput, menuUncheckedCreateWithoutCategoryInput>
  }

  export type menuCreateManyCategoryInputEnvelope = {
    data: Enumerable<menuCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type menuUpsertWithWhereUniqueWithoutCategoryInput = {
    where: menuWhereUniqueInput
    update: XOR<menuUpdateWithoutCategoryInput, menuUncheckedUpdateWithoutCategoryInput>
    create: XOR<menuCreateWithoutCategoryInput, menuUncheckedCreateWithoutCategoryInput>
  }

  export type menuUpdateWithWhereUniqueWithoutCategoryInput = {
    where: menuWhereUniqueInput
    data: XOR<menuUpdateWithoutCategoryInput, menuUncheckedUpdateWithoutCategoryInput>
  }

  export type menuUpdateManyWithWhereWithoutCategoryInput = {
    where: menuScalarWhereInput
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyWithoutMenuInput>
  }

  export type menuScalarWhereInput = {
    AND?: Enumerable<menuScalarWhereInput>
    OR?: Enumerable<menuScalarWhereInput>
    NOT?: Enumerable<menuScalarWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    name?: StringNullableFilter | string | null
    image?: StringNullableFilter | string | null
    price?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type menuCreateWithoutItemsInput = {
    category: categoryCreateNestedOneWithoutMenuInput
    name?: string | null
    image?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menuUncheckedCreateWithoutItemsInput = {
    id?: number
    categoryId: number
    name?: string | null
    image?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menuCreateOrConnectWithoutItemsInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutItemsInput, menuUncheckedCreateWithoutItemsInput>
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    table_id: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    table_id: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type menuUpsertWithoutItemsInput = {
    update: XOR<menuUpdateWithoutItemsInput, menuUncheckedUpdateWithoutItemsInput>
    create: XOR<menuCreateWithoutItemsInput, menuUncheckedCreateWithoutItemsInput>
  }

  export type menuUpdateWithoutItemsInput = {
    category?: categoryUpdateOneRequiredWithoutMenuNestedInput
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    table_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsCreateWithoutOrder_idInput = {
    menu_id: menuCreateNestedOneWithoutItemsInput
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderItemsUncheckedCreateWithoutOrder_idInput = {
    id?: number
    menuId: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderItemsCreateOrConnectWithoutOrder_idInput = {
    where: orderItemsWhereUniqueInput
    create: XOR<orderItemsCreateWithoutOrder_idInput, orderItemsUncheckedCreateWithoutOrder_idInput>
  }

  export type orderItemsCreateManyOrder_idInputEnvelope = {
    data: Enumerable<orderItemsCreateManyOrder_idInput>
    skipDuplicates?: boolean
  }

  export type orderItemsUpsertWithWhereUniqueWithoutOrder_idInput = {
    where: orderItemsWhereUniqueInput
    update: XOR<orderItemsUpdateWithoutOrder_idInput, orderItemsUncheckedUpdateWithoutOrder_idInput>
    create: XOR<orderItemsCreateWithoutOrder_idInput, orderItemsUncheckedCreateWithoutOrder_idInput>
  }

  export type orderItemsUpdateWithWhereUniqueWithoutOrder_idInput = {
    where: orderItemsWhereUniqueInput
    data: XOR<orderItemsUpdateWithoutOrder_idInput, orderItemsUncheckedUpdateWithoutOrder_idInput>
  }

  export type orderItemsUpdateManyWithWhereWithoutOrder_idInput = {
    where: orderItemsScalarWhereInput
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyWithoutOrder_itemsInput>
  }

  export type orderItemsScalarWhereInput = {
    AND?: Enumerable<orderItemsScalarWhereInput>
    OR?: Enumerable<orderItemsScalarWhereInput>
    NOT?: Enumerable<orderItemsScalarWhereInput>
    id?: IntFilter | number
    menuId?: IntFilter | number
    quantity?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    orderId?: IntFilter | number
  }

  export type categoryCreateWithoutMenuInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryUncheckedCreateWithoutMenuInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryCreateOrConnectWithoutMenuInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutMenuInput, categoryUncheckedCreateWithoutMenuInput>
  }

  export type orderItemsCreateWithoutMenu_idInput = {
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order_id: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type orderItemsUncheckedCreateWithoutMenu_idInput = {
    id?: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
  }

  export type orderItemsCreateOrConnectWithoutMenu_idInput = {
    where: orderItemsWhereUniqueInput
    create: XOR<orderItemsCreateWithoutMenu_idInput, orderItemsUncheckedCreateWithoutMenu_idInput>
  }

  export type orderItemsCreateManyMenu_idInputEnvelope = {
    data: Enumerable<orderItemsCreateManyMenu_idInput>
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutMenuInput = {
    update: XOR<categoryUpdateWithoutMenuInput, categoryUncheckedUpdateWithoutMenuInput>
    create: XOR<categoryCreateWithoutMenuInput, categoryUncheckedCreateWithoutMenuInput>
  }

  export type categoryUpdateWithoutMenuInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsUpsertWithWhereUniqueWithoutMenu_idInput = {
    where: orderItemsWhereUniqueInput
    update: XOR<orderItemsUpdateWithoutMenu_idInput, orderItemsUncheckedUpdateWithoutMenu_idInput>
    create: XOR<orderItemsCreateWithoutMenu_idInput, orderItemsUncheckedCreateWithoutMenu_idInput>
  }

  export type orderItemsUpdateWithWhereUniqueWithoutMenu_idInput = {
    where: orderItemsWhereUniqueInput
    data: XOR<orderItemsUpdateWithoutMenu_idInput, orderItemsUncheckedUpdateWithoutMenu_idInput>
  }

  export type orderItemsUpdateManyWithWhereWithoutMenu_idInput = {
    where: orderItemsScalarWhereInput
    data: XOR<orderItemsUpdateManyMutationInput, orderItemsUncheckedUpdateManyWithoutItemsInput>
  }

  export type menuCreateManyCategoryInput = {
    id?: number
    name?: string | null
    image?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type menuUpdateWithoutCategoryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemsUpdateManyWithoutMenu_idNestedInput
  }

  export type menuUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: orderItemsUncheckedUpdateManyWithoutMenu_idNestedInput
  }

  export type menuUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsCreateManyOrder_idInput = {
    id?: number
    menuId: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderItemsUpdateWithoutOrder_idInput = {
    menu_id?: menuUpdateOneRequiredWithoutItemsNestedInput
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsUncheckedUpdateWithoutOrder_idInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsUncheckedUpdateManyWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemsCreateManyMenu_idInput = {
    id?: number
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: number
  }

  export type orderItemsUpdateWithoutMenu_idInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type orderItemsUncheckedUpdateWithoutMenu_idInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemsUncheckedUpdateManyWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: IntFieldUpdateOperationsInput | number
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