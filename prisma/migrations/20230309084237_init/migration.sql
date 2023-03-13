/*
  Warnings:

  - You are about to drop the column `quizeAnswerId` on the `QuizeChoice` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[choiceId]` on the table `QuizeAnswer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `choiceId` to the `QuizeAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "QuizeChoice" DROP CONSTRAINT "QuizeChoice_quizeAnswerId_fkey";

-- DropIndex
DROP INDEX "QuizeChoice_quizeAnswerId_key";

-- AlterTable
ALTER TABLE "QuizeAnswer" ADD COLUMN     "choiceId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "QuizeChoice" DROP COLUMN "quizeAnswerId";

-- CreateIndex
CREATE UNIQUE INDEX "QuizeAnswer_choiceId_key" ON "QuizeAnswer"("choiceId");

-- AddForeignKey
ALTER TABLE "QuizeAnswer" ADD CONSTRAINT "QuizeAnswer_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "QuizeChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
