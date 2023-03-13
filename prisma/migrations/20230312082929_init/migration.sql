/*
  Warnings:

  - You are about to drop the `_ChoiceToRound` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `isSelected` to the `ShuffledQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "binquiz"."_ChoiceToRound" DROP CONSTRAINT "_ChoiceToRound_A_fkey";

-- DropForeignKey
ALTER TABLE "binquiz"."_ChoiceToRound" DROP CONSTRAINT "_ChoiceToRound_B_fkey";

-- AlterTable
ALTER TABLE "binquiz"."ShuffledQuiz" ADD COLUMN     "isSelected" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "binquiz"."_ChoiceToRound";
