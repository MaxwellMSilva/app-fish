-- CreateTable
CREATE TABLE "Especie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "EspecieFaixaPeso" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "especieId" TEXT NOT NULL,
    "pesoMin" DECIMAL NOT NULL,
    "pesoMax" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "EspecieFaixaPeso_especieId_fkey" FOREIGN KEY ("especieId") REFERENCES "Especie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "fazenda" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FornecedorValorEspecie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fornecedorId" TEXT NOT NULL,
    "faixaPesoId" TEXT NOT NULL,
    "valorKg" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FornecedorValorEspecie_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FornecedorValorEspecie_faixaPesoId_fkey" FOREIGN KEY ("faixaPesoId") REFERENCES "EspecieFaixaPeso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Especie_nome_key" ON "Especie"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "EspecieFaixaPeso_especieId_pesoMin_pesoMax_key" ON "EspecieFaixaPeso"("especieId", "pesoMin", "pesoMax");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_nome_fazenda_key" ON "Fornecedor"("nome", "fazenda");

-- CreateIndex
CREATE UNIQUE INDEX "FornecedorValorEspecie_fornecedorId_faixaPesoId_key" ON "FornecedorValorEspecie"("fornecedorId", "faixaPesoId");
