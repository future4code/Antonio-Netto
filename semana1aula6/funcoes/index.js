/*

1 -

```jsx
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```

a) O que vai ser impresso no console?

b) O que aconteceria se retirasse os dois `console.log` 
e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

RESPOSTA: a) 10  50
          b)Eu acho que para imprimir algo no console tem que ter o console.log, então nesse caso não apareceria nada.


2 - 

leia o código abaixo


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
```
a. Explique o que essa função faz e qual é sua utilidade

RESPOSTA: Transforma todas as letras do texto em minúscula e determina se o conjunto de caracteres
"cenoura" pode ser encontrado dentro do texto

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`

i -  true
11 - false
iii - true

------

1 - a)
 

function imprimirSobreMim() {
console.log("Eu sou Antonio, tenho 31 anos, moro em Porto Alegre e sou estudante.")
}

imprimirSobreMim()



b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 

o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 

Ela deve retornar uma `string` que unifique todas as informações da pessoa 

em uma só mensagem com o template:

```
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
```

RESPOSTA:

*/


function informacoesPessoais(){

    
const nome= prompt("Qual é o seu nome?")

const idade= prompt("Qual é a sua idade?")

const endereço= prompt("Qual é o seu endereço")

const profissao= prompt("Qual é a sua profissão")

    
console.log ("Eu sou " + nome + ", tenho" + idade + "anos, moro em " + endereço + "e sou" + profissao)
}

informacoesPessoais()


/*

RESOLVI VER A AULA E OUTRAS PESQUISAS QUE ESTOU FAZENDO DO CONTEUDO
PARA FAZER UM RESUMO E ENTENDER MELHOR E VOU FAZER O RESTO DOS EXERCÍCIOS DEPOIS QUE TIVER ACABADO

