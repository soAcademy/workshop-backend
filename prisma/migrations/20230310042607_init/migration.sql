/*
  Warnings:

  - Made the column `quizId` on table `Choice` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "binquiz"."Choice" DROP CONSTRAINT "Choice_quizId_fkey";

-- AlterTable
ALTER TABLE "binquiz"."Choice" ALTER COLUMN "quizId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "binquiz"."Choice" ADD CONSTRAINT "Choice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "binquiz"."Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
