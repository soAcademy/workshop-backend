/*
  Warnings:

  - Changed the type of `role` on the `UserToChannelwithRole` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `reaction` on the `UserToVideoWithReaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "youtube"."RoleEnum" AS ENUM ('MANAGER', 'EDITOR', 'VIEWER');

-- CreateEnum
CREATE TYPE "youtube"."ReactionEnum" AS ENUM ('LIKE', 'DISLIKE');

-- AlterTable
ALTER TABLE "youtube"."UserToChannelwithRole" DROP COLUMN "role",
ADD COLUMN     "role" "youtube"."RoleEnum" NOT NULL;

-- AlterTable
ALTER TABLE "youtube"."UserToVideoWithReaction" DROP COLUMN "reaction",
ADD COLUMN     "reaction" "youtube"."ReactionEnum" NOT NULL;

-- DropEnum
DROP TYPE "youtube"."Reaction";

-- DropEnum
DROP TYPE "youtube"."Role";
