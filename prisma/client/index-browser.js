
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

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  commentDetail: 'commentDetail',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DirectMsgScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  msgDetail: 'msgDetail',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FBPostScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  postDetail: 'postDetail',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FBUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  profileImage: 'profileImage',
  coverImage: 'coverImage',
  bio: 'bio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FollowingScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FriendsScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GroupOnUserScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  groupId: 'groupId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GroupScalarFieldEnum = makeEnum({
  id: 'id',
  groupName: 'groupName',
  groupImage: 'groupImage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.HashtagScalarFieldEnum = makeEnum({
  id: 'id',
  hashtag: 'hashtag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LikeScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  likeType: 'likeType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PostOnHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  hashtagId: 'hashtagId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  postDetail: 'postDetail',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PostinGroupScalarFieldEnum = makeEnum({
  id: 'id',
  groupId: 'groupId',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PostinProfileScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReplyScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  reply: 'reply',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShareScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  shareStatus: 'shareStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SubCommentScalarFieldEnum = makeEnum({
  id: 'id',
  commentId: 'commentId',
  subCommentDetail: 'subCommentDetail',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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

exports.Prisma.TriviaQuizChoiceScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  quizId: 'quizId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TriviaQuizScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  categoryId: 'categoryId',
  answerId: 'answerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TriviaRoundQuizChoiceScalarFieldEnum = makeEnum({
  id: 'id',
  roundQuizId: 'roundQuizId',
  quizChoiceId: 'quizChoiceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TriviaRoundQuizScalarFieldEnum = makeEnum({
  id: 'id',
  roundId: 'roundId',
  quizId: 'quizId',
  playerChooseChoice: 'playerChooseChoice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TriviaRoundScalarFieldEnum = makeEnum({
  id: 'id',
  score: 'score',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  profileImage: 'profileImage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});


exports.Prisma.ModelName = makeEnum({
  BinKitchenCategory: 'BinKitchenCategory',
  BinKitchenMenu: 'BinKitchenMenu',
  BinKitchenOrder: 'BinKitchenOrder',
  BinKitchenOrderItem: 'BinKitchenOrderItem',
  FBUser: 'FBUser',
  Friends: 'Friends',
  FBPost: 'FBPost',
  Comment: 'Comment',
  SubComment: 'SubComment',
  Like: 'Like',
  Share: 'Share',
  Group: 'Group',
  GroupOnUser: 'GroupOnUser',
  PostinGroup: 'PostinGroup',
  PostinProfile: 'PostinProfile',
  TodoList: 'TodoList',
  TriviaCategory: 'TriviaCategory',
  TriviaQuiz: 'TriviaQuiz',
  TriviaQuizChoice: 'TriviaQuizChoice',
  TriviaRound: 'TriviaRound',
  TriviaRoundQuiz: 'TriviaRoundQuiz',
  TriviaRoundQuizChoice: 'TriviaRoundQuizChoice',
  User: 'User',
  Following: 'Following',
  Post: 'Post',
  DirectMsg: 'DirectMsg',
  Hashtag: 'Hashtag',
  Reply: 'Reply',
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
