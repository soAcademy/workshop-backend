/*
  Warnings:

  - You are about to drop the column `categoryId` on the `TriviaRound` table. All the data in the column will be lost.
  - You are about to drop the column `round` on the `TriviaRound` table. All the data in the column will be lost.
  - Added the required column `categoryName` to the `TriviaRound` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `TriviaRound` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TriviaRound" DROP CONSTRAINT "TriviaRound_categoryId_fkey";

-- AlterTable
ALTER TABLE "TriviaRound" DROP COLUMN "categoryId",
DROP COLUMN "round",
ADD COLUMN     "categoryName" TEXT NOT NULL,
ADD COLUMN     "user" TEXT NOT NULL,
ALTER COLUMN "score" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TriviaRound" ADD CONSTRAINT "TriviaRound_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "TriviaCategory"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
