/*
  Warnings:

  - You are about to drop the column `manufacturersId` on the `Models` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_manufacturersId_fkey";

-- AlterTable
ALTER TABLE "Manufacturers" ADD COLUMN     "modelsId" INTEGER;

-- AlterTable
ALTER TABLE "Models" DROP COLUMN "manufacturersId";

-- AddForeignKey
ALTER TABLE "Manufacturers" ADD CONSTRAINT "Manufacturers_modelsId_fkey" FOREIGN KEY ("modelsId") REFERENCES "Models"("id") ON DELETE SET NULL ON UPDATE CASCADE;
