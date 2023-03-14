/*
  Warnings:

  - You are about to drop the `TwitterComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterDirectMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterFollow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterHashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterPostOnHashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TwitterUser` table. If the table is not empty, all the data it contains will be lost.

*/
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
CREATE TABLE "TriviaCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "TriviaCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaQuestion" (
    "id" SERIAL NOT NULL,
    "quiz" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "triviaAnswerChoiceId" INTEGER NOT NULL,

    CONSTRAINT "TriviaQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaChoice" (
    "id" SERIAL NOT NULL,
    "choice" TEXT NOT NULL,
    "quizId" INTEGER,

    CONSTRAINT "TriviaChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRoundQuestion" (
    "id" SERIAL NOT NULL,
    "quizId" INTEGER NOT NULL,
    "choiceId" INTEGER NOT NULL,
    "quizResult" INTEGER,
    "roundId" INTEGER NOT NULL,

    CONSTRAINT "TriviaRoundQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaRound" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "totalResult" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "roundNo" INTEGER NOT NULL,

    CONSTRAINT "TriviaRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaUser" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "TriviaUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TriviaQuestion_triviaAnswerChoiceId_key" ON "TriviaQuestion"("triviaAnswerChoiceId");

-- AddForeignKey
ALTER TABLE "TriviaQuestion" ADD CONSTRAINT "TriviaQuestion_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaQuestion" ADD CONSTRAINT "TriviaQuestion_triviaAnswerChoiceId_fkey" FOREIGN KEY ("triviaAnswerChoiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaChoice" ADD CONSTRAINT "TriviaChoice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRoundQuestion" ADD CONSTRAINT "TriviaRoundQuestion_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "TriviaRound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "TriviaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TriviaUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
