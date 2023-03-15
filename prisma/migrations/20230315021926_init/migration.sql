/*
  Warnings:

  - You are about to drop the `Reply` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_postId_fkey";

-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_userId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "replyToId" INTEGER;

-- DropTable
DROP TABLE "Reply";
