/*
  Warnings:

  - You are about to drop the column `triviaChoiceId` on the `TriviaQuiz` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[triviaAnswerChoiceId]` on the table `TriviaQuiz` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `triviaAnswerChoiceId` to the `TriviaQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TriviaQuiz" DROP CONSTRAINT "TriviaQuiz_triviaChoiceId_fkey";

-- AlterTable
ALTER TABLE "TriviaQuiz" DROP COLUMN "triviaChoiceId",
ADD COLUMN     "triviaAnswerChoiceId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TriviaQuiz_triviaAnswerChoiceId_key" ON "TriviaQuiz"("triviaAnswerChoiceId");

-- AddForeignKey
ALTER TABLE "TriviaQuiz" ADD CONSTRAINT "TriviaQuiz_triviaAnswerChoiceId_fkey" FOREIGN KEY ("triviaAnswerChoiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
