/*
  Warnings:

  - You are about to drop the `Opm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Opm" DROP CONSTRAINT "Opm_immobileId_fkey";

-- DropTable
DROP TABLE "Opm";

-- CreateTable
CREATE TABLE "Opms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "immobileId" INTEGER,

    CONSTRAINT "Opms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Opms" ADD CONSTRAINT "Opms_immobileId_fkey" FOREIGN KEY ("immobileId") REFERENCES "Immobile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
