/* 

1 - Matheus Nachtergaele , Virginia Cavendish , canal: "Globo", horario: "14h"

2 - Juca , 3 , SRD / Juba , 3 , SRD / Jubo , 3 , SRD

3 -

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console? ="false" e "undefined"

b) Explique o valor impresso no console. Você sabe por que 
isso aconteceu? Na "a" aparece false porque esse é o backender 
(que seria a propriedade) da pessoa (objeto). Depois aparece "undefined"
porque eu não defini qual seria a altura da pessoa quando criei a variável,
então ele não reconhece essa propriedade,  o que resulta na mensagem
"undefined"

1 -



const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }

 function funcaExercicio1(pessoa){
     console.log("Eu sou", pessoa.nome, "mas pode me chamar de:", pessoa.apelidos[0], pessoa.apelidos[1], "ou", pessoa.apelidos[2])
 }

 funcaExercicio1(pessoa)


 const novoObjeto = {
    ...pessoa, apelidos: ["jojo", "joji", "joju"]
}

funcaExercicio1(novoObjeto)

2 - 

a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`

RESPOSTA:

const obj1 = {
    nome: "Amanda", 
    idade: "25",
    profissao: "jornalista"
 }


 function funcaoExercicio2(obj1) {
    const array = [obj1.nome, obj1.nome.length, obj1.idade, obj1.profissao, obj1.profissao.length] 
    return console.log(array)
 }

 funcaoExercicio2(obj1)

 3 -

 */

 const carrinho = Array

 const fruta1 = {
    nome: "Maçã", 
    Disponibilidade: true
 }

 const fruta2 = {
    nome: "Banana", 
    Disponibilidade: true
 }

 const fruta3 = {
    nome: "Cereja", 
    Disponibilidade: true
 }

 function funcaExercicio3(fruta1, fruta2, fruta3){
    carrinho.push(fruta1, fruta2, fruta3)
}

funcaExercicio3()