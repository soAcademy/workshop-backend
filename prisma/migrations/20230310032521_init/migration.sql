/*
  Warnings:

  - You are about to drop the column `playerId` on the `Round` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `playerName` to the `Round` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Round" DROP CONSTRAINT "Round_playerId_fkey";

-- AlterTable
ALTER TABLE "Round" DROP COLUMN "playerId",
ADD COLUMN     "playerName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_playerName_fkey" FOREIGN KEY ("playerName") REFERENCES "Player"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
