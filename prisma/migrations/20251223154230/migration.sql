-- CreateTable
CREATE TABLE "Operador" (
    "matricula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Corte" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "imagem" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Pesagem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "peso" REAL NOT NULL,
    "tipoPesagem" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "corteId" TEXT NOT NULL,
    "operadorMatricula" INTEGER NOT NULL,
    CONSTRAINT "Pesagem_corteId_fkey" FOREIGN KEY ("corteId") REFERENCES "Corte" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pesagem_operadorMatricula_fkey" FOREIGN KEY ("operadorMatricula") REFERENCES "Operador" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);

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

-- CreateTable
CREATE TABLE "MapaCompra" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fornecedorId" TEXT NOT NULL,
    "especieId" TEXT NOT NULL,
    "lote" INTEGER NOT NULL,
    "dataDespesca" DATETIME NOT NULL,
    "prazoDias" INTEGER NOT NULL,
    "dataVencimento" DATETIME NOT NULL,
    "pesoBruto" DECIMAL NOT NULL,
    "descontoUmidade" DECIMAL NOT NULL,
    "pesoLiquido" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MapaCompra_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MapaCompra_especieId_fkey" FOREIGN KEY ("especieId") REFERENCES "Especie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MapaCompraFaixa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mapaCompraId" TEXT NOT NULL,
    "faixaPesoId" TEXT NOT NULL,
    "pesoKg" DECIMAL NOT NULL,
    "valorKg" DECIMAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MapaCompraFaixa_mapaCompraId_fkey" FOREIGN KEY ("mapaCompraId") REFERENCES "MapaCompra" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MapaCompraFaixa_faixaPesoId_fkey" FOREIGN KEY ("faixaPesoId") REFERENCES "EspecieFaixaPeso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Corte_nome_key" ON "Corte"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Especie_nome_key" ON "Especie"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "EspecieFaixaPeso_especieId_pesoMin_pesoMax_key" ON "EspecieFaixaPeso"("especieId", "pesoMin", "pesoMax");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_nome_fazenda_key" ON "Fornecedor"("nome", "fazenda");

-- CreateIndex
CREATE UNIQUE INDEX "FornecedorValorEspecie_fornecedorId_faixaPesoId_key" ON "FornecedorValorEspecie"("fornecedorId", "faixaPesoId");

-- CreateIndex
CREATE UNIQUE INDEX "MapaCompra_fornecedorId_lote_key" ON "MapaCompra"("fornecedorId", "lote");

-- CreateIndex
CREATE UNIQUE INDEX "MapaCompraFaixa_mapaCompraId_faixaPesoId_key" ON "MapaCompraFaixa"("mapaCompraId", "faixaPesoId");
