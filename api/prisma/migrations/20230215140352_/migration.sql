/*
  Warnings:

  - You are about to drop the column `groupId` on the `ServiceDemand` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ServiceDemand" DROP CONSTRAINT "ServiceDemand_groupId_fkey";

-- AlterTable
ALTER TABLE "ServiceDemand" DROP COLUMN "groupId";

-- CreateTable
CREATE TABLE "ItemDemand" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "justify" TEXT NOT NULL,
    "immobileId" TEXT,
    "groupId" TEXT,

    CONSTRAINT "ItemDemand_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemDemand" ADD CONSTRAINT "ItemDemand_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "Immobile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDemand" ADD CONSTRAINT "ItemDemand_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
