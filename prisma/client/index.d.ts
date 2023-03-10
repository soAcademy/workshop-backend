
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model QuestionCategory
 * 
 */
export type QuestionCategory = {
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
  questionCategoryId: number
  textQuestion: string
  answerId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model Choice
 * 
 */
export type Choice = {
  id: number
  choiceName: string
  questionId: number | null
  createAt: Date
  updateAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  createAt: Date
  updateAt: Date
}

/**
 * Model RoundQuiz
 * 
 */
export type RoundQuiz = {
  id: number
  questionCategoryId: number
  score: number
  userId: number
  createAt: Date
  updateAt: Date
}

/**
 * Model RoundDetail
 * 
 */
export type RoundDetail = {
  id: number
  roundQuizId: number
  questionId: number
  questionOrder: number
  userChoose: number
  result: boolean
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
 * // Fetch zero or more QuestionCategories
 * const questionCategories = await prisma.questionCategory.findMany()
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
   * // Fetch zero or more QuestionCategories
   * const questionCategories = await prisma.questionCategory.findMany()
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
   * `prisma.questionCategory`: Exposes CRUD operations for the **QuestionCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionCategories
    * const questionCategories = await prisma.questionCategory.findMany()
    * ```
    */
  get questionCategory(): Prisma.QuestionCategoryDelegate<GlobalReject>;

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
   * `prisma.choice`: Exposes CRUD operations for the **Choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.ChoiceDelegate<GlobalReject>;

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
   * `prisma.roundQuiz`: Exposes CRUD operations for the **RoundQuiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoundQuizs
    * const roundQuizs = await prisma.roundQuiz.findMany()
    * ```
    */
  get roundQuiz(): Prisma.RoundQuizDelegate<GlobalReject>;

  /**
   * `prisma.roundDetail`: Exposes CRUD operations for the **RoundDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoundDetails
    * const roundDetails = await prisma.roundDetail.findMany()
    * ```
    */
  get roundDetail(): Prisma.RoundDetailDelegate<GlobalReject>;
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
    QuestionCategory: 'QuestionCategory',
    Question: 'Question',
    Choice: 'Choice',
    User: 'User',
    RoundQuiz: 'RoundQuiz',
    RoundDetail: 'RoundDetail'
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
   * Count Type QuestionCategoryCountOutputType
   */


  export type QuestionCategoryCountOutputType = {
    Question: number
    RoundQuiz: number
  }

  export type QuestionCategoryCountOutputTypeSelect = {
    Question?: boolean
    RoundQuiz?: boolean
  }

  export type QuestionCategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | QuestionCategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QuestionCategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (QuestionCategoryCountOutputTypeArgs)
    ? QuestionCategoryCountOutputType 
    : S extends { select: any } & (QuestionCategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof QuestionCategoryCountOutputType ? QuestionCategoryCountOutputType[P] : never
  } 
      : QuestionCategoryCountOutputType




  // Custom InputTypes

  /**
   * QuestionCategoryCountOutputType without action
   */
  export type QuestionCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategoryCountOutputType
     */
    select?: QuestionCategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type QuestionCountOutputType
   */


  export type QuestionCountOutputType = {
    choice: number
    RoundDetail: number
  }

  export type QuestionCountOutputTypeSelect = {
    choice?: boolean
    RoundDetail?: boolean
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
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    RoundQuiz: number
  }

  export type UserCountOutputTypeSelect = {
    RoundQuiz?: boolean
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
   * Count Type RoundQuizCountOutputType
   */


  export type RoundQuizCountOutputType = {
    RoundDetail: number
  }

  export type RoundQuizCountOutputTypeSelect = {
    RoundDetail?: boolean
  }

  export type RoundQuizCountOutputTypeGetPayload<S extends boolean | null | undefined | RoundQuizCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundQuizCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoundQuizCountOutputTypeArgs)
    ? RoundQuizCountOutputType 
    : S extends { select: any } & (RoundQuizCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoundQuizCountOutputType ? RoundQuizCountOutputType[P] : never
  } 
      : RoundQuizCountOutputType




  // Custom InputTypes

  /**
   * RoundQuizCountOutputType without action
   */
  export type RoundQuizCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoundQuizCountOutputType
     */
    select?: RoundQuizCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model QuestionCategory
   */


  export type AggregateQuestionCategory = {
    _count: QuestionCategoryCountAggregateOutputType | null
    _avg: QuestionCategoryAvgAggregateOutputType | null
    _sum: QuestionCategorySumAggregateOutputType | null
    _min: QuestionCategoryMinAggregateOutputType | null
    _max: QuestionCategoryMaxAggregateOutputType | null
  }

  export type QuestionCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionCategorySumAggregateOutputType = {
    id: number | null
  }

  export type QuestionCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionCategoryCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type QuestionCategoryAvgAggregateInputType = {
    id?: true
  }

  export type QuestionCategorySumAggregateInputType = {
    id?: true
  }

  export type QuestionCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type QuestionCategoryAggregateArgs = {
    /**
     * Filter which QuestionCategory to aggregate.
     */
    where?: QuestionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionCategories to fetch.
     */
    orderBy?: Enumerable<QuestionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionCategories
    **/
    _count?: true | QuestionCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionCategoryMaxAggregateInputType
  }

  export type GetQuestionCategoryAggregateType<T extends QuestionCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionCategory[P]>
      : GetScalarType<T[P], AggregateQuestionCategory[P]>
  }




  export type QuestionCategoryGroupByArgs = {
    where?: QuestionCategoryWhereInput
    orderBy?: Enumerable<QuestionCategoryOrderByWithAggregationInput>
    by: QuestionCategoryScalarFieldEnum[]
    having?: QuestionCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCategoryCountAggregateInputType | true
    _avg?: QuestionCategoryAvgAggregateInputType
    _sum?: QuestionCategorySumAggregateInputType
    _min?: QuestionCategoryMinAggregateInputType
    _max?: QuestionCategoryMaxAggregateInputType
  }


  export type QuestionCategoryGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    updateAt: Date
    _count: QuestionCategoryCountAggregateOutputType | null
    _avg: QuestionCategoryAvgAggregateOutputType | null
    _sum: QuestionCategorySumAggregateOutputType | null
    _min: QuestionCategoryMinAggregateOutputType | null
    _max: QuestionCategoryMaxAggregateOutputType | null
  }

  type GetQuestionCategoryGroupByPayload<T extends QuestionCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuestionCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionCategoryGroupByOutputType[P]>
        }
      >
    >


  export type QuestionCategorySelect = {
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    Question?: boolean | QuestionCategory$QuestionArgs
    RoundQuiz?: boolean | QuestionCategory$RoundQuizArgs
    _count?: boolean | QuestionCategoryCountOutputTypeArgs
  }


  export type QuestionCategoryInclude = {
    Question?: boolean | QuestionCategory$QuestionArgs
    RoundQuiz?: boolean | QuestionCategory$RoundQuizArgs
    _count?: boolean | QuestionCategoryCountOutputTypeArgs
  }

  export type QuestionCategoryGetPayload<S extends boolean | null | undefined | QuestionCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QuestionCategory :
    S extends undefined ? never :
    S extends { include: any } & (QuestionCategoryArgs | QuestionCategoryFindManyArgs)
    ? QuestionCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Question' ? Array < QuestionGetPayload<S['include'][P]>>  :
        P extends 'RoundQuiz' ? Array < RoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuestionCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuestionCategoryArgs | QuestionCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Question' ? Array < QuestionGetPayload<S['select'][P]>>  :
        P extends 'RoundQuiz' ? Array < RoundQuizGetPayload<S['select'][P]>>  :
        P extends '_count' ? QuestionCategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof QuestionCategory ? QuestionCategory[P] : never
  } 
      : QuestionCategory


  type QuestionCategoryCountArgs = 
    Omit<QuestionCategoryFindManyArgs, 'select' | 'include'> & {
      select?: QuestionCategoryCountAggregateInputType | true
    }

  export interface QuestionCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one QuestionCategory that matches the filter.
     * @param {QuestionCategoryFindUniqueArgs} args - Arguments to find a QuestionCategory
     * @example
     * // Get one QuestionCategory
     * const questionCategory = await prisma.questionCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionCategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionCategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'QuestionCategory'> extends True ? Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>> : Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T> | null, null>

    /**
     * Find one QuestionCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestionCategoryFindUniqueOrThrowArgs} args - Arguments to find a QuestionCategory
     * @example
     * // Get one QuestionCategory
     * const questionCategory = await prisma.questionCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionCategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuestionCategoryFindUniqueOrThrowArgs>
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>

    /**
     * Find the first QuestionCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCategoryFindFirstArgs} args - Arguments to find a QuestionCategory
     * @example
     * // Get one QuestionCategory
     * const questionCategory = await prisma.questionCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionCategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionCategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'QuestionCategory'> extends True ? Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>> : Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T> | null, null>

    /**
     * Find the first QuestionCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCategoryFindFirstOrThrowArgs} args - Arguments to find a QuestionCategory
     * @example
     * // Get one QuestionCategory
     * const questionCategory = await prisma.questionCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionCategoryFindFirstOrThrowArgs>
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>

    /**
     * Find zero or more QuestionCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionCategories
     * const questionCategories = await prisma.questionCategory.findMany()
     * 
     * // Get first 10 QuestionCategories
     * const questionCategories = await prisma.questionCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionCategoryWithIdOnly = await prisma.questionCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionCategoryFindManyArgs>(
      args?: SelectSubset<T, QuestionCategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<QuestionCategoryGetPayload<T>>>

    /**
     * Create a QuestionCategory.
     * @param {QuestionCategoryCreateArgs} args - Arguments to create a QuestionCategory.
     * @example
     * // Create one QuestionCategory
     * const QuestionCategory = await prisma.questionCategory.create({
     *   data: {
     *     // ... data to create a QuestionCategory
     *   }
     * })
     * 
    **/
    create<T extends QuestionCategoryCreateArgs>(
      args: SelectSubset<T, QuestionCategoryCreateArgs>
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>

    /**
     * Create many QuestionCategories.
     *     @param {QuestionCategoryCreateManyArgs} args - Arguments to create many QuestionCategories.
     *     @example
     *     // Create many QuestionCategories
     *     const questionCategory = await prisma.questionCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionCategoryCreateManyArgs>(
      args?: SelectSubset<T, QuestionCategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuestionCategory.
     * @param {QuestionCategoryDeleteArgs} args - Arguments to delete one QuestionCategory.
     * @example
     * // Delete one QuestionCategory
     * const QuestionCategory = await prisma.questionCategory.delete({
     *   where: {
     *     // ... filter to delete one QuestionCategory
     *   }
     * })
     * 
    **/
    delete<T extends QuestionCategoryDeleteArgs>(
      args: SelectSubset<T, QuestionCategoryDeleteArgs>
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>

    /**
     * Update one QuestionCategory.
     * @param {QuestionCategoryUpdateArgs} args - Arguments to update one QuestionCategory.
     * @example
     * // Update one QuestionCategory
     * const questionCategory = await prisma.questionCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionCategoryUpdateArgs>(
      args: SelectSubset<T, QuestionCategoryUpdateArgs>
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>

    /**
     * Delete zero or more QuestionCategories.
     * @param {QuestionCategoryDeleteManyArgs} args - Arguments to filter QuestionCategories to delete.
     * @example
     * // Delete a few QuestionCategories
     * const { count } = await prisma.questionCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionCategoryDeleteManyArgs>(
      args?: SelectSubset<T, QuestionCategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionCategories
     * const questionCategory = await prisma.questionCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionCategoryUpdateManyArgs>(
      args: SelectSubset<T, QuestionCategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionCategory.
     * @param {QuestionCategoryUpsertArgs} args - Arguments to update or create a QuestionCategory.
     * @example
     * // Update or create a QuestionCategory
     * const questionCategory = await prisma.questionCategory.upsert({
     *   create: {
     *     // ... data to create a QuestionCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionCategory we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionCategoryUpsertArgs>(
      args: SelectSubset<T, QuestionCategoryUpsertArgs>
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>

    /**
     * Count the number of QuestionCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCategoryCountArgs} args - Arguments to filter QuestionCategories to count.
     * @example
     * // Count the number of QuestionCategories
     * const count = await prisma.questionCategory.count({
     *   where: {
     *     // ... the filter for the QuestionCategories we want to count
     *   }
     * })
    **/
    count<T extends QuestionCategoryCountArgs>(
      args?: Subset<T, QuestionCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionCategoryAggregateArgs>(args: Subset<T, QuestionCategoryAggregateArgs>): Prisma.PrismaPromise<GetQuestionCategoryAggregateType<T>>

    /**
     * Group by QuestionCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCategoryGroupByArgs} args - Group by arguments.
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
      T extends QuestionCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionCategoryGroupByArgs['orderBy'] }
        : { orderBy?: QuestionCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionCategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    Question<T extends QuestionCategory$QuestionArgs= {}>(args?: Subset<T, QuestionCategory$QuestionArgs>): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>| Null>;

    RoundQuiz<T extends QuestionCategory$RoundQuizArgs= {}>(args?: Subset<T, QuestionCategory$RoundQuizArgs>): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>>| Null>;

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
   * QuestionCategory base type for findUnique actions
   */
  export type QuestionCategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * Filter, which QuestionCategory to fetch.
     */
    where: QuestionCategoryWhereUniqueInput
  }

  /**
   * QuestionCategory findUnique
   */
  export interface QuestionCategoryFindUniqueArgs extends QuestionCategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QuestionCategory findUniqueOrThrow
   */
  export type QuestionCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * Filter, which QuestionCategory to fetch.
     */
    where: QuestionCategoryWhereUniqueInput
  }


  /**
   * QuestionCategory base type for findFirst actions
   */
  export type QuestionCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * Filter, which QuestionCategory to fetch.
     */
    where?: QuestionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionCategories to fetch.
     */
    orderBy?: Enumerable<QuestionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionCategories.
     */
    cursor?: QuestionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionCategories.
     */
    distinct?: Enumerable<QuestionCategoryScalarFieldEnum>
  }

  /**
   * QuestionCategory findFirst
   */
  export interface QuestionCategoryFindFirstArgs extends QuestionCategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * QuestionCategory findFirstOrThrow
   */
  export type QuestionCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * Filter, which QuestionCategory to fetch.
     */
    where?: QuestionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionCategories to fetch.
     */
    orderBy?: Enumerable<QuestionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionCategories.
     */
    cursor?: QuestionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionCategories.
     */
    distinct?: Enumerable<QuestionCategoryScalarFieldEnum>
  }


  /**
   * QuestionCategory findMany
   */
  export type QuestionCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * Filter, which QuestionCategories to fetch.
     */
    where?: QuestionCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionCategories to fetch.
     */
    orderBy?: Enumerable<QuestionCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionCategories.
     */
    cursor?: QuestionCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionCategories.
     */
    skip?: number
    distinct?: Enumerable<QuestionCategoryScalarFieldEnum>
  }


  /**
   * QuestionCategory create
   */
  export type QuestionCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * The data needed to create a QuestionCategory.
     */
    data: XOR<QuestionCategoryCreateInput, QuestionCategoryUncheckedCreateInput>
  }


  /**
   * QuestionCategory createMany
   */
  export type QuestionCategoryCreateManyArgs = {
    /**
     * The data used to create many QuestionCategories.
     */
    data: Enumerable<QuestionCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * QuestionCategory update
   */
  export type QuestionCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * The data needed to update a QuestionCategory.
     */
    data: XOR<QuestionCategoryUpdateInput, QuestionCategoryUncheckedUpdateInput>
    /**
     * Choose, which QuestionCategory to update.
     */
    where: QuestionCategoryWhereUniqueInput
  }


  /**
   * QuestionCategory updateMany
   */
  export type QuestionCategoryUpdateManyArgs = {
    /**
     * The data used to update QuestionCategories.
     */
    data: XOR<QuestionCategoryUpdateManyMutationInput, QuestionCategoryUncheckedUpdateManyInput>
    /**
     * Filter which QuestionCategories to update
     */
    where?: QuestionCategoryWhereInput
  }


  /**
   * QuestionCategory upsert
   */
  export type QuestionCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * The filter to search for the QuestionCategory to update in case it exists.
     */
    where: QuestionCategoryWhereUniqueInput
    /**
     * In case the QuestionCategory found by the `where` argument doesn't exist, create a new QuestionCategory with this data.
     */
    create: XOR<QuestionCategoryCreateInput, QuestionCategoryUncheckedCreateInput>
    /**
     * In case the QuestionCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionCategoryUpdateInput, QuestionCategoryUncheckedUpdateInput>
  }


  /**
   * QuestionCategory delete
   */
  export type QuestionCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
    /**
     * Filter which QuestionCategory to delete.
     */
    where: QuestionCategoryWhereUniqueInput
  }


  /**
   * QuestionCategory deleteMany
   */
  export type QuestionCategoryDeleteManyArgs = {
    /**
     * Filter which QuestionCategories to delete
     */
    where?: QuestionCategoryWhereInput
  }


  /**
   * QuestionCategory.Question
   */
  export type QuestionCategory$QuestionArgs = {
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
   * QuestionCategory.RoundQuiz
   */
  export type QuestionCategory$RoundQuizArgs = {
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
   * QuestionCategory without action
   */
  export type QuestionCategoryArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null
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
    questionCategoryId: number | null
    answerId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    questionCategoryId: number | null
    answerId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    questionCategoryId: number | null
    textQuestion: string | null
    answerId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    questionCategoryId: number | null
    textQuestion: string | null
    answerId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    questionCategoryId: number
    textQuestion: number
    answerId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    questionCategoryId?: true
    answerId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    questionCategoryId?: true
    answerId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    questionCategoryId?: true
    textQuestion?: true
    answerId?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    questionCategoryId?: true
    textQuestion?: true
    answerId?: true
    createAt?: true
    updateAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    questionCategoryId?: true
    textQuestion?: true
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
    questionCategoryId: number
    textQuestion: string
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
    questionCategories?: boolean | QuestionCategoryArgs
    questionCategoryId?: boolean
    textQuestion?: boolean
    answer?: boolean | ChoiceArgs
    answerId?: boolean
    createAt?: boolean
    updateAt?: boolean
    choice?: boolean | Question$choiceArgs
    RoundDetail?: boolean | Question$RoundDetailArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }


  export type QuestionInclude = {
    questionCategories?: boolean | QuestionCategoryArgs
    answer?: boolean | ChoiceArgs
    choice?: boolean | Question$choiceArgs
    RoundDetail?: boolean | Question$RoundDetailArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }

  export type QuestionGetPayload<S extends boolean | null | undefined | QuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Question :
    S extends undefined ? never :
    S extends { include: any } & (QuestionArgs | QuestionFindManyArgs)
    ? Question  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'questionCategories' ? QuestionCategoryGetPayload<S['include'][P]> :
        P extends 'answer' ? ChoiceGetPayload<S['include'][P]> :
        P extends 'choice' ? Array < ChoiceGetPayload<S['include'][P]>>  :
        P extends 'RoundDetail' ? Array < RoundDetailGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuestionArgs | QuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'questionCategories' ? QuestionCategoryGetPayload<S['select'][P]> :
        P extends 'answer' ? ChoiceGetPayload<S['select'][P]> :
        P extends 'choice' ? Array < ChoiceGetPayload<S['select'][P]>>  :
        P extends 'RoundDetail' ? Array < RoundDetailGetPayload<S['select'][P]>>  :
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

    questionCategories<T extends QuestionCategoryArgs= {}>(args?: Subset<T, QuestionCategoryArgs>): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T> | Null>;

    answer<T extends ChoiceArgs= {}>(args?: Subset<T, ChoiceArgs>): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

    choice<T extends Question$choiceArgs= {}>(args?: Subset<T, Question$choiceArgs>): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>>| Null>;

    RoundDetail<T extends Question$RoundDetailArgs= {}>(args?: Subset<T, Question$RoundDetailArgs>): Prisma.PrismaPromise<Array<RoundDetailGetPayload<T>>| Null>;

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
   * Question.choice
   */
  export type Question$choiceArgs = {
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
   * Question.RoundDetail
   */
  export type Question$RoundDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    where?: RoundDetailWhereInput
    orderBy?: Enumerable<RoundDetailOrderByWithRelationInput>
    cursor?: RoundDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundDetailScalarFieldEnum>
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
    questionId: number | null
  }

  export type ChoiceSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: number | null
    choiceName: string | null
    questionId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: number | null
    choiceName: string | null
    questionId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    choiceName: number
    questionId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ChoiceAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type ChoiceSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type ChoiceMinAggregateInputType = {
    id?: true
    choiceName?: true
    questionId?: true
    createAt?: true
    updateAt?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    choiceName?: true
    questionId?: true
    createAt?: true
    updateAt?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    choiceName?: true
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
    choiceName: string
    questionId: number | null
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
    choiceName?: boolean
    question?: boolean | QuestionArgs
    questionId?: boolean
    questionAnswer?: boolean | QuestionArgs
    createAt?: boolean
    updateAt?: boolean
  }


  export type ChoiceInclude = {
    question?: boolean | QuestionArgs
    questionAnswer?: boolean | QuestionArgs
  }

  export type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Choice :
    S extends undefined ? never :
    S extends { include: any } & (ChoiceArgs | ChoiceFindManyArgs)
    ? Choice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'question' ? QuestionGetPayload<S['include'][P]> | null :
        P extends 'questionAnswer' ? QuestionGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ChoiceArgs | ChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'question' ? QuestionGetPayload<S['select'][P]> | null :
        P extends 'questionAnswer' ? QuestionGetPayload<S['select'][P]> | null :  P extends keyof Choice ? Choice[P] : never
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

    questionAnswer<T extends QuestionArgs= {}>(args?: Subset<T, QuestionArgs>): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

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
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
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
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
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
    createAt?: boolean
    updateAt?: boolean
    RoundQuiz?: boolean | User$RoundQuizArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    RoundQuiz?: boolean | User$RoundQuizArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'RoundQuiz' ? Array < RoundQuizGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'RoundQuiz' ? Array < RoundQuizGetPayload<S['select'][P]>>  :
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

    RoundQuiz<T extends User$RoundQuizArgs= {}>(args?: Subset<T, User$RoundQuizArgs>): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>>| Null>;

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
   * User.RoundQuiz
   */
  export type User$RoundQuizArgs = {
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
    questionCategoryId: number | null
    score: number | null
    userId: number | null
  }

  export type RoundQuizSumAggregateOutputType = {
    id: number | null
    questionCategoryId: number | null
    score: number | null
    userId: number | null
  }

  export type RoundQuizMinAggregateOutputType = {
    id: number | null
    questionCategoryId: number | null
    score: number | null
    userId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoundQuizMaxAggregateOutputType = {
    id: number | null
    questionCategoryId: number | null
    score: number | null
    userId: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoundQuizCountAggregateOutputType = {
    id: number
    questionCategoryId: number
    score: number
    userId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type RoundQuizAvgAggregateInputType = {
    id?: true
    questionCategoryId?: true
    score?: true
    userId?: true
  }

  export type RoundQuizSumAggregateInputType = {
    id?: true
    questionCategoryId?: true
    score?: true
    userId?: true
  }

  export type RoundQuizMinAggregateInputType = {
    id?: true
    questionCategoryId?: true
    score?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type RoundQuizMaxAggregateInputType = {
    id?: true
    questionCategoryId?: true
    score?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type RoundQuizCountAggregateInputType = {
    id?: true
    questionCategoryId?: true
    score?: true
    userId?: true
    createAt?: true
    updateAt?: true
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
    questionCategoryId: number
    score: number
    userId: number
    createAt: Date
    updateAt: Date
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
    questionCategories?: boolean | QuestionCategoryArgs
    questionCategoryId?: boolean
    score?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    RoundDetail?: boolean | RoundQuiz$RoundDetailArgs
    _count?: boolean | RoundQuizCountOutputTypeArgs
  }


  export type RoundQuizInclude = {
    questionCategories?: boolean | QuestionCategoryArgs
    user?: boolean | UserArgs
    RoundDetail?: boolean | RoundQuiz$RoundDetailArgs
    _count?: boolean | RoundQuizCountOutputTypeArgs
  }

  export type RoundQuizGetPayload<S extends boolean | null | undefined | RoundQuizArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundQuiz :
    S extends undefined ? never :
    S extends { include: any } & (RoundQuizArgs | RoundQuizFindManyArgs)
    ? RoundQuiz  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'questionCategories' ? QuestionCategoryGetPayload<S['include'][P]> :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'RoundDetail' ? Array < RoundDetailGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoundQuizCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundQuizArgs | RoundQuizFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'questionCategories' ? QuestionCategoryGetPayload<S['select'][P]> :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'RoundDetail' ? Array < RoundDetailGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoundQuizCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RoundQuiz ? RoundQuiz[P] : never
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

    questionCategories<T extends QuestionCategoryArgs= {}>(args?: Subset<T, QuestionCategoryArgs>): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T> | Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    RoundDetail<T extends RoundQuiz$RoundDetailArgs= {}>(args?: Subset<T, RoundQuiz$RoundDetailArgs>): Prisma.PrismaPromise<Array<RoundDetailGetPayload<T>>| Null>;

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
   * RoundQuiz.RoundDetail
   */
  export type RoundQuiz$RoundDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    where?: RoundDetailWhereInput
    orderBy?: Enumerable<RoundDetailOrderByWithRelationInput>
    cursor?: RoundDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundDetailScalarFieldEnum>
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
   * Model RoundDetail
   */


  export type AggregateRoundDetail = {
    _count: RoundDetailCountAggregateOutputType | null
    _avg: RoundDetailAvgAggregateOutputType | null
    _sum: RoundDetailSumAggregateOutputType | null
    _min: RoundDetailMinAggregateOutputType | null
    _max: RoundDetailMaxAggregateOutputType | null
  }

  export type RoundDetailAvgAggregateOutputType = {
    id: number | null
    roundQuizId: number | null
    questionId: number | null
    questionOrder: number | null
    userChoose: number | null
  }

  export type RoundDetailSumAggregateOutputType = {
    id: number | null
    roundQuizId: number | null
    questionId: number | null
    questionOrder: number | null
    userChoose: number | null
  }

  export type RoundDetailMinAggregateOutputType = {
    id: number | null
    roundQuizId: number | null
    questionId: number | null
    questionOrder: number | null
    userChoose: number | null
    result: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoundDetailMaxAggregateOutputType = {
    id: number | null
    roundQuizId: number | null
    questionId: number | null
    questionOrder: number | null
    userChoose: number | null
    result: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type RoundDetailCountAggregateOutputType = {
    id: number
    roundQuizId: number
    questionId: number
    questionOrder: number
    userChoose: number
    result: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type RoundDetailAvgAggregateInputType = {
    id?: true
    roundQuizId?: true
    questionId?: true
    questionOrder?: true
    userChoose?: true
  }

  export type RoundDetailSumAggregateInputType = {
    id?: true
    roundQuizId?: true
    questionId?: true
    questionOrder?: true
    userChoose?: true
  }

  export type RoundDetailMinAggregateInputType = {
    id?: true
    roundQuizId?: true
    questionId?: true
    questionOrder?: true
    userChoose?: true
    result?: true
    createAt?: true
    updateAt?: true
  }

  export type RoundDetailMaxAggregateInputType = {
    id?: true
    roundQuizId?: true
    questionId?: true
    questionOrder?: true
    userChoose?: true
    result?: true
    createAt?: true
    updateAt?: true
  }

  export type RoundDetailCountAggregateInputType = {
    id?: true
    roundQuizId?: true
    questionId?: true
    questionOrder?: true
    userChoose?: true
    result?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type RoundDetailAggregateArgs = {
    /**
     * Filter which RoundDetail to aggregate.
     */
    where?: RoundDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundDetails to fetch.
     */
    orderBy?: Enumerable<RoundDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoundDetails
    **/
    _count?: true | RoundDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundDetailMaxAggregateInputType
  }

  export type GetRoundDetailAggregateType<T extends RoundDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateRoundDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundDetail[P]>
      : GetScalarType<T[P], AggregateRoundDetail[P]>
  }




  export type RoundDetailGroupByArgs = {
    where?: RoundDetailWhereInput
    orderBy?: Enumerable<RoundDetailOrderByWithAggregationInput>
    by: RoundDetailScalarFieldEnum[]
    having?: RoundDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundDetailCountAggregateInputType | true
    _avg?: RoundDetailAvgAggregateInputType
    _sum?: RoundDetailSumAggregateInputType
    _min?: RoundDetailMinAggregateInputType
    _max?: RoundDetailMaxAggregateInputType
  }


  export type RoundDetailGroupByOutputType = {
    id: number
    roundQuizId: number
    questionId: number
    questionOrder: number
    userChoose: number
    result: boolean
    createAt: Date
    updateAt: Date
    _count: RoundDetailCountAggregateOutputType | null
    _avg: RoundDetailAvgAggregateOutputType | null
    _sum: RoundDetailSumAggregateOutputType | null
    _min: RoundDetailMinAggregateOutputType | null
    _max: RoundDetailMaxAggregateOutputType | null
  }

  type GetRoundDetailGroupByPayload<T extends RoundDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoundDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundDetailGroupByOutputType[P]>
            : GetScalarType<T[P], RoundDetailGroupByOutputType[P]>
        }
      >
    >


  export type RoundDetailSelect = {
    id?: boolean
    roundQuiz?: boolean | RoundQuizArgs
    roundQuizId?: boolean
    question?: boolean | QuestionArgs
    questionId?: boolean
    questionOrder?: boolean
    userChoose?: boolean
    result?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type RoundDetailInclude = {
    roundQuiz?: boolean | RoundQuizArgs
    question?: boolean | QuestionArgs
  }

  export type RoundDetailGetPayload<S extends boolean | null | undefined | RoundDetailArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundDetail :
    S extends undefined ? never :
    S extends { include: any } & (RoundDetailArgs | RoundDetailFindManyArgs)
    ? RoundDetail  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'roundQuiz' ? RoundQuizGetPayload<S['include'][P]> :
        P extends 'question' ? QuestionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundDetailArgs | RoundDetailFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'roundQuiz' ? RoundQuizGetPayload<S['select'][P]> :
        P extends 'question' ? QuestionGetPayload<S['select'][P]> :  P extends keyof RoundDetail ? RoundDetail[P] : never
  } 
      : RoundDetail


  type RoundDetailCountArgs = 
    Omit<RoundDetailFindManyArgs, 'select' | 'include'> & {
      select?: RoundDetailCountAggregateInputType | true
    }

  export interface RoundDetailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoundDetail that matches the filter.
     * @param {RoundDetailFindUniqueArgs} args - Arguments to find a RoundDetail
     * @example
     * // Get one RoundDetail
     * const roundDetail = await prisma.roundDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoundDetailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoundDetailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoundDetail'> extends True ? Prisma__RoundDetailClient<RoundDetailGetPayload<T>> : Prisma__RoundDetailClient<RoundDetailGetPayload<T> | null, null>

    /**
     * Find one RoundDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoundDetailFindUniqueOrThrowArgs} args - Arguments to find a RoundDetail
     * @example
     * // Get one RoundDetail
     * const roundDetail = await prisma.roundDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoundDetailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundDetailFindUniqueOrThrowArgs>
    ): Prisma__RoundDetailClient<RoundDetailGetPayload<T>>

    /**
     * Find the first RoundDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundDetailFindFirstArgs} args - Arguments to find a RoundDetail
     * @example
     * // Get one RoundDetail
     * const roundDetail = await prisma.roundDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoundDetailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoundDetailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoundDetail'> extends True ? Prisma__RoundDetailClient<RoundDetailGetPayload<T>> : Prisma__RoundDetailClient<RoundDetailGetPayload<T> | null, null>

    /**
     * Find the first RoundDetail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundDetailFindFirstOrThrowArgs} args - Arguments to find a RoundDetail
     * @example
     * // Get one RoundDetail
     * const roundDetail = await prisma.roundDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoundDetailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundDetailFindFirstOrThrowArgs>
    ): Prisma__RoundDetailClient<RoundDetailGetPayload<T>>

    /**
     * Find zero or more RoundDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundDetails
     * const roundDetails = await prisma.roundDetail.findMany()
     * 
     * // Get first 10 RoundDetails
     * const roundDetails = await prisma.roundDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundDetailWithIdOnly = await prisma.roundDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoundDetailFindManyArgs>(
      args?: SelectSubset<T, RoundDetailFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundDetailGetPayload<T>>>

    /**
     * Create a RoundDetail.
     * @param {RoundDetailCreateArgs} args - Arguments to create a RoundDetail.
     * @example
     * // Create one RoundDetail
     * const RoundDetail = await prisma.roundDetail.create({
     *   data: {
     *     // ... data to create a RoundDetail
     *   }
     * })
     * 
    **/
    create<T extends RoundDetailCreateArgs>(
      args: SelectSubset<T, RoundDetailCreateArgs>
    ): Prisma__RoundDetailClient<RoundDetailGetPayload<T>>

    /**
     * Create many RoundDetails.
     *     @param {RoundDetailCreateManyArgs} args - Arguments to create many RoundDetails.
     *     @example
     *     // Create many RoundDetails
     *     const roundDetail = await prisma.roundDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoundDetailCreateManyArgs>(
      args?: SelectSubset<T, RoundDetailCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoundDetail.
     * @param {RoundDetailDeleteArgs} args - Arguments to delete one RoundDetail.
     * @example
     * // Delete one RoundDetail
     * const RoundDetail = await prisma.roundDetail.delete({
     *   where: {
     *     // ... filter to delete one RoundDetail
     *   }
     * })
     * 
    **/
    delete<T extends RoundDetailDeleteArgs>(
      args: SelectSubset<T, RoundDetailDeleteArgs>
    ): Prisma__RoundDetailClient<RoundDetailGetPayload<T>>

    /**
     * Update one RoundDetail.
     * @param {RoundDetailUpdateArgs} args - Arguments to update one RoundDetail.
     * @example
     * // Update one RoundDetail
     * const roundDetail = await prisma.roundDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoundDetailUpdateArgs>(
      args: SelectSubset<T, RoundDetailUpdateArgs>
    ): Prisma__RoundDetailClient<RoundDetailGetPayload<T>>

    /**
     * Delete zero or more RoundDetails.
     * @param {RoundDetailDeleteManyArgs} args - Arguments to filter RoundDetails to delete.
     * @example
     * // Delete a few RoundDetails
     * const { count } = await prisma.roundDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoundDetailDeleteManyArgs>(
      args?: SelectSubset<T, RoundDetailDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoundDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundDetails
     * const roundDetail = await prisma.roundDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoundDetailUpdateManyArgs>(
      args: SelectSubset<T, RoundDetailUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoundDetail.
     * @param {RoundDetailUpsertArgs} args - Arguments to update or create a RoundDetail.
     * @example
     * // Update or create a RoundDetail
     * const roundDetail = await prisma.roundDetail.upsert({
     *   create: {
     *     // ... data to create a RoundDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundDetail we want to update
     *   }
     * })
    **/
    upsert<T extends RoundDetailUpsertArgs>(
      args: SelectSubset<T, RoundDetailUpsertArgs>
    ): Prisma__RoundDetailClient<RoundDetailGetPayload<T>>

    /**
     * Count the number of RoundDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundDetailCountArgs} args - Arguments to filter RoundDetails to count.
     * @example
     * // Count the number of RoundDetails
     * const count = await prisma.roundDetail.count({
     *   where: {
     *     // ... the filter for the RoundDetails we want to count
     *   }
     * })
    **/
    count<T extends RoundDetailCountArgs>(
      args?: Subset<T, RoundDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoundDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundDetailAggregateArgs>(args: Subset<T, RoundDetailAggregateArgs>): Prisma.PrismaPromise<GetRoundDetailAggregateType<T>>

    /**
     * Group by RoundDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundDetailGroupByArgs} args - Group by arguments.
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
      T extends RoundDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundDetailGroupByArgs['orderBy'] }
        : { orderBy?: RoundDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundDetailClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    roundQuiz<T extends RoundQuizArgs= {}>(args?: Subset<T, RoundQuizArgs>): Prisma__RoundQuizClient<RoundQuizGetPayload<T> | Null>;

    question<T extends QuestionArgs= {}>(args?: Subset<T, QuestionArgs>): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

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
   * RoundDetail base type for findUnique actions
   */
  export type RoundDetailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * Filter, which RoundDetail to fetch.
     */
    where: RoundDetailWhereUniqueInput
  }

  /**
   * RoundDetail findUnique
   */
  export interface RoundDetailFindUniqueArgs extends RoundDetailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundDetail findUniqueOrThrow
   */
  export type RoundDetailFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * Filter, which RoundDetail to fetch.
     */
    where: RoundDetailWhereUniqueInput
  }


  /**
   * RoundDetail base type for findFirst actions
   */
  export type RoundDetailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * Filter, which RoundDetail to fetch.
     */
    where?: RoundDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundDetails to fetch.
     */
    orderBy?: Enumerable<RoundDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundDetails.
     */
    cursor?: RoundDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundDetails.
     */
    distinct?: Enumerable<RoundDetailScalarFieldEnum>
  }

  /**
   * RoundDetail findFirst
   */
  export interface RoundDetailFindFirstArgs extends RoundDetailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundDetail findFirstOrThrow
   */
  export type RoundDetailFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * Filter, which RoundDetail to fetch.
     */
    where?: RoundDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundDetails to fetch.
     */
    orderBy?: Enumerable<RoundDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundDetails.
     */
    cursor?: RoundDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundDetails.
     */
    distinct?: Enumerable<RoundDetailScalarFieldEnum>
  }


  /**
   * RoundDetail findMany
   */
  export type RoundDetailFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * Filter, which RoundDetails to fetch.
     */
    where?: RoundDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundDetails to fetch.
     */
    orderBy?: Enumerable<RoundDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoundDetails.
     */
    cursor?: RoundDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundDetails.
     */
    skip?: number
    distinct?: Enumerable<RoundDetailScalarFieldEnum>
  }


  /**
   * RoundDetail create
   */
  export type RoundDetailCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * The data needed to create a RoundDetail.
     */
    data: XOR<RoundDetailCreateInput, RoundDetailUncheckedCreateInput>
  }


  /**
   * RoundDetail createMany
   */
  export type RoundDetailCreateManyArgs = {
    /**
     * The data used to create many RoundDetails.
     */
    data: Enumerable<RoundDetailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoundDetail update
   */
  export type RoundDetailUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * The data needed to update a RoundDetail.
     */
    data: XOR<RoundDetailUpdateInput, RoundDetailUncheckedUpdateInput>
    /**
     * Choose, which RoundDetail to update.
     */
    where: RoundDetailWhereUniqueInput
  }


  /**
   * RoundDetail updateMany
   */
  export type RoundDetailUpdateManyArgs = {
    /**
     * The data used to update RoundDetails.
     */
    data: XOR<RoundDetailUpdateManyMutationInput, RoundDetailUncheckedUpdateManyInput>
    /**
     * Filter which RoundDetails to update
     */
    where?: RoundDetailWhereInput
  }


  /**
   * RoundDetail upsert
   */
  export type RoundDetailUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * The filter to search for the RoundDetail to update in case it exists.
     */
    where: RoundDetailWhereUniqueInput
    /**
     * In case the RoundDetail found by the `where` argument doesn't exist, create a new RoundDetail with this data.
     */
    create: XOR<RoundDetailCreateInput, RoundDetailUncheckedCreateInput>
    /**
     * In case the RoundDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundDetailUpdateInput, RoundDetailUncheckedUpdateInput>
  }


  /**
   * RoundDetail delete
   */
  export type RoundDetailDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
    /**
     * Filter which RoundDetail to delete.
     */
    where: RoundDetailWhereUniqueInput
  }


  /**
   * RoundDetail deleteMany
   */
  export type RoundDetailDeleteManyArgs = {
    /**
     * Filter which RoundDetails to delete
     */
    where?: RoundDetailWhereInput
  }


  /**
   * RoundDetail without action
   */
  export type RoundDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundDetail
     */
    select?: RoundDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundDetailInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ChoiceScalarFieldEnum: {
    id: 'id',
    choiceName: 'choiceName',
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


  export const QuestionCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type QuestionCategoryScalarFieldEnum = (typeof QuestionCategoryScalarFieldEnum)[keyof typeof QuestionCategoryScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    questionCategoryId: 'questionCategoryId',
    textQuestion: 'textQuestion',
    answerId: 'answerId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const RoundDetailScalarFieldEnum: {
    id: 'id',
    roundQuizId: 'roundQuizId',
    questionId: 'questionId',
    questionOrder: 'questionOrder',
    userChoose: 'userChoose',
    result: 'result',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type RoundDetailScalarFieldEnum = (typeof RoundDetailScalarFieldEnum)[keyof typeof RoundDetailScalarFieldEnum]


  export const RoundQuizScalarFieldEnum: {
    id: 'id',
    questionCategoryId: 'questionCategoryId',
    score: 'score',
    userId: 'userId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type RoundQuizScalarFieldEnum = (typeof RoundQuizScalarFieldEnum)[keyof typeof RoundQuizScalarFieldEnum]


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
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type QuestionCategoryWhereInput = {
    AND?: Enumerable<QuestionCategoryWhereInput>
    OR?: Enumerable<QuestionCategoryWhereInput>
    NOT?: Enumerable<QuestionCategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    Question?: QuestionListRelationFilter
    RoundQuiz?: RoundQuizListRelationFilter
  }

  export type QuestionCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    Question?: QuestionOrderByRelationAggregateInput
    RoundQuiz?: RoundQuizOrderByRelationAggregateInput
  }

  export type QuestionCategoryWhereUniqueInput = {
    id?: number
  }

  export type QuestionCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: QuestionCategoryCountOrderByAggregateInput
    _avg?: QuestionCategoryAvgOrderByAggregateInput
    _max?: QuestionCategoryMaxOrderByAggregateInput
    _min?: QuestionCategoryMinOrderByAggregateInput
    _sum?: QuestionCategorySumOrderByAggregateInput
  }

  export type QuestionCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionCategoryScalarWhereWithAggregatesInput>
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
    questionCategories?: XOR<QuestionCategoryRelationFilter, QuestionCategoryWhereInput>
    questionCategoryId?: IntFilter | number
    textQuestion?: StringFilter | string
    answer?: XOR<ChoiceRelationFilter, ChoiceWhereInput>
    answerId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    choice?: ChoiceListRelationFilter
    RoundDetail?: RoundDetailListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    questionCategories?: QuestionCategoryOrderByWithRelationInput
    questionCategoryId?: SortOrder
    textQuestion?: SortOrder
    answer?: ChoiceOrderByWithRelationInput
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    choice?: ChoiceOrderByRelationAggregateInput
    RoundDetail?: RoundDetailOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = {
    id?: number
    answerId?: number
  }

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    textQuestion?: SortOrder
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
    questionCategoryId?: IntWithAggregatesFilter | number
    textQuestion?: StringWithAggregatesFilter | string
    answerId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ChoiceWhereInput = {
    AND?: Enumerable<ChoiceWhereInput>
    OR?: Enumerable<ChoiceWhereInput>
    NOT?: Enumerable<ChoiceWhereInput>
    id?: IntFilter | number
    choiceName?: StringFilter | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput> | null
    questionId?: IntNullableFilter | number | null
    questionAnswer?: XOR<QuestionRelationFilter, QuestionWhereInput> | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder
    choiceName?: SortOrder
    question?: QuestionOrderByWithRelationInput
    questionId?: SortOrder
    questionAnswer?: QuestionOrderByWithRelationInput
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ChoiceWhereUniqueInput = {
    id?: number
  }

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    choiceName?: SortOrder
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
    choiceName?: StringWithAggregatesFilter | string
    questionId?: IntNullableWithAggregatesFilter | number | null
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    RoundQuiz?: RoundQuizListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    RoundQuiz?: RoundQuizOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
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
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoundQuizWhereInput = {
    AND?: Enumerable<RoundQuizWhereInput>
    OR?: Enumerable<RoundQuizWhereInput>
    NOT?: Enumerable<RoundQuizWhereInput>
    id?: IntFilter | number
    questionCategories?: XOR<QuestionCategoryRelationFilter, QuestionCategoryWhereInput>
    questionCategoryId?: IntFilter | number
    score?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
    RoundDetail?: RoundDetailListRelationFilter
  }

  export type RoundQuizOrderByWithRelationInput = {
    id?: SortOrder
    questionCategories?: QuestionCategoryOrderByWithRelationInput
    questionCategoryId?: SortOrder
    score?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    RoundDetail?: RoundDetailOrderByRelationAggregateInput
  }

  export type RoundQuizWhereUniqueInput = {
    id?: number
  }

  export type RoundQuizOrderByWithAggregationInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    score?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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
    questionCategoryId?: IntWithAggregatesFilter | number
    score?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoundDetailWhereInput = {
    AND?: Enumerable<RoundDetailWhereInput>
    OR?: Enumerable<RoundDetailWhereInput>
    NOT?: Enumerable<RoundDetailWhereInput>
    id?: IntFilter | number
    roundQuiz?: XOR<RoundQuizRelationFilter, RoundQuizWhereInput>
    roundQuizId?: IntFilter | number
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    questionId?: IntFilter | number
    questionOrder?: IntFilter | number
    userChoose?: IntFilter | number
    result?: BoolFilter | boolean
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type RoundDetailOrderByWithRelationInput = {
    id?: SortOrder
    roundQuiz?: RoundQuizOrderByWithRelationInput
    roundQuizId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    questionId?: SortOrder
    questionOrder?: SortOrder
    userChoose?: SortOrder
    result?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoundDetailWhereUniqueInput = {
    id?: number
  }

  export type RoundDetailOrderByWithAggregationInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    questionId?: SortOrder
    questionOrder?: SortOrder
    userChoose?: SortOrder
    result?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: RoundDetailCountOrderByAggregateInput
    _avg?: RoundDetailAvgOrderByAggregateInput
    _max?: RoundDetailMaxOrderByAggregateInput
    _min?: RoundDetailMinOrderByAggregateInput
    _sum?: RoundDetailSumOrderByAggregateInput
  }

  export type RoundDetailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundDetailScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoundDetailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoundDetailScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roundQuizId?: IntWithAggregatesFilter | number
    questionId?: IntWithAggregatesFilter | number
    questionOrder?: IntWithAggregatesFilter | number
    userChoose?: IntWithAggregatesFilter | number
    result?: BoolWithAggregatesFilter | boolean
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuestionCategoryCreateInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    Question?: QuestionCreateNestedManyWithoutQuestionCategoriesInput
    RoundQuiz?: RoundQuizCreateNestedManyWithoutQuestionCategoriesInput
  }

  export type QuestionCategoryUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    Question?: QuestionUncheckedCreateNestedManyWithoutQuestionCategoriesInput
    RoundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutQuestionCategoriesInput
  }

  export type QuestionCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUpdateManyWithoutQuestionCategoriesNestedInput
    RoundQuiz?: RoundQuizUpdateManyWithoutQuestionCategoriesNestedInput
  }

  export type QuestionCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUncheckedUpdateManyWithoutQuestionCategoriesNestedInput
    RoundQuiz?: RoundQuizUncheckedUpdateManyWithoutQuestionCategoriesNestedInput
  }

  export type QuestionCategoryCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput
    textQuestion: string
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput
    createAt?: Date | string
    updateAt?: Date | string
    choice?: ChoiceCreateNestedManyWithoutQuestionInput
    RoundDetail?: RoundDetailCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    questionCategoryId: number
    textQuestion: string
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    RoundDetail?: RoundDetailUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput
    textQuestion?: StringFieldUpdateOperationsInput | string
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput
    RoundDetail?: RoundDetailUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    textQuestion?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    RoundDetail?: RoundDetailUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    questionCategoryId: number
    textQuestion: string
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    textQuestion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    textQuestion?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateInput = {
    choiceName: string
    question?: QuestionCreateNestedOneWithoutChoiceInput
    questionAnswer?: QuestionCreateNestedOneWithoutAnswerInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUncheckedCreateInput = {
    id?: number
    choiceName: string
    questionId?: number | null
    questionAnswer?: QuestionUncheckedCreateNestedOneWithoutAnswerInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUpdateInput = {
    choiceName?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneWithoutChoiceNestedInput
    questionAnswer?: QuestionUpdateOneWithoutAnswerNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceName?: StringFieldUpdateOperationsInput | string
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    questionAnswer?: QuestionUncheckedUpdateOneWithoutAnswerNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateManyInput = {
    id?: number
    choiceName: string
    questionId?: number | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUpdateManyMutationInput = {
    choiceName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceName?: StringFieldUpdateOperationsInput | string
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    RoundQuiz?: RoundQuizCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    RoundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundQuiz?: RoundQuizUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundQuiz?: RoundQuizUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuizCreateInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutRoundQuizInput
    score: number
    user: UserCreateNestedOneWithoutRoundQuizInput
    createAt?: Date | string
    updateAt?: Date | string
    RoundDetail?: RoundDetailCreateNestedManyWithoutRoundQuizInput
  }

  export type RoundQuizUncheckedCreateInput = {
    id?: number
    questionCategoryId: number
    score: number
    userId: number
    createAt?: Date | string
    updateAt?: Date | string
    RoundDetail?: RoundDetailUncheckedCreateNestedManyWithoutRoundQuizInput
  }

  export type RoundQuizUpdateInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput
    score?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRoundQuizNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundDetail?: RoundDetailUpdateManyWithoutRoundQuizNestedInput
  }

  export type RoundQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundDetail?: RoundDetailUncheckedUpdateManyWithoutRoundQuizNestedInput
  }

  export type RoundQuizCreateManyInput = {
    id?: number
    questionCategoryId: number
    score: number
    userId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuizUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailCreateInput = {
    roundQuiz: RoundQuizCreateNestedOneWithoutRoundDetailInput
    question: QuestionCreateNestedOneWithoutRoundDetailInput
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailUncheckedCreateInput = {
    id?: number
    roundQuizId: number
    questionId: number
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailUpdateInput = {
    roundQuiz?: RoundQuizUpdateOneRequiredWithoutRoundDetailNestedInput
    question?: QuestionUpdateOneRequiredWithoutRoundDetailNestedInput
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuizId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailCreateManyInput = {
    id?: number
    roundQuizId: number
    questionId: number
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailUpdateManyMutationInput = {
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuizId?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type RoundQuizListRelationFilter = {
    every?: RoundQuizWhereInput
    some?: RoundQuizWhereInput
    none?: RoundQuizWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundQuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionCategorySumOrderByAggregateInput = {
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

  export type QuestionCategoryRelationFilter = {
    is?: QuestionCategoryWhereInput
    isNot?: QuestionCategoryWhereInput
  }

  export type ChoiceRelationFilter = {
    is?: ChoiceWhereInput
    isNot?: ChoiceWhereInput
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type RoundDetailListRelationFilter = {
    every?: RoundDetailWhereInput
    some?: RoundDetailWhereInput
    none?: RoundDetailWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    textQuestion?: SortOrder
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    answerId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    textQuestion?: SortOrder
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    textQuestion?: SortOrder
    answerId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    answerId?: SortOrder
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
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

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    choiceName?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    choiceName?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    choiceName?: SortOrder
    questionId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoundQuizCountOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    score?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoundQuizAvgOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    score?: SortOrder
    userId?: SortOrder
  }

  export type RoundQuizMaxOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    score?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoundQuizMinOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    score?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoundQuizSumOrderByAggregateInput = {
    id?: SortOrder
    questionCategoryId?: SortOrder
    score?: SortOrder
    userId?: SortOrder
  }

  export type RoundQuizRelationFilter = {
    is?: RoundQuizWhereInput
    isNot?: RoundQuizWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type RoundDetailCountOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    questionId?: SortOrder
    questionOrder?: SortOrder
    userChoose?: SortOrder
    result?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoundDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    questionId?: SortOrder
    questionOrder?: SortOrder
    userChoose?: SortOrder
  }

  export type RoundDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    questionId?: SortOrder
    questionOrder?: SortOrder
    userChoose?: SortOrder
    result?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoundDetailMinOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    questionId?: SortOrder
    questionOrder?: SortOrder
    userChoose?: SortOrder
    result?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type RoundDetailSumOrderByAggregateInput = {
    id?: SortOrder
    roundQuizId?: SortOrder
    questionId?: SortOrder
    questionOrder?: SortOrder
    userChoose?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type QuestionCreateNestedManyWithoutQuestionCategoriesInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutQuestionCategoriesInput>, Enumerable<QuestionUncheckedCreateWithoutQuestionCategoriesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutQuestionCategoriesInput>
    createMany?: QuestionCreateManyQuestionCategoriesInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type RoundQuizCreateNestedManyWithoutQuestionCategoriesInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutQuestionCategoriesInput>, Enumerable<RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuestionCategoriesInput>
    createMany?: RoundQuizCreateManyQuestionCategoriesInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuestionCategoriesInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutQuestionCategoriesInput>, Enumerable<QuestionUncheckedCreateWithoutQuestionCategoriesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutQuestionCategoriesInput>
    createMany?: QuestionCreateManyQuestionCategoriesInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type RoundQuizUncheckedCreateNestedManyWithoutQuestionCategoriesInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutQuestionCategoriesInput>, Enumerable<RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuestionCategoriesInput>
    createMany?: RoundQuizCreateManyQuestionCategoriesInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionUpdateManyWithoutQuestionCategoriesNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutQuestionCategoriesInput>, Enumerable<QuestionUncheckedCreateWithoutQuestionCategoriesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutQuestionCategoriesInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutQuestionCategoriesInput>
    createMany?: QuestionCreateManyQuestionCategoriesInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutQuestionCategoriesInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutQuestionCategoriesInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type RoundQuizUpdateManyWithoutQuestionCategoriesNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutQuestionCategoriesInput>, Enumerable<RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuestionCategoriesInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutQuestionCategoriesInput>
    createMany?: RoundQuizCreateManyQuestionCategoriesInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutQuestionCategoriesInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutQuestionCategoriesInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionCategoriesNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutQuestionCategoriesInput>, Enumerable<QuestionUncheckedCreateWithoutQuestionCategoriesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutQuestionCategoriesInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutQuestionCategoriesInput>
    createMany?: QuestionCreateManyQuestionCategoriesInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutQuestionCategoriesInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutQuestionCategoriesInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type RoundQuizUncheckedUpdateManyWithoutQuestionCategoriesNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutQuestionCategoriesInput>, Enumerable<RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuestionCategoriesInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutQuestionCategoriesInput>
    createMany?: RoundQuizCreateManyQuestionCategoriesInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutQuestionCategoriesInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutQuestionCategoriesInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type QuestionCategoryCreateNestedOneWithoutQuestionInput = {
    create?: XOR<QuestionCategoryCreateWithoutQuestionInput, QuestionCategoryUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: QuestionCategoryCreateOrConnectWithoutQuestionInput
    connect?: QuestionCategoryWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutQuestionAnswerInput = {
    create?: XOR<ChoiceCreateWithoutQuestionAnswerInput, ChoiceUncheckedCreateWithoutQuestionAnswerInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionAnswerInput
    connect?: ChoiceWhereUniqueInput
  }

  export type ChoiceCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type RoundDetailCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<RoundDetailCreateWithoutQuestionInput>, Enumerable<RoundDetailUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<RoundDetailCreateOrConnectWithoutQuestionInput>
    createMany?: RoundDetailCreateManyQuestionInputEnvelope
    connect?: Enumerable<RoundDetailWhereUniqueInput>
  }

  export type ChoiceUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type RoundDetailUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<RoundDetailCreateWithoutQuestionInput>, Enumerable<RoundDetailUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<RoundDetailCreateOrConnectWithoutQuestionInput>
    createMany?: RoundDetailCreateManyQuestionInputEnvelope
    connect?: Enumerable<RoundDetailWhereUniqueInput>
  }

  export type QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<QuestionCategoryCreateWithoutQuestionInput, QuestionCategoryUncheckedCreateWithoutQuestionInput>
    connectOrCreate?: QuestionCategoryCreateOrConnectWithoutQuestionInput
    upsert?: QuestionCategoryUpsertWithoutQuestionInput
    connect?: QuestionCategoryWhereUniqueInput
    update?: XOR<QuestionCategoryUpdateWithoutQuestionInput, QuestionCategoryUncheckedUpdateWithoutQuestionInput>
  }

  export type ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput = {
    create?: XOR<ChoiceCreateWithoutQuestionAnswerInput, ChoiceUncheckedCreateWithoutQuestionAnswerInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionAnswerInput
    upsert?: ChoiceUpsertWithoutQuestionAnswerInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<ChoiceUpdateWithoutQuestionAnswerInput, ChoiceUncheckedUpdateWithoutQuestionAnswerInput>
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

  export type RoundDetailUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<RoundDetailCreateWithoutQuestionInput>, Enumerable<RoundDetailUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<RoundDetailCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<RoundDetailUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: RoundDetailCreateManyQuestionInputEnvelope
    set?: Enumerable<RoundDetailWhereUniqueInput>
    disconnect?: Enumerable<RoundDetailWhereUniqueInput>
    delete?: Enumerable<RoundDetailWhereUniqueInput>
    connect?: Enumerable<RoundDetailWhereUniqueInput>
    update?: Enumerable<RoundDetailUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<RoundDetailUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<RoundDetailScalarWhereInput>
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

  export type RoundDetailUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<RoundDetailCreateWithoutQuestionInput>, Enumerable<RoundDetailUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<RoundDetailCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<RoundDetailUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: RoundDetailCreateManyQuestionInputEnvelope
    set?: Enumerable<RoundDetailWhereUniqueInput>
    disconnect?: Enumerable<RoundDetailWhereUniqueInput>
    delete?: Enumerable<RoundDetailWhereUniqueInput>
    connect?: Enumerable<RoundDetailWhereUniqueInput>
    update?: Enumerable<RoundDetailUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<RoundDetailUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<RoundDetailScalarWhereInput>
  }

  export type QuestionCreateNestedOneWithoutChoiceInput = {
    create?: XOR<QuestionCreateWithoutChoiceInput, QuestionUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoiceInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUncheckedCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneWithoutChoiceNestedInput = {
    create?: XOR<QuestionCreateWithoutChoiceInput, QuestionUncheckedCreateWithoutChoiceInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoiceInput
    upsert?: QuestionUpsertWithoutChoiceInput
    disconnect?: boolean
    delete?: boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutChoiceInput, QuestionUncheckedUpdateWithoutChoiceInput>
  }

  export type QuestionUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    upsert?: QuestionUpsertWithoutAnswerInput
    disconnect?: boolean
    delete?: boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUncheckedUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    upsert?: QuestionUpsertWithoutAnswerInput
    disconnect?: boolean
    delete?: boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type RoundQuizCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutUserInput>, Enumerable<RoundQuizUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutUserInput>
    createMany?: RoundQuizCreateManyUserInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type RoundQuizUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutUserInput>, Enumerable<RoundQuizUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutUserInput>
    createMany?: RoundQuizCreateManyUserInputEnvelope
    connect?: Enumerable<RoundQuizWhereUniqueInput>
  }

  export type RoundQuizUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutUserInput>, Enumerable<RoundQuizUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RoundQuizCreateManyUserInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type RoundQuizUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<RoundQuizCreateWithoutUserInput>, Enumerable<RoundQuizUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutUserInput>
    createMany?: RoundQuizCreateManyUserInputEnvelope
    set?: Enumerable<RoundQuizWhereUniqueInput>
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>
    delete?: Enumerable<RoundQuizWhereUniqueInput>
    connect?: Enumerable<RoundQuizWhereUniqueInput>
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>
  }

  export type QuestionCategoryCreateNestedOneWithoutRoundQuizInput = {
    create?: XOR<QuestionCategoryCreateWithoutRoundQuizInput, QuestionCategoryUncheckedCreateWithoutRoundQuizInput>
    connectOrCreate?: QuestionCategoryCreateOrConnectWithoutRoundQuizInput
    connect?: QuestionCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoundQuizInput = {
    create?: XOR<UserCreateWithoutRoundQuizInput, UserUncheckedCreateWithoutRoundQuizInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoundQuizInput
    connect?: UserWhereUniqueInput
  }

  export type RoundDetailCreateNestedManyWithoutRoundQuizInput = {
    create?: XOR<Enumerable<RoundDetailCreateWithoutRoundQuizInput>, Enumerable<RoundDetailUncheckedCreateWithoutRoundQuizInput>>
    connectOrCreate?: Enumerable<RoundDetailCreateOrConnectWithoutRoundQuizInput>
    createMany?: RoundDetailCreateManyRoundQuizInputEnvelope
    connect?: Enumerable<RoundDetailWhereUniqueInput>
  }

  export type RoundDetailUncheckedCreateNestedManyWithoutRoundQuizInput = {
    create?: XOR<Enumerable<RoundDetailCreateWithoutRoundQuizInput>, Enumerable<RoundDetailUncheckedCreateWithoutRoundQuizInput>>
    connectOrCreate?: Enumerable<RoundDetailCreateOrConnectWithoutRoundQuizInput>
    createMany?: RoundDetailCreateManyRoundQuizInputEnvelope
    connect?: Enumerable<RoundDetailWhereUniqueInput>
  }

  export type QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput = {
    create?: XOR<QuestionCategoryCreateWithoutRoundQuizInput, QuestionCategoryUncheckedCreateWithoutRoundQuizInput>
    connectOrCreate?: QuestionCategoryCreateOrConnectWithoutRoundQuizInput
    upsert?: QuestionCategoryUpsertWithoutRoundQuizInput
    connect?: QuestionCategoryWhereUniqueInput
    update?: XOR<QuestionCategoryUpdateWithoutRoundQuizInput, QuestionCategoryUncheckedUpdateWithoutRoundQuizInput>
  }

  export type UserUpdateOneRequiredWithoutRoundQuizNestedInput = {
    create?: XOR<UserCreateWithoutRoundQuizInput, UserUncheckedCreateWithoutRoundQuizInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoundQuizInput
    upsert?: UserUpsertWithoutRoundQuizInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutRoundQuizInput, UserUncheckedUpdateWithoutRoundQuizInput>
  }

  export type RoundDetailUpdateManyWithoutRoundQuizNestedInput = {
    create?: XOR<Enumerable<RoundDetailCreateWithoutRoundQuizInput>, Enumerable<RoundDetailUncheckedCreateWithoutRoundQuizInput>>
    connectOrCreate?: Enumerable<RoundDetailCreateOrConnectWithoutRoundQuizInput>
    upsert?: Enumerable<RoundDetailUpsertWithWhereUniqueWithoutRoundQuizInput>
    createMany?: RoundDetailCreateManyRoundQuizInputEnvelope
    set?: Enumerable<RoundDetailWhereUniqueInput>
    disconnect?: Enumerable<RoundDetailWhereUniqueInput>
    delete?: Enumerable<RoundDetailWhereUniqueInput>
    connect?: Enumerable<RoundDetailWhereUniqueInput>
    update?: Enumerable<RoundDetailUpdateWithWhereUniqueWithoutRoundQuizInput>
    updateMany?: Enumerable<RoundDetailUpdateManyWithWhereWithoutRoundQuizInput>
    deleteMany?: Enumerable<RoundDetailScalarWhereInput>
  }

  export type RoundDetailUncheckedUpdateManyWithoutRoundQuizNestedInput = {
    create?: XOR<Enumerable<RoundDetailCreateWithoutRoundQuizInput>, Enumerable<RoundDetailUncheckedCreateWithoutRoundQuizInput>>
    connectOrCreate?: Enumerable<RoundDetailCreateOrConnectWithoutRoundQuizInput>
    upsert?: Enumerable<RoundDetailUpsertWithWhereUniqueWithoutRoundQuizInput>
    createMany?: RoundDetailCreateManyRoundQuizInputEnvelope
    set?: Enumerable<RoundDetailWhereUniqueInput>
    disconnect?: Enumerable<RoundDetailWhereUniqueInput>
    delete?: Enumerable<RoundDetailWhereUniqueInput>
    connect?: Enumerable<RoundDetailWhereUniqueInput>
    update?: Enumerable<RoundDetailUpdateWithWhereUniqueWithoutRoundQuizInput>
    updateMany?: Enumerable<RoundDetailUpdateManyWithWhereWithoutRoundQuizInput>
    deleteMany?: Enumerable<RoundDetailScalarWhereInput>
  }

  export type RoundQuizCreateNestedOneWithoutRoundDetailInput = {
    create?: XOR<RoundQuizCreateWithoutRoundDetailInput, RoundQuizUncheckedCreateWithoutRoundDetailInput>
    connectOrCreate?: RoundQuizCreateOrConnectWithoutRoundDetailInput
    connect?: RoundQuizWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutRoundDetailInput = {
    create?: XOR<QuestionCreateWithoutRoundDetailInput, QuestionUncheckedCreateWithoutRoundDetailInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutRoundDetailInput
    connect?: QuestionWhereUniqueInput
  }

  export type RoundQuizUpdateOneRequiredWithoutRoundDetailNestedInput = {
    create?: XOR<RoundQuizCreateWithoutRoundDetailInput, RoundQuizUncheckedCreateWithoutRoundDetailInput>
    connectOrCreate?: RoundQuizCreateOrConnectWithoutRoundDetailInput
    upsert?: RoundQuizUpsertWithoutRoundDetailInput
    connect?: RoundQuizWhereUniqueInput
    update?: XOR<RoundQuizUpdateWithoutRoundDetailInput, RoundQuizUncheckedUpdateWithoutRoundDetailInput>
  }

  export type QuestionUpdateOneRequiredWithoutRoundDetailNestedInput = {
    create?: XOR<QuestionCreateWithoutRoundDetailInput, QuestionUncheckedCreateWithoutRoundDetailInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutRoundDetailInput
    upsert?: QuestionUpsertWithoutRoundDetailInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutRoundDetailInput, QuestionUncheckedUpdateWithoutRoundDetailInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type QuestionCreateWithoutQuestionCategoriesInput = {
    textQuestion: string
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput
    createAt?: Date | string
    updateAt?: Date | string
    choice?: ChoiceCreateNestedManyWithoutQuestionInput
    RoundDetail?: RoundDetailCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestionCategoriesInput = {
    id?: number
    textQuestion: string
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    RoundDetail?: RoundDetailUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestionCategoriesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionCategoriesInput, QuestionUncheckedCreateWithoutQuestionCategoriesInput>
  }

  export type QuestionCreateManyQuestionCategoriesInputEnvelope = {
    data: Enumerable<QuestionCreateManyQuestionCategoriesInput>
    skipDuplicates?: boolean
  }

  export type RoundQuizCreateWithoutQuestionCategoriesInput = {
    score: number
    user: UserCreateNestedOneWithoutRoundQuizInput
    createAt?: Date | string
    updateAt?: Date | string
    RoundDetail?: RoundDetailCreateNestedManyWithoutRoundQuizInput
  }

  export type RoundQuizUncheckedCreateWithoutQuestionCategoriesInput = {
    id?: number
    score: number
    userId: number
    createAt?: Date | string
    updateAt?: Date | string
    RoundDetail?: RoundDetailUncheckedCreateNestedManyWithoutRoundQuizInput
  }

  export type RoundQuizCreateOrConnectWithoutQuestionCategoriesInput = {
    where: RoundQuizWhereUniqueInput
    create: XOR<RoundQuizCreateWithoutQuestionCategoriesInput, RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>
  }

  export type RoundQuizCreateManyQuestionCategoriesInputEnvelope = {
    data: Enumerable<RoundQuizCreateManyQuestionCategoriesInput>
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuestionCategoriesInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuestionCategoriesInput, QuestionUncheckedUpdateWithoutQuestionCategoriesInput>
    create: XOR<QuestionCreateWithoutQuestionCategoriesInput, QuestionUncheckedCreateWithoutQuestionCategoriesInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuestionCategoriesInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuestionCategoriesInput, QuestionUncheckedUpdateWithoutQuestionCategoriesInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuestionCategoriesInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: Enumerable<QuestionScalarWhereInput>
    OR?: Enumerable<QuestionScalarWhereInput>
    NOT?: Enumerable<QuestionScalarWhereInput>
    id?: IntFilter | number
    questionCategoryId?: IntFilter | number
    textQuestion?: StringFilter | string
    answerId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type RoundQuizUpsertWithWhereUniqueWithoutQuestionCategoriesInput = {
    where: RoundQuizWhereUniqueInput
    update: XOR<RoundQuizUpdateWithoutQuestionCategoriesInput, RoundQuizUncheckedUpdateWithoutQuestionCategoriesInput>
    create: XOR<RoundQuizCreateWithoutQuestionCategoriesInput, RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>
  }

  export type RoundQuizUpdateWithWhereUniqueWithoutQuestionCategoriesInput = {
    where: RoundQuizWhereUniqueInput
    data: XOR<RoundQuizUpdateWithoutQuestionCategoriesInput, RoundQuizUncheckedUpdateWithoutQuestionCategoriesInput>
  }

  export type RoundQuizUpdateManyWithWhereWithoutQuestionCategoriesInput = {
    where: RoundQuizScalarWhereInput
    data: XOR<RoundQuizUpdateManyMutationInput, RoundQuizUncheckedUpdateManyWithoutRoundQuizInput>
  }

  export type RoundQuizScalarWhereInput = {
    AND?: Enumerable<RoundQuizScalarWhereInput>
    OR?: Enumerable<RoundQuizScalarWhereInput>
    NOT?: Enumerable<RoundQuizScalarWhereInput>
    id?: IntFilter | number
    questionCategoryId?: IntFilter | number
    score?: IntFilter | number
    userId?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type QuestionCategoryCreateWithoutQuestionInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    RoundQuiz?: RoundQuizCreateNestedManyWithoutQuestionCategoriesInput
  }

  export type QuestionCategoryUncheckedCreateWithoutQuestionInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    RoundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutQuestionCategoriesInput
  }

  export type QuestionCategoryCreateOrConnectWithoutQuestionInput = {
    where: QuestionCategoryWhereUniqueInput
    create: XOR<QuestionCategoryCreateWithoutQuestionInput, QuestionCategoryUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceCreateWithoutQuestionAnswerInput = {
    choiceName: string
    question?: QuestionCreateNestedOneWithoutChoiceInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUncheckedCreateWithoutQuestionAnswerInput = {
    id?: number
    choiceName: string
    questionId?: number | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutQuestionAnswerInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuestionAnswerInput, ChoiceUncheckedCreateWithoutQuestionAnswerInput>
  }

  export type ChoiceCreateWithoutQuestionInput = {
    choiceName: string
    questionAnswer?: QuestionCreateNestedOneWithoutAnswerInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUncheckedCreateWithoutQuestionInput = {
    id?: number
    choiceName: string
    questionAnswer?: QuestionUncheckedCreateNestedOneWithoutAnswerInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceCreateManyQuestionInputEnvelope = {
    data: Enumerable<ChoiceCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type RoundDetailCreateWithoutQuestionInput = {
    roundQuiz: RoundQuizCreateNestedOneWithoutRoundDetailInput
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailUncheckedCreateWithoutQuestionInput = {
    id?: number
    roundQuizId: number
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailCreateOrConnectWithoutQuestionInput = {
    where: RoundDetailWhereUniqueInput
    create: XOR<RoundDetailCreateWithoutQuestionInput, RoundDetailUncheckedCreateWithoutQuestionInput>
  }

  export type RoundDetailCreateManyQuestionInputEnvelope = {
    data: Enumerable<RoundDetailCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type QuestionCategoryUpsertWithoutQuestionInput = {
    update: XOR<QuestionCategoryUpdateWithoutQuestionInput, QuestionCategoryUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionCategoryCreateWithoutQuestionInput, QuestionCategoryUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionCategoryUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundQuiz?: RoundQuizUpdateManyWithoutQuestionCategoriesNestedInput
  }

  export type QuestionCategoryUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundQuiz?: RoundQuizUncheckedUpdateManyWithoutQuestionCategoriesNestedInput
  }

  export type ChoiceUpsertWithoutQuestionAnswerInput = {
    update: XOR<ChoiceUpdateWithoutQuestionAnswerInput, ChoiceUncheckedUpdateWithoutQuestionAnswerInput>
    create: XOR<ChoiceCreateWithoutQuestionAnswerInput, ChoiceUncheckedCreateWithoutQuestionAnswerInput>
  }

  export type ChoiceUpdateWithoutQuestionAnswerInput = {
    choiceName?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneWithoutChoiceNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateWithoutQuestionAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceName?: StringFieldUpdateOperationsInput | string
    questionId?: NullableIntFieldUpdateOperationsInput | number | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutChoiceInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: Enumerable<ChoiceScalarWhereInput>
    OR?: Enumerable<ChoiceScalarWhereInput>
    NOT?: Enumerable<ChoiceScalarWhereInput>
    id?: IntFilter | number
    choiceName?: StringFilter | string
    questionId?: IntNullableFilter | number | null
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type RoundDetailUpsertWithWhereUniqueWithoutQuestionInput = {
    where: RoundDetailWhereUniqueInput
    update: XOR<RoundDetailUpdateWithoutQuestionInput, RoundDetailUncheckedUpdateWithoutQuestionInput>
    create: XOR<RoundDetailCreateWithoutQuestionInput, RoundDetailUncheckedCreateWithoutQuestionInput>
  }

  export type RoundDetailUpdateWithWhereUniqueWithoutQuestionInput = {
    where: RoundDetailWhereUniqueInput
    data: XOR<RoundDetailUpdateWithoutQuestionInput, RoundDetailUncheckedUpdateWithoutQuestionInput>
  }

  export type RoundDetailUpdateManyWithWhereWithoutQuestionInput = {
    where: RoundDetailScalarWhereInput
    data: XOR<RoundDetailUpdateManyMutationInput, RoundDetailUncheckedUpdateManyWithoutRoundDetailInput>
  }

  export type RoundDetailScalarWhereInput = {
    AND?: Enumerable<RoundDetailScalarWhereInput>
    OR?: Enumerable<RoundDetailScalarWhereInput>
    NOT?: Enumerable<RoundDetailScalarWhereInput>
    id?: IntFilter | number
    roundQuizId?: IntFilter | number
    questionId?: IntFilter | number
    questionOrder?: IntFilter | number
    userChoose?: IntFilter | number
    result?: BoolFilter | boolean
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type QuestionCreateWithoutChoiceInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput
    textQuestion: string
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput
    createAt?: Date | string
    updateAt?: Date | string
    RoundDetail?: RoundDetailCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutChoiceInput = {
    id?: number
    questionCategoryId: number
    textQuestion: string
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
    RoundDetail?: RoundDetailUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutChoiceInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutChoiceInput, QuestionUncheckedCreateWithoutChoiceInput>
  }

  export type QuestionCreateWithoutAnswerInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput
    textQuestion: string
    createAt?: Date | string
    updateAt?: Date | string
    choice?: ChoiceCreateNestedManyWithoutQuestionInput
    RoundDetail?: RoundDetailCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswerInput = {
    id?: number
    questionCategoryId: number
    textQuestion: string
    createAt?: Date | string
    updateAt?: Date | string
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    RoundDetail?: RoundDetailUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionUpsertWithoutChoiceInput = {
    update: XOR<QuestionUpdateWithoutChoiceInput, QuestionUncheckedUpdateWithoutChoiceInput>
    create: XOR<QuestionCreateWithoutChoiceInput, QuestionUncheckedCreateWithoutChoiceInput>
  }

  export type QuestionUpdateWithoutChoiceInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput
    textQuestion?: StringFieldUpdateOperationsInput | string
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundDetail?: RoundDetailUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    textQuestion?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundDetail?: RoundDetailUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUpsertWithoutAnswerInput = {
    update: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionUpdateWithoutAnswerInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput
    textQuestion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput
    RoundDetail?: RoundDetailUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    textQuestion?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    RoundDetail?: RoundDetailUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type RoundQuizCreateWithoutUserInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutRoundQuizInput
    score: number
    createAt?: Date | string
    updateAt?: Date | string
    RoundDetail?: RoundDetailCreateNestedManyWithoutRoundQuizInput
  }

  export type RoundQuizUncheckedCreateWithoutUserInput = {
    id?: number
    questionCategoryId: number
    score: number
    createAt?: Date | string
    updateAt?: Date | string
    RoundDetail?: RoundDetailUncheckedCreateNestedManyWithoutRoundQuizInput
  }

  export type RoundQuizCreateOrConnectWithoutUserInput = {
    where: RoundQuizWhereUniqueInput
    create: XOR<RoundQuizCreateWithoutUserInput, RoundQuizUncheckedCreateWithoutUserInput>
  }

  export type RoundQuizCreateManyUserInputEnvelope = {
    data: Enumerable<RoundQuizCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type RoundQuizUpsertWithWhereUniqueWithoutUserInput = {
    where: RoundQuizWhereUniqueInput
    update: XOR<RoundQuizUpdateWithoutUserInput, RoundQuizUncheckedUpdateWithoutUserInput>
    create: XOR<RoundQuizCreateWithoutUserInput, RoundQuizUncheckedCreateWithoutUserInput>
  }

  export type RoundQuizUpdateWithWhereUniqueWithoutUserInput = {
    where: RoundQuizWhereUniqueInput
    data: XOR<RoundQuizUpdateWithoutUserInput, RoundQuizUncheckedUpdateWithoutUserInput>
  }

  export type RoundQuizUpdateManyWithWhereWithoutUserInput = {
    where: RoundQuizScalarWhereInput
    data: XOR<RoundQuizUpdateManyMutationInput, RoundQuizUncheckedUpdateManyWithoutRoundQuizInput>
  }

  export type QuestionCategoryCreateWithoutRoundQuizInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    Question?: QuestionCreateNestedManyWithoutQuestionCategoriesInput
  }

  export type QuestionCategoryUncheckedCreateWithoutRoundQuizInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    Question?: QuestionUncheckedCreateNestedManyWithoutQuestionCategoriesInput
  }

  export type QuestionCategoryCreateOrConnectWithoutRoundQuizInput = {
    where: QuestionCategoryWhereUniqueInput
    create: XOR<QuestionCategoryCreateWithoutRoundQuizInput, QuestionCategoryUncheckedCreateWithoutRoundQuizInput>
  }

  export type UserCreateWithoutRoundQuizInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRoundQuizInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRoundQuizInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoundQuizInput, UserUncheckedCreateWithoutRoundQuizInput>
  }

  export type RoundDetailCreateWithoutRoundQuizInput = {
    question: QuestionCreateNestedOneWithoutRoundDetailInput
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailUncheckedCreateWithoutRoundQuizInput = {
    id?: number
    questionId: number
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailCreateOrConnectWithoutRoundQuizInput = {
    where: RoundDetailWhereUniqueInput
    create: XOR<RoundDetailCreateWithoutRoundQuizInput, RoundDetailUncheckedCreateWithoutRoundQuizInput>
  }

  export type RoundDetailCreateManyRoundQuizInputEnvelope = {
    data: Enumerable<RoundDetailCreateManyRoundQuizInput>
    skipDuplicates?: boolean
  }

  export type QuestionCategoryUpsertWithoutRoundQuizInput = {
    update: XOR<QuestionCategoryUpdateWithoutRoundQuizInput, QuestionCategoryUncheckedUpdateWithoutRoundQuizInput>
    create: XOR<QuestionCategoryCreateWithoutRoundQuizInput, QuestionCategoryUncheckedCreateWithoutRoundQuizInput>
  }

  export type QuestionCategoryUpdateWithoutRoundQuizInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUpdateManyWithoutQuestionCategoriesNestedInput
  }

  export type QuestionCategoryUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUncheckedUpdateManyWithoutQuestionCategoriesNestedInput
  }

  export type UserUpsertWithoutRoundQuizInput = {
    update: XOR<UserUpdateWithoutRoundQuizInput, UserUncheckedUpdateWithoutRoundQuizInput>
    create: XOR<UserCreateWithoutRoundQuizInput, UserUncheckedCreateWithoutRoundQuizInput>
  }

  export type UserUpdateWithoutRoundQuizInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailUpsertWithWhereUniqueWithoutRoundQuizInput = {
    where: RoundDetailWhereUniqueInput
    update: XOR<RoundDetailUpdateWithoutRoundQuizInput, RoundDetailUncheckedUpdateWithoutRoundQuizInput>
    create: XOR<RoundDetailCreateWithoutRoundQuizInput, RoundDetailUncheckedCreateWithoutRoundQuizInput>
  }

  export type RoundDetailUpdateWithWhereUniqueWithoutRoundQuizInput = {
    where: RoundDetailWhereUniqueInput
    data: XOR<RoundDetailUpdateWithoutRoundQuizInput, RoundDetailUncheckedUpdateWithoutRoundQuizInput>
  }

  export type RoundDetailUpdateManyWithWhereWithoutRoundQuizInput = {
    where: RoundDetailScalarWhereInput
    data: XOR<RoundDetailUpdateManyMutationInput, RoundDetailUncheckedUpdateManyWithoutRoundDetailInput>
  }

  export type RoundQuizCreateWithoutRoundDetailInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutRoundQuizInput
    score: number
    user: UserCreateNestedOneWithoutRoundQuizInput
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuizUncheckedCreateWithoutRoundDetailInput = {
    id?: number
    questionCategoryId: number
    score: number
    userId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuizCreateOrConnectWithoutRoundDetailInput = {
    where: RoundQuizWhereUniqueInput
    create: XOR<RoundQuizCreateWithoutRoundDetailInput, RoundQuizUncheckedCreateWithoutRoundDetailInput>
  }

  export type QuestionCreateWithoutRoundDetailInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput
    textQuestion: string
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput
    createAt?: Date | string
    updateAt?: Date | string
    choice?: ChoiceCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutRoundDetailInput = {
    id?: number
    questionCategoryId: number
    textQuestion: string
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutRoundDetailInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutRoundDetailInput, QuestionUncheckedCreateWithoutRoundDetailInput>
  }

  export type RoundQuizUpsertWithoutRoundDetailInput = {
    update: XOR<RoundQuizUpdateWithoutRoundDetailInput, RoundQuizUncheckedUpdateWithoutRoundDetailInput>
    create: XOR<RoundQuizCreateWithoutRoundDetailInput, RoundQuizUncheckedCreateWithoutRoundDetailInput>
  }

  export type RoundQuizUpdateWithoutRoundDetailInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput
    score?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRoundQuizNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuizUncheckedUpdateWithoutRoundDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutRoundDetailInput = {
    update: XOR<QuestionUpdateWithoutRoundDetailInput, QuestionUncheckedUpdateWithoutRoundDetailInput>
    create: XOR<QuestionCreateWithoutRoundDetailInput, QuestionUncheckedCreateWithoutRoundDetailInput>
  }

  export type QuestionUpdateWithoutRoundDetailInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput
    textQuestion?: StringFieldUpdateOperationsInput | string
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutRoundDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    textQuestion?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyQuestionCategoriesInput = {
    id?: number
    textQuestion: string
    answerId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuizCreateManyQuestionCategoriesInput = {
    id?: number
    score: number
    userId: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type QuestionUpdateWithoutQuestionCategoriesInput = {
    textQuestion?: StringFieldUpdateOperationsInput | string
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput
    RoundDetail?: RoundDetailUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    textQuestion?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    RoundDetail?: RoundDetailUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    textQuestion?: StringFieldUpdateOperationsInput | string
    answerId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuizUpdateWithoutQuestionCategoriesInput = {
    score?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRoundQuizNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundDetail?: RoundDetailUpdateManyWithoutRoundQuizNestedInput
  }

  export type RoundQuizUncheckedUpdateWithoutQuestionCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundDetail?: RoundDetailUncheckedUpdateManyWithoutRoundQuizNestedInput
  }

  export type RoundQuizUncheckedUpdateManyWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateManyQuestionInput = {
    id?: number
    choiceName: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailCreateManyQuestionInput = {
    id?: number
    roundQuizId: number
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type ChoiceUpdateWithoutQuestionInput = {
    choiceName?: StringFieldUpdateOperationsInput | string
    questionAnswer?: QuestionUpdateOneWithoutAnswerNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceName?: StringFieldUpdateOperationsInput | string
    questionAnswer?: QuestionUncheckedUpdateOneWithoutAnswerNestedInput
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailUpdateWithoutQuestionInput = {
    roundQuiz?: RoundQuizUpdateOneRequiredWithoutRoundDetailNestedInput
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuizId?: IntFieldUpdateOperationsInput | number
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailUncheckedUpdateManyWithoutRoundDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuizId?: IntFieldUpdateOperationsInput | number
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuizCreateManyUserInput = {
    id?: number
    questionCategoryId: number
    score: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundQuizUpdateWithoutUserInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput
    score?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundDetail?: RoundDetailUpdateManyWithoutRoundQuizNestedInput
  }

  export type RoundQuizUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionCategoryId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoundDetail?: RoundDetailUncheckedUpdateManyWithoutRoundQuizNestedInput
  }

  export type RoundDetailCreateManyRoundQuizInput = {
    id?: number
    questionId: number
    questionOrder: number
    userChoose: number
    result: boolean
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RoundDetailUpdateWithoutRoundQuizInput = {
    question?: QuestionUpdateOneRequiredWithoutRoundDetailNestedInput
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundDetailUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    questionOrder?: IntFieldUpdateOperationsInput | number
    userChoose?: IntFieldUpdateOperationsInput | number
    result?: BoolFieldUpdateOperationsInput | boolean
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