-- CreateTable
CREATE TABLE "LaundryBranch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "machineAmount" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "areaSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaundryBranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryWashingMachine" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "variant" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "machineType" TEXT NOT NULL,
    "yearManufactured" INTEGER NOT NULL,
    "insuranceExpiryYear" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "laundryBranchId" INTEGER NOT NULL,

    CONSTRAINT "LaundryWashingMachine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryProgram" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaundryProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryWashingMachineToProgram" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "laundryWashingMachineId" INTEGER NOT NULL,
    "laundryProgramId" INTEGER NOT NULL,

    CONSTRAINT "LaundryWashingMachineToProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryMaintainance" (
    "id" SERIAL NOT NULL,
    "round" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "damageLevel" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "technicianName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "laundryWashingMachineId" INTEGER NOT NULL,

    CONSTRAINT "LaundryMaintainance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LaundryUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryUserHistory" (
    "id" SERIAL NOT NULL,
    "washNumber" INTEGER NOT NULL,
    "date" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "laundryUserId" INTEGER NOT NULL,
    "laundryWashingMachineId" INTEGER NOT NULL,
    "laundryProgramId" INTEGER NOT NULL,

    CONSTRAINT "LaundryUserHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaundryBalanceTopup" (
    "id" SERIAL NOT NULL,
    "topUpRound" INTEGER NOT NULL,
    "topUpAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "laundryUserId" INTEGER NOT NULL,

    CONSTRAINT "LaundryBalanceTopup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LaundryBranch_name_key" ON "LaundryBranch"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LaundryProgram_name_key" ON "LaundryProgram"("name");

-- AddForeignKey
ALTER TABLE "LaundryWashingMachine" ADD CONSTRAINT "LaundryWashingMachine_laundryBranchId_fkey" FOREIGN KEY ("laundryBranchId") REFERENCES "LaundryBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryWashingMachineToProgram" ADD CONSTRAINT "LaundryWashingMachineToProgram_laundryWashingMachineId_fkey" FOREIGN KEY ("laundryWashingMachineId") REFERENCES "LaundryWashingMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryWashingMachineToProgram" ADD CONSTRAINT "LaundryWashingMachineToProgram_laundryProgramId_fkey" FOREIGN KEY ("laundryProgramId") REFERENCES "LaundryProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryMaintainance" ADD CONSTRAINT "LaundryMaintainance_laundryWashingMachineId_fkey" FOREIGN KEY ("laundryWashingMachineId") REFERENCES "LaundryWashingMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryUserHistory" ADD CONSTRAINT "LaundryUserHistory_laundryUserId_fkey" FOREIGN KEY ("laundryUserId") REFERENCES "LaundryUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryUserHistory" ADD CONSTRAINT "LaundryUserHistory_laundryWashingMachineId_fkey" FOREIGN KEY ("laundryWashingMachineId") REFERENCES "LaundryWashingMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryUserHistory" ADD CONSTRAINT "LaundryUserHistory_laundryProgramId_fkey" FOREIGN KEY ("laundryProgramId") REFERENCES "LaundryProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaundryBalanceTopup" ADD CONSTRAINT "LaundryBalanceTopup_laundryUserId_fkey" FOREIGN KEY ("laundryUserId") REFERENCES "LaundryUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
