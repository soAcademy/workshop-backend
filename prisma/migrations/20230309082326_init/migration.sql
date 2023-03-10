/*
  Warnings:

  - You are about to drop the column `categoryName` on the `QuizRound` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `QuizRound` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "QuizRound" DROP CONSTRAINT "QuizRound_categoryName_fkey";

-- AlterTable
ALTER TABLE "QuizRound" DROP COLUMN "categoryName",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "QuizRound" ADD CONSTRAINT "QuizRound_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "QuizCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
