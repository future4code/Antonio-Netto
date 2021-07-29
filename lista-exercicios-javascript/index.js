/*(VER FAVORITOS PARA FAZER QUESTAO 2)

EX 1 -

const array2 = [13, 12, 41, 15, 10, 16, 23, 8, 0]

 let novoArray = []

 const inverterArray = (array) => {

 for (let i = array.length -1; i >= 1; i--) {
   const element = array[i];
   novoArray.push(element)
 } 
 return novoArray 
}
console.log(inverterArray(array2))

EX 2 -

const numeros = [1, 2, 3, 4, 5, 6]

let novoArray = []

const retornaParesElevados = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      novoArray.push(Math.pow(arr[i], 2))
    } 
  }
  return novoArray
} 

console.log(retornaParesElevados(numeros))



EX 3 - Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada
const array = [1, 2, 3, 4, 5, 6]

const arrayComPares = []

for(var i = 0; i < array.length; i++){
    if(array % 2 === 0) {
        arrayComPares.push(arrayComPares)
    } 
  }; 
  
  EX 4 - Escreva uma função que receba um array de números e retorne o maior número dele. 

const array = [1, 2, 3, 4, 5, 6]



 const maiorNumero = Math.max(...array)

 console.log(maiorNumero) 

 EX 5 - Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele. 

const array = [1, 2, 3, 4, 5, 6]

const quantidadeDeElementos = () => {
  console.log(array.length)
}

quantidadeDeElementos()

EX 6 - Escreva uma função que apenas retorne um array de resposta contendo os valores das expressões lógicas abaixo.
 


function expressoesBooleanas() {
  const respostas = [false, false, false, true, true]
  return respostas
}

EX 7 -

 const retornaPrimeirosPares = (numero) => {
  for (let i = 0; i < numero; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
 }

retornaPrimeirosPares(5)

EX 8 - Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c e retorne se ele é equilátero, isósceles ou escaleno.



const defineTriangulo = (a, b, c) => {
  if(a == b && a == c)
          console.log("Esse triângulo é Equilatero.");
      else
          if(a == b || a == c || b == c)
          console.log("Esse triângulo é Isóceles.");
          else
          console.log("Esse triângulo é Escaleno.");
  }

EX 9 -

const exercicioNove = (a, b) => {
  let objeto = {
    maiorNumero: null,
    maiorDivisivelPorMenor: null,
    diferenca: null
  }
  if (a > b) {
    objeto.maiorNumero = a
  } else {
    objeto.maiorNumero = b
  } 

EX 11 - Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. 



const array = [1, 9, 7, 3, 5, 6]

const retornaOrdemCrescente = (array) => {
  return array.sort()
}

retornaOrdemCrescente(array)

console.log(array)

EX 13 -

const filme = {
  "nome": "Aprendendo javascript",
  "ano": 2017,
  "diretor": "Scorcese",
  "ator1": "Arnold Schwarzenegger",
  "ator2": "Matt Damon",
  "ator3": "Adam Sandler"
}

const fraseSobreFilme = () => {
  return console.log(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.ator1}, ${filme.ator2}, ${filme.ator3}`)
}

fraseSobreFilme()

EX 14 -




const criaRetangulo = (lado1, lado2) => {
  return infoRetangulo = {
    "largura": lado1,
    "altura": lado2,
    "perímetro": 2 * (lado1 + lado2), 
    "area": (lado1 * lado2)
  }
}

console.log(criaRetangulo(20, 10))

EX 15 - 


const pessoa = {
	nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}

const novoObjeto = (pessoa) => {
   return pessoa = {nome: "ANONIMO", idade: pessoa.idade, email: pessoa.email, endereco: pessoa.endereco}
}



console.log(novoObjeto)

EX 16 -



const grupo = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const apenasMaiores = grupo.filter((pessoa) => {
  return (pessoa.idade >= 18)
})

console.log(apenasMaiores)

const apenasMenores = grupo.filter((pessoa) => {
  return (pessoa.idade < 18)
})

console.log(apenasMenores)


EX 17 -



const array = [1, 2, 3, 4, 5, 6]

const retornaMultiplicado = array.map((numero) => {
    return numero*2
})

console.log(retornaMultiplicado)

const retornaMultiplicadoString = array.map((numero) => {
    return numero*2 (como usar o toString aqui)
})

const descobreImparPar = array.map((numero) => {
  if (numero % 2 === 0) 
    console.log(`${numero} é par`);
   else if (numero % 2 == !0) 
    console.log(`${numero} é ímpar`);
  })

  EX 18 - 

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const podeUsar = pessoas.filter((pessoa) => {
  return pessoa.altura >= 1.5 && (pessoa.idade >= 14 && pessoa.idade < 60) 
    
})

console.log(podeUsar)

const naoPodeUsar = pessoas.filter((pessoa) => {
  return pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60  
})

console.log(naoPodeUsar)

  EX 19 - 



  const consultas = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" }
  ]


  const ordemAlfabetica = (array) => {
    return array.sort()   
  }

 ordemAlfabetica(consultas)

 console.log(consultas)




 -----------------------------------------------

 **AQUI COMEÇA A SEGUNDA LISTA DE EXERCÍCIOS QUE ME PASSARAM NA QUINTA**

EX 1 - 

 */

const imprimeArea = () => {
  const altura = Number(prompt("Qual é a altura do retângulo?"))
  const largura = Number(prompt("Qual é a largura do retângulo?"))
  const area = Number(altura*largura)
  return console.log(`A área do retângulo é ${area}`)
} 

imprimeArea()
console.log(imprimeArea())



  
