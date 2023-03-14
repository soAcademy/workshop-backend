-- AlterTable
ALTER TABLE "TwitterPost" ADD COLUMN     "hashtagName" TEXT;

-- AddForeignKey
ALTER TABLE "TwitterPost" ADD CONSTRAINT "TwitterPost_hashtagName_fkey" FOREIGN KEY ("hashtagName") REFERENCES "TwitterHashtag"("name") ON DELETE SET NULL ON UPDATE CASCADE;
