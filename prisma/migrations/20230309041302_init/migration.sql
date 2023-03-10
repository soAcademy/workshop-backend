/*
  Warnings:

  - You are about to drop the column `answerId` on the `TriviaQuiz` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[answerChoiceId]` on the table `TriviaQuiz` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `answerChoiceId` to the `TriviaQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TriviaQuiz" DROP CONSTRAINT "TriviaQuiz_answerId_fkey";

-- AlterTable
ALTER TABLE "TriviaQuiz" DROP COLUMN "answerId",
ADD COLUMN     "answerChoiceId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TriviaQuiz_answerChoiceId_key" ON "TriviaQuiz"("answerChoiceId");

-- AddForeignKey
ALTER TABLE "TriviaQuiz" ADD CONSTRAINT "TriviaQuiz_answerChoiceId_fkey" FOREIGN KEY ("answerChoiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
