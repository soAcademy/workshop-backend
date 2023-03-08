
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

exports.Prisma.BKAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BKBorrowingHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  reserveUserId: 'reserveUserId',
  copyId: 'copyId',
  fromUniversityId: 'fromUniversityId',
  borrowDate: 'borrowDate',
  returnDate: 'returnDate',
  actualReturnDate: 'actualReturnDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BKCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BKCopyScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  titleId: 'titleId',
  reserveUserId: 'reserveUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BKRequestScalarFieldEnum = makeEnum({
  id: 'id',
  reserveUserId: 'reserveUserId',
  copyId: 'copyId',
  fromUniversityId: 'fromUniversityId',
  toUniversityId: 'toUniversityId',
  requestDate: 'requestDate',
  status: 'status',
  planRecievedDate: 'planRecievedDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BKReserveUserScalarFieldEnum = makeEnum({
  id: 'id',
  universityId: 'universityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BKTitleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  ISBN: 'ISBN',
  copyQty: 'copyQty',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BKUniversityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbCommentScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbDestinationUserScalarFieldEnum = makeEnum({
  id: 'id',
  fbWallId: 'fbWallId',
  shareId: 'shareId',
  groupId: 'groupId'
});

exports.Prisma.FbGroupScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  hashtag: 'hashtag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbLikeScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  postId: 'postId',
  commentId: 'commentId',
  shareId: 'shareId',
  likeType: 'likeType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbMessengerScalarFieldEnum = makeEnum({
  id: 'id',
  fromuserId: 'fromuserId',
  toUserId: 'toUserId',
  text: 'text',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbPostImageScalarFieldEnum = makeEnum({
  id: 'id',
  image: 'image',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbPostOnHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  hashtagId: 'hashtagId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbPostScalarFieldEnum = makeEnum({
  id: 'id',
  caption: 'caption',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  wallId: 'wallId'
});

exports.Prisma.FbPostVideoScalarFieldEnum = makeEnum({
  id: 'id',
  video: 'video',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbShareScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  location: 'location',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbWallScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FbfriendScalarFieldEnum = makeEnum({
  id: 'id',
  acceptId: 'acceptId',
  requestId: 'requestId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GroupToUserScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  groupId: 'groupId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

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

exports.Prisma.MachineToProgramScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId',
  programId: 'programId',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
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

exports.Prisma.TitleToAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  titleId: 'titleId',
  authorId: 'authorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TitleToCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  titleId: 'titleId',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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

exports.Prisma.TwitterCommentScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  userId: 'userId',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterDirectMessageScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  text: 'text',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterFollowScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  hashtag: 'hashtag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterPostOnHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  hashtagId: 'hashtagId'
});

exports.Prisma.TwitterPostScalarFieldEnum = makeEnum({
  id: 'id',
  caption: 'caption',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  Image: 'Image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UniversityToTitleScalarFieldEnum = makeEnum({
  id: 'id',
  universityId: 'universityId',
  titleId: 'titleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserToChannelScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  channelId: 'channelId',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WSMachineScalarFieldEnum = makeEnum({
  id: 'id',
  shopId: 'shopId',
  brandname: 'brandname',
  size: 'size',
  type: 'type',
  model: 'model',
  producedDate: 'producedDate',
  insuranceExpiredDate: 'insuranceExpiredDate',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
});

exports.Prisma.WSMaintainScalarFieldEnum = makeEnum({
  id: 'id',
  checker: 'checker',
  item: 'item',
  status: 'status',
  machineId: 'machineId',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
});

exports.Prisma.WSProgramDetailScalarFieldEnum = makeEnum({
  id: 'id',
  programId: 'programId',
  price: 'price',
  duration: 'duration',
  weight: 'weight',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
});

exports.Prisma.WSProgramScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  activeProgramId: 'activeProgramId'
});

