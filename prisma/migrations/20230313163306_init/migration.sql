/*
  Warnings:

  - You are about to drop the `Choice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QuestionCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoundQuestionChoiceDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoundQuestionDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoundQuiz` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileImage` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_answerId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_questionCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestionChoiceDetail" DROP CONSTRAINT "RoundQuestionChoiceDetail_choiceId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestionChoiceDetail" DROP CONSTRAINT "RoundQuestionChoiceDetail_questionId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestionChoiceDetail" DROP CONSTRAINT "RoundQuestionChoiceDetail_roundQuizId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestionDetail" DROP CONSTRAINT "RoundQuestionDetail_questionId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestionDetail" DROP CONSTRAINT "RoundQuestionDetail_roundQuizId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuiz" DROP CONSTRAINT "RoundQuiz_questionCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuiz" DROP CONSTRAINT "RoundQuiz_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profileImage" TEXT NOT NULL;

-- DropTable
DROP TABLE "Choice";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "QuestionCategory";

-- DropTable
DROP TABLE "RoundQuestionChoiceDetail";

-- DropTable
DROP TABLE "RoundQuestionDetail";

-- DropTable
DROP TABLE "RoundQuiz";

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DirecMessage" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "fromUser" TEXT NOT NULL,
    "toUser" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DirecMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HashTag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HashTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HashTagOnPost" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "hashTagId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HashTagOnPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reply" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRelation" (
    "id" SERIAL NOT NULL,
    "fromId" INTEGER NOT NULL,
    "toId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRelation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HashTagOnPost" ADD CONSTRAINT "HashTagOnPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HashTagOnPost" ADD CONSTRAINT "HashTagOnPost_hashTagId_fkey" FOREIGN KEY ("hashTagId") REFERENCES "HashTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRelation" ADD CONSTRAINT "UserRelation_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRelation" ADD CONSTRAINT "UserRelation_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
