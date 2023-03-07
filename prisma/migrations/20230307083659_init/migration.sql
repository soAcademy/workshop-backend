-- CreateTable
CREATE TABLE "TwitterUser" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterUserRelation" (
    "id" SERIAL NOT NULL,
    "followerId" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterUserRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterPost" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "postByUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterHashTag" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterHashTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterReply" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "postByUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterReply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterDM" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "directFromId" INTEGER NOT NULL,
    "directToId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TwitterDM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TwitterHashTagToTwitterPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TwitterUser_image_key" ON "TwitterUser"("image");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterUser_name_key" ON "TwitterUser"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_TwitterHashTagToTwitterPost_AB_unique" ON "_TwitterHashTagToTwitterPost"("A", "B");

-- CreateIndex
CREATE INDEX "_TwitterHashTagToTwitterPost_B_index" ON "_TwitterHashTagToTwitterPost"("B");

-- AddForeignKey
ALTER TABLE "TwitterUserRelation" ADD CONSTRAINT "TwitterUserRelation_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUserRelation" ADD CONSTRAINT "TwitterUserRelation_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterPost" ADD CONSTRAINT "TwitterPost_postByUserId_fkey" FOREIGN KEY ("postByUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterReply" ADD CONSTRAINT "TwitterReply_postId_fkey" FOREIGN KEY ("postId") REFERENCES "TwitterPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterReply" ADD CONSTRAINT "TwitterReply_postByUserId_fkey" FOREIGN KEY ("postByUserId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDM" ADD CONSTRAINT "TwitterDM_directFromId_fkey" FOREIGN KEY ("directFromId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterDM" ADD CONSTRAINT "TwitterDM_directToId_fkey" FOREIGN KEY ("directToId") REFERENCES "TwitterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TwitterHashTagToTwitterPost" ADD CONSTRAINT "_TwitterHashTagToTwitterPost_A_fkey" FOREIGN KEY ("A") REFERENCES "TwitterHashTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TwitterHashTagToTwitterPost" ADD CONSTRAINT "_TwitterHashTagToTwitterPost_B_fkey" FOREIGN KEY ("B") REFERENCES "TwitterPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
