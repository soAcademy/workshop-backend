
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

exports.Prisma.KorKitchenCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.KorKitchenMenuScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  price: 'price',
  categoryName: 'categoryName',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.KorKitchenOrderItemScalarFieldEnum = makeEnum({
  id: 'id',
  menuId: 'menuId',
  orderId: 'orderId',
  quantity: 'quantity',
  totalPrice: 'totalPrice',
  creatAt: 'creatAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.KorKitchenOrderScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  tableId: 'tableId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.PostOnHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  hashtagId: 'hashtagId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TestModelScalarFieldEnum = makeEnum({
  id: 'id',
  firstname: 'firstname',
  Surname: 'Surname'
});

exports.Prisma.TodoListScalarFieldEnum = makeEnum({
  id: 'id',
  task: 'task',
  status: 'status',
  note: 'note',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TriviaCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.TriviaChoiceScalarFieldEnum = makeEnum({
  id: 'id',
  quizId: 'quizId',
  name: 'name'
});

exports.Prisma.TriviaQuestionScalarFieldEnum = makeEnum({
  id: 'id',
  categoryId: 'categoryId',
  name: 'name',
  answerID: 'answerID'
});

exports.Prisma.TriviaRoundQuestionScalarFieldEnum = makeEnum({
  id: 'id',
  quizId: 'quizId',
  choiceId: 'choiceId',
  quizResult: 'quizResult',
  roundId: 'roundId'
});

exports.Prisma.TriviaRoundScalarFieldEnum = makeEnum({
  id: 'id',
  user: 'user',
  categoryId: 'categoryId',
  totalResult: 'totalResult',
  createAt: 'createAt'
});

exports.Prisma.TwitterDirectMessageScalarFieldEnum = makeEnum({
  id: 'id',
  from: 'from',
  to: 'to',
  message: 'message',
  createAt: 'createAt'
});

exports.Prisma.TwitterHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message'
});

exports.Prisma.TwitterPostReplyScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  postId: 'postId',
  userId: 'userId',
  createAt: 'createAt'
});

exports.Prisma.TwitterPostScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message'
});

exports.Prisma.TwitterUserRelationScalarFieldEnum = makeEnum({
  id: 'id',
  follower: 'follower',
  following: 'following'
});

exports.Prisma.TwitterUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  directMessageId: 'directMessageId',
  userRelationId: 'userRelationId'
});


