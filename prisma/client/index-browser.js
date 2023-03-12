
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
  quantity: 'quantity',
  totalPrice: 'totalPrice',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  menuId: 'menuId',
  orderId: 'orderId'
});

exports.Prisma.BinKitchenOrderScalarFieldEnum = makeEnum({
  id: 'id',
  tableId: 'tableId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaundryBalanceTopupScalarFieldEnum = makeEnum({
  id: 'id',
  topUpRound: 'topUpRound',
  topUpAmount: 'topUpAmount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  laundryUserId: 'laundryUserId'
});

exports.Prisma.LaundryBranchScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  machineAmount: 'machineAmount',
  owner: 'owner',
  tel: 'tel',
  location: 'location',
  areaSize: 'areaSize',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaundryMaintainanceScalarFieldEnum = makeEnum({
  id: 'id',
  round: 'round',
  date: 'date',
  damageLevel: 'damageLevel',
  description: 'description',
  technicianName: 'technicianName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  laundryWashingMachineId: 'laundryWashingMachineId'
});

exports.Prisma.LaundryProgramScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  price: 'price',
  duration: 'duration',
  weight: 'weight',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaundryUserHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  washNumber: 'washNumber',
  date: 'date',
  duration: 'duration',
  price: 'price',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  laundryUserId: 'laundryUserId',
  laundryWashingMachineId: 'laundryWashingMachineId',
  laundryProgramId: 'laundryProgramId'
});

exports.Prisma.LaundryUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  tel: 'tel',
  balance: 'balance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LaundryWashingMachineScalarFieldEnum = makeEnum({
  id: 'id',
  brand: 'brand',
  variant: 'variant',
  size: 'size',
  machineType: 'machineType',
  yearManufactured: 'yearManufactured',
  insuranceExpiryYear: 'insuranceExpiryYear',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  laundryBranchId: 'laundryBranchId'
});

exports.Prisma.LaundryWashingMachineToProgramScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  laundryWashingMachineId: 'laundryWashingMachineId',
  laundryProgramId: 'laundryProgramId'
});

exports.Prisma.LibraryBookAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookCopyScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  libraryBookId: 'libraryBookId',
  libraryUniversityId: 'libraryUniversityId',
  libraryStudentId: 'libraryStudentId'
});

exports.Prisma.LibraryBookScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  ISBN: 'ISBN',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LibraryBookToAuthorScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  libraryBookId: 'libraryBookId',
  libraryBookAuthorId: 'libraryBookAuthorId'
});

exports.Prisma.LibraryBorrowingHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  borrowDate: 'borrowDate',
  returnDate: 'returnDate',
  actualReturnDate: 'actualReturnDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  libraryStudentId: 'libraryStudentId',
  libraryBookCopyId: 'libraryBookCopyId',
  libraryUniversityId: 'libraryUniversityId'
});

exports.Prisma.LibraryCategoryToBookScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  libraryBookCategoryId: 'libraryBookCategoryId',
  libraryBookId: 'libraryBookId'
});

exports.Prisma.LibraryRequestScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  libraryStudentId: 'libraryStudentId',
  libraryBookCopyId: 'libraryBookCopyId',
  fromLibraryUniversityId: 'fromLibraryUniversityId',
  toLibraryUniversityId: 'toLibraryUniversityId'
});

exports.Prisma.LibraryStudentScalarFieldEnum = makeEnum({
  id: 'id',
  studentId: 'studentId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  libraryUniversityId: 'libraryUniversityId'
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
  choice: 'choice',
  quizQuestionId: 'quizQuestionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuizQuestionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  quizCategoryId: 'quizCategoryId',
  quizAnswerChoiceId: 'quizAnswerChoiceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuizRecordScalarFieldEnum = makeEnum({
  id: 'id',
  quizRoundId: 'quizRoundId',
  quizChoiceId: 'quizChoiceId',
  quizQuestionId: 'quizQuestionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QuizRoundScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  totalScore: 'totalScore',
  quizCategoryId: 'quizCategoryId',
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
  note: 'note',
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

exports.Prisma.TwitterCommentScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  twitterPostId: 'twitterPostId',
  twitterUserId: 'twitterUserId'
});

exports.Prisma.TwitterDirectMessageScalarFieldEnum = makeEnum({
  id: 'id',
  message: 'message',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  followingUserId: 'followingUserId',
  followerUserId: 'followerUserId'
});

exports.Prisma.TwitterHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  hashtag: 'hashtag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TwitterPostScalarFieldEnum = makeEnum({
  id: 'id',
  post: 'post',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  twitterUserId: 'twitterUserId'
});

