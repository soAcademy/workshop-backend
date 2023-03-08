/*
  Warnings:

  - Changed the type of `quizResult` on the `TriviaRoundQuestion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TriviaRoundQuestion" DROP COLUMN "quizResult",
ADD COLUMN     "quizResult" INTEGER NOT NULL;
