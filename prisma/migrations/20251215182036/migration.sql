/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Corte` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Corte_nome_key" ON "Corte"("nome");
