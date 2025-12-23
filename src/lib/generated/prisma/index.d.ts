
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
 * Model Especie
 * 
 */
export type Especie = $Result.DefaultSelection<Prisma.$EspeciePayload>
/**
 * Model EspecieFaixaPeso
 * 
 */
export type EspecieFaixaPeso = $Result.DefaultSelection<Prisma.$EspecieFaixaPesoPayload>
/**
 * Model Fornecedor
 * 
 */
export type Fornecedor = $Result.DefaultSelection<Prisma.$FornecedorPayload>
/**
 * Model FornecedorValorEspecie
 * 
 */
export type FornecedorValorEspecie = $Result.DefaultSelection<Prisma.$FornecedorValorEspeciePayload>
/**
 * Model MapaCompra
 * 
 */
export type MapaCompra = $Result.DefaultSelection<Prisma.$MapaCompraPayload>
/**
 * Model MapaCompraFaixa
 * 
 */
export type MapaCompraFaixa = $Result.DefaultSelection<Prisma.$MapaCompraFaixaPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  /**
   * `prisma.especie`: Exposes CRUD operations for the **Especie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especies
    * const especies = await prisma.especie.findMany()
    * ```
    */
  get especie(): Prisma.EspecieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especieFaixaPeso`: Exposes CRUD operations for the **EspecieFaixaPeso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EspecieFaixaPesos
    * const especieFaixaPesos = await prisma.especieFaixaPeso.findMany()
    * ```
    */
  get especieFaixaPeso(): Prisma.EspecieFaixaPesoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fornecedor`: Exposes CRUD operations for the **Fornecedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fornecedors
    * const fornecedors = await prisma.fornecedor.findMany()
    * ```
    */
  get fornecedor(): Prisma.FornecedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fornecedorValorEspecie`: Exposes CRUD operations for the **FornecedorValorEspecie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FornecedorValorEspecies
    * const fornecedorValorEspecies = await prisma.fornecedorValorEspecie.findMany()
    * ```
    */
  get fornecedorValorEspecie(): Prisma.FornecedorValorEspecieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapaCompra`: Exposes CRUD operations for the **MapaCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapaCompras
    * const mapaCompras = await prisma.mapaCompra.findMany()
    * ```
    */
  get mapaCompra(): Prisma.MapaCompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapaCompraFaixa`: Exposes CRUD operations for the **MapaCompraFaixa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MapaCompraFaixas
    * const mapaCompraFaixas = await prisma.mapaCompraFaixa.findMany()
    * ```
    */
  get mapaCompraFaixa(): Prisma.MapaCompraFaixaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Pesagem: 'Pesagem',
    Especie: 'Especie',
    EspecieFaixaPeso: 'EspecieFaixaPeso',
    Fornecedor: 'Fornecedor',
    FornecedorValorEspecie: 'FornecedorValorEspecie',
    MapaCompra: 'MapaCompra',
    MapaCompraFaixa: 'MapaCompraFaixa'
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
      modelProps: "operador" | "corte" | "pesagem" | "especie" | "especieFaixaPeso" | "fornecedor" | "fornecedorValorEspecie" | "mapaCompra" | "mapaCompraFaixa"
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
      Especie: {
        payload: Prisma.$EspeciePayload<ExtArgs>
        fields: Prisma.EspecieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          findFirst: {
            args: Prisma.EspecieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          findMany: {
            args: Prisma.EspecieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>[]
          }
          create: {
            args: Prisma.EspecieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          createMany: {
            args: Prisma.EspecieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspecieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>[]
          }
          delete: {
            args: Prisma.EspecieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          update: {
            args: Prisma.EspecieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          deleteMany: {
            args: Prisma.EspecieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspecieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>[]
          }
          upsert: {
            args: Prisma.EspecieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspeciePayload>
          }
          aggregate: {
            args: Prisma.EspecieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecie>
          }
          groupBy: {
            args: Prisma.EspecieGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecieGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecieCountArgs<ExtArgs>
            result: $Utils.Optional<EspecieCountAggregateOutputType> | number
          }
        }
      }
      EspecieFaixaPeso: {
        payload: Prisma.$EspecieFaixaPesoPayload<ExtArgs>
        fields: Prisma.EspecieFaixaPesoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecieFaixaPesoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecieFaixaPesoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>
          }
          findFirst: {
            args: Prisma.EspecieFaixaPesoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecieFaixaPesoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>
          }
          findMany: {
            args: Prisma.EspecieFaixaPesoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>[]
          }
          create: {
            args: Prisma.EspecieFaixaPesoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>
          }
          createMany: {
            args: Prisma.EspecieFaixaPesoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspecieFaixaPesoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>[]
          }
          delete: {
            args: Prisma.EspecieFaixaPesoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>
          }
          update: {
            args: Prisma.EspecieFaixaPesoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>
          }
          deleteMany: {
            args: Prisma.EspecieFaixaPesoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecieFaixaPesoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspecieFaixaPesoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>[]
          }
          upsert: {
            args: Prisma.EspecieFaixaPesoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecieFaixaPesoPayload>
          }
          aggregate: {
            args: Prisma.EspecieFaixaPesoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecieFaixaPeso>
          }
          groupBy: {
            args: Prisma.EspecieFaixaPesoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecieFaixaPesoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecieFaixaPesoCountArgs<ExtArgs>
            result: $Utils.Optional<EspecieFaixaPesoCountAggregateOutputType> | number
          }
        }
      }
      Fornecedor: {
        payload: Prisma.$FornecedorPayload<ExtArgs>
        fields: Prisma.FornecedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FornecedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FornecedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findFirst: {
            args: Prisma.FornecedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FornecedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          findMany: {
            args: Prisma.FornecedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          create: {
            args: Prisma.FornecedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          createMany: {
            args: Prisma.FornecedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FornecedorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          delete: {
            args: Prisma.FornecedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          update: {
            args: Prisma.FornecedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          deleteMany: {
            args: Prisma.FornecedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FornecedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FornecedorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>[]
          }
          upsert: {
            args: Prisma.FornecedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorPayload>
          }
          aggregate: {
            args: Prisma.FornecedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedor>
          }
          groupBy: {
            args: Prisma.FornecedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FornecedorCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorCountAggregateOutputType> | number
          }
        }
      }
      FornecedorValorEspecie: {
        payload: Prisma.$FornecedorValorEspeciePayload<ExtArgs>
        fields: Prisma.FornecedorValorEspecieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FornecedorValorEspecieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FornecedorValorEspecieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>
          }
          findFirst: {
            args: Prisma.FornecedorValorEspecieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FornecedorValorEspecieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>
          }
          findMany: {
            args: Prisma.FornecedorValorEspecieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>[]
          }
          create: {
            args: Prisma.FornecedorValorEspecieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>
          }
          createMany: {
            args: Prisma.FornecedorValorEspecieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FornecedorValorEspecieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>[]
          }
          delete: {
            args: Prisma.FornecedorValorEspecieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>
          }
          update: {
            args: Prisma.FornecedorValorEspecieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>
          }
          deleteMany: {
            args: Prisma.FornecedorValorEspecieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FornecedorValorEspecieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FornecedorValorEspecieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>[]
          }
          upsert: {
            args: Prisma.FornecedorValorEspecieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FornecedorValorEspeciePayload>
          }
          aggregate: {
            args: Prisma.FornecedorValorEspecieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFornecedorValorEspecie>
          }
          groupBy: {
            args: Prisma.FornecedorValorEspecieGroupByArgs<ExtArgs>
            result: $Utils.Optional<FornecedorValorEspecieGroupByOutputType>[]
          }
          count: {
            args: Prisma.FornecedorValorEspecieCountArgs<ExtArgs>
            result: $Utils.Optional<FornecedorValorEspecieCountAggregateOutputType> | number
          }
        }
      }
      MapaCompra: {
        payload: Prisma.$MapaCompraPayload<ExtArgs>
        fields: Prisma.MapaCompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapaCompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapaCompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>
          }
          findFirst: {
            args: Prisma.MapaCompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapaCompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>
          }
          findMany: {
            args: Prisma.MapaCompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>[]
          }
          create: {
            args: Prisma.MapaCompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>
          }
          createMany: {
            args: Prisma.MapaCompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapaCompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>[]
          }
          delete: {
            args: Prisma.MapaCompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>
          }
          update: {
            args: Prisma.MapaCompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>
          }
          deleteMany: {
            args: Prisma.MapaCompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapaCompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapaCompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>[]
          }
          upsert: {
            args: Prisma.MapaCompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraPayload>
          }
          aggregate: {
            args: Prisma.MapaCompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapaCompra>
          }
          groupBy: {
            args: Prisma.MapaCompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapaCompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapaCompraCountArgs<ExtArgs>
            result: $Utils.Optional<MapaCompraCountAggregateOutputType> | number
          }
        }
      }
      MapaCompraFaixa: {
        payload: Prisma.$MapaCompraFaixaPayload<ExtArgs>
        fields: Prisma.MapaCompraFaixaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MapaCompraFaixaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MapaCompraFaixaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>
          }
          findFirst: {
            args: Prisma.MapaCompraFaixaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MapaCompraFaixaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>
          }
          findMany: {
            args: Prisma.MapaCompraFaixaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>[]
          }
          create: {
            args: Prisma.MapaCompraFaixaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>
          }
          createMany: {
            args: Prisma.MapaCompraFaixaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MapaCompraFaixaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>[]
          }
          delete: {
            args: Prisma.MapaCompraFaixaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>
          }
          update: {
            args: Prisma.MapaCompraFaixaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>
          }
          deleteMany: {
            args: Prisma.MapaCompraFaixaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MapaCompraFaixaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MapaCompraFaixaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>[]
          }
          upsert: {
            args: Prisma.MapaCompraFaixaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MapaCompraFaixaPayload>
          }
          aggregate: {
            args: Prisma.MapaCompraFaixaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapaCompraFaixa>
          }
          groupBy: {
            args: Prisma.MapaCompraFaixaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapaCompraFaixaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MapaCompraFaixaCountArgs<ExtArgs>
            result: $Utils.Optional<MapaCompraFaixaCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    especie?: EspecieOmit
    especieFaixaPeso?: EspecieFaixaPesoOmit
    fornecedor?: FornecedorOmit
    fornecedorValorEspecie?: FornecedorValorEspecieOmit
    mapaCompra?: MapaCompraOmit
    mapaCompraFaixa?: MapaCompraFaixaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type EspecieCountOutputType
   */

  export type EspecieCountOutputType = {
    faixas: number
    mapasCompra: number
  }

  export type EspecieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faixas?: boolean | EspecieCountOutputTypeCountFaixasArgs
    mapasCompra?: boolean | EspecieCountOutputTypeCountMapasCompraArgs
  }

  // Custom InputTypes
  /**
   * EspecieCountOutputType without action
   */
  export type EspecieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieCountOutputType
     */
    select?: EspecieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecieCountOutputType without action
   */
  export type EspecieCountOutputTypeCountFaixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecieFaixaPesoWhereInput
  }

  /**
   * EspecieCountOutputType without action
   */
  export type EspecieCountOutputTypeCountMapasCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapaCompraWhereInput
  }


  /**
   * Count Type EspecieFaixaPesoCountOutputType
   */

  export type EspecieFaixaPesoCountOutputType = {
    valoresFornecedor: number
    mapasCompraFaixa: number
  }

  export type EspecieFaixaPesoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valoresFornecedor?: boolean | EspecieFaixaPesoCountOutputTypeCountValoresFornecedorArgs
    mapasCompraFaixa?: boolean | EspecieFaixaPesoCountOutputTypeCountMapasCompraFaixaArgs
  }

  // Custom InputTypes
  /**
   * EspecieFaixaPesoCountOutputType without action
   */
  export type EspecieFaixaPesoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPesoCountOutputType
     */
    select?: EspecieFaixaPesoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecieFaixaPesoCountOutputType without action
   */
  export type EspecieFaixaPesoCountOutputTypeCountValoresFornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorValorEspecieWhereInput
  }

  /**
   * EspecieFaixaPesoCountOutputType without action
   */
  export type EspecieFaixaPesoCountOutputTypeCountMapasCompraFaixaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapaCompraFaixaWhereInput
  }


  /**
   * Count Type FornecedorCountOutputType
   */

  export type FornecedorCountOutputType = {
    valores: number
    mapasCompra: number
  }

  export type FornecedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valores?: boolean | FornecedorCountOutputTypeCountValoresArgs
    mapasCompra?: boolean | FornecedorCountOutputTypeCountMapasCompraArgs
  }

  // Custom InputTypes
  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorCountOutputType
     */
    select?: FornecedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountValoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorValorEspecieWhereInput
  }

  /**
   * FornecedorCountOutputType without action
   */
  export type FornecedorCountOutputTypeCountMapasCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapaCompraWhereInput
  }


  /**
   * Count Type MapaCompraCountOutputType
   */

  export type MapaCompraCountOutputType = {
    faixas: number
  }

  export type MapaCompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faixas?: boolean | MapaCompraCountOutputTypeCountFaixasArgs
  }

  // Custom InputTypes
  /**
   * MapaCompraCountOutputType without action
   */
  export type MapaCompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraCountOutputType
     */
    select?: MapaCompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MapaCompraCountOutputType without action
   */
  export type MapaCompraCountOutputTypeCountFaixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapaCompraFaixaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Operador
   */

  export type AggregateOperador = {
    _count: OperadorCountAggregateOutputType | null
    _avg: OperadorAvgAggregateOutputType | null
    _sum: OperadorSumAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  export type OperadorAvgAggregateOutputType = {
    matricula: number | null
    valor: Decimal | null
  }

  export type OperadorSumAggregateOutputType = {
    matricula: number | null
    valor: Decimal | null
  }

  export type OperadorMinAggregateOutputType = {
    matricula: number | null
    nome: string | null
    valor: Decimal | null
    ativo: boolean | null
    createdAt: Date | null
  }

  export type OperadorMaxAggregateOutputType = {
    matricula: number | null
    nome: string | null
    valor: Decimal | null
    ativo: boolean | null
    createdAt: Date | null
  }

  export type OperadorCountAggregateOutputType = {
    matricula: number
    nome: number
    valor: number
    ativo: number
    createdAt: number
    _all: number
  }


  export type OperadorAvgAggregateInputType = {
    matricula?: true
    valor?: true
  }

  export type OperadorSumAggregateInputType = {
    matricula?: true
    valor?: true
  }

  export type OperadorMinAggregateInputType = {
    matricula?: true
    nome?: true
    valor?: true
    ativo?: true
    createdAt?: true
  }

  export type OperadorMaxAggregateInputType = {
    matricula?: true
    nome?: true
    valor?: true
    ativo?: true
    createdAt?: true
  }

  export type OperadorCountAggregateInputType = {
    matricula?: true
    nome?: true
    valor?: true
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
     * Select which fields to average
    **/
    _avg?: OperadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperadorSumAggregateInputType
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
    _avg?: OperadorAvgAggregateInputType
    _sum?: OperadorSumAggregateInputType
    _min?: OperadorMinAggregateInputType
    _max?: OperadorMaxAggregateInputType
  }

  export type OperadorGroupByOutputType = {
    matricula: number
    nome: string
    valor: Decimal
    ativo: boolean
    createdAt: Date
    _count: OperadorCountAggregateOutputType | null
    _avg: OperadorAvgAggregateOutputType | null
    _sum: OperadorSumAggregateOutputType | null
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
    matricula?: boolean
    nome?: boolean
    valor?: boolean
    ativo?: boolean
    createdAt?: boolean
    pesagens?: boolean | Operador$pesagensArgs<ExtArgs>
    _count?: boolean | OperadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operador"]>

  export type OperadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matricula?: boolean
    nome?: boolean
    valor?: boolean
    ativo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["operador"]>

  export type OperadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matricula?: boolean
    nome?: boolean
    valor?: boolean
    ativo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["operador"]>

  export type OperadorSelectScalar = {
    matricula?: boolean
    nome?: boolean
    valor?: boolean
    ativo?: boolean
    createdAt?: boolean
  }

  export type OperadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"matricula" | "nome" | "valor" | "ativo" | "createdAt", ExtArgs["result"]["operador"]>
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
      matricula: number
      nome: string
      valor: Prisma.Decimal
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
     * // Only select the `matricula`
     * const operadorWithMatriculaOnly = await prisma.operador.findMany({ select: { matricula: true } })
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
     * // Create many Operadors and only return the `matricula`
     * const operadorWithMatriculaOnly = await prisma.operador.createManyAndReturn({
     *   select: { matricula: true },
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
     * // Update zero or more Operadors and only return the `matricula`
     * const operadorWithMatriculaOnly = await prisma.operador.updateManyAndReturn({
     *   select: { matricula: true },
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
    readonly matricula: FieldRef<"Operador", 'Int'>
    readonly nome: FieldRef<"Operador", 'String'>
    readonly valor: FieldRef<"Operador", 'Decimal'>
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
    operadorMatricula: number | null
  }

  export type PesagemSumAggregateOutputType = {
    peso: number | null
    operadorMatricula: number | null
  }

  export type PesagemMinAggregateOutputType = {
    id: string | null
    peso: number | null
    tipoPesagem: string | null
    createdAt: Date | null
    updatedAt: Date | null
    corteId: string | null
    operadorMatricula: number | null
  }

  export type PesagemMaxAggregateOutputType = {
    id: string | null
    peso: number | null
    tipoPesagem: string | null
    createdAt: Date | null
    updatedAt: Date | null
    corteId: string | null
    operadorMatricula: number | null
  }

  export type PesagemCountAggregateOutputType = {
    id: number
    peso: number
    tipoPesagem: number
    createdAt: number
    updatedAt: number
    corteId: number
    operadorMatricula: number
    _all: number
  }


  export type PesagemAvgAggregateInputType = {
    peso?: true
    operadorMatricula?: true
  }

  export type PesagemSumAggregateInputType = {
    peso?: true
    operadorMatricula?: true
  }

  export type PesagemMinAggregateInputType = {
    id?: true
    peso?: true
    tipoPesagem?: true
    createdAt?: true
    updatedAt?: true
    corteId?: true
    operadorMatricula?: true
  }

  export type PesagemMaxAggregateInputType = {
    id?: true
    peso?: true
    tipoPesagem?: true
    createdAt?: true
    updatedAt?: true
    corteId?: true
    operadorMatricula?: true
  }

  export type PesagemCountAggregateInputType = {
    id?: true
    peso?: true
    tipoPesagem?: true
    createdAt?: true
    updatedAt?: true
    corteId?: true
    operadorMatricula?: true
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
    createdAt: Date
    updatedAt: Date
    corteId: string
    operadorMatricula: number
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
    createdAt?: boolean
    updatedAt?: boolean
    corteId?: boolean
    operadorMatricula?: boolean
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesagem"]>

  export type PesagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peso?: boolean
    tipoPesagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    corteId?: boolean
    operadorMatricula?: boolean
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesagem"]>

  export type PesagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    peso?: boolean
    tipoPesagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    corteId?: boolean
    operadorMatricula?: boolean
    corte?: boolean | CorteDefaultArgs<ExtArgs>
    operador?: boolean | OperadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesagem"]>

  export type PesagemSelectScalar = {
    id?: boolean
    peso?: boolean
    tipoPesagem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    corteId?: boolean
    operadorMatricula?: boolean
  }

  export type PesagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "peso" | "tipoPesagem" | "createdAt" | "updatedAt" | "corteId" | "operadorMatricula", ExtArgs["result"]["pesagem"]>
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
      createdAt: Date
      updatedAt: Date
      corteId: string
      operadorMatricula: number
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
    readonly createdAt: FieldRef<"Pesagem", 'DateTime'>
    readonly updatedAt: FieldRef<"Pesagem", 'DateTime'>
    readonly corteId: FieldRef<"Pesagem", 'String'>
    readonly operadorMatricula: FieldRef<"Pesagem", 'Int'>
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
   * Model Especie
   */

  export type AggregateEspecie = {
    _count: EspecieCountAggregateOutputType | null
    _min: EspecieMinAggregateOutputType | null
    _max: EspecieMaxAggregateOutputType | null
  }

  export type EspecieMinAggregateOutputType = {
    id: string | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecieMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecieCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EspecieMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecieMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecieCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EspecieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especie to aggregate.
     */
    where?: EspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especies to fetch.
     */
    orderBy?: EspecieOrderByWithRelationInput | EspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especies
    **/
    _count?: true | EspecieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecieMaxAggregateInputType
  }

  export type GetEspecieAggregateType<T extends EspecieAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecie[P]>
      : GetScalarType<T[P], AggregateEspecie[P]>
  }




  export type EspecieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecieWhereInput
    orderBy?: EspecieOrderByWithAggregationInput | EspecieOrderByWithAggregationInput[]
    by: EspecieScalarFieldEnum[] | EspecieScalarFieldEnum
    having?: EspecieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecieCountAggregateInputType | true
    _min?: EspecieMinAggregateInputType
    _max?: EspecieMaxAggregateInputType
  }

  export type EspecieGroupByOutputType = {
    id: string
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: EspecieCountAggregateOutputType | null
    _min: EspecieMinAggregateOutputType | null
    _max: EspecieMaxAggregateOutputType | null
  }

  type GetEspecieGroupByPayload<T extends EspecieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecieGroupByOutputType[P]>
            : GetScalarType<T[P], EspecieGroupByOutputType[P]>
        }
      >
    >


  export type EspecieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    faixas?: boolean | Especie$faixasArgs<ExtArgs>
    mapasCompra?: boolean | Especie$mapasCompraArgs<ExtArgs>
    _count?: boolean | EspecieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especie"]>

  export type EspecieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["especie"]>

  export type EspecieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["especie"]>

  export type EspecieSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EspecieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["especie"]>
  export type EspecieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faixas?: boolean | Especie$faixasArgs<ExtArgs>
    mapasCompra?: boolean | Especie$mapasCompraArgs<ExtArgs>
    _count?: boolean | EspecieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspecieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EspecieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EspeciePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especie"
    objects: {
      faixas: Prisma.$EspecieFaixaPesoPayload<ExtArgs>[]
      mapasCompra: Prisma.$MapaCompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["especie"]>
    composites: {}
  }

  type EspecieGetPayload<S extends boolean | null | undefined | EspecieDefaultArgs> = $Result.GetResult<Prisma.$EspeciePayload, S>

  type EspecieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecieCountAggregateInputType | true
    }

  export interface EspecieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especie'], meta: { name: 'Especie' } }
    /**
     * Find zero or one Especie that matches the filter.
     * @param {EspecieFindUniqueArgs} args - Arguments to find a Especie
     * @example
     * // Get one Especie
     * const especie = await prisma.especie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecieFindUniqueArgs>(args: SelectSubset<T, EspecieFindUniqueArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecieFindUniqueOrThrowArgs} args - Arguments to find a Especie
     * @example
     * // Get one Especie
     * const especie = await prisma.especie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecieFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFindFirstArgs} args - Arguments to find a Especie
     * @example
     * // Get one Especie
     * const especie = await prisma.especie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecieFindFirstArgs>(args?: SelectSubset<T, EspecieFindFirstArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFindFirstOrThrowArgs} args - Arguments to find a Especie
     * @example
     * // Get one Especie
     * const especie = await prisma.especie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecieFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecieFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especies
     * const especies = await prisma.especie.findMany()
     * 
     * // Get first 10 Especies
     * const especies = await prisma.especie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especieWithIdOnly = await prisma.especie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecieFindManyArgs>(args?: SelectSubset<T, EspecieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especie.
     * @param {EspecieCreateArgs} args - Arguments to create a Especie.
     * @example
     * // Create one Especie
     * const Especie = await prisma.especie.create({
     *   data: {
     *     // ... data to create a Especie
     *   }
     * })
     * 
     */
    create<T extends EspecieCreateArgs>(args: SelectSubset<T, EspecieCreateArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especies.
     * @param {EspecieCreateManyArgs} args - Arguments to create many Especies.
     * @example
     * // Create many Especies
     * const especie = await prisma.especie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecieCreateManyArgs>(args?: SelectSubset<T, EspecieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Especies and returns the data saved in the database.
     * @param {EspecieCreateManyAndReturnArgs} args - Arguments to create many Especies.
     * @example
     * // Create many Especies
     * const especie = await prisma.especie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Especies and only return the `id`
     * const especieWithIdOnly = await prisma.especie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspecieCreateManyAndReturnArgs>(args?: SelectSubset<T, EspecieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Especie.
     * @param {EspecieDeleteArgs} args - Arguments to delete one Especie.
     * @example
     * // Delete one Especie
     * const Especie = await prisma.especie.delete({
     *   where: {
     *     // ... filter to delete one Especie
     *   }
     * })
     * 
     */
    delete<T extends EspecieDeleteArgs>(args: SelectSubset<T, EspecieDeleteArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especie.
     * @param {EspecieUpdateArgs} args - Arguments to update one Especie.
     * @example
     * // Update one Especie
     * const especie = await prisma.especie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecieUpdateArgs>(args: SelectSubset<T, EspecieUpdateArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especies.
     * @param {EspecieDeleteManyArgs} args - Arguments to filter Especies to delete.
     * @example
     * // Delete a few Especies
     * const { count } = await prisma.especie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecieDeleteManyArgs>(args?: SelectSubset<T, EspecieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especies
     * const especie = await prisma.especie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecieUpdateManyArgs>(args: SelectSubset<T, EspecieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especies and returns the data updated in the database.
     * @param {EspecieUpdateManyAndReturnArgs} args - Arguments to update many Especies.
     * @example
     * // Update many Especies
     * const especie = await prisma.especie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Especies and only return the `id`
     * const especieWithIdOnly = await prisma.especie.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspecieUpdateManyAndReturnArgs>(args: SelectSubset<T, EspecieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Especie.
     * @param {EspecieUpsertArgs} args - Arguments to update or create a Especie.
     * @example
     * // Update or create a Especie
     * const especie = await prisma.especie.upsert({
     *   create: {
     *     // ... data to create a Especie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especie we want to update
     *   }
     * })
     */
    upsert<T extends EspecieUpsertArgs>(args: SelectSubset<T, EspecieUpsertArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieCountArgs} args - Arguments to filter Especies to count.
     * @example
     * // Count the number of Especies
     * const count = await prisma.especie.count({
     *   where: {
     *     // ... the filter for the Especies we want to count
     *   }
     * })
    **/
    count<T extends EspecieCountArgs>(
      args?: Subset<T, EspecieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecieAggregateArgs>(args: Subset<T, EspecieAggregateArgs>): Prisma.PrismaPromise<GetEspecieAggregateType<T>>

    /**
     * Group by Especie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieGroupByArgs} args - Group by arguments.
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
      T extends EspecieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecieGroupByArgs['orderBy'] }
        : { orderBy?: EspecieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especie model
   */
  readonly fields: EspecieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faixas<T extends Especie$faixasArgs<ExtArgs> = {}>(args?: Subset<T, Especie$faixasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapasCompra<T extends Especie$mapasCompraArgs<ExtArgs> = {}>(args?: Subset<T, Especie$mapasCompraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Especie model
   */
  interface EspecieFieldRefs {
    readonly id: FieldRef<"Especie", 'String'>
    readonly nome: FieldRef<"Especie", 'String'>
    readonly createdAt: FieldRef<"Especie", 'DateTime'>
    readonly updatedAt: FieldRef<"Especie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Especie findUnique
   */
  export type EspecieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especie to fetch.
     */
    where: EspecieWhereUniqueInput
  }

  /**
   * Especie findUniqueOrThrow
   */
  export type EspecieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especie to fetch.
     */
    where: EspecieWhereUniqueInput
  }

  /**
   * Especie findFirst
   */
  export type EspecieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especie to fetch.
     */
    where?: EspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especies to fetch.
     */
    orderBy?: EspecieOrderByWithRelationInput | EspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especies.
     */
    cursor?: EspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especies.
     */
    distinct?: EspecieScalarFieldEnum | EspecieScalarFieldEnum[]
  }

  /**
   * Especie findFirstOrThrow
   */
  export type EspecieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especie to fetch.
     */
    where?: EspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especies to fetch.
     */
    orderBy?: EspecieOrderByWithRelationInput | EspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especies.
     */
    cursor?: EspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especies.
     */
    distinct?: EspecieScalarFieldEnum | EspecieScalarFieldEnum[]
  }

  /**
   * Especie findMany
   */
  export type EspecieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter, which Especies to fetch.
     */
    where?: EspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especies to fetch.
     */
    orderBy?: EspecieOrderByWithRelationInput | EspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especies.
     */
    cursor?: EspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especies.
     */
    skip?: number
    distinct?: EspecieScalarFieldEnum | EspecieScalarFieldEnum[]
  }

  /**
   * Especie create
   */
  export type EspecieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * The data needed to create a Especie.
     */
    data: XOR<EspecieCreateInput, EspecieUncheckedCreateInput>
  }

  /**
   * Especie createMany
   */
  export type EspecieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especies.
     */
    data: EspecieCreateManyInput | EspecieCreateManyInput[]
  }

  /**
   * Especie createManyAndReturn
   */
  export type EspecieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * The data used to create many Especies.
     */
    data: EspecieCreateManyInput | EspecieCreateManyInput[]
  }

  /**
   * Especie update
   */
  export type EspecieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * The data needed to update a Especie.
     */
    data: XOR<EspecieUpdateInput, EspecieUncheckedUpdateInput>
    /**
     * Choose, which Especie to update.
     */
    where: EspecieWhereUniqueInput
  }

  /**
   * Especie updateMany
   */
  export type EspecieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especies.
     */
    data: XOR<EspecieUpdateManyMutationInput, EspecieUncheckedUpdateManyInput>
    /**
     * Filter which Especies to update
     */
    where?: EspecieWhereInput
    /**
     * Limit how many Especies to update.
     */
    limit?: number
  }

  /**
   * Especie updateManyAndReturn
   */
  export type EspecieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * The data used to update Especies.
     */
    data: XOR<EspecieUpdateManyMutationInput, EspecieUncheckedUpdateManyInput>
    /**
     * Filter which Especies to update
     */
    where?: EspecieWhereInput
    /**
     * Limit how many Especies to update.
     */
    limit?: number
  }

  /**
   * Especie upsert
   */
  export type EspecieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * The filter to search for the Especie to update in case it exists.
     */
    where: EspecieWhereUniqueInput
    /**
     * In case the Especie found by the `where` argument doesn't exist, create a new Especie with this data.
     */
    create: XOR<EspecieCreateInput, EspecieUncheckedCreateInput>
    /**
     * In case the Especie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecieUpdateInput, EspecieUncheckedUpdateInput>
  }

  /**
   * Especie delete
   */
  export type EspecieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
    /**
     * Filter which Especie to delete.
     */
    where: EspecieWhereUniqueInput
  }

  /**
   * Especie deleteMany
   */
  export type EspecieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especies to delete
     */
    where?: EspecieWhereInput
    /**
     * Limit how many Especies to delete.
     */
    limit?: number
  }

  /**
   * Especie.faixas
   */
  export type Especie$faixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    where?: EspecieFaixaPesoWhereInput
    orderBy?: EspecieFaixaPesoOrderByWithRelationInput | EspecieFaixaPesoOrderByWithRelationInput[]
    cursor?: EspecieFaixaPesoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EspecieFaixaPesoScalarFieldEnum | EspecieFaixaPesoScalarFieldEnum[]
  }

  /**
   * Especie.mapasCompra
   */
  export type Especie$mapasCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    where?: MapaCompraWhereInput
    orderBy?: MapaCompraOrderByWithRelationInput | MapaCompraOrderByWithRelationInput[]
    cursor?: MapaCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapaCompraScalarFieldEnum | MapaCompraScalarFieldEnum[]
  }

  /**
   * Especie without action
   */
  export type EspecieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especie
     */
    select?: EspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especie
     */
    omit?: EspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieInclude<ExtArgs> | null
  }


  /**
   * Model EspecieFaixaPeso
   */

  export type AggregateEspecieFaixaPeso = {
    _count: EspecieFaixaPesoCountAggregateOutputType | null
    _avg: EspecieFaixaPesoAvgAggregateOutputType | null
    _sum: EspecieFaixaPesoSumAggregateOutputType | null
    _min: EspecieFaixaPesoMinAggregateOutputType | null
    _max: EspecieFaixaPesoMaxAggregateOutputType | null
  }

  export type EspecieFaixaPesoAvgAggregateOutputType = {
    pesoMin: Decimal | null
    pesoMax: Decimal | null
  }

  export type EspecieFaixaPesoSumAggregateOutputType = {
    pesoMin: Decimal | null
    pesoMax: Decimal | null
  }

  export type EspecieFaixaPesoMinAggregateOutputType = {
    id: string | null
    especieId: string | null
    pesoMin: Decimal | null
    pesoMax: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecieFaixaPesoMaxAggregateOutputType = {
    id: string | null
    especieId: string | null
    pesoMin: Decimal | null
    pesoMax: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecieFaixaPesoCountAggregateOutputType = {
    id: number
    especieId: number
    pesoMin: number
    pesoMax: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EspecieFaixaPesoAvgAggregateInputType = {
    pesoMin?: true
    pesoMax?: true
  }

  export type EspecieFaixaPesoSumAggregateInputType = {
    pesoMin?: true
    pesoMax?: true
  }

  export type EspecieFaixaPesoMinAggregateInputType = {
    id?: true
    especieId?: true
    pesoMin?: true
    pesoMax?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecieFaixaPesoMaxAggregateInputType = {
    id?: true
    especieId?: true
    pesoMin?: true
    pesoMax?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecieFaixaPesoCountAggregateInputType = {
    id?: true
    especieId?: true
    pesoMin?: true
    pesoMax?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EspecieFaixaPesoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EspecieFaixaPeso to aggregate.
     */
    where?: EspecieFaixaPesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspecieFaixaPesos to fetch.
     */
    orderBy?: EspecieFaixaPesoOrderByWithRelationInput | EspecieFaixaPesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecieFaixaPesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspecieFaixaPesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspecieFaixaPesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EspecieFaixaPesos
    **/
    _count?: true | EspecieFaixaPesoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecieFaixaPesoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecieFaixaPesoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecieFaixaPesoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecieFaixaPesoMaxAggregateInputType
  }

  export type GetEspecieFaixaPesoAggregateType<T extends EspecieFaixaPesoAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecieFaixaPeso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecieFaixaPeso[P]>
      : GetScalarType<T[P], AggregateEspecieFaixaPeso[P]>
  }




  export type EspecieFaixaPesoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecieFaixaPesoWhereInput
    orderBy?: EspecieFaixaPesoOrderByWithAggregationInput | EspecieFaixaPesoOrderByWithAggregationInput[]
    by: EspecieFaixaPesoScalarFieldEnum[] | EspecieFaixaPesoScalarFieldEnum
    having?: EspecieFaixaPesoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecieFaixaPesoCountAggregateInputType | true
    _avg?: EspecieFaixaPesoAvgAggregateInputType
    _sum?: EspecieFaixaPesoSumAggregateInputType
    _min?: EspecieFaixaPesoMinAggregateInputType
    _max?: EspecieFaixaPesoMaxAggregateInputType
  }

  export type EspecieFaixaPesoGroupByOutputType = {
    id: string
    especieId: string
    pesoMin: Decimal
    pesoMax: Decimal
    createdAt: Date
    updatedAt: Date
    _count: EspecieFaixaPesoCountAggregateOutputType | null
    _avg: EspecieFaixaPesoAvgAggregateOutputType | null
    _sum: EspecieFaixaPesoSumAggregateOutputType | null
    _min: EspecieFaixaPesoMinAggregateOutputType | null
    _max: EspecieFaixaPesoMaxAggregateOutputType | null
  }

  type GetEspecieFaixaPesoGroupByPayload<T extends EspecieFaixaPesoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecieFaixaPesoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecieFaixaPesoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecieFaixaPesoGroupByOutputType[P]>
            : GetScalarType<T[P], EspecieFaixaPesoGroupByOutputType[P]>
        }
      >
    >


  export type EspecieFaixaPesoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    especieId?: boolean
    pesoMin?: boolean
    pesoMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    valoresFornecedor?: boolean | EspecieFaixaPeso$valoresFornecedorArgs<ExtArgs>
    mapasCompraFaixa?: boolean | EspecieFaixaPeso$mapasCompraFaixaArgs<ExtArgs>
    _count?: boolean | EspecieFaixaPesoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especieFaixaPeso"]>

  export type EspecieFaixaPesoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    especieId?: boolean
    pesoMin?: boolean
    pesoMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especieFaixaPeso"]>

  export type EspecieFaixaPesoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    especieId?: boolean
    pesoMin?: boolean
    pesoMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especieFaixaPeso"]>

  export type EspecieFaixaPesoSelectScalar = {
    id?: boolean
    especieId?: boolean
    pesoMin?: boolean
    pesoMax?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EspecieFaixaPesoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "especieId" | "pesoMin" | "pesoMax" | "createdAt" | "updatedAt", ExtArgs["result"]["especieFaixaPeso"]>
  export type EspecieFaixaPesoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    valoresFornecedor?: boolean | EspecieFaixaPeso$valoresFornecedorArgs<ExtArgs>
    mapasCompraFaixa?: boolean | EspecieFaixaPeso$mapasCompraFaixaArgs<ExtArgs>
    _count?: boolean | EspecieFaixaPesoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspecieFaixaPesoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
  }
  export type EspecieFaixaPesoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
  }

  export type $EspecieFaixaPesoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EspecieFaixaPeso"
    objects: {
      especie: Prisma.$EspeciePayload<ExtArgs>
      valoresFornecedor: Prisma.$FornecedorValorEspeciePayload<ExtArgs>[]
      mapasCompraFaixa: Prisma.$MapaCompraFaixaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      especieId: string
      pesoMin: Prisma.Decimal
      pesoMax: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["especieFaixaPeso"]>
    composites: {}
  }

  type EspecieFaixaPesoGetPayload<S extends boolean | null | undefined | EspecieFaixaPesoDefaultArgs> = $Result.GetResult<Prisma.$EspecieFaixaPesoPayload, S>

  type EspecieFaixaPesoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecieFaixaPesoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecieFaixaPesoCountAggregateInputType | true
    }

  export interface EspecieFaixaPesoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EspecieFaixaPeso'], meta: { name: 'EspecieFaixaPeso' } }
    /**
     * Find zero or one EspecieFaixaPeso that matches the filter.
     * @param {EspecieFaixaPesoFindUniqueArgs} args - Arguments to find a EspecieFaixaPeso
     * @example
     * // Get one EspecieFaixaPeso
     * const especieFaixaPeso = await prisma.especieFaixaPeso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecieFaixaPesoFindUniqueArgs>(args: SelectSubset<T, EspecieFaixaPesoFindUniqueArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EspecieFaixaPeso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecieFaixaPesoFindUniqueOrThrowArgs} args - Arguments to find a EspecieFaixaPeso
     * @example
     * // Get one EspecieFaixaPeso
     * const especieFaixaPeso = await prisma.especieFaixaPeso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecieFaixaPesoFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecieFaixaPesoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EspecieFaixaPeso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFaixaPesoFindFirstArgs} args - Arguments to find a EspecieFaixaPeso
     * @example
     * // Get one EspecieFaixaPeso
     * const especieFaixaPeso = await prisma.especieFaixaPeso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecieFaixaPesoFindFirstArgs>(args?: SelectSubset<T, EspecieFaixaPesoFindFirstArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EspecieFaixaPeso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFaixaPesoFindFirstOrThrowArgs} args - Arguments to find a EspecieFaixaPeso
     * @example
     * // Get one EspecieFaixaPeso
     * const especieFaixaPeso = await prisma.especieFaixaPeso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecieFaixaPesoFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecieFaixaPesoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EspecieFaixaPesos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFaixaPesoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EspecieFaixaPesos
     * const especieFaixaPesos = await prisma.especieFaixaPeso.findMany()
     * 
     * // Get first 10 EspecieFaixaPesos
     * const especieFaixaPesos = await prisma.especieFaixaPeso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especieFaixaPesoWithIdOnly = await prisma.especieFaixaPeso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecieFaixaPesoFindManyArgs>(args?: SelectSubset<T, EspecieFaixaPesoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EspecieFaixaPeso.
     * @param {EspecieFaixaPesoCreateArgs} args - Arguments to create a EspecieFaixaPeso.
     * @example
     * // Create one EspecieFaixaPeso
     * const EspecieFaixaPeso = await prisma.especieFaixaPeso.create({
     *   data: {
     *     // ... data to create a EspecieFaixaPeso
     *   }
     * })
     * 
     */
    create<T extends EspecieFaixaPesoCreateArgs>(args: SelectSubset<T, EspecieFaixaPesoCreateArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EspecieFaixaPesos.
     * @param {EspecieFaixaPesoCreateManyArgs} args - Arguments to create many EspecieFaixaPesos.
     * @example
     * // Create many EspecieFaixaPesos
     * const especieFaixaPeso = await prisma.especieFaixaPeso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecieFaixaPesoCreateManyArgs>(args?: SelectSubset<T, EspecieFaixaPesoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EspecieFaixaPesos and returns the data saved in the database.
     * @param {EspecieFaixaPesoCreateManyAndReturnArgs} args - Arguments to create many EspecieFaixaPesos.
     * @example
     * // Create many EspecieFaixaPesos
     * const especieFaixaPeso = await prisma.especieFaixaPeso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EspecieFaixaPesos and only return the `id`
     * const especieFaixaPesoWithIdOnly = await prisma.especieFaixaPeso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspecieFaixaPesoCreateManyAndReturnArgs>(args?: SelectSubset<T, EspecieFaixaPesoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EspecieFaixaPeso.
     * @param {EspecieFaixaPesoDeleteArgs} args - Arguments to delete one EspecieFaixaPeso.
     * @example
     * // Delete one EspecieFaixaPeso
     * const EspecieFaixaPeso = await prisma.especieFaixaPeso.delete({
     *   where: {
     *     // ... filter to delete one EspecieFaixaPeso
     *   }
     * })
     * 
     */
    delete<T extends EspecieFaixaPesoDeleteArgs>(args: SelectSubset<T, EspecieFaixaPesoDeleteArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EspecieFaixaPeso.
     * @param {EspecieFaixaPesoUpdateArgs} args - Arguments to update one EspecieFaixaPeso.
     * @example
     * // Update one EspecieFaixaPeso
     * const especieFaixaPeso = await prisma.especieFaixaPeso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecieFaixaPesoUpdateArgs>(args: SelectSubset<T, EspecieFaixaPesoUpdateArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EspecieFaixaPesos.
     * @param {EspecieFaixaPesoDeleteManyArgs} args - Arguments to filter EspecieFaixaPesos to delete.
     * @example
     * // Delete a few EspecieFaixaPesos
     * const { count } = await prisma.especieFaixaPeso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecieFaixaPesoDeleteManyArgs>(args?: SelectSubset<T, EspecieFaixaPesoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EspecieFaixaPesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFaixaPesoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EspecieFaixaPesos
     * const especieFaixaPeso = await prisma.especieFaixaPeso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecieFaixaPesoUpdateManyArgs>(args: SelectSubset<T, EspecieFaixaPesoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EspecieFaixaPesos and returns the data updated in the database.
     * @param {EspecieFaixaPesoUpdateManyAndReturnArgs} args - Arguments to update many EspecieFaixaPesos.
     * @example
     * // Update many EspecieFaixaPesos
     * const especieFaixaPeso = await prisma.especieFaixaPeso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EspecieFaixaPesos and only return the `id`
     * const especieFaixaPesoWithIdOnly = await prisma.especieFaixaPeso.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspecieFaixaPesoUpdateManyAndReturnArgs>(args: SelectSubset<T, EspecieFaixaPesoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EspecieFaixaPeso.
     * @param {EspecieFaixaPesoUpsertArgs} args - Arguments to update or create a EspecieFaixaPeso.
     * @example
     * // Update or create a EspecieFaixaPeso
     * const especieFaixaPeso = await prisma.especieFaixaPeso.upsert({
     *   create: {
     *     // ... data to create a EspecieFaixaPeso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EspecieFaixaPeso we want to update
     *   }
     * })
     */
    upsert<T extends EspecieFaixaPesoUpsertArgs>(args: SelectSubset<T, EspecieFaixaPesoUpsertArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EspecieFaixaPesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFaixaPesoCountArgs} args - Arguments to filter EspecieFaixaPesos to count.
     * @example
     * // Count the number of EspecieFaixaPesos
     * const count = await prisma.especieFaixaPeso.count({
     *   where: {
     *     // ... the filter for the EspecieFaixaPesos we want to count
     *   }
     * })
    **/
    count<T extends EspecieFaixaPesoCountArgs>(
      args?: Subset<T, EspecieFaixaPesoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecieFaixaPesoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EspecieFaixaPeso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFaixaPesoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecieFaixaPesoAggregateArgs>(args: Subset<T, EspecieFaixaPesoAggregateArgs>): Prisma.PrismaPromise<GetEspecieFaixaPesoAggregateType<T>>

    /**
     * Group by EspecieFaixaPeso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecieFaixaPesoGroupByArgs} args - Group by arguments.
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
      T extends EspecieFaixaPesoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecieFaixaPesoGroupByArgs['orderBy'] }
        : { orderBy?: EspecieFaixaPesoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecieFaixaPesoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecieFaixaPesoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EspecieFaixaPeso model
   */
  readonly fields: EspecieFaixaPesoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EspecieFaixaPeso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecieFaixaPesoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especie<T extends EspecieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecieDefaultArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    valoresFornecedor<T extends EspecieFaixaPeso$valoresFornecedorArgs<ExtArgs> = {}>(args?: Subset<T, EspecieFaixaPeso$valoresFornecedorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapasCompraFaixa<T extends EspecieFaixaPeso$mapasCompraFaixaArgs<ExtArgs> = {}>(args?: Subset<T, EspecieFaixaPeso$mapasCompraFaixaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EspecieFaixaPeso model
   */
  interface EspecieFaixaPesoFieldRefs {
    readonly id: FieldRef<"EspecieFaixaPeso", 'String'>
    readonly especieId: FieldRef<"EspecieFaixaPeso", 'String'>
    readonly pesoMin: FieldRef<"EspecieFaixaPeso", 'Decimal'>
    readonly pesoMax: FieldRef<"EspecieFaixaPeso", 'Decimal'>
    readonly createdAt: FieldRef<"EspecieFaixaPeso", 'DateTime'>
    readonly updatedAt: FieldRef<"EspecieFaixaPeso", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EspecieFaixaPeso findUnique
   */
  export type EspecieFaixaPesoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * Filter, which EspecieFaixaPeso to fetch.
     */
    where: EspecieFaixaPesoWhereUniqueInput
  }

  /**
   * EspecieFaixaPeso findUniqueOrThrow
   */
  export type EspecieFaixaPesoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * Filter, which EspecieFaixaPeso to fetch.
     */
    where: EspecieFaixaPesoWhereUniqueInput
  }

  /**
   * EspecieFaixaPeso findFirst
   */
  export type EspecieFaixaPesoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * Filter, which EspecieFaixaPeso to fetch.
     */
    where?: EspecieFaixaPesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspecieFaixaPesos to fetch.
     */
    orderBy?: EspecieFaixaPesoOrderByWithRelationInput | EspecieFaixaPesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EspecieFaixaPesos.
     */
    cursor?: EspecieFaixaPesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspecieFaixaPesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspecieFaixaPesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EspecieFaixaPesos.
     */
    distinct?: EspecieFaixaPesoScalarFieldEnum | EspecieFaixaPesoScalarFieldEnum[]
  }

  /**
   * EspecieFaixaPeso findFirstOrThrow
   */
  export type EspecieFaixaPesoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * Filter, which EspecieFaixaPeso to fetch.
     */
    where?: EspecieFaixaPesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspecieFaixaPesos to fetch.
     */
    orderBy?: EspecieFaixaPesoOrderByWithRelationInput | EspecieFaixaPesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EspecieFaixaPesos.
     */
    cursor?: EspecieFaixaPesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspecieFaixaPesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspecieFaixaPesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EspecieFaixaPesos.
     */
    distinct?: EspecieFaixaPesoScalarFieldEnum | EspecieFaixaPesoScalarFieldEnum[]
  }

  /**
   * EspecieFaixaPeso findMany
   */
  export type EspecieFaixaPesoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * Filter, which EspecieFaixaPesos to fetch.
     */
    where?: EspecieFaixaPesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EspecieFaixaPesos to fetch.
     */
    orderBy?: EspecieFaixaPesoOrderByWithRelationInput | EspecieFaixaPesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EspecieFaixaPesos.
     */
    cursor?: EspecieFaixaPesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EspecieFaixaPesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EspecieFaixaPesos.
     */
    skip?: number
    distinct?: EspecieFaixaPesoScalarFieldEnum | EspecieFaixaPesoScalarFieldEnum[]
  }

  /**
   * EspecieFaixaPeso create
   */
  export type EspecieFaixaPesoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * The data needed to create a EspecieFaixaPeso.
     */
    data: XOR<EspecieFaixaPesoCreateInput, EspecieFaixaPesoUncheckedCreateInput>
  }

  /**
   * EspecieFaixaPeso createMany
   */
  export type EspecieFaixaPesoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EspecieFaixaPesos.
     */
    data: EspecieFaixaPesoCreateManyInput | EspecieFaixaPesoCreateManyInput[]
  }

  /**
   * EspecieFaixaPeso createManyAndReturn
   */
  export type EspecieFaixaPesoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * The data used to create many EspecieFaixaPesos.
     */
    data: EspecieFaixaPesoCreateManyInput | EspecieFaixaPesoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EspecieFaixaPeso update
   */
  export type EspecieFaixaPesoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * The data needed to update a EspecieFaixaPeso.
     */
    data: XOR<EspecieFaixaPesoUpdateInput, EspecieFaixaPesoUncheckedUpdateInput>
    /**
     * Choose, which EspecieFaixaPeso to update.
     */
    where: EspecieFaixaPesoWhereUniqueInput
  }

  /**
   * EspecieFaixaPeso updateMany
   */
  export type EspecieFaixaPesoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EspecieFaixaPesos.
     */
    data: XOR<EspecieFaixaPesoUpdateManyMutationInput, EspecieFaixaPesoUncheckedUpdateManyInput>
    /**
     * Filter which EspecieFaixaPesos to update
     */
    where?: EspecieFaixaPesoWhereInput
    /**
     * Limit how many EspecieFaixaPesos to update.
     */
    limit?: number
  }

  /**
   * EspecieFaixaPeso updateManyAndReturn
   */
  export type EspecieFaixaPesoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * The data used to update EspecieFaixaPesos.
     */
    data: XOR<EspecieFaixaPesoUpdateManyMutationInput, EspecieFaixaPesoUncheckedUpdateManyInput>
    /**
     * Filter which EspecieFaixaPesos to update
     */
    where?: EspecieFaixaPesoWhereInput
    /**
     * Limit how many EspecieFaixaPesos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EspecieFaixaPeso upsert
   */
  export type EspecieFaixaPesoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * The filter to search for the EspecieFaixaPeso to update in case it exists.
     */
    where: EspecieFaixaPesoWhereUniqueInput
    /**
     * In case the EspecieFaixaPeso found by the `where` argument doesn't exist, create a new EspecieFaixaPeso with this data.
     */
    create: XOR<EspecieFaixaPesoCreateInput, EspecieFaixaPesoUncheckedCreateInput>
    /**
     * In case the EspecieFaixaPeso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecieFaixaPesoUpdateInput, EspecieFaixaPesoUncheckedUpdateInput>
  }

  /**
   * EspecieFaixaPeso delete
   */
  export type EspecieFaixaPesoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
    /**
     * Filter which EspecieFaixaPeso to delete.
     */
    where: EspecieFaixaPesoWhereUniqueInput
  }

  /**
   * EspecieFaixaPeso deleteMany
   */
  export type EspecieFaixaPesoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EspecieFaixaPesos to delete
     */
    where?: EspecieFaixaPesoWhereInput
    /**
     * Limit how many EspecieFaixaPesos to delete.
     */
    limit?: number
  }

  /**
   * EspecieFaixaPeso.valoresFornecedor
   */
  export type EspecieFaixaPeso$valoresFornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    where?: FornecedorValorEspecieWhereInput
    orderBy?: FornecedorValorEspecieOrderByWithRelationInput | FornecedorValorEspecieOrderByWithRelationInput[]
    cursor?: FornecedorValorEspecieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FornecedorValorEspecieScalarFieldEnum | FornecedorValorEspecieScalarFieldEnum[]
  }

  /**
   * EspecieFaixaPeso.mapasCompraFaixa
   */
  export type EspecieFaixaPeso$mapasCompraFaixaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    where?: MapaCompraFaixaWhereInput
    orderBy?: MapaCompraFaixaOrderByWithRelationInput | MapaCompraFaixaOrderByWithRelationInput[]
    cursor?: MapaCompraFaixaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapaCompraFaixaScalarFieldEnum | MapaCompraFaixaScalarFieldEnum[]
  }

  /**
   * EspecieFaixaPeso without action
   */
  export type EspecieFaixaPesoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecieFaixaPeso
     */
    select?: EspecieFaixaPesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EspecieFaixaPeso
     */
    omit?: EspecieFaixaPesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecieFaixaPesoInclude<ExtArgs> | null
  }


  /**
   * Model Fornecedor
   */

  export type AggregateFornecedor = {
    _count: FornecedorCountAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  export type FornecedorMinAggregateOutputType = {
    id: string | null
    nome: string | null
    fazenda: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    fazenda: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorCountAggregateOutputType = {
    id: number
    nome: number
    fazenda: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FornecedorMinAggregateInputType = {
    id?: true
    nome?: true
    fazenda?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorMaxAggregateInputType = {
    id?: true
    nome?: true
    fazenda?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorCountAggregateInputType = {
    id?: true
    nome?: true
    fazenda?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FornecedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedor to aggregate.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fornecedors
    **/
    _count?: true | FornecedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorMaxAggregateInputType
  }

  export type GetFornecedorAggregateType<T extends FornecedorAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedor[P]>
      : GetScalarType<T[P], AggregateFornecedor[P]>
  }




  export type FornecedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorWhereInput
    orderBy?: FornecedorOrderByWithAggregationInput | FornecedorOrderByWithAggregationInput[]
    by: FornecedorScalarFieldEnum[] | FornecedorScalarFieldEnum
    having?: FornecedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorCountAggregateInputType | true
    _min?: FornecedorMinAggregateInputType
    _max?: FornecedorMaxAggregateInputType
  }

  export type FornecedorGroupByOutputType = {
    id: string
    nome: string
    fazenda: string
    createdAt: Date
    updatedAt: Date
    _count: FornecedorCountAggregateOutputType | null
    _min: FornecedorMinAggregateOutputType | null
    _max: FornecedorMaxAggregateOutputType | null
  }

  type GetFornecedorGroupByPayload<T extends FornecedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorGroupByOutputType[P]>
        }
      >
    >


  export type FornecedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fazenda?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    valores?: boolean | Fornecedor$valoresArgs<ExtArgs>
    mapasCompra?: boolean | Fornecedor$mapasCompraArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fazenda?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fazenda?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fornecedor"]>

  export type FornecedorSelectScalar = {
    id?: boolean
    nome?: boolean
    fazenda?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FornecedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "fazenda" | "createdAt" | "updatedAt", ExtArgs["result"]["fornecedor"]>
  export type FornecedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valores?: boolean | Fornecedor$valoresArgs<ExtArgs>
    mapasCompra?: boolean | Fornecedor$mapasCompraArgs<ExtArgs>
    _count?: boolean | FornecedorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FornecedorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FornecedorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FornecedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fornecedor"
    objects: {
      valores: Prisma.$FornecedorValorEspeciePayload<ExtArgs>[]
      mapasCompra: Prisma.$MapaCompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      fazenda: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fornecedor"]>
    composites: {}
  }

  type FornecedorGetPayload<S extends boolean | null | undefined | FornecedorDefaultArgs> = $Result.GetResult<Prisma.$FornecedorPayload, S>

  type FornecedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FornecedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FornecedorCountAggregateInputType | true
    }

  export interface FornecedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fornecedor'], meta: { name: 'Fornecedor' } }
    /**
     * Find zero or one Fornecedor that matches the filter.
     * @param {FornecedorFindUniqueArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FornecedorFindUniqueArgs>(args: SelectSubset<T, FornecedorFindUniqueArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fornecedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FornecedorFindUniqueOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FornecedorFindUniqueOrThrowArgs>(args: SelectSubset<T, FornecedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FornecedorFindFirstArgs>(args?: SelectSubset<T, FornecedorFindFirstArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fornecedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindFirstOrThrowArgs} args - Arguments to find a Fornecedor
     * @example
     * // Get one Fornecedor
     * const fornecedor = await prisma.fornecedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FornecedorFindFirstOrThrowArgs>(args?: SelectSubset<T, FornecedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fornecedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany()
     * 
     * // Get first 10 Fornecedors
     * const fornecedors = await prisma.fornecedor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FornecedorFindManyArgs>(args?: SelectSubset<T, FornecedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fornecedor.
     * @param {FornecedorCreateArgs} args - Arguments to create a Fornecedor.
     * @example
     * // Create one Fornecedor
     * const Fornecedor = await prisma.fornecedor.create({
     *   data: {
     *     // ... data to create a Fornecedor
     *   }
     * })
     * 
     */
    create<T extends FornecedorCreateArgs>(args: SelectSubset<T, FornecedorCreateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fornecedors.
     * @param {FornecedorCreateManyArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FornecedorCreateManyArgs>(args?: SelectSubset<T, FornecedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fornecedors and returns the data saved in the database.
     * @param {FornecedorCreateManyAndReturnArgs} args - Arguments to create many Fornecedors.
     * @example
     * // Create many Fornecedors
     * const fornecedor = await prisma.fornecedor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fornecedors and only return the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FornecedorCreateManyAndReturnArgs>(args?: SelectSubset<T, FornecedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fornecedor.
     * @param {FornecedorDeleteArgs} args - Arguments to delete one Fornecedor.
     * @example
     * // Delete one Fornecedor
     * const Fornecedor = await prisma.fornecedor.delete({
     *   where: {
     *     // ... filter to delete one Fornecedor
     *   }
     * })
     * 
     */
    delete<T extends FornecedorDeleteArgs>(args: SelectSubset<T, FornecedorDeleteArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fornecedor.
     * @param {FornecedorUpdateArgs} args - Arguments to update one Fornecedor.
     * @example
     * // Update one Fornecedor
     * const fornecedor = await prisma.fornecedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FornecedorUpdateArgs>(args: SelectSubset<T, FornecedorUpdateArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fornecedors.
     * @param {FornecedorDeleteManyArgs} args - Arguments to filter Fornecedors to delete.
     * @example
     * // Delete a few Fornecedors
     * const { count } = await prisma.fornecedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FornecedorDeleteManyArgs>(args?: SelectSubset<T, FornecedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FornecedorUpdateManyArgs>(args: SelectSubset<T, FornecedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fornecedors and returns the data updated in the database.
     * @param {FornecedorUpdateManyAndReturnArgs} args - Arguments to update many Fornecedors.
     * @example
     * // Update many Fornecedors
     * const fornecedor = await prisma.fornecedor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fornecedors and only return the `id`
     * const fornecedorWithIdOnly = await prisma.fornecedor.updateManyAndReturn({
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
    updateManyAndReturn<T extends FornecedorUpdateManyAndReturnArgs>(args: SelectSubset<T, FornecedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fornecedor.
     * @param {FornecedorUpsertArgs} args - Arguments to update or create a Fornecedor.
     * @example
     * // Update or create a Fornecedor
     * const fornecedor = await prisma.fornecedor.upsert({
     *   create: {
     *     // ... data to create a Fornecedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fornecedor we want to update
     *   }
     * })
     */
    upsert<T extends FornecedorUpsertArgs>(args: SelectSubset<T, FornecedorUpsertArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fornecedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorCountArgs} args - Arguments to filter Fornecedors to count.
     * @example
     * // Count the number of Fornecedors
     * const count = await prisma.fornecedor.count({
     *   where: {
     *     // ... the filter for the Fornecedors we want to count
     *   }
     * })
    **/
    count<T extends FornecedorCountArgs>(
      args?: Subset<T, FornecedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FornecedorAggregateArgs>(args: Subset<T, FornecedorAggregateArgs>): Prisma.PrismaPromise<GetFornecedorAggregateType<T>>

    /**
     * Group by Fornecedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorGroupByArgs} args - Group by arguments.
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
      T extends FornecedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FornecedorGroupByArgs['orderBy'] }
        : { orderBy?: FornecedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FornecedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fornecedor model
   */
  readonly fields: FornecedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fornecedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FornecedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    valores<T extends Fornecedor$valoresArgs<ExtArgs> = {}>(args?: Subset<T, Fornecedor$valoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mapasCompra<T extends Fornecedor$mapasCompraArgs<ExtArgs> = {}>(args?: Subset<T, Fornecedor$mapasCompraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fornecedor model
   */
  interface FornecedorFieldRefs {
    readonly id: FieldRef<"Fornecedor", 'String'>
    readonly nome: FieldRef<"Fornecedor", 'String'>
    readonly fazenda: FieldRef<"Fornecedor", 'String'>
    readonly createdAt: FieldRef<"Fornecedor", 'DateTime'>
    readonly updatedAt: FieldRef<"Fornecedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fornecedor findUnique
   */
  export type FornecedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findUniqueOrThrow
   */
  export type FornecedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor findFirst
   */
  export type FornecedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findFirstOrThrow
   */
  export type FornecedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedor to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fornecedors.
     */
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor findMany
   */
  export type FornecedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter, which Fornecedors to fetch.
     */
    where?: FornecedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fornecedors to fetch.
     */
    orderBy?: FornecedorOrderByWithRelationInput | FornecedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fornecedors.
     */
    cursor?: FornecedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fornecedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fornecedors.
     */
    skip?: number
    distinct?: FornecedorScalarFieldEnum | FornecedorScalarFieldEnum[]
  }

  /**
   * Fornecedor create
   */
  export type FornecedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Fornecedor.
     */
    data: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
  }

  /**
   * Fornecedor createMany
   */
  export type FornecedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fornecedors.
     */
    data: FornecedorCreateManyInput | FornecedorCreateManyInput[]
  }

  /**
   * Fornecedor createManyAndReturn
   */
  export type FornecedorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * The data used to create many Fornecedors.
     */
    data: FornecedorCreateManyInput | FornecedorCreateManyInput[]
  }

  /**
   * Fornecedor update
   */
  export type FornecedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Fornecedor.
     */
    data: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
    /**
     * Choose, which Fornecedor to update.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor updateMany
   */
  export type FornecedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fornecedors.
     */
    data: XOR<FornecedorUpdateManyMutationInput, FornecedorUncheckedUpdateManyInput>
    /**
     * Filter which Fornecedors to update
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to update.
     */
    limit?: number
  }

  /**
   * Fornecedor updateManyAndReturn
   */
  export type FornecedorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * The data used to update Fornecedors.
     */
    data: XOR<FornecedorUpdateManyMutationInput, FornecedorUncheckedUpdateManyInput>
    /**
     * Filter which Fornecedors to update
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to update.
     */
    limit?: number
  }

  /**
   * Fornecedor upsert
   */
  export type FornecedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Fornecedor to update in case it exists.
     */
    where: FornecedorWhereUniqueInput
    /**
     * In case the Fornecedor found by the `where` argument doesn't exist, create a new Fornecedor with this data.
     */
    create: XOR<FornecedorCreateInput, FornecedorUncheckedCreateInput>
    /**
     * In case the Fornecedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FornecedorUpdateInput, FornecedorUncheckedUpdateInput>
  }

  /**
   * Fornecedor delete
   */
  export type FornecedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
    /**
     * Filter which Fornecedor to delete.
     */
    where: FornecedorWhereUniqueInput
  }

  /**
   * Fornecedor deleteMany
   */
  export type FornecedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fornecedors to delete
     */
    where?: FornecedorWhereInput
    /**
     * Limit how many Fornecedors to delete.
     */
    limit?: number
  }

  /**
   * Fornecedor.valores
   */
  export type Fornecedor$valoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    where?: FornecedorValorEspecieWhereInput
    orderBy?: FornecedorValorEspecieOrderByWithRelationInput | FornecedorValorEspecieOrderByWithRelationInput[]
    cursor?: FornecedorValorEspecieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FornecedorValorEspecieScalarFieldEnum | FornecedorValorEspecieScalarFieldEnum[]
  }

  /**
   * Fornecedor.mapasCompra
   */
  export type Fornecedor$mapasCompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    where?: MapaCompraWhereInput
    orderBy?: MapaCompraOrderByWithRelationInput | MapaCompraOrderByWithRelationInput[]
    cursor?: MapaCompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapaCompraScalarFieldEnum | MapaCompraScalarFieldEnum[]
  }

  /**
   * Fornecedor without action
   */
  export type FornecedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fornecedor
     */
    select?: FornecedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fornecedor
     */
    omit?: FornecedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorInclude<ExtArgs> | null
  }


  /**
   * Model FornecedorValorEspecie
   */

  export type AggregateFornecedorValorEspecie = {
    _count: FornecedorValorEspecieCountAggregateOutputType | null
    _avg: FornecedorValorEspecieAvgAggregateOutputType | null
    _sum: FornecedorValorEspecieSumAggregateOutputType | null
    _min: FornecedorValorEspecieMinAggregateOutputType | null
    _max: FornecedorValorEspecieMaxAggregateOutputType | null
  }

  export type FornecedorValorEspecieAvgAggregateOutputType = {
    valorKg: Decimal | null
  }

  export type FornecedorValorEspecieSumAggregateOutputType = {
    valorKg: Decimal | null
  }

  export type FornecedorValorEspecieMinAggregateOutputType = {
    id: string | null
    fornecedorId: string | null
    faixaPesoId: string | null
    valorKg: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorValorEspecieMaxAggregateOutputType = {
    id: string | null
    fornecedorId: string | null
    faixaPesoId: string | null
    valorKg: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FornecedorValorEspecieCountAggregateOutputType = {
    id: number
    fornecedorId: number
    faixaPesoId: number
    valorKg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FornecedorValorEspecieAvgAggregateInputType = {
    valorKg?: true
  }

  export type FornecedorValorEspecieSumAggregateInputType = {
    valorKg?: true
  }

  export type FornecedorValorEspecieMinAggregateInputType = {
    id?: true
    fornecedorId?: true
    faixaPesoId?: true
    valorKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorValorEspecieMaxAggregateInputType = {
    id?: true
    fornecedorId?: true
    faixaPesoId?: true
    valorKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FornecedorValorEspecieCountAggregateInputType = {
    id?: true
    fornecedorId?: true
    faixaPesoId?: true
    valorKg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FornecedorValorEspecieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FornecedorValorEspecie to aggregate.
     */
    where?: FornecedorValorEspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FornecedorValorEspecies to fetch.
     */
    orderBy?: FornecedorValorEspecieOrderByWithRelationInput | FornecedorValorEspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FornecedorValorEspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FornecedorValorEspecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FornecedorValorEspecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FornecedorValorEspecies
    **/
    _count?: true | FornecedorValorEspecieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FornecedorValorEspecieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FornecedorValorEspecieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FornecedorValorEspecieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FornecedorValorEspecieMaxAggregateInputType
  }

  export type GetFornecedorValorEspecieAggregateType<T extends FornecedorValorEspecieAggregateArgs> = {
        [P in keyof T & keyof AggregateFornecedorValorEspecie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFornecedorValorEspecie[P]>
      : GetScalarType<T[P], AggregateFornecedorValorEspecie[P]>
  }




  export type FornecedorValorEspecieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FornecedorValorEspecieWhereInput
    orderBy?: FornecedorValorEspecieOrderByWithAggregationInput | FornecedorValorEspecieOrderByWithAggregationInput[]
    by: FornecedorValorEspecieScalarFieldEnum[] | FornecedorValorEspecieScalarFieldEnum
    having?: FornecedorValorEspecieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FornecedorValorEspecieCountAggregateInputType | true
    _avg?: FornecedorValorEspecieAvgAggregateInputType
    _sum?: FornecedorValorEspecieSumAggregateInputType
    _min?: FornecedorValorEspecieMinAggregateInputType
    _max?: FornecedorValorEspecieMaxAggregateInputType
  }

  export type FornecedorValorEspecieGroupByOutputType = {
    id: string
    fornecedorId: string
    faixaPesoId: string
    valorKg: Decimal
    createdAt: Date
    updatedAt: Date
    _count: FornecedorValorEspecieCountAggregateOutputType | null
    _avg: FornecedorValorEspecieAvgAggregateOutputType | null
    _sum: FornecedorValorEspecieSumAggregateOutputType | null
    _min: FornecedorValorEspecieMinAggregateOutputType | null
    _max: FornecedorValorEspecieMaxAggregateOutputType | null
  }

  type GetFornecedorValorEspecieGroupByPayload<T extends FornecedorValorEspecieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FornecedorValorEspecieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FornecedorValorEspecieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FornecedorValorEspecieGroupByOutputType[P]>
            : GetScalarType<T[P], FornecedorValorEspecieGroupByOutputType[P]>
        }
      >
    >


  export type FornecedorValorEspecieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorId?: boolean
    faixaPesoId?: boolean
    valorKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedorValorEspecie"]>

  export type FornecedorValorEspecieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorId?: boolean
    faixaPesoId?: boolean
    valorKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedorValorEspecie"]>

  export type FornecedorValorEspecieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorId?: boolean
    faixaPesoId?: boolean
    valorKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fornecedorValorEspecie"]>

  export type FornecedorValorEspecieSelectScalar = {
    id?: boolean
    fornecedorId?: boolean
    faixaPesoId?: boolean
    valorKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FornecedorValorEspecieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fornecedorId" | "faixaPesoId" | "valorKg" | "createdAt" | "updatedAt", ExtArgs["result"]["fornecedorValorEspecie"]>
  export type FornecedorValorEspecieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }
  export type FornecedorValorEspecieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }
  export type FornecedorValorEspecieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }

  export type $FornecedorValorEspeciePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FornecedorValorEspecie"
    objects: {
      fornecedor: Prisma.$FornecedorPayload<ExtArgs>
      faixaPeso: Prisma.$EspecieFaixaPesoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fornecedorId: string
      faixaPesoId: string
      valorKg: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fornecedorValorEspecie"]>
    composites: {}
  }

  type FornecedorValorEspecieGetPayload<S extends boolean | null | undefined | FornecedorValorEspecieDefaultArgs> = $Result.GetResult<Prisma.$FornecedorValorEspeciePayload, S>

  type FornecedorValorEspecieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FornecedorValorEspecieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FornecedorValorEspecieCountAggregateInputType | true
    }

  export interface FornecedorValorEspecieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FornecedorValorEspecie'], meta: { name: 'FornecedorValorEspecie' } }
    /**
     * Find zero or one FornecedorValorEspecie that matches the filter.
     * @param {FornecedorValorEspecieFindUniqueArgs} args - Arguments to find a FornecedorValorEspecie
     * @example
     * // Get one FornecedorValorEspecie
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FornecedorValorEspecieFindUniqueArgs>(args: SelectSubset<T, FornecedorValorEspecieFindUniqueArgs<ExtArgs>>): Prisma__FornecedorValorEspecieClient<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FornecedorValorEspecie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FornecedorValorEspecieFindUniqueOrThrowArgs} args - Arguments to find a FornecedorValorEspecie
     * @example
     * // Get one FornecedorValorEspecie
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FornecedorValorEspecieFindUniqueOrThrowArgs>(args: SelectSubset<T, FornecedorValorEspecieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FornecedorValorEspecieClient<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FornecedorValorEspecie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorValorEspecieFindFirstArgs} args - Arguments to find a FornecedorValorEspecie
     * @example
     * // Get one FornecedorValorEspecie
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FornecedorValorEspecieFindFirstArgs>(args?: SelectSubset<T, FornecedorValorEspecieFindFirstArgs<ExtArgs>>): Prisma__FornecedorValorEspecieClient<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FornecedorValorEspecie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorValorEspecieFindFirstOrThrowArgs} args - Arguments to find a FornecedorValorEspecie
     * @example
     * // Get one FornecedorValorEspecie
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FornecedorValorEspecieFindFirstOrThrowArgs>(args?: SelectSubset<T, FornecedorValorEspecieFindFirstOrThrowArgs<ExtArgs>>): Prisma__FornecedorValorEspecieClient<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FornecedorValorEspecies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorValorEspecieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FornecedorValorEspecies
     * const fornecedorValorEspecies = await prisma.fornecedorValorEspecie.findMany()
     * 
     * // Get first 10 FornecedorValorEspecies
     * const fornecedorValorEspecies = await prisma.fornecedorValorEspecie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fornecedorValorEspecieWithIdOnly = await prisma.fornecedorValorEspecie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FornecedorValorEspecieFindManyArgs>(args?: SelectSubset<T, FornecedorValorEspecieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FornecedorValorEspecie.
     * @param {FornecedorValorEspecieCreateArgs} args - Arguments to create a FornecedorValorEspecie.
     * @example
     * // Create one FornecedorValorEspecie
     * const FornecedorValorEspecie = await prisma.fornecedorValorEspecie.create({
     *   data: {
     *     // ... data to create a FornecedorValorEspecie
     *   }
     * })
     * 
     */
    create<T extends FornecedorValorEspecieCreateArgs>(args: SelectSubset<T, FornecedorValorEspecieCreateArgs<ExtArgs>>): Prisma__FornecedorValorEspecieClient<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FornecedorValorEspecies.
     * @param {FornecedorValorEspecieCreateManyArgs} args - Arguments to create many FornecedorValorEspecies.
     * @example
     * // Create many FornecedorValorEspecies
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FornecedorValorEspecieCreateManyArgs>(args?: SelectSubset<T, FornecedorValorEspecieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FornecedorValorEspecies and returns the data saved in the database.
     * @param {FornecedorValorEspecieCreateManyAndReturnArgs} args - Arguments to create many FornecedorValorEspecies.
     * @example
     * // Create many FornecedorValorEspecies
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FornecedorValorEspecies and only return the `id`
     * const fornecedorValorEspecieWithIdOnly = await prisma.fornecedorValorEspecie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FornecedorValorEspecieCreateManyAndReturnArgs>(args?: SelectSubset<T, FornecedorValorEspecieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FornecedorValorEspecie.
     * @param {FornecedorValorEspecieDeleteArgs} args - Arguments to delete one FornecedorValorEspecie.
     * @example
     * // Delete one FornecedorValorEspecie
     * const FornecedorValorEspecie = await prisma.fornecedorValorEspecie.delete({
     *   where: {
     *     // ... filter to delete one FornecedorValorEspecie
     *   }
     * })
     * 
     */
    delete<T extends FornecedorValorEspecieDeleteArgs>(args: SelectSubset<T, FornecedorValorEspecieDeleteArgs<ExtArgs>>): Prisma__FornecedorValorEspecieClient<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FornecedorValorEspecie.
     * @param {FornecedorValorEspecieUpdateArgs} args - Arguments to update one FornecedorValorEspecie.
     * @example
     * // Update one FornecedorValorEspecie
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FornecedorValorEspecieUpdateArgs>(args: SelectSubset<T, FornecedorValorEspecieUpdateArgs<ExtArgs>>): Prisma__FornecedorValorEspecieClient<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FornecedorValorEspecies.
     * @param {FornecedorValorEspecieDeleteManyArgs} args - Arguments to filter FornecedorValorEspecies to delete.
     * @example
     * // Delete a few FornecedorValorEspecies
     * const { count } = await prisma.fornecedorValorEspecie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FornecedorValorEspecieDeleteManyArgs>(args?: SelectSubset<T, FornecedorValorEspecieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FornecedorValorEspecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorValorEspecieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FornecedorValorEspecies
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FornecedorValorEspecieUpdateManyArgs>(args: SelectSubset<T, FornecedorValorEspecieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FornecedorValorEspecies and returns the data updated in the database.
     * @param {FornecedorValorEspecieUpdateManyAndReturnArgs} args - Arguments to update many FornecedorValorEspecies.
     * @example
     * // Update many FornecedorValorEspecies
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FornecedorValorEspecies and only return the `id`
     * const fornecedorValorEspecieWithIdOnly = await prisma.fornecedorValorEspecie.updateManyAndReturn({
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
    updateManyAndReturn<T extends FornecedorValorEspecieUpdateManyAndReturnArgs>(args: SelectSubset<T, FornecedorValorEspecieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FornecedorValorEspecie.
     * @param {FornecedorValorEspecieUpsertArgs} args - Arguments to update or create a FornecedorValorEspecie.
     * @example
     * // Update or create a FornecedorValorEspecie
     * const fornecedorValorEspecie = await prisma.fornecedorValorEspecie.upsert({
     *   create: {
     *     // ... data to create a FornecedorValorEspecie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FornecedorValorEspecie we want to update
     *   }
     * })
     */
    upsert<T extends FornecedorValorEspecieUpsertArgs>(args: SelectSubset<T, FornecedorValorEspecieUpsertArgs<ExtArgs>>): Prisma__FornecedorValorEspecieClient<$Result.GetResult<Prisma.$FornecedorValorEspeciePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FornecedorValorEspecies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorValorEspecieCountArgs} args - Arguments to filter FornecedorValorEspecies to count.
     * @example
     * // Count the number of FornecedorValorEspecies
     * const count = await prisma.fornecedorValorEspecie.count({
     *   where: {
     *     // ... the filter for the FornecedorValorEspecies we want to count
     *   }
     * })
    **/
    count<T extends FornecedorValorEspecieCountArgs>(
      args?: Subset<T, FornecedorValorEspecieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FornecedorValorEspecieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FornecedorValorEspecie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorValorEspecieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FornecedorValorEspecieAggregateArgs>(args: Subset<T, FornecedorValorEspecieAggregateArgs>): Prisma.PrismaPromise<GetFornecedorValorEspecieAggregateType<T>>

    /**
     * Group by FornecedorValorEspecie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FornecedorValorEspecieGroupByArgs} args - Group by arguments.
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
      T extends FornecedorValorEspecieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FornecedorValorEspecieGroupByArgs['orderBy'] }
        : { orderBy?: FornecedorValorEspecieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FornecedorValorEspecieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFornecedorValorEspecieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FornecedorValorEspecie model
   */
  readonly fields: FornecedorValorEspecieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FornecedorValorEspecie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FornecedorValorEspecieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends FornecedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FornecedorDefaultArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    faixaPeso<T extends EspecieFaixaPesoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecieFaixaPesoDefaultArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FornecedorValorEspecie model
   */
  interface FornecedorValorEspecieFieldRefs {
    readonly id: FieldRef<"FornecedorValorEspecie", 'String'>
    readonly fornecedorId: FieldRef<"FornecedorValorEspecie", 'String'>
    readonly faixaPesoId: FieldRef<"FornecedorValorEspecie", 'String'>
    readonly valorKg: FieldRef<"FornecedorValorEspecie", 'Decimal'>
    readonly createdAt: FieldRef<"FornecedorValorEspecie", 'DateTime'>
    readonly updatedAt: FieldRef<"FornecedorValorEspecie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FornecedorValorEspecie findUnique
   */
  export type FornecedorValorEspecieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorValorEspecie to fetch.
     */
    where: FornecedorValorEspecieWhereUniqueInput
  }

  /**
   * FornecedorValorEspecie findUniqueOrThrow
   */
  export type FornecedorValorEspecieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorValorEspecie to fetch.
     */
    where: FornecedorValorEspecieWhereUniqueInput
  }

  /**
   * FornecedorValorEspecie findFirst
   */
  export type FornecedorValorEspecieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorValorEspecie to fetch.
     */
    where?: FornecedorValorEspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FornecedorValorEspecies to fetch.
     */
    orderBy?: FornecedorValorEspecieOrderByWithRelationInput | FornecedorValorEspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FornecedorValorEspecies.
     */
    cursor?: FornecedorValorEspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FornecedorValorEspecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FornecedorValorEspecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FornecedorValorEspecies.
     */
    distinct?: FornecedorValorEspecieScalarFieldEnum | FornecedorValorEspecieScalarFieldEnum[]
  }

  /**
   * FornecedorValorEspecie findFirstOrThrow
   */
  export type FornecedorValorEspecieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorValorEspecie to fetch.
     */
    where?: FornecedorValorEspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FornecedorValorEspecies to fetch.
     */
    orderBy?: FornecedorValorEspecieOrderByWithRelationInput | FornecedorValorEspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FornecedorValorEspecies.
     */
    cursor?: FornecedorValorEspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FornecedorValorEspecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FornecedorValorEspecies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FornecedorValorEspecies.
     */
    distinct?: FornecedorValorEspecieScalarFieldEnum | FornecedorValorEspecieScalarFieldEnum[]
  }

  /**
   * FornecedorValorEspecie findMany
   */
  export type FornecedorValorEspecieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * Filter, which FornecedorValorEspecies to fetch.
     */
    where?: FornecedorValorEspecieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FornecedorValorEspecies to fetch.
     */
    orderBy?: FornecedorValorEspecieOrderByWithRelationInput | FornecedorValorEspecieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FornecedorValorEspecies.
     */
    cursor?: FornecedorValorEspecieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FornecedorValorEspecies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FornecedorValorEspecies.
     */
    skip?: number
    distinct?: FornecedorValorEspecieScalarFieldEnum | FornecedorValorEspecieScalarFieldEnum[]
  }

  /**
   * FornecedorValorEspecie create
   */
  export type FornecedorValorEspecieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * The data needed to create a FornecedorValorEspecie.
     */
    data: XOR<FornecedorValorEspecieCreateInput, FornecedorValorEspecieUncheckedCreateInput>
  }

  /**
   * FornecedorValorEspecie createMany
   */
  export type FornecedorValorEspecieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FornecedorValorEspecies.
     */
    data: FornecedorValorEspecieCreateManyInput | FornecedorValorEspecieCreateManyInput[]
  }

  /**
   * FornecedorValorEspecie createManyAndReturn
   */
  export type FornecedorValorEspecieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * The data used to create many FornecedorValorEspecies.
     */
    data: FornecedorValorEspecieCreateManyInput | FornecedorValorEspecieCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FornecedorValorEspecie update
   */
  export type FornecedorValorEspecieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * The data needed to update a FornecedorValorEspecie.
     */
    data: XOR<FornecedorValorEspecieUpdateInput, FornecedorValorEspecieUncheckedUpdateInput>
    /**
     * Choose, which FornecedorValorEspecie to update.
     */
    where: FornecedorValorEspecieWhereUniqueInput
  }

  /**
   * FornecedorValorEspecie updateMany
   */
  export type FornecedorValorEspecieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FornecedorValorEspecies.
     */
    data: XOR<FornecedorValorEspecieUpdateManyMutationInput, FornecedorValorEspecieUncheckedUpdateManyInput>
    /**
     * Filter which FornecedorValorEspecies to update
     */
    where?: FornecedorValorEspecieWhereInput
    /**
     * Limit how many FornecedorValorEspecies to update.
     */
    limit?: number
  }

  /**
   * FornecedorValorEspecie updateManyAndReturn
   */
  export type FornecedorValorEspecieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * The data used to update FornecedorValorEspecies.
     */
    data: XOR<FornecedorValorEspecieUpdateManyMutationInput, FornecedorValorEspecieUncheckedUpdateManyInput>
    /**
     * Filter which FornecedorValorEspecies to update
     */
    where?: FornecedorValorEspecieWhereInput
    /**
     * Limit how many FornecedorValorEspecies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FornecedorValorEspecie upsert
   */
  export type FornecedorValorEspecieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * The filter to search for the FornecedorValorEspecie to update in case it exists.
     */
    where: FornecedorValorEspecieWhereUniqueInput
    /**
     * In case the FornecedorValorEspecie found by the `where` argument doesn't exist, create a new FornecedorValorEspecie with this data.
     */
    create: XOR<FornecedorValorEspecieCreateInput, FornecedorValorEspecieUncheckedCreateInput>
    /**
     * In case the FornecedorValorEspecie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FornecedorValorEspecieUpdateInput, FornecedorValorEspecieUncheckedUpdateInput>
  }

  /**
   * FornecedorValorEspecie delete
   */
  export type FornecedorValorEspecieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
    /**
     * Filter which FornecedorValorEspecie to delete.
     */
    where: FornecedorValorEspecieWhereUniqueInput
  }

  /**
   * FornecedorValorEspecie deleteMany
   */
  export type FornecedorValorEspecieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FornecedorValorEspecies to delete
     */
    where?: FornecedorValorEspecieWhereInput
    /**
     * Limit how many FornecedorValorEspecies to delete.
     */
    limit?: number
  }

  /**
   * FornecedorValorEspecie without action
   */
  export type FornecedorValorEspecieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FornecedorValorEspecie
     */
    select?: FornecedorValorEspecieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FornecedorValorEspecie
     */
    omit?: FornecedorValorEspecieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FornecedorValorEspecieInclude<ExtArgs> | null
  }


  /**
   * Model MapaCompra
   */

  export type AggregateMapaCompra = {
    _count: MapaCompraCountAggregateOutputType | null
    _avg: MapaCompraAvgAggregateOutputType | null
    _sum: MapaCompraSumAggregateOutputType | null
    _min: MapaCompraMinAggregateOutputType | null
    _max: MapaCompraMaxAggregateOutputType | null
  }

  export type MapaCompraAvgAggregateOutputType = {
    lote: number | null
    prazoDias: number | null
    pesoBruto: Decimal | null
    descontoUmidade: Decimal | null
    pesoLiquido: Decimal | null
  }

  export type MapaCompraSumAggregateOutputType = {
    lote: number | null
    prazoDias: number | null
    pesoBruto: Decimal | null
    descontoUmidade: Decimal | null
    pesoLiquido: Decimal | null
  }

  export type MapaCompraMinAggregateOutputType = {
    id: string | null
    fornecedorId: string | null
    especieId: string | null
    lote: number | null
    dataDespesca: Date | null
    prazoDias: number | null
    dataVencimento: Date | null
    pesoBruto: Decimal | null
    descontoUmidade: Decimal | null
    pesoLiquido: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapaCompraMaxAggregateOutputType = {
    id: string | null
    fornecedorId: string | null
    especieId: string | null
    lote: number | null
    dataDespesca: Date | null
    prazoDias: number | null
    dataVencimento: Date | null
    pesoBruto: Decimal | null
    descontoUmidade: Decimal | null
    pesoLiquido: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapaCompraCountAggregateOutputType = {
    id: number
    fornecedorId: number
    especieId: number
    lote: number
    dataDespesca: number
    prazoDias: number
    dataVencimento: number
    pesoBruto: number
    descontoUmidade: number
    pesoLiquido: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MapaCompraAvgAggregateInputType = {
    lote?: true
    prazoDias?: true
    pesoBruto?: true
    descontoUmidade?: true
    pesoLiquido?: true
  }

  export type MapaCompraSumAggregateInputType = {
    lote?: true
    prazoDias?: true
    pesoBruto?: true
    descontoUmidade?: true
    pesoLiquido?: true
  }

  export type MapaCompraMinAggregateInputType = {
    id?: true
    fornecedorId?: true
    especieId?: true
    lote?: true
    dataDespesca?: true
    prazoDias?: true
    dataVencimento?: true
    pesoBruto?: true
    descontoUmidade?: true
    pesoLiquido?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapaCompraMaxAggregateInputType = {
    id?: true
    fornecedorId?: true
    especieId?: true
    lote?: true
    dataDespesca?: true
    prazoDias?: true
    dataVencimento?: true
    pesoBruto?: true
    descontoUmidade?: true
    pesoLiquido?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapaCompraCountAggregateInputType = {
    id?: true
    fornecedorId?: true
    especieId?: true
    lote?: true
    dataDespesca?: true
    prazoDias?: true
    dataVencimento?: true
    pesoBruto?: true
    descontoUmidade?: true
    pesoLiquido?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MapaCompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapaCompra to aggregate.
     */
    where?: MapaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapaCompras to fetch.
     */
    orderBy?: MapaCompraOrderByWithRelationInput | MapaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapaCompras
    **/
    _count?: true | MapaCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapaCompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapaCompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapaCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapaCompraMaxAggregateInputType
  }

  export type GetMapaCompraAggregateType<T extends MapaCompraAggregateArgs> = {
        [P in keyof T & keyof AggregateMapaCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapaCompra[P]>
      : GetScalarType<T[P], AggregateMapaCompra[P]>
  }




  export type MapaCompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapaCompraWhereInput
    orderBy?: MapaCompraOrderByWithAggregationInput | MapaCompraOrderByWithAggregationInput[]
    by: MapaCompraScalarFieldEnum[] | MapaCompraScalarFieldEnum
    having?: MapaCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapaCompraCountAggregateInputType | true
    _avg?: MapaCompraAvgAggregateInputType
    _sum?: MapaCompraSumAggregateInputType
    _min?: MapaCompraMinAggregateInputType
    _max?: MapaCompraMaxAggregateInputType
  }

  export type MapaCompraGroupByOutputType = {
    id: string
    fornecedorId: string
    especieId: string
    lote: number
    dataDespesca: Date
    prazoDias: number
    dataVencimento: Date
    pesoBruto: Decimal
    descontoUmidade: Decimal
    pesoLiquido: Decimal
    createdAt: Date
    updatedAt: Date
    _count: MapaCompraCountAggregateOutputType | null
    _avg: MapaCompraAvgAggregateOutputType | null
    _sum: MapaCompraSumAggregateOutputType | null
    _min: MapaCompraMinAggregateOutputType | null
    _max: MapaCompraMaxAggregateOutputType | null
  }

  type GetMapaCompraGroupByPayload<T extends MapaCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapaCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapaCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapaCompraGroupByOutputType[P]>
            : GetScalarType<T[P], MapaCompraGroupByOutputType[P]>
        }
      >
    >


  export type MapaCompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorId?: boolean
    especieId?: boolean
    lote?: boolean
    dataDespesca?: boolean
    prazoDias?: boolean
    dataVencimento?: boolean
    pesoBruto?: boolean
    descontoUmidade?: boolean
    pesoLiquido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    faixas?: boolean | MapaCompra$faixasArgs<ExtArgs>
    _count?: boolean | MapaCompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapaCompra"]>

  export type MapaCompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorId?: boolean
    especieId?: boolean
    lote?: boolean
    dataDespesca?: boolean
    prazoDias?: boolean
    dataVencimento?: boolean
    pesoBruto?: boolean
    descontoUmidade?: boolean
    pesoLiquido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapaCompra"]>

  export type MapaCompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fornecedorId?: boolean
    especieId?: boolean
    lote?: boolean
    dataDespesca?: boolean
    prazoDias?: boolean
    dataVencimento?: boolean
    pesoBruto?: boolean
    descontoUmidade?: boolean
    pesoLiquido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapaCompra"]>

  export type MapaCompraSelectScalar = {
    id?: boolean
    fornecedorId?: boolean
    especieId?: boolean
    lote?: boolean
    dataDespesca?: boolean
    prazoDias?: boolean
    dataVencimento?: boolean
    pesoBruto?: boolean
    descontoUmidade?: boolean
    pesoLiquido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MapaCompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fornecedorId" | "especieId" | "lote" | "dataDespesca" | "prazoDias" | "dataVencimento" | "pesoBruto" | "descontoUmidade" | "pesoLiquido" | "createdAt" | "updatedAt", ExtArgs["result"]["mapaCompra"]>
  export type MapaCompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
    faixas?: boolean | MapaCompra$faixasArgs<ExtArgs>
    _count?: boolean | MapaCompraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MapaCompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
  }
  export type MapaCompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | FornecedorDefaultArgs<ExtArgs>
    especie?: boolean | EspecieDefaultArgs<ExtArgs>
  }

  export type $MapaCompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapaCompra"
    objects: {
      fornecedor: Prisma.$FornecedorPayload<ExtArgs>
      especie: Prisma.$EspeciePayload<ExtArgs>
      faixas: Prisma.$MapaCompraFaixaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fornecedorId: string
      especieId: string
      lote: number
      dataDespesca: Date
      prazoDias: number
      dataVencimento: Date
      pesoBruto: Prisma.Decimal
      descontoUmidade: Prisma.Decimal
      pesoLiquido: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mapaCompra"]>
    composites: {}
  }

  type MapaCompraGetPayload<S extends boolean | null | undefined | MapaCompraDefaultArgs> = $Result.GetResult<Prisma.$MapaCompraPayload, S>

  type MapaCompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapaCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapaCompraCountAggregateInputType | true
    }

  export interface MapaCompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapaCompra'], meta: { name: 'MapaCompra' } }
    /**
     * Find zero or one MapaCompra that matches the filter.
     * @param {MapaCompraFindUniqueArgs} args - Arguments to find a MapaCompra
     * @example
     * // Get one MapaCompra
     * const mapaCompra = await prisma.mapaCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapaCompraFindUniqueArgs>(args: SelectSubset<T, MapaCompraFindUniqueArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapaCompra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapaCompraFindUniqueOrThrowArgs} args - Arguments to find a MapaCompra
     * @example
     * // Get one MapaCompra
     * const mapaCompra = await prisma.mapaCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapaCompraFindUniqueOrThrowArgs>(args: SelectSubset<T, MapaCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapaCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFindFirstArgs} args - Arguments to find a MapaCompra
     * @example
     * // Get one MapaCompra
     * const mapaCompra = await prisma.mapaCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapaCompraFindFirstArgs>(args?: SelectSubset<T, MapaCompraFindFirstArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapaCompra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFindFirstOrThrowArgs} args - Arguments to find a MapaCompra
     * @example
     * // Get one MapaCompra
     * const mapaCompra = await prisma.mapaCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapaCompraFindFirstOrThrowArgs>(args?: SelectSubset<T, MapaCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapaCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapaCompras
     * const mapaCompras = await prisma.mapaCompra.findMany()
     * 
     * // Get first 10 MapaCompras
     * const mapaCompras = await prisma.mapaCompra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapaCompraWithIdOnly = await prisma.mapaCompra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapaCompraFindManyArgs>(args?: SelectSubset<T, MapaCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapaCompra.
     * @param {MapaCompraCreateArgs} args - Arguments to create a MapaCompra.
     * @example
     * // Create one MapaCompra
     * const MapaCompra = await prisma.mapaCompra.create({
     *   data: {
     *     // ... data to create a MapaCompra
     *   }
     * })
     * 
     */
    create<T extends MapaCompraCreateArgs>(args: SelectSubset<T, MapaCompraCreateArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapaCompras.
     * @param {MapaCompraCreateManyArgs} args - Arguments to create many MapaCompras.
     * @example
     * // Create many MapaCompras
     * const mapaCompra = await prisma.mapaCompra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapaCompraCreateManyArgs>(args?: SelectSubset<T, MapaCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapaCompras and returns the data saved in the database.
     * @param {MapaCompraCreateManyAndReturnArgs} args - Arguments to create many MapaCompras.
     * @example
     * // Create many MapaCompras
     * const mapaCompra = await prisma.mapaCompra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapaCompras and only return the `id`
     * const mapaCompraWithIdOnly = await prisma.mapaCompra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapaCompraCreateManyAndReturnArgs>(args?: SelectSubset<T, MapaCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapaCompra.
     * @param {MapaCompraDeleteArgs} args - Arguments to delete one MapaCompra.
     * @example
     * // Delete one MapaCompra
     * const MapaCompra = await prisma.mapaCompra.delete({
     *   where: {
     *     // ... filter to delete one MapaCompra
     *   }
     * })
     * 
     */
    delete<T extends MapaCompraDeleteArgs>(args: SelectSubset<T, MapaCompraDeleteArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapaCompra.
     * @param {MapaCompraUpdateArgs} args - Arguments to update one MapaCompra.
     * @example
     * // Update one MapaCompra
     * const mapaCompra = await prisma.mapaCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapaCompraUpdateArgs>(args: SelectSubset<T, MapaCompraUpdateArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapaCompras.
     * @param {MapaCompraDeleteManyArgs} args - Arguments to filter MapaCompras to delete.
     * @example
     * // Delete a few MapaCompras
     * const { count } = await prisma.mapaCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapaCompraDeleteManyArgs>(args?: SelectSubset<T, MapaCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapaCompras
     * const mapaCompra = await prisma.mapaCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapaCompraUpdateManyArgs>(args: SelectSubset<T, MapaCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapaCompras and returns the data updated in the database.
     * @param {MapaCompraUpdateManyAndReturnArgs} args - Arguments to update many MapaCompras.
     * @example
     * // Update many MapaCompras
     * const mapaCompra = await prisma.mapaCompra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapaCompras and only return the `id`
     * const mapaCompraWithIdOnly = await prisma.mapaCompra.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapaCompraUpdateManyAndReturnArgs>(args: SelectSubset<T, MapaCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapaCompra.
     * @param {MapaCompraUpsertArgs} args - Arguments to update or create a MapaCompra.
     * @example
     * // Update or create a MapaCompra
     * const mapaCompra = await prisma.mapaCompra.upsert({
     *   create: {
     *     // ... data to create a MapaCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapaCompra we want to update
     *   }
     * })
     */
    upsert<T extends MapaCompraUpsertArgs>(args: SelectSubset<T, MapaCompraUpsertArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapaCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraCountArgs} args - Arguments to filter MapaCompras to count.
     * @example
     * // Count the number of MapaCompras
     * const count = await prisma.mapaCompra.count({
     *   where: {
     *     // ... the filter for the MapaCompras we want to count
     *   }
     * })
    **/
    count<T extends MapaCompraCountArgs>(
      args?: Subset<T, MapaCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapaCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapaCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapaCompraAggregateArgs>(args: Subset<T, MapaCompraAggregateArgs>): Prisma.PrismaPromise<GetMapaCompraAggregateType<T>>

    /**
     * Group by MapaCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraGroupByArgs} args - Group by arguments.
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
      T extends MapaCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapaCompraGroupByArgs['orderBy'] }
        : { orderBy?: MapaCompraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapaCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapaCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapaCompra model
   */
  readonly fields: MapaCompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapaCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapaCompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends FornecedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FornecedorDefaultArgs<ExtArgs>>): Prisma__FornecedorClient<$Result.GetResult<Prisma.$FornecedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    especie<T extends EspecieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecieDefaultArgs<ExtArgs>>): Prisma__EspecieClient<$Result.GetResult<Prisma.$EspeciePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    faixas<T extends MapaCompra$faixasArgs<ExtArgs> = {}>(args?: Subset<T, MapaCompra$faixasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MapaCompra model
   */
  interface MapaCompraFieldRefs {
    readonly id: FieldRef<"MapaCompra", 'String'>
    readonly fornecedorId: FieldRef<"MapaCompra", 'String'>
    readonly especieId: FieldRef<"MapaCompra", 'String'>
    readonly lote: FieldRef<"MapaCompra", 'Int'>
    readonly dataDespesca: FieldRef<"MapaCompra", 'DateTime'>
    readonly prazoDias: FieldRef<"MapaCompra", 'Int'>
    readonly dataVencimento: FieldRef<"MapaCompra", 'DateTime'>
    readonly pesoBruto: FieldRef<"MapaCompra", 'Decimal'>
    readonly descontoUmidade: FieldRef<"MapaCompra", 'Decimal'>
    readonly pesoLiquido: FieldRef<"MapaCompra", 'Decimal'>
    readonly createdAt: FieldRef<"MapaCompra", 'DateTime'>
    readonly updatedAt: FieldRef<"MapaCompra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MapaCompra findUnique
   */
  export type MapaCompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompra to fetch.
     */
    where: MapaCompraWhereUniqueInput
  }

  /**
   * MapaCompra findUniqueOrThrow
   */
  export type MapaCompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompra to fetch.
     */
    where: MapaCompraWhereUniqueInput
  }

  /**
   * MapaCompra findFirst
   */
  export type MapaCompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompra to fetch.
     */
    where?: MapaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapaCompras to fetch.
     */
    orderBy?: MapaCompraOrderByWithRelationInput | MapaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapaCompras.
     */
    cursor?: MapaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapaCompras.
     */
    distinct?: MapaCompraScalarFieldEnum | MapaCompraScalarFieldEnum[]
  }

  /**
   * MapaCompra findFirstOrThrow
   */
  export type MapaCompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompra to fetch.
     */
    where?: MapaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapaCompras to fetch.
     */
    orderBy?: MapaCompraOrderByWithRelationInput | MapaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapaCompras.
     */
    cursor?: MapaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapaCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapaCompras.
     */
    distinct?: MapaCompraScalarFieldEnum | MapaCompraScalarFieldEnum[]
  }

  /**
   * MapaCompra findMany
   */
  export type MapaCompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompras to fetch.
     */
    where?: MapaCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapaCompras to fetch.
     */
    orderBy?: MapaCompraOrderByWithRelationInput | MapaCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapaCompras.
     */
    cursor?: MapaCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapaCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapaCompras.
     */
    skip?: number
    distinct?: MapaCompraScalarFieldEnum | MapaCompraScalarFieldEnum[]
  }

  /**
   * MapaCompra create
   */
  export type MapaCompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * The data needed to create a MapaCompra.
     */
    data: XOR<MapaCompraCreateInput, MapaCompraUncheckedCreateInput>
  }

  /**
   * MapaCompra createMany
   */
  export type MapaCompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapaCompras.
     */
    data: MapaCompraCreateManyInput | MapaCompraCreateManyInput[]
  }

  /**
   * MapaCompra createManyAndReturn
   */
  export type MapaCompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * The data used to create many MapaCompras.
     */
    data: MapaCompraCreateManyInput | MapaCompraCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapaCompra update
   */
  export type MapaCompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * The data needed to update a MapaCompra.
     */
    data: XOR<MapaCompraUpdateInput, MapaCompraUncheckedUpdateInput>
    /**
     * Choose, which MapaCompra to update.
     */
    where: MapaCompraWhereUniqueInput
  }

  /**
   * MapaCompra updateMany
   */
  export type MapaCompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapaCompras.
     */
    data: XOR<MapaCompraUpdateManyMutationInput, MapaCompraUncheckedUpdateManyInput>
    /**
     * Filter which MapaCompras to update
     */
    where?: MapaCompraWhereInput
    /**
     * Limit how many MapaCompras to update.
     */
    limit?: number
  }

  /**
   * MapaCompra updateManyAndReturn
   */
  export type MapaCompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * The data used to update MapaCompras.
     */
    data: XOR<MapaCompraUpdateManyMutationInput, MapaCompraUncheckedUpdateManyInput>
    /**
     * Filter which MapaCompras to update
     */
    where?: MapaCompraWhereInput
    /**
     * Limit how many MapaCompras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapaCompra upsert
   */
  export type MapaCompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * The filter to search for the MapaCompra to update in case it exists.
     */
    where: MapaCompraWhereUniqueInput
    /**
     * In case the MapaCompra found by the `where` argument doesn't exist, create a new MapaCompra with this data.
     */
    create: XOR<MapaCompraCreateInput, MapaCompraUncheckedCreateInput>
    /**
     * In case the MapaCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapaCompraUpdateInput, MapaCompraUncheckedUpdateInput>
  }

  /**
   * MapaCompra delete
   */
  export type MapaCompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
    /**
     * Filter which MapaCompra to delete.
     */
    where: MapaCompraWhereUniqueInput
  }

  /**
   * MapaCompra deleteMany
   */
  export type MapaCompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapaCompras to delete
     */
    where?: MapaCompraWhereInput
    /**
     * Limit how many MapaCompras to delete.
     */
    limit?: number
  }

  /**
   * MapaCompra.faixas
   */
  export type MapaCompra$faixasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    where?: MapaCompraFaixaWhereInput
    orderBy?: MapaCompraFaixaOrderByWithRelationInput | MapaCompraFaixaOrderByWithRelationInput[]
    cursor?: MapaCompraFaixaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MapaCompraFaixaScalarFieldEnum | MapaCompraFaixaScalarFieldEnum[]
  }

  /**
   * MapaCompra without action
   */
  export type MapaCompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompra
     */
    select?: MapaCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompra
     */
    omit?: MapaCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraInclude<ExtArgs> | null
  }


  /**
   * Model MapaCompraFaixa
   */

  export type AggregateMapaCompraFaixa = {
    _count: MapaCompraFaixaCountAggregateOutputType | null
    _avg: MapaCompraFaixaAvgAggregateOutputType | null
    _sum: MapaCompraFaixaSumAggregateOutputType | null
    _min: MapaCompraFaixaMinAggregateOutputType | null
    _max: MapaCompraFaixaMaxAggregateOutputType | null
  }

  export type MapaCompraFaixaAvgAggregateOutputType = {
    pesoKg: Decimal | null
    valorKg: Decimal | null
  }

  export type MapaCompraFaixaSumAggregateOutputType = {
    pesoKg: Decimal | null
    valorKg: Decimal | null
  }

  export type MapaCompraFaixaMinAggregateOutputType = {
    id: string | null
    mapaCompraId: string | null
    faixaPesoId: string | null
    pesoKg: Decimal | null
    valorKg: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapaCompraFaixaMaxAggregateOutputType = {
    id: string | null
    mapaCompraId: string | null
    faixaPesoId: string | null
    pesoKg: Decimal | null
    valorKg: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MapaCompraFaixaCountAggregateOutputType = {
    id: number
    mapaCompraId: number
    faixaPesoId: number
    pesoKg: number
    valorKg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MapaCompraFaixaAvgAggregateInputType = {
    pesoKg?: true
    valorKg?: true
  }

  export type MapaCompraFaixaSumAggregateInputType = {
    pesoKg?: true
    valorKg?: true
  }

  export type MapaCompraFaixaMinAggregateInputType = {
    id?: true
    mapaCompraId?: true
    faixaPesoId?: true
    pesoKg?: true
    valorKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapaCompraFaixaMaxAggregateInputType = {
    id?: true
    mapaCompraId?: true
    faixaPesoId?: true
    pesoKg?: true
    valorKg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MapaCompraFaixaCountAggregateInputType = {
    id?: true
    mapaCompraId?: true
    faixaPesoId?: true
    pesoKg?: true
    valorKg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MapaCompraFaixaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapaCompraFaixa to aggregate.
     */
    where?: MapaCompraFaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapaCompraFaixas to fetch.
     */
    orderBy?: MapaCompraFaixaOrderByWithRelationInput | MapaCompraFaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MapaCompraFaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapaCompraFaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapaCompraFaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MapaCompraFaixas
    **/
    _count?: true | MapaCompraFaixaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapaCompraFaixaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapaCompraFaixaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapaCompraFaixaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapaCompraFaixaMaxAggregateInputType
  }

  export type GetMapaCompraFaixaAggregateType<T extends MapaCompraFaixaAggregateArgs> = {
        [P in keyof T & keyof AggregateMapaCompraFaixa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapaCompraFaixa[P]>
      : GetScalarType<T[P], AggregateMapaCompraFaixa[P]>
  }




  export type MapaCompraFaixaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MapaCompraFaixaWhereInput
    orderBy?: MapaCompraFaixaOrderByWithAggregationInput | MapaCompraFaixaOrderByWithAggregationInput[]
    by: MapaCompraFaixaScalarFieldEnum[] | MapaCompraFaixaScalarFieldEnum
    having?: MapaCompraFaixaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapaCompraFaixaCountAggregateInputType | true
    _avg?: MapaCompraFaixaAvgAggregateInputType
    _sum?: MapaCompraFaixaSumAggregateInputType
    _min?: MapaCompraFaixaMinAggregateInputType
    _max?: MapaCompraFaixaMaxAggregateInputType
  }

  export type MapaCompraFaixaGroupByOutputType = {
    id: string
    mapaCompraId: string
    faixaPesoId: string
    pesoKg: Decimal
    valorKg: Decimal
    createdAt: Date
    updatedAt: Date
    _count: MapaCompraFaixaCountAggregateOutputType | null
    _avg: MapaCompraFaixaAvgAggregateOutputType | null
    _sum: MapaCompraFaixaSumAggregateOutputType | null
    _min: MapaCompraFaixaMinAggregateOutputType | null
    _max: MapaCompraFaixaMaxAggregateOutputType | null
  }

  type GetMapaCompraFaixaGroupByPayload<T extends MapaCompraFaixaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapaCompraFaixaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapaCompraFaixaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapaCompraFaixaGroupByOutputType[P]>
            : GetScalarType<T[P], MapaCompraFaixaGroupByOutputType[P]>
        }
      >
    >


  export type MapaCompraFaixaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mapaCompraId?: boolean
    faixaPesoId?: boolean
    pesoKg?: boolean
    valorKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mapaCompra?: boolean | MapaCompraDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapaCompraFaixa"]>

  export type MapaCompraFaixaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mapaCompraId?: boolean
    faixaPesoId?: boolean
    pesoKg?: boolean
    valorKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mapaCompra?: boolean | MapaCompraDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapaCompraFaixa"]>

  export type MapaCompraFaixaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mapaCompraId?: boolean
    faixaPesoId?: boolean
    pesoKg?: boolean
    valorKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mapaCompra?: boolean | MapaCompraDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mapaCompraFaixa"]>

  export type MapaCompraFaixaSelectScalar = {
    id?: boolean
    mapaCompraId?: boolean
    faixaPesoId?: boolean
    pesoKg?: boolean
    valorKg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MapaCompraFaixaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mapaCompraId" | "faixaPesoId" | "pesoKg" | "valorKg" | "createdAt" | "updatedAt", ExtArgs["result"]["mapaCompraFaixa"]>
  export type MapaCompraFaixaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapaCompra?: boolean | MapaCompraDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }
  export type MapaCompraFaixaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapaCompra?: boolean | MapaCompraDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }
  export type MapaCompraFaixaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mapaCompra?: boolean | MapaCompraDefaultArgs<ExtArgs>
    faixaPeso?: boolean | EspecieFaixaPesoDefaultArgs<ExtArgs>
  }

  export type $MapaCompraFaixaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MapaCompraFaixa"
    objects: {
      mapaCompra: Prisma.$MapaCompraPayload<ExtArgs>
      faixaPeso: Prisma.$EspecieFaixaPesoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mapaCompraId: string
      faixaPesoId: string
      pesoKg: Prisma.Decimal
      valorKg: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mapaCompraFaixa"]>
    composites: {}
  }

  type MapaCompraFaixaGetPayload<S extends boolean | null | undefined | MapaCompraFaixaDefaultArgs> = $Result.GetResult<Prisma.$MapaCompraFaixaPayload, S>

  type MapaCompraFaixaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MapaCompraFaixaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapaCompraFaixaCountAggregateInputType | true
    }

  export interface MapaCompraFaixaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MapaCompraFaixa'], meta: { name: 'MapaCompraFaixa' } }
    /**
     * Find zero or one MapaCompraFaixa that matches the filter.
     * @param {MapaCompraFaixaFindUniqueArgs} args - Arguments to find a MapaCompraFaixa
     * @example
     * // Get one MapaCompraFaixa
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapaCompraFaixaFindUniqueArgs>(args: SelectSubset<T, MapaCompraFaixaFindUniqueArgs<ExtArgs>>): Prisma__MapaCompraFaixaClient<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MapaCompraFaixa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapaCompraFaixaFindUniqueOrThrowArgs} args - Arguments to find a MapaCompraFaixa
     * @example
     * // Get one MapaCompraFaixa
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapaCompraFaixaFindUniqueOrThrowArgs>(args: SelectSubset<T, MapaCompraFaixaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MapaCompraFaixaClient<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapaCompraFaixa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFaixaFindFirstArgs} args - Arguments to find a MapaCompraFaixa
     * @example
     * // Get one MapaCompraFaixa
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapaCompraFaixaFindFirstArgs>(args?: SelectSubset<T, MapaCompraFaixaFindFirstArgs<ExtArgs>>): Prisma__MapaCompraFaixaClient<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MapaCompraFaixa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFaixaFindFirstOrThrowArgs} args - Arguments to find a MapaCompraFaixa
     * @example
     * // Get one MapaCompraFaixa
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapaCompraFaixaFindFirstOrThrowArgs>(args?: SelectSubset<T, MapaCompraFaixaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MapaCompraFaixaClient<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MapaCompraFaixas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFaixaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapaCompraFaixas
     * const mapaCompraFaixas = await prisma.mapaCompraFaixa.findMany()
     * 
     * // Get first 10 MapaCompraFaixas
     * const mapaCompraFaixas = await prisma.mapaCompraFaixa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapaCompraFaixaWithIdOnly = await prisma.mapaCompraFaixa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MapaCompraFaixaFindManyArgs>(args?: SelectSubset<T, MapaCompraFaixaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MapaCompraFaixa.
     * @param {MapaCompraFaixaCreateArgs} args - Arguments to create a MapaCompraFaixa.
     * @example
     * // Create one MapaCompraFaixa
     * const MapaCompraFaixa = await prisma.mapaCompraFaixa.create({
     *   data: {
     *     // ... data to create a MapaCompraFaixa
     *   }
     * })
     * 
     */
    create<T extends MapaCompraFaixaCreateArgs>(args: SelectSubset<T, MapaCompraFaixaCreateArgs<ExtArgs>>): Prisma__MapaCompraFaixaClient<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MapaCompraFaixas.
     * @param {MapaCompraFaixaCreateManyArgs} args - Arguments to create many MapaCompraFaixas.
     * @example
     * // Create many MapaCompraFaixas
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MapaCompraFaixaCreateManyArgs>(args?: SelectSubset<T, MapaCompraFaixaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MapaCompraFaixas and returns the data saved in the database.
     * @param {MapaCompraFaixaCreateManyAndReturnArgs} args - Arguments to create many MapaCompraFaixas.
     * @example
     * // Create many MapaCompraFaixas
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MapaCompraFaixas and only return the `id`
     * const mapaCompraFaixaWithIdOnly = await prisma.mapaCompraFaixa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MapaCompraFaixaCreateManyAndReturnArgs>(args?: SelectSubset<T, MapaCompraFaixaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MapaCompraFaixa.
     * @param {MapaCompraFaixaDeleteArgs} args - Arguments to delete one MapaCompraFaixa.
     * @example
     * // Delete one MapaCompraFaixa
     * const MapaCompraFaixa = await prisma.mapaCompraFaixa.delete({
     *   where: {
     *     // ... filter to delete one MapaCompraFaixa
     *   }
     * })
     * 
     */
    delete<T extends MapaCompraFaixaDeleteArgs>(args: SelectSubset<T, MapaCompraFaixaDeleteArgs<ExtArgs>>): Prisma__MapaCompraFaixaClient<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MapaCompraFaixa.
     * @param {MapaCompraFaixaUpdateArgs} args - Arguments to update one MapaCompraFaixa.
     * @example
     * // Update one MapaCompraFaixa
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MapaCompraFaixaUpdateArgs>(args: SelectSubset<T, MapaCompraFaixaUpdateArgs<ExtArgs>>): Prisma__MapaCompraFaixaClient<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MapaCompraFaixas.
     * @param {MapaCompraFaixaDeleteManyArgs} args - Arguments to filter MapaCompraFaixas to delete.
     * @example
     * // Delete a few MapaCompraFaixas
     * const { count } = await prisma.mapaCompraFaixa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MapaCompraFaixaDeleteManyArgs>(args?: SelectSubset<T, MapaCompraFaixaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapaCompraFaixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFaixaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapaCompraFaixas
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MapaCompraFaixaUpdateManyArgs>(args: SelectSubset<T, MapaCompraFaixaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MapaCompraFaixas and returns the data updated in the database.
     * @param {MapaCompraFaixaUpdateManyAndReturnArgs} args - Arguments to update many MapaCompraFaixas.
     * @example
     * // Update many MapaCompraFaixas
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MapaCompraFaixas and only return the `id`
     * const mapaCompraFaixaWithIdOnly = await prisma.mapaCompraFaixa.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapaCompraFaixaUpdateManyAndReturnArgs>(args: SelectSubset<T, MapaCompraFaixaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MapaCompraFaixa.
     * @param {MapaCompraFaixaUpsertArgs} args - Arguments to update or create a MapaCompraFaixa.
     * @example
     * // Update or create a MapaCompraFaixa
     * const mapaCompraFaixa = await prisma.mapaCompraFaixa.upsert({
     *   create: {
     *     // ... data to create a MapaCompraFaixa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapaCompraFaixa we want to update
     *   }
     * })
     */
    upsert<T extends MapaCompraFaixaUpsertArgs>(args: SelectSubset<T, MapaCompraFaixaUpsertArgs<ExtArgs>>): Prisma__MapaCompraFaixaClient<$Result.GetResult<Prisma.$MapaCompraFaixaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MapaCompraFaixas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFaixaCountArgs} args - Arguments to filter MapaCompraFaixas to count.
     * @example
     * // Count the number of MapaCompraFaixas
     * const count = await prisma.mapaCompraFaixa.count({
     *   where: {
     *     // ... the filter for the MapaCompraFaixas we want to count
     *   }
     * })
    **/
    count<T extends MapaCompraFaixaCountArgs>(
      args?: Subset<T, MapaCompraFaixaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapaCompraFaixaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MapaCompraFaixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFaixaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapaCompraFaixaAggregateArgs>(args: Subset<T, MapaCompraFaixaAggregateArgs>): Prisma.PrismaPromise<GetMapaCompraFaixaAggregateType<T>>

    /**
     * Group by MapaCompraFaixa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapaCompraFaixaGroupByArgs} args - Group by arguments.
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
      T extends MapaCompraFaixaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MapaCompraFaixaGroupByArgs['orderBy'] }
        : { orderBy?: MapaCompraFaixaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MapaCompraFaixaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapaCompraFaixaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MapaCompraFaixa model
   */
  readonly fields: MapaCompraFaixaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MapaCompraFaixa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MapaCompraFaixaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mapaCompra<T extends MapaCompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MapaCompraDefaultArgs<ExtArgs>>): Prisma__MapaCompraClient<$Result.GetResult<Prisma.$MapaCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    faixaPeso<T extends EspecieFaixaPesoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecieFaixaPesoDefaultArgs<ExtArgs>>): Prisma__EspecieFaixaPesoClient<$Result.GetResult<Prisma.$EspecieFaixaPesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MapaCompraFaixa model
   */
  interface MapaCompraFaixaFieldRefs {
    readonly id: FieldRef<"MapaCompraFaixa", 'String'>
    readonly mapaCompraId: FieldRef<"MapaCompraFaixa", 'String'>
    readonly faixaPesoId: FieldRef<"MapaCompraFaixa", 'String'>
    readonly pesoKg: FieldRef<"MapaCompraFaixa", 'Decimal'>
    readonly valorKg: FieldRef<"MapaCompraFaixa", 'Decimal'>
    readonly createdAt: FieldRef<"MapaCompraFaixa", 'DateTime'>
    readonly updatedAt: FieldRef<"MapaCompraFaixa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MapaCompraFaixa findUnique
   */
  export type MapaCompraFaixaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompraFaixa to fetch.
     */
    where: MapaCompraFaixaWhereUniqueInput
  }

  /**
   * MapaCompraFaixa findUniqueOrThrow
   */
  export type MapaCompraFaixaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompraFaixa to fetch.
     */
    where: MapaCompraFaixaWhereUniqueInput
  }

  /**
   * MapaCompraFaixa findFirst
   */
  export type MapaCompraFaixaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompraFaixa to fetch.
     */
    where?: MapaCompraFaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapaCompraFaixas to fetch.
     */
    orderBy?: MapaCompraFaixaOrderByWithRelationInput | MapaCompraFaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapaCompraFaixas.
     */
    cursor?: MapaCompraFaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapaCompraFaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapaCompraFaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapaCompraFaixas.
     */
    distinct?: MapaCompraFaixaScalarFieldEnum | MapaCompraFaixaScalarFieldEnum[]
  }

  /**
   * MapaCompraFaixa findFirstOrThrow
   */
  export type MapaCompraFaixaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompraFaixa to fetch.
     */
    where?: MapaCompraFaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapaCompraFaixas to fetch.
     */
    orderBy?: MapaCompraFaixaOrderByWithRelationInput | MapaCompraFaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MapaCompraFaixas.
     */
    cursor?: MapaCompraFaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapaCompraFaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapaCompraFaixas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MapaCompraFaixas.
     */
    distinct?: MapaCompraFaixaScalarFieldEnum | MapaCompraFaixaScalarFieldEnum[]
  }

  /**
   * MapaCompraFaixa findMany
   */
  export type MapaCompraFaixaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * Filter, which MapaCompraFaixas to fetch.
     */
    where?: MapaCompraFaixaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MapaCompraFaixas to fetch.
     */
    orderBy?: MapaCompraFaixaOrderByWithRelationInput | MapaCompraFaixaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MapaCompraFaixas.
     */
    cursor?: MapaCompraFaixaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MapaCompraFaixas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MapaCompraFaixas.
     */
    skip?: number
    distinct?: MapaCompraFaixaScalarFieldEnum | MapaCompraFaixaScalarFieldEnum[]
  }

  /**
   * MapaCompraFaixa create
   */
  export type MapaCompraFaixaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * The data needed to create a MapaCompraFaixa.
     */
    data: XOR<MapaCompraFaixaCreateInput, MapaCompraFaixaUncheckedCreateInput>
  }

  /**
   * MapaCompraFaixa createMany
   */
  export type MapaCompraFaixaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapaCompraFaixas.
     */
    data: MapaCompraFaixaCreateManyInput | MapaCompraFaixaCreateManyInput[]
  }

  /**
   * MapaCompraFaixa createManyAndReturn
   */
  export type MapaCompraFaixaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * The data used to create many MapaCompraFaixas.
     */
    data: MapaCompraFaixaCreateManyInput | MapaCompraFaixaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapaCompraFaixa update
   */
  export type MapaCompraFaixaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * The data needed to update a MapaCompraFaixa.
     */
    data: XOR<MapaCompraFaixaUpdateInput, MapaCompraFaixaUncheckedUpdateInput>
    /**
     * Choose, which MapaCompraFaixa to update.
     */
    where: MapaCompraFaixaWhereUniqueInput
  }

  /**
   * MapaCompraFaixa updateMany
   */
  export type MapaCompraFaixaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MapaCompraFaixas.
     */
    data: XOR<MapaCompraFaixaUpdateManyMutationInput, MapaCompraFaixaUncheckedUpdateManyInput>
    /**
     * Filter which MapaCompraFaixas to update
     */
    where?: MapaCompraFaixaWhereInput
    /**
     * Limit how many MapaCompraFaixas to update.
     */
    limit?: number
  }

  /**
   * MapaCompraFaixa updateManyAndReturn
   */
  export type MapaCompraFaixaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * The data used to update MapaCompraFaixas.
     */
    data: XOR<MapaCompraFaixaUpdateManyMutationInput, MapaCompraFaixaUncheckedUpdateManyInput>
    /**
     * Filter which MapaCompraFaixas to update
     */
    where?: MapaCompraFaixaWhereInput
    /**
     * Limit how many MapaCompraFaixas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MapaCompraFaixa upsert
   */
  export type MapaCompraFaixaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * The filter to search for the MapaCompraFaixa to update in case it exists.
     */
    where: MapaCompraFaixaWhereUniqueInput
    /**
     * In case the MapaCompraFaixa found by the `where` argument doesn't exist, create a new MapaCompraFaixa with this data.
     */
    create: XOR<MapaCompraFaixaCreateInput, MapaCompraFaixaUncheckedCreateInput>
    /**
     * In case the MapaCompraFaixa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MapaCompraFaixaUpdateInput, MapaCompraFaixaUncheckedUpdateInput>
  }

  /**
   * MapaCompraFaixa delete
   */
  export type MapaCompraFaixaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
    /**
     * Filter which MapaCompraFaixa to delete.
     */
    where: MapaCompraFaixaWhereUniqueInput
  }

  /**
   * MapaCompraFaixa deleteMany
   */
  export type MapaCompraFaixaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MapaCompraFaixas to delete
     */
    where?: MapaCompraFaixaWhereInput
    /**
     * Limit how many MapaCompraFaixas to delete.
     */
    limit?: number
  }

  /**
   * MapaCompraFaixa without action
   */
  export type MapaCompraFaixaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapaCompraFaixa
     */
    select?: MapaCompraFaixaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MapaCompraFaixa
     */
    omit?: MapaCompraFaixaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MapaCompraFaixaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OperadorScalarFieldEnum: {
    matricula: 'matricula',
    nome: 'nome',
    valor: 'valor',
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    corteId: 'corteId',
    operadorMatricula: 'operadorMatricula'
  };

  export type PesagemScalarFieldEnum = (typeof PesagemScalarFieldEnum)[keyof typeof PesagemScalarFieldEnum]


  export const EspecieScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EspecieScalarFieldEnum = (typeof EspecieScalarFieldEnum)[keyof typeof EspecieScalarFieldEnum]


  export const EspecieFaixaPesoScalarFieldEnum: {
    id: 'id',
    especieId: 'especieId',
    pesoMin: 'pesoMin',
    pesoMax: 'pesoMax',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EspecieFaixaPesoScalarFieldEnum = (typeof EspecieFaixaPesoScalarFieldEnum)[keyof typeof EspecieFaixaPesoScalarFieldEnum]


  export const FornecedorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    fazenda: 'fazenda',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FornecedorScalarFieldEnum = (typeof FornecedorScalarFieldEnum)[keyof typeof FornecedorScalarFieldEnum]


  export const FornecedorValorEspecieScalarFieldEnum: {
    id: 'id',
    fornecedorId: 'fornecedorId',
    faixaPesoId: 'faixaPesoId',
    valorKg: 'valorKg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FornecedorValorEspecieScalarFieldEnum = (typeof FornecedorValorEspecieScalarFieldEnum)[keyof typeof FornecedorValorEspecieScalarFieldEnum]


  export const MapaCompraScalarFieldEnum: {
    id: 'id',
    fornecedorId: 'fornecedorId',
    especieId: 'especieId',
    lote: 'lote',
    dataDespesca: 'dataDespesca',
    prazoDias: 'prazoDias',
    dataVencimento: 'dataVencimento',
    pesoBruto: 'pesoBruto',
    descontoUmidade: 'descontoUmidade',
    pesoLiquido: 'pesoLiquido',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MapaCompraScalarFieldEnum = (typeof MapaCompraScalarFieldEnum)[keyof typeof MapaCompraScalarFieldEnum]


  export const MapaCompraFaixaScalarFieldEnum: {
    id: 'id',
    mapaCompraId: 'mapaCompraId',
    faixaPesoId: 'faixaPesoId',
    pesoKg: 'pesoKg',
    valorKg: 'valorKg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MapaCompraFaixaScalarFieldEnum = (typeof MapaCompraFaixaScalarFieldEnum)[keyof typeof MapaCompraFaixaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


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
   * Deep Input Types
   */


  export type OperadorWhereInput = {
    AND?: OperadorWhereInput | OperadorWhereInput[]
    OR?: OperadorWhereInput[]
    NOT?: OperadorWhereInput | OperadorWhereInput[]
    matricula?: IntFilter<"Operador"> | number
    nome?: StringFilter<"Operador"> | string
    valor?: DecimalFilter<"Operador"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolFilter<"Operador"> | boolean
    createdAt?: DateTimeFilter<"Operador"> | Date | string
    pesagens?: PesagemListRelationFilter
  }

  export type OperadorOrderByWithRelationInput = {
    matricula?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    pesagens?: PesagemOrderByRelationAggregateInput
  }

  export type OperadorWhereUniqueInput = Prisma.AtLeast<{
    matricula?: number
    AND?: OperadorWhereInput | OperadorWhereInput[]
    OR?: OperadorWhereInput[]
    NOT?: OperadorWhereInput | OperadorWhereInput[]
    nome?: StringFilter<"Operador"> | string
    valor?: DecimalFilter<"Operador"> | Decimal | DecimalJsLike | number | string
    ativo?: BoolFilter<"Operador"> | boolean
    createdAt?: DateTimeFilter<"Operador"> | Date | string
    pesagens?: PesagemListRelationFilter
  }, "matricula">

  export type OperadorOrderByWithAggregationInput = {
    matricula?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    _count?: OperadorCountOrderByAggregateInput
    _avg?: OperadorAvgOrderByAggregateInput
    _max?: OperadorMaxOrderByAggregateInput
    _min?: OperadorMinOrderByAggregateInput
    _sum?: OperadorSumOrderByAggregateInput
  }

  export type OperadorScalarWhereWithAggregatesInput = {
    AND?: OperadorScalarWhereWithAggregatesInput | OperadorScalarWhereWithAggregatesInput[]
    OR?: OperadorScalarWhereWithAggregatesInput[]
    NOT?: OperadorScalarWhereWithAggregatesInput | OperadorScalarWhereWithAggregatesInput[]
    matricula?: IntWithAggregatesFilter<"Operador"> | number
    nome?: StringWithAggregatesFilter<"Operador"> | string
    valor?: DecimalWithAggregatesFilter<"Operador"> | Decimal | DecimalJsLike | number | string
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
    nome?: string
    AND?: CorteWhereInput | CorteWhereInput[]
    OR?: CorteWhereInput[]
    NOT?: CorteWhereInput | CorteWhereInput[]
    imagem?: StringNullableFilter<"Corte"> | string | null
    createdAt?: DateTimeFilter<"Corte"> | Date | string
    updatedAt?: DateTimeFilter<"Corte"> | Date | string
    pesagens?: PesagemListRelationFilter
  }, "id" | "nome">

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
    createdAt?: DateTimeFilter<"Pesagem"> | Date | string
    updatedAt?: DateTimeFilter<"Pesagem"> | Date | string
    corteId?: StringFilter<"Pesagem"> | string
    operadorMatricula?: IntFilter<"Pesagem"> | number
    corte?: XOR<CorteScalarRelationFilter, CorteWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
  }

  export type PesagemOrderByWithRelationInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    corteId?: SortOrder
    operadorMatricula?: SortOrder
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
    createdAt?: DateTimeFilter<"Pesagem"> | Date | string
    updatedAt?: DateTimeFilter<"Pesagem"> | Date | string
    corteId?: StringFilter<"Pesagem"> | string
    operadorMatricula?: IntFilter<"Pesagem"> | number
    corte?: XOR<CorteScalarRelationFilter, CorteWhereInput>
    operador?: XOR<OperadorScalarRelationFilter, OperadorWhereInput>
  }, "id">

  export type PesagemOrderByWithAggregationInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    corteId?: SortOrder
    operadorMatricula?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"Pesagem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pesagem"> | Date | string
    corteId?: StringWithAggregatesFilter<"Pesagem"> | string
    operadorMatricula?: IntWithAggregatesFilter<"Pesagem"> | number
  }

  export type EspecieWhereInput = {
    AND?: EspecieWhereInput | EspecieWhereInput[]
    OR?: EspecieWhereInput[]
    NOT?: EspecieWhereInput | EspecieWhereInput[]
    id?: StringFilter<"Especie"> | string
    nome?: StringFilter<"Especie"> | string
    createdAt?: DateTimeFilter<"Especie"> | Date | string
    updatedAt?: DateTimeFilter<"Especie"> | Date | string
    faixas?: EspecieFaixaPesoListRelationFilter
    mapasCompra?: MapaCompraListRelationFilter
  }

  export type EspecieOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    faixas?: EspecieFaixaPesoOrderByRelationAggregateInput
    mapasCompra?: MapaCompraOrderByRelationAggregateInput
  }

  export type EspecieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: EspecieWhereInput | EspecieWhereInput[]
    OR?: EspecieWhereInput[]
    NOT?: EspecieWhereInput | EspecieWhereInput[]
    createdAt?: DateTimeFilter<"Especie"> | Date | string
    updatedAt?: DateTimeFilter<"Especie"> | Date | string
    faixas?: EspecieFaixaPesoListRelationFilter
    mapasCompra?: MapaCompraListRelationFilter
  }, "id" | "nome">

  export type EspecieOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EspecieCountOrderByAggregateInput
    _max?: EspecieMaxOrderByAggregateInput
    _min?: EspecieMinOrderByAggregateInput
  }

  export type EspecieScalarWhereWithAggregatesInput = {
    AND?: EspecieScalarWhereWithAggregatesInput | EspecieScalarWhereWithAggregatesInput[]
    OR?: EspecieScalarWhereWithAggregatesInput[]
    NOT?: EspecieScalarWhereWithAggregatesInput | EspecieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especie"> | string
    nome?: StringWithAggregatesFilter<"Especie"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Especie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Especie"> | Date | string
  }

  export type EspecieFaixaPesoWhereInput = {
    AND?: EspecieFaixaPesoWhereInput | EspecieFaixaPesoWhereInput[]
    OR?: EspecieFaixaPesoWhereInput[]
    NOT?: EspecieFaixaPesoWhereInput | EspecieFaixaPesoWhereInput[]
    id?: StringFilter<"EspecieFaixaPeso"> | string
    especieId?: StringFilter<"EspecieFaixaPeso"> | string
    pesoMin?: DecimalFilter<"EspecieFaixaPeso"> | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFilter<"EspecieFaixaPeso"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"EspecieFaixaPeso"> | Date | string
    updatedAt?: DateTimeFilter<"EspecieFaixaPeso"> | Date | string
    especie?: XOR<EspecieScalarRelationFilter, EspecieWhereInput>
    valoresFornecedor?: FornecedorValorEspecieListRelationFilter
    mapasCompraFaixa?: MapaCompraFaixaListRelationFilter
  }

  export type EspecieFaixaPesoOrderByWithRelationInput = {
    id?: SortOrder
    especieId?: SortOrder
    pesoMin?: SortOrder
    pesoMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    especie?: EspecieOrderByWithRelationInput
    valoresFornecedor?: FornecedorValorEspecieOrderByRelationAggregateInput
    mapasCompraFaixa?: MapaCompraFaixaOrderByRelationAggregateInput
  }

  export type EspecieFaixaPesoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    especieId_pesoMin_pesoMax?: EspecieFaixaPesoEspecieIdPesoMinPesoMaxCompoundUniqueInput
    AND?: EspecieFaixaPesoWhereInput | EspecieFaixaPesoWhereInput[]
    OR?: EspecieFaixaPesoWhereInput[]
    NOT?: EspecieFaixaPesoWhereInput | EspecieFaixaPesoWhereInput[]
    especieId?: StringFilter<"EspecieFaixaPeso"> | string
    pesoMin?: DecimalFilter<"EspecieFaixaPeso"> | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFilter<"EspecieFaixaPeso"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"EspecieFaixaPeso"> | Date | string
    updatedAt?: DateTimeFilter<"EspecieFaixaPeso"> | Date | string
    especie?: XOR<EspecieScalarRelationFilter, EspecieWhereInput>
    valoresFornecedor?: FornecedorValorEspecieListRelationFilter
    mapasCompraFaixa?: MapaCompraFaixaListRelationFilter
  }, "id" | "especieId_pesoMin_pesoMax">

  export type EspecieFaixaPesoOrderByWithAggregationInput = {
    id?: SortOrder
    especieId?: SortOrder
    pesoMin?: SortOrder
    pesoMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EspecieFaixaPesoCountOrderByAggregateInput
    _avg?: EspecieFaixaPesoAvgOrderByAggregateInput
    _max?: EspecieFaixaPesoMaxOrderByAggregateInput
    _min?: EspecieFaixaPesoMinOrderByAggregateInput
    _sum?: EspecieFaixaPesoSumOrderByAggregateInput
  }

  export type EspecieFaixaPesoScalarWhereWithAggregatesInput = {
    AND?: EspecieFaixaPesoScalarWhereWithAggregatesInput | EspecieFaixaPesoScalarWhereWithAggregatesInput[]
    OR?: EspecieFaixaPesoScalarWhereWithAggregatesInput[]
    NOT?: EspecieFaixaPesoScalarWhereWithAggregatesInput | EspecieFaixaPesoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EspecieFaixaPeso"> | string
    especieId?: StringWithAggregatesFilter<"EspecieFaixaPeso"> | string
    pesoMin?: DecimalWithAggregatesFilter<"EspecieFaixaPeso"> | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalWithAggregatesFilter<"EspecieFaixaPeso"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"EspecieFaixaPeso"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EspecieFaixaPeso"> | Date | string
  }

  export type FornecedorWhereInput = {
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    id?: StringFilter<"Fornecedor"> | string
    nome?: StringFilter<"Fornecedor"> | string
    fazenda?: StringFilter<"Fornecedor"> | string
    createdAt?: DateTimeFilter<"Fornecedor"> | Date | string
    updatedAt?: DateTimeFilter<"Fornecedor"> | Date | string
    valores?: FornecedorValorEspecieListRelationFilter
    mapasCompra?: MapaCompraListRelationFilter
  }

  export type FornecedorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    fazenda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    valores?: FornecedorValorEspecieOrderByRelationAggregateInput
    mapasCompra?: MapaCompraOrderByRelationAggregateInput
  }

  export type FornecedorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome_fazenda?: FornecedorNomeFazendaCompoundUniqueInput
    AND?: FornecedorWhereInput | FornecedorWhereInput[]
    OR?: FornecedorWhereInput[]
    NOT?: FornecedorWhereInput | FornecedorWhereInput[]
    nome?: StringFilter<"Fornecedor"> | string
    fazenda?: StringFilter<"Fornecedor"> | string
    createdAt?: DateTimeFilter<"Fornecedor"> | Date | string
    updatedAt?: DateTimeFilter<"Fornecedor"> | Date | string
    valores?: FornecedorValorEspecieListRelationFilter
    mapasCompra?: MapaCompraListRelationFilter
  }, "id" | "nome_fazenda">

  export type FornecedorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    fazenda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FornecedorCountOrderByAggregateInput
    _max?: FornecedorMaxOrderByAggregateInput
    _min?: FornecedorMinOrderByAggregateInput
  }

  export type FornecedorScalarWhereWithAggregatesInput = {
    AND?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    OR?: FornecedorScalarWhereWithAggregatesInput[]
    NOT?: FornecedorScalarWhereWithAggregatesInput | FornecedorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fornecedor"> | string
    nome?: StringWithAggregatesFilter<"Fornecedor"> | string
    fazenda?: StringWithAggregatesFilter<"Fornecedor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fornecedor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fornecedor"> | Date | string
  }

  export type FornecedorValorEspecieWhereInput = {
    AND?: FornecedorValorEspecieWhereInput | FornecedorValorEspecieWhereInput[]
    OR?: FornecedorValorEspecieWhereInput[]
    NOT?: FornecedorValorEspecieWhereInput | FornecedorValorEspecieWhereInput[]
    id?: StringFilter<"FornecedorValorEspecie"> | string
    fornecedorId?: StringFilter<"FornecedorValorEspecie"> | string
    faixaPesoId?: StringFilter<"FornecedorValorEspecie"> | string
    valorKg?: DecimalFilter<"FornecedorValorEspecie"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"FornecedorValorEspecie"> | Date | string
    updatedAt?: DateTimeFilter<"FornecedorValorEspecie"> | Date | string
    fornecedor?: XOR<FornecedorScalarRelationFilter, FornecedorWhereInput>
    faixaPeso?: XOR<EspecieFaixaPesoScalarRelationFilter, EspecieFaixaPesoWhereInput>
  }

  export type FornecedorValorEspecieOrderByWithRelationInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    faixaPesoId?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedor?: FornecedorOrderByWithRelationInput
    faixaPeso?: EspecieFaixaPesoOrderByWithRelationInput
  }

  export type FornecedorValorEspecieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fornecedorId_faixaPesoId?: FornecedorValorEspecieFornecedorIdFaixaPesoIdCompoundUniqueInput
    AND?: FornecedorValorEspecieWhereInput | FornecedorValorEspecieWhereInput[]
    OR?: FornecedorValorEspecieWhereInput[]
    NOT?: FornecedorValorEspecieWhereInput | FornecedorValorEspecieWhereInput[]
    fornecedorId?: StringFilter<"FornecedorValorEspecie"> | string
    faixaPesoId?: StringFilter<"FornecedorValorEspecie"> | string
    valorKg?: DecimalFilter<"FornecedorValorEspecie"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"FornecedorValorEspecie"> | Date | string
    updatedAt?: DateTimeFilter<"FornecedorValorEspecie"> | Date | string
    fornecedor?: XOR<FornecedorScalarRelationFilter, FornecedorWhereInput>
    faixaPeso?: XOR<EspecieFaixaPesoScalarRelationFilter, EspecieFaixaPesoWhereInput>
  }, "id" | "fornecedorId_faixaPesoId">

  export type FornecedorValorEspecieOrderByWithAggregationInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    faixaPesoId?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FornecedorValorEspecieCountOrderByAggregateInput
    _avg?: FornecedorValorEspecieAvgOrderByAggregateInput
    _max?: FornecedorValorEspecieMaxOrderByAggregateInput
    _min?: FornecedorValorEspecieMinOrderByAggregateInput
    _sum?: FornecedorValorEspecieSumOrderByAggregateInput
  }

  export type FornecedorValorEspecieScalarWhereWithAggregatesInput = {
    AND?: FornecedorValorEspecieScalarWhereWithAggregatesInput | FornecedorValorEspecieScalarWhereWithAggregatesInput[]
    OR?: FornecedorValorEspecieScalarWhereWithAggregatesInput[]
    NOT?: FornecedorValorEspecieScalarWhereWithAggregatesInput | FornecedorValorEspecieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FornecedorValorEspecie"> | string
    fornecedorId?: StringWithAggregatesFilter<"FornecedorValorEspecie"> | string
    faixaPesoId?: StringWithAggregatesFilter<"FornecedorValorEspecie"> | string
    valorKg?: DecimalWithAggregatesFilter<"FornecedorValorEspecie"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"FornecedorValorEspecie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FornecedorValorEspecie"> | Date | string
  }

  export type MapaCompraWhereInput = {
    AND?: MapaCompraWhereInput | MapaCompraWhereInput[]
    OR?: MapaCompraWhereInput[]
    NOT?: MapaCompraWhereInput | MapaCompraWhereInput[]
    id?: StringFilter<"MapaCompra"> | string
    fornecedorId?: StringFilter<"MapaCompra"> | string
    especieId?: StringFilter<"MapaCompra"> | string
    lote?: IntFilter<"MapaCompra"> | number
    dataDespesca?: DateTimeFilter<"MapaCompra"> | Date | string
    prazoDias?: IntFilter<"MapaCompra"> | number
    dataVencimento?: DateTimeFilter<"MapaCompra"> | Date | string
    pesoBruto?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MapaCompra"> | Date | string
    updatedAt?: DateTimeFilter<"MapaCompra"> | Date | string
    fornecedor?: XOR<FornecedorScalarRelationFilter, FornecedorWhereInput>
    especie?: XOR<EspecieScalarRelationFilter, EspecieWhereInput>
    faixas?: MapaCompraFaixaListRelationFilter
  }

  export type MapaCompraOrderByWithRelationInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    especieId?: SortOrder
    lote?: SortOrder
    dataDespesca?: SortOrder
    prazoDias?: SortOrder
    dataVencimento?: SortOrder
    pesoBruto?: SortOrder
    descontoUmidade?: SortOrder
    pesoLiquido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedor?: FornecedorOrderByWithRelationInput
    especie?: EspecieOrderByWithRelationInput
    faixas?: MapaCompraFaixaOrderByRelationAggregateInput
  }

  export type MapaCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fornecedorId_lote?: MapaCompraFornecedorIdLoteCompoundUniqueInput
    AND?: MapaCompraWhereInput | MapaCompraWhereInput[]
    OR?: MapaCompraWhereInput[]
    NOT?: MapaCompraWhereInput | MapaCompraWhereInput[]
    fornecedorId?: StringFilter<"MapaCompra"> | string
    especieId?: StringFilter<"MapaCompra"> | string
    lote?: IntFilter<"MapaCompra"> | number
    dataDespesca?: DateTimeFilter<"MapaCompra"> | Date | string
    prazoDias?: IntFilter<"MapaCompra"> | number
    dataVencimento?: DateTimeFilter<"MapaCompra"> | Date | string
    pesoBruto?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MapaCompra"> | Date | string
    updatedAt?: DateTimeFilter<"MapaCompra"> | Date | string
    fornecedor?: XOR<FornecedorScalarRelationFilter, FornecedorWhereInput>
    especie?: XOR<EspecieScalarRelationFilter, EspecieWhereInput>
    faixas?: MapaCompraFaixaListRelationFilter
  }, "id" | "fornecedorId_lote">

  export type MapaCompraOrderByWithAggregationInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    especieId?: SortOrder
    lote?: SortOrder
    dataDespesca?: SortOrder
    prazoDias?: SortOrder
    dataVencimento?: SortOrder
    pesoBruto?: SortOrder
    descontoUmidade?: SortOrder
    pesoLiquido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MapaCompraCountOrderByAggregateInput
    _avg?: MapaCompraAvgOrderByAggregateInput
    _max?: MapaCompraMaxOrderByAggregateInput
    _min?: MapaCompraMinOrderByAggregateInput
    _sum?: MapaCompraSumOrderByAggregateInput
  }

  export type MapaCompraScalarWhereWithAggregatesInput = {
    AND?: MapaCompraScalarWhereWithAggregatesInput | MapaCompraScalarWhereWithAggregatesInput[]
    OR?: MapaCompraScalarWhereWithAggregatesInput[]
    NOT?: MapaCompraScalarWhereWithAggregatesInput | MapaCompraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapaCompra"> | string
    fornecedorId?: StringWithAggregatesFilter<"MapaCompra"> | string
    especieId?: StringWithAggregatesFilter<"MapaCompra"> | string
    lote?: IntWithAggregatesFilter<"MapaCompra"> | number
    dataDespesca?: DateTimeWithAggregatesFilter<"MapaCompra"> | Date | string
    prazoDias?: IntWithAggregatesFilter<"MapaCompra"> | number
    dataVencimento?: DateTimeWithAggregatesFilter<"MapaCompra"> | Date | string
    pesoBruto?: DecimalWithAggregatesFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalWithAggregatesFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalWithAggregatesFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"MapaCompra"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MapaCompra"> | Date | string
  }

  export type MapaCompraFaixaWhereInput = {
    AND?: MapaCompraFaixaWhereInput | MapaCompraFaixaWhereInput[]
    OR?: MapaCompraFaixaWhereInput[]
    NOT?: MapaCompraFaixaWhereInput | MapaCompraFaixaWhereInput[]
    id?: StringFilter<"MapaCompraFaixa"> | string
    mapaCompraId?: StringFilter<"MapaCompraFaixa"> | string
    faixaPesoId?: StringFilter<"MapaCompraFaixa"> | string
    pesoKg?: DecimalFilter<"MapaCompraFaixa"> | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFilter<"MapaCompraFaixa"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MapaCompraFaixa"> | Date | string
    updatedAt?: DateTimeFilter<"MapaCompraFaixa"> | Date | string
    mapaCompra?: XOR<MapaCompraScalarRelationFilter, MapaCompraWhereInput>
    faixaPeso?: XOR<EspecieFaixaPesoScalarRelationFilter, EspecieFaixaPesoWhereInput>
  }

  export type MapaCompraFaixaOrderByWithRelationInput = {
    id?: SortOrder
    mapaCompraId?: SortOrder
    faixaPesoId?: SortOrder
    pesoKg?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mapaCompra?: MapaCompraOrderByWithRelationInput
    faixaPeso?: EspecieFaixaPesoOrderByWithRelationInput
  }

  export type MapaCompraFaixaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mapaCompraId_faixaPesoId?: MapaCompraFaixaMapaCompraIdFaixaPesoIdCompoundUniqueInput
    AND?: MapaCompraFaixaWhereInput | MapaCompraFaixaWhereInput[]
    OR?: MapaCompraFaixaWhereInput[]
    NOT?: MapaCompraFaixaWhereInput | MapaCompraFaixaWhereInput[]
    mapaCompraId?: StringFilter<"MapaCompraFaixa"> | string
    faixaPesoId?: StringFilter<"MapaCompraFaixa"> | string
    pesoKg?: DecimalFilter<"MapaCompraFaixa"> | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFilter<"MapaCompraFaixa"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MapaCompraFaixa"> | Date | string
    updatedAt?: DateTimeFilter<"MapaCompraFaixa"> | Date | string
    mapaCompra?: XOR<MapaCompraScalarRelationFilter, MapaCompraWhereInput>
    faixaPeso?: XOR<EspecieFaixaPesoScalarRelationFilter, EspecieFaixaPesoWhereInput>
  }, "id" | "mapaCompraId_faixaPesoId">

  export type MapaCompraFaixaOrderByWithAggregationInput = {
    id?: SortOrder
    mapaCompraId?: SortOrder
    faixaPesoId?: SortOrder
    pesoKg?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MapaCompraFaixaCountOrderByAggregateInput
    _avg?: MapaCompraFaixaAvgOrderByAggregateInput
    _max?: MapaCompraFaixaMaxOrderByAggregateInput
    _min?: MapaCompraFaixaMinOrderByAggregateInput
    _sum?: MapaCompraFaixaSumOrderByAggregateInput
  }

  export type MapaCompraFaixaScalarWhereWithAggregatesInput = {
    AND?: MapaCompraFaixaScalarWhereWithAggregatesInput | MapaCompraFaixaScalarWhereWithAggregatesInput[]
    OR?: MapaCompraFaixaScalarWhereWithAggregatesInput[]
    NOT?: MapaCompraFaixaScalarWhereWithAggregatesInput | MapaCompraFaixaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MapaCompraFaixa"> | string
    mapaCompraId?: StringWithAggregatesFilter<"MapaCompraFaixa"> | string
    faixaPesoId?: StringWithAggregatesFilter<"MapaCompraFaixa"> | string
    pesoKg?: DecimalWithAggregatesFilter<"MapaCompraFaixa"> | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalWithAggregatesFilter<"MapaCompraFaixa"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"MapaCompraFaixa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MapaCompraFaixa"> | Date | string
  }

  export type OperadorCreateInput = {
    matricula: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    createdAt?: Date | string
    pesagens?: PesagemCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUncheckedCreateInput = {
    matricula: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    createdAt?: Date | string
    pesagens?: PesagemUncheckedCreateNestedManyWithoutOperadorInput
  }

  export type OperadorUpdateInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pesagens?: PesagemUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorUncheckedUpdateInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pesagens?: PesagemUncheckedUpdateManyWithoutOperadorNestedInput
  }

  export type OperadorCreateManyInput = {
    matricula: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    createdAt?: Date | string
  }

  export type OperadorUpdateManyMutationInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperadorUncheckedUpdateManyInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    corte: CorteCreateNestedOneWithoutPesagensInput
    operador: OperadorCreateNestedOneWithoutPesagensInput
  }

  export type PesagemUncheckedCreateInput = {
    id?: string
    peso: number
    tipoPesagem: string
    createdAt?: Date | string
    updatedAt?: Date | string
    corteId: string
    operadorMatricula: number
  }

  export type PesagemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corte?: CorteUpdateOneRequiredWithoutPesagensNestedInput
    operador?: OperadorUpdateOneRequiredWithoutPesagensNestedInput
  }

  export type PesagemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corteId?: StringFieldUpdateOperationsInput | string
    operadorMatricula?: IntFieldUpdateOperationsInput | number
  }

  export type PesagemCreateManyInput = {
    id?: string
    peso: number
    tipoPesagem: string
    createdAt?: Date | string
    updatedAt?: Date | string
    corteId: string
    operadorMatricula: number
  }

  export type PesagemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesagemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corteId?: StringFieldUpdateOperationsInput | string
    operadorMatricula?: IntFieldUpdateOperationsInput | number
  }

  export type EspecieCreateInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixas?: EspecieFaixaPesoCreateNestedManyWithoutEspecieInput
    mapasCompra?: MapaCompraCreateNestedManyWithoutEspecieInput
  }

  export type EspecieUncheckedCreateInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixas?: EspecieFaixaPesoUncheckedCreateNestedManyWithoutEspecieInput
    mapasCompra?: MapaCompraUncheckedCreateNestedManyWithoutEspecieInput
  }

  export type EspecieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixas?: EspecieFaixaPesoUpdateManyWithoutEspecieNestedInput
    mapasCompra?: MapaCompraUpdateManyWithoutEspecieNestedInput
  }

  export type EspecieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixas?: EspecieFaixaPesoUncheckedUpdateManyWithoutEspecieNestedInput
    mapasCompra?: MapaCompraUncheckedUpdateManyWithoutEspecieNestedInput
  }

  export type EspecieCreateManyInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecieFaixaPesoCreateInput = {
    id?: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    especie: EspecieCreateNestedOneWithoutFaixasInput
    valoresFornecedor?: FornecedorValorEspecieCreateNestedManyWithoutFaixaPesoInput
    mapasCompraFaixa?: MapaCompraFaixaCreateNestedManyWithoutFaixaPesoInput
  }

  export type EspecieFaixaPesoUncheckedCreateInput = {
    id?: string
    especieId: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    valoresFornecedor?: FornecedorValorEspecieUncheckedCreateNestedManyWithoutFaixaPesoInput
    mapasCompraFaixa?: MapaCompraFaixaUncheckedCreateNestedManyWithoutFaixaPesoInput
  }

  export type EspecieFaixaPesoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especie?: EspecieUpdateOneRequiredWithoutFaixasNestedInput
    valoresFornecedor?: FornecedorValorEspecieUpdateManyWithoutFaixaPesoNestedInput
    mapasCompraFaixa?: MapaCompraFaixaUpdateManyWithoutFaixaPesoNestedInput
  }

  export type EspecieFaixaPesoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    valoresFornecedor?: FornecedorValorEspecieUncheckedUpdateManyWithoutFaixaPesoNestedInput
    mapasCompraFaixa?: MapaCompraFaixaUncheckedUpdateManyWithoutFaixaPesoNestedInput
  }

  export type EspecieFaixaPesoCreateManyInput = {
    id?: string
    especieId: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecieFaixaPesoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecieFaixaPesoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorCreateInput = {
    id?: string
    nome: string
    fazenda: string
    createdAt?: Date | string
    updatedAt?: Date | string
    valores?: FornecedorValorEspecieCreateNestedManyWithoutFornecedorInput
    mapasCompra?: MapaCompraCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateInput = {
    id?: string
    nome: string
    fazenda: string
    createdAt?: Date | string
    updatedAt?: Date | string
    valores?: FornecedorValorEspecieUncheckedCreateNestedManyWithoutFornecedorInput
    mapasCompra?: MapaCompraUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    fazenda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: FornecedorValorEspecieUpdateManyWithoutFornecedorNestedInput
    mapasCompra?: MapaCompraUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    fazenda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: FornecedorValorEspecieUncheckedUpdateManyWithoutFornecedorNestedInput
    mapasCompra?: MapaCompraUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorCreateManyInput = {
    id?: string
    nome: string
    fazenda: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    fazenda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    fazenda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorValorEspecieCreateInput = {
    id?: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutValoresInput
    faixaPeso: EspecieFaixaPesoCreateNestedOneWithoutValoresFornecedorInput
  }

  export type FornecedorValorEspecieUncheckedCreateInput = {
    id?: string
    fornecedorId: string
    faixaPesoId: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorValorEspecieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutValoresNestedInput
    faixaPeso?: EspecieFaixaPesoUpdateOneRequiredWithoutValoresFornecedorNestedInput
  }

  export type FornecedorValorEspecieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    faixaPesoId?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorValorEspecieCreateManyInput = {
    id?: string
    fornecedorId: string
    faixaPesoId: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorValorEspecieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorValorEspecieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    faixaPesoId?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraCreateInput = {
    id?: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutMapasCompraInput
    especie: EspecieCreateNestedOneWithoutMapasCompraInput
    faixas?: MapaCompraFaixaCreateNestedManyWithoutMapaCompraInput
  }

  export type MapaCompraUncheckedCreateInput = {
    id?: string
    fornecedorId: string
    especieId: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixas?: MapaCompraFaixaUncheckedCreateNestedManyWithoutMapaCompraInput
  }

  export type MapaCompraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutMapasCompraNestedInput
    especie?: EspecieUpdateOneRequiredWithoutMapasCompraNestedInput
    faixas?: MapaCompraFaixaUpdateManyWithoutMapaCompraNestedInput
  }

  export type MapaCompraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixas?: MapaCompraFaixaUncheckedUpdateManyWithoutMapaCompraNestedInput
  }

  export type MapaCompraCreateManyInput = {
    id?: string
    fornecedorId: string
    especieId: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraFaixaCreateInput = {
    id?: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapaCompra: MapaCompraCreateNestedOneWithoutFaixasInput
    faixaPeso: EspecieFaixaPesoCreateNestedOneWithoutMapasCompraFaixaInput
  }

  export type MapaCompraFaixaUncheckedCreateInput = {
    id?: string
    mapaCompraId: string
    faixaPesoId: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraFaixaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapaCompra?: MapaCompraUpdateOneRequiredWithoutFaixasNestedInput
    faixaPeso?: EspecieFaixaPesoUpdateOneRequiredWithoutMapasCompraFaixaNestedInput
  }

  export type MapaCompraFaixaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapaCompraId?: StringFieldUpdateOperationsInput | string
    faixaPesoId?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraFaixaCreateManyInput = {
    id?: string
    mapaCompraId: string
    faixaPesoId: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraFaixaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraFaixaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapaCompraId?: StringFieldUpdateOperationsInput | string
    faixaPesoId?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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
    matricula?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
  }

  export type OperadorAvgOrderByAggregateInput = {
    matricula?: SortOrder
    valor?: SortOrder
  }

  export type OperadorMaxOrderByAggregateInput = {
    matricula?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
  }

  export type OperadorMinOrderByAggregateInput = {
    matricula?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
  }

  export type OperadorSumOrderByAggregateInput = {
    matricula?: SortOrder
    valor?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    corteId?: SortOrder
    operadorMatricula?: SortOrder
  }

  export type PesagemAvgOrderByAggregateInput = {
    peso?: SortOrder
    operadorMatricula?: SortOrder
  }

  export type PesagemMaxOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    corteId?: SortOrder
    operadorMatricula?: SortOrder
  }

  export type PesagemMinOrderByAggregateInput = {
    id?: SortOrder
    peso?: SortOrder
    tipoPesagem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    corteId?: SortOrder
    operadorMatricula?: SortOrder
  }

  export type PesagemSumOrderByAggregateInput = {
    peso?: SortOrder
    operadorMatricula?: SortOrder
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

  export type EspecieFaixaPesoListRelationFilter = {
    every?: EspecieFaixaPesoWhereInput
    some?: EspecieFaixaPesoWhereInput
    none?: EspecieFaixaPesoWhereInput
  }

  export type MapaCompraListRelationFilter = {
    every?: MapaCompraWhereInput
    some?: MapaCompraWhereInput
    none?: MapaCompraWhereInput
  }

  export type EspecieFaixaPesoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapaCompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecieCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieScalarRelationFilter = {
    is?: EspecieWhereInput
    isNot?: EspecieWhereInput
  }

  export type FornecedorValorEspecieListRelationFilter = {
    every?: FornecedorValorEspecieWhereInput
    some?: FornecedorValorEspecieWhereInput
    none?: FornecedorValorEspecieWhereInput
  }

  export type MapaCompraFaixaListRelationFilter = {
    every?: MapaCompraFaixaWhereInput
    some?: MapaCompraFaixaWhereInput
    none?: MapaCompraFaixaWhereInput
  }

  export type FornecedorValorEspecieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MapaCompraFaixaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecieFaixaPesoEspecieIdPesoMinPesoMaxCompoundUniqueInput = {
    especieId: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
  }

  export type EspecieFaixaPesoCountOrderByAggregateInput = {
    id?: SortOrder
    especieId?: SortOrder
    pesoMin?: SortOrder
    pesoMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieFaixaPesoAvgOrderByAggregateInput = {
    pesoMin?: SortOrder
    pesoMax?: SortOrder
  }

  export type EspecieFaixaPesoMaxOrderByAggregateInput = {
    id?: SortOrder
    especieId?: SortOrder
    pesoMin?: SortOrder
    pesoMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieFaixaPesoMinOrderByAggregateInput = {
    id?: SortOrder
    especieId?: SortOrder
    pesoMin?: SortOrder
    pesoMax?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecieFaixaPesoSumOrderByAggregateInput = {
    pesoMin?: SortOrder
    pesoMax?: SortOrder
  }

  export type FornecedorNomeFazendaCompoundUniqueInput = {
    nome: string
    fazenda: string
  }

  export type FornecedorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fazenda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fazenda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    fazenda?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorScalarRelationFilter = {
    is?: FornecedorWhereInput
    isNot?: FornecedorWhereInput
  }

  export type EspecieFaixaPesoScalarRelationFilter = {
    is?: EspecieFaixaPesoWhereInput
    isNot?: EspecieFaixaPesoWhereInput
  }

  export type FornecedorValorEspecieFornecedorIdFaixaPesoIdCompoundUniqueInput = {
    fornecedorId: string
    faixaPesoId: string
  }

  export type FornecedorValorEspecieCountOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    faixaPesoId?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorValorEspecieAvgOrderByAggregateInput = {
    valorKg?: SortOrder
  }

  export type FornecedorValorEspecieMaxOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    faixaPesoId?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorValorEspecieMinOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    faixaPesoId?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FornecedorValorEspecieSumOrderByAggregateInput = {
    valorKg?: SortOrder
  }

  export type MapaCompraFornecedorIdLoteCompoundUniqueInput = {
    fornecedorId: string
    lote: number
  }

  export type MapaCompraCountOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    especieId?: SortOrder
    lote?: SortOrder
    dataDespesca?: SortOrder
    prazoDias?: SortOrder
    dataVencimento?: SortOrder
    pesoBruto?: SortOrder
    descontoUmidade?: SortOrder
    pesoLiquido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapaCompraAvgOrderByAggregateInput = {
    lote?: SortOrder
    prazoDias?: SortOrder
    pesoBruto?: SortOrder
    descontoUmidade?: SortOrder
    pesoLiquido?: SortOrder
  }

  export type MapaCompraMaxOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    especieId?: SortOrder
    lote?: SortOrder
    dataDespesca?: SortOrder
    prazoDias?: SortOrder
    dataVencimento?: SortOrder
    pesoBruto?: SortOrder
    descontoUmidade?: SortOrder
    pesoLiquido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapaCompraMinOrderByAggregateInput = {
    id?: SortOrder
    fornecedorId?: SortOrder
    especieId?: SortOrder
    lote?: SortOrder
    dataDespesca?: SortOrder
    prazoDias?: SortOrder
    dataVencimento?: SortOrder
    pesoBruto?: SortOrder
    descontoUmidade?: SortOrder
    pesoLiquido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapaCompraSumOrderByAggregateInput = {
    lote?: SortOrder
    prazoDias?: SortOrder
    pesoBruto?: SortOrder
    descontoUmidade?: SortOrder
    pesoLiquido?: SortOrder
  }

  export type MapaCompraScalarRelationFilter = {
    is?: MapaCompraWhereInput
    isNot?: MapaCompraWhereInput
  }

  export type MapaCompraFaixaMapaCompraIdFaixaPesoIdCompoundUniqueInput = {
    mapaCompraId: string
    faixaPesoId: string
  }

  export type MapaCompraFaixaCountOrderByAggregateInput = {
    id?: SortOrder
    mapaCompraId?: SortOrder
    faixaPesoId?: SortOrder
    pesoKg?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapaCompraFaixaAvgOrderByAggregateInput = {
    pesoKg?: SortOrder
    valorKg?: SortOrder
  }

  export type MapaCompraFaixaMaxOrderByAggregateInput = {
    id?: SortOrder
    mapaCompraId?: SortOrder
    faixaPesoId?: SortOrder
    pesoKg?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapaCompraFaixaMinOrderByAggregateInput = {
    id?: SortOrder
    mapaCompraId?: SortOrder
    faixaPesoId?: SortOrder
    pesoKg?: SortOrder
    valorKg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MapaCompraFaixaSumOrderByAggregateInput = {
    pesoKg?: SortOrder
    valorKg?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type EspecieFaixaPesoCreateNestedManyWithoutEspecieInput = {
    create?: XOR<EspecieFaixaPesoCreateWithoutEspecieInput, EspecieFaixaPesoUncheckedCreateWithoutEspecieInput> | EspecieFaixaPesoCreateWithoutEspecieInput[] | EspecieFaixaPesoUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: EspecieFaixaPesoCreateOrConnectWithoutEspecieInput | EspecieFaixaPesoCreateOrConnectWithoutEspecieInput[]
    createMany?: EspecieFaixaPesoCreateManyEspecieInputEnvelope
    connect?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
  }

  export type MapaCompraCreateNestedManyWithoutEspecieInput = {
    create?: XOR<MapaCompraCreateWithoutEspecieInput, MapaCompraUncheckedCreateWithoutEspecieInput> | MapaCompraCreateWithoutEspecieInput[] | MapaCompraUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: MapaCompraCreateOrConnectWithoutEspecieInput | MapaCompraCreateOrConnectWithoutEspecieInput[]
    createMany?: MapaCompraCreateManyEspecieInputEnvelope
    connect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
  }

  export type EspecieFaixaPesoUncheckedCreateNestedManyWithoutEspecieInput = {
    create?: XOR<EspecieFaixaPesoCreateWithoutEspecieInput, EspecieFaixaPesoUncheckedCreateWithoutEspecieInput> | EspecieFaixaPesoCreateWithoutEspecieInput[] | EspecieFaixaPesoUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: EspecieFaixaPesoCreateOrConnectWithoutEspecieInput | EspecieFaixaPesoCreateOrConnectWithoutEspecieInput[]
    createMany?: EspecieFaixaPesoCreateManyEspecieInputEnvelope
    connect?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
  }

  export type MapaCompraUncheckedCreateNestedManyWithoutEspecieInput = {
    create?: XOR<MapaCompraCreateWithoutEspecieInput, MapaCompraUncheckedCreateWithoutEspecieInput> | MapaCompraCreateWithoutEspecieInput[] | MapaCompraUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: MapaCompraCreateOrConnectWithoutEspecieInput | MapaCompraCreateOrConnectWithoutEspecieInput[]
    createMany?: MapaCompraCreateManyEspecieInputEnvelope
    connect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
  }

  export type EspecieFaixaPesoUpdateManyWithoutEspecieNestedInput = {
    create?: XOR<EspecieFaixaPesoCreateWithoutEspecieInput, EspecieFaixaPesoUncheckedCreateWithoutEspecieInput> | EspecieFaixaPesoCreateWithoutEspecieInput[] | EspecieFaixaPesoUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: EspecieFaixaPesoCreateOrConnectWithoutEspecieInput | EspecieFaixaPesoCreateOrConnectWithoutEspecieInput[]
    upsert?: EspecieFaixaPesoUpsertWithWhereUniqueWithoutEspecieInput | EspecieFaixaPesoUpsertWithWhereUniqueWithoutEspecieInput[]
    createMany?: EspecieFaixaPesoCreateManyEspecieInputEnvelope
    set?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
    disconnect?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
    delete?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
    connect?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
    update?: EspecieFaixaPesoUpdateWithWhereUniqueWithoutEspecieInput | EspecieFaixaPesoUpdateWithWhereUniqueWithoutEspecieInput[]
    updateMany?: EspecieFaixaPesoUpdateManyWithWhereWithoutEspecieInput | EspecieFaixaPesoUpdateManyWithWhereWithoutEspecieInput[]
    deleteMany?: EspecieFaixaPesoScalarWhereInput | EspecieFaixaPesoScalarWhereInput[]
  }

  export type MapaCompraUpdateManyWithoutEspecieNestedInput = {
    create?: XOR<MapaCompraCreateWithoutEspecieInput, MapaCompraUncheckedCreateWithoutEspecieInput> | MapaCompraCreateWithoutEspecieInput[] | MapaCompraUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: MapaCompraCreateOrConnectWithoutEspecieInput | MapaCompraCreateOrConnectWithoutEspecieInput[]
    upsert?: MapaCompraUpsertWithWhereUniqueWithoutEspecieInput | MapaCompraUpsertWithWhereUniqueWithoutEspecieInput[]
    createMany?: MapaCompraCreateManyEspecieInputEnvelope
    set?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    disconnect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    delete?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    connect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    update?: MapaCompraUpdateWithWhereUniqueWithoutEspecieInput | MapaCompraUpdateWithWhereUniqueWithoutEspecieInput[]
    updateMany?: MapaCompraUpdateManyWithWhereWithoutEspecieInput | MapaCompraUpdateManyWithWhereWithoutEspecieInput[]
    deleteMany?: MapaCompraScalarWhereInput | MapaCompraScalarWhereInput[]
  }

  export type EspecieFaixaPesoUncheckedUpdateManyWithoutEspecieNestedInput = {
    create?: XOR<EspecieFaixaPesoCreateWithoutEspecieInput, EspecieFaixaPesoUncheckedCreateWithoutEspecieInput> | EspecieFaixaPesoCreateWithoutEspecieInput[] | EspecieFaixaPesoUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: EspecieFaixaPesoCreateOrConnectWithoutEspecieInput | EspecieFaixaPesoCreateOrConnectWithoutEspecieInput[]
    upsert?: EspecieFaixaPesoUpsertWithWhereUniqueWithoutEspecieInput | EspecieFaixaPesoUpsertWithWhereUniqueWithoutEspecieInput[]
    createMany?: EspecieFaixaPesoCreateManyEspecieInputEnvelope
    set?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
    disconnect?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
    delete?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
    connect?: EspecieFaixaPesoWhereUniqueInput | EspecieFaixaPesoWhereUniqueInput[]
    update?: EspecieFaixaPesoUpdateWithWhereUniqueWithoutEspecieInput | EspecieFaixaPesoUpdateWithWhereUniqueWithoutEspecieInput[]
    updateMany?: EspecieFaixaPesoUpdateManyWithWhereWithoutEspecieInput | EspecieFaixaPesoUpdateManyWithWhereWithoutEspecieInput[]
    deleteMany?: EspecieFaixaPesoScalarWhereInput | EspecieFaixaPesoScalarWhereInput[]
  }

  export type MapaCompraUncheckedUpdateManyWithoutEspecieNestedInput = {
    create?: XOR<MapaCompraCreateWithoutEspecieInput, MapaCompraUncheckedCreateWithoutEspecieInput> | MapaCompraCreateWithoutEspecieInput[] | MapaCompraUncheckedCreateWithoutEspecieInput[]
    connectOrCreate?: MapaCompraCreateOrConnectWithoutEspecieInput | MapaCompraCreateOrConnectWithoutEspecieInput[]
    upsert?: MapaCompraUpsertWithWhereUniqueWithoutEspecieInput | MapaCompraUpsertWithWhereUniqueWithoutEspecieInput[]
    createMany?: MapaCompraCreateManyEspecieInputEnvelope
    set?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    disconnect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    delete?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    connect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    update?: MapaCompraUpdateWithWhereUniqueWithoutEspecieInput | MapaCompraUpdateWithWhereUniqueWithoutEspecieInput[]
    updateMany?: MapaCompraUpdateManyWithWhereWithoutEspecieInput | MapaCompraUpdateManyWithWhereWithoutEspecieInput[]
    deleteMany?: MapaCompraScalarWhereInput | MapaCompraScalarWhereInput[]
  }

  export type EspecieCreateNestedOneWithoutFaixasInput = {
    create?: XOR<EspecieCreateWithoutFaixasInput, EspecieUncheckedCreateWithoutFaixasInput>
    connectOrCreate?: EspecieCreateOrConnectWithoutFaixasInput
    connect?: EspecieWhereUniqueInput
  }

  export type FornecedorValorEspecieCreateNestedManyWithoutFaixaPesoInput = {
    create?: XOR<FornecedorValorEspecieCreateWithoutFaixaPesoInput, FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput> | FornecedorValorEspecieCreateWithoutFaixaPesoInput[] | FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput[]
    connectOrCreate?: FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput | FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput[]
    createMany?: FornecedorValorEspecieCreateManyFaixaPesoInputEnvelope
    connect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
  }

  export type MapaCompraFaixaCreateNestedManyWithoutFaixaPesoInput = {
    create?: XOR<MapaCompraFaixaCreateWithoutFaixaPesoInput, MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput> | MapaCompraFaixaCreateWithoutFaixaPesoInput[] | MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput[]
    connectOrCreate?: MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput | MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput[]
    createMany?: MapaCompraFaixaCreateManyFaixaPesoInputEnvelope
    connect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
  }

  export type FornecedorValorEspecieUncheckedCreateNestedManyWithoutFaixaPesoInput = {
    create?: XOR<FornecedorValorEspecieCreateWithoutFaixaPesoInput, FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput> | FornecedorValorEspecieCreateWithoutFaixaPesoInput[] | FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput[]
    connectOrCreate?: FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput | FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput[]
    createMany?: FornecedorValorEspecieCreateManyFaixaPesoInputEnvelope
    connect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
  }

  export type MapaCompraFaixaUncheckedCreateNestedManyWithoutFaixaPesoInput = {
    create?: XOR<MapaCompraFaixaCreateWithoutFaixaPesoInput, MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput> | MapaCompraFaixaCreateWithoutFaixaPesoInput[] | MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput[]
    connectOrCreate?: MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput | MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput[]
    createMany?: MapaCompraFaixaCreateManyFaixaPesoInputEnvelope
    connect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
  }

  export type EspecieUpdateOneRequiredWithoutFaixasNestedInput = {
    create?: XOR<EspecieCreateWithoutFaixasInput, EspecieUncheckedCreateWithoutFaixasInput>
    connectOrCreate?: EspecieCreateOrConnectWithoutFaixasInput
    upsert?: EspecieUpsertWithoutFaixasInput
    connect?: EspecieWhereUniqueInput
    update?: XOR<XOR<EspecieUpdateToOneWithWhereWithoutFaixasInput, EspecieUpdateWithoutFaixasInput>, EspecieUncheckedUpdateWithoutFaixasInput>
  }

  export type FornecedorValorEspecieUpdateManyWithoutFaixaPesoNestedInput = {
    create?: XOR<FornecedorValorEspecieCreateWithoutFaixaPesoInput, FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput> | FornecedorValorEspecieCreateWithoutFaixaPesoInput[] | FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput[]
    connectOrCreate?: FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput | FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput[]
    upsert?: FornecedorValorEspecieUpsertWithWhereUniqueWithoutFaixaPesoInput | FornecedorValorEspecieUpsertWithWhereUniqueWithoutFaixaPesoInput[]
    createMany?: FornecedorValorEspecieCreateManyFaixaPesoInputEnvelope
    set?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    disconnect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    delete?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    connect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    update?: FornecedorValorEspecieUpdateWithWhereUniqueWithoutFaixaPesoInput | FornecedorValorEspecieUpdateWithWhereUniqueWithoutFaixaPesoInput[]
    updateMany?: FornecedorValorEspecieUpdateManyWithWhereWithoutFaixaPesoInput | FornecedorValorEspecieUpdateManyWithWhereWithoutFaixaPesoInput[]
    deleteMany?: FornecedorValorEspecieScalarWhereInput | FornecedorValorEspecieScalarWhereInput[]
  }

  export type MapaCompraFaixaUpdateManyWithoutFaixaPesoNestedInput = {
    create?: XOR<MapaCompraFaixaCreateWithoutFaixaPesoInput, MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput> | MapaCompraFaixaCreateWithoutFaixaPesoInput[] | MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput[]
    connectOrCreate?: MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput | MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput[]
    upsert?: MapaCompraFaixaUpsertWithWhereUniqueWithoutFaixaPesoInput | MapaCompraFaixaUpsertWithWhereUniqueWithoutFaixaPesoInput[]
    createMany?: MapaCompraFaixaCreateManyFaixaPesoInputEnvelope
    set?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    disconnect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    delete?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    connect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    update?: MapaCompraFaixaUpdateWithWhereUniqueWithoutFaixaPesoInput | MapaCompraFaixaUpdateWithWhereUniqueWithoutFaixaPesoInput[]
    updateMany?: MapaCompraFaixaUpdateManyWithWhereWithoutFaixaPesoInput | MapaCompraFaixaUpdateManyWithWhereWithoutFaixaPesoInput[]
    deleteMany?: MapaCompraFaixaScalarWhereInput | MapaCompraFaixaScalarWhereInput[]
  }

  export type FornecedorValorEspecieUncheckedUpdateManyWithoutFaixaPesoNestedInput = {
    create?: XOR<FornecedorValorEspecieCreateWithoutFaixaPesoInput, FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput> | FornecedorValorEspecieCreateWithoutFaixaPesoInput[] | FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput[]
    connectOrCreate?: FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput | FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput[]
    upsert?: FornecedorValorEspecieUpsertWithWhereUniqueWithoutFaixaPesoInput | FornecedorValorEspecieUpsertWithWhereUniqueWithoutFaixaPesoInput[]
    createMany?: FornecedorValorEspecieCreateManyFaixaPesoInputEnvelope
    set?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    disconnect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    delete?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    connect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    update?: FornecedorValorEspecieUpdateWithWhereUniqueWithoutFaixaPesoInput | FornecedorValorEspecieUpdateWithWhereUniqueWithoutFaixaPesoInput[]
    updateMany?: FornecedorValorEspecieUpdateManyWithWhereWithoutFaixaPesoInput | FornecedorValorEspecieUpdateManyWithWhereWithoutFaixaPesoInput[]
    deleteMany?: FornecedorValorEspecieScalarWhereInput | FornecedorValorEspecieScalarWhereInput[]
  }

  export type MapaCompraFaixaUncheckedUpdateManyWithoutFaixaPesoNestedInput = {
    create?: XOR<MapaCompraFaixaCreateWithoutFaixaPesoInput, MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput> | MapaCompraFaixaCreateWithoutFaixaPesoInput[] | MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput[]
    connectOrCreate?: MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput | MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput[]
    upsert?: MapaCompraFaixaUpsertWithWhereUniqueWithoutFaixaPesoInput | MapaCompraFaixaUpsertWithWhereUniqueWithoutFaixaPesoInput[]
    createMany?: MapaCompraFaixaCreateManyFaixaPesoInputEnvelope
    set?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    disconnect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    delete?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    connect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    update?: MapaCompraFaixaUpdateWithWhereUniqueWithoutFaixaPesoInput | MapaCompraFaixaUpdateWithWhereUniqueWithoutFaixaPesoInput[]
    updateMany?: MapaCompraFaixaUpdateManyWithWhereWithoutFaixaPesoInput | MapaCompraFaixaUpdateManyWithWhereWithoutFaixaPesoInput[]
    deleteMany?: MapaCompraFaixaScalarWhereInput | MapaCompraFaixaScalarWhereInput[]
  }

  export type FornecedorValorEspecieCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<FornecedorValorEspecieCreateWithoutFornecedorInput, FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput> | FornecedorValorEspecieCreateWithoutFornecedorInput[] | FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput | FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput[]
    createMany?: FornecedorValorEspecieCreateManyFornecedorInputEnvelope
    connect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
  }

  export type MapaCompraCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<MapaCompraCreateWithoutFornecedorInput, MapaCompraUncheckedCreateWithoutFornecedorInput> | MapaCompraCreateWithoutFornecedorInput[] | MapaCompraUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: MapaCompraCreateOrConnectWithoutFornecedorInput | MapaCompraCreateOrConnectWithoutFornecedorInput[]
    createMany?: MapaCompraCreateManyFornecedorInputEnvelope
    connect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
  }

  export type FornecedorValorEspecieUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<FornecedorValorEspecieCreateWithoutFornecedorInput, FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput> | FornecedorValorEspecieCreateWithoutFornecedorInput[] | FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput | FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput[]
    createMany?: FornecedorValorEspecieCreateManyFornecedorInputEnvelope
    connect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
  }

  export type MapaCompraUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<MapaCompraCreateWithoutFornecedorInput, MapaCompraUncheckedCreateWithoutFornecedorInput> | MapaCompraCreateWithoutFornecedorInput[] | MapaCompraUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: MapaCompraCreateOrConnectWithoutFornecedorInput | MapaCompraCreateOrConnectWithoutFornecedorInput[]
    createMany?: MapaCompraCreateManyFornecedorInputEnvelope
    connect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
  }

  export type FornecedorValorEspecieUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<FornecedorValorEspecieCreateWithoutFornecedorInput, FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput> | FornecedorValorEspecieCreateWithoutFornecedorInput[] | FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput | FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput[]
    upsert?: FornecedorValorEspecieUpsertWithWhereUniqueWithoutFornecedorInput | FornecedorValorEspecieUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: FornecedorValorEspecieCreateManyFornecedorInputEnvelope
    set?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    disconnect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    delete?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    connect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    update?: FornecedorValorEspecieUpdateWithWhereUniqueWithoutFornecedorInput | FornecedorValorEspecieUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: FornecedorValorEspecieUpdateManyWithWhereWithoutFornecedorInput | FornecedorValorEspecieUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: FornecedorValorEspecieScalarWhereInput | FornecedorValorEspecieScalarWhereInput[]
  }

  export type MapaCompraUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<MapaCompraCreateWithoutFornecedorInput, MapaCompraUncheckedCreateWithoutFornecedorInput> | MapaCompraCreateWithoutFornecedorInput[] | MapaCompraUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: MapaCompraCreateOrConnectWithoutFornecedorInput | MapaCompraCreateOrConnectWithoutFornecedorInput[]
    upsert?: MapaCompraUpsertWithWhereUniqueWithoutFornecedorInput | MapaCompraUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: MapaCompraCreateManyFornecedorInputEnvelope
    set?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    disconnect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    delete?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    connect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    update?: MapaCompraUpdateWithWhereUniqueWithoutFornecedorInput | MapaCompraUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: MapaCompraUpdateManyWithWhereWithoutFornecedorInput | MapaCompraUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: MapaCompraScalarWhereInput | MapaCompraScalarWhereInput[]
  }

  export type FornecedorValorEspecieUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<FornecedorValorEspecieCreateWithoutFornecedorInput, FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput> | FornecedorValorEspecieCreateWithoutFornecedorInput[] | FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput | FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput[]
    upsert?: FornecedorValorEspecieUpsertWithWhereUniqueWithoutFornecedorInput | FornecedorValorEspecieUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: FornecedorValorEspecieCreateManyFornecedorInputEnvelope
    set?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    disconnect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    delete?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    connect?: FornecedorValorEspecieWhereUniqueInput | FornecedorValorEspecieWhereUniqueInput[]
    update?: FornecedorValorEspecieUpdateWithWhereUniqueWithoutFornecedorInput | FornecedorValorEspecieUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: FornecedorValorEspecieUpdateManyWithWhereWithoutFornecedorInput | FornecedorValorEspecieUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: FornecedorValorEspecieScalarWhereInput | FornecedorValorEspecieScalarWhereInput[]
  }

  export type MapaCompraUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<MapaCompraCreateWithoutFornecedorInput, MapaCompraUncheckedCreateWithoutFornecedorInput> | MapaCompraCreateWithoutFornecedorInput[] | MapaCompraUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: MapaCompraCreateOrConnectWithoutFornecedorInput | MapaCompraCreateOrConnectWithoutFornecedorInput[]
    upsert?: MapaCompraUpsertWithWhereUniqueWithoutFornecedorInput | MapaCompraUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: MapaCompraCreateManyFornecedorInputEnvelope
    set?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    disconnect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    delete?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    connect?: MapaCompraWhereUniqueInput | MapaCompraWhereUniqueInput[]
    update?: MapaCompraUpdateWithWhereUniqueWithoutFornecedorInput | MapaCompraUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: MapaCompraUpdateManyWithWhereWithoutFornecedorInput | MapaCompraUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: MapaCompraScalarWhereInput | MapaCompraScalarWhereInput[]
  }

  export type FornecedorCreateNestedOneWithoutValoresInput = {
    create?: XOR<FornecedorCreateWithoutValoresInput, FornecedorUncheckedCreateWithoutValoresInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutValoresInput
    connect?: FornecedorWhereUniqueInput
  }

  export type EspecieFaixaPesoCreateNestedOneWithoutValoresFornecedorInput = {
    create?: XOR<EspecieFaixaPesoCreateWithoutValoresFornecedorInput, EspecieFaixaPesoUncheckedCreateWithoutValoresFornecedorInput>
    connectOrCreate?: EspecieFaixaPesoCreateOrConnectWithoutValoresFornecedorInput
    connect?: EspecieFaixaPesoWhereUniqueInput
  }

  export type FornecedorUpdateOneRequiredWithoutValoresNestedInput = {
    create?: XOR<FornecedorCreateWithoutValoresInput, FornecedorUncheckedCreateWithoutValoresInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutValoresInput
    upsert?: FornecedorUpsertWithoutValoresInput
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutValoresInput, FornecedorUpdateWithoutValoresInput>, FornecedorUncheckedUpdateWithoutValoresInput>
  }

  export type EspecieFaixaPesoUpdateOneRequiredWithoutValoresFornecedorNestedInput = {
    create?: XOR<EspecieFaixaPesoCreateWithoutValoresFornecedorInput, EspecieFaixaPesoUncheckedCreateWithoutValoresFornecedorInput>
    connectOrCreate?: EspecieFaixaPesoCreateOrConnectWithoutValoresFornecedorInput
    upsert?: EspecieFaixaPesoUpsertWithoutValoresFornecedorInput
    connect?: EspecieFaixaPesoWhereUniqueInput
    update?: XOR<XOR<EspecieFaixaPesoUpdateToOneWithWhereWithoutValoresFornecedorInput, EspecieFaixaPesoUpdateWithoutValoresFornecedorInput>, EspecieFaixaPesoUncheckedUpdateWithoutValoresFornecedorInput>
  }

  export type FornecedorCreateNestedOneWithoutMapasCompraInput = {
    create?: XOR<FornecedorCreateWithoutMapasCompraInput, FornecedorUncheckedCreateWithoutMapasCompraInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutMapasCompraInput
    connect?: FornecedorWhereUniqueInput
  }

  export type EspecieCreateNestedOneWithoutMapasCompraInput = {
    create?: XOR<EspecieCreateWithoutMapasCompraInput, EspecieUncheckedCreateWithoutMapasCompraInput>
    connectOrCreate?: EspecieCreateOrConnectWithoutMapasCompraInput
    connect?: EspecieWhereUniqueInput
  }

  export type MapaCompraFaixaCreateNestedManyWithoutMapaCompraInput = {
    create?: XOR<MapaCompraFaixaCreateWithoutMapaCompraInput, MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput> | MapaCompraFaixaCreateWithoutMapaCompraInput[] | MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput[]
    connectOrCreate?: MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput | MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput[]
    createMany?: MapaCompraFaixaCreateManyMapaCompraInputEnvelope
    connect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
  }

  export type MapaCompraFaixaUncheckedCreateNestedManyWithoutMapaCompraInput = {
    create?: XOR<MapaCompraFaixaCreateWithoutMapaCompraInput, MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput> | MapaCompraFaixaCreateWithoutMapaCompraInput[] | MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput[]
    connectOrCreate?: MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput | MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput[]
    createMany?: MapaCompraFaixaCreateManyMapaCompraInputEnvelope
    connect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
  }

  export type FornecedorUpdateOneRequiredWithoutMapasCompraNestedInput = {
    create?: XOR<FornecedorCreateWithoutMapasCompraInput, FornecedorUncheckedCreateWithoutMapasCompraInput>
    connectOrCreate?: FornecedorCreateOrConnectWithoutMapasCompraInput
    upsert?: FornecedorUpsertWithoutMapasCompraInput
    connect?: FornecedorWhereUniqueInput
    update?: XOR<XOR<FornecedorUpdateToOneWithWhereWithoutMapasCompraInput, FornecedorUpdateWithoutMapasCompraInput>, FornecedorUncheckedUpdateWithoutMapasCompraInput>
  }

  export type EspecieUpdateOneRequiredWithoutMapasCompraNestedInput = {
    create?: XOR<EspecieCreateWithoutMapasCompraInput, EspecieUncheckedCreateWithoutMapasCompraInput>
    connectOrCreate?: EspecieCreateOrConnectWithoutMapasCompraInput
    upsert?: EspecieUpsertWithoutMapasCompraInput
    connect?: EspecieWhereUniqueInput
    update?: XOR<XOR<EspecieUpdateToOneWithWhereWithoutMapasCompraInput, EspecieUpdateWithoutMapasCompraInput>, EspecieUncheckedUpdateWithoutMapasCompraInput>
  }

  export type MapaCompraFaixaUpdateManyWithoutMapaCompraNestedInput = {
    create?: XOR<MapaCompraFaixaCreateWithoutMapaCompraInput, MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput> | MapaCompraFaixaCreateWithoutMapaCompraInput[] | MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput[]
    connectOrCreate?: MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput | MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput[]
    upsert?: MapaCompraFaixaUpsertWithWhereUniqueWithoutMapaCompraInput | MapaCompraFaixaUpsertWithWhereUniqueWithoutMapaCompraInput[]
    createMany?: MapaCompraFaixaCreateManyMapaCompraInputEnvelope
    set?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    disconnect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    delete?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    connect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    update?: MapaCompraFaixaUpdateWithWhereUniqueWithoutMapaCompraInput | MapaCompraFaixaUpdateWithWhereUniqueWithoutMapaCompraInput[]
    updateMany?: MapaCompraFaixaUpdateManyWithWhereWithoutMapaCompraInput | MapaCompraFaixaUpdateManyWithWhereWithoutMapaCompraInput[]
    deleteMany?: MapaCompraFaixaScalarWhereInput | MapaCompraFaixaScalarWhereInput[]
  }

  export type MapaCompraFaixaUncheckedUpdateManyWithoutMapaCompraNestedInput = {
    create?: XOR<MapaCompraFaixaCreateWithoutMapaCompraInput, MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput> | MapaCompraFaixaCreateWithoutMapaCompraInput[] | MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput[]
    connectOrCreate?: MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput | MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput[]
    upsert?: MapaCompraFaixaUpsertWithWhereUniqueWithoutMapaCompraInput | MapaCompraFaixaUpsertWithWhereUniqueWithoutMapaCompraInput[]
    createMany?: MapaCompraFaixaCreateManyMapaCompraInputEnvelope
    set?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    disconnect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    delete?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    connect?: MapaCompraFaixaWhereUniqueInput | MapaCompraFaixaWhereUniqueInput[]
    update?: MapaCompraFaixaUpdateWithWhereUniqueWithoutMapaCompraInput | MapaCompraFaixaUpdateWithWhereUniqueWithoutMapaCompraInput[]
    updateMany?: MapaCompraFaixaUpdateManyWithWhereWithoutMapaCompraInput | MapaCompraFaixaUpdateManyWithWhereWithoutMapaCompraInput[]
    deleteMany?: MapaCompraFaixaScalarWhereInput | MapaCompraFaixaScalarWhereInput[]
  }

  export type MapaCompraCreateNestedOneWithoutFaixasInput = {
    create?: XOR<MapaCompraCreateWithoutFaixasInput, MapaCompraUncheckedCreateWithoutFaixasInput>
    connectOrCreate?: MapaCompraCreateOrConnectWithoutFaixasInput
    connect?: MapaCompraWhereUniqueInput
  }

  export type EspecieFaixaPesoCreateNestedOneWithoutMapasCompraFaixaInput = {
    create?: XOR<EspecieFaixaPesoCreateWithoutMapasCompraFaixaInput, EspecieFaixaPesoUncheckedCreateWithoutMapasCompraFaixaInput>
    connectOrCreate?: EspecieFaixaPesoCreateOrConnectWithoutMapasCompraFaixaInput
    connect?: EspecieFaixaPesoWhereUniqueInput
  }

  export type MapaCompraUpdateOneRequiredWithoutFaixasNestedInput = {
    create?: XOR<MapaCompraCreateWithoutFaixasInput, MapaCompraUncheckedCreateWithoutFaixasInput>
    connectOrCreate?: MapaCompraCreateOrConnectWithoutFaixasInput
    upsert?: MapaCompraUpsertWithoutFaixasInput
    connect?: MapaCompraWhereUniqueInput
    update?: XOR<XOR<MapaCompraUpdateToOneWithWhereWithoutFaixasInput, MapaCompraUpdateWithoutFaixasInput>, MapaCompraUncheckedUpdateWithoutFaixasInput>
  }

  export type EspecieFaixaPesoUpdateOneRequiredWithoutMapasCompraFaixaNestedInput = {
    create?: XOR<EspecieFaixaPesoCreateWithoutMapasCompraFaixaInput, EspecieFaixaPesoUncheckedCreateWithoutMapasCompraFaixaInput>
    connectOrCreate?: EspecieFaixaPesoCreateOrConnectWithoutMapasCompraFaixaInput
    upsert?: EspecieFaixaPesoUpsertWithoutMapasCompraFaixaInput
    connect?: EspecieFaixaPesoWhereUniqueInput
    update?: XOR<XOR<EspecieFaixaPesoUpdateToOneWithWhereWithoutMapasCompraFaixaInput, EspecieFaixaPesoUpdateWithoutMapasCompraFaixaInput>, EspecieFaixaPesoUncheckedUpdateWithoutMapasCompraFaixaInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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
    createdAt?: Date | string
    updatedAt?: Date | string
    corte: CorteCreateNestedOneWithoutPesagensInput
  }

  export type PesagemUncheckedCreateWithoutOperadorInput = {
    id?: string
    peso: number
    tipoPesagem: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    createdAt?: DateTimeFilter<"Pesagem"> | Date | string
    updatedAt?: DateTimeFilter<"Pesagem"> | Date | string
    corteId?: StringFilter<"Pesagem"> | string
    operadorMatricula?: IntFilter<"Pesagem"> | number
  }

  export type PesagemCreateWithoutCorteInput = {
    id?: string
    peso: number
    tipoPesagem: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operador: OperadorCreateNestedOneWithoutPesagensInput
  }

  export type PesagemUncheckedCreateWithoutCorteInput = {
    id?: string
    peso: number
    tipoPesagem: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operadorMatricula: number
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
    matricula: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
    ativo?: boolean
    createdAt?: Date | string
  }

  export type OperadorUncheckedCreateWithoutPesagensInput = {
    matricula: number
    nome: string
    valor: Decimal | DecimalJsLike | number | string
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
    matricula?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperadorUncheckedUpdateWithoutPesagensInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecieFaixaPesoCreateWithoutEspecieInput = {
    id?: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    valoresFornecedor?: FornecedorValorEspecieCreateNestedManyWithoutFaixaPesoInput
    mapasCompraFaixa?: MapaCompraFaixaCreateNestedManyWithoutFaixaPesoInput
  }

  export type EspecieFaixaPesoUncheckedCreateWithoutEspecieInput = {
    id?: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    valoresFornecedor?: FornecedorValorEspecieUncheckedCreateNestedManyWithoutFaixaPesoInput
    mapasCompraFaixa?: MapaCompraFaixaUncheckedCreateNestedManyWithoutFaixaPesoInput
  }

  export type EspecieFaixaPesoCreateOrConnectWithoutEspecieInput = {
    where: EspecieFaixaPesoWhereUniqueInput
    create: XOR<EspecieFaixaPesoCreateWithoutEspecieInput, EspecieFaixaPesoUncheckedCreateWithoutEspecieInput>
  }

  export type EspecieFaixaPesoCreateManyEspecieInputEnvelope = {
    data: EspecieFaixaPesoCreateManyEspecieInput | EspecieFaixaPesoCreateManyEspecieInput[]
  }

  export type MapaCompraCreateWithoutEspecieInput = {
    id?: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutMapasCompraInput
    faixas?: MapaCompraFaixaCreateNestedManyWithoutMapaCompraInput
  }

  export type MapaCompraUncheckedCreateWithoutEspecieInput = {
    id?: string
    fornecedorId: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixas?: MapaCompraFaixaUncheckedCreateNestedManyWithoutMapaCompraInput
  }

  export type MapaCompraCreateOrConnectWithoutEspecieInput = {
    where: MapaCompraWhereUniqueInput
    create: XOR<MapaCompraCreateWithoutEspecieInput, MapaCompraUncheckedCreateWithoutEspecieInput>
  }

  export type MapaCompraCreateManyEspecieInputEnvelope = {
    data: MapaCompraCreateManyEspecieInput | MapaCompraCreateManyEspecieInput[]
  }

  export type EspecieFaixaPesoUpsertWithWhereUniqueWithoutEspecieInput = {
    where: EspecieFaixaPesoWhereUniqueInput
    update: XOR<EspecieFaixaPesoUpdateWithoutEspecieInput, EspecieFaixaPesoUncheckedUpdateWithoutEspecieInput>
    create: XOR<EspecieFaixaPesoCreateWithoutEspecieInput, EspecieFaixaPesoUncheckedCreateWithoutEspecieInput>
  }

  export type EspecieFaixaPesoUpdateWithWhereUniqueWithoutEspecieInput = {
    where: EspecieFaixaPesoWhereUniqueInput
    data: XOR<EspecieFaixaPesoUpdateWithoutEspecieInput, EspecieFaixaPesoUncheckedUpdateWithoutEspecieInput>
  }

  export type EspecieFaixaPesoUpdateManyWithWhereWithoutEspecieInput = {
    where: EspecieFaixaPesoScalarWhereInput
    data: XOR<EspecieFaixaPesoUpdateManyMutationInput, EspecieFaixaPesoUncheckedUpdateManyWithoutEspecieInput>
  }

  export type EspecieFaixaPesoScalarWhereInput = {
    AND?: EspecieFaixaPesoScalarWhereInput | EspecieFaixaPesoScalarWhereInput[]
    OR?: EspecieFaixaPesoScalarWhereInput[]
    NOT?: EspecieFaixaPesoScalarWhereInput | EspecieFaixaPesoScalarWhereInput[]
    id?: StringFilter<"EspecieFaixaPeso"> | string
    especieId?: StringFilter<"EspecieFaixaPeso"> | string
    pesoMin?: DecimalFilter<"EspecieFaixaPeso"> | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFilter<"EspecieFaixaPeso"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"EspecieFaixaPeso"> | Date | string
    updatedAt?: DateTimeFilter<"EspecieFaixaPeso"> | Date | string
  }

  export type MapaCompraUpsertWithWhereUniqueWithoutEspecieInput = {
    where: MapaCompraWhereUniqueInput
    update: XOR<MapaCompraUpdateWithoutEspecieInput, MapaCompraUncheckedUpdateWithoutEspecieInput>
    create: XOR<MapaCompraCreateWithoutEspecieInput, MapaCompraUncheckedCreateWithoutEspecieInput>
  }

  export type MapaCompraUpdateWithWhereUniqueWithoutEspecieInput = {
    where: MapaCompraWhereUniqueInput
    data: XOR<MapaCompraUpdateWithoutEspecieInput, MapaCompraUncheckedUpdateWithoutEspecieInput>
  }

  export type MapaCompraUpdateManyWithWhereWithoutEspecieInput = {
    where: MapaCompraScalarWhereInput
    data: XOR<MapaCompraUpdateManyMutationInput, MapaCompraUncheckedUpdateManyWithoutEspecieInput>
  }

  export type MapaCompraScalarWhereInput = {
    AND?: MapaCompraScalarWhereInput | MapaCompraScalarWhereInput[]
    OR?: MapaCompraScalarWhereInput[]
    NOT?: MapaCompraScalarWhereInput | MapaCompraScalarWhereInput[]
    id?: StringFilter<"MapaCompra"> | string
    fornecedorId?: StringFilter<"MapaCompra"> | string
    especieId?: StringFilter<"MapaCompra"> | string
    lote?: IntFilter<"MapaCompra"> | number
    dataDespesca?: DateTimeFilter<"MapaCompra"> | Date | string
    prazoDias?: IntFilter<"MapaCompra"> | number
    dataVencimento?: DateTimeFilter<"MapaCompra"> | Date | string
    pesoBruto?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFilter<"MapaCompra"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MapaCompra"> | Date | string
    updatedAt?: DateTimeFilter<"MapaCompra"> | Date | string
  }

  export type EspecieCreateWithoutFaixasInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapasCompra?: MapaCompraCreateNestedManyWithoutEspecieInput
  }

  export type EspecieUncheckedCreateWithoutFaixasInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapasCompra?: MapaCompraUncheckedCreateNestedManyWithoutEspecieInput
  }

  export type EspecieCreateOrConnectWithoutFaixasInput = {
    where: EspecieWhereUniqueInput
    create: XOR<EspecieCreateWithoutFaixasInput, EspecieUncheckedCreateWithoutFaixasInput>
  }

  export type FornecedorValorEspecieCreateWithoutFaixaPesoInput = {
    id?: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutValoresInput
  }

  export type FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput = {
    id?: string
    fornecedorId: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorValorEspecieCreateOrConnectWithoutFaixaPesoInput = {
    where: FornecedorValorEspecieWhereUniqueInput
    create: XOR<FornecedorValorEspecieCreateWithoutFaixaPesoInput, FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput>
  }

  export type FornecedorValorEspecieCreateManyFaixaPesoInputEnvelope = {
    data: FornecedorValorEspecieCreateManyFaixaPesoInput | FornecedorValorEspecieCreateManyFaixaPesoInput[]
  }

  export type MapaCompraFaixaCreateWithoutFaixaPesoInput = {
    id?: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapaCompra: MapaCompraCreateNestedOneWithoutFaixasInput
  }

  export type MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput = {
    id?: string
    mapaCompraId: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraFaixaCreateOrConnectWithoutFaixaPesoInput = {
    where: MapaCompraFaixaWhereUniqueInput
    create: XOR<MapaCompraFaixaCreateWithoutFaixaPesoInput, MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput>
  }

  export type MapaCompraFaixaCreateManyFaixaPesoInputEnvelope = {
    data: MapaCompraFaixaCreateManyFaixaPesoInput | MapaCompraFaixaCreateManyFaixaPesoInput[]
  }

  export type EspecieUpsertWithoutFaixasInput = {
    update: XOR<EspecieUpdateWithoutFaixasInput, EspecieUncheckedUpdateWithoutFaixasInput>
    create: XOR<EspecieCreateWithoutFaixasInput, EspecieUncheckedCreateWithoutFaixasInput>
    where?: EspecieWhereInput
  }

  export type EspecieUpdateToOneWithWhereWithoutFaixasInput = {
    where?: EspecieWhereInput
    data: XOR<EspecieUpdateWithoutFaixasInput, EspecieUncheckedUpdateWithoutFaixasInput>
  }

  export type EspecieUpdateWithoutFaixasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapasCompra?: MapaCompraUpdateManyWithoutEspecieNestedInput
  }

  export type EspecieUncheckedUpdateWithoutFaixasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapasCompra?: MapaCompraUncheckedUpdateManyWithoutEspecieNestedInput
  }

  export type FornecedorValorEspecieUpsertWithWhereUniqueWithoutFaixaPesoInput = {
    where: FornecedorValorEspecieWhereUniqueInput
    update: XOR<FornecedorValorEspecieUpdateWithoutFaixaPesoInput, FornecedorValorEspecieUncheckedUpdateWithoutFaixaPesoInput>
    create: XOR<FornecedorValorEspecieCreateWithoutFaixaPesoInput, FornecedorValorEspecieUncheckedCreateWithoutFaixaPesoInput>
  }

  export type FornecedorValorEspecieUpdateWithWhereUniqueWithoutFaixaPesoInput = {
    where: FornecedorValorEspecieWhereUniqueInput
    data: XOR<FornecedorValorEspecieUpdateWithoutFaixaPesoInput, FornecedorValorEspecieUncheckedUpdateWithoutFaixaPesoInput>
  }

  export type FornecedorValorEspecieUpdateManyWithWhereWithoutFaixaPesoInput = {
    where: FornecedorValorEspecieScalarWhereInput
    data: XOR<FornecedorValorEspecieUpdateManyMutationInput, FornecedorValorEspecieUncheckedUpdateManyWithoutFaixaPesoInput>
  }

  export type FornecedorValorEspecieScalarWhereInput = {
    AND?: FornecedorValorEspecieScalarWhereInput | FornecedorValorEspecieScalarWhereInput[]
    OR?: FornecedorValorEspecieScalarWhereInput[]
    NOT?: FornecedorValorEspecieScalarWhereInput | FornecedorValorEspecieScalarWhereInput[]
    id?: StringFilter<"FornecedorValorEspecie"> | string
    fornecedorId?: StringFilter<"FornecedorValorEspecie"> | string
    faixaPesoId?: StringFilter<"FornecedorValorEspecie"> | string
    valorKg?: DecimalFilter<"FornecedorValorEspecie"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"FornecedorValorEspecie"> | Date | string
    updatedAt?: DateTimeFilter<"FornecedorValorEspecie"> | Date | string
  }

  export type MapaCompraFaixaUpsertWithWhereUniqueWithoutFaixaPesoInput = {
    where: MapaCompraFaixaWhereUniqueInput
    update: XOR<MapaCompraFaixaUpdateWithoutFaixaPesoInput, MapaCompraFaixaUncheckedUpdateWithoutFaixaPesoInput>
    create: XOR<MapaCompraFaixaCreateWithoutFaixaPesoInput, MapaCompraFaixaUncheckedCreateWithoutFaixaPesoInput>
  }

  export type MapaCompraFaixaUpdateWithWhereUniqueWithoutFaixaPesoInput = {
    where: MapaCompraFaixaWhereUniqueInput
    data: XOR<MapaCompraFaixaUpdateWithoutFaixaPesoInput, MapaCompraFaixaUncheckedUpdateWithoutFaixaPesoInput>
  }

  export type MapaCompraFaixaUpdateManyWithWhereWithoutFaixaPesoInput = {
    where: MapaCompraFaixaScalarWhereInput
    data: XOR<MapaCompraFaixaUpdateManyMutationInput, MapaCompraFaixaUncheckedUpdateManyWithoutFaixaPesoInput>
  }

  export type MapaCompraFaixaScalarWhereInput = {
    AND?: MapaCompraFaixaScalarWhereInput | MapaCompraFaixaScalarWhereInput[]
    OR?: MapaCompraFaixaScalarWhereInput[]
    NOT?: MapaCompraFaixaScalarWhereInput | MapaCompraFaixaScalarWhereInput[]
    id?: StringFilter<"MapaCompraFaixa"> | string
    mapaCompraId?: StringFilter<"MapaCompraFaixa"> | string
    faixaPesoId?: StringFilter<"MapaCompraFaixa"> | string
    pesoKg?: DecimalFilter<"MapaCompraFaixa"> | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFilter<"MapaCompraFaixa"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"MapaCompraFaixa"> | Date | string
    updatedAt?: DateTimeFilter<"MapaCompraFaixa"> | Date | string
  }

  export type FornecedorValorEspecieCreateWithoutFornecedorInput = {
    id?: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixaPeso: EspecieFaixaPesoCreateNestedOneWithoutValoresFornecedorInput
  }

  export type FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput = {
    id?: string
    faixaPesoId: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorValorEspecieCreateOrConnectWithoutFornecedorInput = {
    where: FornecedorValorEspecieWhereUniqueInput
    create: XOR<FornecedorValorEspecieCreateWithoutFornecedorInput, FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput>
  }

  export type FornecedorValorEspecieCreateManyFornecedorInputEnvelope = {
    data: FornecedorValorEspecieCreateManyFornecedorInput | FornecedorValorEspecieCreateManyFornecedorInput[]
  }

  export type MapaCompraCreateWithoutFornecedorInput = {
    id?: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    especie: EspecieCreateNestedOneWithoutMapasCompraInput
    faixas?: MapaCompraFaixaCreateNestedManyWithoutMapaCompraInput
  }

  export type MapaCompraUncheckedCreateWithoutFornecedorInput = {
    id?: string
    especieId: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixas?: MapaCompraFaixaUncheckedCreateNestedManyWithoutMapaCompraInput
  }

  export type MapaCompraCreateOrConnectWithoutFornecedorInput = {
    where: MapaCompraWhereUniqueInput
    create: XOR<MapaCompraCreateWithoutFornecedorInput, MapaCompraUncheckedCreateWithoutFornecedorInput>
  }

  export type MapaCompraCreateManyFornecedorInputEnvelope = {
    data: MapaCompraCreateManyFornecedorInput | MapaCompraCreateManyFornecedorInput[]
  }

  export type FornecedorValorEspecieUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: FornecedorValorEspecieWhereUniqueInput
    update: XOR<FornecedorValorEspecieUpdateWithoutFornecedorInput, FornecedorValorEspecieUncheckedUpdateWithoutFornecedorInput>
    create: XOR<FornecedorValorEspecieCreateWithoutFornecedorInput, FornecedorValorEspecieUncheckedCreateWithoutFornecedorInput>
  }

  export type FornecedorValorEspecieUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: FornecedorValorEspecieWhereUniqueInput
    data: XOR<FornecedorValorEspecieUpdateWithoutFornecedorInput, FornecedorValorEspecieUncheckedUpdateWithoutFornecedorInput>
  }

  export type FornecedorValorEspecieUpdateManyWithWhereWithoutFornecedorInput = {
    where: FornecedorValorEspecieScalarWhereInput
    data: XOR<FornecedorValorEspecieUpdateManyMutationInput, FornecedorValorEspecieUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type MapaCompraUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: MapaCompraWhereUniqueInput
    update: XOR<MapaCompraUpdateWithoutFornecedorInput, MapaCompraUncheckedUpdateWithoutFornecedorInput>
    create: XOR<MapaCompraCreateWithoutFornecedorInput, MapaCompraUncheckedCreateWithoutFornecedorInput>
  }

  export type MapaCompraUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: MapaCompraWhereUniqueInput
    data: XOR<MapaCompraUpdateWithoutFornecedorInput, MapaCompraUncheckedUpdateWithoutFornecedorInput>
  }

  export type MapaCompraUpdateManyWithWhereWithoutFornecedorInput = {
    where: MapaCompraScalarWhereInput
    data: XOR<MapaCompraUpdateManyMutationInput, MapaCompraUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type FornecedorCreateWithoutValoresInput = {
    id?: string
    nome: string
    fazenda: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapasCompra?: MapaCompraCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateWithoutValoresInput = {
    id?: string
    nome: string
    fazenda: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapasCompra?: MapaCompraUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorCreateOrConnectWithoutValoresInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutValoresInput, FornecedorUncheckedCreateWithoutValoresInput>
  }

  export type EspecieFaixaPesoCreateWithoutValoresFornecedorInput = {
    id?: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    especie: EspecieCreateNestedOneWithoutFaixasInput
    mapasCompraFaixa?: MapaCompraFaixaCreateNestedManyWithoutFaixaPesoInput
  }

  export type EspecieFaixaPesoUncheckedCreateWithoutValoresFornecedorInput = {
    id?: string
    especieId: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    mapasCompraFaixa?: MapaCompraFaixaUncheckedCreateNestedManyWithoutFaixaPesoInput
  }

  export type EspecieFaixaPesoCreateOrConnectWithoutValoresFornecedorInput = {
    where: EspecieFaixaPesoWhereUniqueInput
    create: XOR<EspecieFaixaPesoCreateWithoutValoresFornecedorInput, EspecieFaixaPesoUncheckedCreateWithoutValoresFornecedorInput>
  }

  export type FornecedorUpsertWithoutValoresInput = {
    update: XOR<FornecedorUpdateWithoutValoresInput, FornecedorUncheckedUpdateWithoutValoresInput>
    create: XOR<FornecedorCreateWithoutValoresInput, FornecedorUncheckedCreateWithoutValoresInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutValoresInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutValoresInput, FornecedorUncheckedUpdateWithoutValoresInput>
  }

  export type FornecedorUpdateWithoutValoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    fazenda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapasCompra?: MapaCompraUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateWithoutValoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    fazenda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapasCompra?: MapaCompraUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type EspecieFaixaPesoUpsertWithoutValoresFornecedorInput = {
    update: XOR<EspecieFaixaPesoUpdateWithoutValoresFornecedorInput, EspecieFaixaPesoUncheckedUpdateWithoutValoresFornecedorInput>
    create: XOR<EspecieFaixaPesoCreateWithoutValoresFornecedorInput, EspecieFaixaPesoUncheckedCreateWithoutValoresFornecedorInput>
    where?: EspecieFaixaPesoWhereInput
  }

  export type EspecieFaixaPesoUpdateToOneWithWhereWithoutValoresFornecedorInput = {
    where?: EspecieFaixaPesoWhereInput
    data: XOR<EspecieFaixaPesoUpdateWithoutValoresFornecedorInput, EspecieFaixaPesoUncheckedUpdateWithoutValoresFornecedorInput>
  }

  export type EspecieFaixaPesoUpdateWithoutValoresFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especie?: EspecieUpdateOneRequiredWithoutFaixasNestedInput
    mapasCompraFaixa?: MapaCompraFaixaUpdateManyWithoutFaixaPesoNestedInput
  }

  export type EspecieFaixaPesoUncheckedUpdateWithoutValoresFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapasCompraFaixa?: MapaCompraFaixaUncheckedUpdateManyWithoutFaixaPesoNestedInput
  }

  export type FornecedorCreateWithoutMapasCompraInput = {
    id?: string
    nome: string
    fazenda: string
    createdAt?: Date | string
    updatedAt?: Date | string
    valores?: FornecedorValorEspecieCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorUncheckedCreateWithoutMapasCompraInput = {
    id?: string
    nome: string
    fazenda: string
    createdAt?: Date | string
    updatedAt?: Date | string
    valores?: FornecedorValorEspecieUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type FornecedorCreateOrConnectWithoutMapasCompraInput = {
    where: FornecedorWhereUniqueInput
    create: XOR<FornecedorCreateWithoutMapasCompraInput, FornecedorUncheckedCreateWithoutMapasCompraInput>
  }

  export type EspecieCreateWithoutMapasCompraInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixas?: EspecieFaixaPesoCreateNestedManyWithoutEspecieInput
  }

  export type EspecieUncheckedCreateWithoutMapasCompraInput = {
    id?: string
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixas?: EspecieFaixaPesoUncheckedCreateNestedManyWithoutEspecieInput
  }

  export type EspecieCreateOrConnectWithoutMapasCompraInput = {
    where: EspecieWhereUniqueInput
    create: XOR<EspecieCreateWithoutMapasCompraInput, EspecieUncheckedCreateWithoutMapasCompraInput>
  }

  export type MapaCompraFaixaCreateWithoutMapaCompraInput = {
    id?: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    faixaPeso: EspecieFaixaPesoCreateNestedOneWithoutMapasCompraFaixaInput
  }

  export type MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput = {
    id?: string
    faixaPesoId: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraFaixaCreateOrConnectWithoutMapaCompraInput = {
    where: MapaCompraFaixaWhereUniqueInput
    create: XOR<MapaCompraFaixaCreateWithoutMapaCompraInput, MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput>
  }

  export type MapaCompraFaixaCreateManyMapaCompraInputEnvelope = {
    data: MapaCompraFaixaCreateManyMapaCompraInput | MapaCompraFaixaCreateManyMapaCompraInput[]
  }

  export type FornecedorUpsertWithoutMapasCompraInput = {
    update: XOR<FornecedorUpdateWithoutMapasCompraInput, FornecedorUncheckedUpdateWithoutMapasCompraInput>
    create: XOR<FornecedorCreateWithoutMapasCompraInput, FornecedorUncheckedCreateWithoutMapasCompraInput>
    where?: FornecedorWhereInput
  }

  export type FornecedorUpdateToOneWithWhereWithoutMapasCompraInput = {
    where?: FornecedorWhereInput
    data: XOR<FornecedorUpdateWithoutMapasCompraInput, FornecedorUncheckedUpdateWithoutMapasCompraInput>
  }

  export type FornecedorUpdateWithoutMapasCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    fazenda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: FornecedorValorEspecieUpdateManyWithoutFornecedorNestedInput
  }

  export type FornecedorUncheckedUpdateWithoutMapasCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    fazenda?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: FornecedorValorEspecieUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type EspecieUpsertWithoutMapasCompraInput = {
    update: XOR<EspecieUpdateWithoutMapasCompraInput, EspecieUncheckedUpdateWithoutMapasCompraInput>
    create: XOR<EspecieCreateWithoutMapasCompraInput, EspecieUncheckedCreateWithoutMapasCompraInput>
    where?: EspecieWhereInput
  }

  export type EspecieUpdateToOneWithWhereWithoutMapasCompraInput = {
    where?: EspecieWhereInput
    data: XOR<EspecieUpdateWithoutMapasCompraInput, EspecieUncheckedUpdateWithoutMapasCompraInput>
  }

  export type EspecieUpdateWithoutMapasCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixas?: EspecieFaixaPesoUpdateManyWithoutEspecieNestedInput
  }

  export type EspecieUncheckedUpdateWithoutMapasCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixas?: EspecieFaixaPesoUncheckedUpdateManyWithoutEspecieNestedInput
  }

  export type MapaCompraFaixaUpsertWithWhereUniqueWithoutMapaCompraInput = {
    where: MapaCompraFaixaWhereUniqueInput
    update: XOR<MapaCompraFaixaUpdateWithoutMapaCompraInput, MapaCompraFaixaUncheckedUpdateWithoutMapaCompraInput>
    create: XOR<MapaCompraFaixaCreateWithoutMapaCompraInput, MapaCompraFaixaUncheckedCreateWithoutMapaCompraInput>
  }

  export type MapaCompraFaixaUpdateWithWhereUniqueWithoutMapaCompraInput = {
    where: MapaCompraFaixaWhereUniqueInput
    data: XOR<MapaCompraFaixaUpdateWithoutMapaCompraInput, MapaCompraFaixaUncheckedUpdateWithoutMapaCompraInput>
  }

  export type MapaCompraFaixaUpdateManyWithWhereWithoutMapaCompraInput = {
    where: MapaCompraFaixaScalarWhereInput
    data: XOR<MapaCompraFaixaUpdateManyMutationInput, MapaCompraFaixaUncheckedUpdateManyWithoutMapaCompraInput>
  }

  export type MapaCompraCreateWithoutFaixasInput = {
    id?: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor: FornecedorCreateNestedOneWithoutMapasCompraInput
    especie: EspecieCreateNestedOneWithoutMapasCompraInput
  }

  export type MapaCompraUncheckedCreateWithoutFaixasInput = {
    id?: string
    fornecedorId: string
    especieId: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraCreateOrConnectWithoutFaixasInput = {
    where: MapaCompraWhereUniqueInput
    create: XOR<MapaCompraCreateWithoutFaixasInput, MapaCompraUncheckedCreateWithoutFaixasInput>
  }

  export type EspecieFaixaPesoCreateWithoutMapasCompraFaixaInput = {
    id?: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    especie: EspecieCreateNestedOneWithoutFaixasInput
    valoresFornecedor?: FornecedorValorEspecieCreateNestedManyWithoutFaixaPesoInput
  }

  export type EspecieFaixaPesoUncheckedCreateWithoutMapasCompraFaixaInput = {
    id?: string
    especieId: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    valoresFornecedor?: FornecedorValorEspecieUncheckedCreateNestedManyWithoutFaixaPesoInput
  }

  export type EspecieFaixaPesoCreateOrConnectWithoutMapasCompraFaixaInput = {
    where: EspecieFaixaPesoWhereUniqueInput
    create: XOR<EspecieFaixaPesoCreateWithoutMapasCompraFaixaInput, EspecieFaixaPesoUncheckedCreateWithoutMapasCompraFaixaInput>
  }

  export type MapaCompraUpsertWithoutFaixasInput = {
    update: XOR<MapaCompraUpdateWithoutFaixasInput, MapaCompraUncheckedUpdateWithoutFaixasInput>
    create: XOR<MapaCompraCreateWithoutFaixasInput, MapaCompraUncheckedCreateWithoutFaixasInput>
    where?: MapaCompraWhereInput
  }

  export type MapaCompraUpdateToOneWithWhereWithoutFaixasInput = {
    where?: MapaCompraWhereInput
    data: XOR<MapaCompraUpdateWithoutFaixasInput, MapaCompraUncheckedUpdateWithoutFaixasInput>
  }

  export type MapaCompraUpdateWithoutFaixasInput = {
    id?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutMapasCompraNestedInput
    especie?: EspecieUpdateOneRequiredWithoutMapasCompraNestedInput
  }

  export type MapaCompraUncheckedUpdateWithoutFaixasInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecieFaixaPesoUpsertWithoutMapasCompraFaixaInput = {
    update: XOR<EspecieFaixaPesoUpdateWithoutMapasCompraFaixaInput, EspecieFaixaPesoUncheckedUpdateWithoutMapasCompraFaixaInput>
    create: XOR<EspecieFaixaPesoCreateWithoutMapasCompraFaixaInput, EspecieFaixaPesoUncheckedCreateWithoutMapasCompraFaixaInput>
    where?: EspecieFaixaPesoWhereInput
  }

  export type EspecieFaixaPesoUpdateToOneWithWhereWithoutMapasCompraFaixaInput = {
    where?: EspecieFaixaPesoWhereInput
    data: XOR<EspecieFaixaPesoUpdateWithoutMapasCompraFaixaInput, EspecieFaixaPesoUncheckedUpdateWithoutMapasCompraFaixaInput>
  }

  export type EspecieFaixaPesoUpdateWithoutMapasCompraFaixaInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especie?: EspecieUpdateOneRequiredWithoutFaixasNestedInput
    valoresFornecedor?: FornecedorValorEspecieUpdateManyWithoutFaixaPesoNestedInput
  }

  export type EspecieFaixaPesoUncheckedUpdateWithoutMapasCompraFaixaInput = {
    id?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    valoresFornecedor?: FornecedorValorEspecieUncheckedUpdateManyWithoutFaixaPesoNestedInput
  }

  export type PesagemCreateManyOperadorInput = {
    id?: string
    peso: number
    tipoPesagem: string
    createdAt?: Date | string
    updatedAt?: Date | string
    corteId: string
  }

  export type PesagemUpdateWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corte?: CorteUpdateOneRequiredWithoutPesagensNestedInput
  }

  export type PesagemUncheckedUpdateWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corteId?: StringFieldUpdateOperationsInput | string
  }

  export type PesagemUncheckedUpdateManyWithoutOperadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corteId?: StringFieldUpdateOperationsInput | string
  }

  export type PesagemCreateManyCorteInput = {
    id?: string
    peso: number
    tipoPesagem: string
    createdAt?: Date | string
    updatedAt?: Date | string
    operadorMatricula: number
  }

  export type PesagemUpdateWithoutCorteInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operador?: OperadorUpdateOneRequiredWithoutPesagensNestedInput
  }

  export type PesagemUncheckedUpdateWithoutCorteInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operadorMatricula?: IntFieldUpdateOperationsInput | number
  }

  export type PesagemUncheckedUpdateManyWithoutCorteInput = {
    id?: StringFieldUpdateOperationsInput | string
    peso?: FloatFieldUpdateOperationsInput | number
    tipoPesagem?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    operadorMatricula?: IntFieldUpdateOperationsInput | number
  }

  export type EspecieFaixaPesoCreateManyEspecieInput = {
    id?: string
    pesoMin: Decimal | DecimalJsLike | number | string
    pesoMax: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraCreateManyEspecieInput = {
    id?: string
    fornecedorId: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecieFaixaPesoUpdateWithoutEspecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    valoresFornecedor?: FornecedorValorEspecieUpdateManyWithoutFaixaPesoNestedInput
    mapasCompraFaixa?: MapaCompraFaixaUpdateManyWithoutFaixaPesoNestedInput
  }

  export type EspecieFaixaPesoUncheckedUpdateWithoutEspecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    valoresFornecedor?: FornecedorValorEspecieUncheckedUpdateManyWithoutFaixaPesoNestedInput
    mapasCompraFaixa?: MapaCompraFaixaUncheckedUpdateManyWithoutFaixaPesoNestedInput
  }

  export type EspecieFaixaPesoUncheckedUpdateManyWithoutEspecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoMin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraUpdateWithoutEspecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutMapasCompraNestedInput
    faixas?: MapaCompraFaixaUpdateManyWithoutMapaCompraNestedInput
  }

  export type MapaCompraUncheckedUpdateWithoutEspecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixas?: MapaCompraFaixaUncheckedUpdateManyWithoutMapaCompraNestedInput
  }

  export type MapaCompraUncheckedUpdateManyWithoutEspecieInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorValorEspecieCreateManyFaixaPesoInput = {
    id?: string
    fornecedorId: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraFaixaCreateManyFaixaPesoInput = {
    id?: string
    mapaCompraId: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorValorEspecieUpdateWithoutFaixaPesoInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: FornecedorUpdateOneRequiredWithoutValoresNestedInput
  }

  export type FornecedorValorEspecieUncheckedUpdateWithoutFaixaPesoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorValorEspecieUncheckedUpdateManyWithoutFaixaPesoInput = {
    id?: StringFieldUpdateOperationsInput | string
    fornecedorId?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraFaixaUpdateWithoutFaixaPesoInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mapaCompra?: MapaCompraUpdateOneRequiredWithoutFaixasNestedInput
  }

  export type MapaCompraFaixaUncheckedUpdateWithoutFaixaPesoInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapaCompraId?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraFaixaUncheckedUpdateManyWithoutFaixaPesoInput = {
    id?: StringFieldUpdateOperationsInput | string
    mapaCompraId?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorValorEspecieCreateManyFornecedorInput = {
    id?: string
    faixaPesoId: string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraCreateManyFornecedorInput = {
    id?: string
    especieId: string
    lote: number
    dataDespesca: Date | string
    prazoDias: number
    dataVencimento: Date | string
    pesoBruto: Decimal | DecimalJsLike | number | string
    descontoUmidade: Decimal | DecimalJsLike | number | string
    pesoLiquido: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FornecedorValorEspecieUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixaPeso?: EspecieFaixaPesoUpdateOneRequiredWithoutValoresFornecedorNestedInput
  }

  export type FornecedorValorEspecieUncheckedUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    faixaPesoId?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FornecedorValorEspecieUncheckedUpdateManyWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    faixaPesoId?: StringFieldUpdateOperationsInput | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especie?: EspecieUpdateOneRequiredWithoutMapasCompraNestedInput
    faixas?: MapaCompraFaixaUpdateManyWithoutMapaCompraNestedInput
  }

  export type MapaCompraUncheckedUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixas?: MapaCompraFaixaUncheckedUpdateManyWithoutMapaCompraNestedInput
  }

  export type MapaCompraUncheckedUpdateManyWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    especieId?: StringFieldUpdateOperationsInput | string
    lote?: IntFieldUpdateOperationsInput | number
    dataDespesca?: DateTimeFieldUpdateOperationsInput | Date | string
    prazoDias?: IntFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    pesoBruto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    descontoUmidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pesoLiquido?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraFaixaCreateManyMapaCompraInput = {
    id?: string
    faixaPesoId: string
    pesoKg: Decimal | DecimalJsLike | number | string
    valorKg: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MapaCompraFaixaUpdateWithoutMapaCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faixaPeso?: EspecieFaixaPesoUpdateOneRequiredWithoutMapasCompraFaixaNestedInput
  }

  export type MapaCompraFaixaUncheckedUpdateWithoutMapaCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    faixaPesoId?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MapaCompraFaixaUncheckedUpdateManyWithoutMapaCompraInput = {
    id?: StringFieldUpdateOperationsInput | string
    faixaPesoId?: StringFieldUpdateOperationsInput | string
    pesoKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    valorKg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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