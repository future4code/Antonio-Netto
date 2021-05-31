/*

1 -

Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as 
operações pedidas nos itens abaixo utilizando as funções de array map e filter:


  

   b) apenas com o nome salsicha:

    const soSalsicha = pets.filter((nome) => {
        return pets.raca === "Salsicha"

   })

   a) Crie um novo array que contenha apenas o nome dos doguinhos:

   

   const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
   ]

   

   const nomeDosDoguinhos = pets.filter((nome) => {
        return pets.nome

   })

   
    const soSalsicha = pets.map((pet)=>{
    return pet.nome
})

    const salsicha = pets.filter((pet) => {
    return pet.raca === "Salsicha"

})


console.log(salsicha)
console.log(soSalsicha)

 const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const apenasPoodle = pets.filter((pet) => {
        return pet.raca === "Poodle"

   }) 

   const mensagemPoodle = pets.map( (apenasPoodle) => {
    return console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", ${nome}!)
    
})



2 -

Dado o seguinte array de produtos, realize as operações 
pedidas nos itens abaixo utilizando as funções de array map e filter:

a) Crie um novo array que contenha apenas o nome de cada item

b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"



const listaDeNomes = produtos.map( (produto) => {
    return produto.nome

})

const nomePreco = produtos.map( (produto) => {
    return produto.nome + (produto.preco*5)/100
    
})



console.log(nomePreco)

const apenasBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"

})

console.log(apenasBebidas)


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]





const contemYpe = produtos.filter((produto) => {
    return produto.nome === includes(ype)

})

 console.log(contemYpe)

  
***Exercícios de interpretação de código

1 -

Amanda Rangel, Mandi,
Laís Petra, Laura,
Letícia Chijo, Chijo} 


const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})



 2 -

 

 const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  "Amanda Rangel", "Laís Petra", "Letícia Chijo"

  3 - 

  */

  const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)