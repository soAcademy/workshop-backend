/*
  Warnings:

  - Made the column `score` on table `TriviaRound` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TriviaRound" ALTER COLUMN "score" SET NOT NULL;
