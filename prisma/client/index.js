
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BinKitchenCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BinKitchenMenuScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  price: 'price',
  categoryName: 'categoryName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BinKitchenOrderItemScalarFieldEnum = makeEnum({
  id: 'id',
  menuId: 'menuId',
  orderId: 'orderId',
  quantity: 'quantity',
  totalPrice: 'totalPrice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BinKitchenOrderScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  tableId: 'tableId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TodoListScalarFieldEnum = makeEnum({
  id: 'id',
  task: 'task',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TriviaCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  category: 'category'
});

exports.Prisma.TriviaChoiceScalarFieldEnum = makeEnum({
  id: 'id',
  choice: 'choice',
  triviaQuizId: 'triviaQuizId'
});

exports.Prisma.TriviaQuizScalarFieldEnum = makeEnum({
  id: 'id',
  quiz: 'quiz',
  triviaChoiceId: 'triviaChoiceId',
  triviaCategoryId: 'triviaCategoryId'
});


exports.Prisma.ModelName = makeEnum({
  BinKitchenCategory: 'BinKitchenCategory',
  BinKitchenMenu: 'BinKitchenMenu',
  BinKitchenOrder: 'BinKitchenOrder',
  BinKitchenOrderItem: 'BinKitchenOrderItem',
  TodoList: 'TodoList',
  TriviaQuiz: 'TriviaQuiz',
  TriviaChoice: 'TriviaChoice',
  TriviaCategory: 'TriviaCategory'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"BinKitchenCategory\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenMenu\",\"relationName\":\"BinKitchenCategoryToBinKitchenMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BinKitchenMenu\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenCategory\",\"relationName\":\"BinKitchenCategoryToBinKitchenMenu\",\"relationFromFields\":[\"categoryName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenOrderItem\",\"relationName\":\"BinKitchenMenuToBinKitchenOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BinKitchenOrder\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenOrderItem\",\"relationName\":\"BinKitchenOrderToBinKitchenOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BinKitchenOrderItem\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenMenu\",\"relationName\":\"BinKitchenMenuToBinKitchenOrderItem\",\"relationFromFields\":[\"menuId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenOrder\",\"relationName\":\"BinKitchenOrderToBinKitchenOrderItem\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TodoList\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaQuiz\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quiz\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaChoice\",\"relationName\":\"TriviaQuizAnswer\",\"relationFromFields\":[\"triviaChoiceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"choices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaChoice\",\"relationName\":\"TriviaChoiceToTriviaQuiz\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triviaChoiceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaCategory\",\"relationName\":\"TriviaCategoryToTriviaQuiz\",\"relationFromFields\":[\"triviaCategoryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triviaCategoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaChoice\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"choice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triviaQuiz\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuiz\",\"relationName\":\"TriviaChoiceToTriviaQuiz\",\"relationFromFields\":[\"triviaQuizId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triviaQuizId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triviaQuizAnswers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuiz\",\"relationName\":\"TriviaQuizAnswer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaCategory\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triviaQuizes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuiz\",\"relationName\":\"TriviaCategoryToTriviaQuiz\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"BinKitchenCategory\",\"plural\":\"binKitchenCategories\",\"findUnique\":\"findUniqueBinKitchenCategory\",\"findUniqueOrThrow\":\"findUniqueBinKitchenCategoryOrThrow\",\"findFirst\":\"findFirstBinKitchenCategory\",\"findFirstOrThrow\":\"findFirstBinKitchenCategoryOrThrow\",\"findMany\":\"findManyBinKitchenCategory\",\"create\":\"createOneBinKitchenCategory\",\"createMany\":\"createManyBinKitchenCategory\",\"delete\":\"deleteOneBinKitchenCategory\",\"update\":\"updateOneBinKitchenCategory\",\"deleteMany\":\"deleteManyBinKitchenCategory\",\"updateMany\":\"updateManyBinKitchenCategory\",\"upsert\":\"upsertOneBinKitchenCategory\",\"aggregate\":\"aggregateBinKitchenCategory\",\"groupBy\":\"groupByBinKitchenCategory\"},{\"model\":\"BinKitchenMenu\",\"plural\":\"binKitchenMenus\",\"findUnique\":\"findUniqueBinKitchenMenu\",\"findUniqueOrThrow\":\"findUniqueBinKitchenMenuOrThrow\",\"findFirst\":\"findFirstBinKitchenMenu\",\"findFirstOrThrow\":\"findFirstBinKitchenMenuOrThrow\",\"findMany\":\"findManyBinKitchenMenu\",\"create\":\"createOneBinKitchenMenu\",\"createMany\":\"createManyBinKitchenMenu\",\"delete\":\"deleteOneBinKitchenMenu\",\"update\":\"updateOneBinKitchenMenu\",\"deleteMany\":\"deleteManyBinKitchenMenu\",\"updateMany\":\"updateManyBinKitchenMenu\",\"upsert\":\"upsertOneBinKitchenMenu\",\"aggregate\":\"aggregateBinKitchenMenu\",\"groupBy\":\"groupByBinKitchenMenu\"},{\"model\":\"BinKitchenOrder\",\"plural\":\"binKitchenOrders\",\"findUnique\":\"findUniqueBinKitchenOrder\",\"findUniqueOrThrow\":\"findUniqueBinKitchenOrderOrThrow\",\"findFirst\":\"findFirstBinKitchenOrder\",\"findFirstOrThrow\":\"findFirstBinKitchenOrderOrThrow\",\"findMany\":\"findManyBinKitchenOrder\",\"create\":\"createOneBinKitchenOrder\",\"createMany\":\"createManyBinKitchenOrder\",\"delete\":\"deleteOneBinKitchenOrder\",\"update\":\"updateOneBinKitchenOrder\",\"deleteMany\":\"deleteManyBinKitchenOrder\",\"updateMany\":\"updateManyBinKitchenOrder\",\"upsert\":\"upsertOneBinKitchenOrder\",\"aggregate\":\"aggregateBinKitchenOrder\",\"groupBy\":\"groupByBinKitchenOrder\"},{\"model\":\"BinKitchenOrderItem\",\"plural\":\"binKitchenOrderItems\",\"findUnique\":\"findUniqueBinKitchenOrderItem\",\"findUniqueOrThrow\":\"findUniqueBinKitchenOrderItemOrThrow\",\"findFirst\":\"findFirstBinKitchenOrderItem\",\"findFirstOrThrow\":\"findFirstBinKitchenOrderItemOrThrow\",\"findMany\":\"findManyBinKitchenOrderItem\",\"create\":\"createOneBinKitchenOrderItem\",\"createMany\":\"createManyBinKitchenOrderItem\",\"delete\":\"deleteOneBinKitchenOrderItem\",\"update\":\"updateOneBinKitchenOrderItem\",\"deleteMany\":\"deleteManyBinKitchenOrderItem\",\"updateMany\":\"updateManyBinKitchenOrderItem\",\"upsert\":\"upsertOneBinKitchenOrderItem\",\"aggregate\":\"aggregateBinKitchenOrderItem\",\"groupBy\":\"groupByBinKitchenOrderItem\"},{\"model\":\"TodoList\",\"plural\":\"todoLists\",\"findUnique\":\"findUniqueTodoList\",\"findUniqueOrThrow\":\"findUniqueTodoListOrThrow\",\"findFirst\":\"findFirstTodoList\",\"findFirstOrThrow\":\"findFirstTodoListOrThrow\",\"findMany\":\"findManyTodoList\",\"create\":\"createOneTodoList\",\"createMany\":\"createManyTodoList\",\"delete\":\"deleteOneTodoList\",\"update\":\"updateOneTodoList\",\"deleteMany\":\"deleteManyTodoList\",\"updateMany\":\"updateManyTodoList\",\"upsert\":\"upsertOneTodoList\",\"aggregate\":\"aggregateTodoList\",\"groupBy\":\"groupByTodoList\"},{\"model\":\"TriviaQuiz\",\"plural\":\"triviaQuizs\",\"findUnique\":\"findUniqueTriviaQuiz\",\"findUniqueOrThrow\":\"findUniqueTriviaQuizOrThrow\",\"findFirst\":\"findFirstTriviaQuiz\",\"findFirstOrThrow\":\"findFirstTriviaQuizOrThrow\",\"findMany\":\"findManyTriviaQuiz\",\"create\":\"createOneTriviaQuiz\",\"createMany\":\"createManyTriviaQuiz\",\"delete\":\"deleteOneTriviaQuiz\",\"update\":\"updateOneTriviaQuiz\",\"deleteMany\":\"deleteManyTriviaQuiz\",\"updateMany\":\"updateManyTriviaQuiz\",\"upsert\":\"upsertOneTriviaQuiz\",\"aggregate\":\"aggregateTriviaQuiz\",\"groupBy\":\"groupByTriviaQuiz\"},{\"model\":\"TriviaChoice\",\"plural\":\"triviaChoices\",\"findUnique\":\"findUniqueTriviaChoice\",\"findUniqueOrThrow\":\"findUniqueTriviaChoiceOrThrow\",\"findFirst\":\"findFirstTriviaChoice\",\"findFirstOrThrow\":\"findFirstTriviaChoiceOrThrow\",\"findMany\":\"findManyTriviaChoice\",\"create\":\"createOneTriviaChoice\",\"createMany\":\"createManyTriviaChoice\",\"delete\":\"deleteOneTriviaChoice\",\"update\":\"updateOneTriviaChoice\",\"deleteMany\":\"deleteManyTriviaChoice\",\"updateMany\":\"updateManyTriviaChoice\",\"upsert\":\"upsertOneTriviaChoice\",\"aggregate\":\"aggregateTriviaChoice\",\"groupBy\":\"groupByTriviaChoice\"},{\"model\":\"TriviaCategory\",\"plural\":\"triviaCategories\",\"findUnique\":\"findUniqueTriviaCategory\",\"findUniqueOrThrow\":\"findUniqueTriviaCategoryOrThrow\",\"findFirst\":\"findFirstTriviaCategory\",\"findFirstOrThrow\":\"findFirstTriviaCategoryOrThrow\",\"findMany\":\"findManyTriviaCategory\",\"create\":\"createOneTriviaCategory\",\"createMany\":\"createManyTriviaCategory\",\"delete\":\"deleteOneTriviaCategory\",\"update\":\"updateOneTriviaCategory\",\"deleteMany\":\"deleteManyTriviaCategory\",\"updateMany\":\"updateManyTriviaCategory\",\"upsert\":\"upsertOneTriviaCategory\",\"aggregate\":\"aggregateTriviaCategory\",\"groupBy\":\"groupByTriviaCategory\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/panasun/sprinttech/workshop-backend/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64"
      },
      {
        "fromEnvVar": null,
        "value": "darwin-arm64"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "4.10.1",
  "engineVersion": "aead147aa326ccb985dcfed5b065b4fdabd44b19",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/client/libquery_engine-darwin-arm64.dylib.node")

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/client/libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/client/schema.prisma")
