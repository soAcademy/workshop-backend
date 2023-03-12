/*
  Warnings:

  - You are about to drop the column `answerChoiceId` on the `Question` table. All the data in the column will be lost.
  - Added the required column `answerChoice` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_answerChoiceId_fkey";

-- DropIndex
DROP INDEX "Question_answerChoiceId_key";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "answerChoiceId",
ADD COLUMN     "answerChoice" TEXT NOT NULL;
