/*
  Warnings:

  - You are about to drop the column `supplierId` on the `ServiceType` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ServiceType" DROP CONSTRAINT "ServiceType_supplierId_fkey";

-- AlterTable
ALTER TABLE "ServiceType" DROP COLUMN "supplierId";

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "serviceTypeId" TEXT;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
