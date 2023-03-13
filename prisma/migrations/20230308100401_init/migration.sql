-- CreateTable
CREATE TABLE "MachineOnProgram" (
    "id" SERIAL NOT NULL,
    "machineId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MachineOnProgram_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MachineOnProgram" ADD CONSTRAINT "MachineOnProgram_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineOnProgram" ADD CONSTRAINT "MachineOnProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