exports.Prisma.WSShopScalarFieldEnum = makeEnum({
  id: 'id',
  branch: 'branch',
  owner: 'owner',
  tel: 'tel',
  location: 'location',
  area: 'area',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
});

exports.Prisma.WSTopupHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  topup: 'topup',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
});

exports.Prisma.WSUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  tel: 'tel',
  myWallet: 'myWallet',
  createdAt: 'createdAt',
  updateAt: 'updateAt'
});

exports.Prisma.WSUsingHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  price: 'price',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  usingStartAt: 'usingStartAt',
  finishingAt: 'finishingAt',
  wSMachineId: 'wSMachineId',
  wSProgramId: 'wSProgramId'
});

exports.Prisma.YTChannelScalarFieldEnum = makeEnum({
  id: 'id',
  channelName: 'channelName',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTCommentScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  userId: 'userId',
  commentTo: 'commentTo',
  videoId: 'videoId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTLikeScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  videoId: 'videoId',
  commentId: 'commentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTShareScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  videoId: 'videoId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTSubscribeScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  channelId: 'channelId',
  member: 'member',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTUserScalarFieldEnum = makeEnum({
  id: 'id',
  user: 'user',
  email: 'email',
  avatar: 'avatar',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTVideoScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  file: 'file',
  logo: 'logo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  channelId: 'channelId'
});
exports.CopyStatusEnum = makeEnum({
  INSTOCK: 'INSTOCK',
  RESERVED: 'RESERVED'
});

exports.RequestStatusEnum = makeEnum({
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
});

exports.YTRoleEnum = makeEnum({
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  CREATOR: 'CREATOR'
});

exports.Prisma.ModelName = makeEnum({
  BKReserveUser: 'BKReserveUser',
  BKRequest: 'BKRequest',
  BKBorrowingHistory: 'BKBorrowingHistory',
  BKCopy: 'BKCopy',
  BKUniversity: 'BKUniversity',
  BKTitle: 'BKTitle',
  UniversityToTitle: 'UniversityToTitle',
  BKCategory: 'BKCategory',
  TitleToCategory: 'TitleToCategory',
  BKAuthor: 'BKAuthor',
  TitleToAuthor: 'TitleToAuthor',
  FbUser: 'FbUser',
  FbPost: 'FbPost',
  FbPostImage: 'FbPostImage',
  FbPostVideo: 'FbPostVideo',
  FbHashtag: 'FbHashtag',
  FbPostOnHashtag: 'FbPostOnHashtag',
  FbLike: 'FbLike',
  FbShare: 'FbShare',
  Fbfriend: 'Fbfriend',
  FbMessenger: 'FbMessenger',
  FbComment: 'FbComment',
  FbGroup: 'FbGroup',
  GroupToUser: 'GroupToUser',
  FbWall: 'FbWall',
  FbDestinationUser: 'FbDestinationUser',
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
  TwitterFollow: 'TwitterFollow',
  TwitterPost: 'TwitterPost',
  TwitterDirectMessage: 'TwitterDirectMessage',
  TwitterHashtag: 'TwitterHashtag',
  TwitterComment: 'TwitterComment',
  TwitterPostOnHashtag: 'TwitterPostOnHashtag',
  WSUser: 'WSUser',
  WSTopupHistory: 'WSTopupHistory',
  WSUsingHistory: 'WSUsingHistory',
  WSShop: 'WSShop',
  WSMachine: 'WSMachine',
  WSProgram: 'WSProgram',
  MachineToProgram: 'MachineToProgram',
  WSProgramDetail: 'WSProgramDetail',
  WSMaintain: 'WSMaintain',
  YTUser: 'YTUser',
  YTChannel: 'YTChannel',
  UserToChannel: 'UserToChannel',
  YTVideo: 'YTVideo',
  YTLike: 'YTLike',
  YTComment: 'YTComment',
  YTSubscribe: 'YTSubscribe',
  YTShare: 'YTShare'
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
