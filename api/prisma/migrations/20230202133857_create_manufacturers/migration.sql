-- AlterTable
ALTER TABLE "Models" ADD COLUMN     "manufacturersId" INTEGER;

-- CreateTable
CREATE TABLE "Manufacturers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Manufacturers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_manufacturersId_fkey" FOREIGN KEY ("manufacturersId") REFERENCES "Manufacturers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
