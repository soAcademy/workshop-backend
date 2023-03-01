
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
  korKitchenMenuId: number
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
  tableID: number
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
    TestModel: 'TestModel'
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
    korKitchenMenuId: number | null
  }

  export type KorKitchenCategorySumAggregateOutputType = {
    id: number | null
    korKitchenMenuId: number | null
  }

  export type KorKitchenCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
    korKitchenMenuId: number | null
  }

  export type KorKitchenCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
    korKitchenMenuId: number | null
  }

  export type KorKitchenCategoryCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    korKitchenMenuId: number
    _all: number
  }


  export type KorKitchenCategoryAvgAggregateInputType = {
    id?: true
    korKitchenMenuId?: true
  }

  export type KorKitchenCategorySumAggregateInputType = {
    id?: true
    korKitchenMenuId?: true
  }

  export type KorKitchenCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    korKitchenMenuId?: true
  }

  export type KorKitchenCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    korKitchenMenuId?: true
  }

  export type KorKitchenCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    korKitchenMenuId?: true
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
    korKitchenMenuId: number
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
    korKitchenMenuId?: boolean
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
    tableID: number | null
  }

  export type KorKitchenOrderSumAggregateOutputType = {
    id: number | null
    tableID: number | null
  }

  export type KorKitchenOrderMinAggregateOutputType = {
    id: number | null
    status: string | null
    tableID: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KorKitchenOrderMaxAggregateOutputType = {
    id: number | null
    status: string | null
    tableID: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type KorKitchenOrderCountAggregateOutputType = {
    id: number
    status: number
    tableID: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type KorKitchenOrderAvgAggregateInputType = {
    id?: true
    tableID?: true
  }

  export type KorKitchenOrderSumAggregateInputType = {
    id?: true
    tableID?: true
  }

  export type KorKitchenOrderMinAggregateInputType = {
    id?: true
    status?: true
    tableID?: true
    createAt?: true
    updateAt?: true
  }

  export type KorKitchenOrderMaxAggregateInputType = {
    id?: true
    status?: true
    tableID?: true
    createAt?: true
    updateAt?: true
  }

  export type KorKitchenOrderCountAggregateInputType = {
    id?: true
    status?: true
    tableID?: true
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
    tableID: number
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
    tableID?: boolean
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
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const KorKitchenCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt',
    korKitchenMenuId: 'korKitchenMenuId'
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
    tableID: 'tableID',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type KorKitchenOrderScalarFieldEnum = (typeof KorKitchenOrderScalarFieldEnum)[keyof typeof KorKitchenOrderScalarFieldEnum]


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
    korKitchenMenuId?: IntFilter | number
  }

  export type KorKitchenCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    menu?: KorKitchenMenuOrderByRelationAggregateInput
    createAt?: SortOrder
    updateAt?: SortOrder
    korKitchenMenuId?: SortOrder
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
    korKitchenMenuId?: SortOrder
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
    korKitchenMenuId?: IntWithAggregatesFilter | number
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
    tableID?: IntFilter | number
    items?: KorKitchenOrderItemListRelationFilter
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type KorKitchenOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    tableID?: SortOrder
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
    tableID?: SortOrder
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
    tableID?: IntWithAggregatesFilter | number
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

  export type KorKitchenCategoryCreateInput = {
    name: string
    menu?: KorKitchenMenuCreateNestedManyWithoutCategoryInput
    createAt?: Date | string
    updateAt?: Date | string
    korKitchenMenuId: number
  }

  export type KorKitchenCategoryUncheckedCreateInput = {
    id?: number
    name: string
    menu?: KorKitchenMenuUncheckedCreateNestedManyWithoutCategoryInput
    createAt?: Date | string
    updateAt?: Date | string
    korKitchenMenuId: number
  }

  export type KorKitchenCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    menu?: KorKitchenMenuUpdateManyWithoutCategoryNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    korKitchenMenuId?: IntFieldUpdateOperationsInput | number
  }

  export type KorKitchenCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    menu?: KorKitchenMenuUncheckedUpdateManyWithoutCategoryNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    korKitchenMenuId?: IntFieldUpdateOperationsInput | number
  }

  export type KorKitchenCategoryCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    korKitchenMenuId: number
  }

  export type KorKitchenCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    korKitchenMenuId?: IntFieldUpdateOperationsInput | number
  }

  export type KorKitchenCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    korKitchenMenuId?: IntFieldUpdateOperationsInput | number
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
    tableID: number
    items?: KorKitchenOrderItemCreateNestedManyWithoutOrderInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderUncheckedCreateInput = {
    id?: number
    status?: string
    tableID: number
    items?: KorKitchenOrderItemUncheckedCreateNestedManyWithoutOrderInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableID?: IntFieldUpdateOperationsInput | number
    items?: KorKitchenOrderItemUpdateManyWithoutOrderNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableID?: IntFieldUpdateOperationsInput | number
    items?: KorKitchenOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderCreateManyInput = {
    id?: number
    status?: string
    tableID: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    tableID?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableID?: IntFieldUpdateOperationsInput | number
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
    korKitchenMenuId?: SortOrder
  }

  export type KorKitchenCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    korKitchenMenuId?: SortOrder
  }

  export type KorKitchenCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    korKitchenMenuId?: SortOrder
  }

  export type KorKitchenCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    korKitchenMenuId?: SortOrder
  }

  export type KorKitchenCategorySumOrderByAggregateInput = {
    id?: SortOrder
    korKitchenMenuId?: SortOrder
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
    tableID?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    tableID?: SortOrder
  }

  export type KorKitchenOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableID?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenOrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    tableID?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type KorKitchenOrderSumOrderByAggregateInput = {
    id?: SortOrder
    tableID?: SortOrder
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
    korKitchenMenuId: number
  }

  export type KorKitchenCategoryUncheckedCreateWithoutMenuInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    korKitchenMenuId: number
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
    korKitchenMenuId?: IntFieldUpdateOperationsInput | number
  }

  export type KorKitchenCategoryUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    korKitchenMenuId?: IntFieldUpdateOperationsInput | number
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
    tableID: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type KorKitchenOrderUncheckedCreateWithoutItemsInput = {
    id?: number
    status?: string
    tableID: number
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
    tableID?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KorKitchenOrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    tableID?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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