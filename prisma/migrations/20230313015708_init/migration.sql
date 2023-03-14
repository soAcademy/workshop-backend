/*
  Warnings:

  - You are about to drop the `BKAuthor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BKBorrowingHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BKCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BKCopy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BKRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BKReserveUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BKTitle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BKUniversity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbDestinationUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbHashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbLike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbMessenger` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbPostImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbPostOnHashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbPostVideo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbShare` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FbWall` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Fbfriend` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GroupToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenMenu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KorKitchenOrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MachineToProgram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TitleToAuthor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TitleToCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TodoList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UniversityToTitle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserToChannel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WSMachine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WSMaintain` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WSProgram` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WSProgramDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WSShop` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WSTopupHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WSUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WSUsingHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YTChannel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YTComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YTLike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YTShare` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YTSubscribe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YTUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YTVideo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BKBorrowingHistory" DROP CONSTRAINT "BKBorrowingHistory_copyId_fkey";

-- DropForeignKey
ALTER TABLE "BKBorrowingHistory" DROP CONSTRAINT "BKBorrowingHistory_fromUniversityId_fkey";

-- DropForeignKey
ALTER TABLE "BKBorrowingHistory" DROP CONSTRAINT "BKBorrowingHistory_reserveUserId_fkey";

-- DropForeignKey
ALTER TABLE "BKCopy" DROP CONSTRAINT "BKCopy_reserveUserId_fkey";

-- DropForeignKey
ALTER TABLE "BKCopy" DROP CONSTRAINT "BKCopy_titleId_fkey";

-- DropForeignKey
ALTER TABLE "BKRequest" DROP CONSTRAINT "BKRequest_copyId_fkey";

-- DropForeignKey
ALTER TABLE "BKRequest" DROP CONSTRAINT "BKRequest_fromUniversityId_fkey";

-- DropForeignKey
ALTER TABLE "BKRequest" DROP CONSTRAINT "BKRequest_reserveUserId_fkey";

-- DropForeignKey
ALTER TABLE "BKRequest" DROP CONSTRAINT "BKRequest_toUniversityId_fkey";

-- DropForeignKey
ALTER TABLE "BKReserveUser" DROP CONSTRAINT "BKReserveUser_universityId_fkey";

-- DropForeignKey
ALTER TABLE "FbComment" DROP CONSTRAINT "FbComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "FbDestinationUser" DROP CONSTRAINT "FbDestinationUser_fbWallId_fkey";

-- DropForeignKey
ALTER TABLE "FbDestinationUser" DROP CONSTRAINT "FbDestinationUser_groupId_fkey";

-- DropForeignKey
ALTER TABLE "FbDestinationUser" DROP CONSTRAINT "FbDestinationUser_shareId_fkey";

-- DropForeignKey
ALTER TABLE "FbLike" DROP CONSTRAINT "FbLike_commentId_fkey";

-- DropForeignKey
ALTER TABLE "FbLike" DROP CONSTRAINT "FbLike_postId_fkey";

-- DropForeignKey
ALTER TABLE "FbLike" DROP CONSTRAINT "FbLike_shareId_fkey";

-- DropForeignKey
ALTER TABLE "FbLike" DROP CONSTRAINT "FbLike_userId_fkey";

-- DropForeignKey
ALTER TABLE "FbMessenger" DROP CONSTRAINT "FbMessenger_fromuserId_fkey";

-- DropForeignKey
ALTER TABLE "FbMessenger" DROP CONSTRAINT "FbMessenger_toUserId_fkey";

-- DropForeignKey
ALTER TABLE "FbPost" DROP CONSTRAINT "FbPost_userId_fkey";

-- DropForeignKey
ALTER TABLE "FbPost" DROP CONSTRAINT "FbPost_wallId_fkey";

-- DropForeignKey
ALTER TABLE "FbPostImage" DROP CONSTRAINT "FbPostImage_postId_fkey";

-- DropForeignKey
ALTER TABLE "FbPostOnHashtag" DROP CONSTRAINT "FbPostOnHashtag_hashtagId_fkey";

-- DropForeignKey
ALTER TABLE "FbPostOnHashtag" DROP CONSTRAINT "FbPostOnHashtag_postId_fkey";

-- DropForeignKey
ALTER TABLE "FbPostVideo" DROP CONSTRAINT "FbPostVideo_postId_fkey";

-- DropForeignKey
ALTER TABLE "FbShare" DROP CONSTRAINT "FbShare_postId_fkey";

-- DropForeignKey
ALTER TABLE "FbShare" DROP CONSTRAINT "FbShare_userId_fkey";

-- DropForeignKey
ALTER TABLE "Fbfriend" DROP CONSTRAINT "Fbfriend_acceptId_fkey";

-- DropForeignKey
ALTER TABLE "Fbfriend" DROP CONSTRAINT "Fbfriend_requestId_fkey";

-- DropForeignKey
ALTER TABLE "GroupToUser" DROP CONSTRAINT "GroupToUser_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupToUser" DROP CONSTRAINT "GroupToUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "KorKitchenMenu" DROP CONSTRAINT "KorKitchenMenu_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "KorKitchenOrderItem" DROP CONSTRAINT "KorKitchenOrderItem_menuId_fkey";

-- DropForeignKey
ALTER TABLE "KorKitchenOrderItem" DROP CONSTRAINT "KorKitchenOrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "MachineToProgram" DROP CONSTRAINT "MachineToProgram_machineId_fkey";

-- DropForeignKey
ALTER TABLE "MachineToProgram" DROP CONSTRAINT "MachineToProgram_programId_fkey";

-- DropForeignKey
ALTER TABLE "TitleToAuthor" DROP CONSTRAINT "TitleToAuthor_authorId_fkey";

-- DropForeignKey
ALTER TABLE "TitleToAuthor" DROP CONSTRAINT "TitleToAuthor_titleId_fkey";

-- DropForeignKey
ALTER TABLE "TitleToCategory" DROP CONSTRAINT "TitleToCategory_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "TitleToCategory" DROP CONSTRAINT "TitleToCategory_titleId_fkey";

-- DropForeignKey
ALTER TABLE "UniversityToTitle" DROP CONSTRAINT "UniversityToTitle_titleId_fkey";

-- DropForeignKey
ALTER TABLE "UniversityToTitle" DROP CONSTRAINT "UniversityToTitle_universityId_fkey";

-- DropForeignKey
ALTER TABLE "UserToChannel" DROP CONSTRAINT "UserToChannel_channelId_fkey";

-- DropForeignKey
ALTER TABLE "UserToChannel" DROP CONSTRAINT "UserToChannel_userId_fkey";

-- DropForeignKey
ALTER TABLE "WSMachine" DROP CONSTRAINT "WSMachine_shopId_fkey";

-- DropForeignKey
ALTER TABLE "WSMaintain" DROP CONSTRAINT "WSMaintain_machineId_fkey";

-- DropForeignKey
ALTER TABLE "WSProgram" DROP CONSTRAINT "WSProgram_activeProgramId_fkey";

-- DropForeignKey
ALTER TABLE "WSProgramDetail" DROP CONSTRAINT "WSProgramDetail_programId_fkey";

-- DropForeignKey
ALTER TABLE "WSTopupHistory" DROP CONSTRAINT "WSTopupHistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "WSUsingHistory" DROP CONSTRAINT "WSUsingHistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "WSUsingHistory" DROP CONSTRAINT "WSUsingHistory_wSMachineId_fkey";

-- DropForeignKey
ALTER TABLE "WSUsingHistory" DROP CONSTRAINT "WSUsingHistory_wSProgramId_fkey";

-- DropForeignKey
ALTER TABLE "YTComment" DROP CONSTRAINT "YTComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "YTComment" DROP CONSTRAINT "YTComment_videoId_fkey";

-- DropForeignKey
ALTER TABLE "YTLike" DROP CONSTRAINT "YTLike_commentId_fkey";

-- DropForeignKey
ALTER TABLE "YTLike" DROP CONSTRAINT "YTLike_videoId_fkey";

-- DropForeignKey
ALTER TABLE "YTShare" DROP CONSTRAINT "YTShare_userId_fkey";

-- DropForeignKey
ALTER TABLE "YTShare" DROP CONSTRAINT "YTShare_videoId_fkey";

-- DropForeignKey
ALTER TABLE "YTSubscribe" DROP CONSTRAINT "YTSubscribe_channelId_fkey";

-- DropForeignKey
ALTER TABLE "YTSubscribe" DROP CONSTRAINT "YTSubscribe_userId_fkey";

-- DropForeignKey
ALTER TABLE "YTVideo" DROP CONSTRAINT "YTVideo_channelId_fkey";

-- DropTable
DROP TABLE "BKAuthor";

-- DropTable
DROP TABLE "BKBorrowingHistory";

-- DropTable
DROP TABLE "BKCategory";

-- DropTable
DROP TABLE "BKCopy";

-- DropTable
DROP TABLE "BKRequest";

-- DropTable
DROP TABLE "BKReserveUser";

-- DropTable
DROP TABLE "BKTitle";

-- DropTable
DROP TABLE "BKUniversity";

-- DropTable
DROP TABLE "FbComment";

-- DropTable
DROP TABLE "FbDestinationUser";

-- DropTable
DROP TABLE "FbGroup";

-- DropTable
DROP TABLE "FbHashtag";

-- DropTable
DROP TABLE "FbLike";

-- DropTable
DROP TABLE "FbMessenger";

-- DropTable
DROP TABLE "FbPost";

-- DropTable
DROP TABLE "FbPostImage";

-- DropTable
DROP TABLE "FbPostOnHashtag";

-- DropTable
DROP TABLE "FbPostVideo";

-- DropTable
DROP TABLE "FbShare";

-- DropTable
DROP TABLE "FbUser";

-- DropTable
DROP TABLE "FbWall";

-- DropTable
DROP TABLE "Fbfriend";

-- DropTable
DROP TABLE "GroupToUser";

-- DropTable
DROP TABLE "KorKitchenCategory";

-- DropTable
DROP TABLE "KorKitchenMenu";

-- DropTable
DROP TABLE "KorKitchenOrder";

-- DropTable
DROP TABLE "KorKitchenOrderItem";

-- DropTable
DROP TABLE "MachineToProgram";

-- DropTable
DROP TABLE "TestModel";

-- DropTable
DROP TABLE "TitleToAuthor";

-- DropTable
DROP TABLE "TitleToCategory";

-- DropTable
DROP TABLE "TodoList";

-- DropTable
DROP TABLE "UniversityToTitle";

-- DropTable
DROP TABLE "UserToChannel";

-- DropTable
DROP TABLE "WSMachine";

-- DropTable
DROP TABLE "WSMaintain";

-- DropTable
DROP TABLE "WSProgram";

-- DropTable
DROP TABLE "WSProgramDetail";

-- DropTable
DROP TABLE "WSShop";

-- DropTable
DROP TABLE "WSTopupHistory";

-- DropTable
DROP TABLE "WSUser";

-- DropTable
DROP TABLE "WSUsingHistory";

-- DropTable
DROP TABLE "YTChannel";

-- DropTable
DROP TABLE "YTComment";

-- DropTable
DROP TABLE "YTLike";

-- DropTable
DROP TABLE "YTShare";

-- DropTable
DROP TABLE "YTSubscribe";

-- DropTable
DROP TABLE "YTUser";

-- DropTable
DROP TABLE "YTVideo";

-- DropEnum
DROP TYPE "CopyStatusEnum";

-- DropEnum
DROP TYPE "RequestStatusEnum";

-- DropEnum
DROP TYPE "YTRoleEnum";
