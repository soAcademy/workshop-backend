/*
  Warnings:

  - Added the required column `quizCategoryId` to the `Round` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "binquiz"."Round" ADD COLUMN     "quizCategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "binquiz"."Round" ADD CONSTRAINT "Round_quizCategoryId_fkey" FOREIGN KEY ("quizCategoryId") REFERENCES "binquiz"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
