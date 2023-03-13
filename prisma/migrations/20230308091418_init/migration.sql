-- CreateTable
CREATE TABLE "MainCompany" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MainCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" SERIAL NOT NULL,
    "ownerName" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "totolMachine" INTEGER NOT NULL,
    "mainCompanyId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machine" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "mfg" TEXT NOT NULL,
    "insurance" TEXT NOT NULL,
    "branchId" INTEGER,
    "washHistoryId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "washHistoryId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessType" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "programId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProcessType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepairHistory" (
    "id" SERIAL NOT NULL,
    "time" INTEGER NOT NULL,
    "machineId" INTEGER,
    "repairDetailId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RepairHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepairDetail" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "damage" TEXT NOT NULL,
    "cause" TEXT NOT NULL,
    "machanics" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "repairHistoryId" INTEGER NOT NULL,

    CONSTRAINT "RepairDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "washHistoryId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WashHistory" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WashHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_mainCompanyId_fkey" FOREIGN KEY ("mainCompanyId") REFERENCES "MainCompany"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Machine" ADD CONSTRAINT "Machine_washHistoryId_fkey" FOREIGN KEY ("washHistoryId") REFERENCES "WashHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_washHistoryId_fkey" FOREIGN KEY ("washHistoryId") REFERENCES "WashHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessType" ADD CONSTRAINT "ProcessType_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairHistory" ADD CONSTRAINT "RepairHistory_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairHistory" ADD CONSTRAINT "RepairHistory_repairDetailId_fkey" FOREIGN KEY ("repairDetailId") REFERENCES "RepairDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WashUser" ADD CONSTRAINT "WashUser_washHistoryId_fkey" FOREIGN KEY ("washHistoryId") REFERENCES "WashHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
