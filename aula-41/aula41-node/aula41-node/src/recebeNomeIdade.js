//EXERCICIO 1 A:
// Nós escrevemos process.argv[0], sendo o primeiro índice
//o próprio node e o segundo o nome do arquivo que vamos executar)

const nome = process.argv[2]
const idade = process.argv[3]
const novaIdade = Number(process.argv[3]) + Number(7)

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)