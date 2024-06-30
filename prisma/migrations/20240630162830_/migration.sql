-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "rating_count" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "images" TEXT[],
    "name" TEXT NOT NULL,
    "price_range" TEXT NOT NULL,
    "featured" JSONB,
    "isFavorite" BOOLEAN NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_id_key" ON "Restaurant"("id");
