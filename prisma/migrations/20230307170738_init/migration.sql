-- CreateTable
CREATE TABLE "FacebookUser" (
    "id" SERIAL NOT NULL,
    "profileImage" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookGroup" (
    "id" SERIAL NOT NULL,
    "GroupImage" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createrUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookPostDestination" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookPostDestination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookPostType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookPostType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookLocation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookHashtag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookHashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookPost" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "postTypeId" INTEGER NOT NULL,
    "posterUserId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "destinationId" INTEGER NOT NULL,
    "destinationRelateId" INTEGER NOT NULL,
    "isShared" BOOLEAN NOT NULL,
    "shareFromPostId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookComment" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "commentByUserId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "isReplied" BOOLEAN NOT NULL,
    "replyFromCommentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookLikeType" (
    "id" SERIAL NOT NULL,
    "emoji" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookLikeType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookLikePost" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "posterUserId" INTEGER NOT NULL,
    "likeTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookLikePost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookLikeComment" (
    "id" SERIAL NOT NULL,
    "commentId" INTEGER NOT NULL,
    "posterUserId" INTEGER NOT NULL,
    "likeTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookLikeComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookFriendRequest" (
    "id" SERIAL NOT NULL,
    "requestFromUserId" INTEGER NOT NULL,
    "requestToUserId" INTEGER NOT NULL,
    "isAccepted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookFriendRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookUserRelation" (
    "id" SERIAL NOT NULL,
    "relationFromUserId" INTEGER NOT NULL,
    "relationToUserId" INTEGER NOT NULL,
    "isAccepted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookUserRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacebookMessenger" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "messageFromUserId" INTEGER NOT NULL,
    "messageToUserId" INTEGER NOT NULL,
    "isRead" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookMessenger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_member" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FacebookHashtagToFacebookPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "FacebookUser_name_key" ON "FacebookUser"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FacebookGroup_name_key" ON "FacebookGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_member_AB_unique" ON "_member"("A", "B");

-- CreateIndex
CREATE INDEX "_member_B_index" ON "_member"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FacebookHashtagToFacebookPost_AB_unique" ON "_FacebookHashtagToFacebookPost"("A", "B");

-- CreateIndex
CREATE INDEX "_FacebookHashtagToFacebookPost_B_index" ON "_FacebookHashtagToFacebookPost"("B");

-- AddForeignKey
ALTER TABLE "FacebookGroup" ADD CONSTRAINT "FacebookGroup_createrUserId_fkey" FOREIGN KEY ("createrUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPost" ADD CONSTRAINT "FacebookPost_postTypeId_fkey" FOREIGN KEY ("postTypeId") REFERENCES "FacebookPostType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPost" ADD CONSTRAINT "FacebookPost_posterUserId_fkey" FOREIGN KEY ("posterUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPost" ADD CONSTRAINT "FacebookPost_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "FacebookLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookPost" ADD CONSTRAINT "FacebookPost_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "FacebookPostDestination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookComment" ADD CONSTRAINT "FacebookComment_commentByUserId_fkey" FOREIGN KEY ("commentByUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookComment" ADD CONSTRAINT "FacebookComment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FacebookPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookLikePost" ADD CONSTRAINT "FacebookLikePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "FacebookPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookLikePost" ADD CONSTRAINT "FacebookLikePost_posterUserId_fkey" FOREIGN KEY ("posterUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookLikePost" ADD CONSTRAINT "FacebookLikePost_likeTypeId_fkey" FOREIGN KEY ("likeTypeId") REFERENCES "FacebookLikeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookLikeComment" ADD CONSTRAINT "FacebookLikeComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "FacebookPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookLikeComment" ADD CONSTRAINT "FacebookLikeComment_posterUserId_fkey" FOREIGN KEY ("posterUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookLikeComment" ADD CONSTRAINT "FacebookLikeComment_likeTypeId_fkey" FOREIGN KEY ("likeTypeId") REFERENCES "FacebookLikeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookFriendRequest" ADD CONSTRAINT "FacebookFriendRequest_requestFromUserId_fkey" FOREIGN KEY ("requestFromUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookFriendRequest" ADD CONSTRAINT "FacebookFriendRequest_requestToUserId_fkey" FOREIGN KEY ("requestToUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookUserRelation" ADD CONSTRAINT "FacebookUserRelation_relationFromUserId_fkey" FOREIGN KEY ("relationFromUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookUserRelation" ADD CONSTRAINT "FacebookUserRelation_relationToUserId_fkey" FOREIGN KEY ("relationToUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookMessenger" ADD CONSTRAINT "FacebookMessenger_messageFromUserId_fkey" FOREIGN KEY ("messageFromUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacebookMessenger" ADD CONSTRAINT "FacebookMessenger_messageToUserId_fkey" FOREIGN KEY ("messageToUserId") REFERENCES "FacebookUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_member" ADD CONSTRAINT "_member_A_fkey" FOREIGN KEY ("A") REFERENCES "FacebookGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_member" ADD CONSTRAINT "_member_B_fkey" FOREIGN KEY ("B") REFERENCES "FacebookUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacebookHashtagToFacebookPost" ADD CONSTRAINT "_FacebookHashtagToFacebookPost_A_fkey" FOREIGN KEY ("A") REFERENCES "FacebookHashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacebookHashtagToFacebookPost" ADD CONSTRAINT "_FacebookHashtagToFacebookPost_B_fkey" FOREIGN KEY ("B") REFERENCES "FacebookPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
