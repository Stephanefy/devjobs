/*
  Warnings:

  - You are about to drop the column `is_employer` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `is_jobSeeker` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `biography` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('JOB_SEEKER', 'EMPLOYER');

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "is_employer",
DROP COLUMN "is_jobSeeker",
ADD COLUMN     "biography" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'JOB_SEEKER';
