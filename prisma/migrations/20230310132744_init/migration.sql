/*
  Warnings:

  - You are about to drop the column `roundId` on the `QuizeCategory` table. All the data in the column will be lost.
  - You are about to drop the column `roundId` on the `QuizeChoice` table. All the data in the column will be lost.
  - You are about to drop the column `roundId` on the `QuizeQuestion` table. All the data in the column will be lost.
  - You are about to drop the `Round` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QuizeCategory" DROP CONSTRAINT "QuizeCategory_roundId_fkey";

-- DropForeignKey
ALTER TABLE "QuizeChoice" DROP CONSTRAINT "QuizeChoice_roundId_fkey";

-- DropForeignKey
ALTER TABLE "QuizeQuestion" DROP CONSTRAINT "QuizeQuestion_roundId_fkey";

-- AlterTable
ALTER TABLE "QuizeCategory" DROP COLUMN "roundId";

-- AlterTable
ALTER TABLE "QuizeChoice" DROP COLUMN "roundId";

-- AlterTable
ALTER TABLE "QuizeQuestion" DROP COLUMN "roundId";

-- DropTable
DROP TABLE "Round";

-- CreateTable
CREATE TABLE "QuizeGameRound" (
    "id" SERIAL NOT NULL,
    "quizeCategoryId" INTEGER NOT NULL,
    "quizeGameStartId" INTEGER,

    CONSTRAINT "QuizeGameRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizeGameStart" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "QuizeGameStart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuizeGameRound_quizeCategoryId_key" ON "QuizeGameRound"("quizeCategoryId");

-- AddForeignKey
ALTER TABLE "QuizeGameRound" ADD CONSTRAINT "QuizeGameRound_quizeCategoryId_fkey" FOREIGN KEY ("quizeCategoryId") REFERENCES "QuizeCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizeGameRound" ADD CONSTRAINT "QuizeGameRound_quizeGameStartId_fkey" FOREIGN KEY ("quizeGameStartId") REFERENCES "QuizeGameStart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
