
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model user
 * 
 */
export type user = {
  id: number
  nameUser: string
  category: string
  createdAt: Date
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  category: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Quiz
 * 
 */
export type Quiz = {
  id: number
  quiz: string
  categoryNameId: number | null
  quizAnswerId: number
  createdAt: Date
  updatedAt: Date
  categoryId: number
}

/**
 * Model Choice
 * 
 */
export type Choice = {
  id: number
  choice: string
  createdAt: Date
  updatedAt: Date
  quizId: number | null
}

/**
 * Model Round
 * 
 */
export type Round = {
  id: number
  createdAt: Date
  updateAt: Date
  categoryId: number | null
}

/**
 * Model RoundQuiz
 * 
 */
export type RoundQuiz = {
  id: number
  category: string
  createdAt: Date
  roundId: number | null
  choiceId: number | null
  quizId: number | null
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
  triviaCategory: any;
  triviaQuiz: any;
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<GlobalReject>;

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
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<GlobalReject>;

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
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<GlobalReject>;

  /**
   * `prisma.roundQuiz`: Exposes CRUD operations for the **RoundQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoundQuizs
    * const roundQuizs = await prisma.roundQuiz.findMany()
    * ```
    */
  get roundQuiz(): Prisma.RoundQuizDelegate<GlobalReject>;
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
    user: 'user',
    Category: 'Category',
    Quiz: 'Quiz',
    Choice: 'Choice',
    Round: 'Round',
    RoundQuiz: 'RoundQuiz'
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
    quiz: number
    rounds: number
  }

  export type CategoryCountOutputTypeSelect = {
    quiz?: boolean
    rounds?: boolean
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
   * Count Type QuizCountOutputType
   */


  export type QuizCountOutputType = {
    choices: number
    roundQuiz: number
  }

  export type QuizCountOutputTypeSelect = {
    choices?: boolean
    roundQuiz?: boolean
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
   * Count Type ChoiceCountOutputType
   */


  export type ChoiceCountOutputType = {
    roundQuiz: number
  }

  export type ChoiceCountOutputTypeSelect = {
    roundQuiz?: boolean
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
   * Count Type RoundCountOutputType
   */


  export type RoundCountOutputType = {
    roundQiuz: number
  }

  export type RoundCountOutputTypeSelect = {
    roundQiuz?: boolean
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
   * Models
   */

  /**
   * Model user
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
    nameUser: string | null
    category: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nameUser: string | null
    category: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nameUser: number
    category: number
    createdAt: number
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
    nameUser?: true
    category?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nameUser?: true
    category?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nameUser?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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
    where?: userWhereInput
    orderBy?: Enumerable<userOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: userScalarWhereWithAggregatesInput
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
    nameUser: string
    category: string
    createdAt: Date
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


  export type userSelect = {
    id?: boolean
    nameUser?: boolean
    category?: boolean
    createdAt?: boolean
  }


  export type userGetPayload<S extends boolean | null | undefined | userArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user :
    S extends undefined ? never :
    S extends { include: any } & (userArgs | userFindManyArgs)
    ? user 
    : S extends { select: any } & (userArgs | userFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof user ? user[P] : never
  } 
      : user


  type userCountArgs = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user'> extends True ? Prisma__userClient<userGetPayload<T>> : Prisma__userClient<userGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(
      args?: SelectSubset<T, userFindManyArgs>
    ): Prisma.PrismaPromise<Array<userGetPayload<T>>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs>(
      args: SelectSubset<T, userCreateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs>(
      args?: SelectSubset<T, userCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs>(
      args: SelectSubset<T, userDeleteArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(
      args: SelectSubset<T, userUpdateArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs>(
      args?: SelectSubset<T, userDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(
      args: SelectSubset<T, userUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(
      args: SelectSubset<T, userUpsertArgs>
    ): Prisma__userClient<userGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * user base type for findUnique actions
   */
  export type userFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUnique
   */
  export interface userFindUniqueArgs extends userFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user base type for findFirst actions
   */
  export type userFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * user findFirst
   */
  export interface userFindFirstArgs extends userFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user findMany
   */
  export type userFindManyArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<userOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * user create
   */
  export type userCreateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<userCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user without action
   */
  export type userArgs = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect | null
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
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    category: number
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
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    category?: true
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
    category: string
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
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quiz?: boolean | Category$quizArgs
    rounds?: boolean | Category$roundsArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    quiz?: boolean | Category$quizArgs
    rounds?: boolean | Category$roundsArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'quiz' ? Array < QuizGetPayload<S['include'][P]>>  :
        P extends 'rounds' ? Array < RoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'quiz' ? Array < QuizGetPayload<S['select'][P]>>  :
        P extends 'rounds' ? Array < RoundGetPayload<S['select'][P]>>  :
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

    quiz<T extends Category$quizArgs= {}>(args?: Subset<T, Category$quizArgs>): Prisma.PrismaPromise<Array<QuizGetPayload<T>>| Null>;

    rounds<T extends Category$roundsArgs= {}>(args?: Subset<T, Category$roundsArgs>): Prisma.PrismaPromise<Array<RoundGetPayload<T>>| Null>;

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
   * Category.quiz
   */
  export type Category$quizArgs = {
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
   * Category.rounds
   */
  export type Category$roundsArgs = {
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
    categoryNameId: number | null
    quizAnswerId: number | null
    categoryId: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: number | null
    categoryNameId: number | null
    quizAnswerId: number | null
    categoryId: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: number | null
    quiz: string | null
    categoryNameId: number | null
    quizAnswerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type QuizMaxAggregateOutputType = {
    id: number | null
    quiz: string | null
    categoryNameId: number | null
    quizAnswerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    quiz: number
    categoryNameId: number
    quizAnswerId: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    categoryNameId?: true
    quizAnswerId?: true
    categoryId?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    categoryNameId?: true
    quizAnswerId?: true
    categoryId?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    quiz?: true
    categoryNameId?: true
    quizAnswerId?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    quiz?: true
    categoryNameId?: true
    quizAnswerId?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    quiz?: true
    categoryNameId?: true
    quizAnswerId?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
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
    quiz: string
    categoryNameId: number | null
    quizAnswerId: number
    createdAt: Date
    updatedAt: Date
    categoryId: number
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
    quiz?: boolean
    categoryNameId?: boolean
    quizAnswerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    answer?: boolean | ChoiceArgs
    choices?: boolean | Quiz$choicesArgs
    roundQuiz?: boolean | Quiz$roundQuizArgs
    category?: boolean | CategoryArgs
    _count?: boolean | QuizCountOutputTypeArgs
  }


  export type QuizInclude = {
    answer?: boolean | ChoiceArgs
    choices?: boolean | Quiz$choicesArgs
    roundQuiz?: boolean | Quiz$roundQuizArgs
    category?: boolean | CategoryArgs
    _count?: boolean | QuizCountOutputTypeArgs
  }

  export type QuizGetPayload<S extends boolean | null | undefined | QuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Quiz :
    S extends undefined ? never :
    S extends { include: any } & (QuizArgs | QuizFindManyArgs)
    ? Quiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'answer' ? ChoiceGetPayload<S['include'][P]> :
        P extends 'choices' ? Array < ChoiceGetPayload<S['include'][P]>>  :
        P extends 'roundQuiz' ? Array < RoundQuizGetPayload<S['include'][P]>>  :
        P extends 'category' ? CategoryGetPayload<S['include'][P]> :
        P extends '_count' ? QuizCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuizArgs | QuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'answer' ? ChoiceGetPayload<S['select'][P]> :
        P extends 'choices' ? Array < ChoiceGetPayload<S['select'][P]>>  :
        P extends 'roundQuiz' ? Array < RoundQuizGetPayload<S['select'][P]>>  :
        P extends 'category' ? CategoryGetPayload<S['select'][P]> :
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

    answer<T extends ChoiceArgs= {}>(args?: Subset<T, ChoiceArgs>): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

    choices<T extends Quiz$choicesArgs= {}>(args?: Subset<T, Quiz$choicesArgs>): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>>| Null>;

    roundQuiz<T extends Quiz$roundQuizArgs= {}>(args?: Subset<T, Quiz$roundQuizArgs>): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>>| Null>;

    category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

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
   * Quiz.roundQuiz
   */
  export type Quiz$roundQuizArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    where?: RoundQuizWhereInput
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>
    cursor?: RoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundQuizScalarFieldEnum>
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
    choice: string | null
    createdAt: Date | null
    updatedAt: Date | null
    quizId: number | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: number | null
    choice: string | null
    createdAt: Date | null
    updatedAt: Date | null
    quizId: number | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    choice: number
    createdAt: number
    updatedAt: number
    quizId: number
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
    choice?: true
    createdAt?: true
    updatedAt?: true
    quizId?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    choice?: true
    createdAt?: true
    updatedAt?: true
    quizId?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    choice?: true
    createdAt?: true
    updatedAt?: true
    quizId?: true
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
    choice: string
    createdAt: Date
    updatedAt: Date
    quizId: number | null
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
    choice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizId?: boolean
    quiz?: boolean | QuizArgs
    quizAnswer?: boolean | QuizArgs
    roundQuiz?: boolean | Choice$roundQuizArgs
    _count?: boolean | ChoiceCountOutputTypeArgs
  }


  export type ChoiceInclude = {
    quiz?: boolean | QuizArgs
    quizAnswer?: boolean | QuizArgs
    roundQuiz?: boolean | Choice$roundQuizArgs
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
        P extends 'quizAnswer' ? QuizGetPayload<S['include'][P]> | null :
        P extends 'roundQuiz' ? Array < RoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? ChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChoiceArgs | ChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'quiz' ? QuizGetPayload<S['select'][P]> | null :
        P extends 'quizAnswer' ? QuizGetPayload<S['select'][P]> | null :
        P extends 'roundQuiz' ? Array < RoundQuizGetPayload<S['select'][P]>>  :
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

    quizAnswer<T extends QuizArgs= {}>(args?: Subset<T, QuizArgs>): Prisma__QuizClient<QuizGetPayload<T> | Null>;

    roundQuiz<T extends Choice$roundQuizArgs= {}>(args?: Subset<T, Choice$roundQuizArgs>): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>>| Null>;

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
   * Choice.roundQuiz
   */
  export type Choice$roundQuizArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    where?: RoundQuizWhereInput
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>
    cursor?: RoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundQuizScalarFieldEnum>
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
  }

  export type RoundSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updateAt: Date | null
    categoryId: number | null
  }

  export type RoundMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updateAt: Date | null
    categoryId: number | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    categoryId: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type RoundSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    categoryId?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    categoryId?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    categoryId?: true
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
    updateAt: Date
    categoryId: number | null
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
    createdAt?: boolean
    updateAt?: boolean
    categoryId?: boolean
    roundQiuz?: boolean | Round$roundQiuzArgs
    Category?: boolean | CategoryArgs
    _count?: boolean | RoundCountOutputTypeArgs
  }


  export type RoundInclude = {
    roundQiuz?: boolean | Round$roundQiuzArgs
    Category?: boolean | CategoryArgs
    _count?: boolean | RoundCountOutputTypeArgs
  }

  export type RoundGetPayload<S extends boolean | null | undefined | RoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Round :
    S extends undefined ? never :
    S extends { include: any } & (RoundArgs | RoundFindManyArgs)
    ? Round  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'roundQiuz' ? Array < RoundQuizGetPayload<S['include'][P]>>  :
        P extends 'Category' ? CategoryGetPayload<S['include'][P]> | null :
        P extends '_count' ? RoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundArgs | RoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'roundQiuz' ? Array < RoundQuizGetPayload<S['select'][P]>>  :
        P extends 'Category' ? CategoryGetPayload<S['select'][P]> | null :
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

    roundQiuz<T extends Round$roundQiuzArgs= {}>(args?: Subset<T, Round$roundQiuzArgs>): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>>| Null>;

    Category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

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
   * Round.roundQiuz
   */
  export type Round$roundQiuzArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    where?: RoundQuizWhereInput
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>
    cursor?: RoundQuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundQuizScalarFieldEnum>
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
   * Model RoundQuiz
   */


  export type AggregateRoundQuiz = {
    _count: RoundQuizCountAggregateOutputType | null
    _avg: RoundQuizAvgAggregateOutputType | null
    _sum: RoundQuizSumAggregateOutputType | null
    _min: RoundQuizMinAggregateOutputType | null
    _max: RoundQuizMaxAggregateOutputType | null
  }

  export type RoundQuizAvgAggregateOutputType = {
    id: number | null
    roundId: number | null
    choiceId: number | null
    quizId: number | null
  }

  export type RoundQuizSumAggregateOutputType = {
    id: number | null
    roundId: number | null
    choiceId: number | null
    quizId: number | null
  }

  export type RoundQuizMinAggregateOutputType = {
    id: number | null
    category: string | null
    createdAt: Date | null
    roundId: number | null
    choiceId: number | null
    quizId: number | null
  }

  export type RoundQuizMaxAggregateOutputType = {
    id: number | null
    category: string | null
    createdAt: Date | null
    roundId: number | null
    choiceId: number | null
    quizId: number | null
  }

  export type RoundQuizCountAggregateOutputType = {
    id: number
    category: number
    createdAt: number
    roundId: number
    choiceId: number
    quizId: number
    _all: number
  }


  export type RoundQuizAvgAggregateInputType = {
    id?: true
    roundId?: true
    choiceId?: true
    quizId?: true
  }

  export type RoundQuizSumAggregateInputType = {
    id?: true
    roundId?: true
    choiceId?: true
    quizId?: true
  }

  export type RoundQuizMinAggregateInputType = {
    id?: true
    category?: true
    createdAt?: true
    roundId?: true
    choiceId?: true
    quizId?: true
  }

  export type RoundQuizMaxAggregateInputType = {
    id?: true
    category?: true
    createdAt?: true
    roundId?: true
    choiceId?: true
    quizId?: true
  }

  export type RoundQuizCountAggregateInputType = {
    id?: true
    category?: true
    createdAt?: true
    roundId?: true
    choiceId?: true
    quizId?: true
    _all?: true
  }

  export type RoundQuizAggregateArgs = {
    /**
     * Filter which RoundQuiz to aggregate.
     */
    where?: RoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuizs to fetch.
     */
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoundQuizs
    **/
    _count?: true | RoundQuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundQuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundQuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundQuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundQuizMaxAggregateInputType
  }

  export type GetRoundQuizAggregateType<T extends RoundQuizAggregateArgs> = {
        [P in keyof T & keyof AggregateRoundQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundQuiz[P]>
      : GetScalarType<T[P], AggregateRoundQuiz[P]>
  }




  export type RoundQuizGroupByArgs = {
    where?: RoundQuizWhereInput
    orderBy?: Enumerable<RoundQuizOrderByWithAggregationInput>
    by: RoundQuizScalarFieldEnum[]
    having?: RoundQuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundQuizCountAggregateInputType | true
    _avg?: RoundQuizAvgAggregateInputType
    _sum?: RoundQuizSumAggregateInputType
    _min?: RoundQuizMinAggregateInputType
    _max?: RoundQuizMaxAggregateInputType
  }


  export type RoundQuizGroupByOutputType = {
    id: number
    category: string
    createdAt: Date
    roundId: number | null
    choiceId: number | null
    quizId: number | null
    _count: RoundQuizCountAggregateOutputType | null
    _avg: RoundQuizAvgAggregateOutputType | null
    _sum: RoundQuizSumAggregateOutputType | null
    _min: RoundQuizMinAggregateOutputType | null
    _max: RoundQuizMaxAggregateOutputType | null
  }

  type GetRoundQuizGroupByPayload<T extends RoundQuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoundQuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundQuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundQuizGroupByOutputType[P]>
            : GetScalarType<T[P], RoundQuizGroupByOutputType[P]>
        }
      >
    >


  export type RoundQuizSelect = {
    id?: boolean
    category?: boolean
    createdAt?: boolean
    roundId?: boolean
    choiceId?: boolean
    quizId?: boolean
    round?: boolean | RoundArgs
    choice?: boolean | ChoiceArgs
    quiz?: boolean | QuizArgs
  }


  export type RoundQuizInclude = {
    round?: boolean | RoundArgs
    choice?: boolean | ChoiceArgs
    quiz?: boolean | QuizArgs
  }

  export type RoundQuizGetPayload<S extends boolean | null | undefined | RoundQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundQuiz :
    S extends undefined ? never :
    S extends { include: any } & (RoundQuizArgs | RoundQuizFindManyArgs)
    ? RoundQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'round' ? RoundGetPayload<S['include'][P]> | null :
        P extends 'choice' ? ChoiceGetPayload<S['include'][P]> | null :
        P extends 'quiz' ? QuizGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (RoundQuizArgs | RoundQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'round' ? RoundGetPayload<S['select'][P]> | null :
        P extends 'choice' ? ChoiceGetPayload<S['select'][P]> | null :
        P extends 'quiz' ? QuizGetPayload<S['select'][P]> | null :  P extends keyof RoundQuiz ? RoundQuiz[P] : never
  } 
      : RoundQuiz


  type RoundQuizCountArgs = 
    Omit<RoundQuizFindManyArgs, 'select' | 'include'> & {
      select?: RoundQuizCountAggregateInputType | true
    }

  export interface RoundQuizDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoundQuiz that matches the filter.
     * @param {RoundQuizFindUniqueArgs} args - Arguments to find a RoundQuiz
     * @example
     * // Get one RoundQuiz
     * const roundQuiz = await prisma.roundQuiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoundQuizFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoundQuizFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoundQuiz'> extends True ? Prisma__RoundQuizClient<RoundQuizGetPayload<T>> : Prisma__RoundQuizClient<RoundQuizGetPayload<T> | null, null>

    /**
     * Find one RoundQuiz that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoundQuizFindUniqueOrThrowArgs} args - Arguments to find a RoundQuiz
     * @example
     * // Get one RoundQuiz
     * const roundQuiz = await prisma.roundQuiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoundQuizFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundQuizFindUniqueOrThrowArgs>
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>

    /**
     * Find the first RoundQuiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuizFindFirstArgs} args - Arguments to find a RoundQuiz
     * @example
     * // Get one RoundQuiz
     * const roundQuiz = await prisma.roundQuiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoundQuizFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoundQuizFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoundQuiz'> extends True ? Prisma__RoundQuizClient<RoundQuizGetPayload<T>> : Prisma__RoundQuizClient<RoundQuizGetPayload<T> | null, null>

    /**
     * Find the first RoundQuiz that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuizFindFirstOrThrowArgs} args - Arguments to find a RoundQuiz
     * @example
     * // Get one RoundQuiz
     * const roundQuiz = await prisma.roundQuiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoundQuizFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundQuizFindFirstOrThrowArgs>
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>

    /**
     * Find zero or more RoundQuizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuizFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundQuizs
     * const roundQuizs = await prisma.roundQuiz.findMany()
     * 
     * // Get first 10 RoundQuizs
     * const roundQuizs = await prisma.roundQuiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundQuizWithIdOnly = await prisma.roundQuiz.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoundQuizFindManyArgs>(
      args?: SelectSubset<T, RoundQuizFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>>>

    /**
     * Create a RoundQuiz.
     * @param {RoundQuizCreateArgs} args - Arguments to create a RoundQuiz.
     * @example
     * // Create one RoundQuiz
     * const RoundQuiz = await prisma.roundQuiz.create({
     *   data: {
     *     // ... data to create a RoundQuiz
     *   }
     * })
     * 
    **/
    create<T extends RoundQuizCreateArgs>(
      args: SelectSubset<T, RoundQuizCreateArgs>
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>

    /**
     * Create many RoundQuizs.
     *     @param {RoundQuizCreateManyArgs} args - Arguments to create many RoundQuizs.
     *     @example
     *     // Create many RoundQuizs
     *     const roundQuiz = await prisma.roundQuiz.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoundQuizCreateManyArgs>(
      args?: SelectSubset<T, RoundQuizCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoundQuiz.
     * @param {RoundQuizDeleteArgs} args - Arguments to delete one RoundQuiz.
     * @example
     * // Delete one RoundQuiz
     * const RoundQuiz = await prisma.roundQuiz.delete({
     *   where: {
     *     // ... filter to delete one RoundQuiz
     *   }
     * })
     * 
    **/
    delete<T extends RoundQuizDeleteArgs>(
      args: SelectSubset<T, RoundQuizDeleteArgs>
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>

    /**
     * Update one RoundQuiz.
     * @param {RoundQuizUpdateArgs} args - Arguments to update one RoundQuiz.
     * @example
     * // Update one RoundQuiz
     * const roundQuiz = await prisma.roundQuiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoundQuizUpdateArgs>(
      args: SelectSubset<T, RoundQuizUpdateArgs>
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>

    /**
     * Delete zero or more RoundQuizs.
     * @param {RoundQuizDeleteManyArgs} args - Arguments to filter RoundQuizs to delete.
     * @example
     * // Delete a few RoundQuizs
     * const { count } = await prisma.roundQuiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoundQuizDeleteManyArgs>(
      args?: SelectSubset<T, RoundQuizDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoundQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundQuizs
     * const roundQuiz = await prisma.roundQuiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoundQuizUpdateManyArgs>(
      args: SelectSubset<T, RoundQuizUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoundQuiz.
     * @param {RoundQuizUpsertArgs} args - Arguments to update or create a RoundQuiz.
     * @example
     * // Update or create a RoundQuiz
     * const roundQuiz = await prisma.roundQuiz.upsert({
     *   create: {
     *     // ... data to create a RoundQuiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundQuiz we want to update
     *   }
     * })
    **/
    upsert<T extends RoundQuizUpsertArgs>(
      args: SelectSubset<T, RoundQuizUpsertArgs>
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>

    /**
     * Count the number of RoundQuizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuizCountArgs} args - Arguments to filter RoundQuizs to count.
     * @example
     * // Count the number of RoundQuizs
     * const count = await prisma.roundQuiz.count({
     *   where: {
     *     // ... the filter for the RoundQuizs we want to count
     *   }
     * })
    **/
    count<T extends RoundQuizCountArgs>(
      args?: Subset<T, RoundQuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundQuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoundQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundQuizAggregateArgs>(args: Subset<T, RoundQuizAggregateArgs>): Prisma.PrismaPromise<GetRoundQuizAggregateType<T>>

    /**
     * Group by RoundQuiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuizGroupByArgs} args - Group by arguments.
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
      T extends RoundQuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundQuizGroupByArgs['orderBy'] }
        : { orderBy?: RoundQuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundQuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundQuizClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    round<T extends RoundArgs= {}>(args?: Subset<T, RoundArgs>): Prisma__RoundClient<RoundGetPayload<T> | Null>;

    choice<T extends ChoiceArgs= {}>(args?: Subset<T, ChoiceArgs>): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

    quiz<T extends QuizArgs= {}>(args?: Subset<T, QuizArgs>): Prisma__QuizClient<QuizGetPayload<T> | Null>;

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
   * RoundQuiz base type for findUnique actions
   */
  export type RoundQuizFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * Filter, which RoundQuiz to fetch.
     */
    where: RoundQuizWhereUniqueInput
  }

  /**
   * RoundQuiz findUnique
   */
  export interface RoundQuizFindUniqueArgs extends RoundQuizFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundQuiz findUniqueOrThrow
   */
  export type RoundQuizFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * Filter, which RoundQuiz to fetch.
     */
    where: RoundQuizWhereUniqueInput
  }


  /**
   * RoundQuiz base type for findFirst actions
   */
  export type RoundQuizFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * Filter, which RoundQuiz to fetch.
     */
    where?: RoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuizs to fetch.
     */
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundQuizs.
     */
    cursor?: RoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundQuizs.
     */
    distinct?: Enumerable<RoundQuizScalarFieldEnum>
  }

  /**
   * RoundQuiz findFirst
   */
  export interface RoundQuizFindFirstArgs extends RoundQuizFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundQuiz findFirstOrThrow
   */
  export type RoundQuizFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * Filter, which RoundQuiz to fetch.
     */
    where?: RoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuizs to fetch.
     */
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundQuizs.
     */
    cursor?: RoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundQuizs.
     */
    distinct?: Enumerable<RoundQuizScalarFieldEnum>
  }


  /**
   * RoundQuiz findMany
   */
  export type RoundQuizFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * Filter, which RoundQuizs to fetch.
     */
    where?: RoundQuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuizs to fetch.
     */
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoundQuizs.
     */
    cursor?: RoundQuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuizs.
     */
    skip?: number
    distinct?: Enumerable<RoundQuizScalarFieldEnum>
  }


  /**
   * RoundQuiz create
   */
  export type RoundQuizCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * The data needed to create a RoundQuiz.
     */
    data: XOR<RoundQuizCreateInput, RoundQuizUncheckedCreateInput>
  }


  /**
   * RoundQuiz createMany
   */
  export type RoundQuizCreateManyArgs = {
    /**
     * The data used to create many RoundQuizs.
     */
    data: Enumerable<RoundQuizCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoundQuiz update
   */
  export type RoundQuizUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * The data needed to update a RoundQuiz.
     */
    data: XOR<RoundQuizUpdateInput, RoundQuizUncheckedUpdateInput>
    /**
     * Choose, which RoundQuiz to update.
     */
    where: RoundQuizWhereUniqueInput
  }


  /**
   * RoundQuiz updateMany
   */
  export type RoundQuizUpdateManyArgs = {
    /**
     * The data used to update RoundQuizs.
     */
    data: XOR<RoundQuizUpdateManyMutationInput, RoundQuizUncheckedUpdateManyInput>
    /**
     * Filter which RoundQuizs to update
     */
    where?: RoundQuizWhereInput
  }


  /**
   * RoundQuiz upsert
   */
  export type RoundQuizUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * The filter to search for the RoundQuiz to update in case it exists.
     */
    where: RoundQuizWhereUniqueInput
    /**
     * In case the RoundQuiz found by the `where` argument doesn't exist, create a new RoundQuiz with this data.
     */
    create: XOR<RoundQuizCreateInput, RoundQuizUncheckedCreateInput>
    /**
     * In case the RoundQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundQuizUpdateInput, RoundQuizUncheckedUpdateInput>
  }


  /**
   * RoundQuiz delete
   */
  export type RoundQuizDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
    /**
     * Filter which RoundQuiz to delete.
     */
    where: RoundQuizWhereUniqueInput
  }


  /**
   * RoundQuiz deleteMany
   */
  export type RoundQuizDeleteManyArgs = {
    /**
     * Filter which RoundQuizs to delete
     */
    where?: RoundQuizWhereInput
  }


  /**
   * RoundQuiz without action
   */
  export type RoundQuizArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoryScalarFieldEnum: {
    id: 'id',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    choice: 'choice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    quizId: 'quizId'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QuizScalarFieldEnum: {
    id: 'id',
    quiz: 'quiz',
    categoryNameId: 'categoryNameId',
    quizAnswerId: 'quizAnswerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const RoundQuizScalarFieldEnum: {
    id: 'id',
    category: 'category',
    createdAt: 'createdAt',
    roundId: 'roundId',
    choiceId: 'choiceId',
    quizId: 'quizId'
  };

  export type RoundQuizScalarFieldEnum = (typeof RoundQuizScalarFieldEnum)[keyof typeof RoundQuizScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    categoryId: 'categoryId'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


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


  export const UserScalarFieldEnum: {
    id: 'id',
    nameUser: 'nameUser',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: Enumerable<userWhereInput>
    OR?: Enumerable<userWhereInput>
    NOT?: Enumerable<userWhereInput>
    id?: IntFilter | number
    nameUser?: StringFilter | string
    category?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    nameUser?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type userWhereUniqueInput = {
    id?: number
    category?: string
  }

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    nameUser?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userScalarWhereWithAggregatesInput>
    OR?: Enumerable<userScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nameUser?: StringWithAggregatesFilter | string
    category?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    category?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    quiz?: QuizListRelationFilter
    rounds?: RoundListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quiz?: QuizOrderByRelationAggregateInput
    rounds?: RoundOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    id?: number
    category?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
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
    category?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuizWhereInput = {
    AND?: Enumerable<QuizWhereInput>
    OR?: Enumerable<QuizWhereInput>
    NOT?: Enumerable<QuizWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    categoryNameId?: IntNullableFilter | number | null
    quizAnswerId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    categoryId?: IntFilter | number
    answer?: XOR<ChoiceRelationFilter, ChoiceWhereInput>
    choices?: ChoiceListRelationFilter
    roundQuiz?: RoundQuizListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryNameId?: SortOrder
    quizAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    answer?: ChoiceOrderByWithRelationInput
    choices?: ChoiceOrderByRelationAggregateInput
    roundQuiz?: RoundQuizOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
  }

  export type QuizWhereUniqueInput = {
    id?: number
    quizAnswerId?: number
  }

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryNameId?: SortOrder
    quizAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
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
    quiz?: StringWithAggregatesFilter | string
    categoryNameId?: IntNullableWithAggregatesFilter | number | null
    quizAnswerId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    categoryId?: IntWithAggregatesFilter | number
  }

  export type ChoiceWhereInput = {
    AND?: Enumerable<ChoiceWhereInput>
    OR?: Enumerable<ChoiceWhereInput>
    NOT?: Enumerable<ChoiceWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    quizId?: IntNullableFilter | number | null
    quiz?: XOR<QuizRelationFilter, QuizWhereInput> | null
    quizAnswer?: XOR<QuizRelationFilter, QuizWhereInput> | null
    roundQuiz?: RoundQuizListRelationFilter
  }

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder
    choice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    quizAnswer?: QuizOrderByWithRelationInput
    roundQuiz?: RoundQuizOrderByRelationAggregateInput
  }

  export type ChoiceWhereUniqueInput = {
    id?: number
  }

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    choice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
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
    choice?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    quizId?: IntNullableWithAggregatesFilter | number | null
  }

  export type RoundWhereInput = {
    AND?: Enumerable<RoundWhereInput>
    OR?: Enumerable<RoundWhereInput>
    NOT?: Enumerable<RoundWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    categoryId?: IntNullableFilter | number | null
    roundQiuz?: RoundQuizListRelationFilter
    Category?: XOR<CategoryRelationFilter, CategoryWhereInput> | null
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
    roundQiuz?: RoundQuizOrderByRelationAggregateInput
    Category?: CategoryOrderByWithRelationInput
  }

  export type RoundWhereUniqueInput = {
    id?: number
  }

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
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
    updateAt?: DateTimeWithAggregatesFilter | Date | string
    categoryId?: IntNullableWithAggregatesFilter | number | null
  }

  export type RoundQuizWhereInput = {
    AND?: Enumerable<RoundQuizWhereInput>
    OR?: Enumerable<RoundQuizWhereInput>
    NOT?: Enumerable<RoundQuizWhereInput>
    id?: IntFilter | number
    category?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    roundId?: IntNullableFilter | number | null
    choiceId?: IntNullableFilter | number | null
    quizId?: IntNullableFilter | number | null
    round?: XOR<RoundRelationFilter, RoundWhereInput> | null
    choice?: XOR<ChoiceRelationFilter, ChoiceWhereInput> | null
    quiz?: XOR<QuizRelationFilter, QuizWhereInput> | null
  }

  export type RoundQuizOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
    quizId?: SortOrder
    round?: RoundOrderByWithRelationInput
    choice?: ChoiceOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type RoundQuizWhereUniqueInput = {
    id?: number
    category?: string
  }

  export type RoundQuizOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
    quizId?: SortOrder
    _count?: RoundQuizCountOrderByAggregateInput
    _avg?: RoundQuizAvgOrderByAggregateInput
    _max?: RoundQuizMaxOrderByAggregateInput
    _min?: RoundQuizMinOrderByAggregateInput
    _sum?: RoundQuizSumOrderByAggregateInput
  }

  export type RoundQuizScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundQuizScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoundQuizScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoundQuizScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    category?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    roundId?: IntNullableWithAggregatesFilter | number | null
    choiceId?: IntNullableWithAggregatesFilter | number | null
    quizId?: IntNullableWithAggregatesFilter | number | null
  }

  export type userCreateInput = {
    nameUser: string
    category: string
    createdAt?: Date | string
  }

  export type userUncheckedCreateInput = {
    id?: number
    nameUser: string
    category: string
    createdAt?: Date | string
  }

  export type userUpdateInput = {
    nameUser?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameUser?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateManyInput = {
    id?: number
    nameUser: string
    category: string
    createdAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    nameUser?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameUser?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizCreateNestedManyWithoutCategoryInput
    rounds?: RoundCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizUncheckedCreateNestedManyWithoutCategoryInput
    rounds?: RoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateManyWithoutCategoryNestedInput
    rounds?: RoundUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    quiz: string
    categoryNameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: ChoiceCreateNestedOneWithoutQuizAnswerInput
    choices?: ChoiceCreateNestedManyWithoutQuizInput
    roundQuiz?: RoundQuizCreateNestedManyWithoutQuizInput
    category: CategoryCreateNestedOneWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: number
    quiz: string
    categoryNameId?: number | null
    quizAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuizInput
    roundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: ChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput
    choices?: ChoiceUpdateManyWithoutQuizNestedInput
    roundQuiz?: RoundQuizUpdateManyWithoutQuizNestedInput
    category?: CategoryUpdateOneRequiredWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuizNestedInput
    roundQuiz?: RoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: number
    quiz: string
    categoryNameId?: number | null
    quizAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type QuizUpdateManyMutationInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ChoiceCreateInput = {
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizCreateNestedOneWithoutChoicesInput
    quizAnswer?: QuizCreateNestedOneWithoutAnswerInput
    roundQuiz?: RoundQuizCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizId?: number | null
    quizAnswer?: QuizUncheckedCreateNestedOneWithoutAnswerInput
    roundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUpdateInput = {
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneWithoutChoicesNestedInput
    quizAnswer?: QuizUpdateOneWithoutAnswerNestedInput
    roundQuiz?: RoundQuizUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswer?: QuizUncheckedUpdateOneWithoutAnswerNestedInput
    roundQuiz?: RoundQuizUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceCreateManyInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizId?: number | null
  }

  export type ChoiceUpdateManyMutationInput = {
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundCreateInput = {
    createdAt?: Date | string
    updateAt?: Date | string
    roundQiuz?: RoundQuizCreateNestedManyWithoutRoundInput
    Category?: CategoryCreateNestedOneWithoutRoundsInput
  }

  export type RoundUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    categoryId?: number | null
    roundQiuz?: RoundQuizUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQiuz?: RoundQuizUpdateManyWithoutRoundNestedInput
    Category?: CategoryUpdateOneWithoutRoundsNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    roundQiuz?: RoundQuizUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    categoryId?: number | null
  }

  export type RoundUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundQuizCreateInput = {
    category: string
    createdAt?: Date | string
    round?: RoundCreateNestedOneWithoutRoundQiuzInput
    choice?: ChoiceCreateNestedOneWithoutRoundQuizInput
    quiz?: QuizCreateNestedOneWithoutRoundQuizInput
  }

  export type RoundQuizUncheckedCreateInput = {
    id?: number
    category: string
    createdAt?: Date | string
    roundId?: number | null
    choiceId?: number | null
    quizId?: number | null
  }

  export type RoundQuizUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    round?: RoundUpdateOneWithoutRoundQiuzNestedInput
    choice?: ChoiceUpdateOneWithoutRoundQuizNestedInput
    quiz?: QuizUpdateOneWithoutRoundQuizNestedInput
  }

  export type RoundQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
    choiceId?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundQuizCreateManyInput = {
    id?: number
    category: string
    createdAt?: Date | string
    roundId?: number | null
    choiceId?: number | null
    quizId?: number | null
  }

  export type RoundQuizUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
    choiceId?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    nameUser?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    nameUser?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    nameUser?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
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

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ChoiceRelationFilter = {
    is?: ChoiceWhereInput | null
    isNot?: ChoiceWhereInput | null
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type RoundQuizListRelationFilter = {
    every?: RoundQuizWhereInput
    some?: RoundQuizWhereInput
    none?: RoundQuizWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryNameId?: SortOrder
    quizAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryNameId?: SortOrder
    quizAnswerId?: SortOrder
    categoryId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryNameId?: SortOrder
    quizAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryNameId?: SortOrder
    quizAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    categoryNameId?: SortOrder
    quizAnswerId?: SortOrder
    categoryId?: SortOrder
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

  export type QuizRelationFilter = {
    is?: QuizWhereInput | null
    isNot?: QuizWhereInput | null
  }

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
  }

  export type ChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizId?: SortOrder
  }

  export type ChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    categoryId?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type RoundRelationFilter = {
    is?: RoundWhereInput | null
    isNot?: RoundWhereInput | null
  }

  export type RoundQuizCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
    quizId?: SortOrder
  }

  export type RoundQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
    quizId?: SortOrder
  }

  export type RoundQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
    quizId?: SortOrder
  }

  export type RoundQuizMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
    quizId?: SortOrder
  }

  export type RoundQuizSumOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    choiceId?: SortOrder
    quizId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type QuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCategoryInput>, Enumerable<QuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCategoryInput>
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<QuizWhereUniqueInput>
  }

  export type RoundCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<RoundCreateWithoutCategoryInput>, Enumerable<RoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutCategoryInput>
    createMany?: RoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type QuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<QuizCreateWithoutCategoryInput>, Enumerable<QuizUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuizCreateOrConnectWithoutCategoryInput>
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: Enumerable<QuizWhereUniqueInput>
  }

  export type RoundUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<RoundCreateWithoutCategoryInput>, Enumerable<RoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutCategoryInput>
    createMany?: RoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<RoundWhereUniqueInput>
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

  export type ChoiceCreateNestedOneWithoutQuizAnswerInput = {
    create?: XOR<ChoiceCreateWithoutQuizAnswerInput, ChoiceUncheckedCreateWithoutQuizAnswerInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuizAnswerInput
    connect?: ChoiceWhereUniqueInput
  }

  export type ChoiceCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuizInput>, Enumerable<ChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuizInput>
    createMany?: ChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type RoundQuizCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutQuizInput>, Enumerable<RoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuizInput>
    createMany?: RoundQuizCreateManyQuizInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type CategoryCreateNestedOneWithoutQuizInput = {
    create?: XOR<CategoryCreateWithoutQuizInput, CategoryUncheckedCreateWithoutQuizInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuizInput
    connect?: CategoryWhereUniqueInput
  }

  export type ChoiceUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuizInput>, Enumerable<ChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuizInput>
    createMany?: ChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type RoundQuizUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutQuizInput>, Enumerable<RoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuizInput>
    createMany?: RoundQuizCreateManyQuizInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput = {
    create?: XOR<ChoiceCreateWithoutQuizAnswerInput, ChoiceUncheckedCreateWithoutQuizAnswerInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuizAnswerInput
    upsert?: ChoiceUpsertWithoutQuizAnswerInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<ChoiceUpdateWithoutQuizAnswerInput, ChoiceUncheckedUpdateWithoutQuizAnswerInput>
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

  export type RoundQuizUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutQuizInput>, Enumerable<RoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: RoundQuizCreateManyQuizInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type CategoryUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<CategoryCreateWithoutQuizInput, CategoryUncheckedCreateWithoutQuizInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuizInput
    upsert?: CategoryUpsertWithoutQuizInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutQuizInput, CategoryUncheckedUpdateWithoutQuizInput>
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

  export type RoundQuizUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutQuizInput>, Enumerable<RoundQuizUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: RoundQuizCreateManyQuizInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type QuizCreateNestedOneWithoutChoicesInput = {
    create?: XOR<QuizCreateWithoutChoicesInput, QuizUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuizCreateOrConnectWithoutChoicesInput
    connect?: QuizWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuizCreateWithoutAnswerInput, QuizUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAnswerInput
    connect?: QuizWhereUniqueInput
  }

  export type RoundQuizCreateNestedManyWithoutChoiceInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutChoiceInput>, Enumerable<RoundQuizUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutChoiceInput>
    createMany?: RoundQuizCreateManyChoiceInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type QuizUncheckedCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuizCreateWithoutAnswerInput, QuizUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAnswerInput
    connect?: QuizWhereUniqueInput
  }

  export type RoundQuizUncheckedCreateNestedManyWithoutChoiceInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutChoiceInput>, Enumerable<RoundQuizUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutChoiceInput>
    createMany?: RoundQuizCreateManyChoiceInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
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

  export type QuizUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<QuizCreateWithoutAnswerInput, QuizUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAnswerInput
    upsert?: QuizUpsertWithoutAnswerInput
    disconnect?: boolean
    delete?: boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<QuizUpdateWithoutAnswerInput, QuizUncheckedUpdateWithoutAnswerInput>
  }

  export type RoundQuizUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutChoiceInput>, Enumerable<RoundQuizUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutChoiceInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutChoiceInput>
    createMany?: RoundQuizCreateManyChoiceInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutChoiceInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutChoiceInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type QuizUncheckedUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<QuizCreateWithoutAnswerInput, QuizUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAnswerInput
    upsert?: QuizUpsertWithoutAnswerInput
    disconnect?: boolean
    delete?: boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<QuizUpdateWithoutAnswerInput, QuizUncheckedUpdateWithoutAnswerInput>
  }

  export type RoundQuizUncheckedUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutChoiceInput>, Enumerable<RoundQuizUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutChoiceInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutChoiceInput>
    createMany?: RoundQuizCreateManyChoiceInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutChoiceInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutChoiceInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type RoundQuizCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutRoundInput>, Enumerable<RoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutRoundInput>
    createMany?: RoundQuizCreateManyRoundInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type CategoryCreateNestedOneWithoutRoundsInput = {
    create?: XOR<CategoryCreateWithoutRoundsInput, CategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRoundsInput
    connect?: CategoryWhereUniqueInput
  }

  export type RoundQuizUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutRoundInput>, Enumerable<RoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutRoundInput>
    createMany?: RoundQuizCreateManyRoundInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type RoundQuizUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutRoundInput>, Enumerable<RoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: RoundQuizCreateManyRoundInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type CategoryUpdateOneWithoutRoundsNestedInput = {
    create?: XOR<CategoryCreateWithoutRoundsInput, CategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRoundsInput
    upsert?: CategoryUpsertWithoutRoundsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutRoundsInput, CategoryUncheckedUpdateWithoutRoundsInput>
  }

  export type RoundQuizUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutRoundInput>, Enumerable<RoundQuizUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: RoundQuizCreateManyRoundInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type RoundCreateNestedOneWithoutRoundQiuzInput = {
    create?: XOR<RoundCreateWithoutRoundQiuzInput, RoundUncheckedCreateWithoutRoundQiuzInput>
    connectOrCreate?: RoundCreateOrConnectWithoutRoundQiuzInput
    connect?: RoundWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutRoundQuizInput = {
    create?: XOR<ChoiceCreateWithoutRoundQuizInput, ChoiceUncheckedCreateWithoutRoundQuizInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutRoundQuizInput
    connect?: ChoiceWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutRoundQuizInput = {
    create?: XOR<QuizCreateWithoutRoundQuizInput, QuizUncheckedCreateWithoutRoundQuizInput>
    connectOrCreate?: QuizCreateOrConnectWithoutRoundQuizInput
    connect?: QuizWhereUniqueInput
  }

  export type RoundUpdateOneWithoutRoundQiuzNestedInput = {
    create?: XOR<RoundCreateWithoutRoundQiuzInput, RoundUncheckedCreateWithoutRoundQiuzInput>
    connectOrCreate?: RoundCreateOrConnectWithoutRoundQiuzInput
    upsert?: RoundUpsertWithoutRoundQiuzInput
    disconnect?: boolean
    delete?: boolean
    connect?: RoundWhereUniqueInput
    update?: XOR<RoundUpdateWithoutRoundQiuzInput, RoundUncheckedUpdateWithoutRoundQiuzInput>
  }

  export type ChoiceUpdateOneWithoutRoundQuizNestedInput = {
    create?: XOR<ChoiceCreateWithoutRoundQuizInput, ChoiceUncheckedCreateWithoutRoundQuizInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutRoundQuizInput
    upsert?: ChoiceUpsertWithoutRoundQuizInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChoiceWhereUniqueInput
    update?: XOR<ChoiceUpdateWithoutRoundQuizInput, ChoiceUncheckedUpdateWithoutRoundQuizInput>
  }

  export type QuizUpdateOneWithoutRoundQuizNestedInput = {
    create?: XOR<QuizCreateWithoutRoundQuizInput, QuizUncheckedCreateWithoutRoundQuizInput>
    connectOrCreate?: QuizCreateOrConnectWithoutRoundQuizInput
    upsert?: QuizUpsertWithoutRoundQuizInput
    disconnect?: boolean
    delete?: boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<QuizUpdateWithoutRoundQuizInput, QuizUncheckedUpdateWithoutRoundQuizInput>
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

  export type QuizCreateWithoutCategoryInput = {
    quiz: string
    categoryNameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: ChoiceCreateNestedOneWithoutQuizAnswerInput
    choices?: ChoiceCreateNestedManyWithoutQuizInput
    roundQuiz?: RoundQuizCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCategoryInput = {
    id?: number
    quiz: string
    categoryNameId?: number | null
    quizAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuizInput
    roundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizCreateManyCategoryInputEnvelope = {
    data: Enumerable<QuizCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutCategoryInput = {
    createdAt?: Date | string
    updateAt?: Date | string
    roundQiuz?: RoundQuizCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutCategoryInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    roundQiuz?: RoundQuizUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutCategoryInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutCategoryInput, RoundUncheckedCreateWithoutCategoryInput>
  }

  export type RoundCreateManyCategoryInputEnvelope = {
    data: Enumerable<RoundCreateManyCategoryInput>
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
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuizScalarWhereInput = {
    AND?: Enumerable<QuizScalarWhereInput>
    OR?: Enumerable<QuizScalarWhereInput>
    NOT?: Enumerable<QuizScalarWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    categoryNameId?: IntNullableFilter | number | null
    quizAnswerId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    categoryId?: IntFilter | number
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
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutRoundsInput>
  }

  export type RoundScalarWhereInput = {
    AND?: Enumerable<RoundScalarWhereInput>
    OR?: Enumerable<RoundScalarWhereInput>
    NOT?: Enumerable<RoundScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    categoryId?: IntNullableFilter | number | null
  }

  export type ChoiceCreateWithoutQuizAnswerInput = {
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizCreateNestedOneWithoutChoicesInput
    roundQuiz?: RoundQuizCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutQuizAnswerInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizId?: number | null
    roundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceCreateOrConnectWithoutQuizAnswerInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuizAnswerInput, ChoiceUncheckedCreateWithoutQuizAnswerInput>
  }

  export type ChoiceCreateWithoutQuizInput = {
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizAnswer?: QuizCreateNestedOneWithoutAnswerInput
    roundQuiz?: RoundQuizCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutQuizInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizAnswer?: QuizUncheckedCreateNestedOneWithoutAnswerInput
    roundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceCreateOrConnectWithoutQuizInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuizInput, ChoiceUncheckedCreateWithoutQuizInput>
  }

  export type ChoiceCreateManyQuizInputEnvelope = {
    data: Enumerable<ChoiceCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type RoundQuizCreateWithoutQuizInput = {
    category: string
    createdAt?: Date | string
    round?: RoundCreateNestedOneWithoutRoundQiuzInput
    choice?: ChoiceCreateNestedOneWithoutRoundQuizInput
  }

  export type RoundQuizUncheckedCreateWithoutQuizInput = {
    id?: number
    category: string
    createdAt?: Date | string
    roundId?: number | null
    choiceId?: number | null
  }

  export type RoundQuizCreateOrConnectWithoutQuizInput = {
    where: RoundQuizWhereUniqueInput
    create: XOR<RoundQuizCreateWithoutQuizInput, RoundQuizUncheckedCreateWithoutQuizInput>
  }

  export type RoundQuizCreateManyQuizInputEnvelope = {
    data: Enumerable<RoundQuizCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutQuizInput = {
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutQuizInput = {
    id?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutQuizInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutQuizInput, CategoryUncheckedCreateWithoutQuizInput>
  }

  export type ChoiceUpsertWithoutQuizAnswerInput = {
    update: XOR<ChoiceUpdateWithoutQuizAnswerInput, ChoiceUncheckedUpdateWithoutQuizAnswerInput>
    create: XOR<ChoiceCreateWithoutQuizAnswerInput, ChoiceUncheckedCreateWithoutQuizAnswerInput>
  }

  export type ChoiceUpdateWithoutQuizAnswerInput = {
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneWithoutChoicesNestedInput
    roundQuiz?: RoundQuizUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutQuizAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    roundQuiz?: RoundQuizUncheckedUpdateManyWithoutChoiceNestedInput
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
    choice?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    quizId?: IntNullableFilter | number | null
  }

  export type RoundQuizUpsertWithWhereUniqueWithoutQuizInput = {
    where: RoundQuizWhereUniqueInput
    update: XOR<RoundQuizUpdateWithoutQuizInput, RoundQuizUncheckedUpdateWithoutQuizInput>
    create: XOR<RoundQuizCreateWithoutQuizInput, RoundQuizUncheckedCreateWithoutQuizInput>
  }

  export type RoundQuizUpdateWithWhereUniqueWithoutQuizInput = {
    where: RoundQuizWhereUniqueInput
    data: XOR<RoundQuizUpdateWithoutQuizInput, RoundQuizUncheckedUpdateWithoutQuizInput>
  }

  export type RoundQuizUpdateManyWithWhereWithoutQuizInput = {
    where: RoundQuizScalarWhereInput
    data: XOR<RoundQuizUpdateManyMutationInput, RoundQuizUncheckedUpdateManyWithoutRoundQuizInput>
  }

  export type RoundQuizScalarWhereInput = {
    AND?: Enumerable<RoundQuizScalarWhereInput>
    OR?: Enumerable<RoundQuizScalarWhereInput>
    NOT?: Enumerable<RoundQuizScalarWhereInput>
    id?: IntFilter | number
    category?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    roundId?: IntNullableFilter | number | null
    choiceId?: IntNullableFilter | number | null
    quizId?: IntNullableFilter | number | null
  }

  export type CategoryUpsertWithoutQuizInput = {
    update: XOR<CategoryUpdateWithoutQuizInput, CategoryUncheckedUpdateWithoutQuizInput>
    create: XOR<CategoryCreateWithoutQuizInput, CategoryUncheckedCreateWithoutQuizInput>
  }

  export type CategoryUpdateWithoutQuizInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type QuizCreateWithoutChoicesInput = {
    quiz: string
    categoryNameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: ChoiceCreateNestedOneWithoutQuizAnswerInput
    roundQuiz?: RoundQuizCreateNestedManyWithoutQuizInput
    category: CategoryCreateNestedOneWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutChoicesInput = {
    id?: number
    quiz: string
    categoryNameId?: number | null
    quizAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    roundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutChoicesInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutChoicesInput, QuizUncheckedCreateWithoutChoicesInput>
  }

  export type QuizCreateWithoutAnswerInput = {
    quiz: string
    categoryNameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: ChoiceCreateNestedManyWithoutQuizInput
    roundQuiz?: RoundQuizCreateNestedManyWithoutQuizInput
    category: CategoryCreateNestedOneWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutAnswerInput = {
    id?: number
    quiz: string
    categoryNameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuizInput
    roundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutAnswerInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutAnswerInput, QuizUncheckedCreateWithoutAnswerInput>
  }

  export type RoundQuizCreateWithoutChoiceInput = {
    category: string
    createdAt?: Date | string
    round?: RoundCreateNestedOneWithoutRoundQiuzInput
    quiz?: QuizCreateNestedOneWithoutRoundQuizInput
  }

  export type RoundQuizUncheckedCreateWithoutChoiceInput = {
    id?: number
    category: string
    createdAt?: Date | string
    roundId?: number | null
    quizId?: number | null
  }

  export type RoundQuizCreateOrConnectWithoutChoiceInput = {
    where: RoundQuizWhereUniqueInput
    create: XOR<RoundQuizCreateWithoutChoiceInput, RoundQuizUncheckedCreateWithoutChoiceInput>
  }

  export type RoundQuizCreateManyChoiceInputEnvelope = {
    data: Enumerable<RoundQuizCreateManyChoiceInput>
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutChoicesInput = {
    update: XOR<QuizUpdateWithoutChoicesInput, QuizUncheckedUpdateWithoutChoicesInput>
    create: XOR<QuizCreateWithoutChoicesInput, QuizUncheckedCreateWithoutChoicesInput>
  }

  export type QuizUpdateWithoutChoicesInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: ChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput
    roundQuiz?: RoundQuizUpdateManyWithoutQuizNestedInput
    category?: CategoryUpdateOneRequiredWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    roundQuiz?: RoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUpsertWithoutAnswerInput = {
    update: XOR<QuizUpdateWithoutAnswerInput, QuizUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuizCreateWithoutAnswerInput, QuizUncheckedCreateWithoutAnswerInput>
  }

  export type QuizUpdateWithoutAnswerInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUpdateManyWithoutQuizNestedInput
    roundQuiz?: RoundQuizUpdateManyWithoutQuizNestedInput
    category?: CategoryUpdateOneRequiredWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuizNestedInput
    roundQuiz?: RoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type RoundQuizUpsertWithWhereUniqueWithoutChoiceInput = {
    where: RoundQuizWhereUniqueInput
    update: XOR<RoundQuizUpdateWithoutChoiceInput, RoundQuizUncheckedUpdateWithoutChoiceInput>
    create: XOR<RoundQuizCreateWithoutChoiceInput, RoundQuizUncheckedCreateWithoutChoiceInput>
  }

  export type RoundQuizUpdateWithWhereUniqueWithoutChoiceInput = {
    where: RoundQuizWhereUniqueInput
    data: XOR<RoundQuizUpdateWithoutChoiceInput, RoundQuizUncheckedUpdateWithoutChoiceInput>
  }

  export type RoundQuizUpdateManyWithWhereWithoutChoiceInput = {
    where: RoundQuizScalarWhereInput
    data: XOR<RoundQuizUpdateManyMutationInput, RoundQuizUncheckedUpdateManyWithoutRoundQuizInput>
  }

  export type RoundQuizCreateWithoutRoundInput = {
    category: string
    createdAt?: Date | string
    choice?: ChoiceCreateNestedOneWithoutRoundQuizInput
    quiz?: QuizCreateNestedOneWithoutRoundQuizInput
  }

  export type RoundQuizUncheckedCreateWithoutRoundInput = {
    id?: number
    category: string
    createdAt?: Date | string
    choiceId?: number | null
    quizId?: number | null
  }

  export type RoundQuizCreateOrConnectWithoutRoundInput = {
    where: RoundQuizWhereUniqueInput
    create: XOR<RoundQuizCreateWithoutRoundInput, RoundQuizUncheckedCreateWithoutRoundInput>
  }

  export type RoundQuizCreateManyRoundInputEnvelope = {
    data: Enumerable<RoundQuizCreateManyRoundInput>
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutRoundsInput = {
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutRoundsInput = {
    id?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutRoundsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRoundsInput, CategoryUncheckedCreateWithoutRoundsInput>
  }

  export type RoundQuizUpsertWithWhereUniqueWithoutRoundInput = {
    where: RoundQuizWhereUniqueInput
    update: XOR<RoundQuizUpdateWithoutRoundInput, RoundQuizUncheckedUpdateWithoutRoundInput>
    create: XOR<RoundQuizCreateWithoutRoundInput, RoundQuizUncheckedCreateWithoutRoundInput>
  }

  export type RoundQuizUpdateWithWhereUniqueWithoutRoundInput = {
    where: RoundQuizWhereUniqueInput
    data: XOR<RoundQuizUpdateWithoutRoundInput, RoundQuizUncheckedUpdateWithoutRoundInput>
  }

  export type RoundQuizUpdateManyWithWhereWithoutRoundInput = {
    where: RoundQuizScalarWhereInput
    data: XOR<RoundQuizUpdateManyMutationInput, RoundQuizUncheckedUpdateManyWithoutRoundQiuzInput>
  }

  export type CategoryUpsertWithoutRoundsInput = {
    update: XOR<CategoryUpdateWithoutRoundsInput, CategoryUncheckedUpdateWithoutRoundsInput>
    create: XOR<CategoryCreateWithoutRoundsInput, CategoryUncheckedCreateWithoutRoundsInput>
  }

  export type CategoryUpdateWithoutRoundsInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type RoundCreateWithoutRoundQiuzInput = {
    createdAt?: Date | string
    updateAt?: Date | string
    Category?: CategoryCreateNestedOneWithoutRoundsInput
  }

  export type RoundUncheckedCreateWithoutRoundQiuzInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    categoryId?: number | null
  }

  export type RoundCreateOrConnectWithoutRoundQiuzInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutRoundQiuzInput, RoundUncheckedCreateWithoutRoundQiuzInput>
  }

  export type ChoiceCreateWithoutRoundQuizInput = {
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quiz?: QuizCreateNestedOneWithoutChoicesInput
    quizAnswer?: QuizCreateNestedOneWithoutAnswerInput
  }

  export type ChoiceUncheckedCreateWithoutRoundQuizInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizId?: number | null
    quizAnswer?: QuizUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type ChoiceCreateOrConnectWithoutRoundQuizInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutRoundQuizInput, ChoiceUncheckedCreateWithoutRoundQuizInput>
  }

  export type QuizCreateWithoutRoundQuizInput = {
    quiz: string
    categoryNameId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    answer: ChoiceCreateNestedOneWithoutQuizAnswerInput
    choices?: ChoiceCreateNestedManyWithoutQuizInput
    category: CategoryCreateNestedOneWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutRoundQuizInput = {
    id?: number
    quiz: string
    categoryNameId?: number | null
    quizAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutRoundQuizInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutRoundQuizInput, QuizUncheckedCreateWithoutRoundQuizInput>
  }

  export type RoundUpsertWithoutRoundQiuzInput = {
    update: XOR<RoundUpdateWithoutRoundQiuzInput, RoundUncheckedUpdateWithoutRoundQiuzInput>
    create: XOR<RoundCreateWithoutRoundQiuzInput, RoundUncheckedCreateWithoutRoundQiuzInput>
  }

  export type RoundUpdateWithoutRoundQiuzInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneWithoutRoundsNestedInput
  }

  export type RoundUncheckedUpdateWithoutRoundQiuzInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChoiceUpsertWithoutRoundQuizInput = {
    update: XOR<ChoiceUpdateWithoutRoundQuizInput, ChoiceUncheckedUpdateWithoutRoundQuizInput>
    create: XOR<ChoiceCreateWithoutRoundQuizInput, ChoiceUncheckedCreateWithoutRoundQuizInput>
  }

  export type ChoiceUpdateWithoutRoundQuizInput = {
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneWithoutChoicesNestedInput
    quizAnswer?: QuizUpdateOneWithoutAnswerNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswer?: QuizUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type QuizUpsertWithoutRoundQuizInput = {
    update: XOR<QuizUpdateWithoutRoundQuizInput, QuizUncheckedUpdateWithoutRoundQuizInput>
    create: XOR<QuizCreateWithoutRoundQuizInput, QuizUncheckedCreateWithoutRoundQuizInput>
  }

  export type QuizUpdateWithoutRoundQuizInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: ChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput
    choices?: ChoiceUpdateManyWithoutQuizNestedInput
    category?: CategoryUpdateOneRequiredWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyCategoryInput = {
    id?: number
    quiz: string
    categoryNameId?: number | null
    quizAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundCreateManyCategoryInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type QuizUpdateWithoutCategoryInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: ChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput
    choices?: ChoiceUpdateManyWithoutQuizNestedInput
    roundQuiz?: RoundQuizUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuizNestedInput
    roundQuiz?: RoundQuizUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryNameId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUpdateWithoutCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQiuz?: RoundQuizUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQiuz?: RoundQuizUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateManyQuizInput = {
    id?: number
    choice: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundQuizCreateManyQuizInput = {
    id?: number
    category: string
    createdAt?: Date | string
    roundId?: number | null
    choiceId?: number | null
  }

  export type ChoiceUpdateWithoutQuizInput = {
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizAnswer?: QuizUpdateOneWithoutAnswerNestedInput
    roundQuiz?: RoundQuizUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizAnswer?: QuizUncheckedUpdateOneWithoutAnswerNestedInput
    roundQuiz?: RoundQuizUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuizUpdateWithoutQuizInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    round?: RoundUpdateOneWithoutRoundQiuzNestedInput
    choice?: ChoiceUpdateOneWithoutRoundQuizNestedInput
  }

  export type RoundQuizUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
    choiceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundQuizUncheckedUpdateManyWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
    choiceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundQuizCreateManyChoiceInput = {
    id?: number
    category: string
    createdAt?: Date | string
    roundId?: number | null
    quizId?: number | null
  }

  export type RoundQuizUpdateWithoutChoiceInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    round?: RoundUpdateOneWithoutRoundQiuzNestedInput
    quiz?: QuizUpdateOneWithoutRoundQuizNestedInput
  }

  export type RoundQuizUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundQuizCreateManyRoundInput = {
    id?: number
    category: string
    createdAt?: Date | string
    choiceId?: number | null
    quizId?: number | null
  }

  export type RoundQuizUpdateWithoutRoundInput = {
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUpdateOneWithoutRoundQuizNestedInput
    quiz?: QuizUpdateOneWithoutRoundQuizNestedInput
  }

  export type RoundQuizUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choiceId?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundQuizUncheckedUpdateManyWithoutRoundQiuzInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choiceId?: NullableIntFieldUpdateOperationsInput | number | null
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
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