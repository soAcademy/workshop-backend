-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "binwash";

-- CreateEnum
CREATE TYPE "binwash"."WMTypeEnum" AS ENUM ('FRONT_LOAD', 'TOP_LOAD');

-- CreateTable
CREATE TABLE "binwash"."user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binwash"."Branch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "telephoneNo" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "binWashUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binwash"."WashingMachine" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" "binwash"."WMTypeEnum" NOT NULL,
    "capacity" DOUBLE PRECISION NOT NULL,
    "manufacturedYear" TIMESTAMP(3) NOT NULL,
    "warrantyEndDate" TIMESTAMP(3) NOT NULL,
    "branchId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingMachine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binwash"."WMProgram" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "maxCapacity" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WMProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binwash"."WMMaintenanceRecord" (
    "id" SERIAL NOT NULL,
    "washingMachineId" INTEGER NOT NULL,
    "maintenanceDateTime" TIMESTAMP(3) NOT NULL,
    "level" INTEGER NOT NULL,
    "details" TEXT NOT NULL,
    "binWashUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WMMaintenanceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binwash"."UsageRecord" (
    "id" SERIAL NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "binWashUserId" INTEGER NOT NULL,
    "washingMachineId" INTEGER NOT NULL,
    "wMProgramId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsageRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binwash"."TopUpRecord" (
    "id" SERIAL NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "binWashUserId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TopUpRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "binwash"."_WMProgramToWashingMachine" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_WMProgramToWashingMachine_AB_unique" ON "binwash"."_WMProgramToWashingMachine"("A", "B");

-- CreateIndex
CREATE INDEX "_WMProgramToWashingMachine_B_index" ON "binwash"."_WMProgramToWashingMachine"("B");

-- AddForeignKey
ALTER TABLE "binwash"."Branch" ADD CONSTRAINT "Branch_binWashUserId_fkey" FOREIGN KEY ("binWashUserId") REFERENCES "binwash"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."WashingMachine" ADD CONSTRAINT "WashingMachine_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "binwash"."Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."WMMaintenanceRecord" ADD CONSTRAINT "WMMaintenanceRecord_washingMachineId_fkey" FOREIGN KEY ("washingMachineId") REFERENCES "binwash"."WashingMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."WMMaintenanceRecord" ADD CONSTRAINT "WMMaintenanceRecord_binWashUserId_fkey" FOREIGN KEY ("binWashUserId") REFERENCES "binwash"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."UsageRecord" ADD CONSTRAINT "UsageRecord_binWashUserId_fkey" FOREIGN KEY ("binWashUserId") REFERENCES "binwash"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."UsageRecord" ADD CONSTRAINT "UsageRecord_washingMachineId_fkey" FOREIGN KEY ("washingMachineId") REFERENCES "binwash"."WashingMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."UsageRecord" ADD CONSTRAINT "UsageRecord_wMProgramId_fkey" FOREIGN KEY ("wMProgramId") REFERENCES "binwash"."WMProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."TopUpRecord" ADD CONSTRAINT "TopUpRecord_binWashUserId_fkey" FOREIGN KEY ("binWashUserId") REFERENCES "binwash"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."_WMProgramToWashingMachine" ADD CONSTRAINT "_WMProgramToWashingMachine_A_fkey" FOREIGN KEY ("A") REFERENCES "binwash"."WMProgram"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binwash"."_WMProgramToWashingMachine" ADD CONSTRAINT "_WMProgramToWashingMachine_B_fkey" FOREIGN KEY ("B") REFERENCES "binwash"."WashingMachine"("id") ON DELETE CASCADE ON UPDATE CASCADE;
