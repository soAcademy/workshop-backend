
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

exports.Prisma.DirecMessageScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  fromUser: 'fromUser',
  toUser: 'toUser',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.HashTagOnPostScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  hashTagId: 'hashTagId',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.HashTagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  createAt: 'createAt',
  updateAt: 'updateAt',
  userId: 'userId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReplyScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  message: 'message',
  createAt: 'createAt',
  updateAt: 'updateAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
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
  profileImage: 'profileImage',
  createAt: 'createAt',
  updateAt: 'updateAt'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Post: 'Post',
  DirecMessage: 'DirecMessage',
  HashTag: 'HashTag',
  HashTagOnPost: 'HashTagOnPost',
  Reply: 'Reply',
  UserRelation: 'UserRelation'
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
