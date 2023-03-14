/*
  Warnings:

  - You are about to drop the `TwitterPostAndHashtag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TwitterPostAndHashtag" DROP CONSTRAINT "TwitterPostAndHashtag_hashtagName_fkey";

-- DropForeignKey
ALTER TABLE "TwitterPostAndHashtag" DROP CONSTRAINT "TwitterPostAndHashtag_postId_fkey";

-- DropTable
DROP TABLE "TwitterPostAndHashtag";
