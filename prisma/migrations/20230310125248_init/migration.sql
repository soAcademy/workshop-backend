-- AlterTable
ALTER TABLE "QuizeCategory" ADD COLUMN     "roundId" INTEGER;

-- AlterTable
ALTER TABLE "QuizeChoice" ADD COLUMN     "roundId" INTEGER;

-- AlterTable
ALTER TABLE "QuizeQuestion" ADD COLUMN     "roundId" INTEGER;

-- CreateTable
CREATE TABLE "Round" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuizeCategory" ADD CONSTRAINT "QuizeCategory_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizeQuestion" ADD CONSTRAINT "QuizeQuestion_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizeChoice" ADD CONSTRAINT "QuizeChoice_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE SET NULL ON UPDATE CASCADE;
