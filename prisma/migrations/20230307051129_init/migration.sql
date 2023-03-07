/*
  Warnings:

  - You are about to drop the column `choiceId` on the `Quiz` table. All the data in the column will be lost.
  - Added the required column `correctChoiceId` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "binquiz"."Quiz" DROP CONSTRAINT "Quiz_choiceId_fkey";

-- AlterTable
ALTER TABLE "binquiz"."Quiz" DROP COLUMN "choiceId",
ADD COLUMN     "correctChoiceId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "binquiz"."Quiz" ADD CONSTRAINT "Quiz_correctChoiceId_fkey" FOREIGN KEY ("correctChoiceId") REFERENCES "binquiz"."Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
