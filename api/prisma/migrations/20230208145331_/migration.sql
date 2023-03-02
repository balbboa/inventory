/*
  Warnings:

  - You are about to drop the column `itemId` on the `Status` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Status" DROP CONSTRAINT "Status_itemId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "statusId" TEXT;

-- AlterTable
ALTER TABLE "Status" DROP COLUMN "itemId";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE SET NULL ON UPDATE CASCADE;
