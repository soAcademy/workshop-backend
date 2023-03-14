-- AlterTable
ALTER TABLE "TwitterPost" ADD COLUMN     "hashtagId" INTEGER;

-- AddForeignKey
ALTER TABLE "TwitterPost" ADD CONSTRAINT "TwitterPost_hashtagId_fkey" FOREIGN KEY ("hashtagId") REFERENCES "TwitterHashtag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
