-- CreateEnum
CREATE TYPE "venderList" AS ENUM ('TOSHIBA', 'SAMSUNG', 'HITACHI');

-- CreateEnum
CREATE TYPE "machineType" AS ENUM ('WASHER', 'DRYER');

-- CreateTable
CREATE TABLE "WashExpressOwner" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "call" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressMember" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "call" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressTopupHistory" (
    "id" SERIAL NOT NULL,
    "memberId" INTEGER NOT NULL,
    "topupAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressTopupHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressTechnician" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "call" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressTechnician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressBranch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressBranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressMachineBrand" (
    "id" SERIAL NOT NULL,
    "name" "venderList" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressMachineBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressMachineType" (
    "id" SERIAL NOT NULL,
    "name" "machineType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressMachineType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressMachineProgram" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "name" "machineType" NOT NULL,
    "timeMinites" INTEGER NOT NULL,
    "priceBath" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressMachineProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressMachineList" (
    "id" SERIAL NOT NULL,
    "brandId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "branchId" INTEGER NOT NULL,
    "installDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressMachineList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressServiceHistory" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "branchId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "recordedPrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressServiceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashExpressMaintenanceHistory" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "technicianId" INTEGER NOT NULL,
    "problem" TEXT NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL,
    "finishdate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashExpressMaintenanceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WashExpressMachineListToWashExpressMachineProgram" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "WashExpressOwner_name_key" ON "WashExpressOwner"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WashExpressOwner_call_key" ON "WashExpressOwner"("call");

-- CreateIndex
CREATE UNIQUE INDEX "WashExpressOwner_location_key" ON "WashExpressOwner"("location");

-- CreateIndex
CREATE UNIQUE INDEX "WashExpressMember_name_key" ON "WashExpressMember"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WashExpressMember_call_key" ON "WashExpressMember"("call");

-- CreateIndex
CREATE UNIQUE INDEX "WashExpressTechnician_name_key" ON "WashExpressTechnician"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WashExpressTechnician_call_key" ON "WashExpressTechnician"("call");

-- CreateIndex
CREATE UNIQUE INDEX "WashExpressBranch_name_key" ON "WashExpressBranch"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_WashExpressMachineListToWashExpressMachineProgram_AB_unique" ON "_WashExpressMachineListToWashExpressMachineProgram"("A", "B");

-- CreateIndex
CREATE INDEX "_WashExpressMachineListToWashExpressMachineProgram_B_index" ON "_WashExpressMachineListToWashExpressMachineProgram"("B");

-- AddForeignKey
ALTER TABLE "WashExpressTopupHistory" ADD CONSTRAINT "WashExpressTopupHistory_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "WashExpressMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressBranch" ADD CONSTRAINT "WashExpressBranch_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "WashExpressOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressMachineProgram" ADD CONSTRAINT "WashExpressMachineProgram_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "WashExpressMachineType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressMachineList" ADD CONSTRAINT "WashExpressMachineList_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "WashExpressMachineBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressMachineList" ADD CONSTRAINT "WashExpressMachineList_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "WashExpressMachineType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressMachineList" ADD CONSTRAINT "WashExpressMachineList_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "WashExpressBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressServiceHistory" ADD CONSTRAINT "WashExpressServiceHistory_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "WashExpressMachineList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressServiceHistory" ADD CONSTRAINT "WashExpressServiceHistory_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "WashExpressMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressServiceHistory" ADD CONSTRAINT "WashExpressServiceHistory_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "WashExpressBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressServiceHistory" ADD CONSTRAINT "WashExpressServiceHistory_programId_fkey" FOREIGN KEY ("programId") REFERENCES "WashExpressMachineProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressMaintenanceHistory" ADD CONSTRAINT "WashExpressMaintenanceHistory_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "WashExpressMachineList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashExpressMaintenanceHistory" ADD CONSTRAINT "WashExpressMaintenanceHistory_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "WashExpressTechnician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WashExpressMachineListToWashExpressMachineProgram" ADD CONSTRAINT "_WashExpressMachineListToWashExpressMachineProgram_A_fkey" FOREIGN KEY ("A") REFERENCES "WashExpressMachineList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WashExpressMachineListToWashExpressMachineProgram" ADD CONSTRAINT "_WashExpressMachineListToWashExpressMachineProgram_B_fkey" FOREIGN KEY ("B") REFERENCES "WashExpressMachineProgram"("id") ON DELETE CASCADE ON UPDATE CASCADE;
