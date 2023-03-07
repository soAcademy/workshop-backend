
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
