/*
  Warnings:

  - You are about to drop the column `modelsId` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `modelsId` on the `Manufacturers` table. All the data in the column will be lost.
  - You are about to drop the column `itemId` on the `Models` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_modelsId_fkey";

-- DropForeignKey
ALTER TABLE "Manufacturers" DROP CONSTRAINT "Manufacturers_modelsId_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_itemId_fkey";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "modelsId";

-- AlterTable
ALTER TABLE "Manufacturers" DROP COLUMN "modelsId";

-- AlterTable
ALTER TABLE "Models" DROP COLUMN "itemId",
ADD COLUMN     "groupId" INTEGER,
ADD COLUMN     "manufacturersId" INTEGER;

-- CreateTable
CREATE TABLE "_ItemToModels" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToModels_AB_unique" ON "_ItemToModels"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToModels_B_index" ON "_ItemToModels"("B");

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_manufacturersId_fkey" FOREIGN KEY ("manufacturersId") REFERENCES "Manufacturers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToModels" ADD CONSTRAINT "_ItemToModels_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToModels" ADD CONSTRAINT "_ItemToModels_B_fkey" FOREIGN KEY ("B") REFERENCES "Models"("id") ON DELETE CASCADE ON UPDATE CASCADE;
