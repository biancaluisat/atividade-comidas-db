import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  console.log('🌱 Inserindo comidas no banco...')

  await prisma.comidas.deleteMany()

  // insere 20 comidas
  await prisma.comidas.createMany({
        data: [
        {
          nome: "Arroz branco",
          tipo: "Acompanhamento",
          preco: 5.00,
          descricao: "Arroz branco soltinho, ideal para acompanhar qualquer refeição."
        },
        {
          nome: "Feijão preto",
          tipo: "Acompanhamento",
          preco: 6.00,
          descricao: "Feijão preto temperado, cozido com alho e louro."
        },
        {
          nome: "Macarrão com molho",
          tipo: "Prato principal",
          preco: 8.50,
          descricao: "Macarrão com molho de tomate simples e delicioso."
        },
        {
          nome: "Ovo frito",
          tipo: "Proteína",
          preco: 3.00,
          descricao: "Ovo frito na manteiga com gema mole."
        },
        {
          nome: "Pão com manteiga",
          tipo: "Café da manhã",
          preco: 2.00,
          descricao: "Pão francês quentinho com manteiga derretida."
        },
        {
          nome: "Salada de alface",
          tipo: "Acompanhamento",
          preco: 4.00,
          descricao: "Salada fresca de alface com azeite e sal."
        },
        {
          nome: "Purê de batata",
          tipo: "Acompanhamento",
          preco: 5.50,
          descricao: "Purê cremoso de batata com leite e manteiga."
        },
        {
          nome: "Frango grelhado",
          tipo: "Proteína",
          preco: 10.00,
          descricao: "Peito de frango grelhado temperado na chapa."
        },
        {
          nome: "Bife acebolado",
          tipo: "Proteína",
          preco: 12.00,
          descricao: "Bife bovino com cebolas douradas."
        },
        {
          nome: "Sopa de legumes",
          tipo: "Prato principal",
          preco: 7.00,
          descricao: "Sopa leve de legumes variados com caldo natural."
        },
        {
          nome: "Farofa",
          tipo: "Acompanhamento",
          preco: 4.50,
          descricao: "Farofa crocante com temperos caseiros."
        },
        {
          nome: "Cuscuz com ovo",
          tipo: "Café da manhã",
          preco: 6.00,
          descricao: "Cuscuz nordestino acompanhado de ovo frito."
        },
        {
          nome: "Sanduíche de presunto e queijo",
          tipo: "Lanche",
          preco: 5.00,
          descricao: "Sanduíche simples com presunto e queijo no pão de forma."
        },
        {
          nome: "Panqueca simples",
          tipo: "Lanche",
          preco: 6.50,
          descricao: "Panqueca recheada com carne moída e molho."
        },
        {
          nome: "Batata frita",
          tipo: "Acompanhamento",
          preco: 7.00,
          descricao: "Batata palito frita crocante e salgadinha."
        },
        {
          nome: "Arroz carreteiro",
          tipo: "Prato principal",
          preco: 9.50,
          descricao: "Arroz misturado com carne seca e temperos."
        },
        {
          nome: "Miojo",
          tipo: "Prato rápido",
          preco: 3.50,
          descricao: "Macarrão instantâneo com tempero sabor galinha caipira."
        },
        {
          nome: "Torta de frango",
          tipo: "Prato principal",
          preco: 8.00,
          descricao: "Torta salgada recheada com frango desfiado e requeijão."
        },
        {
          nome: "Lasanha",
          tipo: "Prato principal",
          preco: 11.00,
          descricao: "Lasanha de carne moída com molho e queijo gratinado."
        },
        {
          nome: "Pizza de muçarela",
          tipo: "Prato principal",
          preco: 14.00,
          descricao: "Pizza tradicional de muçarela com orégano."
        }
    ],
})

console.log('✨ 20 comidas inseridas com sucesso!')
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})