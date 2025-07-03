
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model kegiatan
 * 
 */
export type kegiatan = $Result.DefaultSelection<Prisma.$kegiatanPayload>
/**
 * Model organisasi
 * 
 */
export type organisasi = $Result.DefaultSelection<Prisma.$organisasiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Kegiatans
 * const kegiatans = await prisma.kegiatan.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Kegiatans
   * const kegiatans = await prisma.kegiatan.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.kegiatan`: Exposes CRUD operations for the **kegiatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kegiatans
    * const kegiatans = await prisma.kegiatan.findMany()
    * ```
    */
  get kegiatan(): Prisma.kegiatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organisasi`: Exposes CRUD operations for the **organisasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisasis
    * const organisasis = await prisma.organisasi.findMany()
    * ```
    */
  get organisasi(): Prisma.organisasiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    kegiatan: 'kegiatan',
    organisasi: 'organisasi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "kegiatan" | "organisasi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      kegiatan: {
        payload: Prisma.$kegiatanPayload<ExtArgs>
        fields: Prisma.kegiatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kegiatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kegiatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          findFirst: {
            args: Prisma.kegiatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kegiatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          findMany: {
            args: Prisma.kegiatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>[]
          }
          create: {
            args: Prisma.kegiatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          createMany: {
            args: Prisma.kegiatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kegiatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>[]
          }
          delete: {
            args: Prisma.kegiatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          update: {
            args: Prisma.kegiatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          deleteMany: {
            args: Prisma.kegiatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kegiatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kegiatanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>[]
          }
          upsert: {
            args: Prisma.kegiatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kegiatanPayload>
          }
          aggregate: {
            args: Prisma.KegiatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKegiatan>
          }
          groupBy: {
            args: Prisma.kegiatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KegiatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.kegiatanCountArgs<ExtArgs>
            result: $Utils.Optional<KegiatanCountAggregateOutputType> | number
          }
        }
      }
      organisasi: {
        payload: Prisma.$organisasiPayload<ExtArgs>
        fields: Prisma.organisasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organisasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organisasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>
          }
          findFirst: {
            args: Prisma.organisasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organisasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>
          }
          findMany: {
            args: Prisma.organisasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>[]
          }
          create: {
            args: Prisma.organisasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>
          }
          createMany: {
            args: Prisma.organisasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organisasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>[]
          }
          delete: {
            args: Prisma.organisasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>
          }
          update: {
            args: Prisma.organisasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>
          }
          deleteMany: {
            args: Prisma.organisasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organisasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organisasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>[]
          }
          upsert: {
            args: Prisma.organisasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organisasiPayload>
          }
          aggregate: {
            args: Prisma.OrganisasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisasi>
          }
          groupBy: {
            args: Prisma.organisasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.organisasiCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisasiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    kegiatan?: kegiatanOmit
    organisasi?: organisasiOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model kegiatan
   */

  export type AggregateKegiatan = {
    _count: KegiatanCountAggregateOutputType | null
    _avg: KegiatanAvgAggregateOutputType | null
    _sum: KegiatanSumAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  export type KegiatanAvgAggregateOutputType = {
    id: number | null
  }

  export type KegiatanSumAggregateOutputType = {
    id: number | null
  }

  export type KegiatanMinAggregateOutputType = {
    id: number | null
    judul_kegiatan: string | null
    id_organisasi: string | null
    tanggal_kegiatan: Date | null
    lokasi: string | null
    jenis_kegiatan: string | null
    deskripsi: string | null
    tautan: string | null
  }

  export type KegiatanMaxAggregateOutputType = {
    id: number | null
    judul_kegiatan: string | null
    id_organisasi: string | null
    tanggal_kegiatan: Date | null
    lokasi: string | null
    jenis_kegiatan: string | null
    deskripsi: string | null
    tautan: string | null
  }

  export type KegiatanCountAggregateOutputType = {
    id: number
    judul_kegiatan: number
    id_organisasi: number
    tanggal_kegiatan: number
    lokasi: number
    jenis_kegiatan: number
    deskripsi: number
    tautan: number
    _all: number
  }


  export type KegiatanAvgAggregateInputType = {
    id?: true
  }

  export type KegiatanSumAggregateInputType = {
    id?: true
  }

  export type KegiatanMinAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    id_organisasi?: true
    tanggal_kegiatan?: true
    lokasi?: true
    jenis_kegiatan?: true
    deskripsi?: true
    tautan?: true
  }

  export type KegiatanMaxAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    id_organisasi?: true
    tanggal_kegiatan?: true
    lokasi?: true
    jenis_kegiatan?: true
    deskripsi?: true
    tautan?: true
  }

  export type KegiatanCountAggregateInputType = {
    id?: true
    judul_kegiatan?: true
    id_organisasi?: true
    tanggal_kegiatan?: true
    lokasi?: true
    jenis_kegiatan?: true
    deskripsi?: true
    tautan?: true
    _all?: true
  }

  export type KegiatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kegiatan to aggregate.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kegiatans
    **/
    _count?: true | KegiatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KegiatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KegiatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KegiatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KegiatanMaxAggregateInputType
  }

  export type GetKegiatanAggregateType<T extends KegiatanAggregateArgs> = {
        [P in keyof T & keyof AggregateKegiatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKegiatan[P]>
      : GetScalarType<T[P], AggregateKegiatan[P]>
  }




  export type kegiatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kegiatanWhereInput
    orderBy?: kegiatanOrderByWithAggregationInput | kegiatanOrderByWithAggregationInput[]
    by: KegiatanScalarFieldEnum[] | KegiatanScalarFieldEnum
    having?: kegiatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KegiatanCountAggregateInputType | true
    _avg?: KegiatanAvgAggregateInputType
    _sum?: KegiatanSumAggregateInputType
    _min?: KegiatanMinAggregateInputType
    _max?: KegiatanMaxAggregateInputType
  }

  export type KegiatanGroupByOutputType = {
    id: number
    judul_kegiatan: string
    id_organisasi: string
    tanggal_kegiatan: Date
    lokasi: string
    jenis_kegiatan: string
    deskripsi: string
    tautan: string
    _count: KegiatanCountAggregateOutputType | null
    _avg: KegiatanAvgAggregateOutputType | null
    _sum: KegiatanSumAggregateOutputType | null
    _min: KegiatanMinAggregateOutputType | null
    _max: KegiatanMaxAggregateOutputType | null
  }

  type GetKegiatanGroupByPayload<T extends kegiatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KegiatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KegiatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
            : GetScalarType<T[P], KegiatanGroupByOutputType[P]>
        }
      >
    >


  export type kegiatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    id_organisasi?: boolean
    tanggal_kegiatan?: boolean
    lokasi?: boolean
    jenis_kegiatan?: boolean
    deskripsi?: boolean
    tautan?: boolean
  }, ExtArgs["result"]["kegiatan"]>

  export type kegiatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    id_organisasi?: boolean
    tanggal_kegiatan?: boolean
    lokasi?: boolean
    jenis_kegiatan?: boolean
    deskripsi?: boolean
    tautan?: boolean
  }, ExtArgs["result"]["kegiatan"]>

  export type kegiatanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul_kegiatan?: boolean
    id_organisasi?: boolean
    tanggal_kegiatan?: boolean
    lokasi?: boolean
    jenis_kegiatan?: boolean
    deskripsi?: boolean
    tautan?: boolean
  }, ExtArgs["result"]["kegiatan"]>

  export type kegiatanSelectScalar = {
    id?: boolean
    judul_kegiatan?: boolean
    id_organisasi?: boolean
    tanggal_kegiatan?: boolean
    lokasi?: boolean
    jenis_kegiatan?: boolean
    deskripsi?: boolean
    tautan?: boolean
  }

  export type kegiatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul_kegiatan" | "id_organisasi" | "tanggal_kegiatan" | "lokasi" | "jenis_kegiatan" | "deskripsi" | "tautan", ExtArgs["result"]["kegiatan"]>

  export type $kegiatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kegiatan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul_kegiatan: string
      id_organisasi: string
      tanggal_kegiatan: Date
      lokasi: string
      jenis_kegiatan: string
      deskripsi: string
      tautan: string
    }, ExtArgs["result"]["kegiatan"]>
    composites: {}
  }

  type kegiatanGetPayload<S extends boolean | null | undefined | kegiatanDefaultArgs> = $Result.GetResult<Prisma.$kegiatanPayload, S>

  type kegiatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kegiatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KegiatanCountAggregateInputType | true
    }

  export interface kegiatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kegiatan'], meta: { name: 'kegiatan' } }
    /**
     * Find zero or one Kegiatan that matches the filter.
     * @param {kegiatanFindUniqueArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kegiatanFindUniqueArgs>(args: SelectSubset<T, kegiatanFindUniqueArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kegiatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kegiatanFindUniqueOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kegiatanFindUniqueOrThrowArgs>(args: SelectSubset<T, kegiatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindFirstArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kegiatanFindFirstArgs>(args?: SelectSubset<T, kegiatanFindFirstArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kegiatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindFirstOrThrowArgs} args - Arguments to find a Kegiatan
     * @example
     * // Get one Kegiatan
     * const kegiatan = await prisma.kegiatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kegiatanFindFirstOrThrowArgs>(args?: SelectSubset<T, kegiatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kegiatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany()
     * 
     * // Get first 10 Kegiatans
     * const kegiatans = await prisma.kegiatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kegiatanWithIdOnly = await prisma.kegiatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends kegiatanFindManyArgs>(args?: SelectSubset<T, kegiatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kegiatan.
     * @param {kegiatanCreateArgs} args - Arguments to create a Kegiatan.
     * @example
     * // Create one Kegiatan
     * const Kegiatan = await prisma.kegiatan.create({
     *   data: {
     *     // ... data to create a Kegiatan
     *   }
     * })
     * 
     */
    create<T extends kegiatanCreateArgs>(args: SelectSubset<T, kegiatanCreateArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kegiatans.
     * @param {kegiatanCreateManyArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kegiatanCreateManyArgs>(args?: SelectSubset<T, kegiatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kegiatans and returns the data saved in the database.
     * @param {kegiatanCreateManyAndReturnArgs} args - Arguments to create many Kegiatans.
     * @example
     * // Create many Kegiatans
     * const kegiatan = await prisma.kegiatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kegiatans and only return the `id`
     * const kegiatanWithIdOnly = await prisma.kegiatan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kegiatanCreateManyAndReturnArgs>(args?: SelectSubset<T, kegiatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kegiatan.
     * @param {kegiatanDeleteArgs} args - Arguments to delete one Kegiatan.
     * @example
     * // Delete one Kegiatan
     * const Kegiatan = await prisma.kegiatan.delete({
     *   where: {
     *     // ... filter to delete one Kegiatan
     *   }
     * })
     * 
     */
    delete<T extends kegiatanDeleteArgs>(args: SelectSubset<T, kegiatanDeleteArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kegiatan.
     * @param {kegiatanUpdateArgs} args - Arguments to update one Kegiatan.
     * @example
     * // Update one Kegiatan
     * const kegiatan = await prisma.kegiatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kegiatanUpdateArgs>(args: SelectSubset<T, kegiatanUpdateArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kegiatans.
     * @param {kegiatanDeleteManyArgs} args - Arguments to filter Kegiatans to delete.
     * @example
     * // Delete a few Kegiatans
     * const { count } = await prisma.kegiatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kegiatanDeleteManyArgs>(args?: SelectSubset<T, kegiatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kegiatanUpdateManyArgs>(args: SelectSubset<T, kegiatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kegiatans and returns the data updated in the database.
     * @param {kegiatanUpdateManyAndReturnArgs} args - Arguments to update many Kegiatans.
     * @example
     * // Update many Kegiatans
     * const kegiatan = await prisma.kegiatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kegiatans and only return the `id`
     * const kegiatanWithIdOnly = await prisma.kegiatan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends kegiatanUpdateManyAndReturnArgs>(args: SelectSubset<T, kegiatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kegiatan.
     * @param {kegiatanUpsertArgs} args - Arguments to update or create a Kegiatan.
     * @example
     * // Update or create a Kegiatan
     * const kegiatan = await prisma.kegiatan.upsert({
     *   create: {
     *     // ... data to create a Kegiatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kegiatan we want to update
     *   }
     * })
     */
    upsert<T extends kegiatanUpsertArgs>(args: SelectSubset<T, kegiatanUpsertArgs<ExtArgs>>): Prisma__kegiatanClient<$Result.GetResult<Prisma.$kegiatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kegiatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanCountArgs} args - Arguments to filter Kegiatans to count.
     * @example
     * // Count the number of Kegiatans
     * const count = await prisma.kegiatan.count({
     *   where: {
     *     // ... the filter for the Kegiatans we want to count
     *   }
     * })
    **/
    count<T extends kegiatanCountArgs>(
      args?: Subset<T, kegiatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KegiatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KegiatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KegiatanAggregateArgs>(args: Subset<T, KegiatanAggregateArgs>): Prisma.PrismaPromise<GetKegiatanAggregateType<T>>

    /**
     * Group by Kegiatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kegiatanGroupByArgs} args - Group by arguments.
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
      T extends kegiatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kegiatanGroupByArgs['orderBy'] }
        : { orderBy?: kegiatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, kegiatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKegiatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kegiatan model
   */
  readonly fields: kegiatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kegiatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kegiatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kegiatan model
   */
  interface kegiatanFieldRefs {
    readonly id: FieldRef<"kegiatan", 'Int'>
    readonly judul_kegiatan: FieldRef<"kegiatan", 'String'>
    readonly id_organisasi: FieldRef<"kegiatan", 'String'>
    readonly tanggal_kegiatan: FieldRef<"kegiatan", 'DateTime'>
    readonly lokasi: FieldRef<"kegiatan", 'String'>
    readonly jenis_kegiatan: FieldRef<"kegiatan", 'String'>
    readonly deskripsi: FieldRef<"kegiatan", 'String'>
    readonly tautan: FieldRef<"kegiatan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * kegiatan findUnique
   */
  export type kegiatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan findUniqueOrThrow
   */
  export type kegiatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan findFirst
   */
  export type kegiatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan findFirstOrThrow
   */
  export type kegiatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Filter, which kegiatan to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kegiatans.
     */
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan findMany
   */
  export type kegiatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Filter, which kegiatans to fetch.
     */
    where?: kegiatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kegiatans to fetch.
     */
    orderBy?: kegiatanOrderByWithRelationInput | kegiatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kegiatans.
     */
    cursor?: kegiatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kegiatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kegiatans.
     */
    skip?: number
    distinct?: KegiatanScalarFieldEnum | KegiatanScalarFieldEnum[]
  }

  /**
   * kegiatan create
   */
  export type kegiatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * The data needed to create a kegiatan.
     */
    data: XOR<kegiatanCreateInput, kegiatanUncheckedCreateInput>
  }

  /**
   * kegiatan createMany
   */
  export type kegiatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kegiatans.
     */
    data: kegiatanCreateManyInput | kegiatanCreateManyInput[]
  }

  /**
   * kegiatan createManyAndReturn
   */
  export type kegiatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * The data used to create many kegiatans.
     */
    data: kegiatanCreateManyInput | kegiatanCreateManyInput[]
  }

  /**
   * kegiatan update
   */
  export type kegiatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * The data needed to update a kegiatan.
     */
    data: XOR<kegiatanUpdateInput, kegiatanUncheckedUpdateInput>
    /**
     * Choose, which kegiatan to update.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan updateMany
   */
  export type kegiatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kegiatans.
     */
    data: XOR<kegiatanUpdateManyMutationInput, kegiatanUncheckedUpdateManyInput>
    /**
     * Filter which kegiatans to update
     */
    where?: kegiatanWhereInput
    /**
     * Limit how many kegiatans to update.
     */
    limit?: number
  }

  /**
   * kegiatan updateManyAndReturn
   */
  export type kegiatanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * The data used to update kegiatans.
     */
    data: XOR<kegiatanUpdateManyMutationInput, kegiatanUncheckedUpdateManyInput>
    /**
     * Filter which kegiatans to update
     */
    where?: kegiatanWhereInput
    /**
     * Limit how many kegiatans to update.
     */
    limit?: number
  }

  /**
   * kegiatan upsert
   */
  export type kegiatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * The filter to search for the kegiatan to update in case it exists.
     */
    where: kegiatanWhereUniqueInput
    /**
     * In case the kegiatan found by the `where` argument doesn't exist, create a new kegiatan with this data.
     */
    create: XOR<kegiatanCreateInput, kegiatanUncheckedCreateInput>
    /**
     * In case the kegiatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kegiatanUpdateInput, kegiatanUncheckedUpdateInput>
  }

  /**
   * kegiatan delete
   */
  export type kegiatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
    /**
     * Filter which kegiatan to delete.
     */
    where: kegiatanWhereUniqueInput
  }

  /**
   * kegiatan deleteMany
   */
  export type kegiatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kegiatans to delete
     */
    where?: kegiatanWhereInput
    /**
     * Limit how many kegiatans to delete.
     */
    limit?: number
  }

  /**
   * kegiatan without action
   */
  export type kegiatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kegiatan
     */
    select?: kegiatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kegiatan
     */
    omit?: kegiatanOmit<ExtArgs> | null
  }


  /**
   * Model organisasi
   */

  export type AggregateOrganisasi = {
    _count: OrganisasiCountAggregateOutputType | null
    _avg: OrganisasiAvgAggregateOutputType | null
    _sum: OrganisasiSumAggregateOutputType | null
    _min: OrganisasiMinAggregateOutputType | null
    _max: OrganisasiMaxAggregateOutputType | null
  }

  export type OrganisasiAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganisasiSumAggregateOutputType = {
    id: number | null
  }

  export type OrganisasiMinAggregateOutputType = {
    id: number | null
    nama_organisasi: string | null
    ketua_organisasi: string | null
    no_kontak: string | null
    tahun_dibentuk: Date | null
    pembina: string | null
  }

  export type OrganisasiMaxAggregateOutputType = {
    id: number | null
    nama_organisasi: string | null
    ketua_organisasi: string | null
    no_kontak: string | null
    tahun_dibentuk: Date | null
    pembina: string | null
  }

  export type OrganisasiCountAggregateOutputType = {
    id: number
    nama_organisasi: number
    ketua_organisasi: number
    no_kontak: number
    tahun_dibentuk: number
    pembina: number
    _all: number
  }


  export type OrganisasiAvgAggregateInputType = {
    id?: true
  }

  export type OrganisasiSumAggregateInputType = {
    id?: true
  }

  export type OrganisasiMinAggregateInputType = {
    id?: true
    nama_organisasi?: true
    ketua_organisasi?: true
    no_kontak?: true
    tahun_dibentuk?: true
    pembina?: true
  }

  export type OrganisasiMaxAggregateInputType = {
    id?: true
    nama_organisasi?: true
    ketua_organisasi?: true
    no_kontak?: true
    tahun_dibentuk?: true
    pembina?: true
  }

  export type OrganisasiCountAggregateInputType = {
    id?: true
    nama_organisasi?: true
    ketua_organisasi?: true
    no_kontak?: true
    tahun_dibentuk?: true
    pembina?: true
    _all?: true
  }

  export type OrganisasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organisasi to aggregate.
     */
    where?: organisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisasis to fetch.
     */
    orderBy?: organisasiOrderByWithRelationInput | organisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organisasis
    **/
    _count?: true | OrganisasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganisasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganisasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisasiMaxAggregateInputType
  }

  export type GetOrganisasiAggregateType<T extends OrganisasiAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisasi[P]>
      : GetScalarType<T[P], AggregateOrganisasi[P]>
  }




  export type organisasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organisasiWhereInput
    orderBy?: organisasiOrderByWithAggregationInput | organisasiOrderByWithAggregationInput[]
    by: OrganisasiScalarFieldEnum[] | OrganisasiScalarFieldEnum
    having?: organisasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisasiCountAggregateInputType | true
    _avg?: OrganisasiAvgAggregateInputType
    _sum?: OrganisasiSumAggregateInputType
    _min?: OrganisasiMinAggregateInputType
    _max?: OrganisasiMaxAggregateInputType
  }

  export type OrganisasiGroupByOutputType = {
    id: number
    nama_organisasi: string
    ketua_organisasi: string
    no_kontak: string
    tahun_dibentuk: Date
    pembina: string
    _count: OrganisasiCountAggregateOutputType | null
    _avg: OrganisasiAvgAggregateOutputType | null
    _sum: OrganisasiSumAggregateOutputType | null
    _min: OrganisasiMinAggregateOutputType | null
    _max: OrganisasiMaxAggregateOutputType | null
  }

  type GetOrganisasiGroupByPayload<T extends organisasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisasiGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisasiGroupByOutputType[P]>
        }
      >
    >


  export type organisasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_organisasi?: boolean
    ketua_organisasi?: boolean
    no_kontak?: boolean
    tahun_dibentuk?: boolean
    pembina?: boolean
  }, ExtArgs["result"]["organisasi"]>

  export type organisasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_organisasi?: boolean
    ketua_organisasi?: boolean
    no_kontak?: boolean
    tahun_dibentuk?: boolean
    pembina?: boolean
  }, ExtArgs["result"]["organisasi"]>

  export type organisasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_organisasi?: boolean
    ketua_organisasi?: boolean
    no_kontak?: boolean
    tahun_dibentuk?: boolean
    pembina?: boolean
  }, ExtArgs["result"]["organisasi"]>

  export type organisasiSelectScalar = {
    id?: boolean
    nama_organisasi?: boolean
    ketua_organisasi?: boolean
    no_kontak?: boolean
    tahun_dibentuk?: boolean
    pembina?: boolean
  }

  export type organisasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_organisasi" | "ketua_organisasi" | "no_kontak" | "tahun_dibentuk" | "pembina", ExtArgs["result"]["organisasi"]>

  export type $organisasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organisasi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_organisasi: string
      ketua_organisasi: string
      no_kontak: string
      tahun_dibentuk: Date
      pembina: string
    }, ExtArgs["result"]["organisasi"]>
    composites: {}
  }

  type organisasiGetPayload<S extends boolean | null | undefined | organisasiDefaultArgs> = $Result.GetResult<Prisma.$organisasiPayload, S>

  type organisasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organisasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganisasiCountAggregateInputType | true
    }

  export interface organisasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organisasi'], meta: { name: 'organisasi' } }
    /**
     * Find zero or one Organisasi that matches the filter.
     * @param {organisasiFindUniqueArgs} args - Arguments to find a Organisasi
     * @example
     * // Get one Organisasi
     * const organisasi = await prisma.organisasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organisasiFindUniqueArgs>(args: SelectSubset<T, organisasiFindUniqueArgs<ExtArgs>>): Prisma__organisasiClient<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organisasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organisasiFindUniqueOrThrowArgs} args - Arguments to find a Organisasi
     * @example
     * // Get one Organisasi
     * const organisasi = await prisma.organisasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organisasiFindUniqueOrThrowArgs>(args: SelectSubset<T, organisasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organisasiClient<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisasiFindFirstArgs} args - Arguments to find a Organisasi
     * @example
     * // Get one Organisasi
     * const organisasi = await prisma.organisasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organisasiFindFirstArgs>(args?: SelectSubset<T, organisasiFindFirstArgs<ExtArgs>>): Prisma__organisasiClient<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organisasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisasiFindFirstOrThrowArgs} args - Arguments to find a Organisasi
     * @example
     * // Get one Organisasi
     * const organisasi = await prisma.organisasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organisasiFindFirstOrThrowArgs>(args?: SelectSubset<T, organisasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__organisasiClient<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organisasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisasis
     * const organisasis = await prisma.organisasi.findMany()
     * 
     * // Get first 10 Organisasis
     * const organisasis = await prisma.organisasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organisasiWithIdOnly = await prisma.organisasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organisasiFindManyArgs>(args?: SelectSubset<T, organisasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organisasi.
     * @param {organisasiCreateArgs} args - Arguments to create a Organisasi.
     * @example
     * // Create one Organisasi
     * const Organisasi = await prisma.organisasi.create({
     *   data: {
     *     // ... data to create a Organisasi
     *   }
     * })
     * 
     */
    create<T extends organisasiCreateArgs>(args: SelectSubset<T, organisasiCreateArgs<ExtArgs>>): Prisma__organisasiClient<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organisasis.
     * @param {organisasiCreateManyArgs} args - Arguments to create many Organisasis.
     * @example
     * // Create many Organisasis
     * const organisasi = await prisma.organisasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organisasiCreateManyArgs>(args?: SelectSubset<T, organisasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organisasis and returns the data saved in the database.
     * @param {organisasiCreateManyAndReturnArgs} args - Arguments to create many Organisasis.
     * @example
     * // Create many Organisasis
     * const organisasi = await prisma.organisasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organisasis and only return the `id`
     * const organisasiWithIdOnly = await prisma.organisasi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organisasiCreateManyAndReturnArgs>(args?: SelectSubset<T, organisasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organisasi.
     * @param {organisasiDeleteArgs} args - Arguments to delete one Organisasi.
     * @example
     * // Delete one Organisasi
     * const Organisasi = await prisma.organisasi.delete({
     *   where: {
     *     // ... filter to delete one Organisasi
     *   }
     * })
     * 
     */
    delete<T extends organisasiDeleteArgs>(args: SelectSubset<T, organisasiDeleteArgs<ExtArgs>>): Prisma__organisasiClient<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organisasi.
     * @param {organisasiUpdateArgs} args - Arguments to update one Organisasi.
     * @example
     * // Update one Organisasi
     * const organisasi = await prisma.organisasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organisasiUpdateArgs>(args: SelectSubset<T, organisasiUpdateArgs<ExtArgs>>): Prisma__organisasiClient<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organisasis.
     * @param {organisasiDeleteManyArgs} args - Arguments to filter Organisasis to delete.
     * @example
     * // Delete a few Organisasis
     * const { count } = await prisma.organisasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organisasiDeleteManyArgs>(args?: SelectSubset<T, organisasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisasis
     * const organisasi = await prisma.organisasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organisasiUpdateManyArgs>(args: SelectSubset<T, organisasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisasis and returns the data updated in the database.
     * @param {organisasiUpdateManyAndReturnArgs} args - Arguments to update many Organisasis.
     * @example
     * // Update many Organisasis
     * const organisasi = await prisma.organisasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organisasis and only return the `id`
     * const organisasiWithIdOnly = await prisma.organisasi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends organisasiUpdateManyAndReturnArgs>(args: SelectSubset<T, organisasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organisasi.
     * @param {organisasiUpsertArgs} args - Arguments to update or create a Organisasi.
     * @example
     * // Update or create a Organisasi
     * const organisasi = await prisma.organisasi.upsert({
     *   create: {
     *     // ... data to create a Organisasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisasi we want to update
     *   }
     * })
     */
    upsert<T extends organisasiUpsertArgs>(args: SelectSubset<T, organisasiUpsertArgs<ExtArgs>>): Prisma__organisasiClient<$Result.GetResult<Prisma.$organisasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organisasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisasiCountArgs} args - Arguments to filter Organisasis to count.
     * @example
     * // Count the number of Organisasis
     * const count = await prisma.organisasi.count({
     *   where: {
     *     // ... the filter for the Organisasis we want to count
     *   }
     * })
    **/
    count<T extends organisasiCountArgs>(
      args?: Subset<T, organisasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganisasiAggregateArgs>(args: Subset<T, OrganisasiAggregateArgs>): Prisma.PrismaPromise<GetOrganisasiAggregateType<T>>

    /**
     * Group by Organisasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organisasiGroupByArgs} args - Group by arguments.
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
      T extends organisasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organisasiGroupByArgs['orderBy'] }
        : { orderBy?: organisasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, organisasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organisasi model
   */
  readonly fields: organisasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organisasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organisasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organisasi model
   */
  interface organisasiFieldRefs {
    readonly id: FieldRef<"organisasi", 'Int'>
    readonly nama_organisasi: FieldRef<"organisasi", 'String'>
    readonly ketua_organisasi: FieldRef<"organisasi", 'String'>
    readonly no_kontak: FieldRef<"organisasi", 'String'>
    readonly tahun_dibentuk: FieldRef<"organisasi", 'DateTime'>
    readonly pembina: FieldRef<"organisasi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * organisasi findUnique
   */
  export type organisasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * Filter, which organisasi to fetch.
     */
    where: organisasiWhereUniqueInput
  }

  /**
   * organisasi findUniqueOrThrow
   */
  export type organisasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * Filter, which organisasi to fetch.
     */
    where: organisasiWhereUniqueInput
  }

  /**
   * organisasi findFirst
   */
  export type organisasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * Filter, which organisasi to fetch.
     */
    where?: organisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisasis to fetch.
     */
    orderBy?: organisasiOrderByWithRelationInput | organisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organisasis.
     */
    cursor?: organisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organisasis.
     */
    distinct?: OrganisasiScalarFieldEnum | OrganisasiScalarFieldEnum[]
  }

  /**
   * organisasi findFirstOrThrow
   */
  export type organisasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * Filter, which organisasi to fetch.
     */
    where?: organisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisasis to fetch.
     */
    orderBy?: organisasiOrderByWithRelationInput | organisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organisasis.
     */
    cursor?: organisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organisasis.
     */
    distinct?: OrganisasiScalarFieldEnum | OrganisasiScalarFieldEnum[]
  }

  /**
   * organisasi findMany
   */
  export type organisasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * Filter, which organisasis to fetch.
     */
    where?: organisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organisasis to fetch.
     */
    orderBy?: organisasiOrderByWithRelationInput | organisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organisasis.
     */
    cursor?: organisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organisasis.
     */
    skip?: number
    distinct?: OrganisasiScalarFieldEnum | OrganisasiScalarFieldEnum[]
  }

  /**
   * organisasi create
   */
  export type organisasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * The data needed to create a organisasi.
     */
    data: XOR<organisasiCreateInput, organisasiUncheckedCreateInput>
  }

  /**
   * organisasi createMany
   */
  export type organisasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organisasis.
     */
    data: organisasiCreateManyInput | organisasiCreateManyInput[]
  }

  /**
   * organisasi createManyAndReturn
   */
  export type organisasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * The data used to create many organisasis.
     */
    data: organisasiCreateManyInput | organisasiCreateManyInput[]
  }

  /**
   * organisasi update
   */
  export type organisasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * The data needed to update a organisasi.
     */
    data: XOR<organisasiUpdateInput, organisasiUncheckedUpdateInput>
    /**
     * Choose, which organisasi to update.
     */
    where: organisasiWhereUniqueInput
  }

  /**
   * organisasi updateMany
   */
  export type organisasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organisasis.
     */
    data: XOR<organisasiUpdateManyMutationInput, organisasiUncheckedUpdateManyInput>
    /**
     * Filter which organisasis to update
     */
    where?: organisasiWhereInput
    /**
     * Limit how many organisasis to update.
     */
    limit?: number
  }

  /**
   * organisasi updateManyAndReturn
   */
  export type organisasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * The data used to update organisasis.
     */
    data: XOR<organisasiUpdateManyMutationInput, organisasiUncheckedUpdateManyInput>
    /**
     * Filter which organisasis to update
     */
    where?: organisasiWhereInput
    /**
     * Limit how many organisasis to update.
     */
    limit?: number
  }

  /**
   * organisasi upsert
   */
  export type organisasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * The filter to search for the organisasi to update in case it exists.
     */
    where: organisasiWhereUniqueInput
    /**
     * In case the organisasi found by the `where` argument doesn't exist, create a new organisasi with this data.
     */
    create: XOR<organisasiCreateInput, organisasiUncheckedCreateInput>
    /**
     * In case the organisasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organisasiUpdateInput, organisasiUncheckedUpdateInput>
  }

  /**
   * organisasi delete
   */
  export type organisasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
    /**
     * Filter which organisasi to delete.
     */
    where: organisasiWhereUniqueInput
  }

  /**
   * organisasi deleteMany
   */
  export type organisasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organisasis to delete
     */
    where?: organisasiWhereInput
    /**
     * Limit how many organisasis to delete.
     */
    limit?: number
  }

  /**
   * organisasi without action
   */
  export type organisasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organisasi
     */
    select?: organisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organisasi
     */
    omit?: organisasiOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KegiatanScalarFieldEnum: {
    id: 'id',
    judul_kegiatan: 'judul_kegiatan',
    id_organisasi: 'id_organisasi',
    tanggal_kegiatan: 'tanggal_kegiatan',
    lokasi: 'lokasi',
    jenis_kegiatan: 'jenis_kegiatan',
    deskripsi: 'deskripsi',
    tautan: 'tautan'
  };

  export type KegiatanScalarFieldEnum = (typeof KegiatanScalarFieldEnum)[keyof typeof KegiatanScalarFieldEnum]


  export const OrganisasiScalarFieldEnum: {
    id: 'id',
    nama_organisasi: 'nama_organisasi',
    ketua_organisasi: 'ketua_organisasi',
    no_kontak: 'no_kontak',
    tahun_dibentuk: 'tahun_dibentuk',
    pembina: 'pembina'
  };

  export type OrganisasiScalarFieldEnum = (typeof OrganisasiScalarFieldEnum)[keyof typeof OrganisasiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type kegiatanWhereInput = {
    AND?: kegiatanWhereInput | kegiatanWhereInput[]
    OR?: kegiatanWhereInput[]
    NOT?: kegiatanWhereInput | kegiatanWhereInput[]
    id?: IntFilter<"kegiatan"> | number
    judul_kegiatan?: StringFilter<"kegiatan"> | string
    id_organisasi?: StringFilter<"kegiatan"> | string
    tanggal_kegiatan?: DateTimeFilter<"kegiatan"> | Date | string
    lokasi?: StringFilter<"kegiatan"> | string
    jenis_kegiatan?: StringFilter<"kegiatan"> | string
    deskripsi?: StringFilter<"kegiatan"> | string
    tautan?: StringFilter<"kegiatan"> | string
  }

  export type kegiatanOrderByWithRelationInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    id_organisasi?: SortOrder
    tanggal_kegiatan?: SortOrder
    lokasi?: SortOrder
    jenis_kegiatan?: SortOrder
    deskripsi?: SortOrder
    tautan?: SortOrder
  }

  export type kegiatanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: kegiatanWhereInput | kegiatanWhereInput[]
    OR?: kegiatanWhereInput[]
    NOT?: kegiatanWhereInput | kegiatanWhereInput[]
    judul_kegiatan?: StringFilter<"kegiatan"> | string
    id_organisasi?: StringFilter<"kegiatan"> | string
    tanggal_kegiatan?: DateTimeFilter<"kegiatan"> | Date | string
    lokasi?: StringFilter<"kegiatan"> | string
    jenis_kegiatan?: StringFilter<"kegiatan"> | string
    deskripsi?: StringFilter<"kegiatan"> | string
    tautan?: StringFilter<"kegiatan"> | string
  }, "id">

  export type kegiatanOrderByWithAggregationInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    id_organisasi?: SortOrder
    tanggal_kegiatan?: SortOrder
    lokasi?: SortOrder
    jenis_kegiatan?: SortOrder
    deskripsi?: SortOrder
    tautan?: SortOrder
    _count?: kegiatanCountOrderByAggregateInput
    _avg?: kegiatanAvgOrderByAggregateInput
    _max?: kegiatanMaxOrderByAggregateInput
    _min?: kegiatanMinOrderByAggregateInput
    _sum?: kegiatanSumOrderByAggregateInput
  }

  export type kegiatanScalarWhereWithAggregatesInput = {
    AND?: kegiatanScalarWhereWithAggregatesInput | kegiatanScalarWhereWithAggregatesInput[]
    OR?: kegiatanScalarWhereWithAggregatesInput[]
    NOT?: kegiatanScalarWhereWithAggregatesInput | kegiatanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"kegiatan"> | number
    judul_kegiatan?: StringWithAggregatesFilter<"kegiatan"> | string
    id_organisasi?: StringWithAggregatesFilter<"kegiatan"> | string
    tanggal_kegiatan?: DateTimeWithAggregatesFilter<"kegiatan"> | Date | string
    lokasi?: StringWithAggregatesFilter<"kegiatan"> | string
    jenis_kegiatan?: StringWithAggregatesFilter<"kegiatan"> | string
    deskripsi?: StringWithAggregatesFilter<"kegiatan"> | string
    tautan?: StringWithAggregatesFilter<"kegiatan"> | string
  }

  export type organisasiWhereInput = {
    AND?: organisasiWhereInput | organisasiWhereInput[]
    OR?: organisasiWhereInput[]
    NOT?: organisasiWhereInput | organisasiWhereInput[]
    id?: IntFilter<"organisasi"> | number
    nama_organisasi?: StringFilter<"organisasi"> | string
    ketua_organisasi?: StringFilter<"organisasi"> | string
    no_kontak?: StringFilter<"organisasi"> | string
    tahun_dibentuk?: DateTimeFilter<"organisasi"> | Date | string
    pembina?: StringFilter<"organisasi"> | string
  }

  export type organisasiOrderByWithRelationInput = {
    id?: SortOrder
    nama_organisasi?: SortOrder
    ketua_organisasi?: SortOrder
    no_kontak?: SortOrder
    tahun_dibentuk?: SortOrder
    pembina?: SortOrder
  }

  export type organisasiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: organisasiWhereInput | organisasiWhereInput[]
    OR?: organisasiWhereInput[]
    NOT?: organisasiWhereInput | organisasiWhereInput[]
    nama_organisasi?: StringFilter<"organisasi"> | string
    ketua_organisasi?: StringFilter<"organisasi"> | string
    no_kontak?: StringFilter<"organisasi"> | string
    tahun_dibentuk?: DateTimeFilter<"organisasi"> | Date | string
    pembina?: StringFilter<"organisasi"> | string
  }, "id">

  export type organisasiOrderByWithAggregationInput = {
    id?: SortOrder
    nama_organisasi?: SortOrder
    ketua_organisasi?: SortOrder
    no_kontak?: SortOrder
    tahun_dibentuk?: SortOrder
    pembina?: SortOrder
    _count?: organisasiCountOrderByAggregateInput
    _avg?: organisasiAvgOrderByAggregateInput
    _max?: organisasiMaxOrderByAggregateInput
    _min?: organisasiMinOrderByAggregateInput
    _sum?: organisasiSumOrderByAggregateInput
  }

  export type organisasiScalarWhereWithAggregatesInput = {
    AND?: organisasiScalarWhereWithAggregatesInput | organisasiScalarWhereWithAggregatesInput[]
    OR?: organisasiScalarWhereWithAggregatesInput[]
    NOT?: organisasiScalarWhereWithAggregatesInput | organisasiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"organisasi"> | number
    nama_organisasi?: StringWithAggregatesFilter<"organisasi"> | string
    ketua_organisasi?: StringWithAggregatesFilter<"organisasi"> | string
    no_kontak?: StringWithAggregatesFilter<"organisasi"> | string
    tahun_dibentuk?: DateTimeWithAggregatesFilter<"organisasi"> | Date | string
    pembina?: StringWithAggregatesFilter<"organisasi"> | string
  }

  export type kegiatanCreateInput = {
    judul_kegiatan: string
    id_organisasi: string
    tanggal_kegiatan: Date | string
    lokasi: string
    jenis_kegiatan: string
    deskripsi: string
    tautan: string
  }

  export type kegiatanUncheckedCreateInput = {
    id?: number
    judul_kegiatan: string
    id_organisasi: string
    tanggal_kegiatan: Date | string
    lokasi: string
    jenis_kegiatan: string
    deskripsi: string
    tautan: string
  }

  export type kegiatanUpdateInput = {
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    id_organisasi?: StringFieldUpdateOperationsInput | string
    tanggal_kegiatan?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jenis_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    tautan?: StringFieldUpdateOperationsInput | string
  }

  export type kegiatanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    id_organisasi?: StringFieldUpdateOperationsInput | string
    tanggal_kegiatan?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jenis_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    tautan?: StringFieldUpdateOperationsInput | string
  }

  export type kegiatanCreateManyInput = {
    id?: number
    judul_kegiatan: string
    id_organisasi: string
    tanggal_kegiatan: Date | string
    lokasi: string
    jenis_kegiatan: string
    deskripsi: string
    tautan: string
  }

  export type kegiatanUpdateManyMutationInput = {
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    id_organisasi?: StringFieldUpdateOperationsInput | string
    tanggal_kegiatan?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jenis_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    tautan?: StringFieldUpdateOperationsInput | string
  }

  export type kegiatanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul_kegiatan?: StringFieldUpdateOperationsInput | string
    id_organisasi?: StringFieldUpdateOperationsInput | string
    tanggal_kegiatan?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: StringFieldUpdateOperationsInput | string
    jenis_kegiatan?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    tautan?: StringFieldUpdateOperationsInput | string
  }

  export type organisasiCreateInput = {
    nama_organisasi: string
    ketua_organisasi: string
    no_kontak: string
    tahun_dibentuk: Date | string
    pembina: string
  }

  export type organisasiUncheckedCreateInput = {
    id?: number
    nama_organisasi: string
    ketua_organisasi: string
    no_kontak: string
    tahun_dibentuk: Date | string
    pembina: string
  }

  export type organisasiUpdateInput = {
    nama_organisasi?: StringFieldUpdateOperationsInput | string
    ketua_organisasi?: StringFieldUpdateOperationsInput | string
    no_kontak?: StringFieldUpdateOperationsInput | string
    tahun_dibentuk?: DateTimeFieldUpdateOperationsInput | Date | string
    pembina?: StringFieldUpdateOperationsInput | string
  }

  export type organisasiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_organisasi?: StringFieldUpdateOperationsInput | string
    ketua_organisasi?: StringFieldUpdateOperationsInput | string
    no_kontak?: StringFieldUpdateOperationsInput | string
    tahun_dibentuk?: DateTimeFieldUpdateOperationsInput | Date | string
    pembina?: StringFieldUpdateOperationsInput | string
  }

  export type organisasiCreateManyInput = {
    id?: number
    nama_organisasi: string
    ketua_organisasi: string
    no_kontak: string
    tahun_dibentuk: Date | string
    pembina: string
  }

  export type organisasiUpdateManyMutationInput = {
    nama_organisasi?: StringFieldUpdateOperationsInput | string
    ketua_organisasi?: StringFieldUpdateOperationsInput | string
    no_kontak?: StringFieldUpdateOperationsInput | string
    tahun_dibentuk?: DateTimeFieldUpdateOperationsInput | Date | string
    pembina?: StringFieldUpdateOperationsInput | string
  }

  export type organisasiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_organisasi?: StringFieldUpdateOperationsInput | string
    ketua_organisasi?: StringFieldUpdateOperationsInput | string
    no_kontak?: StringFieldUpdateOperationsInput | string
    tahun_dibentuk?: DateTimeFieldUpdateOperationsInput | Date | string
    pembina?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type kegiatanCountOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    id_organisasi?: SortOrder
    tanggal_kegiatan?: SortOrder
    lokasi?: SortOrder
    jenis_kegiatan?: SortOrder
    deskripsi?: SortOrder
    tautan?: SortOrder
  }

  export type kegiatanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type kegiatanMaxOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    id_organisasi?: SortOrder
    tanggal_kegiatan?: SortOrder
    lokasi?: SortOrder
    jenis_kegiatan?: SortOrder
    deskripsi?: SortOrder
    tautan?: SortOrder
  }

  export type kegiatanMinOrderByAggregateInput = {
    id?: SortOrder
    judul_kegiatan?: SortOrder
    id_organisasi?: SortOrder
    tanggal_kegiatan?: SortOrder
    lokasi?: SortOrder
    jenis_kegiatan?: SortOrder
    deskripsi?: SortOrder
    tautan?: SortOrder
  }

  export type kegiatanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type organisasiCountOrderByAggregateInput = {
    id?: SortOrder
    nama_organisasi?: SortOrder
    ketua_organisasi?: SortOrder
    no_kontak?: SortOrder
    tahun_dibentuk?: SortOrder
    pembina?: SortOrder
  }

  export type organisasiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type organisasiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_organisasi?: SortOrder
    ketua_organisasi?: SortOrder
    no_kontak?: SortOrder
    tahun_dibentuk?: SortOrder
    pembina?: SortOrder
  }

  export type organisasiMinOrderByAggregateInput = {
    id?: SortOrder
    nama_organisasi?: SortOrder
    ketua_organisasi?: SortOrder
    no_kontak?: SortOrder
    tahun_dibentuk?: SortOrder
    pembina?: SortOrder
  }

  export type organisasiSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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