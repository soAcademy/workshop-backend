/*
  Warnings:

  - A unique constraint covering the columns `[followerId,followingId]` on the table `TwitterUserRelation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TwitterUserRelation_followerId_followingId_key" ON "TwitterUserRelation"("followerId", "followingId");
