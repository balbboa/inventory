/*
  Warnings:

  - The primary key for the `Demand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Group` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Immobile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Manufacturers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Models` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Opms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ServiceType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Demand" DROP CONSTRAINT "Demand_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Demand" DROP CONSTRAINT "Demand_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "Immobile" DROP CONSTRAINT "Immobile_demandId_fkey";

-- DropForeignKey
ALTER TABLE "Immobile" DROP CONSTRAINT "Immobile_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Models" DROP CONSTRAINT "Models_manufacturersId_fkey";

-- DropForeignKey
ALTER TABLE "Opms" DROP CONSTRAINT "Opms_immobileId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceType" DROP CONSTRAINT "ServiceType_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "Status" DROP CONSTRAINT "Status_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Status" DROP CONSTRAINT "Status_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToModels" DROP CONSTRAINT "_ItemToModels_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToModels" DROP CONSTRAINT "_ItemToModels_B_fkey";

-- AlterTable
ALTER TABLE "Demand" DROP CONSTRAINT "Demand_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "supplierId" SET DATA TYPE TEXT,
ALTER COLUMN "groupId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Demand_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Demand_id_seq";

-- AlterTable
ALTER TABLE "Group" DROP CONSTRAINT "Group_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Group_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Group_id_seq";

-- AlterTable
ALTER TABLE "Immobile" DROP CONSTRAINT "Immobile_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "serviceId" SET DATA TYPE TEXT,
ALTER COLUMN "demandId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Immobile_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Immobile_id_seq";

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Item_id_seq";

-- AlterTable
ALTER TABLE "Manufacturers" DROP CONSTRAINT "Manufacturers_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Manufacturers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Manufacturers_id_seq";

-- AlterTable
ALTER TABLE "Models" DROP CONSTRAINT "Models_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "groupId" SET DATA TYPE TEXT,
ALTER COLUMN "manufacturersId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Models_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Models_id_seq";

-- AlterTable
ALTER TABLE "Opms" DROP CONSTRAINT "Opms_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "immobileId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Opms_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Opms_id_seq";

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Service_id_seq";

-- AlterTable
ALTER TABLE "ServiceType" DROP CONSTRAINT "ServiceType_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "supplierId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ServiceType_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ServiceType_id_seq";

-- AlterTable
ALTER TABLE "Status" DROP CONSTRAINT "Status_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "serviceId" SET DATA TYPE TEXT,
ALTER COLUMN "itemId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Status_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Status_id_seq";

-- AlterTable
ALTER TABLE "Supplier" DROP CONSTRAINT "Supplier_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "serviceId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Supplier_id_seq";

-- AlterTable
ALTER TABLE "_ItemToModels" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_manufacturersId_fkey" FOREIGN KEY ("manufacturersId") REFERENCES "Manufacturers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceType" ADD CONSTRAINT "ServiceType_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Immobile" ADD CONSTRAINT "Immobile_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Immobile" ADD CONSTRAINT "Immobile_demandId_fkey" FOREIGN KEY ("demandId") REFERENCES "Demand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demand" ADD CONSTRAINT "Demand_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Demand" ADD CONSTRAINT "Demand_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Opms" ADD CONSTRAINT "Opms_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "Immobile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Status" ADD CONSTRAINT "Status_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Status" ADD CONSTRAINT "Status_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToModels" ADD CONSTRAINT "_ItemToModels_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToModels" ADD CONSTRAINT "_ItemToModels_B_fkey" FOREIGN KEY ("B") REFERENCES "Models"("id") ON DELETE CASCADE ON UPDATE CASCADE;
