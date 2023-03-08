
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