exports.Prisma.TwitterPostToHashtagScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  twitterPostId: 'twitterPostId',
  twitterHashtagId: 'twitterHashtagId'
});

exports.Prisma.TwitterUserRelationScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  fromUserId: 'fromUserId',
  toUserId: 'toUserId'
});

exports.Prisma.TwitterUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeChannelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeCommentReactionScalarFieldEnum = makeEnum({
  id: 'id',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  youtubeUserId: 'youtubeUserId',
  youtubeChannelId: 'youtubeChannelId',
  youtubeVideoId: 'youtubeVideoId',
  youtubeCommentId: 'youtubeCommentId'
});

exports.Prisma.YoutubeCommentScalarFieldEnum = makeEnum({
  id: 'id',
  comment: 'comment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  youtubeVideoId: 'youtubeVideoId',
  youtubeUserId: 'youtubeUserId'
});

exports.Prisma.YoutubeReactionScalarFieldEnum = makeEnum({
  id: 'id',
  reaction: 'reaction',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  youtubeUserId: 'youtubeUserId',
  youtubeChannelId: 'youtubeChannelId',
  youtubeVideoId: 'youtubeVideoId',
  youtubeCommentId: 'youtubeCommentId'
});

exports.Prisma.YoutubeSubscriptionScalarFieldEnum = makeEnum({
  id: 'id',
  membership: 'membership',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  youtubeUserId: 'youtubeUserId',
  youtubeChannelId: 'youtubeChannelId'
});

exports.Prisma.YoutubeUserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.YoutubeUserToChannelScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  youtubeUserId: 'youtubeUserId',
  youtubeChannelId: 'youtubeChannelId'
});

exports.Prisma.YoutubeVideoScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  videoUrl: 'videoUrl',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  youtubeChannelId: 'youtubeChannelId'
});
exports.ReactionEnum = makeEnum({
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
});

exports.RoleEnum = makeEnum({
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  CREATOR: 'CREATOR'
});

exports.Prisma.ModelName = makeEnum({
  BinKitchenCategory: 'BinKitchenCategory',
  BinKitchenMenu: 'BinKitchenMenu',
  BinKitchenOrder: 'BinKitchenOrder',
  BinKitchenOrderItem: 'BinKitchenOrderItem',
  LaundryBranch: 'LaundryBranch',
  LaundryWashingMachine: 'LaundryWashingMachine',
  LaundryProgram: 'LaundryProgram',
  LaundryWashingMachineToProgram: 'LaundryWashingMachineToProgram',
  LaundryMaintainance: 'LaundryMaintainance',
  LaundryUser: 'LaundryUser',
  LaundryUserHistory: 'LaundryUserHistory',
  LaundryBalanceTopup: 'LaundryBalanceTopup',
  LibraryBookCategory: 'LibraryBookCategory',
  LibraryBook: 'LibraryBook',
  LibraryCategoryToBook: 'LibraryCategoryToBook',
  LibraryBookAuthor: 'LibraryBookAuthor',
  LibraryBookToAuthor: 'LibraryBookToAuthor',
  LibraryUniversity: 'LibraryUniversity',
  LibraryStudent: 'LibraryStudent',
  LibraryBookCopy: 'LibraryBookCopy',
  LibraryBorrowingHistory: 'LibraryBorrowingHistory',
  LibraryRequest: 'LibraryRequest',
  QuizCategory: 'QuizCategory',
  QuizQuestion: 'QuizQuestion',
  QuizChoice: 'QuizChoice',
  QuizRound: 'QuizRound',
  QuizRecord: 'QuizRecord',
  TodoList: 'TodoList',
  TwitterUser: 'TwitterUser',
  TwitterPost: 'TwitterPost',
  TwitterHashtag: 'TwitterHashtag',
  TwitterPostToHashtag: 'TwitterPostToHashtag',
  TwitterDirectMessage: 'TwitterDirectMessage',
  TwitterUserRelation: 'TwitterUserRelation',
  TwitterComment: 'TwitterComment',
  YoutubeUser: 'YoutubeUser',
  YoutubeChannel: 'YoutubeChannel',
  YoutubeSubscription: 'YoutubeSubscription',
  YoutubeUserToChannel: 'YoutubeUserToChannel',
  YoutubeVideo: 'YoutubeVideo',
  YoutubeReaction: 'YoutubeReaction',
  YoutubeComment: 'YoutubeComment',
  YoutubeCommentReaction: 'YoutubeCommentReaction'
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
