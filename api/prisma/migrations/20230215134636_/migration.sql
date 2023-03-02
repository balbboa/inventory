/*
  Warnings:

  - You are about to drop the `Demand` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Demand" DROP CONSTRAINT "Demand_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Demand" DROP CONSTRAINT "Demand_immobileId_fkey";

-- DropForeignKey
ALTER TABLE "Demand" DROP CONSTRAINT "Demand_supplierId_fkey";

-- DropTable
DROP TABLE "Demand";

-- CreateTable
CREATE TABLE "ServiceDemand" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "justify" TEXT NOT NULL,
    "supplierId" TEXT,
    "groupId" TEXT,
    "immobileId" TEXT,

    CONSTRAINT "ServiceDemand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServiceDemand" ADD CONSTRAINT "ServiceDemand_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDemand" ADD CONSTRAINT "ServiceDemand_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceDemand" ADD CONSTRAINT "ServiceDemand_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "Immobile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
