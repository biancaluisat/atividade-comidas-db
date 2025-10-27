/*
  Warnings:

  - You are about to drop the `Comidas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Comidas";

-- CreateTable
CREATE TABLE "comidas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "comidas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comidas_nome_key" ON "comidas"("nome");
