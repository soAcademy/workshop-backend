/*
  Warnings:

  - You are about to drop the `DirecMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HashTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HashTagOnPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reply` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HashTagOnPost" DROP CONSTRAINT "HashTagOnPost_hashTagId_fkey";

-- DropForeignKey
ALTER TABLE "HashTagOnPost" DROP CONSTRAINT "HashTagOnPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_postId_fkey";

-- DropForeignKey
ALTER TABLE "Reply" DROP CONSTRAINT "Reply_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserRelation" DROP CONSTRAINT "UserRelation_fromId_fkey";

-- DropForeignKey
ALTER TABLE "UserRelation" DROP CONSTRAINT "UserRelation_toId_fkey";

-- DropTable
DROP TABLE "DirecMessage";

-- DropTable
DROP TABLE "HashTag";

-- DropTable
DROP TABLE "HashTagOnPost";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Reply";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserRelation";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoriesId" INTEGER NOT NULL,
    "roundQuestionId" INTEGER NOT NULL,
    "answerId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoundQuestion" (
    "id" SERIAL NOT NULL,
    "roundId" INTEGER NOT NULL,
    "correctAnswer" BOOLEAN NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "choiceId" INTEGER NOT NULL,

    CONSTRAINT "RoundQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Round" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" SERIAL NOT NULL,
    "choices" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Choice_choices_key" ON "Choice"("choices");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_roundQuestionId_fkey" FOREIGN KEY ("roundQuestionId") REFERENCES "RoundQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestion" ADD CONSTRAINT "RoundQuestion_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoundQuestion" ADD CONSTRAINT "RoundQuestion_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "Choice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
