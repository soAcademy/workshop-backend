/*
  Warnings:

  - You are about to drop the `BinKitchenCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKitchenMenu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKitchenOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BinKitchenOrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Choice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Round` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoundQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TodoList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BinKitchenMenu" DROP CONSTRAINT "BinKitchenMenu_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "BinKitchenOrderItem" DROP CONSTRAINT "BinKitchenOrderItem_menuId_fkey";

-- DropForeignKey
ALTER TABLE "BinKitchenOrderItem" DROP CONSTRAINT "BinKitchenOrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_categoriesId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_roundQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "Round" DROP CONSTRAINT "Round_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestion" DROP CONSTRAINT "RoundQuestion_choiceId_fkey";

-- DropForeignKey
ALTER TABLE "RoundQuestion" DROP CONSTRAINT "RoundQuestion_roundId_fkey";

-- DropTable
DROP TABLE "BinKitchenCategory";

-- DropTable
DROP TABLE "BinKitchenMenu";

-- DropTable
DROP TABLE "BinKitchenOrder";

-- DropTable
DROP TABLE "BinKitchenOrderItem";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Choice";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "Round";

-- DropTable
DROP TABLE "RoundQuestion";

-- DropTable
DROP TABLE "TodoList";
