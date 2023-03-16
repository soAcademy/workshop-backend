/*
  Warnings:

  - You are about to drop the column `meetingRoomBookedId` on the `MeetingMembers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MeetingMembers" DROP CONSTRAINT "MeetingMembers_meetingRoomBookedId_fkey";

-- AlterTable
ALTER TABLE "MeetingMembers" DROP COLUMN "meetingRoomBookedId";
