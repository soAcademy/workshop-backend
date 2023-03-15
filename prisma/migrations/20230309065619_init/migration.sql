/*
  Warnings:

  - You are about to drop the column `QuizAnswerId` on the `Quiz` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[quizAnswerId]` on the table `Quiz` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `quizAnswerId` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_QuizAnswerId_fkey";

-- DropIndex
DROP INDEX "Quiz_QuizAnswerId_key";

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "QuizAnswerId",
ADD COLUMN     "quizAnswerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_quizAnswerId_key" ON "Quiz"("quizAnswerId");

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_quizAnswerId_fkey" FOREIGN KEY ("quizAnswerId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
