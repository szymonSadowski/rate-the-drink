/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Vote_name_key` ON `Vote`(`name`);
