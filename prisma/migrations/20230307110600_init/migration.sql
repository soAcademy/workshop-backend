-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "userId_fk" INTEGER,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_fk_key" ON "Profile"("userId_fk");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fk_fkey" FOREIGN KEY ("userId_fk") REFERENCES "User2"("id") ON DELETE SET NULL ON UPDATE CASCADE;
