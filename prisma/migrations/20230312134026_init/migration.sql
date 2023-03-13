/*
  Warnings:

  - A unique constraint covering the columns `[questionId]` on the table `QuizeGameRound` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `questionId` to the `QuizeGameRound` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizeGameRound" ADD COLUMN     "questionId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "QuizeGameRound_questionId_key" ON "QuizeGameRound"("questionId");

-- AddForeignKey
ALTER TABLE "QuizeGameRound" ADD CONSTRAINT "QuizeGameRound_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QuizeQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
