/*
  Warnings:

  - You are about to drop the column `property_type` on the `property` table. All the data in the column will be lost.
  - Added the required column `type` to the `property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "property" DROP COLUMN "property_type",
ADD COLUMN     "type" TEXT NOT NULL;
