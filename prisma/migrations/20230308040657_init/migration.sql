/*
  Warnings:

  - You are about to drop the `YTAdminRole` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roleId` to the `YTAdmin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "YTAdminRole" DROP CONSTRAINT "YTAdminRole_adminId_fkey";

-- AlterTable
ALTER TABLE "YTAdmin" ADD COLUMN     "roleId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "YTAdminRole";

-- CreateTable
CREATE TABLE "YTRole" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YTRolePermission" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "permissionName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "YTRolePermission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "YTAdmin" ADD CONSTRAINT "YTAdmin_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "YTRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "YTRolePermission" ADD CONSTRAINT "YTRolePermission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "YTRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
