/*
  Warnings:

  - You are about to drop the column `questionId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `questionsId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the column `quizCatId` on the `Round` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Round` table. All the data in the column will be lost.
  - You are about to drop the `BinKitchenCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKitchenMenu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKitchenOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKitchenOrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DirectMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Following` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MessageToHashTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostReply` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuizCat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoundQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TodoList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Choice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BinKitchenMenu" DROP CONSTRAINT "BinKitchenMenu_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "BinKitchenOrderItem" DROP CONSTRAINT "BinKitchenOrderItem_menuId_fkey";

-- DropForeignKey
ALTER TABLE "BinKitchenOrderItem" DROP CONSTRAINT "BinKitchenOrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_questionId_fkey";

-- DropForeignKey
ALTER TABLE "DirectMessage" DROP CONSTRAINT "DirectMessage_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "DirectMessage" DROP CONSTRAINT "DirectMessage_toUserId_fkey";

-- DropForeignKey
ALTER TABLE "Following" DROP CONSTRAINT "Following_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "Following" DROP CONSTRAINT "Following_toUserId_fkey";

-- DropForeignKey
ALTER TABLE "MessageToHashTag" DROP CONSTRAINT "MessageToHashTag_hashtagId_fkey";

-- DropForeignKey
ALTER TABLE "MessageToHashTag" DROP CONSTRAINT "MessageToHashTag_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "PostReply" DROP CONSTRAINT "PostReply_postId_fkey";

-- DropForeignKey
ALTER TABLE "PostReply" DROP CONSTRAINT "PostReply_userId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_quizCatId_fkey";

-- DropForeignKey
ALTER TABLE "Round" DROP CONSTRAINT "Round_quizCatId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestion" DROP CONSTRAINT "RoundQuestion_choiceId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestion" DROP CONSTRAINT "RoundQuestion_questionId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestion" DROP CONSTRAINT "RoundQuestion_roundId_fkey";

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "questionId",
DROP COLUMN "questionsId",
DROP COLUMN "updateAt",
ADD COLUMN     "quizId" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Round" DROP COLUMN "quizCatId",
DROP COLUMN "score",
ADD COLUMN     "categoryId" INTEGER;

-- DropTable
DROP TABLE "BinKitchenCategory";

-- DropTable
DROP TABLE "BinKitchenMenu";

-- DropTable
DROP TABLE "BinKitchenOrder";

-- DropTable
DROP TABLE "BinKitchenOrderItem";

-- DropTable
DROP TABLE "DirectMessage";

-- DropTable
DROP TABLE "Following";

-- DropTable
DROP TABLE "Hashtag";

-- DropTable
DROP TABLE "MessageToHashTag";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "PostReply";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "QuizCat";

-- DropTable
DROP TABLE "RoundQuestion";

-- DropTable
DROP TABLE "TodoList";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" SERIAL NOT NULL,
    "quiz" TEXT NOT NULL,
    "categoryNameId" INTEGER,
    "QuizAnswerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundQuiz" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "roundId" INTEGER,
    "choiceId" INTEGER,
    "quizId" INTEGER,

    CONSTRAINT "RoundQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_category_key" ON "user"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_key" ON "Category"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_QuizAnswerId_key" ON "Quiz"("QuizAnswerId");

-- CreateIndex
CREATE UNIQUE INDEX "RoundQuiz_category_key" ON "RoundQuiz"("category");

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_QuizAnswerId_fkey" FOREIGN KEY ("QuizAnswerId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuiz" ADD CONSTRAINT "RoundQuiz_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuiz" ADD CONSTRAINT "RoundQuiz_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "Choice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuiz" ADD CONSTRAINT "RoundQuiz_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
