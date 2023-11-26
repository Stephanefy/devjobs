-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "profilePic" TEXT;

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "resume" TEXT,
    "coverLetter" TEXT,
    "message" TEXT,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "appliedById" TEXT NOT NULL,
    "appliedToId" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_id_appliedById_key" ON "Application"("id", "appliedById");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_appliedById_fkey" FOREIGN KEY ("appliedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_appliedToId_fkey" FOREIGN KEY ("appliedToId") REFERENCES "JobPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
