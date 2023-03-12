/*
  Warnings:

  - You are about to drop the column `name` on the `TriviaCategory` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `TriviaChoice` table. All the data in the column will be lost.
  - You are about to drop the column `answerId` on the `TriviaQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `TriviaQuestion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[triviaAnswerChoiceId]` on the table `TriviaQuestion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `TriviaCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `choice` to the `TriviaChoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quiz` to the `TriviaQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triviaAnswerChoiceId` to the `TriviaQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TriviaChoice" DROP CONSTRAINT "TriviaChoice_quizId_fkey";

-- DropIndex
DROP INDEX "TriviaCategory_name_key";

-- AlterTable
ALTER TABLE "TriviaCategory" DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TriviaChoice" DROP COLUMN "name",
ADD COLUMN     "choice" TEXT NOT NULL,
ALTER COLUMN "quizId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TriviaQuestion" DROP COLUMN "answerId",
DROP COLUMN "name",
ADD COLUMN     "quiz" TEXT NOT NULL,
ADD COLUMN     "triviaAnswerChoiceId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TriviaQuestion_triviaAnswerChoiceId_key" ON "TriviaQuestion"("triviaAnswerChoiceId");

-- AddForeignKey
ALTER TABLE "TriviaQuestion" ADD CONSTRAINT "TriviaQuestion_triviaAnswerChoiceId_fkey" FOREIGN KEY ("triviaAnswerChoiceId") REFERENCES "TriviaChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriviaChoice" ADD CONSTRAINT "TriviaChoice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "TriviaQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
