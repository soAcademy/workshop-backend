
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

exports.Prisma.BookOnAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  bookId: 'bookId',
  authorId: 'authorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BookOnCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  bookId: 'bookId',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ChanelOnUserScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  chanelId: 'chanelId',
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

exports.Prisma.FBDirectMsgScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  msgDetail: 'msgDetail',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FBHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  hashtag: 'hashtag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FBPostOnHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  hashtagId: 'hashtagId',
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

exports.Prisma.LibraryAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookCopyScalarFieldEnum = makeEnum({
  id: 'id',
  bookId: 'bookId',
  atUniversityId: 'atUniversityId',
  currentBorrowBytudentId: 'currentBorrowBytudentId',
  status: 'status',
  isbn: 'isbn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookScalarFieldEnum = makeEnum({
  id: 'id',
  universityId: 'universityId',
  name: 'name',
  isbn: 'isbn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryHistoryOfBookCopyScalarFieldEnum = makeEnum({
  id: 'id',
  copyId: 'copyId',
  oncetBorrowBytudentId: 'oncetBorrowBytudentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryStudentBorrowingScalarFieldEnum = makeEnum({
  id: 'id',
  studentId: 'studentId',
  bookCopyId: 'bookCopyId',
  borrowingDate: 'borrowingDate',
  targetReturnDate: 'targetReturnDate',
  actualReturnDate: 'actualReturnDate',
  borrowFromUniversityId: 'borrowFromUniversityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryStudentRequestScalarFieldEnum = makeEnum({
  id: 'id',
  studentId: 'studentId',
  bookCopyId: 'bookCopyId',
  fromUniversityId: 'fromUniversityId',
  toUniversityId: 'toUniversityId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryStudentScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryUniversityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LikeScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  likeTypeId: 'likeTypeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LikeTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
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
  shareStatusId: 'shareStatusId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShareStatusScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
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

exports.Prisma.WashingBranchScalarFieldEnum = makeEnum({
  id: 'id',
  branchName: 'branchName',
  address: 'address',
  tel: 'tel',
  area: 'area',
  ownerName: 'ownerName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashingMachineMaintenanceScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId',
  symptom: 'symptom',
  failureLevel: 'failureLevel',
  mechanicName: 'mechanicName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashingMachineOnProgramScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId',
  programId: 'programId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashingMachineProgramScalarFieldEnum = makeEnum({
  id: 'id',
  programName: 'programName',
  price: 'price',
  time: 'time',
  maxWeight: 'maxWeight',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashingMachineScalarFieldEnum = makeEnum({
  id: 'id',
  branchId: 'branchId',
  brand: 'brand',
  weight: 'weight',
  type: 'type',
  productionYear: 'productionYear',
  warrantyEnd: 'warrantyEnd',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashingTopUpScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  topUpAmount: 'topUpAmount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashingUseHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  branchId: 'branchId',
  machineId: 'machineId',
  programId: 'programId',
  price: 'price',
  startTime: 'startTime',
  endTime: 'endTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashingUserScalarFieldEnum = makeEnum({
  id: 'id',
  userName: 'userName',
  tel: 'tel',
  remainCoupon: 'remainCoupon',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTAdminScalarFieldEnum = makeEnum({
  id: 'id',
  chanelId: 'chanelId',
  adminUserId: 'adminUserId',
  roleId: 'roleId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTChanelScalarFieldEnum = makeEnum({
  id: 'id',
  chaneName: 'chaneName',
  image: 'image',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTCommentScalarFieldEnum = makeEnum({
  id: 'id',
  videoId: 'videoId',
  commentDetail: 'commentDetail',
  commentFromUserId: 'commentFromUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTRolePermissionScalarFieldEnum = makeEnum({
  id: 'id',
  roleId: 'roleId',
  permissionName: 'permissionName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTRoleScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTSubCommentScalarFieldEnum = makeEnum({
  id: 'id',
  commentId: 'commentId',
  subCommentDetail: 'subCommentDetail',
  subCommentFromUserId: 'subCommentFromUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTSubscribeScalarFieldEnum = makeEnum({
  id: 'id',
  chanelId: 'chanelId',
  subscribeUserId: 'subscribeUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTUserScalarFieldEnum = makeEnum({
  id: 'id',
  userName: 'userName',
  profileImage: 'profileImage',
  email: 'email',
  bio: 'bio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YTVideoScalarFieldEnum = makeEnum({
  id: 'id',
  chanelId: 'chanelId',
  videoLink: 'videoLink',
  description: 'description',
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
  LikeType: 'LikeType',
  ShareStatus: 'ShareStatus',
  FBDirectMsg: 'FBDirectMsg',
  FBHashtag: 'FBHashtag',
  FBPostOnHashtag: 'FBPostOnHashtag',
  LibraryUniversity: 'LibraryUniversity',
  LibraryStudent: 'LibraryStudent',
  LibraryBook: 'LibraryBook',
  LibraryBookCopy: 'LibraryBookCopy',
  LibraryHistoryOfBookCopy: 'LibraryHistoryOfBookCopy',
  LibraryCategory: 'LibraryCategory',
  LibraryAuthor: 'LibraryAuthor',
  BookOnAuthor: 'BookOnAuthor',
  BookOnCategory: 'BookOnCategory',
  LibraryStudentRequest: 'LibraryStudentRequest',
  LibraryStudentBorrowing: 'LibraryStudentBorrowing',
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
  PostOnHashtag: 'PostOnHashtag',
  WashingBranch: 'WashingBranch',
  WashingMachine: 'WashingMachine',
  WashingMachineMaintenance: 'WashingMachineMaintenance',
  WashingMachineProgram: 'WashingMachineProgram',
  WashingMachineOnProgram: 'WashingMachineOnProgram',
  WashingUser: 'WashingUser',
  WashingTopUp: 'WashingTopUp',
  WashingUseHistory: 'WashingUseHistory',
  YTUser: 'YTUser',
  YTChanel: 'YTChanel',
  ChanelOnUser: 'ChanelOnUser',
  YTAdmin: 'YTAdmin',
  YTRole: 'YTRole',
  YTRolePermission: 'YTRolePermission',
  YTSubscribe: 'YTSubscribe',
  YTVideo: 'YTVideo',
  YTComment: 'YTComment',
  YTSubComment: 'YTSubComment'
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
