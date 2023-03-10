/*
  Warnings:

  - You are about to drop the `_quizanswer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answerId` to the `TriviaQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TriviaChoice" DROP CONSTRAINT "TriviaChoice_quizId_fkey";

-- DropForeignKey
ALTER TABLE "_quizanswer" DROP CONSTRAINT "_quizanswer_A_fkey";

-- DropForeignKey
ALTER TABLE "_quizanswer" DROP CONSTRAINT "_quizanswer_B_fkey";

-- AlterTable
ALTER TABLE "TriviaChoice" ALTER COLUMN "quizId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TriviaQuiz" ADD COLUMN     "answerId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_quizanswer";

-- AddForeignKey
ALTER TABLE "TriviaQuiz" ADD CONSTRAINT "TriviaQuiz_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaChoice" ADD CONSTRAINT "TriviaChoice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
