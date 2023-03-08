/*
  Warnings:

  - Added the required column `wallId` to the `FbPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FbPost" ADD COLUMN     "wallId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "FbWall" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FbWall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FbDestinationUser" (
    "id" SERIAL NOT NULL,
    "fbWallId" INTEGER NOT NULL,
    "shareId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "FbDestinationUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WSUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "myWallet" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WSUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WSTopupHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "topup" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WSTopupHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WSUsingHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "usingStartAt" TIMESTAMP(3) NOT NULL,
    "finishingAt" TIMESTAMP(3) NOT NULL,
    "wSMachineId" INTEGER NOT NULL,
    "wSProgramId" INTEGER NOT NULL,

    CONSTRAINT "WSUsingHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WSShop" (
    "id" SERIAL NOT NULL,
    "branch" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WSShop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WSMachine" (
    "id" SERIAL NOT NULL,
    "shopId" INTEGER NOT NULL,
    "brandname" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "producedDate" TEXT NOT NULL,
    "insuranceExpiredDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WSMachine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WSProgram" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "activeProgramId" INTEGER NOT NULL,

    CONSTRAINT "WSProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MachineToProgram" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MachineToProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WSProgramDetail" (
    "id" SERIAL NOT NULL,
    "programId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WSProgramDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WSMaintain" (
    "id" SERIAL NOT NULL,
    "checker" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "machineId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WSMaintain_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FbPost" ADD CONSTRAINT "FbPost_wallId_fkey" FOREIGN KEY ("wallId") REFERENCES "FbWall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbDestinationUser" ADD CONSTRAINT "FbDestinationUser_fbWallId_fkey" FOREIGN KEY ("fbWallId") REFERENCES "FbWall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbDestinationUser" ADD CONSTRAINT "FbDestinationUser_shareId_fkey" FOREIGN KEY ("shareId") REFERENCES "FbShare"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FbDestinationUser" ADD CONSTRAINT "FbDestinationUser_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "FbGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WSTopupHistory" ADD CONSTRAINT "WSTopupHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WSUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WSUsingHistory" ADD CONSTRAINT "WSUsingHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WSUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WSUsingHistory" ADD CONSTRAINT "WSUsingHistory_wSMachineId_fkey" FOREIGN KEY ("wSMachineId") REFERENCES "WSMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WSUsingHistory" ADD CONSTRAINT "WSUsingHistory_wSProgramId_fkey" FOREIGN KEY ("wSProgramId") REFERENCES "WSProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WSMachine" ADD CONSTRAINT "WSMachine_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "WSShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WSProgram" ADD CONSTRAINT "WSProgram_activeProgramId_fkey" FOREIGN KEY ("activeProgramId") REFERENCES "WSProgramDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineToProgram" ADD CONSTRAINT "MachineToProgram_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "WSMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineToProgram" ADD CONSTRAINT "MachineToProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "WSProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WSProgramDetail" ADD CONSTRAINT "WSProgramDetail_programId_fkey" FOREIGN KEY ("programId") REFERENCES "WSProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WSMaintain" ADD CONSTRAINT "WSMaintain_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "WSMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
