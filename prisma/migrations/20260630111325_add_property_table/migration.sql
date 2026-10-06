/*
  Warnings:

  - You are about to drop the column `content` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `cost` on the `property` table. All the data in the column will be lost.
  - Added the required column `description` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_id` to the `property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "property" DROP COLUMN "content",
DROP COLUMN "cost",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "owner_id" TEXT NOT NULL,
ADD COLUMN     "photo_id" INTEGER NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD CONSTRAINT "property_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "property_id_key";
