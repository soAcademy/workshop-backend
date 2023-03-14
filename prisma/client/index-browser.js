
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

exports.Prisma.AuthorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BinWashUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  balance: 'balance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BookCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  category: 'category',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BookScalarFieldEnum = makeEnum({
  id: 'id',
  bookTitleId: 'bookTitleId',
  libraryId: 'libraryId',
  isAvailable: 'isAvailable',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BookTitleScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  isbn: 'isbn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BorrowingRecordScalarFieldEnum = makeEnum({
  id: 'id',
  studentId: 'studentId',
  bookId: 'bookId',
  startDate: 'startDate',
  endDate: 'endDate',
  actualEndDate: 'actualEndDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.BranchScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  location: 'location',
  telephoneNo: 'telephoneNo',
  area: 'area',
  binWashUserId: 'binWashUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ChannelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  profileImageUrl: 'profileImageUrl',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ChoiceScalarFieldEnum = makeEnum({
  id: 'id',
  answerText: 'answerText',
  quizId: 'quizId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.CommentScalarFieldEnum = makeEnum({
  id: 'id',
  commentText: 'commentText',
  userId: 'userId',
  postId: 'postId',
  parentCommentId: 'parentCommentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DirectMessageScalarFieldEnum = makeEnum({
  id: 'id',
  dmText: 'dmText',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookHashTagScalarFieldEnum = makeEnum({
  id: 'id',
  hashTagText: 'hashTagText',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookUserRelationScalarFieldEnum = makeEnum({
  id: 'id',
  followingUserId: 'followingUserId',
  followedUserId: 'followedUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  imageUrl: 'imageUrl',
  bio: 'bio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.HashTagScalarFieldEnum = makeEnum({
  id: 'id',
  hashTagText: 'hashTagText',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  location: 'location',
  universityId: 'universityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.MenuScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  price: 'price',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.MessengerMessageScalarFieldEnum = makeEnum({
  id: 'id',
  messengerText: 'messengerText',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.OrderItemScalarFieldEnum = makeEnum({
  id: 'id',
  menuId: 'menuId',
  orderId: 'orderId',
  quantity: 'quantity',
  totalPrice: 'totalPrice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.OrderScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  tableId: 'tableId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  postText: 'postText',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.QuizCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuizScalarFieldEnum = makeEnum({
  id: 'id',
  questionText: 'questionText',
  quizCategoryId: 'quizCategoryId',
  correctChoiceId: 'correctChoiceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.RequestRecordScalarFieldEnum = makeEnum({
  id: 'id',
  studentId: 'studentId',
  bookTitleId: 'bookTitleId',
  requestingLibraryId: 'requestingLibraryId',
  requestedLibraryId: 'requestedLibraryId',
  requestDate: 'requestDate',
  acquiredDate: 'acquiredDate',
  returnDate: 'returnDate',
  bookId: 'bookId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.RoundScalarFieldEnum = makeEnum({
  id: 'id',
  quizCategoryId: 'quizCategoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShuffledQuizScalarFieldEnum = makeEnum({
  id: 'id',
  roundId: 'roundId',
  quizId: 'quizId',
  choiceId: 'choiceId',
  choiceOrder: 'choiceOrder',
  isSelected: 'isSelected',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudentScalarFieldEnum = makeEnum({
  id: 'id',
  Name: 'Name',
  universityId: 'universityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TodoListScalarFieldEnum = makeEnum({
  id: 'id',
  task: 'task',
  status: 'status',
  bgColor: 'bgColor',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TopUpRecordScalarFieldEnum = makeEnum({
  id: 'id',
  dateTime: 'dateTime',
  binWashUserId: 'binWashUserId',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TweetScalarFieldEnum = makeEnum({
  id: 'id',
  tweetText: 'tweetText',
  userId: 'userId',
  parentTweetId: 'parentTweetId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UniversityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  location: 'location',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UsageRecordScalarFieldEnum = makeEnum({
  id: 'id',
  dateTime: 'dateTime',
  binWashUserId: 'binWashUserId',
  washingMachineId: 'washingMachineId',
  wMProgramId: 'wMProgramId',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserRelationScalarFieldEnum = makeEnum({
  id: 'id',
  followingUserId: 'followingUserId',
  followedUserId: 'followedUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  imageUrl: 'imageUrl',
  bio: 'bio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserToChannelwithRoleScalarFieldEnum = makeEnum({
  id: 'id',
  youTubeUserId: 'youTubeUserId',
  channelId: 'channelId',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserToVideoWithReactionScalarFieldEnum = makeEnum({
  id: 'id',
  youTubeUserId: 'youTubeUserId',
  videoId: 'videoId',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VideoCommentScalarFieldEnum = makeEnum({
  id: 'id',
  commentText: 'commentText',
  youTubeUserId: 'youTubeUserId',
  videoId: 'videoId',
  parentVideoCommentId: 'parentVideoCommentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.VideoScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  videoUrl: 'videoUrl',
  thumbnailImageUrl: 'thumbnailImageUrl',
  description: 'description',
  channelId: 'channelId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WMMaintenanceRecordScalarFieldEnum = makeEnum({
  id: 'id',
  washingMachineId: 'washingMachineId',
  maintenanceDateTime: 'maintenanceDateTime',
  level: 'level',
  details: 'details',
  binWashUserId: 'binWashUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WMProgramScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  maxCapacity: 'maxCapacity',
  duration: 'duration',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WashingMachineScalarFieldEnum = makeEnum({
  id: 'id',
  brand: 'brand',
  model: 'model',
  type: 'type',
  capacity: 'capacity',
  manufacturedYear: 'manufacturedYear',
  warrantyEndDate: 'warrantyEndDate',
  branchId: 'branchId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YouTubeUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  profileImageUrl: 'profileImageUrl',
  bio: 'bio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});
exports.ReactionEnum = makeEnum({
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
});

exports.RoleEnum = makeEnum({
  MANAGER: 'MANAGER',
  EDITOR: 'EDITOR',
  VIEWER: 'VIEWER'
});

exports.WMTypeEnum = makeEnum({
  FRONT_LOAD: 'FRONT_LOAD',
  TOP_LOAD: 'TOP_LOAD'
});

exports.Prisma.ModelName = makeEnum({
  Category: 'Category',
  Menu: 'Menu',
  Order: 'Order',
  OrderItem: 'OrderItem',
  QuizCategory: 'QuizCategory',
  Choice: 'Choice',
  Quiz: 'Quiz',
  Round: 'Round',
  ShuffledQuiz: 'ShuffledQuiz',
  BinWashUser: 'BinWashUser',
  Branch: 'Branch',
  WashingMachine: 'WashingMachine',
  WMProgram: 'WMProgram',
  WMMaintenanceRecord: 'WMMaintenanceRecord',
  UsageRecord: 'UsageRecord',
  TopUpRecord: 'TopUpRecord',
  FacebookUser: 'FacebookUser',
  FacebookUserRelation: 'FacebookUserRelation',
  Post: 'Post',
  Comment: 'Comment',
  FacebookHashTag: 'FacebookHashTag',
  MessengerMessage: 'MessengerMessage',
  Author: 'Author',
  BookTitle: 'BookTitle',
  BookCategory: 'BookCategory',
  Book: 'Book',
  Library: 'Library',
  University: 'University',
  Student: 'Student',
  BorrowingRecord: 'BorrowingRecord',
  RequestRecord: 'RequestRecord',
  TodoList: 'TodoList',
  User: 'User',
  UserRelation: 'UserRelation',
  Tweet: 'Tweet',
  HashTag: 'HashTag',
  DirectMessage: 'DirectMessage',
  YouTubeUser: 'YouTubeUser',
  Channel: 'Channel',
  UserToChannelwithRole: 'UserToChannelwithRole',
  Video: 'Video',
  UserToVideoWithReaction: 'UserToVideoWithReaction',
  VideoComment: 'VideoComment'
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
