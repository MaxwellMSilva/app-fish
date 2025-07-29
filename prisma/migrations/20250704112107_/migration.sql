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
