-- AlterTable
ALTER TABLE "binquiz"."Choice" ADD COLUMN     "roundId" INTEGER;

-- AlterTable
ALTER TABLE "binquiz"."Quiz" ADD COLUMN     "roundId" INTEGER;

-- CreateTable
CREATE TABLE "binquiz"."Round" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "binquiz"."Choice" ADD CONSTRAINT "Choice_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "binquiz"."Round"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "binquiz"."Quiz" ADD CONSTRAINT "Quiz_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "binquiz"."Round"("id") ON DELETE SET NULL ON UPDATE CASCADE;
