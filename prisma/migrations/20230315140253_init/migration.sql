-- CreateTable
CREATE TABLE "MeetingUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profileImage" TEXT,
    "postion" TEXT,
    "bio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingUserBooked" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "meetingRoomId" INTEGER NOT NULL,
    "meetingDetail" TEXT,
    "bookingStart" TIMESTAMP(3) NOT NULL,
    "bookingEnd" TIMESTAMP(3) NOT NULL,
    "nameOfBooker" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingUserBooked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingMembers" (
    "id" SERIAL NOT NULL,
    "bookedId" INTEGER NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "tel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "meetingRoomBookedId" INTEGER,

    CONSTRAINT "MeetingMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingUserAvailable" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "availableStart" TIMESTAMP(3) NOT NULL,
    "availableEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingUserAvailable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingRoom" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "floor" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingRoomBooked" (
    "id" SERIAL NOT NULL,
    "meetingRoomId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookingStart" TIMESTAMP(3) NOT NULL,
    "bookingEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingRoomBooked_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MeetingUserBooked" ADD CONSTRAINT "MeetingUserBooked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MeetingUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingUserBooked" ADD CONSTRAINT "MeetingUserBooked_meetingRoomId_fkey" FOREIGN KEY ("meetingRoomId") REFERENCES "MeetingRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingMembers" ADD CONSTRAINT "MeetingMembers_bookedId_fkey" FOREIGN KEY ("bookedId") REFERENCES "MeetingUserBooked"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingMembers" ADD CONSTRAINT "MeetingMembers_meetingRoomBookedId_fkey" FOREIGN KEY ("meetingRoomBookedId") REFERENCES "MeetingRoomBooked"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingUserAvailable" ADD CONSTRAINT "MeetingUserAvailable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MeetingUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingRoomBooked" ADD CONSTRAINT "MeetingRoomBooked_meetingRoomId_fkey" FOREIGN KEY ("meetingRoomId") REFERENCES "MeetingRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingRoomBooked" ADD CONSTRAINT "MeetingRoomBooked_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MeetingUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
