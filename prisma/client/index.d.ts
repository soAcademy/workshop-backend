
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model UserYoutube
 * 
 */
export type UserYoutube = {
  id: number
  name: string
  email: string
  imageProfile: string
  createAt: Date
  updateAt: Date
}

/**
 * Model Chanel
 * 
 */
export type Chanel = {
  id: number
  name: string
  description: string
  createAt: Date
  updateAt: Date
  userId: number
}

/**
 * Model Comment
 * 
 */
export type Comment = {
  id: number
  userId: number
  videoId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Video
 * 
 */
export type Video = {
  id: number
  name: string
  description: string
  url: string
  createAt: Date
  updateAt: Date
  chanelId: number | null
}

/**
 * Model Permission
 * 
 */
export type Permission = {
  id: number
  role: RoleEnum
  edit: boolean
  post: boolean
  delete: boolean
  upload: boolean
  createAt: Date
  updateAt: Date
  userId: number | null
  chanelId: number | null
}

/**
 * Model UserToChanel
 * 
 */
export type UserToChanel = {
  id: number
  role: RoleEnum
  userId: number
  chanelId: number
  permissionId: number
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const RoleEnum: {
  Admin: 'Admin',
  Editor: 'Editor',
  Creater: 'Creater'
};

export type RoleEnum = (typeof RoleEnum)[keyof typeof RoleEnum]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserYoutubes
 * const userYoutubes = await prisma.userYoutube.findMany()
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
   * // Fetch zero or more UserYoutubes
   * const userYoutubes = await prisma.userYoutube.findMany()
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
   * `prisma.userYoutube`: Exposes CRUD operations for the **UserYoutube** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserYoutubes
    * const userYoutubes = await prisma.userYoutube.findMany()
    * ```
    */
  get userYoutube(): Prisma.UserYoutubeDelegate<GlobalReject>;

  /**
   * `prisma.chanel`: Exposes CRUD operations for the **Chanel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chanels
    * const chanels = await prisma.chanel.findMany()
    * ```
    */
  get chanel(): Prisma.ChanelDelegate<GlobalReject>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<GlobalReject>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<GlobalReject>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<GlobalReject>;

  /**
   * `prisma.userToChanel`: Exposes CRUD operations for the **UserToChanel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserToChanels
    * const userToChanels = await prisma.userToChanel.findMany()
    * ```
    */
  get userToChanel(): Prisma.UserToChanelDelegate<GlobalReject>;
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
    UserYoutube: 'UserYoutube',
    Chanel: 'Chanel',
    Comment: 'Comment',
    Video: 'Video',
    Permission: 'Permission',
    UserToChanel: 'UserToChanel'
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
   * Count Type UserYoutubeCountOutputType
   */


  export type UserYoutubeCountOutputType = {
    chanel: number
    Comment: number
    userToChanel: number
    permission: number
  }

  export type UserYoutubeCountOutputTypeSelect = {
    chanel?: boolean
    Comment?: boolean
    userToChanel?: boolean
    permission?: boolean
  }

  export type UserYoutubeCountOutputTypeGetPayload<S extends boolean | null | undefined | UserYoutubeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserYoutubeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserYoutubeCountOutputTypeArgs)
    ? UserYoutubeCountOutputType 
    : S extends { select: any } & (UserYoutubeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserYoutubeCountOutputType ? UserYoutubeCountOutputType[P] : never
  } 
      : UserYoutubeCountOutputType




  // Custom InputTypes

  /**
   * UserYoutubeCountOutputType without action
   */
  export type UserYoutubeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserYoutubeCountOutputType
     */
    select?: UserYoutubeCountOutputTypeSelect | null
  }



  /**
   * Count Type ChanelCountOutputType
   */


  export type ChanelCountOutputType = {
    videos: number
    userToChanel: number
    Permission: number
  }

  export type ChanelCountOutputTypeSelect = {
    videos?: boolean
    userToChanel?: boolean
    Permission?: boolean
  }

  export type ChanelCountOutputTypeGetPayload<S extends boolean | null | undefined | ChanelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ChanelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ChanelCountOutputTypeArgs)
    ? ChanelCountOutputType 
    : S extends { select: any } & (ChanelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ChanelCountOutputType ? ChanelCountOutputType[P] : never
  } 
      : ChanelCountOutputType




  // Custom InputTypes

  /**
   * ChanelCountOutputType without action
   */
  export type ChanelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ChanelCountOutputType
     */
    select?: ChanelCountOutputTypeSelect | null
  }



  /**
   * Count Type VideoCountOutputType
   */


  export type VideoCountOutputType = {
    comments: number
  }

  export type VideoCountOutputTypeSelect = {
    comments?: boolean
  }

  export type VideoCountOutputTypeGetPayload<S extends boolean | null | undefined | VideoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VideoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VideoCountOutputTypeArgs)
    ? VideoCountOutputType 
    : S extends { select: any } & (VideoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VideoCountOutputType ? VideoCountOutputType[P] : never
  } 
      : VideoCountOutputType




  // Custom InputTypes

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect | null
  }



  /**
   * Count Type PermissionCountOutputType
   */


  export type PermissionCountOutputType = {
    userToChanel: number
  }

  export type PermissionCountOutputTypeSelect = {
    userToChanel?: boolean
  }

  export type PermissionCountOutputTypeGetPayload<S extends boolean | null | undefined | PermissionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PermissionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PermissionCountOutputTypeArgs)
    ? PermissionCountOutputType 
    : S extends { select: any } & (PermissionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PermissionCountOutputType ? PermissionCountOutputType[P] : never
  } 
      : PermissionCountOutputType




  // Custom InputTypes

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model UserYoutube
   */


  export type AggregateUserYoutube = {
    _count: UserYoutubeCountAggregateOutputType | null
    _avg: UserYoutubeAvgAggregateOutputType | null
    _sum: UserYoutubeSumAggregateOutputType | null
    _min: UserYoutubeMinAggregateOutputType | null
    _max: UserYoutubeMaxAggregateOutputType | null
  }

  export type UserYoutubeAvgAggregateOutputType = {
    id: number | null
  }

  export type UserYoutubeSumAggregateOutputType = {
    id: number | null
  }

  export type UserYoutubeMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    imageProfile: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserYoutubeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    imageProfile: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserYoutubeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    imageProfile: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserYoutubeAvgAggregateInputType = {
    id?: true
  }

  export type UserYoutubeSumAggregateInputType = {
    id?: true
  }

  export type UserYoutubeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    imageProfile?: true
    createAt?: true
    updateAt?: true
  }

  export type UserYoutubeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    imageProfile?: true
    createAt?: true
    updateAt?: true
  }

  export type UserYoutubeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    imageProfile?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserYoutubeAggregateArgs = {
    /**
     * Filter which UserYoutube to aggregate.
     */
    where?: UserYoutubeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserYoutubes to fetch.
     */
    orderBy?: Enumerable<UserYoutubeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserYoutubeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserYoutubes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserYoutubes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserYoutubes
    **/
    _count?: true | UserYoutubeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserYoutubeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserYoutubeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserYoutubeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserYoutubeMaxAggregateInputType
  }

  export type GetUserYoutubeAggregateType<T extends UserYoutubeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserYoutube]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserYoutube[P]>
      : GetScalarType<T[P], AggregateUserYoutube[P]>
  }




  export type UserYoutubeGroupByArgs = {
    where?: UserYoutubeWhereInput
    orderBy?: Enumerable<UserYoutubeOrderByWithAggregationInput>
    by: UserYoutubeScalarFieldEnum[]
    having?: UserYoutubeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserYoutubeCountAggregateInputType | true
    _avg?: UserYoutubeAvgAggregateInputType
    _sum?: UserYoutubeSumAggregateInputType
    _min?: UserYoutubeMinAggregateInputType
    _max?: UserYoutubeMaxAggregateInputType
  }


  export type UserYoutubeGroupByOutputType = {
    id: number
    name: string
    email: string
    imageProfile: string
    createAt: Date
    updateAt: Date
    _count: UserYoutubeCountAggregateOutputType | null
    _avg: UserYoutubeAvgAggregateOutputType | null
    _sum: UserYoutubeSumAggregateOutputType | null
    _min: UserYoutubeMinAggregateOutputType | null
    _max: UserYoutubeMaxAggregateOutputType | null
  }

  type GetUserYoutubeGroupByPayload<T extends UserYoutubeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserYoutubeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserYoutubeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserYoutubeGroupByOutputType[P]>
            : GetScalarType<T[P], UserYoutubeGroupByOutputType[P]>
        }
      >
    >


  export type UserYoutubeSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    imageProfile?: boolean
    createAt?: boolean
    updateAt?: boolean
    chanel?: boolean | UserYoutube$chanelArgs
    Comment?: boolean | UserYoutube$CommentArgs
    userToChanel?: boolean | UserYoutube$userToChanelArgs
    permission?: boolean | UserYoutube$permissionArgs
    _count?: boolean | UserYoutubeCountOutputTypeArgs
  }


  export type UserYoutubeInclude = {
    chanel?: boolean | UserYoutube$chanelArgs
    Comment?: boolean | UserYoutube$CommentArgs
    userToChanel?: boolean | UserYoutube$userToChanelArgs
    permission?: boolean | UserYoutube$permissionArgs
    _count?: boolean | UserYoutubeCountOutputTypeArgs
  }

  export type UserYoutubeGetPayload<S extends boolean | null | undefined | UserYoutubeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserYoutube :
    S extends undefined ? never :
    S extends { include: any } & (UserYoutubeArgs | UserYoutubeFindManyArgs)
    ? UserYoutube  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'chanel' ? Array < ChanelGetPayload<S['include'][P]>>  :
        P extends 'Comment' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'userToChanel' ? Array < UserToChanelGetPayload<S['include'][P]>>  :
        P extends 'permission' ? Array < PermissionGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserYoutubeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserYoutubeArgs | UserYoutubeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'chanel' ? Array < ChanelGetPayload<S['select'][P]>>  :
        P extends 'Comment' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'userToChanel' ? Array < UserToChanelGetPayload<S['select'][P]>>  :
        P extends 'permission' ? Array < PermissionGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserYoutubeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserYoutube ? UserYoutube[P] : never
  } 
      : UserYoutube


  type UserYoutubeCountArgs = 
    Omit<UserYoutubeFindManyArgs, 'select' | 'include'> & {
      select?: UserYoutubeCountAggregateInputType | true
    }

  export interface UserYoutubeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserYoutube that matches the filter.
     * @param {UserYoutubeFindUniqueArgs} args - Arguments to find a UserYoutube
     * @example
     * // Get one UserYoutube
     * const userYoutube = await prisma.userYoutube.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserYoutubeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserYoutubeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserYoutube'> extends True ? Prisma__UserYoutubeClient<UserYoutubeGetPayload<T>> : Prisma__UserYoutubeClient<UserYoutubeGetPayload<T> | null, null>

    /**
     * Find one UserYoutube that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserYoutubeFindUniqueOrThrowArgs} args - Arguments to find a UserYoutube
     * @example
     * // Get one UserYoutube
     * const userYoutube = await prisma.userYoutube.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserYoutubeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserYoutubeFindUniqueOrThrowArgs>
    ): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T>>

    /**
     * Find the first UserYoutube that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserYoutubeFindFirstArgs} args - Arguments to find a UserYoutube
     * @example
     * // Get one UserYoutube
     * const userYoutube = await prisma.userYoutube.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserYoutubeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserYoutubeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserYoutube'> extends True ? Prisma__UserYoutubeClient<UserYoutubeGetPayload<T>> : Prisma__UserYoutubeClient<UserYoutubeGetPayload<T> | null, null>

    /**
     * Find the first UserYoutube that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserYoutubeFindFirstOrThrowArgs} args - Arguments to find a UserYoutube
     * @example
     * // Get one UserYoutube
     * const userYoutube = await prisma.userYoutube.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserYoutubeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserYoutubeFindFirstOrThrowArgs>
    ): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T>>

    /**
     * Find zero or more UserYoutubes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserYoutubeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserYoutubes
     * const userYoutubes = await prisma.userYoutube.findMany()
     * 
     * // Get first 10 UserYoutubes
     * const userYoutubes = await prisma.userYoutube.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userYoutubeWithIdOnly = await prisma.userYoutube.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserYoutubeFindManyArgs>(
      args?: SelectSubset<T, UserYoutubeFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserYoutubeGetPayload<T>>>

    /**
     * Create a UserYoutube.
     * @param {UserYoutubeCreateArgs} args - Arguments to create a UserYoutube.
     * @example
     * // Create one UserYoutube
     * const UserYoutube = await prisma.userYoutube.create({
     *   data: {
     *     // ... data to create a UserYoutube
     *   }
     * })
     * 
    **/
    create<T extends UserYoutubeCreateArgs>(
      args: SelectSubset<T, UserYoutubeCreateArgs>
    ): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T>>

    /**
     * Create many UserYoutubes.
     *     @param {UserYoutubeCreateManyArgs} args - Arguments to create many UserYoutubes.
     *     @example
     *     // Create many UserYoutubes
     *     const userYoutube = await prisma.userYoutube.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserYoutubeCreateManyArgs>(
      args?: SelectSubset<T, UserYoutubeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserYoutube.
     * @param {UserYoutubeDeleteArgs} args - Arguments to delete one UserYoutube.
     * @example
     * // Delete one UserYoutube
     * const UserYoutube = await prisma.userYoutube.delete({
     *   where: {
     *     // ... filter to delete one UserYoutube
     *   }
     * })
     * 
    **/
    delete<T extends UserYoutubeDeleteArgs>(
      args: SelectSubset<T, UserYoutubeDeleteArgs>
    ): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T>>

    /**
     * Update one UserYoutube.
     * @param {UserYoutubeUpdateArgs} args - Arguments to update one UserYoutube.
     * @example
     * // Update one UserYoutube
     * const userYoutube = await prisma.userYoutube.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserYoutubeUpdateArgs>(
      args: SelectSubset<T, UserYoutubeUpdateArgs>
    ): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T>>

    /**
     * Delete zero or more UserYoutubes.
     * @param {UserYoutubeDeleteManyArgs} args - Arguments to filter UserYoutubes to delete.
     * @example
     * // Delete a few UserYoutubes
     * const { count } = await prisma.userYoutube.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserYoutubeDeleteManyArgs>(
      args?: SelectSubset<T, UserYoutubeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserYoutubes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserYoutubeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserYoutubes
     * const userYoutube = await prisma.userYoutube.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserYoutubeUpdateManyArgs>(
      args: SelectSubset<T, UserYoutubeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserYoutube.
     * @param {UserYoutubeUpsertArgs} args - Arguments to update or create a UserYoutube.
     * @example
     * // Update or create a UserYoutube
     * const userYoutube = await prisma.userYoutube.upsert({
     *   create: {
     *     // ... data to create a UserYoutube
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserYoutube we want to update
     *   }
     * })
    **/
    upsert<T extends UserYoutubeUpsertArgs>(
      args: SelectSubset<T, UserYoutubeUpsertArgs>
    ): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T>>

    /**
     * Count the number of UserYoutubes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserYoutubeCountArgs} args - Arguments to filter UserYoutubes to count.
     * @example
     * // Count the number of UserYoutubes
     * const count = await prisma.userYoutube.count({
     *   where: {
     *     // ... the filter for the UserYoutubes we want to count
     *   }
     * })
    **/
    count<T extends UserYoutubeCountArgs>(
      args?: Subset<T, UserYoutubeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserYoutubeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserYoutube.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserYoutubeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserYoutubeAggregateArgs>(args: Subset<T, UserYoutubeAggregateArgs>): Prisma.PrismaPromise<GetUserYoutubeAggregateType<T>>

    /**
     * Group by UserYoutube.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserYoutubeGroupByArgs} args - Group by arguments.
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
      T extends UserYoutubeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserYoutubeGroupByArgs['orderBy'] }
        : { orderBy?: UserYoutubeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserYoutubeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserYoutubeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserYoutube.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserYoutubeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    chanel<T extends UserYoutube$chanelArgs= {}>(args?: Subset<T, UserYoutube$chanelArgs>): Prisma.PrismaPromise<Array<ChanelGetPayload<T>>| Null>;

    Comment<T extends UserYoutube$CommentArgs= {}>(args?: Subset<T, UserYoutube$CommentArgs>): Prisma.PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    userToChanel<T extends UserYoutube$userToChanelArgs= {}>(args?: Subset<T, UserYoutube$userToChanelArgs>): Prisma.PrismaPromise<Array<UserToChanelGetPayload<T>>| Null>;

    permission<T extends UserYoutube$permissionArgs= {}>(args?: Subset<T, UserYoutube$permissionArgs>): Prisma.PrismaPromise<Array<PermissionGetPayload<T>>| Null>;

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
   * UserYoutube base type for findUnique actions
   */
  export type UserYoutubeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * Filter, which UserYoutube to fetch.
     */
    where: UserYoutubeWhereUniqueInput
  }

  /**
   * UserYoutube findUnique
   */
  export interface UserYoutubeFindUniqueArgs extends UserYoutubeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserYoutube findUniqueOrThrow
   */
  export type UserYoutubeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * Filter, which UserYoutube to fetch.
     */
    where: UserYoutubeWhereUniqueInput
  }


  /**
   * UserYoutube base type for findFirst actions
   */
  export type UserYoutubeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * Filter, which UserYoutube to fetch.
     */
    where?: UserYoutubeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserYoutubes to fetch.
     */
    orderBy?: Enumerable<UserYoutubeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserYoutubes.
     */
    cursor?: UserYoutubeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserYoutubes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserYoutubes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserYoutubes.
     */
    distinct?: Enumerable<UserYoutubeScalarFieldEnum>
  }

  /**
   * UserYoutube findFirst
   */
  export interface UserYoutubeFindFirstArgs extends UserYoutubeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserYoutube findFirstOrThrow
   */
  export type UserYoutubeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * Filter, which UserYoutube to fetch.
     */
    where?: UserYoutubeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserYoutubes to fetch.
     */
    orderBy?: Enumerable<UserYoutubeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserYoutubes.
     */
    cursor?: UserYoutubeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserYoutubes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserYoutubes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserYoutubes.
     */
    distinct?: Enumerable<UserYoutubeScalarFieldEnum>
  }


  /**
   * UserYoutube findMany
   */
  export type UserYoutubeFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * Filter, which UserYoutubes to fetch.
     */
    where?: UserYoutubeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserYoutubes to fetch.
     */
    orderBy?: Enumerable<UserYoutubeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserYoutubes.
     */
    cursor?: UserYoutubeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserYoutubes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserYoutubes.
     */
    skip?: number
    distinct?: Enumerable<UserYoutubeScalarFieldEnum>
  }


  /**
   * UserYoutube create
   */
  export type UserYoutubeCreateArgs = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * The data needed to create a UserYoutube.
     */
    data: XOR<UserYoutubeCreateInput, UserYoutubeUncheckedCreateInput>
  }


  /**
   * UserYoutube createMany
   */
  export type UserYoutubeCreateManyArgs = {
    /**
     * The data used to create many UserYoutubes.
     */
    data: Enumerable<UserYoutubeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserYoutube update
   */
  export type UserYoutubeUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * The data needed to update a UserYoutube.
     */
    data: XOR<UserYoutubeUpdateInput, UserYoutubeUncheckedUpdateInput>
    /**
     * Choose, which UserYoutube to update.
     */
    where: UserYoutubeWhereUniqueInput
  }


  /**
   * UserYoutube updateMany
   */
  export type UserYoutubeUpdateManyArgs = {
    /**
     * The data used to update UserYoutubes.
     */
    data: XOR<UserYoutubeUpdateManyMutationInput, UserYoutubeUncheckedUpdateManyInput>
    /**
     * Filter which UserYoutubes to update
     */
    where?: UserYoutubeWhereInput
  }


  /**
   * UserYoutube upsert
   */
  export type UserYoutubeUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * The filter to search for the UserYoutube to update in case it exists.
     */
    where: UserYoutubeWhereUniqueInput
    /**
     * In case the UserYoutube found by the `where` argument doesn't exist, create a new UserYoutube with this data.
     */
    create: XOR<UserYoutubeCreateInput, UserYoutubeUncheckedCreateInput>
    /**
     * In case the UserYoutube was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserYoutubeUpdateInput, UserYoutubeUncheckedUpdateInput>
  }


  /**
   * UserYoutube delete
   */
  export type UserYoutubeDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
    /**
     * Filter which UserYoutube to delete.
     */
    where: UserYoutubeWhereUniqueInput
  }


  /**
   * UserYoutube deleteMany
   */
  export type UserYoutubeDeleteManyArgs = {
    /**
     * Filter which UserYoutubes to delete
     */
    where?: UserYoutubeWhereInput
  }


  /**
   * UserYoutube.chanel
   */
  export type UserYoutube$chanelArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    where?: ChanelWhereInput
    orderBy?: Enumerable<ChanelOrderByWithRelationInput>
    cursor?: ChanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChanelScalarFieldEnum>
  }


  /**
   * UserYoutube.Comment
   */
  export type UserYoutube$CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * UserYoutube.userToChanel
   */
  export type UserYoutube$userToChanelArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    where?: UserToChanelWhereInput
    orderBy?: Enumerable<UserToChanelOrderByWithRelationInput>
    cursor?: UserToChanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserToChanelScalarFieldEnum>
  }


  /**
   * UserYoutube.permission
   */
  export type UserYoutube$permissionArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    where?: PermissionWhereInput
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * UserYoutube without action
   */
  export type UserYoutubeArgs = {
    /**
     * Select specific fields to fetch from the UserYoutube
     */
    select?: UserYoutubeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserYoutubeInclude | null
  }



  /**
   * Model Chanel
   */


  export type AggregateChanel = {
    _count: ChanelCountAggregateOutputType | null
    _avg: ChanelAvgAggregateOutputType | null
    _sum: ChanelSumAggregateOutputType | null
    _min: ChanelMinAggregateOutputType | null
    _max: ChanelMaxAggregateOutputType | null
  }

  export type ChanelAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChanelSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChanelMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type ChanelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type ChanelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createAt: number
    updateAt: number
    userId: number
    _all: number
  }


  export type ChanelAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChanelSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChanelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type ChanelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type ChanelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createAt?: true
    updateAt?: true
    userId?: true
    _all?: true
  }

  export type ChanelAggregateArgs = {
    /**
     * Filter which Chanel to aggregate.
     */
    where?: ChanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chanels to fetch.
     */
    orderBy?: Enumerable<ChanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chanels
    **/
    _count?: true | ChanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChanelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChanelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChanelMaxAggregateInputType
  }

  export type GetChanelAggregateType<T extends ChanelAggregateArgs> = {
        [P in keyof T & keyof AggregateChanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChanel[P]>
      : GetScalarType<T[P], AggregateChanel[P]>
  }




  export type ChanelGroupByArgs = {
    where?: ChanelWhereInput
    orderBy?: Enumerable<ChanelOrderByWithAggregationInput>
    by: ChanelScalarFieldEnum[]
    having?: ChanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChanelCountAggregateInputType | true
    _avg?: ChanelAvgAggregateInputType
    _sum?: ChanelSumAggregateInputType
    _min?: ChanelMinAggregateInputType
    _max?: ChanelMaxAggregateInputType
  }


  export type ChanelGroupByOutputType = {
    id: number
    name: string
    description: string
    createAt: Date
    updateAt: Date
    userId: number
    _count: ChanelCountAggregateOutputType | null
    _avg: ChanelAvgAggregateOutputType | null
    _sum: ChanelSumAggregateOutputType | null
    _min: ChanelMinAggregateOutputType | null
    _max: ChanelMaxAggregateOutputType | null
  }

  type GetChanelGroupByPayload<T extends ChanelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ChanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChanelGroupByOutputType[P]>
            : GetScalarType<T[P], ChanelGroupByOutputType[P]>
        }
      >
    >


  export type ChanelSelect = {
    id?: boolean
    name?: boolean
    videos?: boolean | Chanel$videosArgs
    description?: boolean
    user?: boolean | UserYoutubeArgs
    createAt?: boolean
    updateAt?: boolean
    userToChanel?: boolean | Chanel$userToChanelArgs
    userId?: boolean
    Permission?: boolean | Chanel$PermissionArgs
    _count?: boolean | ChanelCountOutputTypeArgs
  }


  export type ChanelInclude = {
    videos?: boolean | Chanel$videosArgs
    user?: boolean | UserYoutubeArgs
    userToChanel?: boolean | Chanel$userToChanelArgs
    Permission?: boolean | Chanel$PermissionArgs
    _count?: boolean | ChanelCountOutputTypeArgs
  }

  export type ChanelGetPayload<S extends boolean | null | undefined | ChanelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Chanel :
    S extends undefined ? never :
    S extends { include: any } & (ChanelArgs | ChanelFindManyArgs)
    ? Chanel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'videos' ? Array < VideoGetPayload<S['include'][P]>>  :
        P extends 'user' ? UserYoutubeGetPayload<S['include'][P]> :
        P extends 'userToChanel' ? Array < UserToChanelGetPayload<S['include'][P]>>  :
        P extends 'Permission' ? Array < PermissionGetPayload<S['include'][P]>>  :
        P extends '_count' ? ChanelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChanelArgs | ChanelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'videos' ? Array < VideoGetPayload<S['select'][P]>>  :
        P extends 'user' ? UserYoutubeGetPayload<S['select'][P]> :
        P extends 'userToChanel' ? Array < UserToChanelGetPayload<S['select'][P]>>  :
        P extends 'Permission' ? Array < PermissionGetPayload<S['select'][P]>>  :
        P extends '_count' ? ChanelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Chanel ? Chanel[P] : never
  } 
      : Chanel


  type ChanelCountArgs = 
    Omit<ChanelFindManyArgs, 'select' | 'include'> & {
      select?: ChanelCountAggregateInputType | true
    }

  export interface ChanelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Chanel that matches the filter.
     * @param {ChanelFindUniqueArgs} args - Arguments to find a Chanel
     * @example
     * // Get one Chanel
     * const chanel = await prisma.chanel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChanelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChanelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Chanel'> extends True ? Prisma__ChanelClient<ChanelGetPayload<T>> : Prisma__ChanelClient<ChanelGetPayload<T> | null, null>

    /**
     * Find one Chanel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChanelFindUniqueOrThrowArgs} args - Arguments to find a Chanel
     * @example
     * // Get one Chanel
     * const chanel = await prisma.chanel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChanelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ChanelFindUniqueOrThrowArgs>
    ): Prisma__ChanelClient<ChanelGetPayload<T>>

    /**
     * Find the first Chanel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChanelFindFirstArgs} args - Arguments to find a Chanel
     * @example
     * // Get one Chanel
     * const chanel = await prisma.chanel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChanelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChanelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Chanel'> extends True ? Prisma__ChanelClient<ChanelGetPayload<T>> : Prisma__ChanelClient<ChanelGetPayload<T> | null, null>

    /**
     * Find the first Chanel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChanelFindFirstOrThrowArgs} args - Arguments to find a Chanel
     * @example
     * // Get one Chanel
     * const chanel = await prisma.chanel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChanelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChanelFindFirstOrThrowArgs>
    ): Prisma__ChanelClient<ChanelGetPayload<T>>

    /**
     * Find zero or more Chanels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChanelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chanels
     * const chanels = await prisma.chanel.findMany()
     * 
     * // Get first 10 Chanels
     * const chanels = await prisma.chanel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chanelWithIdOnly = await prisma.chanel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChanelFindManyArgs>(
      args?: SelectSubset<T, ChanelFindManyArgs>
    ): Prisma.PrismaPromise<Array<ChanelGetPayload<T>>>

    /**
     * Create a Chanel.
     * @param {ChanelCreateArgs} args - Arguments to create a Chanel.
     * @example
     * // Create one Chanel
     * const Chanel = await prisma.chanel.create({
     *   data: {
     *     // ... data to create a Chanel
     *   }
     * })
     * 
    **/
    create<T extends ChanelCreateArgs>(
      args: SelectSubset<T, ChanelCreateArgs>
    ): Prisma__ChanelClient<ChanelGetPayload<T>>

    /**
     * Create many Chanels.
     *     @param {ChanelCreateManyArgs} args - Arguments to create many Chanels.
     *     @example
     *     // Create many Chanels
     *     const chanel = await prisma.chanel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChanelCreateManyArgs>(
      args?: SelectSubset<T, ChanelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chanel.
     * @param {ChanelDeleteArgs} args - Arguments to delete one Chanel.
     * @example
     * // Delete one Chanel
     * const Chanel = await prisma.chanel.delete({
     *   where: {
     *     // ... filter to delete one Chanel
     *   }
     * })
     * 
    **/
    delete<T extends ChanelDeleteArgs>(
      args: SelectSubset<T, ChanelDeleteArgs>
    ): Prisma__ChanelClient<ChanelGetPayload<T>>

    /**
     * Update one Chanel.
     * @param {ChanelUpdateArgs} args - Arguments to update one Chanel.
     * @example
     * // Update one Chanel
     * const chanel = await prisma.chanel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChanelUpdateArgs>(
      args: SelectSubset<T, ChanelUpdateArgs>
    ): Prisma__ChanelClient<ChanelGetPayload<T>>

    /**
     * Delete zero or more Chanels.
     * @param {ChanelDeleteManyArgs} args - Arguments to filter Chanels to delete.
     * @example
     * // Delete a few Chanels
     * const { count } = await prisma.chanel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChanelDeleteManyArgs>(
      args?: SelectSubset<T, ChanelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chanels
     * const chanel = await prisma.chanel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChanelUpdateManyArgs>(
      args: SelectSubset<T, ChanelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chanel.
     * @param {ChanelUpsertArgs} args - Arguments to update or create a Chanel.
     * @example
     * // Update or create a Chanel
     * const chanel = await prisma.chanel.upsert({
     *   create: {
     *     // ... data to create a Chanel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chanel we want to update
     *   }
     * })
    **/
    upsert<T extends ChanelUpsertArgs>(
      args: SelectSubset<T, ChanelUpsertArgs>
    ): Prisma__ChanelClient<ChanelGetPayload<T>>

    /**
     * Count the number of Chanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChanelCountArgs} args - Arguments to filter Chanels to count.
     * @example
     * // Count the number of Chanels
     * const count = await prisma.chanel.count({
     *   where: {
     *     // ... the filter for the Chanels we want to count
     *   }
     * })
    **/
    count<T extends ChanelCountArgs>(
      args?: Subset<T, ChanelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChanelAggregateArgs>(args: Subset<T, ChanelAggregateArgs>): Prisma.PrismaPromise<GetChanelAggregateType<T>>

    /**
     * Group by Chanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChanelGroupByArgs} args - Group by arguments.
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
      T extends ChanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChanelGroupByArgs['orderBy'] }
        : { orderBy?: ChanelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChanelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Chanel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChanelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    videos<T extends Chanel$videosArgs= {}>(args?: Subset<T, Chanel$videosArgs>): Prisma.PrismaPromise<Array<VideoGetPayload<T>>| Null>;

    user<T extends UserYoutubeArgs= {}>(args?: Subset<T, UserYoutubeArgs>): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T> | Null>;

    userToChanel<T extends Chanel$userToChanelArgs= {}>(args?: Subset<T, Chanel$userToChanelArgs>): Prisma.PrismaPromise<Array<UserToChanelGetPayload<T>>| Null>;

    Permission<T extends Chanel$PermissionArgs= {}>(args?: Subset<T, Chanel$PermissionArgs>): Prisma.PrismaPromise<Array<PermissionGetPayload<T>>| Null>;

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
   * Chanel base type for findUnique actions
   */
  export type ChanelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * Filter, which Chanel to fetch.
     */
    where: ChanelWhereUniqueInput
  }

  /**
   * Chanel findUnique
   */
  export interface ChanelFindUniqueArgs extends ChanelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chanel findUniqueOrThrow
   */
  export type ChanelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * Filter, which Chanel to fetch.
     */
    where: ChanelWhereUniqueInput
  }


  /**
   * Chanel base type for findFirst actions
   */
  export type ChanelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * Filter, which Chanel to fetch.
     */
    where?: ChanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chanels to fetch.
     */
    orderBy?: Enumerable<ChanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chanels.
     */
    cursor?: ChanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chanels.
     */
    distinct?: Enumerable<ChanelScalarFieldEnum>
  }

  /**
   * Chanel findFirst
   */
  export interface ChanelFindFirstArgs extends ChanelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chanel findFirstOrThrow
   */
  export type ChanelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * Filter, which Chanel to fetch.
     */
    where?: ChanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chanels to fetch.
     */
    orderBy?: Enumerable<ChanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chanels.
     */
    cursor?: ChanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chanels.
     */
    distinct?: Enumerable<ChanelScalarFieldEnum>
  }


  /**
   * Chanel findMany
   */
  export type ChanelFindManyArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * Filter, which Chanels to fetch.
     */
    where?: ChanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chanels to fetch.
     */
    orderBy?: Enumerable<ChanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chanels.
     */
    cursor?: ChanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chanels.
     */
    skip?: number
    distinct?: Enumerable<ChanelScalarFieldEnum>
  }


  /**
   * Chanel create
   */
  export type ChanelCreateArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * The data needed to create a Chanel.
     */
    data: XOR<ChanelCreateInput, ChanelUncheckedCreateInput>
  }


  /**
   * Chanel createMany
   */
  export type ChanelCreateManyArgs = {
    /**
     * The data used to create many Chanels.
     */
    data: Enumerable<ChanelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Chanel update
   */
  export type ChanelUpdateArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * The data needed to update a Chanel.
     */
    data: XOR<ChanelUpdateInput, ChanelUncheckedUpdateInput>
    /**
     * Choose, which Chanel to update.
     */
    where: ChanelWhereUniqueInput
  }


  /**
   * Chanel updateMany
   */
  export type ChanelUpdateManyArgs = {
    /**
     * The data used to update Chanels.
     */
    data: XOR<ChanelUpdateManyMutationInput, ChanelUncheckedUpdateManyInput>
    /**
     * Filter which Chanels to update
     */
    where?: ChanelWhereInput
  }


  /**
   * Chanel upsert
   */
  export type ChanelUpsertArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * The filter to search for the Chanel to update in case it exists.
     */
    where: ChanelWhereUniqueInput
    /**
     * In case the Chanel found by the `where` argument doesn't exist, create a new Chanel with this data.
     */
    create: XOR<ChanelCreateInput, ChanelUncheckedCreateInput>
    /**
     * In case the Chanel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChanelUpdateInput, ChanelUncheckedUpdateInput>
  }


  /**
   * Chanel delete
   */
  export type ChanelDeleteArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
    /**
     * Filter which Chanel to delete.
     */
    where: ChanelWhereUniqueInput
  }


  /**
   * Chanel deleteMany
   */
  export type ChanelDeleteManyArgs = {
    /**
     * Filter which Chanels to delete
     */
    where?: ChanelWhereInput
  }


  /**
   * Chanel.videos
   */
  export type Chanel$videosArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    where?: VideoWhereInput
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Chanel.userToChanel
   */
  export type Chanel$userToChanelArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    where?: UserToChanelWhereInput
    orderBy?: Enumerable<UserToChanelOrderByWithRelationInput>
    cursor?: UserToChanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserToChanelScalarFieldEnum>
  }


  /**
   * Chanel.Permission
   */
  export type Chanel$PermissionArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    where?: PermissionWhereInput
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Chanel without action
   */
  export type ChanelArgs = {
    /**
     * Select specific fields to fetch from the Chanel
     */
    select?: ChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChanelInclude | null
  }



  /**
   * Model Comment
   */


  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    videoId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    videoId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    videoId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    videoId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    videoId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    createAt?: true
    updateAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    createAt?: true
    updateAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    videoId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CommentAggregateArgs = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs = {
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithAggregationInput>
    by: CommentScalarFieldEnum[]
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }


  export type CommentGroupByOutputType = {
    id: number
    userId: number
    videoId: number
    createAt: Date
    updateAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect = {
    id?: boolean
    user?: boolean | UserYoutubeArgs
    userId?: boolean
    video?: boolean | VideoArgs
    videoId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type CommentInclude = {
    user?: boolean | UserYoutubeArgs
    video?: boolean | VideoArgs
  }

  export type CommentGetPayload<S extends boolean | null | undefined | CommentArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Comment :
    S extends undefined ? never :
    S extends { include: any } & (CommentArgs | CommentFindManyArgs)
    ? Comment  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserYoutubeGetPayload<S['include'][P]> :
        P extends 'video' ? VideoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CommentArgs | CommentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserYoutubeGetPayload<S['select'][P]> :
        P extends 'video' ? VideoGetPayload<S['select'][P]> :  P extends keyof Comment ? Comment[P] : never
  } 
      : Comment


  type CommentCountArgs = 
    Omit<CommentFindManyArgs, 'select' | 'include'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Comment'> extends True ? Prisma__CommentClient<CommentGetPayload<T>> : Prisma__CommentClient<CommentGetPayload<T> | null, null>

    /**
     * Find the first Comment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs>
    ): Prisma.PrismaPromise<Array<CommentGetPayload<T>>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs>
    ): Prisma__CommentClient<CommentGetPayload<T>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommentClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user<T extends UserYoutubeArgs= {}>(args?: Subset<T, UserYoutubeArgs>): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T> | Null>;

    video<T extends VideoArgs= {}>(args?: Subset<T, VideoArgs>): Prisma__VideoClient<VideoGetPayload<T> | Null>;

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
   * Comment base type for findUnique actions
   */
  export type CommentFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUnique
   */
  export interface CommentFindUniqueArgs extends CommentFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment base type for findFirst actions
   */
  export type CommentFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: Enumerable<CommentScalarFieldEnum>
  }

  /**
   * Comment findFirst
   */
  export interface CommentFindFirstArgs extends CommentFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs = {
    /**
     * The data used to create many Comments.
     */
    data: Enumerable<CommentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment without action
   */
  export type CommentArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
  }



  /**
   * Model Video
   */


  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    chanelId: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    chanelId: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    url: string | null
    createAt: Date | null
    updateAt: Date | null
    chanelId: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    url: string | null
    createAt: Date | null
    updateAt: Date | null
    chanelId: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    name: number
    description: number
    url: number
    createAt: number
    updateAt: number
    chanelId: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    chanelId?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    chanelId?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    createAt?: true
    updateAt?: true
    chanelId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    createAt?: true
    updateAt?: true
    chanelId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    url?: true
    createAt?: true
    updateAt?: true
    chanelId?: true
    _all?: true
  }

  export type VideoAggregateArgs = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs = {
    where?: VideoWhereInput
    orderBy?: Enumerable<VideoOrderByWithAggregationInput>
    by: VideoScalarFieldEnum[]
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }


  export type VideoGroupByOutputType = {
    id: number
    name: string
    description: string
    url: string
    createAt: Date
    updateAt: Date
    chanelId: number | null
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    comments?: boolean | Video$commentsArgs
    url?: boolean
    createAt?: boolean
    updateAt?: boolean
    Chanel?: boolean | ChanelArgs
    chanelId?: boolean
    _count?: boolean | VideoCountOutputTypeArgs
  }


  export type VideoInclude = {
    comments?: boolean | Video$commentsArgs
    Chanel?: boolean | ChanelArgs
    _count?: boolean | VideoCountOutputTypeArgs
  }

  export type VideoGetPayload<S extends boolean | null | undefined | VideoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Video :
    S extends undefined ? never :
    S extends { include: any } & (VideoArgs | VideoFindManyArgs)
    ? Video  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'comments' ? Array < CommentGetPayload<S['include'][P]>>  :
        P extends 'Chanel' ? ChanelGetPayload<S['include'][P]> | null :
        P extends '_count' ? VideoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VideoArgs | VideoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'comments' ? Array < CommentGetPayload<S['select'][P]>>  :
        P extends 'Chanel' ? ChanelGetPayload<S['select'][P]> | null :
        P extends '_count' ? VideoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Video ? Video[P] : never
  } 
      : Video


  type VideoCountArgs = 
    Omit<VideoFindManyArgs, 'select' | 'include'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VideoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VideoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Video'> extends True ? Prisma__VideoClient<VideoGetPayload<T>> : Prisma__VideoClient<VideoGetPayload<T> | null, null>

    /**
     * Find one Video that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VideoFindUniqueOrThrowArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VideoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VideoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Video'> extends True ? Prisma__VideoClient<VideoGetPayload<T>> : Prisma__VideoClient<VideoGetPayload<T> | null, null>

    /**
     * Find the first Video that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VideoFindFirstOrThrowArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VideoFindManyArgs>(
      args?: SelectSubset<T, VideoFindManyArgs>
    ): Prisma.PrismaPromise<Array<VideoGetPayload<T>>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
    **/
    create<T extends VideoCreateArgs>(
      args: SelectSubset<T, VideoCreateArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Create many Videos.
     *     @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VideoCreateManyArgs>(
      args?: SelectSubset<T, VideoCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
    **/
    delete<T extends VideoDeleteArgs>(
      args: SelectSubset<T, VideoDeleteArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VideoUpdateArgs>(
      args: SelectSubset<T, VideoUpdateArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VideoDeleteManyArgs>(
      args?: SelectSubset<T, VideoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VideoUpdateManyArgs>(
      args: SelectSubset<T, VideoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
    **/
    upsert<T extends VideoUpsertArgs>(
      args: SelectSubset<T, VideoUpsertArgs>
    ): Prisma__VideoClient<VideoGetPayload<T>>

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VideoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    comments<T extends Video$commentsArgs= {}>(args?: Subset<T, Video$commentsArgs>): Prisma.PrismaPromise<Array<CommentGetPayload<T>>| Null>;

    Chanel<T extends ChanelArgs= {}>(args?: Subset<T, ChanelArgs>): Prisma__ChanelClient<ChanelGetPayload<T> | Null>;

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
   * Video base type for findUnique actions
   */
  export type VideoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUnique
   */
  export interface VideoFindUniqueArgs extends VideoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video base type for findFirst actions
   */
  export type VideoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: Enumerable<VideoScalarFieldEnum>
  }

  /**
   * Video findFirst
   */
  export interface VideoFindFirstArgs extends VideoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Video findMany
   */
  export type VideoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Video create
   */
  export type VideoCreateArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }


  /**
   * Video createMany
   */
  export type VideoCreateManyArgs = {
    /**
     * The data used to create many Videos.
     */
    data: Enumerable<VideoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Video update
   */
  export type VideoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
  }


  /**
   * Video upsert
   */
  export type VideoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }


  /**
   * Video delete
   */
  export type VideoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
  }


  /**
   * Video.comments
   */
  export type Video$commentsArgs = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude | null
    where?: CommentWhereInput
    orderBy?: Enumerable<CommentOrderByWithRelationInput>
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentScalarFieldEnum>
  }


  /**
   * Video without action
   */
  export type VideoArgs = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude | null
  }



  /**
   * Model Permission
   */


  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chanelId: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chanelId: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    role: RoleEnum | null
    edit: boolean | null
    post: boolean | null
    delete: boolean | null
    upload: boolean | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
    chanelId: number | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    role: RoleEnum | null
    edit: boolean | null
    post: boolean | null
    delete: boolean | null
    upload: boolean | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
    chanelId: number | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    role: number
    edit: number
    post: number
    delete: number
    upload: number
    createAt: number
    updateAt: number
    userId: number
    chanelId: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
    userId?: true
    chanelId?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
    userId?: true
    chanelId?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    role?: true
    edit?: true
    post?: true
    delete?: true
    upload?: true
    createAt?: true
    updateAt?: true
    userId?: true
    chanelId?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    role?: true
    edit?: true
    post?: true
    delete?: true
    upload?: true
    createAt?: true
    updateAt?: true
    userId?: true
    chanelId?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    role?: true
    edit?: true
    post?: true
    delete?: true
    upload?: true
    createAt?: true
    updateAt?: true
    userId?: true
    chanelId?: true
    _all?: true
  }

  export type PermissionAggregateArgs = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs = {
    where?: PermissionWhereInput
    orderBy?: Enumerable<PermissionOrderByWithAggregationInput>
    by: PermissionScalarFieldEnum[]
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }


  export type PermissionGroupByOutputType = {
    id: number
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt: Date
    updateAt: Date
    userId: number | null
    chanelId: number | null
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect = {
    id?: boolean
    role?: boolean
    edit?: boolean
    post?: boolean
    delete?: boolean
    upload?: boolean
    createAt?: boolean
    updateAt?: boolean
    User?: boolean | UserYoutubeArgs
    userId?: boolean
    Chanel?: boolean | ChanelArgs
    chanelId?: boolean
    userToChanel?: boolean | Permission$userToChanelArgs
    _count?: boolean | PermissionCountOutputTypeArgs
  }


  export type PermissionInclude = {
    User?: boolean | UserYoutubeArgs
    Chanel?: boolean | ChanelArgs
    userToChanel?: boolean | Permission$userToChanelArgs
    _count?: boolean | PermissionCountOutputTypeArgs
  }

  export type PermissionGetPayload<S extends boolean | null | undefined | PermissionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Permission :
    S extends undefined ? never :
    S extends { include: any } & (PermissionArgs | PermissionFindManyArgs)
    ? Permission  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'User' ? UserYoutubeGetPayload<S['include'][P]> | null :
        P extends 'Chanel' ? ChanelGetPayload<S['include'][P]> | null :
        P extends 'userToChanel' ? Array < UserToChanelGetPayload<S['include'][P]>>  :
        P extends '_count' ? PermissionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PermissionArgs | PermissionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'User' ? UserYoutubeGetPayload<S['select'][P]> | null :
        P extends 'Chanel' ? ChanelGetPayload<S['select'][P]> | null :
        P extends 'userToChanel' ? Array < UserToChanelGetPayload<S['select'][P]>>  :
        P extends '_count' ? PermissionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Permission ? Permission[P] : never
  } 
      : Permission


  type PermissionCountArgs = 
    Omit<PermissionFindManyArgs, 'select' | 'include'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PermissionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PermissionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Permission'> extends True ? Prisma__PermissionClient<PermissionGetPayload<T>> : Prisma__PermissionClient<PermissionGetPayload<T> | null, null>

    /**
     * Find one Permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PermissionFindUniqueOrThrowArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PermissionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PermissionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Permission'> extends True ? Prisma__PermissionClient<PermissionGetPayload<T>> : Prisma__PermissionClient<PermissionGetPayload<T> | null, null>

    /**
     * Find the first Permission that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PermissionFindFirstOrThrowArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PermissionFindManyArgs>(
      args?: SelectSubset<T, PermissionFindManyArgs>
    ): Prisma.PrismaPromise<Array<PermissionGetPayload<T>>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends PermissionCreateArgs>(
      args: SelectSubset<T, PermissionCreateArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Create many Permissions.
     *     @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     *     @example
     *     // Create many Permissions
     *     const permission = await prisma.permission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PermissionCreateManyArgs>(
      args?: SelectSubset<T, PermissionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends PermissionDeleteArgs>(
      args: SelectSubset<T, PermissionDeleteArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PermissionUpdateArgs>(
      args: SelectSubset<T, PermissionUpdateArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PermissionDeleteManyArgs>(
      args?: SelectSubset<T, PermissionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PermissionUpdateManyArgs>(
      args: SelectSubset<T, PermissionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends PermissionUpsertArgs>(
      args: SelectSubset<T, PermissionUpsertArgs>
    ): Prisma__PermissionClient<PermissionGetPayload<T>>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PermissionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    User<T extends UserYoutubeArgs= {}>(args?: Subset<T, UserYoutubeArgs>): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T> | Null>;

    Chanel<T extends ChanelArgs= {}>(args?: Subset<T, ChanelArgs>): Prisma__ChanelClient<ChanelGetPayload<T> | Null>;

    userToChanel<T extends Permission$userToChanelArgs= {}>(args?: Subset<T, Permission$userToChanelArgs>): Prisma.PrismaPromise<Array<UserToChanelGetPayload<T>>| Null>;

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
   * Permission base type for findUnique actions
   */
  export type PermissionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUnique
   */
  export interface PermissionFindUniqueArgs extends PermissionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission base type for findFirst actions
   */
  export type PermissionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }

  /**
   * Permission findFirst
   */
  export interface PermissionFindFirstArgs extends PermissionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: Enumerable<PermissionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: Enumerable<PermissionScalarFieldEnum>
  }


  /**
   * Permission create
   */
  export type PermissionCreateArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }


  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs = {
    /**
     * The data used to create many Permissions.
     */
    data: Enumerable<PermissionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Permission update
   */
  export type PermissionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }


  /**
   * Permission delete
   */
  export type PermissionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission.userToChanel
   */
  export type Permission$userToChanelArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    where?: UserToChanelWhereInput
    orderBy?: Enumerable<UserToChanelOrderByWithRelationInput>
    cursor?: UserToChanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserToChanelScalarFieldEnum>
  }


  /**
   * Permission without action
   */
  export type PermissionArgs = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude | null
  }



  /**
   * Model UserToChanel
   */


  export type AggregateUserToChanel = {
    _count: UserToChanelCountAggregateOutputType | null
    _avg: UserToChanelAvgAggregateOutputType | null
    _sum: UserToChanelSumAggregateOutputType | null
    _min: UserToChanelMinAggregateOutputType | null
    _max: UserToChanelMaxAggregateOutputType | null
  }

  export type UserToChanelAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chanelId: number | null
    permissionId: number | null
  }

  export type UserToChanelSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chanelId: number | null
    permissionId: number | null
  }

  export type UserToChanelMinAggregateOutputType = {
    id: number | null
    role: RoleEnum | null
    userId: number | null
    chanelId: number | null
    permissionId: number | null
  }

  export type UserToChanelMaxAggregateOutputType = {
    id: number | null
    role: RoleEnum | null
    userId: number | null
    chanelId: number | null
    permissionId: number | null
  }

  export type UserToChanelCountAggregateOutputType = {
    id: number
    role: number
    userId: number
    chanelId: number
    permissionId: number
    _all: number
  }


  export type UserToChanelAvgAggregateInputType = {
    id?: true
    userId?: true
    chanelId?: true
    permissionId?: true
  }

  export type UserToChanelSumAggregateInputType = {
    id?: true
    userId?: true
    chanelId?: true
    permissionId?: true
  }

  export type UserToChanelMinAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    chanelId?: true
    permissionId?: true
  }

  export type UserToChanelMaxAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    chanelId?: true
    permissionId?: true
  }

  export type UserToChanelCountAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    chanelId?: true
    permissionId?: true
    _all?: true
  }

  export type UserToChanelAggregateArgs = {
    /**
     * Filter which UserToChanel to aggregate.
     */
    where?: UserToChanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToChanels to fetch.
     */
    orderBy?: Enumerable<UserToChanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserToChanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToChanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToChanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserToChanels
    **/
    _count?: true | UserToChanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserToChanelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserToChanelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserToChanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserToChanelMaxAggregateInputType
  }

  export type GetUserToChanelAggregateType<T extends UserToChanelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToChanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToChanel[P]>
      : GetScalarType<T[P], AggregateUserToChanel[P]>
  }




  export type UserToChanelGroupByArgs = {
    where?: UserToChanelWhereInput
    orderBy?: Enumerable<UserToChanelOrderByWithAggregationInput>
    by: UserToChanelScalarFieldEnum[]
    having?: UserToChanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserToChanelCountAggregateInputType | true
    _avg?: UserToChanelAvgAggregateInputType
    _sum?: UserToChanelSumAggregateInputType
    _min?: UserToChanelMinAggregateInputType
    _max?: UserToChanelMaxAggregateInputType
  }


  export type UserToChanelGroupByOutputType = {
    id: number
    role: RoleEnum
    userId: number
    chanelId: number
    permissionId: number
    _count: UserToChanelCountAggregateOutputType | null
    _avg: UserToChanelAvgAggregateOutputType | null
    _sum: UserToChanelSumAggregateOutputType | null
    _min: UserToChanelMinAggregateOutputType | null
    _max: UserToChanelMaxAggregateOutputType | null
  }

  type GetUserToChanelGroupByPayload<T extends UserToChanelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserToChanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserToChanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserToChanelGroupByOutputType[P]>
            : GetScalarType<T[P], UserToChanelGroupByOutputType[P]>
        }
      >
    >


  export type UserToChanelSelect = {
    id?: boolean
    role?: boolean
    user?: boolean | UserYoutubeArgs
    userId?: boolean
    chanel?: boolean | ChanelArgs
    chanelId?: boolean
    permission?: boolean | PermissionArgs
    permissionId?: boolean
  }


  export type UserToChanelInclude = {
    user?: boolean | UserYoutubeArgs
    chanel?: boolean | ChanelArgs
    permission?: boolean | PermissionArgs
  }

  export type UserToChanelGetPayload<S extends boolean | null | undefined | UserToChanelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserToChanel :
    S extends undefined ? never :
    S extends { include: any } & (UserToChanelArgs | UserToChanelFindManyArgs)
    ? UserToChanel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserYoutubeGetPayload<S['include'][P]> :
        P extends 'chanel' ? ChanelGetPayload<S['include'][P]> :
        P extends 'permission' ? PermissionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserToChanelArgs | UserToChanelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserYoutubeGetPayload<S['select'][P]> :
        P extends 'chanel' ? ChanelGetPayload<S['select'][P]> :
        P extends 'permission' ? PermissionGetPayload<S['select'][P]> :  P extends keyof UserToChanel ? UserToChanel[P] : never
  } 
      : UserToChanel


  type UserToChanelCountArgs = 
    Omit<UserToChanelFindManyArgs, 'select' | 'include'> & {
      select?: UserToChanelCountAggregateInputType | true
    }

  export interface UserToChanelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserToChanel that matches the filter.
     * @param {UserToChanelFindUniqueArgs} args - Arguments to find a UserToChanel
     * @example
     * // Get one UserToChanel
     * const userToChanel = await prisma.userToChanel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserToChanelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserToChanelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserToChanel'> extends True ? Prisma__UserToChanelClient<UserToChanelGetPayload<T>> : Prisma__UserToChanelClient<UserToChanelGetPayload<T> | null, null>

    /**
     * Find one UserToChanel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserToChanelFindUniqueOrThrowArgs} args - Arguments to find a UserToChanel
     * @example
     * // Get one UserToChanel
     * const userToChanel = await prisma.userToChanel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserToChanelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserToChanelFindUniqueOrThrowArgs>
    ): Prisma__UserToChanelClient<UserToChanelGetPayload<T>>

    /**
     * Find the first UserToChanel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToChanelFindFirstArgs} args - Arguments to find a UserToChanel
     * @example
     * // Get one UserToChanel
     * const userToChanel = await prisma.userToChanel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserToChanelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserToChanelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserToChanel'> extends True ? Prisma__UserToChanelClient<UserToChanelGetPayload<T>> : Prisma__UserToChanelClient<UserToChanelGetPayload<T> | null, null>

    /**
     * Find the first UserToChanel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToChanelFindFirstOrThrowArgs} args - Arguments to find a UserToChanel
     * @example
     * // Get one UserToChanel
     * const userToChanel = await prisma.userToChanel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserToChanelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserToChanelFindFirstOrThrowArgs>
    ): Prisma__UserToChanelClient<UserToChanelGetPayload<T>>

    /**
     * Find zero or more UserToChanels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToChanelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserToChanels
     * const userToChanels = await prisma.userToChanel.findMany()
     * 
     * // Get first 10 UserToChanels
     * const userToChanels = await prisma.userToChanel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userToChanelWithIdOnly = await prisma.userToChanel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserToChanelFindManyArgs>(
      args?: SelectSubset<T, UserToChanelFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserToChanelGetPayload<T>>>

    /**
     * Create a UserToChanel.
     * @param {UserToChanelCreateArgs} args - Arguments to create a UserToChanel.
     * @example
     * // Create one UserToChanel
     * const UserToChanel = await prisma.userToChanel.create({
     *   data: {
     *     // ... data to create a UserToChanel
     *   }
     * })
     * 
    **/
    create<T extends UserToChanelCreateArgs>(
      args: SelectSubset<T, UserToChanelCreateArgs>
    ): Prisma__UserToChanelClient<UserToChanelGetPayload<T>>

    /**
     * Create many UserToChanels.
     *     @param {UserToChanelCreateManyArgs} args - Arguments to create many UserToChanels.
     *     @example
     *     // Create many UserToChanels
     *     const userToChanel = await prisma.userToChanel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserToChanelCreateManyArgs>(
      args?: SelectSubset<T, UserToChanelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserToChanel.
     * @param {UserToChanelDeleteArgs} args - Arguments to delete one UserToChanel.
     * @example
     * // Delete one UserToChanel
     * const UserToChanel = await prisma.userToChanel.delete({
     *   where: {
     *     // ... filter to delete one UserToChanel
     *   }
     * })
     * 
    **/
    delete<T extends UserToChanelDeleteArgs>(
      args: SelectSubset<T, UserToChanelDeleteArgs>
    ): Prisma__UserToChanelClient<UserToChanelGetPayload<T>>

    /**
     * Update one UserToChanel.
     * @param {UserToChanelUpdateArgs} args - Arguments to update one UserToChanel.
     * @example
     * // Update one UserToChanel
     * const userToChanel = await prisma.userToChanel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserToChanelUpdateArgs>(
      args: SelectSubset<T, UserToChanelUpdateArgs>
    ): Prisma__UserToChanelClient<UserToChanelGetPayload<T>>

    /**
     * Delete zero or more UserToChanels.
     * @param {UserToChanelDeleteManyArgs} args - Arguments to filter UserToChanels to delete.
     * @example
     * // Delete a few UserToChanels
     * const { count } = await prisma.userToChanel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserToChanelDeleteManyArgs>(
      args?: SelectSubset<T, UserToChanelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserToChanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToChanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserToChanels
     * const userToChanel = await prisma.userToChanel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserToChanelUpdateManyArgs>(
      args: SelectSubset<T, UserToChanelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserToChanel.
     * @param {UserToChanelUpsertArgs} args - Arguments to update or create a UserToChanel.
     * @example
     * // Update or create a UserToChanel
     * const userToChanel = await prisma.userToChanel.upsert({
     *   create: {
     *     // ... data to create a UserToChanel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToChanel we want to update
     *   }
     * })
    **/
    upsert<T extends UserToChanelUpsertArgs>(
      args: SelectSubset<T, UserToChanelUpsertArgs>
    ): Prisma__UserToChanelClient<UserToChanelGetPayload<T>>

    /**
     * Count the number of UserToChanels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToChanelCountArgs} args - Arguments to filter UserToChanels to count.
     * @example
     * // Count the number of UserToChanels
     * const count = await prisma.userToChanel.count({
     *   where: {
     *     // ... the filter for the UserToChanels we want to count
     *   }
     * })
    **/
    count<T extends UserToChanelCountArgs>(
      args?: Subset<T, UserToChanelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserToChanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToChanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToChanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserToChanelAggregateArgs>(args: Subset<T, UserToChanelAggregateArgs>): Prisma.PrismaPromise<GetUserToChanelAggregateType<T>>

    /**
     * Group by UserToChanel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToChanelGroupByArgs} args - Group by arguments.
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
      T extends UserToChanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserToChanelGroupByArgs['orderBy'] }
        : { orderBy?: UserToChanelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserToChanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserToChanelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToChanel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserToChanelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    user<T extends UserYoutubeArgs= {}>(args?: Subset<T, UserYoutubeArgs>): Prisma__UserYoutubeClient<UserYoutubeGetPayload<T> | Null>;

    chanel<T extends ChanelArgs= {}>(args?: Subset<T, ChanelArgs>): Prisma__ChanelClient<ChanelGetPayload<T> | Null>;

    permission<T extends PermissionArgs= {}>(args?: Subset<T, PermissionArgs>): Prisma__PermissionClient<PermissionGetPayload<T> | Null>;

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
   * UserToChanel base type for findUnique actions
   */
  export type UserToChanelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * Filter, which UserToChanel to fetch.
     */
    where: UserToChanelWhereUniqueInput
  }

  /**
   * UserToChanel findUnique
   */
  export interface UserToChanelFindUniqueArgs extends UserToChanelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserToChanel findUniqueOrThrow
   */
  export type UserToChanelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * Filter, which UserToChanel to fetch.
     */
    where: UserToChanelWhereUniqueInput
  }


  /**
   * UserToChanel base type for findFirst actions
   */
  export type UserToChanelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * Filter, which UserToChanel to fetch.
     */
    where?: UserToChanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToChanels to fetch.
     */
    orderBy?: Enumerable<UserToChanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserToChanels.
     */
    cursor?: UserToChanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToChanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToChanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserToChanels.
     */
    distinct?: Enumerable<UserToChanelScalarFieldEnum>
  }

  /**
   * UserToChanel findFirst
   */
  export interface UserToChanelFindFirstArgs extends UserToChanelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserToChanel findFirstOrThrow
   */
  export type UserToChanelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * Filter, which UserToChanel to fetch.
     */
    where?: UserToChanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToChanels to fetch.
     */
    orderBy?: Enumerable<UserToChanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserToChanels.
     */
    cursor?: UserToChanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToChanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToChanels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserToChanels.
     */
    distinct?: Enumerable<UserToChanelScalarFieldEnum>
  }


  /**
   * UserToChanel findMany
   */
  export type UserToChanelFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * Filter, which UserToChanels to fetch.
     */
    where?: UserToChanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToChanels to fetch.
     */
    orderBy?: Enumerable<UserToChanelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserToChanels.
     */
    cursor?: UserToChanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToChanels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToChanels.
     */
    skip?: number
    distinct?: Enumerable<UserToChanelScalarFieldEnum>
  }


  /**
   * UserToChanel create
   */
  export type UserToChanelCreateArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * The data needed to create a UserToChanel.
     */
    data: XOR<UserToChanelCreateInput, UserToChanelUncheckedCreateInput>
  }


  /**
   * UserToChanel createMany
   */
  export type UserToChanelCreateManyArgs = {
    /**
     * The data used to create many UserToChanels.
     */
    data: Enumerable<UserToChanelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserToChanel update
   */
  export type UserToChanelUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * The data needed to update a UserToChanel.
     */
    data: XOR<UserToChanelUpdateInput, UserToChanelUncheckedUpdateInput>
    /**
     * Choose, which UserToChanel to update.
     */
    where: UserToChanelWhereUniqueInput
  }


  /**
   * UserToChanel updateMany
   */
  export type UserToChanelUpdateManyArgs = {
    /**
     * The data used to update UserToChanels.
     */
    data: XOR<UserToChanelUpdateManyMutationInput, UserToChanelUncheckedUpdateManyInput>
    /**
     * Filter which UserToChanels to update
     */
    where?: UserToChanelWhereInput
  }


  /**
   * UserToChanel upsert
   */
  export type UserToChanelUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * The filter to search for the UserToChanel to update in case it exists.
     */
    where: UserToChanelWhereUniqueInput
    /**
     * In case the UserToChanel found by the `where` argument doesn't exist, create a new UserToChanel with this data.
     */
    create: XOR<UserToChanelCreateInput, UserToChanelUncheckedCreateInput>
    /**
     * In case the UserToChanel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserToChanelUpdateInput, UserToChanelUncheckedUpdateInput>
  }


  /**
   * UserToChanel delete
   */
  export type UserToChanelDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
    /**
     * Filter which UserToChanel to delete.
     */
    where: UserToChanelWhereUniqueInput
  }


  /**
   * UserToChanel deleteMany
   */
  export type UserToChanelDeleteManyArgs = {
    /**
     * Filter which UserToChanels to delete
     */
    where?: UserToChanelWhereInput
  }


  /**
   * UserToChanel without action
   */
  export type UserToChanelArgs = {
    /**
     * Select specific fields to fetch from the UserToChanel
     */
    select?: UserToChanelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserToChanelInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ChanelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createAt: 'createAt',
    updateAt: 'updateAt',
    userId: 'userId'
  };

  export type ChanelScalarFieldEnum = (typeof ChanelScalarFieldEnum)[keyof typeof ChanelScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    videoId: 'videoId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    role: 'role',
    edit: 'edit',
    post: 'post',
    delete: 'delete',
    upload: 'upload',
    createAt: 'createAt',
    updateAt: 'updateAt',
    userId: 'userId',
    chanelId: 'chanelId'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


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


  export const UserToChanelScalarFieldEnum: {
    id: 'id',
    role: 'role',
    userId: 'userId',
    chanelId: 'chanelId',
    permissionId: 'permissionId'
  };

  export type UserToChanelScalarFieldEnum = (typeof UserToChanelScalarFieldEnum)[keyof typeof UserToChanelScalarFieldEnum]


  export const UserYoutubeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    imageProfile: 'imageProfile',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserYoutubeScalarFieldEnum = (typeof UserYoutubeScalarFieldEnum)[keyof typeof UserYoutubeScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    url: 'url',
    createAt: 'createAt',
    updateAt: 'updateAt',
    chanelId: 'chanelId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserYoutubeWhereInput = {
    AND?: Enumerable<UserYoutubeWhereInput>
    OR?: Enumerable<UserYoutubeWhereInput>
    NOT?: Enumerable<UserYoutubeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    imageProfile?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    chanel?: ChanelListRelationFilter
    Comment?: CommentListRelationFilter
    userToChanel?: UserToChanelListRelationFilter
    permission?: PermissionListRelationFilter
  }

  export type UserYoutubeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageProfile?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    chanel?: ChanelOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
    userToChanel?: UserToChanelOrderByRelationAggregateInput
    permission?: PermissionOrderByRelationAggregateInput
  }

  export type UserYoutubeWhereUniqueInput = {
    id?: number
  }

  export type UserYoutubeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageProfile?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserYoutubeCountOrderByAggregateInput
    _avg?: UserYoutubeAvgOrderByAggregateInput
    _max?: UserYoutubeMaxOrderByAggregateInput
    _min?: UserYoutubeMinOrderByAggregateInput
    _sum?: UserYoutubeSumOrderByAggregateInput
  }

  export type UserYoutubeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserYoutubeScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserYoutubeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserYoutubeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    imageProfile?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ChanelWhereInput = {
    AND?: Enumerable<ChanelWhereInput>
    OR?: Enumerable<ChanelWhereInput>
    NOT?: Enumerable<ChanelWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    videos?: VideoListRelationFilter
    description?: StringFilter | string
    user?: XOR<UserYoutubeRelationFilter, UserYoutubeWhereInput>
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    userToChanel?: UserToChanelListRelationFilter
    userId?: IntFilter | number
    Permission?: PermissionListRelationFilter
  }

  export type ChanelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
    description?: SortOrder
    user?: UserYoutubeOrderByWithRelationInput
    createAt?: SortOrder
    updateAt?: SortOrder
    userToChanel?: UserToChanelOrderByRelationAggregateInput
    userId?: SortOrder
    Permission?: PermissionOrderByRelationAggregateInput
  }

  export type ChanelWhereUniqueInput = {
    id?: number
  }

  export type ChanelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    _count?: ChanelCountOrderByAggregateInput
    _avg?: ChanelAvgOrderByAggregateInput
    _max?: ChanelMaxOrderByAggregateInput
    _min?: ChanelMinOrderByAggregateInput
    _sum?: ChanelSumOrderByAggregateInput
  }

  export type ChanelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChanelScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChanelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChanelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
  }

  export type CommentWhereInput = {
    AND?: Enumerable<CommentWhereInput>
    OR?: Enumerable<CommentWhereInput>
    NOT?: Enumerable<CommentWhereInput>
    id?: IntFilter | number
    user?: XOR<UserYoutubeRelationFilter, UserYoutubeWhereInput>
    userId?: IntFilter | number
    video?: XOR<VideoRelationFilter, VideoWhereInput>
    videoId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserYoutubeOrderByWithRelationInput
    userId?: SortOrder
    video?: VideoOrderByWithRelationInput
    videoId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentWhereUniqueInput = {
    id?: number
  }

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CommentScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommentScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    videoId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VideoWhereInput = {
    AND?: Enumerable<VideoWhereInput>
    OR?: Enumerable<VideoWhereInput>
    NOT?: Enumerable<VideoWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    comments?: CommentListRelationFilter
    url?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    Chanel?: XOR<ChanelRelationFilter, ChanelWhereInput> | null
    chanelId?: IntNullableFilter | number | null
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    url?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Chanel?: ChanelOrderByWithRelationInput
    chanelId?: SortOrder
  }

  export type VideoWhereUniqueInput = {
    id?: number
  }

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    chanelId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VideoScalarWhereWithAggregatesInput>
    OR?: Enumerable<VideoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VideoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    chanelId?: IntNullableWithAggregatesFilter | number | null
  }

  export type PermissionWhereInput = {
    AND?: Enumerable<PermissionWhereInput>
    OR?: Enumerable<PermissionWhereInput>
    NOT?: Enumerable<PermissionWhereInput>
    id?: IntFilter | number
    role?: EnumRoleEnumFilter | RoleEnum
    edit?: BoolFilter | boolean
    post?: BoolFilter | boolean
    delete?: BoolFilter | boolean
    upload?: BoolFilter | boolean
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    User?: XOR<UserYoutubeRelationFilter, UserYoutubeWhereInput> | null
    userId?: IntNullableFilter | number | null
    Chanel?: XOR<ChanelRelationFilter, ChanelWhereInput> | null
    chanelId?: IntNullableFilter | number | null
    userToChanel?: UserToChanelListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    edit?: SortOrder
    post?: SortOrder
    delete?: SortOrder
    upload?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    User?: UserYoutubeOrderByWithRelationInput
    userId?: SortOrder
    Chanel?: ChanelOrderByWithRelationInput
    chanelId?: SortOrder
    userToChanel?: UserToChanelOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = {
    id?: number
  }

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    edit?: SortOrder
    post?: SortOrder
    delete?: SortOrder
    upload?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PermissionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    role?: EnumRoleEnumWithAggregatesFilter | RoleEnum
    edit?: BoolWithAggregatesFilter | boolean
    post?: BoolWithAggregatesFilter | boolean
    delete?: BoolWithAggregatesFilter | boolean
    upload?: BoolWithAggregatesFilter | boolean
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntNullableWithAggregatesFilter | number | null
    chanelId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserToChanelWhereInput = {
    AND?: Enumerable<UserToChanelWhereInput>
    OR?: Enumerable<UserToChanelWhereInput>
    NOT?: Enumerable<UserToChanelWhereInput>
    id?: IntFilter | number
    role?: EnumRoleEnumFilter | RoleEnum
    user?: XOR<UserYoutubeRelationFilter, UserYoutubeWhereInput>
    userId?: IntFilter | number
    chanel?: XOR<ChanelRelationFilter, ChanelWhereInput>
    chanelId?: IntFilter | number
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
    permissionId?: IntFilter | number
  }

  export type UserToChanelOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    user?: UserYoutubeOrderByWithRelationInput
    userId?: SortOrder
    chanel?: ChanelOrderByWithRelationInput
    chanelId?: SortOrder
    permission?: PermissionOrderByWithRelationInput
    permissionId?: SortOrder
  }

  export type UserToChanelWhereUniqueInput = {
    id?: number
  }

  export type UserToChanelOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
    permissionId?: SortOrder
    _count?: UserToChanelCountOrderByAggregateInput
    _avg?: UserToChanelAvgOrderByAggregateInput
    _max?: UserToChanelMaxOrderByAggregateInput
    _min?: UserToChanelMinOrderByAggregateInput
    _sum?: UserToChanelSumOrderByAggregateInput
  }

  export type UserToChanelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserToChanelScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserToChanelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserToChanelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    role?: EnumRoleEnumWithAggregatesFilter | RoleEnum
    userId?: IntWithAggregatesFilter | number
    chanelId?: IntWithAggregatesFilter | number
    permissionId?: IntWithAggregatesFilter | number
  }

  export type UserYoutubeCreateInput = {
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    chanel?: ChanelCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    userToChanel?: UserToChanelCreateNestedManyWithoutUserInput
    permission?: PermissionCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    chanel?: ChanelUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutUserInput
    permission?: PermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanel?: ChanelUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    userToChanel?: UserToChanelUpdateManyWithoutUserNestedInput
    permission?: PermissionUpdateManyWithoutUserNestedInput
  }

  export type UserYoutubeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanel?: ChanelUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutUserNestedInput
    permission?: PermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserYoutubeCreateManyInput = {
    id?: number
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserYoutubeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserYoutubeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChanelCreateInput = {
    name: string
    videos?: VideoCreateNestedManyWithoutChanelInput
    description: string
    user: UserYoutubeCreateNestedOneWithoutChanelInput
    createAt?: Date | string
    updateAt?: Date | string
    userToChanel?: UserToChanelCreateNestedManyWithoutChanelInput
    Permission?: PermissionCreateNestedManyWithoutChanelInput
  }

  export type ChanelUncheckedCreateInput = {
    id?: number
    name: string
    videos?: VideoUncheckedCreateNestedManyWithoutChanelInput
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutChanelInput
    userId: number
    Permission?: PermissionUncheckedCreateNestedManyWithoutChanelInput
  }

  export type ChanelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutChanelNestedInput
    description?: StringFieldUpdateOperationsInput | string
    user?: UserYoutubeUpdateOneRequiredWithoutChanelNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userToChanel?: UserToChanelUpdateManyWithoutChanelNestedInput
    Permission?: PermissionUpdateManyWithoutChanelNestedInput
  }

  export type ChanelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutChanelNestedInput
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutChanelNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    Permission?: PermissionUncheckedUpdateManyWithoutChanelNestedInput
  }

  export type ChanelCreateManyInput = {
    id?: number
    name: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
  }

  export type ChanelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChanelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    user: UserYoutubeCreateNestedOneWithoutCommentInput
    video: VideoCreateNestedOneWithoutCommentsInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    userId: number
    videoId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentUpdateInput = {
    user?: UserYoutubeUpdateOneRequiredWithoutCommentNestedInput
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    userId: number
    videoId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    name: string
    description: string
    comments?: CommentCreateNestedManyWithoutVideoInput
    url: string
    createAt?: Date | string
    updateAt?: Date | string
    Chanel?: ChanelCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    url: string
    createAt?: Date | string
    updateAt?: Date | string
    chanelId?: number | null
  }

  export type VideoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutVideoNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chanel?: ChanelUpdateOneWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VideoCreateManyInput = {
    id?: number
    name: string
    description: string
    url: string
    createAt?: Date | string
    updateAt?: Date | string
    chanelId?: number | null
  }

  export type VideoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissionCreateInput = {
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    User?: UserYoutubeCreateNestedOneWithoutPermissionInput
    Chanel?: ChanelCreateNestedOneWithoutPermissionInput
    userToChanel?: UserToChanelCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId?: number | null
    chanelId?: number | null
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserYoutubeUpdateOneWithoutPermissionNestedInput
    Chanel?: ChanelUpdateOneWithoutPermissionNestedInput
    userToChanel?: UserToChanelUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chanelId?: NullableIntFieldUpdateOperationsInput | number | null
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId?: number | null
    chanelId?: number | null
  }

  export type PermissionUpdateManyMutationInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chanelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserToChanelCreateInput = {
    role: RoleEnum
    user: UserYoutubeCreateNestedOneWithoutUserToChanelInput
    chanel: ChanelCreateNestedOneWithoutUserToChanelInput
    permission: PermissionCreateNestedOneWithoutUserToChanelInput
  }

  export type UserToChanelUncheckedCreateInput = {
    id?: number
    role: RoleEnum
    userId: number
    chanelId: number
    permissionId: number
  }

  export type UserToChanelUpdateInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    user?: UserYoutubeUpdateOneRequiredWithoutUserToChanelNestedInput
    chanel?: ChanelUpdateOneRequiredWithoutUserToChanelNestedInput
    permission?: PermissionUpdateOneRequiredWithoutUserToChanelNestedInput
  }

  export type UserToChanelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    userId?: IntFieldUpdateOperationsInput | number
    chanelId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserToChanelCreateManyInput = {
    id?: number
    role: RoleEnum
    userId: number
    chanelId: number
    permissionId: number
  }

  export type UserToChanelUpdateManyMutationInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
  }

  export type UserToChanelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    userId?: IntFieldUpdateOperationsInput | number
    chanelId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
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

  export type ChanelListRelationFilter = {
    every?: ChanelWhereInput
    some?: ChanelWhereInput
    none?: ChanelWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type UserToChanelListRelationFilter = {
    every?: UserToChanelWhereInput
    some?: UserToChanelWhereInput
    none?: UserToChanelWhereInput
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type ChanelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserToChanelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserYoutubeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageProfile?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserYoutubeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserYoutubeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageProfile?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserYoutubeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageProfile?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserYoutubeSumOrderByAggregateInput = {
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

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type UserYoutubeRelationFilter = {
    is?: UserYoutubeWhereInput
    isNot?: UserYoutubeWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChanelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type ChanelAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChanelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type ChanelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type ChanelSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VideoRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
  }

  export type ChanelRelationFilter = {
    is?: ChanelWhereInput
    isNot?: ChanelWhereInput
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

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    chanelId?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    chanelId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    chanelId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    chanelId?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    chanelId?: SortOrder
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

  export type EnumRoleEnumFilter = {
    equals?: RoleEnum
    in?: Enumerable<RoleEnum>
    notIn?: Enumerable<RoleEnum>
    not?: NestedEnumRoleEnumFilter | RoleEnum
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    edit?: SortOrder
    post?: SortOrder
    delete?: SortOrder
    upload?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    edit?: SortOrder
    post?: SortOrder
    delete?: SortOrder
    upload?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    edit?: SortOrder
    post?: SortOrder
    delete?: SortOrder
    upload?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
  }

  export type EnumRoleEnumWithAggregatesFilter = {
    equals?: RoleEnum
    in?: Enumerable<RoleEnum>
    notIn?: Enumerable<RoleEnum>
    not?: NestedEnumRoleEnumWithAggregatesFilter | RoleEnum
    _count?: NestedIntFilter
    _min?: NestedEnumRoleEnumFilter
    _max?: NestedEnumRoleEnumFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type PermissionRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type UserToChanelCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
    permissionId?: SortOrder
  }

  export type UserToChanelAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
    permissionId?: SortOrder
  }

  export type UserToChanelMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
    permissionId?: SortOrder
  }

  export type UserToChanelMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
    permissionId?: SortOrder
  }

  export type UserToChanelSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chanelId?: SortOrder
    permissionId?: SortOrder
  }

  export type ChanelCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ChanelCreateWithoutUserInput>, Enumerable<ChanelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChanelCreateOrConnectWithoutUserInput>
    createMany?: ChanelCreateManyUserInputEnvelope
    connect?: Enumerable<ChanelWhereUniqueInput>
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type UserToChanelCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutUserInput>, Enumerable<UserToChanelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutUserInput>
    createMany?: UserToChanelCreateManyUserInputEnvelope
    connect?: Enumerable<UserToChanelWhereUniqueInput>
  }

  export type PermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutUserInput>, Enumerable<PermissionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutUserInput>
    createMany?: PermissionCreateManyUserInputEnvelope
    connect?: Enumerable<PermissionWhereUniqueInput>
  }

  export type ChanelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ChanelCreateWithoutUserInput>, Enumerable<ChanelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChanelCreateOrConnectWithoutUserInput>
    createMany?: ChanelCreateManyUserInputEnvelope
    connect?: Enumerable<ChanelWhereUniqueInput>
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type UserToChanelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutUserInput>, Enumerable<UserToChanelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutUserInput>
    createMany?: UserToChanelCreateManyUserInputEnvelope
    connect?: Enumerable<UserToChanelWhereUniqueInput>
  }

  export type PermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutUserInput>, Enumerable<PermissionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutUserInput>
    createMany?: PermissionCreateManyUserInputEnvelope
    connect?: Enumerable<PermissionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChanelUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ChanelCreateWithoutUserInput>, Enumerable<ChanelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChanelCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ChanelUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ChanelCreateManyUserInputEnvelope
    set?: Enumerable<ChanelWhereUniqueInput>
    disconnect?: Enumerable<ChanelWhereUniqueInput>
    delete?: Enumerable<ChanelWhereUniqueInput>
    connect?: Enumerable<ChanelWhereUniqueInput>
    update?: Enumerable<ChanelUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ChanelUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ChanelScalarWhereInput>
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserToChanelUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutUserInput>, Enumerable<UserToChanelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserToChanelUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserToChanelCreateManyUserInputEnvelope
    set?: Enumerable<UserToChanelWhereUniqueInput>
    disconnect?: Enumerable<UserToChanelWhereUniqueInput>
    delete?: Enumerable<UserToChanelWhereUniqueInput>
    connect?: Enumerable<UserToChanelWhereUniqueInput>
    update?: Enumerable<UserToChanelUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserToChanelUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserToChanelScalarWhereInput>
  }

  export type PermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutUserInput>, Enumerable<PermissionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PermissionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PermissionCreateManyUserInputEnvelope
    set?: Enumerable<PermissionWhereUniqueInput>
    disconnect?: Enumerable<PermissionWhereUniqueInput>
    delete?: Enumerable<PermissionWhereUniqueInput>
    connect?: Enumerable<PermissionWhereUniqueInput>
    update?: Enumerable<PermissionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PermissionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PermissionScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChanelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ChanelCreateWithoutUserInput>, Enumerable<ChanelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ChanelCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ChanelUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ChanelCreateManyUserInputEnvelope
    set?: Enumerable<ChanelWhereUniqueInput>
    disconnect?: Enumerable<ChanelWhereUniqueInput>
    delete?: Enumerable<ChanelWhereUniqueInput>
    connect?: Enumerable<ChanelWhereUniqueInput>
    update?: Enumerable<ChanelUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ChanelUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ChanelScalarWhereInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutUserInput>, Enumerable<CommentUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutUserInput>
    createMany?: CommentCreateManyUserInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type UserToChanelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutUserInput>, Enumerable<UserToChanelUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserToChanelUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserToChanelCreateManyUserInputEnvelope
    set?: Enumerable<UserToChanelWhereUniqueInput>
    disconnect?: Enumerable<UserToChanelWhereUniqueInput>
    delete?: Enumerable<UserToChanelWhereUniqueInput>
    connect?: Enumerable<UserToChanelWhereUniqueInput>
    update?: Enumerable<UserToChanelUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserToChanelUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserToChanelScalarWhereInput>
  }

  export type PermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutUserInput>, Enumerable<PermissionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PermissionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PermissionCreateManyUserInputEnvelope
    set?: Enumerable<PermissionWhereUniqueInput>
    disconnect?: Enumerable<PermissionWhereUniqueInput>
    delete?: Enumerable<PermissionWhereUniqueInput>
    connect?: Enumerable<PermissionWhereUniqueInput>
    update?: Enumerable<PermissionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PermissionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PermissionScalarWhereInput>
  }

  export type VideoCreateNestedManyWithoutChanelInput = {
    create?: XOR<Enumerable<VideoCreateWithoutChanelInput>, Enumerable<VideoUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutChanelInput>
    createMany?: VideoCreateManyChanelInputEnvelope
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type UserYoutubeCreateNestedOneWithoutChanelInput = {
    create?: XOR<UserYoutubeCreateWithoutChanelInput, UserYoutubeUncheckedCreateWithoutChanelInput>
    connectOrCreate?: UserYoutubeCreateOrConnectWithoutChanelInput
    connect?: UserYoutubeWhereUniqueInput
  }

  export type UserToChanelCreateNestedManyWithoutChanelInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutChanelInput>, Enumerable<UserToChanelUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutChanelInput>
    createMany?: UserToChanelCreateManyChanelInputEnvelope
    connect?: Enumerable<UserToChanelWhereUniqueInput>
  }

  export type PermissionCreateNestedManyWithoutChanelInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutChanelInput>, Enumerable<PermissionUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutChanelInput>
    createMany?: PermissionCreateManyChanelInputEnvelope
    connect?: Enumerable<PermissionWhereUniqueInput>
  }

  export type VideoUncheckedCreateNestedManyWithoutChanelInput = {
    create?: XOR<Enumerable<VideoCreateWithoutChanelInput>, Enumerable<VideoUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutChanelInput>
    createMany?: VideoCreateManyChanelInputEnvelope
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type UserToChanelUncheckedCreateNestedManyWithoutChanelInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutChanelInput>, Enumerable<UserToChanelUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutChanelInput>
    createMany?: UserToChanelCreateManyChanelInputEnvelope
    connect?: Enumerable<UserToChanelWhereUniqueInput>
  }

  export type PermissionUncheckedCreateNestedManyWithoutChanelInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutChanelInput>, Enumerable<PermissionUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutChanelInput>
    createMany?: PermissionCreateManyChanelInputEnvelope
    connect?: Enumerable<PermissionWhereUniqueInput>
  }

  export type VideoUpdateManyWithoutChanelNestedInput = {
    create?: XOR<Enumerable<VideoCreateWithoutChanelInput>, Enumerable<VideoUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutChanelInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutChanelInput>
    createMany?: VideoCreateManyChanelInputEnvelope
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutChanelInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutChanelInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type UserYoutubeUpdateOneRequiredWithoutChanelNestedInput = {
    create?: XOR<UserYoutubeCreateWithoutChanelInput, UserYoutubeUncheckedCreateWithoutChanelInput>
    connectOrCreate?: UserYoutubeCreateOrConnectWithoutChanelInput
    upsert?: UserYoutubeUpsertWithoutChanelInput
    connect?: UserYoutubeWhereUniqueInput
    update?: XOR<UserYoutubeUpdateWithoutChanelInput, UserYoutubeUncheckedUpdateWithoutChanelInput>
  }

  export type UserToChanelUpdateManyWithoutChanelNestedInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutChanelInput>, Enumerable<UserToChanelUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutChanelInput>
    upsert?: Enumerable<UserToChanelUpsertWithWhereUniqueWithoutChanelInput>
    createMany?: UserToChanelCreateManyChanelInputEnvelope
    set?: Enumerable<UserToChanelWhereUniqueInput>
    disconnect?: Enumerable<UserToChanelWhereUniqueInput>
    delete?: Enumerable<UserToChanelWhereUniqueInput>
    connect?: Enumerable<UserToChanelWhereUniqueInput>
    update?: Enumerable<UserToChanelUpdateWithWhereUniqueWithoutChanelInput>
    updateMany?: Enumerable<UserToChanelUpdateManyWithWhereWithoutChanelInput>
    deleteMany?: Enumerable<UserToChanelScalarWhereInput>
  }

  export type PermissionUpdateManyWithoutChanelNestedInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutChanelInput>, Enumerable<PermissionUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutChanelInput>
    upsert?: Enumerable<PermissionUpsertWithWhereUniqueWithoutChanelInput>
    createMany?: PermissionCreateManyChanelInputEnvelope
    set?: Enumerable<PermissionWhereUniqueInput>
    disconnect?: Enumerable<PermissionWhereUniqueInput>
    delete?: Enumerable<PermissionWhereUniqueInput>
    connect?: Enumerable<PermissionWhereUniqueInput>
    update?: Enumerable<PermissionUpdateWithWhereUniqueWithoutChanelInput>
    updateMany?: Enumerable<PermissionUpdateManyWithWhereWithoutChanelInput>
    deleteMany?: Enumerable<PermissionScalarWhereInput>
  }

  export type VideoUncheckedUpdateManyWithoutChanelNestedInput = {
    create?: XOR<Enumerable<VideoCreateWithoutChanelInput>, Enumerable<VideoUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutChanelInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutChanelInput>
    createMany?: VideoCreateManyChanelInputEnvelope
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutChanelInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutChanelInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type UserToChanelUncheckedUpdateManyWithoutChanelNestedInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutChanelInput>, Enumerable<UserToChanelUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutChanelInput>
    upsert?: Enumerable<UserToChanelUpsertWithWhereUniqueWithoutChanelInput>
    createMany?: UserToChanelCreateManyChanelInputEnvelope
    set?: Enumerable<UserToChanelWhereUniqueInput>
    disconnect?: Enumerable<UserToChanelWhereUniqueInput>
    delete?: Enumerable<UserToChanelWhereUniqueInput>
    connect?: Enumerable<UserToChanelWhereUniqueInput>
    update?: Enumerable<UserToChanelUpdateWithWhereUniqueWithoutChanelInput>
    updateMany?: Enumerable<UserToChanelUpdateManyWithWhereWithoutChanelInput>
    deleteMany?: Enumerable<UserToChanelScalarWhereInput>
  }

  export type PermissionUncheckedUpdateManyWithoutChanelNestedInput = {
    create?: XOR<Enumerable<PermissionCreateWithoutChanelInput>, Enumerable<PermissionUncheckedCreateWithoutChanelInput>>
    connectOrCreate?: Enumerable<PermissionCreateOrConnectWithoutChanelInput>
    upsert?: Enumerable<PermissionUpsertWithWhereUniqueWithoutChanelInput>
    createMany?: PermissionCreateManyChanelInputEnvelope
    set?: Enumerable<PermissionWhereUniqueInput>
    disconnect?: Enumerable<PermissionWhereUniqueInput>
    delete?: Enumerable<PermissionWhereUniqueInput>
    connect?: Enumerable<PermissionWhereUniqueInput>
    update?: Enumerable<PermissionUpdateWithWhereUniqueWithoutChanelInput>
    updateMany?: Enumerable<PermissionUpdateManyWithWhereWithoutChanelInput>
    deleteMany?: Enumerable<PermissionScalarWhereInput>
  }

  export type UserYoutubeCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserYoutubeCreateWithoutCommentInput, UserYoutubeUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserYoutubeCreateOrConnectWithoutCommentInput
    connect?: UserYoutubeWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutCommentsInput = {
    create?: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput
    connect?: VideoWhereUniqueInput
  }

  export type UserYoutubeUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<UserYoutubeCreateWithoutCommentInput, UserYoutubeUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserYoutubeCreateOrConnectWithoutCommentInput
    upsert?: UserYoutubeUpsertWithoutCommentInput
    connect?: UserYoutubeWhereUniqueInput
    update?: XOR<UserYoutubeUpdateWithoutCommentInput, UserYoutubeUncheckedUpdateWithoutCommentInput>
  }

  export type VideoUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput
    upsert?: VideoUpsertWithoutCommentsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<VideoUpdateWithoutCommentsInput, VideoUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentCreateNestedManyWithoutVideoInput = {
    create?: XOR<Enumerable<CommentCreateWithoutVideoInput>, Enumerable<CommentUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutVideoInput>
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type ChanelCreateNestedOneWithoutVideosInput = {
    create?: XOR<ChanelCreateWithoutVideosInput, ChanelUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ChanelCreateOrConnectWithoutVideosInput
    connect?: ChanelWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<Enumerable<CommentCreateWithoutVideoInput>, Enumerable<CommentUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutVideoInput>
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: Enumerable<CommentWhereUniqueInput>
  }

  export type CommentUpdateManyWithoutVideoNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutVideoInput>, Enumerable<CommentUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutVideoInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutVideoInput>
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutVideoInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutVideoInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type ChanelUpdateOneWithoutVideosNestedInput = {
    create?: XOR<ChanelCreateWithoutVideosInput, ChanelUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ChanelCreateOrConnectWithoutVideosInput
    upsert?: ChanelUpsertWithoutVideosInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChanelWhereUniqueInput
    update?: XOR<ChanelUpdateWithoutVideosInput, ChanelUncheckedUpdateWithoutVideosInput>
  }

  export type CommentUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<Enumerable<CommentCreateWithoutVideoInput>, Enumerable<CommentUncheckedCreateWithoutVideoInput>>
    connectOrCreate?: Enumerable<CommentCreateOrConnectWithoutVideoInput>
    upsert?: Enumerable<CommentUpsertWithWhereUniqueWithoutVideoInput>
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: Enumerable<CommentWhereUniqueInput>
    disconnect?: Enumerable<CommentWhereUniqueInput>
    delete?: Enumerable<CommentWhereUniqueInput>
    connect?: Enumerable<CommentWhereUniqueInput>
    update?: Enumerable<CommentUpdateWithWhereUniqueWithoutVideoInput>
    updateMany?: Enumerable<CommentUpdateManyWithWhereWithoutVideoInput>
    deleteMany?: Enumerable<CommentScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserYoutubeCreateNestedOneWithoutPermissionInput = {
    create?: XOR<UserYoutubeCreateWithoutPermissionInput, UserYoutubeUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: UserYoutubeCreateOrConnectWithoutPermissionInput
    connect?: UserYoutubeWhereUniqueInput
  }

  export type ChanelCreateNestedOneWithoutPermissionInput = {
    create?: XOR<ChanelCreateWithoutPermissionInput, ChanelUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: ChanelCreateOrConnectWithoutPermissionInput
    connect?: ChanelWhereUniqueInput
  }

  export type UserToChanelCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutPermissionInput>, Enumerable<UserToChanelUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutPermissionInput>
    createMany?: UserToChanelCreateManyPermissionInputEnvelope
    connect?: Enumerable<UserToChanelWhereUniqueInput>
  }

  export type UserToChanelUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutPermissionInput>, Enumerable<UserToChanelUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutPermissionInput>
    createMany?: UserToChanelCreateManyPermissionInputEnvelope
    connect?: Enumerable<UserToChanelWhereUniqueInput>
  }

  export type EnumRoleEnumFieldUpdateOperationsInput = {
    set?: RoleEnum
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserYoutubeUpdateOneWithoutPermissionNestedInput = {
    create?: XOR<UserYoutubeCreateWithoutPermissionInput, UserYoutubeUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: UserYoutubeCreateOrConnectWithoutPermissionInput
    upsert?: UserYoutubeUpsertWithoutPermissionInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserYoutubeWhereUniqueInput
    update?: XOR<UserYoutubeUpdateWithoutPermissionInput, UserYoutubeUncheckedUpdateWithoutPermissionInput>
  }

  export type ChanelUpdateOneWithoutPermissionNestedInput = {
    create?: XOR<ChanelCreateWithoutPermissionInput, ChanelUncheckedCreateWithoutPermissionInput>
    connectOrCreate?: ChanelCreateOrConnectWithoutPermissionInput
    upsert?: ChanelUpsertWithoutPermissionInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChanelWhereUniqueInput
    update?: XOR<ChanelUpdateWithoutPermissionInput, ChanelUncheckedUpdateWithoutPermissionInput>
  }

  export type UserToChanelUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutPermissionInput>, Enumerable<UserToChanelUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutPermissionInput>
    upsert?: Enumerable<UserToChanelUpsertWithWhereUniqueWithoutPermissionInput>
    createMany?: UserToChanelCreateManyPermissionInputEnvelope
    set?: Enumerable<UserToChanelWhereUniqueInput>
    disconnect?: Enumerable<UserToChanelWhereUniqueInput>
    delete?: Enumerable<UserToChanelWhereUniqueInput>
    connect?: Enumerable<UserToChanelWhereUniqueInput>
    update?: Enumerable<UserToChanelUpdateWithWhereUniqueWithoutPermissionInput>
    updateMany?: Enumerable<UserToChanelUpdateManyWithWhereWithoutPermissionInput>
    deleteMany?: Enumerable<UserToChanelScalarWhereInput>
  }

  export type UserToChanelUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Enumerable<UserToChanelCreateWithoutPermissionInput>, Enumerable<UserToChanelUncheckedCreateWithoutPermissionInput>>
    connectOrCreate?: Enumerable<UserToChanelCreateOrConnectWithoutPermissionInput>
    upsert?: Enumerable<UserToChanelUpsertWithWhereUniqueWithoutPermissionInput>
    createMany?: UserToChanelCreateManyPermissionInputEnvelope
    set?: Enumerable<UserToChanelWhereUniqueInput>
    disconnect?: Enumerable<UserToChanelWhereUniqueInput>
    delete?: Enumerable<UserToChanelWhereUniqueInput>
    connect?: Enumerable<UserToChanelWhereUniqueInput>
    update?: Enumerable<UserToChanelUpdateWithWhereUniqueWithoutPermissionInput>
    updateMany?: Enumerable<UserToChanelUpdateManyWithWhereWithoutPermissionInput>
    deleteMany?: Enumerable<UserToChanelScalarWhereInput>
  }

  export type UserYoutubeCreateNestedOneWithoutUserToChanelInput = {
    create?: XOR<UserYoutubeCreateWithoutUserToChanelInput, UserYoutubeUncheckedCreateWithoutUserToChanelInput>
    connectOrCreate?: UserYoutubeCreateOrConnectWithoutUserToChanelInput
    connect?: UserYoutubeWhereUniqueInput
  }

  export type ChanelCreateNestedOneWithoutUserToChanelInput = {
    create?: XOR<ChanelCreateWithoutUserToChanelInput, ChanelUncheckedCreateWithoutUserToChanelInput>
    connectOrCreate?: ChanelCreateOrConnectWithoutUserToChanelInput
    connect?: ChanelWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutUserToChanelInput = {
    create?: XOR<PermissionCreateWithoutUserToChanelInput, PermissionUncheckedCreateWithoutUserToChanelInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutUserToChanelInput
    connect?: PermissionWhereUniqueInput
  }

  export type UserYoutubeUpdateOneRequiredWithoutUserToChanelNestedInput = {
    create?: XOR<UserYoutubeCreateWithoutUserToChanelInput, UserYoutubeUncheckedCreateWithoutUserToChanelInput>
    connectOrCreate?: UserYoutubeCreateOrConnectWithoutUserToChanelInput
    upsert?: UserYoutubeUpsertWithoutUserToChanelInput
    connect?: UserYoutubeWhereUniqueInput
    update?: XOR<UserYoutubeUpdateWithoutUserToChanelInput, UserYoutubeUncheckedUpdateWithoutUserToChanelInput>
  }

  export type ChanelUpdateOneRequiredWithoutUserToChanelNestedInput = {
    create?: XOR<ChanelCreateWithoutUserToChanelInput, ChanelUncheckedCreateWithoutUserToChanelInput>
    connectOrCreate?: ChanelCreateOrConnectWithoutUserToChanelInput
    upsert?: ChanelUpsertWithoutUserToChanelInput
    connect?: ChanelWhereUniqueInput
    update?: XOR<ChanelUpdateWithoutUserToChanelInput, ChanelUncheckedUpdateWithoutUserToChanelInput>
  }

  export type PermissionUpdateOneRequiredWithoutUserToChanelNestedInput = {
    create?: XOR<PermissionCreateWithoutUserToChanelInput, PermissionUncheckedCreateWithoutUserToChanelInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutUserToChanelInput
    upsert?: PermissionUpsertWithoutUserToChanelInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<PermissionUpdateWithoutUserToChanelInput, PermissionUncheckedUpdateWithoutUserToChanelInput>
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

  export type NestedEnumRoleEnumFilter = {
    equals?: RoleEnum
    in?: Enumerable<RoleEnum>
    notIn?: Enumerable<RoleEnum>
    not?: NestedEnumRoleEnumFilter | RoleEnum
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumRoleEnumWithAggregatesFilter = {
    equals?: RoleEnum
    in?: Enumerable<RoleEnum>
    notIn?: Enumerable<RoleEnum>
    not?: NestedEnumRoleEnumWithAggregatesFilter | RoleEnum
    _count?: NestedIntFilter
    _min?: NestedEnumRoleEnumFilter
    _max?: NestedEnumRoleEnumFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ChanelCreateWithoutUserInput = {
    name: string
    videos?: VideoCreateNestedManyWithoutChanelInput
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    userToChanel?: UserToChanelCreateNestedManyWithoutChanelInput
    Permission?: PermissionCreateNestedManyWithoutChanelInput
  }

  export type ChanelUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    videos?: VideoUncheckedCreateNestedManyWithoutChanelInput
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutChanelInput
    Permission?: PermissionUncheckedCreateNestedManyWithoutChanelInput
  }

  export type ChanelCreateOrConnectWithoutUserInput = {
    where: ChanelWhereUniqueInput
    create: XOR<ChanelCreateWithoutUserInput, ChanelUncheckedCreateWithoutUserInput>
  }

  export type ChanelCreateManyUserInputEnvelope = {
    data: Enumerable<ChanelCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    video: VideoCreateNestedOneWithoutCommentsInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    videoId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: Enumerable<CommentCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserToChanelCreateWithoutUserInput = {
    role: RoleEnum
    chanel: ChanelCreateNestedOneWithoutUserToChanelInput
    permission: PermissionCreateNestedOneWithoutUserToChanelInput
  }

  export type UserToChanelUncheckedCreateWithoutUserInput = {
    id?: number
    role: RoleEnum
    chanelId: number
    permissionId: number
  }

  export type UserToChanelCreateOrConnectWithoutUserInput = {
    where: UserToChanelWhereUniqueInput
    create: XOR<UserToChanelCreateWithoutUserInput, UserToChanelUncheckedCreateWithoutUserInput>
  }

  export type UserToChanelCreateManyUserInputEnvelope = {
    data: Enumerable<UserToChanelCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutUserInput = {
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    Chanel?: ChanelCreateNestedOneWithoutPermissionInput
    userToChanel?: UserToChanelCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutUserInput = {
    id?: number
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    chanelId?: number | null
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutUserInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput>
  }

  export type PermissionCreateManyUserInputEnvelope = {
    data: Enumerable<PermissionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ChanelUpsertWithWhereUniqueWithoutUserInput = {
    where: ChanelWhereUniqueInput
    update: XOR<ChanelUpdateWithoutUserInput, ChanelUncheckedUpdateWithoutUserInput>
    create: XOR<ChanelCreateWithoutUserInput, ChanelUncheckedCreateWithoutUserInput>
  }

  export type ChanelUpdateWithWhereUniqueWithoutUserInput = {
    where: ChanelWhereUniqueInput
    data: XOR<ChanelUpdateWithoutUserInput, ChanelUncheckedUpdateWithoutUserInput>
  }

  export type ChanelUpdateManyWithWhereWithoutUserInput = {
    where: ChanelScalarWhereInput
    data: XOR<ChanelUpdateManyMutationInput, ChanelUncheckedUpdateManyWithoutChanelInput>
  }

  export type ChanelScalarWhereInput = {
    AND?: Enumerable<ChanelScalarWhereInput>
    OR?: Enumerable<ChanelScalarWhereInput>
    NOT?: Enumerable<ChanelScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentInput>
  }

  export type CommentScalarWhereInput = {
    AND?: Enumerable<CommentScalarWhereInput>
    OR?: Enumerable<CommentScalarWhereInput>
    NOT?: Enumerable<CommentScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    videoId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type UserToChanelUpsertWithWhereUniqueWithoutUserInput = {
    where: UserToChanelWhereUniqueInput
    update: XOR<UserToChanelUpdateWithoutUserInput, UserToChanelUncheckedUpdateWithoutUserInput>
    create: XOR<UserToChanelCreateWithoutUserInput, UserToChanelUncheckedCreateWithoutUserInput>
  }

  export type UserToChanelUpdateWithWhereUniqueWithoutUserInput = {
    where: UserToChanelWhereUniqueInput
    data: XOR<UserToChanelUpdateWithoutUserInput, UserToChanelUncheckedUpdateWithoutUserInput>
  }

  export type UserToChanelUpdateManyWithWhereWithoutUserInput = {
    where: UserToChanelScalarWhereInput
    data: XOR<UserToChanelUpdateManyMutationInput, UserToChanelUncheckedUpdateManyWithoutUserToChanelInput>
  }

  export type UserToChanelScalarWhereInput = {
    AND?: Enumerable<UserToChanelScalarWhereInput>
    OR?: Enumerable<UserToChanelScalarWhereInput>
    NOT?: Enumerable<UserToChanelScalarWhereInput>
    id?: IntFilter | number
    role?: EnumRoleEnumFilter | RoleEnum
    userId?: IntFilter | number
    chanelId?: IntFilter | number
    permissionId?: IntFilter | number
  }

  export type PermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutUserInput, PermissionUncheckedUpdateWithoutUserInput>
    create: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutUserInput, PermissionUncheckedUpdateWithoutUserInput>
  }

  export type PermissionUpdateManyWithWhereWithoutUserInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: Enumerable<PermissionScalarWhereInput>
    OR?: Enumerable<PermissionScalarWhereInput>
    NOT?: Enumerable<PermissionScalarWhereInput>
    id?: IntFilter | number
    role?: EnumRoleEnumFilter | RoleEnum
    edit?: BoolFilter | boolean
    post?: BoolFilter | boolean
    delete?: BoolFilter | boolean
    upload?: BoolFilter | boolean
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    userId?: IntNullableFilter | number | null
    chanelId?: IntNullableFilter | number | null
  }

  export type VideoCreateWithoutChanelInput = {
    name: string
    description: string
    comments?: CommentCreateNestedManyWithoutVideoInput
    url: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VideoUncheckedCreateWithoutChanelInput = {
    id?: number
    name: string
    description: string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    url: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutChanelInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutChanelInput, VideoUncheckedCreateWithoutChanelInput>
  }

  export type VideoCreateManyChanelInputEnvelope = {
    data: Enumerable<VideoCreateManyChanelInput>
    skipDuplicates?: boolean
  }

  export type UserYoutubeCreateWithoutChanelInput = {
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    Comment?: CommentCreateNestedManyWithoutUserInput
    userToChanel?: UserToChanelCreateNestedManyWithoutUserInput
    permission?: PermissionCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeUncheckedCreateWithoutChanelInput = {
    id?: number
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutUserInput
    permission?: PermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeCreateOrConnectWithoutChanelInput = {
    where: UserYoutubeWhereUniqueInput
    create: XOR<UserYoutubeCreateWithoutChanelInput, UserYoutubeUncheckedCreateWithoutChanelInput>
  }

  export type UserToChanelCreateWithoutChanelInput = {
    role: RoleEnum
    user: UserYoutubeCreateNestedOneWithoutUserToChanelInput
    permission: PermissionCreateNestedOneWithoutUserToChanelInput
  }

  export type UserToChanelUncheckedCreateWithoutChanelInput = {
    id?: number
    role: RoleEnum
    userId: number
    permissionId: number
  }

  export type UserToChanelCreateOrConnectWithoutChanelInput = {
    where: UserToChanelWhereUniqueInput
    create: XOR<UserToChanelCreateWithoutChanelInput, UserToChanelUncheckedCreateWithoutChanelInput>
  }

  export type UserToChanelCreateManyChanelInputEnvelope = {
    data: Enumerable<UserToChanelCreateManyChanelInput>
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutChanelInput = {
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    User?: UserYoutubeCreateNestedOneWithoutPermissionInput
    userToChanel?: UserToChanelCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutChanelInput = {
    id?: number
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId?: number | null
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutChanelInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutChanelInput, PermissionUncheckedCreateWithoutChanelInput>
  }

  export type PermissionCreateManyChanelInputEnvelope = {
    data: Enumerable<PermissionCreateManyChanelInput>
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithWhereUniqueWithoutChanelInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutChanelInput, VideoUncheckedUpdateWithoutChanelInput>
    create: XOR<VideoCreateWithoutChanelInput, VideoUncheckedCreateWithoutChanelInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutChanelInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutChanelInput, VideoUncheckedUpdateWithoutChanelInput>
  }

  export type VideoUpdateManyWithWhereWithoutChanelInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutVideosInput>
  }

  export type VideoScalarWhereInput = {
    AND?: Enumerable<VideoScalarWhereInput>
    OR?: Enumerable<VideoScalarWhereInput>
    NOT?: Enumerable<VideoScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    url?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    chanelId?: IntNullableFilter | number | null
  }

  export type UserYoutubeUpsertWithoutChanelInput = {
    update: XOR<UserYoutubeUpdateWithoutChanelInput, UserYoutubeUncheckedUpdateWithoutChanelInput>
    create: XOR<UserYoutubeCreateWithoutChanelInput, UserYoutubeUncheckedCreateWithoutChanelInput>
  }

  export type UserYoutubeUpdateWithoutChanelInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comment?: CommentUpdateManyWithoutUserNestedInput
    userToChanel?: UserToChanelUpdateManyWithoutUserNestedInput
    permission?: PermissionUpdateManyWithoutUserNestedInput
  }

  export type UserYoutubeUncheckedUpdateWithoutChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutUserNestedInput
    permission?: PermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserToChanelUpsertWithWhereUniqueWithoutChanelInput = {
    where: UserToChanelWhereUniqueInput
    update: XOR<UserToChanelUpdateWithoutChanelInput, UserToChanelUncheckedUpdateWithoutChanelInput>
    create: XOR<UserToChanelCreateWithoutChanelInput, UserToChanelUncheckedCreateWithoutChanelInput>
  }

  export type UserToChanelUpdateWithWhereUniqueWithoutChanelInput = {
    where: UserToChanelWhereUniqueInput
    data: XOR<UserToChanelUpdateWithoutChanelInput, UserToChanelUncheckedUpdateWithoutChanelInput>
  }

  export type UserToChanelUpdateManyWithWhereWithoutChanelInput = {
    where: UserToChanelScalarWhereInput
    data: XOR<UserToChanelUpdateManyMutationInput, UserToChanelUncheckedUpdateManyWithoutUserToChanelInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutChanelInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutChanelInput, PermissionUncheckedUpdateWithoutChanelInput>
    create: XOR<PermissionCreateWithoutChanelInput, PermissionUncheckedCreateWithoutChanelInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutChanelInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutChanelInput, PermissionUncheckedUpdateWithoutChanelInput>
  }

  export type PermissionUpdateManyWithWhereWithoutChanelInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type UserYoutubeCreateWithoutCommentInput = {
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    chanel?: ChanelCreateNestedManyWithoutUserInput
    userToChanel?: UserToChanelCreateNestedManyWithoutUserInput
    permission?: PermissionCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeUncheckedCreateWithoutCommentInput = {
    id?: number
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    chanel?: ChanelUncheckedCreateNestedManyWithoutUserInput
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutUserInput
    permission?: PermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeCreateOrConnectWithoutCommentInput = {
    where: UserYoutubeWhereUniqueInput
    create: XOR<UserYoutubeCreateWithoutCommentInput, UserYoutubeUncheckedCreateWithoutCommentInput>
  }

  export type VideoCreateWithoutCommentsInput = {
    name: string
    description: string
    url: string
    createAt?: Date | string
    updateAt?: Date | string
    Chanel?: ChanelCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    description: string
    url: string
    createAt?: Date | string
    updateAt?: Date | string
    chanelId?: number | null
  }

  export type VideoCreateOrConnectWithoutCommentsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
  }

  export type UserYoutubeUpsertWithoutCommentInput = {
    update: XOR<UserYoutubeUpdateWithoutCommentInput, UserYoutubeUncheckedUpdateWithoutCommentInput>
    create: XOR<UserYoutubeCreateWithoutCommentInput, UserYoutubeUncheckedCreateWithoutCommentInput>
  }

  export type UserYoutubeUpdateWithoutCommentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanel?: ChanelUpdateManyWithoutUserNestedInput
    userToChanel?: UserToChanelUpdateManyWithoutUserNestedInput
    permission?: PermissionUpdateManyWithoutUserNestedInput
  }

  export type UserYoutubeUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanel?: ChanelUncheckedUpdateManyWithoutUserNestedInput
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutUserNestedInput
    permission?: PermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutCommentsInput = {
    update: XOR<VideoUpdateWithoutCommentsInput, VideoUncheckedUpdateWithoutCommentsInput>
    create: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
  }

  export type VideoUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chanel?: ChanelUpdateOneWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentCreateWithoutVideoInput = {
    user: UserYoutubeCreateNestedOneWithoutCommentInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutVideoInput = {
    id?: number
    userId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutVideoInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentCreateManyVideoInputEnvelope = {
    data: Enumerable<CommentCreateManyVideoInput>
    skipDuplicates?: boolean
  }

  export type ChanelCreateWithoutVideosInput = {
    name: string
    description: string
    user: UserYoutubeCreateNestedOneWithoutChanelInput
    createAt?: Date | string
    updateAt?: Date | string
    userToChanel?: UserToChanelCreateNestedManyWithoutChanelInput
    Permission?: PermissionCreateNestedManyWithoutChanelInput
  }

  export type ChanelUncheckedCreateWithoutVideosInput = {
    id?: number
    name: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutChanelInput
    userId: number
    Permission?: PermissionUncheckedCreateNestedManyWithoutChanelInput
  }

  export type ChanelCreateOrConnectWithoutVideosInput = {
    where: ChanelWhereUniqueInput
    create: XOR<ChanelCreateWithoutVideosInput, ChanelUncheckedCreateWithoutVideosInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
  }

  export type CommentUpdateManyWithWhereWithoutVideoInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentsInput>
  }

  export type ChanelUpsertWithoutVideosInput = {
    update: XOR<ChanelUpdateWithoutVideosInput, ChanelUncheckedUpdateWithoutVideosInput>
    create: XOR<ChanelCreateWithoutVideosInput, ChanelUncheckedCreateWithoutVideosInput>
  }

  export type ChanelUpdateWithoutVideosInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user?: UserYoutubeUpdateOneRequiredWithoutChanelNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userToChanel?: UserToChanelUpdateManyWithoutChanelNestedInput
    Permission?: PermissionUpdateManyWithoutChanelNestedInput
  }

  export type ChanelUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutChanelNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    Permission?: PermissionUncheckedUpdateManyWithoutChanelNestedInput
  }

  export type UserYoutubeCreateWithoutPermissionInput = {
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    chanel?: ChanelCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    userToChanel?: UserToChanelCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeUncheckedCreateWithoutPermissionInput = {
    id?: number
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    chanel?: ChanelUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeCreateOrConnectWithoutPermissionInput = {
    where: UserYoutubeWhereUniqueInput
    create: XOR<UserYoutubeCreateWithoutPermissionInput, UserYoutubeUncheckedCreateWithoutPermissionInput>
  }

  export type ChanelCreateWithoutPermissionInput = {
    name: string
    videos?: VideoCreateNestedManyWithoutChanelInput
    description: string
    user: UserYoutubeCreateNestedOneWithoutChanelInput
    createAt?: Date | string
    updateAt?: Date | string
    userToChanel?: UserToChanelCreateNestedManyWithoutChanelInput
  }

  export type ChanelUncheckedCreateWithoutPermissionInput = {
    id?: number
    name: string
    videos?: VideoUncheckedCreateNestedManyWithoutChanelInput
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    userToChanel?: UserToChanelUncheckedCreateNestedManyWithoutChanelInput
    userId: number
  }

  export type ChanelCreateOrConnectWithoutPermissionInput = {
    where: ChanelWhereUniqueInput
    create: XOR<ChanelCreateWithoutPermissionInput, ChanelUncheckedCreateWithoutPermissionInput>
  }

  export type UserToChanelCreateWithoutPermissionInput = {
    role: RoleEnum
    user: UserYoutubeCreateNestedOneWithoutUserToChanelInput
    chanel: ChanelCreateNestedOneWithoutUserToChanelInput
  }

  export type UserToChanelUncheckedCreateWithoutPermissionInput = {
    id?: number
    role: RoleEnum
    userId: number
    chanelId: number
  }

  export type UserToChanelCreateOrConnectWithoutPermissionInput = {
    where: UserToChanelWhereUniqueInput
    create: XOR<UserToChanelCreateWithoutPermissionInput, UserToChanelUncheckedCreateWithoutPermissionInput>
  }

  export type UserToChanelCreateManyPermissionInputEnvelope = {
    data: Enumerable<UserToChanelCreateManyPermissionInput>
    skipDuplicates?: boolean
  }

  export type UserYoutubeUpsertWithoutPermissionInput = {
    update: XOR<UserYoutubeUpdateWithoutPermissionInput, UserYoutubeUncheckedUpdateWithoutPermissionInput>
    create: XOR<UserYoutubeCreateWithoutPermissionInput, UserYoutubeUncheckedCreateWithoutPermissionInput>
  }

  export type UserYoutubeUpdateWithoutPermissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanel?: ChanelUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    userToChanel?: UserToChanelUpdateManyWithoutUserNestedInput
  }

  export type UserYoutubeUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanel?: ChanelUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChanelUpsertWithoutPermissionInput = {
    update: XOR<ChanelUpdateWithoutPermissionInput, ChanelUncheckedUpdateWithoutPermissionInput>
    create: XOR<ChanelCreateWithoutPermissionInput, ChanelUncheckedCreateWithoutPermissionInput>
  }

  export type ChanelUpdateWithoutPermissionInput = {
    name?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutChanelNestedInput
    description?: StringFieldUpdateOperationsInput | string
    user?: UserYoutubeUpdateOneRequiredWithoutChanelNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userToChanel?: UserToChanelUpdateManyWithoutChanelNestedInput
  }

  export type ChanelUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutChanelNestedInput
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutChanelNestedInput
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserToChanelUpsertWithWhereUniqueWithoutPermissionInput = {
    where: UserToChanelWhereUniqueInput
    update: XOR<UserToChanelUpdateWithoutPermissionInput, UserToChanelUncheckedUpdateWithoutPermissionInput>
    create: XOR<UserToChanelCreateWithoutPermissionInput, UserToChanelUncheckedCreateWithoutPermissionInput>
  }

  export type UserToChanelUpdateWithWhereUniqueWithoutPermissionInput = {
    where: UserToChanelWhereUniqueInput
    data: XOR<UserToChanelUpdateWithoutPermissionInput, UserToChanelUncheckedUpdateWithoutPermissionInput>
  }

  export type UserToChanelUpdateManyWithWhereWithoutPermissionInput = {
    where: UserToChanelScalarWhereInput
    data: XOR<UserToChanelUpdateManyMutationInput, UserToChanelUncheckedUpdateManyWithoutUserToChanelInput>
  }

  export type UserYoutubeCreateWithoutUserToChanelInput = {
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    chanel?: ChanelCreateNestedManyWithoutUserInput
    Comment?: CommentCreateNestedManyWithoutUserInput
    permission?: PermissionCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeUncheckedCreateWithoutUserToChanelInput = {
    id?: number
    name: string
    email: string
    imageProfile: string
    createAt?: Date | string
    updateAt?: Date | string
    chanel?: ChanelUncheckedCreateNestedManyWithoutUserInput
    Comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    permission?: PermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserYoutubeCreateOrConnectWithoutUserToChanelInput = {
    where: UserYoutubeWhereUniqueInput
    create: XOR<UserYoutubeCreateWithoutUserToChanelInput, UserYoutubeUncheckedCreateWithoutUserToChanelInput>
  }

  export type ChanelCreateWithoutUserToChanelInput = {
    name: string
    videos?: VideoCreateNestedManyWithoutChanelInput
    description: string
    user: UserYoutubeCreateNestedOneWithoutChanelInput
    createAt?: Date | string
    updateAt?: Date | string
    Permission?: PermissionCreateNestedManyWithoutChanelInput
  }

  export type ChanelUncheckedCreateWithoutUserToChanelInput = {
    id?: number
    name: string
    videos?: VideoUncheckedCreateNestedManyWithoutChanelInput
    description: string
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
    Permission?: PermissionUncheckedCreateNestedManyWithoutChanelInput
  }

  export type ChanelCreateOrConnectWithoutUserToChanelInput = {
    where: ChanelWhereUniqueInput
    create: XOR<ChanelCreateWithoutUserToChanelInput, ChanelUncheckedCreateWithoutUserToChanelInput>
  }

  export type PermissionCreateWithoutUserToChanelInput = {
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    User?: UserYoutubeCreateNestedOneWithoutPermissionInput
    Chanel?: ChanelCreateNestedOneWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutUserToChanelInput = {
    id?: number
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId?: number | null
    chanelId?: number | null
  }

  export type PermissionCreateOrConnectWithoutUserToChanelInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutUserToChanelInput, PermissionUncheckedCreateWithoutUserToChanelInput>
  }

  export type UserYoutubeUpsertWithoutUserToChanelInput = {
    update: XOR<UserYoutubeUpdateWithoutUserToChanelInput, UserYoutubeUncheckedUpdateWithoutUserToChanelInput>
    create: XOR<UserYoutubeCreateWithoutUserToChanelInput, UserYoutubeUncheckedCreateWithoutUserToChanelInput>
  }

  export type UserYoutubeUpdateWithoutUserToChanelInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanel?: ChanelUpdateManyWithoutUserNestedInput
    Comment?: CommentUpdateManyWithoutUserNestedInput
    permission?: PermissionUpdateManyWithoutUserNestedInput
  }

  export type UserYoutubeUncheckedUpdateWithoutUserToChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageProfile?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanel?: ChanelUncheckedUpdateManyWithoutUserNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    permission?: PermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChanelUpsertWithoutUserToChanelInput = {
    update: XOR<ChanelUpdateWithoutUserToChanelInput, ChanelUncheckedUpdateWithoutUserToChanelInput>
    create: XOR<ChanelCreateWithoutUserToChanelInput, ChanelUncheckedCreateWithoutUserToChanelInput>
  }

  export type ChanelUpdateWithoutUserToChanelInput = {
    name?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutChanelNestedInput
    description?: StringFieldUpdateOperationsInput | string
    user?: UserYoutubeUpdateOneRequiredWithoutChanelNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Permission?: PermissionUpdateManyWithoutChanelNestedInput
  }

  export type ChanelUncheckedUpdateWithoutUserToChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutChanelNestedInput
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    Permission?: PermissionUncheckedUpdateManyWithoutChanelNestedInput
  }

  export type PermissionUpsertWithoutUserToChanelInput = {
    update: XOR<PermissionUpdateWithoutUserToChanelInput, PermissionUncheckedUpdateWithoutUserToChanelInput>
    create: XOR<PermissionCreateWithoutUserToChanelInput, PermissionUncheckedCreateWithoutUserToChanelInput>
  }

  export type PermissionUpdateWithoutUserToChanelInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserYoutubeUpdateOneWithoutPermissionNestedInput
    Chanel?: ChanelUpdateOneWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutUserToChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chanelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChanelCreateManyUserInput = {
    id?: number
    name: string
    description: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    videoId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserToChanelCreateManyUserInput = {
    id?: number
    role: RoleEnum
    chanelId: number
    permissionId: number
  }

  export type PermissionCreateManyUserInput = {
    id?: number
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    chanelId?: number | null
  }

  export type ChanelUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutChanelNestedInput
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userToChanel?: UserToChanelUpdateManyWithoutChanelNestedInput
    Permission?: PermissionUpdateManyWithoutChanelNestedInput
  }

  export type ChanelUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutChanelNestedInput
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutChanelNestedInput
    Permission?: PermissionUncheckedUpdateManyWithoutChanelNestedInput
  }

  export type ChanelUncheckedUpdateManyWithoutChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    videoId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserToChanelUpdateWithoutUserInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    chanel?: ChanelUpdateOneRequiredWithoutUserToChanelNestedInput
    permission?: PermissionUpdateOneRequiredWithoutUserToChanelNestedInput
  }

  export type UserToChanelUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    chanelId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type UserToChanelUncheckedUpdateManyWithoutUserToChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    chanelId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionUpdateWithoutUserInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chanel?: ChanelUpdateOneWithoutPermissionNestedInput
    userToChanel?: UserToChanelUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanelId?: NullableIntFieldUpdateOperationsInput | number | null
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chanelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VideoCreateManyChanelInput = {
    id?: number
    name: string
    description: string
    url: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserToChanelCreateManyChanelInput = {
    id?: number
    role: RoleEnum
    userId: number
    permissionId: number
  }

  export type PermissionCreateManyChanelInput = {
    id?: number
    role: RoleEnum
    edit: boolean
    post: boolean
    delete: boolean
    upload: boolean
    createAt?: Date | string
    updateAt?: Date | string
    userId?: number | null
  }

  export type VideoUpdateWithoutChanelInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutVideoNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateWithoutChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserToChanelUpdateWithoutChanelInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    user?: UserYoutubeUpdateOneRequiredWithoutUserToChanelNestedInput
    permission?: PermissionUpdateOneRequiredWithoutUserToChanelNestedInput
  }

  export type UserToChanelUncheckedUpdateWithoutChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    userId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionUpdateWithoutChanelInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserYoutubeUpdateOneWithoutPermissionNestedInput
    userToChanel?: UserToChanelUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutChanelInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    edit?: BoolFieldUpdateOperationsInput | boolean
    post?: BoolFieldUpdateOperationsInput | boolean
    delete?: BoolFieldUpdateOperationsInput | boolean
    upload?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    userToChanel?: UserToChanelUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type CommentCreateManyVideoInput = {
    id?: number
    userId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentUpdateWithoutVideoInput = {
    user?: UserYoutubeUpdateOneRequiredWithoutCommentNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutVideoInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserToChanelCreateManyPermissionInput = {
    id?: number
    role: RoleEnum
    userId: number
    chanelId: number
  }

  export type UserToChanelUpdateWithoutPermissionInput = {
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    user?: UserYoutubeUpdateOneRequiredWithoutUserToChanelNestedInput
    chanel?: ChanelUpdateOneRequiredWithoutUserToChanelNestedInput
  }

  export type UserToChanelUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleEnumFieldUpdateOperationsInput | RoleEnum
    userId?: IntFieldUpdateOperationsInput | number
    chanelId?: IntFieldUpdateOperationsInput | number
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