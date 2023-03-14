
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  profileImage: string
  createAt: Date
  updateAt: Date
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  message: string
  createAt: Date
  updateAt: Date
  userId: number
}

/**
 * Model DirecMessage
 * 
 */
export type DirecMessage = {
  id: number
  message: string
  fromUser: string
  toUser: string
  createAt: Date
  updateAt: Date
}

/**
 * Model HashTag
 * 
 */
export type HashTag = {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}

/**
 * Model HashTagOnPost
 * 
 */
export type HashTagOnPost = {
  id: number
  postId: number
  hashTagId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Reply
 * 
 */
export type Reply = {
  id: number
  postId: number
  userId: number
  message: string
  createAt: Date
  updateAt: Date
}

/**
 * Model UserRelation
 * 
 */
export type UserRelation = {
  id: number
  fromId: number
  toId: number
  createAt: Date
  updateAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

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
   * `prisma.direcMessage`: Exposes CRUD operations for the **DirecMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirecMessages
    * const direcMessages = await prisma.direcMessage.findMany()
    * ```
    */
  get direcMessage(): Prisma.DirecMessageDelegate<GlobalReject>;

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
   * `prisma.hashTagOnPost`: Exposes CRUD operations for the **HashTagOnPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HashTagOnPosts
    * const hashTagOnPosts = await prisma.hashTagOnPost.findMany()
    * ```
    */
  get hashTagOnPost(): Prisma.HashTagOnPostDelegate<GlobalReject>;

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
   * `prisma.userRelation`: Exposes CRUD operations for the **UserRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRelations
    * const userRelations = await prisma.userRelation.findMany()
    * ```
    */
  get userRelation(): Prisma.UserRelationDelegate<GlobalReject>;
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
    User: 'User',
    Post: 'Post',
    DirecMessage: 'DirecMessage',
    HashTag: 'HashTag',
    HashTagOnPost: 'HashTagOnPost',
    Reply: 'Reply',
    UserRelation: 'UserRelation'
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
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    reply: number
    fromUserRelations: number
    toUserRelations: number
    Post: number
  }

  export type UserCountOutputTypeSelect = {
    reply?: boolean
    fromUserRelations?: boolean
    toUserRelations?: boolean
    Post?: boolean
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
    HashTagOnPost: number
    reply: number
  }

  export type PostCountOutputTypeSelect = {
    HashTagOnPost?: boolean
    reply?: boolean
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
   * Count Type HashTagCountOutputType
   */


  export type HashTagCountOutputType = {
    HashTagOnPost: number
  }

  export type HashTagCountOutputTypeSelect = {
    HashTagOnPost?: boolean
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
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    profileImage: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    profileImage: number
    createAt: number
    updateAt: number
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
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    profileImage?: true
    createAt?: true
    updateAt?: true
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
    createAt: Date
    updateAt: Date
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
    createAt?: boolean
    updateAt?: boolean
    reply?: boolean | User$replyArgs
    fromUserRelations?: boolean | User$fromUserRelationsArgs
    toUserRelations?: boolean | User$toUserRelationsArgs
    Post?: boolean | User$PostArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    reply?: boolean | User$replyArgs
    fromUserRelations?: boolean | User$fromUserRelationsArgs
    toUserRelations?: boolean | User$toUserRelationsArgs
    Post?: boolean | User$PostArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'reply' ? Array < ReplyGetPayload<S['include'][P]>>  :
        P extends 'fromUserRelations' ? Array < UserRelationGetPayload<S['include'][P]>>  :
        P extends 'toUserRelations' ? Array < UserRelationGetPayload<S['include'][P]>>  :
        P extends 'Post' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'reply' ? Array < ReplyGetPayload<S['select'][P]>>  :
        P extends 'fromUserRelations' ? Array < UserRelationGetPayload<S['select'][P]>>  :
        P extends 'toUserRelations' ? Array < UserRelationGetPayload<S['select'][P]>>  :
        P extends 'Post' ? Array < PostGetPayload<S['select'][P]>>  :
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

    reply<T extends User$replyArgs= {}>(args?: Subset<T, User$replyArgs>): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>| Null>;

    fromUserRelations<T extends User$fromUserRelationsArgs= {}>(args?: Subset<T, User$fromUserRelationsArgs>): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>| Null>;

    toUserRelations<T extends User$toUserRelationsArgs= {}>(args?: Subset<T, User$toUserRelationsArgs>): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>| Null>;

    Post<T extends User$PostArgs= {}>(args?: Subset<T, User$PostArgs>): Prisma.PrismaPromise<Array<PostGetPayload<T>>| Null>;

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
   * User.reply
   */
  export type User$replyArgs = {
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
   * User.fromUserRelations
   */
  export type User$fromUserRelationsArgs = {
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
   * User.toUserRelations
   */
  export type User$toUserRelationsArgs = {
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
   * User.Post
   */
  export type User$PostArgs = {
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
    message: string | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    message: string | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    message: number
    createAt: number
    updateAt: number
    userId: number
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
    message?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    message?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    message?: true
    createAt?: true
    updateAt?: true
    userId?: true
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
    message: string
    createAt: Date
    updateAt: Date
    userId: number
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
    message?: boolean
    createAt?: boolean
    updateAt?: boolean
    HashTagOnPost?: boolean | Post$HashTagOnPostArgs
    reply?: boolean | Post$replyArgs
    user?: boolean | UserArgs
    userId?: boolean
    _count?: boolean | PostCountOutputTypeArgs
  }


  export type PostInclude = {
    HashTagOnPost?: boolean | Post$HashTagOnPostArgs
    reply?: boolean | Post$replyArgs
    user?: boolean | UserArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Post :
    S extends undefined ? never :
    S extends { include: any } & (PostArgs | PostFindManyArgs)
    ? Post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'HashTagOnPost' ? Array < HashTagOnPostGetPayload<S['include'][P]>>  :
        P extends 'reply' ? Array < ReplyGetPayload<S['include'][P]>>  :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'HashTagOnPost' ? Array < HashTagOnPostGetPayload<S['select'][P]>>  :
        P extends 'reply' ? Array < ReplyGetPayload<S['select'][P]>>  :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
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

    HashTagOnPost<T extends Post$HashTagOnPostArgs= {}>(args?: Subset<T, Post$HashTagOnPostArgs>): Prisma.PrismaPromise<Array<HashTagOnPostGetPayload<T>>| Null>;

    reply<T extends Post$replyArgs= {}>(args?: Subset<T, Post$replyArgs>): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>| Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Post.HashTagOnPost
   */
  export type Post$HashTagOnPostArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    where?: HashTagOnPostWhereInput
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    cursor?: HashTagOnPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
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
   * Model DirecMessage
   */


  export type AggregateDirecMessage = {
    _count: DirecMessageCountAggregateOutputType | null
    _avg: DirecMessageAvgAggregateOutputType | null
    _sum: DirecMessageSumAggregateOutputType | null
    _min: DirecMessageMinAggregateOutputType | null
    _max: DirecMessageMaxAggregateOutputType | null
  }

  export type DirecMessageAvgAggregateOutputType = {
    id: number | null
  }

  export type DirecMessageSumAggregateOutputType = {
    id: number | null
  }

  export type DirecMessageMinAggregateOutputType = {
    id: number | null
    message: string | null
    fromUser: string | null
    toUser: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DirecMessageMaxAggregateOutputType = {
    id: number | null
    message: string | null
    fromUser: string | null
    toUser: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DirecMessageCountAggregateOutputType = {
    id: number
    message: number
    fromUser: number
    toUser: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DirecMessageAvgAggregateInputType = {
    id?: true
  }

  export type DirecMessageSumAggregateInputType = {
    id?: true
  }

  export type DirecMessageMinAggregateInputType = {
    id?: true
    message?: true
    fromUser?: true
    toUser?: true
    createAt?: true
    updateAt?: true
  }

  export type DirecMessageMaxAggregateInputType = {
    id?: true
    message?: true
    fromUser?: true
    toUser?: true
    createAt?: true
    updateAt?: true
  }

  export type DirecMessageCountAggregateInputType = {
    id?: true
    message?: true
    fromUser?: true
    toUser?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DirecMessageAggregateArgs = {
    /**
     * Filter which DirecMessage to aggregate.
     */
    where?: DirecMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirecMessages to fetch.
     */
    orderBy?: Enumerable<DirecMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirecMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirecMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirecMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirecMessages
    **/
    _count?: true | DirecMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirecMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirecMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirecMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirecMessageMaxAggregateInputType
  }

  export type GetDirecMessageAggregateType<T extends DirecMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateDirecMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirecMessage[P]>
      : GetScalarType<T[P], AggregateDirecMessage[P]>
  }




  export type DirecMessageGroupByArgs = {
    where?: DirecMessageWhereInput
    orderBy?: Enumerable<DirecMessageOrderByWithAggregationInput>
    by: DirecMessageScalarFieldEnum[]
    having?: DirecMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirecMessageCountAggregateInputType | true
    _avg?: DirecMessageAvgAggregateInputType
    _sum?: DirecMessageSumAggregateInputType
    _min?: DirecMessageMinAggregateInputType
    _max?: DirecMessageMaxAggregateInputType
  }


  export type DirecMessageGroupByOutputType = {
    id: number
    message: string
    fromUser: string
    toUser: string
    createAt: Date
    updateAt: Date
    _count: DirecMessageCountAggregateOutputType | null
    _avg: DirecMessageAvgAggregateOutputType | null
    _sum: DirecMessageSumAggregateOutputType | null
    _min: DirecMessageMinAggregateOutputType | null
    _max: DirecMessageMaxAggregateOutputType | null
  }

  type GetDirecMessageGroupByPayload<T extends DirecMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DirecMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirecMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirecMessageGroupByOutputType[P]>
            : GetScalarType<T[P], DirecMessageGroupByOutputType[P]>
        }
      >
    >


  export type DirecMessageSelect = {
    id?: boolean
    message?: boolean
    fromUser?: boolean
    toUser?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type DirecMessageGetPayload<S extends boolean | null | undefined | DirecMessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DirecMessage :
    S extends undefined ? never :
    S extends { include: any } & (DirecMessageArgs | DirecMessageFindManyArgs)
    ? DirecMessage 
    : S extends { select: any } & (DirecMessageArgs | DirecMessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DirecMessage ? DirecMessage[P] : never
  } 
      : DirecMessage


  type DirecMessageCountArgs = 
    Omit<DirecMessageFindManyArgs, 'select' | 'include'> & {
      select?: DirecMessageCountAggregateInputType | true
    }

  export interface DirecMessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DirecMessage that matches the filter.
     * @param {DirecMessageFindUniqueArgs} args - Arguments to find a DirecMessage
     * @example
     * // Get one DirecMessage
     * const direcMessage = await prisma.direcMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DirecMessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DirecMessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DirecMessage'> extends True ? Prisma__DirecMessageClient<DirecMessageGetPayload<T>> : Prisma__DirecMessageClient<DirecMessageGetPayload<T> | null, null>

    /**
     * Find one DirecMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DirecMessageFindUniqueOrThrowArgs} args - Arguments to find a DirecMessage
     * @example
     * // Get one DirecMessage
     * const direcMessage = await prisma.direcMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DirecMessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DirecMessageFindUniqueOrThrowArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Find the first DirecMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageFindFirstArgs} args - Arguments to find a DirecMessage
     * @example
     * // Get one DirecMessage
     * const direcMessage = await prisma.direcMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DirecMessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DirecMessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DirecMessage'> extends True ? Prisma__DirecMessageClient<DirecMessageGetPayload<T>> : Prisma__DirecMessageClient<DirecMessageGetPayload<T> | null, null>

    /**
     * Find the first DirecMessage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageFindFirstOrThrowArgs} args - Arguments to find a DirecMessage
     * @example
     * // Get one DirecMessage
     * const direcMessage = await prisma.direcMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DirecMessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DirecMessageFindFirstOrThrowArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Find zero or more DirecMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirecMessages
     * const direcMessages = await prisma.direcMessage.findMany()
     * 
     * // Get first 10 DirecMessages
     * const direcMessages = await prisma.direcMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direcMessageWithIdOnly = await prisma.direcMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DirecMessageFindManyArgs>(
      args?: SelectSubset<T, DirecMessageFindManyArgs>
    ): Prisma.PrismaPromise<Array<DirecMessageGetPayload<T>>>

    /**
     * Create a DirecMessage.
     * @param {DirecMessageCreateArgs} args - Arguments to create a DirecMessage.
     * @example
     * // Create one DirecMessage
     * const DirecMessage = await prisma.direcMessage.create({
     *   data: {
     *     // ... data to create a DirecMessage
     *   }
     * })
     * 
    **/
    create<T extends DirecMessageCreateArgs>(
      args: SelectSubset<T, DirecMessageCreateArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Create many DirecMessages.
     *     @param {DirecMessageCreateManyArgs} args - Arguments to create many DirecMessages.
     *     @example
     *     // Create many DirecMessages
     *     const direcMessage = await prisma.direcMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DirecMessageCreateManyArgs>(
      args?: SelectSubset<T, DirecMessageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DirecMessage.
     * @param {DirecMessageDeleteArgs} args - Arguments to delete one DirecMessage.
     * @example
     * // Delete one DirecMessage
     * const DirecMessage = await prisma.direcMessage.delete({
     *   where: {
     *     // ... filter to delete one DirecMessage
     *   }
     * })
     * 
    **/
    delete<T extends DirecMessageDeleteArgs>(
      args: SelectSubset<T, DirecMessageDeleteArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Update one DirecMessage.
     * @param {DirecMessageUpdateArgs} args - Arguments to update one DirecMessage.
     * @example
     * // Update one DirecMessage
     * const direcMessage = await prisma.direcMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DirecMessageUpdateArgs>(
      args: SelectSubset<T, DirecMessageUpdateArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Delete zero or more DirecMessages.
     * @param {DirecMessageDeleteManyArgs} args - Arguments to filter DirecMessages to delete.
     * @example
     * // Delete a few DirecMessages
     * const { count } = await prisma.direcMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DirecMessageDeleteManyArgs>(
      args?: SelectSubset<T, DirecMessageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirecMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirecMessages
     * const direcMessage = await prisma.direcMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DirecMessageUpdateManyArgs>(
      args: SelectSubset<T, DirecMessageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DirecMessage.
     * @param {DirecMessageUpsertArgs} args - Arguments to update or create a DirecMessage.
     * @example
     * // Update or create a DirecMessage
     * const direcMessage = await prisma.direcMessage.upsert({
     *   create: {
     *     // ... data to create a DirecMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirecMessage we want to update
     *   }
     * })
    **/
    upsert<T extends DirecMessageUpsertArgs>(
      args: SelectSubset<T, DirecMessageUpsertArgs>
    ): Prisma__DirecMessageClient<DirecMessageGetPayload<T>>

    /**
     * Count the number of DirecMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageCountArgs} args - Arguments to filter DirecMessages to count.
     * @example
     * // Count the number of DirecMessages
     * const count = await prisma.direcMessage.count({
     *   where: {
     *     // ... the filter for the DirecMessages we want to count
     *   }
     * })
    **/
    count<T extends DirecMessageCountArgs>(
      args?: Subset<T, DirecMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirecMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirecMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirecMessageAggregateArgs>(args: Subset<T, DirecMessageAggregateArgs>): Prisma.PrismaPromise<GetDirecMessageAggregateType<T>>

    /**
     * Group by DirecMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirecMessageGroupByArgs} args - Group by arguments.
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
      T extends DirecMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirecMessageGroupByArgs['orderBy'] }
        : { orderBy?: DirecMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirecMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirecMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DirecMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirecMessageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * DirecMessage base type for findUnique actions
   */
  export type DirecMessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessage to fetch.
     */
    where: DirecMessageWhereUniqueInput
  }

  /**
   * DirecMessage findUnique
   */
  export interface DirecMessageFindUniqueArgs extends DirecMessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirecMessage findUniqueOrThrow
   */
  export type DirecMessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessage to fetch.
     */
    where: DirecMessageWhereUniqueInput
  }


  /**
   * DirecMessage base type for findFirst actions
   */
  export type DirecMessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessage to fetch.
     */
    where?: DirecMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirecMessages to fetch.
     */
    orderBy?: Enumerable<DirecMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirecMessages.
     */
    cursor?: DirecMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirecMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirecMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirecMessages.
     */
    distinct?: Enumerable<DirecMessageScalarFieldEnum>
  }

  /**
   * DirecMessage findFirst
   */
  export interface DirecMessageFindFirstArgs extends DirecMessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DirecMessage findFirstOrThrow
   */
  export type DirecMessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessage to fetch.
     */
    where?: DirecMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirecMessages to fetch.
     */
    orderBy?: Enumerable<DirecMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirecMessages.
     */
    cursor?: DirecMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirecMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirecMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirecMessages.
     */
    distinct?: Enumerable<DirecMessageScalarFieldEnum>
  }


  /**
   * DirecMessage findMany
   */
  export type DirecMessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter, which DirecMessages to fetch.
     */
    where?: DirecMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirecMessages to fetch.
     */
    orderBy?: Enumerable<DirecMessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirecMessages.
     */
    cursor?: DirecMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirecMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirecMessages.
     */
    skip?: number
    distinct?: Enumerable<DirecMessageScalarFieldEnum>
  }


  /**
   * DirecMessage create
   */
  export type DirecMessageCreateArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * The data needed to create a DirecMessage.
     */
    data: XOR<DirecMessageCreateInput, DirecMessageUncheckedCreateInput>
  }


  /**
   * DirecMessage createMany
   */
  export type DirecMessageCreateManyArgs = {
    /**
     * The data used to create many DirecMessages.
     */
    data: Enumerable<DirecMessageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DirecMessage update
   */
  export type DirecMessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * The data needed to update a DirecMessage.
     */
    data: XOR<DirecMessageUpdateInput, DirecMessageUncheckedUpdateInput>
    /**
     * Choose, which DirecMessage to update.
     */
    where: DirecMessageWhereUniqueInput
  }


  /**
   * DirecMessage updateMany
   */
  export type DirecMessageUpdateManyArgs = {
    /**
     * The data used to update DirecMessages.
     */
    data: XOR<DirecMessageUpdateManyMutationInput, DirecMessageUncheckedUpdateManyInput>
    /**
     * Filter which DirecMessages to update
     */
    where?: DirecMessageWhereInput
  }


  /**
   * DirecMessage upsert
   */
  export type DirecMessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * The filter to search for the DirecMessage to update in case it exists.
     */
    where: DirecMessageWhereUniqueInput
    /**
     * In case the DirecMessage found by the `where` argument doesn't exist, create a new DirecMessage with this data.
     */
    create: XOR<DirecMessageCreateInput, DirecMessageUncheckedCreateInput>
    /**
     * In case the DirecMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirecMessageUpdateInput, DirecMessageUncheckedUpdateInput>
  }


  /**
   * DirecMessage delete
   */
  export type DirecMessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
    /**
     * Filter which DirecMessage to delete.
     */
    where: DirecMessageWhereUniqueInput
  }


  /**
   * DirecMessage deleteMany
   */
  export type DirecMessageDeleteManyArgs = {
    /**
     * Filter which DirecMessages to delete
     */
    where?: DirecMessageWhereInput
  }


  /**
   * DirecMessage without action
   */
  export type DirecMessageArgs = {
    /**
     * Select specific fields to fetch from the DirecMessage
     */
    select?: DirecMessageSelect | null
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
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type HashTagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type HashTagCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
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
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type HashTagMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type HashTagCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
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
    name: string
    createAt: Date
    updateAt: Date
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
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    HashTagOnPost?: boolean | HashTag$HashTagOnPostArgs
    _count?: boolean | HashTagCountOutputTypeArgs
  }


  export type HashTagInclude = {
    HashTagOnPost?: boolean | HashTag$HashTagOnPostArgs
    _count?: boolean | HashTagCountOutputTypeArgs
  }

  export type HashTagGetPayload<S extends boolean | null | undefined | HashTagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashTag :
    S extends undefined ? never :
    S extends { include: any } & (HashTagArgs | HashTagFindManyArgs)
    ? HashTag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'HashTagOnPost' ? Array < HashTagOnPostGetPayload<S['include'][P]>>  :
        P extends '_count' ? HashTagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HashTagArgs | HashTagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'HashTagOnPost' ? Array < HashTagOnPostGetPayload<S['select'][P]>>  :
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

    HashTagOnPost<T extends HashTag$HashTagOnPostArgs= {}>(args?: Subset<T, HashTag$HashTagOnPostArgs>): Prisma.PrismaPromise<Array<HashTagOnPostGetPayload<T>>| Null>;

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
   * HashTag.HashTagOnPost
   */
  export type HashTag$HashTagOnPostArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    where?: HashTagOnPostWhereInput
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    cursor?: HashTagOnPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
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
   * Model HashTagOnPost
   */


  export type AggregateHashTagOnPost = {
    _count: HashTagOnPostCountAggregateOutputType | null
    _avg: HashTagOnPostAvgAggregateOutputType | null
    _sum: HashTagOnPostSumAggregateOutputType | null
    _min: HashTagOnPostMinAggregateOutputType | null
    _max: HashTagOnPostMaxAggregateOutputType | null
  }

  export type HashTagOnPostAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    hashTagId: number | null
  }

  export type HashTagOnPostSumAggregateOutputType = {
    id: number | null
    postId: number | null
    hashTagId: number | null
  }

  export type HashTagOnPostMinAggregateOutputType = {
    id: number | null
    postId: number | null
    hashTagId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type HashTagOnPostMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    hashTagId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type HashTagOnPostCountAggregateOutputType = {
    id: number
    postId: number
    hashTagId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type HashTagOnPostAvgAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
  }

  export type HashTagOnPostSumAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
  }

  export type HashTagOnPostMinAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
    createAt?: true
    updateAt?: true
  }

  export type HashTagOnPostMaxAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
    createAt?: true
    updateAt?: true
  }

  export type HashTagOnPostCountAggregateInputType = {
    id?: true
    postId?: true
    hashTagId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type HashTagOnPostAggregateArgs = {
    /**
     * Filter which HashTagOnPost to aggregate.
     */
    where?: HashTagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashTagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HashTagOnPosts
    **/
    _count?: true | HashTagOnPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashTagOnPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashTagOnPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashTagOnPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashTagOnPostMaxAggregateInputType
  }

  export type GetHashTagOnPostAggregateType<T extends HashTagOnPostAggregateArgs> = {
        [P in keyof T & keyof AggregateHashTagOnPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashTagOnPost[P]>
      : GetScalarType<T[P], AggregateHashTagOnPost[P]>
  }




  export type HashTagOnPostGroupByArgs = {
    where?: HashTagOnPostWhereInput
    orderBy?: Enumerable<HashTagOnPostOrderByWithAggregationInput>
    by: HashTagOnPostScalarFieldEnum[]
    having?: HashTagOnPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashTagOnPostCountAggregateInputType | true
    _avg?: HashTagOnPostAvgAggregateInputType
    _sum?: HashTagOnPostSumAggregateInputType
    _min?: HashTagOnPostMinAggregateInputType
    _max?: HashTagOnPostMaxAggregateInputType
  }


  export type HashTagOnPostGroupByOutputType = {
    id: number
    postId: number
    hashTagId: number
    createAt: Date
    updateAt: Date
    _count: HashTagOnPostCountAggregateOutputType | null
    _avg: HashTagOnPostAvgAggregateOutputType | null
    _sum: HashTagOnPostSumAggregateOutputType | null
    _min: HashTagOnPostMinAggregateOutputType | null
    _max: HashTagOnPostMaxAggregateOutputType | null
  }

  type GetHashTagOnPostGroupByPayload<T extends HashTagOnPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HashTagOnPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashTagOnPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashTagOnPostGroupByOutputType[P]>
            : GetScalarType<T[P], HashTagOnPostGroupByOutputType[P]>
        }
      >
    >


  export type HashTagOnPostSelect = {
    id?: boolean
    post?: boolean | PostArgs
    postId?: boolean
    hashTags?: boolean | HashTagArgs
    hashTagId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type HashTagOnPostInclude = {
    post?: boolean | PostArgs
    hashTags?: boolean | HashTagArgs
  }

  export type HashTagOnPostGetPayload<S extends boolean | null | undefined | HashTagOnPostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashTagOnPost :
    S extends undefined ? never :
    S extends { include: any } & (HashTagOnPostArgs | HashTagOnPostFindManyArgs)
    ? HashTagOnPost  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? PostGetPayload<S['include'][P]> :
        P extends 'hashTags' ? HashTagGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HashTagOnPostArgs | HashTagOnPostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? PostGetPayload<S['select'][P]> :
        P extends 'hashTags' ? HashTagGetPayload<S['select'][P]> :  P extends keyof HashTagOnPost ? HashTagOnPost[P] : never
  } 
      : HashTagOnPost


  type HashTagOnPostCountArgs = 
    Omit<HashTagOnPostFindManyArgs, 'select' | 'include'> & {
      select?: HashTagOnPostCountAggregateInputType | true
    }

  export interface HashTagOnPostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HashTagOnPost that matches the filter.
     * @param {HashTagOnPostFindUniqueArgs} args - Arguments to find a HashTagOnPost
     * @example
     * // Get one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HashTagOnPostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HashTagOnPostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HashTagOnPost'> extends True ? Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>> : Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T> | null, null>

    /**
     * Find one HashTagOnPost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HashTagOnPostFindUniqueOrThrowArgs} args - Arguments to find a HashTagOnPost
     * @example
     * // Get one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HashTagOnPostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HashTagOnPostFindUniqueOrThrowArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Find the first HashTagOnPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostFindFirstArgs} args - Arguments to find a HashTagOnPost
     * @example
     * // Get one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HashTagOnPostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HashTagOnPostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HashTagOnPost'> extends True ? Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>> : Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T> | null, null>

    /**
     * Find the first HashTagOnPost that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostFindFirstOrThrowArgs} args - Arguments to find a HashTagOnPost
     * @example
     * // Get one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HashTagOnPostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HashTagOnPostFindFirstOrThrowArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Find zero or more HashTagOnPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HashTagOnPosts
     * const hashTagOnPosts = await prisma.hashTagOnPost.findMany()
     * 
     * // Get first 10 HashTagOnPosts
     * const hashTagOnPosts = await prisma.hashTagOnPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashTagOnPostWithIdOnly = await prisma.hashTagOnPost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HashTagOnPostFindManyArgs>(
      args?: SelectSubset<T, HashTagOnPostFindManyArgs>
    ): Prisma.PrismaPromise<Array<HashTagOnPostGetPayload<T>>>

    /**
     * Create a HashTagOnPost.
     * @param {HashTagOnPostCreateArgs} args - Arguments to create a HashTagOnPost.
     * @example
     * // Create one HashTagOnPost
     * const HashTagOnPost = await prisma.hashTagOnPost.create({
     *   data: {
     *     // ... data to create a HashTagOnPost
     *   }
     * })
     * 
    **/
    create<T extends HashTagOnPostCreateArgs>(
      args: SelectSubset<T, HashTagOnPostCreateArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Create many HashTagOnPosts.
     *     @param {HashTagOnPostCreateManyArgs} args - Arguments to create many HashTagOnPosts.
     *     @example
     *     // Create many HashTagOnPosts
     *     const hashTagOnPost = await prisma.hashTagOnPost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HashTagOnPostCreateManyArgs>(
      args?: SelectSubset<T, HashTagOnPostCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HashTagOnPost.
     * @param {HashTagOnPostDeleteArgs} args - Arguments to delete one HashTagOnPost.
     * @example
     * // Delete one HashTagOnPost
     * const HashTagOnPost = await prisma.hashTagOnPost.delete({
     *   where: {
     *     // ... filter to delete one HashTagOnPost
     *   }
     * })
     * 
    **/
    delete<T extends HashTagOnPostDeleteArgs>(
      args: SelectSubset<T, HashTagOnPostDeleteArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Update one HashTagOnPost.
     * @param {HashTagOnPostUpdateArgs} args - Arguments to update one HashTagOnPost.
     * @example
     * // Update one HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HashTagOnPostUpdateArgs>(
      args: SelectSubset<T, HashTagOnPostUpdateArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Delete zero or more HashTagOnPosts.
     * @param {HashTagOnPostDeleteManyArgs} args - Arguments to filter HashTagOnPosts to delete.
     * @example
     * // Delete a few HashTagOnPosts
     * const { count } = await prisma.hashTagOnPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HashTagOnPostDeleteManyArgs>(
      args?: SelectSubset<T, HashTagOnPostDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HashTagOnPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HashTagOnPosts
     * const hashTagOnPost = await prisma.hashTagOnPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HashTagOnPostUpdateManyArgs>(
      args: SelectSubset<T, HashTagOnPostUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HashTagOnPost.
     * @param {HashTagOnPostUpsertArgs} args - Arguments to update or create a HashTagOnPost.
     * @example
     * // Update or create a HashTagOnPost
     * const hashTagOnPost = await prisma.hashTagOnPost.upsert({
     *   create: {
     *     // ... data to create a HashTagOnPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HashTagOnPost we want to update
     *   }
     * })
    **/
    upsert<T extends HashTagOnPostUpsertArgs>(
      args: SelectSubset<T, HashTagOnPostUpsertArgs>
    ): Prisma__HashTagOnPostClient<HashTagOnPostGetPayload<T>>

    /**
     * Count the number of HashTagOnPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostCountArgs} args - Arguments to filter HashTagOnPosts to count.
     * @example
     * // Count the number of HashTagOnPosts
     * const count = await prisma.hashTagOnPost.count({
     *   where: {
     *     // ... the filter for the HashTagOnPosts we want to count
     *   }
     * })
    **/
    count<T extends HashTagOnPostCountArgs>(
      args?: Subset<T, HashTagOnPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashTagOnPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HashTagOnPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HashTagOnPostAggregateArgs>(args: Subset<T, HashTagOnPostAggregateArgs>): Prisma.PrismaPromise<GetHashTagOnPostAggregateType<T>>

    /**
     * Group by HashTagOnPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashTagOnPostGroupByArgs} args - Group by arguments.
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
      T extends HashTagOnPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashTagOnPostGroupByArgs['orderBy'] }
        : { orderBy?: HashTagOnPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HashTagOnPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashTagOnPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HashTagOnPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HashTagOnPostClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    hashTags<T extends HashTagArgs= {}>(args?: Subset<T, HashTagArgs>): Prisma__HashTagClient<HashTagGetPayload<T> | Null>;

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
   * HashTagOnPost base type for findUnique actions
   */
  export type HashTagOnPostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPost to fetch.
     */
    where: HashTagOnPostWhereUniqueInput
  }

  /**
   * HashTagOnPost findUnique
   */
  export interface HashTagOnPostFindUniqueArgs extends HashTagOnPostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HashTagOnPost findUniqueOrThrow
   */
  export type HashTagOnPostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPost to fetch.
     */
    where: HashTagOnPostWhereUniqueInput
  }


  /**
   * HashTagOnPost base type for findFirst actions
   */
  export type HashTagOnPostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPost to fetch.
     */
    where?: HashTagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HashTagOnPosts.
     */
    cursor?: HashTagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HashTagOnPosts.
     */
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
  }

  /**
   * HashTagOnPost findFirst
   */
  export interface HashTagOnPostFindFirstArgs extends HashTagOnPostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HashTagOnPost findFirstOrThrow
   */
  export type HashTagOnPostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPost to fetch.
     */
    where?: HashTagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HashTagOnPosts.
     */
    cursor?: HashTagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HashTagOnPosts.
     */
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
  }


  /**
   * HashTagOnPost findMany
   */
  export type HashTagOnPostFindManyArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter, which HashTagOnPosts to fetch.
     */
    where?: HashTagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashTagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashTagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HashTagOnPosts.
     */
    cursor?: HashTagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashTagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashTagOnPosts.
     */
    skip?: number
    distinct?: Enumerable<HashTagOnPostScalarFieldEnum>
  }


  /**
   * HashTagOnPost create
   */
  export type HashTagOnPostCreateArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * The data needed to create a HashTagOnPost.
     */
    data: XOR<HashTagOnPostCreateInput, HashTagOnPostUncheckedCreateInput>
  }


  /**
   * HashTagOnPost createMany
   */
  export type HashTagOnPostCreateManyArgs = {
    /**
     * The data used to create many HashTagOnPosts.
     */
    data: Enumerable<HashTagOnPostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HashTagOnPost update
   */
  export type HashTagOnPostUpdateArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * The data needed to update a HashTagOnPost.
     */
    data: XOR<HashTagOnPostUpdateInput, HashTagOnPostUncheckedUpdateInput>
    /**
     * Choose, which HashTagOnPost to update.
     */
    where: HashTagOnPostWhereUniqueInput
  }


  /**
   * HashTagOnPost updateMany
   */
  export type HashTagOnPostUpdateManyArgs = {
    /**
     * The data used to update HashTagOnPosts.
     */
    data: XOR<HashTagOnPostUpdateManyMutationInput, HashTagOnPostUncheckedUpdateManyInput>
    /**
     * Filter which HashTagOnPosts to update
     */
    where?: HashTagOnPostWhereInput
  }


  /**
   * HashTagOnPost upsert
   */
  export type HashTagOnPostUpsertArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * The filter to search for the HashTagOnPost to update in case it exists.
     */
    where: HashTagOnPostWhereUniqueInput
    /**
     * In case the HashTagOnPost found by the `where` argument doesn't exist, create a new HashTagOnPost with this data.
     */
    create: XOR<HashTagOnPostCreateInput, HashTagOnPostUncheckedCreateInput>
    /**
     * In case the HashTagOnPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashTagOnPostUpdateInput, HashTagOnPostUncheckedUpdateInput>
  }


  /**
   * HashTagOnPost delete
   */
  export type HashTagOnPostDeleteArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
    /**
     * Filter which HashTagOnPost to delete.
     */
    where: HashTagOnPostWhereUniqueInput
  }


  /**
   * HashTagOnPost deleteMany
   */
  export type HashTagOnPostDeleteManyArgs = {
    /**
     * Filter which HashTagOnPosts to delete
     */
    where?: HashTagOnPostWhereInput
  }


  /**
   * HashTagOnPost without action
   */
  export type HashTagOnPostArgs = {
    /**
     * Select specific fields to fetch from the HashTagOnPost
     */
    select?: HashTagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashTagOnPostInclude | null
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
    userId: number | null
    message: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    message: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    message: number
    createAt: number
    updateAt: number
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
    userId?: true
    message?: true
    createAt?: true
    updateAt?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    message?: true
    createAt?: true
    updateAt?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    message?: true
    createAt?: true
    updateAt?: true
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
    userId: number
    message: string
    createAt: Date
    updateAt: Date
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
    posts?: boolean | PostArgs
    postId?: boolean
    users?: boolean | UserArgs
    userId?: boolean
    message?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type ReplyInclude = {
    posts?: boolean | PostArgs
    users?: boolean | UserArgs
  }

  export type ReplyGetPayload<S extends boolean | null | undefined | ReplyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Reply :
    S extends undefined ? never :
    S extends { include: any } & (ReplyArgs | ReplyFindManyArgs)
    ? Reply  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'posts' ? PostGetPayload<S['include'][P]> :
        P extends 'users' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ReplyArgs | ReplyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'posts' ? PostGetPayload<S['select'][P]> :
        P extends 'users' ? UserGetPayload<S['select'][P]> :  P extends keyof Reply ? Reply[P] : never
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

    posts<T extends PostArgs= {}>(args?: Subset<T, PostArgs>): Prisma__PostClient<PostGetPayload<T> | Null>;

    users<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
    fromId: number | null
    toId: number | null
  }

  export type UserRelationSumAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
  }

  export type UserRelationMinAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserRelationMaxAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserRelationCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserRelationAvgAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type UserRelationSumAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type UserRelationMinAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createAt?: true
    updateAt?: true
  }

  export type UserRelationMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createAt?: true
    updateAt?: true
  }

  export type UserRelationCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createAt?: true
    updateAt?: true
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
    fromId: number
    toId: number
    createAt: Date
    updateAt: Date
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
    from?: boolean | UserArgs
    fromId?: boolean
    to?: boolean | UserArgs
    toId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type UserRelationInclude = {
    from?: boolean | UserArgs
    to?: boolean | UserArgs
  }

  export type UserRelationGetPayload<S extends boolean | null | undefined | UserRelationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserRelation :
    S extends undefined ? never :
    S extends { include: any } & (UserRelationArgs | UserRelationFindManyArgs)
    ? UserRelation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'from' ? UserGetPayload<S['include'][P]> :
        P extends 'to' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserRelationArgs | UserRelationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'from' ? UserGetPayload<S['select'][P]> :
        P extends 'to' ? UserGetPayload<S['select'][P]> :  P extends keyof UserRelation ? UserRelation[P] : never
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
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DirecMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    fromUser: 'fromUser',
    toUser: 'toUser',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DirecMessageScalarFieldEnum = (typeof DirecMessageScalarFieldEnum)[keyof typeof DirecMessageScalarFieldEnum]


  export const HashTagOnPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    hashTagId: 'hashTagId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type HashTagOnPostScalarFieldEnum = (typeof HashTagOnPostScalarFieldEnum)[keyof typeof HashTagOnPostScalarFieldEnum]


  export const HashTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type HashTagScalarFieldEnum = (typeof HashTagScalarFieldEnum)[keyof typeof HashTagScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createAt: 'createAt',
    updateAt: 'updateAt',
    userId: 'userId'
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
    userId: 'userId',
    message: 'message',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


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


  export const UserRelationScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserRelationScalarFieldEnum = (typeof UserRelationScalarFieldEnum)[keyof typeof UserRelationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profileImage: 'profileImage',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    profileImage?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    reply?: ReplyListRelationFilter
    fromUserRelations?: UserRelationListRelationFilter
    toUserRelations?: UserRelationListRelationFilter
    Post?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    reply?: ReplyOrderByRelationAggregateInput
    fromUserRelations?: UserRelationOrderByRelationAggregateInput
    toUserRelations?: UserRelationOrderByRelationAggregateInput
    Post?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    HashTagOnPost?: HashTagOnPostListRelationFilter
    reply?: ReplyListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    HashTagOnPost?: HashTagOnPostOrderByRelationAggregateInput
    reply?: ReplyOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
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
    message?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
  }

  export type DirecMessageWhereInput = {
    AND?: Enumerable<DirecMessageWhereInput>
    OR?: Enumerable<DirecMessageWhereInput>
    NOT?: Enumerable<DirecMessageWhereInput>
    id?: IntFilter | number
    message?: StringFilter | string
    fromUser?: StringFilter | string
    toUser?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type DirecMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DirecMessageWhereUniqueInput = {
    id?: number
  }

  export type DirecMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DirecMessageCountOrderByAggregateInput
    _avg?: DirecMessageAvgOrderByAggregateInput
    _max?: DirecMessageMaxOrderByAggregateInput
    _min?: DirecMessageMinOrderByAggregateInput
    _sum?: DirecMessageSumOrderByAggregateInput
  }

  export type DirecMessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DirecMessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<DirecMessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DirecMessageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    fromUser?: StringWithAggregatesFilter | string
    toUser?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HashTagWhereInput = {
    AND?: Enumerable<HashTagWhereInput>
    OR?: Enumerable<HashTagWhereInput>
    NOT?: Enumerable<HashTagWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    HashTagOnPost?: HashTagOnPostListRelationFilter
  }

  export type HashTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    HashTagOnPost?: HashTagOnPostOrderByRelationAggregateInput
  }

  export type HashTagWhereUniqueInput = {
    id?: number
  }

  export type HashTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HashTagOnPostWhereInput = {
    AND?: Enumerable<HashTagOnPostWhereInput>
    OR?: Enumerable<HashTagOnPostWhereInput>
    NOT?: Enumerable<HashTagOnPostWhereInput>
    id?: IntFilter | number
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    hashTags?: XOR<HashTagRelationFilter, HashTagWhereInput>
    hashTagId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type HashTagOnPostOrderByWithRelationInput = {
    id?: SortOrder
    post?: PostOrderByWithRelationInput
    postId?: SortOrder
    hashTags?: HashTagOrderByWithRelationInput
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagOnPostWhereUniqueInput = {
    id?: number
  }

  export type HashTagOnPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: HashTagOnPostCountOrderByAggregateInput
    _avg?: HashTagOnPostAvgOrderByAggregateInput
    _max?: HashTagOnPostMaxOrderByAggregateInput
    _min?: HashTagOnPostMinOrderByAggregateInput
    _sum?: HashTagOnPostSumOrderByAggregateInput
  }

  export type HashTagOnPostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HashTagOnPostScalarWhereWithAggregatesInput>
    OR?: Enumerable<HashTagOnPostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HashTagOnPostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    postId?: IntWithAggregatesFilter | number
    hashTagId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ReplyWhereInput = {
    AND?: Enumerable<ReplyWhereInput>
    OR?: Enumerable<ReplyWhereInput>
    NOT?: Enumerable<ReplyWhereInput>
    id?: IntFilter | number
    posts?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    users?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    message?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    posts?: PostOrderByWithRelationInput
    postId?: SortOrder
    users?: UserOrderByWithRelationInput
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReplyWhereUniqueInput = {
    id?: number
  }

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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
    userId?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserRelationWhereInput = {
    AND?: Enumerable<UserRelationWhereInput>
    OR?: Enumerable<UserRelationWhereInput>
    NOT?: Enumerable<UserRelationWhereInput>
    id?: IntFilter | number
    from?: XOR<UserRelationFilter, UserWhereInput>
    fromId?: IntFilter | number
    to?: XOR<UserRelationFilter, UserWhereInput>
    toId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type UserRelationOrderByWithRelationInput = {
    id?: SortOrder
    from?: UserOrderByWithRelationInput
    fromId?: SortOrder
    to?: UserOrderByWithRelationInput
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserRelationWhereUniqueInput = {
    id?: number
  }

  export type UserRelationOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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
    fromId?: IntWithAggregatesFilter | number
    toId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationCreateNestedManyWithoutToInput
    Post?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationUncheckedCreateNestedManyWithoutToInput
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUpdateManyWithoutToNestedInput
    Post?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUncheckedUpdateManyWithoutToNestedInput
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostCreateNestedManyWithoutPostInput
    reply?: ReplyCreateNestedManyWithoutPostsInput
    user: UserCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostUncheckedCreateNestedManyWithoutPostInput
    reply?: ReplyUncheckedCreateNestedManyWithoutPostsInput
    userId: number
  }

  export type PostUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUpdateManyWithoutPostNestedInput
    reply?: ReplyUpdateManyWithoutPostsNestedInput
    user?: UserUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUncheckedUpdateManyWithoutPostNestedInput
    reply?: ReplyUncheckedUpdateManyWithoutPostsNestedInput
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
  }

  export type PostUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DirecMessageCreateInput = {
    message: string
    fromUser: string
    toUser: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DirecMessageUncheckedCreateInput = {
    id?: number
    message: string
    fromUser: string
    toUser: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DirecMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirecMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirecMessageCreateManyInput = {
    id?: number
    message: string
    fromUser: string
    toUser: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DirecMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirecMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    fromUser?: StringFieldUpdateOperationsInput | string
    toUser?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagCreateInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostCreateNestedManyWithoutHashTagsInput
  }

  export type HashTagUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostUncheckedCreateNestedManyWithoutHashTagsInput
  }

  export type HashTagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUpdateManyWithoutHashTagsNestedInput
  }

  export type HashTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUncheckedUpdateManyWithoutHashTagsNestedInput
  }

  export type HashTagCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostCreateInput = {
    post: PostCreateNestedOneWithoutHashTagOnPostInput
    hashTags: HashTagCreateNestedOneWithoutHashTagOnPostInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUncheckedCreateInput = {
    id?: number
    postId: number
    hashTagId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUpdateInput = {
    post?: PostUpdateOneRequiredWithoutHashTagOnPostNestedInput
    hashTags?: HashTagUpdateOneRequiredWithoutHashTagOnPostNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashTagId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostCreateManyInput = {
    id?: number
    postId: number
    hashTagId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashTagId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateInput = {
    posts: PostCreateNestedOneWithoutReplyInput
    users: UserCreateNestedOneWithoutReplyInput
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUncheckedCreateInput = {
    id?: number
    postId: number
    userId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUpdateInput = {
    posts?: PostUpdateOneRequiredWithoutReplyNestedInput
    users?: UserUpdateOneRequiredWithoutReplyNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyInput = {
    id?: number
    postId: number
    userId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateInput = {
    from: UserCreateNestedOneWithoutFromUserRelationsInput
    to: UserCreateNestedOneWithoutToUserRelationsInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUncheckedCreateInput = {
    id?: number
    fromId: number
    toId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUpdateInput = {
    from?: UserUpdateOneRequiredWithoutFromUserRelationsNestedInput
    to?: UserUpdateOneRequiredWithoutToUserRelationsNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateManyInput = {
    id?: number
    fromId: number
    toId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type UserRelationListRelationFilter = {
    every?: UserRelationWhereInput
    some?: UserRelationWhereInput
    none?: UserRelationWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileImage?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type HashTagOnPostListRelationFilter = {
    every?: HashTagOnPostWhereInput
    some?: HashTagOnPostWhereInput
    none?: HashTagOnPostWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HashTagOnPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DirecMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DirecMessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DirecMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DirecMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    fromUser?: SortOrder
    toUser?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DirecMessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type HashTagRelationFilter = {
    is?: HashTagWhereInput
    isNot?: HashTagWhereInput
  }

  export type HashTagOnPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagOnPostAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
  }

  export type HashTagOnPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagOnPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HashTagOnPostSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashTagId?: SortOrder
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReplySumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type UserRelationCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserRelationAvgOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type UserRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserRelationMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserRelationSumOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type ReplyCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUsersInput>, Enumerable<ReplyUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUsersInput>
    createMany?: ReplyCreateManyUsersInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type UserRelationCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFromInput>, Enumerable<UserRelationUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFromInput>
    createMany?: UserRelationCreateManyFromInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type UserRelationCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutToInput>, Enumerable<UserRelationUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutToInput>
    createMany?: UserRelationCreateManyToInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type ReplyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUsersInput>, Enumerable<ReplyUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUsersInput>
    createMany?: ReplyCreateManyUsersInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type UserRelationUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFromInput>, Enumerable<UserRelationUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFromInput>
    createMany?: UserRelationCreateManyFromInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type UserRelationUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutToInput>, Enumerable<UserRelationUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutToInput>
    createMany?: UserRelationCreateManyToInputEnvelope
    connect?: Enumerable<UserRelationWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReplyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUsersInput>, Enumerable<ReplyUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ReplyCreateManyUsersInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type UserRelationUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFromInput>, Enumerable<UserRelationUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutFromInput>
    createMany?: UserRelationCreateManyFromInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type UserRelationUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutToInput>, Enumerable<UserRelationUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutToInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutToInput>
    createMany?: UserRelationCreateManyToInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReplyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUsersInput>, Enumerable<ReplyUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: ReplyCreateManyUsersInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type UserRelationUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutFromInput>, Enumerable<UserRelationUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutFromInput>
    createMany?: UserRelationCreateManyFromInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
  }

  export type UserRelationUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<UserRelationCreateWithoutToInput>, Enumerable<UserRelationUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<UserRelationCreateOrConnectWithoutToInput>
    upsert?: Enumerable<UserRelationUpsertWithWhereUniqueWithoutToInput>
    createMany?: UserRelationCreateManyToInputEnvelope
    set?: Enumerable<UserRelationWhereUniqueInput>
    disconnect?: Enumerable<UserRelationWhereUniqueInput>
    delete?: Enumerable<UserRelationWhereUniqueInput>
    connect?: Enumerable<UserRelationWhereUniqueInput>
    update?: Enumerable<UserRelationUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<UserRelationUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<UserRelationScalarWhereInput>
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

  export type HashTagOnPostCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutPostInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutPostInput>
    createMany?: HashTagOnPostCreateManyPostInputEnvelope
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
  }

  export type ReplyCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostsInput>, Enumerable<ReplyUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostsInput>
    createMany?: ReplyCreateManyPostsInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    connect?: UserWhereUniqueInput
  }

  export type HashTagOnPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutPostInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutPostInput>
    createMany?: HashTagOnPostCreateManyPostInputEnvelope
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
  }

  export type ReplyUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostsInput>, Enumerable<ReplyUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostsInput>
    createMany?: ReplyCreateManyPostsInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type HashTagOnPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutPostInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<HashTagOnPostUpsertWithWhereUniqueWithoutPostInput>
    createMany?: HashTagOnPostCreateManyPostInputEnvelope
    set?: Enumerable<HashTagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashTagOnPostWhereUniqueInput>
    delete?: Enumerable<HashTagOnPostWhereUniqueInput>
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
    update?: Enumerable<HashTagOnPostUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<HashTagOnPostUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<HashTagOnPostScalarWhereInput>
  }

  export type ReplyUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostsInput>, Enumerable<ReplyUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutPostsInput>
    createMany?: ReplyCreateManyPostsInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    upsert?: UserUpsertWithoutPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
  }

  export type HashTagOnPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutPostInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<HashTagOnPostUpsertWithWhereUniqueWithoutPostInput>
    createMany?: HashTagOnPostCreateManyPostInputEnvelope
    set?: Enumerable<HashTagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashTagOnPostWhereUniqueInput>
    delete?: Enumerable<HashTagOnPostWhereUniqueInput>
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
    update?: Enumerable<HashTagOnPostUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<HashTagOnPostUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<HashTagOnPostScalarWhereInput>
  }

  export type ReplyUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostsInput>, Enumerable<ReplyUncheckedCreateWithoutPostsInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostsInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutPostsInput>
    createMany?: ReplyCreateManyPostsInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutPostsInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutPostsInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type HashTagOnPostCreateNestedManyWithoutHashTagsInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutHashTagsInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutHashTagsInput>
    createMany?: HashTagOnPostCreateManyHashTagsInputEnvelope
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
  }

  export type HashTagOnPostUncheckedCreateNestedManyWithoutHashTagsInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutHashTagsInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutHashTagsInput>
    createMany?: HashTagOnPostCreateManyHashTagsInputEnvelope
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
  }

  export type HashTagOnPostUpdateManyWithoutHashTagsNestedInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutHashTagsInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutHashTagsInput>
    upsert?: Enumerable<HashTagOnPostUpsertWithWhereUniqueWithoutHashTagsInput>
    createMany?: HashTagOnPostCreateManyHashTagsInputEnvelope
    set?: Enumerable<HashTagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashTagOnPostWhereUniqueInput>
    delete?: Enumerable<HashTagOnPostWhereUniqueInput>
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
    update?: Enumerable<HashTagOnPostUpdateWithWhereUniqueWithoutHashTagsInput>
    updateMany?: Enumerable<HashTagOnPostUpdateManyWithWhereWithoutHashTagsInput>
    deleteMany?: Enumerable<HashTagOnPostScalarWhereInput>
  }

  export type HashTagOnPostUncheckedUpdateManyWithoutHashTagsNestedInput = {
    create?: XOR<Enumerable<HashTagOnPostCreateWithoutHashTagsInput>, Enumerable<HashTagOnPostUncheckedCreateWithoutHashTagsInput>>
    connectOrCreate?: Enumerable<HashTagOnPostCreateOrConnectWithoutHashTagsInput>
    upsert?: Enumerable<HashTagOnPostUpsertWithWhereUniqueWithoutHashTagsInput>
    createMany?: HashTagOnPostCreateManyHashTagsInputEnvelope
    set?: Enumerable<HashTagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashTagOnPostWhereUniqueInput>
    delete?: Enumerable<HashTagOnPostWhereUniqueInput>
    connect?: Enumerable<HashTagOnPostWhereUniqueInput>
    update?: Enumerable<HashTagOnPostUpdateWithWhereUniqueWithoutHashTagsInput>
    updateMany?: Enumerable<HashTagOnPostUpdateManyWithWhereWithoutHashTagsInput>
    deleteMany?: Enumerable<HashTagOnPostScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutHashTagOnPostInput = {
    create?: XOR<PostCreateWithoutHashTagOnPostInput, PostUncheckedCreateWithoutHashTagOnPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutHashTagOnPostInput
    connect?: PostWhereUniqueInput
  }

  export type HashTagCreateNestedOneWithoutHashTagOnPostInput = {
    create?: XOR<HashTagCreateWithoutHashTagOnPostInput, HashTagUncheckedCreateWithoutHashTagOnPostInput>
    connectOrCreate?: HashTagCreateOrConnectWithoutHashTagOnPostInput
    connect?: HashTagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutHashTagOnPostNestedInput = {
    create?: XOR<PostCreateWithoutHashTagOnPostInput, PostUncheckedCreateWithoutHashTagOnPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutHashTagOnPostInput
    upsert?: PostUpsertWithoutHashTagOnPostInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutHashTagOnPostInput, PostUncheckedUpdateWithoutHashTagOnPostInput>
  }

  export type HashTagUpdateOneRequiredWithoutHashTagOnPostNestedInput = {
    create?: XOR<HashTagCreateWithoutHashTagOnPostInput, HashTagUncheckedCreateWithoutHashTagOnPostInput>
    connectOrCreate?: HashTagCreateOrConnectWithoutHashTagOnPostInput
    upsert?: HashTagUpsertWithoutHashTagOnPostInput
    connect?: HashTagWhereUniqueInput
    update?: XOR<HashTagUpdateWithoutHashTagOnPostInput, HashTagUncheckedUpdateWithoutHashTagOnPostInput>
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

  export type UserCreateNestedOneWithoutFromUserRelationsInput = {
    create?: XOR<UserCreateWithoutFromUserRelationsInput, UserUncheckedCreateWithoutFromUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromUserRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutToUserRelationsInput = {
    create?: XOR<UserCreateWithoutToUserRelationsInput, UserUncheckedCreateWithoutToUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToUserRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFromUserRelationsNestedInput = {
    create?: XOR<UserCreateWithoutFromUserRelationsInput, UserUncheckedCreateWithoutFromUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFromUserRelationsInput
    upsert?: UserUpsertWithoutFromUserRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFromUserRelationsInput, UserUncheckedUpdateWithoutFromUserRelationsInput>
  }

  export type UserUpdateOneRequiredWithoutToUserRelationsNestedInput = {
    create?: XOR<UserCreateWithoutToUserRelationsInput, UserUncheckedCreateWithoutToUserRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToUserRelationsInput
    upsert?: UserUpsertWithoutToUserRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutToUserRelationsInput, UserUncheckedUpdateWithoutToUserRelationsInput>
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

  export type ReplyCreateWithoutUsersInput = {
    posts: PostCreateNestedOneWithoutReplyInput
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUncheckedCreateWithoutUsersInput = {
    id?: number
    postId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyCreateOrConnectWithoutUsersInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutUsersInput, ReplyUncheckedCreateWithoutUsersInput>
  }

  export type ReplyCreateManyUsersInputEnvelope = {
    data: Enumerable<ReplyCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type UserRelationCreateWithoutFromInput = {
    to: UserCreateNestedOneWithoutToUserRelationsInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUncheckedCreateWithoutFromInput = {
    id?: number
    toId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationCreateOrConnectWithoutFromInput = {
    where: UserRelationWhereUniqueInput
    create: XOR<UserRelationCreateWithoutFromInput, UserRelationUncheckedCreateWithoutFromInput>
  }

  export type UserRelationCreateManyFromInputEnvelope = {
    data: Enumerable<UserRelationCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type UserRelationCreateWithoutToInput = {
    from: UserCreateNestedOneWithoutFromUserRelationsInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationUncheckedCreateWithoutToInput = {
    id?: number
    fromId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationCreateOrConnectWithoutToInput = {
    where: UserRelationWhereUniqueInput
    create: XOR<UserRelationCreateWithoutToInput, UserRelationUncheckedCreateWithoutToInput>
  }

  export type UserRelationCreateManyToInputEnvelope = {
    data: Enumerable<UserRelationCreateManyToInput>
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostCreateNestedManyWithoutPostInput
    reply?: ReplyCreateNestedManyWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostUncheckedCreateNestedManyWithoutPostInput
    reply?: ReplyUncheckedCreateNestedManyWithoutPostsInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: Enumerable<PostCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReplyUpsertWithWhereUniqueWithoutUsersInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutUsersInput, ReplyUncheckedUpdateWithoutUsersInput>
    create: XOR<ReplyCreateWithoutUsersInput, ReplyUncheckedCreateWithoutUsersInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutUsersInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutUsersInput, ReplyUncheckedUpdateWithoutUsersInput>
  }

  export type ReplyUpdateManyWithWhereWithoutUsersInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutReplyInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: Enumerable<ReplyScalarWhereInput>
    OR?: Enumerable<ReplyScalarWhereInput>
    NOT?: Enumerable<ReplyScalarWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    userId?: IntFilter | number
    message?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type UserRelationUpsertWithWhereUniqueWithoutFromInput = {
    where: UserRelationWhereUniqueInput
    update: XOR<UserRelationUpdateWithoutFromInput, UserRelationUncheckedUpdateWithoutFromInput>
    create: XOR<UserRelationCreateWithoutFromInput, UserRelationUncheckedCreateWithoutFromInput>
  }

  export type UserRelationUpdateWithWhereUniqueWithoutFromInput = {
    where: UserRelationWhereUniqueInput
    data: XOR<UserRelationUpdateWithoutFromInput, UserRelationUncheckedUpdateWithoutFromInput>
  }

  export type UserRelationUpdateManyWithWhereWithoutFromInput = {
    where: UserRelationScalarWhereInput
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyWithoutFromUserRelationsInput>
  }

  export type UserRelationScalarWhereInput = {
    AND?: Enumerable<UserRelationScalarWhereInput>
    OR?: Enumerable<UserRelationScalarWhereInput>
    NOT?: Enumerable<UserRelationScalarWhereInput>
    id?: IntFilter | number
    fromId?: IntFilter | number
    toId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type UserRelationUpsertWithWhereUniqueWithoutToInput = {
    where: UserRelationWhereUniqueInput
    update: XOR<UserRelationUpdateWithoutToInput, UserRelationUncheckedUpdateWithoutToInput>
    create: XOR<UserRelationCreateWithoutToInput, UserRelationUncheckedCreateWithoutToInput>
  }

  export type UserRelationUpdateWithWhereUniqueWithoutToInput = {
    where: UserRelationWhereUniqueInput
    data: XOR<UserRelationUpdateWithoutToInput, UserRelationUncheckedUpdateWithoutToInput>
  }

  export type UserRelationUpdateManyWithWhereWithoutToInput = {
    where: UserRelationScalarWhereInput
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyWithoutToUserRelationsInput>
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
    message?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
  }

  export type HashTagOnPostCreateWithoutPostInput = {
    hashTags: HashTagCreateNestedOneWithoutHashTagOnPostInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUncheckedCreateWithoutPostInput = {
    id?: number
    hashTagId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostCreateOrConnectWithoutPostInput = {
    where: HashTagOnPostWhereUniqueInput
    create: XOR<HashTagOnPostCreateWithoutPostInput, HashTagOnPostUncheckedCreateWithoutPostInput>
  }

  export type HashTagOnPostCreateManyPostInputEnvelope = {
    data: Enumerable<HashTagOnPostCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type ReplyCreateWithoutPostsInput = {
    users: UserCreateNestedOneWithoutReplyInput
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUncheckedCreateWithoutPostsInput = {
    id?: number
    userId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyCreateOrConnectWithoutPostsInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutPostsInput, ReplyUncheckedCreateWithoutPostsInput>
  }

  export type ReplyCreateManyPostsInputEnvelope = {
    data: Enumerable<ReplyCreateManyPostsInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPostInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutPostInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type HashTagOnPostUpsertWithWhereUniqueWithoutPostInput = {
    where: HashTagOnPostWhereUniqueInput
    update: XOR<HashTagOnPostUpdateWithoutPostInput, HashTagOnPostUncheckedUpdateWithoutPostInput>
    create: XOR<HashTagOnPostCreateWithoutPostInput, HashTagOnPostUncheckedCreateWithoutPostInput>
  }

  export type HashTagOnPostUpdateWithWhereUniqueWithoutPostInput = {
    where: HashTagOnPostWhereUniqueInput
    data: XOR<HashTagOnPostUpdateWithoutPostInput, HashTagOnPostUncheckedUpdateWithoutPostInput>
  }

  export type HashTagOnPostUpdateManyWithWhereWithoutPostInput = {
    where: HashTagOnPostScalarWhereInput
    data: XOR<HashTagOnPostUpdateManyMutationInput, HashTagOnPostUncheckedUpdateManyWithoutHashTagOnPostInput>
  }

  export type HashTagOnPostScalarWhereInput = {
    AND?: Enumerable<HashTagOnPostScalarWhereInput>
    OR?: Enumerable<HashTagOnPostScalarWhereInput>
    NOT?: Enumerable<HashTagOnPostScalarWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    hashTagId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type ReplyUpsertWithWhereUniqueWithoutPostsInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutPostsInput, ReplyUncheckedUpdateWithoutPostsInput>
    create: XOR<ReplyCreateWithoutPostsInput, ReplyUncheckedCreateWithoutPostsInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutPostsInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutPostsInput, ReplyUncheckedUpdateWithoutPostsInput>
  }

  export type ReplyUpdateManyWithWhereWithoutPostsInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutReplyInput>
  }

  export type UserUpsertWithoutPostInput = {
    update: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type UserUpdateWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type HashTagOnPostCreateWithoutHashTagsInput = {
    post: PostCreateNestedOneWithoutHashTagOnPostInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUncheckedCreateWithoutHashTagsInput = {
    id?: number
    postId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostCreateOrConnectWithoutHashTagsInput = {
    where: HashTagOnPostWhereUniqueInput
    create: XOR<HashTagOnPostCreateWithoutHashTagsInput, HashTagOnPostUncheckedCreateWithoutHashTagsInput>
  }

  export type HashTagOnPostCreateManyHashTagsInputEnvelope = {
    data: Enumerable<HashTagOnPostCreateManyHashTagsInput>
    skipDuplicates?: boolean
  }

  export type HashTagOnPostUpsertWithWhereUniqueWithoutHashTagsInput = {
    where: HashTagOnPostWhereUniqueInput
    update: XOR<HashTagOnPostUpdateWithoutHashTagsInput, HashTagOnPostUncheckedUpdateWithoutHashTagsInput>
    create: XOR<HashTagOnPostCreateWithoutHashTagsInput, HashTagOnPostUncheckedCreateWithoutHashTagsInput>
  }

  export type HashTagOnPostUpdateWithWhereUniqueWithoutHashTagsInput = {
    where: HashTagOnPostWhereUniqueInput
    data: XOR<HashTagOnPostUpdateWithoutHashTagsInput, HashTagOnPostUncheckedUpdateWithoutHashTagsInput>
  }

  export type HashTagOnPostUpdateManyWithWhereWithoutHashTagsInput = {
    where: HashTagOnPostScalarWhereInput
    data: XOR<HashTagOnPostUpdateManyMutationInput, HashTagOnPostUncheckedUpdateManyWithoutHashTagOnPostInput>
  }

  export type PostCreateWithoutHashTagOnPostInput = {
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutPostsInput
    user: UserCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutHashTagOnPostInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutPostsInput
    userId: number
  }

  export type PostCreateOrConnectWithoutHashTagOnPostInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutHashTagOnPostInput, PostUncheckedCreateWithoutHashTagOnPostInput>
  }

  export type HashTagCreateWithoutHashTagOnPostInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagUncheckedCreateWithoutHashTagOnPostInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagCreateOrConnectWithoutHashTagOnPostInput = {
    where: HashTagWhereUniqueInput
    create: XOR<HashTagCreateWithoutHashTagOnPostInput, HashTagUncheckedCreateWithoutHashTagOnPostInput>
  }

  export type PostUpsertWithoutHashTagOnPostInput = {
    update: XOR<PostUpdateWithoutHashTagOnPostInput, PostUncheckedUpdateWithoutHashTagOnPostInput>
    create: XOR<PostCreateWithoutHashTagOnPostInput, PostUncheckedCreateWithoutHashTagOnPostInput>
  }

  export type PostUpdateWithoutHashTagOnPostInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutPostsNestedInput
    user?: UserUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutHashTagOnPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutPostsNestedInput
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HashTagUpsertWithoutHashTagOnPostInput = {
    update: XOR<HashTagUpdateWithoutHashTagOnPostInput, HashTagUncheckedUpdateWithoutHashTagOnPostInput>
    create: XOR<HashTagCreateWithoutHashTagOnPostInput, HashTagUncheckedCreateWithoutHashTagOnPostInput>
  }

  export type HashTagUpdateWithoutHashTagOnPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagUncheckedUpdateWithoutHashTagOnPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutReplyInput = {
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostCreateNestedManyWithoutPostInput
    user: UserCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutReplyInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
    HashTagOnPost?: HashTagOnPostUncheckedCreateNestedManyWithoutPostInput
    userId: number
  }

  export type PostCreateOrConnectWithoutReplyInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutReplyInput, PostUncheckedCreateWithoutReplyInput>
  }

  export type UserCreateWithoutReplyInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    fromUserRelations?: UserRelationCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationCreateNestedManyWithoutToInput
    Post?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReplyInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    fromUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    toUserRelations?: UserRelationUncheckedCreateNestedManyWithoutToInput
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
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
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUpdateManyWithoutPostNestedInput
    user?: UserUpdateOneRequiredWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUncheckedUpdateManyWithoutPostNestedInput
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutReplyInput = {
    update: XOR<UserUpdateWithoutReplyInput, UserUncheckedUpdateWithoutReplyInput>
    create: XOR<UserCreateWithoutReplyInput, UserUncheckedCreateWithoutReplyInput>
  }

  export type UserUpdateWithoutReplyInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserRelations?: UserRelationUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUpdateManyWithoutToNestedInput
    Post?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUserRelations?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    toUserRelations?: UserRelationUncheckedUpdateManyWithoutToNestedInput
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFromUserRelationsInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutUsersInput
    toUserRelations?: UserRelationCreateNestedManyWithoutToInput
    Post?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFromUserRelationsInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutUsersInput
    toUserRelations?: UserRelationUncheckedCreateNestedManyWithoutToInput
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFromUserRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFromUserRelationsInput, UserUncheckedCreateWithoutFromUserRelationsInput>
  }

  export type UserCreateWithoutToUserRelationsInput = {
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationCreateNestedManyWithoutFromInput
    Post?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutToUserRelationsInput = {
    id?: number
    name: string
    profileImage: string
    createAt?: Date | string
    updateAt?: Date | string
    reply?: ReplyUncheckedCreateNestedManyWithoutUsersInput
    fromUserRelations?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    Post?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutToUserRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToUserRelationsInput, UserUncheckedCreateWithoutToUserRelationsInput>
  }

  export type UserUpsertWithoutFromUserRelationsInput = {
    update: XOR<UserUpdateWithoutFromUserRelationsInput, UserUncheckedUpdateWithoutFromUserRelationsInput>
    create: XOR<UserCreateWithoutFromUserRelationsInput, UserUncheckedCreateWithoutFromUserRelationsInput>
  }

  export type UserUpdateWithoutFromUserRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutUsersNestedInput
    toUserRelations?: UserRelationUpdateManyWithoutToNestedInput
    Post?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFromUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutUsersNestedInput
    toUserRelations?: UserRelationUncheckedUpdateManyWithoutToNestedInput
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutToUserRelationsInput = {
    update: XOR<UserUpdateWithoutToUserRelationsInput, UserUncheckedUpdateWithoutToUserRelationsInput>
    create: XOR<UserCreateWithoutToUserRelationsInput, UserUncheckedCreateWithoutToUserRelationsInput>
  }

  export type UserUpdateWithoutToUserRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUpdateManyWithoutFromNestedInput
    Post?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutToUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reply?: ReplyUncheckedUpdateManyWithoutUsersNestedInput
    fromUserRelations?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    Post?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReplyCreateManyUsersInput = {
    id?: number
    postId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationCreateManyFromInput = {
    id?: number
    toId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserRelationCreateManyToInput = {
    id?: number
    fromId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type PostCreateManyUserInput = {
    id?: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyUpdateWithoutUsersInput = {
    posts?: PostUpdateOneRequiredWithoutReplyNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUpdateWithoutFromInput = {
    to?: UserUpdateOneRequiredWithoutToUserRelationsNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyWithoutFromUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUpdateWithoutToInput = {
    from?: UserUpdateOneRequiredWithoutFromUserRelationsNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyWithoutToUserRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUpdateManyWithoutPostNestedInput
    reply?: ReplyUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    HashTagOnPost?: HashTagOnPostUncheckedUpdateManyWithoutPostNestedInput
    reply?: ReplyUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostCreateManyPostInput = {
    id?: number
    hashTagId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ReplyCreateManyPostsInput = {
    id?: number
    userId: number
    message: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUpdateWithoutPostInput = {
    hashTags?: HashTagUpdateOneRequiredWithoutHashTagOnPostNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashTagId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateManyWithoutHashTagOnPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashTagId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUpdateWithoutPostsInput = {
    users?: UserUpdateOneRequiredWithoutReplyNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostCreateManyHashTagsInput = {
    id?: number
    postId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type HashTagOnPostUpdateWithoutHashTagsInput = {
    post?: PostUpdateOneRequiredWithoutHashTagOnPostNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashTagOnPostUncheckedUpdateWithoutHashTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
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