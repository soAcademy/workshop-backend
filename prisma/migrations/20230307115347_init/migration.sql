-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "facebook";

-- CreateTable
CREATE TABLE "facebook"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook"."UserRelation" (
    "id" SERIAL NOT NULL,
    "followingUserId" INTEGER NOT NULL,
    "followedUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook"."Post" (
    "id" SERIAL NOT NULL,
    "postText" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook"."Comment" (
    "id" SERIAL NOT NULL,
    "commentText" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "replyToCommentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook"."HashTag" (
    "id" SERIAL NOT NULL,
    "hashTagText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HashTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook"."MessengerMessage" (
    "id" SERIAL NOT NULL,
    "messengerText" TEXT NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MessengerMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facebook"."_FacebookHashTagToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_replyToCommentId_key" ON "facebook"."Comment"("replyToCommentId");

-- CreateIndex
CREATE UNIQUE INDEX "_FacebookHashTagToPost_AB_unique" ON "facebook"."_FacebookHashTagToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_FacebookHashTagToPost_B_index" ON "facebook"."_FacebookHashTagToPost"("B");

-- AddForeignKey
ALTER TABLE "facebook"."UserRelation" ADD CONSTRAINT "UserRelation_followingUserId_fkey" FOREIGN KEY ("followingUserId") REFERENCES "facebook"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."UserRelation" ADD CONSTRAINT "UserRelation_followedUserId_fkey" FOREIGN KEY ("followedUserId") REFERENCES "facebook"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "facebook"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "facebook"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "facebook"."Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."Comment" ADD CONSTRAINT "Comment_replyToCommentId_fkey" FOREIGN KEY ("replyToCommentId") REFERENCES "facebook"."Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."MessengerMessage" ADD CONSTRAINT "MessengerMessage_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "facebook"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."MessengerMessage" ADD CONSTRAINT "MessengerMessage_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "facebook"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."_FacebookHashTagToPost" ADD CONSTRAINT "_FacebookHashTagToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "facebook"."HashTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facebook"."_FacebookHashTagToPost" ADD CONSTRAINT "_FacebookHashTagToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "facebook"."Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
