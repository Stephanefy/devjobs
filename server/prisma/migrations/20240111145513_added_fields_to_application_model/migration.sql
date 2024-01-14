/*
  Warnings:

  - A unique constraint covering the columns `[applicantEmail]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `applicantEmail` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `applicantName` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "applicantEmail" TEXT NOT NULL,
ADD COLUMN     "applicantName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Application_applicantEmail_key" ON "Application"("applicantEmail");
