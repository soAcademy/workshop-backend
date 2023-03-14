
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model TwitterUser
 * 
 */
export type TwitterUser = {
  id: number
  name: string
  image: string
  join: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterFollow
 * 
 */
export type TwitterFollow = {
  id: number
  fromUserId: number
  toUserId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterPost
 * 
 */
export type TwitterPost = {
  id: number
  caption: string
  userId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterDirectMessage
 * 
 */
export type TwitterDirectMessage = {
  id: number
  fromUserId: number
  toUserId: number
  text: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TwitterHashtag
 * 
 */
export type TwitterHashtag = {
  id: number
  hashtag: string
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
 * // Fetch zero or more TwitterUsers
 * const twitterUsers = await prisma.twitterUser.findMany()
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
   * // Fetch zero or more TwitterUsers
   * const twitterUsers = await prisma.twitterUser.findMany()
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
   * `prisma.twitterUser`: Exposes CRUD operations for the **TwitterUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterUsers
    * const twitterUsers = await prisma.twitterUser.findMany()
    * ```
    */
  get twitterUser(): Prisma.TwitterUserDelegate<GlobalReject>;

  /**
   * `prisma.twitterFollow`: Exposes CRUD operations for the **TwitterFollow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterFollows
    * const twitterFollows = await prisma.twitterFollow.findMany()
    * ```
    */
  get twitterFollow(): Prisma.TwitterFollowDelegate<GlobalReject>;

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
   * `prisma.twitterDirectMessage`: Exposes CRUD operations for the **TwitterDirectMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterDirectMessages
    * const twitterDirectMessages = await prisma.twitterDirectMessage.findMany()
    * ```
    */
  get twitterDirectMessage(): Prisma.TwitterDirectMessageDelegate<GlobalReject>;

  /**
   * `prisma.twitterHashtag`: Exposes CRUD operations for the **TwitterHashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterHashtags
    * const twitterHashtags = await prisma.twitterHashtag.findMany()
    * ```
    */
  get twitterHashtag(): Prisma.TwitterHashtagDelegate<GlobalReject>;
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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
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
    TwitterUser: 'TwitterUser',
    TwitterFollow: 'TwitterFollow',
    TwitterPost: 'TwitterPost',
    TwitterDirectMessage: 'TwitterDirectMessage',
    TwitterHashtag: 'TwitterHashtag'
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
   * Count Type TwitterUserCountOutputType
   */


  export type TwitterUserCountOutputType = {
    fromFollowing: number
    toFollowing: number
    posts: number
    fromDirectMessage: number
    toDirectMessage: number
  }

  export type TwitterUserCountOutputTypeSelect = {
    fromFollowing?: boolean
    toFollowing?: boolean
    posts?: boolean
    fromDirectMessage?: boolean
    toDirectMessage?: boolean
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
    hashtags: number
    replyTo: number
    replyBy: number
  }

  export type TwitterPostCountOutputTypeSelect = {
    hashtags?: boolean
    replyTo?: boolean
    replyBy?: boolean
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
    posts: number
  }

  export type TwitterHashtagCountOutputTypeSelect = {
    posts?: boolean
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
   * Models
   */

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
    name: string | null
    image: string | null
    join: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    join: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterUserCountAggregateOutputType = {
    id: number
    name: number
    image: number
    join: number
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
    name?: true
    image?: true
    join?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterUserMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    join?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterUserCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    join?: true
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
    name: string
    image: string
    join: string
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
    name?: boolean
    image?: boolean
    join?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromFollowing?: boolean | TwitterUser$fromFollowingArgs
    toFollowing?: boolean | TwitterUser$toFollowingArgs
    posts?: boolean | TwitterUser$postsArgs
    fromDirectMessage?: boolean | TwitterUser$fromDirectMessageArgs
    toDirectMessage?: boolean | TwitterUser$toDirectMessageArgs
    _count?: boolean | TwitterUserCountOutputTypeArgs
  }


  export type TwitterUserInclude = {
    fromFollowing?: boolean | TwitterUser$fromFollowingArgs
    toFollowing?: boolean | TwitterUser$toFollowingArgs
    posts?: boolean | TwitterUser$postsArgs
    fromDirectMessage?: boolean | TwitterUser$fromDirectMessageArgs
    toDirectMessage?: boolean | TwitterUser$toDirectMessageArgs
    _count?: boolean | TwitterUserCountOutputTypeArgs
  }

  export type TwitterUserGetPayload<S extends boolean | null | undefined | TwitterUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterUser :
    S extends undefined ? never :
    S extends { include: any } & (TwitterUserArgs | TwitterUserFindManyArgs)
    ? TwitterUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'fromFollowing' ? Array < TwitterFollowGetPayload<S['include'][P]>>  :
        P extends 'toFollowing' ? Array < TwitterFollowGetPayload<S['include'][P]>>  :
        P extends 'posts' ? Array < TwitterPostGetPayload<S['include'][P]>>  :
        P extends 'fromDirectMessage' ? Array < TwitterDirectMessageGetPayload<S['include'][P]>>  :
        P extends 'toDirectMessage' ? Array < TwitterDirectMessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterUserArgs | TwitterUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'fromFollowing' ? Array < TwitterFollowGetPayload<S['select'][P]>>  :
        P extends 'toFollowing' ? Array < TwitterFollowGetPayload<S['select'][P]>>  :
        P extends 'posts' ? Array < TwitterPostGetPayload<S['select'][P]>>  :
        P extends 'fromDirectMessage' ? Array < TwitterDirectMessageGetPayload<S['select'][P]>>  :
        P extends 'toDirectMessage' ? Array < TwitterDirectMessageGetPayload<S['select'][P]>>  :
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

    fromFollowing<T extends TwitterUser$fromFollowingArgs= {}>(args?: Subset<T, TwitterUser$fromFollowingArgs>): Prisma.PrismaPromise<Array<TwitterFollowGetPayload<T>>| Null>;

    toFollowing<T extends TwitterUser$toFollowingArgs= {}>(args?: Subset<T, TwitterUser$toFollowingArgs>): Prisma.PrismaPromise<Array<TwitterFollowGetPayload<T>>| Null>;

    posts<T extends TwitterUser$postsArgs= {}>(args?: Subset<T, TwitterUser$postsArgs>): Prisma.PrismaPromise<Array<TwitterPostGetPayload<T>>| Null>;

    fromDirectMessage<T extends TwitterUser$fromDirectMessageArgs= {}>(args?: Subset<T, TwitterUser$fromDirectMessageArgs>): Prisma.PrismaPromise<Array<TwitterDirectMessageGetPayload<T>>| Null>;

    toDirectMessage<T extends TwitterUser$toDirectMessageArgs= {}>(args?: Subset<T, TwitterUser$toDirectMessageArgs>): Prisma.PrismaPromise<Array<TwitterDirectMessageGetPayload<T>>| Null>;

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
   * TwitterUser.fromFollowing
   */
  export type TwitterUser$fromFollowingArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    where?: TwitterFollowWhereInput
    orderBy?: Enumerable<TwitterFollowOrderByWithRelationInput>
    cursor?: TwitterFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterFollowScalarFieldEnum>
  }


  /**
   * TwitterUser.toFollowing
   */
  export type TwitterUser$toFollowingArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    where?: TwitterFollowWhereInput
    orderBy?: Enumerable<TwitterFollowOrderByWithRelationInput>
    cursor?: TwitterFollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterFollowScalarFieldEnum>
  }


  /**
   * TwitterUser.posts
   */
  export type TwitterUser$postsArgs = {
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
   * TwitterUser.fromDirectMessage
   */
  export type TwitterUser$fromDirectMessageArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    where?: TwitterDirectMessageWhereInput
    orderBy?: Enumerable<TwitterDirectMessageOrderByWithRelationInput>
    cursor?: TwitterDirectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterDirectMessageScalarFieldEnum>
  }


  /**
   * TwitterUser.toDirectMessage
   */
  export type TwitterUser$toDirectMessageArgs = {
    /**
     * Select specific fields to fetch from the TwitterDirectMessage
     */
    select?: TwitterDirectMessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterDirectMessageInclude | null
    where?: TwitterDirectMessageWhereInput
    orderBy?: Enumerable<TwitterDirectMessageOrderByWithRelationInput>
    cursor?: TwitterDirectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterDirectMessageScalarFieldEnum>
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
   * Model TwitterFollow
   */


  export type AggregateTwitterFollow = {
    _count: TwitterFollowCountAggregateOutputType | null
    _avg: TwitterFollowAvgAggregateOutputType | null
    _sum: TwitterFollowSumAggregateOutputType | null
    _min: TwitterFollowMinAggregateOutputType | null
    _max: TwitterFollowMaxAggregateOutputType | null
  }

  export type TwitterFollowAvgAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type TwitterFollowSumAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type TwitterFollowMinAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterFollowMaxAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterFollowCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterFollowAvgAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type TwitterFollowSumAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type TwitterFollowMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterFollowMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterFollowCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwitterFollowAggregateArgs = {
    /**
     * Filter which TwitterFollow to aggregate.
     */
    where?: TwitterFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterFollows to fetch.
     */
    orderBy?: Enumerable<TwitterFollowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterFollows
    **/
    _count?: true | TwitterFollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TwitterFollowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TwitterFollowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterFollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterFollowMaxAggregateInputType
  }

  export type GetTwitterFollowAggregateType<T extends TwitterFollowAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterFollow[P]>
      : GetScalarType<T[P], AggregateTwitterFollow[P]>
  }




  export type TwitterFollowGroupByArgs = {
    where?: TwitterFollowWhereInput
    orderBy?: Enumerable<TwitterFollowOrderByWithAggregationInput>
    by: TwitterFollowScalarFieldEnum[]
    having?: TwitterFollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterFollowCountAggregateInputType | true
    _avg?: TwitterFollowAvgAggregateInputType
    _sum?: TwitterFollowSumAggregateInputType
    _min?: TwitterFollowMinAggregateInputType
    _max?: TwitterFollowMaxAggregateInputType
  }


  export type TwitterFollowGroupByOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    createdAt: Date
    updatedAt: Date
    _count: TwitterFollowCountAggregateOutputType | null
    _avg: TwitterFollowAvgAggregateOutputType | null
    _sum: TwitterFollowSumAggregateOutputType | null
    _min: TwitterFollowMinAggregateOutputType | null
    _max: TwitterFollowMaxAggregateOutputType | null
  }

  type GetTwitterFollowGroupByPayload<T extends TwitterFollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TwitterFollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterFollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterFollowGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterFollowGroupByOutputType[P]>
        }
      >
    >


  export type TwitterFollowSelect = {
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    from?: boolean | TwitterUserArgs
    to?: boolean | TwitterUserArgs
  }


  export type TwitterFollowInclude = {
    from?: boolean | TwitterUserArgs
    to?: boolean | TwitterUserArgs
  }

  export type TwitterFollowGetPayload<S extends boolean | null | undefined | TwitterFollowArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterFollow :
    S extends undefined ? never :
    S extends { include: any } & (TwitterFollowArgs | TwitterFollowFindManyArgs)
    ? TwitterFollow  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'from' ? TwitterUserGetPayload<S['include'][P]> :
        P extends 'to' ? TwitterUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterFollowArgs | TwitterFollowFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'from' ? TwitterUserGetPayload<S['select'][P]> :
        P extends 'to' ? TwitterUserGetPayload<S['select'][P]> :  P extends keyof TwitterFollow ? TwitterFollow[P] : never
  } 
      : TwitterFollow


  type TwitterFollowCountArgs = 
    Omit<TwitterFollowFindManyArgs, 'select' | 'include'> & {
      select?: TwitterFollowCountAggregateInputType | true
    }

  export interface TwitterFollowDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TwitterFollow that matches the filter.
     * @param {TwitterFollowFindUniqueArgs} args - Arguments to find a TwitterFollow
     * @example
     * // Get one TwitterFollow
     * const twitterFollow = await prisma.twitterFollow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwitterFollowFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TwitterFollowFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TwitterFollow'> extends True ? Prisma__TwitterFollowClient<TwitterFollowGetPayload<T>> : Prisma__TwitterFollowClient<TwitterFollowGetPayload<T> | null, null>

    /**
     * Find one TwitterFollow that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwitterFollowFindUniqueOrThrowArgs} args - Arguments to find a TwitterFollow
     * @example
     * // Get one TwitterFollow
     * const twitterFollow = await prisma.twitterFollow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwitterFollowFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TwitterFollowFindUniqueOrThrowArgs>
    ): Prisma__TwitterFollowClient<TwitterFollowGetPayload<T>>

    /**
     * Find the first TwitterFollow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterFollowFindFirstArgs} args - Arguments to find a TwitterFollow
     * @example
     * // Get one TwitterFollow
     * const twitterFollow = await prisma.twitterFollow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwitterFollowFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TwitterFollowFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TwitterFollow'> extends True ? Prisma__TwitterFollowClient<TwitterFollowGetPayload<T>> : Prisma__TwitterFollowClient<TwitterFollowGetPayload<T> | null, null>

    /**
     * Find the first TwitterFollow that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterFollowFindFirstOrThrowArgs} args - Arguments to find a TwitterFollow
     * @example
     * // Get one TwitterFollow
     * const twitterFollow = await prisma.twitterFollow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwitterFollowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TwitterFollowFindFirstOrThrowArgs>
    ): Prisma__TwitterFollowClient<TwitterFollowGetPayload<T>>

    /**
     * Find zero or more TwitterFollows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterFollowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterFollows
     * const twitterFollows = await prisma.twitterFollow.findMany()
     * 
     * // Get first 10 TwitterFollows
     * const twitterFollows = await prisma.twitterFollow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twitterFollowWithIdOnly = await prisma.twitterFollow.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwitterFollowFindManyArgs>(
      args?: SelectSubset<T, TwitterFollowFindManyArgs>
    ): Prisma.PrismaPromise<Array<TwitterFollowGetPayload<T>>>

    /**
     * Create a TwitterFollow.
     * @param {TwitterFollowCreateArgs} args - Arguments to create a TwitterFollow.
     * @example
     * // Create one TwitterFollow
     * const TwitterFollow = await prisma.twitterFollow.create({
     *   data: {
     *     // ... data to create a TwitterFollow
     *   }
     * })
     * 
    **/
    create<T extends TwitterFollowCreateArgs>(
      args: SelectSubset<T, TwitterFollowCreateArgs>
    ): Prisma__TwitterFollowClient<TwitterFollowGetPayload<T>>

    /**
     * Create many TwitterFollows.
     *     @param {TwitterFollowCreateManyArgs} args - Arguments to create many TwitterFollows.
     *     @example
     *     // Create many TwitterFollows
     *     const twitterFollow = await prisma.twitterFollow.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwitterFollowCreateManyArgs>(
      args?: SelectSubset<T, TwitterFollowCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwitterFollow.
     * @param {TwitterFollowDeleteArgs} args - Arguments to delete one TwitterFollow.
     * @example
     * // Delete one TwitterFollow
     * const TwitterFollow = await prisma.twitterFollow.delete({
     *   where: {
     *     // ... filter to delete one TwitterFollow
     *   }
     * })
     * 
    **/
    delete<T extends TwitterFollowDeleteArgs>(
      args: SelectSubset<T, TwitterFollowDeleteArgs>
    ): Prisma__TwitterFollowClient<TwitterFollowGetPayload<T>>

    /**
     * Update one TwitterFollow.
     * @param {TwitterFollowUpdateArgs} args - Arguments to update one TwitterFollow.
     * @example
     * // Update one TwitterFollow
     * const twitterFollow = await prisma.twitterFollow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwitterFollowUpdateArgs>(
      args: SelectSubset<T, TwitterFollowUpdateArgs>
    ): Prisma__TwitterFollowClient<TwitterFollowGetPayload<T>>

    /**
     * Delete zero or more TwitterFollows.
     * @param {TwitterFollowDeleteManyArgs} args - Arguments to filter TwitterFollows to delete.
     * @example
     * // Delete a few TwitterFollows
     * const { count } = await prisma.twitterFollow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwitterFollowDeleteManyArgs>(
      args?: SelectSubset<T, TwitterFollowDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterFollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterFollows
     * const twitterFollow = await prisma.twitterFollow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwitterFollowUpdateManyArgs>(
      args: SelectSubset<T, TwitterFollowUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwitterFollow.
     * @param {TwitterFollowUpsertArgs} args - Arguments to update or create a TwitterFollow.
     * @example
     * // Update or create a TwitterFollow
     * const twitterFollow = await prisma.twitterFollow.upsert({
     *   create: {
     *     // ... data to create a TwitterFollow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterFollow we want to update
     *   }
     * })
    **/
    upsert<T extends TwitterFollowUpsertArgs>(
      args: SelectSubset<T, TwitterFollowUpsertArgs>
    ): Prisma__TwitterFollowClient<TwitterFollowGetPayload<T>>

    /**
     * Count the number of TwitterFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterFollowCountArgs} args - Arguments to filter TwitterFollows to count.
     * @example
     * // Count the number of TwitterFollows
     * const count = await prisma.twitterFollow.count({
     *   where: {
     *     // ... the filter for the TwitterFollows we want to count
     *   }
     * })
    **/
    count<T extends TwitterFollowCountArgs>(
      args?: Subset<T, TwitterFollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterFollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterFollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwitterFollowAggregateArgs>(args: Subset<T, TwitterFollowAggregateArgs>): Prisma.PrismaPromise<GetTwitterFollowAggregateType<T>>

    /**
     * Group by TwitterFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterFollowGroupByArgs} args - Group by arguments.
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
      T extends TwitterFollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterFollowGroupByArgs['orderBy'] }
        : { orderBy?: TwitterFollowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwitterFollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterFollow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TwitterFollowClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    from<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

    to<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

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
   * TwitterFollow base type for findUnique actions
   */
  export type TwitterFollowFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * Filter, which TwitterFollow to fetch.
     */
    where: TwitterFollowWhereUniqueInput
  }

  /**
   * TwitterFollow findUnique
   */
  export interface TwitterFollowFindUniqueArgs extends TwitterFollowFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterFollow findUniqueOrThrow
   */
  export type TwitterFollowFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * Filter, which TwitterFollow to fetch.
     */
    where: TwitterFollowWhereUniqueInput
  }


  /**
   * TwitterFollow base type for findFirst actions
   */
  export type TwitterFollowFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * Filter, which TwitterFollow to fetch.
     */
    where?: TwitterFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterFollows to fetch.
     */
    orderBy?: Enumerable<TwitterFollowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterFollows.
     */
    cursor?: TwitterFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterFollows.
     */
    distinct?: Enumerable<TwitterFollowScalarFieldEnum>
  }

  /**
   * TwitterFollow findFirst
   */
  export interface TwitterFollowFindFirstArgs extends TwitterFollowFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TwitterFollow findFirstOrThrow
   */
  export type TwitterFollowFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * Filter, which TwitterFollow to fetch.
     */
    where?: TwitterFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterFollows to fetch.
     */
    orderBy?: Enumerable<TwitterFollowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterFollows.
     */
    cursor?: TwitterFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterFollows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterFollows.
     */
    distinct?: Enumerable<TwitterFollowScalarFieldEnum>
  }


  /**
   * TwitterFollow findMany
   */
  export type TwitterFollowFindManyArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * Filter, which TwitterFollows to fetch.
     */
    where?: TwitterFollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterFollows to fetch.
     */
    orderBy?: Enumerable<TwitterFollowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterFollows.
     */
    cursor?: TwitterFollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterFollows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterFollows.
     */
    skip?: number
    distinct?: Enumerable<TwitterFollowScalarFieldEnum>
  }


  /**
   * TwitterFollow create
   */
  export type TwitterFollowCreateArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * The data needed to create a TwitterFollow.
     */
    data: XOR<TwitterFollowCreateInput, TwitterFollowUncheckedCreateInput>
  }


  /**
   * TwitterFollow createMany
   */
  export type TwitterFollowCreateManyArgs = {
    /**
     * The data used to create many TwitterFollows.
     */
    data: Enumerable<TwitterFollowCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TwitterFollow update
   */
  export type TwitterFollowUpdateArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * The data needed to update a TwitterFollow.
     */
    data: XOR<TwitterFollowUpdateInput, TwitterFollowUncheckedUpdateInput>
    /**
     * Choose, which TwitterFollow to update.
     */
    where: TwitterFollowWhereUniqueInput
  }


  /**
   * TwitterFollow updateMany
   */
  export type TwitterFollowUpdateManyArgs = {
    /**
     * The data used to update TwitterFollows.
     */
    data: XOR<TwitterFollowUpdateManyMutationInput, TwitterFollowUncheckedUpdateManyInput>
    /**
     * Filter which TwitterFollows to update
     */
    where?: TwitterFollowWhereInput
  }


  /**
   * TwitterFollow upsert
   */
  export type TwitterFollowUpsertArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * The filter to search for the TwitterFollow to update in case it exists.
     */
    where: TwitterFollowWhereUniqueInput
    /**
     * In case the TwitterFollow found by the `where` argument doesn't exist, create a new TwitterFollow with this data.
     */
    create: XOR<TwitterFollowCreateInput, TwitterFollowUncheckedCreateInput>
    /**
     * In case the TwitterFollow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterFollowUpdateInput, TwitterFollowUncheckedUpdateInput>
  }


  /**
   * TwitterFollow delete
   */
  export type TwitterFollowDeleteArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
    /**
     * Filter which TwitterFollow to delete.
     */
    where: TwitterFollowWhereUniqueInput
  }


  /**
   * TwitterFollow deleteMany
   */
  export type TwitterFollowDeleteManyArgs = {
    /**
     * Filter which TwitterFollows to delete
     */
    where?: TwitterFollowWhereInput
  }


  /**
   * TwitterFollow without action
   */
  export type TwitterFollowArgs = {
    /**
     * Select specific fields to fetch from the TwitterFollow
     */
    select?: TwitterFollowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterFollowInclude | null
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
    userId: number | null
  }

  export type TwitterPostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TwitterPostMinAggregateOutputType = {
    id: number | null
    caption: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterPostMaxAggregateOutputType = {
    id: number | null
    caption: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterPostCountAggregateOutputType = {
    id: number
    caption: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterPostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TwitterPostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TwitterPostMinAggregateInputType = {
    id?: true
    caption?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterPostMaxAggregateInputType = {
    id?: true
    caption?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterPostCountAggregateInputType = {
    id?: true
    caption?: true
    userId?: true
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
    caption: string
    userId: number
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
    caption?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | TwitterUserArgs
    hashtags?: boolean | TwitterPost$hashtagsArgs
    replyTo?: boolean | TwitterPost$replyToArgs
    replyBy?: boolean | TwitterPost$replyByArgs
    _count?: boolean | TwitterPostCountOutputTypeArgs
  }


  export type TwitterPostInclude = {
    user?: boolean | TwitterUserArgs
    hashtags?: boolean | TwitterPost$hashtagsArgs
    replyTo?: boolean | TwitterPost$replyToArgs
    replyBy?: boolean | TwitterPost$replyByArgs
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
        P extends 'hashtags' ? Array < TwitterHashtagGetPayload<S['include'][P]>>  :
        P extends 'replyTo' ? Array < TwitterPostGetPayload<S['include'][P]>>  :
        P extends 'replyBy' ? Array < TwitterPostGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterPostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterPostArgs | TwitterPostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? TwitterUserGetPayload<S['select'][P]> :
        P extends 'hashtags' ? Array < TwitterHashtagGetPayload<S['select'][P]>>  :
        P extends 'replyTo' ? Array < TwitterPostGetPayload<S['select'][P]>>  :
        P extends 'replyBy' ? Array < TwitterPostGetPayload<S['select'][P]>>  :
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

    hashtags<T extends TwitterPost$hashtagsArgs= {}>(args?: Subset<T, TwitterPost$hashtagsArgs>): Prisma.PrismaPromise<Array<TwitterHashtagGetPayload<T>>| Null>;

    replyTo<T extends TwitterPost$replyToArgs= {}>(args?: Subset<T, TwitterPost$replyToArgs>): Prisma.PrismaPromise<Array<TwitterPostGetPayload<T>>| Null>;

    replyBy<T extends TwitterPost$replyByArgs= {}>(args?: Subset<T, TwitterPost$replyByArgs>): Prisma.PrismaPromise<Array<TwitterPostGetPayload<T>>| Null>;

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
   * TwitterPost.hashtags
   */
  export type TwitterPost$hashtagsArgs = {
    /**
     * Select specific fields to fetch from the TwitterHashtag
     */
    select?: TwitterHashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwitterHashtagInclude | null
    where?: TwitterHashtagWhereInput
    orderBy?: Enumerable<TwitterHashtagOrderByWithRelationInput>
    cursor?: TwitterHashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TwitterHashtagScalarFieldEnum>
  }


  /**
   * TwitterPost.replyTo
   */
  export type TwitterPost$replyToArgs = {
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
   * TwitterPost.replyBy
   */
  export type TwitterPost$replyByArgs = {
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
    fromUserId: number | null
    toUserId: number | null
  }

  export type TwitterDirectMessageSumAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
  }

  export type TwitterDirectMessageMinAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterDirectMessageMaxAggregateOutputType = {
    id: number | null
    fromUserId: number | null
    toUserId: number | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterDirectMessageCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterDirectMessageAvgAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type TwitterDirectMessageSumAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
  }

  export type TwitterDirectMessageMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterDirectMessageMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterDirectMessageCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    text?: true
    createdAt?: true
    updatedAt?: true
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
    fromUserId: number
    toUserId: number
    text: string
    createdAt: Date
    updatedAt: Date
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
    fromUserId?: boolean
    toUserId?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    from?: boolean | TwitterUserArgs
    to?: boolean | TwitterUserArgs
  }


  export type TwitterDirectMessageInclude = {
    from?: boolean | TwitterUserArgs
    to?: boolean | TwitterUserArgs
  }

  export type TwitterDirectMessageGetPayload<S extends boolean | null | undefined | TwitterDirectMessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterDirectMessage :
    S extends undefined ? never :
    S extends { include: any } & (TwitterDirectMessageArgs | TwitterDirectMessageFindManyArgs)
    ? TwitterDirectMessage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'from' ? TwitterUserGetPayload<S['include'][P]> :
        P extends 'to' ? TwitterUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterDirectMessageArgs | TwitterDirectMessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'from' ? TwitterUserGetPayload<S['select'][P]> :
        P extends 'to' ? TwitterUserGetPayload<S['select'][P]> :  P extends keyof TwitterDirectMessage ? TwitterDirectMessage[P] : never
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

    from<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

    to<T extends TwitterUserArgs= {}>(args?: Subset<T, TwitterUserArgs>): Prisma__TwitterUserClient<TwitterUserGetPayload<T> | Null>;

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
    hashtag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterHashtagMaxAggregateOutputType = {
    id: number | null
    hashtag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterHashtagCountAggregateOutputType = {
    id: number
    hashtag: number
    createdAt: number
    updatedAt: number
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
    hashtag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterHashtagMaxAggregateInputType = {
    id?: true
    hashtag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterHashtagCountAggregateInputType = {
    id?: true
    hashtag?: true
    createdAt?: true
    updatedAt?: true
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
    hashtag: string
    createdAt: Date
    updatedAt: Date
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
    hashtag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | TwitterHashtag$postsArgs
    _count?: boolean | TwitterHashtagCountOutputTypeArgs
  }


  export type TwitterHashtagInclude = {
    posts?: boolean | TwitterHashtag$postsArgs
    _count?: boolean | TwitterHashtagCountOutputTypeArgs
  }

  export type TwitterHashtagGetPayload<S extends boolean | null | undefined | TwitterHashtagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TwitterHashtag :
    S extends undefined ? never :
    S extends { include: any } & (TwitterHashtagArgs | TwitterHashtagFindManyArgs)
    ? TwitterHashtag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'posts' ? Array < TwitterPostGetPayload<S['include'][P]>>  :
        P extends '_count' ? TwitterHashtagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TwitterHashtagArgs | TwitterHashtagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'posts' ? Array < TwitterPostGetPayload<S['select'][P]>>  :
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

    posts<T extends TwitterHashtag$postsArgs= {}>(args?: Subset<T, TwitterHashtag$postsArgs>): Prisma.PrismaPromise<Array<TwitterPostGetPayload<T>>| Null>;

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
   * TwitterHashtag.posts
   */
  export type TwitterHashtag$postsArgs = {
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
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

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


  export const TwitterDirectMessageScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterDirectMessageScalarFieldEnum = (typeof TwitterDirectMessageScalarFieldEnum)[keyof typeof TwitterDirectMessageScalarFieldEnum]


  export const TwitterFollowScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterFollowScalarFieldEnum = (typeof TwitterFollowScalarFieldEnum)[keyof typeof TwitterFollowScalarFieldEnum]


  export const TwitterHashtagScalarFieldEnum: {
    id: 'id',
    hashtag: 'hashtag',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterHashtagScalarFieldEnum = (typeof TwitterHashtagScalarFieldEnum)[keyof typeof TwitterHashtagScalarFieldEnum]


  export const TwitterPostScalarFieldEnum: {
    id: 'id',
    caption: 'caption',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterPostScalarFieldEnum = (typeof TwitterPostScalarFieldEnum)[keyof typeof TwitterPostScalarFieldEnum]


  export const TwitterUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    join: 'join',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterUserScalarFieldEnum = (typeof TwitterUserScalarFieldEnum)[keyof typeof TwitterUserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type TwitterUserWhereInput = {
    AND?: Enumerable<TwitterUserWhereInput>
    OR?: Enumerable<TwitterUserWhereInput>
    NOT?: Enumerable<TwitterUserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    join?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    fromFollowing?: TwitterFollowListRelationFilter
    toFollowing?: TwitterFollowListRelationFilter
    posts?: TwitterPostListRelationFilter
    fromDirectMessage?: TwitterDirectMessageListRelationFilter
    toDirectMessage?: TwitterDirectMessageListRelationFilter
  }

  export type TwitterUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    join?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromFollowing?: TwitterFollowOrderByRelationAggregateInput
    toFollowing?: TwitterFollowOrderByRelationAggregateInput
    posts?: TwitterPostOrderByRelationAggregateInput
    fromDirectMessage?: TwitterDirectMessageOrderByRelationAggregateInput
    toDirectMessage?: TwitterDirectMessageOrderByRelationAggregateInput
  }

  export type TwitterUserWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type TwitterUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    join?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    join?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterFollowWhereInput = {
    AND?: Enumerable<TwitterFollowWhereInput>
    OR?: Enumerable<TwitterFollowWhereInput>
    NOT?: Enumerable<TwitterFollowWhereInput>
    id?: IntFilter | number
    fromUserId?: IntFilter | number
    toUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    from?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    to?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
  }

  export type TwitterFollowOrderByWithRelationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    from?: TwitterUserOrderByWithRelationInput
    to?: TwitterUserOrderByWithRelationInput
  }

  export type TwitterFollowWhereUniqueInput = {
    id?: number
  }

  export type TwitterFollowOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwitterFollowCountOrderByAggregateInput
    _avg?: TwitterFollowAvgOrderByAggregateInput
    _max?: TwitterFollowMaxOrderByAggregateInput
    _min?: TwitterFollowMinOrderByAggregateInput
    _sum?: TwitterFollowSumOrderByAggregateInput
  }

  export type TwitterFollowScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TwitterFollowScalarWhereWithAggregatesInput>
    OR?: Enumerable<TwitterFollowScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TwitterFollowScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    fromUserId?: IntWithAggregatesFilter | number
    toUserId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterPostWhereInput = {
    AND?: Enumerable<TwitterPostWhereInput>
    OR?: Enumerable<TwitterPostWhereInput>
    NOT?: Enumerable<TwitterPostWhereInput>
    id?: IntFilter | number
    caption?: StringFilter | string
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    hashtags?: TwitterHashtagListRelationFilter
    replyTo?: TwitterPostListRelationFilter
    replyBy?: TwitterPostListRelationFilter
  }

  export type TwitterPostOrderByWithRelationInput = {
    id?: SortOrder
    caption?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: TwitterUserOrderByWithRelationInput
    hashtags?: TwitterHashtagOrderByRelationAggregateInput
    replyTo?: TwitterPostOrderByRelationAggregateInput
    replyBy?: TwitterPostOrderByRelationAggregateInput
  }

  export type TwitterPostWhereUniqueInput = {
    id?: number
  }

  export type TwitterPostOrderByWithAggregationInput = {
    id?: SortOrder
    caption?: SortOrder
    userId?: SortOrder
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
    caption?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterDirectMessageWhereInput = {
    AND?: Enumerable<TwitterDirectMessageWhereInput>
    OR?: Enumerable<TwitterDirectMessageWhereInput>
    NOT?: Enumerable<TwitterDirectMessageWhereInput>
    id?: IntFilter | number
    fromUserId?: IntFilter | number
    toUserId?: IntFilter | number
    text?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    from?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
    to?: XOR<TwitterUserRelationFilter, TwitterUserWhereInput>
  }

  export type TwitterDirectMessageOrderByWithRelationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    from?: TwitterUserOrderByWithRelationInput
    to?: TwitterUserOrderByWithRelationInput
  }

  export type TwitterDirectMessageWhereUniqueInput = {
    id?: number
  }

  export type TwitterDirectMessageOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    fromUserId?: IntWithAggregatesFilter | number
    toUserId?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterHashtagWhereInput = {
    AND?: Enumerable<TwitterHashtagWhereInput>
    OR?: Enumerable<TwitterHashtagWhereInput>
    NOT?: Enumerable<TwitterHashtagWhereInput>
    id?: IntFilter | number
    hashtag?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    posts?: TwitterPostListRelationFilter
  }

  export type TwitterHashtagOrderByWithRelationInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: TwitterPostOrderByRelationAggregateInput
  }

  export type TwitterHashtagWhereUniqueInput = {
    id?: number
    hashtag?: string
  }

  export type TwitterHashtagOrderByWithAggregationInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    hashtag?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TwitterUserCreateInput = {
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowCreateNestedManyWithoutFromInput
    toFollowing?: TwitterFollowCreateNestedManyWithoutToInput
    posts?: TwitterPostCreateNestedManyWithoutUserInput
    fromDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutFromInput
    toDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutToInput
  }

  export type TwitterUserUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutToInput
    posts?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutToInput
  }

  export type TwitterUserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUpdateManyWithoutFromNestedInput
    toFollowing?: TwitterFollowUpdateManyWithoutToNestedInput
    posts?: TwitterPostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: TwitterDirectMessageUpdateManyWithoutFromNestedInput
    toDirectMessage?: TwitterDirectMessageUpdateManyWithoutToNestedInput
  }

  export type TwitterUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: TwitterFollowUncheckedUpdateManyWithoutToNestedInput
    posts?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutToNestedInput
  }

  export type TwitterUserCreateManyInput = {
    id?: number
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterUserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterFollowCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    from: TwitterUserCreateNestedOneWithoutFromFollowingInput
    to: TwitterUserCreateNestedOneWithoutToFollowingInput
  }

  export type TwitterFollowUncheckedCreateInput = {
    id?: number
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterFollowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: TwitterUserUpdateOneRequiredWithoutFromFollowingNestedInput
    to?: TwitterUserUpdateOneRequiredWithoutToFollowingNestedInput
  }

  export type TwitterFollowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterFollowCreateManyInput = {
    id?: number
    fromUserId: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterFollowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterFollowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostCreateInput = {
    caption: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: TwitterUserCreateNestedOneWithoutPostsInput
    hashtags?: TwitterHashtagCreateNestedManyWithoutPostsInput
    replyTo?: TwitterPostCreateNestedManyWithoutReplyByInput
    replyBy?: TwitterPostCreateNestedManyWithoutReplyToInput
  }

  export type TwitterPostUncheckedCreateInput = {
    id?: number
    caption: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtags?: TwitterHashtagUncheckedCreateNestedManyWithoutPostsInput
    replyTo?: TwitterPostUncheckedCreateNestedManyWithoutReplyByInput
    replyBy?: TwitterPostUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type TwitterPostUpdateInput = {
    caption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: TwitterUserUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: TwitterHashtagUpdateManyWithoutPostsNestedInput
    replyTo?: TwitterPostUpdateManyWithoutReplyByNestedInput
    replyBy?: TwitterPostUpdateManyWithoutReplyToNestedInput
  }

  export type TwitterPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: TwitterHashtagUncheckedUpdateManyWithoutPostsNestedInput
    replyTo?: TwitterPostUncheckedUpdateManyWithoutReplyByNestedInput
    replyBy?: TwitterPostUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type TwitterPostCreateManyInput = {
    id?: number
    caption: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterPostUpdateManyMutationInput = {
    caption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageCreateInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    from: TwitterUserCreateNestedOneWithoutFromDirectMessageInput
    to: TwitterUserCreateNestedOneWithoutToDirectMessageInput
  }

  export type TwitterDirectMessageUncheckedCreateInput = {
    id?: number
    fromUserId: number
    toUserId: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDirectMessageUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: TwitterUserUpdateOneRequiredWithoutFromDirectMessageNestedInput
    to?: TwitterUserUpdateOneRequiredWithoutToDirectMessageNestedInput
  }

  export type TwitterDirectMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageCreateManyInput = {
    id?: number
    fromUserId: number
    toUserId: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDirectMessageUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashtagCreateInput = {
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: TwitterPostCreateNestedManyWithoutHashtagsInput
  }

  export type TwitterHashtagUncheckedCreateInput = {
    id?: number
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: TwitterPostUncheckedCreateNestedManyWithoutHashtagsInput
  }

  export type TwitterHashtagUpdateInput = {
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: TwitterPostUpdateManyWithoutHashtagsNestedInput
  }

  export type TwitterHashtagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: TwitterPostUncheckedUpdateManyWithoutHashtagsNestedInput
  }

  export type TwitterHashtagCreateManyInput = {
    id?: number
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterHashtagUpdateManyMutationInput = {
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashtagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtag?: StringFieldUpdateOperationsInput | string
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

  export type TwitterFollowListRelationFilter = {
    every?: TwitterFollowWhereInput
    some?: TwitterFollowWhereInput
    none?: TwitterFollowWhereInput
  }

  export type TwitterPostListRelationFilter = {
    every?: TwitterPostWhereInput
    some?: TwitterPostWhereInput
    none?: TwitterPostWhereInput
  }

  export type TwitterDirectMessageListRelationFilter = {
    every?: TwitterDirectMessageWhereInput
    some?: TwitterDirectMessageWhereInput
    none?: TwitterDirectMessageWhereInput
  }

  export type TwitterFollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterDirectMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    join?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    join?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    join?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterUserSumOrderByAggregateInput = {
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

  export type TwitterUserRelationFilter = {
    is?: TwitterUserWhereInput
    isNot?: TwitterUserWhereInput
  }

  export type TwitterFollowCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterFollowAvgOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type TwitterFollowMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterFollowMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterFollowSumOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type TwitterHashtagListRelationFilter = {
    every?: TwitterHashtagWhereInput
    some?: TwitterHashtagWhereInput
    none?: TwitterHashtagWhereInput
  }

  export type TwitterHashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TwitterPostCountOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterPostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TwitterPostMaxOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterPostMinOrderByAggregateInput = {
    id?: SortOrder
    caption?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterPostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TwitterDirectMessageCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterDirectMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type TwitterDirectMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterDirectMessageMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterDirectMessageSumOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
  }

  export type TwitterHashtagCountOrderByAggregateInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterHashtagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterHashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterHashtagMinOrderByAggregateInput = {
    id?: SortOrder
    hashtag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterHashtagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TwitterFollowCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<TwitterFollowCreateWithoutFromInput>, Enumerable<TwitterFollowUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<TwitterFollowCreateOrConnectWithoutFromInput>
    createMany?: TwitterFollowCreateManyFromInputEnvelope
    connect?: Enumerable<TwitterFollowWhereUniqueInput>
  }

  export type TwitterFollowCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<TwitterFollowCreateWithoutToInput>, Enumerable<TwitterFollowUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<TwitterFollowCreateOrConnectWithoutToInput>
    createMany?: TwitterFollowCreateManyToInputEnvelope
    connect?: Enumerable<TwitterFollowWhereUniqueInput>
  }

  export type TwitterPostCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutUserInput>, Enumerable<TwitterPostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutUserInput>
    createMany?: TwitterPostCreateManyUserInputEnvelope
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterDirectMessageCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<TwitterDirectMessageCreateWithoutFromInput>, Enumerable<TwitterDirectMessageUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<TwitterDirectMessageCreateOrConnectWithoutFromInput>
    createMany?: TwitterDirectMessageCreateManyFromInputEnvelope
    connect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
  }

  export type TwitterDirectMessageCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<TwitterDirectMessageCreateWithoutToInput>, Enumerable<TwitterDirectMessageUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<TwitterDirectMessageCreateOrConnectWithoutToInput>
    createMany?: TwitterDirectMessageCreateManyToInputEnvelope
    connect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
  }

  export type TwitterFollowUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<TwitterFollowCreateWithoutFromInput>, Enumerable<TwitterFollowUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<TwitterFollowCreateOrConnectWithoutFromInput>
    createMany?: TwitterFollowCreateManyFromInputEnvelope
    connect?: Enumerable<TwitterFollowWhereUniqueInput>
  }

  export type TwitterFollowUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<TwitterFollowCreateWithoutToInput>, Enumerable<TwitterFollowUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<TwitterFollowCreateOrConnectWithoutToInput>
    createMany?: TwitterFollowCreateManyToInputEnvelope
    connect?: Enumerable<TwitterFollowWhereUniqueInput>
  }

  export type TwitterPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutUserInput>, Enumerable<TwitterPostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutUserInput>
    createMany?: TwitterPostCreateManyUserInputEnvelope
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterDirectMessageUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<TwitterDirectMessageCreateWithoutFromInput>, Enumerable<TwitterDirectMessageUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<TwitterDirectMessageCreateOrConnectWithoutFromInput>
    createMany?: TwitterDirectMessageCreateManyFromInputEnvelope
    connect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
  }

  export type TwitterDirectMessageUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<TwitterDirectMessageCreateWithoutToInput>, Enumerable<TwitterDirectMessageUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<TwitterDirectMessageCreateOrConnectWithoutToInput>
    createMany?: TwitterDirectMessageCreateManyToInputEnvelope
    connect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TwitterFollowUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<TwitterFollowCreateWithoutFromInput>, Enumerable<TwitterFollowUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<TwitterFollowCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<TwitterFollowUpsertWithWhereUniqueWithoutFromInput>
    createMany?: TwitterFollowCreateManyFromInputEnvelope
    set?: Enumerable<TwitterFollowWhereUniqueInput>
    disconnect?: Enumerable<TwitterFollowWhereUniqueInput>
    delete?: Enumerable<TwitterFollowWhereUniqueInput>
    connect?: Enumerable<TwitterFollowWhereUniqueInput>
    update?: Enumerable<TwitterFollowUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<TwitterFollowUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<TwitterFollowScalarWhereInput>
  }

  export type TwitterFollowUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<TwitterFollowCreateWithoutToInput>, Enumerable<TwitterFollowUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<TwitterFollowCreateOrConnectWithoutToInput>
    upsert?: Enumerable<TwitterFollowUpsertWithWhereUniqueWithoutToInput>
    createMany?: TwitterFollowCreateManyToInputEnvelope
    set?: Enumerable<TwitterFollowWhereUniqueInput>
    disconnect?: Enumerable<TwitterFollowWhereUniqueInput>
    delete?: Enumerable<TwitterFollowWhereUniqueInput>
    connect?: Enumerable<TwitterFollowWhereUniqueInput>
    update?: Enumerable<TwitterFollowUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<TwitterFollowUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<TwitterFollowScalarWhereInput>
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

  export type TwitterDirectMessageUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<TwitterDirectMessageCreateWithoutFromInput>, Enumerable<TwitterDirectMessageUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<TwitterDirectMessageCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<TwitterDirectMessageUpsertWithWhereUniqueWithoutFromInput>
    createMany?: TwitterDirectMessageCreateManyFromInputEnvelope
    set?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    disconnect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    delete?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    connect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    update?: Enumerable<TwitterDirectMessageUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<TwitterDirectMessageUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<TwitterDirectMessageScalarWhereInput>
  }

  export type TwitterDirectMessageUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<TwitterDirectMessageCreateWithoutToInput>, Enumerable<TwitterDirectMessageUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<TwitterDirectMessageCreateOrConnectWithoutToInput>
    upsert?: Enumerable<TwitterDirectMessageUpsertWithWhereUniqueWithoutToInput>
    createMany?: TwitterDirectMessageCreateManyToInputEnvelope
    set?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    disconnect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    delete?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    connect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    update?: Enumerable<TwitterDirectMessageUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<TwitterDirectMessageUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<TwitterDirectMessageScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TwitterFollowUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<TwitterFollowCreateWithoutFromInput>, Enumerable<TwitterFollowUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<TwitterFollowCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<TwitterFollowUpsertWithWhereUniqueWithoutFromInput>
    createMany?: TwitterFollowCreateManyFromInputEnvelope
    set?: Enumerable<TwitterFollowWhereUniqueInput>
    disconnect?: Enumerable<TwitterFollowWhereUniqueInput>
    delete?: Enumerable<TwitterFollowWhereUniqueInput>
    connect?: Enumerable<TwitterFollowWhereUniqueInput>
    update?: Enumerable<TwitterFollowUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<TwitterFollowUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<TwitterFollowScalarWhereInput>
  }

  export type TwitterFollowUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<TwitterFollowCreateWithoutToInput>, Enumerable<TwitterFollowUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<TwitterFollowCreateOrConnectWithoutToInput>
    upsert?: Enumerable<TwitterFollowUpsertWithWhereUniqueWithoutToInput>
    createMany?: TwitterFollowCreateManyToInputEnvelope
    set?: Enumerable<TwitterFollowWhereUniqueInput>
    disconnect?: Enumerable<TwitterFollowWhereUniqueInput>
    delete?: Enumerable<TwitterFollowWhereUniqueInput>
    connect?: Enumerable<TwitterFollowWhereUniqueInput>
    update?: Enumerable<TwitterFollowUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<TwitterFollowUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<TwitterFollowScalarWhereInput>
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

  export type TwitterDirectMessageUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<TwitterDirectMessageCreateWithoutFromInput>, Enumerable<TwitterDirectMessageUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<TwitterDirectMessageCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<TwitterDirectMessageUpsertWithWhereUniqueWithoutFromInput>
    createMany?: TwitterDirectMessageCreateManyFromInputEnvelope
    set?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    disconnect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    delete?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    connect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    update?: Enumerable<TwitterDirectMessageUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<TwitterDirectMessageUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<TwitterDirectMessageScalarWhereInput>
  }

  export type TwitterDirectMessageUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<TwitterDirectMessageCreateWithoutToInput>, Enumerable<TwitterDirectMessageUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<TwitterDirectMessageCreateOrConnectWithoutToInput>
    upsert?: Enumerable<TwitterDirectMessageUpsertWithWhereUniqueWithoutToInput>
    createMany?: TwitterDirectMessageCreateManyToInputEnvelope
    set?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    disconnect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    delete?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    connect?: Enumerable<TwitterDirectMessageWhereUniqueInput>
    update?: Enumerable<TwitterDirectMessageUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<TwitterDirectMessageUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<TwitterDirectMessageScalarWhereInput>
  }

  export type TwitterUserCreateNestedOneWithoutFromFollowingInput = {
    create?: XOR<TwitterUserCreateWithoutFromFollowingInput, TwitterUserUncheckedCreateWithoutFromFollowingInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutFromFollowingInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterUserCreateNestedOneWithoutToFollowingInput = {
    create?: XOR<TwitterUserCreateWithoutToFollowingInput, TwitterUserUncheckedCreateWithoutToFollowingInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutToFollowingInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterUserUpdateOneRequiredWithoutFromFollowingNestedInput = {
    create?: XOR<TwitterUserCreateWithoutFromFollowingInput, TwitterUserUncheckedCreateWithoutFromFollowingInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutFromFollowingInput
    upsert?: TwitterUserUpsertWithoutFromFollowingInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutFromFollowingInput, TwitterUserUncheckedUpdateWithoutFromFollowingInput>
  }

  export type TwitterUserUpdateOneRequiredWithoutToFollowingNestedInput = {
    create?: XOR<TwitterUserCreateWithoutToFollowingInput, TwitterUserUncheckedCreateWithoutToFollowingInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutToFollowingInput
    upsert?: TwitterUserUpsertWithoutToFollowingInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutToFollowingInput, TwitterUserUncheckedUpdateWithoutToFollowingInput>
  }

  export type TwitterUserCreateNestedOneWithoutPostsInput = {
    create?: XOR<TwitterUserCreateWithoutPostsInput, TwitterUserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutPostsInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterHashtagCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<TwitterHashtagCreateWithoutPostsInput>, Enumerable<TwitterHashtagUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TwitterHashtagCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<TwitterHashtagWhereUniqueInput>
  }

  export type TwitterPostCreateNestedManyWithoutReplyByInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutReplyByInput>, Enumerable<TwitterPostUncheckedCreateWithoutReplyByInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutReplyByInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterPostCreateNestedManyWithoutReplyToInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutReplyToInput>, Enumerable<TwitterPostUncheckedCreateWithoutReplyToInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutReplyToInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterHashtagUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<TwitterHashtagCreateWithoutPostsInput>, Enumerable<TwitterHashtagUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TwitterHashtagCreateOrConnectWithoutPostsInput>
    connect?: Enumerable<TwitterHashtagWhereUniqueInput>
  }

  export type TwitterPostUncheckedCreateNestedManyWithoutReplyByInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutReplyByInput>, Enumerable<TwitterPostUncheckedCreateWithoutReplyByInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutReplyByInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterPostUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutReplyToInput>, Enumerable<TwitterPostUncheckedCreateWithoutReplyToInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutReplyToInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterUserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<TwitterUserCreateWithoutPostsInput, TwitterUserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutPostsInput
    upsert?: TwitterUserUpsertWithoutPostsInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutPostsInput, TwitterUserUncheckedUpdateWithoutPostsInput>
  }

  export type TwitterHashtagUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<TwitterHashtagCreateWithoutPostsInput>, Enumerable<TwitterHashtagUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TwitterHashtagCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<TwitterHashtagUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<TwitterHashtagWhereUniqueInput>
    disconnect?: Enumerable<TwitterHashtagWhereUniqueInput>
    delete?: Enumerable<TwitterHashtagWhereUniqueInput>
    connect?: Enumerable<TwitterHashtagWhereUniqueInput>
    update?: Enumerable<TwitterHashtagUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<TwitterHashtagUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<TwitterHashtagScalarWhereInput>
  }

  export type TwitterPostUpdateManyWithoutReplyByNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutReplyByInput>, Enumerable<TwitterPostUncheckedCreateWithoutReplyByInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutReplyByInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutReplyByInput>
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutReplyByInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutReplyByInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterPostUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutReplyToInput>, Enumerable<TwitterPostUncheckedCreateWithoutReplyToInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutReplyToInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutReplyToInput>
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutReplyToInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutReplyToInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterHashtagUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<TwitterHashtagCreateWithoutPostsInput>, Enumerable<TwitterHashtagUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<TwitterHashtagCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<TwitterHashtagUpsertWithWhereUniqueWithoutPostsInput>
    set?: Enumerable<TwitterHashtagWhereUniqueInput>
    disconnect?: Enumerable<TwitterHashtagWhereUniqueInput>
    delete?: Enumerable<TwitterHashtagWhereUniqueInput>
    connect?: Enumerable<TwitterHashtagWhereUniqueInput>
    update?: Enumerable<TwitterHashtagUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<TwitterHashtagUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<TwitterHashtagScalarWhereInput>
  }

  export type TwitterPostUncheckedUpdateManyWithoutReplyByNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutReplyByInput>, Enumerable<TwitterPostUncheckedCreateWithoutReplyByInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutReplyByInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutReplyByInput>
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutReplyByInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutReplyByInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterPostUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutReplyToInput>, Enumerable<TwitterPostUncheckedCreateWithoutReplyToInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutReplyToInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutReplyToInput>
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutReplyToInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutReplyToInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterUserCreateNestedOneWithoutFromDirectMessageInput = {
    create?: XOR<TwitterUserCreateWithoutFromDirectMessageInput, TwitterUserUncheckedCreateWithoutFromDirectMessageInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutFromDirectMessageInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterUserCreateNestedOneWithoutToDirectMessageInput = {
    create?: XOR<TwitterUserCreateWithoutToDirectMessageInput, TwitterUserUncheckedCreateWithoutToDirectMessageInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutToDirectMessageInput
    connect?: TwitterUserWhereUniqueInput
  }

  export type TwitterUserUpdateOneRequiredWithoutFromDirectMessageNestedInput = {
    create?: XOR<TwitterUserCreateWithoutFromDirectMessageInput, TwitterUserUncheckedCreateWithoutFromDirectMessageInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutFromDirectMessageInput
    upsert?: TwitterUserUpsertWithoutFromDirectMessageInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutFromDirectMessageInput, TwitterUserUncheckedUpdateWithoutFromDirectMessageInput>
  }

  export type TwitterUserUpdateOneRequiredWithoutToDirectMessageNestedInput = {
    create?: XOR<TwitterUserCreateWithoutToDirectMessageInput, TwitterUserUncheckedCreateWithoutToDirectMessageInput>
    connectOrCreate?: TwitterUserCreateOrConnectWithoutToDirectMessageInput
    upsert?: TwitterUserUpsertWithoutToDirectMessageInput
    connect?: TwitterUserWhereUniqueInput
    update?: XOR<TwitterUserUpdateWithoutToDirectMessageInput, TwitterUserUncheckedUpdateWithoutToDirectMessageInput>
  }

  export type TwitterPostCreateNestedManyWithoutHashtagsInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutHashtagsInput>, Enumerable<TwitterPostUncheckedCreateWithoutHashtagsInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutHashtagsInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterPostUncheckedCreateNestedManyWithoutHashtagsInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutHashtagsInput>, Enumerable<TwitterPostUncheckedCreateWithoutHashtagsInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutHashtagsInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
  }

  export type TwitterPostUpdateManyWithoutHashtagsNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutHashtagsInput>, Enumerable<TwitterPostUncheckedCreateWithoutHashtagsInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutHashtagsInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutHashtagsInput>
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutHashtagsInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutHashtagsInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
  }

  export type TwitterPostUncheckedUpdateManyWithoutHashtagsNestedInput = {
    create?: XOR<Enumerable<TwitterPostCreateWithoutHashtagsInput>, Enumerable<TwitterPostUncheckedCreateWithoutHashtagsInput>>
    connectOrCreate?: Enumerable<TwitterPostCreateOrConnectWithoutHashtagsInput>
    upsert?: Enumerable<TwitterPostUpsertWithWhereUniqueWithoutHashtagsInput>
    set?: Enumerable<TwitterPostWhereUniqueInput>
    disconnect?: Enumerable<TwitterPostWhereUniqueInput>
    delete?: Enumerable<TwitterPostWhereUniqueInput>
    connect?: Enumerable<TwitterPostWhereUniqueInput>
    update?: Enumerable<TwitterPostUpdateWithWhereUniqueWithoutHashtagsInput>
    updateMany?: Enumerable<TwitterPostUpdateManyWithWhereWithoutHashtagsInput>
    deleteMany?: Enumerable<TwitterPostScalarWhereInput>
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

  export type TwitterFollowCreateWithoutFromInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    to: TwitterUserCreateNestedOneWithoutToFollowingInput
  }

  export type TwitterFollowUncheckedCreateWithoutFromInput = {
    id?: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterFollowCreateOrConnectWithoutFromInput = {
    where: TwitterFollowWhereUniqueInput
    create: XOR<TwitterFollowCreateWithoutFromInput, TwitterFollowUncheckedCreateWithoutFromInput>
  }

  export type TwitterFollowCreateManyFromInputEnvelope = {
    data: Enumerable<TwitterFollowCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type TwitterFollowCreateWithoutToInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    from: TwitterUserCreateNestedOneWithoutFromFollowingInput
  }

  export type TwitterFollowUncheckedCreateWithoutToInput = {
    id?: number
    fromUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterFollowCreateOrConnectWithoutToInput = {
    where: TwitterFollowWhereUniqueInput
    create: XOR<TwitterFollowCreateWithoutToInput, TwitterFollowUncheckedCreateWithoutToInput>
  }

  export type TwitterFollowCreateManyToInputEnvelope = {
    data: Enumerable<TwitterFollowCreateManyToInput>
    skipDuplicates?: boolean
  }

  export type TwitterPostCreateWithoutUserInput = {
    caption: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtags?: TwitterHashtagCreateNestedManyWithoutPostsInput
    replyTo?: TwitterPostCreateNestedManyWithoutReplyByInput
    replyBy?: TwitterPostCreateNestedManyWithoutReplyToInput
  }

  export type TwitterPostUncheckedCreateWithoutUserInput = {
    id?: number
    caption: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtags?: TwitterHashtagUncheckedCreateNestedManyWithoutPostsInput
    replyTo?: TwitterPostUncheckedCreateNestedManyWithoutReplyByInput
    replyBy?: TwitterPostUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type TwitterPostCreateOrConnectWithoutUserInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutUserInput, TwitterPostUncheckedCreateWithoutUserInput>
  }

  export type TwitterPostCreateManyUserInputEnvelope = {
    data: Enumerable<TwitterPostCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TwitterDirectMessageCreateWithoutFromInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    to: TwitterUserCreateNestedOneWithoutToDirectMessageInput
  }

  export type TwitterDirectMessageUncheckedCreateWithoutFromInput = {
    id?: number
    toUserId: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDirectMessageCreateOrConnectWithoutFromInput = {
    where: TwitterDirectMessageWhereUniqueInput
    create: XOR<TwitterDirectMessageCreateWithoutFromInput, TwitterDirectMessageUncheckedCreateWithoutFromInput>
  }

  export type TwitterDirectMessageCreateManyFromInputEnvelope = {
    data: Enumerable<TwitterDirectMessageCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type TwitterDirectMessageCreateWithoutToInput = {
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    from: TwitterUserCreateNestedOneWithoutFromDirectMessageInput
  }

  export type TwitterDirectMessageUncheckedCreateWithoutToInput = {
    id?: number
    fromUserId: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDirectMessageCreateOrConnectWithoutToInput = {
    where: TwitterDirectMessageWhereUniqueInput
    create: XOR<TwitterDirectMessageCreateWithoutToInput, TwitterDirectMessageUncheckedCreateWithoutToInput>
  }

  export type TwitterDirectMessageCreateManyToInputEnvelope = {
    data: Enumerable<TwitterDirectMessageCreateManyToInput>
    skipDuplicates?: boolean
  }

  export type TwitterFollowUpsertWithWhereUniqueWithoutFromInput = {
    where: TwitterFollowWhereUniqueInput
    update: XOR<TwitterFollowUpdateWithoutFromInput, TwitterFollowUncheckedUpdateWithoutFromInput>
    create: XOR<TwitterFollowCreateWithoutFromInput, TwitterFollowUncheckedCreateWithoutFromInput>
  }

  export type TwitterFollowUpdateWithWhereUniqueWithoutFromInput = {
    where: TwitterFollowWhereUniqueInput
    data: XOR<TwitterFollowUpdateWithoutFromInput, TwitterFollowUncheckedUpdateWithoutFromInput>
  }

  export type TwitterFollowUpdateManyWithWhereWithoutFromInput = {
    where: TwitterFollowScalarWhereInput
    data: XOR<TwitterFollowUpdateManyMutationInput, TwitterFollowUncheckedUpdateManyWithoutFromFollowingInput>
  }

  export type TwitterFollowScalarWhereInput = {
    AND?: Enumerable<TwitterFollowScalarWhereInput>
    OR?: Enumerable<TwitterFollowScalarWhereInput>
    NOT?: Enumerable<TwitterFollowScalarWhereInput>
    id?: IntFilter | number
    fromUserId?: IntFilter | number
    toUserId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterFollowUpsertWithWhereUniqueWithoutToInput = {
    where: TwitterFollowWhereUniqueInput
    update: XOR<TwitterFollowUpdateWithoutToInput, TwitterFollowUncheckedUpdateWithoutToInput>
    create: XOR<TwitterFollowCreateWithoutToInput, TwitterFollowUncheckedCreateWithoutToInput>
  }

  export type TwitterFollowUpdateWithWhereUniqueWithoutToInput = {
    where: TwitterFollowWhereUniqueInput
    data: XOR<TwitterFollowUpdateWithoutToInput, TwitterFollowUncheckedUpdateWithoutToInput>
  }

  export type TwitterFollowUpdateManyWithWhereWithoutToInput = {
    where: TwitterFollowScalarWhereInput
    data: XOR<TwitterFollowUpdateManyMutationInput, TwitterFollowUncheckedUpdateManyWithoutToFollowingInput>
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
    data: XOR<TwitterPostUpdateManyMutationInput, TwitterPostUncheckedUpdateManyWithoutPostsInput>
  }

  export type TwitterPostScalarWhereInput = {
    AND?: Enumerable<TwitterPostScalarWhereInput>
    OR?: Enumerable<TwitterPostScalarWhereInput>
    NOT?: Enumerable<TwitterPostScalarWhereInput>
    id?: IntFilter | number
    caption?: StringFilter | string
    userId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterDirectMessageUpsertWithWhereUniqueWithoutFromInput = {
    where: TwitterDirectMessageWhereUniqueInput
    update: XOR<TwitterDirectMessageUpdateWithoutFromInput, TwitterDirectMessageUncheckedUpdateWithoutFromInput>
    create: XOR<TwitterDirectMessageCreateWithoutFromInput, TwitterDirectMessageUncheckedCreateWithoutFromInput>
  }

  export type TwitterDirectMessageUpdateWithWhereUniqueWithoutFromInput = {
    where: TwitterDirectMessageWhereUniqueInput
    data: XOR<TwitterDirectMessageUpdateWithoutFromInput, TwitterDirectMessageUncheckedUpdateWithoutFromInput>
  }

  export type TwitterDirectMessageUpdateManyWithWhereWithoutFromInput = {
    where: TwitterDirectMessageScalarWhereInput
    data: XOR<TwitterDirectMessageUpdateManyMutationInput, TwitterDirectMessageUncheckedUpdateManyWithoutFromDirectMessageInput>
  }

  export type TwitterDirectMessageScalarWhereInput = {
    AND?: Enumerable<TwitterDirectMessageScalarWhereInput>
    OR?: Enumerable<TwitterDirectMessageScalarWhereInput>
    NOT?: Enumerable<TwitterDirectMessageScalarWhereInput>
    id?: IntFilter | number
    fromUserId?: IntFilter | number
    toUserId?: IntFilter | number
    text?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterDirectMessageUpsertWithWhereUniqueWithoutToInput = {
    where: TwitterDirectMessageWhereUniqueInput
    update: XOR<TwitterDirectMessageUpdateWithoutToInput, TwitterDirectMessageUncheckedUpdateWithoutToInput>
    create: XOR<TwitterDirectMessageCreateWithoutToInput, TwitterDirectMessageUncheckedCreateWithoutToInput>
  }

  export type TwitterDirectMessageUpdateWithWhereUniqueWithoutToInput = {
    where: TwitterDirectMessageWhereUniqueInput
    data: XOR<TwitterDirectMessageUpdateWithoutToInput, TwitterDirectMessageUncheckedUpdateWithoutToInput>
  }

  export type TwitterDirectMessageUpdateManyWithWhereWithoutToInput = {
    where: TwitterDirectMessageScalarWhereInput
    data: XOR<TwitterDirectMessageUpdateManyMutationInput, TwitterDirectMessageUncheckedUpdateManyWithoutToDirectMessageInput>
  }

  export type TwitterUserCreateWithoutFromFollowingInput = {
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    toFollowing?: TwitterFollowCreateNestedManyWithoutToInput
    posts?: TwitterPostCreateNestedManyWithoutUserInput
    fromDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutFromInput
    toDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutToInput
  }

  export type TwitterUserUncheckedCreateWithoutFromFollowingInput = {
    id?: number
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    toFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutToInput
    posts?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutToInput
  }

  export type TwitterUserCreateOrConnectWithoutFromFollowingInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutFromFollowingInput, TwitterUserUncheckedCreateWithoutFromFollowingInput>
  }

  export type TwitterUserCreateWithoutToFollowingInput = {
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowCreateNestedManyWithoutFromInput
    posts?: TwitterPostCreateNestedManyWithoutUserInput
    fromDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutFromInput
    toDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutToInput
  }

  export type TwitterUserUncheckedCreateWithoutToFollowingInput = {
    id?: number
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutFromInput
    posts?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutToInput
  }

  export type TwitterUserCreateOrConnectWithoutToFollowingInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutToFollowingInput, TwitterUserUncheckedCreateWithoutToFollowingInput>
  }

  export type TwitterUserUpsertWithoutFromFollowingInput = {
    update: XOR<TwitterUserUpdateWithoutFromFollowingInput, TwitterUserUncheckedUpdateWithoutFromFollowingInput>
    create: XOR<TwitterUserCreateWithoutFromFollowingInput, TwitterUserUncheckedCreateWithoutFromFollowingInput>
  }

  export type TwitterUserUpdateWithoutFromFollowingInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toFollowing?: TwitterFollowUpdateManyWithoutToNestedInput
    posts?: TwitterPostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: TwitterDirectMessageUpdateManyWithoutFromNestedInput
    toDirectMessage?: TwitterDirectMessageUpdateManyWithoutToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutFromFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toFollowing?: TwitterFollowUncheckedUpdateManyWithoutToNestedInput
    posts?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutToNestedInput
  }

  export type TwitterUserUpsertWithoutToFollowingInput = {
    update: XOR<TwitterUserUpdateWithoutToFollowingInput, TwitterUserUncheckedUpdateWithoutToFollowingInput>
    create: XOR<TwitterUserCreateWithoutToFollowingInput, TwitterUserUncheckedCreateWithoutToFollowingInput>
  }

  export type TwitterUserUpdateWithoutToFollowingInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUpdateManyWithoutFromNestedInput
    posts?: TwitterPostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: TwitterDirectMessageUpdateManyWithoutFromNestedInput
    toDirectMessage?: TwitterDirectMessageUpdateManyWithoutToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutToFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUncheckedUpdateManyWithoutFromNestedInput
    posts?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutToNestedInput
  }

  export type TwitterUserCreateWithoutPostsInput = {
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowCreateNestedManyWithoutFromInput
    toFollowing?: TwitterFollowCreateNestedManyWithoutToInput
    fromDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutFromInput
    toDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutToInput
  }

  export type TwitterUserUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutToInput
    fromDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutFromInput
    toDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutToInput
  }

  export type TwitterUserCreateOrConnectWithoutPostsInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutPostsInput, TwitterUserUncheckedCreateWithoutPostsInput>
  }

  export type TwitterHashtagCreateWithoutPostsInput = {
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterHashtagUncheckedCreateWithoutPostsInput = {
    id?: number
    hashtag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterHashtagCreateOrConnectWithoutPostsInput = {
    where: TwitterHashtagWhereUniqueInput
    create: XOR<TwitterHashtagCreateWithoutPostsInput, TwitterHashtagUncheckedCreateWithoutPostsInput>
  }

  export type TwitterPostCreateWithoutReplyByInput = {
    caption: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: TwitterUserCreateNestedOneWithoutPostsInput
    hashtags?: TwitterHashtagCreateNestedManyWithoutPostsInput
    replyTo?: TwitterPostCreateNestedManyWithoutReplyByInput
  }

  export type TwitterPostUncheckedCreateWithoutReplyByInput = {
    id?: number
    caption: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtags?: TwitterHashtagUncheckedCreateNestedManyWithoutPostsInput
    replyTo?: TwitterPostUncheckedCreateNestedManyWithoutReplyByInput
  }

  export type TwitterPostCreateOrConnectWithoutReplyByInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutReplyByInput, TwitterPostUncheckedCreateWithoutReplyByInput>
  }

  export type TwitterPostCreateWithoutReplyToInput = {
    caption: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: TwitterUserCreateNestedOneWithoutPostsInput
    hashtags?: TwitterHashtagCreateNestedManyWithoutPostsInput
    replyBy?: TwitterPostCreateNestedManyWithoutReplyToInput
  }

  export type TwitterPostUncheckedCreateWithoutReplyToInput = {
    id?: number
    caption: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtags?: TwitterHashtagUncheckedCreateNestedManyWithoutPostsInput
    replyBy?: TwitterPostUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type TwitterPostCreateOrConnectWithoutReplyToInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutReplyToInput, TwitterPostUncheckedCreateWithoutReplyToInput>
  }

  export type TwitterUserUpsertWithoutPostsInput = {
    update: XOR<TwitterUserUpdateWithoutPostsInput, TwitterUserUncheckedUpdateWithoutPostsInput>
    create: XOR<TwitterUserCreateWithoutPostsInput, TwitterUserUncheckedCreateWithoutPostsInput>
  }

  export type TwitterUserUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUpdateManyWithoutFromNestedInput
    toFollowing?: TwitterFollowUpdateManyWithoutToNestedInput
    fromDirectMessage?: TwitterDirectMessageUpdateManyWithoutFromNestedInput
    toDirectMessage?: TwitterDirectMessageUpdateManyWithoutToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: TwitterFollowUncheckedUpdateManyWithoutToNestedInput
    fromDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutFromNestedInput
    toDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutToNestedInput
  }

  export type TwitterHashtagUpsertWithWhereUniqueWithoutPostsInput = {
    where: TwitterHashtagWhereUniqueInput
    update: XOR<TwitterHashtagUpdateWithoutPostsInput, TwitterHashtagUncheckedUpdateWithoutPostsInput>
    create: XOR<TwitterHashtagCreateWithoutPostsInput, TwitterHashtagUncheckedCreateWithoutPostsInput>
  }

  export type TwitterHashtagUpdateWithWhereUniqueWithoutPostsInput = {
    where: TwitterHashtagWhereUniqueInput
    data: XOR<TwitterHashtagUpdateWithoutPostsInput, TwitterHashtagUncheckedUpdateWithoutPostsInput>
  }

  export type TwitterHashtagUpdateManyWithWhereWithoutPostsInput = {
    where: TwitterHashtagScalarWhereInput
    data: XOR<TwitterHashtagUpdateManyMutationInput, TwitterHashtagUncheckedUpdateManyWithoutHashtagsInput>
  }

  export type TwitterHashtagScalarWhereInput = {
    AND?: Enumerable<TwitterHashtagScalarWhereInput>
    OR?: Enumerable<TwitterHashtagScalarWhereInput>
    NOT?: Enumerable<TwitterHashtagScalarWhereInput>
    id?: IntFilter | number
    hashtag?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TwitterPostUpsertWithWhereUniqueWithoutReplyByInput = {
    where: TwitterPostWhereUniqueInput
    update: XOR<TwitterPostUpdateWithoutReplyByInput, TwitterPostUncheckedUpdateWithoutReplyByInput>
    create: XOR<TwitterPostCreateWithoutReplyByInput, TwitterPostUncheckedCreateWithoutReplyByInput>
  }

  export type TwitterPostUpdateWithWhereUniqueWithoutReplyByInput = {
    where: TwitterPostWhereUniqueInput
    data: XOR<TwitterPostUpdateWithoutReplyByInput, TwitterPostUncheckedUpdateWithoutReplyByInput>
  }

  export type TwitterPostUpdateManyWithWhereWithoutReplyByInput = {
    where: TwitterPostScalarWhereInput
    data: XOR<TwitterPostUpdateManyMutationInput, TwitterPostUncheckedUpdateManyWithoutReplyToInput>
  }

  export type TwitterPostUpsertWithWhereUniqueWithoutReplyToInput = {
    where: TwitterPostWhereUniqueInput
    update: XOR<TwitterPostUpdateWithoutReplyToInput, TwitterPostUncheckedUpdateWithoutReplyToInput>
    create: XOR<TwitterPostCreateWithoutReplyToInput, TwitterPostUncheckedCreateWithoutReplyToInput>
  }

  export type TwitterPostUpdateWithWhereUniqueWithoutReplyToInput = {
    where: TwitterPostWhereUniqueInput
    data: XOR<TwitterPostUpdateWithoutReplyToInput, TwitterPostUncheckedUpdateWithoutReplyToInput>
  }

  export type TwitterPostUpdateManyWithWhereWithoutReplyToInput = {
    where: TwitterPostScalarWhereInput
    data: XOR<TwitterPostUpdateManyMutationInput, TwitterPostUncheckedUpdateManyWithoutReplyByInput>
  }

  export type TwitterUserCreateWithoutFromDirectMessageInput = {
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowCreateNestedManyWithoutFromInput
    toFollowing?: TwitterFollowCreateNestedManyWithoutToInput
    posts?: TwitterPostCreateNestedManyWithoutUserInput
    toDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutToInput
  }

  export type TwitterUserUncheckedCreateWithoutFromDirectMessageInput = {
    id?: number
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutToInput
    posts?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    toDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutToInput
  }

  export type TwitterUserCreateOrConnectWithoutFromDirectMessageInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutFromDirectMessageInput, TwitterUserUncheckedCreateWithoutFromDirectMessageInput>
  }

  export type TwitterUserCreateWithoutToDirectMessageInput = {
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowCreateNestedManyWithoutFromInput
    toFollowing?: TwitterFollowCreateNestedManyWithoutToInput
    posts?: TwitterPostCreateNestedManyWithoutUserInput
    fromDirectMessage?: TwitterDirectMessageCreateNestedManyWithoutFromInput
  }

  export type TwitterUserUncheckedCreateWithoutToDirectMessageInput = {
    id?: number
    name: string
    image: string
    join: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutFromInput
    toFollowing?: TwitterFollowUncheckedCreateNestedManyWithoutToInput
    posts?: TwitterPostUncheckedCreateNestedManyWithoutUserInput
    fromDirectMessage?: TwitterDirectMessageUncheckedCreateNestedManyWithoutFromInput
  }

  export type TwitterUserCreateOrConnectWithoutToDirectMessageInput = {
    where: TwitterUserWhereUniqueInput
    create: XOR<TwitterUserCreateWithoutToDirectMessageInput, TwitterUserUncheckedCreateWithoutToDirectMessageInput>
  }

  export type TwitterUserUpsertWithoutFromDirectMessageInput = {
    update: XOR<TwitterUserUpdateWithoutFromDirectMessageInput, TwitterUserUncheckedUpdateWithoutFromDirectMessageInput>
    create: XOR<TwitterUserCreateWithoutFromDirectMessageInput, TwitterUserUncheckedCreateWithoutFromDirectMessageInput>
  }

  export type TwitterUserUpdateWithoutFromDirectMessageInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUpdateManyWithoutFromNestedInput
    toFollowing?: TwitterFollowUpdateManyWithoutToNestedInput
    posts?: TwitterPostUpdateManyWithoutUserNestedInput
    toDirectMessage?: TwitterDirectMessageUpdateManyWithoutToNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutFromDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: TwitterFollowUncheckedUpdateManyWithoutToNestedInput
    posts?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    toDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutToNestedInput
  }

  export type TwitterUserUpsertWithoutToDirectMessageInput = {
    update: XOR<TwitterUserUpdateWithoutToDirectMessageInput, TwitterUserUncheckedUpdateWithoutToDirectMessageInput>
    create: XOR<TwitterUserCreateWithoutToDirectMessageInput, TwitterUserUncheckedCreateWithoutToDirectMessageInput>
  }

  export type TwitterUserUpdateWithoutToDirectMessageInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUpdateManyWithoutFromNestedInput
    toFollowing?: TwitterFollowUpdateManyWithoutToNestedInput
    posts?: TwitterPostUpdateManyWithoutUserNestedInput
    fromDirectMessage?: TwitterDirectMessageUpdateManyWithoutFromNestedInput
  }

  export type TwitterUserUncheckedUpdateWithoutToDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    join?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromFollowing?: TwitterFollowUncheckedUpdateManyWithoutFromNestedInput
    toFollowing?: TwitterFollowUncheckedUpdateManyWithoutToNestedInput
    posts?: TwitterPostUncheckedUpdateManyWithoutUserNestedInput
    fromDirectMessage?: TwitterDirectMessageUncheckedUpdateManyWithoutFromNestedInput
  }

  export type TwitterPostCreateWithoutHashtagsInput = {
    caption: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: TwitterUserCreateNestedOneWithoutPostsInput
    replyTo?: TwitterPostCreateNestedManyWithoutReplyByInput
    replyBy?: TwitterPostCreateNestedManyWithoutReplyToInput
  }

  export type TwitterPostUncheckedCreateWithoutHashtagsInput = {
    id?: number
    caption: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    replyTo?: TwitterPostUncheckedCreateNestedManyWithoutReplyByInput
    replyBy?: TwitterPostUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type TwitterPostCreateOrConnectWithoutHashtagsInput = {
    where: TwitterPostWhereUniqueInput
    create: XOR<TwitterPostCreateWithoutHashtagsInput, TwitterPostUncheckedCreateWithoutHashtagsInput>
  }

  export type TwitterPostUpsertWithWhereUniqueWithoutHashtagsInput = {
    where: TwitterPostWhereUniqueInput
    update: XOR<TwitterPostUpdateWithoutHashtagsInput, TwitterPostUncheckedUpdateWithoutHashtagsInput>
    create: XOR<TwitterPostCreateWithoutHashtagsInput, TwitterPostUncheckedCreateWithoutHashtagsInput>
  }

  export type TwitterPostUpdateWithWhereUniqueWithoutHashtagsInput = {
    where: TwitterPostWhereUniqueInput
    data: XOR<TwitterPostUpdateWithoutHashtagsInput, TwitterPostUncheckedUpdateWithoutHashtagsInput>
  }

  export type TwitterPostUpdateManyWithWhereWithoutHashtagsInput = {
    where: TwitterPostScalarWhereInput
    data: XOR<TwitterPostUpdateManyMutationInput, TwitterPostUncheckedUpdateManyWithoutPostsInput>
  }

  export type TwitterFollowCreateManyFromInput = {
    id?: number
    toUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterFollowCreateManyToInput = {
    id?: number
    fromUserId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterPostCreateManyUserInput = {
    id?: number
    caption: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDirectMessageCreateManyFromInput = {
    id?: number
    toUserId: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterDirectMessageCreateManyToInput = {
    id?: number
    fromUserId: number
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterFollowUpdateWithoutFromInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: TwitterUserUpdateOneRequiredWithoutToFollowingNestedInput
  }

  export type TwitterFollowUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterFollowUncheckedUpdateManyWithoutFromFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterFollowUpdateWithoutToInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: TwitterUserUpdateOneRequiredWithoutFromFollowingNestedInput
  }

  export type TwitterFollowUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterFollowUncheckedUpdateManyWithoutToFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostUpdateWithoutUserInput = {
    caption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: TwitterHashtagUpdateManyWithoutPostsNestedInput
    replyTo?: TwitterPostUpdateManyWithoutReplyByNestedInput
    replyBy?: TwitterPostUpdateManyWithoutReplyToNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: TwitterHashtagUncheckedUpdateManyWithoutPostsNestedInput
    replyTo?: TwitterPostUncheckedUpdateManyWithoutReplyByNestedInput
    replyBy?: TwitterPostUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type TwitterPostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageUpdateWithoutFromInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: TwitterUserUpdateOneRequiredWithoutToDirectMessageNestedInput
  }

  export type TwitterDirectMessageUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageUncheckedUpdateManyWithoutFromDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    toUserId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageUpdateWithoutToInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    from?: TwitterUserUpdateOneRequiredWithoutFromDirectMessageNestedInput
  }

  export type TwitterDirectMessageUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterDirectMessageUncheckedUpdateManyWithoutToDirectMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromUserId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashtagUpdateWithoutPostsInput = {
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashtagUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterHashtagUncheckedUpdateManyWithoutHashtagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostUpdateWithoutReplyByInput = {
    caption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: TwitterUserUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: TwitterHashtagUpdateManyWithoutPostsNestedInput
    replyTo?: TwitterPostUpdateManyWithoutReplyByNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutReplyByInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: TwitterHashtagUncheckedUpdateManyWithoutPostsNestedInput
    replyTo?: TwitterPostUncheckedUpdateManyWithoutReplyByNestedInput
  }

  export type TwitterPostUncheckedUpdateManyWithoutReplyToInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostUpdateWithoutReplyToInput = {
    caption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: TwitterUserUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: TwitterHashtagUpdateManyWithoutPostsNestedInput
    replyBy?: TwitterPostUpdateManyWithoutReplyToNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutReplyToInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: TwitterHashtagUncheckedUpdateManyWithoutPostsNestedInput
    replyBy?: TwitterPostUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type TwitterPostUncheckedUpdateManyWithoutReplyByInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterPostUpdateWithoutHashtagsInput = {
    caption?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: TwitterUserUpdateOneRequiredWithoutPostsNestedInput
    replyTo?: TwitterPostUpdateManyWithoutReplyByNestedInput
    replyBy?: TwitterPostUpdateManyWithoutReplyToNestedInput
  }

  export type TwitterPostUncheckedUpdateWithoutHashtagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    caption?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: TwitterPostUncheckedUpdateManyWithoutReplyByNestedInput
    replyBy?: TwitterPostUncheckedUpdateManyWithoutReplyToNestedInput
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