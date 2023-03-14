
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model TriviaCategory
 * 
 */
export type TriviaCategory = {
  id: number
  category: string
}

/**
 * Model TriviaQuestion
 * 
 */
export type TriviaQuestion = {
  id: number
  quiz: string
  categoryId: number
  triviaAnswerChoiceId: number
}

/**
 * Model TriviaChoice
 * 
 */
export type TriviaChoice = {
  id: number
  choice: string
  quizId: number | null
}

/**
 * Model TriviaRoundQuestion
 * 
 */
export type TriviaRoundQuestion = {
  id: number
  quizId: number
  choiceId: number
  quizResult: number | null
  roundId: number
}

/**
 * Model TriviaRound
 * 
 */
export type TriviaRound = {
  id: number
  categoryId: number
  totalResult: number
  createAt: Date
  userId: number
  roundNo: number
}

/**
 * Model TriviaUser
 * 
 */
export type TriviaUser = {
  id: number
  user: string
  avatar: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TriviaCategories
 * const triviaCategories = await prisma.triviaCategory.findMany()
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
   * // Fetch zero or more TriviaCategories
   * const triviaCategories = await prisma.triviaCategory.findMany()
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
   * `prisma.triviaCategory`: Exposes CRUD operations for the **TriviaCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaCategories
    * const triviaCategories = await prisma.triviaCategory.findMany()
    * ```
    */
  get triviaCategory(): Prisma.TriviaCategoryDelegate<GlobalReject>;

  /**
   * `prisma.triviaQuestion`: Exposes CRUD operations for the **TriviaQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaQuestions
    * const triviaQuestions = await prisma.triviaQuestion.findMany()
    * ```
    */
  get triviaQuestion(): Prisma.TriviaQuestionDelegate<GlobalReject>;

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
   * `prisma.triviaRoundQuestion`: Exposes CRUD operations for the **TriviaRoundQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaRoundQuestions
    * const triviaRoundQuestions = await prisma.triviaRoundQuestion.findMany()
    * ```
    */
  get triviaRoundQuestion(): Prisma.TriviaRoundQuestionDelegate<GlobalReject>;

  /**
   * `prisma.triviaRound`: Exposes CRUD operations for the **TriviaRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaRounds
    * const triviaRounds = await prisma.triviaRound.findMany()
    * ```
    */
  get triviaRound(): Prisma.TriviaRoundDelegate<GlobalReject>;

  /**
   * `prisma.triviaUser`: Exposes CRUD operations for the **TriviaUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriviaUsers
    * const triviaUsers = await prisma.triviaUser.findMany()
    * ```
    */
  get triviaUser(): Prisma.TriviaUserDelegate<GlobalReject>;
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
    TriviaCategory: 'TriviaCategory',
    TriviaQuestion: 'TriviaQuestion',
    TriviaChoice: 'TriviaChoice',
    TriviaRoundQuestion: 'TriviaRoundQuestion',
    TriviaRound: 'TriviaRound',
    TriviaUser: 'TriviaUser'
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
   * Count Type TriviaCategoryCountOutputType
   */


  export type TriviaCategoryCountOutputType = {
    questions: number
    rounds: number
  }

  export type TriviaCategoryCountOutputTypeSelect = {
    questions?: boolean
    rounds?: boolean
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
   * Count Type TriviaQuestionCountOutputType
   */


  export type TriviaQuestionCountOutputType = {
    roundQuestions: number
    choices: number
  }

  export type TriviaQuestionCountOutputTypeSelect = {
    roundQuestions?: boolean
    choices?: boolean
  }

  export type TriviaQuestionCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaQuestionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuestionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuestionCountOutputTypeArgs)
    ? TriviaQuestionCountOutputType 
    : S extends { select: any } & (TriviaQuestionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaQuestionCountOutputType ? TriviaQuestionCountOutputType[P] : never
  } 
      : TriviaQuestionCountOutputType




  // Custom InputTypes

  /**
   * TriviaQuestionCountOutputType without action
   */
  export type TriviaQuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestionCountOutputType
     */
    select?: TriviaQuestionCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaChoiceCountOutputType
   */


  export type TriviaChoiceCountOutputType = {
    roundQuestions: number
  }

  export type TriviaChoiceCountOutputTypeSelect = {
    roundQuestions?: boolean
  }

  export type TriviaChoiceCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaChoiceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaChoiceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaChoiceCountOutputTypeArgs)
    ? TriviaChoiceCountOutputType 
    : S extends { select: any } & (TriviaChoiceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaChoiceCountOutputType ? TriviaChoiceCountOutputType[P] : never
  } 
      : TriviaChoiceCountOutputType




  // Custom InputTypes

  /**
   * TriviaChoiceCountOutputType without action
   */
  export type TriviaChoiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaChoiceCountOutputType
     */
    select?: TriviaChoiceCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaRoundCountOutputType
   */


  export type TriviaRoundCountOutputType = {
    roundQuestions: number
  }

  export type TriviaRoundCountOutputTypeSelect = {
    roundQuestions?: boolean
  }

  export type TriviaRoundCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaRoundCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundCountOutputTypeArgs)
    ? TriviaRoundCountOutputType 
    : S extends { select: any } & (TriviaRoundCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaRoundCountOutputType ? TriviaRoundCountOutputType[P] : never
  } 
      : TriviaRoundCountOutputType




  // Custom InputTypes

  /**
   * TriviaRoundCountOutputType without action
   */
  export type TriviaRoundCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundCountOutputType
     */
    select?: TriviaRoundCountOutputTypeSelect | null
  }



  /**
   * Count Type TriviaUserCountOutputType
   */


  export type TriviaUserCountOutputType = {
    rounds: number
  }

  export type TriviaUserCountOutputTypeSelect = {
    rounds?: boolean
  }

  export type TriviaUserCountOutputTypeGetPayload<S extends boolean | null | undefined | TriviaUserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaUserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TriviaUserCountOutputTypeArgs)
    ? TriviaUserCountOutputType 
    : S extends { select: any } & (TriviaUserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TriviaUserCountOutputType ? TriviaUserCountOutputType[P] : never
  } 
      : TriviaUserCountOutputType




  // Custom InputTypes

  /**
   * TriviaUserCountOutputType without action
   */
  export type TriviaUserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TriviaUserCountOutputType
     */
    select?: TriviaUserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

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
    questions?: boolean | TriviaCategory$questionsArgs
    rounds?: boolean | TriviaCategory$roundsArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }


  export type TriviaCategoryInclude = {
    questions?: boolean | TriviaCategory$questionsArgs
    rounds?: boolean | TriviaCategory$roundsArgs
    _count?: boolean | TriviaCategoryCountOutputTypeArgs
  }

  export type TriviaCategoryGetPayload<S extends boolean | null | undefined | TriviaCategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaCategory :
    S extends undefined ? never :
    S extends { include: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
    ? TriviaCategory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'questions' ? Array < TriviaQuestionGetPayload<S['include'][P]>>  :
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaCategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaCategoryArgs | TriviaCategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'questions' ? Array < TriviaQuestionGetPayload<S['select'][P]>>  :
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['select'][P]>>  :
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

    questions<T extends TriviaCategory$questionsArgs= {}>(args?: Subset<T, TriviaCategory$questionsArgs>): Prisma.PrismaPromise<Array<TriviaQuestionGetPayload<T>>| Null>;

    rounds<T extends TriviaCategory$roundsArgs= {}>(args?: Subset<T, TriviaCategory$roundsArgs>): Prisma.PrismaPromise<Array<TriviaRoundGetPayload<T>>| Null>;

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
   * TriviaCategory.questions
   */
  export type TriviaCategory$questionsArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    where?: TriviaQuestionWhereInput
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    cursor?: TriviaQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaQuestionScalarFieldEnum>
  }


  /**
   * TriviaCategory.rounds
   */
  export type TriviaCategory$roundsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    where?: TriviaRoundWhereInput
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    cursor?: TriviaRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
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
   * Model TriviaQuestion
   */


  export type AggregateTriviaQuestion = {
    _count: TriviaQuestionCountAggregateOutputType | null
    _avg: TriviaQuestionAvgAggregateOutputType | null
    _sum: TriviaQuestionSumAggregateOutputType | null
    _min: TriviaQuestionMinAggregateOutputType | null
    _max: TriviaQuestionMaxAggregateOutputType | null
  }

  export type TriviaQuestionAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    triviaAnswerChoiceId: number | null
  }

  export type TriviaQuestionSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    triviaAnswerChoiceId: number | null
  }

  export type TriviaQuestionMinAggregateOutputType = {
    id: number | null
    quiz: string | null
    categoryId: number | null
    triviaAnswerChoiceId: number | null
  }

  export type TriviaQuestionMaxAggregateOutputType = {
    id: number | null
    quiz: string | null
    categoryId: number | null
    triviaAnswerChoiceId: number | null
  }

  export type TriviaQuestionCountAggregateOutputType = {
    id: number
    quiz: number
    categoryId: number
    triviaAnswerChoiceId: number
    _all: number
  }


  export type TriviaQuestionAvgAggregateInputType = {
    id?: true
    categoryId?: true
    triviaAnswerChoiceId?: true
  }

  export type TriviaQuestionSumAggregateInputType = {
    id?: true
    categoryId?: true
    triviaAnswerChoiceId?: true
  }

  export type TriviaQuestionMinAggregateInputType = {
    id?: true
    quiz?: true
    categoryId?: true
    triviaAnswerChoiceId?: true
  }

  export type TriviaQuestionMaxAggregateInputType = {
    id?: true
    quiz?: true
    categoryId?: true
    triviaAnswerChoiceId?: true
  }

  export type TriviaQuestionCountAggregateInputType = {
    id?: true
    quiz?: true
    categoryId?: true
    triviaAnswerChoiceId?: true
    _all?: true
  }

  export type TriviaQuestionAggregateArgs = {
    /**
     * Filter which TriviaQuestion to aggregate.
     */
    where?: TriviaQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaQuestions
    **/
    _count?: true | TriviaQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaQuestionMaxAggregateInputType
  }

  export type GetTriviaQuestionAggregateType<T extends TriviaQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaQuestion[P]>
      : GetScalarType<T[P], AggregateTriviaQuestion[P]>
  }




  export type TriviaQuestionGroupByArgs = {
    where?: TriviaQuestionWhereInput
    orderBy?: Enumerable<TriviaQuestionOrderByWithAggregationInput>
    by: TriviaQuestionScalarFieldEnum[]
    having?: TriviaQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaQuestionCountAggregateInputType | true
    _avg?: TriviaQuestionAvgAggregateInputType
    _sum?: TriviaQuestionSumAggregateInputType
    _min?: TriviaQuestionMinAggregateInputType
    _max?: TriviaQuestionMaxAggregateInputType
  }


  export type TriviaQuestionGroupByOutputType = {
    id: number
    quiz: string
    categoryId: number
    triviaAnswerChoiceId: number
    _count: TriviaQuestionCountAggregateOutputType | null
    _avg: TriviaQuestionAvgAggregateOutputType | null
    _sum: TriviaQuestionSumAggregateOutputType | null
    _min: TriviaQuestionMinAggregateOutputType | null
    _max: TriviaQuestionMaxAggregateOutputType | null
  }

  type GetTriviaQuestionGroupByPayload<T extends TriviaQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TriviaQuestionSelect = {
    id?: boolean
    quiz?: boolean
    categoryId?: boolean
    triviaAnswerChoiceId?: boolean
    category?: boolean | TriviaCategoryArgs
    roundQuestions?: boolean | TriviaQuestion$roundQuestionsArgs
    choices?: boolean | TriviaQuestion$choicesArgs
    answer?: boolean | TriviaChoiceArgs
    _count?: boolean | TriviaQuestionCountOutputTypeArgs
  }


  export type TriviaQuestionInclude = {
    category?: boolean | TriviaCategoryArgs
    roundQuestions?: boolean | TriviaQuestion$roundQuestionsArgs
    choices?: boolean | TriviaQuestion$choicesArgs
    answer?: boolean | TriviaChoiceArgs
    _count?: boolean | TriviaQuestionCountOutputTypeArgs
  }

  export type TriviaQuestionGetPayload<S extends boolean | null | undefined | TriviaQuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaQuestion :
    S extends undefined ? never :
    S extends { include: any } & (TriviaQuestionArgs | TriviaQuestionFindManyArgs)
    ? TriviaQuestion  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> :
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['include'][P]>>  :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['include'][P]>>  :
        P extends 'answer' ? TriviaChoiceGetPayload<S['include'][P]> :
        P extends '_count' ? TriviaQuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaQuestionArgs | TriviaQuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> :
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['select'][P]>>  :
        P extends 'choices' ? Array < TriviaChoiceGetPayload<S['select'][P]>>  :
        P extends 'answer' ? TriviaChoiceGetPayload<S['select'][P]> :
        P extends '_count' ? TriviaQuestionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaQuestion ? TriviaQuestion[P] : never
  } 
      : TriviaQuestion


  type TriviaQuestionCountArgs = 
    Omit<TriviaQuestionFindManyArgs, 'select' | 'include'> & {
      select?: TriviaQuestionCountAggregateInputType | true
    }

  export interface TriviaQuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaQuestion that matches the filter.
     * @param {TriviaQuestionFindUniqueArgs} args - Arguments to find a TriviaQuestion
     * @example
     * // Get one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaQuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaQuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaQuestion'> extends True ? Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>> : Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | null, null>

    /**
     * Find one TriviaQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaQuestionFindUniqueOrThrowArgs} args - Arguments to find a TriviaQuestion
     * @example
     * // Get one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaQuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuestionFindUniqueOrThrowArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Find the first TriviaQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionFindFirstArgs} args - Arguments to find a TriviaQuestion
     * @example
     * // Get one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaQuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaQuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaQuestion'> extends True ? Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>> : Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | null, null>

    /**
     * Find the first TriviaQuestion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionFindFirstOrThrowArgs} args - Arguments to find a TriviaQuestion
     * @example
     * // Get one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaQuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaQuestionFindFirstOrThrowArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Find zero or more TriviaQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaQuestions
     * const triviaQuestions = await prisma.triviaQuestion.findMany()
     * 
     * // Get first 10 TriviaQuestions
     * const triviaQuestions = await prisma.triviaQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaQuestionWithIdOnly = await prisma.triviaQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaQuestionFindManyArgs>(
      args?: SelectSubset<T, TriviaQuestionFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaQuestionGetPayload<T>>>

    /**
     * Create a TriviaQuestion.
     * @param {TriviaQuestionCreateArgs} args - Arguments to create a TriviaQuestion.
     * @example
     * // Create one TriviaQuestion
     * const TriviaQuestion = await prisma.triviaQuestion.create({
     *   data: {
     *     // ... data to create a TriviaQuestion
     *   }
     * })
     * 
    **/
    create<T extends TriviaQuestionCreateArgs>(
      args: SelectSubset<T, TriviaQuestionCreateArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Create many TriviaQuestions.
     *     @param {TriviaQuestionCreateManyArgs} args - Arguments to create many TriviaQuestions.
     *     @example
     *     // Create many TriviaQuestions
     *     const triviaQuestion = await prisma.triviaQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaQuestionCreateManyArgs>(
      args?: SelectSubset<T, TriviaQuestionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaQuestion.
     * @param {TriviaQuestionDeleteArgs} args - Arguments to delete one TriviaQuestion.
     * @example
     * // Delete one TriviaQuestion
     * const TriviaQuestion = await prisma.triviaQuestion.delete({
     *   where: {
     *     // ... filter to delete one TriviaQuestion
     *   }
     * })
     * 
    **/
    delete<T extends TriviaQuestionDeleteArgs>(
      args: SelectSubset<T, TriviaQuestionDeleteArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Update one TriviaQuestion.
     * @param {TriviaQuestionUpdateArgs} args - Arguments to update one TriviaQuestion.
     * @example
     * // Update one TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaQuestionUpdateArgs>(
      args: SelectSubset<T, TriviaQuestionUpdateArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Delete zero or more TriviaQuestions.
     * @param {TriviaQuestionDeleteManyArgs} args - Arguments to filter TriviaQuestions to delete.
     * @example
     * // Delete a few TriviaQuestions
     * const { count } = await prisma.triviaQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaQuestionDeleteManyArgs>(
      args?: SelectSubset<T, TriviaQuestionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaQuestions
     * const triviaQuestion = await prisma.triviaQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaQuestionUpdateManyArgs>(
      args: SelectSubset<T, TriviaQuestionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaQuestion.
     * @param {TriviaQuestionUpsertArgs} args - Arguments to update or create a TriviaQuestion.
     * @example
     * // Update or create a TriviaQuestion
     * const triviaQuestion = await prisma.triviaQuestion.upsert({
     *   create: {
     *     // ... data to create a TriviaQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaQuestionUpsertArgs>(
      args: SelectSubset<T, TriviaQuestionUpsertArgs>
    ): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T>>

    /**
     * Count the number of TriviaQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionCountArgs} args - Arguments to filter TriviaQuestions to count.
     * @example
     * // Count the number of TriviaQuestions
     * const count = await prisma.triviaQuestion.count({
     *   where: {
     *     // ... the filter for the TriviaQuestions we want to count
     *   }
     * })
    **/
    count<T extends TriviaQuestionCountArgs>(
      args?: Subset<T, TriviaQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaQuestionAggregateArgs>(args: Subset<T, TriviaQuestionAggregateArgs>): Prisma.PrismaPromise<GetTriviaQuestionAggregateType<T>>

    /**
     * Group by TriviaQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaQuestionGroupByArgs} args - Group by arguments.
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
      T extends TriviaQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TriviaQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaQuestionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    category<T extends TriviaCategoryArgs= {}>(args?: Subset<T, TriviaCategoryArgs>): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | Null>;

    roundQuestions<T extends TriviaQuestion$roundQuestionsArgs= {}>(args?: Subset<T, TriviaQuestion$roundQuestionsArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuestionGetPayload<T>>| Null>;

    choices<T extends TriviaQuestion$choicesArgs= {}>(args?: Subset<T, TriviaQuestion$choicesArgs>): Prisma.PrismaPromise<Array<TriviaChoiceGetPayload<T>>| Null>;

    answer<T extends TriviaChoiceArgs= {}>(args?: Subset<T, TriviaChoiceArgs>): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | Null>;

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
   * TriviaQuestion base type for findUnique actions
   */
  export type TriviaQuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestion to fetch.
     */
    where: TriviaQuestionWhereUniqueInput
  }

  /**
   * TriviaQuestion findUnique
   */
  export interface TriviaQuestionFindUniqueArgs extends TriviaQuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuestion findUniqueOrThrow
   */
  export type TriviaQuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestion to fetch.
     */
    where: TriviaQuestionWhereUniqueInput
  }


  /**
   * TriviaQuestion base type for findFirst actions
   */
  export type TriviaQuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestion to fetch.
     */
    where?: TriviaQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuestions.
     */
    cursor?: TriviaQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuestions.
     */
    distinct?: Enumerable<TriviaQuestionScalarFieldEnum>
  }

  /**
   * TriviaQuestion findFirst
   */
  export interface TriviaQuestionFindFirstArgs extends TriviaQuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaQuestion findFirstOrThrow
   */
  export type TriviaQuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestion to fetch.
     */
    where?: TriviaQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaQuestions.
     */
    cursor?: TriviaQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaQuestions.
     */
    distinct?: Enumerable<TriviaQuestionScalarFieldEnum>
  }


  /**
   * TriviaQuestion findMany
   */
  export type TriviaQuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter, which TriviaQuestions to fetch.
     */
    where?: TriviaQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaQuestions.
     */
    cursor?: TriviaQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaQuestions.
     */
    skip?: number
    distinct?: Enumerable<TriviaQuestionScalarFieldEnum>
  }


  /**
   * TriviaQuestion create
   */
  export type TriviaQuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * The data needed to create a TriviaQuestion.
     */
    data: XOR<TriviaQuestionCreateInput, TriviaQuestionUncheckedCreateInput>
  }


  /**
   * TriviaQuestion createMany
   */
  export type TriviaQuestionCreateManyArgs = {
    /**
     * The data used to create many TriviaQuestions.
     */
    data: Enumerable<TriviaQuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaQuestion update
   */
  export type TriviaQuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * The data needed to update a TriviaQuestion.
     */
    data: XOR<TriviaQuestionUpdateInput, TriviaQuestionUncheckedUpdateInput>
    /**
     * Choose, which TriviaQuestion to update.
     */
    where: TriviaQuestionWhereUniqueInput
  }


  /**
   * TriviaQuestion updateMany
   */
  export type TriviaQuestionUpdateManyArgs = {
    /**
     * The data used to update TriviaQuestions.
     */
    data: XOR<TriviaQuestionUpdateManyMutationInput, TriviaQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TriviaQuestions to update
     */
    where?: TriviaQuestionWhereInput
  }


  /**
   * TriviaQuestion upsert
   */
  export type TriviaQuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * The filter to search for the TriviaQuestion to update in case it exists.
     */
    where: TriviaQuestionWhereUniqueInput
    /**
     * In case the TriviaQuestion found by the `where` argument doesn't exist, create a new TriviaQuestion with this data.
     */
    create: XOR<TriviaQuestionCreateInput, TriviaQuestionUncheckedCreateInput>
    /**
     * In case the TriviaQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaQuestionUpdateInput, TriviaQuestionUncheckedUpdateInput>
  }


  /**
   * TriviaQuestion delete
   */
  export type TriviaQuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
    /**
     * Filter which TriviaQuestion to delete.
     */
    where: TriviaQuestionWhereUniqueInput
  }


  /**
   * TriviaQuestion deleteMany
   */
  export type TriviaQuestionDeleteManyArgs = {
    /**
     * Filter which TriviaQuestions to delete
     */
    where?: TriviaQuestionWhereInput
  }


  /**
   * TriviaQuestion.roundQuestions
   */
  export type TriviaQuestion$roundQuestionsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    where?: TriviaRoundQuestionWhereInput
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    cursor?: TriviaRoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }


  /**
   * TriviaQuestion.choices
   */
  export type TriviaQuestion$choicesArgs = {
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
   * TriviaQuestion without action
   */
  export type TriviaQuestionArgs = {
    /**
     * Select specific fields to fetch from the TriviaQuestion
     */
    select?: TriviaQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaQuestionInclude | null
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
    quizId: number | null
  }

  export type TriviaChoiceSumAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type TriviaChoiceMinAggregateOutputType = {
    id: number | null
    choice: string | null
    quizId: number | null
  }

  export type TriviaChoiceMaxAggregateOutputType = {
    id: number | null
    choice: string | null
    quizId: number | null
  }

  export type TriviaChoiceCountAggregateOutputType = {
    id: number
    choice: number
    quizId: number
    _all: number
  }


  export type TriviaChoiceAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type TriviaChoiceSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type TriviaChoiceMinAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
  }

  export type TriviaChoiceMaxAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
  }

  export type TriviaChoiceCountAggregateInputType = {
    id?: true
    choice?: true
    quizId?: true
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
    quizId: number | null
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
    quizId?: boolean
    roundQuestions?: boolean | TriviaChoice$roundQuestionsArgs
    quiz?: boolean | TriviaQuestionArgs
    quizAnswer?: boolean | TriviaQuestionArgs
    _count?: boolean | TriviaChoiceCountOutputTypeArgs
  }


  export type TriviaChoiceInclude = {
    roundQuestions?: boolean | TriviaChoice$roundQuestionsArgs
    quiz?: boolean | TriviaQuestionArgs
    quizAnswer?: boolean | TriviaQuestionArgs
    _count?: boolean | TriviaChoiceCountOutputTypeArgs
  }

  export type TriviaChoiceGetPayload<S extends boolean | null | undefined | TriviaChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaChoice :
    S extends undefined ? never :
    S extends { include: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
    ? TriviaChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['include'][P]>>  :
        P extends 'quiz' ? TriviaQuestionGetPayload<S['include'][P]> | null :
        P extends 'quizAnswer' ? TriviaQuestionGetPayload<S['include'][P]> | null :
        P extends '_count' ? TriviaChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaChoiceArgs | TriviaChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['select'][P]>>  :
        P extends 'quiz' ? TriviaQuestionGetPayload<S['select'][P]> | null :
        P extends 'quizAnswer' ? TriviaQuestionGetPayload<S['select'][P]> | null :
        P extends '_count' ? TriviaChoiceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaChoice ? TriviaChoice[P] : never
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

    roundQuestions<T extends TriviaChoice$roundQuestionsArgs= {}>(args?: Subset<T, TriviaChoice$roundQuestionsArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuestionGetPayload<T>>| Null>;

    quiz<T extends TriviaQuestionArgs= {}>(args?: Subset<T, TriviaQuestionArgs>): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | Null>;

    quizAnswer<T extends TriviaQuestionArgs= {}>(args?: Subset<T, TriviaQuestionArgs>): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | Null>;

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
   * TriviaChoice.roundQuestions
   */
  export type TriviaChoice$roundQuestionsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    where?: TriviaRoundQuestionWhereInput
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    cursor?: TriviaRoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
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
   * Model TriviaRoundQuestion
   */


  export type AggregateTriviaRoundQuestion = {
    _count: TriviaRoundQuestionCountAggregateOutputType | null
    _avg: TriviaRoundQuestionAvgAggregateOutputType | null
    _sum: TriviaRoundQuestionSumAggregateOutputType | null
    _min: TriviaRoundQuestionMinAggregateOutputType | null
    _max: TriviaRoundQuestionMaxAggregateOutputType | null
  }

  export type TriviaRoundQuestionAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
    choiceId: number | null
    quizResult: number | null
    roundId: number | null
  }

  export type TriviaRoundQuestionSumAggregateOutputType = {
    id: number | null
    quizId: number | null
    choiceId: number | null
    quizResult: number | null
    roundId: number | null
  }

  export type TriviaRoundQuestionMinAggregateOutputType = {
    id: number | null
    quizId: number | null
    choiceId: number | null
    quizResult: number | null
    roundId: number | null
  }

  export type TriviaRoundQuestionMaxAggregateOutputType = {
    id: number | null
    quizId: number | null
    choiceId: number | null
    quizResult: number | null
    roundId: number | null
  }

  export type TriviaRoundQuestionCountAggregateOutputType = {
    id: number
    quizId: number
    choiceId: number
    quizResult: number
    roundId: number
    _all: number
  }


  export type TriviaRoundQuestionAvgAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    quizResult?: true
    roundId?: true
  }

  export type TriviaRoundQuestionSumAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    quizResult?: true
    roundId?: true
  }

  export type TriviaRoundQuestionMinAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    quizResult?: true
    roundId?: true
  }

  export type TriviaRoundQuestionMaxAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    quizResult?: true
    roundId?: true
  }

  export type TriviaRoundQuestionCountAggregateInputType = {
    id?: true
    quizId?: true
    choiceId?: true
    quizResult?: true
    roundId?: true
    _all?: true
  }

  export type TriviaRoundQuestionAggregateArgs = {
    /**
     * Filter which TriviaRoundQuestion to aggregate.
     */
    where?: TriviaRoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaRoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaRoundQuestions
    **/
    _count?: true | TriviaRoundQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaRoundQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaRoundQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaRoundQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaRoundQuestionMaxAggregateInputType
  }

  export type GetTriviaRoundQuestionAggregateType<T extends TriviaRoundQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaRoundQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaRoundQuestion[P]>
      : GetScalarType<T[P], AggregateTriviaRoundQuestion[P]>
  }




  export type TriviaRoundQuestionGroupByArgs = {
    where?: TriviaRoundQuestionWhereInput
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithAggregationInput>
    by: TriviaRoundQuestionScalarFieldEnum[]
    having?: TriviaRoundQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaRoundQuestionCountAggregateInputType | true
    _avg?: TriviaRoundQuestionAvgAggregateInputType
    _sum?: TriviaRoundQuestionSumAggregateInputType
    _min?: TriviaRoundQuestionMinAggregateInputType
    _max?: TriviaRoundQuestionMaxAggregateInputType
  }


  export type TriviaRoundQuestionGroupByOutputType = {
    id: number
    quizId: number
    choiceId: number
    quizResult: number | null
    roundId: number
    _count: TriviaRoundQuestionCountAggregateOutputType | null
    _avg: TriviaRoundQuestionAvgAggregateOutputType | null
    _sum: TriviaRoundQuestionSumAggregateOutputType | null
    _min: TriviaRoundQuestionMinAggregateOutputType | null
    _max: TriviaRoundQuestionMaxAggregateOutputType | null
  }

  type GetTriviaRoundQuestionGroupByPayload<T extends TriviaRoundQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaRoundQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaRoundQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaRoundQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaRoundQuestionGroupByOutputType[P]>
        }
      >
    >


  export type TriviaRoundQuestionSelect = {
    id?: boolean
    quizId?: boolean
    choiceId?: boolean
    quizResult?: boolean
    roundId?: boolean
    question?: boolean | TriviaQuestionArgs
    userChoice?: boolean | TriviaChoiceArgs
    round?: boolean | TriviaRoundArgs
  }


  export type TriviaRoundQuestionInclude = {
    question?: boolean | TriviaQuestionArgs
    userChoice?: boolean | TriviaChoiceArgs
    round?: boolean | TriviaRoundArgs
  }

  export type TriviaRoundQuestionGetPayload<S extends boolean | null | undefined | TriviaRoundQuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRoundQuestion :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundQuestionArgs | TriviaRoundQuestionFindManyArgs)
    ? TriviaRoundQuestion  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'question' ? TriviaQuestionGetPayload<S['include'][P]> :
        P extends 'userChoice' ? TriviaChoiceGetPayload<S['include'][P]> :
        P extends 'round' ? TriviaRoundGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaRoundQuestionArgs | TriviaRoundQuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'question' ? TriviaQuestionGetPayload<S['select'][P]> :
        P extends 'userChoice' ? TriviaChoiceGetPayload<S['select'][P]> :
        P extends 'round' ? TriviaRoundGetPayload<S['select'][P]> :  P extends keyof TriviaRoundQuestion ? TriviaRoundQuestion[P] : never
  } 
      : TriviaRoundQuestion


  type TriviaRoundQuestionCountArgs = 
    Omit<TriviaRoundQuestionFindManyArgs, 'select' | 'include'> & {
      select?: TriviaRoundQuestionCountAggregateInputType | true
    }

  export interface TriviaRoundQuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaRoundQuestion that matches the filter.
     * @param {TriviaRoundQuestionFindUniqueArgs} args - Arguments to find a TriviaRoundQuestion
     * @example
     * // Get one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaRoundQuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaRoundQuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaRoundQuestion'> extends True ? Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>> : Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T> | null, null>

    /**
     * Find one TriviaRoundQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaRoundQuestionFindUniqueOrThrowArgs} args - Arguments to find a TriviaRoundQuestion
     * @example
     * // Get one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaRoundQuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionFindUniqueOrThrowArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Find the first TriviaRoundQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionFindFirstArgs} args - Arguments to find a TriviaRoundQuestion
     * @example
     * // Get one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaRoundQuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaRoundQuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaRoundQuestion'> extends True ? Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>> : Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T> | null, null>

    /**
     * Find the first TriviaRoundQuestion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionFindFirstOrThrowArgs} args - Arguments to find a TriviaRoundQuestion
     * @example
     * // Get one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaRoundQuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionFindFirstOrThrowArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Find zero or more TriviaRoundQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaRoundQuestions
     * const triviaRoundQuestions = await prisma.triviaRoundQuestion.findMany()
     * 
     * // Get first 10 TriviaRoundQuestions
     * const triviaRoundQuestions = await prisma.triviaRoundQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaRoundQuestionWithIdOnly = await prisma.triviaRoundQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaRoundQuestionFindManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaRoundQuestionGetPayload<T>>>

    /**
     * Create a TriviaRoundQuestion.
     * @param {TriviaRoundQuestionCreateArgs} args - Arguments to create a TriviaRoundQuestion.
     * @example
     * // Create one TriviaRoundQuestion
     * const TriviaRoundQuestion = await prisma.triviaRoundQuestion.create({
     *   data: {
     *     // ... data to create a TriviaRoundQuestion
     *   }
     * })
     * 
    **/
    create<T extends TriviaRoundQuestionCreateArgs>(
      args: SelectSubset<T, TriviaRoundQuestionCreateArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Create many TriviaRoundQuestions.
     *     @param {TriviaRoundQuestionCreateManyArgs} args - Arguments to create many TriviaRoundQuestions.
     *     @example
     *     // Create many TriviaRoundQuestions
     *     const triviaRoundQuestion = await prisma.triviaRoundQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaRoundQuestionCreateManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaRoundQuestion.
     * @param {TriviaRoundQuestionDeleteArgs} args - Arguments to delete one TriviaRoundQuestion.
     * @example
     * // Delete one TriviaRoundQuestion
     * const TriviaRoundQuestion = await prisma.triviaRoundQuestion.delete({
     *   where: {
     *     // ... filter to delete one TriviaRoundQuestion
     *   }
     * })
     * 
    **/
    delete<T extends TriviaRoundQuestionDeleteArgs>(
      args: SelectSubset<T, TriviaRoundQuestionDeleteArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Update one TriviaRoundQuestion.
     * @param {TriviaRoundQuestionUpdateArgs} args - Arguments to update one TriviaRoundQuestion.
     * @example
     * // Update one TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaRoundQuestionUpdateArgs>(
      args: SelectSubset<T, TriviaRoundQuestionUpdateArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Delete zero or more TriviaRoundQuestions.
     * @param {TriviaRoundQuestionDeleteManyArgs} args - Arguments to filter TriviaRoundQuestions to delete.
     * @example
     * // Delete a few TriviaRoundQuestions
     * const { count } = await prisma.triviaRoundQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaRoundQuestionDeleteManyArgs>(
      args?: SelectSubset<T, TriviaRoundQuestionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaRoundQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaRoundQuestions
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaRoundQuestionUpdateManyArgs>(
      args: SelectSubset<T, TriviaRoundQuestionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaRoundQuestion.
     * @param {TriviaRoundQuestionUpsertArgs} args - Arguments to update or create a TriviaRoundQuestion.
     * @example
     * // Update or create a TriviaRoundQuestion
     * const triviaRoundQuestion = await prisma.triviaRoundQuestion.upsert({
     *   create: {
     *     // ... data to create a TriviaRoundQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaRoundQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaRoundQuestionUpsertArgs>(
      args: SelectSubset<T, TriviaRoundQuestionUpsertArgs>
    ): Prisma__TriviaRoundQuestionClient<TriviaRoundQuestionGetPayload<T>>

    /**
     * Count the number of TriviaRoundQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionCountArgs} args - Arguments to filter TriviaRoundQuestions to count.
     * @example
     * // Count the number of TriviaRoundQuestions
     * const count = await prisma.triviaRoundQuestion.count({
     *   where: {
     *     // ... the filter for the TriviaRoundQuestions we want to count
     *   }
     * })
    **/
    count<T extends TriviaRoundQuestionCountArgs>(
      args?: Subset<T, TriviaRoundQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaRoundQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaRoundQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaRoundQuestionAggregateArgs>(args: Subset<T, TriviaRoundQuestionAggregateArgs>): Prisma.PrismaPromise<GetTriviaRoundQuestionAggregateType<T>>

    /**
     * Group by TriviaRoundQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundQuestionGroupByArgs} args - Group by arguments.
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
      T extends TriviaRoundQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaRoundQuestionGroupByArgs['orderBy'] }
        : { orderBy?: TriviaRoundQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaRoundQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaRoundQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaRoundQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaRoundQuestionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    question<T extends TriviaQuestionArgs= {}>(args?: Subset<T, TriviaQuestionArgs>): Prisma__TriviaQuestionClient<TriviaQuestionGetPayload<T> | Null>;

    userChoice<T extends TriviaChoiceArgs= {}>(args?: Subset<T, TriviaChoiceArgs>): Prisma__TriviaChoiceClient<TriviaChoiceGetPayload<T> | Null>;

    round<T extends TriviaRoundArgs= {}>(args?: Subset<T, TriviaRoundArgs>): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | Null>;

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
   * TriviaRoundQuestion base type for findUnique actions
   */
  export type TriviaRoundQuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestion to fetch.
     */
    where: TriviaRoundQuestionWhereUniqueInput
  }

  /**
   * TriviaRoundQuestion findUnique
   */
  export interface TriviaRoundQuestionFindUniqueArgs extends TriviaRoundQuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuestion findUniqueOrThrow
   */
  export type TriviaRoundQuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestion to fetch.
     */
    where: TriviaRoundQuestionWhereUniqueInput
  }


  /**
   * TriviaRoundQuestion base type for findFirst actions
   */
  export type TriviaRoundQuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestion to fetch.
     */
    where?: TriviaRoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuestions.
     */
    cursor?: TriviaRoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuestions.
     */
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }

  /**
   * TriviaRoundQuestion findFirst
   */
  export interface TriviaRoundQuestionFindFirstArgs extends TriviaRoundQuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRoundQuestion findFirstOrThrow
   */
  export type TriviaRoundQuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestion to fetch.
     */
    where?: TriviaRoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRoundQuestions.
     */
    cursor?: TriviaRoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRoundQuestions.
     */
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }


  /**
   * TriviaRoundQuestion findMany
   */
  export type TriviaRoundQuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter, which TriviaRoundQuestions to fetch.
     */
    where?: TriviaRoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRoundQuestions to fetch.
     */
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaRoundQuestions.
     */
    cursor?: TriviaRoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRoundQuestions.
     */
    skip?: number
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }


  /**
   * TriviaRoundQuestion create
   */
  export type TriviaRoundQuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * The data needed to create a TriviaRoundQuestion.
     */
    data: XOR<TriviaRoundQuestionCreateInput, TriviaRoundQuestionUncheckedCreateInput>
  }


  /**
   * TriviaRoundQuestion createMany
   */
  export type TriviaRoundQuestionCreateManyArgs = {
    /**
     * The data used to create many TriviaRoundQuestions.
     */
    data: Enumerable<TriviaRoundQuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaRoundQuestion update
   */
  export type TriviaRoundQuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * The data needed to update a TriviaRoundQuestion.
     */
    data: XOR<TriviaRoundQuestionUpdateInput, TriviaRoundQuestionUncheckedUpdateInput>
    /**
     * Choose, which TriviaRoundQuestion to update.
     */
    where: TriviaRoundQuestionWhereUniqueInput
  }


  /**
   * TriviaRoundQuestion updateMany
   */
  export type TriviaRoundQuestionUpdateManyArgs = {
    /**
     * The data used to update TriviaRoundQuestions.
     */
    data: XOR<TriviaRoundQuestionUpdateManyMutationInput, TriviaRoundQuestionUncheckedUpdateManyInput>
    /**
     * Filter which TriviaRoundQuestions to update
     */
    where?: TriviaRoundQuestionWhereInput
  }


  /**
   * TriviaRoundQuestion upsert
   */
  export type TriviaRoundQuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * The filter to search for the TriviaRoundQuestion to update in case it exists.
     */
    where: TriviaRoundQuestionWhereUniqueInput
    /**
     * In case the TriviaRoundQuestion found by the `where` argument doesn't exist, create a new TriviaRoundQuestion with this data.
     */
    create: XOR<TriviaRoundQuestionCreateInput, TriviaRoundQuestionUncheckedCreateInput>
    /**
     * In case the TriviaRoundQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaRoundQuestionUpdateInput, TriviaRoundQuestionUncheckedUpdateInput>
  }


  /**
   * TriviaRoundQuestion delete
   */
  export type TriviaRoundQuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    /**
     * Filter which TriviaRoundQuestion to delete.
     */
    where: TriviaRoundQuestionWhereUniqueInput
  }


  /**
   * TriviaRoundQuestion deleteMany
   */
  export type TriviaRoundQuestionDeleteManyArgs = {
    /**
     * Filter which TriviaRoundQuestions to delete
     */
    where?: TriviaRoundQuestionWhereInput
  }


  /**
   * TriviaRoundQuestion without action
   */
  export type TriviaRoundQuestionArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
  }



  /**
   * Model TriviaRound
   */


  export type AggregateTriviaRound = {
    _count: TriviaRoundCountAggregateOutputType | null
    _avg: TriviaRoundAvgAggregateOutputType | null
    _sum: TriviaRoundSumAggregateOutputType | null
    _min: TriviaRoundMinAggregateOutputType | null
    _max: TriviaRoundMaxAggregateOutputType | null
  }

  export type TriviaRoundAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    totalResult: number | null
    userId: number | null
    roundNo: number | null
  }

  export type TriviaRoundSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    totalResult: number | null
    userId: number | null
    roundNo: number | null
  }

  export type TriviaRoundMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    totalResult: number | null
    createAt: Date | null
    userId: number | null
    roundNo: number | null
  }

  export type TriviaRoundMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    totalResult: number | null
    createAt: Date | null
    userId: number | null
    roundNo: number | null
  }

  export type TriviaRoundCountAggregateOutputType = {
    id: number
    categoryId: number
    totalResult: number
    createAt: number
    userId: number
    roundNo: number
    _all: number
  }


  export type TriviaRoundAvgAggregateInputType = {
    id?: true
    categoryId?: true
    totalResult?: true
    userId?: true
    roundNo?: true
  }

  export type TriviaRoundSumAggregateInputType = {
    id?: true
    categoryId?: true
    totalResult?: true
    userId?: true
    roundNo?: true
  }

  export type TriviaRoundMinAggregateInputType = {
    id?: true
    categoryId?: true
    totalResult?: true
    createAt?: true
    userId?: true
    roundNo?: true
  }

  export type TriviaRoundMaxAggregateInputType = {
    id?: true
    categoryId?: true
    totalResult?: true
    createAt?: true
    userId?: true
    roundNo?: true
  }

  export type TriviaRoundCountAggregateInputType = {
    id?: true
    categoryId?: true
    totalResult?: true
    createAt?: true
    userId?: true
    roundNo?: true
    _all?: true
  }

  export type TriviaRoundAggregateArgs = {
    /**
     * Filter which TriviaRound to aggregate.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaRounds
    **/
    _count?: true | TriviaRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaRoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaRoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaRoundMaxAggregateInputType
  }

  export type GetTriviaRoundAggregateType<T extends TriviaRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaRound[P]>
      : GetScalarType<T[P], AggregateTriviaRound[P]>
  }




  export type TriviaRoundGroupByArgs = {
    where?: TriviaRoundWhereInput
    orderBy?: Enumerable<TriviaRoundOrderByWithAggregationInput>
    by: TriviaRoundScalarFieldEnum[]
    having?: TriviaRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaRoundCountAggregateInputType | true
    _avg?: TriviaRoundAvgAggregateInputType
    _sum?: TriviaRoundSumAggregateInputType
    _min?: TriviaRoundMinAggregateInputType
    _max?: TriviaRoundMaxAggregateInputType
  }


  export type TriviaRoundGroupByOutputType = {
    id: number
    categoryId: number
    totalResult: number
    createAt: Date
    userId: number
    roundNo: number
    _count: TriviaRoundCountAggregateOutputType | null
    _avg: TriviaRoundAvgAggregateOutputType | null
    _sum: TriviaRoundSumAggregateOutputType | null
    _min: TriviaRoundMinAggregateOutputType | null
    _max: TriviaRoundMaxAggregateOutputType | null
  }

  type GetTriviaRoundGroupByPayload<T extends TriviaRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaRoundGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaRoundGroupByOutputType[P]>
        }
      >
    >


  export type TriviaRoundSelect = {
    id?: boolean
    categoryId?: boolean
    totalResult?: boolean
    createAt?: boolean
    userId?: boolean
    roundNo?: boolean
    category?: boolean | TriviaCategoryArgs
    user?: boolean | TriviaUserArgs
    roundQuestions?: boolean | TriviaRound$roundQuestionsArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }


  export type TriviaRoundInclude = {
    category?: boolean | TriviaCategoryArgs
    user?: boolean | TriviaUserArgs
    roundQuestions?: boolean | TriviaRound$roundQuestionsArgs
    _count?: boolean | TriviaRoundCountOutputTypeArgs
  }

  export type TriviaRoundGetPayload<S extends boolean | null | undefined | TriviaRoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaRound :
    S extends undefined ? never :
    S extends { include: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
    ? TriviaRound  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['include'][P]> :
        P extends 'user' ? TriviaUserGetPayload<S['include'][P]> :
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaRoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaRoundArgs | TriviaRoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? TriviaCategoryGetPayload<S['select'][P]> :
        P extends 'user' ? TriviaUserGetPayload<S['select'][P]> :
        P extends 'roundQuestions' ? Array < TriviaRoundQuestionGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaRoundCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaRound ? TriviaRound[P] : never
  } 
      : TriviaRound


  type TriviaRoundCountArgs = 
    Omit<TriviaRoundFindManyArgs, 'select' | 'include'> & {
      select?: TriviaRoundCountAggregateInputType | true
    }

  export interface TriviaRoundDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaRound that matches the filter.
     * @param {TriviaRoundFindUniqueArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaRoundFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaRoundFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaRound'> extends True ? Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>> : Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | null, null>

    /**
     * Find one TriviaRound that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaRoundFindUniqueOrThrowArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaRoundFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundFindUniqueOrThrowArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Find the first TriviaRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindFirstArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaRoundFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaRoundFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaRound'> extends True ? Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>> : Prisma__TriviaRoundClient<TriviaRoundGetPayload<T> | null, null>

    /**
     * Find the first TriviaRound that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindFirstOrThrowArgs} args - Arguments to find a TriviaRound
     * @example
     * // Get one TriviaRound
     * const triviaRound = await prisma.triviaRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaRoundFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaRoundFindFirstOrThrowArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Find zero or more TriviaRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaRounds
     * const triviaRounds = await prisma.triviaRound.findMany()
     * 
     * // Get first 10 TriviaRounds
     * const triviaRounds = await prisma.triviaRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaRoundWithIdOnly = await prisma.triviaRound.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaRoundFindManyArgs>(
      args?: SelectSubset<T, TriviaRoundFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaRoundGetPayload<T>>>

    /**
     * Create a TriviaRound.
     * @param {TriviaRoundCreateArgs} args - Arguments to create a TriviaRound.
     * @example
     * // Create one TriviaRound
     * const TriviaRound = await prisma.triviaRound.create({
     *   data: {
     *     // ... data to create a TriviaRound
     *   }
     * })
     * 
    **/
    create<T extends TriviaRoundCreateArgs>(
      args: SelectSubset<T, TriviaRoundCreateArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Create many TriviaRounds.
     *     @param {TriviaRoundCreateManyArgs} args - Arguments to create many TriviaRounds.
     *     @example
     *     // Create many TriviaRounds
     *     const triviaRound = await prisma.triviaRound.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaRoundCreateManyArgs>(
      args?: SelectSubset<T, TriviaRoundCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaRound.
     * @param {TriviaRoundDeleteArgs} args - Arguments to delete one TriviaRound.
     * @example
     * // Delete one TriviaRound
     * const TriviaRound = await prisma.triviaRound.delete({
     *   where: {
     *     // ... filter to delete one TriviaRound
     *   }
     * })
     * 
    **/
    delete<T extends TriviaRoundDeleteArgs>(
      args: SelectSubset<T, TriviaRoundDeleteArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Update one TriviaRound.
     * @param {TriviaRoundUpdateArgs} args - Arguments to update one TriviaRound.
     * @example
     * // Update one TriviaRound
     * const triviaRound = await prisma.triviaRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaRoundUpdateArgs>(
      args: SelectSubset<T, TriviaRoundUpdateArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Delete zero or more TriviaRounds.
     * @param {TriviaRoundDeleteManyArgs} args - Arguments to filter TriviaRounds to delete.
     * @example
     * // Delete a few TriviaRounds
     * const { count } = await prisma.triviaRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaRoundDeleteManyArgs>(
      args?: SelectSubset<T, TriviaRoundDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaRounds
     * const triviaRound = await prisma.triviaRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaRoundUpdateManyArgs>(
      args: SelectSubset<T, TriviaRoundUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaRound.
     * @param {TriviaRoundUpsertArgs} args - Arguments to update or create a TriviaRound.
     * @example
     * // Update or create a TriviaRound
     * const triviaRound = await prisma.triviaRound.upsert({
     *   create: {
     *     // ... data to create a TriviaRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaRound we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaRoundUpsertArgs>(
      args: SelectSubset<T, TriviaRoundUpsertArgs>
    ): Prisma__TriviaRoundClient<TriviaRoundGetPayload<T>>

    /**
     * Count the number of TriviaRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundCountArgs} args - Arguments to filter TriviaRounds to count.
     * @example
     * // Count the number of TriviaRounds
     * const count = await prisma.triviaRound.count({
     *   where: {
     *     // ... the filter for the TriviaRounds we want to count
     *   }
     * })
    **/
    count<T extends TriviaRoundCountArgs>(
      args?: Subset<T, TriviaRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaRoundAggregateArgs>(args: Subset<T, TriviaRoundAggregateArgs>): Prisma.PrismaPromise<GetTriviaRoundAggregateType<T>>

    /**
     * Group by TriviaRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaRoundGroupByArgs} args - Group by arguments.
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
      T extends TriviaRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaRoundGroupByArgs['orderBy'] }
        : { orderBy?: TriviaRoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaRoundClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    category<T extends TriviaCategoryArgs= {}>(args?: Subset<T, TriviaCategoryArgs>): Prisma__TriviaCategoryClient<TriviaCategoryGetPayload<T> | Null>;

    user<T extends TriviaUserArgs= {}>(args?: Subset<T, TriviaUserArgs>): Prisma__TriviaUserClient<TriviaUserGetPayload<T> | Null>;

    roundQuestions<T extends TriviaRound$roundQuestionsArgs= {}>(args?: Subset<T, TriviaRound$roundQuestionsArgs>): Prisma.PrismaPromise<Array<TriviaRoundQuestionGetPayload<T>>| Null>;

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
   * TriviaRound base type for findUnique actions
   */
  export type TriviaRoundFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where: TriviaRoundWhereUniqueInput
  }

  /**
   * TriviaRound findUnique
   */
  export interface TriviaRoundFindUniqueArgs extends TriviaRoundFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRound findUniqueOrThrow
   */
  export type TriviaRoundFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound base type for findFirst actions
   */
  export type TriviaRoundFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRounds.
     */
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }

  /**
   * TriviaRound findFirst
   */
  export interface TriviaRoundFindFirstArgs extends TriviaRoundFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaRound findFirstOrThrow
   */
  export type TriviaRoundFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRound to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaRounds.
     */
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaRound findMany
   */
  export type TriviaRoundFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter, which TriviaRounds to fetch.
     */
    where?: TriviaRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaRounds to fetch.
     */
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaRounds.
     */
    cursor?: TriviaRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaRounds.
     */
    skip?: number
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaRound create
   */
  export type TriviaRoundCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The data needed to create a TriviaRound.
     */
    data: XOR<TriviaRoundCreateInput, TriviaRoundUncheckedCreateInput>
  }


  /**
   * TriviaRound createMany
   */
  export type TriviaRoundCreateManyArgs = {
    /**
     * The data used to create many TriviaRounds.
     */
    data: Enumerable<TriviaRoundCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaRound update
   */
  export type TriviaRoundUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The data needed to update a TriviaRound.
     */
    data: XOR<TriviaRoundUpdateInput, TriviaRoundUncheckedUpdateInput>
    /**
     * Choose, which TriviaRound to update.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound updateMany
   */
  export type TriviaRoundUpdateManyArgs = {
    /**
     * The data used to update TriviaRounds.
     */
    data: XOR<TriviaRoundUpdateManyMutationInput, TriviaRoundUncheckedUpdateManyInput>
    /**
     * Filter which TriviaRounds to update
     */
    where?: TriviaRoundWhereInput
  }


  /**
   * TriviaRound upsert
   */
  export type TriviaRoundUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * The filter to search for the TriviaRound to update in case it exists.
     */
    where: TriviaRoundWhereUniqueInput
    /**
     * In case the TriviaRound found by the `where` argument doesn't exist, create a new TriviaRound with this data.
     */
    create: XOR<TriviaRoundCreateInput, TriviaRoundUncheckedCreateInput>
    /**
     * In case the TriviaRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaRoundUpdateInput, TriviaRoundUncheckedUpdateInput>
  }


  /**
   * TriviaRound delete
   */
  export type TriviaRoundDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    /**
     * Filter which TriviaRound to delete.
     */
    where: TriviaRoundWhereUniqueInput
  }


  /**
   * TriviaRound deleteMany
   */
  export type TriviaRoundDeleteManyArgs = {
    /**
     * Filter which TriviaRounds to delete
     */
    where?: TriviaRoundWhereInput
  }


  /**
   * TriviaRound.roundQuestions
   */
  export type TriviaRound$roundQuestionsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRoundQuestion
     */
    select?: TriviaRoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundQuestionInclude | null
    where?: TriviaRoundQuestionWhereInput
    orderBy?: Enumerable<TriviaRoundQuestionOrderByWithRelationInput>
    cursor?: TriviaRoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundQuestionScalarFieldEnum>
  }


  /**
   * TriviaRound without action
   */
  export type TriviaRoundArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
  }



  /**
   * Model TriviaUser
   */


  export type AggregateTriviaUser = {
    _count: TriviaUserCountAggregateOutputType | null
    _avg: TriviaUserAvgAggregateOutputType | null
    _sum: TriviaUserSumAggregateOutputType | null
    _min: TriviaUserMinAggregateOutputType | null
    _max: TriviaUserMaxAggregateOutputType | null
  }

  export type TriviaUserAvgAggregateOutputType = {
    id: number | null
  }

  export type TriviaUserSumAggregateOutputType = {
    id: number | null
  }

  export type TriviaUserMinAggregateOutputType = {
    id: number | null
    user: string | null
    avatar: string | null
  }

  export type TriviaUserMaxAggregateOutputType = {
    id: number | null
    user: string | null
    avatar: string | null
  }

  export type TriviaUserCountAggregateOutputType = {
    id: number
    user: number
    avatar: number
    _all: number
  }


  export type TriviaUserAvgAggregateInputType = {
    id?: true
  }

  export type TriviaUserSumAggregateInputType = {
    id?: true
  }

  export type TriviaUserMinAggregateInputType = {
    id?: true
    user?: true
    avatar?: true
  }

  export type TriviaUserMaxAggregateInputType = {
    id?: true
    user?: true
    avatar?: true
  }

  export type TriviaUserCountAggregateInputType = {
    id?: true
    user?: true
    avatar?: true
    _all?: true
  }

  export type TriviaUserAggregateArgs = {
    /**
     * Filter which TriviaUser to aggregate.
     */
    where?: TriviaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaUsers to fetch.
     */
    orderBy?: Enumerable<TriviaUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriviaUsers
    **/
    _count?: true | TriviaUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaUserMaxAggregateInputType
  }

  export type GetTriviaUserAggregateType<T extends TriviaUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTriviaUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriviaUser[P]>
      : GetScalarType<T[P], AggregateTriviaUser[P]>
  }




  export type TriviaUserGroupByArgs = {
    where?: TriviaUserWhereInput
    orderBy?: Enumerable<TriviaUserOrderByWithAggregationInput>
    by: TriviaUserScalarFieldEnum[]
    having?: TriviaUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaUserCountAggregateInputType | true
    _avg?: TriviaUserAvgAggregateInputType
    _sum?: TriviaUserSumAggregateInputType
    _min?: TriviaUserMinAggregateInputType
    _max?: TriviaUserMaxAggregateInputType
  }


  export type TriviaUserGroupByOutputType = {
    id: number
    user: string
    avatar: string
    _count: TriviaUserCountAggregateOutputType | null
    _avg: TriviaUserAvgAggregateOutputType | null
    _sum: TriviaUserSumAggregateOutputType | null
    _min: TriviaUserMinAggregateOutputType | null
    _max: TriviaUserMaxAggregateOutputType | null
  }

  type GetTriviaUserGroupByPayload<T extends TriviaUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TriviaUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaUserGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaUserGroupByOutputType[P]>
        }
      >
    >


  export type TriviaUserSelect = {
    id?: boolean
    user?: boolean
    avatar?: boolean
    rounds?: boolean | TriviaUser$roundsArgs
    _count?: boolean | TriviaUserCountOutputTypeArgs
  }


  export type TriviaUserInclude = {
    rounds?: boolean | TriviaUser$roundsArgs
    _count?: boolean | TriviaUserCountOutputTypeArgs
  }

  export type TriviaUserGetPayload<S extends boolean | null | undefined | TriviaUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TriviaUser :
    S extends undefined ? never :
    S extends { include: any } & (TriviaUserArgs | TriviaUserFindManyArgs)
    ? TriviaUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? TriviaUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TriviaUserArgs | TriviaUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'rounds' ? Array < TriviaRoundGetPayload<S['select'][P]>>  :
        P extends '_count' ? TriviaUserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof TriviaUser ? TriviaUser[P] : never
  } 
      : TriviaUser


  type TriviaUserCountArgs = 
    Omit<TriviaUserFindManyArgs, 'select' | 'include'> & {
      select?: TriviaUserCountAggregateInputType | true
    }

  export interface TriviaUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TriviaUser that matches the filter.
     * @param {TriviaUserFindUniqueArgs} args - Arguments to find a TriviaUser
     * @example
     * // Get one TriviaUser
     * const triviaUser = await prisma.triviaUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TriviaUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TriviaUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TriviaUser'> extends True ? Prisma__TriviaUserClient<TriviaUserGetPayload<T>> : Prisma__TriviaUserClient<TriviaUserGetPayload<T> | null, null>

    /**
     * Find one TriviaUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TriviaUserFindUniqueOrThrowArgs} args - Arguments to find a TriviaUser
     * @example
     * // Get one TriviaUser
     * const triviaUser = await prisma.triviaUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TriviaUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TriviaUserFindUniqueOrThrowArgs>
    ): Prisma__TriviaUserClient<TriviaUserGetPayload<T>>

    /**
     * Find the first TriviaUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaUserFindFirstArgs} args - Arguments to find a TriviaUser
     * @example
     * // Get one TriviaUser
     * const triviaUser = await prisma.triviaUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TriviaUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TriviaUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TriviaUser'> extends True ? Prisma__TriviaUserClient<TriviaUserGetPayload<T>> : Prisma__TriviaUserClient<TriviaUserGetPayload<T> | null, null>

    /**
     * Find the first TriviaUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaUserFindFirstOrThrowArgs} args - Arguments to find a TriviaUser
     * @example
     * // Get one TriviaUser
     * const triviaUser = await prisma.triviaUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TriviaUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TriviaUserFindFirstOrThrowArgs>
    ): Prisma__TriviaUserClient<TriviaUserGetPayload<T>>

    /**
     * Find zero or more TriviaUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriviaUsers
     * const triviaUsers = await prisma.triviaUser.findMany()
     * 
     * // Get first 10 TriviaUsers
     * const triviaUsers = await prisma.triviaUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaUserWithIdOnly = await prisma.triviaUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TriviaUserFindManyArgs>(
      args?: SelectSubset<T, TriviaUserFindManyArgs>
    ): Prisma.PrismaPromise<Array<TriviaUserGetPayload<T>>>

    /**
     * Create a TriviaUser.
     * @param {TriviaUserCreateArgs} args - Arguments to create a TriviaUser.
     * @example
     * // Create one TriviaUser
     * const TriviaUser = await prisma.triviaUser.create({
     *   data: {
     *     // ... data to create a TriviaUser
     *   }
     * })
     * 
    **/
    create<T extends TriviaUserCreateArgs>(
      args: SelectSubset<T, TriviaUserCreateArgs>
    ): Prisma__TriviaUserClient<TriviaUserGetPayload<T>>

    /**
     * Create many TriviaUsers.
     *     @param {TriviaUserCreateManyArgs} args - Arguments to create many TriviaUsers.
     *     @example
     *     // Create many TriviaUsers
     *     const triviaUser = await prisma.triviaUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TriviaUserCreateManyArgs>(
      args?: SelectSubset<T, TriviaUserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TriviaUser.
     * @param {TriviaUserDeleteArgs} args - Arguments to delete one TriviaUser.
     * @example
     * // Delete one TriviaUser
     * const TriviaUser = await prisma.triviaUser.delete({
     *   where: {
     *     // ... filter to delete one TriviaUser
     *   }
     * })
     * 
    **/
    delete<T extends TriviaUserDeleteArgs>(
      args: SelectSubset<T, TriviaUserDeleteArgs>
    ): Prisma__TriviaUserClient<TriviaUserGetPayload<T>>

    /**
     * Update one TriviaUser.
     * @param {TriviaUserUpdateArgs} args - Arguments to update one TriviaUser.
     * @example
     * // Update one TriviaUser
     * const triviaUser = await prisma.triviaUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TriviaUserUpdateArgs>(
      args: SelectSubset<T, TriviaUserUpdateArgs>
    ): Prisma__TriviaUserClient<TriviaUserGetPayload<T>>

    /**
     * Delete zero or more TriviaUsers.
     * @param {TriviaUserDeleteManyArgs} args - Arguments to filter TriviaUsers to delete.
     * @example
     * // Delete a few TriviaUsers
     * const { count } = await prisma.triviaUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TriviaUserDeleteManyArgs>(
      args?: SelectSubset<T, TriviaUserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriviaUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriviaUsers
     * const triviaUser = await prisma.triviaUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TriviaUserUpdateManyArgs>(
      args: SelectSubset<T, TriviaUserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriviaUser.
     * @param {TriviaUserUpsertArgs} args - Arguments to update or create a TriviaUser.
     * @example
     * // Update or create a TriviaUser
     * const triviaUser = await prisma.triviaUser.upsert({
     *   create: {
     *     // ... data to create a TriviaUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriviaUser we want to update
     *   }
     * })
    **/
    upsert<T extends TriviaUserUpsertArgs>(
      args: SelectSubset<T, TriviaUserUpsertArgs>
    ): Prisma__TriviaUserClient<TriviaUserGetPayload<T>>

    /**
     * Count the number of TriviaUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaUserCountArgs} args - Arguments to filter TriviaUsers to count.
     * @example
     * // Count the number of TriviaUsers
     * const count = await prisma.triviaUser.count({
     *   where: {
     *     // ... the filter for the TriviaUsers we want to count
     *   }
     * })
    **/
    count<T extends TriviaUserCountArgs>(
      args?: Subset<T, TriviaUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriviaUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaUserAggregateArgs>(args: Subset<T, TriviaUserAggregateArgs>): Prisma.PrismaPromise<GetTriviaUserAggregateType<T>>

    /**
     * Group by TriviaUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaUserGroupByArgs} args - Group by arguments.
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
      T extends TriviaUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaUserGroupByArgs['orderBy'] }
        : { orderBy?: TriviaUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TriviaUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TriviaUserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    rounds<T extends TriviaUser$roundsArgs= {}>(args?: Subset<T, TriviaUser$roundsArgs>): Prisma.PrismaPromise<Array<TriviaRoundGetPayload<T>>| Null>;

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
   * TriviaUser base type for findUnique actions
   */
  export type TriviaUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * Filter, which TriviaUser to fetch.
     */
    where: TriviaUserWhereUniqueInput
  }

  /**
   * TriviaUser findUnique
   */
  export interface TriviaUserFindUniqueArgs extends TriviaUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaUser findUniqueOrThrow
   */
  export type TriviaUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * Filter, which TriviaUser to fetch.
     */
    where: TriviaUserWhereUniqueInput
  }


  /**
   * TriviaUser base type for findFirst actions
   */
  export type TriviaUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * Filter, which TriviaUser to fetch.
     */
    where?: TriviaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaUsers to fetch.
     */
    orderBy?: Enumerable<TriviaUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaUsers.
     */
    cursor?: TriviaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaUsers.
     */
    distinct?: Enumerable<TriviaUserScalarFieldEnum>
  }

  /**
   * TriviaUser findFirst
   */
  export interface TriviaUserFindFirstArgs extends TriviaUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TriviaUser findFirstOrThrow
   */
  export type TriviaUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * Filter, which TriviaUser to fetch.
     */
    where?: TriviaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaUsers to fetch.
     */
    orderBy?: Enumerable<TriviaUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriviaUsers.
     */
    cursor?: TriviaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriviaUsers.
     */
    distinct?: Enumerable<TriviaUserScalarFieldEnum>
  }


  /**
   * TriviaUser findMany
   */
  export type TriviaUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * Filter, which TriviaUsers to fetch.
     */
    where?: TriviaUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriviaUsers to fetch.
     */
    orderBy?: Enumerable<TriviaUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriviaUsers.
     */
    cursor?: TriviaUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriviaUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriviaUsers.
     */
    skip?: number
    distinct?: Enumerable<TriviaUserScalarFieldEnum>
  }


  /**
   * TriviaUser create
   */
  export type TriviaUserCreateArgs = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * The data needed to create a TriviaUser.
     */
    data: XOR<TriviaUserCreateInput, TriviaUserUncheckedCreateInput>
  }


  /**
   * TriviaUser createMany
   */
  export type TriviaUserCreateManyArgs = {
    /**
     * The data used to create many TriviaUsers.
     */
    data: Enumerable<TriviaUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TriviaUser update
   */
  export type TriviaUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * The data needed to update a TriviaUser.
     */
    data: XOR<TriviaUserUpdateInput, TriviaUserUncheckedUpdateInput>
    /**
     * Choose, which TriviaUser to update.
     */
    where: TriviaUserWhereUniqueInput
  }


  /**
   * TriviaUser updateMany
   */
  export type TriviaUserUpdateManyArgs = {
    /**
     * The data used to update TriviaUsers.
     */
    data: XOR<TriviaUserUpdateManyMutationInput, TriviaUserUncheckedUpdateManyInput>
    /**
     * Filter which TriviaUsers to update
     */
    where?: TriviaUserWhereInput
  }


  /**
   * TriviaUser upsert
   */
  export type TriviaUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * The filter to search for the TriviaUser to update in case it exists.
     */
    where: TriviaUserWhereUniqueInput
    /**
     * In case the TriviaUser found by the `where` argument doesn't exist, create a new TriviaUser with this data.
     */
    create: XOR<TriviaUserCreateInput, TriviaUserUncheckedCreateInput>
    /**
     * In case the TriviaUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaUserUpdateInput, TriviaUserUncheckedUpdateInput>
  }


  /**
   * TriviaUser delete
   */
  export type TriviaUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
    /**
     * Filter which TriviaUser to delete.
     */
    where: TriviaUserWhereUniqueInput
  }


  /**
   * TriviaUser deleteMany
   */
  export type TriviaUserDeleteManyArgs = {
    /**
     * Filter which TriviaUsers to delete
     */
    where?: TriviaUserWhereInput
  }


  /**
   * TriviaUser.rounds
   */
  export type TriviaUser$roundsArgs = {
    /**
     * Select specific fields to fetch from the TriviaRound
     */
    select?: TriviaRoundSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaRoundInclude | null
    where?: TriviaRoundWhereInput
    orderBy?: Enumerable<TriviaRoundOrderByWithRelationInput>
    cursor?: TriviaRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TriviaRoundScalarFieldEnum>
  }


  /**
   * TriviaUser without action
   */
  export type TriviaUserArgs = {
    /**
     * Select specific fields to fetch from the TriviaUser
     */
    select?: TriviaUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TriviaUserInclude | null
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


  export const TriviaCategoryScalarFieldEnum: {
    id: 'id',
    category: 'category'
  };

  export type TriviaCategoryScalarFieldEnum = (typeof TriviaCategoryScalarFieldEnum)[keyof typeof TriviaCategoryScalarFieldEnum]


  export const TriviaChoiceScalarFieldEnum: {
    id: 'id',
    choice: 'choice',
    quizId: 'quizId'
  };

  export type TriviaChoiceScalarFieldEnum = (typeof TriviaChoiceScalarFieldEnum)[keyof typeof TriviaChoiceScalarFieldEnum]


  export const TriviaQuestionScalarFieldEnum: {
    id: 'id',
    quiz: 'quiz',
    categoryId: 'categoryId',
    triviaAnswerChoiceId: 'triviaAnswerChoiceId'
  };

  export type TriviaQuestionScalarFieldEnum = (typeof TriviaQuestionScalarFieldEnum)[keyof typeof TriviaQuestionScalarFieldEnum]


  export const TriviaRoundQuestionScalarFieldEnum: {
    id: 'id',
    quizId: 'quizId',
    choiceId: 'choiceId',
    quizResult: 'quizResult',
    roundId: 'roundId'
  };

  export type TriviaRoundQuestionScalarFieldEnum = (typeof TriviaRoundQuestionScalarFieldEnum)[keyof typeof TriviaRoundQuestionScalarFieldEnum]


  export const TriviaRoundScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    totalResult: 'totalResult',
    createAt: 'createAt',
    userId: 'userId',
    roundNo: 'roundNo'
  };

  export type TriviaRoundScalarFieldEnum = (typeof TriviaRoundScalarFieldEnum)[keyof typeof TriviaRoundScalarFieldEnum]


  export const TriviaUserScalarFieldEnum: {
    id: 'id',
    user: 'user',
    avatar: 'avatar'
  };

  export type TriviaUserScalarFieldEnum = (typeof TriviaUserScalarFieldEnum)[keyof typeof TriviaUserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type TriviaCategoryWhereInput = {
    AND?: Enumerable<TriviaCategoryWhereInput>
    OR?: Enumerable<TriviaCategoryWhereInput>
    NOT?: Enumerable<TriviaCategoryWhereInput>
    id?: IntFilter | number
    category?: StringFilter | string
    questions?: TriviaQuestionListRelationFilter
    rounds?: TriviaRoundListRelationFilter
  }

  export type TriviaCategoryOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    questions?: TriviaQuestionOrderByRelationAggregateInput
    rounds?: TriviaRoundOrderByRelationAggregateInput
  }

  export type TriviaCategoryWhereUniqueInput = {
    id?: number
    category?: string
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

  export type TriviaQuestionWhereInput = {
    AND?: Enumerable<TriviaQuestionWhereInput>
    OR?: Enumerable<TriviaQuestionWhereInput>
    NOT?: Enumerable<TriviaQuestionWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    categoryId?: IntFilter | number
    triviaAnswerChoiceId?: IntFilter | number
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput>
    roundQuestions?: TriviaRoundQuestionListRelationFilter
    choices?: TriviaChoiceListRelationFilter
    answer?: XOR<TriviaChoiceRelationFilter, TriviaChoiceWhereInput>
  }

  export type TriviaQuestionOrderByWithRelationInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryId?: SortOrder
    triviaAnswerChoiceId?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    roundQuestions?: TriviaRoundQuestionOrderByRelationAggregateInput
    choices?: TriviaChoiceOrderByRelationAggregateInput
    answer?: TriviaChoiceOrderByWithRelationInput
  }

  export type TriviaQuestionWhereUniqueInput = {
    id?: number
    triviaAnswerChoiceId?: number
  }

  export type TriviaQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryId?: SortOrder
    triviaAnswerChoiceId?: SortOrder
    _count?: TriviaQuestionCountOrderByAggregateInput
    _avg?: TriviaQuestionAvgOrderByAggregateInput
    _max?: TriviaQuestionMaxOrderByAggregateInput
    _min?: TriviaQuestionMinOrderByAggregateInput
    _sum?: TriviaQuestionSumOrderByAggregateInput
  }

  export type TriviaQuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaQuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaQuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaQuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quiz?: StringWithAggregatesFilter | string
    categoryId?: IntWithAggregatesFilter | number
    triviaAnswerChoiceId?: IntWithAggregatesFilter | number
  }

  export type TriviaChoiceWhereInput = {
    AND?: Enumerable<TriviaChoiceWhereInput>
    OR?: Enumerable<TriviaChoiceWhereInput>
    NOT?: Enumerable<TriviaChoiceWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    quizId?: IntNullableFilter | number | null
    roundQuestions?: TriviaRoundQuestionListRelationFilter
    quiz?: XOR<TriviaQuestionRelationFilter, TriviaQuestionWhereInput> | null
    quizAnswer?: XOR<TriviaQuestionRelationFilter, TriviaQuestionWhereInput> | null
  }

  export type TriviaChoiceOrderByWithRelationInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
    roundQuestions?: TriviaRoundQuestionOrderByRelationAggregateInput
    quiz?: TriviaQuestionOrderByWithRelationInput
    quizAnswer?: TriviaQuestionOrderByWithRelationInput
  }

  export type TriviaChoiceWhereUniqueInput = {
    id?: number
  }

  export type TriviaChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
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
    quizId?: IntNullableWithAggregatesFilter | number | null
  }

  export type TriviaRoundQuestionWhereInput = {
    AND?: Enumerable<TriviaRoundQuestionWhereInput>
    OR?: Enumerable<TriviaRoundQuestionWhereInput>
    NOT?: Enumerable<TriviaRoundQuestionWhereInput>
    id?: IntFilter | number
    quizId?: IntFilter | number
    choiceId?: IntFilter | number
    quizResult?: IntNullableFilter | number | null
    roundId?: IntFilter | number
    question?: XOR<TriviaQuestionRelationFilter, TriviaQuestionWhereInput>
    userChoice?: XOR<TriviaChoiceRelationFilter, TriviaChoiceWhereInput>
    round?: XOR<TriviaRoundRelationFilter, TriviaRoundWhereInput>
  }

  export type TriviaRoundQuestionOrderByWithRelationInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
    question?: TriviaQuestionOrderByWithRelationInput
    userChoice?: TriviaChoiceOrderByWithRelationInput
    round?: TriviaRoundOrderByWithRelationInput
  }

  export type TriviaRoundQuestionWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
    _count?: TriviaRoundQuestionCountOrderByAggregateInput
    _avg?: TriviaRoundQuestionAvgOrderByAggregateInput
    _max?: TriviaRoundQuestionMaxOrderByAggregateInput
    _min?: TriviaRoundQuestionMinOrderByAggregateInput
    _sum?: TriviaRoundQuestionSumOrderByAggregateInput
  }

  export type TriviaRoundQuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaRoundQuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaRoundQuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaRoundQuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quizId?: IntWithAggregatesFilter | number
    choiceId?: IntWithAggregatesFilter | number
    quizResult?: IntNullableWithAggregatesFilter | number | null
    roundId?: IntWithAggregatesFilter | number
  }

  export type TriviaRoundWhereInput = {
    AND?: Enumerable<TriviaRoundWhereInput>
    OR?: Enumerable<TriviaRoundWhereInput>
    NOT?: Enumerable<TriviaRoundWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    totalResult?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
    roundNo?: IntFilter | number
    category?: XOR<TriviaCategoryRelationFilter, TriviaCategoryWhereInput>
    user?: XOR<TriviaUserRelationFilter, TriviaUserWhereInput>
    roundQuestions?: TriviaRoundQuestionListRelationFilter
  }

  export type TriviaRoundOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
    userId?: SortOrder
    roundNo?: SortOrder
    category?: TriviaCategoryOrderByWithRelationInput
    user?: TriviaUserOrderByWithRelationInput
    roundQuestions?: TriviaRoundQuestionOrderByRelationAggregateInput
  }

  export type TriviaRoundWhereUniqueInput = {
    id?: number
  }

  export type TriviaRoundOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
    userId?: SortOrder
    roundNo?: SortOrder
    _count?: TriviaRoundCountOrderByAggregateInput
    _avg?: TriviaRoundAvgOrderByAggregateInput
    _max?: TriviaRoundMaxOrderByAggregateInput
    _min?: TriviaRoundMinOrderByAggregateInput
    _sum?: TriviaRoundSumOrderByAggregateInput
  }

  export type TriviaRoundScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaRoundScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
    totalResult?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: IntWithAggregatesFilter | number
    roundNo?: IntWithAggregatesFilter | number
  }

  export type TriviaUserWhereInput = {
    AND?: Enumerable<TriviaUserWhereInput>
    OR?: Enumerable<TriviaUserWhereInput>
    NOT?: Enumerable<TriviaUserWhereInput>
    id?: IntFilter | number
    user?: StringFilter | string
    avatar?: StringFilter | string
    rounds?: TriviaRoundListRelationFilter
  }

  export type TriviaUserOrderByWithRelationInput = {
    id?: SortOrder
    user?: SortOrder
    avatar?: SortOrder
    rounds?: TriviaRoundOrderByRelationAggregateInput
  }

  export type TriviaUserWhereUniqueInput = {
    id?: number
  }

  export type TriviaUserOrderByWithAggregationInput = {
    id?: SortOrder
    user?: SortOrder
    avatar?: SortOrder
    _count?: TriviaUserCountOrderByAggregateInput
    _avg?: TriviaUserAvgOrderByAggregateInput
    _max?: TriviaUserMaxOrderByAggregateInput
    _min?: TriviaUserMinOrderByAggregateInput
    _sum?: TriviaUserSumOrderByAggregateInput
  }

  export type TriviaUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TriviaUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<TriviaUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TriviaUserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    user?: StringWithAggregatesFilter | string
    avatar?: StringWithAggregatesFilter | string
  }

  export type TriviaCategoryCreateInput = {
    category: string
    questions?: TriviaQuestionCreateNestedManyWithoutCategoryInput
    rounds?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateInput = {
    id?: number
    category: string
    questions?: TriviaQuestionUncheckedCreateNestedManyWithoutCategoryInput
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    questions?: TriviaQuestionUpdateManyWithoutCategoryNestedInput
    rounds?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    questions?: TriviaQuestionUncheckedUpdateManyWithoutCategoryNestedInput
    rounds?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
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

  export type TriviaQuestionCreateInput = {
    quiz: string
    category: TriviaCategoryCreateNestedOneWithoutQuestionsInput
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutQuestionInput
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answer: TriviaChoiceCreateNestedOneWithoutQuizAnswerInput
  }

  export type TriviaQuestionUncheckedCreateInput = {
    id?: number
    quiz: string
    categoryId: number
    triviaAnswerChoiceId: number
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuestionUpdateInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answer?: TriviaChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput
  }

  export type TriviaQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuestionCreateManyInput = {
    id?: number
    quiz: string
    categoryId: number
    triviaAnswerChoiceId: number
  }

  export type TriviaQuestionUpdateManyMutationInput = {
    quiz?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaChoiceCreateInput = {
    choice: string
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutUserChoiceInput
    quiz?: TriviaQuestionCreateNestedOneWithoutChoicesInput
    quizAnswer?: TriviaQuestionCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceUncheckedCreateInput = {
    id?: number
    choice: string
    quizId?: number | null
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutUserChoiceInput
    quizAnswer?: TriviaQuestionUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceUpdateInput = {
    choice?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutUserChoiceNestedInput
    quiz?: TriviaQuestionUpdateOneWithoutChoicesNestedInput
    quizAnswer?: TriviaQuestionUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutUserChoiceNestedInput
    quizAnswer?: TriviaQuestionUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceCreateManyInput = {
    id?: number
    choice: string
    quizId?: number | null
  }

  export type TriviaChoiceUpdateManyMutationInput = {
    choice?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaRoundQuestionCreateInput = {
    quizResult?: number | null
    question: TriviaQuestionCreateNestedOneWithoutRoundQuestionsInput
    userChoice: TriviaChoiceCreateNestedOneWithoutRoundQuestionsInput
    round: TriviaRoundCreateNestedOneWithoutRoundQuestionsInput
  }

  export type TriviaRoundQuestionUncheckedCreateInput = {
    id?: number
    quizId: number
    choiceId: number
    quizResult?: number | null
    roundId: number
  }

  export type TriviaRoundQuestionUpdateInput = {
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    question?: TriviaQuestionUpdateOneRequiredWithoutRoundQuestionsNestedInput
    userChoice?: TriviaChoiceUpdateOneRequiredWithoutRoundQuestionsNestedInput
    round?: TriviaRoundUpdateOneRequiredWithoutRoundQuestionsNestedInput
  }

  export type TriviaRoundQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    roundId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundQuestionCreateManyInput = {
    id?: number
    quizId: number
    choiceId: number
    quizResult?: number | null
    roundId: number
  }

  export type TriviaRoundQuestionUpdateManyMutationInput = {
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaRoundQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    roundId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundCreateInput = {
    totalResult: number
    createAt?: Date | string
    roundNo: number
    category: TriviaCategoryCreateNestedOneWithoutRoundsInput
    user: TriviaUserCreateNestedOneWithoutRoundsInput
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateInput = {
    id?: number
    categoryId: number
    totalResult: number
    createAt?: Date | string
    userId: number
    roundNo: number
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUpdateInput = {
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    category?: TriviaCategoryUpdateOneRequiredWithoutRoundsNestedInput
    user?: TriviaUserUpdateOneRequiredWithoutRoundsNestedInput
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    roundNo?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundCreateManyInput = {
    id?: number
    categoryId: number
    totalResult: number
    createAt?: Date | string
    userId: number
    roundNo: number
  }

  export type TriviaRoundUpdateManyMutationInput = {
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    roundNo?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaUserCreateInput = {
    user: string
    avatar: string
    rounds?: TriviaRoundCreateNestedManyWithoutUserInput
  }

  export type TriviaUserUncheckedCreateInput = {
    id?: number
    user: string
    avatar: string
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutUserInput
  }

  export type TriviaUserUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    rounds?: TriviaRoundUpdateManyWithoutUserNestedInput
  }

  export type TriviaUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    rounds?: TriviaRoundUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TriviaUserCreateManyInput = {
    id?: number
    user: string
    avatar: string
  }

  export type TriviaUserUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
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

  export type TriviaQuestionListRelationFilter = {
    every?: TriviaQuestionWhereInput
    some?: TriviaQuestionWhereInput
    none?: TriviaQuestionWhereInput
  }

  export type TriviaRoundListRelationFilter = {
    every?: TriviaRoundWhereInput
    some?: TriviaRoundWhereInput
    none?: TriviaRoundWhereInput
  }

  export type TriviaQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaRoundOrderByRelationAggregateInput = {
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

  export type TriviaCategoryRelationFilter = {
    is?: TriviaCategoryWhereInput
    isNot?: TriviaCategoryWhereInput
  }

  export type TriviaRoundQuestionListRelationFilter = {
    every?: TriviaRoundQuestionWhereInput
    some?: TriviaRoundQuestionWhereInput
    none?: TriviaRoundQuestionWhereInput
  }

  export type TriviaChoiceListRelationFilter = {
    every?: TriviaChoiceWhereInput
    some?: TriviaChoiceWhereInput
    none?: TriviaChoiceWhereInput
  }

  export type TriviaChoiceRelationFilter = {
    is?: TriviaChoiceWhereInput
    isNot?: TriviaChoiceWhereInput
  }

  export type TriviaRoundQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriviaQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryId?: SortOrder
    triviaAnswerChoiceId?: SortOrder
  }

  export type TriviaQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    triviaAnswerChoiceId?: SortOrder
  }

  export type TriviaQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryId?: SortOrder
    triviaAnswerChoiceId?: SortOrder
  }

  export type TriviaQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quiz?: SortOrder
    categoryId?: SortOrder
    triviaAnswerChoiceId?: SortOrder
  }

  export type TriviaQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    triviaAnswerChoiceId?: SortOrder
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

  export type TriviaQuestionRelationFilter = {
    is?: TriviaQuestionWhereInput
    isNot?: TriviaQuestionWhereInput
  }

  export type TriviaChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    choice?: SortOrder
    quizId?: SortOrder
  }

  export type TriviaChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
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

  export type TriviaRoundRelationFilter = {
    is?: TriviaRoundWhereInput
    isNot?: TriviaRoundWhereInput
  }

  export type TriviaRoundQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
  }

  export type TriviaRoundQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
    choiceId?: SortOrder
    quizResult?: SortOrder
    roundId?: SortOrder
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

  export type TriviaUserRelationFilter = {
    is?: TriviaUserWhereInput
    isNot?: TriviaUserWhereInput
  }

  export type TriviaRoundCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
    userId?: SortOrder
    roundNo?: SortOrder
  }

  export type TriviaRoundAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    userId?: SortOrder
    roundNo?: SortOrder
  }

  export type TriviaRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
    userId?: SortOrder
    roundNo?: SortOrder
  }

  export type TriviaRoundMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    createAt?: SortOrder
    userId?: SortOrder
    roundNo?: SortOrder
  }

  export type TriviaRoundSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    totalResult?: SortOrder
    userId?: SortOrder
    roundNo?: SortOrder
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

  export type TriviaUserCountOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    avatar?: SortOrder
  }

  export type TriviaUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaUserMaxOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    avatar?: SortOrder
  }

  export type TriviaUserMinOrderByAggregateInput = {
    id?: SortOrder
    user?: SortOrder
    avatar?: SortOrder
  }

  export type TriviaUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TriviaQuestionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuestionCreateWithoutCategoryInput>, Enumerable<TriviaQuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuestionCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuestionCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuestionWhereUniqueInput>
  }

  export type TriviaRoundCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type TriviaQuestionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaQuestionCreateWithoutCategoryInput>, Enumerable<TriviaQuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuestionCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaQuestionCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaQuestionWhereUniqueInput>
  }

  export type TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TriviaQuestionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaQuestionCreateWithoutCategoryInput>, Enumerable<TriviaQuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuestionCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaQuestionUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaQuestionCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaQuestionWhereUniqueInput>
    update?: Enumerable<TriviaQuestionUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaQuestionUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaQuestionScalarWhereInput>
  }

  export type TriviaRoundUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaRoundWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundWhereUniqueInput>
    delete?: Enumerable<TriviaRoundWhereUniqueInput>
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
    update?: Enumerable<TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaRoundUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaRoundScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriviaQuestionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaQuestionCreateWithoutCategoryInput>, Enumerable<TriviaQuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaQuestionCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaQuestionUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaQuestionCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaQuestionWhereUniqueInput>
    update?: Enumerable<TriviaQuestionUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaQuestionUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaQuestionScalarWhereInput>
  }

  export type TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutCategoryInput>, Enumerable<TriviaRoundUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TriviaRoundCreateManyCategoryInputEnvelope
    set?: Enumerable<TriviaRoundWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundWhereUniqueInput>
    delete?: Enumerable<TriviaRoundWhereUniqueInput>
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
    update?: Enumerable<TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TriviaRoundUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TriviaRoundScalarWhereInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TriviaCategoryCreateWithoutQuestionsInput, TriviaCategoryUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutQuestionsInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaRoundQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutQuestionInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutQuestionInput>
    createMany?: TriviaRoundQuestionCreateManyQuestionInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaChoiceCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaChoiceCreateNestedOneWithoutQuizAnswerInput = {
    create?: XOR<TriviaChoiceCreateWithoutQuizAnswerInput, TriviaChoiceUncheckedCreateWithoutQuizAnswerInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutQuizAnswerInput
    connect?: TriviaChoiceWhereUniqueInput
  }

  export type TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutQuestionInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutQuestionInput>
    createMany?: TriviaRoundQuestionCreateManyQuestionInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
  }

  export type TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutQuestionsInput, TriviaCategoryUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutQuestionsInput
    upsert?: TriviaCategoryUpsertWithoutQuestionsInput
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutQuestionsInput, TriviaCategoryUncheckedUpdateWithoutQuestionsInput>
  }

  export type TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutQuestionInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: TriviaRoundQuestionCreateManyQuestionInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaChoiceUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput = {
    create?: XOR<TriviaChoiceCreateWithoutQuizAnswerInput, TriviaChoiceUncheckedCreateWithoutQuizAnswerInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutQuizAnswerInput
    upsert?: TriviaChoiceUpsertWithoutQuizAnswerInput
    connect?: TriviaChoiceWhereUniqueInput
    update?: XOR<TriviaChoiceUpdateWithoutQuizAnswerInput, TriviaChoiceUncheckedUpdateWithoutQuizAnswerInput>
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutQuestionInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: TriviaRoundQuestionCreateManyQuestionInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Enumerable<TriviaChoiceCreateWithoutQuizInput>, Enumerable<TriviaChoiceUncheckedCreateWithoutQuizInput>>
    connectOrCreate?: Enumerable<TriviaChoiceCreateOrConnectWithoutQuizInput>
    upsert?: Enumerable<TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput>
    createMany?: TriviaChoiceCreateManyQuizInputEnvelope
    set?: Enumerable<TriviaChoiceWhereUniqueInput>
    disconnect?: Enumerable<TriviaChoiceWhereUniqueInput>
    delete?: Enumerable<TriviaChoiceWhereUniqueInput>
    connect?: Enumerable<TriviaChoiceWhereUniqueInput>
    update?: Enumerable<TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput>
    updateMany?: Enumerable<TriviaChoiceUpdateManyWithWhereWithoutQuizInput>
    deleteMany?: Enumerable<TriviaChoiceScalarWhereInput>
  }

  export type TriviaRoundQuestionCreateNestedManyWithoutUserChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput>
    createMany?: TriviaRoundQuestionCreateManyUserChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaQuestionCreateNestedOneWithoutChoicesInput = {
    create?: XOR<TriviaQuestionCreateWithoutChoicesInput, TriviaQuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutChoicesInput
    connect?: TriviaQuestionWhereUniqueInput
  }

  export type TriviaQuestionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<TriviaQuestionCreateWithoutAnswerInput, TriviaQuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutAnswerInput
    connect?: TriviaQuestionWhereUniqueInput
  }

  export type TriviaRoundQuestionUncheckedCreateNestedManyWithoutUserChoiceInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput>
    createMany?: TriviaRoundQuestionCreateManyUserChoiceInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaQuestionUncheckedCreateNestedOneWithoutAnswerInput = {
    create?: XOR<TriviaQuestionCreateWithoutAnswerInput, TriviaQuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutAnswerInput
    connect?: TriviaQuestionWhereUniqueInput
  }

  export type TriviaRoundQuestionUpdateManyWithoutUserChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutUserChoiceInput>
    createMany?: TriviaRoundQuestionCreateManyUserChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutUserChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutUserChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaQuestionUpdateOneWithoutChoicesNestedInput = {
    create?: XOR<TriviaQuestionCreateWithoutChoicesInput, TriviaQuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutChoicesInput
    upsert?: TriviaQuestionUpsertWithoutChoicesInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuestionWhereUniqueInput
    update?: XOR<TriviaQuestionUpdateWithoutChoicesInput, TriviaQuestionUncheckedUpdateWithoutChoicesInput>
  }

  export type TriviaQuestionUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<TriviaQuestionCreateWithoutAnswerInput, TriviaQuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutAnswerInput
    upsert?: TriviaQuestionUpsertWithoutAnswerInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuestionWhereUniqueInput
    update?: XOR<TriviaQuestionUpdateWithoutAnswerInput, TriviaQuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutUserChoiceNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutUserChoiceInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutUserChoiceInput>
    createMany?: TriviaRoundQuestionCreateManyUserChoiceInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutUserChoiceInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutUserChoiceInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaQuestionUncheckedUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<TriviaQuestionCreateWithoutAnswerInput, TriviaQuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutAnswerInput
    upsert?: TriviaQuestionUpsertWithoutAnswerInput
    disconnect?: boolean
    delete?: boolean
    connect?: TriviaQuestionWhereUniqueInput
    update?: XOR<TriviaQuestionUpdateWithoutAnswerInput, TriviaQuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type TriviaQuestionCreateNestedOneWithoutRoundQuestionsInput = {
    create?: XOR<TriviaQuestionCreateWithoutRoundQuestionsInput, TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutRoundQuestionsInput
    connect?: TriviaQuestionWhereUniqueInput
  }

  export type TriviaChoiceCreateNestedOneWithoutRoundQuestionsInput = {
    create?: XOR<TriviaChoiceCreateWithoutRoundQuestionsInput, TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutRoundQuestionsInput
    connect?: TriviaChoiceWhereUniqueInput
  }

  export type TriviaRoundCreateNestedOneWithoutRoundQuestionsInput = {
    create?: XOR<TriviaRoundCreateWithoutRoundQuestionsInput, TriviaRoundUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutRoundQuestionsInput
    connect?: TriviaRoundWhereUniqueInput
  }

  export type TriviaQuestionUpdateOneRequiredWithoutRoundQuestionsNestedInput = {
    create?: XOR<TriviaQuestionCreateWithoutRoundQuestionsInput, TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaQuestionCreateOrConnectWithoutRoundQuestionsInput
    upsert?: TriviaQuestionUpsertWithoutRoundQuestionsInput
    connect?: TriviaQuestionWhereUniqueInput
    update?: XOR<TriviaQuestionUpdateWithoutRoundQuestionsInput, TriviaQuestionUncheckedUpdateWithoutRoundQuestionsInput>
  }

  export type TriviaChoiceUpdateOneRequiredWithoutRoundQuestionsNestedInput = {
    create?: XOR<TriviaChoiceCreateWithoutRoundQuestionsInput, TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaChoiceCreateOrConnectWithoutRoundQuestionsInput
    upsert?: TriviaChoiceUpsertWithoutRoundQuestionsInput
    connect?: TriviaChoiceWhereUniqueInput
    update?: XOR<TriviaChoiceUpdateWithoutRoundQuestionsInput, TriviaChoiceUncheckedUpdateWithoutRoundQuestionsInput>
  }

  export type TriviaRoundUpdateOneRequiredWithoutRoundQuestionsNestedInput = {
    create?: XOR<TriviaRoundCreateWithoutRoundQuestionsInput, TriviaRoundUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: TriviaRoundCreateOrConnectWithoutRoundQuestionsInput
    upsert?: TriviaRoundUpsertWithoutRoundQuestionsInput
    connect?: TriviaRoundWhereUniqueInput
    update?: XOR<TriviaRoundUpdateWithoutRoundQuestionsInput, TriviaRoundUncheckedUpdateWithoutRoundQuestionsInput>
  }

  export type TriviaCategoryCreateNestedOneWithoutRoundsInput = {
    create?: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutRoundsInput
    connect?: TriviaCategoryWhereUniqueInput
  }

  export type TriviaUserCreateNestedOneWithoutRoundsInput = {
    create?: XOR<TriviaUserCreateWithoutRoundsInput, TriviaUserUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaUserCreateOrConnectWithoutRoundsInput
    connect?: TriviaUserWhereUniqueInput
  }

  export type TriviaRoundQuestionCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutRoundInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutRoundInput>
    createMany?: TriviaRoundQuestionCreateManyRoundInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type TriviaRoundQuestionUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutRoundInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutRoundInput>
    createMany?: TriviaRoundQuestionCreateManyRoundInputEnvelope
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TriviaCategoryUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaCategoryCreateOrConnectWithoutRoundsInput
    upsert?: TriviaCategoryUpsertWithoutRoundsInput
    connect?: TriviaCategoryWhereUniqueInput
    update?: XOR<TriviaCategoryUpdateWithoutRoundsInput, TriviaCategoryUncheckedUpdateWithoutRoundsInput>
  }

  export type TriviaUserUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<TriviaUserCreateWithoutRoundsInput, TriviaUserUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TriviaUserCreateOrConnectWithoutRoundsInput
    upsert?: TriviaUserUpsertWithoutRoundsInput
    connect?: TriviaUserWhereUniqueInput
    update?: XOR<TriviaUserUpdateWithoutRoundsInput, TriviaUserUncheckedUpdateWithoutRoundsInput>
  }

  export type TriviaRoundQuestionUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutRoundInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: TriviaRoundQuestionCreateManyRoundInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<TriviaRoundQuestionCreateWithoutRoundInput>, Enumerable<TriviaRoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<TriviaRoundQuestionCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<TriviaRoundQuestionUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: TriviaRoundQuestionCreateManyRoundInputEnvelope
    set?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    delete?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    connect?: Enumerable<TriviaRoundQuestionWhereUniqueInput>
    update?: Enumerable<TriviaRoundQuestionUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<TriviaRoundQuestionUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<TriviaRoundQuestionScalarWhereInput>
  }

  export type TriviaRoundCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutUserInput>, Enumerable<TriviaRoundUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutUserInput>
    createMany?: TriviaRoundCreateManyUserInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type TriviaRoundUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutUserInput>, Enumerable<TriviaRoundUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutUserInput>
    createMany?: TriviaRoundCreateManyUserInputEnvelope
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
  }

  export type TriviaRoundUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutUserInput>, Enumerable<TriviaRoundUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TriviaRoundUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TriviaRoundCreateManyUserInputEnvelope
    set?: Enumerable<TriviaRoundWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundWhereUniqueInput>
    delete?: Enumerable<TriviaRoundWhereUniqueInput>
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
    update?: Enumerable<TriviaRoundUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TriviaRoundUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TriviaRoundScalarWhereInput>
  }

  export type TriviaRoundUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TriviaRoundCreateWithoutUserInput>, Enumerable<TriviaRoundUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TriviaRoundCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TriviaRoundUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TriviaRoundCreateManyUserInputEnvelope
    set?: Enumerable<TriviaRoundWhereUniqueInput>
    disconnect?: Enumerable<TriviaRoundWhereUniqueInput>
    delete?: Enumerable<TriviaRoundWhereUniqueInput>
    connect?: Enumerable<TriviaRoundWhereUniqueInput>
    update?: Enumerable<TriviaRoundUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TriviaRoundUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TriviaRoundScalarWhereInput>
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

  export type TriviaQuestionCreateWithoutCategoryInput = {
    quiz: string
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutQuestionInput
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answer: TriviaChoiceCreateNestedOneWithoutQuizAnswerInput
  }

  export type TriviaQuestionUncheckedCreateWithoutCategoryInput = {
    id?: number
    quiz: string
    triviaAnswerChoiceId: number
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuestionCreateOrConnectWithoutCategoryInput = {
    where: TriviaQuestionWhereUniqueInput
    create: XOR<TriviaQuestionCreateWithoutCategoryInput, TriviaQuestionUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuestionCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaQuestionCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundCreateWithoutCategoryInput = {
    totalResult: number
    createAt?: Date | string
    roundNo: number
    user: TriviaUserCreateNestedOneWithoutRoundsInput
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateWithoutCategoryInput = {
    id?: number
    totalResult: number
    createAt?: Date | string
    userId: number
    roundNo: number
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundCreateOrConnectWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutCategoryInput, TriviaRoundUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaRoundCreateManyCategoryInputEnvelope = {
    data: Enumerable<TriviaRoundCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuestionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TriviaQuestionWhereUniqueInput
    update: XOR<TriviaQuestionUpdateWithoutCategoryInput, TriviaQuestionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TriviaQuestionCreateWithoutCategoryInput, TriviaQuestionUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaQuestionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TriviaQuestionWhereUniqueInput
    data: XOR<TriviaQuestionUpdateWithoutCategoryInput, TriviaQuestionUncheckedUpdateWithoutCategoryInput>
  }

  export type TriviaQuestionUpdateManyWithWhereWithoutCategoryInput = {
    where: TriviaQuestionScalarWhereInput
    data: XOR<TriviaQuestionUpdateManyMutationInput, TriviaQuestionUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type TriviaQuestionScalarWhereInput = {
    AND?: Enumerable<TriviaQuestionScalarWhereInput>
    OR?: Enumerable<TriviaQuestionScalarWhereInput>
    NOT?: Enumerable<TriviaQuestionScalarWhereInput>
    id?: IntFilter | number
    quiz?: StringFilter | string
    categoryId?: IntFilter | number
    triviaAnswerChoiceId?: IntFilter | number
  }

  export type TriviaRoundUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    update: XOR<TriviaRoundUpdateWithoutCategoryInput, TriviaRoundUncheckedUpdateWithoutCategoryInput>
    create: XOR<TriviaRoundCreateWithoutCategoryInput, TriviaRoundUncheckedCreateWithoutCategoryInput>
  }

  export type TriviaRoundUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TriviaRoundWhereUniqueInput
    data: XOR<TriviaRoundUpdateWithoutCategoryInput, TriviaRoundUncheckedUpdateWithoutCategoryInput>
  }

  export type TriviaRoundUpdateManyWithWhereWithoutCategoryInput = {
    where: TriviaRoundScalarWhereInput
    data: XOR<TriviaRoundUpdateManyMutationInput, TriviaRoundUncheckedUpdateManyWithoutRoundsInput>
  }

  export type TriviaRoundScalarWhereInput = {
    AND?: Enumerable<TriviaRoundScalarWhereInput>
    OR?: Enumerable<TriviaRoundScalarWhereInput>
    NOT?: Enumerable<TriviaRoundScalarWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    totalResult?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    userId?: IntFilter | number
    roundNo?: IntFilter | number
  }

  export type TriviaCategoryCreateWithoutQuestionsInput = {
    category: string
    rounds?: TriviaRoundCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateWithoutQuestionsInput = {
    id?: number
    category: string
    rounds?: TriviaRoundUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryCreateOrConnectWithoutQuestionsInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutQuestionsInput, TriviaCategoryUncheckedCreateWithoutQuestionsInput>
  }

  export type TriviaRoundQuestionCreateWithoutQuestionInput = {
    quizResult?: number | null
    userChoice: TriviaChoiceCreateNestedOneWithoutRoundQuestionsInput
    round: TriviaRoundCreateNestedOneWithoutRoundQuestionsInput
  }

  export type TriviaRoundQuestionUncheckedCreateWithoutQuestionInput = {
    id?: number
    choiceId: number
    quizResult?: number | null
    roundId: number
  }

  export type TriviaRoundQuestionCreateOrConnectWithoutQuestionInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    create: XOR<TriviaRoundQuestionCreateWithoutQuestionInput, TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type TriviaRoundQuestionCreateManyQuestionInputEnvelope = {
    data: Enumerable<TriviaRoundQuestionCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type TriviaChoiceCreateWithoutQuizInput = {
    choice: string
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutUserChoiceInput
    quizAnswer?: TriviaQuestionCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceUncheckedCreateWithoutQuizInput = {
    id?: number
    choice: string
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutUserChoiceInput
    quizAnswer?: TriviaQuestionUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceCreateOrConnectWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutQuizInput, TriviaChoiceUncheckedCreateWithoutQuizInput>
  }

  export type TriviaChoiceCreateManyQuizInputEnvelope = {
    data: Enumerable<TriviaChoiceCreateManyQuizInput>
    skipDuplicates?: boolean
  }

  export type TriviaChoiceCreateWithoutQuizAnswerInput = {
    choice: string
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutUserChoiceInput
    quiz?: TriviaQuestionCreateNestedOneWithoutChoicesInput
  }

  export type TriviaChoiceUncheckedCreateWithoutQuizAnswerInput = {
    id?: number
    choice: string
    quizId?: number | null
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutUserChoiceInput
  }

  export type TriviaChoiceCreateOrConnectWithoutQuizAnswerInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutQuizAnswerInput, TriviaChoiceUncheckedCreateWithoutQuizAnswerInput>
  }

  export type TriviaCategoryUpsertWithoutQuestionsInput = {
    update: XOR<TriviaCategoryUpdateWithoutQuestionsInput, TriviaCategoryUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TriviaCategoryCreateWithoutQuestionsInput, TriviaCategoryUncheckedCreateWithoutQuestionsInput>
  }

  export type TriviaCategoryUpdateWithoutQuestionsInput = {
    category?: StringFieldUpdateOperationsInput | string
    rounds?: TriviaRoundUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    rounds?: TriviaRoundUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaRoundQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    update: XOR<TriviaRoundQuestionUpdateWithoutQuestionInput, TriviaRoundQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<TriviaRoundQuestionCreateWithoutQuestionInput, TriviaRoundQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type TriviaRoundQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    data: XOR<TriviaRoundQuestionUpdateWithoutQuestionInput, TriviaRoundQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type TriviaRoundQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: TriviaRoundQuestionScalarWhereInput
    data: XOR<TriviaRoundQuestionUpdateManyMutationInput, TriviaRoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput>
  }

  export type TriviaRoundQuestionScalarWhereInput = {
    AND?: Enumerable<TriviaRoundQuestionScalarWhereInput>
    OR?: Enumerable<TriviaRoundQuestionScalarWhereInput>
    NOT?: Enumerable<TriviaRoundQuestionScalarWhereInput>
    id?: IntFilter | number
    quizId?: IntFilter | number
    choiceId?: IntFilter | number
    quizResult?: IntNullableFilter | number | null
    roundId?: IntFilter | number
  }

  export type TriviaChoiceUpsertWithWhereUniqueWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    update: XOR<TriviaChoiceUpdateWithoutQuizInput, TriviaChoiceUncheckedUpdateWithoutQuizInput>
    create: XOR<TriviaChoiceCreateWithoutQuizInput, TriviaChoiceUncheckedCreateWithoutQuizInput>
  }

  export type TriviaChoiceUpdateWithWhereUniqueWithoutQuizInput = {
    where: TriviaChoiceWhereUniqueInput
    data: XOR<TriviaChoiceUpdateWithoutQuizInput, TriviaChoiceUncheckedUpdateWithoutQuizInput>
  }

  export type TriviaChoiceUpdateManyWithWhereWithoutQuizInput = {
    where: TriviaChoiceScalarWhereInput
    data: XOR<TriviaChoiceUpdateManyMutationInput, TriviaChoiceUncheckedUpdateManyWithoutChoicesInput>
  }

  export type TriviaChoiceScalarWhereInput = {
    AND?: Enumerable<TriviaChoiceScalarWhereInput>
    OR?: Enumerable<TriviaChoiceScalarWhereInput>
    NOT?: Enumerable<TriviaChoiceScalarWhereInput>
    id?: IntFilter | number
    choice?: StringFilter | string
    quizId?: IntNullableFilter | number | null
  }

  export type TriviaChoiceUpsertWithoutQuizAnswerInput = {
    update: XOR<TriviaChoiceUpdateWithoutQuizAnswerInput, TriviaChoiceUncheckedUpdateWithoutQuizAnswerInput>
    create: XOR<TriviaChoiceCreateWithoutQuizAnswerInput, TriviaChoiceUncheckedCreateWithoutQuizAnswerInput>
  }

  export type TriviaChoiceUpdateWithoutQuizAnswerInput = {
    choice?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutUserChoiceNestedInput
    quiz?: TriviaQuestionUpdateOneWithoutChoicesNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutQuizAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutUserChoiceNestedInput
  }

  export type TriviaRoundQuestionCreateWithoutUserChoiceInput = {
    quizResult?: number | null
    question: TriviaQuestionCreateNestedOneWithoutRoundQuestionsInput
    round: TriviaRoundCreateNestedOneWithoutRoundQuestionsInput
  }

  export type TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput = {
    id?: number
    quizId: number
    quizResult?: number | null
    roundId: number
  }

  export type TriviaRoundQuestionCreateOrConnectWithoutUserChoiceInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    create: XOR<TriviaRoundQuestionCreateWithoutUserChoiceInput, TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuestionCreateManyUserChoiceInputEnvelope = {
    data: Enumerable<TriviaRoundQuestionCreateManyUserChoiceInput>
    skipDuplicates?: boolean
  }

  export type TriviaQuestionCreateWithoutChoicesInput = {
    quiz: string
    category: TriviaCategoryCreateNestedOneWithoutQuestionsInput
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutQuestionInput
    answer: TriviaChoiceCreateNestedOneWithoutQuizAnswerInput
  }

  export type TriviaQuestionUncheckedCreateWithoutChoicesInput = {
    id?: number
    quiz: string
    categoryId: number
    triviaAnswerChoiceId: number
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type TriviaQuestionCreateOrConnectWithoutChoicesInput = {
    where: TriviaQuestionWhereUniqueInput
    create: XOR<TriviaQuestionCreateWithoutChoicesInput, TriviaQuestionUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaQuestionCreateWithoutAnswerInput = {
    quiz: string
    category: TriviaCategoryCreateNestedOneWithoutQuestionsInput
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutQuestionInput
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuestionUncheckedCreateWithoutAnswerInput = {
    id?: number
    quiz: string
    categoryId: number
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuestionCreateOrConnectWithoutAnswerInput = {
    where: TriviaQuestionWhereUniqueInput
    create: XOR<TriviaQuestionCreateWithoutAnswerInput, TriviaQuestionUncheckedCreateWithoutAnswerInput>
  }

  export type TriviaRoundQuestionUpsertWithWhereUniqueWithoutUserChoiceInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    update: XOR<TriviaRoundQuestionUpdateWithoutUserChoiceInput, TriviaRoundQuestionUncheckedUpdateWithoutUserChoiceInput>
    create: XOR<TriviaRoundQuestionCreateWithoutUserChoiceInput, TriviaRoundQuestionUncheckedCreateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuestionUpdateWithWhereUniqueWithoutUserChoiceInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    data: XOR<TriviaRoundQuestionUpdateWithoutUserChoiceInput, TriviaRoundQuestionUncheckedUpdateWithoutUserChoiceInput>
  }

  export type TriviaRoundQuestionUpdateManyWithWhereWithoutUserChoiceInput = {
    where: TriviaRoundQuestionScalarWhereInput
    data: XOR<TriviaRoundQuestionUpdateManyMutationInput, TriviaRoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput>
  }

  export type TriviaQuestionUpsertWithoutChoicesInput = {
    update: XOR<TriviaQuestionUpdateWithoutChoicesInput, TriviaQuestionUncheckedUpdateWithoutChoicesInput>
    create: XOR<TriviaQuestionCreateWithoutChoicesInput, TriviaQuestionUncheckedCreateWithoutChoicesInput>
  }

  export type TriviaQuestionUpdateWithoutChoicesInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput
    answer?: TriviaChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput
  }

  export type TriviaQuestionUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TriviaQuestionUpsertWithoutAnswerInput = {
    update: XOR<TriviaQuestionUpdateWithoutAnswerInput, TriviaQuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<TriviaQuestionCreateWithoutAnswerInput, TriviaQuestionUncheckedCreateWithoutAnswerInput>
  }

  export type TriviaQuestionUpdateWithoutAnswerInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuestionUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuestionCreateWithoutRoundQuestionsInput = {
    quiz: string
    category: TriviaCategoryCreateNestedOneWithoutQuestionsInput
    choices?: TriviaChoiceCreateNestedManyWithoutQuizInput
    answer: TriviaChoiceCreateNestedOneWithoutQuizAnswerInput
  }

  export type TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput = {
    id?: number
    quiz: string
    categoryId: number
    triviaAnswerChoiceId: number
    choices?: TriviaChoiceUncheckedCreateNestedManyWithoutQuizInput
  }

  export type TriviaQuestionCreateOrConnectWithoutRoundQuestionsInput = {
    where: TriviaQuestionWhereUniqueInput
    create: XOR<TriviaQuestionCreateWithoutRoundQuestionsInput, TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaChoiceCreateWithoutRoundQuestionsInput = {
    choice: string
    quiz?: TriviaQuestionCreateNestedOneWithoutChoicesInput
    quizAnswer?: TriviaQuestionCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput = {
    id?: number
    choice: string
    quizId?: number | null
    quizAnswer?: TriviaQuestionUncheckedCreateNestedOneWithoutAnswerInput
  }

  export type TriviaChoiceCreateOrConnectWithoutRoundQuestionsInput = {
    where: TriviaChoiceWhereUniqueInput
    create: XOR<TriviaChoiceCreateWithoutRoundQuestionsInput, TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaRoundCreateWithoutRoundQuestionsInput = {
    totalResult: number
    createAt?: Date | string
    roundNo: number
    category: TriviaCategoryCreateNestedOneWithoutRoundsInput
    user: TriviaUserCreateNestedOneWithoutRoundsInput
  }

  export type TriviaRoundUncheckedCreateWithoutRoundQuestionsInput = {
    id?: number
    categoryId: number
    totalResult: number
    createAt?: Date | string
    userId: number
    roundNo: number
  }

  export type TriviaRoundCreateOrConnectWithoutRoundQuestionsInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutRoundQuestionsInput, TriviaRoundUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaQuestionUpsertWithoutRoundQuestionsInput = {
    update: XOR<TriviaQuestionUpdateWithoutRoundQuestionsInput, TriviaQuestionUncheckedUpdateWithoutRoundQuestionsInput>
    create: XOR<TriviaQuestionCreateWithoutRoundQuestionsInput, TriviaQuestionUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaQuestionUpdateWithoutRoundQuestionsInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    category?: TriviaCategoryUpdateOneRequiredWithoutQuestionsNestedInput
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answer?: TriviaChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput
  }

  export type TriviaQuestionUncheckedUpdateWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaChoiceUpsertWithoutRoundQuestionsInput = {
    update: XOR<TriviaChoiceUpdateWithoutRoundQuestionsInput, TriviaChoiceUncheckedUpdateWithoutRoundQuestionsInput>
    create: XOR<TriviaChoiceCreateWithoutRoundQuestionsInput, TriviaChoiceUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaChoiceUpdateWithoutRoundQuestionsInput = {
    choice?: StringFieldUpdateOperationsInput | string
    quiz?: TriviaQuestionUpdateOneWithoutChoicesNestedInput
    quizAnswer?: TriviaQuestionUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    quizId?: NullableIntFieldUpdateOperationsInput | number | null
    quizAnswer?: TriviaQuestionUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaRoundUpsertWithoutRoundQuestionsInput = {
    update: XOR<TriviaRoundUpdateWithoutRoundQuestionsInput, TriviaRoundUncheckedUpdateWithoutRoundQuestionsInput>
    create: XOR<TriviaRoundCreateWithoutRoundQuestionsInput, TriviaRoundUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type TriviaRoundUpdateWithoutRoundQuestionsInput = {
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    category?: TriviaCategoryUpdateOneRequiredWithoutRoundsNestedInput
    user?: TriviaUserUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type TriviaRoundUncheckedUpdateWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    roundNo?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaCategoryCreateWithoutRoundsInput = {
    category: string
    questions?: TriviaQuestionCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryUncheckedCreateWithoutRoundsInput = {
    id?: number
    category: string
    questions?: TriviaQuestionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type TriviaCategoryCreateOrConnectWithoutRoundsInput = {
    where: TriviaCategoryWhereUniqueInput
    create: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaUserCreateWithoutRoundsInput = {
    user: string
    avatar: string
  }

  export type TriviaUserUncheckedCreateWithoutRoundsInput = {
    id?: number
    user: string
    avatar: string
  }

  export type TriviaUserCreateOrConnectWithoutRoundsInput = {
    where: TriviaUserWhereUniqueInput
    create: XOR<TriviaUserCreateWithoutRoundsInput, TriviaUserUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaRoundQuestionCreateWithoutRoundInput = {
    quizResult?: number | null
    question: TriviaQuestionCreateNestedOneWithoutRoundQuestionsInput
    userChoice: TriviaChoiceCreateNestedOneWithoutRoundQuestionsInput
  }

  export type TriviaRoundQuestionUncheckedCreateWithoutRoundInput = {
    id?: number
    quizId: number
    choiceId: number
    quizResult?: number | null
  }

  export type TriviaRoundQuestionCreateOrConnectWithoutRoundInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    create: XOR<TriviaRoundQuestionCreateWithoutRoundInput, TriviaRoundQuestionUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuestionCreateManyRoundInputEnvelope = {
    data: Enumerable<TriviaRoundQuestionCreateManyRoundInput>
    skipDuplicates?: boolean
  }

  export type TriviaCategoryUpsertWithoutRoundsInput = {
    update: XOR<TriviaCategoryUpdateWithoutRoundsInput, TriviaCategoryUncheckedUpdateWithoutRoundsInput>
    create: XOR<TriviaCategoryCreateWithoutRoundsInput, TriviaCategoryUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaCategoryUpdateWithoutRoundsInput = {
    category?: StringFieldUpdateOperationsInput | string
    questions?: TriviaQuestionUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaCategoryUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    questions?: TriviaQuestionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TriviaUserUpsertWithoutRoundsInput = {
    update: XOR<TriviaUserUpdateWithoutRoundsInput, TriviaUserUncheckedUpdateWithoutRoundsInput>
    create: XOR<TriviaUserCreateWithoutRoundsInput, TriviaUserUncheckedCreateWithoutRoundsInput>
  }

  export type TriviaUserUpdateWithoutRoundsInput = {
    user?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaUserUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaRoundQuestionUpsertWithWhereUniqueWithoutRoundInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    update: XOR<TriviaRoundQuestionUpdateWithoutRoundInput, TriviaRoundQuestionUncheckedUpdateWithoutRoundInput>
    create: XOR<TriviaRoundQuestionCreateWithoutRoundInput, TriviaRoundQuestionUncheckedCreateWithoutRoundInput>
  }

  export type TriviaRoundQuestionUpdateWithWhereUniqueWithoutRoundInput = {
    where: TriviaRoundQuestionWhereUniqueInput
    data: XOR<TriviaRoundQuestionUpdateWithoutRoundInput, TriviaRoundQuestionUncheckedUpdateWithoutRoundInput>
  }

  export type TriviaRoundQuestionUpdateManyWithWhereWithoutRoundInput = {
    where: TriviaRoundQuestionScalarWhereInput
    data: XOR<TriviaRoundQuestionUpdateManyMutationInput, TriviaRoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput>
  }

  export type TriviaRoundCreateWithoutUserInput = {
    totalResult: number
    createAt?: Date | string
    roundNo: number
    category: TriviaCategoryCreateNestedOneWithoutRoundsInput
    roundQuestions?: TriviaRoundQuestionCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId: number
    totalResult: number
    createAt?: Date | string
    roundNo: number
    roundQuestions?: TriviaRoundQuestionUncheckedCreateNestedManyWithoutRoundInput
  }

  export type TriviaRoundCreateOrConnectWithoutUserInput = {
    where: TriviaRoundWhereUniqueInput
    create: XOR<TriviaRoundCreateWithoutUserInput, TriviaRoundUncheckedCreateWithoutUserInput>
  }

  export type TriviaRoundCreateManyUserInputEnvelope = {
    data: Enumerable<TriviaRoundCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TriviaRoundUpsertWithWhereUniqueWithoutUserInput = {
    where: TriviaRoundWhereUniqueInput
    update: XOR<TriviaRoundUpdateWithoutUserInput, TriviaRoundUncheckedUpdateWithoutUserInput>
    create: XOR<TriviaRoundCreateWithoutUserInput, TriviaRoundUncheckedCreateWithoutUserInput>
  }

  export type TriviaRoundUpdateWithWhereUniqueWithoutUserInput = {
    where: TriviaRoundWhereUniqueInput
    data: XOR<TriviaRoundUpdateWithoutUserInput, TriviaRoundUncheckedUpdateWithoutUserInput>
  }

  export type TriviaRoundUpdateManyWithWhereWithoutUserInput = {
    where: TriviaRoundScalarWhereInput
    data: XOR<TriviaRoundUpdateManyMutationInput, TriviaRoundUncheckedUpdateManyWithoutRoundsInput>
  }

  export type TriviaQuestionCreateManyCategoryInput = {
    id?: number
    quiz: string
    triviaAnswerChoiceId: number
  }

  export type TriviaRoundCreateManyCategoryInput = {
    id?: number
    totalResult: number
    createAt?: Date | string
    userId: number
    roundNo: number
  }

  export type TriviaQuestionUpdateWithoutCategoryInput = {
    quiz?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutQuestionNestedInput
    choices?: TriviaChoiceUpdateManyWithoutQuizNestedInput
    answer?: TriviaChoiceUpdateOneRequiredWithoutQuizAnswerNestedInput
  }

  export type TriviaQuestionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    choices?: TriviaChoiceUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type TriviaQuestionUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quiz?: StringFieldUpdateOperationsInput | string
    triviaAnswerChoiceId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundUpdateWithoutCategoryInput = {
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    user?: TriviaUserUpdateOneRequiredWithoutRoundsNestedInput
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    roundNo?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateManyWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    roundNo?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundQuestionCreateManyQuestionInput = {
    id?: number
    choiceId: number
    quizResult?: number | null
    roundId: number
  }

  export type TriviaChoiceCreateManyQuizInput = {
    id?: number
    choice: string
  }

  export type TriviaRoundQuestionUpdateWithoutQuestionInput = {
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    userChoice?: TriviaChoiceUpdateOneRequiredWithoutRoundQuestionsNestedInput
    round?: TriviaRoundUpdateOneRequiredWithoutRoundQuestionsNestedInput
  }

  export type TriviaRoundQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    roundId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    roundId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaChoiceUpdateWithoutQuizInput = {
    choice?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutUserChoiceNestedInput
    quizAnswer?: TriviaQuestionUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceUncheckedUpdateWithoutQuizInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutUserChoiceNestedInput
    quizAnswer?: TriviaQuestionUncheckedUpdateOneWithoutAnswerNestedInput
  }

  export type TriviaChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    choice?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaRoundQuestionCreateManyUserChoiceInput = {
    id?: number
    quizId: number
    quizResult?: number | null
    roundId: number
  }

  export type TriviaRoundQuestionUpdateWithoutUserChoiceInput = {
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    question?: TriviaQuestionUpdateOneRequiredWithoutRoundQuestionsNestedInput
    round?: TriviaRoundUpdateOneRequiredWithoutRoundQuestionsNestedInput
  }

  export type TriviaRoundQuestionUncheckedUpdateWithoutUserChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    roundId?: IntFieldUpdateOperationsInput | number
  }

  export type TriviaRoundQuestionCreateManyRoundInput = {
    id?: number
    quizId: number
    choiceId: number
    quizResult?: number | null
  }

  export type TriviaRoundQuestionUpdateWithoutRoundInput = {
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
    question?: TriviaQuestionUpdateOneRequiredWithoutRoundQuestionsNestedInput
    userChoice?: TriviaChoiceUpdateOneRequiredWithoutRoundQuestionsNestedInput
  }

  export type TriviaRoundQuestionUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizId?: IntFieldUpdateOperationsInput | number
    choiceId?: IntFieldUpdateOperationsInput | number
    quizResult?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TriviaRoundCreateManyUserInput = {
    id?: number
    categoryId: number
    totalResult: number
    createAt?: Date | string
    roundNo: number
  }

  export type TriviaRoundUpdateWithoutUserInput = {
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    category?: TriviaCategoryUpdateOneRequiredWithoutRoundsNestedInput
    roundQuestions?: TriviaRoundQuestionUpdateManyWithoutRoundNestedInput
  }

  export type TriviaRoundUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    totalResult?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundNo?: IntFieldUpdateOperationsInput | number
    roundQuestions?: TriviaRoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
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