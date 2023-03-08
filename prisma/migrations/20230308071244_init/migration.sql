-- CreateTable
CREATE TABLE "WashingBranch" (
    "id" SERIAL NOT NULL,
    "branchName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "ownerName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingBranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashingMachine" (
    "id" SERIAL NOT NULL,
    "branchId" INTEGER NOT NULL,
    "brand" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "productionYear" TIMESTAMP(3) NOT NULL,
    "warrantyEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingMachine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashingMachineMaintenance" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "symptom" TEXT NOT NULL,
    "failureLevel" INTEGER NOT NULL,
    "mechanicName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingMachineMaintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashingMachineProgram" (
    "id" SERIAL NOT NULL,
    "programName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "maxWeight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingMachineProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashingMachineOnProgram" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingMachineOnProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashingUser" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "remainCoupon" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashingTopUp" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "topUpAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingTopUp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashingUseHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "branchId" INTEGER NOT NULL,
    "machineId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashingUseHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WashingMachine" ADD CONSTRAINT "WashingMachine_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "WashingBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashingMachineMaintenance" ADD CONSTRAINT "WashingMachineMaintenance_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "WashingMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashingMachineOnProgram" ADD CONSTRAINT "WashingMachineOnProgram_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "WashingMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashingMachineOnProgram" ADD CONSTRAINT "WashingMachineOnProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "WashingMachineProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashingTopUp" ADD CONSTRAINT "WashingTopUp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WashingUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashingUseHistory" ADD CONSTRAINT "WashingUseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "WashingUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashingUseHistory" ADD CONSTRAINT "WashingUseHistory_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "WashingBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashingUseHistory" ADD CONSTRAINT "WashingUseHistory_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "WashingMachine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashingUseHistory" ADD CONSTRAINT "WashingUseHistory_programId_fkey" FOREIGN KEY ("programId") REFERENCES "WashingMachineProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
