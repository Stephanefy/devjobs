/*
  Warnings:

  - A unique constraint covering the columns `[id,postedById]` on the table `JobPost` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "JobPost" ADD COLUMN     "postedById" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "JobPost_id_postedById_key" ON "JobPost"("id", "postedById");

-- AddForeignKey
ALTER TABLE "JobPost" ADD CONSTRAINT "JobPost_postedById_fkey" FOREIGN KEY ("postedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
