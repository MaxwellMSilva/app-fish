
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
 * Model Operador
 * 
 */
export type Operador = $Result.DefaultSelection<Prisma.$OperadorPayload>
/**
 * Model Corte
 * 
 */
export type Corte = $Result.DefaultSelection<Prisma.$CortePayload>
/**
 * Model Pesagem
 * 
 */
export type Pesagem = $Result.DefaultSelection<Prisma.$PesagemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Operadors
 * const operadors = await prisma.operador.findMany()
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
   * // Fetch zero or more Operadors
   * const operadors = await prisma.operador.findMany()
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
   * `prisma.operador`: Exposes CRUD operations for the **Operador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operadors
    * const operadors = await prisma.operador.findMany()
    * ```
    */
  get operador(): Prisma.OperadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.corte`: Exposes CRUD operations for the **Corte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cortes
    * const cortes = await prisma.corte.findMany()
    * ```
    */
  get corte(): Prisma.CorteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesagem`: Exposes CRUD operations for the **Pesagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesagems
    * const pesagems = await prisma.pesagem.findMany()
    * ```
    */
  get pesagem(): Prisma.PesagemDelegate<ExtArgs, ClientOptions>;
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
    Operador: 'Operador',
    Corte: 'Corte',
    Pesagem: 'Pesagem'
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
      modelProps: "operador" | "corte" | "pesagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Operador: {
        payload: Prisma.$OperadorPayload<ExtArgs>
        fields: Prisma.OperadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          findFirst: {
            args: Prisma.OperadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          findMany: {
            args: Prisma.OperadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>[]
          }
          create: {
            args: Prisma.OperadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          createMany: {
            args: Prisma.OperadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>[]
          }
          delete: {
            args: Prisma.OperadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          update: {
            args: Prisma.OperadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          deleteMany: {
            args: Prisma.OperadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>[]
          }
          upsert: {
            args: Prisma.OperadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperadorPayload>
          }
          aggregate: {
            args: Prisma.OperadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperador>
          }
          groupBy: {
            args: Prisma.OperadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperadorCountArgs<ExtArgs>
            result: $Utils.Optional<OperadorCountAggregateOutputType> | number
          }
        }
      }
      Corte: {
        payload: Prisma.$CortePayload<ExtArgs>
        fields: Prisma.CorteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CorteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CorteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>
          }
          findFirst: {
            args: Prisma.CorteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CorteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>
          }
          findMany: {
            args: Prisma.CorteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>[]
          }
          create: {
            args: Prisma.CorteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>
          }
          createMany: {
            args: Prisma.CorteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CorteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>[]
          }
          delete: {
            args: Prisma.CorteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>
          }
          update: {
            args: Prisma.CorteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>
          }
          deleteMany: {
            args: Prisma.CorteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CorteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CorteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>[]
          }
          upsert: {
            args: Prisma.CorteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CortePayload>
          }
          aggregate: {
            args: Prisma.CorteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorte>
          }
          groupBy: {
            args: Prisma.CorteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CorteCountArgs<ExtArgs>
            result: $Utils.Optional<CorteCountAggregateOutputType> | number
          }
        }
      }
      Pesagem: {
        payload: Prisma.$PesagemPayload<ExtArgs>
        fields: Prisma.PesagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>
          }
          findFirst: {
            args: Prisma.PesagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>
          }
          findMany: {
            args: Prisma.PesagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>[]
          }
          create: {
            args: Prisma.PesagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>
          }
          createMany: {
            args: Prisma.PesagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PesagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>[]
          }
          delete: {
            args: Prisma.PesagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>
          }
          update: {
            args: Prisma.PesagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>
          }
          deleteMany: {
            args: Prisma.PesagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PesagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>[]
          }
          upsert: {
            args: Prisma.PesagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesagemPayload>
          }
          aggregate: {
            args: Prisma.PesagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesagem>
          }
          groupBy: {
            args: Prisma.PesagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesagemCountArgs<ExtArgs>
            result: $Utils.Optional<PesagemCountAggregateOutputType> | number
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
    operador?: OperadorOmit
    corte?: CorteOmit
    pesagem?: PesagemOmit
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
   * Count Type OperadorCountOutputType
   */

  export type OperadorCountOutputType = {
    pesagens: number
  }

  export type OperadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesagens?: boolean | OperadorCountOutputTypeCountPesagensArgs
  }

  // Custom InputTypes
  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperadorCountOutputType
     */
    select?: OperadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperadorCountOutputType without action
   */
  export type OperadorCountOutputTypeCountPesagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesagemWhereInput
  }


  /**
   * Count Type CorteCountOutputType
   */

  export type CorteCountOutputType = {
    pesagens: number
  }

  export type CorteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesagens?: boolean | CorteCountOutputTypeCountPesagensArgs
  }

  // Custom InputTypes
  /**
   * CorteCountOutputType without action
   */
  export type CorteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorteCountOutputType
     */
    select?: CorteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CorteCountOutputType without action
   */
  export type CorteCountOutputTypeCountPesagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Operador
   */

  export type AggregateOperador = {
    _count: OperadorCountAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  export type OperadorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    ativo: boolean | null
    createdAt: Date | null
  }

  export type OperadorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    ativo: boolean | null
    createdAt: Date | null
  }

  export type OperadorCountAggregateOutputType = {
    id: number
    nome: number
    ativo: number
    createdAt: number
    _all: number
  }


  export type OperadorMinAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    createdAt?: true
  }

  export type OperadorMaxAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    createdAt?: true
  }

  export type OperadorCountAggregateInputType = {
    id?: true
    nome?: true
    ativo?: true
    createdAt?: true
    _all?: true
  }

  export type OperadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operador to aggregate.
     */
    where?: OperadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operadors to fetch.
     */
    orderBy?: OperadorOrderByWithRelationInput | OperadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operadors
    **/
    _count?: true | OperadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperadorMaxAggregateInputType
  }

  export type GetOperadorAggregateType<T extends OperadorAggregateArgs> = {
        [P in keyof T & keyof AggregateOperador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperador[P]>
      : GetScalarType<T[P], AggregateOperador[P]>
  }




  export type OperadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperadorWhereInput
    orderBy?: OperadorOrderByWithAggregationInput | OperadorOrderByWithAggregationInput[]
    by: OperadorScalarFieldEnum[] | OperadorScalarFieldEnum
    having?: OperadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperadorCountAggregateInputType | true
    _min?: OperadorMinAggregateInputType
    _max?: OperadorMaxAggregateInputType
  }

  export type OperadorGroupByOutputType = {
    id: string
    nome: string
    ativo: boolean
    createdAt: Date
    _count: OperadorCountAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  type GetOperadorGroupByPayload<T extends OperadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperadorGroupByOutputType[P]>
            : GetScalarType<T[P], OperadorGroupByOutputType[P]>
        }
      >
    >


  export type OperadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ativo?: boolean
    createdAt?: boolean
    pesagens?: boolean | Operador$pesagensArgs<ExtArgs>
    _count?: boolean | OperadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operador"]>

  export type OperadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ativo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["operador"]>

  export type OperadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ativo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["operador"]>

  export type OperadorSelectScalar = {
    id?: boolean
    nome?: boolean
    ativo?: boolean
    createdAt?: boolean
  }

  export type OperadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "ativo" | "createdAt", ExtArgs["result"]["operador"]>
  export type OperadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesagens?: boolean | Operador$pesagensArgs<ExtArgs>
    _count?: boolean | OperadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OperadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OperadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operador"
    objects: {
      pesagens: Prisma.$PesagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      ativo: boolean
      createdAt: Date
    }, ExtArgs["result"]["operador"]>
    composites: {}
  }

  type OperadorGetPayload<S extends boolean | null | undefined | OperadorDefaultArgs> = $Result.GetResult<Prisma.$OperadorPayload, S>

  type OperadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperadorCountAggregateInputType | true
    }

  export interface OperadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operador'], meta: { name: 'Operador' } }
    /**
     * Find zero or one Operador that matches the filter.
     * @param {OperadorFindUniqueArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperadorFindUniqueArgs>(args: SelectSubset<T, OperadorFindUniqueArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperadorFindUniqueOrThrowArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperadorFindUniqueOrThrowArgs>(args: SelectSubset<T, OperadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorFindFirstArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperadorFindFirstArgs>(args?: SelectSubset<T, OperadorFindFirstArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorFindFirstOrThrowArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperadorFindFirstOrThrowArgs>(args?: SelectSubset<T, OperadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operadors
     * const operadors = await prisma.operador.findMany()
     * 
     * // Get first 10 Operadors
     * const operadors = await prisma.operador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operadorWithIdOnly = await prisma.operador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperadorFindManyArgs>(args?: SelectSubset<T, OperadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operador.
     * @param {OperadorCreateArgs} args - Arguments to create a Operador.
     * @example
     * // Create one Operador
     * const Operador = await prisma.operador.create({
     *   data: {
     *     // ... data to create a Operador
     *   }
     * })
     * 
     */
    create<T extends OperadorCreateArgs>(args: SelectSubset<T, OperadorCreateArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operadors.
     * @param {OperadorCreateManyArgs} args - Arguments to create many Operadors.
     * @example
     * // Create many Operadors
     * const operador = await prisma.operador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperadorCreateManyArgs>(args?: SelectSubset<T, OperadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operadors and returns the data saved in the database.
     * @param {OperadorCreateManyAndReturnArgs} args - Arguments to create many Operadors.
     * @example
     * // Create many Operadors
     * const operador = await prisma.operador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operadors and only return the `id`
     * const operadorWithIdOnly = await prisma.operador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperadorCreateManyAndReturnArgs>(args?: SelectSubset<T, OperadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operador.
     * @param {OperadorDeleteArgs} args - Arguments to delete one Operador.
     * @example
     * // Delete one Operador
     * const Operador = await prisma.operador.delete({
     *   where: {
     *     // ... filter to delete one Operador
     *   }
     * })
     * 
     */
    delete<T extends OperadorDeleteArgs>(args: SelectSubset<T, OperadorDeleteArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operador.
     * @param {OperadorUpdateArgs} args - Arguments to update one Operador.
     * @example
     * // Update one Operador
     * const operador = await prisma.operador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperadorUpdateArgs>(args: SelectSubset<T, OperadorUpdateArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operadors.
     * @param {OperadorDeleteManyArgs} args - Arguments to filter Operadors to delete.
     * @example
     * // Delete a few Operadors
     * const { count } = await prisma.operador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperadorDeleteManyArgs>(args?: SelectSubset<T, OperadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operadors
     * const operador = await prisma.operador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperadorUpdateManyArgs>(args: SelectSubset<T, OperadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operadors and returns the data updated in the database.
     * @param {OperadorUpdateManyAndReturnArgs} args - Arguments to update many Operadors.
     * @example
     * // Update many Operadors
     * const operador = await prisma.operador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operadors and only return the `id`
     * const operadorWithIdOnly = await prisma.operador.updateManyAndReturn({
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
    updateManyAndReturn<T extends OperadorUpdateManyAndReturnArgs>(args: SelectSubset<T, OperadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operador.
     * @param {OperadorUpsertArgs} args - Arguments to update or create a Operador.
     * @example
     * // Update or create a Operador
     * const operador = await prisma.operador.upsert({
     *   create: {
     *     // ... data to create a Operador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operador we want to update
     *   }
     * })
     */
    upsert<T extends OperadorUpsertArgs>(args: SelectSubset<T, OperadorUpsertArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorCountArgs} args - Arguments to filter Operadors to count.
     * @example
     * // Count the number of Operadors
     * const count = await prisma.operador.count({
     *   where: {
     *     // ... the filter for the Operadors we want to count
     *   }
     * })
    **/
    count<T extends OperadorCountArgs>(
      args?: Subset<T, OperadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperadorAggregateArgs>(args: Subset<T, OperadorAggregateArgs>): Prisma.PrismaPromise<GetOperadorAggregateType<T>>

    /**
     * Group by Operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorGroupByArgs} args - Group by arguments.
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
      T extends OperadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperadorGroupByArgs['orderBy'] }
        : { orderBy?: OperadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operador model
   */
  readonly fields: OperadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pesagens<T extends Operador$pesagensArgs<ExtArgs> = {}>(args?: Subset<T, Operador$pesagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Operador model
   */
  interface OperadorFieldRefs {
    readonly id: FieldRef<"Operador", 'String'>
    readonly nome: FieldRef<"Operador", 'String'>
    readonly ativo: FieldRef<"Operador", 'Boolean'>
    readonly createdAt: FieldRef<"Operador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operador findUnique
   */
  export type OperadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operador to fetch.
     */
    where: OperadorWhereUniqueInput
  }

  /**
   * Operador findUniqueOrThrow
   */
  export type OperadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operador to fetch.
     */
    where: OperadorWhereUniqueInput
  }

  /**
   * Operador findFirst
   */
  export type OperadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operador to fetch.
     */
    where?: OperadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operadors to fetch.
     */
    orderBy?: OperadorOrderByWithRelationInput | OperadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operadors.
     */
    cursor?: OperadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operadors.
     */
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * Operador findFirstOrThrow
   */
  export type OperadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operador to fetch.
     */
    where?: OperadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operadors to fetch.
     */
    orderBy?: OperadorOrderByWithRelationInput | OperadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operadors.
     */
    cursor?: OperadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operadors.
     */
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * Operador findMany
   */
  export type OperadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter, which Operadors to fetch.
     */
    where?: OperadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operadors to fetch.
     */
    orderBy?: OperadorOrderByWithRelationInput | OperadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operadors.
     */
    cursor?: OperadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operadors.
     */
    skip?: number
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * Operador create
   */
  export type OperadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Operador.
     */
    data: XOR<OperadorCreateInput, OperadorUncheckedCreateInput>
  }

  /**
   * Operador createMany
   */
  export type OperadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operadors.
     */
    data: OperadorCreateManyInput | OperadorCreateManyInput[]
  }

  /**
   * Operador createManyAndReturn
   */
  export type OperadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * The data used to create many Operadors.
     */
    data: OperadorCreateManyInput | OperadorCreateManyInput[]
  }

  /**
   * Operador update
   */
  export type OperadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Operador.
     */
    data: XOR<OperadorUpdateInput, OperadorUncheckedUpdateInput>
    /**
     * Choose, which Operador to update.
     */
    where: OperadorWhereUniqueInput
  }

  /**
   * Operador updateMany
   */
  export type OperadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operadors.
     */
    data: XOR<OperadorUpdateManyMutationInput, OperadorUncheckedUpdateManyInput>
    /**
     * Filter which Operadors to update
     */
    where?: OperadorWhereInput
    /**
     * Limit how many Operadors to update.
     */
    limit?: number
  }

  /**
   * Operador updateManyAndReturn
   */
  export type OperadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * The data used to update Operadors.
     */
    data: XOR<OperadorUpdateManyMutationInput, OperadorUncheckedUpdateManyInput>
    /**
     * Filter which Operadors to update
     */
    where?: OperadorWhereInput
    /**
     * Limit how many Operadors to update.
     */
    limit?: number
  }

  /**
   * Operador upsert
   */
  export type OperadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Operador to update in case it exists.
     */
    where: OperadorWhereUniqueInput
    /**
     * In case the Operador found by the `where` argument doesn't exist, create a new Operador with this data.
     */
    create: XOR<OperadorCreateInput, OperadorUncheckedCreateInput>
    /**
     * In case the Operador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperadorUpdateInput, OperadorUncheckedUpdateInput>
  }

  /**
   * Operador delete
   */
  export type OperadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
    /**
     * Filter which Operador to delete.
     */
    where: OperadorWhereUniqueInput
  }

  /**
   * Operador deleteMany
   */
  export type OperadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operadors to delete
     */
    where?: OperadorWhereInput
    /**
     * Limit how many Operadors to delete.
     */
    limit?: number
  }

  /**
   * Operador.pesagens
   */
  export type Operador$pesagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    where?: PesagemWhereInput
    orderBy?: PesagemOrderByWithRelationInput | PesagemOrderByWithRelationInput[]
    cursor?: PesagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesagemScalarFieldEnum | PesagemScalarFieldEnum[]
  }

  /**
   * Operador without action
   */
  export type OperadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operador
     */
    select?: OperadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operador
     */
    omit?: OperadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperadorInclude<ExtArgs> | null
  }


  /**
   * Model Corte
   */

  export type AggregateCorte = {
    _count: CorteCountAggregateOutputType | null
    _min: CorteMinAggregateOutputType | null
    _max: CorteMaxAggregateOutputType | null
  }

  export type CorteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    imagem: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CorteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    imagem: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CorteCountAggregateOutputType = {
    id: number
    nome: number
    imagem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CorteMinAggregateInputType = {
    id?: true
    nome?: true
    imagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CorteMaxAggregateInputType = {
    id?: true
    nome?: true
    imagem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CorteCountAggregateInputType = {
    id?: true
    nome?: true
    imagem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CorteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Corte to aggregate.
     */
    where?: CorteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cortes to fetch.
     */
    orderBy?: CorteOrderByWithRelationInput | CorteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CorteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cortes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cortes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cortes
    **/
    _count?: true | CorteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorteMaxAggregateInputType
  }

  export type GetCorteAggregateType<T extends CorteAggregateArgs> = {
        [P in keyof T & keyof AggregateCorte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorte[P]>
      : GetScalarType<T[P], AggregateCorte[P]>
  }




  export type CorteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CorteWhereInput
    orderBy?: CorteOrderByWithAggregationInput | CorteOrderByWithAggregationInput[]
    by: CorteScalarFieldEnum[] | CorteScalarFieldEnum
    having?: CorteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorteCountAggregateInputType | true
    _min?: CorteMinAggregateInputType
    _max?: CorteMaxAggregateInputType
  }

  export type CorteGroupByOutputType = {
    id: string
    nome: string
    imagem: string | null
    createdAt: Date
    updatedAt: Date
    _count: CorteCountAggregateOutputType | null
    _min: CorteMinAggregateOutputType | null
    _max: CorteMaxAggregateOutputType | null
  }

  type GetCorteGroupByPayload<T extends CorteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorteGroupByOutputType[P]>
            : GetScalarType<T[P], CorteGroupByOutputType[P]>
        }
      >
    >


  export type CorteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pesagens?: boolean | Corte$pesagensArgs<ExtArgs>
    _count?: boolean | CorteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corte"]>

  export type CorteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["corte"]>

  export type CorteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    imagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["corte"]>

  export type CorteSelectScalar = {
    id?: boolean
    nome?: boolean
    imagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CorteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "imagem" | "createdAt" | "updatedAt", ExtArgs["result"]["corte"]>
  export type CorteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesagens?: boolean | Corte$pesagensArgs<ExtArgs>
    _count?: boolean | CorteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CorteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CorteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CortePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Corte"
    objects: {
      pesagens: Prisma.$PesagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      imagem: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["corte"]>
    composites: {}
  }

  type CorteGetPayload<S extends boolean | null | undefined | CorteDefaultArgs> = $Result.GetResult<Prisma.$CortePayload, S>

  type CorteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CorteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorteCountAggregateInputType | true
    }

  export interface CorteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Corte'], meta: { name: 'Corte' } }
    /**
     * Find zero or one Corte that matches the filter.
     * @param {CorteFindUniqueArgs} args - Arguments to find a Corte
     * @example
     * // Get one Corte
     * const corte = await prisma.corte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CorteFindUniqueArgs>(args: SelectSubset<T, CorteFindUniqueArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Corte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CorteFindUniqueOrThrowArgs} args - Arguments to find a Corte
     * @example
     * // Get one Corte
     * const corte = await prisma.corte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CorteFindUniqueOrThrowArgs>(args: SelectSubset<T, CorteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorteFindFirstArgs} args - Arguments to find a Corte
     * @example
     * // Get one Corte
     * const corte = await prisma.corte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CorteFindFirstArgs>(args?: SelectSubset<T, CorteFindFirstArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorteFindFirstOrThrowArgs} args - Arguments to find a Corte
     * @example
     * // Get one Corte
     * const corte = await prisma.corte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CorteFindFirstOrThrowArgs>(args?: SelectSubset<T, CorteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cortes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cortes
     * const cortes = await prisma.corte.findMany()
     * 
     * // Get first 10 Cortes
     * const cortes = await prisma.corte.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const corteWithIdOnly = await prisma.corte.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CorteFindManyArgs>(args?: SelectSubset<T, CorteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Corte.
     * @param {CorteCreateArgs} args - Arguments to create a Corte.
     * @example
     * // Create one Corte
     * const Corte = await prisma.corte.create({
     *   data: {
     *     // ... data to create a Corte
     *   }
     * })
     * 
     */
    create<T extends CorteCreateArgs>(args: SelectSubset<T, CorteCreateArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cortes.
     * @param {CorteCreateManyArgs} args - Arguments to create many Cortes.
     * @example
     * // Create many Cortes
     * const corte = await prisma.corte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CorteCreateManyArgs>(args?: SelectSubset<T, CorteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cortes and returns the data saved in the database.
     * @param {CorteCreateManyAndReturnArgs} args - Arguments to create many Cortes.
     * @example
     * // Create many Cortes
     * const corte = await prisma.corte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cortes and only return the `id`
     * const corteWithIdOnly = await prisma.corte.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CorteCreateManyAndReturnArgs>(args?: SelectSubset<T, CorteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Corte.
     * @param {CorteDeleteArgs} args - Arguments to delete one Corte.
     * @example
     * // Delete one Corte
     * const Corte = await prisma.corte.delete({
     *   where: {
     *     // ... filter to delete one Corte
     *   }
     * })
     * 
     */
    delete<T extends CorteDeleteArgs>(args: SelectSubset<T, CorteDeleteArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Corte.
     * @param {CorteUpdateArgs} args - Arguments to update one Corte.
     * @example
     * // Update one Corte
     * const corte = await prisma.corte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CorteUpdateArgs>(args: SelectSubset<T, CorteUpdateArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cortes.
     * @param {CorteDeleteManyArgs} args - Arguments to filter Cortes to delete.
     * @example
     * // Delete a few Cortes
     * const { count } = await prisma.corte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CorteDeleteManyArgs>(args?: SelectSubset<T, CorteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cortes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cortes
     * const corte = await prisma.corte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CorteUpdateManyArgs>(args: SelectSubset<T, CorteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cortes and returns the data updated in the database.
     * @param {CorteUpdateManyAndReturnArgs} args - Arguments to update many Cortes.
     * @example
     * // Update many Cortes
     * const corte = await prisma.corte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cortes and only return the `id`
     * const corteWithIdOnly = await prisma.corte.updateManyAndReturn({
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
    updateManyAndReturn<T extends CorteUpdateManyAndReturnArgs>(args: SelectSubset<T, CorteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Corte.
     * @param {CorteUpsertArgs} args - Arguments to update or create a Corte.
     * @example
     * // Update or create a Corte
     * const corte = await prisma.corte.upsert({
     *   create: {
     *     // ... data to create a Corte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Corte we want to update
     *   }
     * })
     */
    upsert<T extends CorteUpsertArgs>(args: SelectSubset<T, CorteUpsertArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cortes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorteCountArgs} args - Arguments to filter Cortes to count.
     * @example
     * // Count the number of Cortes
     * const count = await prisma.corte.count({
     *   where: {
     *     // ... the filter for the Cortes we want to count
     *   }
     * })
    **/
    count<T extends CorteCountArgs>(
      args?: Subset<T, CorteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Corte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CorteAggregateArgs>(args: Subset<T, CorteAggregateArgs>): Prisma.PrismaPromise<GetCorteAggregateType<T>>

    /**
     * Group by Corte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorteGroupByArgs} args - Group by arguments.
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
      T extends CorteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CorteGroupByArgs['orderBy'] }
        : { orderBy?: CorteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CorteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Corte model
   */
  readonly fields: CorteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Corte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CorteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pesagens<T extends Corte$pesagensArgs<ExtArgs> = {}>(args?: Subset<T, Corte$pesagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Corte model
   */
  interface CorteFieldRefs {
    readonly id: FieldRef<"Corte", 'String'>
    readonly nome: FieldRef<"Corte", 'String'>
    readonly imagem: FieldRef<"Corte", 'String'>
    readonly createdAt: FieldRef<"Corte", 'DateTime'>
    readonly updatedAt: FieldRef<"Corte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Corte findUnique
   */
  export type CorteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * Filter, which Corte to fetch.
     */
    where: CorteWhereUniqueInput
  }

  /**
   * Corte findUniqueOrThrow
   */
  export type CorteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * Filter, which Corte to fetch.
     */
    where: CorteWhereUniqueInput
  }

  /**
   * Corte findFirst
   */
  export type CorteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * Filter, which Corte to fetch.
     */
    where?: CorteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cortes to fetch.
     */
    orderBy?: CorteOrderByWithRelationInput | CorteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cortes.
     */
    cursor?: CorteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cortes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cortes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cortes.
     */
    distinct?: CorteScalarFieldEnum | CorteScalarFieldEnum[]
  }

  /**
   * Corte findFirstOrThrow
   */
  export type CorteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * Filter, which Corte to fetch.
     */
    where?: CorteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cortes to fetch.
     */
    orderBy?: CorteOrderByWithRelationInput | CorteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cortes.
     */
    cursor?: CorteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cortes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cortes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cortes.
     */
    distinct?: CorteScalarFieldEnum | CorteScalarFieldEnum[]
  }

  /**
   * Corte findMany
   */
  export type CorteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * Filter, which Cortes to fetch.
     */
    where?: CorteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cortes to fetch.
     */
    orderBy?: CorteOrderByWithRelationInput | CorteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cortes.
     */
    cursor?: CorteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cortes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cortes.
     */
    skip?: number
    distinct?: CorteScalarFieldEnum | CorteScalarFieldEnum[]
  }

  /**
   * Corte create
   */
  export type CorteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * The data needed to create a Corte.
     */
    data: XOR<CorteCreateInput, CorteUncheckedCreateInput>
  }

  /**
   * Corte createMany
   */
  export type CorteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cortes.
     */
    data: CorteCreateManyInput | CorteCreateManyInput[]
  }

  /**
   * Corte createManyAndReturn
   */
  export type CorteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * The data used to create many Cortes.
     */
    data: CorteCreateManyInput | CorteCreateManyInput[]
  }

  /**
   * Corte update
   */
  export type CorteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * The data needed to update a Corte.
     */
    data: XOR<CorteUpdateInput, CorteUncheckedUpdateInput>
    /**
     * Choose, which Corte to update.
     */
    where: CorteWhereUniqueInput
  }

  /**
   * Corte updateMany
   */
  export type CorteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cortes.
     */
    data: XOR<CorteUpdateManyMutationInput, CorteUncheckedUpdateManyInput>
    /**
     * Filter which Cortes to update
     */
    where?: CorteWhereInput
    /**
     * Limit how many Cortes to update.
     */
    limit?: number
  }

  /**
   * Corte updateManyAndReturn
   */
  export type CorteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * The data used to update Cortes.
     */
    data: XOR<CorteUpdateManyMutationInput, CorteUncheckedUpdateManyInput>
    /**
     * Filter which Cortes to update
     */
    where?: CorteWhereInput
    /**
     * Limit how many Cortes to update.
     */
    limit?: number
  }

  /**
   * Corte upsert
   */
  export type CorteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * The filter to search for the Corte to update in case it exists.
     */
    where: CorteWhereUniqueInput
    /**
     * In case the Corte found by the `where` argument doesn't exist, create a new Corte with this data.
     */
    create: XOR<CorteCreateInput, CorteUncheckedCreateInput>
    /**
     * In case the Corte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CorteUpdateInput, CorteUncheckedUpdateInput>
  }

  /**
   * Corte delete
   */
  export type CorteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
    /**
     * Filter which Corte to delete.
     */
    where: CorteWhereUniqueInput
  }

  /**
   * Corte deleteMany
   */
  export type CorteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cortes to delete
     */
    where?: CorteWhereInput
    /**
     * Limit how many Cortes to delete.
     */
    limit?: number
  }

  /**
   * Corte.pesagens
   */
  export type Corte$pesagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    where?: PesagemWhereInput
    orderBy?: PesagemOrderByWithRelationInput | PesagemOrderByWithRelationInput[]
    cursor?: PesagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesagemScalarFieldEnum | PesagemScalarFieldEnum[]
  }

  /**
   * Corte without action
   */
  export type CorteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Corte
     */
    select?: CorteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Corte
     */
    omit?: CorteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorteInclude<ExtArgs> | null
  }


  /**
   * Model Pesagem
   */

  export type AggregatePesagem = {
    _count: PesagemCountAggregateOutputType | null
    _avg: PesagemAvgAggregateOutputType | null
    _sum: PesagemSumAggregateOutputType | null
    _min: PesagemMinAggregateOutputType | null
    _max: PesagemMaxAggregateOutputType | null
  }

  export type PesagemAvgAggregateOutputType = {
    peso: number | null
  }

  export type PesagemSumAggregateOutputType = {
    peso: number | null
  }

  export type PesagemMinAggregateOutputType = {
    id: string | null
    peso: number | null
    tipoPesagem: string | null
    corteId: string | null
    operadorId: string | null
  }

  export type PesagemMaxAggregateOutputType = {
    id: string | null
    peso: number | null
    tipoPesagem: string | null
    corteId: string | null
    operadorId: string | null
  }

  export type PesagemCountAggregateOutputType = {
    id: number
    peso: number
    tipoPesagem: number
    corteId: number
    operadorId: number
    _all: number
  }


  export type PesagemAvgAggregateInputType = {
    peso?: true
  }

  export type PesagemSumAggregateInputType = {
    peso?: true
  }

  export type PesagemMinAggregateInputType = {
    id?: true
    peso?: true
    tipoPesagem?: true
    corteId?: true
    operadorId?: true
  }

  export type PesagemMaxAggregateInputType = {
    id?: true
    peso?: true
    tipoPesagem?: true
    corteId?: true
    operadorId?: true
  }

  export type PesagemCountAggregateInputType = {
    id?: true
    peso?: true
    tipoPesagem?: true
    corteId?: true
    operadorId?: true
    _all?: true
  }

  export type PesagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesagem to aggregate.
     */
    where?: PesagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesagems to fetch.
     */
    orderBy?: PesagemOrderByWithRelationInput | PesagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pesagems
    **/
    _count?: true | PesagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesagemMaxAggregateInputType
  }

  export type GetPesagemAggregateType<T extends PesagemAggregateArgs> = {
        [P in keyof T & keyof AggregatePesagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesagem[P]>
      : GetScalarType<T[P], AggregatePesagem[P]>
  }




  export type PesagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesagemWhereInput
    orderBy?: PesagemOrderByWithAggregationInput | PesagemOrderByWithAggregationInput[]
    by: PesagemScalarFieldEnum[] | PesagemScalarFieldEnum
    having?: PesagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesagemCountAggregateInputType | true
    _avg?: PesagemAvgAggregateInputType
    _sum?: PesagemSumAggregateInputType
    _min?: PesagemMinAggregateInputType
    _max?: PesagemMaxAggregateInputType
  }

  export type PesagemGroupByOutputType = {
    id: string
    peso: number
    tipoPesagem: string
    corteId: string
    operadorId: string
    _count: PesagemCountAggregateOutputType | null
    _avg: PesagemAvgAggregateOutputType | null
    _sum: PesagemSumAggregateOutputType | null
    _min: PesagemMinAggregateOutputType | null
    _max: PesagemMaxAggregateOutputType | null
  }

  type GetPesagemGroupByPayload<T extends PesagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesagemGroupByOutputType[P]>
            : GetScalarType<T[P], PesagemGroupByOutputType[P]>
        }
      >
    >


  export type PesagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peso?: boolean
    tipoPesagem?: boolean
    corteId?: boolean
    operadorId?: boolean
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesagem"]>

  export type PesagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peso?: boolean
    tipoPesagem?: boolean
    corteId?: boolean
    operadorId?: boolean
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesagem"]>

  export type PesagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peso?: boolean
    tipoPesagem?: boolean
    corteId?: boolean
    operadorId?: boolean
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesagem"]>

  export type PesagemSelectScalar = {
    id?: boolean
    peso?: boolean
    tipoPesagem?: boolean
    corteId?: boolean
    operadorId?: boolean
  }

  export type PesagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peso" | "tipoPesagem" | "corteId" | "operadorId", ExtArgs["result"]["pesagem"]>
  export type PesagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }
  export type PesagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }
  export type PesagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }

  export type $PesagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pesagem"
    objects: {
      corte: Prisma.$CortePayload<ExtArgs>
      operador: Prisma.$OperadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      peso: number
      tipoPesagem: string
      corteId: string
      operadorId: string
    }, ExtArgs["result"]["pesagem"]>
    composites: {}
  }

  type PesagemGetPayload<S extends boolean | null | undefined | PesagemDefaultArgs> = $Result.GetResult<Prisma.$PesagemPayload, S>

  type PesagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesagemCountAggregateInputType | true
    }

  export interface PesagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pesagem'], meta: { name: 'Pesagem' } }
    /**
     * Find zero or one Pesagem that matches the filter.
     * @param {PesagemFindUniqueArgs} args - Arguments to find a Pesagem
     * @example
     * // Get one Pesagem
     * const pesagem = await prisma.pesagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesagemFindUniqueArgs>(args: SelectSubset<T, PesagemFindUniqueArgs<ExtArgs>>): Prisma__PesagemClient<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pesagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesagemFindUniqueOrThrowArgs} args - Arguments to find a Pesagem
     * @example
     * // Get one Pesagem
     * const pesagem = await prisma.pesagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesagemFindUniqueOrThrowArgs>(args: SelectSubset<T, PesagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesagemClient<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesagemFindFirstArgs} args - Arguments to find a Pesagem
     * @example
     * // Get one Pesagem
     * const pesagem = await prisma.pesagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesagemFindFirstArgs>(args?: SelectSubset<T, PesagemFindFirstArgs<ExtArgs>>): Prisma__PesagemClient<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesagemFindFirstOrThrowArgs} args - Arguments to find a Pesagem
     * @example
     * // Get one Pesagem
     * const pesagem = await prisma.pesagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesagemFindFirstOrThrowArgs>(args?: SelectSubset<T, PesagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesagemClient<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesagems
     * const pesagems = await prisma.pesagem.findMany()
     * 
     * // Get first 10 Pesagems
     * const pesagems = await prisma.pesagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesagemWithIdOnly = await prisma.pesagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PesagemFindManyArgs>(args?: SelectSubset<T, PesagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pesagem.
     * @param {PesagemCreateArgs} args - Arguments to create a Pesagem.
     * @example
     * // Create one Pesagem
     * const Pesagem = await prisma.pesagem.create({
     *   data: {
     *     // ... data to create a Pesagem
     *   }
     * })
     * 
     */
    create<T extends PesagemCreateArgs>(args: SelectSubset<T, PesagemCreateArgs<ExtArgs>>): Prisma__PesagemClient<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesagems.
     * @param {PesagemCreateManyArgs} args - Arguments to create many Pesagems.
     * @example
     * // Create many Pesagems
     * const pesagem = await prisma.pesagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesagemCreateManyArgs>(args?: SelectSubset<T, PesagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pesagems and returns the data saved in the database.
     * @param {PesagemCreateManyAndReturnArgs} args - Arguments to create many Pesagems.
     * @example
     * // Create many Pesagems
     * const pesagem = await prisma.pesagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pesagems and only return the `id`
     * const pesagemWithIdOnly = await prisma.pesagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PesagemCreateManyAndReturnArgs>(args?: SelectSubset<T, PesagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pesagem.
     * @param {PesagemDeleteArgs} args - Arguments to delete one Pesagem.
     * @example
     * // Delete one Pesagem
     * const Pesagem = await prisma.pesagem.delete({
     *   where: {
     *     // ... filter to delete one Pesagem
     *   }
     * })
     * 
     */
    delete<T extends PesagemDeleteArgs>(args: SelectSubset<T, PesagemDeleteArgs<ExtArgs>>): Prisma__PesagemClient<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pesagem.
     * @param {PesagemUpdateArgs} args - Arguments to update one Pesagem.
     * @example
     * // Update one Pesagem
     * const pesagem = await prisma.pesagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesagemUpdateArgs>(args: SelectSubset<T, PesagemUpdateArgs<ExtArgs>>): Prisma__PesagemClient<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesagems.
     * @param {PesagemDeleteManyArgs} args - Arguments to filter Pesagems to delete.
     * @example
     * // Delete a few Pesagems
     * const { count } = await prisma.pesagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesagemDeleteManyArgs>(args?: SelectSubset<T, PesagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesagems
     * const pesagem = await prisma.pesagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesagemUpdateManyArgs>(args: SelectSubset<T, PesagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesagems and returns the data updated in the database.
     * @param {PesagemUpdateManyAndReturnArgs} args - Arguments to update many Pesagems.
     * @example
     * // Update many Pesagems
     * const pesagem = await prisma.pesagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pesagems and only return the `id`
     * const pesagemWithIdOnly = await prisma.pesagem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PesagemUpdateManyAndReturnArgs>(args: SelectSubset<T, PesagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pesagem.
     * @param {PesagemUpsertArgs} args - Arguments to update or create a Pesagem.
     * @example
     * // Update or create a Pesagem
     * const pesagem = await prisma.pesagem.upsert({
     *   create: {
     *     // ... data to create a Pesagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pesagem we want to update
     *   }
     * })
     */
    upsert<T extends PesagemUpsertArgs>(args: SelectSubset<T, PesagemUpsertArgs<ExtArgs>>): Prisma__PesagemClient<$Result.GetResult<Prisma.$PesagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesagemCountArgs} args - Arguments to filter Pesagems to count.
     * @example
     * // Count the number of Pesagems
     * const count = await prisma.pesagem.count({
     *   where: {
     *     // ... the filter for the Pesagems we want to count
     *   }
     * })
    **/
    count<T extends PesagemCountArgs>(
      args?: Subset<T, PesagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pesagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesagemAggregateArgs>(args: Subset<T, PesagemAggregateArgs>): Prisma.PrismaPromise<GetPesagemAggregateType<T>>

    /**
     * Group by Pesagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesagemGroupByArgs} args - Group by arguments.
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
      T extends PesagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesagemGroupByArgs['orderBy'] }
        : { orderBy?: PesagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PesagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pesagem model
   */
  readonly fields: PesagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pesagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    corte<T extends CorteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CorteDefaultArgs<ExtArgs>>): Prisma__CorteClient<$Result.GetResult<Prisma.$CortePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operador<T extends OperadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperadorDefaultArgs<ExtArgs>>): Prisma__OperadorClient<$Result.GetResult<Prisma.$OperadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pesagem model
   */
  interface PesagemFieldRefs {
    readonly id: FieldRef<"Pesagem", 'String'>
    readonly peso: FieldRef<"Pesagem", 'Float'>
    readonly tipoPesagem: FieldRef<"Pesagem", 'String'>
    readonly corteId: FieldRef<"Pesagem", 'String'>
    readonly operadorId: FieldRef<"Pesagem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pesagem findUnique
   */
  export type PesagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * Filter, which Pesagem to fetch.
     */
    where: PesagemWhereUniqueInput
  }

  /**
   * Pesagem findUniqueOrThrow
   */
  export type PesagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * Filter, which Pesagem to fetch.
     */
    where: PesagemWhereUniqueInput
  }

  /**
   * Pesagem findFirst
   */
  export type PesagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * Filter, which Pesagem to fetch.
     */
    where?: PesagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesagems to fetch.
     */
    orderBy?: PesagemOrderByWithRelationInput | PesagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesagems.
     */
    cursor?: PesagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesagems.
     */
    distinct?: PesagemScalarFieldEnum | PesagemScalarFieldEnum[]
  }

  /**
   * Pesagem findFirstOrThrow
   */
  export type PesagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * Filter, which Pesagem to fetch.
     */
    where?: PesagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesagems to fetch.
     */
    orderBy?: PesagemOrderByWithRelationInput | PesagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesagems.
     */
    cursor?: PesagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesagems.
     */
    distinct?: PesagemScalarFieldEnum | PesagemScalarFieldEnum[]
  }

  /**
   * Pesagem findMany
   */
  export type PesagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * Filter, which Pesagems to fetch.
     */
    where?: PesagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesagems to fetch.
     */
    orderBy?: PesagemOrderByWithRelationInput | PesagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pesagems.
     */
    cursor?: PesagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesagems.
     */
    skip?: number
    distinct?: PesagemScalarFieldEnum | PesagemScalarFieldEnum[]
  }

  /**
   * Pesagem create
   */
  export type PesagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Pesagem.
     */
    data: XOR<PesagemCreateInput, PesagemUncheckedCreateInput>
  }

  /**
   * Pesagem createMany
   */
  export type PesagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pesagems.
     */
    data: PesagemCreateManyInput | PesagemCreateManyInput[]
  }

  /**
   * Pesagem createManyAndReturn
   */
  export type PesagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * The data used to create many Pesagems.
     */
    data: PesagemCreateManyInput | PesagemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pesagem update
   */
  export type PesagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Pesagem.
     */
    data: XOR<PesagemUpdateInput, PesagemUncheckedUpdateInput>
    /**
     * Choose, which Pesagem to update.
     */
    where: PesagemWhereUniqueInput
  }

  /**
   * Pesagem updateMany
   */
  export type PesagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pesagems.
     */
    data: XOR<PesagemUpdateManyMutationInput, PesagemUncheckedUpdateManyInput>
    /**
     * Filter which Pesagems to update
     */
    where?: PesagemWhereInput
    /**
     * Limit how many Pesagems to update.
     */
    limit?: number
  }

  /**
   * Pesagem updateManyAndReturn
   */
  export type PesagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * The data used to update Pesagems.
     */
    data: XOR<PesagemUpdateManyMutationInput, PesagemUncheckedUpdateManyInput>
    /**
     * Filter which Pesagems to update
     */
    where?: PesagemWhereInput
    /**
     * Limit how many Pesagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pesagem upsert
   */
  export type PesagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Pesagem to update in case it exists.
     */
    where: PesagemWhereUniqueInput
    /**
     * In case the Pesagem found by the `where` argument doesn't exist, create a new Pesagem with this data.
     */
    create: XOR<PesagemCreateInput, PesagemUncheckedCreateInput>
    /**
     * In case the Pesagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesagemUpdateInput, PesagemUncheckedUpdateInput>
  }

  /**
   * Pesagem delete
   */
  export type PesagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
    /**
     * Filter which Pesagem to delete.
     */
    where: PesagemWhereUniqueInput
  }

  /**
   * Pesagem deleteMany
   */
  export type PesagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesagems to delete
     */
    where?: PesagemWhereInput
    /**
     * Limit how many Pesagems to delete.
     */
    limit?: number
  }

  /**
   * Pesagem without action
   */
  export type PesagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesagem
     */
    select?: PesagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesagem
     */
    omit?: PesagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesagemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OperadorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    ativo: 'ativo',
    createdAt: 'createdAt'
  };

  export type OperadorScalarFieldEnum = (typeof OperadorScalarFieldEnum)[keyof typeof OperadorScalarFieldEnum]


  export const CorteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    imagem: 'imagem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CorteScalarFieldEnum = (typeof CorteScalarFieldEnum)[keyof typeof CorteScalarFieldEnum]


  export const PesagemScalarFieldEnum: {
    id: 'id',
    peso: 'peso',
    tipoPesagem: 'tipoPesagem',
    corteId: 'corteId',
    operadorId: 'operadorId'
  };

  export type PesagemScalarFieldEnum = (typeof PesagemScalarFieldEnum)[keyof typeof PesagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type OperadorWhereInput = {
    AND?: OperadorWhereInput | OperadorWhereInput[]
    OR?: OperadorWhereInput[]
    NOT?: OperadorWhereInput | OperadorWhereInput[]
    id?: StringFilter<"Operador"> | string
    nome?: StringFilter<"Operador"> | string
    ativo?: BoolFilter<"Operador"> | boolean
    createdAt?: DateTimeFilter<"Operador"> | Date | string
    pesagens?: PesagemListRelationFilter
  }

  export type OperadorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    pesagens?: PesagemOrderByRelationAggregateInput
  }

  export type OperadorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperadorWhereInput | OperadorWhereInput[]
    OR?: OperadorWhereInput[]
    NOT?: OperadorWhereInput | OperadorWhereInput[]
    nome?: StringFilter<"Operador"> | string
    ativo?: BoolFilter<"Operador"> | boolean
    createdAt?: DateTimeFilter<"Operador"> | Date | string
    pesagens?: PesagemListRelationFilter
  }, "id">

  export type OperadorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    _count?: OperadorCountOrderByAggregateInput
    _max?: OperadorMaxOrderByAggregateInput
    _min?: OperadorMinOrderByAggregateInput
  }

  export type OperadorScalarWhereWithAggregatesInput = {
    AND?: OperadorScalarWhereWithAggregatesInput | OperadorScalarWhereWithAggregatesInput[]
    OR?: OperadorScalarWhereWithAggregatesInput[]
    NOT?: OperadorScalarWhereWithAggregatesInput | OperadorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Operador"> | string
    nome?: StringWithAggregatesFilter<"Operador"> | string
    ativo?: BoolWithAggregatesFilter<"Operador"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Operador"> | Date | string
  }

  export type CorteWhereInput = {
    AND?: CorteWhereInput | CorteWhereInput[]
    OR?: CorteWhereInput[]
    NOT?: CorteWhereInput | CorteWhereInput[]
    id?: StringFilter<"Corte"> | string
    nome?: StringFilter<"Corte"> | string
    imagem?: StringNullableFilter<"Corte"> | string | null
    createdAt?: DateTimeFilter<"Corte"> | Date | string
    updatedAt?: DateTimeFilter<"Corte"> | Date | string
    pesagens?: PesagemListRelationFilter
  }

  export type CorteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pesagens?: PesagemOrderByRelationAggregateInput
  }

  export type CorteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CorteWhereInput | CorteWhereInput[]
    OR?: CorteWhereInput[]
    NOT?: CorteWhereInput | CorteWhereInput[]
    nome?: StringFilter<"Corte"> | string
    imagem?: StringNullableFilter<"Corte"> | string | null
    createdAt?: DateTimeFilter<"Corte"> | Date | string
    updatedAt?: DateTimeFilter<"Corte"> | Date | string
    pesagens?: PesagemListRelationFilter
  }, "id">

  export type CorteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CorteCountOrderByAggregateInput
    _max?: CorteMaxOrderByAggregateInput
    _min?: CorteMinOrderByAggregateInput
  }

  export type CorteScalarWhereWithAggregatesInput = {
    AND?: CorteScalarWhereWithAggregatesInput | CorteScalarWhereWithAggregatesInput[]
    OR?: CorteScalarWhereWithAggregatesInput[]
    NOT?: CorteScalarWhereWithAggregatesInput | CorteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Corte"> | string
    nome?: StringWithAggregatesFilter<"Corte"> | string
    imagem?: StringNullableWithAggregatesFilter<"Corte"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Corte"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Corte"> | Date | string
  }

  export type PesagemWhereInput = {
    AND?: PesagemWhereInput | PesagemWhereInput[]
    OR?: PesagemWhereInput[]
    NOT?: PesagemWhereInput | PesagemWhereInput[]
    id?: StringFilter<"Pesagem"> | string
    peso?: FloatFilter<"Pesagem"> | number
    tipoPesagem?: StringFilter<"Pesagem"> | string
    corteId?: StringFilter<"Pesagem"> | string
    operadorId?: StringFilter<"Pesagem"> | string
    corte?: XOR<CorteScalarRelationFilter, CorteWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
  }

  export type PesagemOrderByWithRelationInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    corteId?: SortOrder
    operadorId?: SortOrder
    corte?: CorteOrderByWithRelationInput
    operador?: OperadorOrderByWithRelationInput
  }

  export type PesagemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PesagemWhereInput | PesagemWhereInput[]
    OR?: PesagemWhereInput[]
    NOT?: PesagemWhereInput | PesagemWhereInput[]
    peso?: FloatFilter<"Pesagem"> | number
    tipoPesagem?: StringFilter<"Pesagem"> | string
    corteId?: StringFilter<"Pesagem"> | string
    operadorId?: StringFilter<"Pesagem"> | string
    corte?: XOR<CorteScalarRelationFilter, CorteWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
  }, "id">

  export type PesagemOrderByWithAggregationInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    corteId?: SortOrder
    operadorId?: SortOrder
    _count?: PesagemCountOrderByAggregateInput
    _avg?: PesagemAvgOrderByAggregateInput
    _max?: PesagemMaxOrderByAggregateInput
    _min?: PesagemMinOrderByAggregateInput
    _sum?: PesagemSumOrderByAggregateInput
  }

  export type PesagemScalarWhereWithAggregatesInput = {
    AND?: PesagemScalarWhereWithAggregatesInput | PesagemScalarWhereWithAggregatesInput[]
    OR?: PesagemScalarWhereWithAggregatesInput[]
    NOT?: PesagemScalarWhereWithAggregatesInput | PesagemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pesagem"> | string
    peso?: FloatWithAggregatesFilter<"Pesagem"> | number
    tipoPesagem?: StringWithAggregatesFilter<"Pesagem"> | string
    corteId?: StringWithAggregatesFilter<"Pesagem"> | string
    operadorId?: StringWithAggregatesFilter<"Pesagem"> | string
  }

  export type OperadorCreateInput = {
    id: string
    nome: string
    ativo?: boolean
    createdAt?: Date | string
    pesagens?: PesagemCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUncheckedCreateInput = {
    id: string
    nome: string
    ativo?: boolean
    createdAt?: Date | string
    pesagens?: PesagemUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pesagens?: PesagemUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pesagens?: PesagemUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorCreateManyInput = {
    id: string
    nome: string
    ativo?: boolean
    createdAt?: Date | string
  }

  export type OperadorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperadorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorteCreateInput = {
    id: string
    nome: string
    imagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pesagens?: PesagemCreateNestedManyWithoutCorteInput
  }

  export type CorteUncheckedCreateInput = {
    id: string
    nome: string
    imagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pesagens?: PesagemUncheckedCreateNestedManyWithoutCorteInput
  }

  export type CorteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pesagens?: PesagemUpdateManyWithoutCorteNestedInput
  }

  export type CorteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pesagens?: PesagemUncheckedUpdateManyWithoutCorteNestedInput
  }

  export type CorteCreateManyInput = {
    id: string
    nome: string
    imagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CorteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesagemCreateInput = {
    id?: string
    peso: number
    tipoPesagem: string
    corte: CorteCreateNestedOneWithoutPesagensInput
    operador: OperadorCreateNestedOneWithoutPesagensInput
  }

  export type PesagemUncheckedCreateInput = {
    id?: string
    peso: number
    tipoPesagem: string
    corteId: string
    operadorId: string
  }

  export type PesagemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    corte?: CorteUpdateOneRequiredWithoutPesagensNestedInput
    operador?: OperadorUpdateOneRequiredWithoutPesagensNestedInput
  }

  export type PesagemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    corteId?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
  }

  export type PesagemCreateManyInput = {
    id?: string
    peso: number
    tipoPesagem: string
    corteId: string
    operadorId: string
  }

  export type PesagemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
  }

  export type PesagemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    corteId?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PesagemListRelationFilter = {
    every?: PesagemWhereInput
    some?: PesagemWhereInput
    none?: PesagemWhereInput
  }

  export type PesagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperadorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
  }

  export type OperadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
  }

  export type OperadorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CorteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CorteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CorteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    imagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CorteScalarRelationFilter = {
    is?: CorteWhereInput
    isNot?: CorteWhereInput
  }

  export type OperadorScalarRelationFilter = {
    is?: OperadorWhereInput
    isNot?: OperadorWhereInput
  }

  export type PesagemCountOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    corteId?: SortOrder
    operadorId?: SortOrder
  }

  export type PesagemAvgOrderByAggregateInput = {
    peso?: SortOrder
  }

  export type PesagemMaxOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    corteId?: SortOrder
    operadorId?: SortOrder
  }

  export type PesagemMinOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    corteId?: SortOrder
    operadorId?: SortOrder
  }

  export type PesagemSumOrderByAggregateInput = {
    peso?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PesagemCreateNestedManyWithoutOperadorInput = {
    create?: XOR<PesagemCreateWithoutOperadorInput, PesagemUncheckedCreateWithoutOperadorInput> | PesagemCreateWithoutOperadorInput[] | PesagemUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: PesagemCreateOrConnectWithoutOperadorInput | PesagemCreateOrConnectWithoutOperadorInput[]
    createMany?: PesagemCreateManyOperadorInputEnvelope
    connect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
  }

  export type PesagemUncheckedCreateNestedManyWithoutOperadorInput = {
    create?: XOR<PesagemCreateWithoutOperadorInput, PesagemUncheckedCreateWithoutOperadorInput> | PesagemCreateWithoutOperadorInput[] | PesagemUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: PesagemCreateOrConnectWithoutOperadorInput | PesagemCreateOrConnectWithoutOperadorInput[]
    createMany?: PesagemCreateManyOperadorInputEnvelope
    connect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PesagemUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<PesagemCreateWithoutOperadorInput, PesagemUncheckedCreateWithoutOperadorInput> | PesagemCreateWithoutOperadorInput[] | PesagemUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: PesagemCreateOrConnectWithoutOperadorInput | PesagemCreateOrConnectWithoutOperadorInput[]
    upsert?: PesagemUpsertWithWhereUniqueWithoutOperadorInput | PesagemUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: PesagemCreateManyOperadorInputEnvelope
    set?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    disconnect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    delete?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    connect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    update?: PesagemUpdateWithWhereUniqueWithoutOperadorInput | PesagemUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: PesagemUpdateManyWithWhereWithoutOperadorInput | PesagemUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: PesagemScalarWhereInput | PesagemScalarWhereInput[]
  }

  export type PesagemUncheckedUpdateManyWithoutOperadorNestedInput = {
    create?: XOR<PesagemCreateWithoutOperadorInput, PesagemUncheckedCreateWithoutOperadorInput> | PesagemCreateWithoutOperadorInput[] | PesagemUncheckedCreateWithoutOperadorInput[]
    connectOrCreate?: PesagemCreateOrConnectWithoutOperadorInput | PesagemCreateOrConnectWithoutOperadorInput[]
    upsert?: PesagemUpsertWithWhereUniqueWithoutOperadorInput | PesagemUpsertWithWhereUniqueWithoutOperadorInput[]
    createMany?: PesagemCreateManyOperadorInputEnvelope
    set?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    disconnect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    delete?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    connect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    update?: PesagemUpdateWithWhereUniqueWithoutOperadorInput | PesagemUpdateWithWhereUniqueWithoutOperadorInput[]
    updateMany?: PesagemUpdateManyWithWhereWithoutOperadorInput | PesagemUpdateManyWithWhereWithoutOperadorInput[]
    deleteMany?: PesagemScalarWhereInput | PesagemScalarWhereInput[]
  }

  export type PesagemCreateNestedManyWithoutCorteInput = {
    create?: XOR<PesagemCreateWithoutCorteInput, PesagemUncheckedCreateWithoutCorteInput> | PesagemCreateWithoutCorteInput[] | PesagemUncheckedCreateWithoutCorteInput[]
    connectOrCreate?: PesagemCreateOrConnectWithoutCorteInput | PesagemCreateOrConnectWithoutCorteInput[]
    createMany?: PesagemCreateManyCorteInputEnvelope
    connect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
  }

  export type PesagemUncheckedCreateNestedManyWithoutCorteInput = {
    create?: XOR<PesagemCreateWithoutCorteInput, PesagemUncheckedCreateWithoutCorteInput> | PesagemCreateWithoutCorteInput[] | PesagemUncheckedCreateWithoutCorteInput[]
    connectOrCreate?: PesagemCreateOrConnectWithoutCorteInput | PesagemCreateOrConnectWithoutCorteInput[]
    createMany?: PesagemCreateManyCorteInputEnvelope
    connect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PesagemUpdateManyWithoutCorteNestedInput = {
    create?: XOR<PesagemCreateWithoutCorteInput, PesagemUncheckedCreateWithoutCorteInput> | PesagemCreateWithoutCorteInput[] | PesagemUncheckedCreateWithoutCorteInput[]
    connectOrCreate?: PesagemCreateOrConnectWithoutCorteInput | PesagemCreateOrConnectWithoutCorteInput[]
    upsert?: PesagemUpsertWithWhereUniqueWithoutCorteInput | PesagemUpsertWithWhereUniqueWithoutCorteInput[]
    createMany?: PesagemCreateManyCorteInputEnvelope
    set?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    disconnect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    delete?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    connect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    update?: PesagemUpdateWithWhereUniqueWithoutCorteInput | PesagemUpdateWithWhereUniqueWithoutCorteInput[]
    updateMany?: PesagemUpdateManyWithWhereWithoutCorteInput | PesagemUpdateManyWithWhereWithoutCorteInput[]
    deleteMany?: PesagemScalarWhereInput | PesagemScalarWhereInput[]
  }

  export type PesagemUncheckedUpdateManyWithoutCorteNestedInput = {
    create?: XOR<PesagemCreateWithoutCorteInput, PesagemUncheckedCreateWithoutCorteInput> | PesagemCreateWithoutCorteInput[] | PesagemUncheckedCreateWithoutCorteInput[]
    connectOrCreate?: PesagemCreateOrConnectWithoutCorteInput | PesagemCreateOrConnectWithoutCorteInput[]
    upsert?: PesagemUpsertWithWhereUniqueWithoutCorteInput | PesagemUpsertWithWhereUniqueWithoutCorteInput[]
    createMany?: PesagemCreateManyCorteInputEnvelope
    set?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    disconnect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    delete?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    connect?: PesagemWhereUniqueInput | PesagemWhereUniqueInput[]
    update?: PesagemUpdateWithWhereUniqueWithoutCorteInput | PesagemUpdateWithWhereUniqueWithoutCorteInput[]
    updateMany?: PesagemUpdateManyWithWhereWithoutCorteInput | PesagemUpdateManyWithWhereWithoutCorteInput[]
    deleteMany?: PesagemScalarWhereInput | PesagemScalarWhereInput[]
  }

  export type CorteCreateNestedOneWithoutPesagensInput = {
    create?: XOR<CorteCreateWithoutPesagensInput, CorteUncheckedCreateWithoutPesagensInput>
    connectOrCreate?: CorteCreateOrConnectWithoutPesagensInput
    connect?: CorteWhereUniqueInput
  }

  export type OperadorCreateNestedOneWithoutPesagensInput = {
    create?: XOR<OperadorCreateWithoutPesagensInput, OperadorUncheckedCreateWithoutPesagensInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutPesagensInput
    connect?: OperadorWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CorteUpdateOneRequiredWithoutPesagensNestedInput = {
    create?: XOR<CorteCreateWithoutPesagensInput, CorteUncheckedCreateWithoutPesagensInput>
    connectOrCreate?: CorteCreateOrConnectWithoutPesagensInput
    upsert?: CorteUpsertWithoutPesagensInput
    connect?: CorteWhereUniqueInput
    update?: XOR<XOR<CorteUpdateToOneWithWhereWithoutPesagensInput, CorteUpdateWithoutPesagensInput>, CorteUncheckedUpdateWithoutPesagensInput>
  }

  export type OperadorUpdateOneRequiredWithoutPesagensNestedInput = {
    create?: XOR<OperadorCreateWithoutPesagensInput, OperadorUncheckedCreateWithoutPesagensInput>
    connectOrCreate?: OperadorCreateOrConnectWithoutPesagensInput
    upsert?: OperadorUpsertWithoutPesagensInput
    connect?: OperadorWhereUniqueInput
    update?: XOR<XOR<OperadorUpdateToOneWithWhereWithoutPesagensInput, OperadorUpdateWithoutPesagensInput>, OperadorUncheckedUpdateWithoutPesagensInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PesagemCreateWithoutOperadorInput = {
    id?: string
    peso: number
    tipoPesagem: string
    corte: CorteCreateNestedOneWithoutPesagensInput
  }

  export type PesagemUncheckedCreateWithoutOperadorInput = {
    id?: string
    peso: number
    tipoPesagem: string
    corteId: string
  }

  export type PesagemCreateOrConnectWithoutOperadorInput = {
    where: PesagemWhereUniqueInput
    create: XOR<PesagemCreateWithoutOperadorInput, PesagemUncheckedCreateWithoutOperadorInput>
  }

  export type PesagemCreateManyOperadorInputEnvelope = {
    data: PesagemCreateManyOperadorInput | PesagemCreateManyOperadorInput[]
  }

  export type PesagemUpsertWithWhereUniqueWithoutOperadorInput = {
    where: PesagemWhereUniqueInput
    update: XOR<PesagemUpdateWithoutOperadorInput, PesagemUncheckedUpdateWithoutOperadorInput>
    create: XOR<PesagemCreateWithoutOperadorInput, PesagemUncheckedCreateWithoutOperadorInput>
  }

  export type PesagemUpdateWithWhereUniqueWithoutOperadorInput = {
    where: PesagemWhereUniqueInput
    data: XOR<PesagemUpdateWithoutOperadorInput, PesagemUncheckedUpdateWithoutOperadorInput>
  }

  export type PesagemUpdateManyWithWhereWithoutOperadorInput = {
    where: PesagemScalarWhereInput
    data: XOR<PesagemUpdateManyMutationInput, PesagemUncheckedUpdateManyWithoutOperadorInput>
  }

  export type PesagemScalarWhereInput = {
    AND?: PesagemScalarWhereInput | PesagemScalarWhereInput[]
    OR?: PesagemScalarWhereInput[]
    NOT?: PesagemScalarWhereInput | PesagemScalarWhereInput[]
    id?: StringFilter<"Pesagem"> | string
    peso?: FloatFilter<"Pesagem"> | number
    tipoPesagem?: StringFilter<"Pesagem"> | string
    corteId?: StringFilter<"Pesagem"> | string
    operadorId?: StringFilter<"Pesagem"> | string
  }

  export type PesagemCreateWithoutCorteInput = {
    id?: string
    peso: number
    tipoPesagem: string
    operador: OperadorCreateNestedOneWithoutPesagensInput
  }

  export type PesagemUncheckedCreateWithoutCorteInput = {
    id?: string
    peso: number
    tipoPesagem: string
    operadorId: string
  }

  export type PesagemCreateOrConnectWithoutCorteInput = {
    where: PesagemWhereUniqueInput
    create: XOR<PesagemCreateWithoutCorteInput, PesagemUncheckedCreateWithoutCorteInput>
  }

  export type PesagemCreateManyCorteInputEnvelope = {
    data: PesagemCreateManyCorteInput | PesagemCreateManyCorteInput[]
  }

  export type PesagemUpsertWithWhereUniqueWithoutCorteInput = {
    where: PesagemWhereUniqueInput
    update: XOR<PesagemUpdateWithoutCorteInput, PesagemUncheckedUpdateWithoutCorteInput>
    create: XOR<PesagemCreateWithoutCorteInput, PesagemUncheckedCreateWithoutCorteInput>
  }

  export type PesagemUpdateWithWhereUniqueWithoutCorteInput = {
    where: PesagemWhereUniqueInput
    data: XOR<PesagemUpdateWithoutCorteInput, PesagemUncheckedUpdateWithoutCorteInput>
  }

  export type PesagemUpdateManyWithWhereWithoutCorteInput = {
    where: PesagemScalarWhereInput
    data: XOR<PesagemUpdateManyMutationInput, PesagemUncheckedUpdateManyWithoutCorteInput>
  }

  export type CorteCreateWithoutPesagensInput = {
    id: string
    nome: string
    imagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CorteUncheckedCreateWithoutPesagensInput = {
    id: string
    nome: string
    imagem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CorteCreateOrConnectWithoutPesagensInput = {
    where: CorteWhereUniqueInput
    create: XOR<CorteCreateWithoutPesagensInput, CorteUncheckedCreateWithoutPesagensInput>
  }

  export type OperadorCreateWithoutPesagensInput = {
    id: string
    nome: string
    ativo?: boolean
    createdAt?: Date | string
  }

  export type OperadorUncheckedCreateWithoutPesagensInput = {
    id: string
    nome: string
    ativo?: boolean
    createdAt?: Date | string
  }

  export type OperadorCreateOrConnectWithoutPesagensInput = {
    where: OperadorWhereUniqueInput
    create: XOR<OperadorCreateWithoutPesagensInput, OperadorUncheckedCreateWithoutPesagensInput>
  }

  export type CorteUpsertWithoutPesagensInput = {
    update: XOR<CorteUpdateWithoutPesagensInput, CorteUncheckedUpdateWithoutPesagensInput>
    create: XOR<CorteCreateWithoutPesagensInput, CorteUncheckedCreateWithoutPesagensInput>
    where?: CorteWhereInput
  }

  export type CorteUpdateToOneWithWhereWithoutPesagensInput = {
    where?: CorteWhereInput
    data: XOR<CorteUpdateWithoutPesagensInput, CorteUncheckedUpdateWithoutPesagensInput>
  }

  export type CorteUpdateWithoutPesagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorteUncheckedUpdateWithoutPesagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperadorUpsertWithoutPesagensInput = {
    update: XOR<OperadorUpdateWithoutPesagensInput, OperadorUncheckedUpdateWithoutPesagensInput>
    create: XOR<OperadorCreateWithoutPesagensInput, OperadorUncheckedCreateWithoutPesagensInput>
    where?: OperadorWhereInput
  }

  export type OperadorUpdateToOneWithWhereWithoutPesagensInput = {
    where?: OperadorWhereInput
    data: XOR<OperadorUpdateWithoutPesagensInput, OperadorUncheckedUpdateWithoutPesagensInput>
  }

  export type OperadorUpdateWithoutPesagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperadorUncheckedUpdateWithoutPesagensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesagemCreateManyOperadorInput = {
    id?: string
    peso: number
    tipoPesagem: string
    corteId: string
  }

  export type PesagemUpdateWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    corte?: CorteUpdateOneRequiredWithoutPesagensNestedInput
  }

  export type PesagemUncheckedUpdateWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    corteId?: StringFieldUpdateOperationsInput | string
  }

  export type PesagemUncheckedUpdateManyWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    corteId?: StringFieldUpdateOperationsInput | string
  }

  export type PesagemCreateManyCorteInput = {
    id?: string
    peso: number
    tipoPesagem: string
    operadorId: string
  }

  export type PesagemUpdateWithoutCorteInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    operador?: OperadorUpdateOneRequiredWithoutPesagensNestedInput
  }

  export type PesagemUncheckedUpdateWithoutCorteInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
  }

  export type PesagemUncheckedUpdateManyWithoutCorteInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    operadorId?: StringFieldUpdateOperationsInput | string
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