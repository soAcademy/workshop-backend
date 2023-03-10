-- DropForeignKey
ALTER TABLE "binquiz"."Choice" DROP CONSTRAINT "Choice_quizId_fkey";

-- AlterTable
ALTER TABLE "binquiz"."Choice" ALTER COLUMN "quizId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "binquiz"."Choice" ADD CONSTRAINT "Choice_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "binquiz"."Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
