/*
  Warnings:

  - You are about to drop the column `quizeCategoryId` on the `QuizeGameRound` table. All the data in the column will be lost.
  - You are about to drop the column `quizeGameStartId` on the `QuizeGameRound` table. All the data in the column will be lost.
  - You are about to drop the column `quizeGameRoundId` on the `QuizeQuestion` table. All the data in the column will be lost.
  - You are about to drop the `QuizeGameStart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `score` to the `QuizeGameRound` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `QuizeGameRound` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "QuizeGameRound" DROP CONSTRAINT "QuizeGameRound_quizeCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "QuizeGameRound" DROP CONSTRAINT "QuizeGameRound_quizeGameStartId_fkey";

-- DropForeignKey
ALTER TABLE "QuizeQuestion" DROP CONSTRAINT "QuizeQuestion_quizeGameRoundId_fkey";

-- DropIndex
DROP INDEX "QuizeGameRound_quizeCategoryId_key";

-- AlterTable
ALTER TABLE "QuizeGameRound" DROP COLUMN "quizeCategoryId",
DROP COLUMN "quizeGameStartId",
ADD COLUMN     "score" INTEGER NOT NULL,
ADD COLUMN     "user" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "QuizeQuestion" DROP COLUMN "quizeGameRoundId";

-- DropTable
DROP TABLE "QuizeGameStart";
