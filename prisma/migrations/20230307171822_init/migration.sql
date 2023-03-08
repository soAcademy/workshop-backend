-- CreateTable
CREATE TABLE "TwitterUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "directMessageId" INTEGER NOT NULL,
    "userRelationId" INTEGER NOT NULL,

    CONSTRAINT "TwitterUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterPost" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "TwitterPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterHashtag" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "TwitterHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterDirectMessage" (
    "id" SERIAL NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TwitterDirectMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterUserRelation" (
    "id" SERIAL NOT NULL,
    "follower" TEXT NOT NULL,
    "following" TEXT NOT NULL,

    CONSTRAINT "TwitterUserRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterPostReply" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TwitterPostReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostOnHashtag" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "hashtagId" INTEGER NOT NULL,

    CONSTRAINT "PostOnHashtag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TwitterUser" ADD CONSTRAINT "TwitterUser_directMessageId_fkey" FOREIGN KEY ("directMessageId") REFERENCES "TwitterDirectMessage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUser" ADD CONSTRAINT "TwitterUser_userRelationId_fkey" FOREIGN KEY ("userRelationId") REFERENCES "TwitterUserRelation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPostReply" ADD CONSTRAINT "TwitterPostReply_postId_fkey" FOREIGN KEY ("postId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPostReply" ADD CONSTRAINT "TwitterPostReply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostOnHashtag" ADD CONSTRAINT "PostOnHashtag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostOnHashtag" ADD CONSTRAINT "PostOnHashtag_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "TwitterHashtag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
