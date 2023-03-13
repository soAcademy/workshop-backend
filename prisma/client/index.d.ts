/**
 * Client
 **/

import * as runtime from "./runtime/library";
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P;
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends Prisma.PrismaPromise<infer X>
      ? X
      : UnwrapPromise<Tuple[K]>
    : UnwrapPromise<Tuple[K]>;
};

/**
 * Model QuestionCategory
 *
 */
export type QuestionCategory = {
  category: string;
  id: number;
  name: string;
  createAt: Date;
  updateAt: Date;
};

/**
 * Model Question
 *
 */
export type Question = {
  id: number;
  questionCategoryId: number;
  textQuestion: string;
  answerId: number;
  createAt: Date;
  updateAt: Date;
};

/**
 * Model Choice
 *
 */
export type Choice = {
  id: number;
  choiceName: string;
  questionId: number | null;
  createAt: Date;
  updateAt: Date;
};

/**
 * Model User
 *
 */
export type User = {
  id: number;
  name: string;
  createAt: Date;
  updateAt: Date;
};

/**
 * Model RoundQuiz
 *
 */
export type RoundQuiz = {
  id: number;
  questionCategoryId: number;
  score: number;
  userId: number;
  createAt: Date;
  updateAt: Date;
};

/**
 * Model RoundQuestionDetail
 *
 */
export type RoundQuestionDetail = {
  id: number;
  roundQuizId: number;
  questionId: number;
  questionOrder: number;
  userChoose: number | null;
  result: boolean;
  createAt: Date;
  updateAt: Date;
};

/**
 * Model RoundQuestionChoiceDetail
 *
 */
