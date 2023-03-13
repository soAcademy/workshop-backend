-- CreateTable
CREATE TABLE "User2" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post2" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "userId" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post2_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post2" ADD CONSTRAINT "Post2_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User2"("id") ON DELETE SET NULL ON UPDATE CASCADE;
