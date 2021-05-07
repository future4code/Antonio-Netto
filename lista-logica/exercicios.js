// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   const altura1 = prompt('Diga qual é a altura do retângulo')
   const largura1 = prompt('Diga qual é a largura do retângulo')

   console.log(Number(altura1) * Number(largura1))
}

calculaAreaRetangulo()

//Exercício 2

function imprimeIdade() {
   const anoAtual = prompt('Em que ano estamos agora?')
   const anoNascimento = prompt('Em que ano você nasceu?')

   console.log(Number(anoAtual) - Number(anoNascimento))
}

imprimeIdade()

//Exercício 3

function calculaIMC(peso, altura) {

   return peso / (altura * altura)

}

calculaIMC(80, 1.8)


//Exercício 4

function imprimeInformacoesUsuario() {

   const nome = prompt('Qual é o seu nome?')
   const idade = prompt('Quantos anos você tem?')
   const email = prompt('Qual é o seu email?')

   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

imprimeInformacoesUsuario()

//Exercício 5

function imprimeTresCoresFavoritas() {
   
   const cor1 = prompt('Qual é a sua cor favorita?')
   const cor2 = prompt('Qual é a sua segunda cor favorita?')
   const cor3 = prompt('Qual é a sua terceira cor favorita?')

   const listaDeCores = [cor1, cor2, cor3]

   console.log(listaDeCores)
     
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   
   return string.toUpperCase()
}

//Exercício 7 Escreva uma função que recebe o custo de um espetáculo de teatro e o valor de cada ingresso (considere que todos os ingressos têm o mesmo preço) e retorna quantos ingressos precisam ser vendidos para que o espetáculo não dê prejuízo.

function calculaIngressosEspetaculo(custo, valorIngresso) {

    return custo / valorIngresso
}

calculaIngressosEspetaculo()

// Exercício 8  - **PULEI!**

function checaStringsMesmoTamanho(string1, string2) {

   return 
  
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   
   return array[0]
}

retornaPrimeiroElemento()

// Exercício 10

function retornaUltimoElemento(array) {
   
   return array[array.length - 1]
}

retornaUltimoElemento()

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   
   const primeiroValor = array[0]
   const ultimoValor = array[array.length - 1]

   array[0] = ultimoValor 
   array[array.length - 1] = primeiroValor

   return array
}

trocaPrimeiroEUltimo()

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {

}  

// Exercício 13

function checaRenovacaoRG() {
 
}

// Exercício 1

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
}