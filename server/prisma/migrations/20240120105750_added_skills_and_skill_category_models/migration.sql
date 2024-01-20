-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillCategory" (
    "skillCategoryId" INTEGER NOT NULL,
    "skillCategoryName" TEXT NOT NULL,

    CONSTRAINT "SkillCategory_pkey" PRIMARY KEY ("skillCategoryId")
);

-- CreateTable
CREATE TABLE "_SkillToSkillCategory" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToSkillCategory_AB_unique" ON "_SkillToSkillCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToSkillCategory_B_index" ON "_SkillToSkillCategory"("B");

-- AddForeignKey
ALTER TABLE "_SkillToSkillCategory" ADD CONSTRAINT "_SkillToSkillCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToSkillCategory" ADD CONSTRAINT "_SkillToSkillCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "SkillCategory"("skillCategoryId") ON DELETE CASCADE ON UPDATE CASCADE;
