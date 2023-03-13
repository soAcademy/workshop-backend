
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

exports.Prisma.ActorsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.AuthorExScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.BookExOnAuthorExScalarFieldEnum = makeEnum({
  bookExampleId: 'bookExampleId',
  authorExampleId: 'authorExampleId'
});

exports.Prisma.BookExScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title'
});

exports.Prisma.BranchScalarFieldEnum = makeEnum({
  id: 'id',
  ownerName: 'ownerName',
  tel: 'tel',
  address: 'address',
  area: 'area',
  totolMachine: 'totolMachine',
  mainCompanyId: 'mainCompanyId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.DewKitchenCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.DewKitchenMenuScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  price: 'price',
  categoryName: 'categoryName',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.DewKitchenOrderScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  tableId: 'tableId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.DewOrderItemScalarFieldEnum = makeEnum({
  id: 'id',
  menuId: 'menuId',
  orderId: 'orderId',
  quantity: 'quantity',
  totalPrice: 'totalPrice',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.DewScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  kadId: 'kadId'
});

exports.Prisma.DirectMessageScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  message: 'message',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.HashTagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt',
  postOnHashTagId: 'postOnHashTagId'
});

exports.Prisma.KadScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.MachineOnProgramScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId',
  programId: 'programId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.MachineScalarFieldEnum = makeEnum({
  id: 'id',
  brand: 'brand',
  size: 'size',
  category: 'category',
  model: 'model',
  mfg: 'mfg',
  insurance: 'insurance',
  branchId: 'branchId',
  washHistoryId: 'washHistoryId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.MainCompanyScalarFieldEnum = makeEnum({
  id: 'id',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.PostOnHashTagScalarFieldEnum = makeEnum({
  id: 'id',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  userId: 'userId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.ProcessTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  programId: 'programId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.ProgramScalarFieldEnum = makeEnum({
  id: 'id',
  duration: 'duration',
  price: 'price',
  washHistoryId: 'washHistoryId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.QuestionScalarFieldEnum = makeEnum({
  id: 'id',
  question: 'question',
  answer: 'answer',
  idCategory: 'idCategory',
  idAnswer: 'idAnswer',
  idQuize: 'idQuize',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.QuizeAnswerScalarFieldEnum = makeEnum({
  id: 'id',
  answer: 'answer',
  choiceId: 'choiceId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.QuizeCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.QuizeChoiceScalarFieldEnum = makeEnum({
  id: 'id',
  choice: 'choice',
  questionId: 'questionId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.QuizeGameRoundScalarFieldEnum = makeEnum({
  id: 'id',
  user: 'user',
  score: 'score',
  answerId: 'answerId',
  questionId: 'questionId',
  choiceId: 'choiceId'
});

exports.Prisma.QuizeQuestionScalarFieldEnum = makeEnum({
  id: 'id',
  question: 'question',
  quizeCategoryId: 'quizeCategoryId',
  quizeAnswerId: 'quizeAnswerId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.QuizeTableScalarFieldEnum = makeEnum({
  id: 'id',
  idQuestion: 'idQuestion',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.RepairDetailScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  damage: 'damage',
  cause: 'cause',
  machanics: 'machanics',
  createAt: 'createAt',
  updateAt: 'updateAt',
  repairHistoryId: 'repairHistoryId'
});

exports.Prisma.RepairHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  time: 'time',
  machineId: 'machineId',
  repairDetailId: 'repairDetailId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.ReplyScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  postId: 'postId',
  createAt: 'createAt',
  updateAt: 'updateAt',
  userId: 'userId'
});

exports.Prisma.RoundQuestionTableScalarFieldEnum = makeEnum({
  id: 'id',
  roundId: 'roundId',
  userAnswerId: 'userAnswerId',
  quizId: 'quizId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.RoundTableScalarFieldEnum = makeEnum({
  id: 'id',
  score: 'score',
  categoryId: 'categoryId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.SeriesTvScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TodolistScalarFieldEnum = makeEnum({
  id: 'id',
  task: 'task',
  notes: 'notes',
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

exports.Prisma.UserRelationScalarFieldEnum = makeEnum({
  id: 'id',
  fromId: 'fromId',
  toId: 'toId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.WashHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  price: 'price',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.WashUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  tel: 'tel',
  balance: 'balance',
  washHistoryId: 'washHistoryId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.YoutubeChannelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.YoutubeCommentToVideoScalarFieldEnum = makeEnum({
  id: 'id',
  video: 'video',
  comment: 'comment',
  commenterId: 'commenterId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.YoutubeReactionScalarFieldEnum = makeEnum({
  id: 'id',
  reaction: 'reaction',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.YoutubeRoleScalarFieldEnum = makeEnum({
  id: 'id',
  role: 'role',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.YoutubeUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.YoutubeUserToChannelScalarFieldEnum = makeEnum({
  userId: 'userId',
  channelId: 'channelId',
  roleId: 'roleId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.YoutubeVideoScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  url: 'url',
  channelId: 'channelId',
  createAt: 'createAt',
  updateAt: 'updateAt',
  youtubeReactionId: 'youtubeReactionId'
});


exports.Prisma.ModelName = makeEnum({
  DewKitchenCategory: 'DewKitchenCategory',
  DewKitchenMenu: 'DewKitchenMenu',
  DewKitchenOrder: 'DewKitchenOrder',
  DewOrderItem: 'DewOrderItem',
  BookEx: 'BookEx',
  AuthorEx: 'AuthorEx',
  BookExOnAuthorEx: 'BookExOnAuthorEx',
  SeriesTv: 'SeriesTv',
  Actors: 'Actors',
  Dew: 'Dew',
  Kad: 'Kad',
  QuizeTable: 'QuizeTable',
  Question: 'Question',
  Category: 'Category',
  roundTable: 'roundTable',
  roundQuestionTable: 'roundQuestionTable',
  QuizeCategory: 'QuizeCategory',
  QuizeQuestion: 'QuizeQuestion',
  QuizeChoice: 'QuizeChoice',
  QuizeAnswer: 'QuizeAnswer',
  QuizeGameRound: 'QuizeGameRound',
  MainCompany: 'MainCompany',
  Branch: 'Branch',
  Machine: 'Machine',
  Program: 'Program',
  MachineOnProgram: 'MachineOnProgram',
  ProcessType: 'ProcessType',
  RepairHistory: 'RepairHistory',
  RepairDetail: 'RepairDetail',
  washUser: 'washUser',
  WashHistory: 'WashHistory',
  Todolist: 'Todolist',
  User: 'User',
  DirectMessage: 'DirectMessage',
  UserRelation: 'UserRelation',
  HashTag: 'HashTag',
  Post: 'Post',
  PostOnHashTag: 'PostOnHashTag',
  Reply: 'Reply',
  YoutubeUser: 'YoutubeUser',
  YoutubeRole: 'YoutubeRole',
  YoutubeReaction: 'YoutubeReaction',
  YoutubeVideo: 'YoutubeVideo',
  YoutubeChannel: 'YoutubeChannel',
  YoutubeCommentToVideo: 'YoutubeCommentToVideo',
  YoutubeUserToChannel: 'YoutubeUserToChannel'
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
