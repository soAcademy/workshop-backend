/*
  Warnings:

  - A unique constraint covering the columns `[fromUserId,toUserId]` on the table `Friends` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Friends_fromUserId_toUserId_key" ON "Friends"("fromUserId", "toUserId");
