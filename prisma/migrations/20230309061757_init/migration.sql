/*
  Warnings:

  - You are about to drop the column `name` on the `QuizChoice` table. All the data in the column will be lost.
  - Added the required column `choice` to the `QuizChoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizChoice" DROP COLUMN "name",
ADD COLUMN     "choice" TEXT NOT NULL;
