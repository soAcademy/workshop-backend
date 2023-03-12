/*
  Warnings:

  - You are about to drop the column `roundId` on the `TriviaRoundQuestion` table. All the data in the column will be lost.
  - Added the required column `triviaRoundQuestionId` to the `TriviaRound` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TriviaRoundQuestion" DROP CONSTRAINT "TriviaRoundQuestion_roundId_fkey";

-- DropIndex
DROP INDEX "TriviaRoundQuestion_choiceId_key";

-- DropIndex
DROP INDEX "TriviaRoundQuestion_quizId_key";

-- AlterTable
ALTER TABLE "TriviaRound" ADD COLUMN     "triviaRoundQuestionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TriviaRoundQuestion" DROP COLUMN "roundId";

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_triviaRoundQuestionId_fkey" FOREIGN KEY ("triviaRoundQuestionId") REFERENCES "TriviaRoundQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
