/*
  Warnings:

  - Made the column `quizResult` on table `TriviaRoundQuestion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TriviaRoundQuestion" ALTER COLUMN "quizResult" SET NOT NULL;
