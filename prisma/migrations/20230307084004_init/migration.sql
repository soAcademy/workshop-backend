-- CreateTable
CREATE TABLE "TwitterUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterPost" (
    "id" SERIAL NOT NULL,
    "post" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "twitterUserId" INTEGER NOT NULL,

    CONSTRAINT "TwitterPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterHashtag" (
    "id" SERIAL NOT NULL,
    "hashtag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterPostToHashtag" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "twitterPostId" INTEGER NOT NULL,
    "twitterHashtagId" INTEGER NOT NULL,

    CONSTRAINT "TwitterPostToHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterDirectMessage" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "followingUserId" INTEGER NOT NULL,
    "followerUserId" INTEGER NOT NULL,

    CONSTRAINT "TwitterDirectMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterUserRelation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,

    CONSTRAINT "TwitterUserRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterComment" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "twitterPostId" INTEGER NOT NULL,
    "twitterUserId" INTEGER NOT NULL,

    CONSTRAINT "TwitterComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TwitterUser_name_key" ON "TwitterUser"("name");

-- AddForeignKey
ALTER TABLE "TwitterPost" ADD CONSTRAINT "TwitterPost_twitterUserId_fkey" FOREIGN KEY ("twitterUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPostToHashtag" ADD CONSTRAINT "TwitterPostToHashtag_twitterPostId_fkey" FOREIGN KEY ("twitterPostId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPostToHashtag" ADD CONSTRAINT "TwitterPostToHashtag_twitterHashtagId_fkey" FOREIGN KEY ("twitterHashtagId") REFERENCES "TwitterHashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDirectMessage" ADD CONSTRAINT "TwitterDirectMessage_followingUserId_fkey" FOREIGN KEY ("followingUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDirectMessage" ADD CONSTRAINT "TwitterDirectMessage_followerUserId_fkey" FOREIGN KEY ("followerUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUserRelation" ADD CONSTRAINT "TwitterUserRelation_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUserRelation" ADD CONSTRAINT "TwitterUserRelation_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterComment" ADD CONSTRAINT "TwitterComment_twitterPostId_fkey" FOREIGN KEY ("twitterPostId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterComment" ADD CONSTRAINT "TwitterComment_twitterUserId_fkey" FOREIGN KEY ("twitterUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
