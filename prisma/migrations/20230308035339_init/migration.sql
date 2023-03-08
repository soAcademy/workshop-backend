-- AlterTable
ALTER TABLE "FBPost" ALTER COLUMN "postDetail" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- CreateTable
CREATE TABLE "FBHashtag" (
    "id" SERIAL NOT NULL,
    "hashtag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FBHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FBPostOnHashtag" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "hashtagId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FBPostOnHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTUser" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTChanel" (
    "id" SERIAL NOT NULL,
    "chaneName" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTChanel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChanelOnUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "chanelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChanelOnUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTAdmin" (
    "id" SERIAL NOT NULL,
    "chanelId" INTEGER NOT NULL,
    "adminUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTAdminRole" (
    "id" SERIAL NOT NULL,
    "adminId" INTEGER NOT NULL,
    "roleName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTAdminRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTSubscribe" (
    "id" SERIAL NOT NULL,
    "chanelId" INTEGER NOT NULL,
    "subscribeUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTSubscribe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTVideo" (
    "id" SERIAL NOT NULL,
    "chanelId" INTEGER NOT NULL,
    "videoLink" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTComment" (
    "id" SERIAL NOT NULL,
    "videoId" INTEGER NOT NULL,
    "commentDetail" TEXT NOT NULL,
    "commentFromUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTSubComment" (
    "id" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "subCommentDetail" TEXT NOT NULL,
    "subCommentFromUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTSubComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FBPostOnHashtag" ADD CONSTRAINT "FBPostOnHashtag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FBPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FBPostOnHashtag" ADD CONSTRAINT "FBPostOnHashtag_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "FBHashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChanelOnUser" ADD CONSTRAINT "ChanelOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChanelOnUser" ADD CONSTRAINT "ChanelOnUser_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "YTChanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTAdmin" ADD CONSTRAINT "YTAdmin_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "YTChanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTAdmin" ADD CONSTRAINT "YTAdmin_adminUserId_fkey" FOREIGN KEY ("adminUserId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTAdminRole" ADD CONSTRAINT "YTAdminRole_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "YTAdmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTSubscribe" ADD CONSTRAINT "YTSubscribe_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "YTChanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTSubscribe" ADD CONSTRAINT "YTSubscribe_subscribeUserId_fkey" FOREIGN KEY ("subscribeUserId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTVideo" ADD CONSTRAINT "YTVideo_chanelId_fkey" FOREIGN KEY ("chanelId") REFERENCES "YTChanel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTComment" ADD CONSTRAINT "YTComment_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "YTVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTComment" ADD CONSTRAINT "YTComment_commentFromUserId_fkey" FOREIGN KEY ("commentFromUserId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTSubComment" ADD CONSTRAINT "YTSubComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "YTComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTSubComment" ADD CONSTRAINT "YTSubComment_subCommentFromUserId_fkey" FOREIGN KEY ("subCommentFromUserId") REFERENCES "YTUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
