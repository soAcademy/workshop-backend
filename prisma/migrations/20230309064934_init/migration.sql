-- CreateEnum
CREATE TYPE "FacebookLikeTypeEnum" AS ENUM ('SAD', 'LIKE', 'LOVE', 'CARE', 'ANGRY', 'HAHA', 'WOW');

-- CreateEnum
CREATE TYPE "ReactionEnum" AS ENUM ('LIKE', 'DISELIKE');

-- CreateTable
CREATE TABLE "BinKitchenCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BinKitchenCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinKitchenMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BinKitchenMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinKitchenOrder" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "tableId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BinKitchenOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BinKitchenOrderItem" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "orderId" INTEGER,
    "quantity" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BinKitchenOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizQuestion" (
    "id" SERIAL NOT NULL,
    "questName" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "answerChoiceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizChoice" (
    "id" SERIAL NOT NULL,
    "choiceName" TEXT NOT NULL,
    "questionId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizRoundQuestion" (
    "id" SERIAL NOT NULL,
    "userChoiceId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "roundId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizRoundQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizRound" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "image" TEXT,
    "coverImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookUserRelationship" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookUserRelationship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookDirectMessage" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "image" TEXT,
    "readStatus" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookDirectMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookLocation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookHashtag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookLike" (
    "id" SERIAL NOT NULL,
    "type" "FacebookLikeTypeEnum" NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookShareType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookShareType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookUserInGroup" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookUserInGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookPostDestination" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "postId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookPostDestination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookPost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT,
    "image" TEXT,
    "locationId" INTEGER NOT NULL,
    "hashtagId" INTEGER NOT NULL,
    "shareToId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookCommentPost" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT,
    "image" TEXT,
    "commentToId" INTEGER,
    "shareToId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookCommentPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterPost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterUserRelationship" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterUserRelationship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterHashtag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterPostAndHashtag" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "hashtagId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterPostAndHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterReplyPost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "image" TEXT,
    "postId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterReplyPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterDirectMessage" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterDirectMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeRole" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeChannel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "image" TEXT,
    "coverImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeUserToChannel" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeUserToChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeVideo" (
    "id" SERIAL NOT NULL,
    "channelId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "urlFile" TEXT NOT NULL,
    "coverImage" TEXT,
    "descriptions" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeSubscriber" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "membership" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeSubscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeReaction" (
    "id" SERIAL NOT NULL,
    "type" "ReactionEnum" NOT NULL,
    "userId" INTEGER NOT NULL,
    "videoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YoutubeComment" (
    "id" SERIAL NOT NULL,
    "videoId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "commentToId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YoutubeComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunderBranchInfo" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "areaSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaunderBranchInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunderMachine" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "Capacity" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "serialNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaunderMachine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryMachineInStore" (
    "id" SERIAL NOT NULL,
    "branchId" INTEGER NOT NULL,
    "machineId" INTEGER NOT NULL,
    "mfd" TEXT NOT NULL,
    "Warranty" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaundryMachineInStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunderTechnician" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "image" TEXT,
    "phone" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaunderTechnician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunderServiceHistory" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "machineId" INTEGER NOT NULL,
    "technicianId" INTEGER NOT NULL,
    "descriptions" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaunderServiceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunderWashingProgram" (
    "id" SERIAL NOT NULL,
    "program" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "capacityLimit" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaunderWashingProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunderProgramInMachine" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaunderProgramInMachine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaunderUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "walletBalance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaunderUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryTopupHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaundryTopupHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryWashingHistory" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaundryWashingHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryStudent" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryStudent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryUniversity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryUniversity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryAuthor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBook" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isbn" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBookCategory" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBookCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBookAuthor" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBookAuthor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBookCopy" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "universityId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBookCopy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryRequest" (
    "id" SERIAL NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL,
    "bookId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "fromUniversityId" INTEGER NOT NULL,
    "toUniversityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryBorrowing" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL,
    "actualReturnDate" TIMESTAMP(3) NOT NULL,
    "studentId" INTEGER NOT NULL,
    "universityId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LibraryBorrowing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TodoList" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TodoList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BinKitchenCategory_name_key" ON "BinKitchenCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "QuizCategory_name_key" ON "QuizCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "QuizQuestion_answerChoiceId_key" ON "QuizQuestion"("answerChoiceId");

-- CreateIndex
CREATE UNIQUE INDEX "FacebookUser_username_key" ON "FacebookUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "FacebookLocation_name_key" ON "FacebookLocation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FacebookGroup_name_key" ON "FacebookGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterUser_username_key" ON "TwitterUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeUser_username_key" ON "YoutubeUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeUser_email_key" ON "YoutubeUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeRole_role_key" ON "YoutubeRole"("role");

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeChannel_name_key" ON "YoutubeChannel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LaunderBranchInfo_phone_key" ON "LaunderBranchInfo"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryCategory_name_key" ON "LibraryCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryAuthor_name_key" ON "LibraryAuthor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LibraryBook_isbn_key" ON "LibraryBook"("isbn");

-- AddForeignKey
ALTER TABLE "BinKitchenMenu" ADD CONSTRAINT "BinKitchenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "BinKitchenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinKitchenOrderItem" ADD CONSTRAINT "BinKitchenOrderItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "BinKitchenMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BinKitchenOrderItem" ADD CONSTRAINT "BinKitchenOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "BinKitchenOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "QuizCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_answerChoiceId_fkey" FOREIGN KEY ("answerChoiceId") REFERENCES "QuizChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizChoice" ADD CONSTRAINT "QuizChoice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuizQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizRoundQuestion" ADD CONSTRAINT "QuizRoundQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuizQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizRoundQuestion" ADD CONSTRAINT "QuizRoundQuestion_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "QuizRound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizRound" ADD CONSTRAINT "QuizRound_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "QuizCategory"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookUserRelationship" ADD CONSTRAINT "FacebookUserRelationship_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookUserRelationship" ADD CONSTRAINT "FacebookUserRelationship_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookDirectMessage" ADD CONSTRAINT "FacebookDirectMessage_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookDirectMessage" ADD CONSTRAINT "FacebookDirectMessage_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookLike" ADD CONSTRAINT "FacebookLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookLike" ADD CONSTRAINT "FacebookLike_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FacebookPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookUserInGroup" ADD CONSTRAINT "FacebookUserInGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookUserInGroup" ADD CONSTRAINT "FacebookUserInGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "FacebookGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPostDestination" ADD CONSTRAINT "FacebookPostDestination_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPostDestination" ADD CONSTRAINT "FacebookPostDestination_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "FacebookGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPostDestination" ADD CONSTRAINT "FacebookPostDestination_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FacebookPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPost" ADD CONSTRAINT "FacebookPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPost" ADD CONSTRAINT "FacebookPost_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "FacebookLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPost" ADD CONSTRAINT "FacebookPost_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "FacebookHashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPost" ADD CONSTRAINT "FacebookPost_shareToId_fkey" FOREIGN KEY ("shareToId") REFERENCES "FacebookShareType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookCommentPost" ADD CONSTRAINT "FacebookCommentPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FacebookPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookCommentPost" ADD CONSTRAINT "FacebookCommentPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookCommentPost" ADD CONSTRAINT "FacebookCommentPost_commentToId_fkey" FOREIGN KEY ("commentToId") REFERENCES "FacebookCommentPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookCommentPost" ADD CONSTRAINT "FacebookCommentPost_shareToId_fkey" FOREIGN KEY ("shareToId") REFERENCES "FacebookShareType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPost" ADD CONSTRAINT "TwitterPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUserRelationship" ADD CONSTRAINT "TwitterUserRelationship_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUserRelationship" ADD CONSTRAINT "TwitterUserRelationship_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPostAndHashtag" ADD CONSTRAINT "TwitterPostAndHashtag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPostAndHashtag" ADD CONSTRAINT "TwitterPostAndHashtag_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "TwitterHashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterReplyPost" ADD CONSTRAINT "TwitterReplyPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterReplyPost" ADD CONSTRAINT "TwitterReplyPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDirectMessage" ADD CONSTRAINT "TwitterDirectMessage_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDirectMessage" ADD CONSTRAINT "TwitterDirectMessage_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeUserToChannel" ADD CONSTRAINT "YoutubeUserToChannel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeUserToChannel" ADD CONSTRAINT "YoutubeUserToChannel_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "YoutubeRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeUserToChannel" ADD CONSTRAINT "YoutubeUserToChannel_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "YoutubeChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeVideo" ADD CONSTRAINT "YoutubeVideo_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "YoutubeChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeSubscriber" ADD CONSTRAINT "YoutubeSubscriber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeSubscriber" ADD CONSTRAINT "YoutubeSubscriber_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "YoutubeChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeReaction" ADD CONSTRAINT "YoutubeReaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeReaction" ADD CONSTRAINT "YoutubeReaction_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "YoutubeVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeComment" ADD CONSTRAINT "YoutubeComment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "YoutubeVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeComment" ADD CONSTRAINT "YoutubeComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YoutubeUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YoutubeComment" ADD CONSTRAINT "YoutubeComment_commentToId_fkey" FOREIGN KEY ("commentToId") REFERENCES "YoutubeComment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryMachineInStore" ADD CONSTRAINT "LaundryMachineInStore_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "LaunderBranchInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryMachineInStore" ADD CONSTRAINT "LaundryMachineInStore_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "LaunderMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaunderServiceHistory" ADD CONSTRAINT "LaunderServiceHistory_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "LaunderMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaunderServiceHistory" ADD CONSTRAINT "LaunderServiceHistory_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "LaunderTechnician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaunderProgramInMachine" ADD CONSTRAINT "LaunderProgramInMachine_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "LaundryMachineInStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaunderProgramInMachine" ADD CONSTRAINT "LaunderProgramInMachine_programId_fkey" FOREIGN KEY ("programId") REFERENCES "LaunderWashingProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryTopupHistory" ADD CONSTRAINT "LaundryTopupHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "LaunderUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryWashingHistory" ADD CONSTRAINT "LaundryWashingHistory_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "LaundryMachineInStore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryWashingHistory" ADD CONSTRAINT "LaundryWashingHistory_programId_fkey" FOREIGN KEY ("programId") REFERENCES "LaunderWashingProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCategory" ADD CONSTRAINT "LibraryBookCategory_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCategory" ADD CONSTRAINT "LibraryBookCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "LibraryCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookAuthor" ADD CONSTRAINT "LibraryBookAuthor_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookAuthor" ADD CONSTRAINT "LibraryBookAuthor_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "LibraryAuthor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBookCopy" ADD CONSTRAINT "LibraryBookCopy_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryRequest" ADD CONSTRAINT "LibraryRequest_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryRequest" ADD CONSTRAINT "LibraryRequest_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryRequest" ADD CONSTRAINT "LibraryRequest_fromUniversityId_fkey" FOREIGN KEY ("fromUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryRequest" ADD CONSTRAINT "LibraryRequest_toUniversityId_fkey" FOREIGN KEY ("toUniversityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBorrowing" ADD CONSTRAINT "LibraryBorrowing_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "LibraryBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBorrowing" ADD CONSTRAINT "LibraryBorrowing_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "LibraryStudent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryBorrowing" ADD CONSTRAINT "LibraryBorrowing_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "LibraryUniversity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
