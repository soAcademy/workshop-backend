/*
  Warnings:

  - You are about to drop the `TriviaCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaChoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaRound` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaRoundQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterDirectMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterFollow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterHashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterPostOnHashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TriviaChoice" DROP CONSTRAINT "TriviaChoice_quizId_fkey";

-- DropForeignKey
ALTER TABLE "TriviaQuestion" DROP CONSTRAINT "TriviaQuestion_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "TriviaQuestion" DROP CONSTRAINT "TriviaQuestion_triviaAnswerChoiceId_fkey";

-- DropForeignKey
ALTER TABLE "TriviaRound" DROP CONSTRAINT "TriviaRound_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "TriviaRound" DROP CONSTRAINT "TriviaRound_userId_fkey";

-- DropForeignKey
ALTER TABLE "TriviaRoundQuestion" DROP CONSTRAINT "TriviaRoundQuestion_choiceId_fkey";

-- DropForeignKey
ALTER TABLE "TriviaRoundQuestion" DROP CONSTRAINT "TriviaRoundQuestion_quizId_fkey";

-- DropForeignKey
ALTER TABLE "TriviaRoundQuestion" DROP CONSTRAINT "TriviaRoundQuestion_roundId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterComment" DROP CONSTRAINT "TwitterComment_postId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterComment" DROP CONSTRAINT "TwitterComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterDirectMessage" DROP CONSTRAINT "TwitterDirectMessage_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterDirectMessage" DROP CONSTRAINT "TwitterDirectMessage_toUserId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterFollow" DROP CONSTRAINT "TwitterFollow_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterFollow" DROP CONSTRAINT "TwitterFollow_toUserId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterPost" DROP CONSTRAINT "TwitterPost_userId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterPostOnHashtag" DROP CONSTRAINT "TwitterPostOnHashtag_hashtagId_fkey";

-- DropForeignKey
ALTER TABLE "TwitterPostOnHashtag" DROP CONSTRAINT "TwitterPostOnHashtag_postId_fkey";

-- DropTable
DROP TABLE "TriviaCategory";

-- DropTable
DROP TABLE "TriviaChoice";

-- DropTable
DROP TABLE "TriviaQuestion";

-- DropTable
DROP TABLE "TriviaRound";

-- DropTable
DROP TABLE "TriviaRoundQuestion";

-- DropTable
DROP TABLE "TriviaUser";

-- DropTable
DROP TABLE "TwitterComment";

-- DropTable
DROP TABLE "TwitterDirectMessage";

-- DropTable
DROP TABLE "TwitterFollow";

-- DropTable
DROP TABLE "TwitterHashtag";

-- DropTable
DROP TABLE "TwitterPost";

-- DropTable
DROP TABLE "TwitterPostOnHashtag";

-- DropTable
DROP TABLE "TwitterUser";

-- CreateTable
CREATE TABLE "TodoList" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "note" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TodoList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestModel" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "Surname" TEXT NOT NULL,

    CONSTRAINT "TestModel_pkey" PRIMARY KEY ("id")
);
