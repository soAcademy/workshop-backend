/*
  Warnings:

  - Changed the type of `totalScore` on the `QuizRound` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "QuizRound" DROP COLUMN "totalScore",
ADD COLUMN     "totalScore" INTEGER NOT NULL;
