/*
  Warnings:

  - A unique constraint covering the columns `[choiceId]` on the table `QuizeGameRound` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `choiceId` to the `QuizeGameRound` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizeGameRound" ADD COLUMN     "choiceId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "QuizeGameRound_choiceId_key" ON "QuizeGameRound"("choiceId");

-- AddForeignKey
ALTER TABLE "QuizeGameRound" ADD CONSTRAINT "QuizeGameRound_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "QuizeChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
