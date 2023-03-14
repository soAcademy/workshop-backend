/*
  Warnings:

  - A unique constraint covering the columns `[hashTagText]` on the table `HashTag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HashTag_hashTagText_key" ON "twitter"."HashTag"("hashTagText");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "twitter"."User"("name");
