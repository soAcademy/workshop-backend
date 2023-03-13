
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Question
 * 
 */
export type Question = {
  id: number
  categoryId: number
  question: string
  choiceId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Choice
 * 
 */
export type Choice = {
  id: number
  answer: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Player
 * 
 */
export type Player = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Round
 * 
 */
export type Round = {
  id: number
  playerName: string
  round: string
  score: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model RoundQuestion
 * 
 */
export type RoundQuestion = {
  id: number
  roundsId: number
  questionsId: number
  chooseChoice: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model RoundChooseChoice
 * 
 */
export type RoundChooseChoice = {
  id: number
  roundQuestionsId: number
  choicesId: number
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

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
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<GlobalReject>;

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
   * `prisma.roundQuestion`: Exposes CRUD operations for the **RoundQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoundQuestions
    * const roundQuestions = await prisma.roundQuestion.findMany()
    * ```
    */
  get roundQuestion(): Prisma.RoundQuestionDelegate<GlobalReject>;

  /**
   * `prisma.roundChooseChoice`: Exposes CRUD operations for the **RoundChooseChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoundChooseChoices
    * const roundChooseChoices = await prisma.roundChooseChoice.findMany()
    * ```
    */
  get roundChooseChoice(): Prisma.RoundChooseChoiceDelegate<GlobalReject>;
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
    Category: 'Category',
    Question: 'Question',
    Choice: 'Choice',
    Player: 'Player',
    Round: 'Round',
    RoundQuestion: 'RoundQuestion',
    RoundChooseChoice: 'RoundChooseChoice'
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
    questions: number
  }

  export type CategoryCountOutputTypeSelect = {
    questions?: boolean
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
   * Count Type QuestionCountOutputType
   */


  export type QuestionCountOutputType = {
    choices: number
    roundQuestion: number
  }

  export type QuestionCountOutputTypeSelect = {
    choices?: boolean
    roundQuestion?: boolean
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
   * Count Type ChoiceCountOutputType
   */


  export type ChoiceCountOutputType = {
    questions: number
    answerToQuestion: number
    roundChooseChoice: number
  }

  export type ChoiceCountOutputTypeSelect = {
    questions?: boolean
    answerToQuestion?: boolean
    roundChooseChoice?: boolean
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
   * Count Type PlayerCountOutputType
   */


  export type PlayerCountOutputType = {
    rounds: number
  }

  export type PlayerCountOutputTypeSelect = {
    rounds?: boolean
  }

  export type PlayerCountOutputTypeGetPayload<S extends boolean | null | undefined | PlayerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PlayerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PlayerCountOutputTypeArgs)
    ? PlayerCountOutputType 
    : S extends { select: any } & (PlayerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PlayerCountOutputType ? PlayerCountOutputType[P] : never
  } 
      : PlayerCountOutputType




  // Custom InputTypes

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect | null
  }



  /**
   * Count Type RoundCountOutputType
   */


  export type RoundCountOutputType = {
    roundQuestions: number
  }

  export type RoundCountOutputTypeSelect = {
    roundQuestions?: boolean
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
   * Count Type RoundQuestionCountOutputType
   */


  export type RoundQuestionCountOutputType = {
    roundChooseChoice: number
  }

  export type RoundQuestionCountOutputTypeSelect = {
    roundChooseChoice?: boolean
  }

  export type RoundQuestionCountOutputTypeGetPayload<S extends boolean | null | undefined | RoundQuestionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundQuestionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RoundQuestionCountOutputTypeArgs)
    ? RoundQuestionCountOutputType 
    : S extends { select: any } & (RoundQuestionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoundQuestionCountOutputType ? RoundQuestionCountOutputType[P] : never
  } 
      : RoundQuestionCountOutputType




  // Custom InputTypes

  /**
   * RoundQuestionCountOutputType without action
   */
  export type RoundQuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionCountOutputType
     */
    select?: RoundQuestionCountOutputTypeSelect | null
  }



  /**
   * Models
   */

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


  export type CategorySelect = {
    id?: boolean
    name?: boolean
    questions?: boolean | Category$questionsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    questions?: boolean | Category$questionsArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'questions' ? Array < QuestionGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'questions' ? Array < QuestionGetPayload<S['select'][P]>>  :
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

    questions<T extends Category$questionsArgs= {}>(args?: Subset<T, Category$questionsArgs>): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>| Null>;

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
   * Category.questions
   */
  export type Category$questionsArgs = {
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
    categoryId: number | null
    choiceId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    choiceId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    question: string | null
    choiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    question: string | null
    choiceId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    categoryId: number
    question: number
    choiceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    categoryId?: true
    choiceId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    categoryId?: true
    choiceId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    categoryId?: true
    question?: true
    choiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    categoryId?: true
    question?: true
    choiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    categoryId?: true
    question?: true
    choiceId?: true
    createdAt?: true
    updatedAt?: true
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
    categoryId: number
    question: string
    choiceId: number
    createdAt: Date
    updatedAt: Date
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
    category?: boolean | CategoryArgs
    categoryId?: boolean
    question?: boolean
    answer?: boolean | ChoiceArgs
    choiceId?: boolean
    choices?: boolean | Question$choicesArgs
    createdAt?: boolean
    updatedAt?: boolean
    roundQuestion?: boolean | Question$roundQuestionArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }


  export type QuestionInclude = {
    category?: boolean | CategoryArgs
    answer?: boolean | ChoiceArgs
    choices?: boolean | Question$choicesArgs
    roundQuestion?: boolean | Question$roundQuestionArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }

  export type QuestionGetPayload<S extends boolean | null | undefined | QuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Question :
    S extends undefined ? never :
    S extends { include: any } & (QuestionArgs | QuestionFindManyArgs)
    ? Question  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? CategoryGetPayload<S['include'][P]> :
        P extends 'answer' ? ChoiceGetPayload<S['include'][P]> :
        P extends 'choices' ? Array < ChoiceGetPayload<S['include'][P]>>  :
        P extends 'roundQuestion' ? Array < RoundQuestionGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuestionArgs | QuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? CategoryGetPayload<S['select'][P]> :
        P extends 'answer' ? ChoiceGetPayload<S['select'][P]> :
        P extends 'choices' ? Array < ChoiceGetPayload<S['select'][P]>>  :
        P extends 'roundQuestion' ? Array < RoundQuestionGetPayload<S['select'][P]>>  :
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

    category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    answer<T extends ChoiceArgs= {}>(args?: Subset<T, ChoiceArgs>): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

    choices<T extends Question$choicesArgs= {}>(args?: Subset<T, Question$choicesArgs>): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>>| Null>;

    roundQuestion<T extends Question$roundQuestionArgs= {}>(args?: Subset<T, Question$roundQuestionArgs>): Prisma.PrismaPromise<Array<RoundQuestionGetPayload<T>>| Null>;

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
   * Question.choices
   */
  export type Question$choicesArgs = {
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
   * Question.roundQuestion
   */
  export type Question$roundQuestionArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    where?: RoundQuestionWhereInput
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    cursor?: RoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
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
  }

  export type ChoiceSumAggregateOutputType = {
    id: number | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: number | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: number | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoiceAvgAggregateInputType = {
    id?: true
  }

  export type ChoiceSumAggregateInputType = {
    id?: true
  }

  export type ChoiceMinAggregateInputType = {
    id?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
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
    answer: string
    createdAt: Date
    updatedAt: Date
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
    questions?: boolean | Choice$questionsArgs
    answerToQuestion?: boolean | Choice$answerToQuestionArgs
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roundChooseChoice?: boolean | Choice$roundChooseChoiceArgs
    _count?: boolean | ChoiceCountOutputTypeArgs
  }


  export type ChoiceInclude = {
    questions?: boolean | Choice$questionsArgs
    answerToQuestion?: boolean | Choice$answerToQuestionArgs
    roundChooseChoice?: boolean | Choice$roundChooseChoiceArgs
    _count?: boolean | ChoiceCountOutputTypeArgs
  }

  export type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Choice :
    S extends undefined ? never :
    S extends { include: any } & (ChoiceArgs | ChoiceFindManyArgs)
    ? Choice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'questions' ? Array < QuestionGetPayload<S['include'][P]>>  :
        P extends 'answerToQuestion' ? Array < QuestionGetPayload<S['include'][P]>>  :
        P extends 'roundChooseChoice' ? Array < RoundChooseChoiceGetPayload<S['include'][P]>>  :
        P extends '_count' ? ChoiceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChoiceArgs | ChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'questions' ? Array < QuestionGetPayload<S['select'][P]>>  :
        P extends 'answerToQuestion' ? Array < QuestionGetPayload<S['select'][P]>>  :
        P extends 'roundChooseChoice' ? Array < RoundChooseChoiceGetPayload<S['select'][P]>>  :
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

    questions<T extends Choice$questionsArgs= {}>(args?: Subset<T, Choice$questionsArgs>): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>| Null>;

    answerToQuestion<T extends Choice$answerToQuestionArgs= {}>(args?: Subset<T, Choice$answerToQuestionArgs>): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>| Null>;

    roundChooseChoice<T extends Choice$roundChooseChoiceArgs= {}>(args?: Subset<T, Choice$roundChooseChoiceArgs>): Prisma.PrismaPromise<Array<RoundChooseChoiceGetPayload<T>>| Null>;

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
   * Choice.questions
   */
  export type Choice$questionsArgs = {
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
   * Choice.answerToQuestion
   */
  export type Choice$answerToQuestionArgs = {
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
   * Choice.roundChooseChoice
   */
  export type Choice$roundChooseChoiceArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    where?: RoundChooseChoiceWhereInput
    orderBy?: Enumerable<RoundChooseChoiceOrderByWithRelationInput>
    cursor?: RoundChooseChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundChooseChoiceScalarFieldEnum>
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
   * Model Player
   */


  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs = {
    where?: PlayerWhereInput
    orderBy?: Enumerable<PlayerOrderByWithAggregationInput>
    by: PlayerScalarFieldEnum[]
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }


  export type PlayerGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rounds?: boolean | Player$roundsArgs
    _count?: boolean | PlayerCountOutputTypeArgs
  }


  export type PlayerInclude = {
    rounds?: boolean | Player$roundsArgs
    _count?: boolean | PlayerCountOutputTypeArgs
  }

  export type PlayerGetPayload<S extends boolean | null | undefined | PlayerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Player :
    S extends undefined ? never :
    S extends { include: any } & (PlayerArgs | PlayerFindManyArgs)
    ? Player  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'rounds' ? Array < RoundGetPayload<S['include'][P]>>  :
        P extends '_count' ? PlayerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PlayerArgs | PlayerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'rounds' ? Array < RoundGetPayload<S['select'][P]>>  :
        P extends '_count' ? PlayerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Player ? Player[P] : never
  } 
      : Player


  type PlayerCountArgs = 
    Omit<PlayerFindManyArgs, 'select' | 'include'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlayerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Player'> extends True ? Prisma__PlayerClient<PlayerGetPayload<T>> : Prisma__PlayerClient<PlayerGetPayload<T> | null, null>

    /**
     * Find one Player that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PlayerFindUniqueOrThrowArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlayerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Player'> extends True ? Prisma__PlayerClient<PlayerGetPayload<T>> : Prisma__PlayerClient<PlayerGetPayload<T> | null, null>

    /**
     * Find the first Player that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlayerFindFirstOrThrowArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayerFindManyArgs>(
      args?: SelectSubset<T, PlayerFindManyArgs>
    ): Prisma.PrismaPromise<Array<PlayerGetPayload<T>>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
    **/
    create<T extends PlayerCreateArgs>(
      args: SelectSubset<T, PlayerCreateArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Create many Players.
     *     @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     *     @example
     *     // Create many Players
     *     const player = await prisma.player.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayerCreateManyArgs>(
      args?: SelectSubset<T, PlayerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
    **/
    delete<T extends PlayerDeleteArgs>(
      args: SelectSubset<T, PlayerDeleteArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayerUpdateArgs>(
      args: SelectSubset<T, PlayerUpdateArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayerDeleteManyArgs>(
      args?: SelectSubset<T, PlayerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayerUpdateManyArgs>(
      args: SelectSubset<T, PlayerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
    **/
    upsert<T extends PlayerUpsertArgs>(
      args: SelectSubset<T, PlayerUpsertArgs>
    ): Prisma__PlayerClient<PlayerGetPayload<T>>

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlayerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    rounds<T extends Player$roundsArgs= {}>(args?: Subset<T, Player$roundsArgs>): Prisma.PrismaPromise<Array<RoundGetPayload<T>>| Null>;

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
   * Player base type for findUnique actions
   */
  export type PlayerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUnique
   */
  export interface PlayerFindUniqueArgs extends PlayerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player base type for findFirst actions
   */
  export type PlayerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }

  /**
   * Player findFirst
   */
  export interface PlayerFindFirstArgs extends PlayerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * Player findMany
   */
  export type PlayerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: Enumerable<PlayerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: Enumerable<PlayerScalarFieldEnum>
  }


  /**
   * Player create
   */
  export type PlayerCreateArgs = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }


  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs = {
    /**
     * The data used to create many Players.
     */
    data: Enumerable<PlayerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Player update
   */
  export type PlayerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
  }


  /**
   * Player upsert
   */
  export type PlayerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }


  /**
   * Player delete
   */
  export type PlayerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }


  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
  }


  /**
   * Player.rounds
   */
  export type Player$roundsArgs = {
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
   * Player without action
   */
  export type PlayerArgs = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayerInclude | null
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
    score: number | null
  }

  export type RoundSumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: number | null
    playerName: string | null
    round: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundMaxAggregateOutputType = {
    id: number | null
    playerName: string | null
    round: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    playerName: number
    round: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type RoundSumAggregateInputType = {
    id?: true
    score?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    playerName?: true
    round?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    playerName?: true
    round?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    playerName?: true
    round?: true
    score?: true
    createdAt?: true
    updatedAt?: true
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
    playerName: string
    round: string
    score: number
    createdAt: Date
    updatedAt: Date
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
    player?: boolean | PlayerArgs
    playerName?: boolean
    round?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roundQuestions?: boolean | Round$roundQuestionsArgs
    _count?: boolean | RoundCountOutputTypeArgs
  }


  export type RoundInclude = {
    player?: boolean | PlayerArgs
    roundQuestions?: boolean | Round$roundQuestionsArgs
    _count?: boolean | RoundCountOutputTypeArgs
  }

  export type RoundGetPayload<S extends boolean | null | undefined | RoundArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Round :
    S extends undefined ? never :
    S extends { include: any } & (RoundArgs | RoundFindManyArgs)
    ? Round  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'player' ? PlayerGetPayload<S['include'][P]> :
        P extends 'roundQuestions' ? Array < RoundQuestionGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoundCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundArgs | RoundFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'player' ? PlayerGetPayload<S['select'][P]> :
        P extends 'roundQuestions' ? Array < RoundQuestionGetPayload<S['select'][P]>>  :
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

    player<T extends PlayerArgs= {}>(args?: Subset<T, PlayerArgs>): Prisma__PlayerClient<PlayerGetPayload<T> | Null>;

    roundQuestions<T extends Round$roundQuestionsArgs= {}>(args?: Subset<T, Round$roundQuestionsArgs>): Prisma.PrismaPromise<Array<RoundQuestionGetPayload<T>>| Null>;

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
   * Round.roundQuestions
   */
  export type Round$roundQuestionsArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    where?: RoundQuestionWhereInput
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    cursor?: RoundQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
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
   * Model RoundQuestion
   */


  export type AggregateRoundQuestion = {
    _count: RoundQuestionCountAggregateOutputType | null
    _avg: RoundQuestionAvgAggregateOutputType | null
    _sum: RoundQuestionSumAggregateOutputType | null
    _min: RoundQuestionMinAggregateOutputType | null
    _max: RoundQuestionMaxAggregateOutputType | null
  }

  export type RoundQuestionAvgAggregateOutputType = {
    id: number | null
    roundsId: number | null
    questionsId: number | null
    chooseChoice: number | null
  }

  export type RoundQuestionSumAggregateOutputType = {
    id: number | null
    roundsId: number | null
    questionsId: number | null
    chooseChoice: number | null
  }

  export type RoundQuestionMinAggregateOutputType = {
    id: number | null
    roundsId: number | null
    questionsId: number | null
    chooseChoice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundQuestionMaxAggregateOutputType = {
    id: number | null
    roundsId: number | null
    questionsId: number | null
    chooseChoice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundQuestionCountAggregateOutputType = {
    id: number
    roundsId: number
    questionsId: number
    chooseChoice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoundQuestionAvgAggregateInputType = {
    id?: true
    roundsId?: true
    questionsId?: true
    chooseChoice?: true
  }

  export type RoundQuestionSumAggregateInputType = {
    id?: true
    roundsId?: true
    questionsId?: true
    chooseChoice?: true
  }

  export type RoundQuestionMinAggregateInputType = {
    id?: true
    roundsId?: true
    questionsId?: true
    chooseChoice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundQuestionMaxAggregateInputType = {
    id?: true
    roundsId?: true
    questionsId?: true
    chooseChoice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundQuestionCountAggregateInputType = {
    id?: true
    roundsId?: true
    questionsId?: true
    chooseChoice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoundQuestionAggregateArgs = {
    /**
     * Filter which RoundQuestion to aggregate.
     */
    where?: RoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuestions to fetch.
     */
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoundQuestions
    **/
    _count?: true | RoundQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundQuestionMaxAggregateInputType
  }

  export type GetRoundQuestionAggregateType<T extends RoundQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateRoundQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundQuestion[P]>
      : GetScalarType<T[P], AggregateRoundQuestion[P]>
  }




  export type RoundQuestionGroupByArgs = {
    where?: RoundQuestionWhereInput
    orderBy?: Enumerable<RoundQuestionOrderByWithAggregationInput>
    by: RoundQuestionScalarFieldEnum[]
    having?: RoundQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundQuestionCountAggregateInputType | true
    _avg?: RoundQuestionAvgAggregateInputType
    _sum?: RoundQuestionSumAggregateInputType
    _min?: RoundQuestionMinAggregateInputType
    _max?: RoundQuestionMaxAggregateInputType
  }


  export type RoundQuestionGroupByOutputType = {
    id: number
    roundsId: number
    questionsId: number
    chooseChoice: number
    createdAt: Date
    updatedAt: Date
    _count: RoundQuestionCountAggregateOutputType | null
    _avg: RoundQuestionAvgAggregateOutputType | null
    _sum: RoundQuestionSumAggregateOutputType | null
    _min: RoundQuestionMinAggregateOutputType | null
    _max: RoundQuestionMaxAggregateOutputType | null
  }

  type GetRoundQuestionGroupByPayload<T extends RoundQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoundQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], RoundQuestionGroupByOutputType[P]>
        }
      >
    >


  export type RoundQuestionSelect = {
    id?: boolean
    round?: boolean | RoundArgs
    roundsId?: boolean
    question?: boolean | QuestionArgs
    questionsId?: boolean
    chooseChoice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roundChooseChoice?: boolean | RoundQuestion$roundChooseChoiceArgs
    _count?: boolean | RoundQuestionCountOutputTypeArgs
  }


  export type RoundQuestionInclude = {
    round?: boolean | RoundArgs
    question?: boolean | QuestionArgs
    roundChooseChoice?: boolean | RoundQuestion$roundChooseChoiceArgs
    _count?: boolean | RoundQuestionCountOutputTypeArgs
  }

  export type RoundQuestionGetPayload<S extends boolean | null | undefined | RoundQuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundQuestion :
    S extends undefined ? never :
    S extends { include: any } & (RoundQuestionArgs | RoundQuestionFindManyArgs)
    ? RoundQuestion  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'round' ? RoundGetPayload<S['include'][P]> :
        P extends 'question' ? QuestionGetPayload<S['include'][P]> :
        P extends 'roundChooseChoice' ? Array < RoundChooseChoiceGetPayload<S['include'][P]>>  :
        P extends '_count' ? RoundQuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundQuestionArgs | RoundQuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'round' ? RoundGetPayload<S['select'][P]> :
        P extends 'question' ? QuestionGetPayload<S['select'][P]> :
        P extends 'roundChooseChoice' ? Array < RoundChooseChoiceGetPayload<S['select'][P]>>  :
        P extends '_count' ? RoundQuestionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RoundQuestion ? RoundQuestion[P] : never
  } 
      : RoundQuestion


  type RoundQuestionCountArgs = 
    Omit<RoundQuestionFindManyArgs, 'select' | 'include'> & {
      select?: RoundQuestionCountAggregateInputType | true
    }

  export interface RoundQuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoundQuestion that matches the filter.
     * @param {RoundQuestionFindUniqueArgs} args - Arguments to find a RoundQuestion
     * @example
     * // Get one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoundQuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoundQuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoundQuestion'> extends True ? Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>> : Prisma__RoundQuestionClient<RoundQuestionGetPayload<T> | null, null>

    /**
     * Find one RoundQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoundQuestionFindUniqueOrThrowArgs} args - Arguments to find a RoundQuestion
     * @example
     * // Get one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoundQuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundQuestionFindUniqueOrThrowArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Find the first RoundQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionFindFirstArgs} args - Arguments to find a RoundQuestion
     * @example
     * // Get one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoundQuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoundQuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoundQuestion'> extends True ? Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>> : Prisma__RoundQuestionClient<RoundQuestionGetPayload<T> | null, null>

    /**
     * Find the first RoundQuestion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionFindFirstOrThrowArgs} args - Arguments to find a RoundQuestion
     * @example
     * // Get one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoundQuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundQuestionFindFirstOrThrowArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Find zero or more RoundQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundQuestions
     * const roundQuestions = await prisma.roundQuestion.findMany()
     * 
     * // Get first 10 RoundQuestions
     * const roundQuestions = await prisma.roundQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundQuestionWithIdOnly = await prisma.roundQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoundQuestionFindManyArgs>(
      args?: SelectSubset<T, RoundQuestionFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundQuestionGetPayload<T>>>

    /**
     * Create a RoundQuestion.
     * @param {RoundQuestionCreateArgs} args - Arguments to create a RoundQuestion.
     * @example
     * // Create one RoundQuestion
     * const RoundQuestion = await prisma.roundQuestion.create({
     *   data: {
     *     // ... data to create a RoundQuestion
     *   }
     * })
     * 
    **/
    create<T extends RoundQuestionCreateArgs>(
      args: SelectSubset<T, RoundQuestionCreateArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Create many RoundQuestions.
     *     @param {RoundQuestionCreateManyArgs} args - Arguments to create many RoundQuestions.
     *     @example
     *     // Create many RoundQuestions
     *     const roundQuestion = await prisma.roundQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoundQuestionCreateManyArgs>(
      args?: SelectSubset<T, RoundQuestionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoundQuestion.
     * @param {RoundQuestionDeleteArgs} args - Arguments to delete one RoundQuestion.
     * @example
     * // Delete one RoundQuestion
     * const RoundQuestion = await prisma.roundQuestion.delete({
     *   where: {
     *     // ... filter to delete one RoundQuestion
     *   }
     * })
     * 
    **/
    delete<T extends RoundQuestionDeleteArgs>(
      args: SelectSubset<T, RoundQuestionDeleteArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Update one RoundQuestion.
     * @param {RoundQuestionUpdateArgs} args - Arguments to update one RoundQuestion.
     * @example
     * // Update one RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoundQuestionUpdateArgs>(
      args: SelectSubset<T, RoundQuestionUpdateArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Delete zero or more RoundQuestions.
     * @param {RoundQuestionDeleteManyArgs} args - Arguments to filter RoundQuestions to delete.
     * @example
     * // Delete a few RoundQuestions
     * const { count } = await prisma.roundQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoundQuestionDeleteManyArgs>(
      args?: SelectSubset<T, RoundQuestionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoundQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundQuestions
     * const roundQuestion = await prisma.roundQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoundQuestionUpdateManyArgs>(
      args: SelectSubset<T, RoundQuestionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoundQuestion.
     * @param {RoundQuestionUpsertArgs} args - Arguments to update or create a RoundQuestion.
     * @example
     * // Update or create a RoundQuestion
     * const roundQuestion = await prisma.roundQuestion.upsert({
     *   create: {
     *     // ... data to create a RoundQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends RoundQuestionUpsertArgs>(
      args: SelectSubset<T, RoundQuestionUpsertArgs>
    ): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T>>

    /**
     * Count the number of RoundQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionCountArgs} args - Arguments to filter RoundQuestions to count.
     * @example
     * // Count the number of RoundQuestions
     * const count = await prisma.roundQuestion.count({
     *   where: {
     *     // ... the filter for the RoundQuestions we want to count
     *   }
     * })
    **/
    count<T extends RoundQuestionCountArgs>(
      args?: Subset<T, RoundQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoundQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundQuestionAggregateArgs>(args: Subset<T, RoundQuestionAggregateArgs>): Prisma.PrismaPromise<GetRoundQuestionAggregateType<T>>

    /**
     * Group by RoundQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionGroupByArgs} args - Group by arguments.
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
      T extends RoundQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundQuestionGroupByArgs['orderBy'] }
        : { orderBy?: RoundQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundQuestionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    question<T extends QuestionArgs= {}>(args?: Subset<T, QuestionArgs>): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

    roundChooseChoice<T extends RoundQuestion$roundChooseChoiceArgs= {}>(args?: Subset<T, RoundQuestion$roundChooseChoiceArgs>): Prisma.PrismaPromise<Array<RoundChooseChoiceGetPayload<T>>| Null>;

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
   * RoundQuestion base type for findUnique actions
   */
  export type RoundQuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestion to fetch.
     */
    where: RoundQuestionWhereUniqueInput
  }

  /**
   * RoundQuestion findUnique
   */
  export interface RoundQuestionFindUniqueArgs extends RoundQuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundQuestion findUniqueOrThrow
   */
  export type RoundQuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestion to fetch.
     */
    where: RoundQuestionWhereUniqueInput
  }


  /**
   * RoundQuestion base type for findFirst actions
   */
  export type RoundQuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestion to fetch.
     */
    where?: RoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuestions to fetch.
     */
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundQuestions.
     */
    cursor?: RoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundQuestions.
     */
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
  }

  /**
   * RoundQuestion findFirst
   */
  export interface RoundQuestionFindFirstArgs extends RoundQuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundQuestion findFirstOrThrow
   */
  export type RoundQuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestion to fetch.
     */
    where?: RoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuestions to fetch.
     */
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundQuestions.
     */
    cursor?: RoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundQuestions.
     */
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
  }


  /**
   * RoundQuestion findMany
   */
  export type RoundQuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter, which RoundQuestions to fetch.
     */
    where?: RoundQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundQuestions to fetch.
     */
    orderBy?: Enumerable<RoundQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoundQuestions.
     */
    cursor?: RoundQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundQuestions.
     */
    skip?: number
    distinct?: Enumerable<RoundQuestionScalarFieldEnum>
  }


  /**
   * RoundQuestion create
   */
  export type RoundQuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * The data needed to create a RoundQuestion.
     */
    data: XOR<RoundQuestionCreateInput, RoundQuestionUncheckedCreateInput>
  }


  /**
   * RoundQuestion createMany
   */
  export type RoundQuestionCreateManyArgs = {
    /**
     * The data used to create many RoundQuestions.
     */
    data: Enumerable<RoundQuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoundQuestion update
   */
  export type RoundQuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * The data needed to update a RoundQuestion.
     */
    data: XOR<RoundQuestionUpdateInput, RoundQuestionUncheckedUpdateInput>
    /**
     * Choose, which RoundQuestion to update.
     */
    where: RoundQuestionWhereUniqueInput
  }


  /**
   * RoundQuestion updateMany
   */
  export type RoundQuestionUpdateManyArgs = {
    /**
     * The data used to update RoundQuestions.
     */
    data: XOR<RoundQuestionUpdateManyMutationInput, RoundQuestionUncheckedUpdateManyInput>
    /**
     * Filter which RoundQuestions to update
     */
    where?: RoundQuestionWhereInput
  }


  /**
   * RoundQuestion upsert
   */
  export type RoundQuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * The filter to search for the RoundQuestion to update in case it exists.
     */
    where: RoundQuestionWhereUniqueInput
    /**
     * In case the RoundQuestion found by the `where` argument doesn't exist, create a new RoundQuestion with this data.
     */
    create: XOR<RoundQuestionCreateInput, RoundQuestionUncheckedCreateInput>
    /**
     * In case the RoundQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundQuestionUpdateInput, RoundQuestionUncheckedUpdateInput>
  }


  /**
   * RoundQuestion delete
   */
  export type RoundQuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
    /**
     * Filter which RoundQuestion to delete.
     */
    where: RoundQuestionWhereUniqueInput
  }


  /**
   * RoundQuestion deleteMany
   */
  export type RoundQuestionDeleteManyArgs = {
    /**
     * Filter which RoundQuestions to delete
     */
    where?: RoundQuestionWhereInput
  }


  /**
   * RoundQuestion.roundChooseChoice
   */
  export type RoundQuestion$roundChooseChoiceArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    where?: RoundChooseChoiceWhereInput
    orderBy?: Enumerable<RoundChooseChoiceOrderByWithRelationInput>
    cursor?: RoundChooseChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RoundChooseChoiceScalarFieldEnum>
  }


  /**
   * RoundQuestion without action
   */
  export type RoundQuestionArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestion
     */
    select?: RoundQuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionInclude | null
  }



  /**
   * Model RoundChooseChoice
   */


  export type AggregateRoundChooseChoice = {
    _count: RoundChooseChoiceCountAggregateOutputType | null
    _avg: RoundChooseChoiceAvgAggregateOutputType | null
    _sum: RoundChooseChoiceSumAggregateOutputType | null
    _min: RoundChooseChoiceMinAggregateOutputType | null
    _max: RoundChooseChoiceMaxAggregateOutputType | null
  }

  export type RoundChooseChoiceAvgAggregateOutputType = {
    id: number | null
    roundQuestionsId: number | null
    choicesId: number | null
  }

  export type RoundChooseChoiceSumAggregateOutputType = {
    id: number | null
    roundQuestionsId: number | null
    choicesId: number | null
  }

  export type RoundChooseChoiceMinAggregateOutputType = {
    id: number | null
    roundQuestionsId: number | null
    choicesId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundChooseChoiceMaxAggregateOutputType = {
    id: number | null
    roundQuestionsId: number | null
    choicesId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundChooseChoiceCountAggregateOutputType = {
    id: number
    roundQuestionsId: number
    choicesId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoundChooseChoiceAvgAggregateInputType = {
    id?: true
    roundQuestionsId?: true
    choicesId?: true
  }

  export type RoundChooseChoiceSumAggregateInputType = {
    id?: true
    roundQuestionsId?: true
    choicesId?: true
  }

  export type RoundChooseChoiceMinAggregateInputType = {
    id?: true
    roundQuestionsId?: true
    choicesId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundChooseChoiceMaxAggregateInputType = {
    id?: true
    roundQuestionsId?: true
    choicesId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundChooseChoiceCountAggregateInputType = {
    id?: true
    roundQuestionsId?: true
    choicesId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoundChooseChoiceAggregateArgs = {
    /**
     * Filter which RoundChooseChoice to aggregate.
     */
    where?: RoundChooseChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundChooseChoices to fetch.
     */
    orderBy?: Enumerable<RoundChooseChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundChooseChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundChooseChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundChooseChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoundChooseChoices
    **/
    _count?: true | RoundChooseChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundChooseChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundChooseChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundChooseChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundChooseChoiceMaxAggregateInputType
  }

  export type GetRoundChooseChoiceAggregateType<T extends RoundChooseChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateRoundChooseChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundChooseChoice[P]>
      : GetScalarType<T[P], AggregateRoundChooseChoice[P]>
  }




  export type RoundChooseChoiceGroupByArgs = {
    where?: RoundChooseChoiceWhereInput
    orderBy?: Enumerable<RoundChooseChoiceOrderByWithAggregationInput>
    by: RoundChooseChoiceScalarFieldEnum[]
    having?: RoundChooseChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundChooseChoiceCountAggregateInputType | true
    _avg?: RoundChooseChoiceAvgAggregateInputType
    _sum?: RoundChooseChoiceSumAggregateInputType
    _min?: RoundChooseChoiceMinAggregateInputType
    _max?: RoundChooseChoiceMaxAggregateInputType
  }


  export type RoundChooseChoiceGroupByOutputType = {
    id: number
    roundQuestionsId: number
    choicesId: number
    createdAt: Date
    updatedAt: Date
    _count: RoundChooseChoiceCountAggregateOutputType | null
    _avg: RoundChooseChoiceAvgAggregateOutputType | null
    _sum: RoundChooseChoiceSumAggregateOutputType | null
    _min: RoundChooseChoiceMinAggregateOutputType | null
    _max: RoundChooseChoiceMaxAggregateOutputType | null
  }

  type GetRoundChooseChoiceGroupByPayload<T extends RoundChooseChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoundChooseChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundChooseChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundChooseChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], RoundChooseChoiceGroupByOutputType[P]>
        }
      >
    >


  export type RoundChooseChoiceSelect = {
    id?: boolean
    roundQuestion?: boolean | RoundQuestionArgs
    roundQuestionsId?: boolean
    choice?: boolean | ChoiceArgs
    choicesId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type RoundChooseChoiceInclude = {
    roundQuestion?: boolean | RoundQuestionArgs
    choice?: boolean | ChoiceArgs
  }

  export type RoundChooseChoiceGetPayload<S extends boolean | null | undefined | RoundChooseChoiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundChooseChoice :
    S extends undefined ? never :
    S extends { include: any } & (RoundChooseChoiceArgs | RoundChooseChoiceFindManyArgs)
    ? RoundChooseChoice  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'roundQuestion' ? RoundQuestionGetPayload<S['include'][P]> :
        P extends 'choice' ? ChoiceGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RoundChooseChoiceArgs | RoundChooseChoiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'roundQuestion' ? RoundQuestionGetPayload<S['select'][P]> :
        P extends 'choice' ? ChoiceGetPayload<S['select'][P]> :  P extends keyof RoundChooseChoice ? RoundChooseChoice[P] : never
  } 
      : RoundChooseChoice


  type RoundChooseChoiceCountArgs = 
    Omit<RoundChooseChoiceFindManyArgs, 'select' | 'include'> & {
      select?: RoundChooseChoiceCountAggregateInputType | true
    }

  export interface RoundChooseChoiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoundChooseChoice that matches the filter.
     * @param {RoundChooseChoiceFindUniqueArgs} args - Arguments to find a RoundChooseChoice
     * @example
     * // Get one RoundChooseChoice
     * const roundChooseChoice = await prisma.roundChooseChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoundChooseChoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoundChooseChoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoundChooseChoice'> extends True ? Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T>> : Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T> | null, null>

    /**
     * Find one RoundChooseChoice that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoundChooseChoiceFindUniqueOrThrowArgs} args - Arguments to find a RoundChooseChoice
     * @example
     * // Get one RoundChooseChoice
     * const roundChooseChoice = await prisma.roundChooseChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoundChooseChoiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundChooseChoiceFindUniqueOrThrowArgs>
    ): Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T>>

    /**
     * Find the first RoundChooseChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundChooseChoiceFindFirstArgs} args - Arguments to find a RoundChooseChoice
     * @example
     * // Get one RoundChooseChoice
     * const roundChooseChoice = await prisma.roundChooseChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoundChooseChoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoundChooseChoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoundChooseChoice'> extends True ? Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T>> : Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T> | null, null>

    /**
     * Find the first RoundChooseChoice that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundChooseChoiceFindFirstOrThrowArgs} args - Arguments to find a RoundChooseChoice
     * @example
     * // Get one RoundChooseChoice
     * const roundChooseChoice = await prisma.roundChooseChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoundChooseChoiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundChooseChoiceFindFirstOrThrowArgs>
    ): Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T>>

    /**
     * Find zero or more RoundChooseChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundChooseChoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundChooseChoices
     * const roundChooseChoices = await prisma.roundChooseChoice.findMany()
     * 
     * // Get first 10 RoundChooseChoices
     * const roundChooseChoices = await prisma.roundChooseChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundChooseChoiceWithIdOnly = await prisma.roundChooseChoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoundChooseChoiceFindManyArgs>(
      args?: SelectSubset<T, RoundChooseChoiceFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundChooseChoiceGetPayload<T>>>

    /**
     * Create a RoundChooseChoice.
     * @param {RoundChooseChoiceCreateArgs} args - Arguments to create a RoundChooseChoice.
     * @example
     * // Create one RoundChooseChoice
     * const RoundChooseChoice = await prisma.roundChooseChoice.create({
     *   data: {
     *     // ... data to create a RoundChooseChoice
     *   }
     * })
     * 
    **/
    create<T extends RoundChooseChoiceCreateArgs>(
      args: SelectSubset<T, RoundChooseChoiceCreateArgs>
    ): Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T>>

    /**
     * Create many RoundChooseChoices.
     *     @param {RoundChooseChoiceCreateManyArgs} args - Arguments to create many RoundChooseChoices.
     *     @example
     *     // Create many RoundChooseChoices
     *     const roundChooseChoice = await prisma.roundChooseChoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoundChooseChoiceCreateManyArgs>(
      args?: SelectSubset<T, RoundChooseChoiceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoundChooseChoice.
     * @param {RoundChooseChoiceDeleteArgs} args - Arguments to delete one RoundChooseChoice.
     * @example
     * // Delete one RoundChooseChoice
     * const RoundChooseChoice = await prisma.roundChooseChoice.delete({
     *   where: {
     *     // ... filter to delete one RoundChooseChoice
     *   }
     * })
     * 
    **/
    delete<T extends RoundChooseChoiceDeleteArgs>(
      args: SelectSubset<T, RoundChooseChoiceDeleteArgs>
    ): Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T>>

    /**
     * Update one RoundChooseChoice.
     * @param {RoundChooseChoiceUpdateArgs} args - Arguments to update one RoundChooseChoice.
     * @example
     * // Update one RoundChooseChoice
     * const roundChooseChoice = await prisma.roundChooseChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoundChooseChoiceUpdateArgs>(
      args: SelectSubset<T, RoundChooseChoiceUpdateArgs>
    ): Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T>>

    /**
     * Delete zero or more RoundChooseChoices.
     * @param {RoundChooseChoiceDeleteManyArgs} args - Arguments to filter RoundChooseChoices to delete.
     * @example
     * // Delete a few RoundChooseChoices
     * const { count } = await prisma.roundChooseChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoundChooseChoiceDeleteManyArgs>(
      args?: SelectSubset<T, RoundChooseChoiceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoundChooseChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundChooseChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundChooseChoices
     * const roundChooseChoice = await prisma.roundChooseChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoundChooseChoiceUpdateManyArgs>(
      args: SelectSubset<T, RoundChooseChoiceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoundChooseChoice.
     * @param {RoundChooseChoiceUpsertArgs} args - Arguments to update or create a RoundChooseChoice.
     * @example
     * // Update or create a RoundChooseChoice
     * const roundChooseChoice = await prisma.roundChooseChoice.upsert({
     *   create: {
     *     // ... data to create a RoundChooseChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundChooseChoice we want to update
     *   }
     * })
    **/
    upsert<T extends RoundChooseChoiceUpsertArgs>(
      args: SelectSubset<T, RoundChooseChoiceUpsertArgs>
    ): Prisma__RoundChooseChoiceClient<RoundChooseChoiceGetPayload<T>>

    /**
     * Count the number of RoundChooseChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundChooseChoiceCountArgs} args - Arguments to filter RoundChooseChoices to count.
     * @example
     * // Count the number of RoundChooseChoices
     * const count = await prisma.roundChooseChoice.count({
     *   where: {
     *     // ... the filter for the RoundChooseChoices we want to count
     *   }
     * })
    **/
    count<T extends RoundChooseChoiceCountArgs>(
      args?: Subset<T, RoundChooseChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundChooseChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoundChooseChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundChooseChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundChooseChoiceAggregateArgs>(args: Subset<T, RoundChooseChoiceAggregateArgs>): Prisma.PrismaPromise<GetRoundChooseChoiceAggregateType<T>>

    /**
     * Group by RoundChooseChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundChooseChoiceGroupByArgs} args - Group by arguments.
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
      T extends RoundChooseChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundChooseChoiceGroupByArgs['orderBy'] }
        : { orderBy?: RoundChooseChoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundChooseChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundChooseChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundChooseChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundChooseChoiceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    roundQuestion<T extends RoundQuestionArgs= {}>(args?: Subset<T, RoundQuestionArgs>): Prisma__RoundQuestionClient<RoundQuestionGetPayload<T> | Null>;

    choice<T extends ChoiceArgs= {}>(args?: Subset<T, ChoiceArgs>): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

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
   * RoundChooseChoice base type for findUnique actions
   */
  export type RoundChooseChoiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * Filter, which RoundChooseChoice to fetch.
     */
    where: RoundChooseChoiceWhereUniqueInput
  }

  /**
   * RoundChooseChoice findUnique
   */
  export interface RoundChooseChoiceFindUniqueArgs extends RoundChooseChoiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundChooseChoice findUniqueOrThrow
   */
  export type RoundChooseChoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * Filter, which RoundChooseChoice to fetch.
     */
    where: RoundChooseChoiceWhereUniqueInput
  }


  /**
   * RoundChooseChoice base type for findFirst actions
   */
  export type RoundChooseChoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * Filter, which RoundChooseChoice to fetch.
     */
    where?: RoundChooseChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundChooseChoices to fetch.
     */
    orderBy?: Enumerable<RoundChooseChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundChooseChoices.
     */
    cursor?: RoundChooseChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundChooseChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundChooseChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundChooseChoices.
     */
    distinct?: Enumerable<RoundChooseChoiceScalarFieldEnum>
  }

  /**
   * RoundChooseChoice findFirst
   */
  export interface RoundChooseChoiceFindFirstArgs extends RoundChooseChoiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundChooseChoice findFirstOrThrow
   */
  export type RoundChooseChoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * Filter, which RoundChooseChoice to fetch.
     */
    where?: RoundChooseChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundChooseChoices to fetch.
     */
    orderBy?: Enumerable<RoundChooseChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundChooseChoices.
     */
    cursor?: RoundChooseChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundChooseChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundChooseChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundChooseChoices.
     */
    distinct?: Enumerable<RoundChooseChoiceScalarFieldEnum>
  }


  /**
   * RoundChooseChoice findMany
   */
  export type RoundChooseChoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * Filter, which RoundChooseChoices to fetch.
     */
    where?: RoundChooseChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundChooseChoices to fetch.
     */
    orderBy?: Enumerable<RoundChooseChoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoundChooseChoices.
     */
    cursor?: RoundChooseChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundChooseChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundChooseChoices.
     */
    skip?: number
    distinct?: Enumerable<RoundChooseChoiceScalarFieldEnum>
  }


  /**
   * RoundChooseChoice create
   */
  export type RoundChooseChoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * The data needed to create a RoundChooseChoice.
     */
    data: XOR<RoundChooseChoiceCreateInput, RoundChooseChoiceUncheckedCreateInput>
  }


  /**
   * RoundChooseChoice createMany
   */
  export type RoundChooseChoiceCreateManyArgs = {
    /**
     * The data used to create many RoundChooseChoices.
     */
    data: Enumerable<RoundChooseChoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoundChooseChoice update
   */
  export type RoundChooseChoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * The data needed to update a RoundChooseChoice.
     */
    data: XOR<RoundChooseChoiceUpdateInput, RoundChooseChoiceUncheckedUpdateInput>
    /**
     * Choose, which RoundChooseChoice to update.
     */
    where: RoundChooseChoiceWhereUniqueInput
  }


  /**
   * RoundChooseChoice updateMany
   */
  export type RoundChooseChoiceUpdateManyArgs = {
    /**
     * The data used to update RoundChooseChoices.
     */
    data: XOR<RoundChooseChoiceUpdateManyMutationInput, RoundChooseChoiceUncheckedUpdateManyInput>
    /**
     * Filter which RoundChooseChoices to update
     */
    where?: RoundChooseChoiceWhereInput
  }


  /**
   * RoundChooseChoice upsert
   */
  export type RoundChooseChoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * The filter to search for the RoundChooseChoice to update in case it exists.
     */
    where: RoundChooseChoiceWhereUniqueInput
    /**
     * In case the RoundChooseChoice found by the `where` argument doesn't exist, create a new RoundChooseChoice with this data.
     */
    create: XOR<RoundChooseChoiceCreateInput, RoundChooseChoiceUncheckedCreateInput>
    /**
     * In case the RoundChooseChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundChooseChoiceUpdateInput, RoundChooseChoiceUncheckedUpdateInput>
  }


  /**
   * RoundChooseChoice delete
   */
  export type RoundChooseChoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
    /**
     * Filter which RoundChooseChoice to delete.
     */
    where: RoundChooseChoiceWhereUniqueInput
  }


  /**
   * RoundChooseChoice deleteMany
   */
  export type RoundChooseChoiceDeleteManyArgs = {
    /**
     * Filter which RoundChooseChoices to delete
     */
    where?: RoundChooseChoiceWhereInput
  }


  /**
   * RoundChooseChoice without action
   */
  export type RoundChooseChoiceArgs = {
    /**
     * Select specific fields to fetch from the RoundChooseChoice
     */
    select?: RoundChooseChoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundChooseChoiceInclude | null
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


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    question: 'question',
    choiceId: 'choiceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const RoundChooseChoiceScalarFieldEnum: {
    id: 'id',
    roundQuestionsId: 'roundQuestionsId',
    choicesId: 'choicesId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoundChooseChoiceScalarFieldEnum = (typeof RoundChooseChoiceScalarFieldEnum)[keyof typeof RoundChooseChoiceScalarFieldEnum]


  export const RoundQuestionScalarFieldEnum: {
    id: 'id',
    roundsId: 'roundsId',
    questionsId: 'questionsId',
    chooseChoice: 'chooseChoice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoundQuestionScalarFieldEnum = (typeof RoundQuestionScalarFieldEnum)[keyof typeof RoundQuestionScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    playerName: 'playerName',
    round: 'round',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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


  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    questions?: QuestionListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type QuestionWhereInput = {
    AND?: Enumerable<QuestionWhereInput>
    OR?: Enumerable<QuestionWhereInput>
    NOT?: Enumerable<QuestionWhereInput>
    id?: IntFilter | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    categoryId?: IntFilter | number
    question?: StringFilter | string
    answer?: XOR<ChoiceRelationFilter, ChoiceWhereInput>
    choiceId?: IntFilter | number
    choices?: ChoiceListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roundQuestion?: RoundQuestionListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    category?: CategoryOrderByWithRelationInput
    categoryId?: SortOrder
    question?: SortOrder
    answer?: ChoiceOrderByWithRelationInput
    choiceId?: SortOrder
    choices?: ChoiceOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roundQuestion?: RoundQuestionOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = {
    id?: number
  }

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    question?: SortOrder
    choiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    categoryId?: IntWithAggregatesFilter | number
    question?: StringWithAggregatesFilter | string
    choiceId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ChoiceWhereInput = {
    AND?: Enumerable<ChoiceWhereInput>
    OR?: Enumerable<ChoiceWhereInput>
    NOT?: Enumerable<ChoiceWhereInput>
    id?: IntFilter | number
    questions?: QuestionListRelationFilter
    answerToQuestion?: QuestionListRelationFilter
    answer?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roundChooseChoice?: RoundChooseChoiceListRelationFilter
  }

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    answerToQuestion?: QuestionOrderByRelationAggregateInput
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roundChooseChoice?: RoundChooseChoiceOrderByRelationAggregateInput
  }

  export type ChoiceWhereUniqueInput = {
    id?: number
  }

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    answer?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PlayerWhereInput = {
    AND?: Enumerable<PlayerWhereInput>
    OR?: Enumerable<PlayerWhereInput>
    NOT?: Enumerable<PlayerWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    rounds?: RoundListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rounds?: RoundOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlayerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoundWhereInput = {
    AND?: Enumerable<RoundWhereInput>
    OR?: Enumerable<RoundWhereInput>
    NOT?: Enumerable<RoundWhereInput>
    id?: IntFilter | number
    player?: XOR<PlayerRelationFilter, PlayerWhereInput>
    playerName?: StringFilter | string
    round?: StringFilter | string
    score?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roundQuestions?: RoundQuestionListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    player?: PlayerOrderByWithRelationInput
    playerName?: SortOrder
    round?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roundQuestions?: RoundQuestionOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = {
    id?: number
  }

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    playerName?: SortOrder
    round?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    playerName?: StringWithAggregatesFilter | string
    round?: StringWithAggregatesFilter | string
    score?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoundQuestionWhereInput = {
    AND?: Enumerable<RoundQuestionWhereInput>
    OR?: Enumerable<RoundQuestionWhereInput>
    NOT?: Enumerable<RoundQuestionWhereInput>
    id?: IntFilter | number
    round?: XOR<RoundRelationFilter, RoundWhereInput>
    roundsId?: IntFilter | number
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    questionsId?: IntFilter | number
    chooseChoice?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    roundChooseChoice?: RoundChooseChoiceListRelationFilter
  }

  export type RoundQuestionOrderByWithRelationInput = {
    id?: SortOrder
    round?: RoundOrderByWithRelationInput
    roundsId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    questionsId?: SortOrder
    chooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roundChooseChoice?: RoundChooseChoiceOrderByRelationAggregateInput
  }

  export type RoundQuestionWhereUniqueInput = {
    id?: number
  }

  export type RoundQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    roundsId?: SortOrder
    questionsId?: SortOrder
    chooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoundQuestionCountOrderByAggregateInput
    _avg?: RoundQuestionAvgOrderByAggregateInput
    _max?: RoundQuestionMaxOrderByAggregateInput
    _min?: RoundQuestionMinOrderByAggregateInput
    _sum?: RoundQuestionSumOrderByAggregateInput
  }

  export type RoundQuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundQuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoundQuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoundQuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roundsId?: IntWithAggregatesFilter | number
    questionsId?: IntWithAggregatesFilter | number
    chooseChoice?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type RoundChooseChoiceWhereInput = {
    AND?: Enumerable<RoundChooseChoiceWhereInput>
    OR?: Enumerable<RoundChooseChoiceWhereInput>
    NOT?: Enumerable<RoundChooseChoiceWhereInput>
    id?: IntFilter | number
    roundQuestion?: XOR<RoundQuestionRelationFilter, RoundQuestionWhereInput>
    roundQuestionsId?: IntFilter | number
    choice?: XOR<ChoiceRelationFilter, ChoiceWhereInput>
    choicesId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RoundChooseChoiceOrderByWithRelationInput = {
    id?: SortOrder
    roundQuestion?: RoundQuestionOrderByWithRelationInput
    roundQuestionsId?: SortOrder
    choice?: ChoiceOrderByWithRelationInput
    choicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundChooseChoiceWhereUniqueInput = {
    id?: number
  }

  export type RoundChooseChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    roundQuestionsId?: SortOrder
    choicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoundChooseChoiceCountOrderByAggregateInput
    _avg?: RoundChooseChoiceAvgOrderByAggregateInput
    _max?: RoundChooseChoiceMaxOrderByAggregateInput
    _min?: RoundChooseChoiceMinOrderByAggregateInput
    _sum?: RoundChooseChoiceSumOrderByAggregateInput
  }

  export type RoundChooseChoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundChooseChoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoundChooseChoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoundChooseChoiceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    roundQuestionsId?: IntWithAggregatesFilter | number
    choicesId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    questions?: QuestionCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    questions?: QuestionUncheckedCreateNestedManyWithoutCategoryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutCategoryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    category: CategoryCreateNestedOneWithoutQuestionsInput
    question: string
    answer: ChoiceCreateNestedOneWithoutAnswerToQuestionInput
    choices?: ChoiceCreateNestedManyWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestion?: RoundQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    categoryId: number
    question: string
    choiceId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestion?: RoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    category?: CategoryUpdateOneRequiredWithoutQuestionsNestedInput
    question?: StringFieldUpdateOperationsInput | string
    answer?: ChoiceUpdateOneRequiredWithoutAnswerToQuestionNestedInput
    choices?: ChoiceUpdateManyWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    choiceId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    categoryId: number
    question: string
    choiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    choiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateInput = {
    questions?: QuestionCreateNestedManyWithoutChoicesInput
    answerToQuestion?: QuestionCreateNestedManyWithoutAnswerInput
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateInput = {
    id?: number
    questions?: QuestionUncheckedCreateNestedManyWithoutChoicesInput
    answerToQuestion?: QuestionUncheckedCreateNestedManyWithoutAnswerInput
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUpdateInput = {
    questions?: QuestionUpdateManyWithoutChoicesNestedInput
    answerToQuestion?: QuestionUpdateManyWithoutAnswerNestedInput
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutChoicesNestedInput
    answerToQuestion?: QuestionUncheckedUpdateManyWithoutAnswerNestedInput
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceCreateManyInput = {
    id?: number
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateManyMutationInput = {
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundCreateInput = {
    player: PlayerCreateNestedOneWithoutRoundsInput
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestions?: RoundQuestionCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id?: number
    playerName: string
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestions?: RoundQuestionUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    player?: PlayerUpdateOneRequiredWithoutRoundsNestedInput
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestions?: RoundQuestionUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerName?: StringFieldUpdateOperationsInput | string
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestions?: RoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: number
    playerName: string
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUpdateManyMutationInput = {
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerName?: StringFieldUpdateOperationsInput | string
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionCreateInput = {
    round: RoundCreateNestedOneWithoutRoundQuestionsInput
    question: QuestionCreateNestedOneWithoutRoundQuestionInput
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceCreateNestedManyWithoutRoundQuestionInput
  }

  export type RoundQuestionUncheckedCreateInput = {
    id?: number
    roundsId: number
    questionsId: number
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedCreateNestedManyWithoutRoundQuestionInput
  }

  export type RoundQuestionUpdateInput = {
    round?: RoundUpdateOneRequiredWithoutRoundQuestionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutRoundQuestionNestedInput
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUpdateManyWithoutRoundQuestionNestedInput
  }

  export type RoundQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundsId?: IntFieldUpdateOperationsInput | number
    questionsId?: IntFieldUpdateOperationsInput | number
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedUpdateManyWithoutRoundQuestionNestedInput
  }

  export type RoundQuestionCreateManyInput = {
    id?: number
    roundsId: number
    questionsId: number
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundQuestionUpdateManyMutationInput = {
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundsId?: IntFieldUpdateOperationsInput | number
    questionsId?: IntFieldUpdateOperationsInput | number
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceCreateInput = {
    roundQuestion: RoundQuestionCreateNestedOneWithoutRoundChooseChoiceInput
    choice: ChoiceCreateNestedOneWithoutRoundChooseChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceUncheckedCreateInput = {
    id?: number
    roundQuestionsId: number
    choicesId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceUpdateInput = {
    roundQuestion?: RoundQuestionUpdateOneRequiredWithoutRoundChooseChoiceNestedInput
    choice?: ChoiceUpdateOneRequiredWithoutRoundChooseChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuestionsId?: IntFieldUpdateOperationsInput | number
    choicesId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceCreateManyInput = {
    id?: number
    roundQuestionsId: number
    choicesId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuestionsId?: IntFieldUpdateOperationsInput | number
    choicesId?: IntFieldUpdateOperationsInput | number
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
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

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
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

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
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

  export type RoundQuestionListRelationFilter = {
    every?: RoundQuestionWhereInput
    some?: RoundQuestionWhereInput
    none?: RoundQuestionWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    question?: SortOrder
    choiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    choiceId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    question?: SortOrder
    choiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    question?: SortOrder
    choiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    choiceId?: SortOrder
  }

  export type RoundChooseChoiceListRelationFilter = {
    every?: RoundChooseChoiceWhereInput
    some?: RoundChooseChoiceWhereInput
    none?: RoundChooseChoiceWhereInput
  }

  export type RoundChooseChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlayerRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    round?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    round?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    round?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type RoundRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type RoundQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    roundsId?: SortOrder
    questionsId?: SortOrder
    chooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    roundsId?: SortOrder
    questionsId?: SortOrder
    chooseChoice?: SortOrder
  }

  export type RoundQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    roundsId?: SortOrder
    questionsId?: SortOrder
    chooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    roundsId?: SortOrder
    questionsId?: SortOrder
    chooseChoice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    roundsId?: SortOrder
    questionsId?: SortOrder
    chooseChoice?: SortOrder
  }

  export type RoundQuestionRelationFilter = {
    is?: RoundQuestionWhereInput
    isNot?: RoundQuestionWhereInput
  }

  export type RoundChooseChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    roundQuestionsId?: SortOrder
    choicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundChooseChoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    roundQuestionsId?: SortOrder
    choicesId?: SortOrder
  }

  export type RoundChooseChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    roundQuestionsId?: SortOrder
    choicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundChooseChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    roundQuestionsId?: SortOrder
    choicesId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundChooseChoiceSumOrderByAggregateInput = {
    id?: SortOrder
    roundQuestionsId?: SortOrder
    choicesId?: SortOrder
  }

  export type QuestionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutCategoryInput>, Enumerable<QuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutCategoryInput>
    createMany?: QuestionCreateManyCategoryInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type QuestionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutCategoryInput>, Enumerable<QuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutCategoryInput>
    createMany?: QuestionCreateManyCategoryInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type QuestionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutCategoryInput>, Enumerable<QuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: QuestionCreateManyCategoryInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
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

  export type QuestionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutCategoryInput>, Enumerable<QuestionUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: QuestionCreateManyCategoryInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuestionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutAnswerToQuestionInput = {
    create?: XOR<ChoiceCreateWithoutAnswerToQuestionInput, ChoiceUncheckedCreateWithoutAnswerToQuestionInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutAnswerToQuestionInput
    connect?: ChoiceWhereUniqueInput
  }

  export type ChoiceCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionsInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionsInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type RoundQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutQuestionInput>, Enumerable<RoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutQuestionInput>
    createMany?: RoundQuestionCreateManyQuestionInputEnvelope
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
  }

  export type ChoiceUncheckedCreateNestedManyWithoutQuestionsInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionsInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionsInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
  }

  export type RoundQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutQuestionInput>, Enumerable<RoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutQuestionInput>
    createMany?: RoundQuestionCreateManyQuestionInputEnvelope
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
  }

  export type CategoryUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuestionsInput
    upsert?: CategoryUpsertWithoutQuestionsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutQuestionsInput, CategoryUncheckedUpdateWithoutQuestionsInput>
  }

  export type ChoiceUpdateOneRequiredWithoutAnswerToQuestionNestedInput = {
    create?: XOR<ChoiceCreateWithoutAnswerToQuestionInput, ChoiceUncheckedCreateWithoutAnswerToQuestionInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutAnswerToQuestionInput
    upsert?: ChoiceUpsertWithoutAnswerToQuestionInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<ChoiceUpdateWithoutAnswerToQuestionInput, ChoiceUncheckedUpdateWithoutAnswerToQuestionInput>
  }

  export type ChoiceUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionsInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionsInput>
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutQuestionsInput>
    set?: Enumerable<ChoiceWhereUniqueInput>
    disconnect?: Enumerable<ChoiceWhereUniqueInput>
    delete?: Enumerable<ChoiceWhereUniqueInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutQuestionsInput>
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutQuestionsInput>
    deleteMany?: Enumerable<ChoiceScalarWhereInput>
  }

  export type RoundQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutQuestionInput>, Enumerable<RoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<RoundQuestionUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: RoundQuestionCreateManyQuestionInputEnvelope
    set?: Enumerable<RoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<RoundQuestionWhereUniqueInput>
    delete?: Enumerable<RoundQuestionWhereUniqueInput>
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
    update?: Enumerable<RoundQuestionUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<RoundQuestionUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<RoundQuestionScalarWhereInput>
  }

  export type ChoiceUncheckedUpdateManyWithoutQuestionsNestedInput = {
    create?: XOR<Enumerable<ChoiceCreateWithoutQuestionsInput>, Enumerable<ChoiceUncheckedCreateWithoutQuestionsInput>>
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionsInput>
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutQuestionsInput>
    set?: Enumerable<ChoiceWhereUniqueInput>
    disconnect?: Enumerable<ChoiceWhereUniqueInput>
    delete?: Enumerable<ChoiceWhereUniqueInput>
    connect?: Enumerable<ChoiceWhereUniqueInput>
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutQuestionsInput>
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutQuestionsInput>
    deleteMany?: Enumerable<ChoiceScalarWhereInput>
  }

  export type RoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutQuestionInput>, Enumerable<RoundQuestionUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<RoundQuestionUpsertWithWhereUniqueWithoutQuestionInput>
    createMany?: RoundQuestionCreateManyQuestionInputEnvelope
    set?: Enumerable<RoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<RoundQuestionWhereUniqueInput>
    delete?: Enumerable<RoundQuestionWhereUniqueInput>
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
    update?: Enumerable<RoundQuestionUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<RoundQuestionUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<RoundQuestionScalarWhereInput>
  }

  export type QuestionCreateNestedManyWithoutChoicesInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutChoicesInput>, Enumerable<QuestionUncheckedCreateWithoutChoicesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutChoicesInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type QuestionCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutAnswerInput>, Enumerable<QuestionUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutAnswerInput>
    createMany?: QuestionCreateManyAnswerInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type RoundChooseChoiceCreateNestedManyWithoutChoiceInput = {
    create?: XOR<Enumerable<RoundChooseChoiceCreateWithoutChoiceInput>, Enumerable<RoundChooseChoiceUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundChooseChoiceCreateOrConnectWithoutChoiceInput>
    createMany?: RoundChooseChoiceCreateManyChoiceInputEnvelope
    connect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
  }

  export type QuestionUncheckedCreateNestedManyWithoutChoicesInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutChoicesInput>, Enumerable<QuestionUncheckedCreateWithoutChoicesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutChoicesInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type QuestionUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutAnswerInput>, Enumerable<QuestionUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutAnswerInput>
    createMany?: QuestionCreateManyAnswerInputEnvelope
    connect?: Enumerable<QuestionWhereUniqueInput>
  }

  export type RoundChooseChoiceUncheckedCreateNestedManyWithoutChoiceInput = {
    create?: XOR<Enumerable<RoundChooseChoiceCreateWithoutChoiceInput>, Enumerable<RoundChooseChoiceUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundChooseChoiceCreateOrConnectWithoutChoiceInput>
    createMany?: RoundChooseChoiceCreateManyChoiceInputEnvelope
    connect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
  }

  export type QuestionUpdateManyWithoutChoicesNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutChoicesInput>, Enumerable<QuestionUncheckedCreateWithoutChoicesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutChoicesInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutChoicesInput>
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutChoicesInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutChoicesInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type QuestionUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutAnswerInput>, Enumerable<QuestionUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: QuestionCreateManyAnswerInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type RoundChooseChoiceUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<Enumerable<RoundChooseChoiceCreateWithoutChoiceInput>, Enumerable<RoundChooseChoiceUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundChooseChoiceCreateOrConnectWithoutChoiceInput>
    upsert?: Enumerable<RoundChooseChoiceUpsertWithWhereUniqueWithoutChoiceInput>
    createMany?: RoundChooseChoiceCreateManyChoiceInputEnvelope
    set?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    disconnect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    delete?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    connect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    update?: Enumerable<RoundChooseChoiceUpdateWithWhereUniqueWithoutChoiceInput>
    updateMany?: Enumerable<RoundChooseChoiceUpdateManyWithWhereWithoutChoiceInput>
    deleteMany?: Enumerable<RoundChooseChoiceScalarWhereInput>
  }

  export type QuestionUncheckedUpdateManyWithoutChoicesNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutChoicesInput>, Enumerable<QuestionUncheckedCreateWithoutChoicesInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutChoicesInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutChoicesInput>
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutChoicesInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutChoicesInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type QuestionUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<Enumerable<QuestionCreateWithoutAnswerInput>, Enumerable<QuestionUncheckedCreateWithoutAnswerInput>>
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutAnswerInput>
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutAnswerInput>
    createMany?: QuestionCreateManyAnswerInputEnvelope
    set?: Enumerable<QuestionWhereUniqueInput>
    disconnect?: Enumerable<QuestionWhereUniqueInput>
    delete?: Enumerable<QuestionWhereUniqueInput>
    connect?: Enumerable<QuestionWhereUniqueInput>
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutAnswerInput>
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutAnswerInput>
    deleteMany?: Enumerable<QuestionScalarWhereInput>
  }

  export type RoundChooseChoiceUncheckedUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<Enumerable<RoundChooseChoiceCreateWithoutChoiceInput>, Enumerable<RoundChooseChoiceUncheckedCreateWithoutChoiceInput>>
    connectOrCreate?: Enumerable<RoundChooseChoiceCreateOrConnectWithoutChoiceInput>
    upsert?: Enumerable<RoundChooseChoiceUpsertWithWhereUniqueWithoutChoiceInput>
    createMany?: RoundChooseChoiceCreateManyChoiceInputEnvelope
    set?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    disconnect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    delete?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    connect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    update?: Enumerable<RoundChooseChoiceUpdateWithWhereUniqueWithoutChoiceInput>
    updateMany?: Enumerable<RoundChooseChoiceUpdateManyWithWhereWithoutChoiceInput>
    deleteMany?: Enumerable<RoundChooseChoiceScalarWhereInput>
  }

  export type RoundCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<RoundCreateWithoutPlayerInput>, Enumerable<RoundUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutPlayerInput>
    createMany?: RoundCreateManyPlayerInputEnvelope
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type RoundUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<Enumerable<RoundCreateWithoutPlayerInput>, Enumerable<RoundUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutPlayerInput>
    createMany?: RoundCreateManyPlayerInputEnvelope
    connect?: Enumerable<RoundWhereUniqueInput>
  }

  export type RoundUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<RoundCreateWithoutPlayerInput>, Enumerable<RoundUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<RoundUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: RoundCreateManyPlayerInputEnvelope
    set?: Enumerable<RoundWhereUniqueInput>
    disconnect?: Enumerable<RoundWhereUniqueInput>
    delete?: Enumerable<RoundWhereUniqueInput>
    connect?: Enumerable<RoundWhereUniqueInput>
    update?: Enumerable<RoundUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<RoundUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<RoundScalarWhereInput>
  }

  export type RoundUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<Enumerable<RoundCreateWithoutPlayerInput>, Enumerable<RoundUncheckedCreateWithoutPlayerInput>>
    connectOrCreate?: Enumerable<RoundCreateOrConnectWithoutPlayerInput>
    upsert?: Enumerable<RoundUpsertWithWhereUniqueWithoutPlayerInput>
    createMany?: RoundCreateManyPlayerInputEnvelope
    set?: Enumerable<RoundWhereUniqueInput>
    disconnect?: Enumerable<RoundWhereUniqueInput>
    delete?: Enumerable<RoundWhereUniqueInput>
    connect?: Enumerable<RoundWhereUniqueInput>
    update?: Enumerable<RoundUpdateWithWhereUniqueWithoutPlayerInput>
    updateMany?: Enumerable<RoundUpdateManyWithWhereWithoutPlayerInput>
    deleteMany?: Enumerable<RoundScalarWhereInput>
  }

  export type PlayerCreateNestedOneWithoutRoundsInput = {
    create?: XOR<PlayerCreateWithoutRoundsInput, PlayerUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutRoundsInput
    connect?: PlayerWhereUniqueInput
  }

  export type RoundQuestionCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutRoundInput>, Enumerable<RoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutRoundInput>
    createMany?: RoundQuestionCreateManyRoundInputEnvelope
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
  }

  export type RoundQuestionUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutRoundInput>, Enumerable<RoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutRoundInput>
    createMany?: RoundQuestionCreateManyRoundInputEnvelope
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
  }

  export type PlayerUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<PlayerCreateWithoutRoundsInput, PlayerUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutRoundsInput
    upsert?: PlayerUpsertWithoutRoundsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<PlayerUpdateWithoutRoundsInput, PlayerUncheckedUpdateWithoutRoundsInput>
  }

  export type RoundQuestionUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutRoundInput>, Enumerable<RoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<RoundQuestionUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: RoundQuestionCreateManyRoundInputEnvelope
    set?: Enumerable<RoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<RoundQuestionWhereUniqueInput>
    delete?: Enumerable<RoundQuestionWhereUniqueInput>
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
    update?: Enumerable<RoundQuestionUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<RoundQuestionUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<RoundQuestionScalarWhereInput>
  }

  export type RoundQuestionUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<Enumerable<RoundQuestionCreateWithoutRoundInput>, Enumerable<RoundQuestionUncheckedCreateWithoutRoundInput>>
    connectOrCreate?: Enumerable<RoundQuestionCreateOrConnectWithoutRoundInput>
    upsert?: Enumerable<RoundQuestionUpsertWithWhereUniqueWithoutRoundInput>
    createMany?: RoundQuestionCreateManyRoundInputEnvelope
    set?: Enumerable<RoundQuestionWhereUniqueInput>
    disconnect?: Enumerable<RoundQuestionWhereUniqueInput>
    delete?: Enumerable<RoundQuestionWhereUniqueInput>
    connect?: Enumerable<RoundQuestionWhereUniqueInput>
    update?: Enumerable<RoundQuestionUpdateWithWhereUniqueWithoutRoundInput>
    updateMany?: Enumerable<RoundQuestionUpdateManyWithWhereWithoutRoundInput>
    deleteMany?: Enumerable<RoundQuestionScalarWhereInput>
  }

  export type RoundCreateNestedOneWithoutRoundQuestionsInput = {
    create?: XOR<RoundCreateWithoutRoundQuestionsInput, RoundUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: RoundCreateOrConnectWithoutRoundQuestionsInput
    connect?: RoundWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutRoundQuestionInput = {
    create?: XOR<QuestionCreateWithoutRoundQuestionInput, QuestionUncheckedCreateWithoutRoundQuestionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutRoundQuestionInput
    connect?: QuestionWhereUniqueInput
  }

  export type RoundChooseChoiceCreateNestedManyWithoutRoundQuestionInput = {
    create?: XOR<Enumerable<RoundChooseChoiceCreateWithoutRoundQuestionInput>, Enumerable<RoundChooseChoiceUncheckedCreateWithoutRoundQuestionInput>>
    connectOrCreate?: Enumerable<RoundChooseChoiceCreateOrConnectWithoutRoundQuestionInput>
    createMany?: RoundChooseChoiceCreateManyRoundQuestionInputEnvelope
    connect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
  }

  export type RoundChooseChoiceUncheckedCreateNestedManyWithoutRoundQuestionInput = {
    create?: XOR<Enumerable<RoundChooseChoiceCreateWithoutRoundQuestionInput>, Enumerable<RoundChooseChoiceUncheckedCreateWithoutRoundQuestionInput>>
    connectOrCreate?: Enumerable<RoundChooseChoiceCreateOrConnectWithoutRoundQuestionInput>
    createMany?: RoundChooseChoiceCreateManyRoundQuestionInputEnvelope
    connect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
  }

  export type RoundUpdateOneRequiredWithoutRoundQuestionsNestedInput = {
    create?: XOR<RoundCreateWithoutRoundQuestionsInput, RoundUncheckedCreateWithoutRoundQuestionsInput>
    connectOrCreate?: RoundCreateOrConnectWithoutRoundQuestionsInput
    upsert?: RoundUpsertWithoutRoundQuestionsInput
    connect?: RoundWhereUniqueInput
    update?: XOR<RoundUpdateWithoutRoundQuestionsInput, RoundUncheckedUpdateWithoutRoundQuestionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutRoundQuestionNestedInput = {
    create?: XOR<QuestionCreateWithoutRoundQuestionInput, QuestionUncheckedCreateWithoutRoundQuestionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutRoundQuestionInput
    upsert?: QuestionUpsertWithoutRoundQuestionInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutRoundQuestionInput, QuestionUncheckedUpdateWithoutRoundQuestionInput>
  }

  export type RoundChooseChoiceUpdateManyWithoutRoundQuestionNestedInput = {
    create?: XOR<Enumerable<RoundChooseChoiceCreateWithoutRoundQuestionInput>, Enumerable<RoundChooseChoiceUncheckedCreateWithoutRoundQuestionInput>>
    connectOrCreate?: Enumerable<RoundChooseChoiceCreateOrConnectWithoutRoundQuestionInput>
    upsert?: Enumerable<RoundChooseChoiceUpsertWithWhereUniqueWithoutRoundQuestionInput>
    createMany?: RoundChooseChoiceCreateManyRoundQuestionInputEnvelope
    set?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    disconnect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    delete?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    connect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    update?: Enumerable<RoundChooseChoiceUpdateWithWhereUniqueWithoutRoundQuestionInput>
    updateMany?: Enumerable<RoundChooseChoiceUpdateManyWithWhereWithoutRoundQuestionInput>
    deleteMany?: Enumerable<RoundChooseChoiceScalarWhereInput>
  }

  export type RoundChooseChoiceUncheckedUpdateManyWithoutRoundQuestionNestedInput = {
    create?: XOR<Enumerable<RoundChooseChoiceCreateWithoutRoundQuestionInput>, Enumerable<RoundChooseChoiceUncheckedCreateWithoutRoundQuestionInput>>
    connectOrCreate?: Enumerable<RoundChooseChoiceCreateOrConnectWithoutRoundQuestionInput>
    upsert?: Enumerable<RoundChooseChoiceUpsertWithWhereUniqueWithoutRoundQuestionInput>
    createMany?: RoundChooseChoiceCreateManyRoundQuestionInputEnvelope
    set?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    disconnect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    delete?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    connect?: Enumerable<RoundChooseChoiceWhereUniqueInput>
    update?: Enumerable<RoundChooseChoiceUpdateWithWhereUniqueWithoutRoundQuestionInput>
    updateMany?: Enumerable<RoundChooseChoiceUpdateManyWithWhereWithoutRoundQuestionInput>
    deleteMany?: Enumerable<RoundChooseChoiceScalarWhereInput>
  }

  export type RoundQuestionCreateNestedOneWithoutRoundChooseChoiceInput = {
    create?: XOR<RoundQuestionCreateWithoutRoundChooseChoiceInput, RoundQuestionUncheckedCreateWithoutRoundChooseChoiceInput>
    connectOrCreate?: RoundQuestionCreateOrConnectWithoutRoundChooseChoiceInput
    connect?: RoundQuestionWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutRoundChooseChoiceInput = {
    create?: XOR<ChoiceCreateWithoutRoundChooseChoiceInput, ChoiceUncheckedCreateWithoutRoundChooseChoiceInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutRoundChooseChoiceInput
    connect?: ChoiceWhereUniqueInput
  }

  export type RoundQuestionUpdateOneRequiredWithoutRoundChooseChoiceNestedInput = {
    create?: XOR<RoundQuestionCreateWithoutRoundChooseChoiceInput, RoundQuestionUncheckedCreateWithoutRoundChooseChoiceInput>
    connectOrCreate?: RoundQuestionCreateOrConnectWithoutRoundChooseChoiceInput
    upsert?: RoundQuestionUpsertWithoutRoundChooseChoiceInput
    connect?: RoundQuestionWhereUniqueInput
    update?: XOR<RoundQuestionUpdateWithoutRoundChooseChoiceInput, RoundQuestionUncheckedUpdateWithoutRoundChooseChoiceInput>
  }

  export type ChoiceUpdateOneRequiredWithoutRoundChooseChoiceNestedInput = {
    create?: XOR<ChoiceCreateWithoutRoundChooseChoiceInput, ChoiceUncheckedCreateWithoutRoundChooseChoiceInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutRoundChooseChoiceInput
    upsert?: ChoiceUpsertWithoutRoundChooseChoiceInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<ChoiceUpdateWithoutRoundChooseChoiceInput, ChoiceUncheckedUpdateWithoutRoundChooseChoiceInput>
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

  export type QuestionCreateWithoutCategoryInput = {
    question: string
    answer: ChoiceCreateNestedOneWithoutAnswerToQuestionInput
    choices?: ChoiceCreateNestedManyWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestion?: RoundQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCategoryInput = {
    id?: number
    question: string
    choiceId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestion?: RoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCategoryInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCategoryInput, QuestionUncheckedCreateWithoutCategoryInput>
  }

  export type QuestionCreateManyCategoryInputEnvelope = {
    data: Enumerable<QuestionCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutCategoryInput, QuestionUncheckedUpdateWithoutCategoryInput>
    create: XOR<QuestionCreateWithoutCategoryInput, QuestionUncheckedCreateWithoutCategoryInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutCategoryInput, QuestionUncheckedUpdateWithoutCategoryInput>
  }

  export type QuestionUpdateManyWithWhereWithoutCategoryInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: Enumerable<QuestionScalarWhereInput>
    OR?: Enumerable<QuestionScalarWhereInput>
    NOT?: Enumerable<QuestionScalarWhereInput>
    id?: IntFilter | number
    categoryId?: IntFilter | number
    question?: StringFilter | string
    choiceId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CategoryCreateWithoutQuestionsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutQuestionsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutQuestionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput>
  }

  export type ChoiceCreateWithoutAnswerToQuestionInput = {
    questions?: QuestionCreateNestedManyWithoutChoicesInput
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutAnswerToQuestionInput = {
    id?: number
    questions?: QuestionUncheckedCreateNestedManyWithoutChoicesInput
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceCreateOrConnectWithoutAnswerToQuestionInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutAnswerToQuestionInput, ChoiceUncheckedCreateWithoutAnswerToQuestionInput>
  }

  export type ChoiceCreateWithoutQuestionsInput = {
    answerToQuestion?: QuestionCreateNestedManyWithoutAnswerInput
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutQuestionsInput = {
    id?: number
    answerToQuestion?: QuestionUncheckedCreateNestedManyWithoutAnswerInput
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceCreateOrConnectWithoutQuestionsInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuestionsInput, ChoiceUncheckedCreateWithoutQuestionsInput>
  }

  export type RoundQuestionCreateWithoutQuestionInput = {
    round: RoundCreateNestedOneWithoutRoundQuestionsInput
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceCreateNestedManyWithoutRoundQuestionInput
  }

  export type RoundQuestionUncheckedCreateWithoutQuestionInput = {
    id?: number
    roundsId: number
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedCreateNestedManyWithoutRoundQuestionInput
  }

  export type RoundQuestionCreateOrConnectWithoutQuestionInput = {
    where: RoundQuestionWhereUniqueInput
    create: XOR<RoundQuestionCreateWithoutQuestionInput, RoundQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type RoundQuestionCreateManyQuestionInputEnvelope = {
    data: Enumerable<RoundQuestionCreateManyQuestionInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutQuestionsInput = {
    update: XOR<CategoryUpdateWithoutQuestionsInput, CategoryUncheckedUpdateWithoutQuestionsInput>
    create: XOR<CategoryCreateWithoutQuestionsInput, CategoryUncheckedCreateWithoutQuestionsInput>
  }

  export type CategoryUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUpsertWithoutAnswerToQuestionInput = {
    update: XOR<ChoiceUpdateWithoutAnswerToQuestionInput, ChoiceUncheckedUpdateWithoutAnswerToQuestionInput>
    create: XOR<ChoiceCreateWithoutAnswerToQuestionInput, ChoiceUncheckedCreateWithoutAnswerToQuestionInput>
  }

  export type ChoiceUpdateWithoutAnswerToQuestionInput = {
    questions?: QuestionUpdateManyWithoutChoicesNestedInput
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutAnswerToQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutChoicesNestedInput
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUpsertWithWhereUniqueWithoutQuestionsInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutQuestionsInput, ChoiceUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ChoiceCreateWithoutQuestionsInput, ChoiceUncheckedCreateWithoutQuestionsInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutQuestionsInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutQuestionsInput, ChoiceUncheckedUpdateWithoutQuestionsInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutQuestionsInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutChoicesInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: Enumerable<ChoiceScalarWhereInput>
    OR?: Enumerable<ChoiceScalarWhereInput>
    NOT?: Enumerable<ChoiceScalarWhereInput>
    id?: IntFilter | number
    answer?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RoundQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: RoundQuestionWhereUniqueInput
    update: XOR<RoundQuestionUpdateWithoutQuestionInput, RoundQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<RoundQuestionCreateWithoutQuestionInput, RoundQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type RoundQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: RoundQuestionWhereUniqueInput
    data: XOR<RoundQuestionUpdateWithoutQuestionInput, RoundQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type RoundQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: RoundQuestionScalarWhereInput
    data: XOR<RoundQuestionUpdateManyMutationInput, RoundQuestionUncheckedUpdateManyWithoutRoundQuestionInput>
  }

  export type RoundQuestionScalarWhereInput = {
    AND?: Enumerable<RoundQuestionScalarWhereInput>
    OR?: Enumerable<RoundQuestionScalarWhereInput>
    NOT?: Enumerable<RoundQuestionScalarWhereInput>
    id?: IntFilter | number
    roundsId?: IntFilter | number
    questionsId?: IntFilter | number
    chooseChoice?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type QuestionCreateWithoutChoicesInput = {
    category: CategoryCreateNestedOneWithoutQuestionsInput
    question: string
    answer: ChoiceCreateNestedOneWithoutAnswerToQuestionInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestion?: RoundQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutChoicesInput = {
    id?: number
    categoryId: number
    question: string
    choiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestion?: RoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutChoicesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
  }

  export type QuestionCreateWithoutAnswerInput = {
    category: CategoryCreateNestedOneWithoutQuestionsInput
    question: string
    choices?: ChoiceCreateNestedManyWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestion?: RoundQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswerInput = {
    id?: number
    categoryId: number
    question: string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestion?: RoundQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionCreateManyAnswerInputEnvelope = {
    data: Enumerable<QuestionCreateManyAnswerInput>
    skipDuplicates?: boolean
  }

  export type RoundChooseChoiceCreateWithoutChoiceInput = {
    roundQuestion: RoundQuestionCreateNestedOneWithoutRoundChooseChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceUncheckedCreateWithoutChoiceInput = {
    id?: number
    roundQuestionsId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceCreateOrConnectWithoutChoiceInput = {
    where: RoundChooseChoiceWhereUniqueInput
    create: XOR<RoundChooseChoiceCreateWithoutChoiceInput, RoundChooseChoiceUncheckedCreateWithoutChoiceInput>
  }

  export type RoundChooseChoiceCreateManyChoiceInputEnvelope = {
    data: Enumerable<RoundChooseChoiceCreateManyChoiceInput>
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutChoicesInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutChoicesInput, QuestionUncheckedUpdateWithoutChoicesInput>
    create: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutChoicesInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutChoicesInput, QuestionUncheckedUpdateWithoutChoicesInput>
  }

  export type QuestionUpdateManyWithWhereWithoutChoicesInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionsInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type QuestionUpdateManyWithWhereWithoutAnswerInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutAnswerToQuestionInput>
  }

  export type RoundChooseChoiceUpsertWithWhereUniqueWithoutChoiceInput = {
    where: RoundChooseChoiceWhereUniqueInput
    update: XOR<RoundChooseChoiceUpdateWithoutChoiceInput, RoundChooseChoiceUncheckedUpdateWithoutChoiceInput>
    create: XOR<RoundChooseChoiceCreateWithoutChoiceInput, RoundChooseChoiceUncheckedCreateWithoutChoiceInput>
  }

  export type RoundChooseChoiceUpdateWithWhereUniqueWithoutChoiceInput = {
    where: RoundChooseChoiceWhereUniqueInput
    data: XOR<RoundChooseChoiceUpdateWithoutChoiceInput, RoundChooseChoiceUncheckedUpdateWithoutChoiceInput>
  }

  export type RoundChooseChoiceUpdateManyWithWhereWithoutChoiceInput = {
    where: RoundChooseChoiceScalarWhereInput
    data: XOR<RoundChooseChoiceUpdateManyMutationInput, RoundChooseChoiceUncheckedUpdateManyWithoutRoundChooseChoiceInput>
  }

  export type RoundChooseChoiceScalarWhereInput = {
    AND?: Enumerable<RoundChooseChoiceScalarWhereInput>
    OR?: Enumerable<RoundChooseChoiceScalarWhereInput>
    NOT?: Enumerable<RoundChooseChoiceScalarWhereInput>
    id?: IntFilter | number
    roundQuestionsId?: IntFilter | number
    choicesId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type RoundCreateWithoutPlayerInput = {
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestions?: RoundQuestionCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutPlayerInput = {
    id?: number
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundQuestions?: RoundQuestionUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutPlayerInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutPlayerInput, RoundUncheckedCreateWithoutPlayerInput>
  }

  export type RoundCreateManyPlayerInputEnvelope = {
    data: Enumerable<RoundCreateManyPlayerInput>
    skipDuplicates?: boolean
  }

  export type RoundUpsertWithWhereUniqueWithoutPlayerInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutPlayerInput, RoundUncheckedUpdateWithoutPlayerInput>
    create: XOR<RoundCreateWithoutPlayerInput, RoundUncheckedCreateWithoutPlayerInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutPlayerInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutPlayerInput, RoundUncheckedUpdateWithoutPlayerInput>
  }

  export type RoundUpdateManyWithWhereWithoutPlayerInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutRoundsInput>
  }

  export type RoundScalarWhereInput = {
    AND?: Enumerable<RoundScalarWhereInput>
    OR?: Enumerable<RoundScalarWhereInput>
    NOT?: Enumerable<RoundScalarWhereInput>
    id?: IntFilter | number
    playerName?: StringFilter | string
    round?: StringFilter | string
    score?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PlayerCreateWithoutRoundsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerUncheckedCreateWithoutRoundsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayerCreateOrConnectWithoutRoundsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutRoundsInput, PlayerUncheckedCreateWithoutRoundsInput>
  }

  export type RoundQuestionCreateWithoutRoundInput = {
    question: QuestionCreateNestedOneWithoutRoundQuestionInput
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceCreateNestedManyWithoutRoundQuestionInput
  }

  export type RoundQuestionUncheckedCreateWithoutRoundInput = {
    id?: number
    questionsId: number
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedCreateNestedManyWithoutRoundQuestionInput
  }

  export type RoundQuestionCreateOrConnectWithoutRoundInput = {
    where: RoundQuestionWhereUniqueInput
    create: XOR<RoundQuestionCreateWithoutRoundInput, RoundQuestionUncheckedCreateWithoutRoundInput>
  }

  export type RoundQuestionCreateManyRoundInputEnvelope = {
    data: Enumerable<RoundQuestionCreateManyRoundInput>
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithoutRoundsInput = {
    update: XOR<PlayerUpdateWithoutRoundsInput, PlayerUncheckedUpdateWithoutRoundsInput>
    create: XOR<PlayerCreateWithoutRoundsInput, PlayerUncheckedCreateWithoutRoundsInput>
  }

  export type PlayerUpdateWithoutRoundsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUpsertWithWhereUniqueWithoutRoundInput = {
    where: RoundQuestionWhereUniqueInput
    update: XOR<RoundQuestionUpdateWithoutRoundInput, RoundQuestionUncheckedUpdateWithoutRoundInput>
    create: XOR<RoundQuestionCreateWithoutRoundInput, RoundQuestionUncheckedCreateWithoutRoundInput>
  }

  export type RoundQuestionUpdateWithWhereUniqueWithoutRoundInput = {
    where: RoundQuestionWhereUniqueInput
    data: XOR<RoundQuestionUpdateWithoutRoundInput, RoundQuestionUncheckedUpdateWithoutRoundInput>
  }

  export type RoundQuestionUpdateManyWithWhereWithoutRoundInput = {
    where: RoundQuestionScalarWhereInput
    data: XOR<RoundQuestionUpdateManyMutationInput, RoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput>
  }

  export type RoundCreateWithoutRoundQuestionsInput = {
    player: PlayerCreateNestedOneWithoutRoundsInput
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUncheckedCreateWithoutRoundQuestionsInput = {
    id?: number
    playerName: string
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundCreateOrConnectWithoutRoundQuestionsInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutRoundQuestionsInput, RoundUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type QuestionCreateWithoutRoundQuestionInput = {
    category: CategoryCreateNestedOneWithoutQuestionsInput
    question: string
    answer: ChoiceCreateNestedOneWithoutAnswerToQuestionInput
    choices?: ChoiceCreateNestedManyWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutRoundQuestionInput = {
    id?: number
    categoryId: number
    question: string
    choiceId: number
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutRoundQuestionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutRoundQuestionInput, QuestionUncheckedCreateWithoutRoundQuestionInput>
  }

  export type RoundChooseChoiceCreateWithoutRoundQuestionInput = {
    choice: ChoiceCreateNestedOneWithoutRoundChooseChoiceInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceUncheckedCreateWithoutRoundQuestionInput = {
    id?: number
    choicesId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceCreateOrConnectWithoutRoundQuestionInput = {
    where: RoundChooseChoiceWhereUniqueInput
    create: XOR<RoundChooseChoiceCreateWithoutRoundQuestionInput, RoundChooseChoiceUncheckedCreateWithoutRoundQuestionInput>
  }

  export type RoundChooseChoiceCreateManyRoundQuestionInputEnvelope = {
    data: Enumerable<RoundChooseChoiceCreateManyRoundQuestionInput>
    skipDuplicates?: boolean
  }

  export type RoundUpsertWithoutRoundQuestionsInput = {
    update: XOR<RoundUpdateWithoutRoundQuestionsInput, RoundUncheckedUpdateWithoutRoundQuestionsInput>
    create: XOR<RoundCreateWithoutRoundQuestionsInput, RoundUncheckedCreateWithoutRoundQuestionsInput>
  }

  export type RoundUpdateWithoutRoundQuestionsInput = {
    player?: PlayerUpdateOneRequiredWithoutRoundsNestedInput
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerName?: StringFieldUpdateOperationsInput | string
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutRoundQuestionInput = {
    update: XOR<QuestionUpdateWithoutRoundQuestionInput, QuestionUncheckedUpdateWithoutRoundQuestionInput>
    create: XOR<QuestionCreateWithoutRoundQuestionInput, QuestionUncheckedCreateWithoutRoundQuestionInput>
  }

  export type QuestionUpdateWithoutRoundQuestionInput = {
    category?: CategoryUpdateOneRequiredWithoutQuestionsNestedInput
    question?: StringFieldUpdateOperationsInput | string
    answer?: ChoiceUpdateOneRequiredWithoutAnswerToQuestionNestedInput
    choices?: ChoiceUpdateManyWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutRoundQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    choiceId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceUpsertWithWhereUniqueWithoutRoundQuestionInput = {
    where: RoundChooseChoiceWhereUniqueInput
    update: XOR<RoundChooseChoiceUpdateWithoutRoundQuestionInput, RoundChooseChoiceUncheckedUpdateWithoutRoundQuestionInput>
    create: XOR<RoundChooseChoiceCreateWithoutRoundQuestionInput, RoundChooseChoiceUncheckedCreateWithoutRoundQuestionInput>
  }

  export type RoundChooseChoiceUpdateWithWhereUniqueWithoutRoundQuestionInput = {
    where: RoundChooseChoiceWhereUniqueInput
    data: XOR<RoundChooseChoiceUpdateWithoutRoundQuestionInput, RoundChooseChoiceUncheckedUpdateWithoutRoundQuestionInput>
  }

  export type RoundChooseChoiceUpdateManyWithWhereWithoutRoundQuestionInput = {
    where: RoundChooseChoiceScalarWhereInput
    data: XOR<RoundChooseChoiceUpdateManyMutationInput, RoundChooseChoiceUncheckedUpdateManyWithoutRoundChooseChoiceInput>
  }

  export type RoundQuestionCreateWithoutRoundChooseChoiceInput = {
    round: RoundCreateNestedOneWithoutRoundQuestionsInput
    question: QuestionCreateNestedOneWithoutRoundQuestionInput
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundQuestionUncheckedCreateWithoutRoundChooseChoiceInput = {
    id?: number
    roundsId: number
    questionsId: number
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundQuestionCreateOrConnectWithoutRoundChooseChoiceInput = {
    where: RoundQuestionWhereUniqueInput
    create: XOR<RoundQuestionCreateWithoutRoundChooseChoiceInput, RoundQuestionUncheckedCreateWithoutRoundChooseChoiceInput>
  }

  export type ChoiceCreateWithoutRoundChooseChoiceInput = {
    questions?: QuestionCreateNestedManyWithoutChoicesInput
    answerToQuestion?: QuestionCreateNestedManyWithoutAnswerInput
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUncheckedCreateWithoutRoundChooseChoiceInput = {
    id?: number
    questions?: QuestionUncheckedCreateNestedManyWithoutChoicesInput
    answerToQuestion?: QuestionUncheckedCreateNestedManyWithoutAnswerInput
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutRoundChooseChoiceInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutRoundChooseChoiceInput, ChoiceUncheckedCreateWithoutRoundChooseChoiceInput>
  }

  export type RoundQuestionUpsertWithoutRoundChooseChoiceInput = {
    update: XOR<RoundQuestionUpdateWithoutRoundChooseChoiceInput, RoundQuestionUncheckedUpdateWithoutRoundChooseChoiceInput>
    create: XOR<RoundQuestionCreateWithoutRoundChooseChoiceInput, RoundQuestionUncheckedCreateWithoutRoundChooseChoiceInput>
  }

  export type RoundQuestionUpdateWithoutRoundChooseChoiceInput = {
    round?: RoundUpdateOneRequiredWithoutRoundQuestionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutRoundQuestionNestedInput
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUncheckedUpdateWithoutRoundChooseChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundsId?: IntFieldUpdateOperationsInput | number
    questionsId?: IntFieldUpdateOperationsInput | number
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUpsertWithoutRoundChooseChoiceInput = {
    update: XOR<ChoiceUpdateWithoutRoundChooseChoiceInput, ChoiceUncheckedUpdateWithoutRoundChooseChoiceInput>
    create: XOR<ChoiceCreateWithoutRoundChooseChoiceInput, ChoiceUncheckedCreateWithoutRoundChooseChoiceInput>
  }

  export type ChoiceUpdateWithoutRoundChooseChoiceInput = {
    questions?: QuestionUpdateManyWithoutChoicesNestedInput
    answerToQuestion?: QuestionUpdateManyWithoutAnswerNestedInput
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateWithoutRoundChooseChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    questions?: QuestionUncheckedUpdateManyWithoutChoicesNestedInput
    answerToQuestion?: QuestionUncheckedUpdateManyWithoutAnswerNestedInput
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyCategoryInput = {
    id?: number
    question: string
    choiceId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutCategoryInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: ChoiceUpdateOneRequiredWithoutAnswerToQuestionNestedInput
    choices?: ChoiceUpdateManyWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    choiceId?: IntFieldUpdateOperationsInput | number
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    choiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionCreateManyQuestionInput = {
    id?: number
    roundsId: number
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateWithoutQuestionsInput = {
    answerToQuestion?: QuestionUpdateManyWithoutAnswerNestedInput
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerToQuestion?: QuestionUncheckedUpdateManyWithoutAnswerNestedInput
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateManyWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionUpdateWithoutQuestionInput = {
    round?: RoundUpdateOneRequiredWithoutRoundQuestionsNestedInput
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUpdateManyWithoutRoundQuestionNestedInput
  }

  export type RoundQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundsId?: IntFieldUpdateOperationsInput | number
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedUpdateManyWithoutRoundQuestionNestedInput
  }

  export type RoundQuestionUncheckedUpdateManyWithoutRoundQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundsId?: IntFieldUpdateOperationsInput | number
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyAnswerInput = {
    id?: number
    categoryId: number
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceCreateManyChoiceInput = {
    id?: number
    roundQuestionsId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutChoicesInput = {
    category?: CategoryUpdateOneRequiredWithoutQuestionsNestedInput
    question?: StringFieldUpdateOperationsInput | string
    answer?: ChoiceUpdateOneRequiredWithoutAnswerToQuestionNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutChoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    choiceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUpdateWithoutAnswerInput = {
    category?: CategoryUpdateOneRequiredWithoutQuestionsNestedInput
    question?: StringFieldUpdateOperationsInput | string
    choices?: ChoiceUpdateManyWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestion?: RoundQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutAnswerToQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceUpdateWithoutChoiceInput = {
    roundQuestion?: RoundQuestionUpdateOneRequiredWithoutRoundChooseChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuestionsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceUncheckedUpdateManyWithoutRoundChooseChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundQuestionsId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundCreateManyPlayerInput = {
    id?: number
    round: string
    score: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUpdateWithoutPlayerInput = {
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestions?: RoundQuestionUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundQuestions?: RoundQuestionUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutRoundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    round?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundQuestionCreateManyRoundInput = {
    id?: number
    questionsId: number
    chooseChoice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundQuestionUpdateWithoutRoundInput = {
    question?: QuestionUpdateOneRequiredWithoutRoundQuestionNestedInput
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUpdateManyWithoutRoundQuestionNestedInput
  }

  export type RoundQuestionUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionsId?: IntFieldUpdateOperationsInput | number
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundChooseChoice?: RoundChooseChoiceUncheckedUpdateManyWithoutRoundQuestionNestedInput
  }

  export type RoundQuestionUncheckedUpdateManyWithoutRoundQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionsId?: IntFieldUpdateOperationsInput | number
    chooseChoice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceCreateManyRoundQuestionInput = {
    id?: number
    choicesId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundChooseChoiceUpdateWithoutRoundQuestionInput = {
    choice?: ChoiceUpdateOneRequiredWithoutRoundChooseChoiceNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundChooseChoiceUncheckedUpdateWithoutRoundQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    choicesId?: IntFieldUpdateOperationsInput | number
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