
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
    "prisma\\client",
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
  note: 'note',
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
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TriviaChoiceScalarFieldEnum = makeEnum({
  id: 'id',
  choice: 'choice',
  quizId: 'quizId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TriviaQuizScalarFieldEnum = makeEnum({
  id: 'id',
  quiz: 'quiz',
  categoryName: 'categoryName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  answerId: 'answerId'
});

exports.Prisma.TriviaRoundQuizScalarFieldEnum = makeEnum({
  id: 'id',
  roundId: 'roundId',
  quizId: 'quizId',
  userChoiceId: 'userChoiceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TriviaRoundScalarFieldEnum = makeEnum({
  id: 'id',
  round: 'round',
  categoryId: 'categoryId',
  score: 'score',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterDMScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  directFromId: 'directFromId',
  directToId: 'directToId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterHashTagScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterPostScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  postByUserId: 'postByUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterReplyScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  postId: 'postId',
  postByUserId: 'postByUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterUserRelationScalarFieldEnum = makeEnum({
  id: 'id',
  followerId: 'followerId',
  followingId: 'followingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterUserScalarFieldEnum = makeEnum({
  id: 'id',
  image: 'image',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});


exports.Prisma.ModelName = makeEnum({
  BinKitchenCategory: 'BinKitchenCategory',
  BinKitchenMenu: 'BinKitchenMenu',
  BinKitchenOrder: 'BinKitchenOrder',
  BinKitchenOrderItem: 'BinKitchenOrderItem',
  TodoList: 'TodoList',
  TriviaCategory: 'TriviaCategory',
  TriviaQuiz: 'TriviaQuiz',
  TriviaChoice: 'TriviaChoice',
  TriviaRound: 'TriviaRound',
  TriviaRoundQuiz: 'TriviaRoundQuiz',
  TwitterUser: 'TwitterUser',
  TwitterUserRelation: 'TwitterUserRelation',
  TwitterPost: 'TwitterPost',
  TwitterHashTag: 'TwitterHashTag',
  TwitterReply: 'TwitterReply',
  TwitterDM: 'TwitterDM'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"BinKitchenCategory\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenMenu\",\"relationName\":\"BinKitchenCategoryToBinKitchenMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BinKitchenMenu\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenCategory\",\"relationName\":\"BinKitchenCategoryToBinKitchenMenu\",\"relationFromFields\":[\"categoryName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenOrderItem\",\"relationName\":\"BinKitchenMenuToBinKitchenOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BinKitchenOrder\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenOrderItem\",\"relationName\":\"BinKitchenOrderToBinKitchenOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"BinKitchenOrderItem\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenMenu\",\"relationName\":\"BinKitchenMenuToBinKitchenOrderItem\",\"relationFromFields\":[\"menuId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BinKitchenOrder\",\"relationName\":\"BinKitchenOrderToBinKitchenOrderItem\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TodoList\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaCategory\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triviaQuizes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuiz\",\"relationName\":\"TriviaCategoryToTriviaQuiz\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"rounds\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRound\",\"relationName\":\"TriviaCategoryToTriviaRound\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaQuiz\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quiz\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaCategory\",\"relationName\":\"TriviaCategoryToTriviaQuiz\",\"relationFromFields\":[\"categoryName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"choices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaChoice\",\"relationName\":\"TriviaChoiceToTriviaQuiz\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roundQuizes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRoundQuiz\",\"relationName\":\"TriviaQuizToTriviaRoundQuiz\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaChoice\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"choice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quiz\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuiz\",\"relationName\":\"TriviaChoiceToTriviaQuiz\",\"relationFromFields\":[\"quizId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"roundQuizes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRoundQuiz\",\"relationName\":\"TriviaChoiceToTriviaRoundQuiz\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaRound\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"round\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaCategory\",\"relationName\":\"TriviaCategoryToTriviaRound\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"roundQuizes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRoundQuiz\",\"relationName\":\"TriviaRoundToTriviaRoundQuiz\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaRoundQuiz\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"round\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRound\",\"relationName\":\"TriviaRoundToTriviaRoundQuiz\",\"relationFromFields\":[\"roundId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roundId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quiz\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuiz\",\"relationName\":\"TriviaQuizToTriviaRoundQuiz\",\"relationFromFields\":[\"quizId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userChoice\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaChoice\",\"relationName\":\"TriviaChoiceToTriviaRoundQuiz\",\"relationFromFields\":[\"userChoiceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userChoiceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterUser\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"follwer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUserRelation\",\"relationName\":\"FromId\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUserRelation\",\"relationName\":\"ToId\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TwitterPost\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterPost\",\"relationName\":\"TwitterPostToTwitterUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TwitterReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterReply\",\"relationName\":\"TwitterReplyToTwitterUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directFrom\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterDM\",\"relationName\":\"DMFromId\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directTo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterDM\",\"relationName\":\"DMToId\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterUserRelation\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follwer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"FromId\",\"relationFromFields\":[\"followerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"ToId\",\"relationFromFields\":[\"followingId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterPost\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"TwitterPostToTwitterUser\",\"relationFromFields\":[\"postByUserId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postByUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"TwitterReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterReply\",\"relationName\":\"TwitterPostToTwitterReply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashTags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterHashTag\",\"relationName\":\"TwitterHashTagToTwitterPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterHashTag\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterPost\",\"relationName\":\"TwitterHashTagToTwitterPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterReply\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterPost\",\"relationName\":\"TwitterPostToTwitterReply\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"TwitterReplyToTwitterUser\",\"relationFromFields\":[\"postByUserId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postByUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterDM\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directFrom\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"DMFromId\",\"relationFromFields\":[\"directFromId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directFromId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directTo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"DMToId\",\"relationFromFields\":[\"directToId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directToId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"BinKitchenCategory\",\"plural\":\"binKitchenCategories\",\"findUnique\":\"findUniqueBinKitchenCategory\",\"findUniqueOrThrow\":\"findUniqueBinKitchenCategoryOrThrow\",\"findFirst\":\"findFirstBinKitchenCategory\",\"findFirstOrThrow\":\"findFirstBinKitchenCategoryOrThrow\",\"findMany\":\"findManyBinKitchenCategory\",\"create\":\"createOneBinKitchenCategory\",\"createMany\":\"createManyBinKitchenCategory\",\"delete\":\"deleteOneBinKitchenCategory\",\"update\":\"updateOneBinKitchenCategory\",\"deleteMany\":\"deleteManyBinKitchenCategory\",\"updateMany\":\"updateManyBinKitchenCategory\",\"upsert\":\"upsertOneBinKitchenCategory\",\"aggregate\":\"aggregateBinKitchenCategory\",\"groupBy\":\"groupByBinKitchenCategory\"},{\"model\":\"BinKitchenMenu\",\"plural\":\"binKitchenMenus\",\"findUnique\":\"findUniqueBinKitchenMenu\",\"findUniqueOrThrow\":\"findUniqueBinKitchenMenuOrThrow\",\"findFirst\":\"findFirstBinKitchenMenu\",\"findFirstOrThrow\":\"findFirstBinKitchenMenuOrThrow\",\"findMany\":\"findManyBinKitchenMenu\",\"create\":\"createOneBinKitchenMenu\",\"createMany\":\"createManyBinKitchenMenu\",\"delete\":\"deleteOneBinKitchenMenu\",\"update\":\"updateOneBinKitchenMenu\",\"deleteMany\":\"deleteManyBinKitchenMenu\",\"updateMany\":\"updateManyBinKitchenMenu\",\"upsert\":\"upsertOneBinKitchenMenu\",\"aggregate\":\"aggregateBinKitchenMenu\",\"groupBy\":\"groupByBinKitchenMenu\"},{\"model\":\"BinKitchenOrder\",\"plural\":\"binKitchenOrders\",\"findUnique\":\"findUniqueBinKitchenOrder\",\"findUniqueOrThrow\":\"findUniqueBinKitchenOrderOrThrow\",\"findFirst\":\"findFirstBinKitchenOrder\",\"findFirstOrThrow\":\"findFirstBinKitchenOrderOrThrow\",\"findMany\":\"findManyBinKitchenOrder\",\"create\":\"createOneBinKitchenOrder\",\"createMany\":\"createManyBinKitchenOrder\",\"delete\":\"deleteOneBinKitchenOrder\",\"update\":\"updateOneBinKitchenOrder\",\"deleteMany\":\"deleteManyBinKitchenOrder\",\"updateMany\":\"updateManyBinKitchenOrder\",\"upsert\":\"upsertOneBinKitchenOrder\",\"aggregate\":\"aggregateBinKitchenOrder\",\"groupBy\":\"groupByBinKitchenOrder\"},{\"model\":\"BinKitchenOrderItem\",\"plural\":\"binKitchenOrderItems\",\"findUnique\":\"findUniqueBinKitchenOrderItem\",\"findUniqueOrThrow\":\"findUniqueBinKitchenOrderItemOrThrow\",\"findFirst\":\"findFirstBinKitchenOrderItem\",\"findFirstOrThrow\":\"findFirstBinKitchenOrderItemOrThrow\",\"findMany\":\"findManyBinKitchenOrderItem\",\"create\":\"createOneBinKitchenOrderItem\",\"createMany\":\"createManyBinKitchenOrderItem\",\"delete\":\"deleteOneBinKitchenOrderItem\",\"update\":\"updateOneBinKitchenOrderItem\",\"deleteMany\":\"deleteManyBinKitchenOrderItem\",\"updateMany\":\"updateManyBinKitchenOrderItem\",\"upsert\":\"upsertOneBinKitchenOrderItem\",\"aggregate\":\"aggregateBinKitchenOrderItem\",\"groupBy\":\"groupByBinKitchenOrderItem\"},{\"model\":\"TodoList\",\"plural\":\"todoLists\",\"findUnique\":\"findUniqueTodoList\",\"findUniqueOrThrow\":\"findUniqueTodoListOrThrow\",\"findFirst\":\"findFirstTodoList\",\"findFirstOrThrow\":\"findFirstTodoListOrThrow\",\"findMany\":\"findManyTodoList\",\"create\":\"createOneTodoList\",\"createMany\":\"createManyTodoList\",\"delete\":\"deleteOneTodoList\",\"update\":\"updateOneTodoList\",\"deleteMany\":\"deleteManyTodoList\",\"updateMany\":\"updateManyTodoList\",\"upsert\":\"upsertOneTodoList\",\"aggregate\":\"aggregateTodoList\",\"groupBy\":\"groupByTodoList\"},{\"model\":\"TriviaCategory\",\"plural\":\"triviaCategories\",\"findUnique\":\"findUniqueTriviaCategory\",\"findUniqueOrThrow\":\"findUniqueTriviaCategoryOrThrow\",\"findFirst\":\"findFirstTriviaCategory\",\"findFirstOrThrow\":\"findFirstTriviaCategoryOrThrow\",\"findMany\":\"findManyTriviaCategory\",\"create\":\"createOneTriviaCategory\",\"createMany\":\"createManyTriviaCategory\",\"delete\":\"deleteOneTriviaCategory\",\"update\":\"updateOneTriviaCategory\",\"deleteMany\":\"deleteManyTriviaCategory\",\"updateMany\":\"updateManyTriviaCategory\",\"upsert\":\"upsertOneTriviaCategory\",\"aggregate\":\"aggregateTriviaCategory\",\"groupBy\":\"groupByTriviaCategory\"},{\"model\":\"TriviaQuiz\",\"plural\":\"triviaQuizs\",\"findUnique\":\"findUniqueTriviaQuiz\",\"findUniqueOrThrow\":\"findUniqueTriviaQuizOrThrow\",\"findFirst\":\"findFirstTriviaQuiz\",\"findFirstOrThrow\":\"findFirstTriviaQuizOrThrow\",\"findMany\":\"findManyTriviaQuiz\",\"create\":\"createOneTriviaQuiz\",\"createMany\":\"createManyTriviaQuiz\",\"delete\":\"deleteOneTriviaQuiz\",\"update\":\"updateOneTriviaQuiz\",\"deleteMany\":\"deleteManyTriviaQuiz\",\"updateMany\":\"updateManyTriviaQuiz\",\"upsert\":\"upsertOneTriviaQuiz\",\"aggregate\":\"aggregateTriviaQuiz\",\"groupBy\":\"groupByTriviaQuiz\"},{\"model\":\"TriviaChoice\",\"plural\":\"triviaChoices\",\"findUnique\":\"findUniqueTriviaChoice\",\"findUniqueOrThrow\":\"findUniqueTriviaChoiceOrThrow\",\"findFirst\":\"findFirstTriviaChoice\",\"findFirstOrThrow\":\"findFirstTriviaChoiceOrThrow\",\"findMany\":\"findManyTriviaChoice\",\"create\":\"createOneTriviaChoice\",\"createMany\":\"createManyTriviaChoice\",\"delete\":\"deleteOneTriviaChoice\",\"update\":\"updateOneTriviaChoice\",\"deleteMany\":\"deleteManyTriviaChoice\",\"updateMany\":\"updateManyTriviaChoice\",\"upsert\":\"upsertOneTriviaChoice\",\"aggregate\":\"aggregateTriviaChoice\",\"groupBy\":\"groupByTriviaChoice\"},{\"model\":\"TriviaRound\",\"plural\":\"triviaRounds\",\"findUnique\":\"findUniqueTriviaRound\",\"findUniqueOrThrow\":\"findUniqueTriviaRoundOrThrow\",\"findFirst\":\"findFirstTriviaRound\",\"findFirstOrThrow\":\"findFirstTriviaRoundOrThrow\",\"findMany\":\"findManyTriviaRound\",\"create\":\"createOneTriviaRound\",\"createMany\":\"createManyTriviaRound\",\"delete\":\"deleteOneTriviaRound\",\"update\":\"updateOneTriviaRound\",\"deleteMany\":\"deleteManyTriviaRound\",\"updateMany\":\"updateManyTriviaRound\",\"upsert\":\"upsertOneTriviaRound\",\"aggregate\":\"aggregateTriviaRound\",\"groupBy\":\"groupByTriviaRound\"},{\"model\":\"TriviaRoundQuiz\",\"plural\":\"triviaRoundQuizs\",\"findUnique\":\"findUniqueTriviaRoundQuiz\",\"findUniqueOrThrow\":\"findUniqueTriviaRoundQuizOrThrow\",\"findFirst\":\"findFirstTriviaRoundQuiz\",\"findFirstOrThrow\":\"findFirstTriviaRoundQuizOrThrow\",\"findMany\":\"findManyTriviaRoundQuiz\",\"create\":\"createOneTriviaRoundQuiz\",\"createMany\":\"createManyTriviaRoundQuiz\",\"delete\":\"deleteOneTriviaRoundQuiz\",\"update\":\"updateOneTriviaRoundQuiz\",\"deleteMany\":\"deleteManyTriviaRoundQuiz\",\"updateMany\":\"updateManyTriviaRoundQuiz\",\"upsert\":\"upsertOneTriviaRoundQuiz\",\"aggregate\":\"aggregateTriviaRoundQuiz\",\"groupBy\":\"groupByTriviaRoundQuiz\"},{\"model\":\"TwitterUser\",\"plural\":\"twitterUsers\",\"findUnique\":\"findUniqueTwitterUser\",\"findUniqueOrThrow\":\"findUniqueTwitterUserOrThrow\",\"findFirst\":\"findFirstTwitterUser\",\"findFirstOrThrow\":\"findFirstTwitterUserOrThrow\",\"findMany\":\"findManyTwitterUser\",\"create\":\"createOneTwitterUser\",\"createMany\":\"createManyTwitterUser\",\"delete\":\"deleteOneTwitterUser\",\"update\":\"updateOneTwitterUser\",\"deleteMany\":\"deleteManyTwitterUser\",\"updateMany\":\"updateManyTwitterUser\",\"upsert\":\"upsertOneTwitterUser\",\"aggregate\":\"aggregateTwitterUser\",\"groupBy\":\"groupByTwitterUser\"},{\"model\":\"TwitterUserRelation\",\"plural\":\"twitterUserRelations\",\"findUnique\":\"findUniqueTwitterUserRelation\",\"findUniqueOrThrow\":\"findUniqueTwitterUserRelationOrThrow\",\"findFirst\":\"findFirstTwitterUserRelation\",\"findFirstOrThrow\":\"findFirstTwitterUserRelationOrThrow\",\"findMany\":\"findManyTwitterUserRelation\",\"create\":\"createOneTwitterUserRelation\",\"createMany\":\"createManyTwitterUserRelation\",\"delete\":\"deleteOneTwitterUserRelation\",\"update\":\"updateOneTwitterUserRelation\",\"deleteMany\":\"deleteManyTwitterUserRelation\",\"updateMany\":\"updateManyTwitterUserRelation\",\"upsert\":\"upsertOneTwitterUserRelation\",\"aggregate\":\"aggregateTwitterUserRelation\",\"groupBy\":\"groupByTwitterUserRelation\"},{\"model\":\"TwitterPost\",\"plural\":\"twitterPosts\",\"findUnique\":\"findUniqueTwitterPost\",\"findUniqueOrThrow\":\"findUniqueTwitterPostOrThrow\",\"findFirst\":\"findFirstTwitterPost\",\"findFirstOrThrow\":\"findFirstTwitterPostOrThrow\",\"findMany\":\"findManyTwitterPost\",\"create\":\"createOneTwitterPost\",\"createMany\":\"createManyTwitterPost\",\"delete\":\"deleteOneTwitterPost\",\"update\":\"updateOneTwitterPost\",\"deleteMany\":\"deleteManyTwitterPost\",\"updateMany\":\"updateManyTwitterPost\",\"upsert\":\"upsertOneTwitterPost\",\"aggregate\":\"aggregateTwitterPost\",\"groupBy\":\"groupByTwitterPost\"},{\"model\":\"TwitterHashTag\",\"plural\":\"twitterHashTags\",\"findUnique\":\"findUniqueTwitterHashTag\",\"findUniqueOrThrow\":\"findUniqueTwitterHashTagOrThrow\",\"findFirst\":\"findFirstTwitterHashTag\",\"findFirstOrThrow\":\"findFirstTwitterHashTagOrThrow\",\"findMany\":\"findManyTwitterHashTag\",\"create\":\"createOneTwitterHashTag\",\"createMany\":\"createManyTwitterHashTag\",\"delete\":\"deleteOneTwitterHashTag\",\"update\":\"updateOneTwitterHashTag\",\"deleteMany\":\"deleteManyTwitterHashTag\",\"updateMany\":\"updateManyTwitterHashTag\",\"upsert\":\"upsertOneTwitterHashTag\",\"aggregate\":\"aggregateTwitterHashTag\",\"groupBy\":\"groupByTwitterHashTag\"},{\"model\":\"TwitterReply\",\"plural\":\"twitterReplies\",\"findUnique\":\"findUniqueTwitterReply\",\"findUniqueOrThrow\":\"findUniqueTwitterReplyOrThrow\",\"findFirst\":\"findFirstTwitterReply\",\"findFirstOrThrow\":\"findFirstTwitterReplyOrThrow\",\"findMany\":\"findManyTwitterReply\",\"create\":\"createOneTwitterReply\",\"createMany\":\"createManyTwitterReply\",\"delete\":\"deleteOneTwitterReply\",\"update\":\"updateOneTwitterReply\",\"deleteMany\":\"deleteManyTwitterReply\",\"updateMany\":\"updateManyTwitterReply\",\"upsert\":\"upsertOneTwitterReply\",\"aggregate\":\"aggregateTwitterReply\",\"groupBy\":\"groupByTwitterReply\"},{\"model\":\"TwitterDM\",\"plural\":\"twitterDMS\",\"findUnique\":\"findUniqueTwitterDM\",\"findUniqueOrThrow\":\"findUniqueTwitterDMOrThrow\",\"findFirst\":\"findFirstTwitterDM\",\"findFirstOrThrow\":\"findFirstTwitterDMOrThrow\",\"findMany\":\"findManyTwitterDM\",\"create\":\"createOneTwitterDM\",\"createMany\":\"createManyTwitterDM\",\"delete\":\"deleteOneTwitterDM\",\"update\":\"updateOneTwitterDM\",\"deleteMany\":\"deleteManyTwitterDM\",\"updateMany\":\"updateManyTwitterDM\",\"upsert\":\"upsertOneTwitterDM\",\"aggregate\":\"aggregateTwitterDM\",\"groupBy\":\"groupByTwitterDM\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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
      "value": "C:\\Users\\yy_ca\\sprinttech\\workshop-backend\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows"
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
    "rootEnvPath": "..\\..\\.env",
    "schemaEnvPath": "..\\..\\.env"
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

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\client\\query_engine-windows.dll.node")

path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma\\client\\libquery_engine-darwin-arm64.dylib.node")

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma\\client\\libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\client\\schema.prisma")
