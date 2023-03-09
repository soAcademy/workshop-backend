/*
  Warnings:

  - You are about to drop the column `answerId` on the `TriviaQuiz` table. All the data in the column will be lost.
  - Added the required column `triviaChoiceId` to the `TriviaQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TriviaQuiz" DROP COLUMN "answerId",
ADD COLUMN     "triviaChoiceId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TriviaQuiz" ADD CONSTRAINT "TriviaQuiz_triviaChoiceId_fkey" FOREIGN KEY ("triviaChoiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
