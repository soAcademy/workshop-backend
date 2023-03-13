/*
  Warnings:

  - A unique constraint covering the columns `[answerId]` on the table `QuizeGameRound` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `answerId` to the `QuizeGameRound` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizeGameRound" ADD COLUMN     "answerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "QuizeGameRound_answerId_key" ON "QuizeGameRound"("answerId");

-- AddForeignKey
ALTER TABLE "QuizeGameRound" ADD CONSTRAINT "QuizeGameRound_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "QuizeAnswer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
