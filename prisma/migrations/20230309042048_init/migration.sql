/*
  Warnings:

  - You are about to drop the column `answerId` on the `QuizQuestion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[quizAnswerChoiceId]` on the table `QuizQuestion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[quizChoiceId]` on the table `QuizQuestion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `quizAnswerChoiceId` to the `QuizQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizChoiceId` to the `QuizQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "QuizChoice" DROP CONSTRAINT "QuizChoice_quizQuestionId_fkey";

-- AlterTable
ALTER TABLE "QuizChoice" ALTER COLUMN "quizQuestionId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QuizQuestion" DROP COLUMN "answerId",
ADD COLUMN     "quizAnswerChoiceId" INTEGER NOT NULL,
ADD COLUMN     "quizChoiceId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "QuizQuestion_quizAnswerChoiceId_key" ON "QuizQuestion"("quizAnswerChoiceId");

-- CreateIndex
CREATE UNIQUE INDEX "QuizQuestion_quizChoiceId_key" ON "QuizQuestion"("quizChoiceId");

-- AddForeignKey
ALTER TABLE "QuizQuestion" ADD CONSTRAINT "QuizQuestion_quizChoiceId_fkey" FOREIGN KEY ("quizChoiceId") REFERENCES "QuizChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizChoice" ADD CONSTRAINT "QuizChoice_quizQuestionId_fkey" FOREIGN KEY ("quizQuestionId") REFERENCES "QuizQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
