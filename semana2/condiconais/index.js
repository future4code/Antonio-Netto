/* 
1 -

Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
(apenas maiores de idade).

a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

RESPOSTA:

const idade = Number(prompt("Qual é a sua idade?"))

if(idade >= 18){
    console.log("Você pode dirigir")
} else if (idade < 18) {
    console.log("Você não pode dirigir")
}

2 -

Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V 
(Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
Utilize o bloco if/else

RESPOSTA:

const turno = prompt("Em que turno do dia você estuda? - Digite M para matutino, V para Vespertino ou N  para Noturno")

if(turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde")
} else if (turno === "N") { 
    console.log("Boa noite!")
}

3 - 

switch (turno){
    case "M":
        console.log("Bom dia")
        break
   case "V":
        console.log("Boa tarde")
        break
    case "N":
        console.log("Boa noite")
        break
}

4 -

Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme 
com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que 
pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a 
mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

RESPOSTA:

const genero = prompt("Qual genero de filme iremos assistir?").toLowerCase()
const preco = Number(prompt("Qual é o preço do ingresso?"))

if(genero === "fantasia" && preco <= "15"){
    console.log("Bom flme!")
} else {
    console.log("Escolha outro filme")
} 

EXERCICIOS DE INTERPRETAÇÃO:  

1 -

a)Se o resto da divisão do número por 2 for igual a zero, ele passa no teste, se for outro número ele não passa.
Esse código diz se o numero é par ou não.

b) numeros pares

c)numeros impares

2 - 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima? - R: Ele mostra qual é o preço da fruta que o usuário escolheu

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? R: O preço da fruta maçã é R$ 2.25

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console 
se retirássemos o `break` que está logo acima do `default` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

R: Ele vai considerar como se não estivesse escrita a variavel pera, porque não tem o break para separars



3 -

a) pegando a informação do usuario

b) 10: Esse numero passou no teste / erro porque não consigo acessar aquela variavel fora do escopo
-10: Erro

c) Não consigo acessar a variável "mensagem" fora do escopo, por isso o segundo console.log dá erro!

DESAFIOS:

1 -



const genero = prompt("Qual genero de filme iremos assistir?").toLowerCase()
const preco = Number(prompt("Qual é o preço do ingresso?"))

if(genero === "fantasia" && preco <= "15"){
    const lanche = prompt("Qual lanche voce vai comprar?").toLowerCase()
    console.log("Bom flme!")
    console.log("Aproveite o seu" + lanche)
} else {
    console.log("Escolha outro filme")
} 

2 - 

const nome = prompt("Qual é o seu nome?")
const tipo = prompt("Qual é o tipo de jogo?")
const etapa = prompt("Qual é a etapa?")
const categoria = prompt("Qual é a categoria?")
const ingresso = prompt("Quantos ingressos?")

if(etapa = "SF" && categoria = 1 ){
    const lanche = prompt("Qual lanche voce vai comprar?").toLowerCase()
    console.log("Bom flme!")
    console.log("Aproveite o seu" + lanche)
} else {
    console.log("Escolha outro filme")
} 
*/










