/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Supplier` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Status" DROP CONSTRAINT "Status_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_serviceId_fkey";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "statusId" TEXT,
ADD COLUMN     "supplierId" TEXT;

-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "serviceId";

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;
