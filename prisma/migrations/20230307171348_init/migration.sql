/*
  Warnings:

  - You are about to drop the `_member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_member" DROP CONSTRAINT "_member_A_fkey";

-- DropForeignKey
ALTER TABLE "_member" DROP CONSTRAINT "_member_B_fkey";

-- DropTable
DROP TABLE "_member";

-- CreateTable
CREATE TABLE "_FacebookGroupToFacebookUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FacebookGroupToFacebookUser_AB_unique" ON "_FacebookGroupToFacebookUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FacebookGroupToFacebookUser_B_index" ON "_FacebookGroupToFacebookUser"("B");

-- AddForeignKey
ALTER TABLE "_FacebookGroupToFacebookUser" ADD CONSTRAINT "_FacebookGroupToFacebookUser_A_fkey" FOREIGN KEY ("A") REFERENCES "FacebookGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FacebookGroupToFacebookUser" ADD CONSTRAINT "_FacebookGroupToFacebookUser_B_fkey" FOREIGN KEY ("B") REFERENCES "FacebookUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
