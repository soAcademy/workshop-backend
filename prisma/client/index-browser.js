
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

exports.Prisma.FacebookCommentScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  commentByUserId: 'commentByUserId',
  postId: 'postId',
  isReplied: 'isReplied',
  replyFromCommentId: 'replyFromCommentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookFriendRequestScalarFieldEnum = makeEnum({
  id: 'id',
  requestFromUserId: 'requestFromUserId',
  requestToUserId: 'requestToUserId',
  isAccepted: 'isAccepted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookGroupScalarFieldEnum = makeEnum({
  id: 'id',
  GroupImage: 'GroupImage',
  coverImage: 'coverImage',
  name: 'name',
  createrUserId: 'createrUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookLikeCommentScalarFieldEnum = makeEnum({
  id: 'id',
  commentId: 'commentId',
  posterUserId: 'posterUserId',
  likeTypeId: 'likeTypeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookLikePostScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  posterUserId: 'posterUserId',
  likeTypeId: 'likeTypeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookLikeTypeScalarFieldEnum = makeEnum({
  id: 'id',
  emoji: 'emoji',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookLocationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookMessengerScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  messageFromUserId: 'messageFromUserId',
  messageToUserId: 'messageToUserId',
  isRead: 'isRead',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookPostDestinationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookPostScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  postTypeId: 'postTypeId',
  posterUserId: 'posterUserId',
  locationId: 'locationId',
  destinationId: 'destinationId',
  destinationRelateId: 'destinationRelateId',
  isShared: 'isShared',
  shareFromPostId: 'shareFromPostId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookPostTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookUserRelationScalarFieldEnum = makeEnum({
  id: 'id',
  relationFromUserId: 'relationFromUserId',
  relationToUserId: 'relationToUserId',
  isAccepted: 'isAccepted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookUserScalarFieldEnum = makeEnum({
  id: 'id',
  profileImage: 'profileImage',
  coverImage: 'coverImage',
  name: 'name',
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

exports.Prisma.WashExpressBranchScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  ownerId: 'ownerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressMachineBrandScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressMachineListScalarFieldEnum = makeEnum({
  id: 'id',
  brandId: 'brandId',
  typeId: 'typeId',
  branchId: 'branchId',
  installDate: 'installDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressMachineProgramScalarFieldEnum = makeEnum({
  id: 'id',
  typeId: 'typeId',
  name: 'name',
  timeMinites: 'timeMinites',
  priceBath: 'priceBath',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressMachineTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressMaintenanceHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId',
  technicianId: 'technicianId',
  problem: 'problem',
  startdate: 'startdate',
  finishdate: 'finishdate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressMemberScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  call: 'call',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressOwnerScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  call: 'call',
  location: 'location',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressServiceHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId',
  memberId: 'memberId',
  branchId: 'branchId',
  programId: 'programId',
  recordedPrice: 'recordedPrice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressTechnicianScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  call: 'call',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashExpressTopupHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  memberId: 'memberId',
  topupAmount: 'topupAmount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeChanelPermissionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeChanelScalarFieldEnum = makeEnum({
  id: 'id',
  ChanelImage: 'ChanelImage',
  coverImage: 'coverImage',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeChanelToUserPermissionScalarFieldEnum = makeEnum({
  id: 'id',
  chanelId: 'chanelId',
  UserId: 'UserId',
  permissionId: 'permissionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeCommentScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  commentByUserId: 'commentByUserId',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeLikeCommentScalarFieldEnum = makeEnum({
  id: 'id',
  commentId: 'commentId',
  likeByUserId: 'likeByUserId',
  likeTypeId: 'likeTypeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeLikePostScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  likeByUserId: 'likeByUserId',
  likeTypeId: 'likeTypeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeLikeTypeScalarFieldEnum = makeEnum({
  id: 'id',
  emoji: 'emoji',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubePostScalarFieldEnum = makeEnum({
  id: 'id',
  video: 'video',
  name: 'name',
  description: 'description',
  posterUserId: 'posterUserId',
  chanelId: 'chanelId',
  isShared: 'isShared',
  shareFromPostId: 'shareFromPostId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeSubcriberScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toChanelId: 'toChanelId',
  isSupported: 'isSupported',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeUserScalarFieldEnum = makeEnum({
  id: 'id',
  profileImage: 'profileImage',
  email: 'email',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});
exports.YoutubeLikeTypeEnum = makeEnum({
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
});

exports.YoutubePermissionEnum = makeEnum({
  OWNER: 'OWNER',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN'
});

exports.machineType = makeEnum({
  WASHER: 'WASHER',
  DRYER: 'DRYER'
});

exports.venderList = makeEnum({
  TOSHIBA: 'TOSHIBA',
  SAMSUNG: 'SAMSUNG',
  HITACHI: 'HITACHI'
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
  TwitterDM: 'TwitterDM',
  WashExpressOwner: 'WashExpressOwner',
  WashExpressMember: 'WashExpressMember',
  WashExpressTopupHistory: 'WashExpressTopupHistory',
  WashExpressTechnician: 'WashExpressTechnician',
  WashExpressBranch: 'WashExpressBranch',
  WashExpressMachineBrand: 'WashExpressMachineBrand',
  WashExpressMachineType: 'WashExpressMachineType',
  WashExpressMachineProgram: 'WashExpressMachineProgram',
  WashExpressMachineList: 'WashExpressMachineList',
  WashExpressServiceHistory: 'WashExpressServiceHistory',
  WashExpressMaintenanceHistory: 'WashExpressMaintenanceHistory',
  YoutubeUser: 'YoutubeUser',
  YoutubeChanelPermission: 'YoutubeChanelPermission',
  YoutubeChanel: 'YoutubeChanel',
  YoutubeChanelToUserPermission: 'YoutubeChanelToUserPermission',
  YoutubeHashtag: 'YoutubeHashtag',
  YoutubePost: 'YoutubePost',
  YoutubeComment: 'YoutubeComment',
  YoutubeLikeType: 'YoutubeLikeType',
  YoutubeLikePost: 'YoutubeLikePost',
  YoutubeLikeComment: 'YoutubeLikeComment',
  YoutubeSubcriber: 'YoutubeSubcriber',
  FacebookUser: 'FacebookUser',
  FacebookGroup: 'FacebookGroup',
  FacebookPostDestination: 'FacebookPostDestination',
  FacebookPostType: 'FacebookPostType',
  FacebookLocation: 'FacebookLocation',
  FacebookHashtag: 'FacebookHashtag',
  FacebookPost: 'FacebookPost',
  FacebookComment: 'FacebookComment',
  FacebookLikeType: 'FacebookLikeType',
  FacebookLikePost: 'FacebookLikePost',
  FacebookLikeComment: 'FacebookLikeComment',
  FacebookFriendRequest: 'FacebookFriendRequest',
  FacebookUserRelation: 'FacebookUserRelation',
  FacebookMessenger: 'FacebookMessenger'
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