export type RoundQuestionChoiceDetail = {
  id: number;
  roundQuizId: number;
  questionId: number;
  choiceId: number;
  createAt: Date;
  updateAt: Date;
};

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
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  GlobalReject extends
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined = "rejectOnNotFound" extends keyof T
    ? T["rejectOnNotFound"]
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

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U | "beforeExit">(
    eventType: V,
    callback: (
      event: V extends "query"
        ? Prisma.QueryEvent
        : V extends "beforeExit"
        ? () => Promise<void>
        : Prisma.LogEvent
    ) => void
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): Promise<UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<
        this,
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
      >
    ) => Promise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): Promise<R>;

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
   * `prisma.roundQuestionDetail`: Exposes CRUD operations for the **RoundQuestionDetail** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RoundQuestionDetails
   * const roundQuestionDetails = await prisma.roundQuestionDetail.findMany()
   * ```
   */
  get roundQuestionDetail(): Prisma.RoundQuestionDetailDelegate<GlobalReject>;

  /**
   * `prisma.roundQuestionChoiceDetail`: Exposes CRUD operations for the **RoundQuestionChoiceDetail** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RoundQuestionChoiceDetails
   * const roundQuestionChoiceDetails = await prisma.roundQuestionChoiceDetail.findMany()
   * ```
   */
  get roundQuestionChoiceDetail(): Prisma.RoundQuestionChoiceDetailDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

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
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };
  type HasSelect = {
    select: any;
  };
  type HasInclude = {
    include: any;
  };
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? "Please either choose `select` or `include`"
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S;

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
    PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(
    select: runtime.Types.Utils.LegacyExact<S, V>
  ) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<
    T,
    TupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    QuestionCategory: "QuestionCategory";
    Question: "Question";
    Choice: "Choice";
    User: "User";
    RoundQuiz: "RoundQuiz";
    RoundQuestionDetail: "RoundQuestionDetail";
    RoundQuestionChoiceDetail: "RoundQuestionChoiceDetail";
  };

  export type ModelName = typeof ModelName[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  export type DefaultPrismaClient = PrismaClient;
  export type RejectOnNotFound = boolean | ((error: Error) => Error);
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound };
  export type RejectPerOperation = {
    [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound;
  };
  type IsReject<T> = T extends true
    ? True
    : T extends (err: Error) => Error
    ? True
    : False;
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions["rejectOnNotFound"],
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
    : IsReject<GlobalRejectSettings>;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";

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
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;

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
    log?: Array<LogLevel | LogDefinition>;
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findMany"
    | "findFirst"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>
  ) => Promise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    "$connect" | "$disconnect" | "$on" | "$transaction" | "$use"
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type QuestionCategoryCountOutputType
   */

  export type QuestionCategoryCountOutputType = {
    Question: number;
    RoundQuiz: number;
  };

  export type QuestionCategoryCountOutputTypeSelect = {
    Question?: boolean;
    RoundQuiz?: boolean;
  };

  export type QuestionCategoryCountOutputTypeGetPayload<
    S extends boolean | null | undefined | QuestionCategoryCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? QuestionCategoryCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & QuestionCategoryCountOutputTypeArgs
    ? QuestionCategoryCountOutputType
    : S extends { select: any } & QuestionCategoryCountOutputTypeArgs
    ? {
        [P in TruthyKeys<
          S["select"]
        >]: P extends keyof QuestionCategoryCountOutputType
          ? QuestionCategoryCountOutputType[P]
          : never;
      }
    : QuestionCategoryCountOutputType;

  // Custom InputTypes

  /**
   * QuestionCategoryCountOutputType without action
   */
  export type QuestionCategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategoryCountOutputType
     */
    select?: QuestionCategoryCountOutputTypeSelect | null;
  };

  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    choice: number;
    RoundQuestionDetail: number;
    RoundQuestionChoiceDetail: number;
  };

  export type QuestionCountOutputTypeSelect = {
    choice?: boolean;
    RoundQuestionDetail?: boolean;
    RoundQuestionChoiceDetail?: boolean;
  };

  export type QuestionCountOutputTypeGetPayload<
    S extends boolean | null | undefined | QuestionCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? QuestionCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & QuestionCountOutputTypeArgs
    ? QuestionCountOutputType
    : S extends { select: any } & QuestionCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof QuestionCountOutputType
          ? QuestionCountOutputType[P]
          : never;
      }
    : QuestionCountOutputType;

  // Custom InputTypes

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect | null;
  };

  /**
   * Count Type ChoiceCountOutputType
   */

  export type ChoiceCountOutputType = {
    RoundQuestionChoiceDetail: number;
  };

  export type ChoiceCountOutputTypeSelect = {
    RoundQuestionChoiceDetail?: boolean;
  };

  export type ChoiceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ChoiceCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? ChoiceCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & ChoiceCountOutputTypeArgs
    ? ChoiceCountOutputType
    : S extends { select: any } & ChoiceCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof ChoiceCountOutputType
          ? ChoiceCountOutputType[P]
          : never;
      }
    : ChoiceCountOutputType;

  // Custom InputTypes

  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ChoiceCountOutputType
     */
    select?: ChoiceCountOutputTypeSelect | null;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    RoundQuiz: number;
  };

  export type UserCountOutputTypeSelect = {
    RoundQuiz?: boolean;
  };

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & UserCountOutputTypeArgs
    ? UserCountOutputType
    : S extends { select: any } & UserCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof UserCountOutputType
          ? UserCountOutputType[P]
          : never;
      }
    : UserCountOutputType;

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null;
  };

  /**
   * Count Type RoundQuizCountOutputType
   */

  export type RoundQuizCountOutputType = {
    RoundQuestionDetail: number;
    RoundQuestionChoiceDetail: number;
  };

  export type RoundQuizCountOutputTypeSelect = {
    RoundQuestionDetail?: boolean;
    RoundQuestionChoiceDetail?: boolean;
  };

  export type RoundQuizCountOutputTypeGetPayload<
    S extends boolean | null | undefined | RoundQuizCountOutputTypeArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? RoundQuizCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & RoundQuizCountOutputTypeArgs
    ? RoundQuizCountOutputType
    : S extends { select: any } & RoundQuizCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S["select"]>]: P extends keyof RoundQuizCountOutputType
          ? RoundQuizCountOutputType[P]
          : never;
      }
    : RoundQuizCountOutputType;

  // Custom InputTypes

  /**
   * RoundQuizCountOutputType without action
   */
  export type RoundQuizCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RoundQuizCountOutputType
     */
    select?: RoundQuizCountOutputTypeSelect | null;
  };

  /**
   * Models
   */

  /**
   * Model QuestionCategory
   */

  export type AggregateQuestionCategory = {
    _count: QuestionCategoryCountAggregateOutputType | null;
    _avg: QuestionCategoryAvgAggregateOutputType | null;
    _sum: QuestionCategorySumAggregateOutputType | null;
    _min: QuestionCategoryMinAggregateOutputType | null;
    _max: QuestionCategoryMaxAggregateOutputType | null;
  };

  export type QuestionCategoryAvgAggregateOutputType = {
    id: number | null;
  };

  export type QuestionCategorySumAggregateOutputType = {
    id: number | null;
  };

  export type QuestionCategoryMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type QuestionCategoryMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type QuestionCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    createAt: number;
    updateAt: number;
    _all: number;
  };

  export type QuestionCategoryAvgAggregateInputType = {
    id?: true;
  };

  export type QuestionCategorySumAggregateInputType = {
    id?: true;
  };

  export type QuestionCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type QuestionCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type QuestionCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
  };

  export type QuestionCategoryAggregateArgs = {
    /**
     * Filter which QuestionCategory to aggregate.
     */
    where?: QuestionCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuestionCategories to fetch.
     */
    orderBy?: Enumerable<QuestionCategoryOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: QuestionCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuestionCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuestionCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned QuestionCategories
     **/
    _count?: true | QuestionCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: QuestionCategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: QuestionCategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: QuestionCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: QuestionCategoryMaxAggregateInputType;
  };

  export type GetQuestionCategoryAggregateType<
    T extends QuestionCategoryAggregateArgs
  > = {
    [P in keyof T & keyof AggregateQuestionCategory]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionCategory[P]>
      : GetScalarType<T[P], AggregateQuestionCategory[P]>;
  };

  export type QuestionCategoryGroupByArgs = {
    where?: QuestionCategoryWhereInput;
    orderBy?: Enumerable<QuestionCategoryOrderByWithAggregationInput>;
    by: QuestionCategoryScalarFieldEnum[];
    having?: QuestionCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionCategoryCountAggregateInputType | true;
    _avg?: QuestionCategoryAvgAggregateInputType;
    _sum?: QuestionCategorySumAggregateInputType;
    _min?: QuestionCategoryMinAggregateInputType;
    _max?: QuestionCategoryMaxAggregateInputType;
  };

  export type QuestionCategoryGroupByOutputType = {
    id: number;
    name: string;
    createAt: Date;
    updateAt: Date;
    _count: QuestionCategoryCountAggregateOutputType | null;
    _avg: QuestionCategoryAvgAggregateOutputType | null;
    _sum: QuestionCategorySumAggregateOutputType | null;
    _min: QuestionCategoryMinAggregateOutputType | null;
    _max: QuestionCategoryMaxAggregateOutputType | null;
  };

  type GetQuestionCategoryGroupByPayload<
    T extends QuestionCategoryGroupByArgs
  > = Prisma.PrismaPromise<
    Array<
      PickArray<QuestionCategoryGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof QuestionCategoryGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], QuestionCategoryGroupByOutputType[P]>
          : GetScalarType<T[P], QuestionCategoryGroupByOutputType[P]>;
      }
    >
  >;

  export type QuestionCategorySelect = {
    id?: boolean;
    name?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
    Question?: boolean | QuestionCategory$QuestionArgs;
    RoundQuiz?: boolean | QuestionCategory$RoundQuizArgs;
    _count?: boolean | QuestionCategoryCountOutputTypeArgs;
  };

  export type QuestionCategoryInclude = {
    Question?: boolean | QuestionCategory$QuestionArgs;
    RoundQuiz?: boolean | QuestionCategory$RoundQuizArgs;
    _count?: boolean | QuestionCategoryCountOutputTypeArgs;
  };

  export type QuestionCategoryGetPayload<
    S extends boolean | null | undefined | QuestionCategoryArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? QuestionCategory
    : S extends undefined
    ? never
    : S extends { include: any } & (
        | QuestionCategoryArgs
        | QuestionCategoryFindManyArgs
      )
    ? QuestionCategory & {
        [P in TruthyKeys<S["include"]>]: P extends "Question"
          ? Array<QuestionGetPayload<S["include"][P]>>
          : P extends "RoundQuiz"
          ? Array<RoundQuizGetPayload<S["include"][P]>>
          : P extends "_count"
          ? QuestionCategoryCountOutputTypeGetPayload<S["include"][P]>
          : never;
      }
    : S extends { select: any } & (
        | QuestionCategoryArgs
        | QuestionCategoryFindManyArgs
      )
    ? {
        [P in TruthyKeys<S["select"]>]: P extends "Question"
          ? Array<QuestionGetPayload<S["select"][P]>>
          : P extends "RoundQuiz"
          ? Array<RoundQuizGetPayload<S["select"][P]>>
          : P extends "_count"
          ? QuestionCategoryCountOutputTypeGetPayload<S["select"][P]>
          : P extends keyof QuestionCategory
          ? QuestionCategory[P]
          : never;
      }
    : QuestionCategory;

  type QuestionCategoryCountArgs = Omit<
    QuestionCategoryFindManyArgs,
    "select" | "include"
  > & {
    select?: QuestionCategoryCountAggregateInputType | true;
  };

  export interface QuestionCategoryDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
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
    findUnique<
      T extends QuestionCategoryFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, QuestionCategoryFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "QuestionCategory"
    > extends True
      ? Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>
      : Prisma__QuestionCategoryClient<
          QuestionCategoryGetPayload<T> | null,
          null
        >;

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
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>;

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
    findFirst<
      T extends QuestionCategoryFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, QuestionCategoryFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "QuestionCategory"
    > extends True
      ? Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>
      : Prisma__QuestionCategoryClient<
          QuestionCategoryGetPayload<T> | null,
          null
        >;

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
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>;

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
    ): Prisma.PrismaPromise<Array<QuestionCategoryGetPayload<T>>>;

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
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>;

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
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T>>;

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
      args?: Subset<T, QuestionCategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], QuestionCategoryCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends QuestionCategoryAggregateArgs>(
      args: Subset<T, QuestionCategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetQuestionCategoryAggregateType<T>>;

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
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionCategoryGroupByArgs["orderBy"] }
        : { orderBy?: QuestionCategoryGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, QuestionCategoryGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetQuestionCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionCategoryClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
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
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    Question<T extends QuestionCategory$QuestionArgs = {}>(
      args?: Subset<T, QuestionCategory$QuestionArgs>
    ): Prisma.PrismaPromise<Array<QuestionGetPayload<T>> | Null>;

    RoundQuiz<T extends QuestionCategory$RoundQuizArgs = {}>(
      args?: Subset<T, QuestionCategory$RoundQuizArgs>
    ): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
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
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * Filter, which QuestionCategory to fetch.
     */
    where: QuestionCategoryWhereUniqueInput;
  };

  /**
   * QuestionCategory findUnique
   */
  export interface QuestionCategoryFindUniqueArgs
    extends QuestionCategoryFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * QuestionCategory findUniqueOrThrow
   */
  export type QuestionCategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * Filter, which QuestionCategory to fetch.
     */
    where: QuestionCategoryWhereUniqueInput;
  };

  /**
   * QuestionCategory base type for findFirst actions
   */
  export type QuestionCategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * Filter, which QuestionCategory to fetch.
     */
    where?: QuestionCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuestionCategories to fetch.
     */
    orderBy?: Enumerable<QuestionCategoryOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QuestionCategories.
     */
    cursor?: QuestionCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuestionCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuestionCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QuestionCategories.
     */
    distinct?: Enumerable<QuestionCategoryScalarFieldEnum>;
  };

  /**
   * QuestionCategory findFirst
   */
  export interface QuestionCategoryFindFirstArgs
    extends QuestionCategoryFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * QuestionCategory findFirstOrThrow
   */
  export type QuestionCategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * Filter, which QuestionCategory to fetch.
     */
    where?: QuestionCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuestionCategories to fetch.
     */
    orderBy?: Enumerable<QuestionCategoryOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for QuestionCategories.
     */
    cursor?: QuestionCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuestionCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuestionCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of QuestionCategories.
     */
    distinct?: Enumerable<QuestionCategoryScalarFieldEnum>;
  };

  /**
   * QuestionCategory findMany
   */
  export type QuestionCategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * Filter, which QuestionCategories to fetch.
     */
    where?: QuestionCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of QuestionCategories to fetch.
     */
    orderBy?: Enumerable<QuestionCategoryOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing QuestionCategories.
     */
    cursor?: QuestionCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` QuestionCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` QuestionCategories.
     */
    skip?: number;
    distinct?: Enumerable<QuestionCategoryScalarFieldEnum>;
  };

  /**
   * QuestionCategory create
   */
  export type QuestionCategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * The data needed to create a QuestionCategory.
     */
    data: XOR<
      QuestionCategoryCreateInput,
      QuestionCategoryUncheckedCreateInput
    >;
  };

  /**
   * QuestionCategory createMany
   */
  export type QuestionCategoryCreateManyArgs = {
    /**
     * The data used to create many QuestionCategories.
     */
    data: Enumerable<QuestionCategoryCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * QuestionCategory update
   */
  export type QuestionCategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * The data needed to update a QuestionCategory.
     */
    data: XOR<
      QuestionCategoryUpdateInput,
      QuestionCategoryUncheckedUpdateInput
    >;
    /**
     * Choose, which QuestionCategory to update.
     */
    where: QuestionCategoryWhereUniqueInput;
  };

  /**
   * QuestionCategory updateMany
   */
  export type QuestionCategoryUpdateManyArgs = {
    /**
     * The data used to update QuestionCategories.
     */
    data: XOR<
      QuestionCategoryUpdateManyMutationInput,
      QuestionCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which QuestionCategories to update
     */
    where?: QuestionCategoryWhereInput;
  };

  /**
   * QuestionCategory upsert
   */
  export type QuestionCategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * The filter to search for the QuestionCategory to update in case it exists.
     */
    where: QuestionCategoryWhereUniqueInput;
    /**
     * In case the QuestionCategory found by the `where` argument doesn't exist, create a new QuestionCategory with this data.
     */
    create: XOR<
      QuestionCategoryCreateInput,
      QuestionCategoryUncheckedCreateInput
    >;
    /**
     * In case the QuestionCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      QuestionCategoryUpdateInput,
      QuestionCategoryUncheckedUpdateInput
    >;
  };

  /**
   * QuestionCategory delete
   */
  export type QuestionCategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
    /**
     * Filter which QuestionCategory to delete.
     */
    where: QuestionCategoryWhereUniqueInput;
  };

  /**
   * QuestionCategory deleteMany
   */
  export type QuestionCategoryDeleteManyArgs = {
    /**
     * Filter which QuestionCategories to delete
     */
    where?: QuestionCategoryWhereInput;
  };

  /**
   * QuestionCategory.Question
   */
  export type QuestionCategory$QuestionArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    where?: QuestionWhereInput;
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>;
    cursor?: QuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<QuestionScalarFieldEnum>;
  };

  /**
   * QuestionCategory.RoundQuiz
   */
  export type QuestionCategory$RoundQuizArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    where?: RoundQuizWhereInput;
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>;
    cursor?: RoundQuizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<RoundQuizScalarFieldEnum>;
  };

  /**
   * QuestionCategory without action
   */
  export type QuestionCategoryArgs = {
    /**
     * Select specific fields to fetch from the QuestionCategory
     */
    select?: QuestionCategorySelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionCategoryInclude | null;
  };

  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
  };

  export type QuestionAvgAggregateOutputType = {
    id: number | null;
    questionCategoryId: number | null;
    answerId: number | null;
  };

  export type QuestionSumAggregateOutputType = {
    id: number | null;
    questionCategoryId: number | null;
    answerId: number | null;
  };

  export type QuestionMinAggregateOutputType = {
    id: number | null;
    questionCategoryId: number | null;
    textQuestion: string | null;
    answerId: number | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type QuestionMaxAggregateOutputType = {
    id: number | null;
    questionCategoryId: number | null;
    textQuestion: string | null;
    answerId: number | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type QuestionCountAggregateOutputType = {
    id: number;
    questionCategoryId: number;
    textQuestion: number;
    answerId: number;
    createAt: number;
    updateAt: number;
    _all: number;
  };

  export type QuestionAvgAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    answerId?: true;
  };

  export type QuestionSumAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    answerId?: true;
  };

  export type QuestionMinAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    textQuestion?: true;
    answerId?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type QuestionMaxAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    textQuestion?: true;
    answerId?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type QuestionCountAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    textQuestion?: true;
    answerId?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
  };

  export type QuestionAggregateArgs = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Questions
     **/
    _count?: true | QuestionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: QuestionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: QuestionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: QuestionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: QuestionMaxAggregateInputType;
  };

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuestion]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>;
  };

  export type QuestionGroupByArgs = {
    where?: QuestionWhereInput;
    orderBy?: Enumerable<QuestionOrderByWithAggregationInput>;
    by: QuestionScalarFieldEnum[];
    having?: QuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: QuestionCountAggregateInputType | true;
    _avg?: QuestionAvgAggregateInputType;
    _sum?: QuestionSumAggregateInputType;
    _min?: QuestionMinAggregateInputType;
    _max?: QuestionMaxAggregateInputType;
  };

  export type QuestionGroupByOutputType = {
    id: number;
    questionCategoryId: number;
    textQuestion: string;
    answerId: number;
    createAt: Date;
    updateAt: Date;
    _count: QuestionCountAggregateOutputType | null;
    _avg: QuestionAvgAggregateOutputType | null;
    _sum: QuestionSumAggregateOutputType | null;
    _min: QuestionMinAggregateOutputType | null;
    _max: QuestionMaxAggregateOutputType | null;
  };

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<QuestionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof QuestionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>;
        }
      >
    >;

  export type QuestionSelect = {
    id?: boolean;
    questionCategories?: boolean | QuestionCategoryArgs;
    questionCategoryId?: boolean;
    textQuestion?: boolean;
    answer?: boolean | ChoiceArgs;
    answerId?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
    choice?: boolean | Question$choiceArgs;
    RoundQuestionDetail?: boolean | Question$RoundQuestionDetailArgs;
    RoundQuestionChoiceDetail?:
      | boolean
      | Question$RoundQuestionChoiceDetailArgs;
    _count?: boolean | QuestionCountOutputTypeArgs;
  };

  export type QuestionInclude = {
    questionCategories?: boolean | QuestionCategoryArgs;
    answer?: boolean | ChoiceArgs;
    choice?: boolean | Question$choiceArgs;
    RoundQuestionDetail?: boolean | Question$RoundQuestionDetailArgs;
    RoundQuestionChoiceDetail?:
      | boolean
      | Question$RoundQuestionChoiceDetailArgs;
    _count?: boolean | QuestionCountOutputTypeArgs;
  };

  export type QuestionGetPayload<
    S extends boolean | null | undefined | QuestionArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? Question
    : S extends undefined
    ? never
    : S extends { include: any } & (QuestionArgs | QuestionFindManyArgs)
    ? Question & {
        [P in TruthyKeys<S["include"]>]: P extends "questionCategories"
          ? QuestionCategoryGetPayload<S["include"][P]>
          : P extends "answer"
          ? ChoiceGetPayload<S["include"][P]>
          : P extends "choice"
          ? Array<ChoiceGetPayload<S["include"][P]>>
          : P extends "RoundQuestionDetail"
          ? Array<RoundQuestionDetailGetPayload<S["include"][P]>>
          : P extends "RoundQuestionChoiceDetail"
          ? Array<RoundQuestionChoiceDetailGetPayload<S["include"][P]>>
          : P extends "_count"
          ? QuestionCountOutputTypeGetPayload<S["include"][P]>
          : never;
      }
    : S extends { select: any } & (QuestionArgs | QuestionFindManyArgs)
    ? {
        [P in TruthyKeys<S["select"]>]: P extends "questionCategories"
          ? QuestionCategoryGetPayload<S["select"][P]>
          : P extends "answer"
          ? ChoiceGetPayload<S["select"][P]>
          : P extends "choice"
          ? Array<ChoiceGetPayload<S["select"][P]>>
          : P extends "RoundQuestionDetail"
          ? Array<RoundQuestionDetailGetPayload<S["select"][P]>>
          : P extends "RoundQuestionChoiceDetail"
          ? Array<RoundQuestionChoiceDetailGetPayload<S["select"][P]>>
          : P extends "_count"
          ? QuestionCountOutputTypeGetPayload<S["select"][P]>
          : P extends keyof Question
          ? Question[P]
          : never;
      }
    : Question;

  type QuestionCountArgs = Omit<QuestionFindManyArgs, "select" | "include"> & {
    select?: QuestionCountAggregateInputType | true;
  };

  export interface QuestionDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
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
    findUnique<
      T extends QuestionFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, QuestionFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Question"
    > extends True
      ? Prisma__QuestionClient<QuestionGetPayload<T>>
      : Prisma__QuestionClient<QuestionGetPayload<T> | null, null>;

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
    ): Prisma__QuestionClient<QuestionGetPayload<T>>;

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
    findFirst<
      T extends QuestionFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, QuestionFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Question"
    > extends True
      ? Prisma__QuestionClient<QuestionGetPayload<T>>
      : Prisma__QuestionClient<QuestionGetPayload<T> | null, null>;

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
    ): Prisma__QuestionClient<QuestionGetPayload<T>>;

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
    ): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>>;

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
    ): Prisma__QuestionClient<QuestionGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__QuestionClient<QuestionGetPayload<T>>;

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
    ): Prisma__QuestionClient<QuestionGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__QuestionClient<QuestionGetPayload<T>>;

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
      args?: Subset<T, QuestionCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], QuestionCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends QuestionAggregateArgs>(
      args: Subset<T, QuestionAggregateArgs>
    ): Prisma.PrismaPromise<GetQuestionAggregateType<T>>;

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
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs["orderBy"] }
        : { orderBy?: QuestionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetQuestionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
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
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    questionCategories<T extends QuestionCategoryArgs = {}>(
      args?: Subset<T, QuestionCategoryArgs>
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T> | Null>;

    answer<T extends ChoiceArgs = {}>(
      args?: Subset<T, ChoiceArgs>
    ): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

    choice<T extends Question$choiceArgs = {}>(
      args?: Subset<T, Question$choiceArgs>
    ): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>> | Null>;

    RoundQuestionDetail<T extends Question$RoundQuestionDetailArgs = {}>(
      args?: Subset<T, Question$RoundQuestionDetailArgs>
    ): Prisma.PrismaPromise<Array<RoundQuestionDetailGetPayload<T>> | Null>;

    RoundQuestionChoiceDetail<
      T extends Question$RoundQuestionChoiceDetailArgs = {}
    >(
      args?: Subset<T, Question$RoundQuestionChoiceDetailArgs>
    ): Prisma.PrismaPromise<
      Array<RoundQuestionChoiceDetailGetPayload<T>> | Null
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
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
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question findUnique
   */
  export interface QuestionFindUniqueArgs extends QuestionFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question base type for findFirst actions
   */
  export type QuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionScalarFieldEnum>;
  };

  /**
   * Question findFirst
   */
  export interface QuestionFindFirstArgs extends QuestionFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionScalarFieldEnum>;
  };

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Questions.
     */
    skip?: number;
    distinct?: Enumerable<QuestionScalarFieldEnum>;
  };

  /**
   * Question create
   */
  export type QuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>;
  };

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs = {
    /**
     * The data used to create many Questions.
     */
    data: Enumerable<QuestionCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * Question update
   */
  export type QuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>;
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs = {
    /**
     * The data used to update Questions.
     */
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput;
  };

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput;
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>;
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>;
  };

  /**
   * Question delete
   */
  export type QuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput;
  };

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput;
  };

  /**
   * Question.choice
   */
  export type Question$choiceArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    where?: ChoiceWhereInput;
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>;
    cursor?: ChoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<ChoiceScalarFieldEnum>;
  };

  /**
   * Question.RoundQuestionDetail
   */
  export type Question$RoundQuestionDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    where?: RoundQuestionDetailWhereInput;
    orderBy?: Enumerable<RoundQuestionDetailOrderByWithRelationInput>;
    cursor?: RoundQuestionDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<RoundQuestionDetailScalarFieldEnum>;
  };

  /**
   * Question.RoundQuestionChoiceDetail
   */
  export type Question$RoundQuestionChoiceDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    where?: RoundQuestionChoiceDetailWhereInput;
    orderBy?: Enumerable<RoundQuestionChoiceDetailOrderByWithRelationInput>;
    cursor?: RoundQuestionChoiceDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<RoundQuestionChoiceDetailScalarFieldEnum>;
  };

  /**
   * Question without action
   */
  export type QuestionArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null;
  };

  /**
   * Model Choice
   */

  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null;
    _avg: ChoiceAvgAggregateOutputType | null;
    _sum: ChoiceSumAggregateOutputType | null;
    _min: ChoiceMinAggregateOutputType | null;
    _max: ChoiceMaxAggregateOutputType | null;
  };

  export type ChoiceAvgAggregateOutputType = {
    id: number | null;
    questionId: number | null;
  };

  export type ChoiceSumAggregateOutputType = {
    id: number | null;
    questionId: number | null;
  };

  export type ChoiceMinAggregateOutputType = {
    id: number | null;
    choiceName: string | null;
    questionId: number | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type ChoiceMaxAggregateOutputType = {
    id: number | null;
    choiceName: string | null;
    questionId: number | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type ChoiceCountAggregateOutputType = {
    id: number;
    choiceName: number;
    questionId: number;
    createAt: number;
    updateAt: number;
    _all: number;
  };

  export type ChoiceAvgAggregateInputType = {
    id?: true;
    questionId?: true;
  };

  export type ChoiceSumAggregateInputType = {
    id?: true;
    questionId?: true;
  };

  export type ChoiceMinAggregateInputType = {
    id?: true;
    choiceName?: true;
    questionId?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type ChoiceMaxAggregateInputType = {
    id?: true;
    choiceName?: true;
    questionId?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type ChoiceCountAggregateInputType = {
    id?: true;
    choiceName?: true;
    questionId?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
  };

  export type ChoiceAggregateArgs = {
    /**
     * Filter which Choice to aggregate.
     */
    where?: ChoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Choices to fetch.
     */
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ChoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Choices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Choices
     **/
    _count?: true | ChoiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ChoiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ChoiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ChoiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ChoiceMaxAggregateInputType;
  };

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateChoice]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>;
  };

  export type ChoiceGroupByArgs = {
    where?: ChoiceWhereInput;
    orderBy?: Enumerable<ChoiceOrderByWithAggregationInput>;
    by: ChoiceScalarFieldEnum[];
    having?: ChoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChoiceCountAggregateInputType | true;
    _avg?: ChoiceAvgAggregateInputType;
    _sum?: ChoiceSumAggregateInputType;
    _min?: ChoiceMinAggregateInputType;
    _max?: ChoiceMaxAggregateInputType;
  };

  export type ChoiceGroupByOutputType = {
    id: number;
    choiceName: string;
    questionId: number | null;
    createAt: Date;
    updateAt: Date;
    _count: ChoiceCountAggregateOutputType | null;
    _avg: ChoiceAvgAggregateOutputType | null;
    _sum: ChoiceSumAggregateOutputType | null;
    _min: ChoiceMinAggregateOutputType | null;
    _max: ChoiceMaxAggregateOutputType | null;
  };

  type GetChoiceGroupByPayload<T extends ChoiceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<ChoiceGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ChoiceGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>;
        }
      >
    >;

  export type ChoiceSelect = {
    id?: boolean;
    choiceName?: boolean;
    question?: boolean | QuestionArgs;
    questionId?: boolean;
    questionAnswer?: boolean | QuestionArgs;
    createAt?: boolean;
    updateAt?: boolean;
    RoundQuestionChoiceDetail?: boolean | Choice$RoundQuestionChoiceDetailArgs;
    _count?: boolean | ChoiceCountOutputTypeArgs;
  };

  export type ChoiceInclude = {
    question?: boolean | QuestionArgs;
    questionAnswer?: boolean | QuestionArgs;
    RoundQuestionChoiceDetail?: boolean | Choice$RoundQuestionChoiceDetailArgs;
    _count?: boolean | ChoiceCountOutputTypeArgs;
  };

  export type ChoiceGetPayload<
    S extends boolean | null | undefined | ChoiceArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? Choice
    : S extends undefined
    ? never
    : S extends { include: any } & (ChoiceArgs | ChoiceFindManyArgs)
    ? Choice & {
        [P in TruthyKeys<S["include"]>]: P extends "question"
          ? QuestionGetPayload<S["include"][P]> | null
          : P extends "questionAnswer"
          ? QuestionGetPayload<S["include"][P]> | null
          : P extends "RoundQuestionChoiceDetail"
          ? Array<RoundQuestionChoiceDetailGetPayload<S["include"][P]>>
          : P extends "_count"
          ? ChoiceCountOutputTypeGetPayload<S["include"][P]>
          : never;
      }
    : S extends { select: any } & (ChoiceArgs | ChoiceFindManyArgs)
    ? {
        [P in TruthyKeys<S["select"]>]: P extends "question"
          ? QuestionGetPayload<S["select"][P]> | null
          : P extends "questionAnswer"
          ? QuestionGetPayload<S["select"][P]> | null
          : P extends "RoundQuestionChoiceDetail"
          ? Array<RoundQuestionChoiceDetailGetPayload<S["select"][P]>>
          : P extends "_count"
          ? ChoiceCountOutputTypeGetPayload<S["select"][P]>
          : P extends keyof Choice
          ? Choice[P]
          : never;
      }
    : Choice;

  type ChoiceCountArgs = Omit<ChoiceFindManyArgs, "select" | "include"> & {
    select?: ChoiceCountAggregateInputType | true;
  };

  export interface ChoiceDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
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
    findUnique<
      T extends ChoiceFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, ChoiceFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Choice"
    > extends True
      ? Prisma__ChoiceClient<ChoiceGetPayload<T>>
      : Prisma__ChoiceClient<ChoiceGetPayload<T> | null, null>;

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
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>;

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
    findFirst<
      T extends ChoiceFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, ChoiceFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Choice"
    > extends True
      ? Prisma__ChoiceClient<ChoiceGetPayload<T>>
      : Prisma__ChoiceClient<ChoiceGetPayload<T> | null, null>;

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
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>;

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
    ): Prisma.PrismaPromise<Array<ChoiceGetPayload<T>>>;

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
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>;

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
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__ChoiceClient<ChoiceGetPayload<T>>;

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
      args?: Subset<T, ChoiceCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ChoiceCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends ChoiceAggregateArgs>(
      args: Subset<T, ChoiceAggregateArgs>
    ): Prisma.PrismaPromise<GetChoiceAggregateType<T>>;

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
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoiceGroupByArgs["orderBy"] }
        : { orderBy?: ChoiceGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, ChoiceGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetChoiceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChoiceClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
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
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    question<T extends QuestionArgs = {}>(
      args?: Subset<T, QuestionArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

    questionAnswer<T extends QuestionArgs = {}>(
      args?: Subset<T, QuestionArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

    RoundQuestionChoiceDetail<
      T extends Choice$RoundQuestionChoiceDetailArgs = {}
    >(
      args?: Subset<T, Choice$RoundQuestionChoiceDetailArgs>
    ): Prisma.PrismaPromise<
      Array<RoundQuestionChoiceDetailGetPayload<T>> | Null
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
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
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput;
  };

  /**
   * Choice findUnique
   */
  export interface ChoiceFindUniqueArgs extends ChoiceFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Choice findUniqueOrThrow
   */
  export type ChoiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput;
  };

  /**
   * Choice base type for findFirst actions
   */
  export type ChoiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Choices to fetch.
     */
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Choices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Choices.
     */
    distinct?: Enumerable<ChoiceScalarFieldEnum>;
  };

  /**
   * Choice findFirst
   */
  export interface ChoiceFindFirstArgs extends ChoiceFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Choice findFirstOrThrow
   */
  export type ChoiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Choices to fetch.
     */
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Choices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Choices.
     */
    distinct?: Enumerable<ChoiceScalarFieldEnum>;
  };

  /**
   * Choice findMany
   */
  export type ChoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * Filter, which Choices to fetch.
     */
    where?: ChoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Choices to fetch.
     */
    orderBy?: Enumerable<ChoiceOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Choices.
     */
    cursor?: ChoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Choices.
     */
    skip?: number;
    distinct?: Enumerable<ChoiceScalarFieldEnum>;
  };

  /**
   * Choice create
   */
  export type ChoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * The data needed to create a Choice.
     */
    data: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>;
  };

  /**
   * Choice createMany
   */
  export type ChoiceCreateManyArgs = {
    /**
     * The data used to create many Choices.
     */
    data: Enumerable<ChoiceCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * Choice update
   */
  export type ChoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * The data needed to update a Choice.
     */
    data: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>;
    /**
     * Choose, which Choice to update.
     */
    where: ChoiceWhereUniqueInput;
  };

  /**
   * Choice updateMany
   */
  export type ChoiceUpdateManyArgs = {
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>;
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput;
  };

  /**
   * Choice upsert
   */
  export type ChoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * The filter to search for the Choice to update in case it exists.
     */
    where: ChoiceWhereUniqueInput;
    /**
     * In case the Choice found by the `where` argument doesn't exist, create a new Choice with this data.
     */
    create: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>;
    /**
     * In case the Choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>;
  };

  /**
   * Choice delete
   */
  export type ChoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
    /**
     * Filter which Choice to delete.
     */
    where: ChoiceWhereUniqueInput;
  };

  /**
   * Choice deleteMany
   */
  export type ChoiceDeleteManyArgs = {
    /**
     * Filter which Choices to delete
     */
    where?: ChoiceWhereInput;
  };

  /**
   * Choice.RoundQuestionChoiceDetail
   */
  export type Choice$RoundQuestionChoiceDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    where?: RoundQuestionChoiceDetailWhereInput;
    orderBy?: Enumerable<RoundQuestionChoiceDetailOrderByWithRelationInput>;
    cursor?: RoundQuestionChoiceDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<RoundQuestionChoiceDetailScalarFieldEnum>;
  };

  /**
   * Choice without action
   */
  export type ChoiceArgs = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChoiceInclude | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    createAt: number;
    updateAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs = {
    where?: UserWhereInput;
    orderBy?: Enumerable<UserOrderByWithAggregationInput>;
    by: UserScalarFieldEnum[];
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    name: string;
    createAt: Date;
    updateAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect = {
    id?: boolean;
    name?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
    RoundQuiz?: boolean | User$RoundQuizArgs;
    _count?: boolean | UserCountOutputTypeArgs;
  };

  export type UserInclude = {
    RoundQuiz?: boolean | User$RoundQuizArgs;
    _count?: boolean | UserCountOutputTypeArgs;
  };

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any; include: any }
      ? "Please either choose `select` or `include`"
      : S extends true
      ? User
      : S extends undefined
      ? never
      : S extends { include: any } & (UserArgs | UserFindManyArgs)
      ? User & {
          [P in TruthyKeys<S["include"]>]: P extends "RoundQuiz"
            ? Array<RoundQuizGetPayload<S["include"][P]>>
            : P extends "_count"
            ? UserCountOutputTypeGetPayload<S["include"][P]>
            : never;
        }
      : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
          [P in TruthyKeys<S["select"]>]: P extends "RoundQuiz"
            ? Array<RoundQuizGetPayload<S["select"][P]>>
            : P extends "_count"
            ? UserCountOutputTypeGetPayload<S["select"][P]>
            : P extends keyof User
            ? User[P]
            : never;
        }
      : User;

  type UserCountArgs = Omit<UserFindManyArgs, "select" | "include"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
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
    findUnique<
      T extends UserFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "User"
    > extends True
      ? Prisma__UserClient<UserGetPayload<T>>
      : Prisma__UserClient<UserGetPayload<T> | null, null>;

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
    ): Prisma__UserClient<UserGetPayload<T>>;

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
    findFirst<
      T extends UserFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "User"
    > extends True
      ? Prisma__UserClient<UserGetPayload<T>>
      : Prisma__UserClient<UserGetPayload<T> | null, null>;

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
    ): Prisma__UserClient<UserGetPayload<T>>;

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
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>;

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
    ): Prisma__UserClient<UserGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__UserClient<UserGetPayload<T>>;

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
    ): Prisma__UserClient<UserGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__UserClient<UserGetPayload<T>>;

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
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
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
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    RoundQuiz<T extends User$RoundQuizArgs = {}>(
      args?: Subset<T, User$RoundQuizArgs>
    ): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
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
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.RoundQuiz
   */
  export type User$RoundQuizArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    where?: RoundQuizWhereInput;
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>;
    cursor?: RoundQuizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<RoundQuizScalarFieldEnum>;
  };

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null;
  };

  /**
   * Model RoundQuiz
   */

  export type AggregateRoundQuiz = {
    _count: RoundQuizCountAggregateOutputType | null;
    _avg: RoundQuizAvgAggregateOutputType | null;
    _sum: RoundQuizSumAggregateOutputType | null;
    _min: RoundQuizMinAggregateOutputType | null;
    _max: RoundQuizMaxAggregateOutputType | null;
  };

  export type RoundQuizAvgAggregateOutputType = {
    id: number | null;
    questionCategoryId: number | null;
    score: number | null;
    userId: number | null;
  };

  export type RoundQuizSumAggregateOutputType = {
    id: number | null;
    questionCategoryId: number | null;
    score: number | null;
    userId: number | null;
  };

  export type RoundQuizMinAggregateOutputType = {
    id: number | null;
    questionCategoryId: number | null;
    score: number | null;
    userId: number | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type RoundQuizMaxAggregateOutputType = {
    id: number | null;
    questionCategoryId: number | null;
    score: number | null;
    userId: number | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type RoundQuizCountAggregateOutputType = {
    id: number;
    questionCategoryId: number;
    score: number;
    userId: number;
    createAt: number;
    updateAt: number;
    _all: number;
  };

  export type RoundQuizAvgAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    score?: true;
    userId?: true;
  };

  export type RoundQuizSumAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    score?: true;
    userId?: true;
  };

  export type RoundQuizMinAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    score?: true;
    userId?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type RoundQuizMaxAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    score?: true;
    userId?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type RoundQuizCountAggregateInputType = {
    id?: true;
    questionCategoryId?: true;
    score?: true;
    userId?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
  };

  export type RoundQuizAggregateArgs = {
    /**
     * Filter which RoundQuiz to aggregate.
     */
    where?: RoundQuizWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuizs to fetch.
     */
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RoundQuizWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuizs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuizs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RoundQuizs
     **/
    _count?: true | RoundQuizCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RoundQuizAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RoundQuizSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoundQuizMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoundQuizMaxAggregateInputType;
  };

  export type GetRoundQuizAggregateType<T extends RoundQuizAggregateArgs> = {
    [P in keyof T & keyof AggregateRoundQuiz]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundQuiz[P]>
      : GetScalarType<T[P], AggregateRoundQuiz[P]>;
  };

  export type RoundQuizGroupByArgs = {
    where?: RoundQuizWhereInput;
    orderBy?: Enumerable<RoundQuizOrderByWithAggregationInput>;
    by: RoundQuizScalarFieldEnum[];
    having?: RoundQuizScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoundQuizCountAggregateInputType | true;
    _avg?: RoundQuizAvgAggregateInputType;
    _sum?: RoundQuizSumAggregateInputType;
    _min?: RoundQuizMinAggregateInputType;
    _max?: RoundQuizMaxAggregateInputType;
  };

  export type RoundQuizGroupByOutputType = {
    id: number;
    questionCategoryId: number;
    score: number;
    userId: number;
    createAt: Date;
    updateAt: Date;
    _count: RoundQuizCountAggregateOutputType | null;
    _avg: RoundQuizAvgAggregateOutputType | null;
    _sum: RoundQuizSumAggregateOutputType | null;
    _min: RoundQuizMinAggregateOutputType | null;
    _max: RoundQuizMaxAggregateOutputType | null;
  };

  type GetRoundQuizGroupByPayload<T extends RoundQuizGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<RoundQuizGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof RoundQuizGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundQuizGroupByOutputType[P]>
            : GetScalarType<T[P], RoundQuizGroupByOutputType[P]>;
        }
      >
    >;

  export type RoundQuizSelect = {
    id?: boolean;
    questionCategories?: boolean | QuestionCategoryArgs;
    questionCategoryId?: boolean;
    score?: boolean;
    user?: boolean | UserArgs;
    userId?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
    RoundQuestionDetail?: boolean | RoundQuiz$RoundQuestionDetailArgs;
    RoundQuestionChoiceDetail?:
      | boolean
      | RoundQuiz$RoundQuestionChoiceDetailArgs;
    _count?: boolean | RoundQuizCountOutputTypeArgs;
  };

  export type RoundQuizInclude = {
    questionCategories?: boolean | QuestionCategoryArgs;
    user?: boolean | UserArgs;
    RoundQuestionDetail?: boolean | RoundQuiz$RoundQuestionDetailArgs;
    RoundQuestionChoiceDetail?:
      | boolean
      | RoundQuiz$RoundQuestionChoiceDetailArgs;
    _count?: boolean | RoundQuizCountOutputTypeArgs;
  };

  export type RoundQuizGetPayload<
    S extends boolean | null | undefined | RoundQuizArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? RoundQuiz
    : S extends undefined
    ? never
    : S extends { include: any } & (RoundQuizArgs | RoundQuizFindManyArgs)
    ? RoundQuiz & {
        [P in TruthyKeys<S["include"]>]: P extends "questionCategories"
          ? QuestionCategoryGetPayload<S["include"][P]>
          : P extends "user"
          ? UserGetPayload<S["include"][P]>
          : P extends "RoundQuestionDetail"
          ? Array<RoundQuestionDetailGetPayload<S["include"][P]>>
          : P extends "RoundQuestionChoiceDetail"
          ? Array<RoundQuestionChoiceDetailGetPayload<S["include"][P]>>
          : P extends "_count"
          ? RoundQuizCountOutputTypeGetPayload<S["include"][P]>
          : never;
      }
    : S extends { select: any } & (RoundQuizArgs | RoundQuizFindManyArgs)
    ? {
        [P in TruthyKeys<S["select"]>]: P extends "questionCategories"
          ? QuestionCategoryGetPayload<S["select"][P]>
          : P extends "user"
          ? UserGetPayload<S["select"][P]>
          : P extends "RoundQuestionDetail"
          ? Array<RoundQuestionDetailGetPayload<S["select"][P]>>
          : P extends "RoundQuestionChoiceDetail"
          ? Array<RoundQuestionChoiceDetailGetPayload<S["select"][P]>>
          : P extends "_count"
          ? RoundQuizCountOutputTypeGetPayload<S["select"][P]>
          : P extends keyof RoundQuiz
          ? RoundQuiz[P]
          : never;
      }
    : RoundQuiz;

  type RoundQuizCountArgs = Omit<
    RoundQuizFindManyArgs,
    "select" | "include"
  > & {
    select?: RoundQuizCountAggregateInputType | true;
  };

  export interface RoundQuizDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    find(arg0: {}): unknown;

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
    findUnique<
      T extends RoundQuizFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, RoundQuizFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "RoundQuiz"
    > extends True
      ? Prisma__RoundQuizClient<RoundQuizGetPayload<T>>
      : Prisma__RoundQuizClient<RoundQuizGetPayload<T> | null, null>;

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
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>;

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
    findFirst<
      T extends RoundQuizFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, RoundQuizFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "RoundQuiz"
    > extends True
      ? Prisma__RoundQuizClient<RoundQuizGetPayload<T>>
      : Prisma__RoundQuizClient<RoundQuizGetPayload<T> | null, null>;

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
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>;

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
    ): Prisma.PrismaPromise<Array<RoundQuizGetPayload<T>>>;

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
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>;

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
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T>>;

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
      args?: Subset<T, RoundQuizCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RoundQuizCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends RoundQuizAggregateArgs>(
      args: Subset<T, RoundQuizAggregateArgs>
    ): Prisma.PrismaPromise<GetRoundQuizAggregateType<T>>;

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
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundQuizGroupByArgs["orderBy"] }
        : { orderBy?: RoundQuizGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, RoundQuizGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetRoundQuizGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundQuiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundQuizClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
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
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    questionCategories<T extends QuestionCategoryArgs = {}>(
      args?: Subset<T, QuestionCategoryArgs>
    ): Prisma__QuestionCategoryClient<QuestionCategoryGetPayload<T> | Null>;

    user<T extends UserArgs = {}>(
      args?: Subset<T, UserArgs>
    ): Prisma__UserClient<UserGetPayload<T> | Null>;

    RoundQuestionDetail<T extends RoundQuiz$RoundQuestionDetailArgs = {}>(
      args?: Subset<T, RoundQuiz$RoundQuestionDetailArgs>
    ): Prisma.PrismaPromise<Array<RoundQuestionDetailGetPayload<T>> | Null>;

    RoundQuestionChoiceDetail<
      T extends RoundQuiz$RoundQuestionChoiceDetailArgs = {}
    >(
      args?: Subset<T, RoundQuiz$RoundQuestionChoiceDetailArgs>
    ): Prisma.PrismaPromise<
      Array<RoundQuestionChoiceDetailGetPayload<T>> | Null
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
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
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * Filter, which RoundQuiz to fetch.
     */
    where: RoundQuizWhereUniqueInput;
  };

  /**
   * RoundQuiz findUnique
   */
  export interface RoundQuizFindUniqueArgs extends RoundQuizFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * RoundQuiz findUniqueOrThrow
   */
  export type RoundQuizFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * Filter, which RoundQuiz to fetch.
     */
    where: RoundQuizWhereUniqueInput;
  };

  /**
   * RoundQuiz base type for findFirst actions
   */
  export type RoundQuizFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * Filter, which RoundQuiz to fetch.
     */
    where?: RoundQuizWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuizs to fetch.
     */
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoundQuizs.
     */
    cursor?: RoundQuizWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuizs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuizs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoundQuizs.
     */
    distinct?: Enumerable<RoundQuizScalarFieldEnum>;
  };

  /**
   * RoundQuiz findFirst
   */
  export interface RoundQuizFindFirstArgs extends RoundQuizFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * RoundQuiz findFirstOrThrow
   */
  export type RoundQuizFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * Filter, which RoundQuiz to fetch.
     */
    where?: RoundQuizWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuizs to fetch.
     */
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoundQuizs.
     */
    cursor?: RoundQuizWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuizs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuizs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoundQuizs.
     */
    distinct?: Enumerable<RoundQuizScalarFieldEnum>;
  };

  /**
   * RoundQuiz findMany
   */
  export type RoundQuizFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * Filter, which RoundQuizs to fetch.
     */
    where?: RoundQuizWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuizs to fetch.
     */
    orderBy?: Enumerable<RoundQuizOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RoundQuizs.
     */
    cursor?: RoundQuizWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuizs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuizs.
     */
    skip?: number;
    distinct?: Enumerable<RoundQuizScalarFieldEnum>;
  };

  /**
   * RoundQuiz create
   */
  export type RoundQuizCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * The data needed to create a RoundQuiz.
     */
    data: XOR<RoundQuizCreateInput, RoundQuizUncheckedCreateInput>;
  };

  /**
   * RoundQuiz createMany
   */
  export type RoundQuizCreateManyArgs = {
    /**
     * The data used to create many RoundQuizs.
     */
    data: Enumerable<RoundQuizCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * RoundQuiz update
   */
  export type RoundQuizUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * The data needed to update a RoundQuiz.
     */
    data: XOR<RoundQuizUpdateInput, RoundQuizUncheckedUpdateInput>;
    /**
     * Choose, which RoundQuiz to update.
     */
    where: RoundQuizWhereUniqueInput;
  };

  /**
   * RoundQuiz updateMany
   */
  export type RoundQuizUpdateManyArgs = {
    /**
     * The data used to update RoundQuizs.
     */
    data: XOR<
      RoundQuizUpdateManyMutationInput,
      RoundQuizUncheckedUpdateManyInput
    >;
    /**
     * Filter which RoundQuizs to update
     */
    where?: RoundQuizWhereInput;
  };

  /**
   * RoundQuiz upsert
   */
  export type RoundQuizUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * The filter to search for the RoundQuiz to update in case it exists.
     */
    where: RoundQuizWhereUniqueInput;
    /**
     * In case the RoundQuiz found by the `where` argument doesn't exist, create a new RoundQuiz with this data.
     */
    create: XOR<RoundQuizCreateInput, RoundQuizUncheckedCreateInput>;
    /**
     * In case the RoundQuiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundQuizUpdateInput, RoundQuizUncheckedUpdateInput>;
  };

  /**
   * RoundQuiz delete
   */
  export type RoundQuizDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
    /**
     * Filter which RoundQuiz to delete.
     */
    where: RoundQuizWhereUniqueInput;
  };

  /**
   * RoundQuiz deleteMany
   */
  export type RoundQuizDeleteManyArgs = {
    /**
     * Filter which RoundQuizs to delete
     */
    where?: RoundQuizWhereInput;
  };

  /**
   * RoundQuiz.RoundQuestionDetail
   */
  export type RoundQuiz$RoundQuestionDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    where?: RoundQuestionDetailWhereInput;
    orderBy?: Enumerable<RoundQuestionDetailOrderByWithRelationInput>;
    cursor?: RoundQuestionDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<RoundQuestionDetailScalarFieldEnum>;
  };

  /**
   * RoundQuiz.RoundQuestionChoiceDetail
   */
  export type RoundQuiz$RoundQuestionChoiceDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    where?: RoundQuestionChoiceDetailWhereInput;
    orderBy?: Enumerable<RoundQuestionChoiceDetailOrderByWithRelationInput>;
    cursor?: RoundQuestionChoiceDetailWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<RoundQuestionChoiceDetailScalarFieldEnum>;
  };

  /**
   * RoundQuiz without action
   */
  export type RoundQuizArgs = {
    /**
     * Select specific fields to fetch from the RoundQuiz
     */
    select?: RoundQuizSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuizInclude | null;
  };

  /**
   * Model RoundQuestionDetail
   */

  export type AggregateRoundQuestionDetail = {
    _count: RoundQuestionDetailCountAggregateOutputType | null;
    _avg: RoundQuestionDetailAvgAggregateOutputType | null;
    _sum: RoundQuestionDetailSumAggregateOutputType | null;
    _min: RoundQuestionDetailMinAggregateOutputType | null;
    _max: RoundQuestionDetailMaxAggregateOutputType | null;
  };

  export type RoundQuestionDetailAvgAggregateOutputType = {
    id: number | null;
    roundQuizId: number | null;
    questionId: number | null;
    questionOrder: number | null;
    userChoose: number | null;
  };

  export type RoundQuestionDetailSumAggregateOutputType = {
    id: number | null;
    roundQuizId: number | null;
    questionId: number | null;
    questionOrder: number | null;
    userChoose: number | null;
  };

  export type RoundQuestionDetailMinAggregateOutputType = {
    id: number | null;
    roundQuizId: number | null;
    questionId: number | null;
    questionOrder: number | null;
    userChoose: number | null;
    result: boolean | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type RoundQuestionDetailMaxAggregateOutputType = {
    id: number | null;
    roundQuizId: number | null;
    questionId: number | null;
    questionOrder: number | null;
    userChoose: number | null;
    result: boolean | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type RoundQuestionDetailCountAggregateOutputType = {
    id: number;
    roundQuizId: number;
    questionId: number;
    questionOrder: number;
    userChoose: number;
    result: number;
    createAt: number;
    updateAt: number;
    _all: number;
  };

  export type RoundQuestionDetailAvgAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    questionOrder?: true;
    userChoose?: true;
  };

  export type RoundQuestionDetailSumAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    questionOrder?: true;
    userChoose?: true;
  };

  export type RoundQuestionDetailMinAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    questionOrder?: true;
    userChoose?: true;
    result?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type RoundQuestionDetailMaxAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    questionOrder?: true;
    userChoose?: true;
    result?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type RoundQuestionDetailCountAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    questionOrder?: true;
    userChoose?: true;
    result?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
  };

  export type RoundQuestionDetailAggregateArgs = {
    /**
     * Filter which RoundQuestionDetail to aggregate.
     */
    where?: RoundQuestionDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuestionDetails to fetch.
     */
    orderBy?: Enumerable<RoundQuestionDetailOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RoundQuestionDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuestionDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuestionDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RoundQuestionDetails
     **/
    _count?: true | RoundQuestionDetailCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RoundQuestionDetailAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RoundQuestionDetailSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoundQuestionDetailMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoundQuestionDetailMaxAggregateInputType;
  };

  export type GetRoundQuestionDetailAggregateType<
    T extends RoundQuestionDetailAggregateArgs
  > = {
    [P in keyof T & keyof AggregateRoundQuestionDetail]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundQuestionDetail[P]>
      : GetScalarType<T[P], AggregateRoundQuestionDetail[P]>;
  };

  export type RoundQuestionDetailGroupByArgs = {
    where?: RoundQuestionDetailWhereInput;
    orderBy?: Enumerable<RoundQuestionDetailOrderByWithAggregationInput>;
    by: RoundQuestionDetailScalarFieldEnum[];
    having?: RoundQuestionDetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoundQuestionDetailCountAggregateInputType | true;
    _avg?: RoundQuestionDetailAvgAggregateInputType;
    _sum?: RoundQuestionDetailSumAggregateInputType;
    _min?: RoundQuestionDetailMinAggregateInputType;
    _max?: RoundQuestionDetailMaxAggregateInputType;
  };

  export type RoundQuestionDetailGroupByOutputType = {
    id: number;
    roundQuizId: number;
    questionId: number;
    questionOrder: number;
    userChoose: number | null;
    result: boolean;
    createAt: Date;
    updateAt: Date;
    _count: RoundQuestionDetailCountAggregateOutputType | null;
    _avg: RoundQuestionDetailAvgAggregateOutputType | null;
    _sum: RoundQuestionDetailSumAggregateOutputType | null;
    _min: RoundQuestionDetailMinAggregateOutputType | null;
    _max: RoundQuestionDetailMaxAggregateOutputType | null;
  };

  type GetRoundQuestionDetailGroupByPayload<
    T extends RoundQuestionDetailGroupByArgs
  > = Prisma.PrismaPromise<
    Array<
      PickArray<RoundQuestionDetailGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof RoundQuestionDetailGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoundQuestionDetailGroupByOutputType[P]>
          : GetScalarType<T[P], RoundQuestionDetailGroupByOutputType[P]>;
      }
    >
  >;

  export type RoundQuestionDetailSelect = {
    id?: boolean;
    roundQuiz?: boolean | RoundQuizArgs;
    roundQuizId?: boolean;
    question?: boolean | QuestionArgs;
    questionId?: boolean;
    questionOrder?: boolean;
    userChoose?: boolean;
    result?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
  };

  export type RoundQuestionDetailInclude = {
    roundQuiz?: boolean | RoundQuizArgs;
    question?: boolean | QuestionArgs;
  };

  export type RoundQuestionDetailGetPayload<
    S extends boolean | null | undefined | RoundQuestionDetailArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? RoundQuestionDetail
    : S extends undefined
    ? never
    : S extends { include: any } & (
        | RoundQuestionDetailArgs
        | RoundQuestionDetailFindManyArgs
      )
    ? RoundQuestionDetail & {
        [P in TruthyKeys<S["include"]>]: P extends "roundQuiz"
          ? RoundQuizGetPayload<S["include"][P]>
          : P extends "question"
          ? QuestionGetPayload<S["include"][P]>
          : never;
      }
    : S extends { select: any } & (
        | RoundQuestionDetailArgs
        | RoundQuestionDetailFindManyArgs
      )
    ? {
        [P in TruthyKeys<S["select"]>]: P extends "roundQuiz"
          ? RoundQuizGetPayload<S["select"][P]>
          : P extends "question"
          ? QuestionGetPayload<S["select"][P]>
          : P extends keyof RoundQuestionDetail
          ? RoundQuestionDetail[P]
          : never;
      }
    : RoundQuestionDetail;

  type RoundQuestionDetailCountArgs = Omit<
    RoundQuestionDetailFindManyArgs,
    "select" | "include"
  > & {
    select?: RoundQuestionDetailCountAggregateInputType | true;
  };

  export interface RoundQuestionDetailDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one RoundQuestionDetail that matches the filter.
     * @param {RoundQuestionDetailFindUniqueArgs} args - Arguments to find a RoundQuestionDetail
     * @example
     * // Get one RoundQuestionDetail
     * const roundQuestionDetail = await prisma.roundQuestionDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends RoundQuestionDetailFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, RoundQuestionDetailFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "RoundQuestionDetail"
    > extends True
      ? Prisma__RoundQuestionDetailClient<RoundQuestionDetailGetPayload<T>>
      : Prisma__RoundQuestionDetailClient<
          RoundQuestionDetailGetPayload<T> | null,
          null
        >;

    /**
     * Find one RoundQuestionDetail that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {RoundQuestionDetailFindUniqueOrThrowArgs} args - Arguments to find a RoundQuestionDetail
     * @example
     * // Get one RoundQuestionDetail
     * const roundQuestionDetail = await prisma.roundQuestionDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends RoundQuestionDetailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundQuestionDetailFindUniqueOrThrowArgs>
    ): Prisma__RoundQuestionDetailClient<RoundQuestionDetailGetPayload<T>>;

    /**
     * Find the first RoundQuestionDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionDetailFindFirstArgs} args - Arguments to find a RoundQuestionDetail
     * @example
     * // Get one RoundQuestionDetail
     * const roundQuestionDetail = await prisma.roundQuestionDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends RoundQuestionDetailFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, RoundQuestionDetailFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "RoundQuestionDetail"
    > extends True
      ? Prisma__RoundQuestionDetailClient<RoundQuestionDetailGetPayload<T>>
      : Prisma__RoundQuestionDetailClient<
          RoundQuestionDetailGetPayload<T> | null,
          null
        >;

    /**
     * Find the first RoundQuestionDetail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionDetailFindFirstOrThrowArgs} args - Arguments to find a RoundQuestionDetail
     * @example
     * // Get one RoundQuestionDetail
     * const roundQuestionDetail = await prisma.roundQuestionDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends RoundQuestionDetailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundQuestionDetailFindFirstOrThrowArgs>
    ): Prisma__RoundQuestionDetailClient<RoundQuestionDetailGetPayload<T>>;

    /**
     * Find zero or more RoundQuestionDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundQuestionDetails
     * const roundQuestionDetails = await prisma.roundQuestionDetail.findMany()
     *
     * // Get first 10 RoundQuestionDetails
     * const roundQuestionDetails = await prisma.roundQuestionDetail.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roundQuestionDetailWithIdOnly = await prisma.roundQuestionDetail.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends RoundQuestionDetailFindManyArgs>(
      args?: SelectSubset<T, RoundQuestionDetailFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundQuestionDetailGetPayload<T>>>;

    /**
     * Create a RoundQuestionDetail.
     * @param {RoundQuestionDetailCreateArgs} args - Arguments to create a RoundQuestionDetail.
     * @example
     * // Create one RoundQuestionDetail
     * const RoundQuestionDetail = await prisma.roundQuestionDetail.create({
     *   data: {
     *     // ... data to create a RoundQuestionDetail
     *   }
     * })
     *
     **/
    create<T extends RoundQuestionDetailCreateArgs>(
      args: SelectSubset<T, RoundQuestionDetailCreateArgs>
    ): Prisma__RoundQuestionDetailClient<RoundQuestionDetailGetPayload<T>>;

    /**
     * Create many RoundQuestionDetails.
     *     @param {RoundQuestionDetailCreateManyArgs} args - Arguments to create many RoundQuestionDetails.
     *     @example
     *     // Create many RoundQuestionDetails
     *     const roundQuestionDetail = await prisma.roundQuestionDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends RoundQuestionDetailCreateManyArgs>(
      args?: SelectSubset<T, RoundQuestionDetailCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a RoundQuestionDetail.
     * @param {RoundQuestionDetailDeleteArgs} args - Arguments to delete one RoundQuestionDetail.
     * @example
     * // Delete one RoundQuestionDetail
     * const RoundQuestionDetail = await prisma.roundQuestionDetail.delete({
     *   where: {
     *     // ... filter to delete one RoundQuestionDetail
     *   }
     * })
     *
     **/
    delete<T extends RoundQuestionDetailDeleteArgs>(
      args: SelectSubset<T, RoundQuestionDetailDeleteArgs>
    ): Prisma__RoundQuestionDetailClient<RoundQuestionDetailGetPayload<T>>;

    /**
     * Update one RoundQuestionDetail.
     * @param {RoundQuestionDetailUpdateArgs} args - Arguments to update one RoundQuestionDetail.
     * @example
     * // Update one RoundQuestionDetail
     * const roundQuestionDetail = await prisma.roundQuestionDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends RoundQuestionDetailUpdateArgs>(
      args: SelectSubset<T, RoundQuestionDetailUpdateArgs>
    ): Prisma__RoundQuestionDetailClient<RoundQuestionDetailGetPayload<T>>;

    /**
     * Delete zero or more RoundQuestionDetails.
     * @param {RoundQuestionDetailDeleteManyArgs} args - Arguments to filter RoundQuestionDetails to delete.
     * @example
     * // Delete a few RoundQuestionDetails
     * const { count } = await prisma.roundQuestionDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends RoundQuestionDetailDeleteManyArgs>(
      args?: SelectSubset<T, RoundQuestionDetailDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RoundQuestionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundQuestionDetails
     * const roundQuestionDetail = await prisma.roundQuestionDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends RoundQuestionDetailUpdateManyArgs>(
      args: SelectSubset<T, RoundQuestionDetailUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one RoundQuestionDetail.
     * @param {RoundQuestionDetailUpsertArgs} args - Arguments to update or create a RoundQuestionDetail.
     * @example
     * // Update or create a RoundQuestionDetail
     * const roundQuestionDetail = await prisma.roundQuestionDetail.upsert({
     *   create: {
     *     // ... data to create a RoundQuestionDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundQuestionDetail we want to update
     *   }
     * })
     **/
    upsert<T extends RoundQuestionDetailUpsertArgs>(
      args: SelectSubset<T, RoundQuestionDetailUpsertArgs>
    ): Prisma__RoundQuestionDetailClient<RoundQuestionDetailGetPayload<T>>;

    /**
     * Count the number of RoundQuestionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionDetailCountArgs} args - Arguments to filter RoundQuestionDetails to count.
     * @example
     * // Count the number of RoundQuestionDetails
     * const count = await prisma.roundQuestionDetail.count({
     *   where: {
     *     // ... the filter for the RoundQuestionDetails we want to count
     *   }
     * })
     **/
    count<T extends RoundQuestionDetailCountArgs>(
      args?: Subset<T, RoundQuestionDetailCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              RoundQuestionDetailCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RoundQuestionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundQuestionDetailAggregateArgs>(
      args: Subset<T, RoundQuestionDetailAggregateArgs>
    ): Prisma.PrismaPromise<GetRoundQuestionDetailAggregateType<T>>;

    /**
     * Group by RoundQuestionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionDetailGroupByArgs} args - Group by arguments.
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
      T extends RoundQuestionDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundQuestionDetailGroupByArgs["orderBy"] }
        : { orderBy?: RoundQuestionDetailGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, RoundQuestionDetailGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetRoundQuestionDetailGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundQuestionDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundQuestionDetailClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
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
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    roundQuiz<T extends RoundQuizArgs = {}>(
      args?: Subset<T, RoundQuizArgs>
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T> | Null>;

    question<T extends QuestionArgs = {}>(
      args?: Subset<T, QuestionArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
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
   * RoundQuestionDetail base type for findUnique actions
   */
  export type RoundQuestionDetailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * Filter, which RoundQuestionDetail to fetch.
     */
    where: RoundQuestionDetailWhereUniqueInput;
  };

  /**
   * RoundQuestionDetail findUnique
   */
  export interface RoundQuestionDetailFindUniqueArgs
    extends RoundQuestionDetailFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * RoundQuestionDetail findUniqueOrThrow
   */
  export type RoundQuestionDetailFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * Filter, which RoundQuestionDetail to fetch.
     */
    where: RoundQuestionDetailWhereUniqueInput;
  };

  /**
   * RoundQuestionDetail base type for findFirst actions
   */
  export type RoundQuestionDetailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * Filter, which RoundQuestionDetail to fetch.
     */
    where?: RoundQuestionDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuestionDetails to fetch.
     */
    orderBy?: Enumerable<RoundQuestionDetailOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoundQuestionDetails.
     */
    cursor?: RoundQuestionDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuestionDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuestionDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoundQuestionDetails.
     */
    distinct?: Enumerable<RoundQuestionDetailScalarFieldEnum>;
  };

  /**
   * RoundQuestionDetail findFirst
   */
  export interface RoundQuestionDetailFindFirstArgs
    extends RoundQuestionDetailFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * RoundQuestionDetail findFirstOrThrow
   */
  export type RoundQuestionDetailFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * Filter, which RoundQuestionDetail to fetch.
     */
    where?: RoundQuestionDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuestionDetails to fetch.
     */
    orderBy?: Enumerable<RoundQuestionDetailOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoundQuestionDetails.
     */
    cursor?: RoundQuestionDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuestionDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuestionDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoundQuestionDetails.
     */
    distinct?: Enumerable<RoundQuestionDetailScalarFieldEnum>;
  };

  /**
   * RoundQuestionDetail findMany
   */
  export type RoundQuestionDetailFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * Filter, which RoundQuestionDetails to fetch.
     */
    where?: RoundQuestionDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuestionDetails to fetch.
     */
    orderBy?: Enumerable<RoundQuestionDetailOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RoundQuestionDetails.
     */
    cursor?: RoundQuestionDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuestionDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuestionDetails.
     */
    skip?: number;
    distinct?: Enumerable<RoundQuestionDetailScalarFieldEnum>;
  };

  /**
   * RoundQuestionDetail create
   */
  export type RoundQuestionDetailCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * The data needed to create a RoundQuestionDetail.
     */
    data: XOR<
      RoundQuestionDetailCreateInput,
      RoundQuestionDetailUncheckedCreateInput
    >;
  };

  /**
   * RoundQuestionDetail createMany
   */
  export type RoundQuestionDetailCreateManyArgs = {
    /**
     * The data used to create many RoundQuestionDetails.
     */
    data: Enumerable<RoundQuestionDetailCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * RoundQuestionDetail update
   */
  export type RoundQuestionDetailUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * The data needed to update a RoundQuestionDetail.
     */
    data: XOR<
      RoundQuestionDetailUpdateInput,
      RoundQuestionDetailUncheckedUpdateInput
    >;
    /**
     * Choose, which RoundQuestionDetail to update.
     */
    where: RoundQuestionDetailWhereUniqueInput;
  };

  /**
   * RoundQuestionDetail updateMany
   */
  export type RoundQuestionDetailUpdateManyArgs = {
    /**
     * The data used to update RoundQuestionDetails.
     */
    data: XOR<
      RoundQuestionDetailUpdateManyMutationInput,
      RoundQuestionDetailUncheckedUpdateManyInput
    >;
    /**
     * Filter which RoundQuestionDetails to update
     */
    where?: RoundQuestionDetailWhereInput;
  };

  /**
   * RoundQuestionDetail upsert
   */
  export type RoundQuestionDetailUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * The filter to search for the RoundQuestionDetail to update in case it exists.
     */
    where: RoundQuestionDetailWhereUniqueInput;
    /**
     * In case the RoundQuestionDetail found by the `where` argument doesn't exist, create a new RoundQuestionDetail with this data.
     */
    create: XOR<
      RoundQuestionDetailCreateInput,
      RoundQuestionDetailUncheckedCreateInput
    >;
    /**
     * In case the RoundQuestionDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      RoundQuestionDetailUpdateInput,
      RoundQuestionDetailUncheckedUpdateInput
    >;
  };

  /**
   * RoundQuestionDetail delete
   */
  export type RoundQuestionDetailDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
    /**
     * Filter which RoundQuestionDetail to delete.
     */
    where: RoundQuestionDetailWhereUniqueInput;
  };

  /**
   * RoundQuestionDetail deleteMany
   */
  export type RoundQuestionDetailDeleteManyArgs = {
    /**
     * Filter which RoundQuestionDetails to delete
     */
    where?: RoundQuestionDetailWhereInput;
  };

  /**
   * RoundQuestionDetail without action
   */
  export type RoundQuestionDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionDetail
     */
    select?: RoundQuestionDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionDetailInclude | null;
  };

  /**
   * Model RoundQuestionChoiceDetail
   */

  export type AggregateRoundQuestionChoiceDetail = {
    _count: RoundQuestionChoiceDetailCountAggregateOutputType | null;
    _avg: RoundQuestionChoiceDetailAvgAggregateOutputType | null;
    _sum: RoundQuestionChoiceDetailSumAggregateOutputType | null;
    _min: RoundQuestionChoiceDetailMinAggregateOutputType | null;
    _max: RoundQuestionChoiceDetailMaxAggregateOutputType | null;
  };

  export type RoundQuestionChoiceDetailAvgAggregateOutputType = {
    id: number | null;
    roundQuizId: number | null;
    questionId: number | null;
    choiceId: number | null;
  };

  export type RoundQuestionChoiceDetailSumAggregateOutputType = {
    id: number | null;
    roundQuizId: number | null;
    questionId: number | null;
    choiceId: number | null;
  };

  export type RoundQuestionChoiceDetailMinAggregateOutputType = {
    id: number | null;
    roundQuizId: number | null;
    questionId: number | null;
    choiceId: number | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type RoundQuestionChoiceDetailMaxAggregateOutputType = {
    id: number | null;
    roundQuizId: number | null;
    questionId: number | null;
    choiceId: number | null;
    createAt: Date | null;
    updateAt: Date | null;
  };

  export type RoundQuestionChoiceDetailCountAggregateOutputType = {
    id: number;
    roundQuizId: number;
    questionId: number;
    choiceId: number;
    createAt: number;
    updateAt: number;
    _all: number;
  };

  export type RoundQuestionChoiceDetailAvgAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    choiceId?: true;
  };

  export type RoundQuestionChoiceDetailSumAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    choiceId?: true;
  };

  export type RoundQuestionChoiceDetailMinAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    choiceId?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type RoundQuestionChoiceDetailMaxAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    choiceId?: true;
    createAt?: true;
    updateAt?: true;
  };

  export type RoundQuestionChoiceDetailCountAggregateInputType = {
    id?: true;
    roundQuizId?: true;
    questionId?: true;
    choiceId?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
  };

  export type RoundQuestionChoiceDetailAggregateArgs = {
    /**
     * Filter which RoundQuestionChoiceDetail to aggregate.
     */
    where?: RoundQuestionChoiceDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuestionChoiceDetails to fetch.
     */
    orderBy?: Enumerable<RoundQuestionChoiceDetailOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RoundQuestionChoiceDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuestionChoiceDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuestionChoiceDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RoundQuestionChoiceDetails
     **/
    _count?: true | RoundQuestionChoiceDetailCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RoundQuestionChoiceDetailAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RoundQuestionChoiceDetailSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoundQuestionChoiceDetailMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoundQuestionChoiceDetailMaxAggregateInputType;
  };

  export type GetRoundQuestionChoiceDetailAggregateType<
    T extends RoundQuestionChoiceDetailAggregateArgs
  > = {
    [P in keyof T & keyof AggregateRoundQuestionChoiceDetail]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundQuestionChoiceDetail[P]>
      : GetScalarType<T[P], AggregateRoundQuestionChoiceDetail[P]>;
  };

  export type RoundQuestionChoiceDetailGroupByArgs = {
    where?: RoundQuestionChoiceDetailWhereInput;
    orderBy?: Enumerable<RoundQuestionChoiceDetailOrderByWithAggregationInput>;
    by: RoundQuestionChoiceDetailScalarFieldEnum[];
    having?: RoundQuestionChoiceDetailScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoundQuestionChoiceDetailCountAggregateInputType | true;
    _avg?: RoundQuestionChoiceDetailAvgAggregateInputType;
    _sum?: RoundQuestionChoiceDetailSumAggregateInputType;
    _min?: RoundQuestionChoiceDetailMinAggregateInputType;
    _max?: RoundQuestionChoiceDetailMaxAggregateInputType;
  };

  export type RoundQuestionChoiceDetailGroupByOutputType = {
    id: number;
    roundQuizId: number;
    questionId: number;
    choiceId: number;
    createAt: Date;
    updateAt: Date;
    _count: RoundQuestionChoiceDetailCountAggregateOutputType | null;
    _avg: RoundQuestionChoiceDetailAvgAggregateOutputType | null;
    _sum: RoundQuestionChoiceDetailSumAggregateOutputType | null;
    _min: RoundQuestionChoiceDetailMinAggregateOutputType | null;
    _max: RoundQuestionChoiceDetailMaxAggregateOutputType | null;
  };

  type GetRoundQuestionChoiceDetailGroupByPayload<
    T extends RoundQuestionChoiceDetailGroupByArgs
  > = Prisma.PrismaPromise<
    Array<
      PickArray<RoundQuestionChoiceDetailGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof RoundQuestionChoiceDetailGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoundQuestionChoiceDetailGroupByOutputType[P]>
          : GetScalarType<T[P], RoundQuestionChoiceDetailGroupByOutputType[P]>;
      }
    >
  >;

  export type RoundQuestionChoiceDetailSelect = {
    id?: boolean;
    roundQuiz?: boolean | RoundQuizArgs;
    roundQuizId?: boolean;
    question?: boolean | QuestionArgs;
    questionId?: boolean;
    choice?: boolean | ChoiceArgs;
    choiceId?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
  };

  export type RoundQuestionChoiceDetailInclude = {
    roundQuiz?: boolean | RoundQuizArgs;
    question?: boolean | QuestionArgs;
    choice?: boolean | ChoiceArgs;
  };

  export type RoundQuestionChoiceDetailGetPayload<
    S extends boolean | null | undefined | RoundQuestionChoiceDetailArgs
  > = S extends { select: any; include: any }
    ? "Please either choose `select` or `include`"
    : S extends true
    ? RoundQuestionChoiceDetail
    : S extends undefined
    ? never
    : S extends { include: any } & (
        | RoundQuestionChoiceDetailArgs
        | RoundQuestionChoiceDetailFindManyArgs
      )
    ? RoundQuestionChoiceDetail & {
        [P in TruthyKeys<S["include"]>]: P extends "roundQuiz"
          ? RoundQuizGetPayload<S["include"][P]>
          : P extends "question"
          ? QuestionGetPayload<S["include"][P]>
          : P extends "choice"
          ? ChoiceGetPayload<S["include"][P]>
          : never;
      }
    : S extends { select: any } & (
        | RoundQuestionChoiceDetailArgs
        | RoundQuestionChoiceDetailFindManyArgs
      )
    ? {
        [P in TruthyKeys<S["select"]>]: P extends "roundQuiz"
          ? RoundQuizGetPayload<S["select"][P]>
          : P extends "question"
          ? QuestionGetPayload<S["select"][P]>
          : P extends "choice"
          ? ChoiceGetPayload<S["select"][P]>
          : P extends keyof RoundQuestionChoiceDetail
          ? RoundQuestionChoiceDetail[P]
          : never;
      }
    : RoundQuestionChoiceDetail;

  type RoundQuestionChoiceDetailCountArgs = Omit<
    RoundQuestionChoiceDetailFindManyArgs,
    "select" | "include"
  > & {
    select?: RoundQuestionChoiceDetailCountAggregateInputType | true;
  };

  export interface RoundQuestionChoiceDetailDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined
  > {
    /**
     * Find zero or one RoundQuestionChoiceDetail that matches the filter.
     * @param {RoundQuestionChoiceDetailFindUniqueArgs} args - Arguments to find a RoundQuestionChoiceDetail
     * @example
     * // Get one RoundQuestionChoiceDetail
     * const roundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends RoundQuestionChoiceDetailFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, RoundQuestionChoiceDetailFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "RoundQuestionChoiceDetail"
    > extends True
      ? Prisma__RoundQuestionChoiceDetailClient<
          RoundQuestionChoiceDetailGetPayload<T>
        >
      : Prisma__RoundQuestionChoiceDetailClient<
          RoundQuestionChoiceDetailGetPayload<T> | null,
          null
        >;

    /**
     * Find one RoundQuestionChoiceDetail that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {RoundQuestionChoiceDetailFindUniqueOrThrowArgs} args - Arguments to find a RoundQuestionChoiceDetail
     * @example
     * // Get one RoundQuestionChoiceDetail
     * const roundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends RoundQuestionChoiceDetailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundQuestionChoiceDetailFindUniqueOrThrowArgs>
    ): Prisma__RoundQuestionChoiceDetailClient<
      RoundQuestionChoiceDetailGetPayload<T>
    >;

    /**
     * Find the first RoundQuestionChoiceDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionChoiceDetailFindFirstArgs} args - Arguments to find a RoundQuestionChoiceDetail
     * @example
     * // Get one RoundQuestionChoiceDetail
     * const roundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends RoundQuestionChoiceDetailFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, RoundQuestionChoiceDetailFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "RoundQuestionChoiceDetail"
    > extends True
      ? Prisma__RoundQuestionChoiceDetailClient<
          RoundQuestionChoiceDetailGetPayload<T>
        >
      : Prisma__RoundQuestionChoiceDetailClient<
          RoundQuestionChoiceDetailGetPayload<T> | null,
          null
        >;

    /**
     * Find the first RoundQuestionChoiceDetail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionChoiceDetailFindFirstOrThrowArgs} args - Arguments to find a RoundQuestionChoiceDetail
     * @example
     * // Get one RoundQuestionChoiceDetail
     * const roundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends RoundQuestionChoiceDetailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundQuestionChoiceDetailFindFirstOrThrowArgs>
    ): Prisma__RoundQuestionChoiceDetailClient<
      RoundQuestionChoiceDetailGetPayload<T>
    >;

    /**
     * Find zero or more RoundQuestionChoiceDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionChoiceDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundQuestionChoiceDetails
     * const roundQuestionChoiceDetails = await prisma.roundQuestionChoiceDetail.findMany()
     *
     * // Get first 10 RoundQuestionChoiceDetails
     * const roundQuestionChoiceDetails = await prisma.roundQuestionChoiceDetail.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roundQuestionChoiceDetailWithIdOnly = await prisma.roundQuestionChoiceDetail.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends RoundQuestionChoiceDetailFindManyArgs>(
      args?: SelectSubset<T, RoundQuestionChoiceDetailFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundQuestionChoiceDetailGetPayload<T>>>;

    /**
     * Create a RoundQuestionChoiceDetail.
     * @param {RoundQuestionChoiceDetailCreateArgs} args - Arguments to create a RoundQuestionChoiceDetail.
     * @example
     * // Create one RoundQuestionChoiceDetail
     * const RoundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.create({
     *   data: {
     *     // ... data to create a RoundQuestionChoiceDetail
     *   }
     * })
     *
     **/
    create<T extends RoundQuestionChoiceDetailCreateArgs>(
      args: SelectSubset<T, RoundQuestionChoiceDetailCreateArgs>
    ): Prisma__RoundQuestionChoiceDetailClient<
      RoundQuestionChoiceDetailGetPayload<T>
    >;

    /**
     * Create many RoundQuestionChoiceDetails.
     *     @param {RoundQuestionChoiceDetailCreateManyArgs} args - Arguments to create many RoundQuestionChoiceDetails.
     *     @example
     *     // Create many RoundQuestionChoiceDetails
     *     const roundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends RoundQuestionChoiceDetailCreateManyArgs>(
      args?: SelectSubset<T, RoundQuestionChoiceDetailCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a RoundQuestionChoiceDetail.
     * @param {RoundQuestionChoiceDetailDeleteArgs} args - Arguments to delete one RoundQuestionChoiceDetail.
     * @example
     * // Delete one RoundQuestionChoiceDetail
     * const RoundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.delete({
     *   where: {
     *     // ... filter to delete one RoundQuestionChoiceDetail
     *   }
     * })
     *
     **/
    delete<T extends RoundQuestionChoiceDetailDeleteArgs>(
      args: SelectSubset<T, RoundQuestionChoiceDetailDeleteArgs>
    ): Prisma__RoundQuestionChoiceDetailClient<
      RoundQuestionChoiceDetailGetPayload<T>
    >;

    /**
     * Update one RoundQuestionChoiceDetail.
     * @param {RoundQuestionChoiceDetailUpdateArgs} args - Arguments to update one RoundQuestionChoiceDetail.
     * @example
     * // Update one RoundQuestionChoiceDetail
     * const roundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends RoundQuestionChoiceDetailUpdateArgs>(
      args: SelectSubset<T, RoundQuestionChoiceDetailUpdateArgs>
    ): Prisma__RoundQuestionChoiceDetailClient<
      RoundQuestionChoiceDetailGetPayload<T>
    >;

    /**
     * Delete zero or more RoundQuestionChoiceDetails.
     * @param {RoundQuestionChoiceDetailDeleteManyArgs} args - Arguments to filter RoundQuestionChoiceDetails to delete.
     * @example
     * // Delete a few RoundQuestionChoiceDetails
     * const { count } = await prisma.roundQuestionChoiceDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends RoundQuestionChoiceDetailDeleteManyArgs>(
      args?: SelectSubset<T, RoundQuestionChoiceDetailDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RoundQuestionChoiceDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionChoiceDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundQuestionChoiceDetails
     * const roundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends RoundQuestionChoiceDetailUpdateManyArgs>(
      args: SelectSubset<T, RoundQuestionChoiceDetailUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one RoundQuestionChoiceDetail.
     * @param {RoundQuestionChoiceDetailUpsertArgs} args - Arguments to update or create a RoundQuestionChoiceDetail.
     * @example
     * // Update or create a RoundQuestionChoiceDetail
     * const roundQuestionChoiceDetail = await prisma.roundQuestionChoiceDetail.upsert({
     *   create: {
     *     // ... data to create a RoundQuestionChoiceDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundQuestionChoiceDetail we want to update
     *   }
     * })
     **/
    upsert<T extends RoundQuestionChoiceDetailUpsertArgs>(
      args: SelectSubset<T, RoundQuestionChoiceDetailUpsertArgs>
    ): Prisma__RoundQuestionChoiceDetailClient<
      RoundQuestionChoiceDetailGetPayload<T>
    >;

    /**
     * Count the number of RoundQuestionChoiceDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionChoiceDetailCountArgs} args - Arguments to filter RoundQuestionChoiceDetails to count.
     * @example
     * // Count the number of RoundQuestionChoiceDetails
     * const count = await prisma.roundQuestionChoiceDetail.count({
     *   where: {
     *     // ... the filter for the RoundQuestionChoiceDetails we want to count
     *   }
     * })
     **/
    count<T extends RoundQuestionChoiceDetailCountArgs>(
      args?: Subset<T, RoundQuestionChoiceDetailCountArgs>
    ): Prisma.PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<
              T["select"],
              RoundQuestionChoiceDetailCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RoundQuestionChoiceDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionChoiceDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundQuestionChoiceDetailAggregateArgs>(
      args: Subset<T, RoundQuestionChoiceDetailAggregateArgs>
    ): Prisma.PrismaPromise<GetRoundQuestionChoiceDetailAggregateType<T>>;

    /**
     * Group by RoundQuestionChoiceDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundQuestionChoiceDetailGroupByArgs} args - Group by arguments.
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
      T extends RoundQuestionChoiceDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundQuestionChoiceDetailGroupByArgs["orderBy"] }
        : { orderBy?: RoundQuestionChoiceDetailGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<
        T,
        RoundQuestionChoiceDetailGroupByArgs,
        OrderByArg
      > &
        InputErrors
    ): {} extends InputErrors
      ? GetRoundQuestionChoiceDetailGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundQuestionChoiceDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundQuestionChoiceDetailClient<T, Null = never>
    implements Prisma.PrismaPromise<T>
  {
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
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );

    roundQuiz<T extends RoundQuizArgs = {}>(
      args?: Subset<T, RoundQuizArgs>
    ): Prisma__RoundQuizClient<RoundQuizGetPayload<T> | Null>;

    question<T extends QuestionArgs = {}>(
      args?: Subset<T, QuestionArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

    choice<T extends ChoiceArgs = {}>(
      args?: Subset<T, ChoiceArgs>
    ): Prisma__ChoiceClient<ChoiceGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
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
   * RoundQuestionChoiceDetail base type for findUnique actions
   */
  export type RoundQuestionChoiceDetailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * Filter, which RoundQuestionChoiceDetail to fetch.
     */
    where: RoundQuestionChoiceDetailWhereUniqueInput;
  };

  /**
   * RoundQuestionChoiceDetail findUnique
   */
  export interface RoundQuestionChoiceDetailFindUniqueArgs
    extends RoundQuestionChoiceDetailFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * RoundQuestionChoiceDetail findUniqueOrThrow
   */
  export type RoundQuestionChoiceDetailFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * Filter, which RoundQuestionChoiceDetail to fetch.
     */
    where: RoundQuestionChoiceDetailWhereUniqueInput;
  };

  /**
   * RoundQuestionChoiceDetail base type for findFirst actions
   */
  export type RoundQuestionChoiceDetailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * Filter, which RoundQuestionChoiceDetail to fetch.
     */
    where?: RoundQuestionChoiceDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuestionChoiceDetails to fetch.
     */
    orderBy?: Enumerable<RoundQuestionChoiceDetailOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoundQuestionChoiceDetails.
     */
    cursor?: RoundQuestionChoiceDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuestionChoiceDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuestionChoiceDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoundQuestionChoiceDetails.
     */
    distinct?: Enumerable<RoundQuestionChoiceDetailScalarFieldEnum>;
  };

  /**
   * RoundQuestionChoiceDetail findFirst
   */
  export interface RoundQuestionChoiceDetailFindFirstArgs
    extends RoundQuestionChoiceDetailFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * RoundQuestionChoiceDetail findFirstOrThrow
   */
  export type RoundQuestionChoiceDetailFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * Filter, which RoundQuestionChoiceDetail to fetch.
     */
    where?: RoundQuestionChoiceDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuestionChoiceDetails to fetch.
     */
    orderBy?: Enumerable<RoundQuestionChoiceDetailOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoundQuestionChoiceDetails.
     */
    cursor?: RoundQuestionChoiceDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuestionChoiceDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuestionChoiceDetails.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoundQuestionChoiceDetails.
     */
    distinct?: Enumerable<RoundQuestionChoiceDetailScalarFieldEnum>;
  };

  /**
   * RoundQuestionChoiceDetail findMany
   */
  export type RoundQuestionChoiceDetailFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * Filter, which RoundQuestionChoiceDetails to fetch.
     */
    where?: RoundQuestionChoiceDetailWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoundQuestionChoiceDetails to fetch.
     */
    orderBy?: Enumerable<RoundQuestionChoiceDetailOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RoundQuestionChoiceDetails.
     */
    cursor?: RoundQuestionChoiceDetailWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoundQuestionChoiceDetails from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoundQuestionChoiceDetails.
     */
    skip?: number;
    distinct?: Enumerable<RoundQuestionChoiceDetailScalarFieldEnum>;
  };

  /**
   * RoundQuestionChoiceDetail create
   */
  export type RoundQuestionChoiceDetailCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * The data needed to create a RoundQuestionChoiceDetail.
     */
    data: XOR<
      RoundQuestionChoiceDetailCreateInput,
      RoundQuestionChoiceDetailUncheckedCreateInput
    >;
  };

  /**
   * RoundQuestionChoiceDetail createMany
   */
  export type RoundQuestionChoiceDetailCreateManyArgs = {
    /**
     * The data used to create many RoundQuestionChoiceDetails.
     */
    data: Enumerable<RoundQuestionChoiceDetailCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * RoundQuestionChoiceDetail update
   */
  export type RoundQuestionChoiceDetailUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * The data needed to update a RoundQuestionChoiceDetail.
     */
    data: XOR<
      RoundQuestionChoiceDetailUpdateInput,
      RoundQuestionChoiceDetailUncheckedUpdateInput
    >;
    /**
     * Choose, which RoundQuestionChoiceDetail to update.
     */
    where: RoundQuestionChoiceDetailWhereUniqueInput;
  };

  /**
   * RoundQuestionChoiceDetail updateMany
   */
  export type RoundQuestionChoiceDetailUpdateManyArgs = {
    /**
     * The data used to update RoundQuestionChoiceDetails.
     */
    data: XOR<
      RoundQuestionChoiceDetailUpdateManyMutationInput,
      RoundQuestionChoiceDetailUncheckedUpdateManyInput
    >;
    /**
     * Filter which RoundQuestionChoiceDetails to update
     */
    where?: RoundQuestionChoiceDetailWhereInput;
  };

  /**
   * RoundQuestionChoiceDetail upsert
   */
  export type RoundQuestionChoiceDetailUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * The filter to search for the RoundQuestionChoiceDetail to update in case it exists.
     */
    where: RoundQuestionChoiceDetailWhereUniqueInput;
    /**
     * In case the RoundQuestionChoiceDetail found by the `where` argument doesn't exist, create a new RoundQuestionChoiceDetail with this data.
     */
    create: XOR<
      RoundQuestionChoiceDetailCreateInput,
      RoundQuestionChoiceDetailUncheckedCreateInput
    >;
    /**
     * In case the RoundQuestionChoiceDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      RoundQuestionChoiceDetailUpdateInput,
      RoundQuestionChoiceDetailUncheckedUpdateInput
    >;
  };

  /**
   * RoundQuestionChoiceDetail delete
   */
  export type RoundQuestionChoiceDetailDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
    /**
     * Filter which RoundQuestionChoiceDetail to delete.
     */
    where: RoundQuestionChoiceDetailWhereUniqueInput;
  };

  /**
   * RoundQuestionChoiceDetail deleteMany
   */
  export type RoundQuestionChoiceDetailDeleteManyArgs = {
    /**
     * Filter which RoundQuestionChoiceDetails to delete
     */
    where?: RoundQuestionChoiceDetailWhereInput;
  };

  /**
   * RoundQuestionChoiceDetail without action
   */
  export type RoundQuestionChoiceDetailArgs = {
    /**
     * Select specific fields to fetch from the RoundQuestionChoiceDetail
     */
    select?: RoundQuestionChoiceDetailSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoundQuestionChoiceDetailInclude | null;
  };

  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ChoiceScalarFieldEnum: {
    id: "id";
    choiceName: "choiceName";
    questionId: "questionId";
    createAt: "createAt";
    updateAt: "updateAt";
  };

  export type ChoiceScalarFieldEnum =
    typeof ChoiceScalarFieldEnum[keyof typeof ChoiceScalarFieldEnum];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = typeof QueryMode[keyof typeof QueryMode];

  export const QuestionCategoryScalarFieldEnum: {
    id: "id";
    name: "name";
    createAt: "createAt";
    updateAt: "updateAt";
  };

  export type QuestionCategoryScalarFieldEnum =
    typeof QuestionCategoryScalarFieldEnum[keyof typeof QuestionCategoryScalarFieldEnum];

  export const QuestionScalarFieldEnum: {
    id: "id";
    questionCategoryId: "questionCategoryId";
    textQuestion: "textQuestion";
    answerId: "answerId";
    createAt: "createAt";
    updateAt: "updateAt";
  };

  export type QuestionScalarFieldEnum =
    typeof QuestionScalarFieldEnum[keyof typeof QuestionScalarFieldEnum];

  export const RoundQuestionChoiceDetailScalarFieldEnum: {
    id: "id";
    roundQuizId: "roundQuizId";
    questionId: "questionId";
    choiceId: "choiceId";
    createAt: "createAt";
    updateAt: "updateAt";
  };

  export type RoundQuestionChoiceDetailScalarFieldEnum =
    typeof RoundQuestionChoiceDetailScalarFieldEnum[keyof typeof RoundQuestionChoiceDetailScalarFieldEnum];

  export const RoundQuestionDetailScalarFieldEnum: {
    id: "id";
    roundQuizId: "roundQuizId";
    questionId: "questionId";
    questionOrder: "questionOrder";
    userChoose: "userChoose";
    result: "result";
    createAt: "createAt";
    updateAt: "updateAt";
  };

  export type RoundQuestionDetailScalarFieldEnum =
    typeof RoundQuestionDetailScalarFieldEnum[keyof typeof RoundQuestionDetailScalarFieldEnum];

  export const RoundQuizScalarFieldEnum: {
    id: "id";
    questionCategoryId: "questionCategoryId";
    score: "score";
    userId: "userId";
    createAt: "createAt";
    updateAt: "updateAt";
  };

  export type RoundQuizScalarFieldEnum =
    typeof RoundQuizScalarFieldEnum[keyof typeof RoundQuizScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = typeof SortOrder[keyof typeof SortOrder];

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    typeof TransactionIsolationLevel[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    createAt: "createAt";
    updateAt: "updateAt";
  };

  export type UserScalarFieldEnum =
    typeof UserScalarFieldEnum[keyof typeof UserScalarFieldEnum];

  /**
   * Deep Input Types
   */

  export type QuestionCategoryWhereInput = {
    AND?: Enumerable<QuestionCategoryWhereInput>;
    OR?: Enumerable<QuestionCategoryWhereInput>;
    NOT?: Enumerable<QuestionCategoryWhereInput>;
    id?: IntFilter | number;
    name?: StringFilter | string;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
    Question?: QuestionListRelationFilter;
    RoundQuiz?: RoundQuizListRelationFilter;
  };

  export type QuestionCategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    Question?: QuestionOrderByRelationAggregateInput;
    RoundQuiz?: RoundQuizOrderByRelationAggregateInput;
  };

  export type QuestionCategoryWhereUniqueInput = {
    id?: number;
  };

  export type QuestionCategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    _count?: QuestionCategoryCountOrderByAggregateInput;
    _avg?: QuestionCategoryAvgOrderByAggregateInput;
    _max?: QuestionCategoryMaxOrderByAggregateInput;
    _min?: QuestionCategoryMinOrderByAggregateInput;
    _sum?: QuestionCategorySumOrderByAggregateInput;
  };

  export type QuestionCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionCategoryScalarWhereWithAggregatesInput>;
    OR?: Enumerable<QuestionCategoryScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<QuestionCategoryScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    name?: StringWithAggregatesFilter | string;
    createAt?: DateTimeWithAggregatesFilter | Date | string;
    updateAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type QuestionWhereInput = {
    AND?: Enumerable<QuestionWhereInput>;
    OR?: Enumerable<QuestionWhereInput>;
    NOT?: Enumerable<QuestionWhereInput>;
    id?: IntFilter | number;
    questionCategories?: XOR<
      QuestionCategoryRelationFilter,
      QuestionCategoryWhereInput
    >;
    questionCategoryId?: IntFilter | number;
    textQuestion?: StringFilter | string;
    answer?: XOR<ChoiceRelationFilter, ChoiceWhereInput>;
    answerId?: IntFilter | number;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
    choice?: ChoiceListRelationFilter;
    RoundQuestionDetail?: RoundQuestionDetailListRelationFilter;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailListRelationFilter;
  };

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder;
    questionCategories?: QuestionCategoryOrderByWithRelationInput;
    questionCategoryId?: SortOrder;
    textQuestion?: SortOrder;
    answer?: ChoiceOrderByWithRelationInput;
    answerId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    choice?: ChoiceOrderByRelationAggregateInput;
    RoundQuestionDetail?: RoundQuestionDetailOrderByRelationAggregateInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailOrderByRelationAggregateInput;
  };

  export type QuestionWhereUniqueInput = {
    id?: number;
    answerId?: number;
  };

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    textQuestion?: SortOrder;
    answerId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    _count?: QuestionCountOrderByAggregateInput;
    _avg?: QuestionAvgOrderByAggregateInput;
    _max?: QuestionMaxOrderByAggregateInput;
    _min?: QuestionMinOrderByAggregateInput;
    _sum?: QuestionSumOrderByAggregateInput;
  };

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionScalarWhereWithAggregatesInput>;
    OR?: Enumerable<QuestionScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<QuestionScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    questionCategoryId?: IntWithAggregatesFilter | number;
    textQuestion?: StringWithAggregatesFilter | string;
    answerId?: IntWithAggregatesFilter | number;
    createAt?: DateTimeWithAggregatesFilter | Date | string;
    updateAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type ChoiceWhereInput = {
    AND?: Enumerable<ChoiceWhereInput>;
    OR?: Enumerable<ChoiceWhereInput>;
    NOT?: Enumerable<ChoiceWhereInput>;
    id?: IntFilter | number;
    choiceName?: StringFilter | string;
    question?: XOR<QuestionRelationFilter, QuestionWhereInput> | null;
    questionId?: IntNullableFilter | number | null;
    questionAnswer?: XOR<QuestionRelationFilter, QuestionWhereInput> | null;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailListRelationFilter;
  };

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder;
    choiceName?: SortOrder;
    question?: QuestionOrderByWithRelationInput;
    questionId?: SortOrder;
    questionAnswer?: QuestionOrderByWithRelationInput;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailOrderByRelationAggregateInput;
  };

  export type ChoiceWhereUniqueInput = {
    id?: number;
  };

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder;
    choiceName?: SortOrder;
    questionId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    _count?: ChoiceCountOrderByAggregateInput;
    _avg?: ChoiceAvgOrderByAggregateInput;
    _max?: ChoiceMaxOrderByAggregateInput;
    _min?: ChoiceMinOrderByAggregateInput;
    _sum?: ChoiceSumOrderByAggregateInput;
  };

  export type ChoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChoiceScalarWhereWithAggregatesInput>;
    OR?: Enumerable<ChoiceScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<ChoiceScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    choiceName?: StringWithAggregatesFilter | string;
    questionId?: IntNullableWithAggregatesFilter | number | null;
    createAt?: DateTimeWithAggregatesFilter | Date | string;
    updateAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>;
    OR?: Enumerable<UserWhereInput>;
    NOT?: Enumerable<UserWhereInput>;
    id?: IntFilter | number;
    name?: StringFilter | string;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
    RoundQuiz?: RoundQuizListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    RoundQuiz?: RoundQuizOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = {
    id?: number;
  };

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>;
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    name?: StringWithAggregatesFilter | string;
    createAt?: DateTimeWithAggregatesFilter | Date | string;
    updateAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type RoundQuizWhereInput = {
    AND?: Enumerable<RoundQuizWhereInput>;
    OR?: Enumerable<RoundQuizWhereInput>;
    NOT?: Enumerable<RoundQuizWhereInput>;
    id?: IntFilter | number;
    questionCategories?: XOR<
      QuestionCategoryRelationFilter,
      QuestionCategoryWhereInput
    >;
    questionCategoryId?: IntFilter | number;
    score?: IntFilter | number;
    user?: XOR<UserRelationFilter, UserWhereInput>;
    userId?: IntFilter | number;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailListRelationFilter;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailListRelationFilter;
  };

  export type RoundQuizOrderByWithRelationInput = {
    id?: SortOrder;
    questionCategories?: QuestionCategoryOrderByWithRelationInput;
    questionCategoryId?: SortOrder;
    score?: SortOrder;
    user?: UserOrderByWithRelationInput;
    userId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    RoundQuestionDetail?: RoundQuestionDetailOrderByRelationAggregateInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailOrderByRelationAggregateInput;
  };

  export type RoundQuizWhereUniqueInput = {
    id?: number;
  };

  export type RoundQuizOrderByWithAggregationInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    score?: SortOrder;
    userId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    _count?: RoundQuizCountOrderByAggregateInput;
    _avg?: RoundQuizAvgOrderByAggregateInput;
    _max?: RoundQuizMaxOrderByAggregateInput;
    _min?: RoundQuizMinOrderByAggregateInput;
    _sum?: RoundQuizSumOrderByAggregateInput;
  };

  export type RoundQuizScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundQuizScalarWhereWithAggregatesInput>;
    OR?: Enumerable<RoundQuizScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<RoundQuizScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    questionCategoryId?: IntWithAggregatesFilter | number;
    score?: IntWithAggregatesFilter | number;
    userId?: IntWithAggregatesFilter | number;
    createAt?: DateTimeWithAggregatesFilter | Date | string;
    updateAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type RoundQuestionDetailWhereInput = {
    AND?: Enumerable<RoundQuestionDetailWhereInput>;
    OR?: Enumerable<RoundQuestionDetailWhereInput>;
    NOT?: Enumerable<RoundQuestionDetailWhereInput>;
    id?: IntFilter | number;
    roundQuiz?: XOR<RoundQuizRelationFilter, RoundQuizWhereInput>;
    roundQuizId?: IntFilter | number;
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>;
    questionId?: IntFilter | number;
    questionOrder?: IntFilter | number;
    userChoose?: IntNullableFilter | number | null;
    result?: BoolFilter | boolean;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
  };

  export type RoundQuestionDetailOrderByWithRelationInput = {
    id?: SortOrder;
    roundQuiz?: RoundQuizOrderByWithRelationInput;
    roundQuizId?: SortOrder;
    question?: QuestionOrderByWithRelationInput;
    questionId?: SortOrder;
    questionOrder?: SortOrder;
    userChoose?: SortOrder;
    result?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuestionDetailWhereUniqueInput = {
    id?: number;
  };

  export type RoundQuestionDetailOrderByWithAggregationInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    questionOrder?: SortOrder;
    userChoose?: SortOrder;
    result?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    _count?: RoundQuestionDetailCountOrderByAggregateInput;
    _avg?: RoundQuestionDetailAvgOrderByAggregateInput;
    _max?: RoundQuestionDetailMaxOrderByAggregateInput;
    _min?: RoundQuestionDetailMinOrderByAggregateInput;
    _sum?: RoundQuestionDetailSumOrderByAggregateInput;
  };

  export type RoundQuestionDetailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundQuestionDetailScalarWhereWithAggregatesInput>;
    OR?: Enumerable<RoundQuestionDetailScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<RoundQuestionDetailScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    roundQuizId?: IntWithAggregatesFilter | number;
    questionId?: IntWithAggregatesFilter | number;
    questionOrder?: IntWithAggregatesFilter | number;
    userChoose?: IntNullableWithAggregatesFilter | number | null;
    result?: BoolWithAggregatesFilter | boolean;
    createAt?: DateTimeWithAggregatesFilter | Date | string;
    updateAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type RoundQuestionChoiceDetailWhereInput = {
    AND?: Enumerable<RoundQuestionChoiceDetailWhereInput>;
    OR?: Enumerable<RoundQuestionChoiceDetailWhereInput>;
    NOT?: Enumerable<RoundQuestionChoiceDetailWhereInput>;
    id?: IntFilter | number;
    roundQuiz?: XOR<RoundQuizRelationFilter, RoundQuizWhereInput>;
    roundQuizId?: IntFilter | number;
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>;
    questionId?: IntFilter | number;
    choice?: XOR<ChoiceRelationFilter, ChoiceWhereInput>;
    choiceId?: IntFilter | number;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
  };

  export type RoundQuestionChoiceDetailOrderByWithRelationInput = {
    id?: SortOrder;
    roundQuiz?: RoundQuizOrderByWithRelationInput;
    roundQuizId?: SortOrder;
    question?: QuestionOrderByWithRelationInput;
    questionId?: SortOrder;
    choice?: ChoiceOrderByWithRelationInput;
    choiceId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuestionChoiceDetailWhereUniqueInput = {
    id?: number;
  };

  export type RoundQuestionChoiceDetailOrderByWithAggregationInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    choiceId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
    _count?: RoundQuestionChoiceDetailCountOrderByAggregateInput;
    _avg?: RoundQuestionChoiceDetailAvgOrderByAggregateInput;
    _max?: RoundQuestionChoiceDetailMaxOrderByAggregateInput;
    _min?: RoundQuestionChoiceDetailMinOrderByAggregateInput;
    _sum?: RoundQuestionChoiceDetailSumOrderByAggregateInput;
  };

  export type RoundQuestionChoiceDetailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundQuestionChoiceDetailScalarWhereWithAggregatesInput>;
    OR?: Enumerable<RoundQuestionChoiceDetailScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<RoundQuestionChoiceDetailScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter | number;
    roundQuizId?: IntWithAggregatesFilter | number;
    questionId?: IntWithAggregatesFilter | number;
    choiceId?: IntWithAggregatesFilter | number;
    createAt?: DateTimeWithAggregatesFilter | Date | string;
    updateAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type QuestionCategoryCreateInput = {
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    Question?: QuestionCreateNestedManyWithoutQuestionCategoriesInput;
    RoundQuiz?: RoundQuizCreateNestedManyWithoutQuestionCategoriesInput;
  };

  export type QuestionCategoryUncheckedCreateInput = {
    id?: number;
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    Question?: QuestionUncheckedCreateNestedManyWithoutQuestionCategoriesInput;
    RoundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutQuestionCategoriesInput;
  };

  export type QuestionCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Question?: QuestionUpdateManyWithoutQuestionCategoriesNestedInput;
    RoundQuiz?: RoundQuizUpdateManyWithoutQuestionCategoriesNestedInput;
  };

  export type QuestionCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Question?: QuestionUncheckedUpdateManyWithoutQuestionCategoriesNestedInput;
    RoundQuiz?: RoundQuizUncheckedUpdateManyWithoutQuestionCategoriesNestedInput;
  };

  export type QuestionCategoryCreateManyInput = {
    id?: number;
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type QuestionCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionCreateInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput;
    textQuestion: string;
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceCreateNestedManyWithoutQuestionInput;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateInput = {
    id?: number;
    questionCategoryId: number;
    textQuestion: string;
    answerId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUpdateInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answerId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionCreateManyInput = {
    id?: number;
    questionCategoryId: number;
    textQuestion: string;
    answerId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type QuestionUpdateManyMutationInput = {
    textQuestion?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answerId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChoiceCreateInput = {
    choiceName: string;
    question?: QuestionCreateNestedOneWithoutChoiceInput;
    questionAnswer?: QuestionCreateNestedOneWithoutAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutChoiceInput;
  };

  export type ChoiceUncheckedCreateInput = {
    id?: number;
    choiceName: string;
    questionId?: number | null;
    questionAnswer?: QuestionUncheckedCreateNestedOneWithoutAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutChoiceInput;
  };

  export type ChoiceUpdateInput = {
    choiceName?: StringFieldUpdateOperationsInput | string;
    question?: QuestionUpdateOneWithoutChoiceNestedInput;
    questionAnswer?: QuestionUpdateOneWithoutAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutChoiceNestedInput;
  };

  export type ChoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    choiceName?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableIntFieldUpdateOperationsInput | number | null;
    questionAnswer?: QuestionUncheckedUpdateOneWithoutAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutChoiceNestedInput;
  };

  export type ChoiceCreateManyInput = {
    id?: number;
    choiceName: string;
    questionId?: number | null;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type ChoiceUpdateManyMutationInput = {
    choiceName?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    choiceName?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableIntFieldUpdateOperationsInput | number | null;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateInput = {
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuiz?: RoundQuizCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuiz?: RoundQuizUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuiz?: RoundQuizUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuizCreateInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutRoundQuizInput;
    score: number;
    user: UserCreateNestedOneWithoutRoundQuizInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutRoundQuizInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizUncheckedCreateInput = {
    id?: number;
    questionCategoryId: number;
    score: number;
    userId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutRoundQuizInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizUpdateInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput;
    score?: IntFieldUpdateOperationsInput | number;
    user?: UserUpdateOneRequiredWithoutRoundQuizNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutRoundQuizNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutRoundQuizNestedInput;
  };

  export type RoundQuizUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    score?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutRoundQuizNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuizNestedInput;
  };

  export type RoundQuizCreateManyInput = {
    id?: number;
    questionCategoryId: number;
    score: number;
    userId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuizUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuizUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    score?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailCreateInput = {
    roundQuiz: RoundQuizCreateNestedOneWithoutRoundQuestionDetailInput;
    question: QuestionCreateNestedOneWithoutRoundQuestionDetailInput;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailUncheckedCreateInput = {
    id?: number;
    roundQuizId: number;
    questionId: number;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailUpdateInput = {
    roundQuiz?: RoundQuizUpdateOneRequiredWithoutRoundQuestionDetailNestedInput;
    question?: QuestionUpdateOneRequiredWithoutRoundQuestionDetailNestedInput;
    questionOrder?: IntFieldUpdateOperationsInput | number;
    userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
    result?: BoolFieldUpdateOperationsInput | boolean;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    roundQuizId?: IntFieldUpdateOperationsInput | number;
    questionId?: IntFieldUpdateOperationsInput | number;
    questionOrder?: IntFieldUpdateOperationsInput | number;
    userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
    result?: BoolFieldUpdateOperationsInput | boolean;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailCreateManyInput = {
    id?: number;
    roundQuizId: number;
    questionId: number;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailUpdateManyMutationInput = {
    questionOrder?: IntFieldUpdateOperationsInput | number;
    userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
    result?: BoolFieldUpdateOperationsInput | boolean;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    roundQuizId?: IntFieldUpdateOperationsInput | number;
    questionId?: IntFieldUpdateOperationsInput | number;
    questionOrder?: IntFieldUpdateOperationsInput | number;
    userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
    result?: BoolFieldUpdateOperationsInput | boolean;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailCreateInput = {
    roundQuiz: RoundQuizCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    question: QuestionCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    choice: ChoiceCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedCreateInput = {
    id?: number;
    roundQuizId: number;
    questionId: number;
    choiceId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailUpdateInput = {
    roundQuiz?: RoundQuizUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    question?: QuestionUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    choice?: ChoiceUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    roundQuizId?: IntFieldUpdateOperationsInput | number;
    questionId?: IntFieldUpdateOperationsInput | number;
    choiceId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailCreateManyInput = {
    id?: number;
    roundQuizId: number;
    questionId: number;
    choiceId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    roundQuizId?: IntFieldUpdateOperationsInput | number;
    questionId?: IntFieldUpdateOperationsInput | number;
    choiceId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type StringFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringFilter | string;
  };

  export type DateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput;
    some?: QuestionWhereInput;
    none?: QuestionWhereInput;
  };

  export type RoundQuizListRelationFilter = {
    every?: RoundQuizWhereInput;
    some?: RoundQuizWhereInput;
    none?: RoundQuizWhereInput;
  };

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RoundQuizOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type QuestionCategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type QuestionCategoryAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type QuestionCategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type QuestionCategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type QuestionCategorySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntWithAggregatesFilter | number;
    _count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    _sum?: NestedIntFilter;
    _min?: NestedIntFilter;
    _max?: NestedIntFilter;
  };

  export type StringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    _count?: NestedIntFilter;
    _min?: NestedDateTimeFilter;
    _max?: NestedDateTimeFilter;
  };

  export type QuestionCategoryRelationFilter = {
    is?: QuestionCategoryWhereInput;
    isNot?: QuestionCategoryWhereInput;
  };

  export type ChoiceRelationFilter = {
    is?: ChoiceWhereInput;
    isNot?: ChoiceWhereInput;
  };

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput;
    some?: ChoiceWhereInput;
    none?: ChoiceWhereInput;
  };

  export type RoundQuestionDetailListRelationFilter = {
    every?: RoundQuestionDetailWhereInput;
    some?: RoundQuestionDetailWhereInput;
    none?: RoundQuestionDetailWhereInput;
  };

  export type RoundQuestionChoiceDetailListRelationFilter = {
    every?: RoundQuestionChoiceDetailWhereInput;
    some?: RoundQuestionChoiceDetailWhereInput;
    none?: RoundQuestionChoiceDetailWhereInput;
  };

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RoundQuestionDetailOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RoundQuestionChoiceDetailOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    textQuestion?: SortOrder;
    answerId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    answerId?: SortOrder;
  };

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    textQuestion?: SortOrder;
    answerId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    textQuestion?: SortOrder;
    answerId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    answerId?: SortOrder;
  };

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput;
    isNot?: QuestionWhereInput;
  };

  export type IntNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | null;
    notIn?: Enumerable<number> | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableFilter | number | null;
  };

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder;
    choiceName?: SortOrder;
    questionId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type ChoiceAvgOrderByAggregateInput = {
    id?: SortOrder;
    questionId?: SortOrder;
  };

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder;
    choiceName?: SortOrder;
    questionId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder;
    choiceName?: SortOrder;
    questionId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type ChoiceSumOrderByAggregateInput = {
    id?: SortOrder;
    questionId?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null;
    in?: Enumerable<number> | null;
    notIn?: Enumerable<number> | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableWithAggregatesFilter | number | null;
    _count?: NestedIntNullableFilter;
    _avg?: NestedFloatNullableFilter;
    _sum?: NestedIntNullableFilter;
    _min?: NestedIntNullableFilter;
    _max?: NestedIntNullableFilter;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type RoundQuizCountOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    score?: SortOrder;
    userId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuizAvgOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    score?: SortOrder;
    userId?: SortOrder;
  };

  export type RoundQuizMaxOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    score?: SortOrder;
    userId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuizMinOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    score?: SortOrder;
    userId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuizSumOrderByAggregateInput = {
    id?: SortOrder;
    questionCategoryId?: SortOrder;
    score?: SortOrder;
    userId?: SortOrder;
  };

  export type RoundQuizRelationFilter = {
    is?: RoundQuizWhereInput;
    isNot?: RoundQuizWhereInput;
  };

  export type BoolFilter = {
    equals?: boolean;
    not?: NestedBoolFilter | boolean;
  };

  export type RoundQuestionDetailCountOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    questionOrder?: SortOrder;
    userChoose?: SortOrder;
    result?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuestionDetailAvgOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    questionOrder?: SortOrder;
    userChoose?: SortOrder;
  };

  export type RoundQuestionDetailMaxOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    questionOrder?: SortOrder;
    userChoose?: SortOrder;
    result?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuestionDetailMinOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    questionOrder?: SortOrder;
    userChoose?: SortOrder;
    result?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuestionDetailSumOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    questionOrder?: SortOrder;
    userChoose?: SortOrder;
  };

  export type BoolWithAggregatesFilter = {
    equals?: boolean;
    not?: NestedBoolWithAggregatesFilter | boolean;
    _count?: NestedIntFilter;
    _min?: NestedBoolFilter;
    _max?: NestedBoolFilter;
  };

  export type RoundQuestionChoiceDetailCountOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    choiceId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuestionChoiceDetailAvgOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    choiceId?: SortOrder;
  };

  export type RoundQuestionChoiceDetailMaxOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    choiceId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuestionChoiceDetailMinOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    choiceId?: SortOrder;
    createAt?: SortOrder;
    updateAt?: SortOrder;
  };

  export type RoundQuestionChoiceDetailSumOrderByAggregateInput = {
    id?: SortOrder;
    roundQuizId?: SortOrder;
    questionId?: SortOrder;
    choiceId?: SortOrder;
  };

  export type QuestionCreateNestedManyWithoutQuestionCategoriesInput = {
    create?: XOR<
      Enumerable<QuestionCreateWithoutQuestionCategoriesInput>,
      Enumerable<QuestionUncheckedCreateWithoutQuestionCategoriesInput>
    >;
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutQuestionCategoriesInput>;
    createMany?: QuestionCreateManyQuestionCategoriesInputEnvelope;
    connect?: Enumerable<QuestionWhereUniqueInput>;
  };

  export type RoundQuizCreateNestedManyWithoutQuestionCategoriesInput = {
    create?: XOR<
      Enumerable<RoundQuizCreateWithoutQuestionCategoriesInput>,
      Enumerable<RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>
    >;
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuestionCategoriesInput>;
    createMany?: RoundQuizCreateManyQuestionCategoriesInputEnvelope;
    connect?: Enumerable<RoundQuizWhereUniqueInput>;
  };

  export type QuestionUncheckedCreateNestedManyWithoutQuestionCategoriesInput =
    {
      create?: XOR<
        Enumerable<QuestionCreateWithoutQuestionCategoriesInput>,
        Enumerable<QuestionUncheckedCreateWithoutQuestionCategoriesInput>
      >;
      connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutQuestionCategoriesInput>;
      createMany?: QuestionCreateManyQuestionCategoriesInputEnvelope;
      connect?: Enumerable<QuestionWhereUniqueInput>;
    };

  export type RoundQuizUncheckedCreateNestedManyWithoutQuestionCategoriesInput =
    {
      create?: XOR<
        Enumerable<RoundQuizCreateWithoutQuestionCategoriesInput>,
        Enumerable<RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>
      >;
      connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuestionCategoriesInput>;
      createMany?: RoundQuizCreateManyQuestionCategoriesInputEnvelope;
      connect?: Enumerable<RoundQuizWhereUniqueInput>;
    };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type QuestionUpdateManyWithoutQuestionCategoriesNestedInput = {
    create?: XOR<
      Enumerable<QuestionCreateWithoutQuestionCategoriesInput>,
      Enumerable<QuestionUncheckedCreateWithoutQuestionCategoriesInput>
    >;
    connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutQuestionCategoriesInput>;
    upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutQuestionCategoriesInput>;
    createMany?: QuestionCreateManyQuestionCategoriesInputEnvelope;
    set?: Enumerable<QuestionWhereUniqueInput>;
    disconnect?: Enumerable<QuestionWhereUniqueInput>;
    delete?: Enumerable<QuestionWhereUniqueInput>;
    connect?: Enumerable<QuestionWhereUniqueInput>;
    update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutQuestionCategoriesInput>;
    updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutQuestionCategoriesInput>;
    deleteMany?: Enumerable<QuestionScalarWhereInput>;
  };

  export type RoundQuizUpdateManyWithoutQuestionCategoriesNestedInput = {
    create?: XOR<
      Enumerable<RoundQuizCreateWithoutQuestionCategoriesInput>,
      Enumerable<RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>
    >;
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuestionCategoriesInput>;
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutQuestionCategoriesInput>;
    createMany?: RoundQuizCreateManyQuestionCategoriesInputEnvelope;
    set?: Enumerable<RoundQuizWhereUniqueInput>;
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>;
    delete?: Enumerable<RoundQuizWhereUniqueInput>;
    connect?: Enumerable<RoundQuizWhereUniqueInput>;
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutQuestionCategoriesInput>;
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutQuestionCategoriesInput>;
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type QuestionUncheckedUpdateManyWithoutQuestionCategoriesNestedInput =
    {
      create?: XOR<
        Enumerable<QuestionCreateWithoutQuestionCategoriesInput>,
        Enumerable<QuestionUncheckedCreateWithoutQuestionCategoriesInput>
      >;
      connectOrCreate?: Enumerable<QuestionCreateOrConnectWithoutQuestionCategoriesInput>;
      upsert?: Enumerable<QuestionUpsertWithWhereUniqueWithoutQuestionCategoriesInput>;
      createMany?: QuestionCreateManyQuestionCategoriesInputEnvelope;
      set?: Enumerable<QuestionWhereUniqueInput>;
      disconnect?: Enumerable<QuestionWhereUniqueInput>;
      delete?: Enumerable<QuestionWhereUniqueInput>;
      connect?: Enumerable<QuestionWhereUniqueInput>;
      update?: Enumerable<QuestionUpdateWithWhereUniqueWithoutQuestionCategoriesInput>;
      updateMany?: Enumerable<QuestionUpdateManyWithWhereWithoutQuestionCategoriesInput>;
      deleteMany?: Enumerable<QuestionScalarWhereInput>;
    };

  export type RoundQuizUncheckedUpdateManyWithoutQuestionCategoriesNestedInput =
    {
      create?: XOR<
        Enumerable<RoundQuizCreateWithoutQuestionCategoriesInput>,
        Enumerable<RoundQuizUncheckedCreateWithoutQuestionCategoriesInput>
      >;
      connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutQuestionCategoriesInput>;
      upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutQuestionCategoriesInput>;
      createMany?: RoundQuizCreateManyQuestionCategoriesInputEnvelope;
      set?: Enumerable<RoundQuizWhereUniqueInput>;
      disconnect?: Enumerable<RoundQuizWhereUniqueInput>;
      delete?: Enumerable<RoundQuizWhereUniqueInput>;
      connect?: Enumerable<RoundQuizWhereUniqueInput>;
      update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutQuestionCategoriesInput>;
      updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutQuestionCategoriesInput>;
      deleteMany?: Enumerable<RoundQuizScalarWhereInput>;
    };

  export type QuestionCategoryCreateNestedOneWithoutQuestionInput = {
    create?: XOR<
      QuestionCategoryCreateWithoutQuestionInput,
      QuestionCategoryUncheckedCreateWithoutQuestionInput
    >;
    connectOrCreate?: QuestionCategoryCreateOrConnectWithoutQuestionInput;
    connect?: QuestionCategoryWhereUniqueInput;
  };

  export type ChoiceCreateNestedOneWithoutQuestionAnswerInput = {
    create?: XOR<
      ChoiceCreateWithoutQuestionAnswerInput,
      ChoiceUncheckedCreateWithoutQuestionAnswerInput
    >;
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionAnswerInput;
    connect?: ChoiceWhereUniqueInput;
  };

  export type ChoiceCreateNestedManyWithoutQuestionInput = {
    create?: XOR<
      Enumerable<ChoiceCreateWithoutQuestionInput>,
      Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>
    >;
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>;
    createMany?: ChoiceCreateManyQuestionInputEnvelope;
    connect?: Enumerable<ChoiceWhereUniqueInput>;
  };

  export type RoundQuestionDetailCreateNestedManyWithoutQuestionInput = {
    create?: XOR<
      Enumerable<RoundQuestionDetailCreateWithoutQuestionInput>,
      Enumerable<RoundQuestionDetailUncheckedCreateWithoutQuestionInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionDetailCreateOrConnectWithoutQuestionInput>;
    createMany?: RoundQuestionDetailCreateManyQuestionInputEnvelope;
    connect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
  };

  export type RoundQuestionChoiceDetailCreateNestedManyWithoutQuestionInput = {
    create?: XOR<
      Enumerable<RoundQuestionChoiceDetailCreateWithoutQuestionInput>,
      Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutQuestionInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutQuestionInput>;
    createMany?: RoundQuestionChoiceDetailCreateManyQuestionInputEnvelope;
    connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
  };

  export type ChoiceUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<
      Enumerable<ChoiceCreateWithoutQuestionInput>,
      Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>
    >;
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>;
    createMany?: ChoiceCreateManyQuestionInputEnvelope;
    connect?: Enumerable<ChoiceWhereUniqueInput>;
  };

  export type RoundQuestionDetailUncheckedCreateNestedManyWithoutQuestionInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionDetailCreateWithoutQuestionInput>,
        Enumerable<RoundQuestionDetailUncheckedCreateWithoutQuestionInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionDetailCreateOrConnectWithoutQuestionInput>;
      createMany?: RoundQuestionDetailCreateManyQuestionInputEnvelope;
      connect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    };

  export type RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutQuestionInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionChoiceDetailCreateWithoutQuestionInput>,
        Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutQuestionInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutQuestionInput>;
      createMany?: RoundQuestionChoiceDetailCreateManyQuestionInputEnvelope;
      connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    };

  export type QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput = {
    create?: XOR<
      QuestionCategoryCreateWithoutQuestionInput,
      QuestionCategoryUncheckedCreateWithoutQuestionInput
    >;
    connectOrCreate?: QuestionCategoryCreateOrConnectWithoutQuestionInput;
    upsert?: QuestionCategoryUpsertWithoutQuestionInput;
    connect?: QuestionCategoryWhereUniqueInput;
    update?: XOR<
      QuestionCategoryUpdateWithoutQuestionInput,
      QuestionCategoryUncheckedUpdateWithoutQuestionInput
    >;
  };

  export type ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput = {
    create?: XOR<
      ChoiceCreateWithoutQuestionAnswerInput,
      ChoiceUncheckedCreateWithoutQuestionAnswerInput
    >;
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionAnswerInput;
    upsert?: ChoiceUpsertWithoutQuestionAnswerInput;
    connect?: ChoiceWhereUniqueInput;
    update?: XOR<
      ChoiceUpdateWithoutQuestionAnswerInput,
      ChoiceUncheckedUpdateWithoutQuestionAnswerInput
    >;
  };

  export type ChoiceUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<
      Enumerable<ChoiceCreateWithoutQuestionInput>,
      Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>
    >;
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>;
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutQuestionInput>;
    createMany?: ChoiceCreateManyQuestionInputEnvelope;
    set?: Enumerable<ChoiceWhereUniqueInput>;
    disconnect?: Enumerable<ChoiceWhereUniqueInput>;
    delete?: Enumerable<ChoiceWhereUniqueInput>;
    connect?: Enumerable<ChoiceWhereUniqueInput>;
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutQuestionInput>;
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutQuestionInput>;
    deleteMany?: Enumerable<ChoiceScalarWhereInput>;
  };

  export type RoundQuestionDetailUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<
      Enumerable<RoundQuestionDetailCreateWithoutQuestionInput>,
      Enumerable<RoundQuestionDetailUncheckedCreateWithoutQuestionInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionDetailCreateOrConnectWithoutQuestionInput>;
    upsert?: Enumerable<RoundQuestionDetailUpsertWithWhereUniqueWithoutQuestionInput>;
    createMany?: RoundQuestionDetailCreateManyQuestionInputEnvelope;
    set?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    disconnect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    delete?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    connect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    update?: Enumerable<RoundQuestionDetailUpdateWithWhereUniqueWithoutQuestionInput>;
    updateMany?: Enumerable<RoundQuestionDetailUpdateManyWithWhereWithoutQuestionInput>;
    deleteMany?: Enumerable<RoundQuestionDetailScalarWhereInput>;
  };

  export type RoundQuestionChoiceDetailUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<
      Enumerable<RoundQuestionChoiceDetailCreateWithoutQuestionInput>,
      Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutQuestionInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutQuestionInput>;
    upsert?: Enumerable<RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutQuestionInput>;
    createMany?: RoundQuestionChoiceDetailCreateManyQuestionInputEnvelope;
    set?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    disconnect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    delete?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    update?: Enumerable<RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutQuestionInput>;
    updateMany?: Enumerable<RoundQuestionChoiceDetailUpdateManyWithWhereWithoutQuestionInput>;
    deleteMany?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
  };

  export type ChoiceUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<
      Enumerable<ChoiceCreateWithoutQuestionInput>,
      Enumerable<ChoiceUncheckedCreateWithoutQuestionInput>
    >;
    connectOrCreate?: Enumerable<ChoiceCreateOrConnectWithoutQuestionInput>;
    upsert?: Enumerable<ChoiceUpsertWithWhereUniqueWithoutQuestionInput>;
    createMany?: ChoiceCreateManyQuestionInputEnvelope;
    set?: Enumerable<ChoiceWhereUniqueInput>;
    disconnect?: Enumerable<ChoiceWhereUniqueInput>;
    delete?: Enumerable<ChoiceWhereUniqueInput>;
    connect?: Enumerable<ChoiceWhereUniqueInput>;
    update?: Enumerable<ChoiceUpdateWithWhereUniqueWithoutQuestionInput>;
    updateMany?: Enumerable<ChoiceUpdateManyWithWhereWithoutQuestionInput>;
    deleteMany?: Enumerable<ChoiceScalarWhereInput>;
  };

  export type RoundQuestionDetailUncheckedUpdateManyWithoutQuestionNestedInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionDetailCreateWithoutQuestionInput>,
        Enumerable<RoundQuestionDetailUncheckedCreateWithoutQuestionInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionDetailCreateOrConnectWithoutQuestionInput>;
      upsert?: Enumerable<RoundQuestionDetailUpsertWithWhereUniqueWithoutQuestionInput>;
      createMany?: RoundQuestionDetailCreateManyQuestionInputEnvelope;
      set?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
      disconnect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
      delete?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
      connect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
      update?: Enumerable<RoundQuestionDetailUpdateWithWhereUniqueWithoutQuestionInput>;
      updateMany?: Enumerable<RoundQuestionDetailUpdateManyWithWhereWithoutQuestionInput>;
      deleteMany?: Enumerable<RoundQuestionDetailScalarWhereInput>;
    };

  export type RoundQuestionChoiceDetailUncheckedUpdateManyWithoutQuestionNestedInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionChoiceDetailCreateWithoutQuestionInput>,
        Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutQuestionInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutQuestionInput>;
      upsert?: Enumerable<RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutQuestionInput>;
      createMany?: RoundQuestionChoiceDetailCreateManyQuestionInputEnvelope;
      set?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      disconnect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      delete?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      update?: Enumerable<RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutQuestionInput>;
      updateMany?: Enumerable<RoundQuestionChoiceDetailUpdateManyWithWhereWithoutQuestionInput>;
      deleteMany?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
    };

  export type QuestionCreateNestedOneWithoutChoiceInput = {
    create?: XOR<
      QuestionCreateWithoutChoiceInput,
      QuestionUncheckedCreateWithoutChoiceInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutChoiceInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type QuestionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<
      QuestionCreateWithoutAnswerInput,
      QuestionUncheckedCreateWithoutAnswerInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type RoundQuestionChoiceDetailCreateNestedManyWithoutChoiceInput = {
    create?: XOR<
      Enumerable<RoundQuestionChoiceDetailCreateWithoutChoiceInput>,
      Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutChoiceInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutChoiceInput>;
    createMany?: RoundQuestionChoiceDetailCreateManyChoiceInputEnvelope;
    connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
  };

  export type QuestionUncheckedCreateNestedOneWithoutAnswerInput = {
    create?: XOR<
      QuestionCreateWithoutAnswerInput,
      QuestionUncheckedCreateWithoutAnswerInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutChoiceInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionChoiceDetailCreateWithoutChoiceInput>,
        Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutChoiceInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutChoiceInput>;
      createMany?: RoundQuestionChoiceDetailCreateManyChoiceInputEnvelope;
      connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    };

  export type QuestionUpdateOneWithoutChoiceNestedInput = {
    create?: XOR<
      QuestionCreateWithoutChoiceInput,
      QuestionUncheckedCreateWithoutChoiceInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutChoiceInput;
    upsert?: QuestionUpsertWithoutChoiceInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      QuestionUpdateWithoutChoiceInput,
      QuestionUncheckedUpdateWithoutChoiceInput
    >;
  };

  export type QuestionUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<
      QuestionCreateWithoutAnswerInput,
      QuestionUncheckedCreateWithoutAnswerInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput;
    upsert?: QuestionUpsertWithoutAnswerInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      QuestionUpdateWithoutAnswerInput,
      QuestionUncheckedUpdateWithoutAnswerInput
    >;
  };

  export type RoundQuestionChoiceDetailUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<
      Enumerable<RoundQuestionChoiceDetailCreateWithoutChoiceInput>,
      Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutChoiceInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutChoiceInput>;
    upsert?: Enumerable<RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutChoiceInput>;
    createMany?: RoundQuestionChoiceDetailCreateManyChoiceInputEnvelope;
    set?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    disconnect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    delete?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    update?: Enumerable<RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutChoiceInput>;
    updateMany?: Enumerable<RoundQuestionChoiceDetailUpdateManyWithWhereWithoutChoiceInput>;
    deleteMany?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type QuestionUncheckedUpdateOneWithoutAnswerNestedInput = {
    create?: XOR<
      QuestionCreateWithoutAnswerInput,
      QuestionUncheckedCreateWithoutAnswerInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput;
    upsert?: QuestionUpsertWithoutAnswerInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      QuestionUpdateWithoutAnswerInput,
      QuestionUncheckedUpdateWithoutAnswerInput
    >;
  };

  export type RoundQuestionChoiceDetailUncheckedUpdateManyWithoutChoiceNestedInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionChoiceDetailCreateWithoutChoiceInput>,
        Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutChoiceInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutChoiceInput>;
      upsert?: Enumerable<RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutChoiceInput>;
      createMany?: RoundQuestionChoiceDetailCreateManyChoiceInputEnvelope;
      set?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      disconnect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      delete?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      update?: Enumerable<RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutChoiceInput>;
      updateMany?: Enumerable<RoundQuestionChoiceDetailUpdateManyWithWhereWithoutChoiceInput>;
      deleteMany?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
    };

  export type RoundQuizCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<RoundQuizCreateWithoutUserInput>,
      Enumerable<RoundQuizUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutUserInput>;
    createMany?: RoundQuizCreateManyUserInputEnvelope;
    connect?: Enumerable<RoundQuizWhereUniqueInput>;
  };

  export type RoundQuizUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<RoundQuizCreateWithoutUserInput>,
      Enumerable<RoundQuizUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutUserInput>;
    createMany?: RoundQuizCreateManyUserInputEnvelope;
    connect?: Enumerable<RoundQuizWhereUniqueInput>;
  };

  export type RoundQuizUpdateManyWithoutUserNestedInput = {
    create?: XOR<
      Enumerable<RoundQuizCreateWithoutUserInput>,
      Enumerable<RoundQuizUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutUserInput>;
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: RoundQuizCreateManyUserInputEnvelope;
    set?: Enumerable<RoundQuizWhereUniqueInput>;
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>;
    delete?: Enumerable<RoundQuizWhereUniqueInput>;
    connect?: Enumerable<RoundQuizWhereUniqueInput>;
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>;
  };

  export type RoundQuizUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<
      Enumerable<RoundQuizCreateWithoutUserInput>,
      Enumerable<RoundQuizUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<RoundQuizCreateOrConnectWithoutUserInput>;
    upsert?: Enumerable<RoundQuizUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: RoundQuizCreateManyUserInputEnvelope;
    set?: Enumerable<RoundQuizWhereUniqueInput>;
    disconnect?: Enumerable<RoundQuizWhereUniqueInput>;
    delete?: Enumerable<RoundQuizWhereUniqueInput>;
    connect?: Enumerable<RoundQuizWhereUniqueInput>;
    update?: Enumerable<RoundQuizUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Enumerable<RoundQuizUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Enumerable<RoundQuizScalarWhereInput>;
  };

  export type QuestionCategoryCreateNestedOneWithoutRoundQuizInput = {
    create?: XOR<
      QuestionCategoryCreateWithoutRoundQuizInput,
      QuestionCategoryUncheckedCreateWithoutRoundQuizInput
    >;
    connectOrCreate?: QuestionCategoryCreateOrConnectWithoutRoundQuizInput;
    connect?: QuestionCategoryWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutRoundQuizInput = {
    create?: XOR<
      UserCreateWithoutRoundQuizInput,
      UserUncheckedCreateWithoutRoundQuizInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRoundQuizInput;
    connect?: UserWhereUniqueInput;
  };

  export type RoundQuestionDetailCreateNestedManyWithoutRoundQuizInput = {
    create?: XOR<
      Enumerable<RoundQuestionDetailCreateWithoutRoundQuizInput>,
      Enumerable<RoundQuestionDetailUncheckedCreateWithoutRoundQuizInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionDetailCreateOrConnectWithoutRoundQuizInput>;
    createMany?: RoundQuestionDetailCreateManyRoundQuizInputEnvelope;
    connect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
  };

  export type RoundQuestionChoiceDetailCreateNestedManyWithoutRoundQuizInput = {
    create?: XOR<
      Enumerable<RoundQuestionChoiceDetailCreateWithoutRoundQuizInput>,
      Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutRoundQuizInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutRoundQuizInput>;
    createMany?: RoundQuestionChoiceDetailCreateManyRoundQuizInputEnvelope;
    connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
  };

  export type RoundQuestionDetailUncheckedCreateNestedManyWithoutRoundQuizInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionDetailCreateWithoutRoundQuizInput>,
        Enumerable<RoundQuestionDetailUncheckedCreateWithoutRoundQuizInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionDetailCreateOrConnectWithoutRoundQuizInput>;
      createMany?: RoundQuestionDetailCreateManyRoundQuizInputEnvelope;
      connect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    };

  export type RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutRoundQuizInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionChoiceDetailCreateWithoutRoundQuizInput>,
        Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutRoundQuizInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutRoundQuizInput>;
      createMany?: RoundQuestionChoiceDetailCreateManyRoundQuizInputEnvelope;
      connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    };

  export type QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput = {
    create?: XOR<
      QuestionCategoryCreateWithoutRoundQuizInput,
      QuestionCategoryUncheckedCreateWithoutRoundQuizInput
    >;
    connectOrCreate?: QuestionCategoryCreateOrConnectWithoutRoundQuizInput;
    upsert?: QuestionCategoryUpsertWithoutRoundQuizInput;
    connect?: QuestionCategoryWhereUniqueInput;
    update?: XOR<
      QuestionCategoryUpdateWithoutRoundQuizInput,
      QuestionCategoryUncheckedUpdateWithoutRoundQuizInput
    >;
  };

  export type UserUpdateOneRequiredWithoutRoundQuizNestedInput = {
    create?: XOR<
      UserCreateWithoutRoundQuizInput,
      UserUncheckedCreateWithoutRoundQuizInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRoundQuizInput;
    upsert?: UserUpsertWithoutRoundQuizInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      UserUpdateWithoutRoundQuizInput,
      UserUncheckedUpdateWithoutRoundQuizInput
    >;
  };

  export type RoundQuestionDetailUpdateManyWithoutRoundQuizNestedInput = {
    create?: XOR<
      Enumerable<RoundQuestionDetailCreateWithoutRoundQuizInput>,
      Enumerable<RoundQuestionDetailUncheckedCreateWithoutRoundQuizInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionDetailCreateOrConnectWithoutRoundQuizInput>;
    upsert?: Enumerable<RoundQuestionDetailUpsertWithWhereUniqueWithoutRoundQuizInput>;
    createMany?: RoundQuestionDetailCreateManyRoundQuizInputEnvelope;
    set?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    disconnect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    delete?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    connect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
    update?: Enumerable<RoundQuestionDetailUpdateWithWhereUniqueWithoutRoundQuizInput>;
    updateMany?: Enumerable<RoundQuestionDetailUpdateManyWithWhereWithoutRoundQuizInput>;
    deleteMany?: Enumerable<RoundQuestionDetailScalarWhereInput>;
  };

  export type RoundQuestionChoiceDetailUpdateManyWithoutRoundQuizNestedInput = {
    create?: XOR<
      Enumerable<RoundQuestionChoiceDetailCreateWithoutRoundQuizInput>,
      Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutRoundQuizInput>
    >;
    connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutRoundQuizInput>;
    upsert?: Enumerable<RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutRoundQuizInput>;
    createMany?: RoundQuestionChoiceDetailCreateManyRoundQuizInputEnvelope;
    set?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    disconnect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    delete?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
    update?: Enumerable<RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutRoundQuizInput>;
    updateMany?: Enumerable<RoundQuestionChoiceDetailUpdateManyWithWhereWithoutRoundQuizInput>;
    deleteMany?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
  };

  export type RoundQuestionDetailUncheckedUpdateManyWithoutRoundQuizNestedInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionDetailCreateWithoutRoundQuizInput>,
        Enumerable<RoundQuestionDetailUncheckedCreateWithoutRoundQuizInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionDetailCreateOrConnectWithoutRoundQuizInput>;
      upsert?: Enumerable<RoundQuestionDetailUpsertWithWhereUniqueWithoutRoundQuizInput>;
      createMany?: RoundQuestionDetailCreateManyRoundQuizInputEnvelope;
      set?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
      disconnect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
      delete?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
      connect?: Enumerable<RoundQuestionDetailWhereUniqueInput>;
      update?: Enumerable<RoundQuestionDetailUpdateWithWhereUniqueWithoutRoundQuizInput>;
      updateMany?: Enumerable<RoundQuestionDetailUpdateManyWithWhereWithoutRoundQuizInput>;
      deleteMany?: Enumerable<RoundQuestionDetailScalarWhereInput>;
    };

  export type RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuizNestedInput =
    {
      create?: XOR<
        Enumerable<RoundQuestionChoiceDetailCreateWithoutRoundQuizInput>,
        Enumerable<RoundQuestionChoiceDetailUncheckedCreateWithoutRoundQuizInput>
      >;
      connectOrCreate?: Enumerable<RoundQuestionChoiceDetailCreateOrConnectWithoutRoundQuizInput>;
      upsert?: Enumerable<RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutRoundQuizInput>;
      createMany?: RoundQuestionChoiceDetailCreateManyRoundQuizInputEnvelope;
      set?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      disconnect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      delete?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      connect?: Enumerable<RoundQuestionChoiceDetailWhereUniqueInput>;
      update?: Enumerable<RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutRoundQuizInput>;
      updateMany?: Enumerable<RoundQuestionChoiceDetailUpdateManyWithWhereWithoutRoundQuizInput>;
      deleteMany?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
    };

  export type RoundQuizCreateNestedOneWithoutRoundQuestionDetailInput = {
    create?: XOR<
      RoundQuizCreateWithoutRoundQuestionDetailInput,
      RoundQuizUncheckedCreateWithoutRoundQuestionDetailInput
    >;
    connectOrCreate?: RoundQuizCreateOrConnectWithoutRoundQuestionDetailInput;
    connect?: RoundQuizWhereUniqueInput;
  };

  export type QuestionCreateNestedOneWithoutRoundQuestionDetailInput = {
    create?: XOR<
      QuestionCreateWithoutRoundQuestionDetailInput,
      QuestionUncheckedCreateWithoutRoundQuestionDetailInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutRoundQuestionDetailInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type RoundQuizUpdateOneRequiredWithoutRoundQuestionDetailNestedInput =
    {
      create?: XOR<
        RoundQuizCreateWithoutRoundQuestionDetailInput,
        RoundQuizUncheckedCreateWithoutRoundQuestionDetailInput
      >;
      connectOrCreate?: RoundQuizCreateOrConnectWithoutRoundQuestionDetailInput;
      upsert?: RoundQuizUpsertWithoutRoundQuestionDetailInput;
      connect?: RoundQuizWhereUniqueInput;
      update?: XOR<
        RoundQuizUpdateWithoutRoundQuestionDetailInput,
        RoundQuizUncheckedUpdateWithoutRoundQuestionDetailInput
      >;
    };

  export type QuestionUpdateOneRequiredWithoutRoundQuestionDetailNestedInput = {
    create?: XOR<
      QuestionCreateWithoutRoundQuestionDetailInput,
      QuestionUncheckedCreateWithoutRoundQuestionDetailInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutRoundQuestionDetailInput;
    upsert?: QuestionUpsertWithoutRoundQuestionDetailInput;
    connect?: QuestionWhereUniqueInput;
    update?: XOR<
      QuestionUpdateWithoutRoundQuestionDetailInput,
      QuestionUncheckedUpdateWithoutRoundQuestionDetailInput
    >;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type RoundQuizCreateNestedOneWithoutRoundQuestionChoiceDetailInput = {
    create?: XOR<
      RoundQuizCreateWithoutRoundQuestionChoiceDetailInput,
      RoundQuizUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
    connectOrCreate?: RoundQuizCreateOrConnectWithoutRoundQuestionChoiceDetailInput;
    connect?: RoundQuizWhereUniqueInput;
  };

  export type QuestionCreateNestedOneWithoutRoundQuestionChoiceDetailInput = {
    create?: XOR<
      QuestionCreateWithoutRoundQuestionChoiceDetailInput,
      QuestionUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
    connectOrCreate?: QuestionCreateOrConnectWithoutRoundQuestionChoiceDetailInput;
    connect?: QuestionWhereUniqueInput;
  };

  export type ChoiceCreateNestedOneWithoutRoundQuestionChoiceDetailInput = {
    create?: XOR<
      ChoiceCreateWithoutRoundQuestionChoiceDetailInput,
      ChoiceUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
    connectOrCreate?: ChoiceCreateOrConnectWithoutRoundQuestionChoiceDetailInput;
    connect?: ChoiceWhereUniqueInput;
  };

  export type RoundQuizUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput =
    {
      create?: XOR<
        RoundQuizCreateWithoutRoundQuestionChoiceDetailInput,
        RoundQuizUncheckedCreateWithoutRoundQuestionChoiceDetailInput
      >;
      connectOrCreate?: RoundQuizCreateOrConnectWithoutRoundQuestionChoiceDetailInput;
      upsert?: RoundQuizUpsertWithoutRoundQuestionChoiceDetailInput;
      connect?: RoundQuizWhereUniqueInput;
      update?: XOR<
        RoundQuizUpdateWithoutRoundQuestionChoiceDetailInput,
        RoundQuizUncheckedUpdateWithoutRoundQuestionChoiceDetailInput
      >;
    };

  export type QuestionUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput =
    {
      create?: XOR<
        QuestionCreateWithoutRoundQuestionChoiceDetailInput,
        QuestionUncheckedCreateWithoutRoundQuestionChoiceDetailInput
      >;
      connectOrCreate?: QuestionCreateOrConnectWithoutRoundQuestionChoiceDetailInput;
      upsert?: QuestionUpsertWithoutRoundQuestionChoiceDetailInput;
      connect?: QuestionWhereUniqueInput;
      update?: XOR<
        QuestionUpdateWithoutRoundQuestionChoiceDetailInput,
        QuestionUncheckedUpdateWithoutRoundQuestionChoiceDetailInput
      >;
    };

  export type ChoiceUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput =
    {
      create?: XOR<
        ChoiceCreateWithoutRoundQuestionChoiceDetailInput,
        ChoiceUncheckedCreateWithoutRoundQuestionChoiceDetailInput
      >;
      connectOrCreate?: ChoiceCreateOrConnectWithoutRoundQuestionChoiceDetailInput;
      upsert?: ChoiceUpsertWithoutRoundQuestionChoiceDetailInput;
      connect?: ChoiceWhereUniqueInput;
      update?: XOR<
        ChoiceUpdateWithoutRoundQuestionChoiceDetailInput,
        ChoiceUncheckedUpdateWithoutRoundQuestionChoiceDetailInput
      >;
    };

  export type NestedIntFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type NestedStringFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringFilter | string;
  };

  export type NestedDateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type NestedIntWithAggregatesFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntWithAggregatesFilter | number;
    _count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    _sum?: NestedIntFilter;
    _min?: NestedIntFilter;
    _max?: NestedIntFilter;
  };

  export type NestedFloatFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatFilter | number;
  };

  export type NestedStringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    _count?: NestedIntFilter;
    _min?: NestedDateTimeFilter;
    _max?: NestedDateTimeFilter;
  };

  export type NestedIntNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | null;
    notIn?: Enumerable<number> | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableFilter | number | null;
  };

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null;
    in?: Enumerable<number> | null;
    notIn?: Enumerable<number> | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableWithAggregatesFilter | number | null;
    _count?: NestedIntNullableFilter;
    _avg?: NestedFloatNullableFilter;
    _sum?: NestedIntNullableFilter;
    _min?: NestedIntNullableFilter;
    _max?: NestedIntNullableFilter;
  };

  export type NestedFloatNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | null;
    notIn?: Enumerable<number> | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatNullableFilter | number | null;
  };

  export type NestedBoolFilter = {
    equals?: boolean;
    not?: NestedBoolFilter | boolean;
  };

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean;
    not?: NestedBoolWithAggregatesFilter | boolean;
    _count?: NestedIntFilter;
    _min?: NestedBoolFilter;
    _max?: NestedBoolFilter;
  };

  export type QuestionCreateWithoutQuestionCategoriesInput = {
    textQuestion: string;
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceCreateNestedManyWithoutQuestionInput;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutQuestionCategoriesInput = {
    id?: number;
    textQuestion: string;
    answerId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutQuestionCategoriesInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutQuestionCategoriesInput,
      QuestionUncheckedCreateWithoutQuestionCategoriesInput
    >;
  };

  export type QuestionCreateManyQuestionCategoriesInputEnvelope = {
    data: Enumerable<QuestionCreateManyQuestionCategoriesInput>;
    skipDuplicates?: boolean;
  };

  export type RoundQuizCreateWithoutQuestionCategoriesInput = {
    score: number;
    user: UserCreateNestedOneWithoutRoundQuizInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutRoundQuizInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizUncheckedCreateWithoutQuestionCategoriesInput = {
    id?: number;
    score: number;
    userId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutRoundQuizInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizCreateOrConnectWithoutQuestionCategoriesInput = {
    where: RoundQuizWhereUniqueInput;
    create: XOR<
      RoundQuizCreateWithoutQuestionCategoriesInput,
      RoundQuizUncheckedCreateWithoutQuestionCategoriesInput
    >;
  };

  export type RoundQuizCreateManyQuestionCategoriesInputEnvelope = {
    data: Enumerable<RoundQuizCreateManyQuestionCategoriesInput>;
    skipDuplicates?: boolean;
  };

  export type QuestionUpsertWithWhereUniqueWithoutQuestionCategoriesInput = {
    where: QuestionWhereUniqueInput;
    update: XOR<
      QuestionUpdateWithoutQuestionCategoriesInput,
      QuestionUncheckedUpdateWithoutQuestionCategoriesInput
    >;
    create: XOR<
      QuestionCreateWithoutQuestionCategoriesInput,
      QuestionUncheckedCreateWithoutQuestionCategoriesInput
    >;
  };

  export type QuestionUpdateWithWhereUniqueWithoutQuestionCategoriesInput = {
    where: QuestionWhereUniqueInput;
    data: XOR<
      QuestionUpdateWithoutQuestionCategoriesInput,
      QuestionUncheckedUpdateWithoutQuestionCategoriesInput
    >;
  };

  export type QuestionUpdateManyWithWhereWithoutQuestionCategoriesInput = {
    where: QuestionScalarWhereInput;
    data: XOR<
      QuestionUpdateManyMutationInput,
      QuestionUncheckedUpdateManyWithoutQuestionInput
    >;
  };

  export type QuestionScalarWhereInput = {
    AND?: Enumerable<QuestionScalarWhereInput>;
    OR?: Enumerable<QuestionScalarWhereInput>;
    NOT?: Enumerable<QuestionScalarWhereInput>;
    id?: IntFilter | number;
    questionCategoryId?: IntFilter | number;
    textQuestion?: StringFilter | string;
    answerId?: IntFilter | number;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
  };

  export type RoundQuizUpsertWithWhereUniqueWithoutQuestionCategoriesInput = {
    where: RoundQuizWhereUniqueInput;
    update: XOR<
      RoundQuizUpdateWithoutQuestionCategoriesInput,
      RoundQuizUncheckedUpdateWithoutQuestionCategoriesInput
    >;
    create: XOR<
      RoundQuizCreateWithoutQuestionCategoriesInput,
      RoundQuizUncheckedCreateWithoutQuestionCategoriesInput
    >;
  };

  export type RoundQuizUpdateWithWhereUniqueWithoutQuestionCategoriesInput = {
    where: RoundQuizWhereUniqueInput;
    data: XOR<
      RoundQuizUpdateWithoutQuestionCategoriesInput,
      RoundQuizUncheckedUpdateWithoutQuestionCategoriesInput
    >;
  };

  export type RoundQuizUpdateManyWithWhereWithoutQuestionCategoriesInput = {
    where: RoundQuizScalarWhereInput;
    data: XOR<
      RoundQuizUpdateManyMutationInput,
      RoundQuizUncheckedUpdateManyWithoutRoundQuizInput
    >;
  };

  export type RoundQuizScalarWhereInput = {
    AND?: Enumerable<RoundQuizScalarWhereInput>;
    OR?: Enumerable<RoundQuizScalarWhereInput>;
    NOT?: Enumerable<RoundQuizScalarWhereInput>;
    id?: IntFilter | number;
    questionCategoryId?: IntFilter | number;
    score?: IntFilter | number;
    userId?: IntFilter | number;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
  };

  export type QuestionCategoryCreateWithoutQuestionInput = {
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuiz?: RoundQuizCreateNestedManyWithoutQuestionCategoriesInput;
  };

  export type QuestionCategoryUncheckedCreateWithoutQuestionInput = {
    id?: number;
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuiz?: RoundQuizUncheckedCreateNestedManyWithoutQuestionCategoriesInput;
  };

  export type QuestionCategoryCreateOrConnectWithoutQuestionInput = {
    where: QuestionCategoryWhereUniqueInput;
    create: XOR<
      QuestionCategoryCreateWithoutQuestionInput,
      QuestionCategoryUncheckedCreateWithoutQuestionInput
    >;
  };

  export type ChoiceCreateWithoutQuestionAnswerInput = {
    choiceName: string;
    question?: QuestionCreateNestedOneWithoutChoiceInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutChoiceInput;
  };

  export type ChoiceUncheckedCreateWithoutQuestionAnswerInput = {
    id?: number;
    choiceName: string;
    questionId?: number | null;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutChoiceInput;
  };

  export type ChoiceCreateOrConnectWithoutQuestionAnswerInput = {
    where: ChoiceWhereUniqueInput;
    create: XOR<
      ChoiceCreateWithoutQuestionAnswerInput,
      ChoiceUncheckedCreateWithoutQuestionAnswerInput
    >;
  };

  export type ChoiceCreateWithoutQuestionInput = {
    choiceName: string;
    questionAnswer?: QuestionCreateNestedOneWithoutAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutChoiceInput;
  };

  export type ChoiceUncheckedCreateWithoutQuestionInput = {
    id?: number;
    choiceName: string;
    questionAnswer?: QuestionUncheckedCreateNestedOneWithoutAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutChoiceInput;
  };

  export type ChoiceCreateOrConnectWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput;
    create: XOR<
      ChoiceCreateWithoutQuestionInput,
      ChoiceUncheckedCreateWithoutQuestionInput
    >;
  };

  export type ChoiceCreateManyQuestionInputEnvelope = {
    data: Enumerable<ChoiceCreateManyQuestionInput>;
    skipDuplicates?: boolean;
  };

  export type RoundQuestionDetailCreateWithoutQuestionInput = {
    roundQuiz: RoundQuizCreateNestedOneWithoutRoundQuestionDetailInput;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailUncheckedCreateWithoutQuestionInput = {
    id?: number;
    roundQuizId: number;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailCreateOrConnectWithoutQuestionInput = {
    where: RoundQuestionDetailWhereUniqueInput;
    create: XOR<
      RoundQuestionDetailCreateWithoutQuestionInput,
      RoundQuestionDetailUncheckedCreateWithoutQuestionInput
    >;
  };

  export type RoundQuestionDetailCreateManyQuestionInputEnvelope = {
    data: Enumerable<RoundQuestionDetailCreateManyQuestionInput>;
    skipDuplicates?: boolean;
  };

  export type RoundQuestionChoiceDetailCreateWithoutQuestionInput = {
    roundQuiz: RoundQuizCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    choice: ChoiceCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedCreateWithoutQuestionInput = {
    id?: number;
    roundQuizId: number;
    choiceId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailCreateOrConnectWithoutQuestionInput = {
    where: RoundQuestionChoiceDetailWhereUniqueInput;
    create: XOR<
      RoundQuestionChoiceDetailCreateWithoutQuestionInput,
      RoundQuestionChoiceDetailUncheckedCreateWithoutQuestionInput
    >;
  };

  export type RoundQuestionChoiceDetailCreateManyQuestionInputEnvelope = {
    data: Enumerable<RoundQuestionChoiceDetailCreateManyQuestionInput>;
    skipDuplicates?: boolean;
  };

  export type QuestionCategoryUpsertWithoutQuestionInput = {
    update: XOR<
      QuestionCategoryUpdateWithoutQuestionInput,
      QuestionCategoryUncheckedUpdateWithoutQuestionInput
    >;
    create: XOR<
      QuestionCategoryCreateWithoutQuestionInput,
      QuestionCategoryUncheckedCreateWithoutQuestionInput
    >;
  };

  export type QuestionCategoryUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuiz?: RoundQuizUpdateManyWithoutQuestionCategoriesNestedInput;
  };

  export type QuestionCategoryUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuiz?: RoundQuizUncheckedUpdateManyWithoutQuestionCategoriesNestedInput;
  };

  export type ChoiceUpsertWithoutQuestionAnswerInput = {
    update: XOR<
      ChoiceUpdateWithoutQuestionAnswerInput,
      ChoiceUncheckedUpdateWithoutQuestionAnswerInput
    >;
    create: XOR<
      ChoiceCreateWithoutQuestionAnswerInput,
      ChoiceUncheckedCreateWithoutQuestionAnswerInput
    >;
  };

  export type ChoiceUpdateWithoutQuestionAnswerInput = {
    choiceName?: StringFieldUpdateOperationsInput | string;
    question?: QuestionUpdateOneWithoutChoiceNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutChoiceNestedInput;
  };

  export type ChoiceUncheckedUpdateWithoutQuestionAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    choiceName?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableIntFieldUpdateOperationsInput | number | null;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutChoiceNestedInput;
  };

  export type ChoiceUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput;
    update: XOR<
      ChoiceUpdateWithoutQuestionInput,
      ChoiceUncheckedUpdateWithoutQuestionInput
    >;
    create: XOR<
      ChoiceCreateWithoutQuestionInput,
      ChoiceUncheckedCreateWithoutQuestionInput
    >;
  };

  export type ChoiceUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput;
    data: XOR<
      ChoiceUpdateWithoutQuestionInput,
      ChoiceUncheckedUpdateWithoutQuestionInput
    >;
  };

  export type ChoiceUpdateManyWithWhereWithoutQuestionInput = {
    where: ChoiceScalarWhereInput;
    data: XOR<
      ChoiceUpdateManyMutationInput,
      ChoiceUncheckedUpdateManyWithoutChoiceInput
    >;
  };

  export type ChoiceScalarWhereInput = {
    AND?: Enumerable<ChoiceScalarWhereInput>;
    OR?: Enumerable<ChoiceScalarWhereInput>;
    NOT?: Enumerable<ChoiceScalarWhereInput>;
    id?: IntFilter | number;
    choiceName?: StringFilter | string;
    questionId?: IntNullableFilter | number | null;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
  };

  export type RoundQuestionDetailUpsertWithWhereUniqueWithoutQuestionInput = {
    where: RoundQuestionDetailWhereUniqueInput;
    update: XOR<
      RoundQuestionDetailUpdateWithoutQuestionInput,
      RoundQuestionDetailUncheckedUpdateWithoutQuestionInput
    >;
    create: XOR<
      RoundQuestionDetailCreateWithoutQuestionInput,
      RoundQuestionDetailUncheckedCreateWithoutQuestionInput
    >;
  };

  export type RoundQuestionDetailUpdateWithWhereUniqueWithoutQuestionInput = {
    where: RoundQuestionDetailWhereUniqueInput;
    data: XOR<
      RoundQuestionDetailUpdateWithoutQuestionInput,
      RoundQuestionDetailUncheckedUpdateWithoutQuestionInput
    >;
  };

  export type RoundQuestionDetailUpdateManyWithWhereWithoutQuestionInput = {
    where: RoundQuestionDetailScalarWhereInput;
    data: XOR<
      RoundQuestionDetailUpdateManyMutationInput,
      RoundQuestionDetailUncheckedUpdateManyWithoutRoundQuestionDetailInput
    >;
  };

  export type RoundQuestionDetailScalarWhereInput = {
    AND?: Enumerable<RoundQuestionDetailScalarWhereInput>;
    OR?: Enumerable<RoundQuestionDetailScalarWhereInput>;
    NOT?: Enumerable<RoundQuestionDetailScalarWhereInput>;
    id?: IntFilter | number;
    roundQuizId?: IntFilter | number;
    questionId?: IntFilter | number;
    questionOrder?: IntFilter | number;
    userChoose?: IntNullableFilter | number | null;
    result?: BoolFilter | boolean;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
  };

  export type RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutQuestionInput =
    {
      where: RoundQuestionChoiceDetailWhereUniqueInput;
      update: XOR<
        RoundQuestionChoiceDetailUpdateWithoutQuestionInput,
        RoundQuestionChoiceDetailUncheckedUpdateWithoutQuestionInput
      >;
      create: XOR<
        RoundQuestionChoiceDetailCreateWithoutQuestionInput,
        RoundQuestionChoiceDetailUncheckedCreateWithoutQuestionInput
      >;
    };

  export type RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutQuestionInput =
    {
      where: RoundQuestionChoiceDetailWhereUniqueInput;
      data: XOR<
        RoundQuestionChoiceDetailUpdateWithoutQuestionInput,
        RoundQuestionChoiceDetailUncheckedUpdateWithoutQuestionInput
      >;
    };

  export type RoundQuestionChoiceDetailUpdateManyWithWhereWithoutQuestionInput =
    {
      where: RoundQuestionChoiceDetailScalarWhereInput;
      data: XOR<
        RoundQuestionChoiceDetailUpdateManyMutationInput,
        RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuestionChoiceDetailInput
      >;
    };

  export type RoundQuestionChoiceDetailScalarWhereInput = {
    AND?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
    OR?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
    NOT?: Enumerable<RoundQuestionChoiceDetailScalarWhereInput>;
    id?: IntFilter | number;
    roundQuizId?: IntFilter | number;
    questionId?: IntFilter | number;
    choiceId?: IntFilter | number;
    createAt?: DateTimeFilter | Date | string;
    updateAt?: DateTimeFilter | Date | string;
  };

  export type QuestionCreateWithoutChoiceInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput;
    textQuestion: string;
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutChoiceInput = {
    id?: number;
    questionCategoryId: number;
    textQuestion: string;
    answerId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutChoiceInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutChoiceInput,
      QuestionUncheckedCreateWithoutChoiceInput
    >;
  };

  export type QuestionCreateWithoutAnswerInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput;
    textQuestion: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceCreateNestedManyWithoutQuestionInput;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutAnswerInput = {
    id?: number;
    questionCategoryId: number;
    textQuestion: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutAnswerInput,
      QuestionUncheckedCreateWithoutAnswerInput
    >;
  };

  export type RoundQuestionChoiceDetailCreateWithoutChoiceInput = {
    roundQuiz: RoundQuizCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    question: QuestionCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedCreateWithoutChoiceInput = {
    id?: number;
    roundQuizId: number;
    questionId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailCreateOrConnectWithoutChoiceInput = {
    where: RoundQuestionChoiceDetailWhereUniqueInput;
    create: XOR<
      RoundQuestionChoiceDetailCreateWithoutChoiceInput,
      RoundQuestionChoiceDetailUncheckedCreateWithoutChoiceInput
    >;
  };

  export type RoundQuestionChoiceDetailCreateManyChoiceInputEnvelope = {
    data: Enumerable<RoundQuestionChoiceDetailCreateManyChoiceInput>;
    skipDuplicates?: boolean;
  };

  export type QuestionUpsertWithoutChoiceInput = {
    update: XOR<
      QuestionUpdateWithoutChoiceInput,
      QuestionUncheckedUpdateWithoutChoiceInput
    >;
    create: XOR<
      QuestionCreateWithoutChoiceInput,
      QuestionUncheckedCreateWithoutChoiceInput
    >;
  };

  export type QuestionUpdateWithoutChoiceInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answerId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUpsertWithoutAnswerInput = {
    update: XOR<
      QuestionUpdateWithoutAnswerInput,
      QuestionUncheckedUpdateWithoutAnswerInput
    >;
    create: XOR<
      QuestionCreateWithoutAnswerInput,
      QuestionUncheckedCreateWithoutAnswerInput
    >;
  };

  export type QuestionUpdateWithoutAnswerInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutChoiceInput =
    {
      where: RoundQuestionChoiceDetailWhereUniqueInput;
      update: XOR<
        RoundQuestionChoiceDetailUpdateWithoutChoiceInput,
        RoundQuestionChoiceDetailUncheckedUpdateWithoutChoiceInput
      >;
      create: XOR<
        RoundQuestionChoiceDetailCreateWithoutChoiceInput,
        RoundQuestionChoiceDetailUncheckedCreateWithoutChoiceInput
      >;
    };

  export type RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutChoiceInput =
    {
      where: RoundQuestionChoiceDetailWhereUniqueInput;
      data: XOR<
        RoundQuestionChoiceDetailUpdateWithoutChoiceInput,
        RoundQuestionChoiceDetailUncheckedUpdateWithoutChoiceInput
      >;
    };

  export type RoundQuestionChoiceDetailUpdateManyWithWhereWithoutChoiceInput = {
    where: RoundQuestionChoiceDetailScalarWhereInput;
    data: XOR<
      RoundQuestionChoiceDetailUpdateManyMutationInput,
      RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuestionChoiceDetailInput
    >;
  };

  export type RoundQuizCreateWithoutUserInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutRoundQuizInput;
    score: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutRoundQuizInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizUncheckedCreateWithoutUserInput = {
    id?: number;
    questionCategoryId: number;
    score: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutRoundQuizInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizCreateOrConnectWithoutUserInput = {
    where: RoundQuizWhereUniqueInput;
    create: XOR<
      RoundQuizCreateWithoutUserInput,
      RoundQuizUncheckedCreateWithoutUserInput
    >;
  };

  export type RoundQuizCreateManyUserInputEnvelope = {
    data: Enumerable<RoundQuizCreateManyUserInput>;
    skipDuplicates?: boolean;
  };

  export type RoundQuizUpsertWithWhereUniqueWithoutUserInput = {
    where: RoundQuizWhereUniqueInput;
    update: XOR<
      RoundQuizUpdateWithoutUserInput,
      RoundQuizUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RoundQuizCreateWithoutUserInput,
      RoundQuizUncheckedCreateWithoutUserInput
    >;
  };

  export type RoundQuizUpdateWithWhereUniqueWithoutUserInput = {
    where: RoundQuizWhereUniqueInput;
    data: XOR<
      RoundQuizUpdateWithoutUserInput,
      RoundQuizUncheckedUpdateWithoutUserInput
    >;
  };

  export type RoundQuizUpdateManyWithWhereWithoutUserInput = {
    where: RoundQuizScalarWhereInput;
    data: XOR<
      RoundQuizUpdateManyMutationInput,
      RoundQuizUncheckedUpdateManyWithoutRoundQuizInput
    >;
  };

  export type QuestionCategoryCreateWithoutRoundQuizInput = {
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    Question?: QuestionCreateNestedManyWithoutQuestionCategoriesInput;
  };

  export type QuestionCategoryUncheckedCreateWithoutRoundQuizInput = {
    id?: number;
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
    Question?: QuestionUncheckedCreateNestedManyWithoutQuestionCategoriesInput;
  };

  export type QuestionCategoryCreateOrConnectWithoutRoundQuizInput = {
    where: QuestionCategoryWhereUniqueInput;
    create: XOR<
      QuestionCategoryCreateWithoutRoundQuizInput,
      QuestionCategoryUncheckedCreateWithoutRoundQuizInput
    >;
  };

  export type UserCreateWithoutRoundQuizInput = {
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type UserUncheckedCreateWithoutRoundQuizInput = {
    id?: number;
    name: string;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type UserCreateOrConnectWithoutRoundQuizInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRoundQuizInput,
      UserUncheckedCreateWithoutRoundQuizInput
    >;
  };

  export type RoundQuestionDetailCreateWithoutRoundQuizInput = {
    question: QuestionCreateNestedOneWithoutRoundQuestionDetailInput;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailUncheckedCreateWithoutRoundQuizInput = {
    id?: number;
    questionId: number;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailCreateOrConnectWithoutRoundQuizInput = {
    where: RoundQuestionDetailWhereUniqueInput;
    create: XOR<
      RoundQuestionDetailCreateWithoutRoundQuizInput,
      RoundQuestionDetailUncheckedCreateWithoutRoundQuizInput
    >;
  };

  export type RoundQuestionDetailCreateManyRoundQuizInputEnvelope = {
    data: Enumerable<RoundQuestionDetailCreateManyRoundQuizInput>;
    skipDuplicates?: boolean;
  };

  export type RoundQuestionChoiceDetailCreateWithoutRoundQuizInput = {
    question: QuestionCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    choice: ChoiceCreateNestedOneWithoutRoundQuestionChoiceDetailInput;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedCreateWithoutRoundQuizInput = {
    id?: number;
    questionId: number;
    choiceId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailCreateOrConnectWithoutRoundQuizInput = {
    where: RoundQuestionChoiceDetailWhereUniqueInput;
    create: XOR<
      RoundQuestionChoiceDetailCreateWithoutRoundQuizInput,
      RoundQuestionChoiceDetailUncheckedCreateWithoutRoundQuizInput
    >;
  };

  export type RoundQuestionChoiceDetailCreateManyRoundQuizInputEnvelope = {
    data: Enumerable<RoundQuestionChoiceDetailCreateManyRoundQuizInput>;
    skipDuplicates?: boolean;
  };

  export type QuestionCategoryUpsertWithoutRoundQuizInput = {
    update: XOR<
      QuestionCategoryUpdateWithoutRoundQuizInput,
      QuestionCategoryUncheckedUpdateWithoutRoundQuizInput
    >;
    create: XOR<
      QuestionCategoryCreateWithoutRoundQuizInput,
      QuestionCategoryUncheckedCreateWithoutRoundQuizInput
    >;
  };

  export type QuestionCategoryUpdateWithoutRoundQuizInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Question?: QuestionUpdateManyWithoutQuestionCategoriesNestedInput;
  };

  export type QuestionCategoryUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Question?: QuestionUncheckedUpdateManyWithoutQuestionCategoriesNestedInput;
  };

  export type UserUpsertWithoutRoundQuizInput = {
    update: XOR<
      UserUpdateWithoutRoundQuizInput,
      UserUncheckedUpdateWithoutRoundQuizInput
    >;
    create: XOR<
      UserCreateWithoutRoundQuizInput,
      UserUncheckedCreateWithoutRoundQuizInput
    >;
  };

  export type UserUpdateWithoutRoundQuizInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailUpsertWithWhereUniqueWithoutRoundQuizInput = {
    where: RoundQuestionDetailWhereUniqueInput;
    update: XOR<
      RoundQuestionDetailUpdateWithoutRoundQuizInput,
      RoundQuestionDetailUncheckedUpdateWithoutRoundQuizInput
    >;
    create: XOR<
      RoundQuestionDetailCreateWithoutRoundQuizInput,
      RoundQuestionDetailUncheckedCreateWithoutRoundQuizInput
    >;
  };

  export type RoundQuestionDetailUpdateWithWhereUniqueWithoutRoundQuizInput = {
    where: RoundQuestionDetailWhereUniqueInput;
    data: XOR<
      RoundQuestionDetailUpdateWithoutRoundQuizInput,
      RoundQuestionDetailUncheckedUpdateWithoutRoundQuizInput
    >;
  };

  export type RoundQuestionDetailUpdateManyWithWhereWithoutRoundQuizInput = {
    where: RoundQuestionDetailScalarWhereInput;
    data: XOR<
      RoundQuestionDetailUpdateManyMutationInput,
      RoundQuestionDetailUncheckedUpdateManyWithoutRoundQuestionDetailInput
    >;
  };

  export type RoundQuestionChoiceDetailUpsertWithWhereUniqueWithoutRoundQuizInput =
    {
      where: RoundQuestionChoiceDetailWhereUniqueInput;
      update: XOR<
        RoundQuestionChoiceDetailUpdateWithoutRoundQuizInput,
        RoundQuestionChoiceDetailUncheckedUpdateWithoutRoundQuizInput
      >;
      create: XOR<
        RoundQuestionChoiceDetailCreateWithoutRoundQuizInput,
        RoundQuestionChoiceDetailUncheckedCreateWithoutRoundQuizInput
      >;
    };

  export type RoundQuestionChoiceDetailUpdateWithWhereUniqueWithoutRoundQuizInput =
    {
      where: RoundQuestionChoiceDetailWhereUniqueInput;
      data: XOR<
        RoundQuestionChoiceDetailUpdateWithoutRoundQuizInput,
        RoundQuestionChoiceDetailUncheckedUpdateWithoutRoundQuizInput
      >;
    };

  export type RoundQuestionChoiceDetailUpdateManyWithWhereWithoutRoundQuizInput =
    {
      where: RoundQuestionChoiceDetailScalarWhereInput;
      data: XOR<
        RoundQuestionChoiceDetailUpdateManyMutationInput,
        RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuestionChoiceDetailInput
      >;
    };

  export type RoundQuizCreateWithoutRoundQuestionDetailInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutRoundQuizInput;
    score: number;
    user: UserCreateNestedOneWithoutRoundQuizInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizUncheckedCreateWithoutRoundQuestionDetailInput = {
    id?: number;
    questionCategoryId: number;
    score: number;
    userId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizCreateOrConnectWithoutRoundQuestionDetailInput = {
    where: RoundQuizWhereUniqueInput;
    create: XOR<
      RoundQuizCreateWithoutRoundQuestionDetailInput,
      RoundQuizUncheckedCreateWithoutRoundQuestionDetailInput
    >;
  };

  export type QuestionCreateWithoutRoundQuestionDetailInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput;
    textQuestion: string;
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutRoundQuestionDetailInput = {
    id?: number;
    questionCategoryId: number;
    textQuestion: string;
    answerId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutRoundQuestionDetailInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutRoundQuestionDetailInput,
      QuestionUncheckedCreateWithoutRoundQuestionDetailInput
    >;
  };

  export type RoundQuizUpsertWithoutRoundQuestionDetailInput = {
    update: XOR<
      RoundQuizUpdateWithoutRoundQuestionDetailInput,
      RoundQuizUncheckedUpdateWithoutRoundQuestionDetailInput
    >;
    create: XOR<
      RoundQuizCreateWithoutRoundQuestionDetailInput,
      RoundQuizUncheckedCreateWithoutRoundQuestionDetailInput
    >;
  };

  export type RoundQuizUpdateWithoutRoundQuestionDetailInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput;
    score?: IntFieldUpdateOperationsInput | number;
    user?: UserUpdateOneRequiredWithoutRoundQuizNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutRoundQuizNestedInput;
  };

  export type RoundQuizUncheckedUpdateWithoutRoundQuestionDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    score?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuizNestedInput;
  };

  export type QuestionUpsertWithoutRoundQuestionDetailInput = {
    update: XOR<
      QuestionUpdateWithoutRoundQuestionDetailInput,
      QuestionUncheckedUpdateWithoutRoundQuestionDetailInput
    >;
    create: XOR<
      QuestionCreateWithoutRoundQuestionDetailInput,
      QuestionUncheckedCreateWithoutRoundQuestionDetailInput
    >;
  };

  export type QuestionUpdateWithoutRoundQuestionDetailInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutRoundQuestionDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answerId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type RoundQuizCreateWithoutRoundQuestionChoiceDetailInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutRoundQuizInput;
    score: number;
    user: UserCreateNestedOneWithoutRoundQuizInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizUncheckedCreateWithoutRoundQuestionChoiceDetailInput = {
    id?: number;
    questionCategoryId: number;
    score: number;
    userId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutRoundQuizInput;
  };

  export type RoundQuizCreateOrConnectWithoutRoundQuestionChoiceDetailInput = {
    where: RoundQuizWhereUniqueInput;
    create: XOR<
      RoundQuizCreateWithoutRoundQuestionChoiceDetailInput,
      RoundQuizUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
  };

  export type QuestionCreateWithoutRoundQuestionChoiceDetailInput = {
    questionCategories: QuestionCategoryCreateNestedOneWithoutQuestionInput;
    textQuestion: string;
    answer: ChoiceCreateNestedOneWithoutQuestionAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceCreateNestedManyWithoutQuestionInput;
    RoundQuestionDetail?: RoundQuestionDetailCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionUncheckedCreateWithoutRoundQuestionChoiceDetailInput = {
    id?: number;
    questionCategoryId: number;
    textQuestion: string;
    answerId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
    choice?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedCreateNestedManyWithoutQuestionInput;
  };

  export type QuestionCreateOrConnectWithoutRoundQuestionChoiceDetailInput = {
    where: QuestionWhereUniqueInput;
    create: XOR<
      QuestionCreateWithoutRoundQuestionChoiceDetailInput,
      QuestionUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
  };

  export type ChoiceCreateWithoutRoundQuestionChoiceDetailInput = {
    choiceName: string;
    question?: QuestionCreateNestedOneWithoutChoiceInput;
    questionAnswer?: QuestionCreateNestedOneWithoutAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type ChoiceUncheckedCreateWithoutRoundQuestionChoiceDetailInput = {
    id?: number;
    choiceName: string;
    questionId?: number | null;
    questionAnswer?: QuestionUncheckedCreateNestedOneWithoutAnswerInput;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type ChoiceCreateOrConnectWithoutRoundQuestionChoiceDetailInput = {
    where: ChoiceWhereUniqueInput;
    create: XOR<
      ChoiceCreateWithoutRoundQuestionChoiceDetailInput,
      ChoiceUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
  };

  export type RoundQuizUpsertWithoutRoundQuestionChoiceDetailInput = {
    update: XOR<
      RoundQuizUpdateWithoutRoundQuestionChoiceDetailInput,
      RoundQuizUncheckedUpdateWithoutRoundQuestionChoiceDetailInput
    >;
    create: XOR<
      RoundQuizCreateWithoutRoundQuestionChoiceDetailInput,
      RoundQuizUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
  };

  export type RoundQuizUpdateWithoutRoundQuestionChoiceDetailInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput;
    score?: IntFieldUpdateOperationsInput | number;
    user?: UserUpdateOneRequiredWithoutRoundQuizNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutRoundQuizNestedInput;
  };

  export type RoundQuizUncheckedUpdateWithoutRoundQuestionChoiceDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    score?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutRoundQuizNestedInput;
  };

  export type QuestionUpsertWithoutRoundQuestionChoiceDetailInput = {
    update: XOR<
      QuestionUpdateWithoutRoundQuestionChoiceDetailInput,
      QuestionUncheckedUpdateWithoutRoundQuestionChoiceDetailInput
    >;
    create: XOR<
      QuestionCreateWithoutRoundQuestionChoiceDetailInput,
      QuestionUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
  };

  export type QuestionUpdateWithoutRoundQuestionChoiceDetailInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutQuestionNestedInput;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutRoundQuestionChoiceDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answerId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type ChoiceUpsertWithoutRoundQuestionChoiceDetailInput = {
    update: XOR<
      ChoiceUpdateWithoutRoundQuestionChoiceDetailInput,
      ChoiceUncheckedUpdateWithoutRoundQuestionChoiceDetailInput
    >;
    create: XOR<
      ChoiceCreateWithoutRoundQuestionChoiceDetailInput,
      ChoiceUncheckedCreateWithoutRoundQuestionChoiceDetailInput
    >;
  };

  export type ChoiceUpdateWithoutRoundQuestionChoiceDetailInput = {
    choiceName?: StringFieldUpdateOperationsInput | string;
    question?: QuestionUpdateOneWithoutChoiceNestedInput;
    questionAnswer?: QuestionUpdateOneWithoutAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChoiceUncheckedUpdateWithoutRoundQuestionChoiceDetailInput = {
    id?: IntFieldUpdateOperationsInput | number;
    choiceName?: StringFieldUpdateOperationsInput | string;
    questionId?: NullableIntFieldUpdateOperationsInput | number | null;
    questionAnswer?: QuestionUncheckedUpdateOneWithoutAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type QuestionCreateManyQuestionCategoriesInput = {
    id?: number;
    textQuestion: string;
    answerId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuizCreateManyQuestionCategoriesInput = {
    id?: number;
    score: number;
    userId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type QuestionUpdateWithoutQuestionCategoriesInput = {
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answer?: ChoiceUpdateOneRequiredWithoutQuestionAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUpdateManyWithoutQuestionNestedInput;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateWithoutQuestionCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answerId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    choice?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutQuestionNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutQuestionNestedInput;
  };

  export type QuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number;
    textQuestion?: StringFieldUpdateOperationsInput | string;
    answerId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuizUpdateWithoutQuestionCategoriesInput = {
    score?: IntFieldUpdateOperationsInput | number;
    user?: UserUpdateOneRequiredWithoutRoundQuizNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutRoundQuizNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutRoundQuizNestedInput;
  };

  export type RoundQuizUncheckedUpdateWithoutQuestionCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    score?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutRoundQuizNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuizNestedInput;
  };

  export type RoundQuizUncheckedUpdateManyWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number;
    score?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ChoiceCreateManyQuestionInput = {
    id?: number;
    choiceName: string;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailCreateManyQuestionInput = {
    id?: number;
    roundQuizId: number;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailCreateManyQuestionInput = {
    id?: number;
    roundQuizId: number;
    choiceId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type ChoiceUpdateWithoutQuestionInput = {
    choiceName?: StringFieldUpdateOperationsInput | string;
    questionAnswer?: QuestionUpdateOneWithoutAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutChoiceNestedInput;
  };

  export type ChoiceUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number;
    choiceName?: StringFieldUpdateOperationsInput | string;
    questionAnswer?: QuestionUncheckedUpdateOneWithoutAnswerNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutChoiceNestedInput;
  };

  export type ChoiceUncheckedUpdateManyWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    choiceName?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailUpdateWithoutQuestionInput = {
    roundQuiz?: RoundQuizUpdateOneRequiredWithoutRoundQuestionDetailNestedInput;
    questionOrder?: IntFieldUpdateOperationsInput | number;
    userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
    result?: BoolFieldUpdateOperationsInput | boolean;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number;
    roundQuizId?: IntFieldUpdateOperationsInput | number;
    questionOrder?: IntFieldUpdateOperationsInput | number;
    userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
    result?: BoolFieldUpdateOperationsInput | boolean;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailUncheckedUpdateManyWithoutRoundQuestionDetailInput =
    {
      id?: IntFieldUpdateOperationsInput | number;
      roundQuizId?: IntFieldUpdateOperationsInput | number;
      questionOrder?: IntFieldUpdateOperationsInput | number;
      userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
      result?: BoolFieldUpdateOperationsInput | boolean;
      createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

  export type RoundQuestionChoiceDetailUpdateWithoutQuestionInput = {
    roundQuiz?: RoundQuizUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    choice?: ChoiceUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number;
    roundQuizId?: IntFieldUpdateOperationsInput | number;
    choiceId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuestionChoiceDetailInput =
    {
      id?: IntFieldUpdateOperationsInput | number;
      roundQuizId?: IntFieldUpdateOperationsInput | number;
      choiceId?: IntFieldUpdateOperationsInput | number;
      createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
      updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    };

  export type RoundQuestionChoiceDetailCreateManyChoiceInput = {
    id?: number;
    roundQuizId: number;
    questionId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailUpdateWithoutChoiceInput = {
    roundQuiz?: RoundQuizUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    question?: QuestionUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedUpdateWithoutChoiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    roundQuizId?: IntFieldUpdateOperationsInput | number;
    questionId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuizCreateManyUserInput = {
    id?: number;
    questionCategoryId: number;
    score: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuizUpdateWithoutUserInput = {
    questionCategories?: QuestionCategoryUpdateOneRequiredWithoutRoundQuizNestedInput;
    score?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUpdateManyWithoutRoundQuizNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUpdateManyWithoutRoundQuizNestedInput;
  };

  export type RoundQuizUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionCategoryId?: IntFieldUpdateOperationsInput | number;
    score?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    RoundQuestionDetail?: RoundQuestionDetailUncheckedUpdateManyWithoutRoundQuizNestedInput;
    RoundQuestionChoiceDetail?: RoundQuestionChoiceDetailUncheckedUpdateManyWithoutRoundQuizNestedInput;
  };

  export type RoundQuestionDetailCreateManyRoundQuizInput = {
    id?: number;
    questionId: number;
    questionOrder: number;
    userChoose?: number | null;
    result: boolean;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionChoiceDetailCreateManyRoundQuizInput = {
    id?: number;
    questionId: number;
    choiceId: number;
    createAt?: Date | string;
    updateAt?: Date | string;
  };

  export type RoundQuestionDetailUpdateWithoutRoundQuizInput = {
    question?: QuestionUpdateOneRequiredWithoutRoundQuestionDetailNestedInput;
    questionOrder?: IntFieldUpdateOperationsInput | number;
    userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
    result?: BoolFieldUpdateOperationsInput | boolean;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionDetailUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionId?: IntFieldUpdateOperationsInput | number;
    questionOrder?: IntFieldUpdateOperationsInput | number;
    userChoose?: NullableIntFieldUpdateOperationsInput | number | null;
    result?: BoolFieldUpdateOperationsInput | boolean;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailUpdateWithoutRoundQuizInput = {
    question?: QuestionUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    choice?: ChoiceUpdateOneRequiredWithoutRoundQuestionChoiceDetailNestedInput;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RoundQuestionChoiceDetailUncheckedUpdateWithoutRoundQuizInput = {
    id?: IntFieldUpdateOperationsInput | number;
    questionId?: IntFieldUpdateOperationsInput | number;
    choiceId?: IntFieldUpdateOperationsInput | number;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
