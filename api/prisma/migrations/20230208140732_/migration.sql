/*
  Warnings:

  - You are about to drop the `_ItemToModels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ItemToModels" DROP CONSTRAINT "_ItemToModels_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToModels" DROP CONSTRAINT "_ItemToModels_B_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "modelsId" TEXT;

-- DropTable
DROP TABLE "_ItemToModels";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_modelsId_fkey" FOREIGN KEY ("modelsId") REFERENCES "Models"("id") ON DELETE SET NULL ON UPDATE CASCADE;
