/*
  Warnings:

  - A unique constraint covering the columns `[replyToldId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `fromUser` on the `UserRelation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `toUser` on the `UserRelation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RoleEnum" AS ENUM ('Admin', 'Editor', 'Creater');

-- CreateEnum
CREATE TYPE "FeelingEnum" AS ENUM ('like', 'unlike');

-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "replyToldId" INTEGER,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "message" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserRelation" DROP COLUMN "fromUser",
ADD COLUMN     "fromUser" INTEGER NOT NULL,
DROP COLUMN "toUser",
ADD COLUMN     "toUser" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "UserYoutube" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageProfile" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserYoutube_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chanel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Chanel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "videoId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "chanelId" INTEGER,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "role" "RoleEnum" NOT NULL,
    "edit" BOOLEAN NOT NULL,
    "post" BOOLEAN NOT NULL,
    "delete" BOOLEAN NOT NULL,
    "upload" BOOLEAN NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,
    "chanelId" INTEGER,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserToChanel" (
    "id" SERIAL NOT NULL,
    "role" "RoleEnum" NOT NULL,
    "userId" INTEGER NOT NULL,
    "chanelId" INTEGER NOT NULL,
    "permissionId" INTEGER NOT NULL,

    CONSTRAINT "UserToChanel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_replyToldId_key" ON "Post"("replyToldId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chanel" ADD CONSTRAINT "Chanel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserYoutube"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserYoutube"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "Chanel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserYoutube"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "Chanel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToChanel" ADD CONSTRAINT "UserToChanel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserYoutube"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToChanel" ADD CONSTRAINT "UserToChanel_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "Chanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserToChanel" ADD CONSTRAINT "UserToChanel_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
