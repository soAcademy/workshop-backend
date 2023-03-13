
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
  username: string
  image: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model UserRelation
 * 
 */
export type UserRelation = {
  id: number
  fromId: number
  toId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: number
  userId: number
  detail: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Reply
 * 
 */
export type Reply = {
  id: number
  postId: number
  userId: number
  replyMessage: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Hashtag
 * 
 */
export type Hashtag = {
  id: number
  topic: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model HashtagOnPost
 * 
 */
export type HashtagOnPost = {
  id: number
  postId: number
  hashtagId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DirectMessage
 * 
 */
export type DirectMessage = {
  id: number
  fromId: number
  toId: number
  message: string
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
   * `prisma.userRelation`: Exposes CRUD operations for the **UserRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRelations
    * const userRelations = await prisma.userRelation.findMany()
    * ```
    */
  get userRelation(): Prisma.UserRelationDelegate<GlobalReject>;

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
   * `prisma.reply`: Exposes CRUD operations for the **Reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replies
    * const replies = await prisma.reply.findMany()
    * ```
    */
  get reply(): Prisma.ReplyDelegate<GlobalReject>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **Hashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtag.findMany()
    * ```
    */
  get hashtag(): Prisma.HashtagDelegate<GlobalReject>;

  /**
   * `prisma.hashtagOnPost`: Exposes CRUD operations for the **HashtagOnPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HashtagOnPosts
    * const hashtagOnPosts = await prisma.hashtagOnPost.findMany()
    * ```
    */
  get hashtagOnPost(): Prisma.HashtagOnPostDelegate<GlobalReject>;

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
    User: 'User',
    UserRelation: 'UserRelation',
    Post: 'Post',
    Reply: 'Reply',
    Hashtag: 'Hashtag',
    HashtagOnPost: 'HashtagOnPost',
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
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    posts: number
    replies: number
    directMsgFrom: number
    directMsgTo: number
    followings: number
    followers: number
  }

  export type UserCountOutputTypeSelect = {
    posts?: boolean
    replies?: boolean
    directMsgFrom?: boolean
    directMsgTo?: boolean
    followings?: boolean
    followers?: boolean
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
    replies: number
    hashtagOnPosts: number
  }

  export type PostCountOutputTypeSelect = {
    replies?: boolean
    hashtagOnPosts?: boolean
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
   * Count Type HashtagCountOutputType
   */


  export type HashtagCountOutputType = {
    hashtagOnPosts: number
  }

  export type HashtagCountOutputTypeSelect = {
    hashtagOnPosts?: boolean
  }

  export type HashtagCountOutputTypeGetPayload<S extends boolean | null | undefined | HashtagCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashtagCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (HashtagCountOutputTypeArgs)
    ? HashtagCountOutputType 
    : S extends { select: any } & (HashtagCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof HashtagCountOutputType ? HashtagCountOutputType[P] : never
  } 
      : HashtagCountOutputType




  // Custom InputTypes

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the HashtagCountOutputType
     */
    select?: HashtagCountOutputTypeSelect | null
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
    username: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    image: number
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
    username?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    image?: true
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
    username: string
    image: string
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
    username?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | User$postsArgs
    replies?: boolean | User$repliesArgs
    directMsgFrom?: boolean | User$directMsgFromArgs
    directMsgTo?: boolean | User$directMsgToArgs
    followings?: boolean | User$followingsArgs
    followers?: boolean | User$followersArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    posts?: boolean | User$postsArgs
    replies?: boolean | User$repliesArgs
    directMsgFrom?: boolean | User$directMsgFromArgs
    directMsgTo?: boolean | User$directMsgToArgs
    followings?: boolean | User$followingsArgs
    followers?: boolean | User$followersArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'posts' ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'replies' ? Array < ReplyGetPayload<S['include'][P]>>  :
        P extends 'directMsgFrom' ? Array < DirectMessageGetPayload<S['include'][P]>>  :
        P extends 'directMsgTo' ? Array < DirectMessageGetPayload<S['include'][P]>>  :
        P extends 'followings' ? Array < UserRelationGetPayload<S['include'][P]>>  :
        P extends 'followers' ? Array < UserRelationGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'posts' ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'replies' ? Array < ReplyGetPayload<S['select'][P]>>  :
        P extends 'directMsgFrom' ? Array < DirectMessageGetPayload<S['select'][P]>>  :
        P extends 'directMsgTo' ? Array < DirectMessageGetPayload<S['select'][P]>>  :
        P extends 'followings' ? Array < UserRelationGetPayload<S['select'][P]>>  :
        P extends 'followers' ? Array < UserRelationGetPayload<S['select'][P]>>  :
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

    posts<T extends User$postsArgs= {}>(args?: Subset<T, User$postsArgs>): Prisma.PrismaPromise<Array<PostGetPayload<T>>| Null>;

    replies<T extends User$repliesArgs= {}>(args?: Subset<T, User$repliesArgs>): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>| Null>;

    directMsgFrom<T extends User$directMsgFromArgs= {}>(args?: Subset<T, User$directMsgFromArgs>): Prisma.PrismaPromise<Array<DirectMessageGetPayload<T>>| Null>;

    directMsgTo<T extends User$directMsgToArgs= {}>(args?: Subset<T, User$directMsgToArgs>): Prisma.PrismaPromise<Array<DirectMessageGetPayload<T>>| Null>;

    followings<T extends User$followingsArgs= {}>(args?: Subset<T, User$followingsArgs>): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>| Null>;

    followers<T extends User$followersArgs= {}>(args?: Subset<T, User$followersArgs>): Prisma.PrismaPromise<Array<UserRelationGetPayload<T>>| Null>;

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
   * User.posts
   */
  export type User$postsArgs = {
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
   * User.replies
   */
  export type User$repliesArgs = {
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
   * User.directMsgFrom
   */
  export type User$directMsgFromArgs = {
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
   * User.directMsgTo
   */
  export type User$directMsgToArgs = {
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
   * User.followings
   */
  export type User$followingsArgs = {
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
   * User.followers
   */
  export type User$followersArgs = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRelationMaxAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRelationCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type UserRelationMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRelationCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
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
    fromId: number
    toId: number
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
    from?: boolean | UserArgs
    fromId?: boolean
    to?: boolean | UserArgs
    toId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
    userId: number | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    detail: number
    createdAt: number
    updatedAt: number
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
    userId?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
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
    userId: number
    detail: string
    createdAt: Date
    updatedAt: Date
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
    user?: boolean | UserArgs
    userId?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    replies?: boolean | Post$repliesArgs
    hashtagOnPosts?: boolean | Post$hashtagOnPostsArgs
    _count?: boolean | PostCountOutputTypeArgs
  }


  export type PostInclude = {
    user?: boolean | UserArgs
    replies?: boolean | Post$repliesArgs
    hashtagOnPosts?: boolean | Post$hashtagOnPostsArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<S extends boolean | null | undefined | PostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Post :
    S extends undefined ? never :
    S extends { include: any } & (PostArgs | PostFindManyArgs)
    ? Post  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'replies' ? Array < ReplyGetPayload<S['include'][P]>>  :
        P extends 'hashtagOnPosts' ? Array < HashtagOnPostGetPayload<S['include'][P]>>  :
        P extends '_count' ? PostCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PostArgs | PostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'replies' ? Array < ReplyGetPayload<S['select'][P]>>  :
        P extends 'hashtagOnPosts' ? Array < HashtagOnPostGetPayload<S['select'][P]>>  :
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

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    replies<T extends Post$repliesArgs= {}>(args?: Subset<T, Post$repliesArgs>): Prisma.PrismaPromise<Array<ReplyGetPayload<T>>| Null>;

    hashtagOnPosts<T extends Post$hashtagOnPostsArgs= {}>(args?: Subset<T, Post$hashtagOnPostsArgs>): Prisma.PrismaPromise<Array<HashtagOnPostGetPayload<T>>| Null>;

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
   * Post.replies
   */
  export type Post$repliesArgs = {
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
   * Post.hashtagOnPosts
   */
  export type Post$hashtagOnPostsArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    where?: HashtagOnPostWhereInput
    orderBy?: Enumerable<HashtagOnPostOrderByWithRelationInput>
    cursor?: HashtagOnPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HashtagOnPostScalarFieldEnum>
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
    replyMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    replyMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    replyMessage: number
    createdAt: number
    updatedAt: number
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
    replyMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    replyMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    replyMessage?: true
    createdAt?: true
    updatedAt?: true
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
    replyMessage: string
    createdAt: Date
    updatedAt: Date
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
    post?: boolean | PostArgs
    postId?: boolean
    userReply?: boolean | UserArgs
    userId?: boolean
    replyMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type ReplyInclude = {
    post?: boolean | PostArgs
    userReply?: boolean | UserArgs
  }

  export type ReplyGetPayload<S extends boolean | null | undefined | ReplyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Reply :
    S extends undefined ? never :
    S extends { include: any } & (ReplyArgs | ReplyFindManyArgs)
    ? Reply  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? PostGetPayload<S['include'][P]> :
        P extends 'userReply' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ReplyArgs | ReplyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? PostGetPayload<S['select'][P]> :
        P extends 'userReply' ? UserGetPayload<S['select'][P]> :  P extends keyof Reply ? Reply[P] : never
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

    post<T extends PostArgs= {}>(args?: Subset<T, PostArgs>): Prisma__PostClient<PostGetPayload<T> | Null>;

    userReply<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

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
   * Model Hashtag
   */


  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  export type HashtagAvgAggregateOutputType = {
    id: number | null
  }

  export type HashtagSumAggregateOutputType = {
    id: number | null
  }

  export type HashtagMinAggregateOutputType = {
    id: number | null
    topic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HashtagMaxAggregateOutputType = {
    id: number | null
    topic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HashtagCountAggregateOutputType = {
    id: number
    topic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HashtagAvgAggregateInputType = {
    id?: true
  }

  export type HashtagSumAggregateInputType = {
    id?: true
  }

  export type HashtagMinAggregateInputType = {
    id?: true
    topic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HashtagMaxAggregateInputType = {
    id?: true
    topic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HashtagCountAggregateInputType = {
    id?: true
    topic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HashtagAggregateArgs = {
    /**
     * Filter which Hashtag to aggregate.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: Enumerable<HashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hashtags
    **/
    _count?: true | HashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashtagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashtagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagMaxAggregateInputType
  }

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>
  }




  export type HashtagGroupByArgs = {
    where?: HashtagWhereInput
    orderBy?: Enumerable<HashtagOrderByWithAggregationInput>
    by: HashtagScalarFieldEnum[]
    having?: HashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagCountAggregateInputType | true
    _avg?: HashtagAvgAggregateInputType
    _sum?: HashtagSumAggregateInputType
    _min?: HashtagMinAggregateInputType
    _max?: HashtagMaxAggregateInputType
  }


  export type HashtagGroupByOutputType = {
    id: number
    topic: string
    createdAt: Date
    updatedAt: Date
    _count: HashtagCountAggregateOutputType | null
    _avg: HashtagAvgAggregateOutputType | null
    _sum: HashtagSumAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  type GetHashtagGroupByPayload<T extends HashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
        }
      >
    >


  export type HashtagSelect = {
    id?: boolean
    topic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hashtagOnPosts?: boolean | Hashtag$hashtagOnPostsArgs
    _count?: boolean | HashtagCountOutputTypeArgs
  }


  export type HashtagInclude = {
    hashtagOnPosts?: boolean | Hashtag$hashtagOnPostsArgs
    _count?: boolean | HashtagCountOutputTypeArgs
  }

  export type HashtagGetPayload<S extends boolean | null | undefined | HashtagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Hashtag :
    S extends undefined ? never :
    S extends { include: any } & (HashtagArgs | HashtagFindManyArgs)
    ? Hashtag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'hashtagOnPosts' ? Array < HashtagOnPostGetPayload<S['include'][P]>>  :
        P extends '_count' ? HashtagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HashtagArgs | HashtagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'hashtagOnPosts' ? Array < HashtagOnPostGetPayload<S['select'][P]>>  :
        P extends '_count' ? HashtagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Hashtag ? Hashtag[P] : never
  } 
      : Hashtag


  type HashtagCountArgs = 
    Omit<HashtagFindManyArgs, 'select' | 'include'> & {
      select?: HashtagCountAggregateInputType | true
    }

  export interface HashtagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {HashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HashtagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HashtagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Hashtag'> extends True ? Prisma__HashtagClient<HashtagGetPayload<T>> : Prisma__HashtagClient<HashtagGetPayload<T> | null, null>

    /**
     * Find one Hashtag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HashtagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HashtagFindUniqueOrThrowArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HashtagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HashtagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Hashtag'> extends True ? Prisma__HashtagClient<HashtagGetPayload<T>> : Prisma__HashtagClient<HashtagGetPayload<T> | null, null>

    /**
     * Find the first Hashtag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HashtagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HashtagFindFirstOrThrowArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagWithIdOnly = await prisma.hashtag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HashtagFindManyArgs>(
      args?: SelectSubset<T, HashtagFindManyArgs>
    ): Prisma.PrismaPromise<Array<HashtagGetPayload<T>>>

    /**
     * Create a Hashtag.
     * @param {HashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     * 
    **/
    create<T extends HashtagCreateArgs>(
      args: SelectSubset<T, HashtagCreateArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Create many Hashtags.
     *     @param {HashtagCreateManyArgs} args - Arguments to create many Hashtags.
     *     @example
     *     // Create many Hashtags
     *     const hashtag = await prisma.hashtag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HashtagCreateManyArgs>(
      args?: SelectSubset<T, HashtagCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hashtag.
     * @param {HashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     * 
    **/
    delete<T extends HashtagDeleteArgs>(
      args: SelectSubset<T, HashtagDeleteArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Update one Hashtag.
     * @param {HashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HashtagUpdateArgs>(
      args: SelectSubset<T, HashtagUpdateArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Delete zero or more Hashtags.
     * @param {HashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HashtagDeleteManyArgs>(
      args?: SelectSubset<T, HashtagDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HashtagUpdateManyArgs>(
      args: SelectSubset<T, HashtagUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hashtag.
     * @param {HashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
    **/
    upsert<T extends HashtagUpsertArgs>(
      args: SelectSubset<T, HashtagUpsertArgs>
    ): Prisma__HashtagClient<HashtagGetPayload<T>>

    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends HashtagCountArgs>(
      args?: Subset<T, HashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HashtagAggregateArgs>(args: Subset<T, HashtagAggregateArgs>): Prisma.PrismaPromise<GetHashtagAggregateType<T>>

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagGroupByArgs} args - Group by arguments.
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
      T extends HashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagGroupByArgs['orderBy'] }
        : { orderBy?: HashtagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HashtagClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    hashtagOnPosts<T extends Hashtag$hashtagOnPostsArgs= {}>(args?: Subset<T, Hashtag$hashtagOnPostsArgs>): Prisma.PrismaPromise<Array<HashtagOnPostGetPayload<T>>| Null>;

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
   * Hashtag base type for findUnique actions
   */
  export type HashtagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findUnique
   */
  export interface HashtagFindUniqueArgs extends HashtagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Hashtag findUniqueOrThrow
   */
  export type HashtagFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }


  /**
   * Hashtag base type for findFirst actions
   */
  export type HashtagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: Enumerable<HashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: Enumerable<HashtagScalarFieldEnum>
  }

  /**
   * Hashtag findFirst
   */
  export interface HashtagFindFirstArgs extends HashtagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Hashtag findFirstOrThrow
   */
  export type HashtagFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: Enumerable<HashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: Enumerable<HashtagScalarFieldEnum>
  }


  /**
   * Hashtag findMany
   */
  export type HashtagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter, which Hashtags to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: Enumerable<HashtagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    distinct?: Enumerable<HashtagScalarFieldEnum>
  }


  /**
   * Hashtag create
   */
  export type HashtagCreateArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * The data needed to create a Hashtag.
     */
    data: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
  }


  /**
   * Hashtag createMany
   */
  export type HashtagCreateManyArgs = {
    /**
     * The data used to create many Hashtags.
     */
    data: Enumerable<HashtagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Hashtag update
   */
  export type HashtagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * The data needed to update a Hashtag.
     */
    data: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
    /**
     * Choose, which Hashtag to update.
     */
    where: HashtagWhereUniqueInput
  }


  /**
   * Hashtag updateMany
   */
  export type HashtagUpdateManyArgs = {
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
  }


  /**
   * Hashtag upsert
   */
  export type HashtagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * The filter to search for the Hashtag to update in case it exists.
     */
    where: HashtagWhereUniqueInput
    /**
     * In case the Hashtag found by the `where` argument doesn't exist, create a new Hashtag with this data.
     */
    create: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
    /**
     * In case the Hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
  }


  /**
   * Hashtag delete
   */
  export type HashtagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
    /**
     * Filter which Hashtag to delete.
     */
    where: HashtagWhereUniqueInput
  }


  /**
   * Hashtag deleteMany
   */
  export type HashtagDeleteManyArgs = {
    /**
     * Filter which Hashtags to delete
     */
    where?: HashtagWhereInput
  }


  /**
   * Hashtag.hashtagOnPosts
   */
  export type Hashtag$hashtagOnPostsArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    where?: HashtagOnPostWhereInput
    orderBy?: Enumerable<HashtagOnPostOrderByWithRelationInput>
    cursor?: HashtagOnPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HashtagOnPostScalarFieldEnum>
  }


  /**
   * Hashtag without action
   */
  export type HashtagArgs = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagInclude | null
  }



  /**
   * Model HashtagOnPost
   */


  export type AggregateHashtagOnPost = {
    _count: HashtagOnPostCountAggregateOutputType | null
    _avg: HashtagOnPostAvgAggregateOutputType | null
    _sum: HashtagOnPostSumAggregateOutputType | null
    _min: HashtagOnPostMinAggregateOutputType | null
    _max: HashtagOnPostMaxAggregateOutputType | null
  }

  export type HashtagOnPostAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
  }

  export type HashtagOnPostSumAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
  }

  export type HashtagOnPostMinAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HashtagOnPostMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    hashtagId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HashtagOnPostCountAggregateOutputType = {
    id: number
    postId: number
    hashtagId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HashtagOnPostAvgAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
  }

  export type HashtagOnPostSumAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
  }

  export type HashtagOnPostMinAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HashtagOnPostMaxAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HashtagOnPostCountAggregateInputType = {
    id?: true
    postId?: true
    hashtagId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HashtagOnPostAggregateArgs = {
    /**
     * Filter which HashtagOnPost to aggregate.
     */
    where?: HashtagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashtagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashtagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashtagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashtagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HashtagOnPosts
    **/
    _count?: true | HashtagOnPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HashtagOnPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HashtagOnPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagOnPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagOnPostMaxAggregateInputType
  }

  export type GetHashtagOnPostAggregateType<T extends HashtagOnPostAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtagOnPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtagOnPost[P]>
      : GetScalarType<T[P], AggregateHashtagOnPost[P]>
  }




  export type HashtagOnPostGroupByArgs = {
    where?: HashtagOnPostWhereInput
    orderBy?: Enumerable<HashtagOnPostOrderByWithAggregationInput>
    by: HashtagOnPostScalarFieldEnum[]
    having?: HashtagOnPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagOnPostCountAggregateInputType | true
    _avg?: HashtagOnPostAvgAggregateInputType
    _sum?: HashtagOnPostSumAggregateInputType
    _min?: HashtagOnPostMinAggregateInputType
    _max?: HashtagOnPostMaxAggregateInputType
  }


  export type HashtagOnPostGroupByOutputType = {
    id: number
    postId: number
    hashtagId: number
    createdAt: Date
    updatedAt: Date
    _count: HashtagOnPostCountAggregateOutputType | null
    _avg: HashtagOnPostAvgAggregateOutputType | null
    _sum: HashtagOnPostSumAggregateOutputType | null
    _min: HashtagOnPostMinAggregateOutputType | null
    _max: HashtagOnPostMaxAggregateOutputType | null
  }

  type GetHashtagOnPostGroupByPayload<T extends HashtagOnPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HashtagOnPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagOnPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagOnPostGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagOnPostGroupByOutputType[P]>
        }
      >
    >


  export type HashtagOnPostSelect = {
    id?: boolean
    post?: boolean | PostArgs
    postId?: boolean
    hashtag?: boolean | HashtagArgs
    hashtagId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type HashtagOnPostInclude = {
    post?: boolean | PostArgs
    hashtag?: boolean | HashtagArgs
  }

  export type HashtagOnPostGetPayload<S extends boolean | null | undefined | HashtagOnPostArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? HashtagOnPost :
    S extends undefined ? never :
    S extends { include: any } & (HashtagOnPostArgs | HashtagOnPostFindManyArgs)
    ? HashtagOnPost  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'post' ? PostGetPayload<S['include'][P]> :
        P extends 'hashtag' ? HashtagGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (HashtagOnPostArgs | HashtagOnPostFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'post' ? PostGetPayload<S['select'][P]> :
        P extends 'hashtag' ? HashtagGetPayload<S['select'][P]> :  P extends keyof HashtagOnPost ? HashtagOnPost[P] : never
  } 
      : HashtagOnPost


  type HashtagOnPostCountArgs = 
    Omit<HashtagOnPostFindManyArgs, 'select' | 'include'> & {
      select?: HashtagOnPostCountAggregateInputType | true
    }

  export interface HashtagOnPostDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one HashtagOnPost that matches the filter.
     * @param {HashtagOnPostFindUniqueArgs} args - Arguments to find a HashtagOnPost
     * @example
     * // Get one HashtagOnPost
     * const hashtagOnPost = await prisma.hashtagOnPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HashtagOnPostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HashtagOnPostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HashtagOnPost'> extends True ? Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T>> : Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T> | null, null>

    /**
     * Find one HashtagOnPost that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HashtagOnPostFindUniqueOrThrowArgs} args - Arguments to find a HashtagOnPost
     * @example
     * // Get one HashtagOnPost
     * const hashtagOnPost = await prisma.hashtagOnPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HashtagOnPostFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, HashtagOnPostFindUniqueOrThrowArgs>
    ): Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T>>

    /**
     * Find the first HashtagOnPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagOnPostFindFirstArgs} args - Arguments to find a HashtagOnPost
     * @example
     * // Get one HashtagOnPost
     * const hashtagOnPost = await prisma.hashtagOnPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HashtagOnPostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HashtagOnPostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HashtagOnPost'> extends True ? Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T>> : Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T> | null, null>

    /**
     * Find the first HashtagOnPost that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagOnPostFindFirstOrThrowArgs} args - Arguments to find a HashtagOnPost
     * @example
     * // Get one HashtagOnPost
     * const hashtagOnPost = await prisma.hashtagOnPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HashtagOnPostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, HashtagOnPostFindFirstOrThrowArgs>
    ): Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T>>

    /**
     * Find zero or more HashtagOnPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagOnPostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HashtagOnPosts
     * const hashtagOnPosts = await prisma.hashtagOnPost.findMany()
     * 
     * // Get first 10 HashtagOnPosts
     * const hashtagOnPosts = await prisma.hashtagOnPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hashtagOnPostWithIdOnly = await prisma.hashtagOnPost.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HashtagOnPostFindManyArgs>(
      args?: SelectSubset<T, HashtagOnPostFindManyArgs>
    ): Prisma.PrismaPromise<Array<HashtagOnPostGetPayload<T>>>

    /**
     * Create a HashtagOnPost.
     * @param {HashtagOnPostCreateArgs} args - Arguments to create a HashtagOnPost.
     * @example
     * // Create one HashtagOnPost
     * const HashtagOnPost = await prisma.hashtagOnPost.create({
     *   data: {
     *     // ... data to create a HashtagOnPost
     *   }
     * })
     * 
    **/
    create<T extends HashtagOnPostCreateArgs>(
      args: SelectSubset<T, HashtagOnPostCreateArgs>
    ): Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T>>

    /**
     * Create many HashtagOnPosts.
     *     @param {HashtagOnPostCreateManyArgs} args - Arguments to create many HashtagOnPosts.
     *     @example
     *     // Create many HashtagOnPosts
     *     const hashtagOnPost = await prisma.hashtagOnPost.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HashtagOnPostCreateManyArgs>(
      args?: SelectSubset<T, HashtagOnPostCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HashtagOnPost.
     * @param {HashtagOnPostDeleteArgs} args - Arguments to delete one HashtagOnPost.
     * @example
     * // Delete one HashtagOnPost
     * const HashtagOnPost = await prisma.hashtagOnPost.delete({
     *   where: {
     *     // ... filter to delete one HashtagOnPost
     *   }
     * })
     * 
    **/
    delete<T extends HashtagOnPostDeleteArgs>(
      args: SelectSubset<T, HashtagOnPostDeleteArgs>
    ): Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T>>

    /**
     * Update one HashtagOnPost.
     * @param {HashtagOnPostUpdateArgs} args - Arguments to update one HashtagOnPost.
     * @example
     * // Update one HashtagOnPost
     * const hashtagOnPost = await prisma.hashtagOnPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HashtagOnPostUpdateArgs>(
      args: SelectSubset<T, HashtagOnPostUpdateArgs>
    ): Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T>>

    /**
     * Delete zero or more HashtagOnPosts.
     * @param {HashtagOnPostDeleteManyArgs} args - Arguments to filter HashtagOnPosts to delete.
     * @example
     * // Delete a few HashtagOnPosts
     * const { count } = await prisma.hashtagOnPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HashtagOnPostDeleteManyArgs>(
      args?: SelectSubset<T, HashtagOnPostDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HashtagOnPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagOnPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HashtagOnPosts
     * const hashtagOnPost = await prisma.hashtagOnPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HashtagOnPostUpdateManyArgs>(
      args: SelectSubset<T, HashtagOnPostUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HashtagOnPost.
     * @param {HashtagOnPostUpsertArgs} args - Arguments to update or create a HashtagOnPost.
     * @example
     * // Update or create a HashtagOnPost
     * const hashtagOnPost = await prisma.hashtagOnPost.upsert({
     *   create: {
     *     // ... data to create a HashtagOnPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HashtagOnPost we want to update
     *   }
     * })
    **/
    upsert<T extends HashtagOnPostUpsertArgs>(
      args: SelectSubset<T, HashtagOnPostUpsertArgs>
    ): Prisma__HashtagOnPostClient<HashtagOnPostGetPayload<T>>

    /**
     * Count the number of HashtagOnPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagOnPostCountArgs} args - Arguments to filter HashtagOnPosts to count.
     * @example
     * // Count the number of HashtagOnPosts
     * const count = await prisma.hashtagOnPost.count({
     *   where: {
     *     // ... the filter for the HashtagOnPosts we want to count
     *   }
     * })
    **/
    count<T extends HashtagOnPostCountArgs>(
      args?: Subset<T, HashtagOnPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagOnPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HashtagOnPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagOnPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HashtagOnPostAggregateArgs>(args: Subset<T, HashtagOnPostAggregateArgs>): Prisma.PrismaPromise<GetHashtagOnPostAggregateType<T>>

    /**
     * Group by HashtagOnPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagOnPostGroupByArgs} args - Group by arguments.
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
      T extends HashtagOnPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagOnPostGroupByArgs['orderBy'] }
        : { orderBy?: HashtagOnPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HashtagOnPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagOnPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HashtagOnPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HashtagOnPostClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    hashtag<T extends HashtagArgs= {}>(args?: Subset<T, HashtagArgs>): Prisma__HashtagClient<HashtagGetPayload<T> | Null>;

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
   * HashtagOnPost base type for findUnique actions
   */
  export type HashtagOnPostFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * Filter, which HashtagOnPost to fetch.
     */
    where: HashtagOnPostWhereUniqueInput
  }

  /**
   * HashtagOnPost findUnique
   */
  export interface HashtagOnPostFindUniqueArgs extends HashtagOnPostFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HashtagOnPost findUniqueOrThrow
   */
  export type HashtagOnPostFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * Filter, which HashtagOnPost to fetch.
     */
    where: HashtagOnPostWhereUniqueInput
  }


  /**
   * HashtagOnPost base type for findFirst actions
   */
  export type HashtagOnPostFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * Filter, which HashtagOnPost to fetch.
     */
    where?: HashtagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashtagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashtagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HashtagOnPosts.
     */
    cursor?: HashtagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashtagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashtagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HashtagOnPosts.
     */
    distinct?: Enumerable<HashtagOnPostScalarFieldEnum>
  }

  /**
   * HashtagOnPost findFirst
   */
  export interface HashtagOnPostFindFirstArgs extends HashtagOnPostFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HashtagOnPost findFirstOrThrow
   */
  export type HashtagOnPostFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * Filter, which HashtagOnPost to fetch.
     */
    where?: HashtagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashtagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashtagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HashtagOnPosts.
     */
    cursor?: HashtagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashtagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashtagOnPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HashtagOnPosts.
     */
    distinct?: Enumerable<HashtagOnPostScalarFieldEnum>
  }


  /**
   * HashtagOnPost findMany
   */
  export type HashtagOnPostFindManyArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * Filter, which HashtagOnPosts to fetch.
     */
    where?: HashtagOnPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HashtagOnPosts to fetch.
     */
    orderBy?: Enumerable<HashtagOnPostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HashtagOnPosts.
     */
    cursor?: HashtagOnPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HashtagOnPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HashtagOnPosts.
     */
    skip?: number
    distinct?: Enumerable<HashtagOnPostScalarFieldEnum>
  }


  /**
   * HashtagOnPost create
   */
  export type HashtagOnPostCreateArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * The data needed to create a HashtagOnPost.
     */
    data: XOR<HashtagOnPostCreateInput, HashtagOnPostUncheckedCreateInput>
  }


  /**
   * HashtagOnPost createMany
   */
  export type HashtagOnPostCreateManyArgs = {
    /**
     * The data used to create many HashtagOnPosts.
     */
    data: Enumerable<HashtagOnPostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HashtagOnPost update
   */
  export type HashtagOnPostUpdateArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * The data needed to update a HashtagOnPost.
     */
    data: XOR<HashtagOnPostUpdateInput, HashtagOnPostUncheckedUpdateInput>
    /**
     * Choose, which HashtagOnPost to update.
     */
    where: HashtagOnPostWhereUniqueInput
  }


  /**
   * HashtagOnPost updateMany
   */
  export type HashtagOnPostUpdateManyArgs = {
    /**
     * The data used to update HashtagOnPosts.
     */
    data: XOR<HashtagOnPostUpdateManyMutationInput, HashtagOnPostUncheckedUpdateManyInput>
    /**
     * Filter which HashtagOnPosts to update
     */
    where?: HashtagOnPostWhereInput
  }


  /**
   * HashtagOnPost upsert
   */
  export type HashtagOnPostUpsertArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * The filter to search for the HashtagOnPost to update in case it exists.
     */
    where: HashtagOnPostWhereUniqueInput
    /**
     * In case the HashtagOnPost found by the `where` argument doesn't exist, create a new HashtagOnPost with this data.
     */
    create: XOR<HashtagOnPostCreateInput, HashtagOnPostUncheckedCreateInput>
    /**
     * In case the HashtagOnPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagOnPostUpdateInput, HashtagOnPostUncheckedUpdateInput>
  }


  /**
   * HashtagOnPost delete
   */
  export type HashtagOnPostDeleteArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
    /**
     * Filter which HashtagOnPost to delete.
     */
    where: HashtagOnPostWhereUniqueInput
  }


  /**
   * HashtagOnPost deleteMany
   */
  export type HashtagOnPostDeleteManyArgs = {
    /**
     * Filter which HashtagOnPosts to delete
     */
    where?: HashtagOnPostWhereInput
  }


  /**
   * HashtagOnPost without action
   */
  export type HashtagOnPostArgs = {
    /**
     * Select specific fields to fetch from the HashtagOnPost
     */
    select?: HashtagOnPostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HashtagOnPostInclude | null
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
    fromId: number | null
    toId: number | null
  }

  export type DirectMessageSumAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
  }

  export type DirectMessageMinAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMessageMaxAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMessageCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectMessageAvgAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type DirectMessageSumAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type DirectMessageMinAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMessageMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMessageCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    message?: true
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
    fromId: number
    toId: number
    message: string
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
    from?: boolean | UserArgs
    fromId?: boolean
    to?: boolean | UserArgs
    toId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type DirectMessageInclude = {
    from?: boolean | UserArgs
    to?: boolean | UserArgs
  }

  export type DirectMessageGetPayload<S extends boolean | null | undefined | DirectMessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DirectMessage :
    S extends undefined ? never :
    S extends { include: any } & (DirectMessageArgs | DirectMessageFindManyArgs)
    ? DirectMessage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'from' ? UserGetPayload<S['include'][P]> :
        P extends 'to' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DirectMessageArgs | DirectMessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'from' ? UserGetPayload<S['select'][P]> :
        P extends 'to' ? UserGetPayload<S['select'][P]> :  P extends keyof DirectMessage ? DirectMessage[P] : never
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

  export const DirectMessageScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectMessageScalarFieldEnum = (typeof DirectMessageScalarFieldEnum)[keyof typeof DirectMessageScalarFieldEnum]


  export const HashtagOnPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    hashtagId: 'hashtagId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HashtagOnPostScalarFieldEnum = (typeof HashtagOnPostScalarFieldEnum)[keyof typeof HashtagOnPostScalarFieldEnum]


  export const HashtagScalarFieldEnum: {
    id: 'id',
    topic: 'topic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    detail: 'detail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    replyMessage: 'replyMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRelationScalarFieldEnum = (typeof UserRelationScalarFieldEnum)[keyof typeof UserRelationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    username?: StringFilter | string
    image?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    posts?: PostListRelationFilter
    replies?: ReplyListRelationFilter
    directMsgFrom?: DirectMessageListRelationFilter
    directMsgTo?: DirectMessageListRelationFilter
    followings?: UserRelationListRelationFilter
    followers?: UserRelationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    replies?: ReplyOrderByRelationAggregateInput
    directMsgFrom?: DirectMessageOrderByRelationAggregateInput
    directMsgTo?: DirectMessageOrderByRelationAggregateInput
    followings?: UserRelationOrderByRelationAggregateInput
    followers?: UserRelationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrder
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
    username?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
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
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserRelationOrderByWithRelationInput = {
    id?: SortOrder
    from?: UserOrderByWithRelationInput
    fromId?: SortOrder
    to?: UserOrderByWithRelationInput
    toId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationWhereUniqueInput = {
    id?: number
  }

  export type UserRelationOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
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
    fromId?: IntWithAggregatesFilter | number
    toId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    detail?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    replies?: ReplyListRelationFilter
    hashtagOnPosts?: HashtagOnPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    replies?: ReplyOrderByRelationAggregateInput
    hashtagOnPosts?: HashtagOnPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    userId?: IntWithAggregatesFilter | number
    detail?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ReplyWhereInput = {
    AND?: Enumerable<ReplyWhereInput>
    OR?: Enumerable<ReplyWhereInput>
    NOT?: Enumerable<ReplyWhereInput>
    id?: IntFilter | number
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    userReply?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    replyMessage?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    post?: PostOrderByWithRelationInput
    postId?: SortOrder
    userReply?: UserOrderByWithRelationInput
    userId?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReplyWhereUniqueInput = {
    id?: number
  }

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    replyMessage?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HashtagWhereInput = {
    AND?: Enumerable<HashtagWhereInput>
    OR?: Enumerable<HashtagWhereInput>
    NOT?: Enumerable<HashtagWhereInput>
    id?: IntFilter | number
    topic?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    hashtagOnPosts?: HashtagOnPostListRelationFilter
  }

  export type HashtagOrderByWithRelationInput = {
    id?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hashtagOnPosts?: HashtagOnPostOrderByRelationAggregateInput
  }

  export type HashtagWhereUniqueInput = {
    id?: number
    topic?: string
  }

  export type HashtagOrderByWithAggregationInput = {
    id?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HashtagCountOrderByAggregateInput
    _avg?: HashtagAvgOrderByAggregateInput
    _max?: HashtagMaxOrderByAggregateInput
    _min?: HashtagMinOrderByAggregateInput
    _sum?: HashtagSumOrderByAggregateInput
  }

  export type HashtagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HashtagScalarWhereWithAggregatesInput>
    OR?: Enumerable<HashtagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HashtagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    topic?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type HashtagOnPostWhereInput = {
    AND?: Enumerable<HashtagOnPostWhereInput>
    OR?: Enumerable<HashtagOnPostWhereInput>
    NOT?: Enumerable<HashtagOnPostWhereInput>
    id?: IntFilter | number
    post?: XOR<PostRelationFilter, PostWhereInput>
    postId?: IntFilter | number
    hashtag?: XOR<HashtagRelationFilter, HashtagWhereInput>
    hashtagId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type HashtagOnPostOrderByWithRelationInput = {
    id?: SortOrder
    post?: PostOrderByWithRelationInput
    postId?: SortOrder
    hashtag?: HashtagOrderByWithRelationInput
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagOnPostWhereUniqueInput = {
    id?: number
  }

  export type HashtagOnPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HashtagOnPostCountOrderByAggregateInput
    _avg?: HashtagOnPostAvgOrderByAggregateInput
    _max?: HashtagOnPostMaxOrderByAggregateInput
    _min?: HashtagOnPostMinOrderByAggregateInput
    _sum?: HashtagOnPostSumOrderByAggregateInput
  }

  export type HashtagOnPostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HashtagOnPostScalarWhereWithAggregatesInput>
    OR?: Enumerable<HashtagOnPostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HashtagOnPostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    postId?: IntWithAggregatesFilter | number
    hashtagId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DirectMessageWhereInput = {
    AND?: Enumerable<DirectMessageWhereInput>
    OR?: Enumerable<DirectMessageWhereInput>
    NOT?: Enumerable<DirectMessageWhereInput>
    id?: IntFilter | number
    from?: XOR<UserRelationFilter, UserWhereInput>
    fromId?: IntFilter | number
    to?: XOR<UserRelationFilter, UserWhereInput>
    toId?: IntFilter | number
    message?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMessageOrderByWithRelationInput = {
    id?: SortOrder
    from?: UserOrderByWithRelationInput
    fromId?: SortOrder
    to?: UserOrderByWithRelationInput
    toId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageWhereUniqueInput = {
    id?: number
  }

  export type DirectMessageOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    message?: SortOrder
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
    fromId?: IntWithAggregatesFilter | number
    toId?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    replies?: ReplyCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageCreateNestedManyWithoutToInput
    followings?: UserRelationCreateNestedManyWithoutFromInput
    followers?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageUncheckedCreateNestedManyWithoutToInput
    followings?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    followers?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    replies?: ReplyUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUpdateManyWithoutToNestedInput
    followings?: UserRelationUpdateManyWithoutFromNestedInput
    followers?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUncheckedUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUncheckedUpdateManyWithoutToNestedInput
    followings?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    followers?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateInput = {
    from: UserCreateNestedOneWithoutFollowingsInput
    to: UserCreateNestedOneWithoutFollowersInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUncheckedCreateInput = {
    id?: number
    fromId: number
    toId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUpdateInput = {
    from?: UserUpdateOneRequiredWithoutFollowingsNestedInput
    to?: UserUpdateOneRequiredWithoutFollowersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationCreateManyInput = {
    id?: number
    fromId: number
    toId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    user: UserCreateNestedOneWithoutPostsInput
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyCreateNestedManyWithoutPostInput
    hashtagOnPosts?: HashtagOnPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId: number
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutPostInput
    hashtagOnPosts?: HashtagOnPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutPostNestedInput
    hashtagOnPosts?: HashtagOnPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutPostNestedInput
    hashtagOnPosts?: HashtagOnPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    userId: number
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateInput = {
    post: PostCreateNestedOneWithoutRepliesInput
    userReply: UserCreateNestedOneWithoutRepliesInput
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUncheckedCreateInput = {
    id?: number
    postId: number
    userId: number
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUpdateInput = {
    post?: PostUpdateOneRequiredWithoutRepliesNestedInput
    userReply?: UserUpdateOneRequiredWithoutRepliesNestedInput
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyInput = {
    id?: number
    postId: number
    userId: number
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUpdateManyMutationInput = {
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagCreateInput = {
    topic: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtagOnPosts?: HashtagOnPostCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUncheckedCreateInput = {
    id?: number
    topic: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtagOnPosts?: HashtagOnPostUncheckedCreateNestedManyWithoutHashtagInput
  }

  export type HashtagUpdateInput = {
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtagOnPosts?: HashtagOnPostUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtagOnPosts?: HashtagOnPostUncheckedUpdateManyWithoutHashtagNestedInput
  }

  export type HashtagCreateManyInput = {
    id?: number
    topic: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagUpdateManyMutationInput = {
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostCreateInput = {
    post: PostCreateNestedOneWithoutHashtagOnPostsInput
    hashtag: HashtagCreateNestedOneWithoutHashtagOnPostsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostUncheckedCreateInput = {
    id?: number
    postId: number
    hashtagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostUpdateInput = {
    post?: PostUpdateOneRequiredWithoutHashtagOnPostsNestedInput
    hashtag?: HashtagUpdateOneRequiredWithoutHashtagOnPostsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostCreateManyInput = {
    id?: number
    postId: number
    hashtagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageCreateInput = {
    from: UserCreateNestedOneWithoutDirectMsgFromInput
    to: UserCreateNestedOneWithoutDirectMsgToInput
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUncheckedCreateInput = {
    id?: number
    fromId: number
    toId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUpdateInput = {
    from?: UserUpdateOneRequiredWithoutDirectMsgFromNestedInput
    to?: UserUpdateOneRequiredWithoutDirectMsgToNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageCreateManyInput = {
    id?: number
    fromId: number
    toId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
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

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type DirectMessageListRelationFilter = {
    every?: DirectMessageWhereInput
    some?: DirectMessageWhereInput
    none?: DirectMessageWhereInput
  }

  export type UserRelationListRelationFilter = {
    every?: UserRelationWhereInput
    some?: UserRelationWhereInput
    none?: UserRelationWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserRelationCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationSumOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type HashtagOnPostListRelationFilter = {
    every?: HashtagOnPostWhereInput
    some?: HashtagOnPostWhereInput
    none?: HashtagOnPostWhereInput
  }

  export type HashtagOnPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    replyMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReplySumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type HashtagCountOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashtagMaxOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagMinOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HashtagRelationFilter = {
    is?: HashtagWhereInput
    isNot?: HashtagWhereInput
  }

  export type HashtagOnPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagOnPostAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type HashtagOnPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagOnPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HashtagOnPostSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    hashtagId?: SortOrder
  }

  export type DirectMessageCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type DirectMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageSumOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type ReplyCreateNestedManyWithoutUserReplyInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUserReplyInput>, Enumerable<ReplyUncheckedCreateWithoutUserReplyInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUserReplyInput>
    createMany?: ReplyCreateManyUserReplyInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type DirectMessageCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutFromInput>, Enumerable<DirectMessageUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutFromInput>
    createMany?: DirectMessageCreateManyFromInputEnvelope
    connect?: Enumerable<DirectMessageWhereUniqueInput>
  }

  export type DirectMessageCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutToInput>, Enumerable<DirectMessageUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutToInput>
    createMany?: DirectMessageCreateManyToInputEnvelope
    connect?: Enumerable<DirectMessageWhereUniqueInput>
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

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PostCreateWithoutUserInput>, Enumerable<PostUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutUserInput>
    createMany?: PostCreateManyUserInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type ReplyUncheckedCreateNestedManyWithoutUserReplyInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUserReplyInput>, Enumerable<ReplyUncheckedCreateWithoutUserReplyInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUserReplyInput>
    createMany?: ReplyCreateManyUserReplyInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type DirectMessageUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutFromInput>, Enumerable<DirectMessageUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutFromInput>
    createMany?: DirectMessageCreateManyFromInputEnvelope
    connect?: Enumerable<DirectMessageWhereUniqueInput>
  }

  export type DirectMessageUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutToInput>, Enumerable<DirectMessageUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutToInput>
    createMany?: DirectMessageCreateManyToInputEnvelope
    connect?: Enumerable<DirectMessageWhereUniqueInput>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type ReplyUpdateManyWithoutUserReplyNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUserReplyInput>, Enumerable<ReplyUncheckedCreateWithoutUserReplyInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUserReplyInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutUserReplyInput>
    createMany?: ReplyCreateManyUserReplyInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutUserReplyInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutUserReplyInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type DirectMessageUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutFromInput>, Enumerable<DirectMessageUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<DirectMessageUpsertWithWhereUniqueWithoutFromInput>
    createMany?: DirectMessageCreateManyFromInputEnvelope
    set?: Enumerable<DirectMessageWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageWhereUniqueInput>
    delete?: Enumerable<DirectMessageWhereUniqueInput>
    connect?: Enumerable<DirectMessageWhereUniqueInput>
    update?: Enumerable<DirectMessageUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<DirectMessageUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<DirectMessageScalarWhereInput>
  }

  export type DirectMessageUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutToInput>, Enumerable<DirectMessageUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutToInput>
    upsert?: Enumerable<DirectMessageUpsertWithWhereUniqueWithoutToInput>
    createMany?: DirectMessageCreateManyToInputEnvelope
    set?: Enumerable<DirectMessageWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageWhereUniqueInput>
    delete?: Enumerable<DirectMessageWhereUniqueInput>
    connect?: Enumerable<DirectMessageWhereUniqueInput>
    update?: Enumerable<DirectMessageUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<DirectMessageUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<DirectMessageScalarWhereInput>
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type ReplyUncheckedUpdateManyWithoutUserReplyNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutUserReplyInput>, Enumerable<ReplyUncheckedCreateWithoutUserReplyInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutUserReplyInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutUserReplyInput>
    createMany?: ReplyCreateManyUserReplyInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutUserReplyInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutUserReplyInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type DirectMessageUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutFromInput>, Enumerable<DirectMessageUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<DirectMessageUpsertWithWhereUniqueWithoutFromInput>
    createMany?: DirectMessageCreateManyFromInputEnvelope
    set?: Enumerable<DirectMessageWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageWhereUniqueInput>
    delete?: Enumerable<DirectMessageWhereUniqueInput>
    connect?: Enumerable<DirectMessageWhereUniqueInput>
    update?: Enumerable<DirectMessageUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<DirectMessageUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<DirectMessageScalarWhereInput>
  }

  export type DirectMessageUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<DirectMessageCreateWithoutToInput>, Enumerable<DirectMessageUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<DirectMessageCreateOrConnectWithoutToInput>
    upsert?: Enumerable<DirectMessageUpsertWithWhereUniqueWithoutToInput>
    createMany?: DirectMessageCreateManyToInputEnvelope
    set?: Enumerable<DirectMessageWhereUniqueInput>
    disconnect?: Enumerable<DirectMessageWhereUniqueInput>
    delete?: Enumerable<DirectMessageWhereUniqueInput>
    connect?: Enumerable<DirectMessageWhereUniqueInput>
    update?: Enumerable<DirectMessageUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<DirectMessageUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<DirectMessageScalarWhereInput>
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

  export type UserCreateNestedOneWithoutFollowingsInput = {
    create?: XOR<UserCreateWithoutFollowingsInput, UserUncheckedCreateWithoutFollowingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowingsNestedInput = {
    create?: XOR<UserCreateWithoutFollowingsInput, UserUncheckedCreateWithoutFollowingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingsInput
    upsert?: UserUpsertWithoutFollowingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowingsInput, UserUncheckedUpdateWithoutFollowingsInput>
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostInput>, Enumerable<ReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostInput>
    createMany?: ReplyCreateManyPostInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type HashtagOnPostCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<HashtagOnPostCreateWithoutPostInput>, Enumerable<HashtagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashtagOnPostCreateOrConnectWithoutPostInput>
    createMany?: HashtagOnPostCreateManyPostInputEnvelope
    connect?: Enumerable<HashtagOnPostWhereUniqueInput>
  }

  export type ReplyUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostInput>, Enumerable<ReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostInput>
    createMany?: ReplyCreateManyPostInputEnvelope
    connect?: Enumerable<ReplyWhereUniqueInput>
  }

  export type HashtagOnPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<HashtagOnPostCreateWithoutPostInput>, Enumerable<HashtagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashtagOnPostCreateOrConnectWithoutPostInput>
    createMany?: HashtagOnPostCreateManyPostInputEnvelope
    connect?: Enumerable<HashtagOnPostWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ReplyUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostInput>, Enumerable<ReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutPostInput>
    createMany?: ReplyCreateManyPostInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type HashtagOnPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<HashtagOnPostCreateWithoutPostInput>, Enumerable<HashtagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashtagOnPostCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<HashtagOnPostUpsertWithWhereUniqueWithoutPostInput>
    createMany?: HashtagOnPostCreateManyPostInputEnvelope
    set?: Enumerable<HashtagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashtagOnPostWhereUniqueInput>
    delete?: Enumerable<HashtagOnPostWhereUniqueInput>
    connect?: Enumerable<HashtagOnPostWhereUniqueInput>
    update?: Enumerable<HashtagOnPostUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<HashtagOnPostUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<HashtagOnPostScalarWhereInput>
  }

  export type ReplyUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<ReplyCreateWithoutPostInput>, Enumerable<ReplyUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<ReplyCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<ReplyUpsertWithWhereUniqueWithoutPostInput>
    createMany?: ReplyCreateManyPostInputEnvelope
    set?: Enumerable<ReplyWhereUniqueInput>
    disconnect?: Enumerable<ReplyWhereUniqueInput>
    delete?: Enumerable<ReplyWhereUniqueInput>
    connect?: Enumerable<ReplyWhereUniqueInput>
    update?: Enumerable<ReplyUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<ReplyUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<ReplyScalarWhereInput>
  }

  export type HashtagOnPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<Enumerable<HashtagOnPostCreateWithoutPostInput>, Enumerable<HashtagOnPostUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<HashtagOnPostCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<HashtagOnPostUpsertWithWhereUniqueWithoutPostInput>
    createMany?: HashtagOnPostCreateManyPostInputEnvelope
    set?: Enumerable<HashtagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashtagOnPostWhereUniqueInput>
    delete?: Enumerable<HashtagOnPostWhereUniqueInput>
    connect?: Enumerable<HashtagOnPostWhereUniqueInput>
    update?: Enumerable<HashtagOnPostUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<HashtagOnPostUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<HashtagOnPostScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutRepliesInput = {
    create?: XOR<PostCreateWithoutRepliesInput, PostUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: PostCreateOrConnectWithoutRepliesInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRepliesInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<PostCreateWithoutRepliesInput, PostUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: PostCreateOrConnectWithoutRepliesInput
    upsert?: PostUpsertWithoutRepliesInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutRepliesInput, PostUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    upsert?: UserUpsertWithoutRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type HashtagOnPostCreateNestedManyWithoutHashtagInput = {
    create?: XOR<Enumerable<HashtagOnPostCreateWithoutHashtagInput>, Enumerable<HashtagOnPostUncheckedCreateWithoutHashtagInput>>
    connectOrCreate?: Enumerable<HashtagOnPostCreateOrConnectWithoutHashtagInput>
    createMany?: HashtagOnPostCreateManyHashtagInputEnvelope
    connect?: Enumerable<HashtagOnPostWhereUniqueInput>
  }

  export type HashtagOnPostUncheckedCreateNestedManyWithoutHashtagInput = {
    create?: XOR<Enumerable<HashtagOnPostCreateWithoutHashtagInput>, Enumerable<HashtagOnPostUncheckedCreateWithoutHashtagInput>>
    connectOrCreate?: Enumerable<HashtagOnPostCreateOrConnectWithoutHashtagInput>
    createMany?: HashtagOnPostCreateManyHashtagInputEnvelope
    connect?: Enumerable<HashtagOnPostWhereUniqueInput>
  }

  export type HashtagOnPostUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<Enumerable<HashtagOnPostCreateWithoutHashtagInput>, Enumerable<HashtagOnPostUncheckedCreateWithoutHashtagInput>>
    connectOrCreate?: Enumerable<HashtagOnPostCreateOrConnectWithoutHashtagInput>
    upsert?: Enumerable<HashtagOnPostUpsertWithWhereUniqueWithoutHashtagInput>
    createMany?: HashtagOnPostCreateManyHashtagInputEnvelope
    set?: Enumerable<HashtagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashtagOnPostWhereUniqueInput>
    delete?: Enumerable<HashtagOnPostWhereUniqueInput>
    connect?: Enumerable<HashtagOnPostWhereUniqueInput>
    update?: Enumerable<HashtagOnPostUpdateWithWhereUniqueWithoutHashtagInput>
    updateMany?: Enumerable<HashtagOnPostUpdateManyWithWhereWithoutHashtagInput>
    deleteMany?: Enumerable<HashtagOnPostScalarWhereInput>
  }

  export type HashtagOnPostUncheckedUpdateManyWithoutHashtagNestedInput = {
    create?: XOR<Enumerable<HashtagOnPostCreateWithoutHashtagInput>, Enumerable<HashtagOnPostUncheckedCreateWithoutHashtagInput>>
    connectOrCreate?: Enumerable<HashtagOnPostCreateOrConnectWithoutHashtagInput>
    upsert?: Enumerable<HashtagOnPostUpsertWithWhereUniqueWithoutHashtagInput>
    createMany?: HashtagOnPostCreateManyHashtagInputEnvelope
    set?: Enumerable<HashtagOnPostWhereUniqueInput>
    disconnect?: Enumerable<HashtagOnPostWhereUniqueInput>
    delete?: Enumerable<HashtagOnPostWhereUniqueInput>
    connect?: Enumerable<HashtagOnPostWhereUniqueInput>
    update?: Enumerable<HashtagOnPostUpdateWithWhereUniqueWithoutHashtagInput>
    updateMany?: Enumerable<HashtagOnPostUpdateManyWithWhereWithoutHashtagInput>
    deleteMany?: Enumerable<HashtagOnPostScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutHashtagOnPostsInput = {
    create?: XOR<PostCreateWithoutHashtagOnPostsInput, PostUncheckedCreateWithoutHashtagOnPostsInput>
    connectOrCreate?: PostCreateOrConnectWithoutHashtagOnPostsInput
    connect?: PostWhereUniqueInput
  }

  export type HashtagCreateNestedOneWithoutHashtagOnPostsInput = {
    create?: XOR<HashtagCreateWithoutHashtagOnPostsInput, HashtagUncheckedCreateWithoutHashtagOnPostsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutHashtagOnPostsInput
    connect?: HashtagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutHashtagOnPostsNestedInput = {
    create?: XOR<PostCreateWithoutHashtagOnPostsInput, PostUncheckedCreateWithoutHashtagOnPostsInput>
    connectOrCreate?: PostCreateOrConnectWithoutHashtagOnPostsInput
    upsert?: PostUpsertWithoutHashtagOnPostsInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutHashtagOnPostsInput, PostUncheckedUpdateWithoutHashtagOnPostsInput>
  }

  export type HashtagUpdateOneRequiredWithoutHashtagOnPostsNestedInput = {
    create?: XOR<HashtagCreateWithoutHashtagOnPostsInput, HashtagUncheckedCreateWithoutHashtagOnPostsInput>
    connectOrCreate?: HashtagCreateOrConnectWithoutHashtagOnPostsInput
    upsert?: HashtagUpsertWithoutHashtagOnPostsInput
    connect?: HashtagWhereUniqueInput
    update?: XOR<HashtagUpdateWithoutHashtagOnPostsInput, HashtagUncheckedUpdateWithoutHashtagOnPostsInput>
  }

  export type UserCreateNestedOneWithoutDirectMsgFromInput = {
    create?: XOR<UserCreateWithoutDirectMsgFromInput, UserUncheckedCreateWithoutDirectMsgFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectMsgFromInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDirectMsgToInput = {
    create?: XOR<UserCreateWithoutDirectMsgToInput, UserUncheckedCreateWithoutDirectMsgToInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectMsgToInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDirectMsgFromNestedInput = {
    create?: XOR<UserCreateWithoutDirectMsgFromInput, UserUncheckedCreateWithoutDirectMsgFromInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectMsgFromInput
    upsert?: UserUpsertWithoutDirectMsgFromInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDirectMsgFromInput, UserUncheckedUpdateWithoutDirectMsgFromInput>
  }

  export type UserUpdateOneRequiredWithoutDirectMsgToNestedInput = {
    create?: XOR<UserCreateWithoutDirectMsgToInput, UserUncheckedCreateWithoutDirectMsgToInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectMsgToInput
    upsert?: UserUpsertWithoutDirectMsgToInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutDirectMsgToInput, UserUncheckedUpdateWithoutDirectMsgToInput>
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

  export type PostCreateWithoutUserInput = {
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyCreateNestedManyWithoutPostInput
    hashtagOnPosts?: HashtagOnPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutPostInput
    hashtagOnPosts?: HashtagOnPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: Enumerable<PostCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReplyCreateWithoutUserReplyInput = {
    post: PostCreateNestedOneWithoutRepliesInput
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUncheckedCreateWithoutUserReplyInput = {
    id?: number
    postId: number
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyCreateOrConnectWithoutUserReplyInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutUserReplyInput, ReplyUncheckedCreateWithoutUserReplyInput>
  }

  export type ReplyCreateManyUserReplyInputEnvelope = {
    data: Enumerable<ReplyCreateManyUserReplyInput>
    skipDuplicates?: boolean
  }

  export type DirectMessageCreateWithoutFromInput = {
    to: UserCreateNestedOneWithoutDirectMsgToInput
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUncheckedCreateWithoutFromInput = {
    id?: number
    toId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateOrConnectWithoutFromInput = {
    where: DirectMessageWhereUniqueInput
    create: XOR<DirectMessageCreateWithoutFromInput, DirectMessageUncheckedCreateWithoutFromInput>
  }

  export type DirectMessageCreateManyFromInputEnvelope = {
    data: Enumerable<DirectMessageCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type DirectMessageCreateWithoutToInput = {
    from: UserCreateNestedOneWithoutDirectMsgFromInput
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUncheckedCreateWithoutToInput = {
    id?: number
    fromId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateOrConnectWithoutToInput = {
    where: DirectMessageWhereUniqueInput
    create: XOR<DirectMessageCreateWithoutToInput, DirectMessageUncheckedCreateWithoutToInput>
  }

  export type DirectMessageCreateManyToInputEnvelope = {
    data: Enumerable<DirectMessageCreateManyToInput>
    skipDuplicates?: boolean
  }

  export type UserRelationCreateWithoutFromInput = {
    to: UserCreateNestedOneWithoutFollowersInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUncheckedCreateWithoutFromInput = {
    id?: number
    toId: number
    createdAt?: Date | string
    updatedAt?: Date | string
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
    from: UserCreateNestedOneWithoutFollowingsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationUncheckedCreateWithoutToInput = {
    id?: number
    fromId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationCreateOrConnectWithoutToInput = {
    where: UserRelationWhereUniqueInput
    create: XOR<UserRelationCreateWithoutToInput, UserRelationUncheckedCreateWithoutToInput>
  }

  export type UserRelationCreateManyToInputEnvelope = {
    data: Enumerable<UserRelationCreateManyToInput>
    skipDuplicates?: boolean
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
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    detail?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ReplyUpsertWithWhereUniqueWithoutUserReplyInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutUserReplyInput, ReplyUncheckedUpdateWithoutUserReplyInput>
    create: XOR<ReplyCreateWithoutUserReplyInput, ReplyUncheckedCreateWithoutUserReplyInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutUserReplyInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutUserReplyInput, ReplyUncheckedUpdateWithoutUserReplyInput>
  }

  export type ReplyUpdateManyWithWhereWithoutUserReplyInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutRepliesInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: Enumerable<ReplyScalarWhereInput>
    OR?: Enumerable<ReplyScalarWhereInput>
    NOT?: Enumerable<ReplyScalarWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    userId?: IntFilter | number
    replyMessage?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMessageUpsertWithWhereUniqueWithoutFromInput = {
    where: DirectMessageWhereUniqueInput
    update: XOR<DirectMessageUpdateWithoutFromInput, DirectMessageUncheckedUpdateWithoutFromInput>
    create: XOR<DirectMessageCreateWithoutFromInput, DirectMessageUncheckedCreateWithoutFromInput>
  }

  export type DirectMessageUpdateWithWhereUniqueWithoutFromInput = {
    where: DirectMessageWhereUniqueInput
    data: XOR<DirectMessageUpdateWithoutFromInput, DirectMessageUncheckedUpdateWithoutFromInput>
  }

  export type DirectMessageUpdateManyWithWhereWithoutFromInput = {
    where: DirectMessageScalarWhereInput
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyWithoutDirectMsgFromInput>
  }

  export type DirectMessageScalarWhereInput = {
    AND?: Enumerable<DirectMessageScalarWhereInput>
    OR?: Enumerable<DirectMessageScalarWhereInput>
    NOT?: Enumerable<DirectMessageScalarWhereInput>
    id?: IntFilter | number
    fromId?: IntFilter | number
    toId?: IntFilter | number
    message?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DirectMessageUpsertWithWhereUniqueWithoutToInput = {
    where: DirectMessageWhereUniqueInput
    update: XOR<DirectMessageUpdateWithoutToInput, DirectMessageUncheckedUpdateWithoutToInput>
    create: XOR<DirectMessageCreateWithoutToInput, DirectMessageUncheckedCreateWithoutToInput>
  }

  export type DirectMessageUpdateWithWhereUniqueWithoutToInput = {
    where: DirectMessageWhereUniqueInput
    data: XOR<DirectMessageUpdateWithoutToInput, DirectMessageUncheckedUpdateWithoutToInput>
  }

  export type DirectMessageUpdateManyWithWhereWithoutToInput = {
    where: DirectMessageScalarWhereInput
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyWithoutDirectMsgToInput>
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
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyWithoutFollowingsInput>
  }

  export type UserRelationScalarWhereInput = {
    AND?: Enumerable<UserRelationScalarWhereInput>
    OR?: Enumerable<UserRelationScalarWhereInput>
    NOT?: Enumerable<UserRelationScalarWhereInput>
    id?: IntFilter | number
    fromId?: IntFilter | number
    toId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
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
    data: XOR<UserRelationUpdateManyMutationInput, UserRelationUncheckedUpdateManyWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingsInput = {
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    replies?: ReplyCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageCreateNestedManyWithoutToInput
    followers?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutFollowingsInput = {
    id?: number
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageUncheckedCreateNestedManyWithoutToInput
    followers?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutFollowingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingsInput, UserUncheckedCreateWithoutFollowingsInput>
  }

  export type UserCreateWithoutFollowersInput = {
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    replies?: ReplyCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageCreateNestedManyWithoutToInput
    followings?: UserRelationCreateNestedManyWithoutFromInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageUncheckedCreateNestedManyWithoutToInput
    followings?: UserRelationUncheckedCreateNestedManyWithoutFromInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFollowingsInput = {
    update: XOR<UserUpdateWithoutFollowingsInput, UserUncheckedUpdateWithoutFollowingsInput>
    create: XOR<UserCreateWithoutFollowingsInput, UserUncheckedCreateWithoutFollowingsInput>
  }

  export type UserUpdateWithoutFollowingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    replies?: ReplyUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUpdateManyWithoutToNestedInput
    followers?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUncheckedUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUncheckedUpdateManyWithoutToNestedInput
    followers?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    replies?: ReplyUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUpdateManyWithoutToNestedInput
    followings?: UserRelationUpdateManyWithoutFromNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUncheckedUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUncheckedUpdateManyWithoutToNestedInput
    followings?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageCreateNestedManyWithoutToInput
    followings?: UserRelationCreateNestedManyWithoutFromInput
    followers?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageUncheckedCreateNestedManyWithoutToInput
    followings?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    followers?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ReplyCreateWithoutPostInput = {
    userReply: UserCreateNestedOneWithoutRepliesInput
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUncheckedCreateWithoutPostInput = {
    id?: number
    userId: number
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyCreateOrConnectWithoutPostInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput>
  }

  export type ReplyCreateManyPostInputEnvelope = {
    data: Enumerable<ReplyCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type HashtagOnPostCreateWithoutPostInput = {
    hashtag: HashtagCreateNestedOneWithoutHashtagOnPostsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostUncheckedCreateWithoutPostInput = {
    id?: number
    hashtagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostCreateOrConnectWithoutPostInput = {
    where: HashtagOnPostWhereUniqueInput
    create: XOR<HashtagOnPostCreateWithoutPostInput, HashtagOnPostUncheckedCreateWithoutPostInput>
  }

  export type HashtagOnPostCreateManyPostInputEnvelope = {
    data: Enumerable<HashtagOnPostCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUpdateManyWithoutToNestedInput
    followings?: UserRelationUpdateManyWithoutFromNestedInput
    followers?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUncheckedUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUncheckedUpdateManyWithoutToNestedInput
    followings?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    followers?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type ReplyUpsertWithWhereUniqueWithoutPostInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutPostInput, ReplyUncheckedUpdateWithoutPostInput>
    create: XOR<ReplyCreateWithoutPostInput, ReplyUncheckedCreateWithoutPostInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutPostInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutPostInput, ReplyUncheckedUpdateWithoutPostInput>
  }

  export type ReplyUpdateManyWithWhereWithoutPostInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutRepliesInput>
  }

  export type HashtagOnPostUpsertWithWhereUniqueWithoutPostInput = {
    where: HashtagOnPostWhereUniqueInput
    update: XOR<HashtagOnPostUpdateWithoutPostInput, HashtagOnPostUncheckedUpdateWithoutPostInput>
    create: XOR<HashtagOnPostCreateWithoutPostInput, HashtagOnPostUncheckedCreateWithoutPostInput>
  }

  export type HashtagOnPostUpdateWithWhereUniqueWithoutPostInput = {
    where: HashtagOnPostWhereUniqueInput
    data: XOR<HashtagOnPostUpdateWithoutPostInput, HashtagOnPostUncheckedUpdateWithoutPostInput>
  }

  export type HashtagOnPostUpdateManyWithWhereWithoutPostInput = {
    where: HashtagOnPostScalarWhereInput
    data: XOR<HashtagOnPostUpdateManyMutationInput, HashtagOnPostUncheckedUpdateManyWithoutHashtagOnPostsInput>
  }

  export type HashtagOnPostScalarWhereInput = {
    AND?: Enumerable<HashtagOnPostScalarWhereInput>
    OR?: Enumerable<HashtagOnPostScalarWhereInput>
    NOT?: Enumerable<HashtagOnPostScalarWhereInput>
    id?: IntFilter | number
    postId?: IntFilter | number
    hashtagId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PostCreateWithoutRepliesInput = {
    user: UserCreateNestedOneWithoutPostsInput
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtagOnPosts?: HashtagOnPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutRepliesInput = {
    id?: number
    userId: number
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hashtagOnPosts?: HashtagOnPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutRepliesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutRepliesInput, PostUncheckedCreateWithoutRepliesInput>
  }

  export type UserCreateWithoutRepliesInput = {
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    directMsgFrom?: DirectMessageCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageCreateNestedManyWithoutToInput
    followings?: UserRelationCreateNestedManyWithoutFromInput
    followers?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutRepliesInput = {
    id?: number
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    directMsgFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromInput
    directMsgTo?: DirectMessageUncheckedCreateNestedManyWithoutToInput
    followings?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    followers?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
  }

  export type PostUpsertWithoutRepliesInput = {
    update: XOR<PostUpdateWithoutRepliesInput, PostUncheckedUpdateWithoutRepliesInput>
    create: XOR<PostCreateWithoutRepliesInput, PostUncheckedCreateWithoutRepliesInput>
  }

  export type PostUpdateWithoutRepliesInput = {
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtagOnPosts?: HashtagOnPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtagOnPosts?: HashtagOnPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutRepliesInput = {
    update: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
  }

  export type UserUpdateWithoutRepliesInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    directMsgFrom?: DirectMessageUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUpdateManyWithoutToNestedInput
    followings?: UserRelationUpdateManyWithoutFromNestedInput
    followers?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    directMsgFrom?: DirectMessageUncheckedUpdateManyWithoutFromNestedInput
    directMsgTo?: DirectMessageUncheckedUpdateManyWithoutToNestedInput
    followings?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    followers?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type HashtagOnPostCreateWithoutHashtagInput = {
    post: PostCreateNestedOneWithoutHashtagOnPostsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostUncheckedCreateWithoutHashtagInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostCreateOrConnectWithoutHashtagInput = {
    where: HashtagOnPostWhereUniqueInput
    create: XOR<HashtagOnPostCreateWithoutHashtagInput, HashtagOnPostUncheckedCreateWithoutHashtagInput>
  }

  export type HashtagOnPostCreateManyHashtagInputEnvelope = {
    data: Enumerable<HashtagOnPostCreateManyHashtagInput>
    skipDuplicates?: boolean
  }

  export type HashtagOnPostUpsertWithWhereUniqueWithoutHashtagInput = {
    where: HashtagOnPostWhereUniqueInput
    update: XOR<HashtagOnPostUpdateWithoutHashtagInput, HashtagOnPostUncheckedUpdateWithoutHashtagInput>
    create: XOR<HashtagOnPostCreateWithoutHashtagInput, HashtagOnPostUncheckedCreateWithoutHashtagInput>
  }

  export type HashtagOnPostUpdateWithWhereUniqueWithoutHashtagInput = {
    where: HashtagOnPostWhereUniqueInput
    data: XOR<HashtagOnPostUpdateWithoutHashtagInput, HashtagOnPostUncheckedUpdateWithoutHashtagInput>
  }

  export type HashtagOnPostUpdateManyWithWhereWithoutHashtagInput = {
    where: HashtagOnPostScalarWhereInput
    data: XOR<HashtagOnPostUpdateManyMutationInput, HashtagOnPostUncheckedUpdateManyWithoutHashtagOnPostsInput>
  }

  export type PostCreateWithoutHashtagOnPostsInput = {
    user: UserCreateNestedOneWithoutPostsInput
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutHashtagOnPostsInput = {
    id?: number
    userId: number
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutHashtagOnPostsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutHashtagOnPostsInput, PostUncheckedCreateWithoutHashtagOnPostsInput>
  }

  export type HashtagCreateWithoutHashtagOnPostsInput = {
    topic: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagUncheckedCreateWithoutHashtagOnPostsInput = {
    id?: number
    topic: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagCreateOrConnectWithoutHashtagOnPostsInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutHashtagOnPostsInput, HashtagUncheckedCreateWithoutHashtagOnPostsInput>
  }

  export type PostUpsertWithoutHashtagOnPostsInput = {
    update: XOR<PostUpdateWithoutHashtagOnPostsInput, PostUncheckedUpdateWithoutHashtagOnPostsInput>
    create: XOR<PostCreateWithoutHashtagOnPostsInput, PostUncheckedCreateWithoutHashtagOnPostsInput>
  }

  export type PostUpdateWithoutHashtagOnPostsInput = {
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutHashtagOnPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutPostNestedInput
  }

  export type HashtagUpsertWithoutHashtagOnPostsInput = {
    update: XOR<HashtagUpdateWithoutHashtagOnPostsInput, HashtagUncheckedUpdateWithoutHashtagOnPostsInput>
    create: XOR<HashtagCreateWithoutHashtagOnPostsInput, HashtagUncheckedCreateWithoutHashtagOnPostsInput>
  }

  export type HashtagUpdateWithoutHashtagOnPostsInput = {
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagUncheckedUpdateWithoutHashtagOnPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDirectMsgFromInput = {
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    replies?: ReplyCreateNestedManyWithoutUserReplyInput
    directMsgTo?: DirectMessageCreateNestedManyWithoutToInput
    followings?: UserRelationCreateNestedManyWithoutFromInput
    followers?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutDirectMsgFromInput = {
    id?: number
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserReplyInput
    directMsgTo?: DirectMessageUncheckedCreateNestedManyWithoutToInput
    followings?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    followers?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutDirectMsgFromInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDirectMsgFromInput, UserUncheckedCreateWithoutDirectMsgFromInput>
  }

  export type UserCreateWithoutDirectMsgToInput = {
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    replies?: ReplyCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageCreateNestedManyWithoutFromInput
    followings?: UserRelationCreateNestedManyWithoutFromInput
    followers?: UserRelationCreateNestedManyWithoutToInput
  }

  export type UserUncheckedCreateWithoutDirectMsgToInput = {
    id?: number
    username: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserReplyInput
    directMsgFrom?: DirectMessageUncheckedCreateNestedManyWithoutFromInput
    followings?: UserRelationUncheckedCreateNestedManyWithoutFromInput
    followers?: UserRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type UserCreateOrConnectWithoutDirectMsgToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDirectMsgToInput, UserUncheckedCreateWithoutDirectMsgToInput>
  }

  export type UserUpsertWithoutDirectMsgFromInput = {
    update: XOR<UserUpdateWithoutDirectMsgFromInput, UserUncheckedUpdateWithoutDirectMsgFromInput>
    create: XOR<UserCreateWithoutDirectMsgFromInput, UserUncheckedCreateWithoutDirectMsgFromInput>
  }

  export type UserUpdateWithoutDirectMsgFromInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    replies?: ReplyUpdateManyWithoutUserReplyNestedInput
    directMsgTo?: DirectMessageUpdateManyWithoutToNestedInput
    followings?: UserRelationUpdateManyWithoutFromNestedInput
    followers?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutDirectMsgFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserReplyNestedInput
    directMsgTo?: DirectMessageUncheckedUpdateManyWithoutToNestedInput
    followings?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    followers?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type UserUpsertWithoutDirectMsgToInput = {
    update: XOR<UserUpdateWithoutDirectMsgToInput, UserUncheckedUpdateWithoutDirectMsgToInput>
    create: XOR<UserCreateWithoutDirectMsgToInput, UserUncheckedCreateWithoutDirectMsgToInput>
  }

  export type UserUpdateWithoutDirectMsgToInput = {
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    replies?: ReplyUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUpdateManyWithoutFromNestedInput
    followings?: UserRelationUpdateManyWithoutFromNestedInput
    followers?: UserRelationUpdateManyWithoutToNestedInput
  }

  export type UserUncheckedUpdateWithoutDirectMsgToInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserReplyNestedInput
    directMsgFrom?: DirectMessageUncheckedUpdateManyWithoutFromNestedInput
    followings?: UserRelationUncheckedUpdateManyWithoutFromNestedInput
    followers?: UserRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type PostCreateManyUserInput = {
    id?: number
    detail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyCreateManyUserReplyInput = {
    id?: number
    postId: number
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateManyFromInput = {
    id?: number
    toId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateManyToInput = {
    id?: number
    fromId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationCreateManyFromInput = {
    id?: number
    toId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRelationCreateManyToInput = {
    id?: number
    fromId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutUserInput = {
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutPostNestedInput
    hashtagOnPosts?: HashtagOnPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutPostNestedInput
    hashtagOnPosts?: HashtagOnPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUpdateWithoutUserReplyInput = {
    post?: PostUpdateOneRequiredWithoutRepliesNestedInput
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateWithoutUserReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUpdateWithoutFromInput = {
    to?: UserUpdateOneRequiredWithoutDirectMsgToNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyWithoutDirectMsgFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUpdateWithoutToInput = {
    from?: UserUpdateOneRequiredWithoutDirectMsgFromNestedInput
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyWithoutDirectMsgToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUpdateWithoutFromInput = {
    to?: UserUpdateOneRequiredWithoutFollowersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyWithoutFollowingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUpdateWithoutToInput = {
    from?: UserUpdateOneRequiredWithoutFollowingsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRelationUncheckedUpdateManyWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyPostInput = {
    id?: number
    userId: number
    replyMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostCreateManyPostInput = {
    id?: number
    hashtagId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyUpdateWithoutPostInput = {
    userReply?: UserUpdateOneRequiredWithoutRepliesNestedInput
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    replyMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostUpdateWithoutPostInput = {
    hashtag?: HashtagUpdateOneRequiredWithoutHashtagOnPostsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostUncheckedUpdateManyWithoutHashtagOnPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashtagId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostCreateManyHashtagInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HashtagOnPostUpdateWithoutHashtagInput = {
    post?: PostUpdateOneRequiredWithoutHashtagOnPostsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HashtagOnPostUncheckedUpdateWithoutHashtagInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
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