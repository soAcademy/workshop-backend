/*
  Warnings:

  - A unique constraint covering the columns `[fromUserId,toUserId]` on the table `Following` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Following_fromUserId_toUserId_key" ON "Following"("fromUserId", "toUserId");
