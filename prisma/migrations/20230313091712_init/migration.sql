/*
  Warnings:

  - You are about to drop the `TriviaCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaChoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaRound` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaRoundQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TriviaUser` table. If the table is not empty, all the data it contains will be lost.

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
