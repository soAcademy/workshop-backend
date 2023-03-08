-- CreateTable
CREATE TABLE "FBDirectMsg" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "msgDetail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FBDirectMsg_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FBDirectMsg" ADD CONSTRAINT "FBDirectMsg_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "FBUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FBDirectMsg" ADD CONSTRAINT "FBDirectMsg_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "FBUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
