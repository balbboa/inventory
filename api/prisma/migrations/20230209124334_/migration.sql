/*
  Warnings:

  - You are about to drop the column `demandId` on the `Immobile` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Immobile` table. All the data in the column will be lost.
  - You are about to drop the column `immobileId` on the `Opms` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Immobile" DROP CONSTRAINT "Immobile_demandId_fkey";

-- DropForeignKey
ALTER TABLE "Immobile" DROP CONSTRAINT "Immobile_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Opms" DROP CONSTRAINT "Opms_immobileId_fkey";

-- AlterTable
ALTER TABLE "Demand" ADD COLUMN     "immobileId" TEXT;

-- AlterTable
ALTER TABLE "Immobile" DROP COLUMN "demandId",
DROP COLUMN "serviceId",
ADD COLUMN     "opmsId" TEXT;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "immobileId" TEXT;

-- AlterTable
ALTER TABLE "Opms" DROP COLUMN "immobileId";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "immobileId" TEXT;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "Immobile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Immobile" ADD CONSTRAINT "Immobile_opmsId_fkey" FOREIGN KEY ("opmsId") REFERENCES "Opms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demand" ADD CONSTRAINT "Demand_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "Immobile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "Immobile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
