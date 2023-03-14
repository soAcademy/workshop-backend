
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

exports.Prisma.FacebookCommentPostScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  message: 'message',
  image: 'image',
  commentToId: 'commentToId',
  shareToId: 'shareToId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookDirectMessageScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  message: 'message',
  image: 'image',
  readStatus: 'readStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookGroupScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookLikeScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  userId: 'userId',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookLocationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookPostDestinationScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  userId: 'userId',
  groupId: 'groupId',
  postId: 'postId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookPostScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  message: 'message',
  image: 'image',
  locationId: 'locationId',
  hashtagId: 'hashtagId',
  shareToId: 'shareToId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookShareTypeScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookUserInGroupScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  groupId: 'groupId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookUserRelationshipScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.FacebookUserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  image: 'image',
  coverImage: 'coverImage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaunderBranchInfoScalarFieldEnum = makeEnum({
  id: 'id',
  owner: 'owner',
  phone: 'phone',
  location: 'location',
  areaSize: 'areaSize',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaunderMachineScalarFieldEnum = makeEnum({
  id: 'id',
  brand: 'brand',
  Capacity: 'Capacity',
  type: 'type',
  serialNumber: 'serialNumber',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaunderProgramInMachineScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId',
  programId: 'programId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaunderServiceHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  date: 'date',
  machineId: 'machineId',
  technicianId: 'technicianId',
  descriptions: 'descriptions',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaunderTechnicianScalarFieldEnum = makeEnum({
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  image: 'image',
  phone: 'phone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaunderUserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  phone: 'phone',
  walletBalance: 'walletBalance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaunderWashingProgramScalarFieldEnum = makeEnum({
  id: 'id',
  program: 'program',
  price: 'price',
  duration: 'duration',
  capacityLimit: 'capacityLimit',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaundryMachineInStoreScalarFieldEnum = makeEnum({
  id: 'id',
  branchId: 'branchId',
  machineId: 'machineId',
  mfd: 'mfd',
  Warranty: 'Warranty',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaundryTopupHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaundryWashingHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  machineId: 'machineId',
  programId: 'programId',
  date: 'date',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  bookId: 'bookId',
  authorId: 'authorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  bookId: 'bookId',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookCopyScalarFieldEnum = makeEnum({
  id: 'id',
  bookId: 'bookId',
  universityId: 'universityId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  isbn: 'isbn',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBorrowingScalarFieldEnum = makeEnum({
  id: 'id',
  bookId: 'bookId',
  borrowDate: 'borrowDate',
  returnDate: 'returnDate',
  actualReturnDate: 'actualReturnDate',
  studentId: 'studentId',
  universityId: 'universityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryRequestScalarFieldEnum = makeEnum({
  id: 'id',
  borrowDate: 'borrowDate',
  returnDate: 'returnDate',
  bookId: 'bookId',
  studentId: 'studentId',
  fromUniversityId: 'fromUniversityId',
  toUniversityId: 'toUniversityId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryStudentScalarFieldEnum = makeEnum({
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryUniversityScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
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

exports.Prisma.QuizChoiceScalarFieldEnum = makeEnum({
  id: 'id',
  choiceName: 'choiceName',
  questionId: 'questionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuizQuestionScalarFieldEnum = makeEnum({
  id: 'id',
  questName: 'questName',
  categoryId: 'categoryId',
  answerChoiceId: 'answerChoiceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuizRoundQuestionScalarFieldEnum = makeEnum({
  id: 'id',
  userChoiceId: 'userChoiceId',
  questionId: 'questionId',
  roundId: 'roundId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuizRoundScalarFieldEnum = makeEnum({
  id: 'id',
  user: 'user',
  categoryId: 'categoryId',
  score: 'score',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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

exports.Prisma.TwitterDirectMessageScalarFieldEnum = makeEnum({
  id: 'id',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId',
  message: 'message',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterPostScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  message: 'message',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterUserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeChannelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  descriptions: 'descriptions',
  image: 'image',
  coverImage: 'coverImage',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeCommentScalarFieldEnum = makeEnum({
  id: 'id',
  videoId: 'videoId',
  userId: 'userId',
  message: 'message',
  commentToId: 'commentToId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeReactionScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  userId: 'userId',
  videoId: 'videoId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeRoleScalarFieldEnum = makeEnum({
  id: 'id',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeSubscriberScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  channelId: 'channelId',
  membership: 'membership',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeUserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  email: 'email',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeUserToChannelScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  roleId: 'roleId',
  channelId: 'channelId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeVideoScalarFieldEnum = makeEnum({
  id: 'id',
  channelId: 'channelId',
  name: 'name',
  urlFile: 'urlFile',
  coverImage: 'coverImage',
  descriptions: 'descriptions',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});
exports.FacebookLikeTypeEnum = makeEnum({
  SAD: 'SAD',
  LIKE: 'LIKE',
  LOVE: 'LOVE',
  CARE: 'CARE',
  ANGRY: 'ANGRY',
  HAHA: 'HAHA',
  WOW: 'WOW'
});

exports.ReactionEnum = makeEnum({
  LIKE: 'LIKE',
  DISELIKE: 'DISELIKE'
});

exports.Prisma.ModelName = makeEnum({
  BinKitchenCategory: 'BinKitchenCategory',
  BinKitchenMenu: 'BinKitchenMenu',
  BinKitchenOrder: 'BinKitchenOrder',
  BinKitchenOrderItem: 'BinKitchenOrderItem',
  QuizCategory: 'QuizCategory',
  QuizQuestion: 'QuizQuestion',
  QuizChoice: 'QuizChoice',
  QuizRoundQuestion: 'QuizRoundQuestion',
  QuizRound: 'QuizRound',
  FacebookUser: 'FacebookUser',
  FacebookUserRelationship: 'FacebookUserRelationship',
  FacebookDirectMessage: 'FacebookDirectMessage',
  FacebookLocation: 'FacebookLocation',
  FacebookHashtag: 'FacebookHashtag',
  FacebookLike: 'FacebookLike',
  FacebookShareType: 'FacebookShareType',
  FacebookGroup: 'FacebookGroup',
  FacebookUserInGroup: 'FacebookUserInGroup',
  FacebookPostDestination: 'FacebookPostDestination',
  FacebookPost: 'FacebookPost',
  FacebookCommentPost: 'FacebookCommentPost',
  TwitterUser: 'TwitterUser',
  TwitterPost: 'TwitterPost',
  TwitterHashtag: 'TwitterHashtag',
  TwitterDirectMessage: 'TwitterDirectMessage',
  YoutubeUser: 'YoutubeUser',
  YoutubeRole: 'YoutubeRole',
  YoutubeChannel: 'YoutubeChannel',
  YoutubeUserToChannel: 'YoutubeUserToChannel',
  YoutubeVideo: 'YoutubeVideo',
  YoutubeSubscriber: 'YoutubeSubscriber',
  YoutubeReaction: 'YoutubeReaction',
  YoutubeComment: 'YoutubeComment',
  LaunderBranchInfo: 'LaunderBranchInfo',
  LaunderMachine: 'LaunderMachine',
  LaundryMachineInStore: 'LaundryMachineInStore',
  LaunderTechnician: 'LaunderTechnician',
  LaunderServiceHistory: 'LaunderServiceHistory',
  LaunderWashingProgram: 'LaunderWashingProgram',
  LaunderProgramInMachine: 'LaunderProgramInMachine',
  LaunderUser: 'LaunderUser',
  LaundryTopupHistory: 'LaundryTopupHistory',
  LaundryWashingHistory: 'LaundryWashingHistory',
  LibraryStudent: 'LibraryStudent',
  LibraryUniversity: 'LibraryUniversity',
  LibraryCategory: 'LibraryCategory',
  LibraryAuthor: 'LibraryAuthor',
  LibraryBook: 'LibraryBook',
  LibraryBookCategory: 'LibraryBookCategory',
  LibraryBookAuthor: 'LibraryBookAuthor',
  LibraryBookCopy: 'LibraryBookCopy',
  LibraryRequest: 'LibraryRequest',
  LibraryBorrowing: 'LibraryBorrowing',
  TodoList: 'TodoList'
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