exports.Prisma.ModelName = makeEnum({
  KorKitchenCategory: 'KorKitchenCategory',
  KorKitchenMenu: 'KorKitchenMenu',
  KorKitchenOrder: 'KorKitchenOrder',
  KorKitchenOrderItem: 'KorKitchenOrderItem',
  TodoList: 'TodoList',
  TestModel: 'TestModel',
  TriviaCategory: 'TriviaCategory',
  TriviaQuestion: 'TriviaQuestion',
  TriviaChoice: 'TriviaChoice',
  TriviaRoundQuestion: 'TriviaRoundQuestion',
  TriviaRound: 'TriviaRound',
  TwitterUser: 'TwitterUser',
  TwitterPost: 'TwitterPost',
  TwitterHashtag: 'TwitterHashtag',
  TwitterDirectMessage: 'TwitterDirectMessage',
  TwitterUserRelation: 'TwitterUserRelation',
  TwitterPostReply: 'TwitterPostReply',
  PostOnHashtag: 'PostOnHashtag'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"KorKitchenCategory\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KorKitchenMenu\",\"relationName\":\"KorKitchenCategoryToKorKitchenMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"KorKitchenMenu\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KorKitchenCategory\",\"relationName\":\"KorKitchenCategoryToKorKitchenMenu\",\"relationFromFields\":[\"categoryName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderItems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KorKitchenOrderItem\",\"relationName\":\"KorKitchenMenuToKorKitchenOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"KorKitchenOrder\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"items\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KorKitchenOrderItem\",\"relationName\":\"KorKitchenOrderToKorKitchenOrderItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"KorKitchenOrderItem\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KorKitchenMenu\",\"relationName\":\"KorKitchenMenuToKorKitchenOrderItem\",\"relationFromFields\":[\"menuId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"KorKitchenOrder\",\"relationName\":\"KorKitchenOrderToKorKitchenOrderItem\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TodoList\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"task\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"active\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TestModel\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaCategory\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuestion\",\"relationName\":\"TriviaCategoryToTriviaQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rounds\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRound\",\"relationName\":\"TriviaCategoryToTriviaRound\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaQuestion\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaCategory\",\"relationName\":\"TriviaCategoryToTriviaQuestion\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answerID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"choices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaChoice\",\"relationName\":\"TriviaChoiceToTriviaQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roundQuestions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRoundQuestion\",\"relationName\":\"TriviaQuestionToTriviaRoundQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaChoice\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuestion\",\"relationName\":\"TriviaChoiceToTriviaQuestion\",\"relationFromFields\":[\"quizId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roundQuestions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRoundQuestion\",\"relationName\":\"TriviaChoiceToTriviaRoundQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaRoundQuestion\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaQuestion\",\"relationName\":\"TriviaQuestionToTriviaRoundQuestion\",\"relationFromFields\":[\"quizId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userChoice\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaChoice\",\"relationName\":\"TriviaChoiceToTriviaRoundQuestion\",\"relationFromFields\":[\"choiceId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"choiceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quizResult\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"round\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRound\",\"relationName\":\"TriviaRoundToTriviaRoundQuestion\",\"relationFromFields\":[\"roundId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roundId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TriviaRound\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaRoundQuestion\",\"relationName\":\"TriviaRoundToTriviaRoundQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriviaCategory\",\"relationName\":\"TriviaCategoryToTriviaRound\",\"relationFromFields\":[\"categoryId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalResult\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterUser\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directMessage\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterDirectMessage\",\"relationName\":\"TwitterDirectMessageToTwitterUser\",\"relationFromFields\":[\"directMessageId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directMessageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userRelate\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUserRelation\",\"relationName\":\"TwitterUserToTwitterUserRelation\",\"relationFromFields\":[\"userRelationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userRelationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TwitterPostReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterPostReply\",\"relationName\":\"TwitterPostReplyToTwitterUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterPost\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TwitterPostReply\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterPostReply\",\"relationName\":\"TwitterPostToTwitterPostReply\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PostOnHashtag\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PostOnHashtag\",\"relationName\":\"PostOnHashtagToTwitterPost\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterHashtag\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PostOnHashtag\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PostOnHashtag\",\"relationName\":\"PostOnHashtagToTwitterHashtag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterDirectMessage\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TwitterUser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"TwitterDirectMessageToTwitterUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterUserRelation\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follower\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TwitterUser\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"TwitterUserToTwitterUserRelation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TwitterPostReply\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterPost\",\"relationName\":\"TwitterPostToTwitterPostReply\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterUser\",\"relationName\":\"TwitterPostReplyToTwitterUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"PostOnHashtag\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterPost\",\"relationName\":\"PostOnHashtagToTwitterPost\",\"relationFromFields\":[\"postId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashtag\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TwitterHashtag\",\"relationName\":\"PostOnHashtagToTwitterHashtag\",\"relationFromFields\":[\"hashtagId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashtagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"KorKitchenCategory\",\"plural\":\"korKitchenCategories\",\"findUnique\":\"findUniqueKorKitchenCategory\",\"findUniqueOrThrow\":\"findUniqueKorKitchenCategoryOrThrow\",\"findFirst\":\"findFirstKorKitchenCategory\",\"findFirstOrThrow\":\"findFirstKorKitchenCategoryOrThrow\",\"findMany\":\"findManyKorKitchenCategory\",\"create\":\"createOneKorKitchenCategory\",\"createMany\":\"createManyKorKitchenCategory\",\"delete\":\"deleteOneKorKitchenCategory\",\"update\":\"updateOneKorKitchenCategory\",\"deleteMany\":\"deleteManyKorKitchenCategory\",\"updateMany\":\"updateManyKorKitchenCategory\",\"upsert\":\"upsertOneKorKitchenCategory\",\"aggregate\":\"aggregateKorKitchenCategory\",\"groupBy\":\"groupByKorKitchenCategory\"},{\"model\":\"KorKitchenMenu\",\"plural\":\"korKitchenMenus\",\"findUnique\":\"findUniqueKorKitchenMenu\",\"findUniqueOrThrow\":\"findUniqueKorKitchenMenuOrThrow\",\"findFirst\":\"findFirstKorKitchenMenu\",\"findFirstOrThrow\":\"findFirstKorKitchenMenuOrThrow\",\"findMany\":\"findManyKorKitchenMenu\",\"create\":\"createOneKorKitchenMenu\",\"createMany\":\"createManyKorKitchenMenu\",\"delete\":\"deleteOneKorKitchenMenu\",\"update\":\"updateOneKorKitchenMenu\",\"deleteMany\":\"deleteManyKorKitchenMenu\",\"updateMany\":\"updateManyKorKitchenMenu\",\"upsert\":\"upsertOneKorKitchenMenu\",\"aggregate\":\"aggregateKorKitchenMenu\",\"groupBy\":\"groupByKorKitchenMenu\"},{\"model\":\"KorKitchenOrder\",\"plural\":\"korKitchenOrders\",\"findUnique\":\"findUniqueKorKitchenOrder\",\"findUniqueOrThrow\":\"findUniqueKorKitchenOrderOrThrow\",\"findFirst\":\"findFirstKorKitchenOrder\",\"findFirstOrThrow\":\"findFirstKorKitchenOrderOrThrow\",\"findMany\":\"findManyKorKitchenOrder\",\"create\":\"createOneKorKitchenOrder\",\"createMany\":\"createManyKorKitchenOrder\",\"delete\":\"deleteOneKorKitchenOrder\",\"update\":\"updateOneKorKitchenOrder\",\"deleteMany\":\"deleteManyKorKitchenOrder\",\"updateMany\":\"updateManyKorKitchenOrder\",\"upsert\":\"upsertOneKorKitchenOrder\",\"aggregate\":\"aggregateKorKitchenOrder\",\"groupBy\":\"groupByKorKitchenOrder\"},{\"model\":\"KorKitchenOrderItem\",\"plural\":\"korKitchenOrderItems\",\"findUnique\":\"findUniqueKorKitchenOrderItem\",\"findUniqueOrThrow\":\"findUniqueKorKitchenOrderItemOrThrow\",\"findFirst\":\"findFirstKorKitchenOrderItem\",\"findFirstOrThrow\":\"findFirstKorKitchenOrderItemOrThrow\",\"findMany\":\"findManyKorKitchenOrderItem\",\"create\":\"createOneKorKitchenOrderItem\",\"createMany\":\"createManyKorKitchenOrderItem\",\"delete\":\"deleteOneKorKitchenOrderItem\",\"update\":\"updateOneKorKitchenOrderItem\",\"deleteMany\":\"deleteManyKorKitchenOrderItem\",\"updateMany\":\"updateManyKorKitchenOrderItem\",\"upsert\":\"upsertOneKorKitchenOrderItem\",\"aggregate\":\"aggregateKorKitchenOrderItem\",\"groupBy\":\"groupByKorKitchenOrderItem\"},{\"model\":\"TodoList\",\"plural\":\"todoLists\",\"findUnique\":\"findUniqueTodoList\",\"findUniqueOrThrow\":\"findUniqueTodoListOrThrow\",\"findFirst\":\"findFirstTodoList\",\"findFirstOrThrow\":\"findFirstTodoListOrThrow\",\"findMany\":\"findManyTodoList\",\"create\":\"createOneTodoList\",\"createMany\":\"createManyTodoList\",\"delete\":\"deleteOneTodoList\",\"update\":\"updateOneTodoList\",\"deleteMany\":\"deleteManyTodoList\",\"updateMany\":\"updateManyTodoList\",\"upsert\":\"upsertOneTodoList\",\"aggregate\":\"aggregateTodoList\",\"groupBy\":\"groupByTodoList\"},{\"model\":\"TestModel\",\"plural\":\"testModels\",\"findUnique\":\"findUniqueTestModel\",\"findUniqueOrThrow\":\"findUniqueTestModelOrThrow\",\"findFirst\":\"findFirstTestModel\",\"findFirstOrThrow\":\"findFirstTestModelOrThrow\",\"findMany\":\"findManyTestModel\",\"create\":\"createOneTestModel\",\"createMany\":\"createManyTestModel\",\"delete\":\"deleteOneTestModel\",\"update\":\"updateOneTestModel\",\"deleteMany\":\"deleteManyTestModel\",\"updateMany\":\"updateManyTestModel\",\"upsert\":\"upsertOneTestModel\",\"aggregate\":\"aggregateTestModel\",\"groupBy\":\"groupByTestModel\"},{\"model\":\"TriviaCategory\",\"plural\":\"triviaCategories\",\"findUnique\":\"findUniqueTriviaCategory\",\"findUniqueOrThrow\":\"findUniqueTriviaCategoryOrThrow\",\"findFirst\":\"findFirstTriviaCategory\",\"findFirstOrThrow\":\"findFirstTriviaCategoryOrThrow\",\"findMany\":\"findManyTriviaCategory\",\"create\":\"createOneTriviaCategory\",\"createMany\":\"createManyTriviaCategory\",\"delete\":\"deleteOneTriviaCategory\",\"update\":\"updateOneTriviaCategory\",\"deleteMany\":\"deleteManyTriviaCategory\",\"updateMany\":\"updateManyTriviaCategory\",\"upsert\":\"upsertOneTriviaCategory\",\"aggregate\":\"aggregateTriviaCategory\",\"groupBy\":\"groupByTriviaCategory\"},{\"model\":\"TriviaQuestion\",\"plural\":\"triviaQuestions\",\"findUnique\":\"findUniqueTriviaQuestion\",\"findUniqueOrThrow\":\"findUniqueTriviaQuestionOrThrow\",\"findFirst\":\"findFirstTriviaQuestion\",\"findFirstOrThrow\":\"findFirstTriviaQuestionOrThrow\",\"findMany\":\"findManyTriviaQuestion\",\"create\":\"createOneTriviaQuestion\",\"createMany\":\"createManyTriviaQuestion\",\"delete\":\"deleteOneTriviaQuestion\",\"update\":\"updateOneTriviaQuestion\",\"deleteMany\":\"deleteManyTriviaQuestion\",\"updateMany\":\"updateManyTriviaQuestion\",\"upsert\":\"upsertOneTriviaQuestion\",\"aggregate\":\"aggregateTriviaQuestion\",\"groupBy\":\"groupByTriviaQuestion\"},{\"model\":\"TriviaChoice\",\"plural\":\"triviaChoices\",\"findUnique\":\"findUniqueTriviaChoice\",\"findUniqueOrThrow\":\"findUniqueTriviaChoiceOrThrow\",\"findFirst\":\"findFirstTriviaChoice\",\"findFirstOrThrow\":\"findFirstTriviaChoiceOrThrow\",\"findMany\":\"findManyTriviaChoice\",\"create\":\"createOneTriviaChoice\",\"createMany\":\"createManyTriviaChoice\",\"delete\":\"deleteOneTriviaChoice\",\"update\":\"updateOneTriviaChoice\",\"deleteMany\":\"deleteManyTriviaChoice\",\"updateMany\":\"updateManyTriviaChoice\",\"upsert\":\"upsertOneTriviaChoice\",\"aggregate\":\"aggregateTriviaChoice\",\"groupBy\":\"groupByTriviaChoice\"},{\"model\":\"TriviaRoundQuestion\",\"plural\":\"triviaRoundQuestions\",\"findUnique\":\"findUniqueTriviaRoundQuestion\",\"findUniqueOrThrow\":\"findUniqueTriviaRoundQuestionOrThrow\",\"findFirst\":\"findFirstTriviaRoundQuestion\",\"findFirstOrThrow\":\"findFirstTriviaRoundQuestionOrThrow\",\"findMany\":\"findManyTriviaRoundQuestion\",\"create\":\"createOneTriviaRoundQuestion\",\"createMany\":\"createManyTriviaRoundQuestion\",\"delete\":\"deleteOneTriviaRoundQuestion\",\"update\":\"updateOneTriviaRoundQuestion\",\"deleteMany\":\"deleteManyTriviaRoundQuestion\",\"updateMany\":\"updateManyTriviaRoundQuestion\",\"upsert\":\"upsertOneTriviaRoundQuestion\",\"aggregate\":\"aggregateTriviaRoundQuestion\",\"groupBy\":\"groupByTriviaRoundQuestion\"},{\"model\":\"TriviaRound\",\"plural\":\"triviaRounds\",\"findUnique\":\"findUniqueTriviaRound\",\"findUniqueOrThrow\":\"findUniqueTriviaRoundOrThrow\",\"findFirst\":\"findFirstTriviaRound\",\"findFirstOrThrow\":\"findFirstTriviaRoundOrThrow\",\"findMany\":\"findManyTriviaRound\",\"create\":\"createOneTriviaRound\",\"createMany\":\"createManyTriviaRound\",\"delete\":\"deleteOneTriviaRound\",\"update\":\"updateOneTriviaRound\",\"deleteMany\":\"deleteManyTriviaRound\",\"updateMany\":\"updateManyTriviaRound\",\"upsert\":\"upsertOneTriviaRound\",\"aggregate\":\"aggregateTriviaRound\",\"groupBy\":\"groupByTriviaRound\"},{\"model\":\"TwitterUser\",\"plural\":\"twitterUsers\",\"findUnique\":\"findUniqueTwitterUser\",\"findUniqueOrThrow\":\"findUniqueTwitterUserOrThrow\",\"findFirst\":\"findFirstTwitterUser\",\"findFirstOrThrow\":\"findFirstTwitterUserOrThrow\",\"findMany\":\"findManyTwitterUser\",\"create\":\"createOneTwitterUser\",\"createMany\":\"createManyTwitterUser\",\"delete\":\"deleteOneTwitterUser\",\"update\":\"updateOneTwitterUser\",\"deleteMany\":\"deleteManyTwitterUser\",\"updateMany\":\"updateManyTwitterUser\",\"upsert\":\"upsertOneTwitterUser\",\"aggregate\":\"aggregateTwitterUser\",\"groupBy\":\"groupByTwitterUser\"},{\"model\":\"TwitterPost\",\"plural\":\"twitterPosts\",\"findUnique\":\"findUniqueTwitterPost\",\"findUniqueOrThrow\":\"findUniqueTwitterPostOrThrow\",\"findFirst\":\"findFirstTwitterPost\",\"findFirstOrThrow\":\"findFirstTwitterPostOrThrow\",\"findMany\":\"findManyTwitterPost\",\"create\":\"createOneTwitterPost\",\"createMany\":\"createManyTwitterPost\",\"delete\":\"deleteOneTwitterPost\",\"update\":\"updateOneTwitterPost\",\"deleteMany\":\"deleteManyTwitterPost\",\"updateMany\":\"updateManyTwitterPost\",\"upsert\":\"upsertOneTwitterPost\",\"aggregate\":\"aggregateTwitterPost\",\"groupBy\":\"groupByTwitterPost\"},{\"model\":\"TwitterHashtag\",\"plural\":\"twitterHashtags\",\"findUnique\":\"findUniqueTwitterHashtag\",\"findUniqueOrThrow\":\"findUniqueTwitterHashtagOrThrow\",\"findFirst\":\"findFirstTwitterHashtag\",\"findFirstOrThrow\":\"findFirstTwitterHashtagOrThrow\",\"findMany\":\"findManyTwitterHashtag\",\"create\":\"createOneTwitterHashtag\",\"createMany\":\"createManyTwitterHashtag\",\"delete\":\"deleteOneTwitterHashtag\",\"update\":\"updateOneTwitterHashtag\",\"deleteMany\":\"deleteManyTwitterHashtag\",\"updateMany\":\"updateManyTwitterHashtag\",\"upsert\":\"upsertOneTwitterHashtag\",\"aggregate\":\"aggregateTwitterHashtag\",\"groupBy\":\"groupByTwitterHashtag\"},{\"model\":\"TwitterDirectMessage\",\"plural\":\"twitterDirectMessages\",\"findUnique\":\"findUniqueTwitterDirectMessage\",\"findUniqueOrThrow\":\"findUniqueTwitterDirectMessageOrThrow\",\"findFirst\":\"findFirstTwitterDirectMessage\",\"findFirstOrThrow\":\"findFirstTwitterDirectMessageOrThrow\",\"findMany\":\"findManyTwitterDirectMessage\",\"create\":\"createOneTwitterDirectMessage\",\"createMany\":\"createManyTwitterDirectMessage\",\"delete\":\"deleteOneTwitterDirectMessage\",\"update\":\"updateOneTwitterDirectMessage\",\"deleteMany\":\"deleteManyTwitterDirectMessage\",\"updateMany\":\"updateManyTwitterDirectMessage\",\"upsert\":\"upsertOneTwitterDirectMessage\",\"aggregate\":\"aggregateTwitterDirectMessage\",\"groupBy\":\"groupByTwitterDirectMessage\"},{\"model\":\"TwitterUserRelation\",\"plural\":\"twitterUserRelations\",\"findUnique\":\"findUniqueTwitterUserRelation\",\"findUniqueOrThrow\":\"findUniqueTwitterUserRelationOrThrow\",\"findFirst\":\"findFirstTwitterUserRelation\",\"findFirstOrThrow\":\"findFirstTwitterUserRelationOrThrow\",\"findMany\":\"findManyTwitterUserRelation\",\"create\":\"createOneTwitterUserRelation\",\"createMany\":\"createManyTwitterUserRelation\",\"delete\":\"deleteOneTwitterUserRelation\",\"update\":\"updateOneTwitterUserRelation\",\"deleteMany\":\"deleteManyTwitterUserRelation\",\"updateMany\":\"updateManyTwitterUserRelation\",\"upsert\":\"upsertOneTwitterUserRelation\",\"aggregate\":\"aggregateTwitterUserRelation\",\"groupBy\":\"groupByTwitterUserRelation\"},{\"model\":\"TwitterPostReply\",\"plural\":\"twitterPostReplies\",\"findUnique\":\"findUniqueTwitterPostReply\",\"findUniqueOrThrow\":\"findUniqueTwitterPostReplyOrThrow\",\"findFirst\":\"findFirstTwitterPostReply\",\"findFirstOrThrow\":\"findFirstTwitterPostReplyOrThrow\",\"findMany\":\"findManyTwitterPostReply\",\"create\":\"createOneTwitterPostReply\",\"createMany\":\"createManyTwitterPostReply\",\"delete\":\"deleteOneTwitterPostReply\",\"update\":\"updateOneTwitterPostReply\",\"deleteMany\":\"deleteManyTwitterPostReply\",\"updateMany\":\"updateManyTwitterPostReply\",\"upsert\":\"upsertOneTwitterPostReply\",\"aggregate\":\"aggregateTwitterPostReply\",\"groupBy\":\"groupByTwitterPostReply\"},{\"model\":\"PostOnHashtag\",\"plural\":\"postOnHashtags\",\"findUnique\":\"findUniquePostOnHashtag\",\"findUniqueOrThrow\":\"findUniquePostOnHashtagOrThrow\",\"findFirst\":\"findFirstPostOnHashtag\",\"findFirstOrThrow\":\"findFirstPostOnHashtagOrThrow\",\"findMany\":\"findManyPostOnHashtag\",\"create\":\"createOnePostOnHashtag\",\"createMany\":\"createManyPostOnHashtag\",\"delete\":\"deleteOnePostOnHashtag\",\"update\":\"updateOnePostOnHashtag\",\"deleteMany\":\"deleteManyPostOnHashtag\",\"updateMany\":\"updateManyPostOnHashtag\",\"upsert\":\"upsertOnePostOnHashtag\",\"aggregate\":\"aggregatePostOnHashtag\",\"groupBy\":\"groupByPostOnHashtag\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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
      "value": "/Users/korana/Documents/Sprinttech/workshop-backend/prisma/client",
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
