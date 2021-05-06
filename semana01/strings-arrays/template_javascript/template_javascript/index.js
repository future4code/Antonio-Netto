/* 1.Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)


RESPOSTA:

a. algum tipo de erro!
b. null
c. 11
d. 3
e. 19
f. 24

(EU VI QUE AS ULTIMAS 2 ESTÃO ERRADAS MAS VOU REVER ESSES CONCEITOS SABADO PARA VER PORQUE NÃO CONSEGUI CHEGAR NAS RESPOSTAS CERTAS)

2. Leia o código abaixo com atenção 




const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

Resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27

EXERCÍCIOS DE ESCRITA DE CÓDIGO:

*/


const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu email?")
const frase1 = "O e-mail"
const frase2 = "foi cadastrado com sucesso. Seja bem-vinda(o)," 



console.log(frase1 + email + frase2 + nome)

const listaDeComidas = ["sushi", "pizza", "massa"]

console.log(listaDeComidas)
console.log("Essas são as minhas comidas preferidas: " + listaDeComidas)

const comidaDoUsuario = prompt("Qual é a sua comida preferida?")
const listaComADoUsuario = ["sushi", comidaDoUsuario, "massa"]

console.log(listaComADoUsuario)   /* EU SEI QUE DEVIA TER FEITO COM O REPLACE MAS NAO CONSEGUI, VOU VER DEPOIS COMO FAZ */


/* a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array na tela

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array na tela */


const listaDeTarefas = []

const tarefasDoUsuario1 = prompt("Diga uma tarefa que você precisa realizar hoje")
const tarefasDoUsuario2 = prompt("Diga outra tarefa que você precisa realizar hoje")
const tarefasDoUsuario3 = prompt("Diga mais uma tarefa que você precisa realizar hoje")

listaDeTarefas.push(tarefasDoUsuario1 + tarefasDoUsuario2 + tarefasDoUsuario3)

console.log(listaDeTarefas)

const tarefaRealizada = prompt("Diga em um número qual dessas tarefas você já realizou hoje")

/* TENTEI FAZER ESSA COM SPLICE E NÃO CONSEGUI, VOU VER DEPOIS NO VIDEO COMO SE FAZ..) 

DESAFIOS:
*/

56










