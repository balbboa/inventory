/*
  Warnings:

  - You are about to drop the column `supplierId` on the `ServiceDemand` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ServiceDemand" DROP CONSTRAINT "ServiceDemand_supplierId_fkey";

-- AlterTable
ALTER TABLE "ServiceDemand" DROP COLUMN "supplierId",
ADD COLUMN     "serviceTypeId" TEXT;

-- AddForeignKey
ALTER TABLE "ServiceDemand" ADD CONSTRAINT "ServiceDemand_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "ServiceType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
