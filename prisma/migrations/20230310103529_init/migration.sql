/*
  Warnings:

  - You are about to drop the column `quizChoiceId` on the `QuizQuestion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "QuizQuestion" DROP CONSTRAINT "QuizQuestion_quizChoiceId_fkey";

-- DropIndex
DROP INDEX "QuizQuestion_quizChoiceId_key";

-- AlterTable
ALTER TABLE "QuizQuestion" DROP COLUMN "quizChoiceId";

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_quizAnswerChoiceId_fkey" FOREIGN KEY ("quizAnswerChoiceId") REFERENCES "QuizChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
