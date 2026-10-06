/*
  Warnings:

  - You are about to drop the column `photo_id` on the `property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "property" DROP COLUMN "photo_id",
ADD COLUMN     "images" TEXT[];
