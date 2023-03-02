-- CreateTable
CREATE TABLE "Models" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Models_pkey" PRIMARY KEY ("id")
);
